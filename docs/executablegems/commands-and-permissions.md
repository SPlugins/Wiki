---
sidebar_position: 2
description: >-
  Every /eg command of ExecutableGems and its permissions: give gems, socket
  them by command, place forges, reload, and the effects used by activators.
---

# ⌨️ Commands & Permissions

The main command is `/eg`. `/executablegems` and `/gems` are aliases. Every command can be run from the console, except those marked *in game only*.

On this page, `<value>` is required and `[value]` is optional.

## Permissions

| Permission | Default | What it does |
|---|---|---|
| `executablegems.admin` | OP | Every `/eg` command, except `/eg codex` for yourself and `/eg cinematic`, which are open to everyone |
| `executablegems.forge.remove` | OP | Pick up a forge with sneak + left click |
| `executablegems.forge.bypass` | OP | Work on an item another player laid on a forge |
| `ei.item.*` | OP | **From ExecutableItems. Every player needs it for the gems to work.** |

:::danger
**Give your players the permission `ei.item.*`**

A gem runs through ExecutableItems, which checks the permission of the item. A player who is not OP needs **`ei.item.*`**, or every gem shows "You do not have the permission to use eg_..." and does nothing.

With LuckPerms: `/lp group default permission set ei.item.* true`

Without a permission plugin, put this in the `permissions.yml` of your server and restart:

```yaml
ei.item.*:
  default: true
```
:::

Players need no other permission to socket gems, use a forge, buy from the jeweller or read the Codex.

## Give items

| Command | What it does |
|---|---|
| `/eg give <player> <gem> [level] [amount]` | Gives a gem. Level and amount default to 1. |
| `/eg tool <player> <tool> [amount]` | Gives `socket_drill`, `gem_extractor`, `gem_forge`, `rough_gem` (Unidentified Gem) or `gem_codex`. |

## Change the item a player holds

These commands act on the item in the player's **main hand**.

| Command | What it does |
|---|---|
| `/eg apply <player> <gem> [level]` | Sockets a gem. It cannot fail, and drills a socket if there is no free one. The sockets limit still applies to the drill. |
| `/eg remove <player> [gem]` | Removes one gem, or all gems if none is named. |
| `/eg level <player> <gem> <n\|+n\|-n>` | Sets or changes the level of a socketed gem. |
| `/eg xp <player> <gem> <xp>` | Sets the XP of a socketed gem. |
| `/eg sockets <player> <n>` | Sets the number of sockets. Going lower deletes the last sockets and their gems. |

## Forges

| Command | What it does |
|---|---|
| `/eg forge` | Places a forge at your feet. *In game only.* |
| `/eg forge remove` | Removes the nearest forge within 6 blocks. *In game only.* |

Players can also place a forge with the **Gem Forge** item. See [The Gem Forge](player-guide/the-gem-forge.md).

## Content

| Command | What it does |
|---|---|
| `/eg new <category> <id> [cut] [#colour]` | Writes `gems/<category>/<id>.yml` from a fully commented template, then reloads. See [Create your first gem](questions-or-guides/tutorials/your-first-gem.md). |
| `/eg list` | Lists every category, gem and runeword, with the weights. |
| `/eg reload` | Reloads the config, the gems, the runewords and the forges. New native enchantments need a restart. |
| `/eg discoveries reset [runeword]` | Hides the runewords again in the Codex (one, or all). |

## For players

| Command | What it does |
|---|---|
| `/eg codex` | Opens the Codex. |
| `/eg codex <player> [category\|gem] [page]` | Opens the Codex for a player, on a category or a gem. Needs `executablegems.admin`, except for yourself. |
| `/eg cinematic [on\|off]` | Toggles the camera that turns around the weapon during an awakening. |

## For testing

| Command | What it does |
|---|---|
| `/eg dummy` | Spawns a training dummy in front of you. It never dies and shows every hit as a floating number. *In game only with no arguments.* |
| `/eg dummy <x> <y> <z> [yaw]` | Spawns one at a position (console). |
| `/eg luck <player> [on\|off]` | Every chance roll of this player succeeds. Very useful to test a gem. |
| `/eg forcefail <player>` | The next socketing of this player fails. |

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
| `eg drop <tool\|gem:id:level> <world> <x> <y> <z>` | Drops an item with its beam at a block |
| `eg rain <target uuid> <arrows> <height> [shooter]` | A rain of arrows that nobody can pick up |
| `eg star <player> <radius> <damage>` | A falling star on the nearest enemy |

An `<entity>` is a player name or a UUID, such as `%player%` or `%entity_uuid%`.
