import CustomTag from '@site/src/components/CustomTag';

# ⌨️ Commands & Permissions

On this page you will learn about Commands and Permissions of ExecutableItems plugin.

Premium features are labeled with the tag:  <CustomTag type="premium" />

## Permissions

**TIP for beginners:**

:::info
To give the permissions of all items, I advice you to download a permission plugin like [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/), Once you have a perm plugin you just need to give the permission **`ei.item.*`**, for Luckperm the command is  **`/lp group default permission set ei.item.* true`**
:::

#### Item permission

* Info: Permission for a player to use an ExecutableItems.
  * Permission for using specific ExecutableItem ID: `ei.item.{id}`
  * Permission for using all ExecutableItems: `ei.item.*` 
  * Negative permission to prohibit a specific ExecutableItems ID: `-ei.item.{id}` <CustomTag type="premium" />
* Example: `ei.item.test`

#### Bypass cooldown permission

* Info: Permission for a player to not have cooldown while using an ExecutableItems. 
  * While testing you must test without op/operator/admin.
  * Permission to bypass specific ExecutableItems ID: `ei.nocd.{id}`
  * Permission to bypass all ExecutableItems: `ei.nocd.*`
* Example: `ei.nocd.test`

#### All permissions

* Info: Permission that grants all permissions for ExecutableItems.
  * Be careful ! This one grants literally every permission, even the administrator ones.
  * Permission: `ei.*`
* If you want to give a specific permission keep reading below, it will be detailed every command with each permission.

#### All commands permissions

* Info: Permission that grants all commands permissions for ExecutableItems.
  * Permission: `ei.cmds`
* If you want to give a specific permission keep reading below, it will be detailed every command with each permission.

## Commands

Here you will learn about commands of ExecutableItems, there will be some words that will be repeaten through the explanation, here they are:

* SsomarPluginsItem: Its the ID of an ExecutableItem that its created, the same way it can be "Excalibur", "SuperPickaxe", "turtle", "12345", we stablished this name.
* SsomarPluginsPlayer: Its the name of a player, the same way there is "Vayk\_", "Ssomar", "Special70", "Tidal\_Flame" there is also this name.

The format of the commands will have different symbols:

* \{\} : If an argument is surrounded by \{\} that means its necessary to run the command.
* \[] : If an argument is surrounded by \[] that means its optional to run the command.

Also there will be different colors (but its the same idea as \{\} and \[] ):

* Blue: Obligatory
* Orange: Optional

### General Commands

#### Create a new ExecutableItem

* Command: **/ei create \{id\}**
  * `id`: ID of the ExecutableItem.
  * If you want **copy the item of another plugin**, or a custom vanilla item (Banner, Shield, ...), it's simple ! Take it in your main hand and execute this create command.
* Example: `/ei create SsomarPluginsItem`
* Permission: `ei.cmd.create`

#### Create a new ExecutableItem from a targeted block

* Command: /ei create-from\_block \{id\}
  * `id`: ID of the ExecutableItem.
* Example: `/ei create-from_block SsomarPluginsItem`
* Permission: `ei.cmd.create-from-block`

#### Open the editor / menu

* Command: **/ei editor** or **/ei show**
* Permission: `ei.cmd.editor` or `ei.cmd.show`

#### Reload the plugin

* Command: **/ei reload**
* Permission: `ei.cmd.reload`

**Reload only 1 item**

* Command: **/ei reload \{id\}**
  * `id` : ID of the ExecutableItem.
* Example: `/ei reload SsomarPluginsItem`
* Permission: `ei.cmd.reload`

**Reload a folder**

* Command: **/ei reload folder:Name\_Of\_My\_Folder**
* Permission: `ei.cmd.reload`

#### Regenerates the default items configs

* Command: **/ei default\_items**
* Permission: `ei.cmd.default_items`

#### Delete an ExecutableItem

* Command: **/ei delete \{id\}**
  * `id`: ID of the ExecutableItem.
* Example: `/ei delete SsomarPluginsItem`
* Permission: `ei.cmd.create`

#### Edit an ExecutableItem with a command

* Command: **/ei edit \{id\}**
  * `id` : ID of the ExecutableItem.
* Example: `/ei edit SsomarPluginsItem`
* Permission: `ei.cmd.edit`

#### Clear all cooldowns and delayed commands of ExecutableItems

