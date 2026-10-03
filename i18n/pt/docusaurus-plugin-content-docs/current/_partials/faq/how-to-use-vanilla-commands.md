---
description: >-
  Aprenda a usar comandos vanilla com posição e placeholders de bloco, entidade
  e projétil em itens do plugin ExecutableItems.
source_hash: d71f76eefdb64af0
translated_at: '2026-10-03T10:48:57.421Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/cYtk6Z8O2-c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

É possível que dentro do seu ExecutableItem você use comandos vanilla que **precisam de uma posição**, tais como:

* playsound..
* summon..
* particle..
* effect..
* etc

Se for esse o caso, vamos explicar uma coisa: todos os comandos na seção de comandos são executados pelo console, então quando você digita "summon zombie \~ \~ \~" esse comando será executado a partir de "0,0,0" no mundo padrão.

Para evitar isso você precisa adicionar "**execute at %player% run**" antes do comando, isso forçará o comando a ser executado a partir das coordenadas onde o jogador está.

Por exemplo:

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

Estas são exceções especiais, ou seja, placeholders ou coisas em geral que só funcionam sob certas condições.

### Block placeholders
Se for o caso de o ativador que você está usando estar **relacionado a um bloco** (se você não sabe do que estamos falando, explore a gui ou confira o tutorial básico), você pode usar os [**block placeholders**](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-block-placeholders) nos comandos, tais como:

```
execute at %player% run setblock %block_x% %block_y% %block_z% stone

execute at %player% run fill %block_x% %block_y% %block_z% %block_x% 255 %block_z% stone

execute in <<%block_world%>> positioned %block_x% %block_y% %block_z% run summon tnt ~ ~ ~
```

### Entity placeholders
Se for o caso de o ativador estar **relacionado a uma entidade** (se você não sabe do que estamos falando, explore a gui ou confira o tutorial básico), você pode usar os [entity placeholders](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-entity-placeholders) nos comandos, tais como:

```
execute at %entity_uuid% run particle flame ~ ~ ~ 1 1 1 50 0
execute at %player% run setblock %entity_x% %entity_y% %entity_z% stone
execute run effect give %entity_uuid% strength 10 10
```

### Projectile placeholders
Se for o caso de o ativador estar **relacionado a um projétil** (se você não sabe do que estamos falando, explore a gui ou confira o tutorial básico), você pode usar os [projectile placeholders](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-projectile-placeholders) nos comandos, tais como:

```
execute at %projectile_uuid% run particle flame ~ ~ ~ 1 1 1 50 0
execute at %player% run setblock %projectile_x% %projectile_y% %projectile_z% stone
```

:::tip
Compatibilidade "Multi-world" para os comandos vanilla.

* `execute in <<NAME`_`OF`_`YOUR_WORLD>> run ...`

Exemplo, você quer dar summon em um Zombie no mundo SsomarWorld:

* `execute in <<SsomarWorld>> run summon zombie 100 50 100`

Exemplo com um placeholder`:`

* `execute in <<%player_world%>> run summon zombie 100 50 100`
* `execute in <<%block_world%>> run particle firework %block_x% %block_y% %block_z% 1 1 1 0.2 20`
:::
