import CustomTag from '@site/src/components/CustomTag';

### targetCommands

Commands are a list of commands that are run from the console when the activator if it meet all conditions and requirements.  You can use vanilla commands here, SCore commands and another plugin commands.

* All the command lines of this command list are placeholder parsed first with placeholders from SPlugins and then its parsed through PAPI. 
  * Its recommended to check [Placeholders](/tools-for-all-plugins-score/placeholders) to see what placeholders can you run on each activator.
* There are three type of entity targets on commands
  * Player: Its the player/user who triggered the activator on the ExecutableItem
  * Target: Its the player targeted/enemy involved in an activator.
  * Entity: Its the entity/mob/enemy involved in an activator.
* Info: Target commands is a list commands that are normally run against the target when the activator triggers.
  * This means if it has an SCore command of DAMAGE 5, if its on targetCommands then the damage will be applied to the target/enemy involved in the activator.
  * Its "normally run against the player" because this works for SCore commands, remember you can use another plugin commands or vanilla commands, so if you add "effect give %player% strength 5 5" even though its on targetCommands, the parse of placeholders will apply the cooldown to %player%. If you would like to apply this command to target then use %target%. More information on [Placeholders](/tools-for-all-plugins-score/placeholders)
  * You can check the list of targetCommands here -> [Player & Target commands](/tools-for-all-plugins-score/custom-commands/player-and-target-commands)
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    targetCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%
    - effect give %target% slowness 5 5 true
    - SEND_MESSAGE &7Your feets are heavier than before, eh ?
```

* Its important to understand that if your activator has also a player, you can use the playerCommands so we can have for example: 

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    playerCommands:
    - SEND_MESSAGE &eYou have hit %target%, he cant pick up items in 5 seconds
    targetCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%, in 5 seconds you can't pick up items
    - CANCEL_PICKUP time:100
```

### targetConditions

* Type of activator category: PLAYER\_TARGET
* Info: Feature for activators that involves a player target, here you can setup conditions for the player target involved.
* [Target conditions](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### Target player placeholders

When the second actor of the event is a player then you can use in your activator config (commands, conditions, other..) [the target player placeholders](/tools-for-all-plugins-score/placeholders#-player-placeholders)
