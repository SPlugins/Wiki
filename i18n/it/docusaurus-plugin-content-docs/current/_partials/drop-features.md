---
description: >-
  Scopri come usare l'opzione desactiveDrops per attivare o bloccare i drop
  vanilla alla rottura di blocchi o all'uccisione di mob in SCore e
  ExecutableItems.
source_hash: 8065c44e1f6b0b11
translated_at: '2026-11-13T17:45:42.544Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### desactiveDrops

* Info: Valore booleano che consente o impedisce il drop del loot vanilla quando si rompono blocchi o si uccidono mob. Trattandosi di drop vanilla, i drop personalizzati dei mob personalizzati, ad esempio (MythicMobs), non ne vengono influenzati.
* Esempio: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_DROP # replace that with the correct activator name
    desactiveDrops: true
```
