---
description: >-
  Daftar perintah entity kustom di ExecutableItems: ANGRY_AT, CHANGE_INTO_ITEM,
  HEAL, KILL, SET_AI, teleportasi, dan lainnya, lengkap dengan contoh.
source_hash: f04bd6ad6572d292
translated_at: '2026-11-13T17:52:35.345Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Perintah Entity

:::tip
Kompatibilitas "multi-world" untuk perintah vanilla.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Contoh, Anda ingin memunculkan Zombie di world SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Contoh dengan placeholder`:`

`execute in <<%entity_world%>> run summon zombie 100 50 100`
:::

:::info
Perintah entity mendukung NPC dari Citizens
:::

## Perintah Campuran

Selain daftar perintah berikut, Anda juga dapat menggunakan:

<LinkPreview
  url="docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity"
  title="Mixed commands (Compatible with Player and Entity)"
/>

Perintah-perintah ini dapat digunakan dalam perintah terkait Player ATAU perintah terkait Entity.

## Perintah kustom

_Diurutkan berdasarkan abjad_

### ANGRY\_AT

* Info: Mengatur target entity ke UUID tertentu
* Pengaturan perintah:
  * `{entityUUID}`: UUID entity dari target
* Contoh:

```
- ANGRY_AT entityUUID:%player_uuid%
# To reset the angry set null
- ANGRY_AT entityUUID:null
```

### AWARENESS

* Info: Mengatur apakah mob ini menyadari lingkungan sekitarnya. Mob yang tidak sadar tetap akan bergerak jika didorong, diserang, dan sebagainya, tetapi tidak akan bergerak atau melakukan tindakan apa pun dengan sendirinya. Mob yang tidak sadar juga dapat memiliki perilaku tak tertentu lainnya yang dinonaktifkan, seperti tenggelam.

:::info
Hanya berfungsi untuk 1.16.5+
:::

* Pengaturan perintah:
  * `{value}`: true atau false
* Contoh:

```
- AWARENESS value:true
```

### CHANGE\_INTO\_ITEM

* Info: Mengganti item yang dijatuhkan (entity item di tanah atau di udara) dengan item vanilla atau ExecutableItem. Entity-nya tetap sama, hanya item yang dibawanya yang berubah.
* Dibuat untuk aktivator `PLAYER_FISH_FISH` dari ExecutableItems: di sana, entity yang ditargetkan oleh `entityCommands` adalah item yang tertangkap. Item itu diubah sebelum ditarik, sehingga pemain tetap mendapatkan animasi memancing yang normal dan menerima item Anda sebagai ganti ikan. Tidak perlu `/ei give`, `DELAYTICK`, maupun `data merge`.
  * Di ExecutableEvents (setiap pancingan di server), tuliskan di `targetEntityCommands` dari `PLAYER_FISH_FISH`.
* Pengaturan perintah:
  * `item`: Sebuah material (`DIAMOND`) atau id dari sebuah ExecutableItem (`my_custom_fish`).
  * `amount`: (Opsional) Jumlah item baru. Default: 1
* Contoh:

```yaml
activators:
  activator0:
    option: PLAYER_FISH_FISH
    entityCommands:
    - CHANGE_INTO_ITEM item:my_custom_fish amount:1
```

```
- CHANGE_INTO_ITEM item:DIAMOND amount:3
- CHANGE_INTO_ITEM item:EI:my_custom_fish
```

:::info
* Jika sebuah ExecutableItem dan sebuah material memiliki nama yang sama, ExecutableItem yang digunakan. Tulis `EI:my_id` untuk hanya menerima ExecutableItem.
* ExecutableItem dibuat untuk pemain yang memicu aktivator (pemilik, placeholder dari item).
* Perintah ini tidak melakukan apa pun jika entity target bukan item yang dijatuhkan (mob, pemain...), dan akan mencetak pesan di konsol jika `item` bukan material maupun ExecutableItem yang dimuat.
* Contoh lengkap dengan loot table acak: [Custom fishing loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot)
:::

### CHANGE\_TO

