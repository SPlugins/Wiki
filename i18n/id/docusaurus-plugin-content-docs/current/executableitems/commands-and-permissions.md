---
description: >-
  Pelajari semua perintah dan izin plugin ExecutableItems: izin item, bypass
  cooldown, perintah give, drop, modifikasi, dan paket tekstur.
source_hash: 30fd8157fcb56ff1
translated_at: '2026-11-13T17:48:20.774Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# ⌨️ Perintah & Izin

Di halaman ini Anda akan mempelajari perintah dan izin dari plugin ExecutableItems.

Fitur premium ditandai dengan tag:  <CustomTag type="premium" />

## Izin

**TIP untuk pemula:**

:::info
Untuk memberikan izin semua item, saya menyarankan Anda mengunduh plugin izin seperti [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/). Setelah Anda memiliki plugin izin, Anda hanya perlu memberikan izin **`ei.item.*`**. Untuk Luckperms, perintahnya adalah **`/lp group default permission set ei.item.* true`**
:::

#### Izin item

* Info: Izin bagi pemain untuk menggunakan sebuah ExecutableItems.
  * Izin untuk menggunakan ID ExecutableItem tertentu: `ei.item.{id}`
  * Izin untuk menggunakan semua ExecutableItems: `ei.item.*` 
  * Izin negatif untuk melarang ID ExecutableItems tertentu: `-ei.item.{id}` <CustomTag type="premium" />
* Contoh: `ei.item.test`

#### Izin bypass cooldown

* Info: Izin bagi pemain agar tidak terkena cooldown saat menggunakan sebuah ExecutableItems. 
  * Saat melakukan pengujian, Anda harus menguji tanpa op/operator/admin.
  * Izin untuk bypass ID ExecutableItems tertentu: `ei.nocd.{id}`
  * Izin untuk bypass semua ExecutableItems: `ei.nocd.*`
* Contoh: `ei.nocd.test`

#### Semua izin

* Info: Izin yang memberikan semua izin untuk ExecutableItems.
  * Hati-hati! Izin ini memberikan benar-benar semua izin, termasuk izin administrator.
  * Izin: `ei.*`
* Jika Anda ingin memberikan izin tertentu, teruslah membaca di bawah, setiap perintah akan dijelaskan beserta izinnya masing-masing.

#### Izin semua perintah

* Info: Izin yang memberikan izin semua perintah untuk ExecutableItems.
  * Izin: `ei.cmds`
* Jika Anda ingin memberikan izin tertentu, teruslah membaca di bawah, setiap perintah akan dijelaskan beserta izinnya masing-masing.

## Perintah

Di sini Anda akan mempelajari perintah-perintah ExecutableItems. Ada beberapa kata yang akan diulang dalam penjelasan, yaitu:

* SsomarPluginsItem: Ini adalah ID sebuah ExecutableItem yang telah dibuat, misalnya bisa berupa "Excalibur", "SuperPickaxe", "turtle", "12345", yaitu nama yang kita tentukan.
* SsomarPluginsPlayer: Ini adalah nama seorang pemain, misalnya "Vayk\_", "Ssomar", "Special70", "Tidal\_Flame", itu juga merupakan nama pemain.

Format perintah akan memiliki simbol-simbol yang berbeda:

* \{\} : Jika sebuah argumen diapit oleh \{\}, berarti argumen tersebut wajib untuk menjalankan perintah.
* \[] : Jika sebuah argumen diapit oleh \[], berarti argumen tersebut opsional untuk menjalankan perintah.

Selain itu juga akan ada warna yang berbeda (tetapi dengan ide yang sama seperti \{\} dan \[] ):

* Biru: Wajib
* Oranye: Opsional

### Perintah Umum

#### Membuat ExecutableItem baru

