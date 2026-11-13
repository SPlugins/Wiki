---
description: >-
  Scopri come la funzione typeTarget limita un attivatore al click nell'aria, su
  un blocco o a entrambi, con le opzioni disponibili in ExecutableItems.
source_hash: d1859a42c6017172
translated_at: '2026-11-13T17:46:46.663Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### typeTarget

* Info: funzione che limita l'attivatore in modo che venga attivato/triggerato solo quando l'evento si verifica con un certo tipo di click
  * typeTarget
    * ONLY\_AIR: limita l'attivatore in modo che venga attivato/triggerato solo quando l'evento si verifica cliccando solo nell'aria, cioè se hai cliccato su un blocco l'attivatore non verrà triggerato. Non confonderti! Potresti pensare: cosa succede se clicco su un giocatore? Non è un blocco, quindi è "aria"... beh, quell'evento è fuori dall'istanza degli attivatori di tipo PLAYER\_(CLICK): è un'istanza di PLAYER\_CLICK\_ON\_PLAYER, quindi nemmeno in quel caso l'attivatore verrà triggerato, perché deve essere un'istanza di PLAYER\_(CLICK).
    * ONLY\_BLOCK: limita l'attivatore in modo che venga attivato/triggerato solo quando l'evento si verifica cliccando solo su un blocco. Questo significa che se hai cliccato nell'aria l'attivatore non verrà triggerato.
      * Questa funzione rende l'attivatore un attivatore di tipo istanza di blocco, quindi avrà blockCommands.
    * NO\_TYPE\_TARGET: non limita l'attivatore sul tipo di click, entrambi i tipi vengono accettati, sia i click nell'aria sia i click su un blocco.
* Esempio: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    typeTarget: NO_TYPE_TARGET
    playerCommands: []
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    typeTarget: ONLY_BLOCK
    playerCommands: []
    blockCommands: [] # Added because of typeTarget: ONLY_BLOCK which enables the instance of the activator to block instance
```
