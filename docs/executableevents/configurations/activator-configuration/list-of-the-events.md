---
description: Complete list of all events supported by ExecutableEvents, organized by category (player, block, entity, miscellaneous). Use these event names as activators in your EE configuration files.
---

import CustomTag from '@site/src/components/CustomTag';

# List of the Events

## Events of ExecutableEvents

Here you have the complete list of events available in ExecutableEvents with their description and specific placeholders. Events are what trigger your executable event configurations — each event corresponds to a real Minecraft server event.

Premium events are labelled with the tag: <CustomTag type="premium" />

## Miscellaneous events

### BROADCAST\_MESSAGE <CustomTag type="premium" />

* Info: Triggered when a broadcast message is sent to the server.
* Specific placeholders:
  * %message%
  * %is\_async%

### CHUNK\_LOAD <CustomTag type="premium" />

* Info: Activates when a chunk is loaded in any world.
* Specific placeholders:
  * %world%
  * %coord\_x%
  * %coord\_z%
  * %is\_slime\_chunk%
  * %is\_loaded%
  * %is\_generated%
  * %is\_force\_loaded%
  * %is\_new\_chunk%

### CHUNK\_UNLOAD <CustomTag type="premium" />

* Info: Activates when a chunk is unloaded from any world.
* Specific placeholders:
  * %world%
  * %coord\_x%
  * %coord\_z%
  * %is\_slime\_chunk%
  * %is\_loaded%
  * %is\_generated%
  * %is\_force\_loaded%
  * %is\_new\_chunk%

### CUSTOM\_TRIGGER

* Info: Activator that can be executed by running a command, or it can be scheduled.
  * This activator is for all plugins; it is explained on [custom-triggers](/tools-for-all-plugins-score/custom-triggers).

### HANGING\_PLACE <CustomTag type="premium" />

* Info: Triggered when a hanging entity such as an item frame or painting is placed.

### HANGING\_BREAK <CustomTag type="premium" />

* Info: Triggered when a hanging entity is broken by natural causes or by a player.

### HANGING\_BREAK\_BY\_ENTITY <CustomTag type="premium" />

* Info: Triggered when a hanging entity is broken by another entity, such as a player or a mob.

### LIGHTNING\_STRIKE <CustomTag type="premium" />

