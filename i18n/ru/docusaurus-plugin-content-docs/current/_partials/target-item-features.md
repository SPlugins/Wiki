---
description: >-
  Описание настроек targetItemCommands и detailedTargetItems для активаторов в
  плагине SCore.
source_hash: 3f72eb20362123f8
translated_at: '2026-10-03T10:53:14.654Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### targetItemCommands

* Информация: Item commands - это список команд, которые выполняются для предмета, когда срабатывает активатор.
  * Это значит, что если указана SCore команда, например: MODIFY_ITEM_DURABILITY modification:-50000, прочность предмета уменьшится на 50000.
    * Доступны кастомные [Target item commands](/tools-for-all-plugins-score/custom-commands/item-commands) из SCore
* Пример:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: YOUR_ACTIVATOR_WITH_AN_ITEM # replace that with the correct activator name
    targetItemCommands:
    - MODIFY_ITEM_DURABILITY modification:-50
```

### detailedTargetItems

* Информация: Для активаторов, связанных с предметом, вы можете с помощью этой функции выбрать в качестве условия тип(ы) предмета(ов), на которых будет срабатывать этот активатор.
  * Вы можете выбрать ванильный предмет Minecraft, например:
    * "STONE"
  * Вы можете выбрать ванильный предмет Minecraft с NBT, например:
    *  `DIRT{CUSTOMMODELDATA:5}`
  * Вы можете занести предметы в черный список с помощью !, например:
    * "!TORCH"
* Пример:

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
