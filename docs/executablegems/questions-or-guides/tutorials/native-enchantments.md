---
sidebar_position: 10
description: Turn a gem into a real Minecraft enchantment with ExecutableGems - enchanting table, books, anvil, villagers and loot.
---

# 📖 Native enchantments

A gem can be a **real Minecraft enchantment**: it appears at the enchanting table, on books, on the anvil, at the grindstone, in villager trades and in loot. Its effects are still activators.

We will make **Deep Harvest**: mining stone can restore food.

## The file

Create `gems/custom/deep_harvest.yml`:

```yaml
name: '<#6fd08c>Deep Harvest'
color: '#6fd08c'
max-level: 3
model: 'minecraft:enchanted_book'
native-enchantment:
  enabled: true
  supported: '#pickaxes'
  weight: 3
  anvil-cost: 4
  enchanting-table: true
  tradeable: true
  loot: true
  treasure: false
description:
  - '<gray>Mining stone can restore <white>%food%</white> food'
values:
  food: 'level'
  chance: '5 * level'
activators:
  feed:
    option: PLAYER_BLOCK_BREAK
    chance: '%gem_chance%'
    silenceOutput: true
    detailedSlots: [-1]
    detailedBlocks:
      blocks: [STONE, DEEPSLATE]
    playerCommands:
      - 'effect give %player% saturation 1 %gem_level% true'
      - 'say HARVEST %gem_level%'
```

The levels of the enchantment are the levels of the gem. `%gem_level%` and the values work as usual. It needs no `applicable-on`, no `apply` and no `xp`: `native-enchantment.supported` says which items accept it.

## Restart the server

:::warning
Minecraft registers its enchantments when the server starts, so **`/eg reload` is not enough** to add one. Stop and start the server.
:::

In the console:

```
[ExecutableGems] Native enchantments registered: 3
```

## Test it

```
/give @s netherite_pickaxe
/enchant @s executablegems:deep_harvest 3
/eg luck YourName on
```

Mine some stone. After that, changing the numbers of an existing enchantment only needs `/eg reload`.

See [every key](../../configurations/gem-configuration.md#native-enchantment).
