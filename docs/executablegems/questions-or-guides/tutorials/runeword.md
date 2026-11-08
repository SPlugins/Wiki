---
sidebar_position: 7
description: Create a runeword in ExecutableGems - a sequence of gems that awakens a new power and an aura on an item.
---

# ✨ Create a runeword

A runeword is a sequence of gems that awakens a new power. We will make **Bloodquake**: Blood Opal then Shockwave Rune. Kills then split the ground.

![An item with the Bloodquake runeword](</img/executablegems/host-bloodquake.png>)

## The file

Create `runewords/bloodquake.yml`. It uses the gems of the earlier tutorials.

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

- **`sequence`** is the list of gem ids, in socket order.
- **`aura`** is the particles around the player who holds the item. Use two colours for a gradient.
- **`activators`** are normal activators. A runeword has no level, so write the numbers directly.

## Test it

```
/eg reload
/give @s netherite_sword
/eg sockets YourName 2
```

Then socket the gems at a forge or in your inventory, so the awakening plays:

```
/eg give YourName blood_opal 1
/eg give YourName shockwave 1
```

Blood Opal first, Shockwave second. At level 1 the chance of success is 97%.

![A runeword awakening](</img/executablegems/awakening-forge.jpg>)

:::info
`/eg apply` sockets a gem silently, so the awakening doesn't play. The power works all the same.
:::

## Hide or show it

A new runeword shows as `???` in the Codex until someone awakens it. To change this, set `runewords.hidden-until-discovered` to `false` in `config.yml`. To hide everything again:

```
/eg discoveries reset
```

See [every key of a runeword](../../configurations/runeword-configuration.md).
