---
sidebar_position: 3
description: Solve common ExecutableGems problems - gems shown as amethyst shards, a gem that doesn't trigger, errors in the console and messages in game.
---

# Troubleshooting

## "You are not allowed to use ..."

The player's group has the permission `executablegems.use.<gem>` set to false (everyone has it by default). OPs have every permission, which is why a gem can work for you and not for your players. See [Permissions](how-to-install-correctly.md#permissions). You can change this message, or turn it off with `''`, with the text `gem.not-allowed` of the [language file](../../configurations/general-configuration.md#language).

## "You do not have the permission to use eg_..."

Your ExecutableItems is too old for this ExecutableGems: update ExecutableItems.

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
2. **Read the console** after `/eg reload`. Mistakes in the file are listed with the gem's id. Errors from ExecutableItems are under `eg_<id>_<level>`.
3. **Remove the luck factor:** `/eg luck YourName on`. If it now works, the chance was just low.
4. **Check `detailedSlots`:** `[-1]` for the main hand, `[36, 37, 38, 39]` for armour.
5. **Check the trigger:** `LOOP` does not run for gems. Use `attributes` for a permanent bonus.
6. **Check the target:** in `MOB_AROUND` commands, use `%around_target_uuid%`.
7. **Remove `silenceOutput: true`** for a moment, to see the messages of the commands.

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

## I can't drag a gem onto an item

- It doesn't work in **creative** mode. Hold the gem and the item in your two hands, or use a forge.
- The item must be alone in its slot, not in a stack.

## The server says a gem has two files

```
Two gems have the id blood_opal: ... replaces the first one
```

The id is the file name, across all the folders. Rename one of the two.

## My new enchantment doesn't exist

Native enchantments need a **restart**, not `/eg reload`.

## Still stuck?

Ask on the [Discord](https://discord.com/invite/TRmSwJaYNv) with your gem's file and the console lines from your last `/eg reload`.
