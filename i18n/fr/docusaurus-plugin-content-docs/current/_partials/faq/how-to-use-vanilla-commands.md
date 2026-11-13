---
description: >-
  Apprenez à utiliser les commandes vanilla avec position dans ExecutableItems :
  execute at %player% run, placeholders de bloc, d'entité et de projectile.
source_hash: d71f76eefdb64af0
translated_at: '2026-11-13T12:16:51.436Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/cYtk6Z8O2-c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Il est possible que, dans votre ExecutableItem, vous utilisiez des commandes vanilla qui **nécessitent une position**, comme :

* playsound..
* summon..
* particle..
* effect..
* etc

Si c'est le cas, voici ce qu'il faut savoir : toutes les commandes de la section des commandes sont exécutées par la console. Ainsi, quand vous écrivez « summon zombie \~ \~ \~ », cette commande sera exécutée depuis « 0,0,0 » dans le monde par défaut.

Pour éviter cela, vous devez ajouter « **execute at %player% run** » avant la commande, ce qui forcera son exécution depuis les coordonnées où se trouve le joueur.

Par exemple :

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

Ce sont des exceptions particulières, c'est-à-dire des placeholders ou des éléments généraux qui ne fonctionnent que sous certaines conditions.

### Placeholders de bloc
Si l'activateur que vous utilisez est **lié à un bloc** (si vous ne savez pas de quoi nous parlons, explorez la GUI ou consultez le tutoriel de base), vous pouvez utiliser les [**placeholders de bloc**](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-block-placeholders) dans les commandes, comme :

```
execute at %player% run setblock %block_x% %block_y% %block_z% stone

execute at %player% run fill %block_x% %block_y% %block_z% %block_x% 255 %block_z% stone

execute in <<%block_world%>> positioned %block_x% %block_y% %block_z% run summon tnt ~ ~ ~
```

### Placeholders d'entité
Si l'activateur est **lié à une entité** (si vous ne savez pas de quoi nous parlons, explorez la GUI ou consultez le tutoriel de base), vous pouvez utiliser les [placeholders d'entité](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-entity-placeholders) dans les commandes, comme :

```
execute at %entity_uuid% run particle flame ~ ~ ~ 1 1 1 50 0
execute at %player% run setblock %entity_x% %entity_y% %entity_z% stone
execute run effect give %entity_uuid% strength 10 10
```

### Placeholders de projectile
Si l'activateur est **lié à un projectile** (si vous ne savez pas de quoi nous parlons, explorez la GUI ou consultez le tutoriel de base), vous pouvez utiliser les [placeholders de projectile](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-projectile-placeholders) dans les commandes, comme :

```
execute at %projectile_uuid% run particle flame ~ ~ ~ 1 1 1 50 0
execute at %player% run setblock %projectile_x% %projectile_y% %projectile_z% stone
```

:::tip
Compatibilité « multi-world » pour les commandes vanilla.

* `execute in <<NAME`_`OF`_`YOUR_WORLD>> run ...`

Exemple : vous voulez invoquer un Zombie dans le monde SsomarWorld :

* `execute in <<SsomarWorld>> run summon zombie 100 50 100`

Exemple avec un placeholder`:`

* `execute in <<%player_world%>> run summon zombie 100 50 100`
* `execute in <<%block_world%>> run particle firework %block_x% %block_y% %block_z% 1 1 1 0.2 20`
:::
