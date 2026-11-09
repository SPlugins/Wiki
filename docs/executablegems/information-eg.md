---
title: Information EG
sidebar_position: 1
description: >-
  ExecutableGems adds gems, runes, runewords and custom enchantments to Paper
  servers. Socket them into any item, level them up, or write your own in YAML
  with ExecutableItems activators. Needs SCore and ExecutableItems.
---

# 📌 Information EG

![The gems of ExecutableGems around a Celestial Forge](https://media.ssomar.com/m/docs-img-eg-hero-wall.jpg)

## Description

ExecutableGems is an add-on for [ExecutableItems](../executableitems/information-ei.md). It adds **gems** that players socket into their weapons, armour, tools and bows. Each gem gives its item a new power, levels up as it is used, and can combine with other gems into a **runeword**.

A gem is one YAML file. Its effects are ordinary ExecutableItems activators, so anything an ExecutableItem can do, a gem can do too. If you already know ExecutableItems, you already know how to write a gem.

It works on vanilla items and on ExecutableItems items, and it needs no client mod.

## What you get

| | |
|---|---|
| **37 gems in 7 categories** | Weapon runes, armour wards, tool gems, bow gems, supports, relics and real enchantments. See the [list of gems](gems/overview.md). |
| **12 runewords** | Socket the right gems in the right order and the item awakens a new power. See the [runewords](gems/runewords.md). |
| **The Gem Forge** | A 3D altar with a jeweller who works in front of everyone, in 3 upgradable levels. See [The Gem Forge](player-guide/the-gem-forge.md). |
| **Gems that grow** | 10 levels and 4 visual tiers. Gems gain XP from hits, kills, blocks mined and hits taken. |
| **A full survival loop** | Monster drops, boss drops, structure chests, unidentified stones and a jeweller's shop. |
| **The Codex** | An in-game book of every gem and runeword, with categories, pages and search. |
| **Made to be edited** | Write a gem without a 3D model, add your own categories, change every number and every drop rate. |

![A runeword awakening: a pillar of light and a sigil in the sky](https://media.ssomar.com/m/docs-img-eg-awakening-pillar.jpg)

## How it works

![Find a gem, socket it, use the item, the gem gains XP and levels up. The right gems in the right order awaken a runeword.](https://media.ssomar.com/m/docs-img-eg-diagram-loop.png)

## Requirements

| | |
|---|---|
| **Server** | [Paper](https://papermc.io/) 1.21.11 or newer. Spigot is not supported. |
| **Plugins** | [SCore](https://modrinth.com/plugin/score) and [ExecutableItems](../executableitems/information-ei.md), both up to date |
| **Players** | The server's Minecraft version, with the resource pack accepted |

:::info
The full-screen effects (the shockwave when a gem is socketed, the screen that cracks when it shatters) need a **26.3** server or newer. On older servers everything else works and these effects are skipped.
:::

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

## Where to go next

- **You run the server:** [Getting started](questions-or-guides/tutorials/getting-started.md) takes 10 minutes.
- **You want to write gems:** [Create your first gem](questions-or-guides/tutorials/your-first-gem.md).
- **You play on a server with gems:** read the [Player guide](player-guide/gems-and-sockets.md).

## Support

#### Need help, report a bug or submit a suggestion? Something is not in the wiki or poorly explained?

* Join the [Discord](https://discord.com/invite/TRmSwJaYNv)
