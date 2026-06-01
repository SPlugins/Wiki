---
description: >-
  Build furniture that does something — a lamp that toggles, a chest cabinet,
  a chair players can sit on, and a right-click sign that sends messages.
  Step-by-step examples with full YAML.
---

# Interactive Furniture with Activators

Activators let placed furniture **react to player interactions** — right-clicks, breaks,
placements, or even scrolling. Combined with display commands, conditions, and cooldowns,
they turn a static model into a fully interactive object.

:::info Prerequisites
- [Getting Started](/myfurniture/question-or-guides/tutorials/getting-started) — you should already have at least one furniture imported and working.
- [List of Activators](/myfurniture/configurations/activator-configuration/list-of-the-activators) — complete list of available trigger types.
- [Activator Features](/myfurniture/configurations/activator-configuration/activators-features) — all options available inside an activator.
:::

---

## How activators work

Activators live inside the `activators` map at the bottom of a furniture YAML file.
Each activator has an `option` (the trigger) and a list of commands to run when that
trigger fires.

```yaml
activators:
  activator0:                          # Unique ID within this furniture (any name)
    name: '&eClick activator'          # Label shown in the editor
    option: PLAYER_RIGHT_CLICK_ON      # What triggers this
    playerCommands:                    # Commands to run for the player
      - SEND_MESSAGE &aYou clicked me!
    cancelEvent: false
```

Reload with `/mf reload` after every change.

---

## Example 1 — Welcome sign (message on placement)

A sign-style furniture that announces itself when a player places it.

```yaml
executableItem: my_sign

displayFeatures:
  itemModel: myfurniture:my_sign/default
  scale: 1.0
  customPitch: 90
  clickToBreak: 1
  viewRange: 20.0
  boundingBoxZones: []

interactionRange: 6.0
dropType: IN_THE_INVENTORY
dropBlockIfItIsBroken: true

sitFeatures:
  playerCanSit: false

storageFeatures:
  enable: false
  title: ''

activators:
  activator0:
    name: '&ePlacement welcome'
    option: PLAYER_PLACE
    playerCommands:
      - SEND_MESSAGE &e&lWelcome! &7Right-click this sign for more info.
    cancelEvent: false
  activator1:
    name: '&eInfo on right-click'
    option: PLAYER_RIGHT_CLICK_ON
    playerCommands:
      - SEND_MESSAGE &7[Sign] &fThis furniture belongs to this location.
      - SEND_MESSAGE &7[Sign] &fBreak it to remove it.
    cancelEvent: false
    cooldownFeatures:
      cooldown: 5
      isCooldownInTicks: false
      cooldownMsg: '&cWait &e%time_S%s &cbefore reading again.'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
```

---

## Example 2 — Chair (players can sit)

Enable sitting with the `sitFeatures` flag. Players right-click to sit and sneak to
stand back up.

```yaml
executableItem: my_chair

displayFeatures:
  itemModel: myfurniture:my_chair/default
  scale: 1.0
  customPitch: 90
  clickToBreak: 3
  viewRange: 20.0
  boundingBoxZones: []

interactionRange: 6.0
dropType: IN_THE_INVENTORY
dropBlockIfItIsBroken: true

sitFeatures:
  playerCanSit: true          # This is all you need to make a chair

storageFeatures:
  enable: false
  title: ''

activators:
  activator0:
    name: '&eSit feedback'
    option: PLAYER_RIGHT_CLICK_ON
    playerCommands:
      - SEND_MESSAGE &7Sit tight! Press &fSneak&7 to stand up.
    cancelEvent: false
    cooldownFeatures:
      cooldown: 30
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
```

:::tip
The sit position is automatically centred on the furniture's bounding box.
If the chair is raised off the ground (e.g. a bar stool), players will float at the
model's height. Adjust `scale` and model geometry in Blockbench to position the
seating point correctly.
:::

---

## Example 3 — Storage cabinet (chest-like furniture)

Furniture can open a virtual chest GUI when right-clicked, acting just like a chest
without looking like one.

```yaml
executableItem: my_cabinet

displayFeatures:
  itemModel: myfurniture:my_cabinet/closed
  scale: 1.0
  customPitch: 90
  clickToBreak: 3
  viewRange: 20.0
  boundingBoxZones: []

interactionRange: 6.0
dropType: IN_THE_INVENTORY
dropBlockIfItIsBroken: true

sitFeatures:
  playerCanSit: false

storageFeatures:
  enable: true                          # Opens a chest GUI on right-click
  title: '&8Cabinet Storage'            # Title shown in the GUI

activators: {}
```

