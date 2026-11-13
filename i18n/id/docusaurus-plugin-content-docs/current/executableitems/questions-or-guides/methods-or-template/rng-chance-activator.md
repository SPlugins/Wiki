---
description: >-
  Pelajari cara membuat aktivator RNG Chance di ExecutableItems dengan
  RECEIVE_HIT_BY_GLOBAL dan %rng_1,4% untuk membatalkan serangan secara acak.
source_hash: e2c9077e189d3702
translated_at: '2026-11-13T12:09:54.186Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Aktivator RNG Chance

Nah, beberapa waktu lalu saya menginginkan sebuah NINJA Armor dan idenya adalah.. oke, beberapa serangan dihindari dan beberapa tidak, tetapi.. bagaimana cara membuat "dodge" itu? Nah, setelah lama berpikir, muncullah metode ini, mari kita jelaskan.

:::info
Tutorial ini akan terkait dengan contoh yang disebutkan di atas, tetapi idenya adalah agar Anda memahami intinya dari metode ini dan menerapkannya sesuai keinginan Anda.
:::

### Mari kita buat item-nya

:::info
**Item** itu sendiri membutuhkan versi premium + PlaceholderAPI + RNG Expansion
:::

![](https://media.ssomar.com/m/docs-img-image-204.png)

* Setelah menambahkan nama, lore, dan material..

![](https://media.ssomar.com/m/docs-img-image-237.png)

### Mari kita buat aktivator yang akan menciptakan keajaibannya

* Jadi pertama, idenya adalah membuat RECEIVE\_HIT\_BY\_GLOBAL dan membatalkan event.

<img src="https://media.ssomar.com/m/docs-img-imgur-ywpudsl.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-qj9rwav.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-tpgpdss.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-yi878ll.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-4wtkxti.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-bw6zczo.png" alt="" />

* Jadi sekarang, aktivator ini membatalkan SETIAP serangan yang diterima. Agar terkadang membatalkan dan terkadang tidak, kita harus membuat aktivator itu sendiri berjalan sesekali, jadi kita akan menambahkan kondisi yang terkait dengan RNG. Intinya adalah angka acak antara 1 dan 4, jika cocok dengan 1, aktivator akan berjalan, dengan probabilitas 25% -> itulah probabilitas yang kita inginkan, mari kita tambahkan.
*

    <img src="https://media.ssomar.com/m/docs-img-imgur-riqfiao.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-6q81hpl.png" alt="" />

PLAYER\_NUMBER

![](https://media.ssomar.com/m/docs-img-image-178.png)

Dan pada bagian pertama kita akan menambahkan "%rng\_1,4%" (ini membutuhkan PlaceholderAPI dan RNG Expansion)

![](https://media.ssomar.com/m/docs-img-image-111.png)

EQUALS

![](https://media.ssomar.com/m/docs-img-image-175.png)

"1" (karena kita ingin aktivator terpicu hanya jika angka acak antara 1 dan 4 cocok dengan 1)

![](https://media.ssomar.com/m/docs-img-image-224.png)

Dan item-nya sudah siap

:::info
UNTUK KEPERLUAN DEBUG, SAYA AKAN MENAMBAHKAN BAHWA AKTIVATOR MENGATAKAN "dodge" DAN JIKA PLACEHOLDER TIDAK COCOK MENGATAKAN "didn't dodge".\
\
Jadi setelah kita mengujinya, kita akan tahu apakah berfungsi dengan benar.
:::

![](https://media.ssomar.com/m/docs-img-image-378.png)

Dan berhasil, aktivator hanya berjalan 1 dari 4 kali.

Jika Anda memiliki pertanyaan, silakan tanyakan di Discord EI, semoga hari Anda menyenangkan :P

## Cara mengatur nilai yang tepat untuk mendapatkan persentase yang Anda inginkan

<iframe width="560" height="315" src="https://www.youtube.com/embed/jXTDlqoE8dc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
