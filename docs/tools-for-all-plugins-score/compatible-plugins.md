---
description: >-
  Here is a non-exhaustive list of plugin that you can combine with
  ExecutableItems
---

# ✔️ Compatible Plugins

:::info
Take note that this list is strict related compatible plugins, almost every plugin is compatible with Ssomar plugins, if you want to run a command from another plugin, just replace the name of the target with the placeholders. \

For example:
```yaml
- essentials:fly %player% # For essentials fly
- vanish %player% # For vanish
- economy give %player% 100 # To give money
#...
```
Etcetera, **every command that supports the name of a player is "compatible" with our plugins.**
:::

This section is for compatible plugins that works with Ssomar plugins, there are some features that we have that its compatible with the other plugins.

* Before starting you must know that compatible ≠ usable, allmost all plugins are usable for Ssomar Plugins, this is because all commands are run by the console.

### MythicMobs

#### You can make your MythicMobs mobs drop Ssomar Plugins Items in these ways:

*   ExecutableItems:

    1. Hold the ExecutableItem and do `/mm i import` , this will make the item to get imported into the items.yml file of MythicMobs, from there, you can add it to the LootTable of MythicMobs.
    2. Executing a skill \~onDeath from the mob, casting a command skill adding the next line:

    ```yaml
    Skills:
    - command{c="ei drop <item> 1 <caster.l.w> <caster.l.x> <caster.l.y> <caster.l.z>"} @self ~onDeath
    ```
* ExecutableBlocks:
  * The same idea but instead of using ExecutableItem use the ExecutableBlock, and on the command from skill use "eb" instead of "ei".

#### You can specify the activators from SsomarPlugins to only work with specific MythicMobs using the feature [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities).

* Example : Creating an ExecutableItem that makes more damage to a list of MythicMobs
* Example: Creating an ExecutableBlock  that damages a specific MythicMob when it walks above the block
* Example: Creating an ExecutableEvent that only works for a list of MythicMobs.

#### You can summon MM Mobs using this command inside your activator:

* Depending on the activator you are using you may need to change the placeholders.
  * Example: Instead of %world% it may be needed to use %player\_world%,%target\_world% or %block\_world%

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    playerCommands:
    - mm m spawn {mob_id} 1 %world%,%x%,%y%,%z%
