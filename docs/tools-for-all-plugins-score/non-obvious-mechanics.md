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

### Throwable Items
> If an ExecutableItem has at least over 1 usage or have -1 usage, it becomes an infinite-use item. The moment it reaches 1 usage, it will stop behaving like an infinite item.  
>   
> Example:
> - EGG
> - SNOWBALL
> - WIND CHARGE
> - ENDER PEARL
> - FIREWORKS
> - ...and more similar projectiles except TRIDENTS

### Projectile's expiry time
> As long as ExecutableItems is installed, any projectile launched by players will automatically get deleted in 30-60s. It was to account for `PROJECTILE_ENTER_IN_LIQUID` activator.