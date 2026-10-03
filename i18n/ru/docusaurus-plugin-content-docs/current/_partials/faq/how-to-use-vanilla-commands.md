---
description: >-
  Как использовать ванильные команды с позицией игрока и плейсхолдеры блоков,
  сущностей и снарядов в плагине ExecutableItems.
source_hash: d71f76eefdb64af0
translated_at: '2026-10-03T10:36:23.351Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/cYtk6Z8O2-c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Возможно, что внутри вашего ExecutableItem вы будете использовать ванильные команды, которые **требуют позицию**, такие как:

* playsound..
* summon..
* particle..
* effect..
* и т.д.

Если это так, давайте объясним вам одну вещь: все команды в разделе команд выполняются от имени консоли, поэтому когда вы пишете "summon zombie \~ \~ \~", эта команда будет выполнена из точки "0,0,0" в стандартном мире.

Чтобы избежать этого, вам нужно добавить "**execute at %player% run**" перед командой, это заставит команду выполняться от координат, где находится игрок.

Например:

```
❌ run summon tnt ~ ~ ~
✅ execute at %player% run summon tnt ~ ~ ~

❌ playsound minecraft:ambient.cave master %player% ~ ~ ~ 1 1
✅ execute at %player% run playsound minecraft:ambient.cave master %player% ~ ~ ~ 1 1
```

```
❌ particle minecraft:flame ~ ~ ~ 1 1 1 0 10
✅ execute at %player% run particle minecraft:flame ~ ~ ~ 1 1 1 0 10
```

✅ effect give %player% speed 15 1

✅ execute at %player% run setblock ~ ~ ~ stone

✅ execute at %player% run fill ~1 ~1 ~1 ~-1 ~-1 ~-1 stone replace air

✅execute at %player% run tellraw %player% \{"text":"hi"\}
✅execute at %player% run tellraw @a \{"text":"hi"\}

Это особые исключения, то есть плейсхолдеры или общие вещи, которые работают только при определенных условиях.

### Плейсхолдеры блока
Если активатор, который вы используете, **связан с блоком** (если вы не понимаете, о чем речь, изучите gui или посмотрите базовый туториал), вы можете использовать [**плейсхолдеры блока**](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-block-placeholders) в командах, такие как:

```
execute at %player% run setblock %block_x% %block_y% %block_z% stone

execute at %player% run fill %block_x% %block_y% %block_z% %block_x% 255 %block_z% stone

execute in <<%block_world%>> positioned %block_x% %block_y% %block_z% run summon tnt ~ ~ ~
```

### Плейсхолдеры сущности
Если активатор **связан с сущностью** (если вы не понимаете, о чем речь, изучите gui или посмотрите базовый туториал), вы можете использовать [плейсхолдеры сущности](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-entity-placeholders) в командах, такие как:

```
execute at %entity_uuid% run particle flame ~ ~ ~ 1 1 1 50 0
execute at %player% run setblock %entity_x% %entity_y% %entity_z% stone
execute run effect give %entity_uuid% strength 10 10
```

### Плейсхолдеры снаряда
Если активатор **связан со снарядом** (если вы не понимаете, о чем речь, изучите gui или посмотрите базовый туториал), вы можете использовать [плейсхолдеры снаряда](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-projectile-placeholders) в командах, такие как:

```
execute at %projectile_uuid% run particle flame ~ ~ ~ 1 1 1 50 0
execute at %player% run setblock %projectile_x% %projectile_y% %projectile_z% stone
```

:::tip
Совместимость "Multi-world" для ванильных команд.

* `execute in <<NAME`_`OF`_`YOUR_WORLD>> run ...`

Например, вы хотите призвать Zombie в мире SsomarWorld:

* `execute in <<SsomarWorld>> run summon zombie 100 50 100`

Пример с плейсхолдером`:`

* `execute in <<%player_world%>> run summon zombie 100 50 100`
* `execute in <<%block_world%>> run particle firework %block_x% %block_y% %block_z% 1 1 1 0.2 20`
:::
