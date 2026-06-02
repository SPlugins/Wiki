---
description: >-
  A Magnet item that pulls nearby dropped items toward the player on right-click
  — complete with YAML, toggle variant, and filter options.
---

# Magnet

<iframe width="560" height="315" src="https://www.youtube.com/embed/Feo4S6XLxpg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## How it works

The magnet uses the **`PICKUP_MAGNET`** command, which pulls nearby dropped item
entities toward the player for a configurable duration. The command handles the
physics, particles, and item-pickup delays automatically.

```
PICKUP_MAGNET radius:{blocks} duration:{ticks} speed:{float} itemTypes:{ALL|mat1,mat2} blacklist:{mat1,mat2} particleEffect:{true|false} sound:{true|false} velocityMode:{DIRECT|CURVED}
```

| Parameter | Default | Description |
|---|---|---|
| `radius` | `5.0` | Pull radius in blocks |
| `duration` | `100` | How long to pull, in ticks (20 ticks = 1s). `0` = single pulse |
| `speed` | `0.3` | Item movement speed per tick |
| `itemTypes` | `ALL` | Comma-separated material whitelist, or `ALL` |
| `blacklist` | _(empty)_ | Comma-separated materials to exclude |
| `particleEffect` | `true` | Show PORTAL particles along pull path |
| `sound` | `false` | Play a sound while pulling |
| `velocityMode` | `DIRECT` | `DIRECT` = straight line; `CURVED` = slight arc |

---

## Basic magnet (right-click to activate)

Right-click activates the magnet for 5 seconds (100 ticks). The cooldown prevents
re-activating while already active.

```yaml
name: '&b✦ Magnet'
lore:
  - '&7Right-click to attract nearby items.'
  - '&7Range: &f8 blocks &7| &7Duration: &f5s'
material: COMPASS
glow: true
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: false
cancelEventIfNotOwner: false
usage: 0
usageLimit: -1
variables: {}

activators:
  activator0:
    name: '&eActivate magnet'
    option: PLAYER_RIGHT_CLICK
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 7
      isCooldownInTicks: false
      cooldownMsg: '&cMagnet recharging! &e%time_S%s &cremaining.'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    commands:
      - SEND_MESSAGE &b✦ &fMagnet activated!
      - PICKUP_MAGNET radius:8.0 duration:100 speed:0.4 itemTypes:ALL blacklist: particleEffect:true sound:false velocityMode:DIRECT
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions: {}
    variablesModification: {}
```

---

## Toggle magnet (right-click to turn on/off)

Uses a boolean variable to track the on/off state. When `on`, a **LOOP** activator
(premium) continuously runs the magnet command every second.

```yaml
name: '&b✦ Magnet'
lore:
  - '&7Right-click to toggle.'
  - '&7Status: &f%var_magnet_active%'
material: COMPASS
glow: true
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: false
cancelEventIfNotOwner: false
usage: 0
usageLimit: -1
variables:
  magnet_active:
    type: STRING
    default: 'OFF'
    display: '&7Status'

activators:
  activator0:
    name: '&eToggle ON'
    option: PLAYER_RIGHT_CLICK
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: true
    updateName: true
    updateLore: true
    cooldownOptions:
      cooldown: 1
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
      - SEND_MESSAGE &b✦ &fMagnet &aON&f!
    playerConditions:
      placeholdersConditions: {}
    placeholdersConditions:
      plcd0:
        placeholder: '%var_magnet_active%'
        comparator: '=='
        value: 'OFF'
    variablesModification:
      varUpdt0:
        variableName: magnet_active
        type: SET
        modification: 'ON'

  activator1:
    name: '&eToggle OFF'
    option: PLAYER_RIGHT_CLICK
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: true
    updateName: true
    updateLore: true
    cooldownOptions:
      cooldown: 1
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
      - SEND_MESSAGE &b✦ &fMagnet &cOFF&f!
    placeholdersConditions:
      plcd0:
        placeholder: '%var_magnet_active%'
        comparator: '=='
        value: 'ON'
    variablesModification:
      varUpdt0:
        variableName: magnet_active
        type: SET
        modification: 'OFF'

  activator2:
    name: '&eMagnet loop'
    option: LOOP
    usageModification: 0
    cancelEvent: false
    silenceOutput: true
    autoUpdateItem: false
    loopOptions:
      delay: 20
      delayInTicks: true
    commands:
      - PICKUP_MAGNET radius:8.0 duration:0 speed:0.4 itemTypes:ALL blacklist: particleEffect:true sound:false velocityMode:DIRECT
    placeholdersConditions:
      plcd0:
        placeholder: '%var_magnet_active%'
        comparator: '=='
        value: 'ON'
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
    variablesModification: {}
```

:::info
`activator2` uses `LOOP` which is a **premium** activator. It fires every 20 ticks
(1 second) only when `magnet_active` is `ON`. Set `duration:0` so each loop tick does
a single pull pulse rather than starting a 5-second pull that overlaps the next tick.
:::

---

## Tips

- **Filter by item type**: change `itemTypes:ALL` to `itemTypes:DIAMOND,EMERALD,GOLD_INGOT`
  to only pull valuable drops.
- **Blacklist**: add materials to `blacklist:` (e.g., `blacklist:COBBLESTONE,DIRT`) to
  skip junk items.
- **`CURVED` mode**: gives items a slight arc as they fly toward you — looks more
  magical with `particleEffect:true`.
- **Radius**: 8–12 blocks works well in practice. Very large radii (20+) can affect
  server performance since the command scans nearby entities every tick.
