---
description: >-
  Pelajari pembatasan dan resistensi item di ExecutableItems: cegah drop, craft,
  anvil, penyimpanan, dan interaksi lainnya untuk item kustom Anda.
source_hash: bf6b77f864065099
translated_at: '2026-11-13T17:50:55.220Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Pembatasan/Resistensi Item

Di halaman ini Anda akan mempelajari pembatasan item dan beberapa resistensi, yang memungkinkan Anda menyesuaikan perilaku item pada kasus-kasus tertentu.

## Pembatasan global

* Info: Jika Anda ingin menambahkan salah satu pembatasan item ke semua item yang telah Anda buat di plugin, Anda dapat menambahkan konfigurasi pembatasan yang Anda inginkan di dalam file config.yml milik plugin.
* Contoh: Saya ingin menambahkan pembatasan tidak boleh menggunakan anvil dan grind stone ke semua ExecutableItems yang sudah dibuat maupun yang akan dibuat.


```yaml
# ----------------------------------
# -
#       ExecutableItems
# -
#         By: Ssomar
# -
# ----------------------------------
# -
# WIKI HERE : https://splugins.net/docs/executableitems/information-ei
# DISCORD HERE : https://discord.com/invite/TRmSwJaYNv
# -

## Start of default config features
pickup-limit: -1
disable-world: [ ]
premium-enable-cooldown-for-op: true #Premium only
checkVersionMsg: true
disableTestItems: false # If you have a big server with a lot of players, it's recommended to turn this option on true
silentEIGive: false
silentMessagePreventionErrorHeadDBError: false
disableBackup: false #<- Backup your items config at each start / reload of the server
deleteBackupsAfterDays: 7 #<- It will deletes backups older than this number of days
## End of default config features
## 
## Start for manually added restrictions to apply on all ExecutableItems
restrictions:
  cancel-anvil: true
  cancel-grind-stone: true
## End for manually added restrictions to apply on all ExecutableItems
```


## Pembatasan individual

Di bagian ini Anda akan mempelajari cara menambahkan pembatasan individual hanya untuk ExecutableItem yang sedang Anda edit.

### Batalkan drop item

* Info: Nilai boolean yang mencegah pemain men-drop executable item.
* Catatan: ketika item tidak dapat kembali ke inventaris (misalnya item berada di kursor saat inventaris ditutup dan semua slot penuh), drop diizinkan dan item tidak dihapus.
* Contoh:

```yaml
restrictions:
  cancel-item-drop: true
```

### Batalkan penempatan blok ke tanah.

* Info: Nilai boolean yang mencegah pemain menempatkan Executable Items ke tanah jika item tersebut merupakan instance dari blok.
* Contoh:

```yaml
restrictions:
  cancel-item-place: true
```

### Batalkan penggunaan item dalam resep apa pun di crafting table

* Info: Nilai boolean yang mencegah pemain meng-craft resep vanilla dengan ExecutableItem.
* Contoh:

```yaml
restrictions:
  cancel-item-craft: true
```

### Batalkan penggunaan item hanya pada resep vanilla, tanpa memengaruhi resep kustom

* Info: Nilai boolean yang mencegah pemain meng-craft resep vanilla dengan ExecutableItem, tetapi item tetap dapat digunakan untuk resep crafting kustom.
* Contoh:

```yaml
restrictions:
  cancel-item-craft-no-custom: true
```

### Batalkan interaksi untuk mendekorasi pot Minecraft

* Info: Nilai boolean yang mencegah pemain memasukkan ExecutableItems ke dalam decorated pot.
* Contoh:

```yaml
restrictions:
  cancel-decorated-pot: true
```

### Batalkan penempatan item di shelf

* Info: Nilai boolean yang mencegah pemain menempatkan ExecutableItem di shelf (Minecraft 1.21.9+, semua jenis kayu).
  * Berguna untuk item yang memberikan dirinya kembali melalui aktivatornya (misalnya ember air "tak terbatas"): tanpa pembatasan ini, item yang diletakkan di shelf tetap berada di sana sementara aktivator memberikan item baru.
* Contoh:

```yaml
restrictions:
  cancel-shelf: true
```

### Batalkan penyimpanan item ke dalam storage

* Info: Nilai boolean yang mencegah pemain memasukkan ExecutableItem ke dalam daftar berikut:
  * Chest
  * Ender Chest
  * Trapped Chest
  * Barrel
  * Shulker Box
