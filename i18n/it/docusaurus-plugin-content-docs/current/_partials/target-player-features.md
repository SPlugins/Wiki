---
description: >-
  Scopri come usare targetCommands, targetConditions e i placeholder del
  giocatore bersaglio negli attivatori di ExecutableItems, con esempi pratici.
source_hash: 8f10e4518745e33e
translated_at: '2026-11-13T17:46:39.856Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### targetCommands

I comandi sono un elenco di comandi eseguiti dalla console quando l'attivatore soddisfa tutte le condizioni e i requisiti. Qui puoi usare comandi vanilla, comandi di SCore e comandi di altri plugin.

* Tutte le righe di comando di questo elenco vengono prima elaborate con i placeholder di Ssomar Plugins e poi con PAPI. 
  * Ti consigliamo di consultare [Placeholders](/tools-for-all-plugins-score/placeholders) per vedere quali placeholder puoi usare in ogni attivatore.
* Nei comandi esistono tre tipi di entità bersaglio
  * Player: è il giocatore/utente che ha fatto scattare l'attivatore sull'ExecutableItem.
  * Target: è il giocatore bersaglio/nemico coinvolto in un attivatore.
  * Entity: è l'entità/mob/nemico coinvolto in un attivatore.
* Info: i comandi target sono un elenco di comandi che normalmente vengono eseguiti sul bersaglio quando l'attivatore scatta.
  * Questo significa che se contiene un comando di SCore DAMAGE 5 e si trova in targetCommands, il danno verrà applicato al bersaglio/nemico coinvolto nell'attivatore.
  * Si dice "normalmente eseguiti sul giocatore" perché questo vale per i comandi di SCore: ricorda che puoi usare anche comandi di altri plugin o comandi vanilla, quindi se aggiungi "effect give %player% strength 5 5", anche se si trova in targetCommands, l'elaborazione dei placeholder applicherà il cooldown a %player%. Se vuoi applicare questo comando al bersaglio, usa %target%. Maggiori informazioni su [Placeholders](/tools-for-all-plugins-score/placeholders)
  * Puoi consultare l'elenco dei targetCommands qui -> [Player & Target commands](/tools-for-all-plugins-score/custom-commands/player-and-target-commands)
* Esempio:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    targetCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%
    - effect give %target% slowness 5 5 true
    - SEND_MESSAGE &7Your feets are heavier than before, eh ?
```

* È importante capire che se il tuo attivatore ha anche un giocatore, puoi usare i playerCommands, così possiamo avere per esempio: 

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

* Tipo di categoria di attivatore: PLAYER\_TARGET
* Info: funzionalità per gli attivatori che coinvolgono un giocatore bersaglio; qui puoi impostare le condizioni per il giocatore bersaglio coinvolto.
* [Target conditions](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### Target player placeholders

Quando il secondo attore dell'evento è un giocatore, puoi usare nella configurazione del tuo attivatore (comandi, condizioni, altro...) [i placeholder del giocatore bersaglio](/tools-for-all-plugins-score/placeholders#-player-placeholders)
