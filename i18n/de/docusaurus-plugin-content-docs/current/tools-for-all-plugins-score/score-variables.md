---
description: >-
  Erfahre, wie du mit SCore Variablen als STRING, NUMBER oder LIST global oder
  pro Spieler speicherst, per Befehl änderst und per Platzhalter abrufst.
source_hash: 03903712f9f8f788
translated_at: '2026-11-13T17:33:47.530Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 🧮   SCore Variables

## SCore-Variablen

Score bietet eine Integration von Variablen, in denen du Strings/Zahlen global oder pro Spieler speichern kannst. Sie sind nicht direkt in EI oder EB integriert, aber als Befehle eingebunden (sodass sie in Kombination mit EI / EB verwendet werden können)

Sie werden in `plugins/Score/variables` gespeichert

### Variablentypen

| Typ        | Erklärung                                      |
| ---------- | ---------------------------------------------- |
| **STRING** | Ermöglicht es dir, Text zu speichern           |
| **NUMBER** | Ermöglicht es dir, Zahlen zu speichern         |
| LIST       | Ermöglicht es dir, mehrere Werte zu speichern  |

### Variablen-Scope (For)

| Typ        | Erklärung                                                                                                                                                              |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **GLOBAL** | Eine global gespeicherte Variable bedeutet, dass es einen einzigen Wert gibt, der für alle gleich ist                                                                  |
| **PLAYER** | Eine pro Spieler gespeicherte Variable bedeutet, dass der Wert für jeden Spieler unabhängig ist. Der Wert zweier verschiedener Spieler kann also unterschiedlich sein. |

### Modifikationstypen

| Typ              | Erklärung                                                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **SET**          | Du setzt einen statischen Wert für die Variable                                                                                                |
| **MODIFICATION** | Du änderst die Variable (nützlich für INT-Variablen, um zu einem Integer-Wert etwas zu addieren oder einen bestimmten Wert zu subtrahieren)    |
| **LIST-ADD**     | Speziell für LIST, fügt einen neuen Wert zur Liste hinzu                                                                                       |
| **LIST-REMOVE**  | Speziell für LIST, entfernt einen Wert aus der Liste                                                                                           |

:::danger
Die IDs der Variablen dürfen keine Unterstriche, Punkte oder Leerzeichen enthalten, aber - ist erlaubt
:::

## Variablen-Tools

* /score variables list
  * Zeigt die IDs aller vorhandenen Variablen an
* /score variables info \{variable-id\} \[player]
  * Zeigt den Wert einer bestimmten Variable an (optional: für einen bestimmten Spieler)
* /score variables-create \{variable-id\}
  * Erstellt eine neue Variable mit der angegebenen ID und öffnet den In-Game-Editor
* /score variables-define  \{variable-id\} \{type\_of\_variable\} \{for\} \[material\_icon] \[default\_values...]
  * Ermöglicht es, eine neue Variable per Befehl zu erstellen
* /score variables-delete \{variable-id\}
  * Löscht die Variable mit der angegebenen ID
* /score variables
  * Öffnet den In-Game-Editor für Variablen
* /score variables clear \{type\_of\_variable\} \{variable-id\} \[player]
  * Löscht den Wert der Variable (optional: für einen bestimmten Spieler)
  * Wenn du \[player] durch **all,** ersetzt, wird der Wert für alle Spieler gelöscht
* /score variables set-default \{variable-id\} \{value\}
  * Ändert den Standardwert der Variable (ein Wort, keine Leerzeichen). Er wird in der Variablendatei gespeichert und bleibt daher nach einem Reload erhalten
