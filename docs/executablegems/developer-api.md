---
sidebar_position: 7
description: >-
  The developer API of ExecutableGems: the ExecutableGemsAPI facade to read the
  gems of an item and give gems, and ten Bukkit events for socketing,
  extraction, fusion, level ups, runewords, appraisal and drops.
---

# 🧑‍💻 Developer API

Other plugins can read the gems of an item, give gems, and listen to what players do with them. This page is for developers. To use gems from a quest or a shop plugin without code, see [Reward players with gems](questions-or-guides/tutorials/rewards-from-other-plugins.md) and the [placeholders](placeholders.md).

The API is the package `com.ssomar.executablegems.api`:

- **`ExecutableGemsAPI`**: static methods to read items and give gems.
- **Ten Bukkit events**: what happens to the gems.

:::warning
Only the package `com.ssomar.executablegems.api` is the API. The other packages of the plugin change without notice.
:::

## Setup

1. The API classes are inside the ExecutableGems jar. Add that jar to your project as a **compile-only** dependency (Maven: scope `provided`, Gradle: `compileOnly`). Don't shade it into your plugin.
2. Declare the dependency in your `plugin.yml`, so that your plugin loads after ExecutableGems:

```yaml
depend: [ExecutableGems]
```

Use `softdepend: [ExecutableGems]` instead if your plugin must also work without it, and then check that ExecutableGems is enabled before you call the API.

3. Call the API once ExecutableGems is enabled: from your `onEnable` on, never from a static initialiser.

## A listener

```java
package com.example.gemquests;

import com.ssomar.executablegems.api.ExecutableGemsAPI;
import com.ssomar.executablegems.api.GemDropEvent;
import com.ssomar.executablegems.api.GemSocketEvent;
import com.ssomar.executablegems.api.GemSocketedEvent;
import com.ssomar.executablegems.api.RunewordAwakenedEvent;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.plugin.java.JavaPlugin;

public final class GemQuests extends JavaPlugin implements Listener {

    @Override
    public void onEnable() {
        getServer().getPluginManager().registerEvents(this, this);
    }

    // Before the socketing: only players with a permission may socket the Vampire Rune.
    @EventHandler(ignoreCancelled = true)
    public void onSocket(GemSocketEvent e) {
        if (e.getGemId().equals("vampire") && !e.getPlayer().hasPermission("myquest.vampire")) {
            e.setCancelled(true);
            e.getPlayer().sendMessage("Finish the quest of the Blood Altar first.");
        }
    }

    // After the socketing: the gem is in the item, shattered, or slipped.
    @EventHandler
    public void onSocketed(GemSocketedEvent e) {
        if (e.getOutcome() != GemSocketedEvent.Outcome.SUCCESS) return;
        int gems = ExecutableGemsAPI.gems(e.getItem()).size();
        e.getPlayer().sendMessage("Your item now holds " + gems + " gem(s).");
    }

    // A runeword awakened: give a reward.
    @EventHandler
    public void onAwakened(RunewordAwakenedEvent e) {
        getLogger().info(e.getPlayer().getName() + " awakened " + e.getRunewordId());
        ExecutableGemsAPI.giveGem(e.getPlayer(), "empower", 1, 1);
    }

    // No gem from the monsters of the world "arena".
    @EventHandler
    public void onDrop(GemDropEvent e) {
        if (e.getCause() == GemDropEvent.Cause.MOB && e.getLocation().getWorld().getName().equals("arena")) e.setCancelled(true);
    }
}
```

## The events

All the events are synchronous. They are fired on the server thread on Paper, and on the thread that owns the player on Folia, so you can use the player and their inventory in your listener. The items they carry are **copies**: changing them changes nothing in the game.

| Event | When | Cancellable |
|---|---|---|
| `GemSocketEvent` | A player is about to socket a gem, before the chance is rolled and before anything is taken. At a forge: when the ritual starts. | Yes |
| `GemSocketedEvent` | The attempt is over. `getOutcome()` is `SUCCESS`, `SHATTERED` (the gem is destroyed) or `SLIPPED` (it failed and the player keeps the gem). | No |
| `GemExtractEvent` | A player is about to take a gem out with a Gem Extractor. | Yes |
| `GemFuseEvent` | A player is about to fuse 3 identical gems at a forge. | Yes |
| `GemLevelUpEvent` | A socketed gem gained a level, by XP or by command. Fired once per level. | No |
| `GemTierUpEvent` | A socketed gem reached a new tier. Fired after the `GemLevelUpEvent` of that level. | No |
| `RunewordAwakenEvent` | The gem a player is about to socket would complete a runeword. Fired right after a `GemSocketEvent` that was not cancelled. | Yes |
| `RunewordAwakenedEvent` | A runeword awakened on a player's item. | No |
| `GemAppraiseEvent` | The jeweller appraised an Unidentified Gem: the stone is spent and the gem inside is decided. Fired when the reel starts. | No |
| `GemDropEvent` | A gem or an Unidentified Gem is about to be added to the drops of a monster, or to the loot of a structure chest. | Yes |

