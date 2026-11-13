---
description: >-
  Daftar lengkap perintah dan izin ExecutableBlocks: buat, tempatkan, hapus,
  berikan, dan muat ulang blok kustom dengan izin yang sesuai.
source_hash: 653dceef09a76278
translated_at: '2026-11-13T17:47:28.033Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ⌨️ Perintah & Izin

## Izin

**TIPS untuk pemula:**

:::info
Untuk memberikan izin semua item, saya menyarankan Anda mengunduh plugin izin seperti [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/). Setelah Anda memiliki plugin izin, Anda hanya perlu memberikan izin **`eb.block.*`**, untuk Luckperms perintahnya adalah **`/lp group default permission set eb.block.* true`**
:::

#### Izin blok

* Izin: `eb.block.{id}`
* Izin negatif: `-eb.block.{id}` 
* Contoh: `eb.block.Test`
* Berikan izin semua item: `eb.block.*` 

#### Berikan semua izin EB

* Izin: `eb.*`

#### Berikan izin semua perintah EB

* Izin: `eb.cmds`

#### Izin bypass cooldown

* Izin: `eb.nocd.{id}` `eb.nocd.*`
* Deskripsi: Berikan izin kustom ini untuk menonaktifkan cooldown bagi pemain VIP Anda
* (Pastikan untuk menguji tanpa menjadi op)

**Batas EB**

* Izin: `eb.limit.{amount}`
* Deskripsi: Menetapkan nilai maksimum EB yang dapat ditempatkan oleh seorang pemain.

#### Batasi EB tertentu

* Izin: `eb.block.ID.limit.{amount}`
* Deskripsi: Membatasi jumlah EB dengan ID tertentu yang dapat ditempatkan oleh seorang pemain

## Perintah

#### Buat ExecutableBlock baru

* Perintah: **/eb create \{id\}**
* Tips: 
  * Jika Anda ingin **menyalin item/blok dari plugin lain**, atau blok vanilla kustom (Banner, blok kustom, ...), Anda perlu memasang plugin saya yang lain, ExecutableItems, ketik **/ei create \{id\}** lalu impor ExecutableItem Anda ke ExecutableBlocks.
* Izin: `eb.cmd.create`

####

#### Buka GUI berisi EB yang telah ditempatkan

* perintah: /eb show-placed filter/sort:

#### Buka editor / menu

* Perintah: **/eb editor** atau **/eb show**
* Izin: `eb.cmd.editor` atau `eb.cmd.show`

#### Buka editor untuk mengedit EB tertentu

* Perintah: **/eb edit \{BlockID\}**
* Izin: `eb.cmd.edit`

#### Muat ulang plugin

* Perintah: **/eb reload**
* Izin: `eb.cmd.reload`

#### Muat ulang plugin (hanya 1 blok)

* Perintah: **/eb reload \{block\_id\}**
* Izin: `eb.cmd.reload`

**Muat ulang sebuah folder**

* Perintah: **/eb reload folder\:Name\_Of\_My\_Folder**
* Izin: `eb.cmd.reload`

#### Hapus ExecutableBlock

* Perintah: **/eb delete \{id\}**
* Izin: `eb.cmd.create`

#### Muat ulang blok default ExecutableBlock

* Perintah: **/eb default\_blocks**
* Izin: `eb.cmd.default_blocks`

#### Hapus semua cooldown dan perintah tertunda dari EB

* Perintah: **/eb clear** **\[playerName]**
* Izin: `eb.cmd.clear`

:::info
Ini juga mendukung entitas, cukup gunakan UUID entitas sebagai ganti nama pemain
:::

#### Aktifkan / Nonaktifkan actionbar EB

* Perintah: **/eb actionbar** **\{on or off\}**
* Izin: `eb.cmd.actionbar`

#### Tempatkan EB pada posisi tertentu

