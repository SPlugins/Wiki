---
description: >-
  Explica a configuração desactiveDrops do ExecutableBlocks, usada para impedir
  o loot vanilla ao quebrar blocos ou matar mobs.
source_hash: 8065c44e1f6b0b11
translated_at: '2026-10-03T10:48:40.469Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### desactiveDrops

* Info: Valor booleano que permite ou impede que o loot vanilla seja dropado ao quebrar blocos ou matar mobs. Como é um drop vanilla, drops personalizados de mobs personalizados, por exemplo (MythicMobs), não serão afetados por isso.
* Example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_DROP # replace that with the correct activator name
    desactiveDrops: true
```
