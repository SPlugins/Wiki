---
description: >-
  Pelajari cara membuat bonus set armor di ExecutableItems dengan LOOP activator
  dan kondisi ifHasExecutableItems untuk efek saat set lengkap dipakai.
source_hash: 6cf2ef4cf39ef5e2
translated_at: '2026-11-13T17:51:09.322Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Bonus Set Armor

:::tip Baru: set native
ExecutableItems kini memiliki [set](/executableitems/configurations/sets-configuration) native: satu file per set, beberapa tier (2 bagian, 4 bagian...), efek dan atribut dihapus dengan bersih saat satu bagian dilepas, dan tidak ada LOOP yang berjalan terus-menerus. Gunakan set native untuk set baru. Metode di bawah ini masih berfungsi.
:::

## Mari kita buat!

### Pertama, kita harus membuat bagian-bagian set armor

* Untuk contoh ini, nama item-nya adalah:\
  Helmet = **nameofhelmet.yml**\
  Chestplate = **nameofchestplate.yml**\
  Leggings = **nameofleggings.yml**\
  Boots = **nameofboots.yml**

![](https://media.ssomar.com/m/docs-img-image-145.png)

* Untuk membuatnya
  * /ei create nameofhelmet -> Save
  * /ei create nameofchestplate -> Save
  * /ei create nameofleggings -> Save
  * /ei create nameofboots -> Save

### Sekarang buat aktivator yang ingin kita aktifkan saat memakai set lengkap

:::info
Dalam contoh ini kita akan membuat armor yang selalu memberi Anda strength selama Anda memakai set lengkap, jadi kita membutuhkan LOOP ACTIVATOR. Anda juga harus memilih bagian armor mana yang menjadi "utama", yaitu bagian tempat semua perintah dijalankan. Dalam kasus ini, bagian "utama" adalah **helmet**.
:::

* Jadi, seperti yang disebutkan sebelumnya, aktivator-nya adalah **LOOP**

![](https://media.ssomar.com/m/docs-img-image-399.png)

* Kita ingin ini hanya berfungsi saat dipakai, jadi di **detailedSlots** kita akan mengaturnya agar hanya berfungsi saat item berada di **head slot.**

![](https://media.ssomar.com/m/docs-img-image-189.png)

* Lalu, untuk efek bonus kita akan menggunakan perintah efek vanilla:

```
minecraft:effect give %player% strength 10 0
```

### Kondisi set lengkap

Bagus! Kita baru saja membuat "kemampuan" yang dimiliki set lengkap, tetapi kita perlu menambahkan **kondisi** untuk memiliki set lengkap!

* Buka Player conditions->ifHasExecutableItems

![](https://media.ssomar.com/m/docs-img-image-193.png)

![](https://media.ssomar.com/m/docs-img-image-172.png)

![](https://media.ssomar.com/m/docs-img-image-332.png)

Lalu tambahkan 3 kondisi IfHasExecutableItem untuk 3 bagian armor lainnya. Dalam kasus ini, karena saya memilih helmet sebagai bagian utama, saya perlu menambahkan chestplate, leggings, dan boots.

Saya akan menjelaskan cara menambahkan chestplate sebagai kondisi terlebih dahulu:

* Jadi pada foto di atas, tambahkan sebuah kondisi dan Anda akan melihat ini
* ![](https://media.ssomar.com/m/docs-img-image-176.png)
* Yang pertama adalah EI yang dibutuhkan. Dalam kasus ini, saya akan menggulir ke bawah sampai menemukan chestplate
* ![](https://media.ssomar.com/m/docs-img-image-389.png)
* Setelah ketemu, lanjut ke opsi berikutnya -> "Amount", nilainya 1
* ![](https://media.ssomar.com/m/docs-img-image-258.png)
* Lalu, slot tempat ExecutableItem ini harus berada, untuk chestplate yaitu slot chestplate.
* ![](https://media.ssomar.com/m/docs-img-image-179.png)
* ![](https://media.ssomar.com/m/docs-img-image-427.png)

:::info
Ingat untuk menonaktifkan main hand dan hanya mengaktifkan 1 slot, yaitu slot yang Anda inginkan.
:::

* **Dan dalam kasus ini kita tidak akan menggunakan kondisi usage, jadi jangan diubah.**
* Lalu simpan.

Anda harus melakukan hal yang sama untuk 2 bagian lainnya. Setelah selesai, kita akan memiliki total 3 kondisi

![](https://media.ssomar.com/m/docs-img-image-249.png)

* Dan selesai! **Simpan item** dan coba!

![](https://media.ssomar.com/m/docs-img-image-348.png)

Berhasil! Sekarang.. jika Anda tidak memiliki salah satu armor, kondisi akan memberi tahu Anda.. 

![](https://media.ssomar.com/m/docs-img-image-384.png)

Untuk menonaktifkannya, kita perlu masuk ke editor kondisi lagi dan klik di sini

![](https://media.ssomar.com/m/docs-img-image-153.png)

Lalu atur ke NO VALUE

![](https://media.ssomar.com/m/docs-img-image-120.png)

Dan selesai, sekarang simpan dan tidak akan ada pesan kondisi yang muncul.

Dan sekarang.. selesai sudah!! 😁😁😎

:::info
Jika Anda memiliki pertanyaan, Anda dapat menanyakannya di **Discord** ^^

Metode oleh Special70
:::

Contoh:


```yaml
name: '&bHelmet'
material: DIAMOND_HELMET
lore:
  - '&7Wearing the full set grants Regeneration'
activators:
  fullSetBonus:
    name: Full Set Bonus
    option: LOOP
    delay: 1 # One second delay
    delayInTick: false # To specify that the delay need to be in seconds
    detailedSlots:
      - 39
    playerCommands:
      - minecraft:effect give %player% minecraft:regeneration 1 0
    playerConditions:
      ifHasExecutableItems:
        condition1_for_checking_chestplate: # 
          executableItem: CustomChestplate
          amount: 1
          detailedSlots:
            - 38
        condition2_for_checking_leggings:
          executableItem: CustomLeggings
          amount: 1
          detailedSlots:
            - 37
        condition3_for_checking_boots:
          executableItem: CustomBoots
          amount: 1
          detailedSlots:
            - 36
```


```yaml
name: '&bChestplate'
material: DIAMOND_CHESTPLATE
lore:
  - '&7Wearing the full set grants Regeneration'
```


```yaml
name: '&bLeggings'
material: DIAMOND_LEGGINGS
lore:
  - '&7Wearing the full set grants Regeneration'
```


```yaml
name: '&bBoots'
material: DIAMOND_BOOTS
lore:
  - '&7Wearing the full set grants Regeneration'
```
