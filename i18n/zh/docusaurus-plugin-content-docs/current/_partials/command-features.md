---
description: >-
  了解 ExecutableEvents 激活器中 detailedCommands 与 registerCommand 的用法：选择触发命令、注册命令以获得
  Tab 补全并避免 Unknown command 提示。
source_hash: dd51810cf51b3bae
translated_at: '2026-11-13T18:08:38.656Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedCommands

* 说明：适用于涉及命令的激活器的功能，在这里你可以选择激活器运行时所对应的命令作为条件。
* 示例：

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_COMMAND # replace that with the correct activator name
    detailedCommands:
    - customHealCommand
    playerCommands:
    - SEND_MESSAGE &dYou have been healed !
    - REGAIN HEALTH 10
```

### registerCommand

* 说明：布尔值，默认为 `false`。仅适用于 `PLAYER_WRITE_COMMAND`。如果不启用，激活器会运行，但该命令对服务器来说并不存在：聊天栏会将其显示为红色，服务器会回复 "Unknown command"。启用 `registerCommand: true` 后，`detailedCommands` 的命令会注册到服务器上：
  * 不再出现 "Unknown command"，并且在 1.13+ 版本中，聊天栏不再将该命令显示为红色。
  * 支持命令名称以及其后在 `detailedCommands` 中输入的词语的 Tab 补全（`/promo summer` 和 `/promo winter` 会提示 `summer` 和 `winter`）。
  * 已注册的命令本身不会执行任何操作：激活器仍然和之前一样只会运行一次。
  * 它绝不会替换已有的命令（Minecraft 或其他插件的命令）：控制台会显示警告，该命令不会被注册，并且在输入该命令时激活器仍会运行。
  * 多个激活器（或 ExecutableItems 和 ExecutableEvents）可以使用同一个命令：该命令只会注册一次。
  * 已注册的命令会跟随配置：在重载、编辑器保存或删除之后会更新，并在插件被禁用时移除。
  * 带有 `registerCommand: true` 但没有 `detailedCommands` 的激活器不会注册任何命令。
* 示例：

```yaml
activators:
  activator1:
    option: PLAYER_WRITE_COMMAND
    detailedCommands:
    - promo summer
    - promo winter
    registerCommand: true
    playerCommands:
    - SEND_MESSAGE &aPromo: %arg1%
```
