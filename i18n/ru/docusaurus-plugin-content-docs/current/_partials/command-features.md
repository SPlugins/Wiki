---
description: >-
  Описание функции detailedCommands в SPlugins: настройка команд как условия
  запуска активатора.
source_hash: 81cd8e66ccc35e49
translated_at: '2026-10-03T10:35:52.048Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedCommands

* Информация: функция для активаторов, связанная с командами, здесь вы можете выбрать в качестве условия команду, при вводе которой активатор должен срабатывать.
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
