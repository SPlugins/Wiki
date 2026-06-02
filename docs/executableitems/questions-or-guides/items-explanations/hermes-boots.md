---
description: >-
  Boots that grant stacking speed bonuses the more you sprint — speed builds up
  each time you start a new sprint burst and resets when you stop moving.
  YAML using PLAYER_ENABLE_SPRINT and PLAYER_DISABLE_SPRINT activators.
---

# Hermes Boots

<iframe width="560" height="315" src="https://www.youtube.com/embed/SwIMbgrUm3E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## How it works

The boots track a `speed_stacks` variable stored in the item. Each time the player
**starts** a new sprint burst (`PLAYER_ENABLE_SPRINT`), the stacks increase by one and
a speed potion effect is applied at the new level. When the player **stops** sprinting
(`PLAYER_DISABLE_SPRINT`), the effect is cleared and stacks reset to zero.

The execution order (commands run **before** `variablesModification`) means:

| Event | Commands see | After: variable becomes |
|---|---|---|
| Sprint start #1 | `speed_stacks = 0` → no effect | `1` |
| Sprint start #2 | `speed_stacks = 1` → Speed I | `2` |
| Sprint start #3 | `speed_stacks = 2` → Speed II | `3` |
| Sprint stop | clear effect | `0` (reset) |

The cap is enforced with a `placeholdersConditions` check — once max stacks are
reached, the increment activator won't fire again.

---

## YAML

```yaml
name: '&e⚡ Hermes Boots'
lore:
  - '&7Sprint to build speed stacks.'
  - '&7Stacks: &f%var_speed_stacks% &7/ &f5'
  - '&7Stop sprinting to reset.'
material: GOLDEN_BOOTS
glow: true
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: false
cancelEventIfNotOwner: false
usage: 0
usageLimit: -1
variables:
  speed_stacks:
    type: NUMBER
    default: '0'
    display: 'Speed Stacks'

activators:
  # Sprint START — increment stacks if below cap, apply speed
  activator0:
    name: '&eSprint start — add stack'
    option: PLAYER_ENABLE_SPRINT
    usageModification: 0
    cancelEvent: false
    silenceOutput: true
    autoUpdateItem: true
    updateName: false
    updateLore: true
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
    # Speed level = current stacks (before increment fires)
    commands:
      - [CONSOLE] effect give %player% speed 72000 %var_speed_stacks_int% true
    # Only increment if below 5 stacks
    placeholdersConditions:
      plcd0:
        placeholder: '%var_speed_stacks%'
        comparator: '<'
        value: '5'
    variablesModification:
      varUpdt0:
        variableName: speed_stacks
        type: MODIFICATION
        modification: '1'
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}

  # Sprint START — at cap, keep applying max speed but don't increment
  activator1:
    name: '&eSprint start — max stacks'
    option: PLAYER_ENABLE_SPRINT
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
    commands:
      - [CONSOLE] effect give %player% speed 72000 %var_speed_stacks_int% true
    placeholdersConditions:
      plcd0:
        placeholder: '%var_speed_stacks%'
        comparator: '>='
        value: '5'
    variablesModification: {}
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}

  # Sprint STOP — clear effect and reset stacks
  activator2:
    name: '&eReset on stop'
    option: PLAYER_DISABLE_SPRINT
    usageModification: 0
    cancelEvent: false
    silenceOutput: true
    autoUpdateItem: true
    updateName: false
    updateLore: true
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
    commands:
      - [CONSOLE] effect clear %player% speed
    variablesModification:
      varUpdt0:
        variableName: speed_stacks
        type: SET
        modification: '0'
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    placeholdersConditions: {}
```

:::note
Speed level `0` in `effect give` applies no visible boost (equivalent to no Speed effect).
This is intentional — the first sprint burst "primes" the boots at zero speed, with the
first real bonus appearing on the second burst.

To start at Speed I immediately, initialize `speed_stacks` default to `1` instead of `0`.
:::

---

## Continuous stacking with LOOP (premium)

The free version stacks only on each new sprint start/stop cycle. With the **LOOP**
premium activator, stacks build up *while you are already sprinting* — giving the true
"the longer you run, the faster you go" feeling:

```yaml
  activator3:
    name: '&eSprint loop'
    option: LOOP
    usageModification: 0
    cancelEvent: false
    silenceOutput: true
    autoUpdateItem: true
    updateName: false
    updateLore: true
    loopOptions:
      delay: 40           # 2 seconds per stack gain
      delayInTicks: true
    # Check the player is actually sprinting via PAPI or scoreboard
    placeholdersConditions:
      plcd0:
        placeholder: '%var_speed_stacks%'
        comparator: '<'
        value: '5'
    commands:
      - [CONSOLE] effect give %player% speed 72000 %var_speed_stacks_int% true
    variablesModification:
      varUpdt0:
        variableName: speed_stacks
        type: MODIFICATION
        modification: '1'
```

Combine with `activator2` (reset on stop) for the full Hermes experience.

---

## Tips

- Increase the cap from `5` to `10` for a longer ramp-up.
- Replace the `effect give` vanilla command with the `ADD_ITEM_ATTRIBUTE` command for a
  smoother speed curve that doesn't show a potion icon.
- Add a sound effect (`[CONSOLE] playsound minecraft:entity.experience_orb.pickup player %player% ~ ~ ~ 1 1.5`) each time a stack is added for audio feedback.
