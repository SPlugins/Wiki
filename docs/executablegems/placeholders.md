---
sidebar_position: 2.5
description: >-
  The PlaceholderAPI placeholders of ExecutableGems: the sockets and gems of
  the held item or of an armour piece, their levels, tiers and XP, the awake
  runeword, and server totals, for scoreboards, holograms, quests and menus.
---

# 🏷️ Placeholders

ExecutableGems adds placeholders to [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/), for scoreboards, holograms, quest plugins and menus. They all start with `%executablegems_`.

## Setup

1. Install PlaceholderAPI and restart the server.
2. That's all: ExecutableGems registers its placeholders by itself. There is nothing to download with `/papi ecloud`.

Test one in game while you hold an item with gems:

```
/papi parse me %executablegems_gems_names%
```

:::info
PlaceholderAPI is optional. Without it, ExecutableGems works the same, and these placeholders don't exist.
:::

## Which item

A placeholder about an item reads the **main hand** by default. Add a slot after `executablegems_` to read another one:

| Slot | Item |
|---|---|
| `mainhand` (or nothing) | The item in the main hand |
| `offhand` | The item in the off hand |
| `helmet` `chestplate` `leggings` `boots` | The armour piece worn |

For example, `%executablegems_sockets%` and `%executablegems_mainhand_sockets%` give the same answer, and `%executablegems_chestplate_sockets%` reads the chestplate.

Every placeholder of the three tables below accepts a slot.

## The sockets of an item

| Placeholder | Answer |
|---|---|
| `%executablegems_sockets%` | The number of sockets of the item (`sockets_total` gives the same) |
| `%executablegems_sockets_filled%` | The sockets that hold a gem |
| `%executablegems_sockets_free%` | The empty sockets |
| `%executablegems_gems%` | The ids of its gems, in socket order: `vampire,ember` |
| `%executablegems_gems_names%` | Their names: `Vampire Rune, Ember Rune` |
| `%executablegems_gems_levels%` | Their levels: `5,3` |
| `%executablegems_gems_count%` | The number of gems (the same as `sockets_filled`) |
| `%executablegems_runeword%` | The id of the awake runeword, or nothing |
| `%executablegems_runeword_name%` | Its name, without colours |
| `%executablegems_runeword_name_colored%` | Its name, with its colours |

## One socket

Replace `<n>` with the number of the socket: `1` is the first one.

| Placeholder | Answer |
|---|---|
| `%executablegems_gem_<n>%` | The id of the gem in socket `<n>`, or nothing if it is empty |
| `%executablegems_gem_<n>_name%` | Its name, without colours |
| `%executablegems_gem_<n>_name_colored%` | Its name, with its colours |
| `%executablegems_gem_<n>_level%` | Its level |
| `%executablegems_gem_<n>_roman%` | Its level in Roman numerals: `V` |
| `%executablegems_gem_<n>_tier%` | Its tier, from 1 (Chipped) to 4 (Radiant) |
| `%executablegems_gem_<n>_tier_name%` | The name of its tier |
| `%executablegems_gem_<n>_xp%` | Its XP towards the next level |
| `%executablegems_gem_<n>_xp_needed%` | The XP the next level takes. `0` when the gem gains no XP or is at its last level |
| `%executablegems_gem_<n>_xp_percent%` | Its progress to the next level, from 0 to 100 |
| `%executablegems_gem_<n>_type%` | The type of the socket (`any`) |

For an empty socket, the texts are empty and the numbers are `0`.

## One gem, by its id

Replace `<gem>` with the id of a gem, such as `vampire`. If the item holds several copies, the highest level answers.

| Placeholder | Answer |
|---|---|
| `%executablegems_has_<gem>%` | `yes` or `no` (the words set in the config of PlaceholderAPI) |
| `%executablegems_level_<gem>%` | Its level, `0` when the item doesn't hold it |
| `%executablegems_tier_<gem>%` | Its tier, from 1 to 4 |
| `%executablegems_xp_<gem>%` | Its XP towards the next level |
| `%executablegems_xp_needed_<gem>%` | The XP the next level takes |
| `%executablegems_xp_percent_<gem>%` | Its progress to the next level, from 0 to 100 |

With a slot: `%executablegems_helmet_has_bastion%`.

## Everything the player wears and holds

These read the six slots together: both hands and the four armour pieces. They take no slot.

| Placeholder | Answer |
|---|---|
| `%executablegems_equipped_gems%` | The ids of all the gems: `vampire,ember,bastion` |
| `%executablegems_equipped_gems_count%` | How many gems |
| `%executablegems_equipped_has_<gem>%` | `yes` or `no` |
| `%executablegems_equipped_level_<gem>%` | The highest level of this gem, `0` when it is nowhere |
| `%executablegems_equipped_runewords%` | The ids of the awake runewords |
| `%executablegems_equipped_runewords_count%` | How many runewords are awake |

## The player and the server

| Placeholder | Answer |
|---|---|
| `%executablegems_max_sockets%` | The sockets a Socket Drill may open for this player (`sockets.max`, or more with the permission `executablegems.sockets.max.<n>`) |
| `%executablegems_runewords_discovered_player%` | The runewords this player was the first to awaken |
| `%executablegems_runewords_discovered%` | The runewords discovered on the server |
| `%executablegems_runewords_total%` | The runewords loaded on the server |
| `%executablegems_gems_total%` | The gems loaded on the server |

The last three need no player.

## Examples

A scoreboard line for the weapon in hand:

```
Gems: %executablegems_sockets_filled%/%executablegems_sockets%
%executablegems_gem_1_name% %executablegems_gem_1_roman% (%executablegems_gem_1_xp_percent%%)
```

A condition in a quest or menu plugin: the player holds a Vampire Rune of level 5 or more.

```
%executablegems_level_vampire% >= 5
```

A condition on a full set: the player wears or holds the Aegis runeword.

```
%executablegems_equipped_runewords% contains aegis
```

The exact way to write a condition depends on the plugin that reads the placeholder.

:::tip
The names with `_colored` use the old `§` colour codes, for plugins that don't read MiniMessage. Use the plain `_name` when in doubt.
:::
