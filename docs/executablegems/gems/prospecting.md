---
sidebar_position: 4
description: Every Prospecting gem of ExecutableGems, with its effect, its numbers per level and how to get it.
---

# ⛏️ Prospecting

Gems for pickaxes, shovels and axes. They grow with every block you mine.

**Goes on:** tools. Folder: `gems/prospecting/`.

![A Vein Gem breaking a whole vein of ore](https://media.ssomar.com/m/docs-img-eg-gem-vein.jpg)

The 4 icons are the 4 tiers of the gem: Chipped, Flawless, Perfect, Radiant.

### Geode Gem

![The 4 tiers of this gem](https://media.ssomar.com/m/docs-img-eg-strip-geode.png)

Mining stone has 0.3% chance to unearth an Unidentified Gem *(level 10)*

> *Every rock hides a heart, if you knock.*

| | Level 1 | Level 5 | Level 10 |
|---|---|---|---|
| Chance (%) | 0.08 | 0.17 | 0.3 |
| Socketing success (%) | 97 | 85 | 70 |

**Goes on:** pickaxes, ExecutableItems items · **Trigger:** Block mined · **If the socketing fails:** the gem shatters · **Loot weight:** 7

`/eg give <player> geode 10`

### Lodestone Gem

![The 4 tiers of this gem](https://media.ssomar.com/m/docs-img-eg-strip-lodestone.png)

Drops and XP within 8 blocks fly to you when you mine or kill *(level 10)*

> *North is wherever it wants to be.*

| | Level 1 | Level 5 | Level 10 |
|---|---|---|---|
| Radius (blocks) | 3.5 | 5.5 | 8 |
| Socketing success (%) | 98 | 90 | 80 |

**Goes on:** tools, weapons, ExecutableItems items · **Trigger:** Block mined, Kill · **If the socketing fails:** the gem shatters · **Loot weight:** 8

`/eg give <player> lodestone 10`

### Molten Gem

![The 4 tiers of this gem](https://media.ssomar.com/m/docs-img-eg-strip-molten.png)

Mined ores have 100% chance to drop already smelted *(level 10)*

> *Still warm from the heart of the world.*

| | Level 1 | Level 5 | Level 10 |
|---|---|---|---|
| Chance (%) | 37 | 65 | 100 |
| Socketing success (%) | 97 | 85 | 70 |

**Goes on:** pickaxes, ExecutableItems items · **Trigger:** Block mined · **If the socketing fails:** the gem shatters · **Loot weight:** 8

`/eg give <player> molten 10`

### Quarry Gem

![The 4 tiers of this gem](https://media.ssomar.com/m/docs-img-eg-strip-quarry.png)

+20 mining speed (like Efficiency) *(level 10)*

> *Stone parts for it like water for a keel.*

| | Level 1 | Level 5 | Level 10 |
|---|---|---|---|
| Speed (%) | 2 | 10 | 20 |
| Socketing success (%) | 98 | 90 | 80 |

**Goes on:** pickaxes, shovels, axes, hoes, ExecutableItems items · **Trigger:** Passive · **If the socketing fails:** the gem shatters · **Loot weight:** 9

`/eg give <player> quarry 10`

### Vein Gem

![The 4 tiers of this gem](https://media.ssomar.com/m/docs-img-eg-strip-vein.png)

Sneak while mining an ore to break the whole vein (up to 12 blocks) *(level 10)*

> *Pull one root and the whole tree follows.*

| | Level 1 | Level 5 | Level 10 |
|---|---|---|---|
| Max blocks | 3 | 7 | 12 |
| Socketing success (%) | 97 | 85 | 70 |

**Goes on:** pickaxes, ExecutableItems items · **Trigger:** Sneak + block mined · **If the socketing fails:** the gem shatters · **Loot weight:** 7

`/eg give <player> vein 10`