```

* ⭐You can use this idea with ExecutableBlocks and LOOP activator to create custom MythicMobs spawner.

#### Run MythicMobs skill from Ssomar Plugins features

* You can use on commands section  `SUDOOP mm test cast <skill>` to run a skill from MythicMobs.

#### Custom SCore commands

* [CHANGETOMYTHICMOB](/tools-for-all-plugins-score/custom-commands/entity-commands#changetomythicmob)
  * ⭐Its possible to make a fishing system using MythicMobs like the one that is on the Hypixel Minecraft Server. For example having tier list of different fishing rods (All handled by ExecutableItems), that each tier will have from low probability to higher probability to catch more epic mobs from your lakes, adding restrictions to only fish MM mobs from the lakes in "x" cordinates (or a WorldGuard region), etc.

### **LevelledMobs**

* ExecutableItems
  * You can make your LevelledMobs drop ExecutableItems using this resource:
    * [https://www.spigotmc.org/resources/lm-items.102081/](https://www.spigotmc.org/resources/lm-items.102081/)

### AuraSkills (prev AureliumSkills)

* Ssomar Plugins have the activator feature of [requiredMana](/executableitems/configurations/activator-configuration/activators-features#requiredmana) in order to have as requirement for the activator to work.
* Aurelium Skills commands
  * Also you can use AureliumSkills commands on your plugin, such as giving mana to the player, giving mana to the players around (Like a supporter), etc.
* ExecutableItems
  * Aurelium Skills NBT
    * You can create an ExecutableItem that while holding it increases your maximum mana, this can be done by creating an item, running the `/sk modifier` command and then while holding the item running `/ei create <id>` now the ExecutableItem has the NBTTag of the command and so it has the modifications that you made.

### ExecutableBlocks & ExecutableItems

* This two plugins (ExecutableBlocks and ExecutableItems) can get linked to each other. This link is made by the EB on the [TYPE\_OF\_CREATION ](/executableblocks/configurations/block-configuration/block-features#creationtype)feature. For example:
  * Placing the ExecutableItem and it becomes the ExecutableBlock linked to it (by default it would lose the data of ExecutableItem and it would be placed as a vanilla block)
  * Breaking an ExecutableBlock and getting the ExecutableItem linked to it.
  * Tracking the same usage that the ExecutableBlock had placed when its broken and turned into the ExecutableItem linked and viceversa.
  * Tracking the same variable values that the ExecutableBlock had placed when its broken and turned into the ExecutableItem linked and viceversa.

### ItemsAdder

* ExecutableItems
  * You can use the textures created with ItemsAdder by using [customModelData ](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14)feature or by using [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel).
  *   You can link the ItemsAdder item into EI by following their wiki on how to link, its by adding the next line of code to the ItemsAdder item file.

      ```yaml
      executableitem:
        id: ZEUSCROWN
      ```
* ExecutableBlocks
  * You can create an ExecutableBlock with the texture of ItemsAdder block, this is done by selecting the [TYPE\_OF\_CREATION ](/executableblocks/configurations/block-configuration/block-features#creationtype)feature of ExecutableBlocks.
* Its possible to select as [detailedBlocks ](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)for the activators related to a block of all plugins to select specific ItemsAdder blocks
  *   Example:

      ```yaml
      activators:  
        activator0: # Activator ID, you can create as many activator on the activators list    
          option: PLAYER_BLOCK_BREAK
          detailedBlocks:
          - ITEMSADDER:turquoise_block
      ```

### Nexo

* ExecutableItems
  * You can use the textures from Nexo inside your ExecutableItem just by using the [Custom model data](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14) value or the [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel).

### PlaceholderAPI

* One of the main pillars when it comes to creating items, you can use any PlaceholderAPI placeholder in any part of our plugins:
  * Lore
  * Commands section
  * Messages (All type of messages, cooldown message, condition not met message, required things message, etc)
  * Variables
  * etc.

### ShopGui+

* This plugin supports selling items with specific NBT Tags on the shop, therefore, it supports ExecutableItems and ExecutableBlocks for being sell.
* The block command [SELL\_CONTENT ](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content)is supported for this plugin.

### ShopKeepers

* This plugin supports selling items with specific NBT Tags on the shop, therefore, it supports ExecutableItems and ExecutableBlocks for being sell.

### Tradesplus

* This plugin supports selling items with specific NBT Tags on the shop, therefore, it supports ExecutableItems and ExecutableBlocks for being sell.

### WorldGuard

* For all plugins you have the condition to make the activator work only if the player is inside or outside a region, its called [ifInRegion](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinregion-not) and its compatible with this plugin.
* All SCore commands are conditioned by WorldGuard protection
  * This means, a BREAK (SCore command) wont run if the player doesnt have permission to break a block at the selected position.
  * Keep in mind that this feature is on SCore commands, not on commands run by our plugins, this means using vanilla command inside one of our plugins "execute at %player% run setblock %block\_x% %block\_y% %block\_z% air replace" will bypass any restriction.
* ExecutableBlocks
  * You can fill a region with specific ExecutableBlock(s) with detailed weights by using [/eb wg-fill-region](/executableblocks/commands-and-permissions#fill-a-worldguard-region-with-an-eb).
    * With this feature for example you could make a globlal loop that resets a specific mine like typical /warp mines inside Minecraft servers.

### HeadDB

* ExecutableItems
  * You can use this plugin in order to select a specific player head for the item of the ExecutableItem by using [head settings](/executableitems/configurations/item-configuration/item-features#head-settings).
* ExecutableBlocks
  * You can use this plugin in order to select a specific player head for the block of the ExecutableBlock by link an ExecutableItem with [head settings](/executableitems/configurations/item-configuration/item-features#head-settings) and using the [TYPE\_OF\_CREATION](/executableblocks/configurations/block-configuration/block-features#creationtype) as from the ExecutableItem specified.

### IridiumSkyblock

* For all plugins you have the condition to make the activator work only if the player is inside their island, its called [ifPlayerMustBeOnHisIsland ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland)and its compatible with this plugin.

### SuperiorSkyblock

* For all plugins you have the condition to make the activator work only if the player is inside their island, its called [ifPlayerMustBeOnHisIsland ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland)and its compatible with this plugin.

### GriefPrevention

* For all plugins you have the condition to make the activator work only if the player is inside their claim, its called [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim)and also there is [ifPlayerMustBeOnHisClaimOrWilderness ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness)and both are compatible with this plugin.

### Lands

* For all plugins you have the condition to make the activator work only if the player is inside their claim, its called [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim)and also there is [ifPlayerMustBeOnHisClaimOrWilderness ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness)and both are compatible with this plugin.
* ExecutableItems
  * There are some activators specific for this plugin, these are:
    * PLAYER\_ENTER\_IN\_THEIR\_LAND
    * PLAYER\_LEAVE\_THEIR\_LAND

### GriefDefender

* For all plugins, you have the condition to make the activator work only if the player is inside their claim. This condition is called [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim)and is compatible with this plugin.

### Residence

* For all plugins, you have the condition to make the activator work only if the player is inside their claim. This condition is called [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim)and is compatible with this plugin.

### PlotSquared

* For all plugins, you have the condition to make the activator work only if the player is inside their plot. This condition is called [ifPlayerMustBeOnHisPlot ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisplot)and is compatible with this plugin.

### Towny

* For all plugins, you have the condition to make the activator work only if the player is inside their town. This condition is called [ifPlayerMustBeOnHisTown ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhistown)and is compatible with this plugin.

### Advanced Enchantments

* ExecutableItems
  * Due the way Advanced Enchantments plugin works, their enchants are not present in the enchantments list. So it can't be added with the enchants feature:![](https://media.ssomar.com/m/docs-img-image-256.png)
  * But it's possible to add their enchants on your ExecutableItems by using NBTAPI plugin and following one of this ways:
    * The first way is by creating a vanilla item , then adding the AdvancedEnchantment on it and then while holding it do /ei create \<id>, the ExecutableItem output will automatically have the Advanced enchantments imported.
    *   The second way is by adding the NBT Tag manually on the ExecutableItems config file. Here is an example:

        ```yaml
        nbt:
          '0':
            key: ae_enchantment;haste # This add the haste AdvancedEnchantment NBT tag
            type: INT
            value: 1
        ```
  * After all this steps you must add manually the enchantment in the lore to let the players know this item has that enchantment.

### RoseLoots

* All block commands related (e.g. [MINEINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#mineincube), [FARMINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#farmincube), [BREAK](/tools-for-all-plugins-score/custom-commands/block-commands#break), etc) supports the custom block loots from this plugin.

### MMOInventory

* ExecutableItems
  * The activators related to enter and leave inventory (e.g. EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY and EI\_LEAVE\_THE\_PLAYER\_INVENTORY) are triggered by their methods.

### EnchantsSquared

* ExecutableItems
  * This plugin supports the enchantments of EnchantsSquared.

### ExcellentEnchants

* ExecutableItems
  * This plugin supports the enchantments of ExcellentEnchants

### MMOCore

* The requiredMana feature for activators can use mana from MMOCore, allowing you to set mana requirements for activators to function.

### TAB

* The custom command SETGLOW is compatible with TAB. You have to use the placeholder %score\_cmd-glow%

### BlocksToCommand

* Plugin that allows you to import structures that can be placed with Ssomar Plugins.

### Terra

* Terra's custom biomes are supported by biome conditions using the [ifInBiome ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinbiome-not)condition. This allows you to create specific activators, effects, or restrictions based on the biome a player is in.

### EcoSkills

* You can use placeholders conditions to check if a player has specific magic values before allowing an activator to trigger.
* You can use commands to get or remove magic values.
* ExecutableItems
  * [RequiredMagic ](/executableitems/configurations/activator-configuration/activators-features#requiredmagic-ecoskills)feature instead of using placeholders conditions and commands to remove magic.

### FACTIONS UUID

* SCore commands place and remove blocks safely respecting the FactionsUUID protections of the player.

### CMI

* [SELL\_CONTENT ](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content)command supports CMI prices, allowing seamless integration with the CMI economy system for selling items at the correct in-game value.

### JOBS REBORN

* JOBS\_MONEY\_BOOST command work for this plugin.

### VAULT

* ExecutableItems
  * [requiredMoney ](/executableitems/configurations/activator-configuration/activators-features#requiredmoney)feature works with Vault, allowing you to set a money requirement for activators to trigger.

### Citizen NPC

* ExecutableItems
  * The next activators works for Citizen NPC(s)
    * PLAYER\_CLICK\_ON\_ENTITY
    * PLAYER\_FISH\_ENTITY
    * PLAYER\_KILL\_ENTIT

### NBT API

* #### itemCheckWithNBTAPI

### Wild Stacker

* SILK\_SPAWNER commands work with the spawners of WildStacker.

