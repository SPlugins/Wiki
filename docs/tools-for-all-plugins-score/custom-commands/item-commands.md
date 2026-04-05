# Item Commands

:::info
You want keep the brut HEX form in your command ? add the tag **BRUT\_HEX** in your command. It works anywhere in the command line but it's recommended to put it in the first part of the cmd to make it less confusing
:::

:::info
If running any of these Item Commands fail to perform their intended operations, try adding `DELAYTICK 1` or `DELAYTICK 2` before the Item Command.
:::

## Custom commands

_Sorted by alphabetical order_

### ADD\_ITEM\_ATTRIBUTE

* Info: It adds an attribute to an item as sum or rest operation.
* Command: settings
  * `{attribute}`: The attribute you want to add. [Attributes list](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html)
  * `{value}`: The value for the operation
  * `{equipmentSlot}`: The slot where the attribute will be enabled. [EquipmentSlot list](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html)
  * `{mode}`: select the mode of addition
    * mode:ADD # Add the attribute to the item 
    * mode:OVERRIDE # Remove the current attributes of the same type of the item + Add the attribute to the item 
    * mode:STACK # Stack with the attribute present on the item, if no one exist it adds it
  * `{affectDefaultAttributes}`: true or false # When it's true the mode OVERRIDE will also override the default attributes, and for the MODE stack it allows to stack with the default attributes (green)
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    itemCommands:
    - ADD_ITEM_ATTRIBUTE attribute:GENERIC_ATTACK_DAMAGE value:1.0 equipmentSlot:HAND mode:ADD # Add this attribute to the player
```

### ADD\_ITEM\_ENCHANTMENT

* Info: It adds an enchantment on an item on a specific slot with certain level
* Command: settings
  * `{enchantment}`: The enchantment that you want to be applied, don't use spaces, use the minecraft enchantments not the display ones. [Enchantments list](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html)
  * `{level}`: The level for the enchantment
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    itemCommands:
    - ADD_ITEM_ENCHANTMENT enchantment:unbreaking level:1 
```

### ADD\_ITEM\_LORE

* Info: Adds a line of lore
* Command setting
  * `{text}`: The text for the new lore line
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    itemCommands:
    - ADD_ITEM_LORE text:&7Item of %player%
```

### FORMAT\_ENCHANTMENTS

* Info: It formats all enchantments in your lore
* No command setting 
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    itemCommands:
    - FORMAT_ENCHANTMENTS
```
![](</img/image (382).png>)

### MODIFY\_DURABILITY

* Modifies the durability of the item
* Command settings:
  * `{modification}`: Positive value to increase the durability. Negative value to decrease the durability
  * `{supportUnbreaking}`: (true or false) If it supports the unbreaking enchantment or not
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    itemCommands:
    - MODIFY_DURABILITY modification:-1 supportUnbreaking:true
```

### REMOVE\_ENCHANTMENT

* Info: Remove an enchantment from the item
* Command setting:
  * `{enchantment}`: Enchantment to remove (ALL for every enchantment)
* Example:

```yaml
activators:**
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    itemCommands:
    - REMOVE_ENCHANTMENT enchantment:ALL
```

### REMOVE\_LORE

* Info: Remove a lore line
* Command setting:
  * `{line}`: The line that you want to remove
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    itemCommands:
    - REMOVE_LORE line:5
```

### SET\_ARMOR\_TRIM

* Info: Set the specific armor trim with the specific pattern for the specified slot
* Command settings:
  * `{pattern}`: The pattern of the trim (if 'null' or 'remove' it will remove the current pattern). [TrimPattern list](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimPattern.html)
  * `{patternMaterial}`: The material of the pattern. [TrimMaterial list](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimMaterial.html)
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    itemCommands:
    - SET_ARMOR_TRIM pattern:vex patternMaterial:netherite
    - SET_ARMOR_TRIM pattern:null #to clear the armor trim
```

### SET\_EQUIPPABLE\_MODEL

* Info: Sets the equippable model data of an item in a specific slot
* Command settings:
  * `{model}`: The equipment model name you wish to assign to the item
* Example:

```yml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_EQUIPPABLE_MODEL model:minecraft:diamond
```

### SET\_ITEM\_NAME

* Info: Sets a custom name for your item in a specific slot
* Command setting:
  * `{name}`: the new name of the item
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    itemCommands:
    - SET_ITEM_NAME name:&eThis is the new name of the item
```

### SET\_ITEM\_COLOR

* Info: Sets a specific color for the item (item colorables as leather armor)
*  Command setting:
  * `{color}`: number value of the color [Color Picker Website](https://www.tydac.ch/color/)
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    itemCommands:
    - SET_ITEM_COLOR color:0
```

:::info
It supports FIREWORK\_STAR
:::

### SET\_ITEM\_ATTRIBUTE

* Info: It sets an attribute to an item.
* Command settings:
  * `{attribute}`: The attribute you want to add. [Attribute list](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html)
  * `{value}`: The value for the operation
  * `{equipmentSlot}`: The slot for the attribute. [EquipmentSlot list](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html)
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    itemCommands:
    - SET_ITEM_ATTRIBUTE attribute:GENERIC_ARMOR value:10 equipmentSlot:CHEST
```

### SET\_ITEM\_CUSTOM\_MODEL\_DATA

* Info: Sets a specific custom model data to the specific item
* Command setting:
  * `{customModelData}`: value of the customModelData
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    itemCommands:
    - SET_ITEM_CUSTOM_MODEL_DATA customModelData:10
```

### SET\_ITEM\_MATERIAL 

:::info
Only works at 1.20.5 and above
:::

* Replaces the material of the item with a different material while keeping the nbt of the target item
* Commands setting:
  * `{material}`: The material you want the item to become into
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    itemCommands:
    - SET_ITEM_MATERIAL material:DIAMOND_HOE
```

### SET\_ITEM\_LORE

* Info: Sets a line of lore
* Command settings:
  * `{line}` : If you want to set the lore of the first type 1
  * `{text}`: The new line text
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    itemCommands:
    - SET_ITEM_LORE line:3 text:&6LEGENDARY SWORD
```

