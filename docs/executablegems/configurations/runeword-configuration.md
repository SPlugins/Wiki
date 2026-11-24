---
sidebar_position: 5
description: How to write a runeword in ExecutableGems - the sequence of gems, its description, aura and activators, and what keeps a runeword from loading.
---

# ✨ Runeword configuration

A runeword is one file: `plugins/ExecutableGems/runewords/<id>.yml`. The file name is the runeword's id.

:::tip
Run `/eg new runeword <id> <gem> <gem> [gem...]` to get a file with every key commented. See [Create a runeword](../questions-or-guides/tutorials/runeword.md).
:::

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

| Key | Default | Description |
|---|---|---|
| `name` | the id | Its name. |
| `enabled` | `true` | `false` switches the runeword off without deleting it. |
| `sequence` | required | Gem ids (their file names), in socket order. A list, not a text. |
| `description` | none | Lines of the tooltip. |
| `aura.particle` | `DUST` | The particle of the aura. `DUST` is tinted with the two colours below. Any other particle that needs no data works too: `FLAME`, `SOUL_FIRE_FLAME`, `END_ROD`, `ENCHANT`... |
| `aura.color` | `#ffffff` | Its first colour. |
| `aura.color2` | `aura.color` | Its second colour. |
| `activators` | none | ExecutableItems activators, as in a gem. |

An item matches a runeword when its filled sockets hold exactly the sequence. Empty sockets are skipped, and the levels of the gems don't matter.

:::warning
A runeword has no level, so there is no `values` section and no `%gem_...%` placeholder. Write the numbers directly. `chance` is a plain number from 0 to 100, such as `chance: 25`.
:::

Set `detailedSlots` according to the item: `[-1]` for a weapon or a tool, `[36, 37, 38, 39]` for armour.

The sequence needs enough sockets on the item, so a 3-gem runeword needs a 3-socket item.

## The aura

The aura shows around the player while the runeword is awake: when they hold the item in the main hand or the off hand, or wear it. To have no aura, remove the `aura` block.

How often its particles are sent is the setting `runewords.aura-interval` of [`config.yml`](general-configuration.md#runewords).

## Files and folders

- The file name takes lowercase letters, digits and `_` only. A file with another name is not loaded.
- You can sort the runewords into subfolders of `runewords/`.
- To switch a runeword off, set `enabled: false`, or start its file name with `_`.

## Checks at load

After an edit, run `/eg reload`. It names every mistake in the chat and in the console, and `/eg check <id>` shows them again.

A runeword is **not loaded** when it could never awaken:

| Mistake | Console |
|---|---|
| No `sequence`, or an empty one | `no sequence: write the gem ids in socket order, e.g. sequence: [frost, ember]` |
| `sequence` written as a text | `sequence: 'frost ember' must be a list: sequence: [frost, ember]` |
| A gem that doesn't exist | `sequence: there is no gem 'frots' (did you mean frost?), so the runeword can never awaken` |
| A gem that is switched off | `sequence: the gem 'frost' is switched off (enabled: false), so the runeword can never awaken` |
| A native enchantment in the sequence | It is never socketed, so the runeword can never awaken. |
| A YAML error | The line and the column are given. |

These are warnings: the runeword is loaded, and the console says why players can't awaken it or what is ignored.

| Mistake | Result |
|---|---|
| More gems than `sockets.max` of `config.yml` | Players can't awaken it, unless a group has more sockets. |
| Two gems of the sequence can't share an item (`incompatible-with`, `exclusive-group`, `max-per-item`) | Players can't awaken it. |
| Another runeword has the same gems in the same order | This one never awakens. |
| A `chance` that is not a number | That activator never runs until it is fixed. |
| An `aura.particle` that is not a particle, or that needs data (a block, an item) | `DUST` is used. |
| An unknown key | The key is ignored. |

Each line starts with the runeword and its file:

```
[ExecutableGems] Runeword bloodquake (runewords/bloodquake.yml) NOT LOADED: sequence: there is no gem 'shokwave' (did you mean shockwave?), so the runeword can never awaken. /eg list shows the gem ids
```

See [Create a runeword](../questions-or-guides/tutorials/runeword.md).
