---
description: >-
  了解 ExecutableItems 中 detailedDamageCauses
  功能：在涉及伤害的激活器里，按受到或造成的伤害类型设置条件，并附有配置示例。
source_hash: 2b07f0e42975b7ba
translated_at: '2026-11-13T18:08:44.551Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedDamageCauses

* 信息：用于涉及伤害的激活器的功能，你可以在这里选择伤害类型作为条件，具体是受到的伤害还是造成的伤害，取决于你使用的激活器。
* 示例：

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_DAMAGES # replace that with the correct activator name
    detailedDamageCauses:
    - ENTITY_EXPLOSION
```
