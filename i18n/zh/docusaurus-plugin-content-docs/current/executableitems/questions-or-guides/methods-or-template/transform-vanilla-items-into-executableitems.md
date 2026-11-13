---
description: >-
  了解如何通过编辑 YAML 配置，将原版物品（如 diamond_sword）转换为 ExecutableItems 自定义物品，仅限
  ExecutableItems 高级版使用。
source_hash: b79db1c5ed1a524c
translated_at: '2026-11-13T12:11:23.775Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 将原版物品转换为 ExecutableItems

:::info
首先你需要知道，此方法仅适用于高级版（PREMIUM VERSION）
:::

![](https://media.ssomar.com/m/docs-img-executable-items-color3.png)

### 让我们开始创建，首先决定你想要转换哪个原版物品。

* 本教程将使用 **diamond\_sword**

![](https://media.ssomar.com/m/docs-img-image-96.png)

### **然后，我们需要创建用来替换它的物品**

* 要创建物品，请输入 `/ei create <id>` 命令

![](https://media.ssomar.com/m/docs-img-image-194.png)

* 将物品的 Material 改为你要转换的原版物品（本例中为 diamond\_sword）

![](https://media.ssomar.com/m/docs-img-image-168.png)

* 接下来创建一个激活器

![](https://media.ssomar.com/m/docs-img-image-92.png)

* 本例中使用 `PLAYER_CLICK_ON_ENTITY`

![](https://media.ssomar.com/m/docs-img-image-213.png)

* 将 Detailed click 设置为 left，使其仅在攻击时生效

![](https://media.ssomar.com/m/docs-img-image-272.png)

* 然后在命令中填入以下内容：

```yaml
playerCommands:
- SENDMESSAGE §6This is not a normal sword..
- PARTICLE FLAME 50 0.5 0
entityCommands:
- BURN 4
```

* 这样，在攻击时剑会显示 _**This is not a normal sword**_，并且实体会燃烧 4 秒
* 好了！物品已经准备就绪，如果你愿意可以先测试一下（确保 EI 物品正常工作）。现在我们要进行……转换了 😈😈

### 将原版物品转换为创建好的 EI 物品

* 要做到这一点，你首先需要编辑物品的 yml 文件。

:::info
它位于 plugins/ExecutableItems/items/\<itemID>.yml
:::

![](https://media.ssomar.com/m/docs-img-image-195.png)

* 打开该文件并添加以下几行（左侧不能有缩进或空格）

```yaml
recognitions:
- MATERIAL
```

* 现在 ExecutableItems 会将所有与该 EI 物品（即我们刚创建的物品）材质相同的物品都视为这个 EI 物品。
* 保存 \<item>.yml，进入游戏并输入 `/ei reload`

### 来测试一下

* 如果每一步都做对了，现在拿一把原版的 diamond\_sword，靠近一头牛并攻击它 -> 它应该会燃烧 4 秒，出现一些粒子效果，并且你会收到一条消息。

![](https://media.ssomar.com/m/docs-img-image-245.png)

![](https://media.ssomar.com/m/docs-img-image-105.png)

![](https://media.ssomar.com/m/docs-img-image-73.png)![](https://media.ssomar.com/m/docs-img-image-181.png)

* 测试完成，一切正常！耶！！

:::info
有任何问题都可以在 Discord 上提问 ^^

方法由 Special70 提供
:::
