---
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
---

import CustomTag from '@site/src/components/CustomTag';

# List of the Activators

## Activators of ExecutableItems

Here you have the list of activators available with their description and some examples. The activators allow you to execute custom actions,  it can have conditions, run commands, have cooldown, etc.

Premium activators are labelled with the tag: <CustomTag type="premium" />

Activator features are features that are exclusive to that activator.

### PLAYER\_ALL\_CLICK

* Info: Activator that gets triggered when the player either left or right click with the item. 
  * You can't differentiate the clicks, for that use different activators such as PLAYER\_RIGHT\_CLICK or PLAYER\_LEFT\_CLICK.
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * If typeTarget: ONLY\_BLOCK this features will be available.
    * [Block commands
      ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Examples: 
  * Warping Stone – Instantly teleports the player 5 blocks in the direction they are facing. Cooldown: 10 seconds.
  * Healing Totem – When clicked, heals the player for 4 hearts and grants Regeneration I for 5 seconds.
  * Thunder Rod – Strikes a lightning bolt at the nearest enemy within 10 blocks.
  * Gravity Boots – Launches the player 3 blocks into the air and negates fall damage for 5 seconds.
  * Explosive Rune – Creates a small explosion at the player's location that knocks back nearby mobs but does not damage terrain.

### PLAYER\_BED\_ENTER <CustomTag type="premium" />

* Info: Activator that gets triggered when the player right clicks a bed and enters to it. If the player doesn't enter then this activator won't get triggered. This doesn't get triggered when the player sleeps, only by the action of entering the bed.
* Examples:
  * Void Sleep – Upon entering the bed, the player is teleported to a custom-built dream dimension for exploration.
  * Lunar Shield – Grants Absorption IV for 5 minutes when sleeping on the bed, providing temporary bonus health.
  * Nightmare Curse – Spawns a hostile phantom above the bed when the player enters the bed, forcing them to fight before sleeping peacefully.
  * Dreamwalker’s Blessing – When entering the bed, the player gains Regeneration II until they wake up (Wake up action would be PLAYER\_BED\_LEAVE activator).

### PLAYER\_BED\_LEAVE <CustomTag type="premium" />

* Info: Activator that gets triggered when the player leaves the bed. Be careful ! This activator does get triggered when the player sleeps and its day so they leave the bed, but it also triggers when the player leaves the bed in middle of the sleep, its just the action of leaving the bed.
  * If you would like to activate only when the player sleeps you can use this activator + worldCondition -> ifWorldTime to check if its actually day.
* Examples:
  * Morning Boost – Upon leaving the bed, the player gains Speed II and Haste II for 60 seconds to start the day energized.
  * Phantom's Warning – If the player leaves the bed before fully sleeping, a phantom spawns nearby as a consequence.
  * Dream Collector – Upon waking up, the player receives a random enchanted book as a "dream memory."
  * Energy Surge – When leaving the bed, the player's hunger bar is fully restored, simulating a well-rested night.

### PLAYER\_BEFORE\_DEATH

* Info: Activator that gets triggered when the player deaths, now, the difference between this activator and PLAYER\_DEATH activator is that this activator gets triggered first in order offering the feature of being able to save the player before he dies.
  * To understand it better vanilla totems of undying gets triggered by this activator to apply the features it does.
* Examples:
  * Soulbound Amulet – When the player is about to die, they are instead teleported to their spawn point with 2 hearts and temporary Regeneration II.
  * Last Stand Shield – Upon near death, the player gains Resistance III and Absorption for 5 seconds, giving them a chance to fight back.
  * Phoenix Blessing – When death is imminent, the player explodes in flames, dealing fire damage to enemies and reviving with half health.
  * Undead Pact – If the player would die, they are instead revived with 3 hearts, but they won't be able to use weapons for 10 seconds.

### PLAYER\_BLOCK\_BREAK <CustomTag type="premium" />

* Info: Activator that gets triggered when the player breaks a block.
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Examples:
  * Ore Booster Pickaxe – When breaking an ore block, there is a 20% chance to double the drop.
  * Nature’s Wrath Axe – Breaking a log has a 10% chance to summon a hostile tree spirit (custom mob).
  * Cursed Excavation – When breaking stone, there is a 5% chance to spawn silverfish or apply Mining Fatigue for 5 seconds.
  * Explosive Demolition Hammer – When breaking blocks the surrounding blocks will be broken too, being able to break in 3x3.

### PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" />

* Info: Activator that gets triggered when the player blocks a hit that comes from an entity with the shield.
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Examples:
  * Thorned Shield – When blocking an attack, the attacker takes 3 hearts of damage.
  * Shockwave Defense – Successfully blocking an attack knocks back all nearby enemies within 5 blocks.
  * Energy Absorption – When blocking an attack, the player regenerates 1 heart and gains Resistance I for 3 seconds.
  * Frozen Guard – If an attack is blocked, the attacker is frozen in place (Slowness IV) for 2 seconds.
  * Blazing Counter – Blocking an attack sets the attacker on fire for 4 seconds.

### PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" />

* Info: Activator that gets triggered when the player blocks a hit that comes from a player with the shield.
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Examples:
  * Retribution Shield – When blocking an attack from a player, the attacker is instantly disarmed, dropping their weapon on the ground.
  * Vampiric Guard – When successfully blocking an attack, the player absorbs a portion of the attacker's health (healing 2 hearts).
  * Dimensional Rift – If a player’s attack is blocked, there is a 20% chance they are teleported 10 blocks away in a random direction.
  * Adrenaline Block – When blocking an attack, the player instantly gains Speed II and Strength I for 5 seconds, allowing for a quick counterattack.

### PLAYER\_BLOCK\_PLACE <CustomTag type="premium" />

* Info: Activator that gets triggered when the player places a block.
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Examples:
  * Living Roots – When placing a sapling, there is a 10% chance for it to instantly grow into a tree.
  * Runic Inscription – Placing a stone block has a 5% chance to turn it into a Runed Stone, emitting particles and providing nearby players Haste I for 10 seconds.
  * When placing TNT, there’s a small chance (5%) for it to immediately ignite, creating an unexpected explosion.

### PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" />

* Info: Activator that gets triggered when the player breaks a shield of another player (usually called target).
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Examples:
  * Shatter Strike – When breaking a player’s shield, the attacker gains Strength I for 5 seconds, empowering their next attack.
  * Upon destroying a shield, a small explosion occurs at the target’s location, knocking them back 5 blocks.
  * When a shield is shattered, the target receives **Wither I** for **5 seconds**, slowly draining their health.
  * Dimensional Fracture – When breaking a player’s shield, the target is momentarily teleported 5 blocks upwards, disorienting them before they fall back down.

### PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" />

* Info: Activator that gets triggered when the player brushes a block.
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Examples:
  * Cursed Dust – If the player brushes a suspicious block, there is a 10% chance that they get temporarily blinded as a cloud of cursed dust erupts around them.
  * Buried Riches – Brushing a block has a small chance to reward the player with a gold nugget or emerald, simulating the discovery of lost treasure.
  * Temporal Echoes – When brushing an artifact block, the player hears faint whispers from the past, hinting at lore-based secrets hidden nearby.

### PLAYER\_BUCKET\_ENTITY

* Info: Activator that gets triggered when the player using a bucket, it buckets an entity.
  * Example is how you store a fish inside a bucket with water.
  * If want to run something when "trying" to bucket an entity that can't be bucketed this activator won't run, you should use PLAYER\_CLICK\_ON\_ENTITY.
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Examples:
  * Instant Fillet – Instead of capturing a fish in a bucket, the player instantly receives raw fish in their inventory, as if they expertly filleted it on the spot.
  * Essence Extraction – When using a bucket on an axolotl, instead of capturing it, the player receives an "Axolotl Mucus" potion, which grants Regeneration I for 10 seconds.

### PLAYER\_CHANGE\_WORLD

* Info: Activator that gets triggered when the player changes to a different world.
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
* Examples:
  * Dimensional Adaptation – When the player enters a new world, they receive a random temporary buff (Speed, Strength, or Night Vision for 30 seconds) as their body adjusts to the new environment.
  * Weight of Realms – If a player enters the Nether or End, they temporarily gain Slowness II for 10 seconds, simulating the sudden change in gravity.
  * Forgotten Memories – When switching worlds, there’s a small chance (5%) that the player loses a random inventory item, simulating a “memory” being forgot.
  * Realmwalker’s Favor – Entering a new world grants a mysterious loot item, themed to the dimension (e.g., Nether gives a random gold ingot, End gives an Ender Pearl, etc.), as if gifted by an unknown force.

### PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" />

* Info: Activator that gets triggered when the player click on an entity and Citizen NPC(s).
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Examples:
  * Beast Tamer’s Bond – Clicking on a Wolf, Cat, or Horse while holding a special item (e.g., a Golden Apple) grants it temporary Speed II and Regeneration for 60 seconds.
  * Hidden Pocket – Clicking on a Zombie Piglin with Gold Ingots has a 5% chance to instantly receive a random Nether loot item instead of needing to barter.
  * Gourmet’s Choice – Clicking on a Cow, Pig, or Chicken while holding a Knife (custom item) instantly provides a higher-quality meat drop (e.g., Cooked Steak instead of Raw Beef).
  * Battle Focus – Clicking on an Iron Golem while holding a Shield gives it temporary Resistance II and Knockback Resistance for 30 seconds, allowing it to tank more damage.
  * Final Tribute – Clicking on a Skeleton or Wither Skeleton while holding Bone Blocks grants the player a brief Speed II boost as if absorbing ancient warrior energy.

### PLAYER\_CLICK\_ON\_PLAYER

* Info: Activator that gets triggered when the player click on a player (usually called target).
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Examples:
  * Shared Fortune – Clicking on a player while holding an Emerald Block splits your XP levels in half, giving the other player the lost XP instantly.
  * Clicking on a teammate while holding a Potion of Healing instantly transfers half of your health to them, making it a strategic last-second lifesaver.
  * Tactical Mark – Clicking on another player while sneaking places a glowing effect on them for 10 seconds, making them visible to teammates in a PvP fight.
  * Oath of Protection – Clicking on a player while holding a Shield grants them Resistance I for 30 seconds, acting as a temporary guardian effect.

### PLAYER\_CONNECTION <CustomTag type="premium" />

* Info: Activator that gets triggered when the player log into the server.
* Examples:
  * Realm’s Welcome – When logging in, the player receives a temporary Speed I and Haste I boost for 30 seconds, simulating a burst of energy upon entering the world.
  * Echo of the Past – The first message the player sees in chat is a customized “memory” message.
  * Daily Fortune – Upon logging in, the player is granted a random minor buff or debuff for 10 minutes (e.g., Luck I, Speed I, or Slowness I), making each session slightly different.
  * Dimensional Echo – If the player logs in from another world (Nether or End), they briefly experience a swirling particle effect and hear distorted ambient sounds for a few seconds before fully stabilizing.

### PLAYER\_CONSUME

* Info: Activator that gets triggered when the player successfully eat / consume an item.\
  Be careful, it only works for Minecraft Items that are edible or the ones that are transformed into edible item using the [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CONSUME\_THE\_EI

* Info: Activator that gets triggered when the player successfully eat/consume the ExecutableItem itself. \
  Be careful, it only works for Executable Items that are edible or the ones that are transformed into edible item using the [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CUSTOM\_LAUNCH

* Info: Activator that gets triggered when the player launch a projectile with an SCore command such as:
  * [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
  * [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch)
  * [LAUNCH\_ENTITY](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#launchentity)
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [entityCommands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands) (In this activator the entity is the projectile)
  * [Projectile placeholders](/tools-for-all-plugins-score/placeholders#projectile-placeholders)
  * [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities) (To whitelist/blacklist some projectiles)

### PLAYER\_DEATH

* Info: Activator that gets triggered when the player dies.
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here. 
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_DESELECT\_THE\_EI <CustomTag type="premium" />

* Info: Activator that gets triggered when the player deselects the ExecutableItem.
  * This happens when the ExecutableItem is on the mainhand, and then you change the item that you are holding, so you are "deselecting it". 

### PLAYER\_DISABLE\_FLY

* Info: Activator that gets triggered when the player stops flying. 
  * Flying action means literally fly, its not gliding or being in the air due to a fall.

### PLAYER\_DISABLE\_GLIDE

* Info: Activator that gets triggered when the player stops gliding. 

### PLAYER\_DISABLE\_SNEAK <CustomTag type="premium" />

* Info: Activator that gets triggered when the player stops from sneaking. 

### PLAYER\_DISABLE\_SPRINT <CustomTag type="premium" />

* Info: Activator that gets triggered when the player stops from sprinting 

### PLAYER\_DISABLE\_SWIM

* Info: Activator that gets triggered when the player stops swimming (1.13 swimming)
* 
### PLAYER\_DISCONNECT

* Info: Activator that gets triggered when the player logs out from the server.

### PLAYER\_DISMOUNT

* Info: Activator that gets triggered when the player dismounts / steps out from riding an entity. 
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_DROP\_ITEM

* Info: Activator that gets triggered when the player drops an item. 

### PLAYER\_DROP\_THE\_EI <CustomTag type="premium" />

* Info: Activator that gets triggered when the player drops the ExecutableItem. 
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_EDIT\_BOOK <CustomTag type="premium" />

* Info: Activator that gets triggered when the player made changes to the book and quill and pressed done or sign the book. 

### PLAYER\_EI\_BREAK <CustomTag type="premium" />

* Info: Activator that gets triggered when the player breaks the ExecutableItem due to vanilla durability break.

### PLAYER\_EMPTY\_BUCKET

* Info: Activator that gets triggered when the player empties an ExecutableItem bucket. It also triggers when you waterlog a block or fill a cauldron with said liquid for example.
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* When this activator gets activated, the target block is the location of where the water is supposed to be placed. With that information, you can use SETBLOCK to replace the water with something else if you want.

### PLAYER\_ENABLE\_FLY <CustomTag type="premium" />

* Info: Activator that gets triggered when the player **starts** flying. This activator gets triggered by the action of "double space-bar press while having the permission of flying".
  * This means it doesn't get triggered if you are already flying, its triggered by the action of changing flying state by "double space-bar press".
* Examples:
  * Lightning Takeoff – When flight is activated, a small lightning bolt with no damage strikes the player’s position for dramatic effect.
  * Aerial Boost – Upon starting flight, the player gets a temporary Speed III effect for 5 seconds to simulate a powerful lift-off.
  * Gale Force Wings – When starts flying, a strong wind effect pushes all entities around the player.

### PLAYER\_ENABLE\_GLIDE

* Info: Activator that gets triggered when the player starts gliding. 

### PLAYER\_ENABLE\_SNEAK <CustomTag type="premium" />

* Info: Activator that gets triggered when the player starts sneaking. 

### PLAYER\_ENABLE\_SPRINT <CustomTag type="premium" />

* Info: Activator that gets triggered when the player starts sprinting.

### PLAYER\_ENABLE\_SWIM

* Info: Activator that gets triggered when the player starts swimming (1.13 swimming)

### PLAYER\_ENTER\_IN\_THEIR\_LAND <CustomTag type="premium" />

* Info: Activator that gets triggered if you enter in your land or a land where you are trusted 
  * Supported plugins:
    * Lands

### PLAYER\_ENTER\_IN\_THEIR\_PLOT <CustomTag type="premium" />

* Info: Activator that gets triggered if you enter a plot.
  * Supported plugins:
    * PlotSquared 

### PLAYER\_EQUIP\_THE\_EI <CustomTag type="premium" />

* Info: Activator that gets triggered if you wear/put the armorpiece into the armor slot.
  * Be careful ! The plugin CMI can make this activator not work due to cmi.inventoryhat permission to true. If you want this activator to work set it the permission to false. 
  * Fabric addons can bypass this activator.

### PLAYER\_EXPERIENCE\_CHANGE

* Info: Activator that gets triggered when the player experience changes naturally. 
  * This means this activator is not triggered due to experience changes by commands. Except if those commands are the summon of an experience orb, will would make the experience change "naturally".

### PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" />

* Info: Activator that gets triggered if the player fertilizes a block with bone meal. 
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FILL\_BUCKET

* Info: Activator that gets triggered when the player fills the bucket with eitherwater or lava. 
  * Be careful ! When an ExecutableItem fills a bucket and it turns to either "water\_bucket" or "lava\_bucket" its not longer an ExecutableItem, it turns into a vanilla item and cant be reverted.
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_BLOCK <CustomTag type="premium" />

* Info: Activator that gets triggered when the player right-click the fishing rod when the fishing rod bobber is on a block. 
  * It doesn't get triggered when is not on a block, if you want to trigger it on the air then use the activator [PLAYER_FISH_NOTHING](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_fish_nothing)
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_ENTITY <CustomTag type="premium" />

* Activates when the player right-click the fishing rod when the fishing rod bobber catches an entity or Citizens NPC.
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here. 
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_FISH <CustomTag type="premium" />

* Info: Activator that gets triggered when the player right-click the fishing rod when the fishing rod bobber catches an item in the water due to fish loot system. 
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_NOTHING <CustomTag type="premium" />

* Info: Activator that gets triggered when the player fishes nothing, that means, the bobber wasn't on neither block nor entity nor player.
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_PLAYER <CustomTag type="premium" />

* Info: Activator that gets triggered when the player right-click the fishing rod when the fishing rod bobber catches another player (usually called target).
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_FISH\_XIAOMOMI\_FISH <CustomTag type="premium" />

* Info: Activator that gets triggered when the player successfully catches something using the CustomFishing plugin (formerly known as Xiaomomi Fish). This activator requires the [CustomFishing plugin](https://modrinth.com/plugin/customfishing) to be installed on your server.
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Available placeholders:
  * `%result%` - The fishing result (e.g., SUCCESS, FAILURE, etc.)
  * `%fish_hook%` - The name of the fish hook used
  * `%loot%` - The ID of the loot caught
* Examples:
  * Custom Fishing Rewards – When catching a rare fish with CustomFishing, grant the player bonus experience or a special currency reward.
  * Lucky Catch – When successfully fishing with a specific rod, there's a chance to receive additional custom loot items from the CustomFishing plugin.
  * Fishing Skill Progression – Track successful catches and increase player fishing skill levels based on the rarity of fish caught.

:::info
This activator only works if you have the **CustomFishing** plugin installed. It integrates with CustomFishing's FishingResultEvent to provide enhanced fishing mechanics.
:::

### PLAYER\_HARVEST\_BLOCK

* Info: Activator that gets triggered when the player harvests a block
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here. 
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Examples:
  * When right-clicking a sweet berry bush to harvest, there is a 10% chance that the bush bites back, dealing half a heart of damage but giving the player Strength I for 5 seconds as a "taste for blood" effect.
  * Bountiful Touch – When harvesting crops, there is a 15% chance to instantly replant them at full growth, allowing for continuous farming.
  * Mystic Bloom – When harvesting a flower, there is a 5% chance for it to drop a random enchanted item infused with nature’s energy.

### PLAYER\_HIT\_ENTITY <CustomTag type="premium" />

* Info: Activator that gets triggered when the player hits an entity.
  * This activator only works when there is damage involved, that means, the player actually hit the entity. If you would like it to work when clicking the entity then use [PLAYER_CLICK_ON_ENTITY](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_entity)
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_HIT\_PLAYER

* Info: Activator that gets triggered when the player hits another player (usually called target).
  * This activator only works when there is damage involved, that means, the player actually hit the other player. If you would like it to work when clicking the player then use [PLAYER_CLICK_ON_PLAYER](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_player)
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_INPUT <CustomTag type="premium" /> <CustomTag type="version" version="1.21.3" />

* Info: Activator that gets triggered when the player input a key. (forward, backward, left, right, jump, sprint, sneak)

### PLAYER\_ITEM\_BREAK <CustomTag type="premium" />

* Info: Activator that gets triggered when the player breaks the ExecutableItem by making it lose all its durability. 

### PLAYER\_JUMP <CustomTag type="premium" />

* Info: Activator that gets triggered when the player jumps.
  * <CustomTag type="version" version="1.21.2" /> it can trigger even if the player attempted to jump mid-air.

### PLAYER\_KICK

* Info: Activator that gets triggered when the player gets kicked 

### PLAYER\_KILL\_ENTITY <CustomTag type="premium" />

* Info: Activator that gets triggered when the player kills an entity or a Citizens NPC. 
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)

### PLAYER\_KILL\_PLAYER <CustomTag type="premium" />

* Info: Activator that gets triggered when the player kills a player (usually called target).
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_LAUNCH\_PROJECTILE

* Info: Activator that gets triggered when the player shoots a projectile. 
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_LEAVE\_THEIR\_LAND

* Info: Activator that gets triggered if you leave your land or a land where you are trusted 
  * Supported plugins:
    * Lands

### PLAYER\_LEAVE\_THEIR\_PLOT <CustomTag type="premium" />

* Info: Activator that gets triggered if you leave a plot.
  * Support plugins:
    * PlotSquared 

### PLAYER\_LEFT\_CLICK

* Info: Activator that gets triggered when the player left-clicks the item. 
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * If typeTarget: ONLY\_BLOCK this features will be available.
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : To write [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_MEND\_THE\_EI

* Info: Activator that gets triggered when the player mends the ExecutableItem by the mending enchantment. 

### PLAYER\_OPEN\_INVENTORY

* Info: Activator that gets triggered when the player opens inventories but **NOT its own inventory**. 

:::info
Its currently not possible to detect when the player open **its own** inventory because its only client side. 

The event is only triggered when someone force the player to open its inventory or if the player open custom, block or merchant inventories.
:::

### PLAYER\_PICKUP\_THE\_EI <CustomTag type="premium" />

* Info: Activator that gets triggered when the player pick ups the ExecutableItem. 

### PLAYER\_PORTAL

* Info: Activator that gets triggered when the player uses a portal.

### PLAYER\_RECEIVE\_EFFECT <CustomTag type="premium" />

* Info: Activator that gets triggered when the player receives a potion effect. 
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [DetailedEffects](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedeffects)

### PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" />

* Info: Activator that gets triggered when the player gets hit by an entity. 
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" />

* Info: Activator that gets triggered when the player gets hit by another player (usually called target).
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_RECEIVE\_HIT\_GLOBAL <CustomTag type="premium" />

* Info: Activator that gets triggered when the player gets hit. 
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_REGAIN\_HEALTH

* Info: Activator that gets triggered when the player regains health naturally.

### PLAYER\_RESPAWN <CustomTag type="premium" />

* Info: Activator that gets triggered when the player re-spawns.
  * As normal, all ExecutableItem activator works when the player has it on the inventory, so if the player re-spawns without the item on the inventory this activator won't trigger.

### PLAYER\_RIGHT\_CLICK

* Info: Activator that gets triggered when the player right-clicks the item. 
  * Due to spigot limitations this activator will only trigger if you have an item(any) in your hand.
* Custom Features of this activator:
  * [typeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget) : To specify the type of the click (ONLY\_AIR, ONLY\_BLOCK, NO\_TYPE\_TARGET)
  * If typeTarget: ONLY\_BLOCK these features will be available:
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : To write [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [detailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks) : To specify which types of block are valid

### PLAYER\_RIPTIDE

* Info: Activator that gets triggered when the player riptides.

### PLAYER\_SELECT\_THE\_EI <CustomTag type="premium" />

* Info: Activator that gets triggered when the player selects the ExecutableItem in the hotbar, this means starts holding it on main hand. 

### PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" />

* Info: Activator that gets triggered when the player shears an entity. 
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" />

* Info: Activator that gets triggered when the shield of the player gets broken by another player (usually called target).
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_SPAWN\_CHANGE

* Info: Activator that gets triggered when the spawnpoint of the player is changed. 

### PLAYER\_SWAPHAND\_THE\_EI

* Info: Activator that gets triggered when the player swaphand the ExecutableItem. This means the shortcut of mainhand to offhand and vice versa. 

### PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" />

* Info: Activator that gets triggered when an entity targets the player. 
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_TRAMPLE\_CROP

* Info: Activator that gets triggered when the player tramples a crop. 
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Block commands
    ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_UNEQUIP\_THE\_EI <CustomTag type="premium" />

* Info: Activator that gets triggered when the player unequips the ExecutableItem. 
  * Be careful ! The plugin CMI can make this activator not work due to cmi.inventoryhat permission to true. If you want this activator to work set it the permission to false.
  * Fabric addons can bypass this activator.

### PLAYER\_WALK <CustomTag type="premium" />

* Info: Activator that gets triggered when the player walks. 
  * This activator gets triggered each tick the player walks, so its very expensive in performances, use it carefully. You can add use cooldown feature to decrease the impact.

### PLAYER\_WRITE\_COMMAND <CustomTag type="premium" />

* Info: Activator that gets triggered when the player enters/inputs a command. 
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [DetailedCommands](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedcommands)

### PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" />

* Info: Activator that gets triggered when a launched projectile of the player enters to water.
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" />

* Info: Activator that gets triggered when a launched projectile by a player hits a block. 
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" />

* Info: Activator that gets triggered when a launched projectile by a player hits an entity. \
  Be carefull it doesnt be triggered when the projectile hits a player (For that use PROJECTILE\_HIT\_PLAYER).
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_PLAYER

* Info: Activator that gets triggered when a launched projectile by a player hits another player (usually called target).
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### CUSTOM\_TRIGGER

* Info: Activator that can be executed by running a command, or it can be scheduled. 
  * This activator is for all plugins, because of that its explained on [Custom triggers](/tools-for-all-plugins-score/custom-triggers)

### EI\_CLICK\_ON\_ANOTHER\_INVENTORY\_ITEM 

* Info: Activator that gets triggered when the ExecutableItem is placed on top of another item in the inventory.

### EI\_CLICKED\_BY\_ANOTHER\_INVENTORY\_ITEM

* Info: Activator that gets triggered when an item is planced on top of the ExecutableItem in the inventory.

### EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: Activator that gets triggered when the ExecutableItem enters to the player's inventory.
  * If you are using another plugin that manages give items and an ExecutableItem is given and this activator doesn't run then go onto their support and ask them to call this method.

### EI\_LEAVE\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: Activator that gets triggered when the item leaves the player's inventory.
  * Requires ProtocolLib to make this activator works properly. 

### INVENTORY\_CLICK <CustomTag type="premium" />

* Info: Activator that gets triggered when the player clicks the item in its inventory. 
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)

### LOOP <CustomTag type="premium" />

* Info: Activator that gets triggered in repeat as long as the item is in the player's inventory. Its basically a cycle, it runs the commands each \<delay> \<seconds/ticks> depending on the configuration of this activator.
* activatorFeatures: Normally all activators shares features, but there are some that are exclusive for some activators, if its the case, the feature(s) will be listed here.
  * [Delay](/executableitems/configurations/activator-configuration/activators-features#s_a_l-delay-and-delaytick)
