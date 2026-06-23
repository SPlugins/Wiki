import CustomTag from '@site/src/components/CustomTag';

### ownerCommands

Commands are a list of commands that are run from the console when the activator if it meet all conditions and requirements.  You can use vanilla commands here, SCore commands and another plugin commands.

* All the command lines of this command list are placeholder parsed first with placeholders from SPlugins and then its parsed through PAPI. 
  * Its recommended to check [Placeholders list](/tools-for-all-plugins-score/placeholders) to see what placeholders can you run on each activator.

It's available in all activators type since all activators have a player involved.

* Info: Player commands is a list commands that are normally run against the player when the activator triggers.
  * This means if it has an SCore command, example: DAMAGE 5,  the damage will be applied to the user of the ExecutableItem.
    * Custom [owner commands](/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md) available from SCore
  * You can also run commands from other plugins or vanilla commands. These commands will be executed by the console.
    * `minecraft:say Hey`
    * `money give %player% 500`
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_RIGHT_CLICK
    ownerCommands:
    - SEND_MESSAGE &eHey ! I am a message and the player who triggered this activator
      can see it ^^
    - effect give %player% regeneration 5 5 true
    - SEND_MESSAGE &dYou received regeneration :P
```

### Owner placeholders

When the main actor of the event is a player then you can use in your activator config (commands, conditions, other..) [the owner placeholders](/tools-for-all-plugins-score/placeholders#player-placeholders)