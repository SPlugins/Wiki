---
description: >-
  Описание настройки detailedDamageCauses в SPlugins: выбор типа урона как
  условия для активаторов, получающих или наносящих урон.
source_hash: 2b07f0e42975b7ba
translated_at: '2026-10-03T10:35:59.809Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedDamageCauses

* Информация: функция для активаторов, связанных с уроном, здесь вы можете выбрать в качестве условия тип урона, который получен или нанесен, в зависимости от используемого активатора.
* Пример:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_DAMAGES # replace that with the correct activator name
    detailedDamageCauses:
    - ENTITY_EXPLOSION
```
