---
description: >-
  Scopri come usare playerCommands, playerConditions e i placeholder del
  giocatore negli attivatori di ExecutableItems e SCore, con esempi e link
  utili.
source_hash: 6c1515db5b50e18e
translated_at: '2026-11-13T17:46:18.199Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### playerCommands

I comandi sono una lista di comandi eseguiti dalla console quando l'attivatore soddisfa tutte le condizioni e i requisiti. Puoi usare qui i comandi vanilla, i comandi di SCore e i comandi di altri plugin.

* Tutte le righe di comando di questa lista vengono elaborate prima con i placeholder dei plugin di Ssomar e poi tramite PAPI.
  * Ti consigliamo di consultare la [lista dei placeholder](/tools-for-all-plugins-score/placeholders) per vedere quali placeholder puoi usare in ogni attivatore.

* Info: i player commands sono una lista di comandi che normalmente vengono eseguiti sul giocatore quando l'attivatore scatta.
  * Questo significa che se contiene un comando di SCore, ad esempio DAMAGE 5, il danno verrà applicato all'utente dell'ExecutableItem.
    * [Comandi del giocatore](/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md) personalizzati disponibili da SCore
  * Puoi anche eseguire comandi di altri plugin o comandi vanilla. Questi comandi verranno eseguiti dalla console.
    * `minecraft:say Hey`
    * `money give %player% 500`
* Esempio:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_RIGHT_CLICK
    playerCommands:
    - SEND_MESSAGE &eHey ! I am a message and the player who triggered this activator
      can see it ^^
    - effect give %player% regeneration 5 5 true
    - SEND_MESSAGE &dYou received regeneration :P
```

### playerConditions

* Info: puoi usare queste condizioni in tutti i tipi di attivatore
* [Condizioni del giocatore](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### Player placeholders

Quando l'attore principale dell'evento è un giocatore, puoi usare nella configurazione del tuo attivatore (comandi, condizioni, altro...) [i placeholder del giocatore](/tools-for-all-plugins-score/placeholders#player-placeholders)