* Perintah: **/eb place \{id\} \{x\} \{y\} \{z\} \{world\}** \[direction]
* Izin: `eb.cmd.place`
* `[direction]`: (Opsional) `NORTH`, `SOUTH`, `EAST`, `WEST`, `UP` atau `DOWN` (huruf besar atau kecil, dengan pelengkapan Tab). Blok yang ditempatkan akan menghadap ke arah ini.
  * Ini lebih diutamakan daripada [fitur arah](/executableblocks/configurations/block-configuration/block-features#directional-features) milik blok (`blockFaceOnPlace` dengan `forceBlockFaceOnPlace: true`).
  * Ini berfungsi pada blok yang dapat diputar: blok berarah (tungku, observer, sarang lebah...), blok yang dapat dirotasi (papan tanda, kepala, banner: bukan `UP` / `DOWN`) dan blok dengan sumbu (batang kayu, pilar: `UP` / `DOWN` = vertikal). Arah yang tidak diterima oleh blok akan diabaikan.
  * Hanya untuk ExecutableBlocks yang dibuat dengan `BASIC_CREATION` atau `IMPORT_FROM_EXECUTABLE_ITEMS`, pada server 1.13+.
  * Tanpa argumen ini, tidak ada yang berubah: blok ditempatkan seperti sebelumnya.
* Contoh: `/eb place my_furnace 100 64 -20 world EAST`

#### Hapus EB pada posisi tertentu

* Perintah: **/eb remove \{x\} \{y\} \{z\} \{world\}** \[replaceWithAir default true]
* Izin: `eb.cmd.remove`

#### Isi seleksi area dengan EB

* Persyaratan: Perintah ini membutuhkan plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Perintah: **/eb we-place \{id\}**
* Izin: `eb.cmd.we-place`

#### Isi region WorldGuard dengan EB

* Persyaratan: Perintah ini membutuhkan plugin WorldGuard
* Perintah: **/eb wg-fill-region \{world\} \{region\_name\} stone:70,MyEb:30**
* Izin: `eb.cmd.wg-fill-region`

#### Hapus semua EB yang ada dalam seleksi blok

* Persyaratan: Perintah ini membutuhkan plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Perintah: **/eb we-remove \{replaceTheEBByAir true or false\}**
* Izin: `eb.cmd.we-remove`

#### Modifikasi variabel EB

* Perintah: /eb modification \{set/modification\} variable \{world\} \{x\} \{y\} \{z\} \{variableName\} \{value\} 

#### Modifikasi usage EB

* /eb modification \{set/modification\} usage \{world\} \{x\} \{y\} \{z\} \{value\}

### Perintah Give & Take

#### Perintah give

* (Berfungsi untuk pemain offline)
* Perintah: 
  * **/eb give \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\}** \[giveOfflinePlayer default true]
* Izin: `eb.cmd.give`
* Contoh:
  * Contoh: 
    * **/eb give %player% Genesis\_Crystal\{Variables:\{vibraniun:10,proton:30\},Usage:10\} 3** 
    * **/eb give %player% SurgeBlade\{Variables:\{charge:%var\_charge%+1\},Usage:%usage%-1\} 1**
    * **/eb give %player% BoneBlade 1**

#### Perintah take

* Perintah: 
  * **/eb take \{playername\} \{id\} \{quantity\}**
* Izin: `eb.cmd.take`

#### Perintah giveall

* Perintah: 
  * **/eb giveall \{id\} \{quantity\}** **\[world]**
* Izin: `eb.cmd.giveall`

#### Berikan EB pada slot tertentu milik seorang pemain 

* Perintah: 
  * **/eb giveslot \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\} \{slot\}**  **\[override true or false]**
  * Contoh: 
    * **/eb giveslot Ssomar test\{Variables:\{x:"Hey",world:"Island"\},Usage:50\} 1 0**  
    * **/eb giveslot Special70 rum\{Usage:69420,Variables:\{tell\_me:"why",aint\_nothing:"BUT A HEARTBREAK"\\}\} 1 %slot%**
    * **/eb giveslot Ssomar xyz\{Variables:\{test:"Hello boss!"\},Usage:5\} 1 5**
  * _Usage default: Usage yang ada di config EB Anda_
  * _Override memungkinkan EB mengambil slot tersebut, dan jika sebelumnya ada item di sana, item itu akan dipindahkan ke slot lain atau dijatuhkan ke tanah._
* Izin: `eb.cmd.giveslot`

**Berikan semua EB dalam folder tertentu kepada seorang pemain**

* Perintah:
  * **/eb givefolder \{playername\} \{folder\} \{quantity\}**

### Perintah Drop

#### Jatuhkan EB pada lokasi / posisi tertentu 

* Perintah: 
  * **/eb drop \{id\}** **\[quantity] \[world] \[x] \[y] \[z]**
  * _Jumlah default : 1_
  * _Lokasi default : Lokasi pemain yang menjalankan perintah ini_
* Izin: `eb.cmd.drop`

### Custom Trigger

Perintah:

* /eb run-custom-trigger trigger:\{activatorId\} // Ini akan mengeksekusi aktivator untuk semua EB yang ditempatkan yang memiliki aktivator dengan ID yang ditentukan.
* /eb run-custom-trigger trigger:\{activatorId\} block:\{world,x,y,z\} // Ini akan mengeksekusi aktivator hanya untuk EB yang ditempatkan pada lokasi yang ditentukan dan jika EB tersebut memiliki aktivator dengan ID yang ditentukan.
