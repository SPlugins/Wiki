---
description: >-
  Découvrez comment configurer targetItemCommands et detailedTargetItems pour
  cibler et modifier les items d'un activateur dans ExecutableItems.
source_hash: 3f72eb20362123f8
translated_at: '2026-11-13T17:21:47.893Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### targetItemCommands

* Info : les item commands sont une liste de commandes exécutées pour l'item lorsque l'activateur se déclenche.
  * Cela signifie que si elle contient une commande SCore, par exemple : MODIFY_ITEM_DURABILITY modification:-50000, l'item verra sa durabilité réduite de 50000.
    * [Target item commands](/tools-for-all-plugins-score/custom-commands/item-commands) personnalisées disponibles via SCore
* Exemple :

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: YOUR_ACTIVATOR_WITH_AN_ITEM # replace that with the correct activator name
    targetItemCommands:
    - MODIFY_ITEM_DURABILITY modification:-50
```

### detailedTargetItems

* Info : pour les activateurs qui impliquent un item, vous pouvez choisir comme condition le ou les types d'items sur lesquels cet activateur se déclenchera, grâce à cette fonctionnalité.
  * Vous pouvez sélectionner un item vanilla de Minecraft, par exemple :
    * "STONE"
  * Vous pouvez sélectionner un item vanilla de Minecraft avec NBT, par exemple :
    *  `DIRT{CUSTOMMODELDATA:5}`
  * Vous pouvez mettre des items sur liste noire avec !, par exemple :
    * "!TORCH"
* Exemple :

```yaml
activators:
  activator3: # Activator ID, you can create as many activator on the activators list  
    option: YOUR_ACTIVATOR_WITH_AN_ITEM # replace that with the correct activator name
    detailedTargetItems:
      items:
      - DIRT{CUSTOMMODELDATA:5}
      - !TORCH
      cancelEventIfNotValid: false
      messageIfNotValid: '&4&l[Error] &cthe item is not correct !'
```
