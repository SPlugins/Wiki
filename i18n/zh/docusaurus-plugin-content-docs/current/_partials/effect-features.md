---
description: 了解 ExecutableItems 插件中 detailedEffects 激活器功能：选择效果类型作为条件，在对应效果出现时触发激活器，并附带配置示例。
source_hash: 064a6b682a182425
translated_at: '2026-11-13T18:08:56.119Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedEffects

* 信息：与效果相关的激活器功能，在这里你可以选择涉及的效果类型作为条件来触发激活器。
* 示例：

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
