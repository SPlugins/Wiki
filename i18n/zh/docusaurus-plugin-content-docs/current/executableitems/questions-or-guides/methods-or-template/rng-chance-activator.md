---
description: >-
  本页讲解如何在 ExecutableItems 中利用 RNG 条件和 RECEIVE_HIT_BY_GLOBAL
  激活器，让物品按概率取消受到的攻击，制作忍者盔甲的闪避效果，需配合 PlaceholderAPI 与 RNG
  Expansion，并说明如何设置所需的概率百分比。
source_hash: e2c9077e189d3702
translated_at: '2026-11-13T12:11:44.913Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# RNG Chance 激活器

前段时间我想做一套忍者盔甲（NINJA Armor），想法是：有些攻击会被闪避，有些不会，但这个"闪避"该怎么实现呢？经过很长时间的思考，我想出了这个方法，下面来讲解一下。

:::info
本教程会围绕上面提到的例子展开，但重点是让你掌握这个方法的核心思路，然后按自己的需求去应用。
:::

### 创建物品

:::info
**物品**本身需要付费版 + PlaceholderAPI + RNG Expansion
:::

![](https://media.ssomar.com/m/docs-img-image-204.png)

* 添加好名称、lore 和材质之后……

![](https://media.ssomar.com/m/docs-img-image-237.png)

### 创建施展魔法的激活器

* 首先，思路是创建一个 RECEIVE\_HIT\_BY\_GLOBAL 并取消事件。

<img src="https://media.ssomar.com/m/docs-img-imgur-ywpudsl.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-qj9rwav.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-tpgpdss.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-yi878ll.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-4wtkxti.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-bw6zczo.png" alt="" />

* 现在它会取消每一次受到的攻击。要让它有时取消、有时不取消，我们需要让激活器本身只在某些时候运行，因此要添加一个与 RNG 相关的条件。核心思路是：生成 1 到 4 之间的随机数，如果等于 1，激活器就会运行，概率为 25% -> 这正是我们想要的概率，下面来添加它。
*

    <img src="https://media.ssomar.com/m/docs-img-imgur-riqfiao.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-6q81hpl.png" alt="" />

PLAYER\_NUMBER

![](https://media.ssomar.com/m/docs-img-image-178.png)

在第一部分填入 "%rng\_1,4%"（这需要 PlaceholderAPI 和 RNG Expansion）

![](https://media.ssomar.com/m/docs-img-image-111.png)

EQUALS

![](https://media.ssomar.com/m/docs-img-image-175.png)

"1"（因为我们希望只有当 1 到 4 之间的随机数等于 1 时才触发）

![](https://media.ssomar.com/m/docs-img-image-224.png)

这样物品就完成了

:::info
为了方便调试，我会让激活器在闪避时说 "dodge"，如果占位符不匹配，则说 "didn't dodge"。\
\
这样测试时，我们就能知道它是否正常工作。
:::

![](https://media.ssomar.com/m/docs-img-image-378.png)

成功了，激活器每 4 次中只会运行 1 次。

如果有任何问题，欢迎到 EI 的 Discord 中提问，祝你愉快 :P

## 如何设置正确的数值以获得你想要的百分比

<iframe width="560" height="315" src="https://www.youtube.com/embed/jXTDlqoE8dc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
