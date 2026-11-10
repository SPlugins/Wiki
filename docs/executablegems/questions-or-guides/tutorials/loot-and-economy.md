---
sidebar_position: 11
description: Control where gems come from in ExecutableGems - drop rates, boss drops, chests, gem rarity, jeweller prices and forge costs.
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

## Change the jeweller's wares

Up to 4 wares. `item` is a tool id or `gem:<id>:<level>`.

```yaml
jeweller-shop:
  wares:
    stone: {item: rough_gem, price: 'EMERALD:4', xp-levels: 0}
    opal: {item: 'gem:blood_opal:1', price: 'DIAMOND:3', xp-levels: 5}
    drill: {item: socket_drill, price: 'EMERALD:32', xp-levels: 10}
```

## Keep forges for admins

Remove the `forge` line from `jeweller-shop.wares`, so players can't buy one, and place the forges yourself with `/eg forge`.

## Fewer or more sockets

```yaml
sockets:
  default-weapons: 0
  max: 2
  default-per-material:
    NETHERITE_SWORD: 2
```
