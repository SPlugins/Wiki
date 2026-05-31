---
description: >-
  Go beyond the basics — shaped 3×3 recipes, shapeless recipes, furnace smelting,
  anvil combinations, player conditions, recipe groups, and recipe books.
---

# Advanced Recipes

This guide assumes you have already created at least one recipe. If not, start with
[Getting Started](/executablecrafting/questions-or-guides/tutorials/getting-started).

---

## Shaped crafting recipes

A **shaped** recipe (`MATCH_SHAPE`) requires ingredients to be placed in exact slots.
Slots are numbered left-to-right, top-to-bottom:

```
[1][2][3]
[4][5][6]
[7][8][9]
```

### Example — Enchanted Sword (cross pattern)

```yaml
recipeType: CRAFTING
typeOfCraftingTableRecipe: MATCH_SHAPE

#   [ ][ ][ ]
#   [ ][D][ ]
#   [ ][S][ ]
input5: minecraft:diamond
input8: minecraft:stick

result: minecraft:diamond_sword

itemCheckers:
  itemCheckerType: CUSTOM_CHECKS
  checkAmount: true
  checkDisplayName: false
  checkMaterial: true
  checkCustomModelData: false
  checkLore: false
  checkDurability: false
  checkExecutableItemID: false
  checkExecutableItemUsage: false
  checkExecutableItemVariables: false

playerConditions: {}
blockConditions:
  requiredItems: {}
  requiredExecutableItems: {}
placeholdersConditions: {}
playerCommands: []
config_update: true
```

### Example — Full 3×3 shaped recipe (Totem of Gold)

```yaml
recipeType: CRAFTING
typeOfCraftingTableRecipe: MATCH_SHAPE

#   [G][G][G]
#   [G][D][G]
#   [G][G][G]
input1: minecraft:gold_ingot
input2: minecraft:gold_ingot
input3: minecraft:gold_ingot
input4: minecraft:gold_ingot
input5: minecraft:diamond
input6: minecraft:gold_ingot
input7: minecraft:gold_ingot
input8: minecraft:gold_ingot
input9: minecraft:gold_ingot

result: minecraft:totem_of_undying

itemCheckers:
  itemCheckerType: CUSTOM_CHECKS
  checkAmount: false
  checkDisplayName: false
  checkMaterial: true
  checkCustomModelData: false
  checkLore: false
  checkDurability: false
  checkExecutableItemID: false
  checkExecutableItemUsage: false
  checkExecutableItemVariables: false

playerConditions: {}
blockConditions:
  requiredItems: {}
  requiredExecutableItems: {}
placeholdersConditions: {}
playerCommands: []
config_update: true
```

:::info
The 2×2 inventory grid also works. Simply use inputs 1, 2, 4, 5 (top-left quadrant) or another
2×2 quadrant. ExecutableCrafting detects the quadrant automatically.
:::

---

## Shapeless crafting recipes

A **shapeless** recipe (`SHAPELESS`) ignores slot positions — the player just needs
to put the right items anywhere in the grid.

### Example — Dirt to Cobblestone (any position)

```yaml
recipeType: CRAFTING
typeOfCraftingTableRecipe: SHAPELESS

input1: minecraft:dirt
input2: minecraft:gravel

result: minecraft:cobblestone

itemCheckers:
  itemCheckerType: CUSTOM_CHECKS
  checkAmount: false
  checkDisplayName: false
  checkMaterial: true
  checkCustomModelData: false
  checkLore: false
  checkDurability: false
  checkExecutableItemID: false
  checkExecutableItemUsage: false
  checkExecutableItemVariables: false

playerConditions: {}
blockConditions:
  requiredItems: {}
  requiredExecutableItems: {}
placeholdersConditions: {}
playerCommands: []
config_update: true
```

---

## Furnace recipes

Furnace recipes smelt a single input item into a result, optionally awarding XP and
taking a configurable time.

:::warning
The fuel slot is not configurable — any valid fuel works.
:::

### Example — Smelt Rotten Flesh into Leather

```yaml
recipeType: FURNACE

input1: minecraft:rotten_flesh

result: minecraft:leather

# XP rewarded when the player takes the output
experience: 0.35

# Cooking time in ticks (20 ticks = 1 second)
cookingTime: 200

itemCheckers:
  itemCheckerType: CUSTOM_CHECKS
  checkAmount: false
  checkDisplayName: false
  checkMaterial: true
  checkCustomModelData: false
  checkLore: false
  checkDurability: false
  checkExecutableItemID: false
  checkExecutableItemUsage: false
  checkExecutableItemVariables: false

playerConditions: {}
blockConditions:
  requiredItems: {}
  requiredExecutableItems: {}
placeholdersConditions: {}
playerCommands: []
config_update: true
```

---

## Anvil recipes

Anvil recipes combine two items and produce a result. Three merge modes are available:

