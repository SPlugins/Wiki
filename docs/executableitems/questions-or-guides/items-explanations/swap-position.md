---
description: >-
  An item that swaps your position with a player you hit — complete with YAML
  using PLAYER_HIT_PLAYER and the player_x_initial placeholder to capture the
  hitter's original location before the swap teleport runs.
---

# Swap Position

<iframe width="560" height="315" src="https://www.youtube.com/embed/3BlpSdesYIo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## How it works

The swap uses the **`PLAYER_HIT_PLAYER`** activator, which fires when the item holder
(the *attacker*) hits another player (the *target*).

The trick is execution order:

1. **`playerCommands`** run first — the attacker teleports to the target's current location.
2. **`targetCommands`** run second — the target teleports to where the attacker *was*
   (captured by `%player_x_initial%` before step 1 moved them).

`%player_x_initial%` / `%player_y_initial%` / `%player_z_initial%` are the attacker's
coordinates at the **moment the activator fired** — before any teleport moved them.
This is what makes the swap accurate rather than putting both players in the same spot.

See [Placeholders](/tools-for-all-plugins-score/placeholders) for the full placeholder list.

---

## YAML

```yaml
name: '&5⇄ Swap Stick'
lore:
  - '&7Hit a player to swap positions!'
material: BLAZE_ROD
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
    name: '&eSwap position'
    option: PLAYER_HIT_PLAYER
    usageModification: 0
    cancelEvent: false
    silenceOutput: false
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 5
      isCooldownInTicks: false
      cooldownMsg: '&cSwap on cooldown! &e%time_S%s &cremaining.'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    # Step 1 — attacker teleports to target's current location
    commands:
      - SEND_MESSAGE &5⇄ &fSwapping with &e%target%&f!
      - TELEPORT %target_world% %target_x% %target_y% %target_z%
    # Step 2 — target teleports to where attacker was (initial position)
    targetCommands:
      - SEND_MESSAGE &5⇄ &f%player% swapped with you!
      - TELEPORT %player_world% %player_x_initial% %player_y_initial% %player_z_initial%
    playerConditions: {}
    targetConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions: {}
    variablesModification: {}
```

:::tip
`%player_world%` and `%target_world%` let the swap work even across worlds, though
players can only be hit in the same world in vanilla Minecraft.
:::

---

## Variations

### Add a visual effect on swap

```yaml
commands:
  - SEND_MESSAGE &5⇄ &fSwapping with &e%target%&f!
  - [CONSOLE] particle end_rod %player_x% %player_y% %player_z% 1 1 1 0.1 20 force
  - TELEPORT %target_world% %target_x% %target_y% %target_z%
targetCommands:
  - SEND_MESSAGE &5⇄ &f%player% swapped with you!
  - [CONSOLE] particle end_rod %target_x% %target_y% %target_z% 1 1 1 0.1 20 force
  - TELEPORT %player_world% %player_x_initial% %player_y_initial% %player_z_initial%
```

### Permission gate (only VIPs can swap)

Add to `playerConditions`:

```yaml
playerConditions:
  ifHasPermission:
    - vip.swap
  ifHasPermissionMsg: '&cYou need VIP to use this swap!'
```