When you cancel an event, nothing is taken from the player. ExecutableGems says nothing to them: tell the player why yourself.

What each event gives you:

| Event | Getters |
|---|---|
| `GemSocketEvent` | `getPlayer()`, `getItem()`, `getGemId()`, `getLevel()`, `getChance()` (in %, 0 to 100), `getSocket()` (from 0), `getSource()` |
| `GemSocketedEvent` | The same, with `getOutcome()`. `getItem()` is the item after the attempt. |
| `GemExtractEvent` | `getPlayer()`, `getItem()`, `getGemId()`, `getLevel()`, `getXp()`, `getSocket()`, `getSource()` |
| `GemFuseEvent` | `getPlayer()`, `getGemId()`, `getLevel()` (of the three gems), `getResultLevel()` |
| `GemLevelUpEvent` | `getPlayer()`, `getItem()`, `getGemId()`, `getOldLevel()`, `getNewLevel()` |
| `GemTierUpEvent` | `getPlayer()`, `getItem()`, `getGemId()`, `getLevel()`, `getOldTier()`, `getNewTier()` (1 Chipped to 4 Radiant) |
| `RunewordAwakenEvent` | `getPlayer()`, `getItem()` (as it would be with the runeword), `getRunewordId()`, `getSource()` |
| `RunewordAwakenedEvent` | `getPlayer()`, `getItem()`, `getRunewordId()` |
| `GemAppraiseEvent` | `getPlayer()`, `getResult()` (the gem found), `getGemId()`, `getLevel()`, `getRarity()` (`common`, `rare`, `epic`, `legendary`...), `isPreview()` (a free spin started by an admin) |
| `GemDropEvent` | `getCause()` (`MOB` or `CHEST`), `getPlayer()`, `getEntity()`, `getLocation()`, `getItem()`, `setItem(...)`, `isUnidentified()` |

`getSource()` is a `SocketSource`: `INVENTORY` (drag and drop), `HOLD` (hold to socket) or `FORGE`.

In a `GemDropEvent`, `getPlayer()` is the killer of the monster or the player who opened the chest, and can be `null` (a chest emptied by a hopper). `getEntity()` is `null` for a chest. `setItem(...)` replaces what drops, and `setItem(null)` drops nothing.

## ExecutableGemsAPI

Every method is static.

### Read an item

| Method | Returns |
|---|---|
| `sockets(ItemStack item)` | `List<SocketInfo>`: every socket of the item, the empty ones too |
| `gems(ItemStack item)` | `List<SocketInfo>`: the gems socketed in the item, in socket order |
| `gemLevel(ItemStack item, String gemId)` | The level of this gem in the item, `0` when it is not there |
| `hasGem(ItemStack item, String gemId)` | `true` when the item holds this gem |
| `runewordId(ItemStack item)` | The id of the runeword awake on the item, or `null` |
| `isGem(ItemStack item)` | `true` when the item is a gem (the gem itself, not an item with gems in it) |
| `gemId(ItemStack item)` | The id of the gem this item is, or `null` |
| `gemItemLevel(ItemStack item)` | The level of a gem item |
| `isTool(ItemStack item)` | `true` for a Socket Drill, Gem Extractor, Gem Forge, Unidentified Gem or Gem Codex |
| `toolId(ItemStack item)` | `socket_drill`, `gem_extractor`, `gem_forge`, `rough_gem` or `gem_codex`, or `null` |

These reads are light and may be called often. Call them where you may read the item: the server thread on Paper, the thread that owns the player or the container on Folia.

A `SocketInfo` has `index()` (from 0), `type()`, `gemId()` (`null` when empty), `level()`, `xp()` and `isEmpty()`.

### Create and give

| Method | Does |
|---|---|
| `createGem(String gemId, int level, int amount)` | A gem item, or `null` when no gem has this id |
| `createTool(String toolId, int amount)` | A tool item, or `null` when the id is not a tool |
| `giveGem(Player player, String gemId, int level, int amount)` | Gives gems to a player: into the inventory, at their feet when it is full, at their next join when they are offline or dead. `false` when no gem has this id |

### Players and definitions

| Method | Returns |
|---|---|
| `maxSockets(Player player)` | The sockets a Socket Drill may open for this player |
| `gem(String id)` | A `GemInfo`, or `null` |
| `gems()` | Every loaded gem |
| `runeword(String id)` | A `RunewordInfo`, or `null` |
| `runewords()` | Every loaded runeword |

A `GemInfo` has `id()`, `name()` (MiniMessage, as written in the file), `plainName()`, `category()`, `socketType()`, `maxLevel()`, `tierLevels()`, `color()`, `enabled()` and `tier(int level)`. A `RunewordInfo` has `id()`, `name()`, `plainName()` and `sequence()`.
