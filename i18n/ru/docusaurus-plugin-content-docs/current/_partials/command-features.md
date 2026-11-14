---
description: >-
  Как работают detailedCommands и registerCommand в активаторах с командами:
  условие по команде, регистрация на сервере, автодополнение. Плагин SCore.
source_hash: dd51810cf51b3bae
translated_at: '2026-11-13T18:12:09.647Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedCommands

* Info: Функция для активаторов, связанных с командами: здесь вы можете выбрать в качестве условия команду, с которой должен срабатывать активатор.
* Пример:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_COMMAND # replace that with the correct activator name
    detailedCommands:
    - customHealCommand
    playerCommands:
    - SEND_MESSAGE &dYou have been healed !
    - REGAIN HEALTH 10
```

### registerCommand

* Info: Булево значение, по умолчанию `false`. Только для `PLAYER_WRITE_COMMAND`. Без него активатор срабатывает, но команды не существует для сервера: строка чата показывает её красным, а сервер отвечает "Unknown command". С `registerCommand: true` команды `detailedCommands` регистрируются на сервере:
  * Больше нет "Unknown command", а на 1.13+ строка чата больше не показывает команду красным.
  * Автодополнение по Tab для названия команды и для слов, написанных после неё, в `detailedCommands` (`/promo summer` и `/promo winter` предлагают `summer` и `winter`).
  * Зарегистрированная команда сама по себе ничего не делает: активатор по-прежнему срабатывает только один раз, как и раньше.
  * Она никогда не заменяет существующую команду (команду Minecraft или другого плагина): в консоли выводится предупреждение, для этой команды ничего не регистрируется, а активатор по-прежнему срабатывает при вводе команды.
  * Несколько активаторов (или ExecutableItems и ExecutableEvents) могут использовать одну и ту же команду: она регистрируется один раз.
  * Зарегистрированные команды следуют за конфигами: они обновляются после перезагрузки, сохранения в редакторе или удаления и удаляются при отключении плагина.
  * Активатор с `registerCommand: true`, но без `detailedCommands` ничего не регистрирует.
* Пример:

```yaml
activators:
  activator1:
    option: PLAYER_WRITE_COMMAND
    detailedCommands:
    - promo summer
    - promo winter
    registerCommand: true
    playerCommands:
    - SEND_MESSAGE &aPromo: %arg1%
```
