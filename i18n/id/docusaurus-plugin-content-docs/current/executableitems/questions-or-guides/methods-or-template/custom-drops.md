---
description: >-
  Pelajari cara membuat drop kustom untuk entitas dan blok dengan aktivator dan
  perintah di ExecutableItems, termasuk contoh perintah vanilla.
source_hash: 53c8b7deae5be6f3
translated_at: '2026-11-13T12:09:15.256Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Drop kustom

:::danger
TUTORIAL INI UNTUK EXECUTABLEITEMS, ARTINYA **DROP INI TIDAK BERFUNGSI SECARA GLOBAL**, HANYA BERFUNGSI JIKA ANDA MEMILIKI EXECUTABLEITEM DI INVENTORY ANDA.

\
JIKA INGIN MEMBUAT DROP KUSTOM GLOBAL, GUNAKAN **EXECUTABLEVENTS**
:::

Jika Anda ingin membuat drop kustom, pertama-tama kita perlu mengetahui jenis drop-nya. Keduanya akan dijelaskan:

## Entity drops

Gunakan aktivator PLAYER\_KILL\_ENTITY atau PLAYER\_KILL\_PLAYER, dan pada perintah Anda bisa menggunakan salah satu dari:

* Perintah EI untuk menjatuhkan item
  * DROPEXECUTABLEITEM
  * DROPEXECUTABLEBLOCK
  * DROPITEM
* Perintah vanilla untuk menjatuhkan item
  * Contoh yang bagus untuk ini adalah memberikan HEAD dari PLAYER
    * execute at %player% run summon item %target\_x\_int% %target\_y\_int% %target\_z\_int%  \{Item:\{id:"player\_head",Count:1b,tag:\{SkullOwner:"%target%"\\}\}\}

:::info
Jangan lupa, jika Anda ingin perintah ini tidak berfungsi 100%, Anda bisa memberinya peluang! Cukup periksa wiki, hal itu sudah dijelaskan ^^
:::

## Block drops

Gunakan aktivator PLAYER\_BREAK\_BLOCK, dan pada perintah Anda bisa menggunakan salah satu dari:

* Perintah EI untuk menjatuhkan item
  * DROPEXECUTABLEITEM
  * DROPEXECUTABLEBLOCK
  * DROPITEM
* Perintah vanilla untuk menjatuhkan item
  * Perintah vanilla untuk menjatuhkan lebih dari satu item yang dihancurkan (contoh ini memberikan 2 item tambahan, Anda bisa mengacaknya dengan menggunakan placeholder RNG sebagai pengganti "2")
    * execute at %player% run summon minecraft\:item %block\_x\_int% %block\_y\_int% %block\_z\_int% \{Item:\{id:"minecraft:%block\_item\_material\_lower%",Count:2b\\}\}

:::info
Jangan lupa, jika Anda ingin perintah ini tidak berfungsi 100%, Anda bisa memberinya peluang! Cukup periksa wiki, hal itu sudah dijelaskan ^^
:::
