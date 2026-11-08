---
sidebar_position: 12
description: Give gems from quests, crates, shops and ExecutableItems items with the console commands of ExecutableGems.
---

# 🎁 Reward players with gems

Any plugin that can run a console command can give gems.

```
eg give <player> <gem> [level] [amount]
eg tool <player> <socket_drill|gem_extractor|gem_forge|rough_gem|gem_codex> [amount]
```

## From a quest, a crate, a shop

Use the command with the player placeholder of that plugin, for instance:

```
eg give %player% vampire 3
eg tool %player% socket_drill 1
```

## From an ExecutableItem

A scroll that gives a random stone when used:

```yaml
activators:
  activator0:
    option: PLAYER_RIGHT_CLICK
    usageModification: -1
    commands:
      - eg tool %player% rough_gem 1
```

## A gem for one item only

Make a gem that only fits one of your ExecutableItems items:

```yaml
applicable-on: ['ei:Excalibur']
```

## Sell a ready-made weapon

`eg apply` acts on the item in the player's main hand and can't fail, which suits a ceremony or an NPC:

```
eg apply %player% vampire 5
eg level %player% vampire +1
```

Check that the player holds the right item first.
