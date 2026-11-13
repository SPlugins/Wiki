---
description: >-
  Panduan membuat saklar on/off untuk item di ExecutableItems Premium dengan dua
  aktivator, Variables, kondisi placeholder, dan cooldown.
source_hash: 739c8a7115be416e
translated_at: '2026-11-13T17:51:37.987Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Saklar On / Off

## Persyaratan+

* ExecutableItems **Premium**

## CATATAN: BUAT 2 AKTIVATOR TERLEBIH DAHULU.

## Aktivator pertama

### Buat sebuah variabel

* Sebuah variabel perlu dibuat agar kita memiliki pengenal untuk menentukan apakah saklar sedang on/off

![Anda klik ikon ini untuk membuka editor variabel](https://media.ssomar.com/m/docs-img-imgur-nrkkixb.png)

![Pada dasarnya Anda cukup membuat sebuah variabel](https://media.ssomar.com/m/docs-img-imgur-jubywre.png)

![Untuk id, tidak ada aturan khusus. Pada panduan ini, kita akan menamai variabel kita "x"](https://media.ssomar.com/m/docs-img-imgur-ua4vmpu.png)

![Tidak masalah apakah berupa angka atau string](https://media.ssomar.com/m/docs-img-imgur-nut1h4h.png)

![Untuk tutorial ini kita akan menggunakan nilai 0](https://media.ssomar.com/m/docs-img-imgur-bj4cpf7.png)

### Buat item Anda, lalu tambahkan sebuah aktivator

* Dalam kasus ini aktivatornya adalah PLAYER\_ALL\_CLICK

![](https://media.ssomar.com/m/docs-img-image-94.png)

### Perintah

* Ketik perintah apa pun yang Anda inginkan

### Variables Modification

![Pertama, klik ikon ini di editor aktivator](https://media.ssomar.com/m/docs-img-imgur-lvcmrrl.png)

![Buat sebuah variables modification](https://media.ssomar.com/m/docs-img-imgur-r50hlwy.png)

![Pilih variabel yang kita buat sebelumnya](https://media.ssomar.com/m/docs-img-imgur-sksrdko.png)

![Atur tipe modifikasi ke SET](https://media.ssomar.com/m/docs-img-imgur-bbwjzw8.png)

![Kita akan mengatur nilai selain 0 agar aktivator yang sama tidak dapat berjalan untuk kedua kalinya](https://media.ssomar.com/m/docs-img-imgur-av856uf.png)

### Placeholder Condition

* Ini diperlukan untuk mengatur aktivator mana yang akan berjalan 

![Pertama, kita buka kondisi](https://media.ssomar.com/m/docs-img-image-419.png)

![Lalu ke kondisi placeholder](https://media.ssomar.com/m/docs-img-image-303.png)

![Tentu saja, kita harus membuat sebuah kondisi placeholder](https://media.ssomar.com/m/docs-img-image-429.png)

![PLAYER\_STRING juga merupakan sebuah opsi](https://media.ssomar.com/m/docs-img-imgur-nxuypmm.png)

![Kita akan menggunakan placeholder untuk variabel yang kita buat. Gunakan %var\_x\_int% jika Anda tetap menggunakan PLAYER\_STRING](https://media.ssomar.com/m/docs-img-imgur-0qdthro.png)

![Kita akan menggunakan pembanding ini](https://media.ssomar.com/m/docs-img-imgur-urvtgm8.png)

![Kita akan menggunakan nilai 0 sebagai opsi "off"](https://media.ssomar.com/m/docs-img-imgur-cuorrfg.png)

### Tambahkan cooldown item yang lain ke item itu sendiri

* Sebagai contoh, id item EI adalah `onoff-demo`. Anda kemudian harus membuka ikon ini lalu mengikuti gambar-gambar berikut.

![](https://media.ssomar.com/m/docs-img-imgur-mmhsap4.png)

![](https://media.ssomar.com/m/docs-img-imgur-anndswf.png)

![](https://media.ssomar.com/m/docs-img-imgur-q6vjclp.png)

Sebagai contoh, id saklar on/off adalah "faker", jadi pilih "faker".

![](https://media.ssomar.com/m/docs-img-imgur-x1dtqww.png)

Sejak versi 5.0 dirilis, id aktivator dimulai dari "activator0" dan bukan "activator1". Bagaimanapun, Anda perlu memilih aktivator kedua karena aktivator berjalan dari atas ke bawah. 

:::info
Opsi ini penting karena jika tidak ada cooldown, aktivator akan langsung menerobos ke aktivator kedua yang seharusnya mematikan aktivator tersebut
:::

![Atur cooldown ke 1 atau 2. Anda yang menentukan](https://media.ssomar.com/m/docs-img-imgur-zv8ioie.png)

![](https://media.ssomar.com/m/docs-img-imgur-izxlfq9.png)

Disarankan untuk mengatur ini ke true jika Anda ingin item dapat digunakan berulang kali dengan cepat. Satu tick sudah cukup untuk mencegah penerobosan yang disebutkan di atas.

![](https://media.ssomar.com/m/docs-img-imgur-gb5oud0.png)

## Aktivator kedua

* Kita akan kembali menggunakan **`PLAYER_ALL_CLICK`**

![](https://media.ssomar.com/m/docs-img-image-165.png)

###

### Perintah

* Ketik perintah apa pun yang Anda inginkan

### Variables Modification

![Pertama, klik ikon ini di editor aktivator](https://media.ssomar.com/m/docs-img-imgur-lvcmrrl.png)

![Buat sebuah variables modification](https://media.ssomar.com/m/docs-img-imgur-r50hlwy.png)

![Pilih variabel yang kita buat sebelumnya](https://media.ssomar.com/m/docs-img-imgur-sksrdko.png)

![Atur tipe modifikasi ke SET](https://media.ssomar.com/m/docs-img-imgur-bbwjzw8.png)

![Kita akan mengatur nilai selain 1 agar aktivator yang sama tidak dapat berjalan untuk kedua kalinya](https://media.ssomar.com/m/docs-img-imgur-0kzktpe.png)

### Placeholder Condition

* Ini diperlukan untuk mengatur aktivator mana yang akan berjalan 

![Pertama, kita buka kondisi](https://media.ssomar.com/m/docs-img-image-419.png)

![Lalu ke kondisi placeholder](https://media.ssomar.com/m/docs-img-image-303.png)

![Tentu saja, kita harus membuat sebuah kondisi placeholder](https://media.ssomar.com/m/docs-img-image-429.png)

![PLAYER\_STRING juga merupakan sebuah opsi](https://media.ssomar.com/m/docs-img-imgur-nxuypmm.png)

![Kita akan menggunakan placeholder untuk variabel yang kita buat. Gunakan %var\_x\_int% jika Anda tetap menggunakan PLAYER\_STRING](https://media.ssomar.com/m/docs-img-imgur-0qdthro.png)

![Kita akan menggunakan pembanding ini](https://media.ssomar.com/m/docs-img-imgur-urvtgm8.png)

![Kita akan menggunakan nilai 1 sebagai opsi "on"](https://media.ssomar.com/m/docs-img-imgur-bjkv5hy.png)

### Tambahkan cooldown item yang lain ke item itu sendiri

* Sebagai contoh, id item EI adalah `onoff-demo`. Anda kemudian harus membuka ikon ini lalu mengikuti gambar-gambar berikut.

![](https://media.ssomar.com/m/docs-img-imgur-mmhsap4.png)

![](https://media.ssomar.com/m/docs-img-imgur-anndswf.png)

![](https://media.ssomar.com/m/docs-img-imgur-q6vjclp.png)

Sebagai contoh, id saklar on/off adalah "faker", jadi pilih "faker".

![](https://media.ssomar.com/m/docs-img-imgur-tfly1dt.png)

Sejak versi 5.0 dirilis, id aktivator dimulai dari "activator0" dan bukan "activator1". Bagaimanapun, Anda perlu memilih aktivator kedua karena aktivator berjalan dari atas ke bawah. 

:::info
Opsi ini penting karena jika tidak ada cooldown, aktivator akan langsung menerobos ke aktivator kedua yang seharusnya mematikan aktivator tersebut
:::

![Atur cooldown ke 1 atau 2. Anda yang menentukan](https://media.ssomar.com/m/docs-img-imgur-zv8ioie.png)

![](https://media.ssomar.com/m/docs-img-imgur-izxlfq9.png)

Disarankan untuk mengatur ini ke true jika Anda ingin item dapat digunakan berulang kali dengan cepat. Satu tick sudah cukup untuk mencegah penerobosan yang disebutkan di atas.

![](https://media.ssomar.com/m/docs-img-imgur-gb5oud0.png)

##

### Simpan item EI

* Hasilnya seharusnya terlihat seperti ini (Kami menambahkan perintah untuk menampilkan ON (activator1) dan OFF (activator2) agar Anda dapat melihat cara kerjanya :p

## Konfigurasi item

```yaml
name: '&e&lOn/Off Demo'
lore: []
material: LEVER
glow: true
usage: 1
usageLimit: -1
hiders:
  hideEnchantments: false
  hideUnbreakable: false
  hideAttributes: false
  hidePotionEffects: false
  hideUsage: true
  hideDye: false
enchantments: {}
restrictions:
  cancel-item-place: false
variables:
  x:
    variableName: x
    type: NUMBER
    default: 0.0
attributes: {}
activators:
  activator0:
    name: '&eToggle-On'
    option: PLAYER_ALL_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: false
    otherEICooldowns:
      cd0:
        executableItem: onoff-demo
        activators:
        - activator1
        cooldown: 1
        isCooldownInTicks: true
    requiredItems:
      errorMessage: ''
    requiredExecutableItems:
      errorMessage: ''
    detailedSlots:
    - -1
    playerCommands:
    - SENDMESSAGE Toggled On
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchC1:
        type: PLAYER_NUMBER
        comparator: EQUALS
        part1: '%var_x%'
        part2: '0.0'
        cancelEventIfNotValid: true
        messageIfNotValid: '&e'
    variablesModification:
      varModif0:
        variableName: x
        type: SET
        modification: 1.0
  activator1:
    name: '&eToggle-Off'
    option: PLAYER_ALL_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: false
    otherEICooldowns:
      cd0:
        executableItem: onoff-demo
        activators:
        - activator0
        cooldown: 1
        isCooldownInTicks: true
    requiredItems:
      errorMessage: ''
    requiredExecutableItems:
      errorMessage: ''
    detailedSlots:
    - -1
    playerCommands:
    - SENDMESSAGE Toggled Off
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchC1:
        type: PLAYER_NUMBER
        comparator: EQUALS
        part1: '%var_x%'
        part2: '1.0'
        cancelEventIfNotValid: true
        messageIfNotValid: '&e'
    variablesModification:
      varModif0:
        variableName: x
        type: SET
        modification: 0.0

```

## Komentar terakhir

Jika Anda memiliki pertanyaan atau merasa panduan ini kurang jelas, silakan bertanya di Discord.\
Kami akan membantu Anda ! 😁😁
