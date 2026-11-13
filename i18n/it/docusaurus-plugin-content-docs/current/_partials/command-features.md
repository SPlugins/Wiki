---
description: >-
  Scopri come usare detailedCommands e registerCommand per far registrare al
  server i comandi di un attivatore, con completamento Tab. Per ExecutableItems.
source_hash: dd51810cf51b3bae
translated_at: '2026-11-13T17:45:32.346Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedCommands

* Info: funzionalità per gli attivatori che coinvolgono i comandi: qui puoi selezionare come condizione il comando con cui l'attivatore deve essere eseguito.
* Esempio:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_COMMAND # replace that with the correct activator name
    detailedCommands:
    - customHealCommand
    playerCommands:
    - SEND_MESSAGE &dYou have been healed !
    - REGAIN HEALTH 10
```

### registerCommand

* Info: valore booleano, `false` per impostazione predefinita. Solo per `PLAYER_WRITE_COMMAND`. Senza questa opzione, l'attivatore viene eseguito ma il comando non esiste per il server: la barra della chat lo mostra in rosso e il server risponde "Unknown command". Con `registerCommand: true`, i comandi di `detailedCommands` vengono registrati sul server:
  * Niente più "Unknown command", e dalla 1.13+ la barra della chat non mostra più il comando in rosso.
  * Completamento con Tab del nome del comando e delle parole scritte dopo di esso in `detailedCommands` (`/promo summer` e `/promo winter` suggeriscono `summer` e `winter`).
  * Il comando registrato non fa nulla da solo: l'attivatore viene comunque eseguito una sola volta, come prima.
  * Non sostituisce mai un comando esistente (un comando di Minecraft o di un altro plugin): viene mostrato un avviso nella console, nessuna registrazione avviene per questo comando e l'attivatore viene comunque eseguito quando il comando viene scritto.
  * Più attivatori (o ExecutableItems ed ExecutableEvents) possono usare lo stesso comando: viene registrato una sola volta.
  * I comandi registrati seguono le config: vengono aggiornati dopo un reload, un salvataggio dell'editor o un'eliminazione, e rimossi quando il plugin viene disattivato.
  * Un attivatore con `registerCommand: true` ma senza `detailedCommands` non registra nulla.
* Esempio:

```yaml
activators:
  activator1:
    option: PLAYER_WRITE_COMMAND
    detailedCommands:
    - promo summer
    - promo winter
    registerCommand: true
    playerCommands:
    - SEND_MESSAGE &aPromo: %arg1%
```
