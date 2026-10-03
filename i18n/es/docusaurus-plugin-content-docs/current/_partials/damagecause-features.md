---
description: >-
  Explica detailedDamageCauses en SPlugins: cómo usar el tipo de daño como
  condición en activadores de ExecutableItems.
source_hash: 2b07f0e42975b7ba
translated_at: '2026-10-03T10:35:56.000Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedDamageCauses

* Info: Función para activadores que implican daño, aquí puedes seleccionar como condición el tipo de daño recibido o infligido, según el activador que estés usando.
* Ejemplo:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_DAMAGES # replace that with the correct activator name
    detailedDamageCauses:
    - ENTITY_EXPLOSION
```
