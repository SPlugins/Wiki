---
description: >-
  Découvrez l'option desactiveDrops : elle active ou désactive les drops vanilla
  lors de la casse de blocs ou de la mort de mobs dans ExecutableBlocks.
source_hash: 8065c44e1f6b0b11
translated_at: '2026-11-13T17:20:54.830Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### desactiveDrops

* Info : valeur booléenne qui permet ou empêche les drops vanilla lors de la casse de blocs ou de la mort de mobs. Comme il s'agit des drops vanilla, les drops personnalisés de mobs personnalisés (par exemple MythicMobs) ne sont pas affectés.
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_DROP # replace that with the correct activator name
    desactiveDrops: true
```
