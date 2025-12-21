import LinkPreview from '@site/src/components/LinkPreview';

# Block Commands

:::tip
"Multi-world" compatibility for the vanilla commands.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Example, you want summon a Zombie in the world SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Example with a placeholder:

`execute in <<%block_world%>> run summon zombie 100 50 100`
:::

:::info
`In AROUND and MOB_AROUND commands, the true/false argument are not to be included in the command as they serve no purpose.`
:::

:::info
Enable **HIDE USAGE** when using a big number in **MINEINCUBE** as it can shorten the lag that usually happens alot when you use `MINEINCUBE 8` for example
:::

## Custom commands

_Sorted by alphabetical order_

### &lt;+&gt; (Around Command Connector)

* Info: Allows you to add more commands in one command line. Will only work well with `AROUND` and `MOB_AROUND`.
* Example: 

```text
- AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SENDMESSAGE &You got smited!
```

```text
- MOB_AROUND 7 STUN_ENABLE <+> DELAY 5 <+> STUN_DISABLE
```

### AROUND

* Info: Targets players in a specific radius and makes them run commands
* Command settings
    * `{distance}`: To how far in radius the command will select players
    * `{command}`: The command that the targeted players will execute
* Example:

```
- AROUND 20 execute at %around_target% run summon lightning_bolt
```

* This summons lightning at players in a 20 block radius around the clicked block.

#### You can add conditions to AROUND command

* The condition looks like AROUND \<distance> CONDITIONS(\<conditions>) \<command>
* Conditions works with placeholders but need to be %::\_::% instead of %\_%
  * For example %::player\_health::%
* To add MORE than 1 condition use "&&" between the conditions
* Example:

```
- AROUND 10 CONDITIONS(%::player_health::%>10&&%::player_name::%=2Ssomar) SENDMESSAGE &eclick
```

:::info
Keep in mind that the CONDITIONS() part parses the placeholders in it with the player selected by the AROUND command. So what actually happened in the placeholders above is that it checks if the target's health is greater than 10 and if that player who got selected by the AROUND command is named "2Ssomar"
:::

### APPLY\_BONEMEAL

* Info: Apply the same effect that happen when a player use bone meal on a block (crop)
* No command setting
* Example:

```yaml
- APPLY_BONEMEAL
```

### BREAK

* Info: Breaks the target block
* No command setting
* Example:

```
 - BREAK
```

### CONTENT\_ADD

* Info: Adds an item into a container
* Command settings
  * \{Item\}: Item to add
  * \[Amount]: Amount to add (default is 1)
* Example:

```
- CONTENT_ADD STONE 1
- CONTENT_ADD EI:Myitem 1
- CONTENT_ADD EI:test{Usage:1,Variables:{var1:"My text",var2:2}} 1
```

### CONTENT\_CLEAR

* Info: Clear a container
* No command setting
* Example:

```
- CONTENT_CLEAR
```

### CONTENT\_REMOVE

* Info: Removes an item from a container
* Command settings
  * \{Item\}: Item to remove
  * \[Amount]: Amount to remove (default is 1)
* Example:

```
- CONTENT_REMOVE STONE 1
```

:::info
It will not remove ExecutableItems if the material matches. The only way would be specifying with EXECUTABLEITEMS:`{id}`
:::

### CONSOLEMESSAGE

* Info: Sends a message to the console
* Command setting
  * `{text}`: Text to send tho the console
* Example:

```yaml
- CONSOLEMESSAGE This is a debug message
```

### CHANGE\_BLOCK\_TYPE

* Info: Changes the block type of the block selected by the activator
* Command setting
* Example:

```
- CHANGE_BLOCK_TYPE STONE
```

:::info
It works with ItemsAdder
:::

```
- CHANGE_BLOCK_TYPE ITEMSADDER:MyIA
```

### CROPS\_GROWTH\_BOOST

* Info: It boost the growth of the crops around the block
* Command: CROPS\_GROWTH\_BOOST \{radius\} \{delay between two growths in ticks\} \{total duration in ticks\} \{chance 0-100\}
* Example:

```yaml
- CROPS_GROWTH_BOOST 5 10 100 50
```

### DROPEXECUTABLEITEM

* Info: Drops an Executable Item in the block's location
* Command settings
  * `{id}`: Item id of the ExecutableItem
  * `{quantity}`: The amount of the executable item that will drop
  * `[owner]`: (Optional) The owner of the dropped item (player IGN or UUID)
  * `[itemdata]`: (Optional) Item data settings containing:
    * `Usage`: Set the usage value
    * `Variables`: Set custom variables (format: `{key:value}`)
    * `Durability`: Set the durability value
