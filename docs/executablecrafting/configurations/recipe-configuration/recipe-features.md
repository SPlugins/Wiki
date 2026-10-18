# Recipe Features

## General features

### itemCheckers

* Info: You can configure at which degree the item must be the same to have the recipe validated.
* itemCheckerType: Choose if you want use custom checks or not. If not the items placed by the users must match perfectly the items of the recipe.\
  Here are the available options:
  * ITEM\_MUST\_BE\_EXACTLY\_THE\_SAME
  * CUSTOM\_CHECKS
* If you have itemCheckerType: CUSTOM\_CHECKS then you can adjust the checks performed.\
  Here are the available options:
  * checkAmount: it checks if input amount = recipe item amount
  * checkDisplayName: it checks if input display name = recipe item display name
  * checkMaterial:  it checks if input material = recipe item material
  * checkCustomModelData:  it checks if input cmd = recipe item cmd
  * checkLore:  it checks if input lore = recipe item lore
  * checkDurability:  it checks if input durability = recipe item durability
  * checkExecutableItemID:  it checks if input EI id = recipe item EI id
  * checkExecutableItemUsage:  it checks if input EI usage = recipe item EI usage
  * checkExecutableItemVariables:  it checks if input EI variables values = recipe item EI variables values

```yaml
itemCheckers:
  itemCheckerType: ITEM_MUST_BE_EXACTLY_THE_SAME
  checkAmount: false
  checkDisplayName: false
  checkMaterial: false
  checkCustomModelData: false
  checkLore: false
  checkDurability: false
  checkExecutableItemID: false
  checkExecutableItemUsage: false
  checkExecutableItemVariables: false
```

### playerConditions

