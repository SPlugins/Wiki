---
description: >-
  了解如何在 ExecutableItems 中通过 LOOP 激活器和 ifHasExecutableItems
  条件，创建集齐整套护甲才生效的套装加成，附完整步骤。
source_hash: 6cf2ef4cf39ef5e2
translated_at: '2026-11-13T18:02:42.218Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 护甲套装加成

:::tip 新功能：原生套装
ExecutableItems 现在提供原生[套装](/executableitems/configurations/sets-configuration)：每个套装一个文件，支持多个阶段（2 件、4 件等），脱下一件装备时效果和属性会被干净地移除，并且不需要一直运行 LOOP。新套装请使用这种方式。下面的方法仍然可用。
:::

## 开始创建吧！

### 首先创建护甲套装的各个部件

* 在这个示例中，物品的名称如下：\
  头盔 = **nameofhelmet.yml**\
  胸甲 = **nameofchestplate.yml**\
  护腿 = **nameofleggings.yml**\
  靴子 = **nameofboots.yml**

![](https://media.ssomar.com/m/docs-img-image-145.png)

* 创建方法
  * /ei create nameofhelmet -> Save
  * /ei create nameofchestplate -> Save
  * /ei create nameofleggings -> Save
  * /ei create nameofboots -> Save

### 现在创建集齐整套时要触发的激活器

:::info
在这个示例中，我们将创建一套只要穿齐整套就始终给予力量效果的护甲，因此需要一个 LOOP 激活器。你还需要选择其中一件护甲作为"主件"，所有命令都从这一件上运行。在本例中，"主件"是**头盔**。
:::

* 如前所述，激活器将是 **LOOP**

![](https://media.ssomar.com/m/docs-img-image-399.png)

* 我们希望它只在穿戴时生效，所以在 **detailedSlots** 中，将其设置为只在**头部栏位**时生效。

![](https://media.ssomar.com/m/docs-img-image-189.png)

* 对于加成效果，我们将使用原版的效果命令：

```
minecraft:effect give %player% strength 10 0
```

### 整套条件

好了！我们刚刚创建了整套护甲拥有的"能力"，但还需要添加**条件**，确保穿齐整套才生效！

* 进入 Player conditions->ifHasExecutableItems

![](https://media.ssomar.com/m/docs-img-image-193.png)

![](https://media.ssomar.com/m/docs-img-image-172.png)

![](https://media.ssomar.com/m/docs-img-image-332.png)

然后为护甲的另外 3 个部件添加 3 个 IfHasExecutableItem 条件。在本例中，我选择头盔作为主件，所以需要添加胸甲、护腿和靴子。

我先讲解如何添加胸甲这个条件：

* 在上面的图片中，添加一个条件，你会看到如下界面
* ![](https://media.ssomar.com/m/docs-img-image-176.png)
* 第一项是所需的 EI，在本例中，我会向下滚动直到找到胸甲
* ![](https://media.ssomar.com/m/docs-img-image-389.png)
* 选好之后，进入下一个选项 -> "Amount"，设置为 1
* ![](https://media.ssomar.com/m/docs-img-image-258.png)
* 然后是我们希望这个 ExecutableItem 所在的栏位，胸甲就选择胸甲栏位。
* ![](https://media.ssomar.com/m/docs-img-image-179.png)
* ![](https://media.ssomar.com/m/docs-img-image-427.png)

:::info
记得关闭主手栏位，只启用 1 个栏位，也就是你想要的那一个。
:::

* **本例中我们不会使用 usage 条件，所以不要改动它。**
* 然后保存。

另外 2 个部件也要按同样的方式操作，完成后我们一共会有 3 个条件

![](https://media.ssomar.com/m/docs-img-image-249.png)

* 这样就完成了！**保存物品**并测试吧！

![](https://media.ssomar.com/m/docs-img-image-348.png)

成功了！现在，如果你没有穿齐其中某件护甲，条件会提示你……

![](https://media.ssomar.com/m/docs-img-image-384.png)

要关闭这个提示，我们需要再次进入条件编辑器，点击这里

![](https://media.ssomar.com/m/docs-img-image-153.png)

并将其设置为 NO VALUE

![](https://media.ssomar.com/m/docs-img-image-120.png)

这样就好了，保存之后就不会再出现条件提示消息。

好了，全部完成！😁😁😎

:::info
如果你有任何问题，可以在 **Discord** 上提问 ^^

方法由 Special70 提供
:::

示例：


```yaml
name: '&bHelmet'
material: DIAMOND_HELMET
lore:
  - '&7Wearing the full set grants Regeneration'
activators:
  fullSetBonus:
    name: Full Set Bonus
    option: LOOP
    delay: 1 # One second delay
    delayInTick: false # To specify that the delay need to be in seconds
    detailedSlots:
      - 39
    playerCommands:
      - minecraft:effect give %player% minecraft:regeneration 1 0
    playerConditions:
      ifHasExecutableItems:
        condition1_for_checking_chestplate: # 
          executableItem: CustomChestplate
          amount: 1
          detailedSlots:
            - 38
        condition2_for_checking_leggings:
          executableItem: CustomLeggings
          amount: 1
          detailedSlots:
            - 37
        condition3_for_checking_boots:
          executableItem: CustomBoots
          amount: 1
          detailedSlots:
            - 36
```


```yaml
name: '&bChestplate'
material: DIAMOND_CHESTPLATE
lore:
  - '&7Wearing the full set grants Regeneration'
```


```yaml
name: '&bLeggings'
material: DIAMOND_LEGGINGS
lore:
  - '&7Wearing the full set grants Regeneration'
```


```yaml
name: '&bBoots'
material: DIAMOND_BOOTS
lore:
  - '&7Wearing the full set grants Regeneration'
```