* Example:

```
- DROPEXECUTABLEITEM epicsnowball 1
- DROPEXECUTABLEITEM id:epicsnowball amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Info: Drops an Executable Block in the block's location
* Command settings
  * `{id}`: Item id of the ExecutableBlock
  * `{quantity}`: The amount of the executable block that will drop
* Example:

```
- DROPEXECUTABLEBLOCK House 1
```

### DRAIN IN CUBE

* Info: it drains in a cube of "r" radius the source of lava and/or water
* Command settings
  * `{radius}`: The radius in blocks (9 is the limit), you can bypass the limit by adding a * before your radius (as your own risks).
  * `{drainType}`: LAVA or WATER (no need if you want both)
* Example:

```
DRAININCUBE 4 WATER
DRAININCUBE *12 WATER
```

### DROPITEM

* Info: Drops an item in the block's location
* Command settings
  * `{material}`: The item type.
    
<LinkPreview
  url="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"
  title="Material"
/>
  
* `{quantity}`: The amount of the item that will drop
* Example:

```
- DROPITEM BEDROCK 1
```

### EXPLODE

* Information: Breaks the block you targeted and spawns a primed tnt on that location
* No command setting
* Example:

```
- EXPLODE
```

### FARMINCUBE

* Information: Breaks all crops in a given radius
* Command settings
  * `{radius}`: Radius of how big the area of the crops you want to break. **(LIMIT IS 9)**
  * `{drop}`: Whether the block drops loot or not
  * `{onlyMaxAge}`: It will only break crops with max age
  * `{replant}`: Whether the crop will be replanted or not
  * `{event}`: Whether the crop will generate the event or not.
* Example:

```
- FARMINCUBE 9 true true true false
```

### FERTILIZEINCUBE

* Info: Fertilizes nearby crops by 1 age, its like applying bonemeal but it growth the plant 100% of the time.
* Command setting
  * `{radius}`: Radius of how big the area of the crops you want to fertilize **(LIMIT IS 9)**
* Example:

```
- FERTILIZEINCUBE 9
```

### INLINE\_MINEINCUBE

* Info: Destroys blocks in a radius in a rectangle shape. Each block broken by this command gets counted as a player block break event.
* Command settings
  * `{cube_radius}`: Radius of how big the cube radius will be
  * `{depth}`: How depth the rectangle will be.
  * `{drop}`: Whether the block drops loot or not
  * `{create blockBreakEvent}`: if the plugin will generate a blockBreakEvent for each broken block by the MINEINCUBE (default true)
  * `[direction]`: (Optional) (default = the player direction) If you want to force a direction.
* Example:

```
- INLINE_MINEINCUBE 1 4 true true
```

:::info
It supports %player\_direction\_xz% of PlaceholderAPI - Player expansion\
Example: INLINE\_MINEINCUBE 1 1 true true %player\_direction\_xz%
:::

### LAUNCH

* Info: Makes the target block shoot projectiles
* Command settings
  * `{projectile}`: the projectile type
  * `{speed}`: the projectile speed
  * `{despawnDelay}`: the despawn delay is in seconds (Default 10)
* Example:

```
- LAUNCH ARROW 2 5
```

:::info
The block must be directional to LAUNCH the projectile properly.

Example: AmethystCluster, Barrel, Bed, Beehive, Bell, BigDripleaf, CalibratedSculkSensor, Campfire, Chest, ChiseledBookshelf, Cocoa, CommandBlock, Comparator, CoralWallFan, DecoratedPot, Dispenser, Door, Dripleaf, EnderChest, EndPortalFrame, Furnace, Gate, Grindstone, Hopper, Ladder, Lectern, LightningRod, Observer, PinkPetals, Piston, PistonHead, RedstoneWallTorch, Repeater, SmallDripleaf, Stairs, Switch, TechnicalPiston, TrapDoor, TripwireHook, Vault, WallHangingSign, WallSign, WallSkull
:::

### MINEINCUBE

* Info: Destroys blocks in a radius in a cuboid shape. Each block broken by this command gets counted as a player block break event.
* Command settings
  * `{radius}`: Radius of how big the area of the crops you want to break **(LIMIT IS 9)**
  * `{drop}`: Whether the block drops loot or not
  * `{create blockBreakEvent}`: if the plugin will generate a blockBreakEvent for each broken block by the MINEINCUBE (default true)
  * `{offset}`: If the area of block starts to break from the block broken, or from the "center" to make the area really works the "radius" selected. (default false)
* Example:

```
- MINEINCUBE 4 true false
- MINEINCUBE radius:3 droploot:true createEvent:true offsetBreak:false
```

### MINEINSPHERE

* Info: Destroys blocks in a radius in a spherical shape. Each block broken by this command gets counted as a player block break event.
* Command settings
  * `{radius}`: Radius of the sphere
  * `{drop}`: Whether the block drops loot or not
  * `{create blockBreakEvent}`: if the plugin will generate a blockBreakEvent for each broken block by the command
* Example:

```
- MINEINSPHERE 4 true false
```

### MOB\_AROUND

* Info: Targets entities in a specific radius and makes them run commands
* Command settings
  * `{distance}`: To how far in radius the command will select entities
  * `{mute or not}`: (true or false) To notify the user of the item if it didn't manage to target any mobs.
    * **Set to true to hide the message**
  * You can BLACKLIST or WHITELIST entities adding one of these ones in anyplace of the command:
    * BLACKLIST(ZOMBIE,ARMOR\_STAND)
    * WHITELIST(CHICKEN)
* Example:

```
- MOB_AROUND 3 false BURN 10
- MOB_AROUND 5 execute at %around_target_uuid% run summon lightning_bolt
- MOB_AROUND 5 BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
- MOB_AROUND 5 effect give %around_target_uuid% poison 10 10
```

To use entity nbt on the WHITELIST/BLACKLIST field, you need to install NBT API plugin

<LinkPreview
  url="https://www.spigotmc.org/resources/nbt-api.7939/"
  title="NBTAPI Plugin"
/>

It supports NBT Tags so you can add for example something like: `ZOMBIE{IsBaby:1}`

<LinkPreview
  url="https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities"
  title="Entities tags"
/>

```
- MOB_AROUND 7 BLACKLIST(ZOMBIE{CustomName:"Test Test"},ZOMBIE{CustomName:"Miyamoto"}) false BURN 3
- MOB_AROUND 5 WHITELIST(ZOMBIE{IsBaby:1}) DAMAGE 20
- MOB_aROUND 9 WHITELIST(WOLF{Owner:"%player%"}) HEAL 5
- MOB_aROUND 9 WHITELIST(WOLF{Owner:%player_uuid%}) HEAL 5
```

### MOVE

* Info: Move all entities above the block on the direction of the block (for better understanding is like what a conveyor do)
* No command setting
* Example:

```
- MOVE
```

:::info
**This command only works on directionals blocks.**
:::

### MOB\_NEAREST

* Info: Targets the nearest mob from the player/target.
* Command settings
    * `{max accepted distance}`:  Max distance accepted that the "entity" can be.
    * `{command(s)}`: The command that will be executed
* Example:

Damages nearest player

```
- MOB_NEAREST 10 DAMAGE 5
```

### NEAREST

* Info: Targets the nearest player from the player/target.
* Command settings
    * `{max accepted distance}`: Max distance accepted that the "target" can be.
    * `{command}`: The command that will be executed
* Example:

Damages nearest player

```
- NEAREST 8 DAMAGE 5
```

### OPENDOOR

* Open or close a block openable.
* No command setting
* Example:

```
- OPENDOOR
```

### OPMESSAGE

* Info: It sends a message to OP online players and the console
* Command setting
  * `{text}`: Text to send
* Example:

```
- OPMESSAGE This is my debug message
```

### PARTICLE

* Info: Spawns particles in the block's location
* Command settings
  * `{type}`: The type of particle.

<LinkPreview
  url="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html"
  title="Particles"
/>

* `{quantity}`: The amount of particles that will spawn
* `{offset}`: The radius of the area where the particles may spawn in the block's location
* `{speed}`: To how fast or how big particles will be
* Example:

```
- PARTICLE COMPOSTER 10 0.1 0.5
```

### PLANT\_IN\_SQUARE

* Info: Plants in square respect the block selected.
* Command settings
  * `{radius}`: Radius of the square
  * `{takeFromInv}`: Default true, it takes the seeds in the player inv, otherwise it generates the seeds
  * `{acceptEI}`: Default false, accept EI for the seeds
  * `{cropType}`: default all seeds accepted (it takes seeds depending of their order in the inventory)
    * FARMLAND - WHEAT, CARROTS, BEETROOTS, POTATOES, SWEET\_BERRY\_BUSH, MELON\_STEM, PUMPKIN\_STEM, TORCHFLOWER\_CROP
    * SOUL SAND - NETHER\_WART
    * JUNGLE WOOD/LOG - COCOA
* Example:

```
- PLANT_IN_SQUARE 3
```

### REMOVEBLOCK

* Info: Removes the block, no drops, just remove
* No command setting
* Example:

```
- REMOVEBLOCK
```

### SELL\_CONTENT

* Info: It sells all the content of a chest / furnace / all blocks that has an inventory.
* Command settings
  * `{price_boost}`: Float multiplier for the sold items. For example, the value here is 2 so the sold items will give you twice the selling price.
  * `{deleteUnsellable}`: Boolean value to set if it should delete the unsellable items
* Example:

```
- SELL_CONTENT priceBoost:1.0 deleteUnsellable:false
```

:::info
It requires ShopGUIPlus (priority) & Vault & CMI prices
:::

### SETBLOCK

* Info: Replaces the target block with another block
* Command setting
  * `{material}`: The material to set
* Example:

```
- SETBLOCK STONE
```

### SETTEMPBLOCK

* Info: Replaces the target block with a temporary block.
* Command settings
  * `{material}`: The material to set
  * `{time}`: The time in ticks (20 ticks = 1 sec)
* Example:

```
- SETTEMPBLOCK STONE 100
```

:::warning
It doesn't replace blocks that have extra datas (inventory, rotation, etc)
:::

### SET\_TEMP\_BLOCK\_POS

* Info: Replaces the targeted block with a temporary block
* Command: SET\_TEMP\_BLOCK\_POS x:\{x\} y:\{y\} z:\{z\} material:\{material\} time:\{\} bypassProtection:\{boolean\} whitelistCurrentBlock:\{list of materials\}
* Example:

```
- SET_TEMP_BLOCK_POS x:0.0 y:0.0 z:0.0 material:STONE time:10 bypassProtection:true whitelistCurrentBlock:SAND,DIRT
```

:::warning
It doesn't replace blocks that have extra datas (inventory, rotation, etc)
:::

### SETBLOCKPOS

* Info: Setblocks in a certain position
* Command settings
  * `{x}`: The block pos X
  * `{y}`: The block pos Y
  * `{z}`: The block pos Z
  * `{material}`: The block type
  * `{bypassWG}`: Whether if WorldGuard will interfere with the placement of the block or not
* Example:

```
- SETBLOCKPOS %block_x_int% %block_y_int% %block_z_int% STONE true
```

### SETEXECUTABLEBLOCK

* Info: Setblock command but for Executable Blocks
* Command settings
  * `{id}`: ID of the Executable Block
  * `{x}`: X coordinates
  * `{y}`: Y coordinates
  * `{z}`: Z coordinates
  * `{world}`: The world you want the Executable Block to be at
  * `{replace}`: Whether you want to replace a block that exists in that location or not
  * `{bypassProtection}`: (Default false) Whether you want to replace the block even if there is a terrain protection from a plugin there. 
  * `[ownerUUID]`: (Optional) (default = no owner) The uuid of the player who would be the owner of the eb
* Example:

```
- SETEXECUTABLEBLOCK BLOCKS_001_STONE %block_x_int% %block_y_int% %block_z_int% %block_world% true
```

### SILK\_SPAWNER

* Info: Collects the spawner involved in the event
* No command setting
* Example:

```
- SILK_SPAWNER
```

:::info
The SILK\_SPAWNER command is only compatible with the following plugins:

* RoseStacker
* WildStacker

And of course the vanilla spawners.
:::

### SMELT

* Info: It smelts the target block dropping the smelted item, for example iron\_ore -> iron\_ingot it supports fortune, if it can't be smelted nothing will happen
* Command setting
  * `[generateEvent]`: (Optional) (default = true) Whethe or not it generates a block break event
* Example:

```
- SMELT
```

### STRIKELIGHTNING

* Info: Strikes a lightning bolt with no damage at the block that runs the command
* No command setting
* Example:

```
- STRIKELIGHTNING
```

### VEIN\_BREAKER

* Info: Breaks blocks in veins in one block break
* Command settings
  * `{max_vein_size}`: Max amount of blocks the command can break
  * `[generateEvent]`: (Optional) (default = true) Whether or not it generates a block break event
* Example:

```
- VEIN_BREAKER 20
```
