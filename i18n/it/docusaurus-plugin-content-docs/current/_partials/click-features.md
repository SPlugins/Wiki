---
description: >-
  Scopri la funzione detailedClick di ExecutableItems: limita l'attivatore al
  solo clic destro, al solo clic sinistro oppure a entrambi i tipi di clic.
source_hash: cbb8e21c8345cc14
translated_at: '2026-11-13T17:45:24.108Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedClick

* Info: funzione che limita l'attivazione dell'attivatore solo se nell'evento è coinvolto il clic corretto.
  * detailedClick
    * RIGHT: limita l'attivatore in modo che funzioni solo quando l'evento è avvenuto con il clic destro
    * LEFT: limita l'attivatore in modo che funzioni solo quando l'evento è avvenuto con il clic sinistro
    * RIGHT\_OR\_LEFT: non limita il tipo di clic per questo attivatore, accetterà sia il clic destro che quello sinistro.
* Esempio: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    detailedClick: LEFT
```