* Info: Activates when a lightning strike occurs in the world.
* Specific [Placeholders](/tools-for-all-plugins-score/placeholders#lightning_strike):
  * %cause% : List of [causes](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/weather/LightningStrikeEvent.Cause.html)

### LOOP\_SERVER

* Info: Activates repeatedly once per loop cycle at the server level (no player context required).

### MAP\_INITIALIZE <CustomTag type="premium" />

* Info: Triggered when a map is initialized by the server.

### PLUGIN\_DISABLE <CustomTag type="premium" />

* Info: Triggered when a plugin is disabled.
* Specific placeholders:
  * %plugin\_name%

### PLUGIN\_ENABLE <CustomTag type="premium" />

* Info: Triggered when a plugin is enabled.
* Specific placeholders:
  * %plugin\_name%

### PORTAL\_CREATE <CustomTag type="premium" />

* Info: Activates when a nether or end portal is created in the world.

### RAID\_FINISH <CustomTag type="premium" />

* Info: Activates when a village raid finishes.
* Specific placeholders:
  * %badomen\_level%
  * %heroes% : (UUID LIST) Example "123e4567-e89b-12d3-a456-426614174000,123e4567-e89b-12d3-a456-426614174001"

### RAID\_TRIGGER <CustomTag type="premium" />

* Info: Activates when a village raid is triggered.
* Specific placeholders:
  * %player% : who triggered the raid
  * %badomen\_level%

### RAID\_WAVE <CustomTag type="premium" />

* Info: Activates at the start of each village raid wave.
* Specific placeholders:
  * %raiders% : (UUID LIST) Example "123e4567-e89b-12d3-a456-426614174000,123e4567-e89b-12d3-a456-426614174001"

### REMOTE\_SERVER\_COMMAND

* Info: Activates when a command is received over RCON ([RemoteServerCommandEvent](https://jd.papermc.io/paper/1.14.4/index.html?org/bukkit/event/server/RemoteServerCommandEvent.html)).

### SERVICE\_REGISTER

* Info: Activates when a service is registered ([ServiceRegisterEvent](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServiceRegisterEvent.html)).

### SERVICE\_UNREGISTER

* Info: Activates when a service is unregistered ([ServiceUnregisterEvent](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServiceUnregisterEvent.html)).

### SPAWN\_CHANGE <CustomTag type="premium" />

* Info: Activates when the world spawn point changes.

### STRUCTURE\_GROW <CustomTag type="premium" />

* Info: Activates when a structure grows in the world (e.g., a tree, mushroom, or bamboo).

### THUNDER\_CHANGE <CustomTag type="premium" />

* Info: Activates when the thunder state changes in a world.
* Specific placeholders:
  * %cause% : List of causes (COMMAND, NATURAL, SLEEP, PLUGIN, UNKNOWN)

### VEHICLE\_CREATE <CustomTag type="premium" />

* Info: Activates when a player places or creates a vehicle (boat, minecart, etc.).

### VEHICLE\_DAMAGE <CustomTag type="premium" />

* Info: Activates when an entity considered a vehicle receives damage.

### VEHICLE\_DESTROY <CustomTag type="premium" />

* Info: Activates when an entity considered a vehicle is destroyed.

### WEATHER\_CHANGE <CustomTag type="premium" />

* Info: Activates when the weather changes in a world (rain starts, rain stops, etc.).
* [Placeholders](/tools-for-all-plugins-score/placeholders#weather_change)

### WORLD\_DAY <CustomTag type="premium" />

* Info: Activates when the world time transitions to daytime.

### WORLD\_NIGHT <CustomTag type="premium" />

* Info: Activates when the world time transitions to nighttime.

## Player events

### LOOP

* Info: Activates repeatedly once per loop cycle, once for each online player.

### PLAYER\_ADVANCEMENT

* Info: Activates when a player earns an advancement.

### PLAYER\_ALL\_CLICK

* Info: Activates when a player left-clicks or right-clicks.

### PLAYER\_BED\_ENTER

* Info: Activates when a player right-clicks a bed to enter it.

### PLAYER\_BED\_LEAVE

* Info: Activates when a player gets out of bed.

### PLAYER\_BEFORE\_DEATH

* Info: Activates just before a player dies (cancellable — you can prevent the death).

### PLAYER\_BLOCK\_BREAK

* Info: Activates when a player mines or breaks a block.

### PLAYER\_BLOCK\_PLACE

* Info: Activates when a player places a block.

### PLAYER\_BRUSH\_BLOCK

* Info: Activates when a player brushes a suspicious sand or suspicious gravel block.

### PLAYER\_BUCKET\_ENTITY

* Info: Activates when a player captures an entity with a bucket (e.g., a fish or an axolotl).

### PLAYER\_CHANGE\_WORLD

* Info: Activates when a player moves from one world to another.

### PLAYER\_CLICK\_ON\_ENTITY

* Info: Activates when a player clicks on any entity.

### PLAYER\_CLICK\_ON\_PLAYER

* Info: Activates when a player clicks on another player.

### PLAYER\_CONNECTION

* Info: Activates when a player logs into the server (does not activate on logout).

### PLAYER\_CONSUME

* Info: Activates when a player finishes consuming an item (food, potion, etc.).

### PLAYER\_CUSTOM\_LAUNCH

* Info: Activates when a player launches a custom projectile from SCore.

### PLAYER\_DEATH

* Info: Activates when a player dies.

### PLAYER\_DISABLE\_FLY

* Info: Activates when a player stops flying.

### PLAYER\_DISABLE\_GLIDE

* Info: Activates when a player stops gliding with an elytra.

### PLAYER\_DISABLE\_SNEAK

* Info: Activates when a player stops sneaking.

### PLAYER\_DISABLE\_SPRINT

* Info: Activates when a player stops sprinting.

### PLAYER\_DISCONNECTION

* Info: Activates when a player logs out from the server.

### PLAYER\_DISMOUNT

* Info: Activates when a player dismounts from a ridden entity.

### PLAYER\_DROP\_ITEM

* Info: Activates when a player drops an item.

### PLAYER\_EDIT\_BOOK

* Info: Activates when a player edits a book and quill and presses done, or signs the book.

### PLAYER\_EMPTY\_BUCKET

* Info: Activates when a player empties a bucket (e.g., placing water from a water bucket).

### PLAYER\_ENABLE\_FLY

* Info: Activates when a player starts flying.

### PLAYER\_ENABLE\_GLIDE

* Info: Activates when a player starts gliding with an elytra.

### PLAYER\_ENABLE\_SNEAK

* Info: Activates when a player starts sneaking.

### PLAYER\_ENABLE\_SPRINT

* Info: Activates when a player starts sprinting.

### PLAYER\_ENCHANT\_ITEM

* Info: Activates when a player enchants an item at an enchanting table.
* Specific [Placeholders](/tools-for-all-plugins-score/placeholders#player_enchant_item):
  * %enchants%
  * %level\_cost%

### PLAYER\_ENTER\_IN\_HIS\_LAND

* Info: Activates when a player enters their own land or a land where they are trusted (requires the [Lands](https://www.spigotmc.org/resources/lands.53313/) plugin).

### PLAYER\_ENTER\_IN\_HIS\_PLOT

* Info: Activates when a player enters one of their plots (requires the [PlotSquared](https://www.spigotmc.org/resources/plotsquared-v6.77506/) plugin).

### PLAYER\_ENTITY\_PLACE

* Info: Activates when a player places an entity such as an armor stand, boat, minecart, or end crystal.

### PLAYER\_EQUIP\_ARMOR

* Info: Activates when a player equips a piece of armor.

### PLAYER\_EXPERIENCE\_CHANGE

* Info: Activates when the player's experience changes naturally.
* Specific [Placeholders](/tools-for-all-plugins-score/placeholders#player_experience_change):
  * %experience%

### PLAYER\_FERTILIZE\_BLOCK

* Info: Activates when a player uses bone meal to fertilize a block.

### PLAYER\_FILL\_BUCKET

* Info: Activates when a player fills a bucket with water or lava.

### PLAYER\_FIRST\_CONNECTION

* Info: Activates the very first time a player joins the server.

### PLAYER\_FISH\_BLOCK

* Info: Activates when a player reels in their fishing rod while the bobber rests on a block.

### PLAYER\_FISH\_ENTITY

* Info: Activates when a player reels in their fishing rod and the bobber has caught an entity.

### PLAYER\_FISH\_FISH

* Info: Activates when a player reels in and successfully catches something (item or fish).

### PLAYER\_FISH\_NOTHING

* Info: Activates when a player reels in their fishing rod and catches nothing (splash or nothing).

### PLAYER\_FISH\_PLAYER

* Info: Activates when a player reels in their fishing rod and the bobber has caught another player.

### PLAYER\_FOOD\_CHANGE

* Info: Activates when the player's food (hunger) level changes.

### PLAYER\_HARVEST\_BLOCK

* Info: Activates when a player harvests a mature crop block.

### PLAYER\_HIDE\_ENTITY

* Info: Activates when a player hides an entity ([PlayerHideEntityEvent](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/player/PlayerHideEntityEvent.html)).

### PLAYER\_HIT\_ENTITY

* Info: Activates when a player hits an entity.
* Specific placeholders:
  * %critical% : true or false (Paper and Paper forks only)

### PLAYER\_HIT\_PLAYER

* Info: Activates when a player hits another player.

### PLAYER\_INVENTORY\_CLICK

* Info: Activates when a player clicks inside any inventory (their own or a container).
* Specific [Placeholders](/tools-for-all-plugins-score/placeholders#player_inventory_click):
  * %is\_shift\_click%
  * %is\_mouse\_click%
  * %is\_left\_click%
  * %is\_right\_click%
  * %is\_keyboard\_click%
  * %is\_creative\_action%
  * %get\_action%
  * %before\_slot%
  * %after\_slot%
  * %inventory\_type%
  * %inventory\_title%

### PLAYER\_ITEM\_BREAK

* Info: Activates when a player's item breaks from losing all its durability.

### PLAYER\_JUMP

* Info: Activates when a player jumps.

### PLAYER\_KICK

* Info: Activates when a player is kicked from the server.

### PLAYER\_KILL\_ENTITY

* Info: Activates when a player kills an entity.

### PLAYER\_KILL\_PLAYER

* Info: Activates when a player kills another player.

### PLAYER\_LAUNCH\_PROJECTILE

* Info: Activates when a player launches a projectile (arrow, snowball, etc.).

### PLAYER\_LEAVE\_HIS\_LAND

* Info: Activates when a player leaves their own land or a land where they are trusted (requires the [Lands](https://www.spigotmc.org/resources/lands.53313/) plugin).

### PLAYER\_LEAVE\_HIS\_PLOT

* Info: Activates when a player leaves one of their plots (requires the [PlotSquared](https://www.spigotmc.org/resources/plotsquared-v6.77506/) plugin).

### PLAYER\_LEFT\_CLICK

* Info: Activates when a player left-clicks.

### PLAYER\_LEVEL\_CHANGE

* Info: Activates when the player's XP level changes.
* Specific [Placeholders](/tools-for-all-plugins-score/placeholders#player_level_change):
  * %new\_level%
  * %old\_level%

### PLAYER\_MOUNT

* Info: Activates when a player mounts an entity (horse, pig, etc.).

### PLAYER\_OPEN\_INVENTORY

* Info: Activates when a player opens their inventory.

### PLAYER\_PARTICIPATE\_KILL\_ENTITY

* Info: Activates when a player participates in killing an entity (not necessarily the killing blow).

### PLAYER\_PARTICIPATE\_KILL\_PLAYER

* Info: Activates when a player participates in killing another player (not necessarily the killing blow).

### PLAYER\_PICKUP\_ARROW

* Info: Activates when a player picks up an arrow entity from the ground.

### PLAYER\_PICKUP\_ITEM

* Info: Activates when a player picks up an item from the ground.

### PLAYER\_PORTAL

* Info: Activates when a player enters a portal (nether or end).

### PLAYER\_PROJECTILE\_HIT\_BLOCK

* Info: Activates when a projectile shot by a player hits a block.

### PLAYER\_PROJECTILE\_HIT\_ENTITY

* Info: Activates when a projectile shot by a player hits an entity.

### PLAYER\_PROJECTILE\_HIT\_PLAYER

* Info: Activates when a projectile shot by a player hits another player.

### PLAYER\_RECEIVE\_EFFECT

* Info: Activates when a player receives a status effect.
* [Placeholders](/tools-for-all-plugins-score/placeholders#player_receive_effect)

### PLAYER\_RECEIVE\_HIT\_BY\_ENTITY

* Info: Activates when a player takes damage from an entity.

### PLAYER\_RECEIVE\_HIT\_BY\_PLAYER

* Info: Activates when a player takes damage from another player.

### PLAYER\_RECEIVE\_HIT\_GLOBAL

* Info: Activates when a player takes damage from any source.

### PLAYER\_REGAIN\_HEALTH

* Info: Activates when a player regains health.

### PLAYER\_RESPAWN

* Info: Activates when a player respawns after death.

### PLAYER\_RIGHT\_CLICK

* Info: Activates when a player right-clicks.

### PLAYER\_RIPTIDE

* Info: Activates when a player uses the Riptide enchantment on a trident.

### PLAYER\_SEND\_MESSAGE

* Info: Activates when a player sends a chat message.
* [Placeholders](/tools-for-all-plugins-score/placeholders#player_write_command-or-player_send_message)

### PLAYER\_SHEAR\_ENTITY

* Info: Activates when a player shears an entity (sheep, mushroom cow, etc.).

### PLAYER\_SHOW\_ENTITY

* Info: Activates when a player reveals a hidden entity ([PlayerShowEntityEvent](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/player/PlayerShowEntityEvent.html)).

### PLAYER\_SPAWN\_CHANGE

* Info: Activates when a player changes their personal spawn point.

### PLAYER\_SWAP\_HAND

* Info: Activates when a player swaps items between their main hand and off-hand.

### PLAYER\_TAKE\_LECTERN\_BOOK

* Info: Activates when a player takes a book from a lectern.

### PLAYER\_TARGETED\_BY\_AN\_ENTITY

* Info: Activates when an entity sets a player as its attack target.

### PLAYER\_TELEPORT

* Info: Activates when a player is teleported.
* Specific placeholders:
  * %teleport\_cause% : List of [causes](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/player/PlayerTeleportEvent.TeleportCause.html)

### PLAYER\_TRAMPLE\_CROP

* Info: Activates when a player tramples a crop block and turns it back into farmland.

### PLAYER\_UNEQUIP\_ARMOR

* Info: Activates when a player removes a piece of armor.

### PLAYER\_WALK

* Info: Activates when a player walks (moves on foot).

### PLAYER\_WRITE\_COMMAND

* Info: Activates when a player sends a command (starts with `/`).
* [Placeholders](/tools-for-all-plugins-score/placeholders#player_write_command-or-player_send_message)

## Block events

### BELL\_RESONATE <CustomTag type="premium" />

* Info: Activates when a bell resonates after being rung.

### BELL\_RING <CustomTag type="premium" />

* Info: Activates when a bell is rung by a player or projectile.

### BLOCK\_BURN <CustomTag type="premium" />

* Info: Activates when a block catches fire and begins to burn.

### BLOCK\_DRY <CustomTag type="premium" />

* Info: Activates when a block dries out (e.g., coral becomes dead coral, farmland dries).

### BLOCK\_EXPLODE <CustomTag type="premium" />

* Info: Activates when a block explodes (e.g., a bed in the Nether or End, or a respawn anchor).

### BLOCK\_FERTILIZE <CustomTag type="premium" />

* Info: Activates when bone meal is applied to a block, causing it to grow.

### BLOCK\_IGNITE <CustomTag type="premium" />

* Info: Activates when a block is ignited (set on fire).

### BREWING\_START <CustomTag type="premium" />

* Info: Activates when a brewing stand begins brewing.

### CAMPFIRE\_START <CustomTag type="premium" />

* Info: Activates when an item begins cooking on a campfire.

### CAULDRON\_LEVEL\_CHANGE <CustomTag type="premium" />

* Info: Activates when the water or lava level in a cauldron changes.

### CRAFTER\_CRAFT <CustomTag type="premium" />

* Info: Activates when a crafter block (1.21+) produces a crafted item.

### CROP\_GROW <CustomTag type="premium" />

* Info: Activates when a crop grows to its next growth stage.

### FLUID\_LEVEL\_CHANGE <CustomTag type="premium" />

* Info: Activates when a fluid level changes in the world.

### ITEMSADDER\_PLAYER\_BLOCK\_BREAK <CustomTag type="premium" />

* Info: Activates when a player breaks a custom block from the [ItemsAdder](https://www.spigotmc.org/resources/itemsadder.73355/) plugin.

### LEAVES\_DECAY <CustomTag type="premium" />

* Info: Activates when leaf blocks decay naturally after logs are removed.

### MOISTURE\_CHANGE <CustomTag type="premium" />

* Info: Activates when the moisture level of farmland changes.

### NOTE\_PLAY <CustomTag type="premium" />

* Info: Activates when a note block plays a note.

### REDSTONE\_BLOCK\_ACTIVATION <CustomTag type="premium" />

* Info: Activates when a block changes state due to a redstone signal.
* Specific placeholders:
  * %new\_state%
  * %old\_state%

### SCULK\_BLOOM <CustomTag type="premium" />

* Info: Activates when sculk spreads and new sculk blooms (1.19+).

### SIGN\_CHANGE <CustomTag type="premium" />

* Info: Activates when a player edits and confirms the text on a sign.

### SPONGE\_ABSORB <CustomTag type="premium" />

* Info: Activates when a sponge absorbs water.

### TNT\_PRIME <CustomTag type="premium" />

* Info: Activates when a TNT block is primed (lit and about to explode).

## Entity events

### CREEPER\_POWER\_CHANGE <CustomTag type="premium" />

* Info: Activates when a creeper becomes powered (struck by lightning).
* Specific [Placeholders](/tools-for-all-plugins-score/placeholders#creeper_power_change):
  * %power\_cause%

### ENDERDRAGON\_CHANGE\_PHASE <CustomTag type="premium" />

* Info: Activates when the Ender Dragon changes its attack phase.

### ENTITY\_BEFORE\_DEATH <CustomTag type="premium" />

* Info: Activates just before an entity dies (cancellable — you can prevent the death).

### ENTITY\_BREAK\_DOOR <CustomTag type="premium" />

* Info: Activates when an entity breaks down a door (e.g., a zombie).

### ENTITY\_BREED <CustomTag type="premium" />

* Info: Activates when two entities breed together.

### ENTITY\_CHANGE\_BLOCK <CustomTag type="premium" />

* Info: Activates when an entity changes a block state (e.g., an enderman picking up a block, a sheep eating grass).

### ENTITY\_COMBUST\_BY\_BLOCK <CustomTag type="premium" />

* Info: Activates when an entity catches fire because of a block (e.g., entering a fire block).

### ENTITY\_COMBUST\_BY\_ENTITY <CustomTag type="premium" />

* Info: Activates when an entity catches fire because of another entity.

### ENTITY\_DAMAGE\_BY\_BLOCK <CustomTag type="premium" />

* Info: Activates when an entity takes damage from a block (e.g., a cactus).

### ENTITY\_DAMAGE\_BY\_ENTITY <CustomTag type="premium" />

* Info: Activates when an entity takes damage from another entity.

### ENTITY\_DAMAGE\_BY\_PLAYER <CustomTag type="premium" />

* Info: Activates when an entity takes damage from a player.

### ENTITY\_DEATH <CustomTag type="premium" />

* Info: Activates when any entity dies.

### ENTITY\_DROP\_ITEM <CustomTag type="premium" />

* Info: Activates when an entity drops an item (on death, or naturally).

### ENTITY\_ENTER\_BLOCK <CustomTag type="premium" />

* Info: Activates when an entity enters a block (e.g., a bee entering its hive).

### ENTITY\_ENTER\_LOVE\_MODE <CustomTag type="premium" />

* Info: Activates when an entity enters love mode (ready to breed).

### ENTITY\_EXPLODE <CustomTag type="premium" />

* Info: Activates when an entity explodes (creeper, TNT minecart, etc.).

### ENTITY\_PARTICIPATE\_KILL\_ENTITY <CustomTag type="premium" />

* Info: Activates when an entity participates in killing another entity.

### ENTITY\_PARTICIPATE\_KILL\_PLAYER <CustomTag type="premium" />

* Info: Activates when an entity participates in killing a player.

### ENTITY\_PICKUP\_ITEM <CustomTag type="premium" />

* Info: Activates when an entity picks up an item from the ground.

### ENTITY\_PLACE\_EVENT <CustomTag type="premium" />

* Info: Activates when an entity places a block (e.g., an enderman placing a block, a snow golem laying snow).

### ENTITY\_PORTAL\_ENTER <CustomTag type="premium" />

* Info: Activates when an entity enters a portal (nether or end).

### ENTITY\_PORTAL\_EXIT <CustomTag type="premium" />

* Info: Activates when an entity exits a portal on the other side.

### ENTITY\_PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" />

* Info: Activates when a projectile fired by an entity hits a block.

### ENTITY\_PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" />

* Info: Activates when a projectile fired by an entity hits another entity.

### ENTITY\_PROJECTILE\_HIT\_PLAYER <CustomTag type="premium" />

* Info: Activates when a projectile fired by an entity hits a player.

### ENTITY\_REGAIN\_HEALTH <CustomTag type="premium" />

* Info: Activates when an entity regains health (natural regeneration, potions, etc.).

### ENTITY\_RESURRECT <CustomTag type="premium" />

* Info: Activates when an entity is resurrected by a totem of undying.

### ENTITY\_SHOOT\_BOW <CustomTag type="premium" />

* Info: Activates when an entity (skeleton, pillager, etc.) shoots an arrow with a bow.

### ENTITY\_SPAWN <CustomTag type="premium" />

* Info: Activates when any entity spawns in the world.

:::warning
If the entity is summoned via command, this event fires before the entity fully exists in the world. Add **DELAYTICK 1** before any commands that target the entity to ensure it is fully spawned.
:::

### ENTITY\_SPAWN\_TRIALSPAWNER <CustomTag type="premium" />

* Info: Activates when an entity is spawned from a Trial Spawner (1.21+).
* Specific [Placeholders](/tools-for-all-plugins-score/placeholders#entity_spawn_trialspawner):
  * %is\_ominous%

### ENTITY\_TAME\_BY\_ENTITY <CustomTag type="premium" />

* Info: Activates when an entity is tamed by another entity.

### ENTITY\_TAME\_BY\_PLAYER <CustomTag type="premium" />

* Info: Activates when an entity is tamed by a player (wolf, cat, horse, etc.).

### ENTITY\_TARGET\_ENTITY <CustomTag type="premium" />

* Info: Activates when an entity sets another entity as its attack target.

### ENTITY\_TARGET\_PLAYER <CustomTag type="premium" />

* Info: Activates when an entity sets a player as its attack target.

### ENTITY\_TELEPORT <CustomTag type="premium" />

* Info: Activates when an entity teleports (enderman, shulker, etc.).

### ENTITY\_TRANSFORM <CustomTag type="premium" />

* Info: Activates when an entity transforms into another entity (e.g., zombie → drowned, villager → zombie villager, mooshroom variant change).
