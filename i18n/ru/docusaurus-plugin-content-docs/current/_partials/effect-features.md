---
description: >-
  Описание условия detailedEffects в SPlugins: выбор типа эффекта для активатора
  при настройке триггеров.
source_hash: 064a6b682a182425
translated_at: '2026-10-03T10:36:08.919Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedEffects

* Информация: функция для активаторов, связанных с эффектами, здесь вы можете выбрать в качестве условия тип эффекта, участвующего в запуске активатора.
* Пример:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_EFFECT # replace that with the correct activator name
    detailedEffects:
      effects:
      - SPEED
      cancelEventIfNotValid: true
      messageIfNotValid: '&cYou cant use the activator since you dont meet the effect
        condition'
```