* /score variables \{modification\_type\} \{variable\_scope\} \{variable-id\} \{value\} \[player]
  * Ermöglicht es dir, den Wert einer bestehenden Variable zu ändern.
  * Beispiele:
    * **GLOBAL-Variablen**:
      * /score variables SET GLOBAL exemple1 100
        * Setzt den Wert 100 für die globale Variable exemple1
      * /score variables MODIFICATION GLOBAL plop 100
        * Erhöht die globale Variable plop um +100
      * /score variables MODIFICATION GLOBAL plop -50
        * Verringert die globale Variable plop um -50
    * **PLAYER-Variablen**
      * /score variables SET PLAYER my-variable -20 Ssomar
        * Setzt den Wert -20 für die Variable my-variable für den Spieler Ssomar
      * /score variables MODIFICATION PLAYER my-variable -50 Ssomar
        * Verringert die Spielervariable my-variable für Ssomar um -50
    * **Spezielle Beispiele für den Typ LIST**
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT1 Ssomar
        * Fügt Werte zur Liste hinzu
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT3 Ssomar index:0
        * Um eine Position festzulegen, an der der Wert in die Liste eingefügt wird, nutze die Funktion index (0 ist das erste Element der Liste, TEXT3 wird also am Anfang der Liste eingefügt)
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar
        * Entfernt den letzten Wert
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar index:0
        * Entfernt einen bestimmten Index
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar value\:Test
        * Entfernt einen bestimmten Wert

:::info
Variablen vom Typ LIST funktionieren auch mit GLOBAL-Variablen, du musst dann aber PLAYER -> GLOBAL ändern und den Spieler im Befehl weglassen
:::

## Variablen-Platzhalter

Dafür wird [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) benötigt.

* %score\_variables\_\<variable-id>%
* %score\_variables\_\<variable-id>\_int%

:::info
Da die Platzhalter der SCore-Variablen von PlaceholderAPI unterstützt werden, kannst du die SCore-Variablen so verwenden:

`%math_{score_variables_userLevel}*10%`
:::

#### Spezielle Platzhalter für LIST

* %score\_variables\_\<variable-id>\_\<index>%
  * Gibt den Wert am angegebenen Index der Liste zurück
  * Der Index kann von einem anderen Platzhalter stammen, der in Klammern geschrieben wird und zuerst ausgewertet wird: `%score_variables_myList_{score_variables_myIndex_int}%`
* %score\_variables\_\<variable-id>%
  * Gibt alle Elemente der Liste zurück
* %score\_variables-contains\_\<variable-name>\_\<value>%
  * Gibt einen Boolean zurück, der anzeigt, ob die Liste einen Wert enthält (true oder false)
* %score\_variables-size\_\<variable-name>%
  * Gibt die Größe der Liste zurück

Was du mit dieser Funktion machen kannst -> Item, erstellt von Ssomar

<details>

<summary>Terminator<br /><br />Fähigkeit : <br />- RECHTSKLICK, um Entities auszuwählen<br />- SHIFT+RECHTSKLICK, um sie explodieren zu lassen<br /><br />Du musst zuerst die Variable erstellen, dafür kannst du diesen Befehl verwenden:<br />/score variables-define myList LIST PLAYER<br /></summary>


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

## ExecutableItems (Item-Variablen)

ExecutableItems bietet eine Integration von Variablen, in denen du Strings/Zahlen/Listen **innerhalb** des Items speichern kannst. Damit kannst du mehrere Mechaniken in deinen Items erstellen.

:::info
Es gibt Möglichkeiten, die Variable außerhalb des Items zu ändern, mit diesen Methoden:\
\

#### Eine Variable ändern

* ÜBER DIE KONSOLE
  * Befehl: 
    * /ei console-modification \{set/modification\} variable \{player\} \{slot\} \{variableName\} \{value\}
* IM SPIEL
  * Befehl:
    * /ei modification \{set/modification\} variable \{slot\} \{variableName\} \{value\}
:::

Die Platzhalter für „Internal item variables“ findest du hier

## ExecutableBlocks (Block-Variablen)

ExecutableBlocks bietet eine Integration von Variablen, in denen du Strings/Zahlen/Listen **innerhalb** des Blocks speichern kannst. Damit kannst du mehrere Mechaniken in deinen Blocks erstellen.

Die Platzhalter für „Internal item/block variables“ findest du hier
