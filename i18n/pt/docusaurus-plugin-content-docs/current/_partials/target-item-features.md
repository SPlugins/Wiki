---
description: >-
  Veja como configurar targetItemCommands e detailedTargetItems nos ativadores
  do plugin SPlugins (ExecutableItems).
source_hash: 3f72eb20362123f8
translated_at: '2026-10-03T10:49:33.276Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### targetItemCommands

* Informação: Item commands é uma lista de comandos que são executados para o item quando o ativador é acionado.
  * Isso significa que se houver um comando do SCore, exemplo: MODIFY_ITEM_DURABILITY modification:-50000, o item terá sua durabilidade reduzida em 50000.
    * Target item commands personalizados [Target item commands](/tools-for-all-plugins-score/custom-commands/item-commands) disponíveis a partir do SCore
* Exemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: YOUR_ACTIVATOR_WITH_AN_ITEM # replace that with the correct activator name
    targetItemCommands:
    - MODIFY_ITEM_DURABILITY modification:-50
```

### detailedTargetItems

* Informação: Para ativadores que envolvem um item, você pode selecionar como condição o tipo de item(ns) no qual esse ativador será acionado usando esse recurso.
  * Você pode selecionar um item vanilla do Minecraft como:
    * "STONE"
  * Você pode selecionar um item vanilla do Minecraft com NBT como:
    *  `DIRT{CUSTOMMODELDATA:5}`
  * Você pode colocar itens em lista negra usando ! como:
    * "!TORCH"
* Exemplo:

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
