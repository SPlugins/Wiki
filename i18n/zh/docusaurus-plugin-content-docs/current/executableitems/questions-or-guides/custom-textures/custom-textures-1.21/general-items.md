---
description: >-
  本指南详细讲解如何在 Minecraft 1.13 至 1.21.3 版本中，通过 Custom Model Data 和资源包为
  ExecutableItems 的物品制作自定义材质，涵盖文件夹结构、模型文件、pack.mcmeta 配置与常见问题排查。
source_hash: 0009e0522a21f996
translated_at: '2026-11-13T18:02:28.819Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 自定义物品材质（Minecraft 1.13 - 1.21.3）

这份完整的指南将教你如何在 Minecraft 1.13 至 1.21.3 版本中，使用 Custom Model Data 和资源包为物品制作自定义材质。

:::warning 盔甲材质
本教程**不**涵盖盔甲的材质替换。对于盔甲，你需要使用 OptiFine CIT（Custom Item Textures）。请搜索 "OptiFine armor retexturing" 以查找该方法的教程。
:::

:::danger 重要的命名规则
**所有文件和文件夹的名称都必须只使用小写字母。**

使用大写字符会导致材质加载失败。请始终使用 `custom_sword`，而不是 `CustomSword`。
:::

## 视频教程

如果你更喜欢视频形式，本教程基于以下视频：

<iframe width="560" height="315" src="https://www.youtube.com/embed/y-t1YMslFLM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 前提条件

- **文本编辑器**：使用 Notepad++、VS Code 或类似工具（不要使用普通的记事本）
- **图像编辑器**：Photoshop、Paint.NET、GIMP 或 Paint 3D
- **压缩工具**：WinRAR、7-Zip 或操作系统自带的压缩功能
- **基础 JSON 知识**（有帮助，但不是必需）

:::tip 文件扩展名
你创建的所有文件都不是 `.txt` 文件。请确保你的编辑器可以保存 `.json`、`.mcmeta` 和 `.png` 等特定类型的文件。
:::

## 第 1 部分：设置你的 ExecutableItem

### 步骤 1：创建你的物品

首先，创建将使用自定义材质的 ExecutableItem：

```
/ei create my_custom_pickaxe
```

### 步骤 2：配置基本属性

设置物品的显示名称、Lore 以及你想要的其他功能：

```
/ei edit my_custom_pickaxe
```

配置示例：
- **名称**：`&b&lCustom Pickaxe`
- **材质**：`DIAMOND_PICKAXE`
- **Lore**：添加任意描述性文字

## 第 2 部分：制作你的材质

### 步骤 3：设计你的材质图片

使用图像编辑器制作你的自定义材质：

**要求：**
- **格式**：支持透明度的 PNG
- **分辨率**：16x16 像素（或 2 的幂：32x32、64x64、128x128 等）
- **文件名**：使用小写字母和下划线（例如 `custom_pickaxe.png`）

:::tip 图片分辨率
虽然 16x16 是标准分辨率，但你可以使用 32x32 或 64x64 等更高的分辨率来制作更精细的材质。只需保持为 2 的幂即可。
:::

保存好你的材质文件，下一部分会用到它。

## 第 3 部分：构建资源包

### 步骤 4：创建文件夹结构

创建如下文件夹结构：

```
ExecutableItemsTexturePack/
├── pack.mcmeta
├── pack.png (optional)
└── assets/
    └── minecraft/
        ├── textures/
        │   └── item/
        │       └── custom_textures/
        │           └── custom_pickaxe.png
        └── models/
            └── item/
                ├── diamond_pickaxe/
                │   └── 1.json
                └── diamond_pickaxe.json
```

### 步骤 5：创建 pack.mcmeta

在根文件夹中创建 `pack.mcmeta`：

```json
{
  "pack": {
    "pack_format": 15,
    "description": "§eExecutableItems Custom Textures"
  }
}
```

