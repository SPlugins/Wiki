---
description: >-
  Apply custom damage from EI items — flat damage, percentage-of-HP damage,
  RNG random damage, area-of-effect damage with AROUND, and entity-type
  filtering. All examples include YAML.
---

# Damage | Hit features

<iframe width="560" height="315" src="https://www.youtube.com/embed/o88dys-9YAY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## The DAMAGE command

```
DAMAGE {amount} [amplifiedIfStrength] [amplifiedWithAttackAttribute] [damageType]
```

| Parameter | Default | Description |
|---|---|---|
| `amount` | required | Damage in half-hearts. Accepts placeholders and math. |
| `amplifiedIfStrength` | `true` | Whether Strength potion effect amplifies this damage |
| `amplifiedWithAttackAttribute` | `true` | Whether attack damage attributes apply |
| `damageType` | vanilla default | Damage type (e.g. `ENTITY_ATTACK`, `MAGIC`) |

`DAMAGE` is a **mixed command** — when used in `playerCommands`, it damages the player
that holds the item. In `entityCommands` or `targetCommands`, it damages the target
entity or player.

---

## Flat damage on hit

Deal 10 extra damage (5 hearts) when the player hits an entity:

```yaml
activators:
  activator0:
    option: PLAYER_HIT_ENTITY
    cancelEvent: false
    entityCommands:
      - DAMAGE 10
```

---

## Percentage-of-HP damage

Use `%entity_health%` or `%entity_max_health%` with the math placeholder to deal a
percentage of the target's current or maximum HP.

```yaml
# Deal 10% of the target's CURRENT health
entityCommands:
  - DAMAGE %math_(%entity_health%)*0.1%

# Deal 15% of the target's MAX health
entityCommands:
  - DAMAGE %math_(%entity_max_health%)*0.15%
```

:::info
The math placeholder (`%math_{expression}%`) requires **PlaceholderAPI** and the
**Math** or **Player** expansion installed on your server.
:::

### Example — Armor piece that deals 5% of attacker's max HP back

```yaml
activators:
  activator0:
    name: '&eReflect damage'
    option: PLAYER_RECEIVE_HIT_BY_ENTITY
    cancelEvent: false
    entityCommands:         # entityCommands run on the attacker entity
      - DAMAGE %math_(%player_max_health%)*0.05%
    playerConditions: {}
    detailedSlots:
      - 39    # Chest slot — only works when worn
```

---

## RNG random damage

Use `%rng_min,max%` (PlaceholderAPI RNG expansion) or a math expression to vary damage:

```yaml
# Random damage between 3 and 8
entityCommands:
  - DAMAGE %rng_3,8%

# Or using math: base 5 + random 0–5
entityCommands:
  - DAMAGE %math_5+(%rng_1,5%)%
```

---

## Area-of-effect (AoE) damage

Use the **`AROUND`** command to apply a command to all nearby entities within a radius.
Combine with `DAMAGE` to create area attacks.

```
AROUND distance:5.0 displayMsgIfNoPlayer:true throughBlocks:true safeDistance:0.0 {command}
```

```yaml
# Hit all mobs within 5 blocks for 4 damage on right-click
activators:
  activator0:
    name: '&eAoE strike'
    option: PLAYER_RIGHT_CLICK
    cancelEvent: false
    cooldownOptions:
      cooldown: 3
      isCooldownInTicks: false
      cooldownMsg: '&cCooldown! &e%time_S%s'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    commands:
      - AROUND distance:5.0 displayMsgIfNoPlayer:false throughBlocks:false safeDistance:0.0 DAMAGE 4
      - [CONSOLE] particle crit %player_x% %player_y% %player_z% 2 2 2 0.2 40
```

### Entity-type filtering in AoE

Use `ALL_MOBS WHITELIST(...)` or `BLACKLIST(...)` to restrict which entities are hit:

```yaml
# Only deal damage to zombies and skeletons within 5 blocks
commands:
  - AROUND distance:5.0 displayMsgIfNoPlayer:false throughBlocks:false safeDistance:0.0 ALL_MOBS WHITELIST(ZOMBIE,SKELETON) DAMAGE 6

# Damage everything except armour stands and item frames
commands:
  - AROUND distance:5.0 displayMsgIfNoPlayer:false throughBlocks:false safeDistance:0.0 ALL_MOBS BLACKLIST(ARMOR_STAND,ITEM_FRAME) DAMAGE 8
```

---

## Damage without knockback

Knockback is controlled by the damage type. Use `MAGIC` to deal damage without
vanilla knockback:

```yaml
entityCommands:
  - DAMAGE 6 true true MAGIC
```

---

## Entity-type specific damage (PLAYER_HIT_ENTITY)

Use `detailedEntities` to restrict which entity types the activator fires for:

```yaml
activators:
  activator0:
    option: PLAYER_HIT_ENTITY
    detailedEntities:
      - ZOMBIE
      - SKELETON
      - CREEPER
    entityCommands:
      - DAMAGE 5
      - SEND_MESSAGE &cUndead bane: extra damage!
```

---

## See also

- [Mixed Commands](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity) — full `DAMAGE` and `AROUND` reference.
- [Deal % of entity HP](/executableitems/questions-or-guides/methods-or-template/deal-of-entity-hp) — detailed math placeholder walkthrough.
- [RNG Chance Activator](/executableitems/questions-or-guides/methods-or-template/rng-chance-activator) — how to apply random chance to any activator.
