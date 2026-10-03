---
description: >-
  Описание функции detailedClick в SPlugins: как ограничить срабатывание
  активатора конкретным типом клика (правый, левый или оба).
source_hash: cbb8e21c8345cc14
translated_at: '2026-10-03T10:35:44.769Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedClick

* Информация: Функция, которая ограничивает срабатывание триггеров активатора только при правильном клике в событии.
  * detailedClick
    * RIGHT: Ограничивает активатор так, что он срабатывает только при событии с правым кликом
    * LEFT: Ограничивает активатор так, что он срабатывает только при событии с левым кликом
    * RIGHT\_OR\_LEFT: Не ограничивает тип клика для этого активатора, он будет разрешать и правый, и левый клик.
* Пример: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    detailedClick: LEFT
```
