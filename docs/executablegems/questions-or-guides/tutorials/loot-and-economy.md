---
sidebar_position: 11
description: Control where gems come from in ExecutableGems - drop rates, worlds, mob farms, boss drops, chests, gem rarity, jeweller prices and forges.
---

# 💰 Control loot and prices

Everything about how players get gems is in `config.yml` and in the `obtain` section of each gem.

![A monster dies or a chest is opened, the loot chance is rolled, then a tier with tier-weights, then a gem with obtain.weight. The gem drops at the first level of its tier.](https://media.ssomar.com/m/docs-img-eg-diagram-loot-flow.png)

## Make gems rarer or more common

```yaml
loot:
  mobs:
    chance: 0.002        # 0.2% instead of 1%
    looting-bonus: 0
appraisal:
  drop-chance: 0.01      # Unidentified Gems: 1% instead of 3%
```

## Change a tier's odds

```yaml
loot:
  mobs:
    tier-weights: {1: 90, 2: 9, 3: 1, 4: 0}   # Radiant gems never drop
```

## Make one gem rarer

In the gem's file:

```yaml
obtain:
  weight: 2        # against 10 for a normal gem
  min-tier: 2      # never found Chipped
```

The chance of a gem is its weight divided by the sum of the weights of the gems available at that tier.

## A gem nobody can find

Perfect for a quest reward or a shop:

```yaml
obtain:
  weight: 0
```

Then give it by command. See [Reward players with gems](rewards-from-other-plugins.md).

## Only some gems in the loot

```yaml
loot:
  gems: [vampire, frost, ember]
appraisal:
  gems: [vampire, frost, ember]
```

## No random gems at all

```yaml
loot:
  mobs: {enabled: false}
  chests: {enabled: false}
appraisal:
  drop-chance: 0
```

## No gems in some worlds

In `config.yml`, list the worlds where no gem and no Unidentified Gem is found (monsters and chests):

```yaml
loot:
  worlds:
    mode: blacklist
    list: [minigames, 'event_*']     # 'event_*' = every world whose name starts with event_
```

Or name the only worlds where gems are found:

```yaml
loot:
  worlds:
    mode: whitelist
    list: [world, world_nether, world_the_end]
```

## Mob farms

By default, a monster that came from a spawner, a spawn egg or a nether portal drops no gem and no Unidentified Gem, bosses included. Monsters that spawned naturally always drop, even in a farm.

```yaml
loot:
  mobs:
    blocked-spawn-reasons: [SPAWNER, SPAWNER_EGG, DISPENSE_EGG, NETHER_PORTAL]
```

- To let spawner mobs drop, remove `SPAWNER` from the list.
- To also block trial spawners, `/summon` or the mobs of another plugin, add `TRIAL_SPAWNER`, `COMMAND` or `CUSTOM`.
- `blocked-spawn-reasons: []` lets every monster drop.

## Bosses of MythicMobs

`loot.mobs.bosses` takes vanilla entity types, and MythicMobs mobs with `'mythic:<id>'`, where the id is the internal name of the mob:

```yaml
loot:
  mobs:
    bosses: {WITHER: 1.0, ENDER_DRAGON: 1.0, 'mythic:SkeletonKing': 0.8}
```

## Change the jeweller's wares

Add as many wares as you like: the shop shows four per page. `item` is a tool id or `gem:<id>:<level>`.

```yaml
jeweller-shop:
  wares:
    stone: {item: rough_gem, price: 'EMERALD:4', xp-levels: 0}
    opal: {item: 'gem:blood_opal:1', price: 'DIAMOND:3', xp-levels: 5}
    drill: {item: socket_drill, price: 'EMERALD:32', xp-levels: 10}
    extractor: {item: gem_extractor, money: 250}
    codex: {item: gem_codex, free: true}
```

A ware costs `price` (items), `xp-levels`, `money`, or several of them together. `money` needs Vault and an economy plugin. A ware you give away needs `free: true`.

A ware with a mistake is never sold: the console names it, and admins see a barrier in its place in the shop, with the reason. See [the jeweller's shop settings](../../configurations/general-configuration.md#jewellers-shop).

## Limit the forges of players

A player may have **one forge** placed at a time by default, and picks it up with sneak + left click. Change the number in `config.yml`:

```yaml
forge:
  max-per-player: 2      # -1 = no limit
```

Give more to a group with the permission `executablegems.forge.limit.<n>`, for example `executablegems.forge.limit.3`.

## Keep forges for admins

Two ways, which you can combine:

- Set `forge.max-per-player: 0`: players can't place a forge. OPs and the groups with a `executablegems.forge.limit` permission still can.
- Remove the `forge` line from `jeweller-shop.wares`, so players can't buy one.

Then place the forges yourself with `/eg forge`: these are server forges, which only the staff can pick up. `/eg forge list` shows them all.

## Close a feature to a group

The shop, the appraisal, the forge, the Socket Drill, the Gem Extractor and hold to socket each have a permission that everyone has by default. Set it to false for a group to close the feature to it. See [Commands & Permissions](../../commands-and-permissions.md#close-a-feature-to-a-group).

## Fewer or more sockets

```yaml
sockets:
  default-weapons: 0
  max: 2
  default-per-material:
    NETHERITE_SWORD: 2
```

To give a group more sockets than `max`, give it the permission `executablegems.sockets.max.<n>`, for example `executablegems.sockets.max.5`: a Socket Drill then opens up to 5 sockets for its players.