* Perintah: **/ei create \{id\}**
  * `id`: ID dari ExecutableItem.
  * Jika Anda ingin **menyalin item dari plugin lain**, atau item vanilla kustom (Banner, Shield, ...), caranya mudah! Pegang item tersebut di tangan utama Anda dan jalankan perintah create ini.
* Contoh: `/ei create SsomarPluginsItem`
* Izin: `ei.cmd.create`

#### Membuat ExecutableItem baru dari blok yang diarahkan

* Perintah: /ei create-from\_block \{id\}
  * `id`: ID dari ExecutableItem.
* Contoh: `/ei create-from_block SsomarPluginsItem`
* Izin: `ei.cmd.create-from-block`

#### Membuka editor / menu

* Perintah: **/ei editor** atau **/ei show**
* Izin: `ei.cmd.editor` atau `ei.cmd.show`
* Dalam daftar, ikon setiap item menampilkan pratinjau display name, lore, enchantment, dan atribut item tersebut. Fitur ini dapat dinonaktifkan dengan [editorIconPreview](/tools-for-all-plugins-score/score/general-config#editoriconpreview) di config SCore.

#### Memuat ulang plugin

* Perintah: **/ei reload**
* Izin: `ei.cmd.reload`

**Memuat ulang hanya 1 item**

* Perintah: **/ei reload \{id\}**
  * `id` : ID dari ExecutableItem.
* Contoh: `/ei reload SsomarPluginsItem`
* Izin: `ei.cmd.reload`

**Memuat ulang sebuah folder**

* Perintah: **/ei reload folder\:Name\_Of\_My\_Folder**
* Izin: `ei.cmd.reload`

#### Membuat ulang config item default

* Perintah: **/ei default\_items**
* Izin: `ei.cmd.default_items`

#### Menghapus sebuah ExecutableItem

* Perintah: **/ei delete \{id\}**
  * `id`: ID dari ExecutableItem.
* Contoh: `/ei delete SsomarPluginsItem`
* Izin: `ei.cmd.create`

#### Mengedit sebuah ExecutableItem dengan perintah

* Perintah: **/ei edit \{id\}**
  * `id` : ID dari ExecutableItem.
* Contoh: `/ei edit SsomarPluginsItem`
* Izin: `ei.cmd.edit`

#### Menghapus semua cooldown dan perintah tertunda dari ExecutableItems

* Perintah: **/ei clear \{target\} \[optionaltarget]**
  * `target`
    * Anda dapat menggunakan nama pemain untuk menargetkan seorang pemain
    * Anda dapat menggunakan UUID untuk menargetkan sebuah entitas.
  * `optional_target`
    * ALL: Mereset perintah tertunda, cooldown, dan actionbar milik pemain.
    * DELAYED\_COMMANDS: Mereset semua perintah tertunda yang disebabkan oleh DELAY dan DELAYTICK.
    * COOLDOWNS: Mereset semua cooldown pemain pada semua item.
    * ACTIONBARS: Mereset semua actionbar pemain dari perintah kustom ACTIONBAR.
* Contoh: `/ei clear SsomarPluginsPlayer COOLDOWNS`
* Izin: `ei.cmd.clear`

#### Mengaktifkan / menonaktifkan actionbar ExecutableItems

* Perintah: **/ei actionbar \{on or off\}**
* **Contoh:** `/ei actionbar off`
* Izin: `ei.cmd.actionbar`

#### Memeriksa ExecutableItem yang ada di tangan utama Anda

* Perintah: **/ei inspect**
  * Untuk menggunakan perintah ini, ExecutableItem harus mengaktifkan fitur penyimpanan info item. [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info)
  * Output:
    * Usage
    * Owner UUID
    * Owner name
    * ExecutableItems ID
    * Variables 
* Izin: `ei.cmd.inspect`

#### Menghapus pemilik dari EI yang ada di tangan Anda

* Perintah: **/ei unowned**
  * Agar kepemilikan sebuah item dapat dihapus, item tersebut harus sudah memiliki pemilik sebelumnya. Untuk itu, fitur [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info) harus diaktifkan pada ExecutableItem tersebut
  * Setelah menjalankan perintah ini, pemain berikutnya yang berinteraksi dengan item ini akan menjadi pemilik baru. (Ia tidak boleh berstatus operator/op/admin)
* Izin: `ei.cmd.unowned`

#### Mengambil EI dari inventaris pemain

* Perintah: **/ei take \{player\} \{id\} \{quantity\}**
  * `player`: Nama pemain yang itemnya akan diambil
  * `id`: Id dari ExecutableItems
  * `quantity`: Nilai bilangan bulat dari jumlah yang akan dihapus
* Contoh: `/ei take SsomarPluginsPlayer SsomarPluginsItem 1`
* Izin: `ei.cmd.take`

#### Menyegarkan ExecutableItem milik pemain Anda dengan versi config terakhirnya

* Info: Perintah ini menyegarkan ExecutableItemID ke versi terakhirnya pada config-nya. Artinya, jika seorang pemain memiliki ExecutableItem dengan versi lama, misalnya dengan atribut GENERIC\_ARMOR bernilai 10, lalu Anda mengubah nilai atribut tersebut pada config ExecutableItem, perubahan itu tidak akan diperbarui di sisi pemain. Untuk memungkinkan pembaruan ini, Anda dapat menggunakan perintah ini agar item disegarkan dan pemain akan memiliki nilai baru yang sudah diperbarui, bukan 10.
  * Agar proses penyegaran ini berjalan, ExecutableItem yang dipilih harus berada di inventaris pemain, jika tidak maka tidak akan disegarkan
  * Sebagai tip, cara lain untuk melakukan penyegaran ini adalah dengan menggunakan [Auto update item](/executableitems/configurations/activator-configuration/activators-features#auto-update-item)
* Perintah: **/ei refresh \{player\} \{ExecutableItemID\}** **\{resetUsage\} \{resetDurability\}**
  * `player`: Nama pemain tertentu atau "all" untuk menargetkan semua pemain yang online.
  * `ExecutableItemID`: Nama ExecutableItem tertentu atau "all" untuk menargetkan semua ExecutableItems yang telah dibuat.
  * `option`: Argumen penyegaran
    * Opsi:
      * MATERIAL
      * NAME
      * LORE
      * DURABILITY
      * ATTRIBUTES
      * ENCHANTS
      * CUSTOM_MODEL_DATA
      * ARMOR_SETTINGS
      * USAGE
      * ITEM_RARITY
      * BOOK
      * EQUIPPABLE
      * REPAIRABLE
      * HIDERS
      * INSTRUMENT
      * TOOL_RULES
      * FIREWORK
      * FIREWORK_EXPLOSION
      * CONTAINER
      * HEAD
      * BANNER
      * FOOD
      * CONSUMABLE
      * BUNDLE
      * BLOCK_STATE
      * CHARGED_PROJECTILES
      * MYFURNITURE
      * SPAWNER
      * WEAPON
      * BLOCK_ATTACKS
      * TOOLTIP_MODEL
      * ALL_OPTIONS (Menjalankan semua tugas yang disebutkan di atas)
* Izin: `ei.cmd.refresh`

#### **Mengubah pemilik ExecutableItem yang ada di tangan Anda**

* Perintah: **/ei set\_owner** **\{player\}**
  * `player`: Nama pemain yang ditetapkan sebagai target perintah ini
    * Perintah ini berfungsi dengan pemain offline.
* Izin: `ei.cmd.set_owner`

#### Mengaktifkan mode debug

* Info: Mode di mana setiap aktivator mencetak berbagai pesan kepada pengguna untuk mengetahui status aktivator dan mengapa aktivator tidak berfungsi atau bagaimana ia diaktifkan.
* Perintah: **/ei debug**
* Izin: `ei.cmd.debug`

#### Menampilkan daftar set dan apa yang dikenakan pemain <CustomTag type="premium" />

* Info: Menampilkan daftar [sets](/executableitems/configurations/sets-configuration) yang dimuat (`plugins/ExecutableItems/sets`). Dengan menyebutkan pemain: bagian set yang dikenakan dan tier aktif untuk setiap set.
* Perintah: **/ei sets** **[player]**
* Izin: `ei.cmd.sets`

#### Memicu satu aktivator (untuk menguji sebuah item)

* Info: Menjalankan satu aktivator dari sebuah ExecutableItem yang dibawa pemain, tanpa melakukan gerakannya (klik, pukul, lompat...). Berguna untuk menguji sebuah config. Hal lainnya berfungsi seperti biasa: slot terperinci, kondisi, cooldown, usage, dan perintah. Item dicari di slot yang diberikan, jika tidak ada maka di tangan utama, tangan kedua, armor, lalu seluruh inventaris.
* Perintah: **/ei trigger \{player\} \{item id\} \{activator id\}** **[slot:N] [target:nearest|\{player\}|\{uuid\}] [block:x,y,z] [click:left|right] [input:JUMP_PRESS...]**
  * `target`: entitas atau pemain bagi aktivator yang memiliki target (pukul, klik pada entitas...). Secara default, yang sedang dilihat pemain.
  * `block`: blok bagi aktivator yang memiliki blok target. Secara default, blok yang sedang dilihat pemain.
  * `click`: untuk aktivator dengan klik terperinci. Secara default `right` (`left` untuk `PLAYER_LEFT_CLICK`).
  * `input`: wajib untuk `PLAYER_INPUT`.
* Tip: jika tidak terjadi apa-apa, jalankan **/ei debug** untuk melihat pemeriksaan mana yang menghentikan aktivator.
* Izin: `ei.cmd.trigger`

#### Membuat semua ExecutableItems mempertahankan atribut default dari material-nya

* Info: Menetapkan [Keep default attributes](/executableitems/configurations/item-configuration/item-features#keep-default-attributes) pada **setiap** ExecutableItem yang dimuat (`keepDefaultAttributes: true`, `ignoreKeepDefaultAttributesFeature: false`) dan menyimpan file-nya. Pada 1.21+, setelah setiap pemuatan, ExecutableItems menampilkan di konsol daftar item yang kehilangan damage / armor dari material-nya tanpa pengaturan ini. Dengan `false`, setiap item mendapatkan `keepDefaultAttributes: false`.
* Perintah: **/ei util-set-keepdefaultattributes-all-ei \{true or false\}**
* Contoh: `/ei util-set-keepdefaultattributes-all-ei true`
* Izin: `ei.cmd.util-set-keepdefaultattributes-all-ei`

### Perintah give

#### Perintah give

* Info: Perintah untuk memberikan ExecutableItem kepada pemain di slot pertama yang tersedia.
* Perintah: **/ei give \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \[giveOfflinePlayer]**
  * `player`: Nama pemain yang akan menjadi target perintah ini
  * `id`: Id dari ExecutableItem yang akan diberikan.
    * Nilai opsional: Agar pengaturan kustom ini dapat ditambahkan, tidak boleh ada spasi/white space pada formatnya. 
      * `Variables`: Anda dapat memilih pengaturan variabel saat memberikan item.
        * ✅`{Variables:{a:"1",b:"2",c:"3"}}` # Tanpa spasi
        * ❌`{Variables:{a : "1",b: "2",c :"3"}}` # Menggunakan spasi
      * `Usage:` Anda dapat memilih nilai usage saat memberikan item
        * ✅`{Usage:5}` # Tanpa spasi
        * ❌`{Usage : 5}` # Menggunakan spasi
      * `Durability`: Anda dapat menentukan seberapa besar durability yang hilang dari item saat item diberikan kepada pengguna
        * ✅`{Durability:5}` # Tanpa spasi
        * ❌`{Durability : 5}` # Menggunakan spasi
  * `quantity`: Jumlah item yang akan diberikan
  * `giveOfflinePlayer`: Nilai boolean untuk menentukan apakah item akan diberikan kepada pemain offline atau tidak. Secara default nilai ini adalah true.
* Contoh: (Pada semua contoh ini, perintah dijalankan di dalam sebuah ExecutableItems agar placeholder seperti %player%,%var\_name% dan %usage% dapat diurai)
  * `/ei give %player% Genesis_Crystal{Variables:{vibraniun:10,proton:30},Usage:10} 3` 
  * `/ei give %player% SurgeBlade{Variables:{charge:%var_charge%+1},Usage:%usage%-1} 1`
  * `/ei give SsomarPluginsPlayer BoneBlade 1`
  * `/ei give edp445 cupcake{Durability:12} 1`
* Izin: `ei.cmd.give`

#### Perintah Give All

* Perintah: **/ei giveall \{id\} \{quantity\} \[world] \[giveOfflinePlayer]**
  * `id`: Id dari ExecutableItem yang akan diberikan.
  * `quantity`: Jumlah item yang akan diberikan
  * `world`: Argumen opsional berupa world untuk menjalankan perintah. Dengan ini, pemain yang tidak berada di world tersebut tidak akan diberi ExecutableItem.
  * `giveOfflinePlayer`: Nilai boolean untuk menentukan apakah item akan diberikan kepada pemain offline atau tidak. Secara default nilai ini adalah true.
* Izin: `ei.cmd.giveall`

#### Memberikan sebuah EI di slot tertentu milik pemain <CustomTag type="premium" />

* Perintah: **/ei giveslot \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \{slot\} \[override true or false]**
  * `player`: Nama pemain yang akan menjadi target perintah ini
  * `id`: Id dari ExecutableItem yang akan diberikan.
    * Nilai opsional: Agar pengaturan kustom ini dapat ditambahkan, tidak boleh ada spasi/white space pada formatnya. 
      * `Variables`: Anda dapat memilih pengaturan variabel saat memberikan item.
        * ✅\{Variables:\{a:"1",b:"2",c:"3"\\}\} # Tanpa spasi
        * ❌\{Variables:\{a : "1",b: "2",c :"3"\\}\} # Menggunakan spasi
      * `Usage`: Anda dapat memilih nilai usage saat memberikan item
        * ✅\{Usage:5\} # Tanpa spasi
        * ❌\{Usage : 5\} # Menggunakan spasi
  * `quantity`: Jumlah item yang akan diberikan
  * `slot`: Slot pemain tempat item ini akan diberikan.
  * `override`: Nilai boolean untuk menimpa slot jika sudah ada item di slot tersebut. Jika demikian, item itu akan dipindahkan, dan jika inventaris pemain penuh, item akan dijatuhkan ke tanah.
* Contoh: 
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`test{Variables:{x:"Hey",world:"Island"},Usage:50} 1 0`**  
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`rum{Usage:69420,Variables:{tell_me:"why",aint_nothing:"BUT A HEARTBREAK"}} 1 %slot%`**
* Izin: `ei.cmd.giveslot`

**Memberikan setiap EI dalam folder tertentu kepada pemain**

* Info: Perintah untuk memberikan sebuah folder dari plugin kepada pemain.
* Perintah: **/ei givefolder \{player\} \{folder\} \{quantity\}**
  * `player`: Nama pemain yang akan menjadi target perintah ini
* Izin: `ei.cmd.givefolder`

### Perintah drop

#### Menjatuhkan sebuah EI di lokasi / posisi tertentu 

* Perintah: **/ei drop \{id\} \{quantity\} \{\[world] \[x] \[y] \[z]\}**
  * `id`: Id dari ExecutableItem yang akan diberikan.
  * `quantity`: Jumlah item yang akan dijatuhkan. Secara default adalah 1.
  * location: Seluruh lokasi bersifat opsional. Jika Anda ingin menambahkannya, Anda perlu mengisi argumen berikut:
    * `world`: World tempat item akan dijatuhkan.
    * `x`: Koordinat X tempat item akan dijatuhkan.
    * `y`: Koordinat Y tempat item akan dijatuhkan.
    * `z`: Koordinat Z tempat item akan dijatuhkan.
* Contoh:  (Pada semua contoh ini, perintah dijalankan di dalam sebuah ExecutableItems agar placeholder seperti %player%,%var\_name% dan %usage% dapat diurai)
  * `/ei drop totemshatter 1 %world% %x% %y% %z%`
  * `ei drop nuclearWar{Usage:3,Variables:{niconico:"nii"}} 25 %block_world% %block_x% %block_y% %block_z%`
  * `ei drop cybert1_5{Variables:{eh:5},Usage:5} 1 world 535 74 1329`
* Izin: `ei.cmd.drop`

### Perintah modifikasi

#### Mengubah nilai usage dari sebuah ExecutableItem

* Perintah: 
  * Di dalam game: **/ei modification \{set or modification\} usage \{slot\} \{value\}**
  * Di konsol: **/ei console-modification \{set or modification\} usage \{player\} \{slot\} \{value\}**
  * Parameter:
    * `set or modification`
      * set: Menetapkan \{value\} yang baru dan menggantikan yang lama
      * modification: Berguna untuk menambahkan modifikasi, menaikkan atau menurunkan nilai asli sebesar \{value\}
    * `player`: Nama pemain yang akan menjadi target perintah ini
    * `slot`: Slot pemain tempat item ini akan diberikan.
      * Informasi lebih lanjut tentang slot di sini [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `value`: Nilai yang digunakan untuk modifikasi.
* Izin: `ei.cmd.modification`

#### Mengubah nilai sebuah variabel dari sebuah ExecutableItem

* Perintah: 
  * Di dalam game: **/ei modification \{set or modification\} variable \{slot\} \{variableName\} \{value\}**
  * Di konsol: **/ei console-modification \{set or modification\} variable \{player\} \{slot\} \{variableName\} \{value\}**
  * Parameter:
    * `set or modification`
      * set: Menetapkan \{value\} yang baru dan menggantikan yang lama
      * modification: Berguna untuk menambahkan modifikasi, menaikkan atau menurunkan nilai asli sebesar \{value\}
    * `player`: Nama pemain yang akan menjadi target perintah ini
    * `slot`: Slot pemain tempat item ini akan diberikan.
      * Informasi lebih lanjut tentang slot di sini [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `variableName`: Nama variabel yang ingin Anda terapkan typeOfModication dengan nilai yang dipilih.
    * `value`: Nilai yang digunakan untuk modifikasi.
* Izin: `ei.cmd.modification`

#### Mencari sebuah ExecutableItem di server

* Info: Perintah ini memberi Anda informasi tentang di mana saja ExecutableItems dengan id \{id\} berada di server Anda.
* Perintah: **/ei search \{id\} \{searchMode\}**
  * `id`: Id dari ExecutableItem yang Anda cari
  * `searchMode`: Jenis pencarian
    * players: Mencari ExecutableItem di semua inventaris pemain yang **online**.
    * containers: Mencari ExecutableItem di semua container yang **dimuat**.
    * all: Mencari menggunakan kedua metode.
* Contoh:
  * `/ei search EternalSword all`
* Izin: `ei.cmd.search`

#### Mendapatkan path file dari sebuah ExecutableItem

* Info: Perintah ini menampilkan path absolut sistem file menuju file konfigurasi dari sebuah ExecutableItem tertentu. Berguna bagi developer atau administrator server yang perlu menemukan dan mengedit file item secara langsung.
* Perintah: **/ei path \{id\}**
  * `id`: Id dari ExecutableItem yang ingin Anda ketahui path-nya
* Contoh:
  * `/ei path ExcaliburSword`
  * Output: `[ExecutableItems] The path of ExcaliburSword is /path/to/plugins/ExecutableItems/Items/ExcaliburSword.yml.`
* Izin: `ei.cmd.path`

#### Memeriksa informasi optimasi event

* Info: Perintah ini menampilkan informasi terperinci tentang optimasi event handler ExecutableItems dan statistik performanya. Perintah ini menunjukkan event mana yang sedang didengarkan dan memberikan informasi tentang item yang menggunakan custom recognition (yang dapat memengaruhi performa). Outputnya dikirim ke konsol server.
* Perintah: **/ei checkevents**
* Output mencakup:
  * Daftar event yang dioptimalkan beserta status listener-nya
  * Jumlah ExecutableItems yang menggunakan custom recognition
  * Peringatan dampak performa
  * Rekomendasi untuk performa yang lebih baik
* Izin: `ei.cmd.checkevents`

:::info
Output perintah ini dikirim ke **konsol**, bukan ke pemain di dalam game. Periksa konsol server Anda untuk melihat informasi terperinci.
:::

:::tip
Item dengan custom recognition dapat memengaruhi performa. Perintah ini akan menunjukkan berapa banyak item yang menggunakan fitur ini. Jika Anda mengalami masalah performa, pertimbangkan untuk mengurangi jumlah item yang mengaktifkan custom recognition.
:::

### Perintah Paket Tekstur

#### Menyegarkan Paket Tekstur ExecutableItems

* Perintah: **/ei refresh-pack**
* Info: Menyegarkan dan memuat ulang paket tekstur ExecutableItems untuk semua pemain yang online. Berguna setelah melakukan perubahan pada tekstur kustom.
* Izin: `ei.cmd.refresh-pack`

#### Mengunduh Paket Tekstur ExecutableItems Default

* Perintah: **/ei download-default-pack**
* Info: Mengunduh paket tekstur ExecutableItems default dari repositori resmi dan mengekstraknya secara otomatis. Jika `selfHostPack` diaktifkan di config.yml, pack akan didaftarkan dan di-host secara otomatis di server Anda. Ini berguna untuk:
  * Menyiapkan paket tekstur untuk pertama kalinya
  * Memulihkan pack default setelah dimodifikasi
  * Memperbarui ke versi pack default terbaru
* Persyaratan:
  * `selfHostPack: true` harus ditetapkan di config.yml untuk hosting otomatis
  * Server harus memiliki koneksi internet untuk mengunduh pack
* Izin: `ei.cmd.download-default-pack`

:::info
**Opsi Hosting:**
- **Self-hosting di server Anda**: Tetapkan `selfHostPack: true` di config.yml, pack akan di-host langsung oleh plugin
- **Hosting eksternal**: Jika Anda ingin meng-host pack sendiri (di situs web, CDN, dll.), tetapkan URL unduhan di `texturesPackUrl` pada config.yml
- **Tanpa hosting**: Jika tidak ada opsi yang diaktifkan, pack akan diunduh dan diekstrak secara lokal tetapi tidak didistribusikan kepada pemain
:::

### Custom triggers

* Info: ExecutableItems memiliki perintah untuk menjalankan custom triggers. Jika ingin tahu apa itu dan cara menggunakannya, lihat info di sini [Custom triggers](/tools-for-all-plugins-score/custom-triggers) 

### WorldGuard

* Anda dapat menggunakan flag worldguard untuk mengaktifkan/menonaktifkan semua aktivator ei
```
/rg flag <region> ei-activators deny # disables ALL EI activators in the region
/rg flag <region> ei-activators allow # re-enables them (this is the default)
```

* Pesan error dapat dikonfigurasi di /ExecutableItems/locale/locale_EN.yml, contohnya
```yml
disableRegion: '&8[&4Executable&7Items&8] &cYou cant use &e%item%&c in this region!'
```
