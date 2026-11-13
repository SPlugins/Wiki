---
description: >-
  Scopri come usare i comandi vanilla che richiedono una posizione negli
  ExecutableItems e i placeholder di blocco, entità e proiettile.
source_hash: d71f76eefdb64af0
translated_at: '2026-11-13T12:17:26.249Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/cYtk6Z8O2-c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

È possibile che nel tuo ExecutableItem tu usi comandi vanilla che **richiedono una posizione**, come:

* playsound..
* summon..
* particle..
* effect..
* ecc.

In questo caso, ti spieghiamo una cosa: tutti i comandi nella sezione dei comandi vengono eseguiti dalla console, quindi quando scrivi «summon zombie \~ \~ \~» quel comando verrà eseguito da «0,0,0» nel mondo predefinito.

Per evitarlo devi aggiungere «**execute at %player% run**» prima del comando: in questo modo il comando verrà eseguito dalle coordinate in cui si trova il giocatore.

Ad esempio:

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

Queste sono eccezioni speciali, cioè placeholder o elementi generali che funzionano solo in determinate condizioni.

### Placeholder dei blocchi
Se l'attivatore che stai usando è **collegato a un blocco** (se non sai di cosa parliamo, esplora la GUI o consulta il tutorial di base), puoi usare i [**placeholder dei blocchi**](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-block-placeholders) nei comandi, ad esempio:

```
execute at %player% run setblock %block_x% %block_y% %block_z% stone

execute at %player% run fill %block_x% %block_y% %block_z% %block_x% 255 %block_z% stone

execute in <<%block_world%>> positioned %block_x% %block_y% %block_z% run summon tnt ~ ~ ~
```

### Placeholder delle entità
Se l'attivatore è **collegato a un'entità** (se non sai di cosa parliamo, esplora la GUI o consulta il tutorial di base), puoi usare i [placeholder delle entità](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-entity-placeholders) nei comandi, ad esempio:

```
execute at %entity_uuid% run particle flame ~ ~ ~ 1 1 1 50 0
execute at %player% run setblock %entity_x% %entity_y% %entity_z% stone
execute run effect give %entity_uuid% strength 10 10
```

### Placeholder dei proiettili
Se l'attivatore è **collegato a un proiettile** (se non sai di cosa parliamo, esplora la GUI o consulta il tutorial di base), puoi usare i [placeholder dei proiettili](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-projectile-placeholders) nei comandi, ad esempio:

```
execute at %projectile_uuid% run particle flame ~ ~ ~ 1 1 1 50 0
execute at %player% run setblock %projectile_x% %projectile_y% %projectile_z% stone
```

:::tip
Compatibilità «multi-world» per i comandi vanilla.

* `execute in <<NAME`_`OF`_`YOUR_WORLD>> run ...`

Esempio: vuoi evocare uno Zombie nel mondo SsomarWorld:

* `execute in <<SsomarWorld>> run summon zombie 100 50 100`

Esempio con un placeholder`:`

* `execute in <<%player_world%>> run summon zombie 100 50 100`
* `execute in <<%block_world%>> run particle firework %block_x% %block_y% %block_z% 1 1 1 0.2 20`
:::
