# Item Restrictions/Resistances

On this page you will learn about item restrictions and some resistances, this will allow you to customize the behavior on certain cases of the item.

## Global restrictions

* Info: If you would like to add one of item restrictions to all the items you have made on the plugin you can add the restriction config of the restriction(s) you want inside the config.yml file of the plugin.
* Example: I would like to add the restrictions of not using anvil and grind stone to all ExecutableItems created and to be created


```yaml
# ----------------------------------
# -
#       ExecutableItems
# -
#         By: Ssomar
# -
# ----------------------------------
# -
# WIKI HERE : https://docs.ssomar.com/executableitems/information-ei
# DISCORD HERE : https://discord.com/invite/TRmSwJaYNv
# -

## Start of default config features
pickup-limit: -1
disable-world: [ ]
premium-enable-cooldown-for-op: true #Premium only
checkVersionMsg: true
disableTestItems: false # If you have a big server with a lot of players, it's recommended to turn this option on true
silentEIGive: false
silentMessagePreventionErrorHeadDBError: false
disableBackup: false #<- Backup your items config at each start / reload of the server
deleteBackupsAfterDays: 7 #<- It will deletes backups older than this number of days
## End of default config features
## 
## Start for manually added restrictions to apply on all ExecutableItems
restrictions:
  cancel-anvil: true
  cancel-grind-stone: true
## End for manually added restrictions to apply on all ExecutableItems
```


## Individual restrictions

On this section you will learn how to add an individual restriction only for the ExecutableItem you are currently editing.

### Cancel the drop of the item

* Info: Boolean value that prevents the player from dropping the executable item.
* Example:

```yaml
restrictions:
  cancel-item-drop: true
```

### Cancel placing the block into the ground.

* Info: Boolean value that prevents the player from placing the Executable Items in case of the item is an instance of block into the ground.
* Example:

```yaml
restrictions:
  cancel-item-place: true
```

### Cancel the use of the item in any recipes on the crafting table

* Info: Boolean value that prevents the player from crafting vanilla recipes with the ExecutableItem.
* Example:

```yaml
restrictions:
  cancel-item-craft: true
```

### Cancel the use of the item in only vanilla recipes, not affecting the custom ones

* Info: Boolean value that prevents the player from crafting vanilla recipes with the Executableitem but can still be used for custom crafting recipes.
* Example:

```yaml
restrictions:
  cancel-item-craft-no-custom: true
```

### Cancel interaction to decorate minecraft pots

* Info: Boolean value that prevents the player from putting the ExecutableItems in the decorated pots
* Example:

```yaml
restrictions:
  cancel-decorated-pot: true
```

### Cancel depositing the item into a storage

* Info: Boolean value that prevents the player from putting the ExecutableItem in the following list:
  * Chest
  * Ender Chest
  * Trapped Chest
  * Barrel
  * Shulker Box
