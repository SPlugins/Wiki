---
description: >-
  本页介绍如何通过资源包为 ExecutableItems 插件添加自定义声音，且不替换原版声音。内容包括完整的分步指南：创建资源包、配置
  sounds.json、转换 OGG 文件、使用 PLAYSOUND 命令播放，以及资源包的部署与常见问题排查。
source_hash: 66cf4b862fca2e2f
translated_at: '2026-11-13T18:02:02.432Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 自定义声音

:::info
此方法会添加新的自定义声音，**不会**替换任何现有的原版声音。
:::

Minecraft 中的自定义声音通过资源包进行管理。

## 概述

要为你的 ExecutableItems 添加自定义声音，你需要：
1. 创建包含自定义声音文件的资源包
2. 配置 sounds.json 文件以注册你的声音
3. 在 ExecutableItems 中使用 /playsound 命令来播放它们

## 分步指南

### 步骤 1：创建基础资源包结构

首先，创建基础的资源包文件夹结构：

```
RESOURCE_PACK/
  ├── assets/
  ├── pack.mcmeta
  └── pack.png
```

- `pack.mcmeta` - 包含资源包元数据（版本、描述）
- `pack.png` - 资源包图标（可选，但建议添加）

### 步骤 2：添加自定义命名空间文件夹

在 `assets` 文件夹内，创建你的自定义命名空间文件夹。该名称应当唯一，以避免冲突：

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/    # Your custom namespace
  ├── pack.mcmeta
  └── pack.png
```

:::tip 命名空间命名
选择具有描述性的命名空间，例如你的服务器名称或插件名称。示例：`myserver`、`customitems`、`epicrpg`
:::

### 步骤 3：创建 sounds.json

在你的自定义命名空间文件夹内，创建一个 `sounds.json` 文件：

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/
  │       └── sounds.json
  ├── pack.mcmeta
  └── pack.png
```

### 步骤 4：配置 sounds.json

编辑 `sounds.json` 以注册你的自定义声音：

```json
{
  "epic_sword_slash": {
    "subtitle": "Epic Sword Slash",
    "sounds": [
      "customsounds:sword_slash1"
    ]
  },
  "magic_spell_cast": {
    "subtitle": "Magic Spell Cast",
    "sounds": [
      "customsounds:spell_cast1",
      "customsounds:spell_cast2"
    ]
  },
  "boss_roar": {
    "sounds": [
      "customsounds:dragon_roar"
    ]
  }
}
```

#### sounds.json 结构说明

- **Sound ID**（例如 `epic_sword_slash`）：你将在命令中使用的名称
- **subtitle**：可选文本，在启用字幕时显示
- **sounds**：声音文件路径数组（不含 .ogg 扩展名）

:::info 声音路径
`"customsounds:sword_slash1"` 表示该文件位于：
`assets/customsounds/sounds/sword_slash1.ogg`

格式为：`namespace:path_inside_sounds_folder`
:::

### 步骤 5：添加你的声音文件

在你的命名空间内创建一个 `sounds` 文件夹，并添加你的 .ogg 声音文件：

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/
  │       ├── sounds.json
  │       └── sounds/
  │           ├── sword_slash1.ogg
  │           ├── spell_cast1.ogg
  │           ├── spell_cast2.ogg
  │           └── dragon_roar.ogg
  ├── pack.mcmeta
  └── pack.png
