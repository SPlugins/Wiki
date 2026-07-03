# 🧩 Non-Obvious Mechanics
- Despite some plugins like ExecutableItems being clear about their features, some are hidden due to being difficult to explain on a general way.

## ExecutableItems

### Furnace Usage
> If you give an ExecutableItem usage, it will be reusable in the furnace. For example, if you give coal 3 usage, it will last for 3 fuel burn cycles until it vanishes. If you try to put 2 ei items that has more than 1 usage in it, the furnace will refuse to work.

### Keep Item On Death using NBT
> If an itemstack with the PDC NBT of `"score:keepItemOnDeath":1` and KeepInventory gamerule is disabled, it will allow the item to be retained on the player's inventory upon respawn. This can be achieved
> By using ADD_ITEM_NBT command.
> 
> Example: `/score run-player-command player:Special70 ADD_ITEM_NBT slot:0 keyValue:keepitemondeath=3 type:int mode:pdc`
> 
> Once all of the item's keepitemondeath charges are exhaused, the nbt will be removed from the itemstack.