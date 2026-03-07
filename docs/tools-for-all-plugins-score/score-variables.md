---
description: "Learn how to use Score variables to store strings, numbers, and lists per player or globally. Integrate variables with ExecutableItems and ExecutableBlocks commands."
keywords: [Score variables, minecraft variables, player data storage, ExecutableItems variables, global variables]
---

# 🧮   SCore Variables

## SCore variables

Score has a integration of variables where you can store strings/numbers in variables in a global way or per player, they aren't integrated in EI or EB, but they are integrated as commands (so they can be used in combination with EI / EB)

They are stored in `plugins/Score/variables`

### Variable Types

| Type       | Explanation                        |
| ---------- | ---------------------------------- |
| **STRING** | Allow you to store text            |
| **NUMBER** | Allow you to store number          |
| LIST       | Allow you to store multiple values |

### Variable Scope (For)

| Type       | Explanation                                                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **GLOBAL** | Variable stored in a global way means that there is one value and its the same for everyone                                                     |
| **PLAYER** | Variable stored for each player means that the value is independent for each player. So the value of two different players can be not the same. |

### Modification Types

| Type             | Explanation                                                                                                          |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| **SET**          | You set a static value to the variable                                                                               |
| **MODIFICATION** | You modify the variable (useful for INT variables, to add value to a integer value, or to substract a certain value) |
| **LIST-ADD**     | Specific for LIST , It adds a new value into the list                                                                |
| **LIST-REMOVE**  | Specific for LIST , It removes a value from the list                                                                 |

:::danger
ID of the variables can't have underscores, points or spaces but - is ok
:::

## Variables tools

* /score variables list
  * Display all existing variables IDs
* /score variables info \{variable-id\} \[player]
  * Display the value of a specific variable (Optional: for a specific player)
* /score variables-create \{variable-id\}
  * Create a new variable with the id mentioned and open the in-game editor
* /score variables-define  \{variable-id\} \{type\_of\_variable\} \{for\} \[material\_icon] \[default\_values...]
  * Allow to create a new variable using a command
* /score variables-delete \{variable-id\}
  * Delete the variable with the id mentioned
* /score variables
  * Open the in-game editor of variables
* /score variables clear \{type\_of\_variable\} \{variable-id\} \[player]
  * Clear the value of the variable (Optional: for a specific player)
  * If you replace \[player] by **all,** it will clear the value for all players
* /score variables \{modification\_type\} \{variable\_scope\} \{variable-id\} \{value\} \[player]
  * Allow you to modify the value of an existing variable.
  * Examples:
    * **GLOBAL Variables**:
      * /score variables SET GLOBAL exemple1 100
        * Set the value 100 to the global variable exemple1
      * /score variables MODIFICATION GLOBAL plop 100
        * Increase the global variable plop of +100
      * /score variables MODIFICATION GLOBAL plop -50
        * Decrease the global variable plop of -50
    * **PLAYER Variables**
      * /score variables SET PLAYER my-variable -20 Ssomar
        * Set the value -20 to the variable my-variable for the player Ssomar
      * /score variables MODIFICATION PLAYER my-variable -50 Ssomar
        * Decrease the player variable my-variable of -50 for Ssomar
    * **Specific examples for LIST type**
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT1 Ssomar
        * Add values into the list
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT3 Ssomar index:0
        * To specify a place to add the value into the list use index feature (0 is the first element of the list, so it will add TEXT3 at the begin of the list)
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar
        * Remove the last value
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar index:0
        * Remove a specific index
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar value:Test
        * Remove a specific value

:::info
Variable-list also work with GLOBAL variables, but you would need to change instead of PLAYER -> GLOBAL and remove the player in the command
:::

## Variables placeholders

This requires [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/).

* %score\_variables\_\<variable-id>%
* %score\_variables\_\<variable-id>\_int%

:::info
Since SCore variable placeholders are supported by PlaceholderAPI, you can use the SCore variables like this:

`%math_{score_variables_userLevel}*10%`
:::

#### Placeholders specific for LIST

* %score\_variables\_\<variable-id>\_\<index>%
  * Return the value at the specific index of the list
* %score\_variables\_\<variable-id>%
  * Return all the elements of the list
* %score\_variables-contains\_\<variable-name>\_\<value>%
  * Return a boolean to see if the list contains a value (true or false)
* %score\_variables-size\_\<variable-name>%
  * Return the size of the list

What you can do with this feature -> Item created by Ssomar

<details>

<summary>Terminator<br /><br />Ability : <br />- RIGHT CLICK to select entities<br />- SHIFT+RIGHT CLICK to explode them<br /><br />You need to first create the variable, you can use this command:<br />/score variables-define myList LIST PLAYER<br /></summary>


