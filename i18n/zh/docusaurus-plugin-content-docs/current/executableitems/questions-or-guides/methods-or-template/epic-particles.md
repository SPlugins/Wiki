---
description: >-
  了解从基础到高级的多种为物品添加粒子效果的方法，包括 PARTICLE 命令、原版粒子命令、粒子生成器和 Score particles，适用于
  ExecutableItems。
source_hash: 18699127a4332941
translated_at: '2026-11-13T18:02:49.379Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 史诗级粒子

在本页中，你将学习多种为物品添加粒子的方法，从最基础的到最史诗级/高级的。

### 1) PARTICLE 命令

这个命令在形状上有限制，例如 dust 粒子无法正常工作等等，所以它并不是最好的选择，你可以看看这个链接

[**PARTICLE EI 命令**](/tools-for-all-plugins/custom-commands/player-and-target-commands#particle)

### 2) 原版 particle 命令

将这个命令与“[**如何使用原版命令**](executableitems/questions-or-guides/frequently-asked-questions/how-to-use-vanilla-commands)”教程结合起来，你会得到类似下面的效果

```
execute at <placeholder> run particle....
```

在这里你比上一种方法更自由，但形状依然只是一个平行六面体，并不是最史诗级的效果。

如果你不知道如何使用 particle 命令，可以看看这个链接

[**如何使用 particle 命令**](/executableitems/questions-or-guides/utilities#general-particle-cmd)

[**Particle 命令生成器**](https://www.gamergeeks.net/apps/minecraft/particle-command-generator)

### 3) 粒子生成器

这里有一些用于生成粒子形状的网页，它们对于创作内容非常有用。

其中大多数基于数学方程工作，所以你需要具备一些这方面的预备知识。想了解数学方程如何运作，可以使用 GEOGEBRA。

要把一行命令或一个函数提取成分开的多条命令，你同样需要一些预备知识。

[**第一个链接**](https://100awesome.net/videos/particle-generator/)是一个基于单个命令方块的粒子生成器，同时也有视频教程。

[**第二个链接**](https://cloudwolfyt.github.io/pages/gens/particle-plots.html)更好，它基于数学方程工作，因此你可以获得比上一个多得多的形状。这里也有一个[**视频链接**](https://youtu.be/\_mi1B0IeVWw)。

### 4) Score particles

还有 Score particles，它包含大量预制的形状，你可以通过它们特定的参数进行编辑，以显示你想要显示的效果。更多信息请参阅 [**Score particles**]/tools-for-all-plugins-score/score-particles.md) 教程。
