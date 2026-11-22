---
sidebar_position: 7
description: Create a runeword in ExecutableGems - a sequence of gems that awakens a new power and an aura on an item.
---

# ✨ Create a runeword

A runeword is a sequence of gems that awakens a new power. We will make **Bloodquake**: Blood Opal then Shockwave Rune. Kills then split the ground.

![An item with the Bloodquake runeword](https://media.ssomar.com/m/docs-img-eg-host-bloodquake.png)

In the commands of this page, replace `YourName` with your name.

## 1. Create the file

The runeword uses the gems of the earlier tutorials: [Blood Opal](your-first-gem.md) and [Shockwave Rune](right-click-ability.md). Name the runeword, then its gems in socket order:

```
/eg new runeword bloodquake blood_opal shockwave
```

| Part | Meaning |
|---|---|
| `bloodquake` | The id of the runeword. Lowercase letters, digits and `_`. |
| `blood_opal shockwave` | The gems, in socket order. Two at least. |

The plugin writes `plugins/ExecutableGems/runewords/bloodquake.yml`, with every key explained in comments and the colours of its gems, and loads it at once. The chat gives you the commands to try it.

The command refuses a runeword that could never be awakened, and says why: a gem that doesn't exist (it suggests the closest id), a native enchantment, more gems than `sockets.max` of `config.yml`, or the same gems in the same order as another runeword.

## 2. Edit the file

Open `plugins/ExecutableGems/runewords/bloodquake.yml` and make it look like this:

```yaml
name: '<gradient:#e0115f:#ffb347>Bloodquake</gradient>'
enabled: true
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
- **`aura`** is the particles around the player who holds or wears the item. Use two colours for a gradient.
- **`activators`** are normal activators. A runeword has no level, so write the numbers directly. A `chance` is a plain number, such as `chance: 25`.

## 3. Reload and test

```
/eg reload
/give @s netherite_sword
/eg sockets YourName 2
```

`/eg reload` names every mistake of the file in the chat. A runeword whose sequence has an unknown gem is not loaded: see [the checks](../../configurations/runeword-configuration.md#checks-at-load).

Then socket the gems at a forge or in your inventory, so the awakening plays:

```
/eg give YourName blood_opal 1
/eg give YourName shockwave 1
```

Blood Opal first, Shockwave second. At level 1 the chance of success is 97%.

![A runeword awakening](https://media.ssomar.com/m/docs-img-eg-awakening-forge.jpg)

:::info
`/eg apply` sockets a gem silently, so the awakening doesn't play. The power works all the same.
:::

## Hide or show it

A new runeword shows as `???` in the Codex until someone awakens it. To change this, set `runewords.hidden-until-discovered` to `false` in `config.yml`. To hide everything again:

```
/eg discoveries reset
```

See [every key of a runeword](../../configurations/runeword-configuration.md).
