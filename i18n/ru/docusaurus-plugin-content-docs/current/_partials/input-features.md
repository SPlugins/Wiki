---
description: >-
  Описание активатора detailedInput в плагине SPlugins: ограничение срабатывания
  триггера по конкретному вводу игрока.
source_hash: e1ff368111ad4dd5
translated_at: '2026-10-03T10:52:54.753Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### detailedInput

* Info: Функция, которая ограничивает срабатывание триггеров активатора только в случае, если в событии задействован правильный ввод.
  * detailedClick
    * LEFT_PRESS
    * LEFT_RELEASE
    * RIGHT_PRESS
    * RIGHT_RELEASE
    * FORWARD_PRESS
    * FORWARD_RELEASE
    * BACKWARD_PRESS
    * BACKWARD_RELEASE
    * JUMP_PRESS
    * JUMP_RELEASE
    * SNEAK_PRESS
    * SNEAK_RELEASE
    * SPRINT_PRESS
    * SPRINT_RELEASE

* Пример: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_INPUT
    detailedInputk: FORWARD_PRESS
```
