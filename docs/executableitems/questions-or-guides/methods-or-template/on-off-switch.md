---
description: >-
  Create an EI item that toggles between an ON and OFF state using a variable
  and two activators with placeholder conditions — right-click to toggle,
  each state runs different commands. Full YAML included.
---

# On / Off Switch

An On/Off Switch item uses a **variable** to track state (0 = OFF, 1 = ON) and
**two activators** that each check the current state before running. Only the
activator matching the current state fires; the other is blocked by its condition.

:::info Premium required
`otherEICooldowns` (used to prevent both activators from firing on the same click)
requires ExecutableItems **Premium**.
:::

---

## How it works

1. **Activator 0** (Turn ON): fires only when `%var_x% == 0`. Runs "ON" commands.
   Sets `x = 1`. Puts a 1-tick cooldown on activator 1 to prevent it firing too.
2. **Activator 1** (Turn OFF): fires only when `%var_x% == 1`. Runs "OFF" commands.
   Sets `x = 0`. Puts a 1-tick cooldown on activator 0.

The 1-tick cooldown via `otherEICooldowns` is critical — without it, both activators
fire on the same click (since both `PLAYER_ALL_CLICK` activators see the same event).

---

## Full YAML

```yaml
name: '&e&lOn/Off Demo'
lore:
  - '&7State: &f%var_x%'
material: LEVER
glow: true
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: false
cancelEventIfNotOwner: false
usage: 1
usageLimit: -1
variables:
  x:
    variableName: x
    type: NUMBER
    default: 0.0

activators:
  # Activator 0 — fires when OFF (x = 0), toggles to ON
  activator0:
    name: '&eToggle-On'
    option: PLAYER_ALL_CLICK
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: true
    updateName: false
    updateLore: true
    # Put a 1-tick cooldown on activator1 so it can't also fire this click
    otherEICooldowns:
      cd0:
        executableItem: onoff-demo     # Replace with your item's ID
        activators:
          - activator1
        cooldown: 1
        isCooldownInTicks: true
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
    # Only fires when x == 0 (OFF state)
    placeholdersConditions:
      plcd0:
        placeholder: '%var_x%'
        comparator: '=='
        value: '0.0'
        messageIfNotValid: ''
    commands:
      - SEND_MESSAGE &a✦ Toggled ON
      # Add your ON commands here
    variablesModification:
      varModif0:
        variableName: x
        type: SET
        modification: 1.0    # Switch to ON state

  # Activator 1 — fires when ON (x = 1), toggles to OFF
  activator1:
    name: '&eToggle-Off'
    option: PLAYER_ALL_CLICK
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: true
    updateName: false
    updateLore: true
    # Put a 1-tick cooldown on activator0 so it can't also fire this click
    otherEICooldowns:
      cd0:
        executableItem: onoff-demo     # Replace with your item's ID
        activators:
          - activator0
        cooldown: 1
        isCooldownInTicks: true
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
    # Only fires when x == 1 (ON state)
    placeholdersConditions:
      plcd0:
        placeholder: '%var_x%'
        comparator: '=='
        value: '1.0'
        messageIfNotValid: ''
    commands:
      - SEND_MESSAGE &c✦ Toggled OFF
      # Add your OFF commands here
    variablesModification:
      varModif0:
        variableName: x
        type: SET
        modification: 0.0    # Switch to OFF state
```

:::tip
Replace `onoff-demo` in both `otherEICooldowns` sections with your actual EI item ID.
:::

---

## Practical example — Fly toggle

Combine the ON/OFF pattern with `FLY_ON` and `FLY_OFF` commands:

```yaml
# In activator0 (turn ON):
commands:
  - FLY_ON
  - SEND_MESSAGE &a✦ Flight enabled!

# In activator1 (turn OFF):
commands:
  - FLY OFF
  - SEND_MESSAGE &c✦ Flight disabled!
```

---

## Tips

- **Lore display**: use `%var_x%` or a placeholder condition in the lore to show the
  current state. Enable `autoUpdateItem: true` on both activators so the lore refreshes.
- **More than 2 states**: extend the pattern to 3+ states by adding more activators,
  each gated on a different value of `x` (0, 1, 2, ...).
- **Without premium**: if you don't have premium, use a 1-tick `cooldownOptions.cooldown`
  on each activator and rely on sequential activator ordering (activator0 fires first and
  immediately changes `x`, so activator1's condition `x == 1` isn't met yet on the same
  tick... but this can be unreliable — premium's `otherEICooldowns` is the clean solution).
