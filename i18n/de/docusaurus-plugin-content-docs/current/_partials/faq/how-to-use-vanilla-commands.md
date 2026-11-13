---
description: >-
  Erfahre, wie du in ExecutableItems Befehle mit Position per execute at
  %player% run ausführst und Block-, Entity- und Projektil-Platzhalter nutzt.
source_hash: d71f76eefdb64af0
translated_at: '2026-11-13T12:17:08.680Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/cYtk6Z8O2-c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Es ist möglich, dass du in deinem ExecutableItem Vanilla-Befehle verwendest, die **eine Position benötigen**, zum Beispiel:

* playsound..
* summon..
* particle..
* effect..
* usw.

In diesem Fall solltest du Folgendes wissen: Alle Befehle im Befehlsbereich werden von der Konsole ausgeführt. Wenn du also "summon zombie \~ \~ \~" eingibst, wird dieser Befehl von "0,0,0" in der Standardwelt aus ausgeführt.

Um das zu vermeiden, musst du "**execute at %player% run**" vor den Befehl setzen. Dadurch wird der Befehl von den Koordinaten aus ausgeführt, an denen sich der Spieler befindet.

Zum Beispiel:

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

Dies sind besondere Ausnahmen, das heißt Platzhalter oder allgemeine Dinge, die nur unter bestimmten Bedingungen funktionieren.

### Block-Platzhalter
Wenn der Aktivator, den du verwendest, **mit einem Block zusammenhängt** (wenn du nicht weißt, wovon wir sprechen, sieh dir die GUI an oder lies das Basis-Tutorial), kannst du die [**Block-Platzhalter**](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-block-placeholders) in Befehlen verwenden, zum Beispiel:

```
execute at %player% run setblock %block_x% %block_y% %block_z% stone

execute at %player% run fill %block_x% %block_y% %block_z% %block_x% 255 %block_z% stone

execute in <<%block_world%>> positioned %block_x% %block_y% %block_z% run summon tnt ~ ~ ~
```

### Entity-Platzhalter
Wenn der Aktivator **mit einer Entity zusammenhängt** (wenn du nicht weißt, wovon wir sprechen, sieh dir die GUI an oder lies das Basis-Tutorial), kannst du die [Entity-Platzhalter](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-entity-placeholders) in Befehlen verwenden, zum Beispiel:

```
execute at %entity_uuid% run particle flame ~ ~ ~ 1 1 1 50 0
execute at %player% run setblock %entity_x% %entity_y% %entity_z% stone
execute run effect give %entity_uuid% strength 10 10
```

### Projektil-Platzhalter
Wenn der Aktivator **mit einem Projektil zusammenhängt** (wenn du nicht weißt, wovon wir sprechen, sieh dir die GUI an oder lies das Basis-Tutorial), kannst du die [Projektil-Platzhalter](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-projectile-placeholders) in Befehlen verwenden, zum Beispiel:

```
execute at %projectile_uuid% run particle flame ~ ~ ~ 1 1 1 50 0
execute at %player% run setblock %projectile_x% %projectile_y% %projectile_z% stone
```

:::tip
„Multi-World"-Kompatibilität für die Vanilla-Befehle.

* `execute in <<NAME`_`OF`_`YOUR_WORLD>> run ...`

Beispiel: Du möchtest einen Zombie in der Welt SsomarWorld spawnen:

* `execute in <<SsomarWorld>> run summon zombie 100 50 100`

Beispiel mit einem Platzhalter`:`

* `execute in <<%player_world%>> run summon zombie 100 50 100`
* `execute in <<%block_world%>> run particle firework %block_x% %block_y% %block_z% 1 1 1 0.2 20`
:::