* Contoh: (Fitur ini tidak berfungsi di mode creative)

```yaml
restrictions:
  cancel-deposit-in-chest: true
```

### Batalkan penyimpanan item ke dalam furnace

* Info: Nilai boolean yang mencegah pemain memasukkan ExecutableItem ke dalam daftar berikut:
  * Furnace
  * Blast Furnace
  * Smoker
* Contoh: (Fitur ini tidak berfungsi di mode creative)

```yaml
restrictions:
  cancel-deposit-in-furnace: true
```

### Batalkan terbakarnya item di api dan lava

* Info: Nilai boolean yang mencegah ExecutableItem terbakar di api atau lava.
* Contoh:

```yaml
restrictions:
  cancel-item-burn: true
```

### Batalkan penghapusan item akibat interaksi dengan kaktus

* Info: Nilai boolean yang mencegah ExecutableItem terhapus saat menyentuh blok kaktus.
* Contoh:

```yaml
restrictions:
  cancel-item-delete-by-cactus: true
```

### Batalkan penghapusan item saat tersambar petir

* Info: Nilai boolean yang mencegah ExecutableItem terhapus saat tersambar petir.
* Config: `cancel-item-delete-by-lightning: true`
* Contoh:

```yaml
restrictions:
  cancel-item-delete-by-lightning: true
```

### Batalkan enchanting item

* Info: Nilai boolean yang mencegah item di-enchant.
* Contoh:

```yaml
restrictions:
  cancel-enchant: true
```

### Batalkan penempatan item di dalam anvil 

* Info: Nilai boolean yang mencegah pemain memasukkan ExecutableItem ke dalam anvil. Dengan begitu item tidak dapat ditempatkan, sehingga mengganti nama dan enchant juga tercegah.
* Contoh:

```yaml
restrictions:
  cancel-anvil: true
```

### Batalkan aksi mengganti nama menggunakan anvil

* Info: Nilai boolean yang mencegah pemain mengganti nama ExecutableItem menggunakan anvil.
* Contoh:

```yaml
restrictions:
  cancel-rename-anvil: true
```

