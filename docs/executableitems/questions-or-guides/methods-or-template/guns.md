---
description: >-
  Create a gun-style ExecutableItem — right-click to shoot a fast projectile
  with sound and particle effects. Includes a magazine+reload variant using
  variables and a per-shot cooldown.
---

# Guns

<iframe width="560" height="315" src="https://www.youtube.com/embed/2qugSjy5kRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Basic gun (right-click to shoot)

A simple gun that shoots a fast arrow-like projectile on right-click with a per-shot
cooldown and a shooting sound. The projectile is a custom SCore projectile — create it
first with `/score projectiles-create bullet`.

### Projectile config (`plugins/SCore/projectiles/bullet.yml`)

```yaml
type: ARROW
bounce: false
despawnDelay: 3
customNameVisible: false
glowing: false
customName: ''
silent: true
gravity: true
velocity: 8
invisible: false
particlesType: CRIT
particlesAmount: 3
particlesOffSet: 0.1
particlesSpeed: 0.01
particlesDelay: 1
```

### EI item YAML

```yaml
name: '&7🔫 Pistol'
lore:
  - '&7Right-click to shoot.'
material: CROSSBOW
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
    name: '&eShoot'
    option: PLAYER_RIGHT_CLICK
    usageModification: 0
    cancelEvent: true
    silenceOutput: true
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 1            # 1-second cooldown between shots
      isCooldownInTicks: false
      cooldownMsg: '&cReloading...'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    commands:
      - LAUNCH bullet
      - [CONSOLE] playsound minecraft:entity.generic.explode player %player% ~ ~ ~ 0.4 2
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    placeholdersConditions: {}
    variablesModification: {}
```

---

## Gun with magazine + reload

This variant tracks ammo via a `bullets` variable (max 6). Shooting consumes 1 bullet.
When empty, the player must shift-right-click to reload.

```yaml
name: '&7🔫 Revolver'
lore:
  - '&7Right-click to shoot.'
  - '&7Shift+Right-click to reload.'
  - '&7Ammo: &f%var_bullets%&7/&f6'
material: CROSSBOW
glow: false
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: false
cancelEventIfNotOwner: false
usage: 0
usageLimit: -1
variables:
  bullets:
    type: NUMBER
    default: '6'
    display: 'Bullets'

activators:
  # Fire — consumes 1 bullet, cooldown between shots
  activator0:
    name: '&eShoot'
    option: PLAYER_RIGHT_CLICK
    usageModification: 0
    cancelEvent: true
    silenceOutput: true
    autoUpdateItem: true
    updateName: false
    updateLore: true
    cooldownOptions:
      cooldown: 5
      isCooldownInTicks: true     # 5 ticks = 0.25s between shots
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    # Only fire if ammo > 0
    placeholdersConditions:
      plcd0:
        placeholder: '%var_bullets%'
        comparator: '>'
        value: '0'
        messageIfNotValid: '&cOut of ammo! Shift+click to reload.'
    playerConditions:
      ifSneaking: false
    commands:
      - LAUNCH bullet
      - [CONSOLE] playsound minecraft:entity.generic.explode player %player% ~ ~ ~ 0.4 2
    variablesModification:
      varUpdt0:
        variableName: bullets
        type: MODIFICATION
        modification: '-1'

  # Reload — shift+right-click, refills magazine after 2 seconds
  activator1:
    name: '&eReload'
    option: PLAYER_RIGHT_CLICK
    usageModification: 0
    cancelEvent: true
    silenceOutput: true
    autoUpdateItem: true
    updateName: false
    updateLore: true
    cooldownOptions:
      cooldown: 4             # Total reload time
      isCooldownInTicks: false
      cooldownMsg: '&cStill reloading! &e%time_S%s remaining.'
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
      ifSneakingMsg: ''
    commands:
      - SEND_MESSAGE &7Reloading...
      - DELAY 2
      - SEND_MESSAGE &a✓ Reloaded!
      - [CONSOLE] playsound minecraft:item.armor.equip_iron player %player% ~ ~ ~ 1 0.8
    variablesModification:
      varUpdt0:
        variableName: bullets
        type: SET
        modification: '6'       # Refill to max
```

---

## Tips

- **Shotgun spread**: see [Multiple Projectiles on One Item](/executableitems/questions-or-guides/methods-or-template/multiple-projectiles-on-one-item) for how to launch several projectiles in a cone with `angleRotationHorizontal`.
- **Damage**: use a `PROJECTILE_HIT_PLAYER` or `PROJECTILE_HIT_ENTITY` activator on the gun to apply custom damage when the bullet hits.
- **Sound variety**: `minecraft:entity.arrow.shoot` (bow), `minecraft:item.crossbow.shoot` (crossbow), or `minecraft:entity.blaze.shoot` (sci-fi) for different gun feels.
- **Sniper**: increase projectile `velocity` to 15–20 and set `gravity: false` for a hitscan-style straight shot.
