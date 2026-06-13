import CustomTag from '@site/src/components/CustomTag';

### blockCommands 

Commands are a list of commands that are run from the console when the activator if it meet all conditions and requirements.  You can use vanilla commands here, SCore commands and another plugin commands.

* All the command lines of this command list are placeholder parsed first with placeholders from SPlugins and then its parsed through PAPI. 
  * Its recommended to check [Placeholders](/tools-for-all-plugins-score/placeholders) to see what placeholders can you run on each activator.
* There are three type of entity targets on commands
  * Player: Its the player/user who triggered the activator on the ExecutableItem
  * Target: Its the player targeted/enemy involved in an activator.
  * Entity: Its the entity/mob/enemy involved in an activator.
* Type of activator category: PLAYER\_BLOCK
* Info: List of commands that are normally run against the block when the activator triggers.
  * This means, the activator must have involved with a block, for example PLAYER\_HIT\_PLAYER is an activator, but it doesn't involve a block, so blockCommands are not available here. With the activator PLAYER\_BLOCK\_BREAK there is a block involved so blockCommands are available here.
  * Another example PLAYER\_RIGHT\_CLICK has an activatorFeature called typeTarget, by default its ONLY\_AIR so blockCommands are not available due the activator is not involved with a block, but, typeTarget can be changed to ONLY\_BLOCK and then the activator will have as available features blockCommands, more info here -> \<IF I FORGOT PLS PING VAYK>
  * You can check the list of blockCommands here -> [Block commands](/tools-for-all-plugins-score/custom-commands/block-commands)
* Example:

```yaml
activators: 
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    blockCommands:
    - EXPLODE
```

* Its important to understand that if your activator has also a player, you can use the playerCommands so we can have for example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    playerCommands:
    - SEND_MESSAGE &6You have broken a block, it will explode in 5 seconds !
    blockCommands:
    - DELAY 5
    - EXPLODE
```

### detailedBlocks

* Info: Here you can select as condition the type of block(s) where this activator will trigger by using this feature.
  * You can select blocks from Minecraft Vanilla like:
    * "STONE"
  * <CustomTag type="premium" /> <CustomTag type="version" version="1.13" /> You can select blocks from Minecraft Vanilla with NBT (info: [Block\_states](https://minecraft.fandom.com/wiki/Block_states)) like: 
    * `FURNACE{lit:true}`
  * You can select blocks from ItemsAdder like:
    * "ITEMSADDER:\<id>"
  * You can select blocks from ExecutableBlocks like:
    * "EXECUTABLEBLOCKS:\<id>"
  * You can blacklist certain blocks adding ! at the beginning like:
    * "!DIRT"
  * You can add Block Tags like: 
    * "#MINECRAFT:MINEABLE/PICKAXE"
  * You can add group of blocks like
    * "ALL\_ORES"

<details>

<summary>List of group of blocks</summary>

```
    ALL_CHESTS,
    ALL_FURNACES,
    ALL_PLANKS,
    ALL_LOGS,
    ALL_STRIPPED_LOGS,
    ALL_STRIPPED_WOODS,
    ALL_WOODS,
    ALL_ORES,
    ALL_WOOLS,
    ALL_SLABS,
    ALL_STAIRS,
    ALL_FENCES,
    ALL_SAPLINGS,
    ALL_CROPS,
    ALL_DOORS,
    ALL_TRAPDOORS,
    ALL_BEDS,
    ALL_TERRACOTTA,
    ALL_NORMAL_TERRACOTTA,
    ALL_GLAZED_TERRACOTTA,
    ALL_CONCRETE,
    ALL_CONCRETE_POWDERS,
    ALL_GLASS,
    ALL_STAINED_GLASS,
    ALL_SHULKER_BOXES,
    ALL_LEAVES,
    ALL_CARPETS;
```

</details>

* Example:

```yaml
activators:  
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    detailedBlocks:
      blocks:
      - STONE
      - COBBLESTONE
      - ANDESITE
      - FURNACE{lit:true} #(🎇 **BLOCK STATE FEATURE IS PREMIUM EXCLUSIVE ONLY AND FOR 1.13+** 🎇)
      - ITEMSADDER:turquoise_block
      - EXECUTABLEBLOCKS:CUSTOMDIRT
      - !DIRT
      - ALL_ORES
      - '#MINECRAFT:MINEABLE/PICKAXE'
      cancelEventIfNotValid: false
```

### blockConditions

* Info: Here you can setup conditions for the block involved.
* [Block conditions](/tools-for-all-plugins-score/custom-conditions/block-conditions.md)

### Block placeholders

When the main actor of the event is a block then you can use in your activator config (commands, conditions, other..) [the block placeholders](/tools-for-all-plugins-score/placeholders#-block-placeholders)