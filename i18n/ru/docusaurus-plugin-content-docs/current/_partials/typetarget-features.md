---
description: >-
  Описание функции typeTarget в SPlugins: ограничение активатора по типу клика
  (воздух, блок или без ограничений).
source_hash: d1859a42c6017172
translated_at: '2026-10-03T10:53:41.641Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### typeTarget

* Информация: Функция, которая ограничивает активатор так, что он будет активироваться/срабатывать только при возникновении события с определённым типом клика
  * typeTarget
    * ONLY\_AIR: Ограничивает активатор так, что он будет активироваться/срабатывать только при возникновении события при клике только по воздуху, то есть если вы кликнули по блоку, активатор не сработает. Не путайтесь! Вы можете подумать: а что будет, если я кликну по игроку? Это не будет блоком, значит это "воздух"... но даже это находится вне экземпляра активаторов типа PLAYER\_(CLICK), так как это событие является экземпляром PLAYER\_CLICK\_ON\_PLAYER, поэтому активатор тоже не сработает, он должен быть экземпляром PLAYER\_(CLICK).
    * ONLY\_BLOCK: Ограничивает активатор так, что он будет активироваться/срабатывать только при возникновении события с кликом только по блоку. Это значит, что если вы кликнули по воздуху, активатор не сработает.
      * Эта функция делает активатор активатором блочного экземпляра, поэтому у него появятся blockCommands.
    * NO\_TYPE\_TARGET: Не ограничивает активатор по типу клика, принимаются оба типа: клики по воздуху и клики по блоку.
* Пример: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    typeTarget: NO_TYPE_TARGET
    playerCommands: []
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    typeTarget: ONLY_BLOCK
    playerCommands: []
    blockCommands: [] # Added because of typeTarget: ONLY_BLOCK which enables the instance of the activator to block instance
```
