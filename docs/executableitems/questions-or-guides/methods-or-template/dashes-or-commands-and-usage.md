---
description: >-
  All EI dash commands explained — DASH, FRONTDASH, BACK_DASH, CUSTOMDASH1/2/3,
  and PROJECTILE_CUSTOMDASH1. Includes examples for a double-jump, side-dodge,
  and a usage-limited dash ability that runs out of charges.
---

# Dashes | Commands & Usage

<iframe width="560" height="315" src="https://www.youtube.com/embed/X4mTRPBildk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Dash commands overview

SCore provides several commands for launching the player (or any entity) in different directions.

| Command | Template | What it does |
|---|---|---|
| `DASH` | `DASH pitch:-1 yaw:-1 power:2` | Launches in the player's look direction at given power |
| `FRONTDASH` | `FRONTDASH {power} [customY] [fallDamage]` | Launches forward (ignores vertical look) |
| `BACK_DASH` | `BACK_DASH {power}` | Launches backward |
| `CUSTOMDASH1` | `CUSTOMDASH1 {x} {y} {z}` | Launches toward world coordinates (X, Y, Z) |
| `CUSTOMDASH2` | `CUSTOMDASH2 {x} {y} {z} {strength}` | Like CUSTOMDASH1 but with a strength multiplier |
| `CUSTOMDASH3` | `CUSTOMDASH3 {function} {maxXValue} [frontZ]` | Smooth dash with a mathematical force curve |
| `PROJECTILE_CUSTOMDASH1` | `PROJECTILE_CUSTOMDASH1 fallDamage:false` | Dashes toward the nearest custom projectile from this item |

:::info
`pitch:-1 yaw:-1` on `DASH` means "use the player's current pitch/yaw." Set explicit
values to override the direction (e.g. `DASH pitch:0 yaw:0 power:3` always dashes north).
:::

---

## Example 1 — Basic forward dash (FRONTDASH)

Right-click to dash in the direction you're facing. A 3-second cooldown limits reuse.

```yaml
name: '&b💨 Dash Boots'
lore:
  - '&7Right-click to dash forward.'
material: LEATHER_BOOTS
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
    name: '&eDash'
    option: PLAYER_RIGHT_CLICK
    usageModification: 0
    cancelEvent: true
    silenceOutput: true
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 3
      isCooldownInTicks: false
      cooldownMsg: '&cDash on cooldown! &e%time_S%s remaining.'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    commands:
      - FRONTDASH 2 0.5 false
      - [CONSOLE] playsound minecraft:entity.enderman.teleport player %player% ~ ~ ~ 0.8 1.5
    playerConditions: {}
    variablesModification: {}
```

`FRONTDASH 2 0.5 false`:
- `2` = forward power
- `0.5` = small upward kick
- `false` = no fall damage

---

## Example 2 — Look-direction dash (DASH)

Launches in the exact direction the player is looking — useful for a dive or a
charged jump.

```yaml
commands:
  - DASH pitch:-1 yaw:-1 power:3
```

Set `power` higher (4–8) for a longer distance. At very high power (10+) players can
fly off cliffs, so pair with a condition or small cooldown.

---

## Example 3 — Usage-limited dash ability

This variant gives the player exactly **5 dashes** per item. Each dash consumes 1
usage point. When usage hits -1, the item disappears.

```yaml
name: '&e⚡ Sprint Charge &7(%usage_remaining% charges)'
lore:
  - '&7Right-click to dash forward.'
  - '&7Uses left: &f%usage_remaining%'
material: FEATHER
glow: true
usage: 5            # Starting charges
usageLimit: -1
variables: {}

activators:
  activator0:
    name: '&eDash (consume charge)'
    option: PLAYER_RIGHT_CLICK
    usageModification: -1          # Each use removes 1 charge
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: true            # Refresh lore to show remaining charges
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
      - FRONTDASH 2.5 0.3 false
      - SEND_MESSAGE &e⚡ Dash! &7%usage_remaining% charges remaining.
    variablesModification: {}
```

:::tip
`usageModification: -1` with `usage: 5` gives exactly 5 uses before the item vanishes.
Use `usageLimit: -1` to allow any number of recharges if you combine this with a
separate reload activator that sets `usageModification: +5`.
:::

---

## Example 4 — Dodge roll (BACK_DASH on sneak + left-click)

```yaml
activators:
  activator0:
    name: '&eDodge roll'
    option: PLAYER_LEFT_CLICK
    usageModification: 0
    cancelEvent: false
    cooldownOptions:
      cooldown: 2
      isCooldownInTicks: false
      cooldownMsg: '&cDodge on cooldown!'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    playerConditions:
      ifSneaking: true
    commands:
      - BACK_DASH 2
      - [CONSOLE] playsound minecraft:entity.player.attack.sweep player %player% ~ ~ ~ 1 1.2
```

---

## See also

- [Multiple Projectiles on One Item](/executableitems/questions-or-guides/methods-or-template/multiple-projectiles-on-one-item) — combining dashes with projectile launches.
- [Guns](/executableitems/questions-or-guides/methods-or-template/guns) — usage-limited shoot mechanic.
- [Player & Target Commands](/tools-for-all-plugins-score/custom-commands/player-and-target-commands) — full command reference including all dash variants.
