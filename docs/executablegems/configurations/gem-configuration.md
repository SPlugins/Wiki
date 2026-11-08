---
sidebar_position: 2
description: Every key of a gem file in ExecutableGems - name, model, levels, values and formulas, where it goes, socketing, XP, loot, attributes, support and native enchantment.
---

# 💎 Gem configuration

A gem is one file: `plugins/ExecutableGems/gems/<category>/<id>.yml`. The file name is the gem's id, and the folder is its [category](category-configuration.md).

:::tip
Run `/eg new <category> <id>` to get a file with every key commented. Files whose name starts with `_` are ignored.
:::

## A complete example

```yaml
name: '<#e0115f>Blood Opal'
color: '#e0115f'
model: 'cut:oval'
max-level: 10
tiers: [3, 6, 9, 10]
description:
  - '<gray>Hits have <white>%chance%%</white> chance to deal'
  - '<#e0115f>%damage% damage</#e0115f> <gray>and make the target bleed for <white>%seconds%s'
lore:
  - 'It is warm to the touch.'
values:
  chance: '10 + 2 * level'
  damage: '2 + 0.5 * level'
  seconds: '2 + floor(level / 3)'
applicable-on: ['#swords', '#axes', 'ei:*']
apply:
  chance: '100 - 3 * level'
  on-fail: DESTROY_GEM
xp:
  enabled: true
  per-hit: 1
  per-kill: 10
  to-next: '15 + 10 * level'
activators:
  bleed:
    option: PLAYER_HIT_ENTITY
    chance: '%gem_chance%'
    silenceOutput: true
    detailedSlots: [-1]
    entityCommands:
      - 'DAMAGE %gem_damage%'
      - 'effect give %entity_uuid% wither %gem_seconds% 0 true'
      - 'eg fx burst %entity_uuid% %gem_color% 20'
      - 'execute at %entity_uuid% run playsound minecraft:block.amethyst_block.hit player @a ~ ~ ~ 1 0.7'
```

Every key except `name` is optional.

## Identity

