---
description: >-
  了解 ExecutableItems 中 targetItemCommands 与 detailedTargetItems
  的用法：为目标物品执行命令，并按原版物品、NBT 或黑名单筛选触发条件。
source_hash: 3f72eb20362123f8
translated_at: '2026-11-13T18:09:39.304Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### targetItemCommands

* 信息：物品命令是一个命令列表，当激活器触发时，这些命令会针对该物品执行。
  * 这意味着，如果其中包含 SCore 命令，例如 MODIFY_ITEM_DURABILITY modification:-50000，该物品的耐久度将减少 50000。
    * SCore 提供自定义的 [Target item commands](/tools-for-all-plugins-score/custom-commands/item-commands)
* 示例：

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: YOUR_ACTIVATOR_WITH_AN_ITEM # replace that with the correct activator name
    targetItemCommands:
    - MODIFY_ITEM_DURABILITY modification:-50
```

### detailedTargetItems

* 信息：对于涉及物品的激活器，你可以使用此功能，将触发该激活器的物品类型设置为条件。
  * 你可以选择 Minecraft 原版物品，例如：
    * "STONE"
  * 你可以选择带有 NBT 的 Minecraft 原版物品，例如：
    *  `DIRT{CUSTOMMODELDATA:5}`
  * 你可以使用 ! 将物品加入黑名单，例如：
    * "!TORCH"
* 示例：

```yaml
activators:
  activator3: # Activator ID, you can create as many activator on the activators list  
    option: YOUR_ACTIVATOR_WITH_AN_ITEM # replace that with the correct activator name
    detailedTargetItems:
      items:
      - DIRT{CUSTOMMODELDATA:5}
      - !TORCH
      cancelEventIfNotValid: false
      messageIfNotValid: '&4&l[Error] &cthe item is not correct !'
```
