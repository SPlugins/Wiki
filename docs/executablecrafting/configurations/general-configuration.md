# General Configuration

## Configuration of the plugin

```yaml
# ----------------------------------
# -
#       ExecutableCrafting
# -
#         By: Vayk and Ssomar
# -
# ----------------------------------
# -
# WIKI HERE : https://splugins.net/docs
# DISCORD HERE : https://discord.com/invite/TRmSwJaYNv
# -

#Configuration related to recipe
recipeConfig:
  global:
    exactItemAmount: false #If you want the result only to be shown if the items match the same amount
    eventsPriority: NORMAL #In case some plugin is causing problems you can set this to NORMAL, HIGH or HIGHEST
  craftingTable:
    castResultAsMaxAmount: false #If you want the result to stack on the result slot of the crafting inventory
#If true, the CRAFTER block refuses the recipes that have player conditions (a Crafter has no player, so they can't be checked)
crafterRefusesPlayerConditionRecipes: false
#If true, the vanilla recipe book shows the EC recipes as craftable only when the player has the right items (custom, enchanted or renamed ones included). Paper 1.21.2+
accurateRecipeBook: false

#Configuration related to recipe books
locale: EN_US
recipeBook:
  recipeBookNameOfID: true #If you want inside the recipe book the name of the items to be the ID, otherwise it will be the result name
  recipesInternal: true #If you want to be able to check the recipes inside recipes.
  recipesInternal_ShiftClickToRecipesInternal: true #If you want to only click the items inside of recipes to get the recipe then disable this.
  recipesInternal_checkRecipesFromInventory: false #If you want to also be able to check the recipes of the items in your inventory then enable this
  plchdShowAll: true #If you want the items to show all not meeting conditions in the recipe book
  playerCanOpenNotMeetingCondition: false #If you want the players to be able to open recipes in the recipe book even if they don't meet the conditions
```

## Crafter block and player conditions

The vanilla **Crafter** (1.21+) crafts ExecutableCrafting recipes too, with their per-slot amounts, block conditions and placeholder conditions.
A Crafter has no player, so the **player conditions** of a recipe (for example `ifPlayerLevel: '>=50'`) can't be checked:
by default they are skipped and the Crafter crafts the recipe anyway.

Set `crafterRefusesPlayerConditionRecipes: true` to make the Crafter refuse every recipe that has player conditions, on the recipe
itself or on one of its [recipe groups](recipe-groups.md). Players still craft these recipes at a crafting table when they meet the conditions.

## Accurate vanilla recipe book

The vanilla recipe book (the green book of the crafting table and of the inventory) shows each recipe as craftable or not craftable.
The client decides it alone and only compares the item types: it ignores the enchanted, renamed or damaged items. So an EC recipe with
custom ingredients (enchanted or renamed items, ExecutableItems, Nexo items...) looks craftable when the player has the plain
materials, and not craftable when he has the right items.

Set `accurateRecipeBook: true` (default `false`, Paper 1.21.2+) to let EC decide it: the vanilla book shows an EC crafting recipe
as craftable only when the player really has its ingredients, compared with the `itemCheckers` of the recipe, in his inventory or
in the crafting grid. The state is updated live when the inventory changes. The vanilla recipes are not changed.

* The recipe conditions are not taken into account in the book, like in vanilla: it only shows whether the player has the ingredients.
* On Spigot or before 1.21.2, the option is ignored with a warning in the console.

To enable it:

1. Set `accurateRecipeBook: true` in `plugins/ExecutableCrafting/config.yml`. If your config.yml was created by an older version
   of EC, EC added the line `accurateRecipeBook: false` at the end of the file: change this line, don't add a second one. If the
   key is written twice, the last one wins.
2. Run `/ec reload`. The console shows `accurateRecipeBook enabled: the vanilla recipe book shows the real craftable state of the EC recipes`.
3. To see what the book receives, run `/ec debug` and put the ingredients of a recipe in a crafting grid: the `[EC debug]` line ends
   with `| recipe book: craftable`, `not craftable`, `not tracked yet` (the recipe is not in the player's book yet),
   `accurateRecipeBook off (vanilla state)` or `accurateRecipeBook unsupported here`.

## Visual configuration of recipeBook

```yaml
#Customization of the messages that the plugin send
message:
  command:
    reloadMessage: "Recipes reloaded successfully!"
    debugActivated: "You activated the debug mode"
    debugDeactivated: "You deactivated the debug mode"
#Customization of the aspects of the recipe book
recipeBook:
  title:
    recipe: "Recipe book: %bookID% - Recipe: %recipe%"
    mainGUI: "Recipe book: %bookID% - %page%"
    folder: "Recipe book: %bookID% - %folder% - %page%"
  item:
    craftingStations:
      craftingTable:
        name: "Crafting Table"
        lore: ";;;You need this crafting;;;station to craft this;;;recipe :D"
        customModelData: "0"
        playerHead: ""
      furnace:
        name: "Furnace"
        lore: "You need this crafting;;;station to craft this;;;recipe :D"
        customModelData: "0"
        playerHead: ""
    nextPage:
      name: "Next page TEST"
      material: "ANVIL"
      customModelData: "0"
      playerHead: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzdhZWU5YTc1YmYwZGY3ODk3MTgzMDE1Y2NhMGIyYTdkNzU1YzYzMzg4ZmYwMTc1MmQ1ZjQ0MTlmYzY0NSJ9fX0"
    previousPage:
      name: "Previous page TEST"
      material: "ANVIL"
      customModelData: "0"
      playerHead: ""
    noMorePages:
      name: "No more pages TEST"
      material: "PLAYER_HEAD"
      customModelData: "0"
      playerHead: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzdhZWU5YTc1YmYwZGY3ODk3MTgzMDE1Y2NhMGIyYTdkNzU1YzYzMzg4ZmYwMTc1MmQ1ZjQ0MTlmYzY0NSJ9fX0"
    noPreviousPages:
      name: "No previous pages TEST"
      material: "RED_STAINED_GLASS_PANE"
      customModelData: "0"
      playerHead: ""
    goBack:
      name: "Go Back TEST"
      material: "ANVIL"
      customModelData: "0"
      playerHead: ""
    default:
      name: ""
      material: "BLACK_STAINED_GLASS_PANE"
      customModelData: "0"
      playerHead: ""
  plchdPositive: ";;;&eYou can craft this item ^^;;;multiple lines;;;bomb"
```
