---
description: >-
  Create a custom totem-of-undying equivalent using PLAYER_BEFORE_DEATH —
  an item that saves the player from death, applies revival effects, and
  is consumed on use. Works in any hand slot.
---

# Custom Totems

<iframe width="560" height="315" src="https://www.youtube.com/embed/NqAscbnaLCM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## How it works

The **`PLAYER_BEFORE_DEATH`** activator fires *before* the player actually dies,
giving the item a chance to save them. This is how the vanilla Totem of Undying works
internally. By using this activator with `cancelEvent: true`, the death is cancelled
and any revival effects can be applied.

Setting `usageModification: -1` with `usage: 1` (or `0`) makes the totem consume
itself on use — just like the vanilla totem.

:::warning
`cancelEvent: true` on `PLAYER_BEFORE_DEATH` is what prevents the death. Without it,
the activator fires but the player still dies.
:::

---

## Basic custom totem

```yaml
name: '&6✦ Custom Totem'
lore:
  - '&7Saves you from death once.'
  - '&7Grants Regeneration and Fire Resistance.'
material: TOTEM_OF_UNDYING
glow: true
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: false
cancelEventIfNotOwner: false
usage: 1           # 1 use before it disappears (usage 1 → 0 → item gone)
usageLimit: -1
variables: {}

activators:
  activator0:
    name: '&eSave from death'
    option: PLAYER_BEFORE_DEATH
    usageModification: -1          # Consume the totem on activation
    cancelEvent: true              # This is what prevents the actual death
    silenceOutput: false
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
      # Set health to 1 heart after saving
      - SET_HEALTH 2
      # Apply vanilla-style revival effects
      - [CONSOLE] effect give %player% regeneration 45 1 true
      - [CONSOLE] effect give %player% fire_resistance 40 0 true
      - [CONSOLE] effect give %player% absorption 5 1 true
      # Play the totem pop animation/sound
      - [CONSOLE] playsound minecraft:item.totem.use player %player% ~ ~ ~ 1 1
      - SEND_MESSAGE &6✦ &fYour totem saved you!
    playerConditions: {}
    worldConditions: {}
    variablesModification: {}
```

:::tip
`usage: 1` with `usageModification: -1` means the totem disappears after a single
save. To make a reusable totem (e.g. on a 5-minute cooldown), set `usage: 0` and
`usageModification: 0`, then add a `cooldownOptions.cooldown: 300`.
:::

---

## Variants

### Phoenix totem (explode and revive)

```yaml
commands:
  - SET_HEALTH 4
  - [CONSOLE] effect give %player% regeneration 60 2 true
  - [CONSOLE] effect give %player% fire_resistance 60 0 true
  # Explosion effect around the player
  - [CONSOLE] particle flame %player_x% %player_y% %player_z% 1 1 1 0.1 50 force
  - [CONSOLE] execute at %player% run summon tnt ~ ~ ~ {Fuse:1}
  - SEND_MESSAGE &c🔥 &fPhoenix Blessing activated!
```

### Soulbound amulet (teleport to spawn on death)

```yaml
commands:
  - SET_HEALTH 6
  - TELEPORT %player_world% %player_bed_x% %player_bed_y% %player_bed_z%
  - [CONSOLE] effect give %player% regeneration 30 1 true
  - SEND_MESSAGE &b✦ &fYour amulet teleported you to safety!
```

### Reusable totem (cooldown-gated, not consumed)

```yaml
usage: 0                # Not consumed
usageLimit: -1

activators:
  activator0:
    option: PLAYER_BEFORE_DEATH
    usageModification: 0           # Don't consume
    cancelEvent: true
    cooldownOptions:
      cooldown: 300                # 5-minute cooldown between saves
      isCooldownInTicks: false
      cooldownMsg: '&cTotem on cooldown! &e%time_M%m %time_S%s remaining.'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    commands:
      - SET_HEALTH 2
      - [CONSOLE] effect give %player% regeneration 30 1 true
      - [CONSOLE] effect give %player% fire_resistance 20 0 true
      - SEND_MESSAGE &6✦ &fTotem activated! &7(5-minute cooldown)
```

---

## Tips

- Place the totem in any inventory slot (not just off-hand like vanilla) — EI checks
  the slot via `detailedSlots` if needed.
- Combine `PLAYER_BEFORE_DEATH` with `playerConditions` to gate the save (e.g. only
  works above a certain health threshold, or in specific worlds).
- Use `PLAYER_DEATH` (without `cancelEvent`) if you want to run effects *after* the
  player respawns, not to prevent the death.