| Key | Default | Description |
|---|---|---|
| `name` | the id | The name. See [text format](#text-format). |
| `color` | `#ffffff` | Beams, frames, particles, the tint of a generic cut. `%gem_color%` in activators. |
| `color2` | a lighter `color` | The inner light of a generic cut. |
| `model` | the shipped model | See [models](#models). |
| `enabled` | `true` | `false` switches the gem off without deleting it. |
| `category` | the folder | Puts the gem in another category than its folder. |
| `description` | none | Lines of the tooltip. Use `%value%` for a [value](#levels-and-values). |
| `lore` | none | Flavour text, in grey italic. |

## Models

| Value | Result |
|---|---|
| `cut:brilliant` `cut:oval` `cut:emerald` `cut:marquise` `cut:pear` `cut:trillion` | A generic gem of the plugin's pack, tinted with your colours, animated, in 4 tiers. Nothing to draw. |
| `namespace:path` | An item model of a resource pack. The same model at every tier. |
| `name` without `:` | The models `ei:gems/<name>_t1` to `_t4`, one per tier. |

See [Use your own 3D model](../questions-or-guides/tutorials/your-own-3d-model.md).

![The generic cuts next to the shipped gems](</img/executablegems/cuts-sheet.jpg>)

## Levels and values

| Key | Default | Description |
|---|---|---|
| `max-level` | `1` | The highest level. |
| `tiers` | computed | 4 numbers: the last level of Chipped, Flawless, Perfect and Radiant. The last one must be `max-level`. |
| `values` | none | Named numbers that change with the level. |

A value is a **formula** of `level`, or a **list** with one number per level:

```yaml
values:
  chance: '10 + 2 * level'
  damage: [2, 3, 3, 4, 4, 5, 5, 6, 7, 8]
  seconds: 'min(8, 2 + floor(level / 3))'
```

Formulas accept `+ - * / % ^`, parentheses and `min`, `max`, `floor`, `ceil`, `round`, `sqrt`, `abs`.

| Where | How to read a value |
|---|---|
| `description` and `lore` | `%chance%`, `%level%`, `%level_roman%` |
| Activators | `%gem_chance%`, `%gem_level%`, `%gem_level_roman%`, `%gem_color%`, `%gem_id%`, `%gem_tier%`, `%gem_name%` (without its colours) |

A support gem boosting this gem changes the level used for the values.

## Where it can go

| Key | Default | Description |
|---|---|---|
| `applicable-on` | any item | The items it accepts. See below. |
| `incompatible-with` | none | Gem ids that can't share an item with this one. |
| `max-per-item` | `1` | How many copies one item can hold. |
| `exclusive-group` | none | One gem of each of these groups per item. |
| `removable` | `true` | `false`: a Gem Extractor can't take it out. |

**`applicable-on`** is a list of:

| Value | Items |
|---|---|
| `'#weapons'` | Swords, axes, maces, tridents, spears |
| `'#swords'` `'#axes'` | |
| `'#armor'` | Every armour piece |
| `'#helmets'` `'#chestplates'` `'#leggings'` `'#boots'` | `#chestplates` includes the elytra |
| `'#tools'` | Pickaxes, shovels, hoes, axes |
| `'#pickaxes'` `'#shovels'` `'#hoes'` | |
| `'#bows'` | Bows and crossbows |
| `'#ranged'` | Bows, crossbows and tridents |
| `'#shields'` | |
| `'#any_minecraft_tag'` | A vanilla item tag, such as `'#swords'` |
| `DIAMOND_SWORD` | A material |
| `'ei:*'` | Every ExecutableItems item |
| `'ei:MyItem'` | One ExecutableItems item |
| `'*'` | Anything |

**Shipped groups:** `right-click`, `sneak-right-click` and `relic`. Use them on your own abilities so two abilities never share a button.

## Socketing

| Key | Default | Description |
|---|---|---|
| `apply.chance` | `100` | Success chance in %. A formula of `level`. |
| `apply.on-fail` | `DESTROY_GEM` | `DESTROY_GEM`: the gem shatters. `KEEP_GEM`: it slips out. |

## XP

| Key | Default | Description |
|---|---|---|
| `xp.enabled` | `false` | The gem gains XP. |
| `xp.per-hit` | `0` | A hit with the item. Arrows count for bows. Up to 20 hits per kill. |
| `xp.per-kill` | `0` | A kill with the item. |
| `xp.per-hit-taken` | `0` | A hit taken while wearing it. |
| `xp.per-block` | `0` | A block mined with it. Not in creative mode. |
| `xp.to-next` | `100` | The XP needed for the next level. A formula of `level`. |

## Loot

| Key | Default | Description |
|---|---|---|
| `obtain.weight` | `10` | The odds against the other gems. `0`: never random, only by command, shop or quest. Native enchantments default to `0`. |
| `obtain.min-tier` | `1` | The lowest tier it can be found at. |
| `obtain.max-tier` | `4` | The highest tier it can be found at. |
| `obtain.loot` | `true` | It can be found in monster drops and chests. |
| `obtain.appraisal` | `true` | It can be inside an Unidentified Gem. |

The shipped gems use 10 for a normal gem, 4 to 7 for strong ones and 1 for relics.

## Passive bonuses

`attributes` adds real attribute modifiers to the item. The vanilla tooltip shows them.

```yaml
attributes:
  - {attribute: MAX_HEALTH, amount: '0.2 * level', operation: ADD_NUMBER, slot: AUTO}
```

| Key | Default | Description |
|---|---|---|
| `attribute` | required | A Minecraft attribute: `ARMOR`, `ARMOR_TOUGHNESS`, `MAX_HEALTH`, `MOVEMENT_SPEED`, `ATTACK_DAMAGE`, `ATTACK_SPEED`, `ATTACK_KNOCKBACK`, `KNOCKBACK_RESISTANCE`, `JUMP_STRENGTH`, `MINING_EFFICIENCY`, `OXYGEN_BONUS`, `SAFE_FALL_DISTANCE`, `FALL_DAMAGE_MULTIPLIER`... |
| `amount` | required | A number or a formula of `level`. |
| `operation` | `ADD_NUMBER` | `ADD_NUMBER`, `ADD_SCALAR` or `MULTIPLY_SCALAR_1`. |
| `slot` | `AUTO` | `AUTO`: the slot of the armour piece, or the main hand. Or `MAINHAND`, `OFFHAND`, `HAND`, `HEAD`, `CHEST`, `LEGS`, `FEET`, `ARMOR`, `ANY`. |

## Support

A gem with a `support` section boosts the gems in the sockets next to it. It needs no activators.

| Key | Description |
|---|---|
| `support.levels` | Extra levels for the linked gems, never above their maximum. |
| `support.chance` | Added to the `chance` of their activators, in %. |
| `support.twin` | Chance in % that their activators run twice. |
| `support.xp` | Extra XP for them, in %. |

All four are formulas of `level`. See [Create a support gem](../questions-or-guides/tutorials/support-gem.md).

## Held in the off hand

```yaml
held:
  offhand: true
```

The gem works on its own while it is held in the off hand, without being socketed. Activators without `detailedSlots` then listen to the main hand and the off hand.

## Native enchantment

| Key | Default | Description |
|---|---|---|
| `native-enchantment.enabled` | `false` | Makes the gem a real Minecraft enchantment. |
| `native-enchantment.supported` | `#swords` | `#swords`, `#axes`, `#pickaxes`, `#weapons`, `#sharp_weapons`, `#tools`, `#mining`, `#armor`, `#bows`, or a Minecraft item tag. |
| `native-enchantment.weight` | `5` | Odds in the enchanting table. |
| `native-enchantment.anvil-cost` | `4` | Anvil cost. |
| `native-enchantment.enchanting-table` | `true` | Offered by the enchanting table. |
| `native-enchantment.tradeable` | `true` | Sold by librarians. |
| `native-enchantment.loot` | `true` | Found on random loot. |
| `native-enchantment.treasure` | `false` | Treasure enchantment. |

See [Native enchantments](../questions-or-guides/tutorials/native-enchantments.md). Adding one needs a server restart.

## Activators

The `activators` section holds ExecutableItems activators. See [Activators in gems](activators-in-gems.md).

## Text format

Every text accepts [MiniMessage](https://docs.advntr.dev/minimessage/format.html): `<#e0115f>`, `<gray>`, `<bold>`, `<gradient:#ff0000:#0000ff>`. Old `&c` colours work if the text has no `<`.

With the plugin's pack, three more tags animate the text: `<shine>`, `<prism>` and `<pulse>`.

## Checks at load

Each gem is checked at every level when it loads, and the console names the gem and the mistake:

```
[ExecutableGems] Gem badgem: description uses %power% but values has no 'power'
[ExecutableGems] Gem badgem: activators use %gem_nope% but values has no 'nope'
[ExecutableGems] Gem badgem: apply.chance is 120.0% at level 1 (0-100)
[ExecutableGems] Gem badgem: activator a: chance 150.0% at level 3 (0-100)
[ExecutableGems] Gem badgem: tiers [1, 5, 2, 3] should rise and end at max-level 3
[ExecutableGems] Gem badgem: no applicable-on: it can be socketed in ANY item
```

ExecutableItems reports its own errors on the activators, under the name `eg_<id>_<level>`.
