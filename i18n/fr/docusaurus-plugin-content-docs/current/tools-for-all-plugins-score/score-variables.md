---
description: >-
  Découvrez les SCore Variables : stockez textes, nombres et listes en global ou
  par joueur, avec commandes et placeholders, dans SCore.
source_hash: 03903712f9f8f788
translated_at: '2026-11-13T17:20:11.044Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 🧮   SCore Variables

## SCore Variables

SCore intègre un système de variables dans lequel vous pouvez stocker des chaînes de texte/nombres, de façon globale ou par joueur. Elles ne sont pas intégrées dans EI ou EB, mais elles le sont sous forme de commandes (elles peuvent donc être utilisées en combinaison avec EI / EB)

Elles sont stockées dans `plugins/Score/variables`

### Types de variables

| Type       | Explication                                   |
| ---------- | --------------------------------------------- |
| **STRING** | Permet de stocker du texte                    |
| **NUMBER** | Permet de stocker un nombre                   |
| LIST       | Permet de stocker plusieurs valeurs           |

### Portée de la variable (For)

| Type       | Explication                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **GLOBAL** | Une variable stockée de façon globale n'a qu'une seule valeur, identique pour tout le monde                                                                       |
| **PLAYER** | Une variable stockée pour chaque joueur a une valeur indépendante pour chacun. La valeur de deux joueurs différents peut donc ne pas être la même.                |

### Types de modification

| Type             | Explication                                                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **SET**          | Vous définissez une valeur statique pour la variable                                                                                         |
| **MODIFICATION** | Vous modifiez la variable (utile pour les variables INT, pour ajouter une valeur à un entier ou soustraire une certaine valeur)              |
| **LIST-ADD**     | Spécifique au type LIST, ajoute une nouvelle valeur dans la liste                                                                            |
| **LIST-REMOVE**  | Spécifique au type LIST, retire une valeur de la liste                                                                                       |

:::danger
L'ID des variables ne peut pas contenir d'underscores, de points ni d'espaces, mais - est autorisé
:::

## Outils de variables

* /score variables list
  * Affiche les IDs de toutes les variables existantes
* /score variables info \{variable-id\} \[player]
  * Affiche la valeur d'une variable précise (facultatif : pour un joueur précis)
* /score variables-create \{variable-id\}
  * Crée une nouvelle variable avec l'ID indiqué et ouvre l'éditeur en jeu
* /score variables-define  \{variable-id\} \{type\_of\_variable\} \{for\} \[material\_icon] \[default\_values...]
  * Permet de créer une nouvelle variable à l'aide d'une commande
* /score variables-delete \{variable-id\}
  * Supprime la variable avec l'ID indiqué
* /score variables
  * Ouvre l'éditeur en jeu des variables
* /score variables clear \{type\_of\_variable\} \{variable-id\} \[player]
  * Efface la valeur de la variable (facultatif : pour un joueur précis)
  * Si vous remplacez \[player] par **all,** la valeur sera effacée pour tous les joueurs
* /score variables set-default \{variable-id\} \{value\}
  * Change la valeur par défaut de la variable (un seul mot, sans espaces). Elle est enregistrée dans le fichier de la variable, elle est donc conservée après un reload
* /score variables \{modification\_type\} \{variable\_scope\} \{variable-id\} \{value\} \[player]
  * Permet de modifier la valeur d'une variable existante.
  * Exemples :
    * **Variables GLOBAL** :
      * /score variables SET GLOBAL exemple1 100
        * Définit la valeur 100 pour la variable globale exemple1
      * /score variables MODIFICATION GLOBAL plop 100
        * Augmente la variable globale plop de +100
      * /score variables MODIFICATION GLOBAL plop -50
        * Diminue la variable globale plop de -50
    * **Variables PLAYER**
      * /score variables SET PLAYER my-variable -20 Ssomar
        * Définit la valeur -20 pour la variable my-variable du joueur Ssomar
      * /score variables MODIFICATION PLAYER my-variable -50 Ssomar
        * Diminue la variable de joueur my-variable de -50 pour Ssomar
    * **Exemples spécifiques au type LIST**
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT1 Ssomar
        * Ajoute des valeurs dans la liste
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT3 Ssomar index:0
        * Pour indiquer l'emplacement où ajouter la valeur dans la liste, utilisez la fonctionnalité index (0 est le premier élément de la liste, TEXT3 sera donc ajouté au début de la liste)
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar
        * Retire la dernière valeur
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar index:0
        * Retire un index précis
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar value\:Test
        * Retire une valeur précise

:::info
Les variable-list fonctionnent aussi avec les variables GLOBAL, mais vous devez remplacer PLAYER -> GLOBAL et retirer le joueur dans la commande
:::

## Placeholders de variables

Cela nécessite [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/).

* %score\_variables\_\<variable-id>%
* %score\_variables\_\<variable-id>\_int%

:::info
Comme les placeholders de variables SCore sont pris en charge par PlaceholderAPI, vous pouvez utiliser les SCore Variables de cette façon :

`%math_{score_variables_userLevel}*10%`
:::

#### Placeholders spécifiques aux LIST

* %score\_variables\_\<variable-id>\_\<index>%
  * Renvoie la valeur à l'index précis de la liste
  * L'index peut provenir d'un autre placeholder écrit entre accolades, il est interprété en premier : `%score_variables_myList_{score_variables_myIndex_int}%`
* %score\_variables\_\<variable-id>%
  * Renvoie tous les éléments de la liste
* %score\_variables-contains\_\<variable-name>\_\<value>%
  * Renvoie un booléen indiquant si la liste contient une valeur (true ou false)
* %score\_variables-size\_\<variable-name>%
  * Renvoie la taille de la liste

Ce que vous pouvez faire avec cette fonctionnalité -> Item créé par Ssomar

<details>

<summary>Terminator<br /><br />Ability : <br />- RIGHT CLICK to select entities<br />- SHIFT+RIGHT CLICK to explode them<br /><br />Vous devez d'abord créer la variable, vous pouvez utiliser cette commande :<br />/score variables-define myList LIST PLAYER<br /></summary>


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

ExecutableItems intègre un système de variables dans lequel vous pouvez stocker des chaînes de texte/nombres/listes dans des variables **à l'intérieur** de l'item. Grâce à elles, vous pouvez créer plusieurs mécaniques dans vos items.

:::info
Il existe des moyens de modifier la variable depuis l'extérieur de l'item, avec ces méthodes :\
\

#### Modifier une variable

* VIA LA CONSOLE
  * Commande : 
    * /ei console-modification \{set/modification\} variable \{player\} \{slot\} \{variableName\} \{value\}
* VIA le jeu
  * Commande :
    * /ei modification \{set/modification\} variable \{slot\} \{variableName\} \{value\}
:::

Pour consulter les placeholders des « Internal item variables », consultez-les ici

## ExecutableBlocks (Block variables)

ExecutableBlocks intègre un système de variables dans lequel vous pouvez stocker des chaînes de texte/nombres/listes dans des variables **à l'intérieur** du bloc. Grâce à elles, vous pouvez créer plusieurs mécaniques dans vos blocs.

Pour consulter les placeholders des « Internal item/block variables », consultez-les ici