:::info 各版本的 Pack Format
请根据你的 Minecraft 版本选择正确的 `pack_format`：
- **15** = 1.20.5 - 1.21.1
- **34** = 1.20.2 - 1.20.4
- **18** = 1.20 - 1.20.1
- **15** = 1.19.4
- **13** = 1.19.3
- **12** = 1.19 - 1.19.2
- **9** = 1.18 - 1.18.2
- **8** = 1.17 - 1.17.1
- **6** = 1.16.2 - 1.16.5

所有版本请参阅[完整的 pack format 列表](https://minecraft.wiki/w/Pack_format)。
:::

### 步骤 6：添加你的材质文件

1. 进入 `assets/minecraft/textures/item/custom_textures/`
2. 将你的材质 PNG 文件放在这里（例如 `custom_pickaxe.png`）

### 步骤 7：确定基础物品的材质类型

你需要知道基础物品的 Minecraft ID：

1. 在 Minecraft 中按 **F3 + H** 启用高级工具提示
2. 将鼠标悬停在物品上查看它的 ID（例如 `minecraft:diamond_pickaxe`）
3. 文件名使用冒号后面的部分（例如 `diamond_pickaxe`）

![使用高级工具提示显示的物品 ID](https://media.ssomar.com/m/docs-img-image-185.png)

:::warning 关键：使用 Minecraft ID
文件名必须与 Minecraft 物品 ID 一致，而不是：
- ❌ 你的物品显示名称
- ❌ 你的材质文件名
- ❌ 你的 ExecutableItem ID
- ✅ Minecraft 材质 ID（例如 `diamond_pickaxe`）
:::

### 步骤 8：创建基础模型文件

在 `assets/minecraft/models/item/` 中创建 `diamond_pickaxe.json`：

```json
{
    "parent": "minecraft:item/generated",
    "textures": {
        "layer0": "minecraft:item/diamond_pickaxe"
    },
    "overrides": [
        {
            "predicate": {
                "custom_model_data": 1
            },
            "model": "item/diamond_pickaxe/1"
        }
    ]
}
```

**字段说明：**

- `"parent"`：基础模型类型
  - 大多数物品使用 `"generated"`
  - 如果物品手持时看起来不对，请使用 `"handheld"`
- `"layer0"`：默认的原版材质
- `"overrides"`：自定义模型数据映射的数组
- `"custom_model_data"`：你将在 ExecutableItems 中设置的数字
- `"model"`：你的自定义模型文件的路径

:::tip 多个自定义材质
如果要为同一个物品添加更多自定义材质，请添加更多 override 条目：

```json
"overrides": [
    {
        "predicate": {
            "custom_model_data": 1
        },
        "model": "item/diamond_pickaxe/1"
    },
    {
        "predicate": {
            "custom_model_data": 2
        },
        "model": "item/diamond_pickaxe/2"
    },
    {
        "predicate": {
            "custom_model_data": 3
        },
        "model": "item/diamond_pickaxe/3"
    }
]
```
:::

### 步骤 9：创建自定义模型文件

1. 创建文件夹：`assets/minecraft/models/item/diamond_pickaxe/`
2. 在该文件夹内创建文件：`1.json`

`1.json` 的内容：

```json
{
    "parent": "item/handheld",
    "textures": {
        "layer0": "item/custom_textures/custom_pickaxe"
    }
}
```

**理解材质路径：**

`"layer0"` 的值是相对于 `assets/minecraft/textures/` 的路径：
- 路径：`item/custom_textures/custom_pickaxe`
- 完整路径：`assets/minecraft/textures/item/custom_textures/custom_pickaxe.png`

:::danger 常见错误：材质路径不正确
最常见的错误是在 `layer0` 中设置了错误的路径。请仔细检查：
1. 路径与你的文件夹结构一致
2. 不要包含 `.png` 扩展名
3. 路径从 `textures/` 文件夹内部开始
:::

### 步骤 10：打包资源包

#### Windows（WinRAR/7-Zip）：
1. 选中 `pack.mcmeta` 和 `assets` 文件夹
2. 右键 → 添加到压缩文件 / 压缩
3. 选择 `.zip` 格式
4. 命名为 `ExecutableItemsTexturePack.zip`

#### Mac/Linux：
1. 选中 `pack.mcmeta` 和 `assets` 文件夹
2. 使用系统自带的压缩功能压缩为 ZIP
3. 或者放入一个文件夹中，直接用于本地测试

![创建 ZIP 文件](https://media.ssomar.com/m/docs-img-image-244.png)

![更改为 .ZIP 格式](https://media.ssomar.com/m/docs-img-image-158.png)

### 步骤 11：安装资源包

1. 将 `.zip` 文件放入 `.minecraft/resourcepacks/`
2. 启动 Minecraft
3. 进入 Options → Resource Packs
4. 点击箭头启用你的资源包

## 第 4 部分：将 ExecutableItems 与材质关联

### 步骤 12：设置 Custom Model Data

编辑你的 ExecutableItem：

```
/ei edit my_custom_pickaxe
```

进入 `customModelData` 配置，并将其设置为与你的 override 相匹配：

![Custom Model Data 设置](https://media.ssomar.com/m/docs-img-image-163.png)

将值设置为 `1`（或你在 override 中使用的任何数字）：

![将值设置为 1](https://media.ssomar.com/m/docs-img-image-61.png)

**在配置文件中，它看起来像这样：**

```yaml
customModelData: 1
```

### 步骤 13：测试你的自定义材质

给自己一个该物品：

```
/ei give my_custom_pickaxe
```

现在你应该可以看到你的自定义材质了！

![物品栏中的自定义材质](https://media.ssomar.com/m/docs-img-image-364.png)

![手持时的自定义材质](https://media.ssomar.com/m/docs-img-image-392.png)

## 故障排除

| 问题 | 解决方案 |
|---------|----------|
| **材质不显示** | 检查所有文件名是否都是小写 |
| **紫黑色材质** | 确认 `layer0` 路径与你的材质位置一致 |
| **资源包未加载** | 检查 `pack_format` 是否与你的 Minecraft 版本匹配 |
| **物品外观不对** | 将模型 parent 中的 `"generated"` 改为 `"handheld"` |
| **物品看起来是原版样子** | 确认 EI 中的 `customModelData` 与你的 override 数字一致 |

## 进阶技巧

### 整理多个材质

为不同类型的物品创建子文件夹：

```
custom_textures/
├── weapons/
│   ├── sword_fire.png
│   └── sword_ice.png
├── tools/
│   └── pickaxe_emerald.png
└── misc/
    └── wand_magic.png
```

相应地更新你的路径：
```json
"layer0": "item/custom_textures/weapons/sword_fire"
```

### 使用 3D 模型

对于使用 [Blockbench](https://www.blockbench.net/) 创建的 3D 模型：

1. 在 Blockbench 中创建你的模型
2. 导出为 "Java Block/Item"
3. 用导出的模型替换你的 `1.json` 的内容
4. 确保材质路径与你的资源包结构一致

### 服务器部署

要在服务器上使用自定义材质，你需要将资源包托管到网上。相关说明请参阅我们的[上传材质包指南](./uploading-texture-pack.md)。

## 下载示例包

如果你在按步骤操作时遇到困难，可以下载这个示例包来查看正确的结构：

[下载 ExecutableItemsTexturePackExample.zip](/img/ExecutableItemsTexturePackExample.zip)

## 其他资源

- [Minecraft Wiki：资源包](https://minecraft.wiki/w/Resource_pack)
- [Minecraft Wiki：模型格式](https://minecraft.wiki/w/Model)
- [Pack Format 版本历史](https://minecraft.wiki/w/Pack_format)
- [Blockbench：免费的 3D 模型编辑器](https://www.blockbench.net/)

---

需要帮助？加入我们的 [Discord 社区](https://discord.gg/ExecutableItems)，在支持频道中提问吧！
