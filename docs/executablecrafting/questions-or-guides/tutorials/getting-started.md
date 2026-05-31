---
description: >-
  Step-by-step guide to installing ExecutableCrafting and creating your first
  custom crafting recipe — from setup to testing in-game.
---

# Getting Started with ExecutableCrafting

## Prerequisites

Before you begin, make sure your server meets these requirements:

* A **Spigot-based server** (Paper, Purpur, or any fork) running Minecraft **1.16+**
* [**SCore**](https://modrinth.com/plugin/score) installed — required by all Ssomar plugins
* ExecutableCrafting (free or premium) placed in your `plugins/` folder

:::info
If you already have ExecutableItems or ExecutableBlocks installed, update them at the same time as ExecutableCrafting. They share the SCore library and must stay on compatible versions.
:::

After placing both JARs in `plugins/`, do a **full server restart** (stop + start). Plugin managers like PlugMan can cause loading issues.

## Verify the installation

Once the server starts, run:

```
/ec reload
```

If you see *"Recipes reloaded successfully!"* — you're good. If you get errors, check the `logs/latest.log` for SCore or class-loading issues (see [Install & Update Errors](/executablecrafting/questions-or-guides/install-update-errors/how-to-install-correctly)).

## Give yourself the required permissions

To use the editor you need the `ec.cmd.*` permissions. The easiest way is to grant the wildcard:

```
/lp group default permission set ec.* true
```

Or give only the editor permission for now:

```
/lp user <yourName> permission set ec.cmd.show true
/lp user <yourName> permission set ec.cmd.create true
/lp user <yourName> permission set ec.cmd.edit true
```

## Create your first recipe — via the GUI editor

The fastest way to build a recipe is through the in-game GUI.

### 1. Open the editor

```
/ec editor
```

A GUI window opens showing all existing recipes.

### 2. Create a new recipe

```
/ec create my_first_recipe
```

This generates a blank YAML file at `plugins/ExecutableCrafting/recipes/my_first_recipe.yml` and opens the editor for it automatically.

### 3. Choose a recipe type

In the editor you'll see a *Type* button. Click it to cycle through:

| Type | Crafting station |
|---|---|
| `CRAFTING` | Crafting table (3×3 or 2×2 inventory grid) |
| `FURNACE` | Furnace |
| `ANVIL` | Anvil |

For this tutorial, keep it as **CRAFTING**.

### 4. Set the inputs

The editor shows a 3×3 grid matching the crafting table slots:

```
[1][2][3]
[4][5][6]
[7][8][9]
```

Click any slot to set the ingredient. For example, to place a **Diamond** in slot 5 (center):

* Click slot 5 → hold a Diamond in your cursor → click to set it.

### 5. Set the result

Click the **Result** button and set the output item. Example: a **Diamond Sword**.

### 6. Choose the recipe shape

Click **typeOfCraftingTableRecipe** to toggle between:

* `MATCH_SHAPE` — ingredients must be placed in the exact positions you defined.
* `SHAPELESS` — ingredients can be placed anywhere in the grid.

Leave it as `MATCH_SHAPE` for now.

### 7. Save and reload

Click **Save** in the editor, then run:

```
/ec reload
```

Open a crafting table and place your ingredients — the result item should appear in the output slot.

---

## Create your first recipe — via YAML

You can also write recipes directly. Create a file at:

```
plugins/ExecutableCrafting/recipes/diamond_core.yml
```

Paste this example — a shapeless recipe that converts **4 iron ingots** into **1 diamond**:

```yaml
recipeType: CRAFTING
typeOfCraftingTableRecipe: SHAPELESS

# Inputs (any 4 iron ingots, anywhere in the grid)
input1: minecraft:iron_ingot
input2: minecraft:iron_ingot
input3: minecraft:iron_ingot
input4: minecraft:iron_ingot

# Output
result: minecraft:diamond

# Item checker — only match by material (ignore name, lore, etc.)
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

Reload to apply:

```
/ec reload
```

:::tip
`config_update: true` tells the plugin to validate and auto-complete missing fields on reload. Keep it in every recipe file.
:::

## Test your recipe

1. Open a crafting table.
2. Place 4 iron ingots anywhere in the grid.
3. You should see 1 diamond in the output slot.
4. Take it — the ingots are consumed.

## Next steps

* [Advanced Recipes](/executablecrafting/questions-or-guides/tutorials/advanced-recipes) — shaped 3×3, furnace, anvil, conditions, and recipe groups.
* [Recipe Features](/executablecrafting/configurations/recipe-configuration/recipe-features) — full reference for every configurable field.
* [Recipe Books](/executablecrafting/configurations/recipe-book) — show different recipes to different players.
