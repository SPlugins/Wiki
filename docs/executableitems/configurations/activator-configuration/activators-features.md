---
description: >-
  These options are utilized to accomplish specific things to create simple to
  complex items
---

import CustomTag from '@site/src/components/CustomTag';
import GeneralActivatorsFeatures from '@site/docs/_partials/general-activators-features.md';
import BlockFeatures from '@site/docs/_partials/block-features.md';
import EntityFeatures from '@site/docs/_partials/entity-features.md';
import TargetPlayerFeatures from '@site/docs/_partials/target-player-features.md';
import PlayerFeatures from '@site/docs/_partials/player-features.md';
import TargetItemFeatures from '@site/docs/_partials/target-item-features.md';
import CommandFeatures from '@site/docs/_partials/command-features.md';
import DropFeatures from '@site/docs/_partials/drop-features.md';
import EffectFeatures from '@site/docs/_partials/effect-features.md';
import DamageCauseFeatures from '@site/docs/_partials/damagecause-features.md';
import DelayFeatures from '@site/docs/_partials/delay-features.md';
import ClickFeatures from '@site/docs/_partials/click-features.md';
import InputFeatures from '@site/docs/_partials/input-features.md';
import TypeTargetFeatures from '@site/docs/_partials/typetarget-features.md';


# Activators features

All this features are inside the activator, as reminder the activators allow you to execute custom actions on your ExecutableItem, it can have conditions, run commands, have cooldown, etc.

Premium features are labeled with the tag:  <CustomTag type="premium" />

## General features of an activator

<GeneralActivatorsFeatures />

## Features for EI activators

### Detailed slots

* Info: List of integer values that represents slots of the inventory where the activator will be able to work. This means, if the event occurs in one slot that is not from here then the activator won't be triggered. 

![](</img/slots_info.png>)
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    detailedSlots:
  - -1 # Slot for mainhand, this is not a static slot but having it on mainhand
  - 40 # This is a static slot, it represents the offhand slot.
```

### Auto update item

* Info: This feature of the activator makes that the item is updated in one of the features of the list. Be careful ! This may not be necessary depending on what you want. There are things that are updated automatically, for example, commands on the activator, conditions, cooldown, etc are updated automatically without this feature. 
* This feature targets most the visual aspects of the item, so if you created once a ExecutableItem with id:ex\_sword with a display name of "\&dExcalibur" and you distributed this item to all players and now you would like all the ExecutableItems "ex\_sword" to have the new display name of "\&eEpic Sword" then you would need to enable this feature on one of the activators of the item. Enabling the feature (autoUpdateItem) + the feature of update name (updateName).
* To make sure its correctly explained, this feature will override the current value depending on the options you enabled with the current option of the config file, and its only used for visual features. Its not necessary for common changes that don't involve the options of this feature.
  * `autoUpdateItem`: Boolean value that represents if this feature is enabled or not for the activator.
  * `updateName`: Boolean value to update the display name of the ExecutableItem. If its true, it will override the current display name of the item with the current/updated item name set on the config file of the ExecutableItem.
  * `updateLore`: Boolean value to update the lore of the ExecutableItem. If its true, it will override the current lore of the item with the current/updated lore set on the config file of the ExecutableItem.
  * `updateDurability`: Boolean value to update the current durability of the ExecutableItem. If its true, it will override the current durability of the item with the current/updated durability set on the config file of the ExecutableItem.
  * `updateAttributes`: Boolean value to update all the attributes of the ExecutableItem. If its true, it will override the current attributes of the item with the current/updated attributes set on the config file of the ExecutableItem.
  * `updateEnchants`: Boolean value to update the enchantments of the ExecutableItem. If its true, it will override the current enchantments of the item with the current/updated enchantments set on the config file of the ExecutableItem.
  * `updateCustomModelData`: Boolean value to update the custom model data value of the ExecutableItem. If its true, it will override the current custom model data of the item with the current/updated customModelData value set on the config file of the ExecutableItem.
  * `updateArmorSettings`: Boolean value to update the armor settings of the ExecutableItem. If its true, it will override the current armor settings of the item with the current/updated armor settings set on the config file of the ExecutableItem. e.g. (Armor color)
  * `updateMaterial`: Boolean value to update the material of the ExecutableItem. If its true, it will override the current material of the item with the current/updated material set on the config file of the ExecutableItem.
  * `updateHiders`: Boolean value to update the hider configuration of the ExecutableItem. If its true, it will override the current hiders configuration with the current/updated hiders setup on the config file of the ExecutableItem.
  * `updateEquippable`: Boolean value to update the hider configuration of the ExecutableItem. If its true, it will override the current equippable component of the item with the current/updated equippable setup on the config file of the ExecutableItem.
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    autoUpdateItem: false
    updateName: false
    updateLore: false
    updateDurability: false
    updateAttributes: false
    updateEnchants: false
    updateCustomModelData: false
    updateArmorSettings: false
    updateMaterial: false
    updateHiders: false
    updateEquippable: false
```

