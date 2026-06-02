---
description: >-
  An item that toggles item frames between visible and invisible — right-click
  an item frame to hide or show it. Uses PLAYER_CLICK_ON_ENTITY with a variable
  to track per-item state and vanilla data commands for the toggle.
---

# Item Frame Visibility Toggler

<iframe width="560" height="315" src="https://www.youtube.com/embed/_dOgiEYh4BA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## How it works

The toggler uses **`PLAYER_CLICK_ON_ENTITY`** — which fires when a player right-clicks
any entity while holding the item. When the clicked entity is an item frame, a vanilla
`data modify` command sets the `Visible` NBT tag to `0b` (hidden) or `1b` (visible).

A `frame_state` variable on the item tracks the current toggle state (`VISIBLE` or
`HIDDEN`), so the correct command runs on the next click.

:::info
`%entity_uuid%` is available in `PLAYER_CLICK_ON_ENTITY` activators and refers to the
exact entity the player right-clicked. This ensures only the targeted item frame is
affected — not every nearby frame.
:::

---

## YAML

```yaml
name: '&b🖼 Frame Toggler'
lore:
  - '&7Right-click an item frame to toggle it.'
  - '&7State: &f%var_frame_state%'
material: BLAZE_ROD
glow: false
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: false
cancelEventIfNotOwner: false
usage: 0
usageLimit: -1
variables:
  frame_state:
    type: STRING
    default: 'VISIBLE'
    display: 'Frame State'

activators:
  # When current state is VISIBLE — hide the frame
  activator0:
    name: '&eHide frame'
    option: PLAYER_CLICK_ON_ENTITY
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: true
    updateName: false
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
    # Only run when the clicked entity is an item frame
    detailedEntities:
      - ITEM_FRAME
      - GLOW_ITEM_FRAME
    # Only when our tracked state says VISIBLE
    placeholdersConditions:
      plcd0:
        placeholder: '%var_frame_state%'
        comparator: '=='
        value: 'VISIBLE'
    commands:
      - [CONSOLE] data modify entity %entity_uuid% Invisible set value 1b
      - SEND_MESSAGE &7Frame hidden.
    variablesModification:
      varUpdt0:
        variableName: frame_state
        type: SET
        modification: 'HIDDEN'
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}

  # When current state is HIDDEN — show the frame
  activator1:
    name: '&eShow frame'
    option: PLAYER_CLICK_ON_ENTITY
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: true
    updateName: false
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
    detailedEntities:
      - ITEM_FRAME
      - GLOW_ITEM_FRAME
    placeholdersConditions:
      plcd0:
        placeholder: '%var_frame_state%'
        comparator: '=='
        value: 'HIDDEN'
    commands:
      - [CONSOLE] data modify entity %entity_uuid% Invisible set value 0b
      - SEND_MESSAGE &7Frame visible.
    variablesModification:
      varUpdt0:
        variableName: frame_state
        type: SET
        modification: 'VISIBLE'
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
```

:::warning
The `Invisible` NBT tag (capital I) makes the item frame itself invisible — the item
inside the frame remains visible. This is different from removing the frame entirely.

In older Minecraft versions (pre-1.16), use `Visible` with values `0b` (hidden) and
`1b` (shown) instead of `Invisible`.
:::

---

## Limitations

- **State is per-item**: the `frame_state` variable is stored in the toggler item, not
  per item frame. If you hide three frames with one toggler, clicking "show" only
  reveals the next one you click — but you may need to click twice if the state is
  already HIDDEN from a previous hide.
  
  For a stateless version (always hide, or always show), use two separate EI items
  instead of a toggle.

- **Entity type detection**: `detailedEntities` filters for `ITEM_FRAME` and
  `GLOW_ITEM_FRAME`. Right-clicking other entities (mobs, armour stands) will not
  trigger these activators.

---

## Simpler: separate Hide and Show tools

If the toggle state tracking is not needed, use two distinct items:

**Frame Hider** — always hides:
```yaml
activators:
  activator0:
    option: PLAYER_CLICK_ON_ENTITY
    cancelEvent: true
    detailedEntities:
      - ITEM_FRAME
      - GLOW_ITEM_FRAME
    commands:
      - [CONSOLE] data modify entity %entity_uuid% Invisible set value 1b
```

**Frame Shower** — always shows:
```yaml
activators:
  activator0:
    option: PLAYER_CLICK_ON_ENTITY
    cancelEvent: true
    detailedEntities:
      - ITEM_FRAME
      - GLOW_ITEM_FRAME
    commands:
      - [CONSOLE] data modify entity %entity_uuid% Invisible set value 0b
```
