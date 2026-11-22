---
sidebar_position: 7.5
description: Create your own real Minecraft enchantment with ExecutableGems and /eg new enchantment - enchanting table, books, anvil, villagers and loot, with activators as its effect.
---

# 📖 Create your own enchantment

ExecutableGems can add **real Minecraft enchantments** to your server. Yours appear at the enchanting table, on books, on the anvil, at the grindstone, in villager trades and in loot, and they work with `/enchant`. Their effects are ExecutableItems activators, like the effects of a gem.

We will make **Deep Harvest**: mining stone with the pickaxe can restore food.

In the commands of this page, replace `YourName` with your name.

## 1. Create the file

```
/eg new enchantment deep_harvest #6fd08c
```

| Part | Meaning |
|---|---|
| `deep_harvest` | The id of the enchantment. Lowercase letters, digits and `_`. In Minecraft it becomes `executablegems:deep_harvest`. |
| `#6fd08c` | The colour of its name. Optional: without it, the plugin picks one. |

The plugin writes `plugins/ExecutableGems/gems/enchantments/deep_harvest.yml`, with every key explained in comments, and tells you the next steps in the chat.

:::warning
The enchantment does not exist yet. Minecraft registers its enchantments when the server starts, so a new one needs a **restart**. `/eg reload` is not enough. Edit the file first, then restart once.
:::

## 2. Edit the file

Open `plugins/ExecutableGems/gems/enchantments/deep_harvest.yml` and make it look like this:

```yaml
name: '<#6fd08c>Deep Harvest'
color: '#6fd08c'
model: 'minecraft:enchanted_book'
max-level: 3
enabled: true

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
```

What each part does:

- **`name`, `color`, `model`**: its name and picture in the Codex and in `/eg list`. `color` is also the colour of the enchantment's name on items.
- **`max-level`**: the highest level of the enchantment, from 1 to 255.
- **`native-enchantment`**: what Minecraft needs to know. `supported` says which items accept it, here the pickaxes. `weight` is how often the enchanting table, villagers and loot pick it (Sharpness is 10, Mending is 2). See [every key and every word of `supported`](../../configurations/gem-configuration.md#native-enchantment).
- **`description` and `values`**: its page in the Codex, and the numbers that change with the level. They work as in a gem: `%food%` in the description, `%gem_chance%` and `%gem_level%` in the activators.
- **`activators`**: the effect. They run for the player who holds or wears an item with the enchantment. See [Activators in gems](../../configurations/activators-in-gems.md).

:::info
An enchantment is not socketed, so the socketing keys of a gem are ignored here: `apply`, `xp`, `attributes`, `obtain`, `incompatible-with`, `exclusive-group`, `max-per-item`, `removable`, `support`. The console tells you if you leave one in.
:::

## 3. Restart the server

Stop and start the server. In the console, the line of the enchantments lists yours:

```
[ExecutableGems] Native enchantments registered: 3 (aftershock, deep_harvest, soul_reaper)
```

If your enchantment is missing from this line, read the lines above it: the console says which key of the file is wrong.

## 4. Test it

Hold a pickaxe and put the enchantment on it:

```
/give @s netherite_pickaxe
/enchant @s executablegems:deep_harvest 3
/eg luck YourName on
```

Mine some stone: with `/eg luck`, the effect runs at every block. Turn the luck off afterwards with `/eg luck YourName off`.

Two other ways to get it:

| Command | Result |
|---|---|
| `/eg give YourName deep_harvest 3` | Gives the enchanted book. Put it on a pickaxe at the anvil. |
| `/eg apply YourName deep_harvest 3` | Puts the enchantment on the item you hold. |

Players get it like any enchantment: at the enchanting table (`enchanting-table`), from librarians (`tradeable`) and on the books and gear of chests, fishing and mobs (`loot`).

## 5. Change it later

Some changes need a restart, others only `/eg reload`:

| You changed | Run |
|---|---|
| `description`, `values`, `activators` | `/eg reload` |
| `max-level`, `name`, `color` | Restart the server |
| Any key under `native-enchantment` | Restart the server |
| A new enchantment | Restart the server |

You don't have to remember this table: `/eg reload` tells you in the chat what still waits for a restart.

## Good to know

- **A mistake never keeps the server from starting.** A number Minecraft would refuse (`weight: 0`, `max-level: 300`) is brought back into its range, with a line in the console.
- **To switch an enchantment off**, set `enabled: false` at the top of the file, or start the file name with `_`. It is gone at the next restart.
- **A treasure enchantment**, like Mending: set `treasure: true` and `enchanting-table: false`.
- **Two enchantments are shipped** as examples in the same folder: `aftershock.yml` and `soul_reaper.yml`.
- `/eg check deep_harvest` shows again what the last load found in the file.

## Next

- [Every key of a native enchantment](../../configurations/gem-configuration.md#native-enchantment)
- [Create a runeword](runeword.md)
