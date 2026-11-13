---
description: >-
  Pelajari semua fitur blok ExecutableBlocks: pengaturan dasar, drop, kontainer,
  tungku, hopper, display, dan banyak lagi pada setiap blok kustom.
source_hash: 7bbe17ba1d336968
translated_at: '2026-11-13T17:47:20.652Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Fitur Blok


## Aktivator

* Fitur yang sangat penting yang memungkinkan Anda menambahkan kemampuan pada blok Anda
* Wiki khusus untuk fitur ini : [Daftar Aktivator EB](/executableblocks/configurations/activator-configuration/list-of-the-activators.md) dan [Fitur Aktivator EB](/executableblocks/configurations/activator-configuration/activators-features.md)


## Pengaturan Dasar

### CreationType

* Cara untuk membuat EB
  * BASIC\_CREATION
  * DISPLAY\_CREATION
  * IMPORT FROM EI
  * IMPORT FROM ITEMSADDER
  * IMPORT FROM NEXO
  * IMPORT FROM ORAXEN

### MATERIAL

* Info: Item Minecraft dasar dari executable block. [Material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
  * Info Tambahan: Item tersebut harus berupa blok yang dapat dipasang.

```yaml
material: DIRT
```

:::info
Spawner juga didukung! Jadi jika Anda ingin menentukan tipe untuk spawner Anda, tambahkan:

`spawnerType: CHICKEN`

[Daftar EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
:::


### DISPLAYNAME

* Info: Nama dari blok
* Contoh: 

```yaml
name: '&cEpic Sword'
```

### LORE

* Info: Lore dari blok
* Contoh:

```yaml
lore:
- §6>> §e----------- §6<<
- §aClick on this block
- §awhen it is placed !
- §aand see the custom structures !
- §6>> §e----------- §6<<
```

* Placeholder yang dapat Anda gunakan di lore: %player%, [%usage%](block-features.md#hide-usage-1.14+), dll.

### DROP BLOCK IF IT IS BROKEN

* Info: Menentukan apakah Executable Block Anda dapat diperoleh dengan cara dihancurkan atau tidak
* Contoh: 

```yaml
dropBlockIfItIsBroken: true
```

* Wajib: TIDAK (Default: true)

### DROP BLOCK IF IT IS BURNS

* Info: Menentukan apakah Executable Block Anda dapat diperoleh dengan cara dihancurkan atau tidak
* Contoh: 

```yaml
dropBlockIfItIsBurns: true
```

* Wajib: TIDAK (Default: false)

### DROP BLOCK WHEN IT EXPLODES

* Info: Menentukan apakah Executable Block Anda dapat diperoleh ketika dihancurkan oleh ledakan apa pun
* Contoh:

```yaml
dropBlockWhenItExplodes: true
```

* Wajib: TIDAK (Default: true)

### DROP TYPE

* Info: Pilih tipe drop yang akan dimiliki oleh blok EB
* Tipe drop:
  * IN\_THE\_INVENTORY
  * ON\_THE\_GROUND

### ONLY BREAKABLE WITH EI

* Info: Persyaratan untuk setidaknya memegang Executable Item yang diperlukan di tangan utama atau tangan sekunder agar dapat menghancurkan executable block
* Contoh:

```yaml
onlyBreakableWithEI:
- firework
```

* Wajib: TIDAK (Default: kosong)

### CANBEMOVED

* Info: Menentukan apakah blok dapat dipindahkan menggunakan piston atau tidak.
* Contoh:

```yaml
canBeMoved: false
```

### EXECUTABLE ITEMS ID

* Info: Pada dasarnya ini adalah opsi yang memungkinkan Anda menyinkronkan executable block Anda dengan sebuah executable item.
  * Info Tambahan: Executable block menyalin nama, material, dan lore dari executable item, jadi ketika Anda mencoba mengubah nama, material, atau lore dari EB, tidak akan ada yang berubah. Anda harus mengubah nama, material, dan lore dari EI agar perubahan pada EB berlaku
* Contoh: 

```yaml
executableItem: hack
```

* Wajib: TIDAK

## Fitur Title 

Mendukung [DecentHolograms](https://www.spigotmc.org/resources/96927/), [HolographicDisplays](https://dev.bukkit.org/projects/holographic-displays) dan [CMI](https://www.spigotmc.org/resources/3742/)

### ACTIVE TITLE 

* Info: Menentukan apakah hologram title diaktifkan atau tidak
* Contoh:

```yaml
activeTitle: false
```

* Wajib: TIDAK

### TITLE NAME 

* Info: Teks yang ditampilkan pada hologram
* Contoh: 

```yaml
title: '&7&oDefault title'
```

* (Dengan HolographicDisplay) Anda dapat menampilkan item pada title dengan tipe ITEM::MATERIAL

```yaml
title: 
- '&7&oDefault title'
- 'ITEM::DIAMOND'
```

* Wajib: TIDAK

### TITLE ADJUSTMENT 

* Info: Seberapa tinggi atau rendah penyesuaian ketinggian hologram title
* Contoh:

```yaml
titleAdjustment: 0.5
```

* Wajib: TIDAK
  * Info Tambahan: Angka positif untuk ke atas, angka negatif untuk ke bawah

```yaml
titleFeatures:
  # Active the title
  activeTitle: true
  # The title
  title:
   - Hello
   - &6It's support color
   - and %placeholder%
  titleAdjustment: 0.5
```

## Pengaturan Penggunaan Kustom

#### USAGE

* Info: Nilai yang menentukan berapa kali Anda dapat menggunakannya. Paling sering digunakan untuk fungsi modifikasi usage pada aktivator.
* Contoh: 

```yaml
usage: 0
```

Untuk blok dengan penggunaan tak terbatas:

```yaml
usage: -1
```

* Wajib: TIDAK (Default: 0)

:::info
usage: 0 sama dengan usage:1, tetapi tidak akan menampilkan teks "Remaining use:..." di lore.
:::

## Fitur Kontainer

:::info
Filter item mendukung tag `{CUSTOMODELDATA:X}` dengan benar, sehingga Anda dapat membuat hopper yang hanya mengambil item dengan tekstur tertentu
:::

### whitelistMaterials

* Di sini Anda dapat menambahkan daftar material yang dapat diletakkan di dalam blok Anda

```
containerFeatures:
  whitelistMaterials:
  - DIRT
```

### blacklistMaterials

* Di sini Anda dapat menambahkan daftar material yang tidak dapat diletakkan di dalam blok Anda

```
containerFeatures:
  blacklistMaterials:
  - STONE
```

:::info
Pada HOPPER, whitelist dan blacklist membatasi item yang dapat dihisap oleh hopper.
:::

### isLocked

* Menentukan apakah kontainer terkunci atau tidak

### lockedName

* Jika kontainer terkunci, Anda harus memilih nama dari kunci tersebut

```
containerFeatures:
  isLocked: true
  lockedName: ThisIsMyKey
```

### inventoryTitle

* Judul inventaris dari kontainer 

```
containerFeatures:
  inventoryTitle: INVENTORY TITLE
```

## Fitur Tungku

### furnaceSpeed

* Memungkinkan Anda menyesuaikan kecepatan tungku Anda.
* Contoh:

```
furnaceFeatures:
  furnaceSpeed: 2.0
```

:::info
Default -> 1

2 kali kecepatan default -> 2

Setengah kecepatan default -> 0.5
:::

### infiniteFuel

* Membuat blok tidak memerlukan bahan bakar untuk beroperasi

```
furnaceFeatures:
  infiniteFuel: true
```

### infiniteVisualLit

* Membuat blok terlihat seperti sedang menyala

```
furnaceFeatures:
  infiniteVisualLit: true
```

### fortuneMultiplier

* Pengali dari hasil.

```
furnaceFeatures:
  fortuneMultiplier: 5
```

:::info
Nilainya dapat negatif untuk mengurangi item dari penyimpanan hasil.
:::

### fortuneChance

* Peluang fortune diterapkan

```
furnaceFeatures:
  fortuneChance: 0.95
```

## Fitur Arah

### forceBlockFaceOnPlace

* Memaksa blok dipasang menghadap arah tertentu
* Contoh:

```
directionalFeatures:
  forceBlockFaceOnPlace: true
```

### blockFaceOnPlace

* Menetapkan sisi dari blok ketika dipasang
* Contoh:

```
directionalFeatures:
  forceBlockFaceOnPlace: true
  blockFaceOnPlace: NORTH
```

:::info
`blockFaceOnPlace` hanya diterapkan ketika `forceBlockFaceOnPlace` bernilai `true`. Tanpa itu, blok mempertahankan arah saat dipasang. Opsi-opsi ini hanya memutar blok berarah (blok yang memiliki `facing`).

Perintah [/eb place](/executableblocks/commands-and-permissions#place-an-eb-at-a-specific-position) juga dapat menerima arah, yang akan diprioritaskan di atas opsi-opsi ini.
:::

## Fitur Beehive <CustomTag type="version" version="1.15" /> {#beehive-features}

Mengisi sarang lebah atau beehive terlebih dahulu saat dipasang. Hanya untuk ExecutableBlocks yang materialnya adalah `BEEHIVE` atau `BEE_NEST` (dibuat dengan `BASIC_CREATION` atau `IMPORT_FROM_EXECUTABLE_ITEMS`), opsi ini tidak berpengaruh pada blok lainnya. Di editor dalam game, tombolnya hanya muncul untuk kedua material tersebut.

Kedua opsi bersifat opsional: ketika tidak ada yang diatur, blok tidak dimodifikasi dan tidak ada yang ditulis di config.

### honeyLevel

* Info: Tingkat madu dari blok yang dipasang, dari `0` (kosong) sampai `5` (penuh, madu dapat dipanen). Jika tidak diatur: tingkat madu tidak dimodifikasi.

### bees

* Info: Jumlah lebah yang dimasukkan ke dalam blok yang dipasang. Jika tidak diatur atau `0`: tidak ada lebah. Sebuah sarang menampung 3 lebah secara default, lebah tambahan tidak ditambahkan.

* Contoh:

```yaml
material: BEE_NEST
beehiveFeatures:
  honeyLevel: 5
  bees: 2
```

:::tip
Dengan [aktivator LOOP dan `loopTimerPerBlock: true`](/executableblocks/configurations/activator-configuration/list-of-the-activators#loop-), sarang lebah yang telah dipanen dapat dipasang kembali (sehingga terisi kembali) setelah waktu tertentu sejak dipasang.
:::

## Fitur Brewing stand

### brewingStandSpeed

* Memungkinkan Anda menyesuaikan kecepatan brewingStand Anda
* Contoh:

```
brewingStandFeatures:
  brewingStandSpeed: 1.0
```

:::info
Default -> 1

2 kali kecepatan default -> 2

Setengah kecepatan default -> 0.5
:::

## Fitur Hopper

### amountItemsTransferred

* Memungkinkan Anda menyesuaikan jumlah item yang dipindahkan pada setiap transfer hopper.
* Berlaku baik ketika hopper mendorong item ke kontainer yang dihadapinya maupun (sejak 26.11) ketika hopper menarik item dari kontainer di atasnya.
* Contoh:

```yaml
hopperFeatures:
  amountItemsTransferred: 5
```

## Fitur Display

### Material

* Material dari item yang akan ditampilkan
* Contoh:

```
DisplayFeatures:
  material: PAPER
```

### Custom model data

* Custom model data dari material yang akan ditampilkan
* Contoh:

```
DisplayFeatures:
  customModelData: 3
```

### Scale

* Skala dari display
* Contoh:

```
DisplayFeatures:
  scale: 1
```

### aligned

* Jika Anda ingin display disejajarkan
* Contoh:

```
DisplayFeatures:
```
aligned: false

### customPitch

* Pilih pitch kustom
* Contoh:

```
DisplayFeatures:
  customPitch: 1
```

### customY

* Pilih Y kustom
* Contoh:

```
DisplayFeatures:
  customY: 1.0
```

### Glow

* Bercahaya atau tidak
* Contoh:

```
DisplayFeatures:
  glow: false
```

### Fitur Interaction zone

* Lebar dari display
* Tinggi dari display
* Dapat bertabrakan (collidable) atau tidak
* Contoh:

```
DisplayFeatures:
  InteractionZoneFeatures:
    width: 1.0
    height: 1.0
    isCollidable: false
```

### Click to break

* Jumlah klik yang diperlukan untuk menghancurkan display creation
* Contoh:

```
DisplayFeatures:
  clickToBreak: 3
```

## Chiseled Bookshelf

### occupiedSlots

* Menetapkan slot mana (indeks 0-5) yang akan berisi buku

```
chiseledBookshelfFeatures:
  occupiedSlots:
  - '2'
  - '5'
```

## Cancel

### cancelLiquidDestroy

* Info: Akan membatalkan penghancuran bibit dan kepala pemain oleh air/lava
* Contoh: 

```
cancelLiquidDestroy: true
```