<PlayerFeatures />

### worldConditions

* Info: You can use this conditions in all type of activators
* [World conditions](/tools-for-all-plugins-score/custom-conditions/world-conditions.md)

### placeholdersConditions

* Info: You can use this conditions in all type of activators
* [PlaceholdersConditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions.md)

### itemConditions

* Info: You can use this conditions in all type of activators
* [Item conditions](/tools-for-all-plugins-score/custom-conditions/item-conditions.md)


### otherEICooldowns

* Info: This feature allows to apply player cooldown to specific ExecutableItems and optional specific activators. 
  * `executableItem`: ID of the ExecutableItem you want to apply cooldown to.
  * `activators`: List of strings which are the ID of the activators you want to affect for the ExecutableItem specified with cooldown. If none are selected then the cooldown will be applied to all activators of the ExecutableItem specified.
  * `cooldown`: Integer value that will be the amount of time of cooldown will be applied.
  * `isCooldownInTicks`: Boolean value that represents if the cooldown value will be on seconds or ticks. (20 ticks = 1 second)
* Tips:
  * You can specify the ExecutableItem who run this feature itself. For example if you want from one activator to apply cooldown to another activator in the same item.
  * Another idea can be applying cooldown to all damage related items if you use one of them.
  * Another example would be using this feature to allow the player to choose one of different ExecutableItems, when they choose one and triggers it, then they can't use neither the chosen one because its on cooldown nor the another ones because they are on cooldown too.
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    otherEICooldowns:
      cd1: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns list
        executableItem: test 
        activators: 
        - activator0 
        cooldown: 20 
        isCooldownInTicks: false
      cd0: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns
        executableItem: swordSharpness
        activators: [] 
        cooldown: 10
        isCooldownInTicks: false
