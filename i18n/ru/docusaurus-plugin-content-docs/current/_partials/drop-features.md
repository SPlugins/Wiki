---
description: >-
  Описание параметра desactiveDrops в SPlugins: отключение ванильного лута при
  разрушении блоков или убийстве мобов.
source_hash: 8065c44e1f6b0b11
translated_at: '2026-10-03T10:36:08.167Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### desactiveDrops

* Информация: логическое (Boolean) значение, которое разрешает или запрещает выпадение ванильного лута при разрушении блоков или убийстве мобов. Поскольку речь идёт о ванильном луте, кастомные дропы с кастомных мобов, например (MythicMobs), этим параметром не затрагиваются.
* Пример: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_DROP # replace that with the correct activator name
    desactiveDrops: true
```
