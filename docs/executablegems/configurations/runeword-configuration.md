---
sidebar_position: 5
description: How to write a runeword in ExecutableGems - the sequence of gems, its description, aura and activators.
---

# ✨ Runeword configuration

A runeword is one file: `plugins/ExecutableGems/runewords/<id>.yml`.

```yaml
name: '<gradient:#e0115f:#ffb347>Bloodquake</gradient>'
sequence: [blood_opal, shockwave]
description:
  - '<gray>Kills split the ground: <white>8</white> damage around you'
aura:
  particle: DUST
  color: '#e0115f'
  color2: '#ffb347'
activators:
  quake:
    option: PLAYER_KILL_ENTITY
    silenceOutput: true
    detailedSlots: [-1]
    playerCommands:
      - 'eg fx shockwave %player% 5 #e0115f'
      - 'execute at %player% run playsound minecraft:entity.warden.attack_impact player @a ~ ~ ~ 1.2 0.7'
      - 'MOB_AROUND distance:5 displayMsgIfNoEntity:false throughBlocks:false DAMAGE 8'
```

| Key | Default | Description |
|---|---|---|
| `name` | the id | Its name. |
| `sequence` | required | Gem ids, in socket order. |
| `description` | none | Lines of the tooltip. |
| `aura.particle` | `DUST` | The particle of the aura. |
| `aura.color` | `#ffffff` | Its first colour. |
| `aura.color2` | `aura.color` | Its second colour. |
| `activators` | none | ExecutableItems activators, as in a gem. |

An item matches a runeword when its filled sockets hold exactly the sequence. Empty sockets are skipped, and the levels of the gems don't matter.

:::warning
A runeword has no level, so there is no `values` section and no `%gem_...%` placeholder. Write the numbers directly. `chance` is a plain number.
:::

Set `detailedSlots` according to the item: `[-1]` for a weapon or a tool, `[36, 37, 38, 39]` for armour.

The sequence needs enough sockets on the item, so a 3-gem runeword needs a 3-socket item.

See [Create a runeword](../questions-or-guides/tutorials/runeword.md).