```


## Features exclusive depending on type of activator

To make the features more understandable on where activators do they work, we will create 4 types of categories to group activators, so if one of the features say one of this categories then you'll know the feature works for all the activators on that category.  

* <CustomTag type="player_block" />: Describes activators involving the player who triggered the ExecutableItem and a block involved in the activator. Abbreviaton \[P\_B]
  * PLAYER\_ALL\_CLICK (with feature typeTarget: ONLY\_BLOCK)
  * PLAYER\_BLOCK\_BREAK <CustomTag type="premium" compact />
  * PLAYER\_BLOCK\_PLACE <CustomTag type="premium" compact />
  * PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FISH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_HARVEST\_BLOCK
  * PLAYER\_LEFT\_CLICK (with feature typeTarget: ONLY\_BLOCK)
  * PLAYER\_RIGHT\_CLICK (with feature typeTarget: ONLY\_BLOCK)
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * Etc, more information on [Activators info](list-of-the-activators)
* <CustomTag type="player_entity" />: Describes activators involving the player who triggered the ExecutableItem and an entity involved in the activator. Abbreviaton \[P\_E]
  * PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_BUCKET\_ENTITY
  * PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_CUSTOM\_LAUNCH (The entity is the projectile that is being launched) <CustomTag type="premium" compact />
  * PLAYER\_DISMOUNT <CustomTag type="premium" compact />
  * PLAYER\_FISH\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_KILL\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * Etc, more information on [Activators info](list-of-the-activators)
* <CustomTag type="player_target" />: Describes activators involving the player who triggered the ExecutableItem and another player, referred to as the “target,” who is treated as the target or enemy. Abbreviation \[P\_T]
  * PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_CLICK\_ON\_PLAYER
  * PLAYER\_FISH\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_HIT\_PLAYER
  * PLAYER\_KILL\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
  * Etc, more information on [Activators info](list-of-the-activators)
* <CustomTag type="specific_activators" /> If there is a feature that contains different activators across the categories then its better for understanding creating a new temporal list, which will be mentioned on the feature. Abbreviation \[S\_A]  

## For \[P\_B] <CustomTag type="player_block" />

<BlockFeatures />

## For \[P\_E] <CustomTag type="player_entity" />

<EntityFeatures />

## For \[P\_T] <CustomTag type="player_target" />

<TargetPlayerFeatures />

## For \[S\_A] <CustomTag type="specific_activators" />
 
<TargetItemFeatures />
* For:
  * PLAYER_DROP_ITEM
  * PLAYER_CONSUME
  * EI_CLICK_ON_ANOTHER_INVENTORY_ITEM
  * EI_CLICKED_BY_ANOTHER_INVENTORY_ITEM


### mustBeAProjectileLaunchWithTheSameEI

* Type of activator category: Specific Activator List
  * PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
* Info: Feature for the activator that are related to projectile, it affects if the activator should run with projectiles not launched by the same EI.
  * Example, there is an activator PROJECTILE\_HIT\_ENTITY, detailedSlots: \[all slots] and on playerCommands: \["say hi"]
    * If the feature is enabled, then it will only work if this ExecutableItem has another activator that has LAUNCH command, so, the projectile will be launched from the EI and then the condition will met
    * If the feature is disabled, all projectiles, such as: vanilla bow, vanilla snowball, projectiles from others ExecutableItems, and projectile for the ExecutableItem itself will run the activator.
  * Example:

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: PROJECTILE_HIT_ENTITY
    mustBeAProjectileLaunchWithTheSameEI: true
```

<DamageCauseFeatures />
* For:
  * PLAYER_BLOCK_HIT_OF_ENTITY
  * PLAYER_BLOCK_HIT_OF_PLAYER
  * PLAYER_DEATH
  * PLAYER_HIT_ENTITY
  * PLAYER_HIT_PLAYER
  * PLAYER_RECEIVE_HIT_BY_ENTITY
  * PLAYER_RECEIVE_HIT_BY_PLAYER
  * PLAYER_RECEIVE_HIT_GLOBAL

<EffectFeatures />
* For:
  * PLAYER_RECEIVE_EFFECT

<CommandFeatures />
* For:
  * PLAYER_WRITE_COMMAND

<DropFeatures />
* For:
  * PLAYER_BLOCK_BREAK
  * PLAYER_FISH_FISH
  * PLAYER_KILL_ENTITY
  * PLAYER_KILL_PLAYER

<TypeTargetFeatures />
* For
  * PLAYER\_ALL\_CLICK
  * PLAYER\_RIGHT\_CLICK
  * PLAYER\_LEFT\_CLICK

<ClickFeatures />
* For:
  * PLAYER_CLICK_ON_ENTITY
  * PLAYER_CLICK_ON_PLAYER
  * INVENTORY_CLICK

<DelayFeatures />
* For:
  * LOOP

<InputFeatures />
* For:
  * PLAYER_INPUT