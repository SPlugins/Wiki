---
sidebar_position: 2
description: Every key of a gem file in ExecutableGems - name, model, levels, values and formulas, where it goes, socketing, XP, loot, attributes, support and native enchantment.
---

# 💎 Gem configuration

A gem is one file: `plugins/ExecutableGems/gems/<category>/<id>.yml`. The file name is the gem's id, and the folder is its [category](category-configuration.md).

:::tip
Run `/eg new <category> <id>` to get a file with every key commented. See [Create your first gem](../questions-or-guides/tutorials/your-first-gem.md).
:::

**The file name** takes lowercase letters, digits and `_` only. A file whose name has a space, an accent or another sign is not loaded, and the console says so. A file whose name starts with `_` is ignored: use it to switch a gem off without deleting it.

After an edit, run `/eg reload`. It names every mistake it finds: see [Checks at load](#checks-at-load).

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
| `model` | the shipped model, else `cut:brilliant` | See [models](#models). |
| `icon` | from the model | The small image before the gem's name in texts: a texture such as `'my_pack:item/gems/ruby'` (`%tier%` = 1 to 4), or `none` for the ◆. See [The icon in texts](../questions-or-guides/tutorials/your-own-3d-model.md#the-icon-in-texts). |
| `enabled` | `true` | `false` switches the gem off without deleting it. See [Switching a gem off](#switching-a-gem-off). |
| `category` | the folder | Puts the gem in another category than its folder. |
| `description` | none | Lines of the tooltip. Use `%value%` for a [value](#levels-and-values). |
| `lore` | none | Flavour text, in grey italic. |

`description`, `lore`, `applicable-on` and `incompatible-with` are lists. When there is only one entry, you can write it as one text: `description: '<gray>Hits burn the target'`.

## Models

| Value | Result |
|---|---|
| `cut:brilliant` `cut:oval` `cut:emerald` `cut:marquise` `cut:pear` `cut:trillion` | A generic gem of the plugin's pack, tinted with your colours, animated, in 4 tiers. Nothing to draw. |
| `namespace:path` | An item model of a resource pack. The same model at every tier. |
| `name` without `:` | The models `ei:gems/<name>_t1` to `_t4`, one per tier. |

A gem never shows the black and magenta texture of a missing model. A gem without `model:` that has no shipped model, or with a cut that doesn't exist, shows `cut:brilliant`. It is a warning of the gem, like the others: `/eg reload` and `/eg check` show it, and the console says why. Adding a gem never needs a new pack.

See [Use your own 3D model](../questions-or-guides/tutorials/your-own-3d-model.md) and [The resource pack on your server](../questions-or-guides/frequently-asked-questions/resource-pack.md).

![The generic cuts next to the shipped gems](https://media.ssomar.com/m/docs-img-eg-cuts-sheet.jpg)

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

A formula can't use another value: write its numbers. Decimals take a dot (`0.5`).

:::info
**Lowering `max-level`** never destroys levels. A gem that is already above the new maximum keeps its level, and acts as a gem of the maximum level. Its tooltip says so. It gets its level back if you raise `max-level` again.
:::

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
| `'#armor'` | Every armour piece, and the elytra |
| `'#helmets'` `'#chestplates'` `'#leggings'` `'#boots'` | `#chestplates` includes the elytra |
| `'#tools'` | Pickaxes, shovels, hoes, axes |
| `'#pickaxes'` `'#shovels'` `'#hoes'` | |
| `'#bows'` | Bows and crossbows |
| `'#ranged'` | Bows, crossbows and tridents |
| `'#shields'` | |
| `'#trimmable_armor'` `'#minecraft:hoes'` | A vanilla item tag, with or without `minecraft:` |
| `'#my_datapack:staffs'` | An item tag of a datapack |
| `DIAMOND_SWORD` | A material |
| `'ei:*'` | Every ExecutableItems item |
| `'ei:MyItem'` | One ExecutableItems item |
| `'*'` | Anything |

A word the plugin doesn't know fits nothing, and the console names it. The most common mistake is a word without its `#`: write `'#swords'`, not `swords`.

**Shipped groups:** `right-click`, `sneak-right-click` and `relic`. Use them on your own abilities so two abilities never share a button.

## Socketing

| Key | Default | Description |
|---|---|---|
| `apply.chance` | `100` | Success chance in %. A formula of `level`. Keep it between 1 and 100 at every level. |
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

## Switching a gem off

Set `enabled: false`, start the file name with `_`, or delete the file. Then run `/eg reload`.

The gems of that kind already socketed in items are not lost:

- the socket stays taken, and shows **Unknown gem (id)** in the tooltip;
- the gem does nothing;
- a Gem Extractor leaves it in the item, and tells the player that the gem is disabled on this server;
- it works again, with its level and XP, as soon as the gem is back.

## Native enchantment

A gem with a `native-enchantment:` section is a real Minecraft enchantment. Start from `/eg new enchantment <id>`: see [Create your own enchantment](../questions-or-guides/tutorials/native-enchantments.md).

These keys go in the `native-enchantment:` section.

| Key | Default | Description |
|---|---|---|
| `enabled` | `false` | Makes the gem a real Minecraft enchantment. |
| `name` | the gem's `name`, without its colours | The name on items, when it must differ from `name`. Plain text, no colour tag. |
| `supported` | `#swords` | The items it goes on: one word, or a list. See below. |
| `weight` | `5` | From 1 to 1024. How often the enchanting table, villagers and loot pick it. Sharpness is 10, Mending is 2. |
| `anvil-cost` | `4` | 0 or more. The levels it costs at the anvil. |
| `enchanting-table` | `true` | Offered by the enchanting table. |
| `tradeable` | `true` | Sold by librarians. |
| `loot` | `true` | Found on the books and gear of chests, fishing and mobs. |
| `treasure` | `false` | A treasure enchantment, like Mending. Then set `enchanting-table: false`. |

The `max-level` of the gem is the highest level of the enchantment, from 1 to 255.

A number outside its range (`weight: 0`, `max-level: 300`) is brought back into the range, with a line in the console. A mistake in this section never keeps the server from starting.

**`supported`** takes one word, or a list such as `['#swords', '#axes', MACE]`:

| Value | Items |
|---|---|
| `'#weapons'` | Minecraft's set of enchantable weapons. **No trident.** |
| `'#sharp_weapons'` | The items Sharpness goes on |
| `'#swords'` `'#axes'` `'#maces'` `'#spears'` `'#tridents'` | |
| `'#armor'` | Every armour piece |
| `'#helmets'` `'#chestplates'` `'#leggings'` `'#boots'` | |
| `'#tools'` or `'#mining'` | The items Efficiency goes on. **It includes the shears.** |
| `'#pickaxes'` `'#shovels'` `'#hoes'` | |
| `'#bows'` | Bows and crossbows |
| `'#crossbows'` | |
| `'#ranged'` | Bows, crossbows and tridents |
| `'#fishing_rods'` `'#shields'` | |
| `'#breakable'` | Everything that has durability |
| `'#trimmable_armor'` | A vanilla item tag |
| `ELYTRA` | An item |

:::warning
These words are Minecraft's own "enchantable" sets, the ones Sharpness, Protection or Efficiency use. They are **not** the words of `applicable-on`: here `#weapons` has no trident and `#tools` has the shears.
:::

A word the plugin doesn't know is left out, and the console names it. If no item is left, the enchantment is not registered.

**A native enchantment is not a gem to socket.** A gem with `native-enchantment` and no `applicable-on` fits no item as a gem, and is never in random loot or in an Unidentified Gem by itself. Wherever the plugin hands it out, it comes as its enchanted book: `/eg give`, a shop ware `gem:<id>:<level>`, `eg drop`, the API, and `loot.gems` or `appraisal.gems` when you name it there. Its page in the Codex shows "Goes on" from `supported`, and no success chance. These keys are ignored on it, and the console says so: `xp`, `apply`, `attributes`, `incompatible-with`, `exclusive-group`, `obtain`, `max-per-item`, `removable`, `socket-type`, `support`.

**What needs a restart.** Minecraft registers its enchantments when the server starts. A new enchantment, its `max-level`, its `name`, its `color` and every key of `native-enchantment` wait for a restart. The `description`, the `values` and the `activators` change with `/eg reload`, which tells you what still waits for a restart.

## Activators

The `activators` section holds ExecutableItems activators. See [Activators in gems](activators-in-gems.md).

## Text format

Every text accepts [MiniMessage](https://docs.advntr.dev/minimessage/format.html): `<#e0115f>`, `<gray>`, `<bold>`, `<gradient:#ff0000:#0000ff>`. Old `&c` colours work if the text has no `<`.

With the plugin's pack, three more tags animate the text: `<shine>`, `<prism>` and `<pulse>`.

## Checks at load

Each gem is checked at every level when it loads: at the start, at `/eg reload` and after `/eg new`. Every problem is one line in the console, which starts with the gem and its file:

```
[ExecutableGems] Gem badgem (gems/custom/badgem.yml): aply: unknown key, ignored (did you mean apply?)
[ExecutableGems] Gem badgem (gems/custom/badgem.yml): description uses %power% but values has no 'power'
[ExecutableGems] Gem badgem (gems/custom/badgem.yml): activators use %gem_nope% but values has no 'nope'
[ExecutableGems] Gem badgem (gems/custom/badgem.yml): tiers [1, 5, 2, 3] should rise and end at max-level 3
[ExecutableGems] Gem badgem (gems/custom/badgem.yml): no applicable-on: it can be socketed in ANY item (write applicable-on: ['*'] if that is wanted)
[ExecutableGems] Gem brokengem (gems/custom/brokengem.yml) NOT LOADED: YAML error at line 12, column 5: mapping values are not allowed here. Check the indentation (spaces, never tabs), the quotes and the colons around that line
```

The load ends with a summary:

```
[ExecutableGems] Gems: 38 loaded, 1 with warnings, 1 not loaded in 8 categories; runewords: 12 loaded, 0 with warnings, 0 not loaded (/eg check shows the problems again)
```

In game, `/eg reload` answers with the same summary and the first problems. `/eg check` shows them all again without reloading, and `/eg check <id>` shows those of one gem.

What is checked:

| Check | Example of what it finds |
|---|---|
| The YAML of the file | A bad indentation, a missing quote. The line and the column are given. |
| The keys | A key the plugin doesn't know, with the closest key it knows. A key written twice. A colour without quotes. |
| The formulas, at every level | A formula that is not a number, an `apply.chance` outside 1-100, a division by zero. |
| The texts | A `%value%` that is not in `values`. |
| `attributes` | An unknown attribute, operation or slot. |
| `applicable-on` | A word that is not known. |
| `native-enchantment` | A number outside its range, an unknown word in `supported`. |
| `model` | A cut that doesn't exist, a model name that is not valid. A model in no pack the plugin can read is only a note (ℹ): fine if you send that pack yourself. |
| The activators | The errors of ExecutableItems, shown as `activators: ...` on the gem's line. A `chance` outside 0-100. |

### What a mistake does

The plugin never guesses. A part it can't read is switched off until you fix it, and the rest of the gem keeps working:

| Mistake | Result |
|---|---|
| A YAML error | The gem is **not loaded**. |
| An unknown key | The key is ignored. |
| A value of `values` that can't be read | It counts as 0. |
| An `apply.chance` that can't be read | The gem can't be socketed. The gems already socketed keep working. |
| An `xp.to-next` that can't be read | The gem gains no XP. |
| A `support` bonus that can't be read | That bonus is ignored. |
| A wrong line of `attributes` | That attribute is not applied. |
| A `chance` of an activator that is not a number | That activator never runs. |

### When an activator fails in game

If an activator throws an error while a player uses the gem, the console names the gem, the activator and its event, once a minute at most for the same error:

```
[ExecutableGems] Gem badgem: activator 'strike' (PLAYER_HIT_ENTITY) failed with ... Check this activator in gems/custom/badgem.yml (the same error is reported once a minute at most).
```
