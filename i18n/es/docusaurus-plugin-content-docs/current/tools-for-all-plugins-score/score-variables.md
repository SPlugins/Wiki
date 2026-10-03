---
description: >-
  Explica las variables globales y por jugador de SCore, sus tipos, comandos y
  placeholders para ExecutableItems y ExecutableBlocks.
source_hash: 6be0f8b64461a5b8
translated_at: '2026-10-03T10:43:54.477Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 🧮   Variables de SCore

## Variables de SCore

Score tiene una integración de variables donde puedes almacenar strings/números en variables de forma global o por jugador, no están integradas en EI ni EB, pero están integradas como comandos (así que se pueden usar en combinación con EI / EB)

Se almacenan en `plugins/Score/variables`

### Tipos de variables

| Tipo       | Explicación                        |
| ---------- | ----------------------------------- |
| **STRING** | Te permite almacenar texto          |
| **NUMBER** | Te permite almacenar números        |
| LIST       | Te permite almacenar múltiples valores |

### Alcance de la variable (For)

| Tipo       | Explicación                                                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **GLOBAL** | Una variable almacenada de forma global significa que hay un único valor y es el mismo para todos                                               |
| **PLAYER** | Una variable almacenada para cada jugador significa que el valor es independiente para cada jugador. Así que el valor de dos jugadores diferentes puede no ser el mismo. |

### Tipos de modificación

| Tipo             | Explicación                                                                                                          |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| **SET**          | Estableces un valor estático a la variable                                                                            |
| **MODIFICATION** | Modificas la variable (útil para variables INT, para sumar valor a un valor entero, o restar un valor determinado)    |
| **LIST-ADD**     | Específico para LIST, añade un nuevo valor a la lista                                                                 |
| **LIST-REMOVE**  | Específico para LIST, elimina un valor de la lista                                                                    |

:::danger
El ID de las variables no puede tener guiones bajos, puntos o espacios, pero el guion (-) sí está permitido
:::

## Herramientas de variables

* /score variables list
  * Muestra todos los IDs de las variables existentes
* /score variables info \{variable-id\} \[player]
  * Muestra el valor de una variable específica (Opcional: para un jugador específico)
* /score variables-create \{variable-id\}
  * Crea una nueva variable con el id mencionado y abre el editor en el juego
* /score variables-define  \{variable-id\} \{type\_of\_variable\} \{for\} \[material\_icon] \[default\_values...]
  * Permite crear una nueva variable usando un comando
* /score variables-delete \{variable-id\}
  * Elimina la variable con el id mencionado
* /score variables
  * Abre el editor en el juego de las variables
* /score variables clear \{type\_of\_variable\} \{variable-id\} \[player]
  * Limpia el valor de la variable (Opcional: para un jugador específico)
  * Si reemplazas \[player] por **all,** limpiará el valor para todos los jugadores
* /score variables \{modification\_type\} \{variable\_scope\} \{variable-id\} \{value\} \[player]
  * Te permite modificar el valor de una variable existente.
  * Ejemplos:
    * **Variables GLOBAL**:
      * /score variables SET GLOBAL exemple1 100
        * Establece el valor 100 a la variable global exemple1
      * /score variables MODIFICATION GLOBAL plop 100
        * Aumenta la variable global plop en +100
      * /score variables MODIFICATION GLOBAL plop -50
        * Disminuye la variable global plop en -50
    * **Variables PLAYER**
      * /score variables SET PLAYER my-variable -20 Ssomar
        * Establece el valor -20 a la variable my-variable para el jugador Ssomar
      * /score variables MODIFICATION PLAYER my-variable -50 Ssomar
        * Disminuye la variable de jugador my-variable en -50 para Ssomar
    * **Ejemplos específicos para el tipo LIST**
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT1 Ssomar
        * Añade valores a la lista
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT3 Ssomar index:0
        * Para especificar un lugar donde añadir el valor en la lista usa la función index (0 es el primer elemento de la lista, así que añadirá TEXT3 al principio de la lista)
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar
        * Elimina el último valor
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar index:0
        * Elimina un índice específico
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar value\:Test
        * Elimina un valor específico

:::info
Variable-list también funciona con variables GLOBAL, pero en ese caso tendrías que cambiar PLAYER por GLOBAL y quitar el jugador en el comando
:::

## Placeholders de variables

Esto requiere [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/).

* %score\_variables\_\<variable-id>%
* %score\_variables\_\<variable-id>\_int%

:::info
Como los placeholders de variables de SCore son compatibles con PlaceholderAPI, puedes usar las variables de SCore así:

`%math_{score_variables_userLevel}*10%`
:::

#### Placeholders específicos para LIST

* %score\_variables\_\<variable-id>\_\<index>%
  * Devuelve el valor en el índice específico de la lista
* %score\_variables\_\<variable-id>%
  * Devuelve todos los elementos de la lista
* %score\_variables-contains\_\<variable-name>\_\<value>%
  * Devuelve un booleano para ver si la lista contiene un valor (true o false)
* %score\_variables-size\_\<variable-name>%
  * Devuelve el tamaño de la lista

Lo que puedes hacer con esta función -> Ítem creado por Ssomar

<details>

<summary>Terminator<br /><br />Habilidad: <br />- CLIC DERECHO para seleccionar entidades<br />- SHIFT+CLIC DERECHO para hacerlas explotar<br /><br />Primero necesitas crear la variable, puedes usar este comando:<br />/score variables-define myList LIST PLAYER<br /></summary>


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

## ExecutableItems (variables de ítem)

ExecutableItems tiene una integración de variables donde puedes almacenar strings/números/listas en variables **dentro** del ítem. Con ellas puedes crear múltiples mecánicas en tus ítems.

:::info
Hay formas de cambiar la variable desde fuera del ítem, usando estos métodos:\
\

#### Modificar una variable

* VÍA CONSOLA
  * Comando: 
    * /ei console-modification \{set/modification\} variable \{player\} \{slot\} \{variableName\} \{value\}
* VÍA en el juego
  * Comando:
    * /ei modification \{set/modification\} variable \{slot\} \{variableName\} \{value\}
:::

Para consultar los placeholders de las "Internal item variables" revísalo aquí

## ExecutableBlocks (variables de bloque)

ExecutableBlocks tiene una integración de variables donde puedes almacenar strings/números/listas en variables **dentro** del bloque. Con ellas puedes crear múltiples mecánicas en tus bloques.

Para consultar los placeholders de las "Internal item/block variables" revísalo aquí
