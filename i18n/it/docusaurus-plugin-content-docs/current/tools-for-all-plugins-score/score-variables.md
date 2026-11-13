---
description: >-
  Scopri come usare le SCore Variables: tipi, ambiti, comandi e placeholder per
  salvare stringhe, numeri e liste con SCore, EI ed EB.
source_hash: 03903712f9f8f788
translated_at: '2026-11-13T17:45:17.854Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 🧮   SCore Variables

## Variabili SCore

SCore ha un'integrazione di variabili in cui puoi salvare stringhe/numeri in variabili a livello globale o per giocatore. Non sono integrate in EI o EB, ma sono integrate come comandi (quindi possono essere usate in combinazione con EI / EB)

Vengono salvate in `plugins/Score/variables`

### Tipi di variabile

| Tipo       | Spiegazione                        |
| ---------- | ---------------------------------- |
| **STRING** | Ti permette di salvare del testo   |
| **NUMBER** | Ti permette di salvare un numero   |
| LIST       | Ti permette di salvare più valori  |

### Ambito della variabile (For)

| Tipo       | Spiegazione                                                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **GLOBAL** | Una variabile salvata a livello globale ha un solo valore, uguale per tutti                                                                     |
| **PLAYER** | Una variabile salvata per ogni giocatore ha un valore indipendente per ciascuno. Quindi il valore di due giocatori diversi può non essere lo stesso. |

### Tipi di modifica

| Tipo             | Spiegazione                                                                                                          |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| **SET**          | Imposti un valore statico per la variabile                                                                           |
| **MODIFICATION** | Modifichi la variabile (utile per le variabili INT, per aggiungere un valore a un numero intero o sottrarne uno)     |
| **LIST-ADD**     | Specifico per LIST, aggiunge un nuovo valore alla lista                                                              |
| **LIST-REMOVE**  | Specifico per LIST, rimuove un valore dalla lista                                                                    |

:::danger
Gli ID delle variabili non possono contenere underscore, punti o spazi, ma il - è consentito
:::

## Strumenti per le variabili

* /score variables list
  * Mostra gli ID di tutte le variabili esistenti
* /score variables info \{variable-id\} \[player]
  * Mostra il valore di una variabile specifica (facoltativo: per un giocatore specifico)
* /score variables-create \{variable-id\}
  * Crea una nuova variabile con l'id indicato e apre l'editor in-game
* /score variables-define  \{variable-id\} \{type\_of\_variable\} \{for\} \[material\_icon] \[default\_values...]
  * Permette di creare una nuova variabile tramite un comando
* /score variables-delete \{variable-id\}
  * Elimina la variabile con l'id indicato
* /score variables
  * Apre l'editor in-game delle variabili
* /score variables clear \{type\_of\_variable\} \{variable-id\} \[player]
  * Azzera il valore della variabile (facoltativo: per un giocatore specifico)
  * Se sostituisci \[player] con **all,** azzererà il valore per tutti i giocatori
* /score variables set-default \{variable-id\} \{value\}
  * Cambia il valore predefinito della variabile (una sola parola, senza spazi). Viene salvato nel file della variabile, quindi rimane anche dopo un reload
* /score variables \{modification\_type\} \{variable\_scope\} \{variable-id\} \{value\} \[player]
  * Ti permette di modificare il valore di una variabile esistente.
  * Esempi:
    * **Variabili GLOBAL**:
      * /score variables SET GLOBAL exemple1 100
        * Imposta il valore 100 per la variabile globale exemple1
      * /score variables MODIFICATION GLOBAL plop 100
        * Aumenta la variabile globale plop di +100
      * /score variables MODIFICATION GLOBAL plop -50
        * Diminuisce la variabile globale plop di -50
    * **Variabili PLAYER**
      * /score variables SET PLAYER my-variable -20 Ssomar
        * Imposta il valore -20 per la variabile my-variable per il giocatore Ssomar
      * /score variables MODIFICATION PLAYER my-variable -50 Ssomar
        * Diminuisce la variabile del giocatore my-variable di -50 per Ssomar
    * **Esempi specifici per il tipo LIST**
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT1 Ssomar
        * Aggiunge valori alla lista
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT3 Ssomar index:0
        * Per specificare la posizione in cui aggiungere il valore nella lista usa la funzione index (0 è il primo elemento della lista, quindi TEXT3 verrà aggiunto all'inizio della lista)
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar
        * Rimuove l'ultimo valore
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar index:0
        * Rimuove un indice specifico
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar value\:Test
        * Rimuove un valore specifico

:::info
Le variabili di tipo lista funzionano anche con le variabili GLOBAL, ma al posto di PLAYER devi usare GLOBAL e rimuovere il giocatore dal comando
:::

## Placeholder delle variabili

Richiede [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/).

* %score\_variables\_\<variable-id>%
* %score\_variables\_\<variable-id>\_int%

:::info
Dato che i placeholder delle variabili di SCore sono supportati da PlaceholderAPI, puoi usare le variabili di SCore in questo modo:

`%math_{score_variables_userLevel}*10%`
:::

#### Placeholder specifici per LIST

* %score\_variables\_\<variable-id>\_\<index>%
  * Restituisce il valore all'indice specificato della lista
  * L'indice può provenire da un altro placeholder scritto tra parentesi, che viene analizzato per primo: `%score_variables_myList_{score_variables_myIndex_int}%`
* %score\_variables\_\<variable-id>%
  * Restituisce tutti gli elementi della lista
* %score\_variables-contains\_\<variable-name>\_\<value>%
  * Restituisce un booleano per verificare se la lista contiene un valore (true o false)
* %score\_variables-size\_\<variable-name>%
  * Restituisce la dimensione della lista

Cosa puoi fare con questa funzione -> Item creato da Ssomar

<details>

<summary>Terminator<br /><br />Ability : <br />- RIGHT CLICK to select entities<br />- SHIFT+RIGHT CLICK to explode them<br /><br />Devi prima creare la variabile, puoi usare questo comando:<br />/score variables-define myList LIST PLAYER<br /></summary>


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

## ExecutableItems (variabili degli item)

ExecutableItems ha un'integrazione di variabili in cui puoi salvare stringhe/numeri/liste in variabili **all'interno** dell'item. Con queste puoi creare diverse meccaniche nei tuoi item.

:::info
Esistono dei modi per cambiare la variabile dall'esterno dell'item, usando questi metodi:\
\

#### Modificare una variabile

* TRAMITE CONSOLE
  * Comando: 
    * /ei console-modification \{set/modification\} variable \{player\} \{slot\} \{variableName\} \{value\}
* TRAMITE il gioco
  * Comando:
    * /ei modification \{set/modification\} variable \{slot\} \{variableName\} \{value\}
:::

Per consultare i placeholder delle «Internal item variables» guarda qui

## ExecutableBlocks (variabili dei blocchi)

ExecutableBlocks ha un'integrazione di variabili in cui puoi salvare stringhe/numeri/liste in variabili **all'interno** del blocco. Con queste puoi creare diverse meccaniche nei tuoi blocchi.

Per consultare i placeholder delle «Internal item/block variables» guarda qui
