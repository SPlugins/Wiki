---
description: >-
  Scopri come usare entityCommands, detailedEntities, entityConditions e i
  placeholder delle entità negli attivatori di ExecutableItems.
source_hash: 54a0eb1b19c50558
translated_at: '2026-11-13T17:46:01.227Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### entityCommands

I comandi sono un elenco di comandi eseguiti dalla console quando l'attivatore si attiva, se soddisfa tutte le condizioni e i requisiti. Puoi usare comandi vanilla, comandi di SCore e comandi di altri plugin.

* Tutte le righe di comando di questo elenco vengono elaborate prima con i placeholder di Ssomar Plugins e poi tramite PAPI.
  * Ti consigliamo di consultare [Placeholder](/tools-for-all-plugins-score/placeholders) per vedere quali placeholder puoi usare in ogni attivatore.
* Esistono tre tipi di bersaglio per i comandi
  * Player: è il giocatore/utente che ha attivato l'attivatore sull'ExecutableItem.
  * Target: è il giocatore bersaglio/nemico coinvolto in un attivatore.
  * Entity: è l'entità/mob/nemico coinvolto in un attivatore.
* Tipo di categoria di attivatore: PLAYER\_ENTITY
* Info: elenco di comandi che normalmente vengono eseguiti contro l'entità quando l'attivatore si attiva.
  * Per entità si intende l'entità/mob/nemico coinvolto in un attivatore.
  * Sappiamo che il giocatore è considerato un'entità, ma l'entità coinvolta negli attivatori è solo il mob/nemico coinvolto nell'evento.
  * Puoi consultare l'elenco dei comandi per le entità qui: [Comandi delle entità](/tools-for-all-plugins-score/custom-commands/entity-commands)
* Esempio:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY # replace that with the correct activator name
    entityCommands:
    - DAMAGE 10
    - BURN 5
```

* È importante capire che se il tuo attivatore coinvolge anche un giocatore, puoi usare i playerCommands, così da avere per esempio:

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

* Info: per gli attivatori che coinvolgono un'entità, puoi usare questa funzione per selezionare come condizione il tipo di entità su cui l'attivatore si attiverà.
  * Puoi selezionare un'entità vanilla di Minecraft (info: [Elenco EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)) come:
    * "ZOMBIE"
  * <CustomTag type="premium" /> Richiede il [plugin NBTAPI](https://modrinth.com/plugin/nbtapi). Puoi selezionare un mob vanilla di Minecraft con NBT (info: [Tag NBT delle entità](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities)) come:
    *  `ZOMBIE{isBaby:1}`
    * `ZOMBIE{CustomName:"*"}`
  * Puoi selezionare un mob di MythicMobs come:
    * "MM-\<ID>"
  * Puoi mettere in blacklist un mob usando ! come:
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

* Info: funzione per gli attivatori che coinvolgono un'entità, qui puoi impostare le condizioni per l'entità coinvolta.
* [Condizioni delle entità](/tools-for-all-plugins-score/custom-conditions/entity-conditions.md)

### Placeholder delle entità

Quando l'attore principale dell'evento è un'entità, puoi usare nella configurazione del tuo attivatore (comandi, condizioni, altro...) [i placeholder delle entità](/tools-for-all-plugins-score/placeholders#entity-placeholders)
