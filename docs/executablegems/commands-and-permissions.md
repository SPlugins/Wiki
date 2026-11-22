---
sidebar_position: 2
description: >-
  Every /eg command of ExecutableGems and its permissions: give gems, write new
  gems, enchantments and runewords, place and list forges, check the files,
  reload, and the effects used by activators.
---

# ⌨️ Commands & Permissions

The main command is `/eg`. `/executablegems` and `/gems` are aliases. Every command can be run from the console, except those marked *in game only*.

On this page, `<value>` is required and `[value]` is optional.

`/eg help`, or `/eg` alone, lists the commands you may use, each with its arguments and what it does. A command that misses a word answers with its usage, and the commands that change an item say what they did, or that nothing was done.

## Permissions

| Permission | Default | What it does |
|---|---|---|
| `executablegems.admin` | OP | Every `/eg` command, except `/eg codex` for yourself, `/eg cinematic` and `/eg help`, which are open to everyone |
| `executablegems.use.<gem>` | Everyone | Use this gem. `executablegems.use.*` holds every gem and runeword |
| `executablegems.use.runeword.<id>` | Everyone | Awaken this runeword |
| `executablegems.feature.forge` | Everyone | Use a Gem Forge: lay an item, socket, fuse, upgrade |
| `executablegems.feature.shop` | Everyone | Buy from the jeweller's shop |
| `executablegems.feature.appraisal` | Everyone | Have Unidentified Gems appraised by the jeweller |
| `executablegems.feature.drill` | Everyone | Use a Socket Drill |
| `executablegems.feature.extractor` | Everyone | Use a Gem Extractor |
| `executablegems.feature.hold-socket` | Everyone | Socket a gem by holding right click |
| `executablegems.sockets.max.<n>` | Nobody | A Socket Drill opens up to `n` sockets for this group, when `n` is above `sockets.max` of `config.yml`. The highest `n` wins |
| `executablegems.forge.limit.<n>` | Nobody | The group may have `n` forges placed at once, when `n` is above `forge.max-per-player` of `config.yml`. The highest `n` wins |
| `executablegems.forge.limit.unlimited` | OP | No limit on the forges placed |
| `executablegems.forge.remove` | OP | Pick up anybody's forge with sneak + left click, the server's forges included |
| `executablegems.forge.bypass` | OP | Work on an item another player laid on a forge |

`executablegems.feature.*` holds the six `feature` permissions.

:::info
**Players need no permission to use the gems**

Every gem has the permission `executablegems.use.<gem>` and every runeword `executablegems.use.runeword.<id>`. Everyone has them by default, so you have nothing to set.

To forbid a gem to a group, set its permission to false. With LuckPerms: `/lp group default permission set executablegems.use.vampire false`
:::

Players need no other permission to socket gems, use a forge, buy from the jeweller or read the Codex.

### Close a feature to a group

Everyone has the `executablegems.feature.*` permissions by default. Set one to false for a group to close that feature to it. With LuckPerms:

```
/lp group default permission set executablegems.feature.shop false
```