* Info: Mengganti mob dengan entity bertipe lain. Kecepatan (velocity) entity saat ini akan dipertahankan.
  * Anda dapat menentukan sebuah [EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * Atau contoh definisi entity: `{HasVisualFire:1b,id:"minecraft:bee"}` (1.21.+)
  * Atau sebuah ID MythicMob
* Pengaturan perintah:
  * `{entity}`: Spesifikasi entity
* Contoh:

```
# With EntityType
- CHANGE_TO entity:CHICKEN

# With EntitySnapshot
- CHANGE_TO entity:{HasVisualFire:1b,id:"minecraft:bee"}

# Or using variable
- CHANGE_TO entity:%var_myvar%

# With MythicMob ID
- CHANGE_TO entity:MyCustomBossID
```

### DROPEXECUTABLEITEM

* Info: Menjatuhkan sebuah Executable Item di lokasi entity
* Pengaturan perintah:
  * `{id}`: Id item dari ExecutableItem
  * `{quantity}`: Jumlah executable item yang akan dijatuhkan
  * `[owner]`: (Opsional) Pemilik item yang dijatuhkan (IGN pemain atau UUID)
  * `[itemdata]`: (Opsional) Pengaturan data item yang berisi:
    * `Usage`: Mengatur nilai penggunaan
    * `Variables`: Mengatur variabel kustom (format: `{key:value}`)
    * `Durability`: Mengatur nilai durabilitas
* Contoh:

```
- DROPEXECUTABLEITEM ElytraTrail 1
- DROPEXECUTABLEITEM id:ElytraTrail amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Info: Menjatuhkan sebuah Executable Block di lokasi entity
* Pengaturan perintah:
  * `{id}`: Id item dari ExecutableBlock
  * `{quantity}`: Jumlah executable block yang akan dijatuhkan
* Contoh:

```
- DROPEXECUTABLEBLOCK House 1
```

### DROPITEM

* Info: Menjatuhkan sebuah item di lokasi entity
* Pengaturan perintah:
  * `{material}`: Tipe item. [Referensi](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) **(HARUS HURUF KAPITAL SEMUA)**
  * `{quantity}`: Jumlah item yang akan dijatuhkan
* Contoh:

```
- DROPITEM DIAMOND 1
```

### HEAL

* Info: Memulihkan entity dengan jumlah tertentu, jika tidak ditentukan maka entity akan dipulihkan sepenuhnya.
* Pengaturan perintah:
  * `{amount}`: Jumlah pemulihan
* Contoh:

```
# Full heal
- HEAL
# Amount specific heal
- HEAL amount:5
# Remove heal
- HEAL amount:-5
```

### KILL

* Info: Membunuh mob tanpa animasi kematian
* Tidak ada pengaturan perintah
* Contoh:

```
- KILL
```

### PLAYER\_RIDE\_ENTITY

* Info: Membuat pemain menunggangi entity yang ditargetkan.
* Pengaturan perintah:
  * `{control}`: true/false apakah Anda dapat mengendalikan entity secara manual atau tidak
  * `{speed}`: seberapa cepat entity dapat bergerak saat Anda menungganginya
* Contoh:

```yaml
- PLAYER_RIDE_ON_ENTITY control:true speed:1.0
```

### SET\_AI

* Info: Mengatur status AI dari entity
* Pengaturan perintah:
  * `{value}`: true untuk mengaktifkan AI entity dan false untuk menonaktifkannya.
* Contoh:

```
- SET_AI value:false
```

### SET\_ADULT

* Info: Mengatur entity ke status "dewasa"
* Tidak ada pengaturan perintah
* Contoh:

```
- SET_ADULT
```

* Contoh situasi:
  * Jika perintah ini dijalankan pada anak ayam, ayam tersebut akan berubah menjadi bentuk dewasanya.

### SET\_BABY

* Info: Mengatur entity ke status "bayi"
* Tidak ada pengaturan perintah
* Contoh:

```
- SET_BABY
```

* Contoh situasi:
  * Jika perintah ini dijalankan pada ayam dewasa, ayam tersebut akan berubah menjadi bentuk bayinya.

### SET\_ENTITY\_NAME

* Info: Mengatur nama entity secara paksa
* Pengaturan perintah:
  * `{name}`: nama baru dari entity
* Contoh:

```
- SET_ENTITY_NAME name:&6Final &cBoss
```

### SHEAR

* Info: Mencukur entity
* Tidak ada pengaturan perintah
* Contoh:

```
- SHEAR
```

### TELEPORT\_ENTITY\_TO\_PLAYER

* Info: Teleportasi entity ke pengguna item
* Tidak ada pengaturan perintah
* Contoh:

```
- TELEPORT_ENTITY_TO_PLAYER
```

### TELEPORT\_PLAYER\_TO\_ENTITY

* Info: Teleportasi pengguna item ke entity
* Tidak ada pengaturan perintah
* Contoh:

```
- TELEPORT_PLAYER_TO_ENTITY
```

### TELEPORT\_POSITION

* Info: Teleportasi entity ke lokasi tertentu
* Pengaturan perintah:
  * `{x}`: Koordinat X
  * `{y}`: Koordinat Y
  * `{z}`: Koordinat Z
* Contoh:

```
- TELEPORT_POSITION x:%target_x% y:%target_y% z:%target_z%
```