* Example: (This feature doesn't work on creative)

```yaml
restrictions:
  cancel-deposit-in-chest: true
```

### Cancel depositing the item into a furnace

* Info: Boolean value that prevents the player from putting the ExecutableItem in the following list:
  * Furnace
  * Blast Furnace
  * Smoker
* Example: (This feature doesn't work on creative)

```yaml
restrictions:
  cancel-deposit-in-furnace: true
```

### Cancel the burn of the item in fire and lava

* Info: Boolean value that prevents the ExecutableItem to get burn in fire or lava.
* Example:

```yaml
restrictions:
  cancel-item-burn: true
```

### Cancel item delete because of cactus interaction

* Info: Boolean value that prevents the ExecutableItem to get deleted when touching a cactus block.
* Example:

```yaml
restrictions:
  cancel-item-delete-by-cactus: true
```

### Cancel item delete when strike by a lightning

* Info: Boolean value that prevents the ExecutableItem to get deleted when a lightning strikes it.
* Config: `cancel-item-delete-by-lightning: true`
* Example:

```yaml
restrictions:
  cancel-item-delete-by-lightning: true
```

### Cancel enchanting the item

* Info: Boolean value that prevents the item from getting enchanted 
* Example:

```yaml
restrictions:
  cancel-enchant: true
```

### Cancel item placement inside an anvil 

* Info: Boolean value that prevents the player from putting the ExecutableItem inside an anvil. This finally prevents from placing it so it prevents rename and enchant too.
* Example:

```yaml
restrictions:
  cancel-anvil: true
```

### Cancel rename action using an anvil

* Info: Boolean value that prevents  the player from renaming the ExecutableItem using an anvil.
* Example:

```yaml
restrictions:
  cancel-rename-anvil: true
```

### Cancel enchant action using an anvil

* Info: Boolean value that prevents the player from enchanting the ExecutableItem using an anvil.
* Example:

```yaml
restrictions:
  cancel-enchant-anvil: true
```

### Cancel item interaction with horse/mule/llama

* Info: Boolean value that prevents the ExecutableItems for interaction with horses/mules/llamas. This disable the storage too.
* Example:

```yaml
restrictions:
  cancel-horse: true
```

### Cancel the consumption/eat of the item

* Info: Boolean value that prevents the player from consuming or eat the ExecutableItem.
* Example:

```yaml
restrictions:
  cancel-consumption: true
```

### Cancel use of the item inside the crafter block

* Info: Boolean value that prevents the player from putting the ExecutableItems inside a crafter block.
* Config: `cancel-crafter: false`

```yaml
restrictions:
  cancel-crafter: true
```

### Restriction of locked in the inventory

* Info: Boolean value that makes the ExecutableItem stay in the slot where it is and prevents the player from moving it in any possible way.
* Example (This feature doesn't work on creative)

```yaml
restrictions:
  locked-in-inventory: true
```

### Cancel tool interactions

* Info: Boolean value that prevents the player from using the ExecutableItem trigger tool interactions. e.g. (Right click a block using an axe to strip it, Using a hoe to farm a grass block)
* Example:

```yaml
restrictions:
  cancel-tool-interactions: true
```

### Cancel placing the item inside an item frame

* Info: Boolean value that prevents the player from putting the ExecutableItem inside anitem frame.
* Example:

```yaml
restrictions:
  cancel-item-frame: true
```

### Cancel the interaction with an smithing table

* Info: Boolean value that prevents the player from putting the ExecutableItem inside an smithing table.
* Example:

```yaml
restrictions:
  cancel-smithing-table: true
```

### Cancel the interaction with a grind stone

* Info: Boolean value that prevents the player from putting the ExecutableItem inside a grindstone.
* Example:

```yaml
restrictions:
  cancel-grind-stone: true
```

### Cancel the interaction with a stone cutter

* Info: Boolean value that prevents the player from putting ExecutableItem inside a stone cutter.
* Example:

```yaml
restrictions:
  cancel-stone-cutter: true
```

### Cancel the interaction with a brewing stand 

* Info: Boolean value that prevents the player from putting the ExecutableItem inside a brewing stand.
* Example:

```yaml
restrictions:
  cancel-brewing: true
```

### Cancel the interaction with a beacon

* Info: Boolean value that prevents the player from putting the ExecutableItem inside a beacon.
* Example:

```yaml
restrictions:
  cancel-beacon: true
```

### Cancel the interaction with a cartography block

* Info: Prevents the player from putting the ExecutableItem inside a cartography block.
* Example:

```yaml
restrictions:
  cancel-cartography: true
```

### Cancel the interaction with a composter block

* Info: Boolean value that prevents the player from putting the ExecutableItem inside a composter.
* Example:

```yaml
restrictions:
  cancel-composter: true
```

### Cancel the interaction with a dispenser block.

* Info: Boolean value that prevents player from putting the ExecutableItem into a dispenser block.
* Example:

```yaml
restrictions:
  cancel-dispenser: true
```

### Cancel the interaction with a dropper block

* Info: Boolean value that prevents the player from putting the ExecutableItem inside a dropper block.
* Example:

```yaml
restrictions:
  cancel-dropper: true
```

### Cancel the interaction with a hopper block

* Info: Boolean value that prevents the player from putting the ExecutableItem items inside a hopper. This means leaving the item inside the container of the hopper. This does not prevent the item entering the hopper via dropped item on top of the hopper.
* Example:

```yaml
restrictions:
  cancel-hopper: true
```

### Cancel the interaction with a lectern block

* Info: Boolean value that prevents the player from putting the ExecutableItem inside a lectern block.
* Example:

```yaml
restrictions:
  cancel-lectern: true
```

### Cancel the interaction with a villager trader/merchant

* Info: Boolean value that prevents player from putting the ExecutableItem inside a villager/merchant trade.
* Example:

```yaml
restrictions:
  cancel-merchant: true
```

### Cancel item hand swapping

* Info: Boolean value that prevents the player from swapping the items from one hand to the another. Generally using F on the keyboard for "Swap items with offhand"
* Example:

```yaml
restrictions:
  cancel-swap-hand: true
```

### Cancel the interaction of a horn

* Info: Boolean value that prevents the player from playing the horn in case the ExecutableItem is a horn.
* Example:

```yaml
restrictions:
  cancel-horn: true
```

### CANCEL ARMOR STAND

* Info: Prevents the player from putting the ExecutableItem on an armor stand.
* Example:

```yaml
restrictions:
  cancel-armorstand: true
```

### CANCEL SPAWNER

* Info: Prevents the player from using the ExecutableItem spawn egg on a spawner in its vanilla way.
* Example:

```yaml
restrictions:
  cancel-spawner: true
```

### CANCEL PLACE IN BUNDLE

* Info: Prevents the player from putting the ExecutableItem inside a bundle.
* Example:

```yaml
restrictions:
  cancel-place-in-bundle: true
```
