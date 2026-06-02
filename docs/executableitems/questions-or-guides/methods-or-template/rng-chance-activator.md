---
description: >-
  Give any EI activator a random chance to fire using the %rng_min,max%
  placeholder in placeholdersConditions. Covers 25% dodge armor, 10% critical
  strike, and any percentage you need. Requires PlaceholderAPI + RNG expansion.
---

# RNG Chance Activator

<iframe width="560" height="315" src="https://www.youtube.com/embed/jXTDlqoE8dc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## How it works

Add a `placeholdersConditions` entry that compares `%rng_1,N%` (a random integer
between 1 and N) to `1`. This makes the activator fire only when the random roll
matches 1, giving a **1-in-N chance** of triggering.

| Desired chance | `%rng_1,N%` equals `1` | N value |
|---|---|---|
| 50% | `%rng_1,2%` == `1` | 2 |
| 33% | `%rng_1,3%` == `1` | 3 |
| 25% | `%rng_1,4%` == `1` | 4 |
| 20% | `%rng_1,5%` == `1` | 5 |
| 10% | `%rng_1,10%` == `1` | 10 |
| 5% | `%rng_1,20%` == `1` | 20 |
| 1% | `%rng_1,100%` == `1` | 100 |

:::info Requirements
**PlaceholderAPI** + **RNG Expansion** must be installed on your server.
Install the expansion with: `/papi ecloud download RNG`
:::

---

## Example 1 — 25% dodge armor

When the player is hit, there is a **25% chance** the hit is cancelled entirely.

```yaml
name: '&7🥷 Ninja Chestplate'
lore:
  - '&725% chance to dodge incoming hits.'
material: CHAINMAIL_CHESTPLATE
glow: false
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: false
cancelEventIfNotOwner: false
usage: 0
usageLimit: -1
variables: {}

activators:
  activator0:
    name: '&eDodge chance'
    option: PLAYER_RECEIVE_HIT_BY_GLOBAL
    usageModification: 0
    cancelEvent: true          # Cancel the hit when the roll succeeds
    silenceOutput: true
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    # RNG condition: only fires 1 time out of 4 (25%)
    placeholdersConditions:
      plcd0:
        placeholder: '%rng_1,4%'
        comparator: '=='
        value: '1'
        messageIfNotValid: ''
    detailedSlots:
      - 38    # Chestplate slot
    commands:
      - SEND_MESSAGE &8[&7Ninja&8] &fDodged!
    playerConditions: {}
    worldConditions: {}
    variablesModification: {}
```

---

## Example 2 — 10% critical strike weapon

On hit, there is a **10% chance** to deal 3× bonus damage:

```yaml
activators:
  activator0:
    name: '&eCritical strike'
    option: PLAYER_HIT_ENTITY
    usageModification: 0
    cancelEvent: false
    silenceOutput: true
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    placeholdersConditions:
      plcd0:
        placeholder: '%rng_1,10%'
        comparator: '=='
        value: '1'
        messageIfNotValid: ''
    entityCommands:
      - DAMAGE 15
      - SEND_MESSAGE &c💥 Critical strike!
      - [CONSOLE] particle crit %entity_x% %entity_y% %entity_z% 0.5 1 0.5 0.1 20
    playerConditions: {}
    worldConditions: {}
    variablesModification: {}
```

---

## Applying RNG to any activator

The RNG condition is just a `placeholdersConditions` entry — it can be added to
**any activator type**, not just hit events:

```yaml
# 20% chance on right-click
activators:
  activator0:
    option: PLAYER_RIGHT_CLICK
    placeholdersConditions:
      plcd0:
        placeholder: '%rng_1,5%'
        comparator: '=='
        value: '1'
    commands:
      - SEND_MESSAGE &dYou got lucky!
```

---

## Multiple outcomes (weighted random)

Combine several activators with different RNG conditions to create weighted outcomes:

```yaml
# Activator 0 — fires on rolls 1-2 (20%)
activator0:
  option: PLAYER_HIT_ENTITY
  cancelEvent: false
  placeholdersConditions:
    plcd0:
      placeholder: '%rng_1,10%'
      comparator: '<='
      value: '2'
  entityCommands:
    - SEND_MESSAGE &aSmall bonus hit!
    - DAMAGE 3

# Activator 1 — fires only on roll 10 (10%)
activator1:
  option: PLAYER_HIT_ENTITY
  cancelEvent: false
  placeholdersConditions:
    plcd0:
      placeholder: '%rng_1,10%'
      comparator: '=='
      value: '10'
  entityCommands:
    - SEND_MESSAGE &c&lBIG HIT!
    - DAMAGE 20
```

:::tip
Each activator independently generates its own random roll. The rolls are **not
shared** between activators — activator0 and activator1 each roll separately, so
both can fire on the same event.
:::

---

## See also

- [Damage | Hit features](/executableitems/questions-or-guides/methods-or-template/damage-or-hit-features) — DAMAGE command, AoE, and entity-type filtering.
- [PlaceholderAPI Expansions](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Expansions) — install the RNG expansion with `/papi ecloud download RNG`.
