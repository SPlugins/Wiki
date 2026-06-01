---
description: >-
  Quick answers to the most common "how do I…" questions about ExecutableCrafting —
  EI items as ingredients, player conditions, commands on craft, recipe books, and more.
---

# General FAQ

Looking for technical issues? See [Troubleshooting](/executablecrafting/questions-or-guides/frequently-asked-questions/troubleshooting).

---

## Can I use custom (ExecutableItems) items as recipe ingredients?

**Yes.** Set `checkExecutableItemID: true` inside `itemCheckers` and set your
ingredient via the in-game editor so the item string contains the EI ID in its NBT.

```yaml
itemCheckers:
  itemCheckerType: CUSTOM_CHECKS
  checkAmount: false
  checkDisplayName: false
  checkMaterial: true             # also check the material type
  checkCustomModelData: false
  checkLore: false
  checkDurability: false
  checkExecutableItemID: true     # ← require this exact EI item
  checkExecutableItemUsage: false
  checkExecutableItemVariables: false
```

Use the in-game editor (`/ec editor`) to place the EI item in the input slot — the
plugin writes the correct item string (including EI NBT) into the YAML automatically.

---

## How do I lock a recipe behind a permission?

Use `playerConditions.ifHasPermission` in the recipe YAML:

```yaml
playerConditions:
  ifHasPermission:
    - vip.crafting.special
  ifHasPermissionMsg: '&cYou need the &6VIP &cpermission to craft this.'
```

If a player without `vip.crafting.special` places the ingredients, the result slot
stays empty and they receive the custom message (if set).

---

## How do I require a minimum player level to craft?

Use `playerConditions.ifPlayerLevel`:

```yaml
playerConditions:
  ifPlayerLevel: '>=30'
  ifPlayerLevelMsg: '&cYou need at least &e30 levels &cto craft this.'
```

Operators: `>=`, `>`, `<=`, `<`, `==`.

See [Player & Target Conditions](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions)
for the full list (health, food, world, PlaceholderAPI, …).

---

## How do I run commands when a recipe is crafted?

Add `playerCommands` to the recipe. Commands fire when the player **picks up** the
result from the output slot (not when the ingredients are placed).

```yaml
playerCommands:
  - SEND_MESSAGE &aYou crafted the special sword!
  - [CONSOLE] give %player% experience 50
```

Use `%player%` as the crafter's name. For the full list of available commands and
SCore syntax, see [Custom Commands](/tools-for-all-plugins-score/custom-commands).

:::tip
To run a plain Minecraft command as a console command, prefix it with `[CONSOLE]`:
`[CONSOLE] effect give %player% speed 200 1`
:::

---

## What recipe types does ExecutableCrafting support?

| `recipeType` | Crafting station |
|---|---|
| `CRAFTING` | Crafting table (3×3) and the 2×2 inventory grid |
| `FURNACE` | Furnace, blast furnace, and smoker |
| `ANVIL` | Anvil |

Brewing stand support is planned for a future release.

---

## Do CRAFTING recipes work in the 2×2 inventory crafting grid?

**Yes, for `SHAPELESS` recipes.** Any ingredients placed anywhere in the grid will match.

For `MATCH_SHAPE` recipes, use the slot numbers that correspond to the 2×2 quadrant
you want. The slots are numbered 1–9 (left to right, top to bottom in the 3×3 grid).
The four valid 2×2 quadrants are: `1245`, `2356`, `4578`, or `5689`.

```yaml
# Example: 2×2 shaped recipe using the top-left quadrant
recipeType: CRAFTING
typeOfCraftingTableRecipe: MATCH_SHAPE
input1: minecraft:iron_ingot
input2: minecraft:iron_ingot
input4: minecraft:iron_ingot
input5: minecraft:iron_block
```

---

## Can I apply shared conditions to a group of recipes?

**Yes — use recipe groups.** Define the group in
`plugins/ExecutableCrafting/recipeGroups.yml` and list recipe IDs (wildcards supported):

```yaml
# recipeGroups.yml
vip_tier:
  recipesList:
    - vip_*        # matches all recipes starting with "vip_"
  playerConditions:
    ifHasPermission:
      - vip.crafting
  playerCommands:
    - SEND_MESSAGE &6[VIP] &fYou crafted a VIP item!
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
  playerConditions: {}
  config_update: true
```

All recipes whose ID matches the pattern now inherit the group's conditions and commands
**on top of** whatever the individual recipe already defines.

Run `/ec reload` after editing `recipeGroups.yml`.

---

## How do I show different recipes to different players (recipe books)?

Define recipe books in `plugins/ExecutableCrafting/recipeBooks.yml` and open them
with `/ec book <player> <bookId>`:

```yaml
# recipeBooks.yml
recipeBooks:
  1:                              # default book
    recipes:
      - basic_*
    folders: {}
  2:                              # VIP book — all recipes
    recipes:
      - '**'
    folders:
      Basic:
        - basic_*
      VIP:
        - vip_*
```

You can automate which book players see on join using ExecutableEvents or a
permission plugin command trigger:

```
/ec book %player% 2    # give VIP players book 2
```

See [Recipe Book](/executablecrafting/configurations/recipe-book) for the full
configuration reference.

---

## How do I give players XP when they craft something?

Use `playerCommands` with a console command:

```yaml
playerCommands:
  - [CONSOLE] experience add %player% 10 levels
```

Or award XP points instead of levels:

```yaml
playerCommands:
  - [CONSOLE] experience add %player% 500 points
```

---

## How do I make a furnace recipe that gives more XP or cooks faster?

Set `experience` (float) and `cookingTime` (ticks, 20 ticks = 1 second) in the recipe:

```yaml
recipeType: FURNACE
input1: minecraft:rotten_flesh
result: minecraft:leather

experience: 1.5         # XP orbs rewarded on pickup
cookingTime: 100        # 5 seconds (default is 200 = 10s)

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

:::warning
The fuel type is not configurable — any valid vanilla fuel works.
:::

---

## Can I delete or replace a vanilla recipe?

ExecutableCrafting **adds** custom recipes but does not remove vanilla ones directly.
To prevent vanilla crafting conflicts:

1. Use `MATCH_SHAPE` with a unique ingredient combination that vanilla doesn't have.
2. Or use `itemCheckers` with `checkCustomModelData: true` so the recipe only matches
   your custom-modeled item, not a plain vanilla one.
3. Alternatively, use a plugin like CraftEnhancer or override via a data pack to
   remove the vanilla recipe first, then add your EC replacement.

---

## Does ExecutableCrafting work with PlaceholderAPI?

**Yes.** You can use PAPI placeholders inside `placeholdersConditions` to gate recipes
behind any value PlaceholderAPI can provide (rank, currency, stats, etc.).

```yaml
placeholdersConditions:
  plcd0:
    placeholder: '%vault_eco_balance%'
    comparator: '>='
    value: '1000'
    messageIfNotValid: '&cYou need at least &a$1000 &cto craft this.'
```

See [Placeholder Conditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions)
for the full reference.
