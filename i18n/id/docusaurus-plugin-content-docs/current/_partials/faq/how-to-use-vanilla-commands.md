---
description: >-
  Pelajari cara menggunakan perintah vanilla yang membutuhkan posisi di
  ExecutableItems, serta placeholder blok, entitas, dan proyektil.
source_hash: d71f76eefdb64af0
translated_at: '2026-11-13T12:17:39.846Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/cYtk6Z8O2-c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Kemungkinan di dalam ExecutableItem Anda akan memakai perintah vanilla yang **membutuhkan posisi**, seperti:

* playsound..
* summon..
* particle..
* effect..
* dll.

Jika itu kasusnya, ada hal yang perlu Anda ketahui: semua perintah di bagian commands dijalankan oleh console, jadi saat Anda mengetik "summon zombie \~ \~ \~", perintah tersebut akan dijalankan dari "0,0,0" di dunia default.

Untuk menghindarinya, Anda harus menambahkan "**execute at %player% run**" sebelum perintah, sehingga perintah dipaksa berjalan dari koordinat tempat pemain berada.

Contoh:

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

Ini adalah pengecualian khusus, artinya placeholder atau hal-hal umum yang hanya berfungsi pada kondisi tertentu.

### Block placeholders
Jika aktivator yang Anda gunakan **berkaitan dengan sebuah blok** (jika Anda tidak tahu maksudnya, jelajahi GUI atau baca tutorial dasar), Anda dapat menggunakan [**block placeholders**](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-block-placeholders) pada perintah, seperti:

```
execute at %player% run setblock %block_x% %block_y% %block_z% stone

execute at %player% run fill %block_x% %block_y% %block_z% %block_x% 255 %block_z% stone

execute in <<%block_world%>> positioned %block_x% %block_y% %block_z% run summon tnt ~ ~ ~
```

### Entity placeholders
Jika aktivator **berkaitan dengan sebuah entitas** (jika Anda tidak tahu maksudnya, jelajahi GUI atau baca tutorial dasar), Anda dapat menggunakan [entity placeholders](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-entity-placeholders) pada perintah, seperti:

```
execute at %entity_uuid% run particle flame ~ ~ ~ 1 1 1 50 0
execute at %player% run setblock %entity_x% %entity_y% %entity_z% stone
execute run effect give %entity_uuid% strength 10 10
```

### Projectile placeholders
Jika aktivator **berkaitan dengan sebuah proyektil** (jika Anda tidak tahu maksudnya, jelajahi GUI atau baca tutorial dasar), Anda dapat menggunakan [projectile placeholders](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-projectile-placeholders) pada perintah, seperti:

```
execute at %projectile_uuid% run particle flame ~ ~ ~ 1 1 1 50 0
execute at %player% run setblock %projectile_x% %projectile_y% %projectile_z% stone
```

:::tip
Kompatibilitas "Multi-world" untuk perintah vanilla.

* `execute in <<NAME`_`OF`_`YOUR_WORLD>> run ...`

Contoh, Anda ingin memunculkan Zombie di dunia SsomarWorld:

* `execute in <<SsomarWorld>> run summon zombie 100 50 100`

Contoh dengan sebuah placeholder`:`

* `execute in <<%player_world%>> run summon zombie 100 50 100`
* `execute in <<%block_world%>> run particle firework %block_x% %block_y% %block_z% 1 1 1 0.2 20`
:::
