# Informal Guides

## Guides

### Stamina System

Reference Idea: (by juliekun)

```
Stamina can be drained overtime from sprinting (1 stamina per 5 seconds). 
recover 2 stamina per second
default is 100
can be increased by 20% more from eating golden apple, can be stacked to 200 stamina (last for 3 min).
Enchanted golden apple will give temporary infinite stamina and set current stamina to 200 (1 min). 
Using a sword will decrease 1–4 stamina based on materials (wood, iron, and gold, diamonds, and netherite).
same for axe but slightly higher: 2 - 6 
boost recovering speed for stamina if player has full saturation bar (1 saturation bar = 10% faster)
If the hunger bar is lower than 50%, then decrease the recovery speed from 2 stamina/second to 1 stamina/second.
Blocking an attack will lose 1 stamina only, but if the shield breaks, then lose 10 stamina.
When stamina gets to 0, get stun, being stun until stamina recovers back to 20% current stamina.
Jumping and mining drain 1 stamina.
Swimming and climbing drain 1 stamina/second
whenever doing any action requires stamina Stop recovering stamina and start recovering 3 seconds, not doing anything related to drain stamina, but constantly recovering if you have eaten an enchanted or normal golden apple for the last 3 minutes.
below 20% current stamina, then give player weakness, mining fatigue, and slowness until stamina is above 30% (ye 30%).
```

Steps to recreate (NOT ALL ARE POSSIBLE AT THE MOMENT)

```
1) Create a SCore variable
- /score variables-create STAMINA
- set FOR to PLAYER
- set TYPE to NUMBER
- set DEFAULT VALUE to 0
2) Create a SCore variable
- /score variables-create MAX-STAMINA
- set FOR to PLAYER
- set TYPE to NUMBER
- set DEFAULT VALUE to 0
3) create an Event File
4) create a LOOP activator
- add "score variables modification player STAMINA %math_(2*({player_food_level}/20))% %player%"
- create a placeholder condition 
  - type: PLAYER_NUMBER
  - part1: %math_{score_variables_MAX-STAMINA}+{score_variables_BONUS-STAMINA}%
  - comparator: INFERIOR
  - part2: 100

===============================================================================
  
HOW TO IMPLEMENT "BONUS STAMINA WHEN EATING GOLDEN APPLE":
1) Create a SCore variable
- /score variables-create BONUS-STAMINA
- set FOR to PLAYER
- set TYPE to NUMBER
- set DEFAULT VALUE to 0
2) Create an EI ITEM
- create a PLAYER_CONSUME_THE_EI activator
- add the commands

(config format)
playerCommands:
- score variables modification player BONUS-STAMINA 20 %player%
- DELAY 180
- score variables modification player BONUS-STAMINA -20 %player%

===============================================================================

HOW TO IMPLEMENT "STAMINA IS NOT CONSUMED WHEN EATING A SPECIAL ITEM"
1) Create a SCore variable
- /score variables-create INFINITE-STAMINA
- set FOR to PLAYER
- set TYPE to NUMBER
- set DEFAULT VALUE to 0
2) Create an EI ITEM
- create a PLAYER_CONSUME_THE_EI activator
- add the commands

(config format)
playerCommands:
- score variables modification player INFINITE-STAMINA 1 %player%
- DELAY 60
- score variables modification player INFINITE-STAMINA -1 %player%

===============================================================================

HOW TO IMPLEMENT STAMINA-REDUCING SYSTEMS
1) Create an Event file
- Create several activators that deals with actions (PLAYER_BLOCK_BREAK,
PLAYER_HIT_PLAYER, PLAYER_HIT_ENTITY, PLAYER_JUMP etc)
- FOR EACH ACTIVATOR, ADD THE COMMAND: 
  - score variables modification player STAMINA (amount) %player%
- TO MAKE STAMINA CONSUMPTION VARY DEPENDING ON THE MATERIAL OF THE TOOL USED,
 CREATE MORE SIMILAR ACTIVATORS BUT THE MATEIRAL IN "if has item" PLAYER CONDITION 
 WILL BE DIFFERENT FOR EACH ITEM/MATERIAL/TOOL

- FOR EACH ACTIVATOR, ADD THIS PLACEHOLDER CONDITION SO THE "INFINITE STAMINA"
BUFF WOULD WORK:
- Create a placeholder condition
  - type: PLAYER_NUMBER
  - part1: %score_variables_INFINITE-STAMINA%
  - comparator: EQUALS
  - part2: 0

- FOR MOVEMENT-RELATED STAMINA-REDUCING ACTIONS SUCH AS SPRINTING AND SWIMMING:
- Create a LOOP activator
- Add this command:
  - score variables modification player STAMINA (amount) %player%
- Go to player conditions and enable the appropriate conditions that checks for
the correct action (Ex: To check for swimming, enable if swimmong player condition)

FINALLY, TO MAKE THE STAMINA REGENERATION STOP WHILE DOING ACTIONS, USE EECOOLDOWN
https://docs.splugins.net/tools-for-all-plugins-score/custom-commands/player-and-target-commands#eecooldown
TO MAKE THE LOOP ACTIVATOR RESPONSIBLE FOR STAMINA REGEN TO NOT EXECUTE.

===============================================================================

HOW TO APPLY DEBUFFS IF THE PLAYER IS BELOW A SPECIFIC STAMINA BAR:
1) Create an Event File
2) Create a LOOP activator
3) Use placeholder conditions (Refer to how stamina is checked in the top part of the 
guide

[!] SAMPLE GUIDE ON HOW TO CREATE A PLACEHOLDER CONDITION THAT CHECKS IF THE 
PLAYER IS AT 30% STAMINA

  - type: PLAYER_PLAYER
  - part1: %math_({score_variables_MAX-STAMINA}+{score_variables_BONUS-STAMINA})*0.3%
  - comparator: INFERIOR_OR_EQUALS
  - part2: %math_({score_variables_MAX-STAMINA}+{score_variables_BONUS-STAMINA})%
  
4) Add effect give commands (minecraft:effect give %player% slowness 1 2 true)
```