:::warning
Storage contents are tied to the placed furniture instance, not the item. If you break
the cabinet, the contents are **lost** (players receive only the furniture item).
Set `dropBlockIfItIsBroken: false` and `clickToBreak` high to protect stored items.
:::

---

## Example 4 — Toggle lamp (two furniture states)

This is the most powerful pattern: two furniture configs — one for *off* state, one for
*on* state — that swap into each other on right-click.

The `SETFURNITURE` display command replaces the current placed furniture's config with
another furniture ID without moving or re-placing it.

### Step 1 — Create two furniture configs

**`my_lamp_off.yml`** — the default off state:

```yaml
executableItem: my_lamp          # Both states share the same EI item

displayFeatures:
  itemModel: myfurniture:my_lamp/off   # Grey/unlit model
  scale: 1.0
  customPitch: 90
  clickToBreak: 3
  viewRange: 20.0
  boundingBoxZones: []

interactionRange: 6.0
dropType: IN_THE_INVENTORY
dropBlockIfItIsBroken: true

sitFeatures:
  playerCanSit: false
storageFeatures:
  enable: false
  title: ''

activators:
  activator0:
    name: '&eTurn on'
    option: PLAYER_RIGHT_CLICK_ON
    displayCommands:                   # Runs a command on the furniture entity
      - SETFURNITURE my_lamp_on        # Swap to the "on" config
    playerCommands:
      - SEND_MESSAGE &e[Lamp] &fTurned on.
    cancelEvent: false
    cooldownFeatures:
      cooldown: 1
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
```

**`my_lamp_on.yml`** — the lit state:

```yaml
executableItem: my_lamp          # Same EI item as the off state

displayFeatures:
  itemModel: myfurniture:my_lamp/on    # Bright/lit model
  scale: 1.0
  customPitch: 90
  clickToBreak: 3
  viewRange: 20.0
  boundingBoxZones: []

interactionRange: 6.0
dropType: IN_THE_INVENTORY
dropBlockIfItIsBroken: true

sitFeatures:
  playerCanSit: false
storageFeatures:
  enable: false
  title: ''

activators:
  activator0:
    name: '&eTurn off'
    option: PLAYER_RIGHT_CLICK_ON
    displayCommands:
      - SETFURNITURE my_lamp_off       # Swap back to the "off" config
    playerCommands:
      - SEND_MESSAGE &7[Lamp] &fTurned off.
    cancelEvent: false
    cooldownFeatures:
      cooldown: 1
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
```

### Step 2 — Create two matching models in Blockbench

In your Blockbench project, add two display poses (or two separate models/folders):
- `my_lamp/off` — dark lamp texture
- `my_lamp/on` — glowing lamp texture

Run `/mf pack` to regenerate the resource pack, then `/mf reload`.

### Step 3 — Test it

```
/mf give <yourName> my_lamp_off 1
```

Place the lamp. Right-click to toggle. The model swaps instantly without a re-place animation.

:::note
`SETFURNITURE` only changes the *config* (model, activators, features). The placed position
and any stored variables are preserved. This is how multi-state furniture works in MyFurniture.
:::

---

## Adding conditions to activators

Gate activators behind permissions or other conditions using `playerConditions`.

```yaml
activators:
  activator0:
    name: '&eVIP-only feature'
    option: PLAYER_RIGHT_CLICK_ON
    playerConditions:
      requiredPermissions:
        - myfurniture.vip.use
    playerCommands:
      - SEND_MESSAGE &6[VIP] &fSpecial effect triggered!
      - EFFECT give %player% speed 100 1
    cancelEvent: false
```

See [Player & Target Conditions](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions)
for the full list of available conditions (permission, level, health, placeholder, …).

---

## Tips

- **Multiple activators per furniture**: add `activator1`, `activator2`, etc.  
  Each activator is independent — you can have right-click, scroll-down, and break all on the same piece.
- **Scroll activators** (`PLAYER_SCROLL_DOWN_BY_TARGETING`, `PLAYER_SCROLL_UP_BY_TARGETING`) fire when
  the player looks at the furniture and scrolls their mouse wheel — great for volume knobs or page-turners.
- **Global cooldown** (`globalCooldownFeatures`) prevents *all players* from triggering an activator
  for a shared duration — useful for a "boss chest" that only opens once per 10 minutes server-wide.
- **Use the in-game editor** (`/mf editor`) to build activators via GUI and let the plugin generate
  the YAML — then read the generated file to learn the exact format.
