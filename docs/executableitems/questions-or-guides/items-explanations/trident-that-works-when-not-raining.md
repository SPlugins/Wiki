---
description: >-
  A trident that launches the player like a Riptide enchantment — even when it
  is not raining. Uses a custom invisible projectile to replicate the motion,
  with a world condition blocking the launch during rain if desired.
---

# Trident That Works When Not Raining

The vanilla trident's **Riptide** enchantment only launches the player when it is
raining or the player is in water. This EI trident removes that restriction and works
anywhere — while optionally adding a weather condition to preserve realism.

---

## How it works

1. **Item** — a TRIDENT material with a `PLAYER_LAUNCH_PROJECTILE` activator.
2. **Custom projectile** — an invisible snowball launched in the direction the player
   is facing.
3. **`PLAYER_CUSTOM_LAUNCH` activator** — when the invisible projectile is in flight,
   this fires and runs `CUSTOMDASH1` three times (with a 1-tick delay between each) to
   pull the player toward the projectile's position, mimicking the Riptide arc.

`cancelEvent: true` on the launch activator prevents the real trident from being
thrown, so it stays in the player's inventory.

---

## Step 1 — Create the custom projectile

Run `/score projectiles-create trident_rocket` and configure:

| Setting | Value |
|---|---|
| Projectile type | `SNOWBALL` |
| Invisible | `true` |
| Silent | `true` |
| Gravity | `false` |
| Velocity | `4.3` |

Higher velocity = more powerful launch. Save the projectile.

---

## Step 2 — Create the trident EI item

```yaml
name: '&b⚡ Riptide Trident'
lore:
  - '&7Throw to launch yourself!'
  - '&7Works even without rain.'
material: TRIDENT
glow: false
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: false
cancelEventIfNotOwner: false
usage: 0
usageLimit: -1
variables: {}

activators:
  # Activator 1 — when the player throws the trident, launch the invisible projectile
  activator0:
    name: '&eLaunch projectile'
    option: PLAYER_LAUNCH_PROJECTILE
    usageModification: 0
    cancelEvent: true            # Prevent the real trident from flying
    silenceOutput: true
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 3
      isCooldownInTicks: false
      cooldownMsg: '&cTrident on cooldown! &e%time_S%s remaining.'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    commands:
      - LAUNCH trident_rocket      # Launch the invisible projectile
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    placeholdersConditions: {}
    variablesModification: {}

  # Activator 2 — when the invisible projectile is in flight, pull player toward it
  activator1:
    name: '&eDash toward projectile'
    option: PLAYER_CUSTOM_LAUNCH
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
    commands:
      - CUSTOMDASH1 %projectile_x% %projectile_y% %projectile_z%
      - DELAYTICK 1
      - CUSTOMDASH1 %projectile_x% %projectile_y% %projectile_z%
      - DELAYTICK 1
      - CUSTOMDASH1 %projectile_x% %projectile_y% %projectile_z%
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    placeholdersConditions: {}
    variablesModification: {}
```

:::info
`%projectile_x%`, `%projectile_y%`, `%projectile_z%` are placeholders available
inside `PLAYER_CUSTOM_LAUNCH` — they give the current position of the projectile in
flight. Three `CUSTOMDASH1` calls with 1-tick delays between them produce the arcing
Riptide-style motion.
:::

---

## Optional — restrict to dry weather only

To make the trident only work when it is **not raining** (add `worldConditions` to
`activator0`):

```yaml
    worldConditions:
      ifWeather:
        - CLEAR
      ifWeatherMsg: '&cThis trident only works in clear weather!'
```

Or invert it — **only** work when raining (matching vanilla Riptide):

```yaml
    worldConditions:
      ifWeather:
        - RAIN
        - STORM
      ifWeatherMsg: '&cThis trident requires rain!'
```

---

## Adding particles and sound

In `activator1` commands:

```yaml
commands:
  - CUSTOMDASH1 %projectile_x% %projectile_y% %projectile_z%
  - [CONSOLE] playsound minecraft:item.trident.riptide_1 player %player% ~ ~ ~ 1 1
  - [CONSOLE] particle end_rod %projectile_x% %projectile_y% %projectile_z% 0.3 0.3 0.3 0.05 10
  - DELAYTICK 1
  - CUSTOMDASH1 %projectile_x% %projectile_y% %projectile_z%
  - DELAYTICK 1
  - CUSTOMDASH1 %projectile_x% %projectile_y% %projectile_z%
```

---

## See also

- [Creating a Basic Projectile](/executableitems/questions-or-guides/custom-projectiles-implementation/creating-a-basic-projectile) — step-by-step projectile creation guide.
- [Custom Projectiles System](/tools-for-all-plugins-score/custom-projectiles) — full projectile configuration reference.
- [CUSTOMDASH1](/tools-for-all-plugins-score/custom-commands/player-and-target-commands) — the dash command used to replicate Riptide motion.
- [World Conditions](/tools-for-all-plugins-score/custom-conditions/world-conditions) — `ifWeather` and other world-based conditions.