* Command: **/ei clear \{target\} \[optionaltarget]**
  * `target`
    * You can use player names to target a player
    * You can use UUID to target an entity.
  * `optional_target`
    * ALL: Resets the player's delayed commands, cooldowns and actionbars.
    * DELAYED\_COMMANDS: Resets all delayed commands caused by DELAY and DELAYTICK.
    * COOLDOWNS: Resets all player's cooldowns across all items.
    * ACTIONBARS - Resets all player's actionbars from the ACTIONBAR custom command.
* Example: `/ei clear SsomarPluginsPlayer COOLDOWNS`
* Permission: `ei.cmd.clear`

#### Enable / Disable actionbar of ExecutableItems

* Command: **/ei actionbar \{on or off\}**
* **Example:** `/ei actionbar off`
* Permission: `ei.cmd.actionbar`

#### Inspect the ExecutableItem that is in your main hand

* Command: **/ei inspect**
  * In order to use this command the ExecutableItem must have the feature of store item info enabled. [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info)
  * Output:
    * Usage
    * Owner UUID
    * Owner name
    * ExecutableItems ID
    * Variables 
* Permission: `ei.cmd.inspect`

#### Remove the owner of the EI that is in your hand

* Command: **/ei unowned**
  * In order to un-own an item it must have an owner before, to do that the feature of [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info) must be enabled on that ExecutableItem
  * After running this command, the next player who interact with this item will be the next owner. (He must not be operator/op/admin)
* Permission: `ei.cmd.unowned`

#### Take EI from player inventory

* Command: **/ei take \{player\} \{id\} \{quantity\}**
  * `player`: Name of the player to take the item from
  * `id`: Id of the ExecutableItems
  * `quantity`: Integer value of the amount to remove
* Example: `/ei take SsomarPluginsPlayer SsomarPluginsItem 1`
* Permission: `ei.cmd.take`

#### Refresh the ExecutableItem(s) of your player(s) with their last config version

