---
description: >-
  Explicación de desactiveDrops en SPlugins: evita que se suelten drops vanilla
  al romper bloques o matar mobs.
source_hash: 8065c44e1f6b0b11
translated_at: '2026-10-03T10:36:02.902Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### desactiveDrops

* Info: Valor booleano que permite o impide que se suelte el loot vanilla al romper bloques o matar mobs. Dado que son drops vanilla, los drops personalizados de mobs personalizados, por ejemplo (MythicMobs), no se verán afectados por esto.
* Ejemplo: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_DROP # replace that with the correct activator name
    desactiveDrops: true
```
