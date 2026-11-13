---
description: >-
  了解 ExecutableItems 中 typeTarget 功能的用法：限制激活器仅在点击空气或方块时触发，并包含
  ONLY_AIR、ONLY_BLOCK 等选项说明。
source_hash: d1859a42c6017172
translated_at: '2026-11-13T18:09:57.085Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### typeTarget

* 信息：该功能用于限制激活器，使其仅在事件由特定类型的点击触发时才会被激活/触发
  * typeTarget
    * ONLY\_AIR：限制激活器，使其仅在只点击空气时才会被激活/触发，也就是说，如果你点击了方块，激活器不会被触发。不要搞混了！你可能会想，如果我点击的是玩家呢？玩家不是方块，那算不算"空气"？其实……这种情况已经不属于 PLAYER\_(CLICK) 类型激活器的实例范围了，该事件属于 PLAYER\_CLICK\_ON\_PLAYER 的实例，所以激活器同样不会触发，它必须是 PLAYER\_(CLICK) 的实例。
    * ONLY\_BLOCK：限制激活器，使其仅在只点击方块时才会被激活/触发。这意味着如果你点击了空气，激活器不会被触发。
      * 该功能会使激活器成为方块实例激活器，因此它将拥有 blockCommands。
    * NO\_TYPE\_TARGET：不限制点击类型，两种类型都会被接受，即点击空气和点击方块。
* 示例：

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    typeTarget: NO_TYPE_TARGET
    playerCommands: []
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    typeTarget: ONLY_BLOCK
    playerCommands: []
    blockCommands: [] # Added because of typeTarget: ONLY_BLOCK which enables the instance of the activator to block instance
```
