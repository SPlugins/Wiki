---
description: >-
  Scopri la funzione detailedDamageCauses degli attivatori di danno: scegli come
  condizione il tipo di danno subito o inflitto. Parte di SCore.
source_hash: 2b07f0e42975b7ba
translated_at: '2026-11-13T17:45:36.833Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedDamageCauses

* Info: funzione per gli attivatori che riguardano il danno: qui puoi selezionare come condizione il tipo di danno che viene subito o inflitto, a seconda dell'attivatore che stai usando.
* Esempio:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_DAMAGES # replace that with the correct activator name
    detailedDamageCauses:
    - ENTITY_EXPLOSION
```
