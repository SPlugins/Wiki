---
description: >-
  Découvrez la fonctionnalité detailedDamageCauses des activateurs
  d'ExecutableItems : choisissez comme condition le type de dégâts reçus ou
  infligés.
source_hash: 2b07f0e42975b7ba
translated_at: '2026-11-13T17:20:47.286Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedDamageCauses

* Info : fonctionnalité pour les activateurs liés aux dégâts. Vous pouvez y sélectionner comme condition le type de dégâts qui est reçu ou infligé, selon l'activateur que vous utilisez.
* Exemple :

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_DAMAGES # replace that with the correct activator name
    detailedDamageCauses:
    - ENTITY_EXPLOSION
```
