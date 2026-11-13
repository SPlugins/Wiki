---
description: >-
  本页介绍 ExecutableItems 插件中的 detailedInput 功能：它会限制激活器的触发器，仅在事件涉及正确的输入时才触发，并列出
  detailedClick 支持的全部按键输入值（如 LEFT_PRESS、JUMP_RELEASE、SNEAK_PRESS 等），同时附有配置示例。
source_hash: e1ff368111ad4dd5
translated_at: '2026-11-13T18:09:21.078Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### detailedInput

* 信息：该功能会限制激活器的触发器，仅当事件涉及正确的输入时才会触发。
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

* 示例：

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_INPUT
    detailedInputk: FORWARD_PRESS
```