A player who is not allowed sees `You are not allowed to use the jeweller's shop.` in the action bar. This text is `gem.feature.not-allowed` in the [language file](configurations/general-configuration.md#language): set it to `''` to say nothing.

A player whose group loses `executablegems.feature.forge` can still take back, with an empty hand, an item of theirs that lies on a forge.

### More sockets or more forges for a group

```
/lp group vip permission set executablegems.sockets.max.5 true
/lp group vip permission set executablegems.forge.limit.3 true
```

With these two lines, a Socket Drill opens up to 5 sockets for the group `vip`, and its players may have 3 forges placed at once. These permissions only raise the numbers of `config.yml` (`sockets.max` and `forge.max-per-player`), they never lower them.

## Give items

| Command | What it does |
|---|---|
| `/eg give <player> <gem> [level] [amount]` | Gives a gem. Level and amount default to 1. For a [native enchantment](questions-or-guides/tutorials/native-enchantments.md), it gives its enchanted book. |
| `/eg tool <player> <tool> [amount]` | Gives `socket_drill`, `gem_extractor`, `gem_forge`, `rough_gem` (Unidentified Gem) or `gem_codex`. |

If you mistype a gem id, the answer suggests the closest one.

## Change the item a player holds

These commands act on the item in the player's **main hand**.

| Command | What it does |
|---|---|
| `/eg apply <player> <gem> [level]` | Sockets a gem. It cannot fail, and drills a socket if there is no free one. The sockets limit still applies to the drill. For a native enchantment, it puts the enchantment on the item. |
| `/eg remove <player> [gem]` | Removes one gem, or all gems if none is named. The gems are not given back. |
| `/eg level <player> <gem> <n\|+n\|-n>` | Sets or changes the level of a socketed gem. Its XP goes back to 0. |
| `/eg sockets <player> <n>` | Sets the number of sockets, from 0 to 9. Going lower deletes the last sockets and their gems. |

## Forges

A forge placed by command is a **server forge**: it belongs to nobody, it doesn't count in any player's limit, and only players with `executablegems.forge.remove` can pick it up.

| Command | What it does |
|---|---|
| `/eg forge` or `/eg forge place` | Places a server forge where you stand. Refused where you can't build (protection plugins decide) and closer to another forge than `forge.min-distance`. *In game only.* |
| `/eg forge force` | Places a server forge where you stand and skips both checks. *In game only.* |
| `/eg forge remove` | Removes the nearest forge within 6 blocks. *In game only.* |
| `/eg forge remove <id>` | Removes the forge with this id, wherever it is. |
| `/eg forge list [player\|server] [page]` | Lists the forges: id, world, position, level and who placed it. In game, click `[teleport]` to go there. Add a player name to see their forges, or `server` for the server's. |
| `/eg forge stats` | How many forges are up, shown and animated, and what they cost the server. |

A weapon lying on a forge that gets removed goes back to its owner, at their next join if they are offline.

Players place their own forge with the **Gem Forge** item. See [The Gem Forge](player-guide/the-gem-forge.md) and the [forge settings](configurations/general-configuration.md#forge).

## Content

| Command | What it does |
|---|---|
| `/eg new <category> <id> [cut] [#colour]` | Writes the gem `gems/<category>/<id>.yml` from a fully commented template, then reloads. See [Create your first gem](questions-or-guides/tutorials/your-first-gem.md). |
| `/eg new enchantment <id> [#colour]` | Writes the native enchantment `gems/enchantments/<id>.yml`. It exists after a restart. See [Create your own enchantment](questions-or-guides/tutorials/native-enchantments.md). |
| `/eg new runeword <id> <gem> <gem> [gem...]` | Writes the runeword `runewords/<id>.yml` made of these gems, in this order. See [Create a runeword](questions-or-guides/tutorials/runeword.md). |
| `/eg new category <id> [#colour]` | Writes `gems/<id>/category.yml`. See [Create a category](questions-or-guides/tutorials/your-own-category.md). |
| `/eg list` | Lists every category, gem and runeword, with the weights. |
| `/eg check [id]` | Shows again what the last load found wrong in the files, without reloading. With an id, only the problems of that gem, runeword or category. |
| `/eg reload` | Reads `config.yml`, the language files, the gems, the runewords and the forges again. It answers with a summary and the first problems found, and says what waits for a restart (native enchantments). |
| `/eg defaults [list \| install <id\|new\|all> [force] \| diff <id>]` | Compares the gems and runewords shipped with the plugin with your files, and installs the ones you choose. See [How to update correctly](questions-or-guides/frequently-asked-questions/how-to-update-correctly.md). |
| `/eg discoveries reset [runeword]` | Hides the runewords again in the Codex (one, or all). |

An id takes lowercase letters, digits and `_`. If you leave the colour out, the plugin picks one.

## Resource pack

See [The resource pack on your server](questions-or-guides/frequently-asked-questions/resource-pack.md).

| Command | What it does |
|---|---|
| `/eg pack info` | How the pack is sent, its size and versions, and the gems that show a ◆ in texts. |
| `/eg pack refresh` | Reads the `resource-pack` settings again and sends the pack again to the players online. |
| `/eg pack export <zip\|folder\|Nexo\|Oraxen\|ItemsAdder\|CraftEngine>` | Writes a copy of the EG pack where you, or your pack plugin, can merge it. |
| `/eg pack merge <your pack.zip> [new.zip]` | Writes your pack with the EG pack merged in, and lists the conflicting files. Your zip doesn't change. |

## For players

| Command | What it does |
|---|---|
| `/eg codex` | Opens the Codex. |
| `/eg codex <player> [category\|gem] [page]` | Opens the Codex for a player, on a category or a gem. Needs `executablegems.admin`, except for yourself. |
| `/eg cinematic [on\|off]` | Toggles the camera that turns around the weapon during an awakening. |
| `/eg help` | Lists the commands the player may use. |

Without `executablegems.admin`, the tab completion only offers `codex`, `cinematic` and `help`: players never see the gem ids or the names of the other players there.

## For testing

| Command | What it does |
|---|---|
| `/eg dummy` | Spawns a training dummy in front of you. It never dies and shows every hit as a floating number. *In game only with no arguments.* |
| `/eg dummy <x> <y> <z> [yaw]` | Spawns one at a position (console). |
| `/eg dummy remove` | Removes the nearest training dummy within 16 blocks. |
| `/eg dummy remove all` | Removes the training dummies of every loaded chunk. From the console, `/eg dummy remove` does the same. |
| `/eg luck <player> [on\|off]` | Every chance roll of this player succeeds. Very useful to test a gem. It ends when the player leaves. |
| `/eg luck` | Lists the players who have it. |
| `/eg forcefail <player> [on\|off]` | The next socketing of this player at a forge fails. It ends when the player leaves. |
| `/eg xp <player> <gem> <xp>` | Sets the XP of a gem socketed in the item the player holds. |
| `/eg respawn <player>` | Respawns a dead player. |

Previews that change nothing on the player's items:

| Command | Shows |
|---|---|
| `/eg fx confirm <player> <gem> [level]` | The socketing confirmation for the held item |
| `/eg fx totem <player> <gem> [level]` | The full-screen reveal of a gem |
| `/eg fx post <player> <socket\|shatter\|awaken> [gem or runeword]` | A full-screen effect (26.3+) |
| `/eg fx awaken <player> <runeword>` | The world event of an awakening |
| `/eg fx toast <player> <gem> <tier>` | The tier-up toast |
| `/eg fx loot <player> <gem\|rough> [level] [distance]` | A dropped gem with its beam of light |
| `/eg fx inspect <player>` | The inspect view of the held item |
| `/eg fx shop <player>` | The shop of the nearest forge |
| `/eg fx appraise <player> [spin]` | The appraisal of the nearest forge |
| `/eg fx upgrade <player> [do]` | The upgrade menu of the nearest forge (`do` upgrades it, and the player pays) |
| `/eg fx say <player> <line> [cheer\|dismay\|awe]` | A line of the jeweller of the nearest forge |

## For your activators

Use these inside the commands of a gem or a runeword. See [Activators in gems](configurations/activators-in-gems.md).

| Command | What it does |
|---|---|
| `eg fx beam <from> <to> <#hex> [streams]` | A beam between two entities |
| `eg fx ring <entity> <radius> <#hex>` | A ring on the ground |
| `eg fx burst <entity> <#hex> [count]` | A burst of particles |
| `eg fx spiral <entity> <#hex> [ticks]` | A spiral around the entity |
| `eg fx shockwave <entity> <radius> <#hex>` | An expanding shockwave |
| `eg sweep <player> <seconds> [offhand]` | The vanilla cooldown animation on the held item |
| `eg drop <rough_gem\|tool\|gem:id:level> <world> <x> <y> <z>` | Drops an item with its beam at a block |
| `eg rain <target uuid> <arrows> <height> [shooter]` | A rain of arrows that nobody can pick up |
| `eg star <player> <radius> <damage>` | A falling star on the nearest enemy |

An `<entity>` is a player name or a UUID, such as `%player%` or `%entity_uuid%`.