* Info: This command refresh the ExecutableItemID(s) to their last version on its/their config, that means, if a player has an ExecutableItem on old version for example with attribute of GENERIC\_ARMOR to 10, and then you change the value of the attribute on the config of the ExecutableItem, it will not be update on the player side, to allow this update you can use this command so its refreshed and he will have instead of 10 the new updated value.
  * In order to make this process of refresh the ExecutableItem(s) selected must be on the players inventory, otherwise they won't be refreshed
  * As a tip, another way to make this refresh is using [Auto update item](/executableitems/configurations/activator-configuration/activators-features#auto-update-item)
* Command: **/ei refresh \{player\} \{ExecutableItemID\}** **\{resetUsage\} \{resetDurability\}**
  * `player`: Name of a specific player or "all" to target all players online.
  * `ExecutableItemID`: Name of a specific ExecutableItem or "all" to target all ExecutableItems created.
  * `resetUsage`: Boolean value to allow through the refresh process to reset the usage value
  * `resetDurability`: Boolean value to allow through the refresh process to reset the durability value
* Permission: `ei.cmd.refresh`

#### **Modify the owner of the ExecutableItem that is in your hand**

* Command: **/ei set\_owner** **\{player\}**
  * `player`: Name of the player to set as target of this command
    * It works with offline players.
* Permission: `ei.cmd.set_owner`

#### Enable debug mode

* Info: Mode where each activator prints to the user different messages to know the state of the activator and know why it is not working on how it is being activated.
* Command: **/ei debug**
* Permission: `ei.cmd.debug`

### Give commands

#### Give command

* Info: Command to give a player an ExecutableItem in the first slot available.
* Command: **/ei give \{player\} \{id\} \{Variables:\{var\_id:value\},Usage:value\} \{quantity\} \[giveOfflinePlayer]**
  * `player`: Name of the player who will be the target of this command
  * `id`: Id of the ExecutableItem to give.
    * Optional values: In order to add this custom setup, there must be no space(s)/white space(s) in the format. 
      * `Variables`: You can select a setup of variables for when giving the item.
        * ✅`{Variables:{a:"1",b:"2",c:"3"}}` # Not use of whitespaces
        * ❌`{Variables:{a : "1",b: "2",c :"3"}}` # Use of whitespaces
      * `Usage:` You can select a value for the usage when giving the item
        * ✅`{Usage:5}` # Not use of white space(s)
        * ❌`{Usage : 5}` # Use of white space(s)
      * `Durability`: You can decide how much durability the item loses upon giving the user the item
        * ✅`{Durability:5}` # Not use of white space(s)
        * ❌`{Durability : 5}` # Use of white space(s)
  * `quantity`: Amount of items to give
  * `giveOfflinePlayer`: Boolean value to set if the item will be given to an offline player or not. By default this value is on true.
* Examples: (On all this examples the commands is being run inside an ExecutableItems in order to parse placeholders such as %player%,%var\_name% and %usage%)
  * `/ei give %player% Genesis_Crystal{Variables:{vibraniun:10,proton:30},Usage:10} 3` 
  * `/ei give %player% SurgeBlade{Variables:{charge:%var_charge%+1},Usage:%usage%-1} 1`
  * `/ei give SsomarPluginsPlayer BoneBlade 1`
  * `/ei give edp445 cupcake{Durability:12} 1`
* Permission: `ei.cmd.give`

#### Give All command

* Command: **/ei giveall \{id\} \{quantity\} \[world] \[giveOfflinePlayer]**
  * `id`: Id of the ExecutableItem to give.
  * `quantity`: Amount of items to give
  * `world`: Optional argument of world to run the command in. This would make people that are not on this world won't be given the ExecutableItem.
  * `giveOfflinePlayer`: Boolean value to set if the item will be given to an offline player or not. By default this value is on true.
* Permission: `ei.cmd.giveall`

#### Give an EI in a specific slot of a player <CustomTag type="premium" />

* Command: **/ei giveslot \{player\} \{id\} \{Variables:\{var\_id:value\},Usage:value\} \{quantity\} \{slot\} \[override true or false]**
  * `player`: Name of the player who will be the target of this command
  * `id`: Id of the ExecutableItem to give.
    * Optional values: In order to add this custom setup, there must be no space(s)/white space(s) in the format. 
      * `Variables`: You can select a setup of variables for when giving the item.
        * ✅\{Variables:\{a:"1",b:"2",c:"3"\\}\} # Not use of whitespaces
        * ❌\{Variables:\{a : "1",b: "2",c :"3"\\}\} # Use of whitespaces
      * `Usage`: You can select a value for the usage when giving the item
        * ✅\{Usage:5\} # Not use of white space(s)
        * ❌\{Usage : 5\} # Use of white space(s)
  * `quantity`: Amount of items to give
  * `slot`: Player slot where this item will be given to.
  * `override`: Boolean value to override the slot if there is already an item in that slot. If its the case it will be moved, and if the player has the inventory full it will be dropped to the ground.
* Examples: 
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`test{Variables:{x:"Hey",world:"Island"},Usage:50} 1 0`**  
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`rum{Usage:69420,Variables:{tell_me:"why",aint_nothing:"BUT A HEARTBREAK"}} 1 %slot%`**
* Permission: `ei.cmd.giveslot`

**Give every EI in a specific folder to a player**

* Info: Command to give a folder of the plugin to a player.
* Command: **/ei givefolder \{player\} \{folder\} \{quantity\}**
  * `player`: Name of the player who will be the target of this command
* Permission: `ei.cmd.givefolder`

### Drop commands

#### Drop an EI at a specific location / position 

* Command: **/ei drop \{id\} \{quantity\} \{\[world] \[x] \[y] \[z]\}**
  * `id`: Id of the ExecutableItem to give.
  * `quantity`: Amount of items to drop. By default its 1.
  * location: The whole location is optional, in case you want to add it then you would need to fill the next arguments:
    * `world`: World where the item will be dropped.
    * `x`: X's coordinates where the item will be dropped.
    * `y`: Y's coordinates where the item will be dropped.
    * `z`: Z's coordinates where the item will be dropped.
* Examples:  (On all this examples the commands is being run inside an ExecutableItems in order to parse placeholders such as %player%,%var\_name% and %usage%)
  * `/ei drop totemshatter 1 %world% %x% %y% %z%`
  * `ei drop nuclearWar{Usage:3,Variables:{niconico:"nii"}} 25 %block_world% %block_x% %block_y% %block_z%`
  * `ei drop cybert1_5{Variables:{eh:5},Usage:5} 1 world 535 74 1329`
* Permission: `ei.cmd.drop`

### Modification commands

#### Modify the value of usage of an ExecutableItem

* Command: 
  * In-game: **/ei modification \{set or modification\} usage \{slot\} \{value\}**
  * In console: **/ei console-modification \{set or modification\} usage \{player\} \{slot\} \{value\}**
  * Parameters:
    * `set or modification`
      * set: It sets the new \{value\} and replace the old one
      * modification: Useful for add modifications, it increases or decrease by the \{value\} to the original value
    * `player`: Name of the player who will be the target of this command
    * `slot`: Player slot where this item will be given to.
      * More information about slots here [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `value`: Value used for the modification.
* Permission: `ei.cmd.modification`

#### Modify the value of a variable of an ExecutableItem

* Command: 
  * In-game: **/ei modification \{set or modification\} variable \{slot\} \{variableName\} \{value\}**
  * In console: **/ei console-modification \{set or modification\} variable \{player\} \{slot\} \{variableName\} \{value\}**
  * Parameters:
    * `set or modification`
      * set: It sets the new \{value\} and replace the old one
      * modification: Useful for add modifications, it increases or decrease by the \{value\} to the original value
    * `player`: Name of the player who will be the target of this command
    * `slot`: Player slot where this item will be given to.
      * More information about slots here [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `variableName`: The name of the variable you want to apply the typeOfModication with the selected value to.
    * `value`: Value used for the modification.
* Permission: `ei.cmd.modification`

#### Search an ExecutableItem in the server

* Info: It gives you information of where are the ExecutableItems with id \{id\} on your server.
* Command: **/ei search \{id\} \{searchMode\}**
  * `id`: Id of the ExecutableItem you are searching for
  * `searchMode`: Type of search
    * players: Search the ExecutableItem in all **online** player inventories.
    * containers: Search the ExecutableItem in all **loaded** containers.
    * all: Search using the both methods.
* Example:
  * `/ei search EternalSword all`
* Permission: `ei.cmd.search`

#### Get the file path of an ExecutableItem

* Info: This command displays the absolute file system path to the configuration file of a specific ExecutableItem. Useful for developers or server administrators who need to locate and edit item files directly.
* Command: **/ei path \{id\}**
  * `id`: Id of the ExecutableItem you want to get the path for
* Example:
  * `/ei path ExcaliburSword`
  * Output: `[ExecutableItems] The path of ExcaliburSword is /path/to/plugins/ExecutableItems/Items/ExcaliburSword.yml.`
* Permission: `ei.cmd.path`

#### Check event optimization information

* Info: This command displays detailed information about ExecutableItems' event handler optimization and performance statistics. It shows which events are being listened to and provides information about items using custom recognition (which can impact performance). The output is sent to the server console.
* Command: **/ei checkevents**
* Output includes:
  * List of optimized events and their listener status
  * Count of ExecutableItems using custom recognition
  * Performance impact warnings
  * Recommendations for better performance
* Permission: `ei.cmd.checkevents`

:::info
The output of this command is sent to the **console**, not to the player in-game. Check your server console to see the detailed information.
:::

:::tip
Items with custom recognition can impact performance. The command will show you how many items are using this feature. If you have performance issues, consider reducing the number of items with custom recognition enabled.
:::

### Texture Pack Commands

#### Refresh ExecutableItems Texture Pack

* Command: **/ei refresh-pack**
* Info: Refreshes and reloads the ExecutableItems texture pack for all online players. Useful after making changes to custom textures.
* Permission: `ei.cmd.refresh-pack`

#### Download Default ExecutableItems Texture Pack

* Command: **/ei download-default-pack**
* Info: Downloads the default ExecutableItems texture pack from the official repository and automatically unzips it. If `selfHostPack` is enabled in config.yml, the pack will be automatically registered and hosted on your server. This is useful for:
  * Setting up the texture pack for the first time
  * Restoring the default pack after modifications
  * Updating to the latest default pack version
* Requirements:
  * `selfHostPack: true` must be set in the config.yml for automatic hosting
  * Server must have internet connection to download the pack
* Permission: `ei.cmd.download-default-pack`

:::info
**Hosting Options:**
- **Self-hosting on your server**: Set `selfHostPack: true` in config.yml - the pack will be hosted directly by the plugin
- **External hosting**: If you want to host the pack yourself (on a website, CDN, etc.), set the download URL in `texturesPackUrl` in config.yml
- **No hosting**: If neither option is enabled, the pack will be downloaded and unzipped locally but not distributed to players
:::

### Custom triggers

* Info: ExecutableItems has commands for running custom triggers, if want to know what they are and how to use them check the info here [Custom triggers](/tools-for-all-plugins-score/custom-triggers) 
