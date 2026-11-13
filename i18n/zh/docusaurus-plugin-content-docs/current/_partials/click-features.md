---
description: >-
  了解 detailedClick 功能：它可将激活器限制为仅在正确的点击类型（右键、左键或两者）下触发，适用于 SPlugins 的
  ExecutableItems 插件。
source_hash: cbb8e21c8345cc14
translated_at: '2026-11-13T18:08:29.799Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedClick

* 信息：该功能仅在事件中包含正确的点击类型时，才会触发激活器。
  * detailedClick
    * RIGHT：限制激活器仅在事件由右键点击触发时生效
    * LEFT：限制激活器仅在事件由左键点击触发时生效
    * RIGHT\_OR\_LEFT：不限制此激活器的点击类型，左键和右键点击均可触发。
* 示例：

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    detailedClick: LEFT
```
