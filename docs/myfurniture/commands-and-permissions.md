# ⌨️ Commands & Permissions

## Permissions

**TIP for beginners:**

:::info
To give the permissions of all furniture, I advice you to download a permission plugin like [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/), Once you have a perm plugin you just need to give the permission **`mf.furniture.*`**, for Luckperm the command is  **`/lp group default permission set mf.furniture.* true`**
:::

#### Block permission

* Permission: `mf.furniture.{id}`
* Negative permission: `-mf.furniture.{id}` 
* Example: `mf.furniture.Test`
* Give all furniture permission: `mf.furniture.*` 

#### Give all permissions of MF

* Permission: `mf.*`

#### Give all commands permissions of MF

* Permission: `mf.cmds`

#### Bypass cooldown permission

* Permission: `mf.nocd.{id}` `mf.nocd.*`
* Description: Give this custom permission to disable the cooldown for your vip players
* (Be sure to test without being op)

## Commands

#### Download the default furniture

* Command: **/mf download-defaukt-pack**
* Permission: `mf.cmd.download-default-pack`

#### Load the furniture from the textures pack that you placed in \_\_textures\_\_

* Command: **/mf pack**
* Permission: `mf.cmd.pack`

#### Open the editor / menu

* Command: **/mf editor** or **/mf show**
* Permission: `mf.cmd.editor` or `mf.cmd.show`

#### Open the editor to edit a specific MF

* Command: **/mf edit \{FurnitureID\}**
* Permission: `mf.cmd.edit`

#### Open the a gui with the MF(s) placed

* command: /mf show-placed filter/sort:

#### Reload the plugin

* Command: **/mf reload**
* Permission: `mf.cmd.reload`

#### Reload the plugin (only 1 furniture)

* Command: **/mf reload \{Furnitureid\}**
* Permission: `mf.cmd.reload`

**Reload a folder**

* Command: **/mf reload folder:Name\_Of\_My\_Folder**
* Permission: `mf.cmd.reload`

#### Delete a Furniture

* Command: **/mf delete \{id\}**
* Permission: `mf.cmd.delete`

#### Clear all cooldowns and delayed commands of MF

* Command: **/mf clear** **\[playerName]**
* Permission: `mf.cmd.clear`

:::info
It supports entities too just use the entity UUID instead of player name
:::

#### Enable / Disable actionbar of MF

* Command: **/mf actionbar** **\{on or off\}**
* Permission: `mf.cmd.actionbar`

#### Place an MF at a specific position

* Command: **/mf place \{id\} \{x\} \{y\} \{z\} \{world\}**
* Permission: `mf.cmd.place`

#### Remove an MF at a specific position

* Command: **/mf remove \{x\} \{y\} \{z\} \{world\}** \[replaceWithAir default true]
* Permission: `mf.cmd.remove`

#### Fill a region selection with a MF

* Requirement: This command require to have the plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Command: **/mf we-place \{id\}**
* Permission: `mf.cmd.we-place`

#### Fill a WorldGuard region with a MF

* Requirement: This command require to have the plugin WorldGuard
* Command: **/mf wg-fill-region \{world\} \{region\_name\} stone:70,MyMF:30**
* Permission: `mf.cmd.wg-fill-region`

#### Remove all MF present in a blocks selection

* equirement: This command require to have the plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Command: **/mf we-remove \{replaceTheEBByAir true or false\}**
* Permission: `mf.cmd.we-remove`

#### MF variable modification

* Command: /mf modification \{set/modification\} variable \{world\} \{x\} \{y\} \{z\} \{variableName\} \{value\} 

#### MF usage modification

* /mf modification \{set/modification\} usage \{world\} \{x\} \{y\} \{z\} \{value\}

#### Test a Blockbench animation

* Command: **/mf anim \{bbmodel\_file\} \[animation\_index\]**
* Permission: `mf.cmd.anim`
* Info: Spawns a Blockbench model at the player's location and plays an animation. The `.bbmodel` file must be in `plugins/MyFurniture/animations/`.
* Example: `/mf anim ceiling_fan 0`

### Give & Take commands

#### Give command

* (Works for offline players)
* Command: 
  * **/mf give \{playername\} \{id\}**\{Variables:\{var\_id:val\},Usage:val\}** **\{quantity\}** \[giveOfflinePlayer default true]
* Permission: `mf.cmd.give`
* Examples:
  * Examples: 
    * **/mf give %player% Genesis\_Crystal\{Variables:\{vibraniun:10,proton:30\},Usage:10\} 3** 
    * **/mf give %player% SurgeBlade\{Variables:\{charge:%var\_charge%+1\},Usage:%usage%-1\} 1**
    * **/mf give %player% BoneBlade 1**

#### Take command

* Command: 
  * **/mf take \{playername\} \{id\} \{quantity\}**
* Permission: `mf.cmd.take`

#### GiveAll command

* Command: 
  * **/mf giveall \{id\} \{quantity\}** **\[world]**
* Permission: `mf.cmd.giveall`

#### Give a furniture in a specific slot of a player 

* Command: 
  * **/mf giveslot \{playername\} \{id\}**\{Variables:\{var\_id:val\},Usage:val\}** **\{quantity\} \{slot\}**  **\[override true or false]**
  * Examples: 
    * **/mf giveslot Ssomar test\{Variables:\{x:"Hey",world:"Island"\},Usage:50\} 1 0**  
    * **/mf giveslot Special70 rum\{Usage:69420,Variables:\{tell\_me:"why",aint\_nothing:"BUT A HEARTBREAK"\\}\} 1 %slot%**
    * **/mf giveslot Ssomar xyz\{Variables:\{test:"Hello boss!"\},Usage:5\} 1 5**
  * _Default usage : The usage that is in the config of your Furniture_
  * _Override allow the Furniture to take that slot, and if there was an item there, it is going to move to another slot or get dropped to the ground._
* Permission: `mf.cmd.giveslot`

**Give every furniture in a specific folder to a player**

* Command:
  * **/mf givefolder \{playername\} \{folder\} \{quantity\}**

### Drop commands

#### Drop a furniture at a specific location / position

* Command: 
  * **/mf drop \{id\}** **\[quantity] \[world] \[x] \[y] \[z]**
  * _Default quantity : 1_
  * _Default location : The location of the player who has executed this command_
* Permission: `mf.cmd.drop`