```

:::warning 声音文件要求
- **格式**：必须是 .ogg 格式（Ogg Vorbis）
- **建议使用单声道**：立体声也可以使用，但单声道更适合定位音频
- **采样率**：建议使用 44.1 kHz 或 48 kHz
- **文件大小**：保持文件较小，以便更快下载
:::

### 步骤 6：创建 pack.mcmeta

创建你的 `pack.mcmeta` 文件，并使用正确的版本格式：

```json
{
  "pack": {
    "pack_format": 15,
    "description": "Custom sounds for MyServer"
  }
}
```

#### 包格式版本

| Minecraft 版本 | pack_format |
|-------------------|-------------|
| 1.20.2 - 1.20.4   | 18          |
| 1.20 - 1.20.1     | 15          |
| 1.19.4            | 13          |
| 1.19 - 1.19.3     | 12          |
| 1.18 - 1.18.2     | 9           |

其他版本请在 Google 上查询

## 在 ExecutableItems 中使用自定义声音

资源包创建并应用后，使用 PLAYSOUND 命令：

### 基本用法

```yaml
activators:
  sword_attack:
    option: PLAYER_ALL_CLICK
    playerCommands:
    - "minecraft:playsound customsounds:epic_sword_slash master @a"
```


### 定位声音

```yaml
activators:
  boss_spawn:
    option: PROJECTILE_HIT_BLOCK
    blockCommands:
    - "minecraft:playsound customsounds:boss_roar master @a %block_x% %block_y% %block_z% %world%"
    # Plays at specific coordinates
```

## 将音频文件转换为 OGG

如果你有 MP3、WAV 或其他音频格式的文件，需要将它们转换为 OGG：

### 使用 Audacity（免费）

1. 下载 Audacity：https://www.audacityteam.org/
2. 打开你的音频文件
3. 可选：转换为单声道（Tracks → Mix → Mix Stereo down to Mono）
4. File → Export → Export as OGG
5. 选择质量设置（质量 5-7 是较好的平衡）

### 使用在线转换器

- CloudConvert：https://cloudconvert.com/mp3-to-ogg
- Online-Convert：https://audio.online-convert.com/convert-to-ogg

## 部署你的资源包

### 方法 1：服务器资源包（推荐）

上传你的资源包，并在 `server.properties` 中进行配置：

```properties
resource-pack=https://your-url.com/resourcepack.zip
resource-pack-sha1=<SHA1 hash>
require-resource-pack=true
```

:::tip 托管选项
- Dropbox（获取直接链接）
- Google Drive（使用下载链接转换器）
- 自建网络服务器
- GitHub releases
:::

## 故障排除

### 声音无法播放

**问题**：命令已执行，但没有声音播放

**解决方案**：
1. ✅ 验证资源包已应用（`/playsound` 使用原版声音测试）
2. ✅ 检查声音文件是否为 .ogg 格式（而不是 .mp3、.wav 等）
3. ✅ 验证 sounds.json 的语法（使用 JSON 验证器）
4. ✅ 检查文件路径是否完全一致（区分大小写）
5. ✅ 使用 `/playsound customsounds:your_sound master @s` 进行测试

### 资源包无法加载

**问题**：服务器资源包没有向玩家下载

**解决方案**：
1. ✅ 验证资源包 URL 是直接下载链接
2. ✅ 检查 pack.mcmeta 的格式版本是否与服务器版本匹配
3. ✅ 确保资源包大小不超过 100MB（客户端限制）
4. ✅ 验证 server.properties 中的 SHA1 哈希值与文件一致

### 播放了错误的声音

**问题**：播放的声音与预期不同

**解决方案**：
1. ✅ 检查 sounds.json 中是否存在重复的声音 ID
2. ✅ 验证命名空间正确且为小写（customsounds: 与 minecraft:）
3. ✅ 检查声音文件名是否有拼写错误


## 相关文档

- [资源包格式（Minecraft Wiki）](https://minecraft.wiki/w/Resource_Pack)
- [激活器列表](/executableitems/configurations/activator-configuration/list-of-the-activators)

## 其他资源

- **Audacity 下载**：https://www.audacityteam.org/
- **免费音效**：
  - Freesound：https://freesound.org/
  - Zapsplat：https://www.zapsplat.com/
- **OGG 转换器**：https://cloudconvert.com/mp3-to-ogg
- **JSON 验证器**：https://jsonlint.com/
