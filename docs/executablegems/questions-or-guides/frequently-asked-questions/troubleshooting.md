---
sidebar_position: 3
description: Solve common ExecutableGems problems - gems shown as amethyst shards, a gem that doesn't trigger, errors in the console and messages in game.
---

# Troubleshooting

## "You are not allowed to use ..."

The player's group has the permission `executablegems.use.<gem>` set to false (everyone has it by default). OPs have every permission, which is why a gem can work for you and not for your players. See [Permissions](how-to-install-correctly.md#permissions). You can change this message, or turn it off with `''`, with the text `gem.not-allowed` of the [language file](../../configurations/general-configuration.md#language).

## "You are not allowed to use the jeweller's shop" (or the Gem Forge, the Socket Drill...)

The player's group has a `executablegems.feature.<feature>` permission set to false (everyone has them by default). See [Close a feature to a group](../../commands-and-permissions.md#close-a-feature-to-a-group). The text is `gem.feature.not-allowed` of the [language file](../../configurations/general-configuration.md#language).

## "ExecutableGems needs ExecutableItems ... or newer"

```
ExecutableGems needs ExecutableItems ... or newer (this server: ExecutableItems ...): update ExecutableItems, then restart. Disabling.
```

Your ExecutableItems is too old for this ExecutableGems, so ExecutableGems did not start. Update ExecutableItems and SCore, then restart the server.

## "You do not have the permission to use eg_..."

Your ExecutableItems is too old for this ExecutableGems: update ExecutableItems.

## My gem is not loaded

Run `/eg check`. It shows again, without reloading, what the last load found wrong in the gem, runeword and category files. `/eg check <id>` shows the problems of one file.

A file with a YAML error is not loaded at all. The line gives the place of the error:

```
[ExecutableGems] Gem blood_opal (gems/custom/blood_opal.yml) NOT LOADED: YAML error at line 12, column 5: mapping values are not allowed here. Check the indentation (spaces, never tabs), the quotes and the colons around that line
```

Open the file at that line. The usual causes are a tab instead of spaces, a line that is not aligned with the ones around it, or a text with a `:` or a `#` that has no quotes.

A file is also not loaded when its name has a space, an accent or another sign that can't be part of an id: name it with lowercase letters, digits and `_`.

## Gems look like amethyst shards

