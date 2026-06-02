---
description: >-
  Launch multiple projectiles from a single activator — spread pattern for a
  shotgun, a spiral burst, or a forward fan. Uses LAUNCH with
  angleRotationHorizontal to spread projectiles at different angles.
---

# Multiple Projectiles on One Item

<iframe width="560" height="315" src="https://www.youtube.com/embed/yosn1QXV2uc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## How it works

The `LAUNCH` command accepts optional `angleRotationVertical` and
`angleRotationHorizontal` parameters (in degrees) that offset the projectile's
direction from where the player is looking.

Put multiple `LAUNCH` commands in the same activator to fire all of them on a single
right-click. Each launch gets its own angle, creating a spread, fan, or burst pattern.

**Template:**

```
LAUNCH {projectileId} [angleRotationVertical] [angleRotationHorizontal] [velocity]
```

| Parameter | Default | Description |
|---|---|---|
| `angleRotationVertical` | `0` | Pitch offset in degrees (positive = down) |
| `angleRotationHorizontal` | `0` | Yaw offset in degrees (positive = right) |
| `velocity` | `1` | Projectile speed multiplier |

---

## Example 1 — Shotgun (5-pellet horizontal spread)

```yaml
activators:
  activator0:
    name: '&eShotgun blast'
    option: PLAYER_RIGHT_CLICK
    usageModification: 0
    cancelEvent: true
    cooldownOptions:
      cooldown: 15
      isCooldownInTicks: false
      cooldownMsg: '&cPump-action cooldown! &e%time_S%s remaining.'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    commands:
      # 5 pellets spread across -20° to +20° horizontally
      - LAUNCH pellet 0 -20 5
      - LAUNCH pellet 0 -10 5
      - LAUNCH pellet 0   0 5
      - LAUNCH pellet 0  10 5
      - LAUNCH pellet 0  20 5
      - [CONSOLE] playsound minecraft:entity.generic.explode player %player% ~ ~ ~ 0.6 0.8
```

---

## Example 2 — Arrow volley (3 arrows in a vertical arc)

```yaml
commands:
  # Forward arrow + one angled up + one angled down
  - LAUNCH arrow  0  0 3
  - LAUNCH arrow -15 0 3
  - LAUNCH arrow  15 0 3
```

---

## Example 3 — 360° burst (8 projectiles in a circle)

```yaml
commands:
  - LAUNCH fireball 0   0  4
  - LAUNCH fireball 0  45  4
  - LAUNCH fireball 0  90  4
  - LAUNCH fireball 0 135  4
  - LAUNCH fireball 0 180  4
  - LAUNCH fireball 0 225  4
  - LAUNCH fireball 0 270  4
  - LAUNCH fireball 0 315  4
```

:::tip
For a 360° burst to work as intended, the player should be looking straight ahead
(not up or down), otherwise the horizontal circle becomes an ellipse.
:::

---

## Example 4 — Spiral burst (fan with staggered delays)

Add `DELAYTICK` between launches to fire projectiles one at a time in sequence:

```yaml
commands:
  - LAUNCH arrow 0 -30 6
  - DELAYTICK 3
  - LAUNCH arrow 0 -15 6
  - DELAYTICK 3
  - LAUNCH arrow 0   0 6
  - DELAYTICK 3
  - LAUNCH arrow 0  15 6
  - DELAYTICK 3
  - LAUNCH arrow 0  30 6
```

---

## Tips

- Create a **custom SCore projectile** (`/score projectiles-create pellet`) and set
  `invisible: true` + fast velocity for a realistic bullet effect. See
  [Creating a Basic Projectile](/executableitems/questions-or-guides/custom-projectiles-implementation/creating-a-basic-projectile).
- Add a **cooldown** to prevent spam-firing. Use `isCooldownInTicks: true` with a small
  tick value (e.g. `cooldown: 20`) for tight rate-of-fire control.
- Use `LOCATED_LAUNCH` instead of `LAUNCH` if you want to fire from a fixed world
  position rather than from the player's eye level.
- For damage on hit, add a `PROJECTILE_HIT_PLAYER` or `PROJECTILE_HIT_ENTITY`
  activator to the same EI item.
