# ⚙️ Developer API

ExecutableCrafting provides a clean public API for developers who want to interact with custom recipes programmatically.

## Getting Started

### Maven Dependency

1. Download the ExecutableCrafting jar from [Modrinth](https://modrinth.com/plugin/executablecrafting)
2. Place the jar in your project's `src/main/resources/` folder
3. Add the dependency in your `pom.xml`:

```xml
<dependency>
    <groupId>com.ssomar.executablecrafting</groupId>
    <artifactId>executablecrafting</artifactId>
    <version>42.42.42</version>
    <scope>system</scope>
    <systemPath>${project.basedir}/src/main/resources/ExecutableCrafting-42.42.42.jar</systemPath>
</dependency>
```

:::note
Replace `42.42.42` with the actual version number of the jar you downloaded.
:::

### Plugin Dependency

Add ExecutableCrafting as a dependency in your `plugin.yml`:

```yaml
depend: [ExecutableCrafting]
# or
softdepend: [ExecutableCrafting]
```

## Accessing the API

```java
import vayk.executablecrafting.api.ExecutableCraftingAPI;

// Get the API instance
ExecutableCraftingAPI api = ExecutableCraftingAPI.get();

// Or through the main plugin class
ExecutableCraftingAPI api = ExecutableCrafting.getAPI();
```

## API Overview

### ExecutableCraftingAPI

The main entry point for all API operations.

#### Recipe Methods

| Method | Description |
|--------|-------------|
| `getRecipe(String id)` | Gets a recipe by its ID. Returns `Optional<IRecipe>` |
| `getAllRecipes()` | Gets all loaded recipes. Returns `Collection<IRecipe>` |
| `getRecipesByType(RecipeType type)` | Gets all recipes of a specific type |
| `hasRecipe(String id)` | Checks if a recipe with the given ID exists |
| `getCraftingRecipes()` | Gets all crafting table recipes |
| `getCraftingRecipe(ItemStack[] grid)` | Gets a crafting recipe matching the given grid |
| `getCraftingRecipeByResult(ItemStack result)` | Gets a crafting recipe by its result item |
| `getFurnaceRecipes()` | Gets all furnace recipes |
| `getFurnaceRecipe(ItemStack input)` | Gets a furnace recipe matching the input item |
| `getAnvilRecipes()` | Gets all anvil recipes |
| `getAnvilRecipe(ItemStack input1, ItemStack input2)` | Gets an anvil recipe matching the inputs |

#### Recipe Group Methods

| Method | Description |
|--------|-------------|
| `getRecipeGroup(String id)` | Gets a recipe group by its ID |
| `getAllRecipeGroups()` | Gets all loaded recipe groups |
| `hasRecipeGroup(String id)` | Checks if a recipe group exists |
| `getRecipeGroupsForRecipe(String recipeId)` | Gets all groups associated with a recipe |

#### Utility Methods

| Method | Description |
|--------|-------------|
| `checkRecipeConditions(String recipeId, OfflinePlayer player, Block block)` | Checks if a player meets recipe conditions |
| `runRecipeCommands(String recipeId, Player player)` | Runs commands associated with a recipe |
| `reload()` | Reloads all recipes and recipe groups from disk |

## Interfaces

### IRecipe

Base interface for all recipe types.

```java
public interface IRecipe {
    String getId();
    RecipeType getType();
    ItemStack getResultItem();
    List<ItemStack> getInputItems();
    ItemStack getIconItem();
    boolean checkConditions(OfflinePlayer player, Block block);
    void runCommands(Player player);
    boolean verifyItemSimilarity(ItemStack expectedItem, ItemStack actualItem);
    String getPath();
}
```

### ICraftingRecipe

Extends `IRecipe` for crafting table recipes (3x3 or 2x2 grid).

```java
public interface ICraftingRecipe extends IRecipe {
    ShapeType getShapeType();           // MATCH_SHAPE or SHAPELESS
    ItemStack[] getCraftingGrid();      // 9 slots array
    ItemStack getInput(int slot);       // Slot 1-9
    int validateGrid(ItemStack[] grid, boolean is2x2Grid);
    ItemStack getResult(int amount);
    boolean fitsIn2x2Grid();
}
```

**Crafting Grid Layout:**
```
[0][1][2]
[3][4][5]
[6][7][8]
```

### IFurnaceRecipe

Extends `IRecipe` for furnace smelting recipes.

```java
public interface IFurnaceRecipe extends IRecipe {
    ItemStack getInput();
    double getExperience();
    int getCookingTime();       // In ticks (200 = 10 seconds)
    boolean matchesInput(ItemStack item);
    void register();
}
```

### IAnvilRecipe

Extends `IRecipe` for anvil combination recipes.

```java
public interface IAnvilRecipe extends IRecipe {
    ItemStack getInput1();
    ItemStack getInput2();
    AnvilMergeType getMergeType();  // CUSTOM_RESULT, INPUT1_AS_RESULT, or INPUT2_AS_RESULT
    int validateInputs(ItemStack item1, ItemStack item2);
    ItemStack getResult(int amount);
}
```

### IRecipeGroup

Represents a group of recipes sharing common conditions and commands.

```java
public interface IRecipeGroup {
    String getId();
    List<String> getRecipePatterns();   // Supports wildcards: "prefix*", "*"
    boolean isAssociatedWith(String recipeId);
    boolean checkConditions(OfflinePlayer player, Block block);
    void runCommands(Player player);
    boolean verifyItemSimilarity(ItemStack item1, ItemStack item2);
    String getPath();
    ItemStack getIconItem();
}
```

## Examples

### Get All Recipes

```java
ExecutableCraftingAPI api = ExecutableCraftingAPI.get();
Collection<IRecipe> recipes = api.getAllRecipes();

for (IRecipe recipe : recipes) {
    System.out.println("Recipe: " + recipe.getId() + " - Type: " + recipe.getType());
}
```

### Get a Specific Recipe

```java
ExecutableCraftingAPI api = ExecutableCraftingAPI.get();
Optional<IRecipe> recipe = api.getRecipe("my_custom_sword");

recipe.ifPresent(r -> {
    ItemStack result = r.getResultItem();
    System.out.println("Result: " + result.getType());
});
```

### Check Recipe Conditions

```java
ExecutableCraftingAPI api = ExecutableCraftingAPI.get();
Optional<IRecipe> recipe = api.getRecipe("diamond_sword_recipe");

recipe.ifPresent(r -> {
    if (r.checkConditions(player, block)) {
        // Player meets all conditions
        System.out.println("Player can craft this recipe!");
    } else {
        // Conditions not met
        System.out.println("Player cannot craft this recipe.");
    }
});
```

### Find Recipe by Crafting Grid

```java
ExecutableCraftingAPI api = ExecutableCraftingAPI.get();

// Create a 3x3 grid (9 slots)
ItemStack[] grid = new ItemStack[9];
grid[0] = new ItemStack(Material.DIAMOND);
grid[1] = new ItemStack(Material.DIAMOND);
grid[3] = null; // Empty slot
// ... fill other slots

Optional<ICraftingRecipe> recipe = api.getCraftingRecipe(grid);
recipe.ifPresent(r -> {
    System.out.println("Found matching recipe: " + r.getId());
});
```

### Working with Furnace Recipes

```java
ExecutableCraftingAPI api = ExecutableCraftingAPI.get();
List<IFurnaceRecipe> furnaceRecipes = api.getFurnaceRecipes();

for (IFurnaceRecipe recipe : furnaceRecipes) {
    System.out.println("Recipe: " + recipe.getId());
    System.out.println("Input: " + recipe.getInput().getType());
    System.out.println("Experience: " + recipe.getExperience());
    System.out.println("Cook time: " + recipe.getCookingTime() + " ticks");
}
```

### Working with Recipe Groups

```java
ExecutableCraftingAPI api = ExecutableCraftingAPI.get();

// Get groups for a specific recipe
List<IRecipeGroup> groups = api.getRecipeGroupsForRecipe("my_recipe");
for (IRecipeGroup group : groups) {
    System.out.println("Group: " + group.getId());

    // Check if player meets group conditions
    if (group.checkConditions(player, null)) {
        // Run group commands
        group.runCommands(player);
    }
}
```

### Run Recipe Commands

```java
ExecutableCraftingAPI api = ExecutableCraftingAPI.get();

// Check conditions first
if (api.checkRecipeConditions("my_recipe", player, block)) {
    // Run the associated commands
    api.runRecipeCommands("my_recipe", player);
}
```

### Reload Recipes

```java
ExecutableCraftingAPI api = ExecutableCraftingAPI.get();
api.reload();
System.out.println("All recipes reloaded!");
```

## Enums

### RecipeType

```java
public enum RecipeType {
    CRAFTING,    // Crafting table recipes
    FURNACE,     // Furnace/smelting recipes
    ANVIL        // Anvil combination recipes
}
```

### ShapeType

```java
public enum ShapeType {
    MATCH_SHAPE,  // Items must be in exact positions
    SHAPELESS     // Items can be in any position
}
```

### AnvilMergeType

```java
public enum AnvilMergeType {
    CUSTOM_RESULT,      // Use a custom result item
    INPUT1_AS_RESULT,   // Use input1 as the base for the result
    INPUT2_AS_RESULT    // Use input2 as the base for the result
}
```
