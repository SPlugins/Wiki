---
description: >-
  Guía sobre el uso de comandos vanilla con posición y placeholders de bloque,
  entidad y proyectil en ExecutableItems (plugin SPlugins).
source_hash: d71f76eefdb64af0
translated_at: '2026-10-03T10:36:19.230Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/cYtk6Z8O2-c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Es posible que dentro de tu ExecutableItem utilices comandos vanilla que **necesitan una posición**, tales como:

* playsound..
* summon..
* particle..
* effect..
* etc

Si es el caso, vamos a explicarte algo: todos los comandos en la sección de comandos son ejecutados por la consola, así que cuando escribes "summon zombie \~ \~ \~" ese comando se ejecutará desde "0,0,0" en el mundo por defecto.

Para evitar esto tienes que añadir "**execute at %player% run**" antes del comando, eso forzará a que el comando se ejecute desde las coordenadas donde está el jugador.

Por ejemplo:

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

Estas son excepciones especiales, es decir, placeholders o cosas generales que solo funcionan bajo ciertas condiciones.

### Block placeholders
Si es el caso de que el activador que estás usando está **relacionado con un bloque** (si no sabes de qué estamos hablando explora la gui o revisa el tutorial básico), puedes usar los [**block placeholders**](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-block-placeholders) en los comandos, tales como:

```
execute at %player% run setblock %block_x% %block_y% %block_z% stone

execute at %player% run fill %block_x% %block_y% %block_z% %block_x% 255 %block_z% stone

execute in <<%block_world%>> positioned %block_x% %block_y% %block_z% run summon tnt ~ ~ ~
```

### Entity placeholders
Si es el caso de que el activador está **relacionado con una entidad** (si no sabes de qué estamos hablando explora la gui o revisa el tutorial básico), puedes usar los [entity placeholders](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-entity-placeholders) en los comandos, tales como:

```
execute at %entity_uuid% run particle flame ~ ~ ~ 1 1 1 50 0
execute at %player% run setblock %entity_x% %entity_y% %entity_z% stone
execute run effect give %entity_uuid% strength 10 10
```

### Projectile placeholders
Si es el caso de que el activador está **relacionado con un proyectil** (si no sabes de qué estamos hablando explora la gui o revisa el tutorial básico), puedes usar los [projectile placeholders](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-projectile-placeholders) en los comandos, tales como:

```
execute at %projectile_uuid% run particle flame ~ ~ ~ 1 1 1 50 0
execute at %player% run setblock %projectile_x% %projectile_y% %projectile_z% stone
```

:::tip
Compatibilidad "Multi-world" para los comandos vanilla.

* `execute in <<NAME`_`OF`_`YOUR_WORLD>> run ...`

Por ejemplo, quieres invocar un Zombie en el mundo SsomarWorld:

* `execute in <<SsomarWorld>> run summon zombie 100 50 100`

Ejemplo con un placeholder`:`

* `execute in <<%player_world%>> run summon zombie 100 50 100`
* `execute in <<%block_world%>> run particle firework %block_x% %block_y% %block_z% 1 1 1 0.2 20`
:::
