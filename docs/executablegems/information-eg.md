---
title: Information EG
sidebar_position: 1
description: >-
  ExecutableGems lets you create your own gems, runewords and real Minecraft
  enchantments on Paper servers, one YAML file each, written with /eg new.
  Players socket them into any item and level them up. Needs SCore and
  ExecutableItems.
---

# 📌 Information EG

![The gems of ExecutableGems around a Celestial Forge](https://media.ssomar.com/m/docs-img-eg-hero-wall.jpg)

## Description

ExecutableGems is an add-on for [ExecutableItems](../executableitems/information-ei.md). It adds **gems** that players socket into their weapons, armour, tools and bows. Each gem gives its item a new power, levels up as it is used, and can combine with other gems into a **runeword**.

**You create your own.** A gem, a runeword or a Minecraft enchantment is one YAML file, and the command `/eg new` writes it for you. Its effects are ordinary ExecutableItems activators, so anything an ExecutableItem can do, a gem can do too. If you already know ExecutableItems, you already know how to write a gem.

It works on vanilla items and on ExecutableItems items, and it needs no client mod.

## What you get

- **Your own gems, runewords and enchantments:** one YAML file each, written with `/eg new` and fully commented. Your enchantments are real Minecraft enchantments: enchanting table, books, anvil, villagers and loot. See [Create your own](#create-your-own).
- **The AI Creator:** on splugins.net, it writes gem configs and makes their textures to measure. See [Create your own](#create-your-own).
- **Made to be edited:** write a gem without a 3D model, add your own categories, change every number and every drop rate. `/eg reload` names every mistake of a file, in the chat.
- **37 gems in 7 categories, ready to use:** weapon runes, armour wards, tool gems, bow gems, supports, relics and real enchantments. See the [list of gems](gems/overview.md).
- **12 runewords:** socket the right gems in the right order and the item awakens a new power. See the [runewords](gems/runewords.md).
- **The Gem Forge:** a 3D altar with a jeweller who works in front of everyone, in 3 upgradable levels. See [The Gem Forge](player-guide/the-gem-forge.md).
- **Gems that grow:** 10 levels and 4 visual tiers. Gems gain XP from hits, kills, blocks mined and hits taken.
- **A full survival loop:** monster drops, boss drops, structure chests, unidentified stones and a jeweller's shop.
- **The Codex:** an in-game book of every gem and runeword, with categories, pages and search.
- **Made for your other plugins:** [PlaceholderAPI placeholders](placeholders.md), prices in money through Vault, and a [developer API](developer-api.md).

![A runeword awakening: a pillar of light and a sigil in the sky](https://media.ssomar.com/m/docs-img-eg-awakening-pillar.jpg)

## Create your own

Each command writes one file with every key explained in comments. Edit it, run `/eg reload`, and the plugin tells you in the chat what it could not read.

| You want | Command | Tutorial |
|---|---|---|
| A gem | `/eg new <category> <id>` | [Create your first gem](questions-or-guides/tutorials/your-first-gem.md) |
| A runeword | `/eg new runeword <id> <gem> <gem>` | [Create a runeword](questions-or-guides/tutorials/runeword.md) |
| A Minecraft enchantment | `/eg new enchantment <id>` | [Create your own enchantment](questions-or-guides/tutorials/native-enchantments.md) |
| A category of the Codex | `/eg new category <id>` | [Create a category](questions-or-guides/tutorials/your-own-category.md) |

More tutorials: [a right-click ability](questions-or-guides/tutorials/right-click-ability.md), [an armour gem](questions-or-guides/tutorials/armour-ward.md), [gems for tools and bows](questions-or-guides/tutorials/tools-and-bows.md), [a support gem](questions-or-guides/tutorials/support-gem.md) and [your own 3D model](questions-or-guides/tutorials/your-own-3d-model.md).

**The AI Creator.** The [AI Creator of splugins.net](https://splugins.net/ai-creator/executablegems) writes gem configs for you and makes their textures to measure. It is a separate service of splugins.net, and it is being finished.

## How it works

![Find a gem, socket it, use the item, the gem gains XP and levels up. The right gems in the right order awaken a runeword.](https://media.ssomar.com/m/docs-img-eg-diagram-loop.png)

## Requirements

- **Server:** [Paper](https://papermc.io/) or [Folia](https://papermc.io/software/folia) 1.21.11 or newer. Spigot is not supported: on an older server or on Spigot, ExecutableGems disables itself with one line in the console.
  On Folia, the jeweller's marker on the locator bar keeps its range but not its colour and style (Folia has no `/waypoint` command).
- **Plugins:** [SCore](https://modrinth.com/plugin/score) and [ExecutableItems](../executableitems/information-ei.md), free or premium, both up to date: ExecutableGems needs the ExecutableItems release that comes with ExecutableGems, or a newer one. Every gem works with the free version of ExecutableItems, on vanilla items and on ExecutableItems items.
- **Optional plugins:** PlaceholderAPI for the [placeholders](placeholders.md), and Vault with an economy plugin for prices in money at the jeweller's shop.

:::tip
**With the free version of ExecutableItems**, an ExecutableItems item uses one of its uses each time one of its own activators runs (the free version cannot change that). Gems never use any, but an item with a limited number of uses will still run out, and the gems socketed in it go with it. For items meant to carry gems, set `usage: -1`.
:::
- **Players:** the server's Minecraft version, with the resource pack accepted.

:::info
The full-screen effects (the shockwave when a gem is socketed, the screen that cracks when it shatters) need a **26.3** server or newer. On older servers everything else works and these effects are skipped.
:::

:::info
**Players need no permission to use the gems**

Every gem has the permission `executablegems.use.<gem>` and every runeword `executablegems.use.runeword.<id>`. Everyone has them by default, so you have nothing to set.

To forbid a gem to a group, set its permission to false. With LuckPerms: `/lp group default permission set executablegems.use.vampire false`
:::

## Where to go next

- **You run the server:** [Getting started](questions-or-guides/tutorials/getting-started.md) takes 10 minutes.
- **You want to write gems:** [Create your first gem](questions-or-guides/tutorials/your-first-gem.md), then [a runeword](questions-or-guides/tutorials/runeword.md) and [your own enchantment](questions-or-guides/tutorials/native-enchantments.md).
- **You update the plugin:** [How to update correctly](questions-or-guides/frequently-asked-questions/how-to-update-correctly.md).
- **You write a plugin:** the [developer API](developer-api.md).
- **You play on a server with gems:** read the [Player guide](player-guide/gems-and-sockets.md).

## Support

#### Need help, report a bug or submit a suggestion? Something is not in the wiki or poorly explained?

* Join the [Discord](https://discord.com/invite/TRmSwJaYNv)
