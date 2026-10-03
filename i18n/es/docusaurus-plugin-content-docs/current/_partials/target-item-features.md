---
description: >-
  Explica las opciones targetItemCommands y detailedTargetItems de los
  activadores en ExecutableItems, el plugin de Ssomar.
source_hash: 3f72eb20362123f8
translated_at: '2026-10-03T10:44:33.054Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### targetItemCommands

* Info: Item commands es una lista de comandos que se ejecutan para el ítem cuando el activador se dispara.
  * Esto significa que si tiene un comando de SCore, por ejemplo: MODIFY_ITEM_DURABILITY modification:-50000, el ítem tendrá su durabilidad reducida en 50000.
    * Comandos [Target item commands](/tools-for-all-plugins-score/custom-commands/item-commands) personalizados disponibles desde SCore
* Ejemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: YOUR_ACTIVATOR_WITH_AN_ITEM # replace that with the correct activator name
    targetItemCommands:
    - MODIFY_ITEM_DURABILITY modification:-50
```

### detailedTargetItems

* Info: Para los activadores que involucran un ítem, puedes seleccionar como condición el tipo de ítem(s) donde este activador se disparará usando esta función.
  * Puedes seleccionar un ítem vanilla de Minecraft como:
    * "STONE"
  * Puedes seleccionar un ítem vanilla de Minecraft con NBT como:
    *  `DIRT{CUSTOMMODELDATA:5}`
  * Puedes poner ítems en lista negra usando ! como:
    * "!TORCH"
* Ejemplo:

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