| `anvilMergeType` | Behaviour |
|---|---|
| `CUSTOM_RESULT` | Output is whatever you define in `result` |
| `INPUT1_AS_RESULT` | Output is the first item (after any `itemCommands` run on it) |
| `INPUT2_AS_RESULT` | Output is the second item (after any `itemCommands` run on it) |

### Example — Enchanted Pickaxe (combine iron + enchanted book)

```yaml
recipeType: ANVIL
anvilMergeType: CUSTOM_RESULT

input1: minecraft:iron_pickaxe
input2: minecraft:enchanted_book

result: minecraft:diamond_pickaxe

itemCheckers:
  itemCheckerType: CUSTOM_CHECKS
  checkAmount: false
  checkDisplayName: false
  checkMaterial: true
  checkCustomModelData: false
  checkLore: false
  checkDurability: false
  checkExecutableItemID: false
  checkExecutableItemUsage: false
  checkExecutableItemVariables: false

playerConditions: {}
blockConditions:
  requiredItems: {}
  requiredExecutableItems: {}
placeholdersConditions: {}
playerCommands: []
config_update: true
```

### Example — INPUT1\_AS\_RESULT with item commands (add durability)

Use `itemCommands` to modify the output item — for example, repairing it:

```yaml
recipeType: ANVIL
anvilMergeType: INPUT1_AS_RESULT

input1: minecraft:iron_sword
input2: minecraft:iron_ingot

# No 'result' needed when INPUT1_AS_RESULT — the sword is returned
itemCommands:
  - MODIFY_ITEM_DURABILITY modification:50 supportUnbreaking:false

itemCheckers:
  itemCheckerType: CUSTOM_CHECKS
  checkAmount: false
  checkDisplayName: false
  checkMaterial: true
  checkCustomModelData: false
  checkLore: false
  checkDurability: false
  checkExecutableItemID: false
  checkExecutableItemUsage: false
  checkExecutableItemVariables: false

playerConditions: {}
blockConditions:
  requiredItems: {}
  requiredExecutableItems: {}
placeholdersConditions: {}
playerCommands: []
config_update: true
```

---

## Player conditions

Use `playerConditions` to gate a recipe behind a permission, level, health threshold,
or any other supported condition.

### Example — VIP-only recipe

```yaml
recipeType: CRAFTING
typeOfCraftingTableRecipe: SHAPELESS

input1: minecraft:nether_star

result: minecraft:beacon

itemCheckers:
  itemCheckerType: CUSTOM_CHECKS
  checkAmount: false
  checkDisplayName: false
  checkMaterial: true
  checkCustomModelData: false
  checkLore: false
  checkDurability: false
  checkExecutableItemID: false
  checkExecutableItemUsage: false
  checkExecutableItemVariables: false

playerConditions:
  requiredPermissions:
    - vip.crafting.beacon

blockConditions:
  requiredItems: {}
  requiredExecutableItems: {}
placeholdersConditions: {}
playerCommands:
  - SEND_MESSAGE &aYou used your VIP perk to craft a Beacon!
config_update: true
```

If the player doesn't have `vip.crafting.beacon`, the recipe will not trigger even if
the ingredients match.

See [Player & Target Conditions](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions)
for the full list of available conditions.

---

## Recipe groups

Recipe groups let you apply shared conditions, commands, or item checkers to
**multiple recipes at once** — without repeating yourself in every YAML file.

Groups are configured in `plugins/ExecutableCrafting/recipeGroups.yml`.

### Example — A "rare_*" group with a level requirement

```yaml
# recipeGroups.yml
rare_tier:
  recipesList:
    - rare_*
  playerConditions:
    requiredLevel: 30
  playerCommands:
    - SEND_MESSAGE &6You crafted a rare item!
  blockConditions: {}
  placeholdersConditions: {}
  itemCheckers:
    itemCheckerType: CUSTOM_CHECKS
    checkAmount: false
    checkDisplayName: false
    checkMaterial: false
    checkCustomModelData: false
    checkLore: false
    checkDurability: false
    checkExecutableItemID: false
    checkExecutableItemUsage: false
    checkExecutableItemVariables: false
  config_update: true
```

All recipes whose ID starts with `rare_` (e.g. `rare_sword`, `rare_pickaxe`) will now
require the player to be at least level 30, and will fire the message on craft.

---

## Recipe books

Recipe books (`recipeBooks.yml`) let you show different recipe sets to different
players — for example, VIP players get a different book than default players.

### Example — Separate books by rank

```yaml
# recipeBooks.yml
recipeBooks:
  # Default book — only basic recipes
  1:
    recipes:
      - diamond_core
      - my_first_recipe
    folders: {}

  # VIP book — all recipes, grouped by category
  2:
    recipes: []
    folders:
      Basic:
        - basic_*
      Advanced:
        - advanced_*
      All:
        - '**'
```

Open a book for a player with:

```
/ec book <playerName> 1
```

Give VIP players their own book by triggering this command when they join,
or via a permission-based ExecutableEvents event.

:::tip
Use `'**'` as a wildcard to include every recipe currently loaded.
Use `prefix_*` to include all recipes whose ID starts with a given prefix.
:::
