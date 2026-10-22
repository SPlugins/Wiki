# ⌨️ Commands & Permissions

## Permissions

**TIP for beginners:**

:::info
To give the permissions of all items, I advice you to download a permission plugin like [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/), Once you have a perm plugin you just need to give the permission **`eb.block.*`**, for Luckperm the command is  **`/lp group default permission set eb.block.* true`**
:::

#### Block permission

* Permission: `eb.block.{id}`
* Negative permission: `-eb.block.{id}` 
* Example: `eb.block.Test`
* Give all items permission: `eb.block.*` 

#### Give all permissions of EB

* Permission: `eb.*`

#### Give all commands permissions of EB

* Permission: `eb.cmds`

#### Bypass cooldown permission

* Permission: `eb.nocd.{id}` `eb.nocd.*`
* Description: Give this custom permission to disable the cooldown for your vip players
* (Be sure to test without being op)

**Limit of EB**

* Permission: `eb.limit.{amount}`
* Description: Sets the max value a player can place EB(s).

#### Limit a specific EB

* Permission: `eb.block.ID.limit.{amount}`
* Description: Limit the amount of specific EB ID a player can place

## Commands

#### Create a new ExecutableBlock

* Command: **/eb create \{id\}**
* Tip: 
  * If you want **copy the item/block of another plugin**, or a custom vanilla block (Banner, Custom block, ...), You need to install my other plugin, ExecutableItems, type **/ei create \{id\}** and then import your ExecutableItem in ExecutableBlocks.
* Permission: `eb.cmd.create`

####

#### Open the a gui with the EB(s) placed

* command: /eb show-placed filter/sort:

#### Open the editor / menu

* Command: **/eb editor** or **/eb show**
* Permission: `eb.cmd.editor` or `eb.cmd.show`

#### Open the editor to edit a specific EB

* Command: **/eb edit \{BlockID\}**
* Permission: `eb.cmd.edit`

#### Reload the plugin

* Command: **/eb reload**
* Permission: `eb.cmd.reload`

#### Reload the plugin (only 1 block)

* Command: **/eb reload \{block\_id\}**
* Permission: `eb.cmd.reload`

**Reload a folder**

* Command: **/eb reload folder\:Name\_Of\_My\_Folder**
* Permission: `eb.cmd.reload`

#### Delete an ExecutableBlock

* Command: **/eb delete \{id\}**
* Permission: `eb.cmd.create`

#### Reload the default blocks of ExecutableBlock

* Command: **/eb default\_blocks**
* Permission: `eb.cmd.default_blocks`

#### Clear all cooldowns and delayed commands of EB

* Command: **/eb clear** **\[playerName]**
* Permission: `eb.cmd.clear`

:::info
It supports entities too just use the entity UUID instead of player name
:::

#### Enable / Disable actionbar of EB

* Command: **/eb actionbar** **\{on or off\}**
* Permission: `eb.cmd.actionbar`

#### Place an EB at a specific position

* Command: **/eb place \{id\} \{x\} \{y\} \{z\} \{world\}** \[direction]
* Permission: `eb.cmd.place`
* `[direction]`: (Optional) `NORTH`, `SOUTH`, `EAST`, `WEST`, `UP` or `DOWN` (any case, with Tab completion). The placed block is turned toward this direction.
  * It wins over the [directional features](/executableblocks/configurations/block-configuration/block-features#directional-features) of the block (`blockFaceOnPlace` with `forceBlockFaceOnPlace: true`).
  * It works on the blocks that can be turned: directional blocks (furnaces, observers, bee nests...), rotatable blocks (signs, heads, banners: not `UP` / `DOWN`) and blocks with an axis (logs, pillars: `UP` / `DOWN` = vertical). A direction the block does not accept is ignored.
  * Only for the ExecutableBlocks created with `BASIC_CREATION` or `IMPORT_FROM_EXECUTABLE_ITEMS`, on 1.13+ servers.
  * Without the argument, nothing changes: the block is placed like before.
* Example: `/eb place my_furnace 100 64 -20 world EAST`

#### Remove an EB at a specific position

* Command: **/eb remove \{x\} \{y\} \{z\} \{world\}** \[replaceWithAir default true]
* Permission: `eb.cmd.remove`

#### Fill a region selection with an EB

* Requirement: This command require to have the plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Command: **/eb we-place \{id\}**
* Permission: `eb.cmd.we-place`

#### Fill a WorldGuard region with an EB

* Requirement: This command require to have the plugin WorldGuard
* Command: **/eb wg-fill-region \{world\} \{region\_name\} stone:70,MyEb:30**
* Permission: `eb.cmd.wg-fill-region`

#### Remove all EB present in a blocks selection

* equirement: This command require to have the plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Command: **/eb we-remove \{replaceTheEBByAir true or false\}**
* Permission: `eb.cmd.we-remove`

#### EB variable modification

* Command: /eb modification \{set/modification\} variable \{world\} \{x\} \{y\} \{z\} \{variableName\} \{value\} 

#### EB usage modification

* /eb modification \{set/modification\} usage \{world\} \{x\} \{y\} \{z\} \{value\}

### Give & Take commands

#### Give command

* (Works for offline players)
* Command: 
  * **/eb give \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\}** \[giveOfflinePlayer default true]
* Permission: `eb.cmd.give`
* Examples:
  * Examples: 
    * **/eb give %player% Genesis\_Crystal\{Variables:\{vibraniun:10,proton:30\},Usage:10\} 3** 
    * **/eb give %player% SurgeBlade\{Variables:\{charge:%var\_charge%+1\},Usage:%usage%-1\} 1**
    * **/eb give %player% BoneBlade 1**

#### Take command

* Command: 
  * **/eb take \{playername\} \{id\} \{quantity\}**
* Permission: `eb.cmd.take`

#### GiveAll command

* Command: 
  * **/eb giveall \{id\} \{quantity\}** **\[world]**
* Permission: `eb.cmd.giveall`

#### Give an EB in a specific slot of a player 

* Command: 
  * **/eb giveslot \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\} \{slot\}**  **\[override true or false]**
  * Examples: 
    * **/eb giveslot Ssomar test\{Variables:\{x:"Hey",world:"Island"\},Usage:50\} 1 0**  
    * **/eb giveslot Special70 rum\{Usage:69420,Variables:\{tell\_me:"why",aint\_nothing:"BUT A HEARTBREAK"\\}\} 1 %slot%**
    * **/eb giveslot Ssomar xyz\{Variables:\{test:"Hello boss!"\},Usage:5\} 1 5**
  * _Default usage : The usage that is in the config of your EB_
  * _Override allow the EB to take that slot, and if there was an item there, it is going to move to another slot or get dropped to the ground._
* Permission: `eb.cmd.giveslot`

**Give every EB in a specific folder to a player**

* Command:
  * **/eb givefolder \{playername\} \{folder\} \{quantity\}**

### Drop commands

#### Drop an EB at aspecific location / position 

* Command: 
  * **/eb drop \{id\}** **\[quantity] \[world] \[x] \[y] \[z]**
  * _Default quantity : 1_
  * _Default location : The location of the player who has executed this command_
* Permission: `eb.cmd.drop`

### Custom trigger

Commands:

* /eb run-custom-trigger trigger:\{activatorId\} // It will execute the activator(s) for all the EB placed that have an activator with the specified ID.
* /eb run-custom-trigger trigger:\{activatorId\} block:\{world,x,y,z\} // It will execute the activator(s) only for the EB placed at the specified location and if it has an activator with the specified ID.
