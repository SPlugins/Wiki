---
description: >-
  Pelajari cara mengubah item vanilla menjadi item kustom ExecutableItems, mulai
  dari membuat item hingga mengedit file YAML.
source_hash: b79db1c5ed1a524c
translated_at: '2026-11-13T12:09:33.181Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Ubah Item Vanilla menjadi ExecutableItems

:::info
Pertama-tama, Anda perlu tahu bahwa metode ini hanya tersedia untuk VERSI PREMIUM
:::

![](https://media.ssomar.com/m/docs-img-executable-items-color3.png)

### Mari kita buat, pertama tentukan item vanilla mana yang ingin Anda ubah.

* Untuk tutorial ini, item yang dipakai adalah **diamond\_sword**

![](https://media.ssomar.com/m/docs-img-image-96.png)

### **Lalu, kita harus membuat item pengganti**

* Untuk membuat item, ketik perintah `/ei create <id>`

![](https://media.ssomar.com/m/docs-img-image-194.png)

* Ubah Material dari item tersebut menjadi item vanilla yang akan Anda ubah (dalam kasus ini diamond\_sword)

![](https://media.ssomar.com/m/docs-img-image-168.png)

* Mari kita buat sebuah aktivator

![](https://media.ssomar.com/m/docs-img-image-92.png)

* Untuk contoh ini, aktivatornya adalah `PLAYER_CLICK_ON_ENTITY`

![](https://media.ssomar.com/m/docs-img-image-213.png)

* Atur Detailed click ke left, agar hanya berfungsi saat memukul

![](https://media.ssomar.com/m/docs-img-image-272.png)

* Lalu pada bagian commands, saya akan memasukkan ini:

```yaml
playerCommands:
- SENDMESSAGE §6This is not a normal sword..
- PARTICLE FLAME 50 0.5 0
entityCommands:
- BURN 4
```

* Jadi saat memukul, pedang akan menampilkan pesan _**This is not a normal sword**_ dan entitas akan terbakar selama 4 detik
* OK! Item kita sudah siap, Anda boleh mengujinya jika mau (untuk memastikan item EI berfungsi dengan baik). Sekarang kita harus melakukan... transformasinya 😈😈

### Mengubah item vanilla menjadi EI yang telah dibuat

* Untuk melakukannya, Anda harus terlebih dahulu mengedit file yml dari item Anda.

:::info
Lokasinya ada di plugins/ExecutableItems/items/\<itemID>.yml
:::

![](https://media.ssomar.com/m/docs-img-image-195.png)

* Buka file tersebut dan tambahkan baris-baris berikut. (baris tersebut harus tanpa indentasi/spasi di sisi kiri)

```yaml
recognitions:
- MATERIAL
```

* Sekarang ExecutableItems akan menganggap setiap item yang memiliki material yang sama dengan item EI (yang baru saja kita buat) sebagai item EI tersebut.
* Simpan \<item>.yml, masuk ke dalam game, lalu ketik `/ei reload`

### Mari kita uji

* Jika semua langkah sudah benar, sekarang ambil sebuah diamond\_sword vanilla, dekati seekor sapi, lalu pukul -> sapi akan terbakar selama 4 detik, beberapa partikel akan muncul, dan Anda akan menerima sebuah pesan.

![](https://media.ssomar.com/m/docs-img-image-245.png)

![](https://media.ssomar.com/m/docs-img-image-105.png)

![](https://media.ssomar.com/m/docs-img-image-73.png)![](https://media.ssomar.com/m/docs-img-image-181.png)

* Sudah diuji dan berhasil! Yup!!

:::info
Jika ada pertanyaan, Anda bisa bertanya di Discord ^^

Metode oleh Special70
:::