The resource pack is missing. Either the player declined it, or it could not be sent. Check `selfHostPackIp` in [How to install correctly](how-to-install-correctly.md#the-resource-pack).

With ItemsAdder, Nexo, Oraxen, CraftEngine, your own pack or a proxy, see [The resource pack on your server](resource-pack.md). `/eg pack info` shows how the pack is sent.

## The Codex or the confirmation window has no drawing

Same cause. Without a pack, set `ui.codex` and `ui.confirm` to `dialog`.

## A ◆ instead of a gem icon in the texts

The plugin found no image for the gem's icon. This happens with a model of your own pack that the plugin can't read. Set `icon:` in the gem, see [The icon in texts](../tutorials/your-own-3d-model.md#the-icon-in-texts). `/eg pack info` lists these gems.

## A black and magenta square instead of a gem icon

The `icon:` of the gem points to a texture that doesn't exist. Check its path, see [The icon in texts](../tutorials/your-own-3d-model.md#the-icon-in-texts). You can also turn the icons off with `ui.icons: false`.

## My gem doesn't trigger

Work through this list:

1. **Is the player OP?** If it works only for OPs, see the permission above.
2. **Run `/eg check <id>`**, or read the answer of `/eg reload`. Mistakes are listed with the gem and its file, in the chat and in the console. The errors of ExecutableItems on the activators come on the gem's line, as `activators: ...`. A part the plugin can't read is switched off until it is fixed: see [What a mistake does](../../configurations/gem-configuration.md#what-a-mistake-does).
3. **Remove the luck factor:** `/eg luck YourName on`. If it now works, the chance was just low.
4. **Check `detailedSlots`:** `[-1]` for the main hand, `[36, 37, 38, 39]` for armour.
5. **Check the trigger:** a [`LOOP`](../../configurations/activators-in-gems.md#loop-activators) only runs while the item is in a slot of its `detailedSlots`, every `delay` seconds. For a permanent stat bonus, use `attributes`.
6. **Check the target:** in `MOB_AROUND` commands, use `%around_target_uuid%`.
7. **Remove `silenceOutput: true`** for a moment, to see the messages of the commands.
8. **Read the console while you use the gem.** If an activator fails, the console names the gem, the activator and its event: `Gem blood_opal: activator 'bleed' (PLAYER_HIT_ENTITY) failed with ...`.

## The gem works, but with the wrong numbers

In activators a value is `%gem_damage%`. In the description it is `%damage%`.

## Messages in game

| Message | Meaning |
|---|---|
| This gem can't go on this item | The item is not in the gem's `applicable-on`. |
| No free socket: use a Socket Drill | All the sockets are full, or the item has none. |
| This item can't hold more sockets | `sockets.max` is reached. |
| This gem is already socketed | `max-per-item` is reached. |
| Only one gem of this kind per item | Another gem of the same `exclusive-group` is in the item. |
| Incompatible with a gem already socketed | See `incompatible-with`. |
| Nothing to extract | The item has no gem, or the gem has `removable: false`. |
| ...'s weapon lies on this forge: only they can work on it | Wait for that player, or use the permission `executablegems.forge.bypass`. |
| Lay a weapon on the forge first (or sneak to fuse 3 gems) | The forge is empty. |
| Fusion needs 3 identical gems | Same gem and same level. Gems with different XP don't stack. |
| You already have 1 forge(s) placed, your limit is 1 | `forge.max-per-player` is reached. Pick a forge up with sneak + left click, or raise the limit: see [the forge settings](../../configurations/general-configuration.md#forge). |
| You are not allowed to place a forge | `forge.max-per-player` is `0` and the player has no `executablegems.forge.limit` permission. |
| Too close to another forge | `forge.min-distance` blocks are needed between two forges. |
| ... placed this forge: only they can pick it up | Only the player who placed a forge, or a player with `executablegems.forge.remove`, picks it up. |
| ... is disabled on this server: it stays in the item | A Gem Extractor was used on a gem whose file was removed or switched off. The gem is kept in the item and works again when the file is back. |

## A socket shows "Unknown gem"

The item holds a gem that the server no longer has: its file was deleted, renamed or switched off with `enabled: false`. The socket stays taken, the gem does nothing, and a Gem Extractor leaves it where it is. Put the file back and run `/eg reload`: the gem works again, with its level and XP.

## A ware is missing from the jeweller's shop

A ware with a mistake in `jeweller-shop.wares` is not sold, and neither is a ware with `money` while Vault or an economy plugin is missing. Players don't see it. Open the shop as an admin: a barrier stands in its place, with the reason. The console names it too, at the start and at `/eg reload`.

## Monsters drop no gem

Check these settings of `config.yml`, in the [loot section](../../configurations/general-configuration.md#loot):

- `loot.worlds`: the world may be excluded.
- `loot.mobs.blocked-spawn-reasons`: by default, monsters from a spawner, a spawn egg or a nether portal drop nothing.
- `loot.mobs.chance`: 1% by default.

## A forge disappeared with its world

The forges of a world that is not loaded wait in `forges.yml` and come back with the world (on Paper: Folia never loads or unloads a world while it runs). `/eg forge list` shows them with `(world not loaded)`.

If the console says that `forges.yml` could not be read, the plugin has set the file aside as `forges.yml.broken-<time>` and tells you how to get its content back. `forges.yml.bak` is the last file that was read without error.

## I can't drag a gem onto an item

- It doesn't work in **creative** mode. Hold the gem and the item in your two hands, or use a forge.
- The item must be alone in its slot, not in a stack.

## The server says a gem has two files

```
Two gems have the id blood_opal: ... replaces the first one
```

The id is the file name, across all the folders. Rename one of the two.

## My new enchantment doesn't exist

Native enchantments need a **restart**, not `/eg reload`. After the restart, the console lists them:

```
[ExecutableGems] Native enchantments registered: 3 (aftershock, deep_harvest, soul_reaper)
```

If yours is missing, read the lines above it: the console says what is wrong in the file. `max-level`, `name`, `color` and the keys of `native-enchantment` also wait for a restart when you change them. See [Create your own enchantment](../tutorials/native-enchantments.md).

## Still stuck?

Ask on the [Discord](https://discord.com/invite/TRmSwJaYNv) with your gem's file and the console lines from your last `/eg reload` (or the answer of `/eg check`).
