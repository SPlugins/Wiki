---
description: >-
  A high-powered grappling hook that launches an invisible projectile and pulls
  the player to wherever it hits — Attack on Titan style. Full YAML for both
  the EI item and the custom projectile configuration.
---

# High-Powered Grappling Hook

<iframe width="560" height="315" src="https://www.youtube.com/embed/bEUAkqFNbx0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::info Premium
`PROJECTILE_HIT_BLOCK` (used in activator 2 below) is a **premium** activator.
:::

---

## How it works

1. **Right-click** fires an invisible, fast-moving projectile (`PLAYER_RIGHT_CLICK` →
   `LAUNCH grapple_proj`).
2. When the projectile **hits a block** (`PROJECTILE_HIT_BLOCK`), three `CUSTOMDASH1`
   commands with 2-tick delays pull the player toward the impact block, replicating the
   arc of a grapple hook.

`despawnDelay: 1` on the projectile keeps it fast and short-range — it despawns 1
second after launch, preventing it from hitting blocks far in the distance.

---

## Step 1 — Create the projectile

Run `/score projectiles-create grapple_proj` and configure it (or edit the YAML
directly in `plugins/SCore/projectiles/grapple_proj.yml`):

```yaml
type: SNOWBALL
bounce: false
despawnDelay: 1
customNameVisible: false
glowing: false
customName: ''
silent: true
gravity: false
velocity: 5
invisible: true
visualItem: ''
particlesType: FIREWORKS_SPARK
particlesAmount: 2
particlesOffSet: 0.05
particlesSpeed: 0
particlesDelay: 1
```

Key settings explained:

| Field | Value | Why |
|---|---|---|
| `type` | `SNOWBALL` | Travels in a straight line, not affected by gravity when gravity=false |
| `velocity` | `5` | Very fast so it reaches the target almost instantly |
| `despawnDelay` | `1` | Despawns after 1 second — prevents hitting blocks too far away |
| `gravity` | `false` | Straight flight path, like a real grapple hook |
| `invisible` | `true` | Only the particles are visible — the snowball itself is hidden |
| `particlesType` | `FIREWORKS_SPARK` | Visible trail showing the hook's path |

---

## Step 2 — Create the EI item

```yaml
name: '&8⚓ Grappling Hook'
lore:
  - '&7Right-click to launch the hook.'
  - '&7Pulls you to where it lands.'
material: LEAD
glow: false
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: false
cancelEventIfNotOwner: false
usage: 0
usageLimit: -1
variables: {}

activators:
  # Activator 1 — launch the grapple projectile on right-click
  activator0:
    name: '&eLaunch grapple'
    option: PLAYER_RIGHT_CLICK
    usageModification: 0
    cancelEvent: true
    silenceOutput: true
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 2
      isCooldownInTicks: false
      cooldownMsg: '&cGrapple on cooldown! &e%time_S%s remaining.'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    commands:
      - LAUNCH grapple_proj
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    placeholdersConditions: {}
    variablesModification: {}

  # Activator 2 (premium) — when the projectile hits a block, pull player to it
  activator1:
    name: '&eDash to grapple point'
    option: PROJECTILE_HIT_BLOCK
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
    # Three CUSTOMDASH1 calls with short delays replicate the grapple arc
    commands:
      - CUSTOMDASH1 %block_x% %block_y% %block_z%
      - DELAYTICK 2
      - CUSTOMDASH1 %block_x% %block_y% %block_z%
      - DELAYTICK 2
      - CUSTOMDASH1 %block_x% %block_y% %block_z%
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    placeholdersConditions: {}
    variablesModification: {}
```

:::tip
`%block_x%`, `%block_y%`, `%block_z%` are the coordinates of the block the projectile
hit. Three `CUSTOMDASH1` calls improve the accuracy of the pull and smooth out the arc.
See [Placeholders](/tools-for-all-plugins-score/placeholders) for all available
block placeholders in `PROJECTILE_HIT_BLOCK` activators.
:::

---

## Variations

### Add sound and particle effects

In `activator1` commands:

```yaml
commands:
  - [CONSOLE] playsound minecraft:entity.leash_knot.place player %player% ~ ~ ~ 1 0.8
  - CUSTOMDASH1 %block_x% %block_y% %block_z%
  - DELAYTICK 2
  - CUSTOMDASH1 %block_x% %block_y% %block_z%
  - DELAYTICK 2
  - CUSTOMDASH1 %block_x% %block_y% %block_z%
  - [CONSOLE] particle crit %player_x% %player_y% %player_z% 0.5 0.5 0.5 0.5 10
```

### Longer range (increase despawnDelay)

Change `despawnDelay: 1` to `despawnDelay: 3` in the projectile config to allow the
hook to travel further before despawning. Compensate with a longer cooldown on the
EI item so players can't carpet-bomb an area.

### Reduce velocity for a more realistic arc

Lower `velocity` to `2` or `3` and enable `gravity: true` in the projectile for a
parabolic throw (like a real grappling hook) instead of a straight shot.

---

## See also

- [Creating a Basic Projectile](/executableitems/questions-or-guides/custom-projectiles-implementation/creating-a-basic-projectile) — how to use `/score projectiles-create`.
- [Custom Projectiles System](/tools-for-all-plugins-score/custom-projectiles) — full projectile config reference.
- [CUSTOMDASH1](/tools-for-all-plugins-score/custom-commands/player-and-target-commands) — the dash command that pulls the player.
- [Trident That Works When Not Raining](/executableitems/questions-or-guides/items-explanations/trident-that-works-when-not-raining) — similar projectile-follow mechanic using `PLAYER_CUSTOM_LAUNCH`.
