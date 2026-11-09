---
sidebar_position: 3
description: Solve common ExecutableGems problems - gems shown as amethyst shards, a gem that doesn't trigger, errors in the console and messages in game.
---

# Troubleshooting

## "You do not have the permission to use eg_..."

The player needs the permission `ei.item.*`. OPs have it, which is why a gem can work for you and not for your players. See [Permissions](how-to-install-correctly.md#permissions).

## Gems look like amethyst shards

The resource pack is missing. Either the player declined it, or it could not be sent. Check `selfHostPackIp` in [How to install correctly](how-to-install-correctly.md#the-resource-pack).

## The Codex or the confirmation window has no drawing

Same cause. Without a pack, set `ui.codex` and `ui.confirm` to `dialog`.

## A small square instead of a gem icon in the texts

Your gem uses a model of its own without the icon texture. See [Use your own 3D model](../tutorials/your-own-3d-model.md). You can also turn the icons off with `ui.icons: false`.

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
