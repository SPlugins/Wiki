---
description: >-
  An item that saves your current location on right-click and teleports you
  back to it 30 seconds later — teaching the two-activator variable pattern
  where one activator saves and the next reads the saved value.
---

# Delayed Teleport Towards Saved Location

This item teaches an important EI pattern: using **two activators** to save a
variable and then consume it in a delayed command. Both fire on the same right-click,
but because `variablesModification` runs **after** commands, the save must happen in
activator 0 so that activator 1's commands can read the freshly saved value.

---

## How it works

| Step | What happens |
|---|---|
| Right-click | Activator 0 fires first: saves `%player_x%`, `%player_y%`, `%player_z%` into variables |
| Right-click | Activator 1 fires second: `DELAY 30` waits 30 seconds, then `TELEPORT` uses the saved variables |
| 30 seconds later | Player is teleported back to the saved location |

:::warning Two activators are required
Commands run **before** `variablesModification` within the same activator. If you put
both the save and the teleport in one activator, the teleport command runs with the
**old** variable values (before the save). The two-activator split ensures the save
completes before the teleport reads it.
:::

---

## YAML

```yaml
name: '&b⏱ Return Stone'
lore:
  - '&7Right-click to save your location.'
  - '&7Teleports you back in 30 seconds.'
  - '&8Saved: &7%var_save_x% %var_save_y% %var_save_z%'
material: ENDER_PEARL
glow: true
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: false
cancelEventIfNotOwner: false
usage: 0
usageLimit: -1
variables:
  save_x:
    type: STRING
    default: '0'
  save_y:
    type: STRING
    default: '0'
  save_z:
    type: STRING
    default: '0'
  save_world:
    type: STRING
    default: 'world'

activators:
  # Activator 0 — save current location into variables (fires first)
  activator0:
    name: '&eSave location'
    option: PLAYER_RIGHT_CLICK
    usageModification: 0
    cancelEvent: false
    silenceOutput: true
    autoUpdateItem: true          # Refreshes lore to show saved coords
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
    commands: []         # No commands — variablesModification runs here after commands
    variablesModification:
      varUpdt0:
        variableName: save_x
        type: SET
        modification: '%player_x%'
      varUpdt1:
        variableName: save_y
        type: SET
        modification: '%player_y%'
      varUpdt2:
        variableName: save_z
        type: SET
        modification: '%player_z%'
      varUpdt3:
        variableName: save_world
        type: SET
        modification: '%player_world%'
    playerConditions: {}
    worldConditions: {}

  # Activator 1 — reads saved vars and teleports after delay (fires second)
  activator1:
    name: '&eTeleport after delay'
    option: PLAYER_RIGHT_CLICK
    usageModification: 0
    cancelEvent: false
    silenceOutput: true
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 35        # Slightly longer than the delay to avoid overlapping teleports
      isCooldownInTicks: false
      cooldownMsg: '&cAlready returning! &e%time_S%s remaining.'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    commands:
      - SEND_MESSAGE &7Location saved. &bReturning in 30 seconds...
      - DELAY 30
      - TELEPORT %var_save_world% %var_save_x% %var_save_y% %var_save_z%
      - SEND_MESSAGE &b✓ Teleported back to your saved location!
    variablesModification: {}
    playerConditions: {}
    worldConditions: {}
```

:::note
`%var_save_x%` etc. are resolved **when the TELEPORT command runs** (after the
30-second delay). Because those values were already written into the item's NBT by
activator 0, they reflect the location at the moment the player right-clicked — not
where the player is after the delay expires.
:::

---

## Why the activator order matters

Activators execute sequentially by ID: `activator0` → `activator1`.

Within each activator: **commands run first**, then `variablesModification`.

So the full sequence when the player right-clicks is:

```
activator0: commands (empty) → variablesModification (saves x/y/z/world)
activator1: commands (DELAY 30 → TELEPORT %var_save_x%) → variablesModification (empty)
```

When activator1's `TELEPORT` command finally fires (30 seconds later), it reads
`%var_save_x%` from the item NBT — the value activator0 already wrote. Reversing the
activator order would mean activator1 reads the **previously saved** location (from
the last use), not the current one.

---

## Variations

### Instant recall (no delay)

Remove the `DELAY 30` line from activator1:

```yaml
commands:
  - SEND_MESSAGE &b✓ Teleported back to saved location!
  - TELEPORT %var_save_world% %var_save_x% %var_save_y% %var_save_z%
```

### Separate save and return triggers

Bind the save to right-click and the return to shift+right-click:

```yaml
activator0:
  option: PLAYER_RIGHT_CLICK
  playerConditions:
    ifSneaking: false
  # saves coordinates ...

activator1:
  option: PLAYER_RIGHT_CLICK
  playerConditions:
    ifSneaking: true
    ifSneakingMsg: ''
  commands:
    - TELEPORT %var_save_world% %var_save_x% %var_save_y% %var_save_z%
```