* Info: Conditions for the player that build the recipe
* [Player conditions](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### blockConditions

* Info: Conditions for the Craft station (example the anvil for the Anvil recipes)
* [Block conditions](/tools-for-all-plugins-score/custom-conditions/block-conditions.md)

### placeholdersConditions

* Info: Placeholders conditions, where you can define conditions using the block placeholders / player placeholders or other PAPI placeholders...
* [Placeholder conditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions.md)

## Crafting recipe features

### result

* Info: Define the result of the recipe
* Examples

```yaml
# 1 emerald
**result: minecraft:emerald**
# 3 emeralds
result: minecraft:emerald>>amount:3
# Custom item (You can use our in-game editor, you can define it with just a click)
result: minecraft:stone{"minecraft:custom_data":{PublicBukkitValues:{"executableitems:ei-id":"testtt","score:usage":1}},"minecraft:custom_name":'{"extra":["shuriken"],"text":""}',"minecraft:item_model":"elypack:shuriken","minecraft:lore":['{"extra":[{"bold":false,"color":"aqua","italic":true,"obfuscated":false,"strikethrough":false,"text":"Default lore","underlined":false}],"text":""}']}
```

### Input

* Info: Define the items requirement
* For the slot 1 it's input1, slot2 input2 , up to 9..

```yaml
# 1 emerald
**input1: minecraft:emerald**
# 3 emeralds
input2: minecraft:emerald>>amount:3
# Custom item (You can use our in-game editor, you can define it with just a click)
input3: minecraft:stone{"minecraft:custom_data":{PublicBukkitValues:{"executableitems:ei-id":"testtt","score:usage":1}},"minecraft:custom_name":'{"extra":["shuriken"],"text":""}',"minecraft:item_model":"elypack:shuriken","minecraft:lore":['{"extra":[{"bold":false,"color":"aqua","italic":true,"obfuscated":false,"strikethrough":false,"text":"Default lore","underlined":false}],"text":""}']}
```

:::info
In 2*2 crafting station, it's either 1245 or 2356 or 4578 or 5689
:::

### typeOfCraftingTableRecipe

* Info: Type of the crafting recipe table
* Options:
  * MATCH\_SHAPE
  * SHAPELESS : The placement order of the items will not be checked

## Anvil recipe features

### Input

* Info: Define the items requirement
* For the slot 1 it's input1, slot2 input2

```yaml
# 1 emerald
**input1: minecraft:emerald**
# 3 emeralds
input2: minecraft:emerald>>amount:3
# Custom item (You can use our in-game editor, you can define it with just a click)
input2: minecraft:stone{"minecraft:custom_data":{PublicBukkitValues:{"executableitems:ei-id":"testtt","score:usage":1}},"minecraft:custom_name":'{"extra":["shuriken"],"text":""}',"minecraft:item_model":"elypack:shuriken","minecraft:lore":['{"extra":[{"bold":false,"color":"aqua","italic":true,"obfuscated":false,"strikethrough":false,"text":"Default lore","underlined":false}],"text":""}']}
```

### anvilMergeType

* Info: Type of the merge
* Options:
  * CUSTOM\_RESULT : Define the result in the result feature
  * INPUT1\_AS\_RESULT : The result will be the input1
  * INPUT2\_AS\_RESULT : The result item will be the input2

### result

* Info: Define the result of the recipe
* Examples

```yaml
# 1 emerald
**result: minecraft:emerald**
# 3 emeralds
result: minecraft:emerald>>amount:3
# Custom item (You can use our in-game editor, you can define it with just a click)
result: minecraft:stone{"minecraft:custom_data":{PublicBukkitValues:{"executableitems:ei-id":"testtt","score:usage":1}},"minecraft:custom_name":'{"extra":["shuriken"],"text":""}',"minecraft:item_model":"elypack:shuriken","minecraft:lore":['{"extra":[{"bold":false,"color":"aqua","italic":true,"obfuscated":false,"strikethrough":false,"text":"Default lore","underlined":false}],"text":""}']}
```

### itemCommands

* Info: To modify the result item
* [Item commands](/tools-for-all-plugins-score/custom-commands/item-commands)
* Examples:

```yaml
itemCommands:
- ADD_ITEM_ATTRIBUTE attribute:GENERIC_MAX_HEALTH value:1.0 equipmentSlot:HAND mode:ADD affectDefaultAttributes:false
- MODIFY_ITEM_DURABILITY modification:50 supportUnbreaking:false
- SET_ITEM_MODEL model:minecraft:stone
```

## Furnace recipe features

:::warning
The fuel can't be edited currently
:::

:::info
When the conditions of a furnace recipe are not met and its input also has a vanilla furnace recipe (raw iron, for example), the furnace smelts the vanilla recipe instead: vanilla result and cooking time. Without a vanilla recipe for the input, nothing is smelted.
:::

### Input

* Info: Define the items requirement
* For the slot 1 it's input1

```yaml
# 1 emerald
**input1: minecraft:emerald**
# 3 emeralds
input1: minecraft:emerald>>amount:3
# Custom item (You can use our in-game editor, you can define it with just a click)
input1: minecraft:stone{"minecraft:custom_data":{PublicBukkitValues:{"executableitems:ei-id":"testtt","score:usage":1}},"minecraft:custom_name":'{"extra":["shuriken"],"text":""}',"minecraft:item_model":"elypack:shuriken","minecraft:lore":['{"extra":[{"bold":false,"color":"aqua","italic":true,"obfuscated":false,"strikethrough":false,"text":"Default lore","underlined":false}],"text":""}']}1
```

### result

* Info: Define the result of the recipe
* Examples

```yaml
# 1 emerald
**result: minecraft:emerald**
# 3 emeralds
result: minecraft:emerald>>amount:3
# Custom item (You can use our in-game editor, you can define it with just a click)
result: minecraft:stone{"minecraft:custom_data":{PublicBukkitValues:{"executableitems:ei-id":"testtt","score:usage":1}},"minecraft:custom_name":'{"extra":["shuriken"],"text":""}',"minecraft:item_model":"elypack:shuriken","minecraft:lore":['{"extra":[{"bold":false,"color":"aqua","italic":true,"obfuscated":false,"strikethrough":false,"text":"Default lore","underlined":false}],"text":""}']}
```

### experience

* Info: The experience earned when the smelt is finish

```yaml
experience: 0.0
```

### cookingTime

* Info: The cooking time in ticks (20 ticks = 1 second)

```yaml
# Example for 10 seconds**
cookingTime: 200
```
