---
description: >-
  了解 desactiveDrops 布尔选项：控制破坏方块或击杀生物时是否掉落原版战利品，不影响 MythicMobs 自定义掉落。属于 SCore
  插件文档。
source_hash: 8065c44e1f6b0b11
translated_at: '2026-11-13T18:08:50.496Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### desactiveDrops

* 信息：布尔值，用于允许或阻止在破坏方块或击杀生物时掉落原版战利品。由于这只针对原版掉落，来自自定义生物（例如 MythicMobs）的自定义掉落不会受到影响。
* 示例：

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_DROP # replace that with the correct activator name
    desactiveDrops: true
```