```yaml
# Le nom ou nom d'affichage
name: '&6&l>> &7Terminator stick &6&l<<'
# La description de l'item
lore:
- '&7Select entites by right'
- '&7clicking on them !'
- '&eLimit: &63 entities'
- '&e'
- '&7Then shift + right click'
- '&7to make them explode !'
# Le matériau
material: STICK
usage: 1
usageLimit: -1
config_5: true
config_update: true
# Fonctionnalités de nourriture
foodFeatures:
  # La nutrition de la nourriture
  nutrition: 1
  # La saturation de la nourriture
  saturation: 1
  # La nourriture est-elle de la viande?
  isMeat: false
  # Le joueur peut-il toujours manger cette nourriture?
  canAlwaysEat: false
# Les fonctionnalités de masquage
# Masquer:
# Attributs, Enchantements, ...
hiders:
  # Masquer l'utilisation
  hideUsage: true
# Les activateurs / déclencheurs
activators:
  activator0:
    option: PLAYER_RIGHT_CLICK
    typeTarget: NO_TYPE_TARGET
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - SWING_MAIN_HAND
    - LAUNCH DEFAULT_INVISIBLE_ARROW_NO_GRAVITY_SPEED
  activator5:
    option: PROJECTILE_HIT_ENTITY
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - 'SENDMESSAGE &7You &cunselected &7the entity: &e%entity_name%'
    - score variables list-remove player myList %player% value:%entity_uuid%
    # Les conditions placeholders
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        # La première partie de la condition
        part1: '%score_variables-contains_myList_%entity_uuid%%'
        # La deuxième partie de la condition
        part2: 'true'
    detailedEntities: []
    entityCommands: []
  activator2:
    option: PLAYER_LEFT_CLICK
    typeTarget: NO_TYPE_TARGET
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - FOR %score_variables_myList% > for1
    - score run-entity-command entity:%for1% JUMP 1
    - END_FOR for1
    - DELAYTICK 5
    - FOR %score_variables_myList% > for1
    - score run-entity-command entity:%for1% DAMAGE 100
    - END_FOR for1
    - execute at %player% run playsound minecraft:entity.ender_dragon.death master
      @a
    - score variables clear player myList %player%
    - SEND_MESSAGE &7You &cpulverized &7the selected entities &7but you can do many
      other things let's talk your imagination
    #
    playerConditions:
      ifSneaking: true
      # The message displayed
      # when the condition is not met
      ifSneakingMsg: ''
    # Les conditions placeholders
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_NUMBER
        comparator: SUPERIOR
        # La première partie de la condition
        part1: '%score_variables-size_myList%'
        # La deuxième partie de la condition
        part2: '0'
        # Message si la condition n'est pas valide?
        messageIfNotValid: '&7To execute the ability you must to &cselect at least
          1 entity'
  activator1:
    option: PROJECTILE_HIT_ENTITY
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - 'SEND_MESSAGE &7You &aselected &7the entity: &e%entity_name%'
    - score variables list-add player myList %entity_uuid% %player%
    # Les conditions placeholders
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        # La première partie de la condition
        part1: '%score_variables-contains_myList_%entity_uuid%%'
        # La deuxième partie de la condition
        part2: 'false'
      plchCdt1:
        type: PLAYER_NUMBER
        comparator: INFERIOR
        # La première partie de la condition
        part1: '%score_variables-size_myList%'
        # La deuxième partie de la condition
        part2: '3'
        # Message si la condition n'est pas valide?
        messageIfNotValid: '&4&l>> &7&oYou can''t select more than 3 entities'
    detailedEntities: []
    entityCommands: []
  activator3:
    # Le nom ou nom d'affichage
    name: cancelProjectileSelection
    option: PROJECTILE_HIT_ENTITY
    # Annuler l'événement vanilla
    cancelEvent: true
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands: []
    detailedEntities: []
    entityCommands: []
```


</details>

## ExecutableItems (Item variables)

ExecutableItems has a integration of variables where you can store strings/numbers/list in variables **inside** the item. With them you can create multiple mechanics in your items.

:::info
There are ways to change the variable outside the item, using this methods:\
\

#### Modify a variable

* VIA CONSOLE
  * Command: 
    * /ei console-modification \{set/modification\} variable \{player\} \{slot\} \{variableName\} \{value\}
* VIA on game
  * Command:
    * /ei modification \{set/modification\} variable \{slot\} \{variableName\} \{value\}
:::

To check the placeholders of "Internal item variables" check it here

## ExecutableBlocks (Block variables)

ExecutableBlocks has a integration of variables where you can store strings/numbers/list in variables **inside** the block. With them you can create multiple mechanics in your blocks.

To check the placeholders of "Internal item/block variables" check it here

