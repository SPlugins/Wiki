import CustomTag from '@site/src/components/CustomTag';

### entityCommands

Commands are a list of commands that are run from the console when the activator if it meet all conditions and requirements.  You can use vanilla commands here, SCore commands and another plugin commands.

* All the command lines of this command list are placeholder parsed first with placeholders from SPlugins and then its parsed through PAPI. 
  * Its recommended to check [Placeholders](/tools-for-all-plugins-score/placeholders) to see what placeholders can you run on each activator.
* There are three type of entity targets on commands
  * Player: Its the player/user who triggered the activator on the ExecutableItem
  * Target: Its the player targeted/enemy involved in an activator.
  * Entity: Its the entity/mob/enemy involved in an activator.
* Type of activator category: PLAYER\_ENTITY
* Info: List of commands that are normally run agaisnt the entity when the activator triggers.
  * By entity it means entity/mob/enemy involved in an activator.
  * We know the player is considered as entity, but the entity involved in activators is only the mob/enemy involved in the event.
  * You can check the list of entity commands here [Entity commands](/tools-for-all-plugins-score/custom-commands/entity-commands)
* Example:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY # replace that with the correct activator name
    entityCommands:
    - DAMAGE 10
    - BURN 5
```

* Its important to understand that if your activator has also a player, you can use the playerCommands so we can have for example: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY  # replace that with the correct activator name
    playerCommands:
    - SEND_MESSAGE &cThe power of the fire will rise in 5 seconds on the entity
    entityCommands:
    - DELAY 5
    - DAMAGE 10
    - BURN 2
```

### detailedEntities

* Info:  For activators that involves an entity you can select as condition the type of entity(es) where this activator will trigger by using this feature.
  * You can select a vanilla Minecraft entity (info: [EntityType list](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)) like:
    * "ZOMBIE"
  * <CustomTag type="premium" /> It requires [NBTAPI Plugin](https://modrinth.com/plugin/nbtapi) You can select a vanilla Minecraft mob with NBT (info: [NBT Tags of entities](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities)) like:
    *  `ZOMBIE{isBaby:1}`
    * `ZOMBIE{CustomName:"*"}`
  * You can select a MythicMob mob like:
    * "MM-\<ID>"
  * You can blacklist a mob by usinig ! like
    * !SKELETON

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY  # replace that with the correct activator name
    detailedEntities:
    - MM-Giant
    - MM-MyMob
    - '!SKELETON'
    - ZOMBIE{CustomName:"*"}
    - ZOMBIE{IsBaby:1}
```

### entityConditions

* Info: Feature for activators that involves a entity, here you can setup conditions for the entity involved.
* [Entity conditions](/tools-for-all-plugins-score/custom-conditions/entity-conditions.md)

### Entity placeholders

When the main actor of the event is an entity then you can use in your activator config (commands, conditions, other..) [the entity placeholders](/tools-for-all-plugins-score/placeholders#entity-placeholders)