:::tip
Item yang diperbaiki atau di-enchant di anvil **tanpa diganti namanya** tetap mempertahankan nama berwarna / gradien berkat [keepNameInAnvil](/executableitems/configurations/general-configuration#keepnameinanvil) (aktif secara default). Opsi tersebut ditempatkan di `plugins/ExecutableItems/config.yml`, bukan di file item.
:::

### Batalkan aksi enchant menggunakan anvil

* Info: Nilai boolean yang mencegah pemain meng-enchant ExecutableItem menggunakan anvil.
* Contoh:

```yaml
restrictions:
  cancel-enchant-anvil: true
```

### Batalkan interaksi item dengan kuda/bagal/llama

* Info: Nilai boolean yang mencegah ExecutableItems berinteraksi dengan kuda/bagal/llama. Ini juga menonaktifkan penyimpanannya.
* Contoh:

```yaml
restrictions:
  cancel-horse: true
```

### Batalkan konsumsi/makan item

* Info: Nilai boolean yang mencegah pemain mengonsumsi atau memakan ExecutableItem.
* Contoh:

```yaml
restrictions:
  cancel-consumption: true
```

### Batalkan penggunaan item di dalam blok crafter

* Info: Nilai boolean yang mencegah pemain memasukkan ExecutableItems ke dalam blok crafter.
* Config: `cancel-crafter: false`

```yaml
restrictions:
  cancel-crafter: true
```

### Pembatasan terkunci di inventaris

* Info: Nilai boolean yang membuat ExecutableItem tetap berada di slot tempatnya berada dan mencegah pemain memindahkannya dengan cara apa pun.
* Contoh (Fitur ini tidak berfungsi di mode creative)

```yaml
restrictions:
  locked-in-inventory: true
```

### Batalkan interaksi alat

* Info: Nilai boolean yang mencegah pemain menggunakan ExecutableItem untuk memicu interaksi alat. Contoh: (klik kanan sebuah blok menggunakan kapak untuk mengupas kulitnya, menggunakan cangkul untuk membajak blok rumput)
* Contoh:

```yaml
restrictions:
  cancel-tool-interactions: true
```

### Batalkan penempatan item di dalam item frame

* Info: Nilai boolean yang mencegah pemain memasukkan ExecutableItem ke dalam item frame.
* Contoh:

```yaml
restrictions:
  cancel-item-frame: true
```

### Batalkan interaksi dengan smithing table

* Info: Nilai boolean yang mencegah pemain memasukkan ExecutableItem ke dalam smithing table.
* Contoh:

```yaml
restrictions:
  cancel-smithing-table: true
```

### Batalkan interaksi dengan grindstone

* Info: Nilai boolean yang mencegah pemain memasukkan ExecutableItem ke dalam grindstone.
* Contoh:

```yaml
restrictions:
  cancel-grind-stone: true
```

### Batalkan interaksi dengan stonecutter

* Info: Nilai boolean yang mencegah pemain memasukkan ExecutableItem ke dalam stonecutter.
* Contoh:

```yaml
restrictions:
  cancel-stone-cutter: true
```

### Batalkan interaksi dengan brewing stand 

* Info: Nilai boolean yang mencegah pemain memasukkan ExecutableItem ke dalam brewing stand.
* Contoh:

```yaml
restrictions:
  cancel-brewing: true
```

### Batalkan interaksi dengan beacon

* Info: Nilai boolean yang mencegah pemain memasukkan ExecutableItem ke dalam beacon.
* Contoh:

```yaml
restrictions:
  cancel-beacon: true
```

### Batalkan interaksi dengan cartography table

* Info: Mencegah pemain memasukkan ExecutableItem ke dalam cartography table.
* Contoh:

```yaml
restrictions:
  cancel-cartography: true
```

### Batalkan interaksi dengan blok composter

* Info: Nilai boolean yang mencegah pemain memasukkan ExecutableItem ke dalam composter.
* Contoh:

```yaml
restrictions:
  cancel-composter: true
```

### Batalkan interaksi dengan blok dispenser.

* Info: Nilai boolean yang mencegah pemain memasukkan ExecutableItem ke dalam blok dispenser.
* Contoh:

```yaml
restrictions:
  cancel-dispenser: true
```

### Batalkan interaksi dengan blok dropper

* Info: Nilai boolean yang mencegah pemain memasukkan ExecutableItem ke dalam blok dropper.
* Contoh:

```yaml
restrictions:
  cancel-dropper: true
```

### Batalkan interaksi dengan blok hopper

* Info: Nilai boolean yang mencegah pemain memasukkan item ExecutableItem ke dalam hopper. Artinya item tidak dapat ditinggalkan di dalam wadah hopper. Ini tidak mencegah item masuk ke hopper melalui item yang dijatuhkan di atas hopper.
* Contoh:

```yaml
restrictions:
  cancel-hopper: true
```

### Batalkan interaksi dengan blok lectern

* Info: Nilai boolean yang mencegah pemain memasukkan ExecutableItem ke dalam blok lectern.
* Contoh:

```yaml
restrictions:
  cancel-lectern: true
```

### Batalkan interaksi dengan villager trader/merchant

* Info: Nilai boolean yang mencegah pemain memasukkan ExecutableItem ke dalam trade villager/merchant.
* Contoh:

```yaml
restrictions:
  cancel-merchant: true
```

### Batalkan pertukaran item antar tangan

* Info: Nilai boolean yang mencegah pemain menukar item dari satu tangan ke tangan lainnya. Biasanya menggunakan tombol F pada keyboard untuk "Swap items with offhand".
* Contoh:

```yaml
restrictions:
  cancel-swap-hand: true
```

### Batalkan interaksi dengan horn

* Info: Nilai boolean yang mencegah pemain membunyikan horn jika ExecutableItem tersebut adalah sebuah horn.
* Contoh:

```yaml
restrictions:
  cancel-horn: true
```

### BATALKAN ARMOR STAND

* Info: Mencegah pemain memasang ExecutableItem pada armor stand.
* Contoh:

```yaml
restrictions:
  cancel-armorstand: true
```

### BATALKAN SPAWNER

* Info: Mencegah pemain menggunakan spawn egg ExecutableItem pada spawner dengan cara vanilla-nya.
* Contoh:

```yaml
restrictions:
  cancel-spawner: true
```

### BATALKAN PENEMPATAN DI BUNDLE

* Info: Mencegah pemain memasukkan ExecutableItem ke dalam bundle.
* Contoh:

```yaml
restrictions:
  cancel-place-in-bundle: true
```
