# Commands

## Clear stuff from Score

* This command allow you to clear most of SCore content in progress
* You can clear:
  * [ACTIONBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#actionbar)
  * COOLDOWNS
  * DELAYED_COMMANDS (SCore commands run with delay)
  * [WHILE](/tools-for-all-plugins-score/custom-commands/utility-commands#while)
  * [BOSSBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#bossbar)
  * [PARTICLES](/tools-for-all-plugins-score/score-particles)
  * ALL
* Command: /score clear \{player\} \{WHAT_YOU_WANT_TO_CLEAR\}

## Clear cooldowns 

* Command to clear a specific cooldown (for a specifc player / entity)
* Command: /score cooldowns clear \{cooldown\_id\} \[UUID]
  * `{cooldown_id}`: Example -> EI:myitem:myactivator
  * `[UUID]`: (Optionnal) The UUID of the player / entity

## Inspect loops, useful for debug

* Command: /score inspect-loop

Reload SCore variables, projectiles and hardness configurations

* Command: /score reload

## Discord webhook
Send a message to discord via webhook

* /score webhook \{url\} \{debug\} [allowed_mentions] \{message...\}
  * `{url}`: url for the webhook
  * `{debug}`: whether to let the executor know if a webhook message is to be performed or not
  * `[allowed_mentions]`: it can be users:id\[,id,...\] or roles:id\[,id,...\] or nothing
  * `{message...}`: the message that will be sent by the target webhook


## Particles commands

Check [SCore Particles](/tools-for-all-plugins-score/score-particles)

## Variables commands

Check [SCore Variables](/tools-for-all-plugins-score/score-variables)

## Manually run SCore commands

### Player commands

* Info: Command that allows outside and inside SPlugins to run a custom command from SCore to a specific player.
* When using this command, all the command line is parsed through PlaceholdersAPI so you add placeholders to it.

* Command: /score run-player-command player:\{player\} \{command\}
  * `player`: Name of the player targeted
  * `command`: SCore player command that will be applied to \{player\}

* Examples:
  * /score run-player-command player:SPluginsPlayer SENDMESSAGE &eHello
  * /score run-player-command player:SPluginsPlayer SENDMESSAGE &eHello player:Ssomar +++ DELAY 10 +++ SWING_MAIN_HAND
  * /score run-player-command player:SPluginsPlayer SENDMESSAGE &eHello my name is %player% and my life is %player_health%

### Block commands

* Info: Command that allows outside and inside SPlugins to run a custom command from SCore for a specific block.

* Command: /score run-block-command \[player:\{player\}\] block:\{world\},\{x\},\{y\},\{z\} \{command\}
  * `player`: Player who is involved in this activator
    * Its optional due some commands need it, for example

                MOB_AROUND: Who will apply the damage? well, the command applies damage to mob around but the damage will be count dealt as the \{player\}, so it checks if the player can actually damage the mob, the damage and kills counts for him, etc.

                VEIN_BREAKER: Who broke the blocks ? well, the command breaks block in a vein shape but the blocks will be counted as broken by the \{player\}, so it checks if the player can actually break the block, the block broken counts for him, etc.

  * `block`
      * `world`: World where the block is
      * `x`: X coordinates of the block
      * `y`: Y coordinates of the block
      * `z`: Z coordinates of the block
  * `command`: Block command who will be run against the block and, if exists, by the player.

* Examples:
  * /score run-block-command block:world,-23,-61,27 BREAK
  * /score run-block-command player:SPluginsPlayer block:world,-23,-61,27 MINEINCUBE 1 false

### Entity commands

* Info: Command that allows outside and inside SPlugins to run a custom command from SCore for a specific entity

* Command: /score run-entity-command entity:\{entityUUID\} \{command\}
  * `entityUUID`: UUID of the entity targeted
  * `command`: Entity command who will be run against the entity.
* Example:
  * /score run-entity-command entity:c4d5338b-6f8e-4b97-9f18-9dbc47f60131 JUMP 1
  * /score run-entity-command entity:%entity_uuid% JUMP 1

