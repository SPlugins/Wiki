---
description: >-
  An elytra firework rocket that never runs out — right-click it to get an
  elytra boost just like a vanilla firework, then get one automatically replaced
  in your inventory. Full YAML with two implementation approaches.
---

# Infinite Rockets

Many people have asked how to do this, and since we repeat it a lot, its here.

---

## How it works

In vanilla Minecraft, right-clicking a firework rocket while elytra-gliding consumes
the rocket and gives a speed boost. The EI infinite rocket works by **replenishing the
item** immediately after it's consumed so the player always has one in their inventory.

---

## Approach 1 — Auto-replenish on right-click (simplest)

The `PLAYER_RIGHT_CLICK` activator fires when the player right-clicks the item.
With `cancelEvent: false`, the vanilla firework boost still happens and the item is
consumed — then the EI command gives one back.

```yaml
name: '&b∞ Infinite Rocket'
lore:
  - '&7Right-click while gliding to boost!'
  - '&7Automatically replenishes.'
material: FIREWORK_ROCKET
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
    name: '&eReplenish on use'
    option: PLAYER_RIGHT_CLICK
    usageModification: 0
    cancelEvent: false           # Let vanilla consume + boost happen normally
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
      - [CONSOLE] ei give %player% infinite_rocket 1
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    placeholdersConditions: {}
    variablesModification: {}
```

:::tip
Replace `infinite_rocket` in the `ei give` command with whatever ID you chose when
running `/ei create <id>`.
:::

---

## Approach 2 — FIREWORK_BOOST command (item never consumed)

Use `cancelEvent: true` to block the vanilla right-click event (the rocket stays in
inventory) and manually trigger the boost via `FIREWORK_BOOST`. The player keeps the
exact item — nothing is ever consumed or replaced.

```yaml
name: '&b∞ Infinite Rocket'
lore:
  - '&7Right-click while gliding to boost!'
  - '&7Never consumed.'
material: FIREWORK_ROCKET
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
    name: '&eBoost — no consume'
    option: PLAYER_RIGHT_CLICK
    usageModification: 0
    cancelEvent: true            # Prevent vanilla consumption
    silenceOutput: true
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 3                # 3-second cooldown between boosts
      isCooldownInTicks: false
      cooldownMsg: '&cRocket cooling down! &e%time_S%s remaining.'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    # Only fire when the player is actually elytra-gliding
    playerConditions:
      ifGliding: true
      ifGlidingMsg: '&cYou need to be gliding to use this!'
    commands:
      - FIREWORK_BOOST duration:1
    variablesModification: {}
```

:::info
`FIREWORK_BOOST duration:1` spawns a firework with power 1 (short burst). Increase
`duration` for a longer boost. The command only activates while the player is gliding —
the `ifPlayerMustBeGliding` condition enforces this so it can't be used on the ground.
:::

---

## Tips

- **Approach 1** is the simplest and closest to the vanilla feel. The brief frame where
  the slot is empty (between consumption and re-give) is not noticeable in practice.
- **Approach 2** is cleaner — the item is never consumed — but requires the
  `ifPlayerMustBeGliding` condition so the boost isn't wasted on the ground.
- Add a sound on boost:
  `[CONSOLE] playsound minecraft:entity.firework_rocket.launch player %player% ~ ~ ~ 1 1`
- Set a **cooldown** in Approach 2 to prevent spam-clicking for unlimited boost.
