---
sidebar_position: 3
description: Every Wards gem of ExecutableGems, with its effect, its numbers per level and how to get it.
---

# 🛡️ Wards

Defensive gems for your armour. They grow when you take hits.

**Goes on:** armour. Folder: `gems/wards/`.

![A Phoenix Ward saving its wearer from a fatal blow](https://media.ssomar.com/m/docs-img-eg-gem-phoenix.jpg)

The 4 icons are the 4 tiers of the gem: Chipped, Flawless, Perfect, Radiant.

### Bastion Ward

![The 4 tiers of this gem](https://media.ssomar.com/m/docs-img-eg-strip-bastion.png)

+2 armour, +2 armour toughness *(level 10)*

> *Laid like the first stone of a keep.*

| | Level 1 | Level 5 | Level 10 |
|---|---|---|---|
| Armour | 0.65 | 1.25 | 2 |
| Armour toughness | 0.2 | 1 | 2 |
| Socketing success (%) | 98 | 90 | 80 |

**Goes on:** armour, ExecutableItems items · **Trigger:** Passive · **If the socketing fails:** the gem shatters · **Loot weight:** 11

`/eg give <player> bastion 10`

### Bramble Ward

![The 4 tiers of this gem](https://media.ssomar.com/m/docs-img-eg-strip-bramble.png)

When hit, 50% chance to prick the attacker for 5 damage and poison it *(level 10)*

> *The forest kept its thorns for this.*

| | Level 1 | Level 5 | Level 10 |
|---|---|---|---|
| Chance (%) | 23 | 35 | 50 |
| Damage | 1.4 | 3 | 5 |
| Socketing success (%) | 98 | 90 | 80 |

**Goes on:** armour, ExecutableItems items · **Trigger:** Hit taken · **If the socketing fails:** the gem shatters · **Loot weight:** 10

`/eg give <player> bramble 10`

### Heartstone Ward

![The 4 tiers of this gem](https://media.ssomar.com/m/docs-img-eg-strip-heartstone.png)

+1 ❤ max health. Kills heal you for 0.75 ❤ *(level 10)*

> *Warm to the touch, like something alive.*

| | Level 1 | Level 5 | Level 10 |
|---|---|---|---|
| Hearts | 0.33 | 0.62 | 1 |
| Heal (hearts) | 0.3 | 0.5 | 0.75 |
| Socketing success (%) | 98 | 90 | 80 |

**Goes on:** armour, ExecutableItems items · **Trigger:** Passive, Kill · **If the socketing fails:** the gem shatters · **Loot weight:** 10

`/eg give <player> heartstone 10`

### Mirage Ward

![The 4 tiers of this gem](https://media.ssomar.com/m/docs-img-eg-strip-mirage.png)

20% chance to dodge a hit completely (once every 4s, chestplates only) *(level 10)*

> *You see it. Then you do not.*

| | Level 1 | Level 5 | Level 10 |
|---|---|---|---|
| Chance (%) | 7.4 | 13 | 20 |
| Cooldown (s) | 6 | 5 | 4 |
| Socketing success (%) | 92 | 80 | 65 |

**Goes on:** chestplates, ExecutableItems items · **Trigger:** Hit taken · **If the socketing fails:** the gem shatters · **Loot weight:** 7

`/eg give <player> mirage 10`

### Phoenix Ward

![The 4 tiers of this gem](https://media.ssomar.com/m/docs-img-eg-strip-phoenix.png)

A fatal blow rekindles you instead: 6 ❤, fire resistance, a burst of flame (once every 5 min, chestplates only) *(level 10)*

> *Ash is only a beginning.*

| | Level 1 | Level 5 | Level 10 |
|---|---|---|---|
| Hearts | 3.3 | 4.5 | 6 |
| Cooldown min | 9.5 | 7.5 | 5 |
| Socketing success (%) | 86 | 70 | 50 |

**Goes on:** chestplates, ExecutableItems items · **Trigger:** Fatal blow · **If the socketing fails:** the gem shatters · **Loot weight:** 4 (found from tier 2)

`/eg give <player> phoenix 10`

### Skystep Ward

![The 4 tiers of this gem](https://media.ssomar.com/m/docs-img-eg-strip-skystep.png)

+20% jump height, -50% fall damage and +3 blocks before a fall hurts (boots) *(level 10)*

> *Woven from the wind under a hawk.*

| | Level 1 | Level 5 | Level 10 |
|---|---|---|---|
| Jump (%) | 2 | 10 | 20 |
| Fall damage reduced (%) | 5 | 25 | 50 |
| Safe fall (blocks) | 0.3 | 1.5 | 3 |
| Socketing success (%) | 98 | 90 | 80 |

**Goes on:** boots, ExecutableItems items · **Trigger:** Passive · **If the socketing fails:** the gem shatters · **Loot weight:** 8

`/eg give <player> skystep 10`

### Tide Ward

![The 4 tiers of this gem](https://media.ssomar.com/m/docs-img-eg-strip-tide.png)

+4 breath underwater +50% movement and +100% mining underwater *(level 10)*

> *It hums like a shell held to the ear.*

| | Level 1 | Level 5 | Level 10 |
|---|---|---|---|
| Oxygen bonus | 0.4 | 2 | 4 |
| Water speed (%) | 5 | 25 | 50 |
| Underwater mining (%) | 10 | 50 | 100 |
| Socketing success (%) | 98 | 90 | 80 |

**Goes on:** armour, ExecutableItems items · **Trigger:** Passive · **If the socketing fails:** the gem shatters · **Loot weight:** 8

`/eg give <player> tide 10`
