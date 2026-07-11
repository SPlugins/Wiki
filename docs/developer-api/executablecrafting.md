---
sidebar_position: 6
title: 🛠️ ExecutableCrafting API
description: Look up custom recipes, listen to custom crafts, and use the advanced recipe API.
---

# 🛠️ ExecutableCrafting API

ExecutableCrafting has **two** API levels:

1. **The SCore facade** — id lookups and lifecycle, consistent with the other plugins. Only needs `com.ssomar:SCore`.
2. **The rich recipe API** shipped in the plugin (`vayk.executablecrafting.api.ExecutableCraftingAPI`) — crafting grids, furnace inputs, anvil pairs, recipe groups, conditions. Needs the `com.ssomar.executablecrafting:ExecutableCrafting` artifact.

## SCore facade

Entry point: `com.ssomar.score.api.executablecrafting.ExecutableCraftingAPI`

```java
ExecutableCraftingManagerInterface manager = ExecutableCraftingAPI.getExecutableCraftingManager();

Optional<? extends RecipeInterface> recipeOpt = manager.getRecipe("my_recipe");
List<String> ids = manager.getRecipeIdsList();
List<? extends RecipeInterface> all = manager.getAllRecipes();
```

## Rich recipe API (advanced)

Add the plugin artifact next to SCore:

```xml
<dependency>
    <groupId>com.ssomar.executablecrafting</groupId>
    <artifactId>ExecutableCrafting</artifactId>
    <version>VERSION</version>
    <scope>provided</scope>
</dependency>
```

```java
import vayk.executablecrafting.api.ExecutableCraftingAPIProvider;
import vayk.executablecrafting.api.ExecutableCraftingAPI;

ExecutableCraftingAPI api = ExecutableCraftingAPIProvider.get();
Optional<ICraftingRecipe> byGrid = api.getCraftingRecipe(craftingGrid);
Optional<IFurnaceRecipe> furnace = api.getFurnaceRecipe(inputItem);
List<IRecipeGroup> groups = api.getRecipeGroupsForRecipe("my_recipe");
boolean allowed = api.checkRecipeConditions("my_recipe", player, null);
```

## Events

| Event | Cancellable | Fired when |
|---|---|---|
| `ExecutableCraftingCraftEvent` | ✅ | a player crafts with a custom recipe, **before** ingredients are consumed |
| `ExecutableCraftingPostLoadEvent` | — | all recipes are loaded and registered |

```java
@EventHandler
public void onCustomCraft(ExecutableCraftingCraftEvent e) {
    // e.getPlayer(), e.getRecipe().getId(), e.getResult()
    e.getResult().setAmount(e.getResult().getAmount() * 2);   // the result stack is mutable
    // e.setCancelled(true) aborts the craft: no ingredients consumed, nothing given
}
```
