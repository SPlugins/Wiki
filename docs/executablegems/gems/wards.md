---
sidebar_position: 3
description: Every Wards gem of ExecutableGems, with its effect, its numbers per level and how to get it.
---

# 🛡️ Wards

Defensive gems for your armour. They grow when you take hits.

**Goes on:** armour. Folder: `gems/wards/`.

![A Phoenix Ward saving its wearer from a fatal blow](</img/executablegems/gem-phoenix.jpg>)

The 4 icons are the 4 tiers of the gem: Chipped, Flawless, Perfect, Radiant.

### Bastion Ward

<img src="/img/executablegems/icons/bastion_t1.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/bastion_t2.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/bastion_t3.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/bastion_t4.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} />

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

<img src="/img/executablegems/icons/bramble_t1.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/bramble_t2.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/bramble_t3.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/bramble_t4.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} />

When hit, 50% chance to prick the attacker for 5 damage and poison it *(level 10)*

> *The forest kept its thorns for this.*

| | Level 1 | Level 5 | Level 10 |
|---|---|---|---|
| Chance (%) | 23 | 35 | 50 |
| Damage | 1.4 | 3 | 5 |
| Socketing success (%) | 98 | 90 | 80 |

**Goes on:** armour, ExecutableItems items · **Trigger:** Player receive hit by entity · **If the socketing fails:** the gem shatters · **Loot weight:** 10

`/eg give <player> bramble 10`

### Heartstone Ward

<img src="/img/executablegems/icons/heartstone_t1.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/heartstone_t2.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/heartstone_t3.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/heartstone_t4.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} />

+1 ❤ max health Kills heal you for 0.75 ❤ *(level 10)*

> *Warm to the touch, like something alive.*

| | Level 1 | Level 5 | Level 10 |
|---|---|---|---|
| Hearts | 0.33 | 0.62 | 1 |
| Heal (hearts) | 0.3 | 0.5 | 0.75 |
| Socketing success (%) | 98 | 90 | 80 |

**Goes on:** armour, ExecutableItems items · **Trigger:** Passive, Kill · **If the socketing fails:** the gem shatters · **Loot weight:** 10

`/eg give <player> heartstone 10`

### Mirage Ward

<img src="/img/executablegems/icons/mirage_t1.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/mirage_t2.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/mirage_t3.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/mirage_t4.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} />

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

<img src="/img/executablegems/icons/phoenix_t1.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/phoenix_t2.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/phoenix_t3.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/phoenix_t4.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} />

A fatal blow rekindles you instead: 6 ❤, fire resistance, a burst of flame (once every 5 min, chestplates only) *(level 10)*

> *Ash is only a beginning.*

| | Level 1 | Level 5 | Level 10 |
|---|---|---|---|
| Hearts | 3.3 | 4.5 | 6 |
| Cooldown min | 9.5 | 7.5 | 5 |
| Socketing success (%) | 86 | 70 | 50 |

**Goes on:** chestplates, ExecutableItems items · **Trigger:** Player before death · **If the socketing fails:** the gem shatters · **Loot weight:** 4 (found from tier 2)

`/eg give <player> phoenix 10`

### Skystep Ward

<img src="/img/executablegems/icons/skystep_t1.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/skystep_t2.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/skystep_t3.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/skystep_t4.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} />

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

<img src="/img/executablegems/icons/tide_t1.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/tide_t2.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/tide_t3.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} /> <img src="/img/executablegems/icons/tide_t4.png" width="48" height="48" alt="" style={{imageRendering: "pixelated"}} />

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
