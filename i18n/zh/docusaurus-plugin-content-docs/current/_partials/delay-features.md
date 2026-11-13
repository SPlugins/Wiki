---
description: >-
  本页详细介绍 ExecutableItems 插件中激活器的 delay 和 delayTick 功能：delay
  设置循环再次触发的间隔秒数，delayTick 可将间隔单位改为 tick（20 tick 等于 1 秒），并附有详细的配置示例。
source_hash: 492c3c387bf91ea2
translated_at: '2026-11-13T18:08:59.165Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### delay 和 delayTick

* 信息：用于改变激活器触发间隔时间的功能，它会影响激活器循环重复的行为。
  * delay：整数值，表示循环的间隔秒数。也就是说，每隔 \<delay> \[time]，循环就会再次触发。例如（如果 delay 为 30 秒，则激活器每 30 秒触发一次）
  * delayTick：布尔值，用于将延迟时间设置为 tick，否则单位为秒。（20 tick = 1 秒）
* 示例：

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: YOUR_LOOP_ACTIVATOR # replace that with the correct activator name
    delay: 30 # Value in seconds due delayInTick its false
    delayInTick: false
```
