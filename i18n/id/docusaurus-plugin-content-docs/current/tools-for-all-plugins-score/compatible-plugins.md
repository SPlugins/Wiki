---
description: >-
  Daftar plugin yang dapat Anda kombinasikan dengan ExecutableItems, seperti
  MythicMobs, WorldGuard, Vault, ItemsAdder, PlaceholderAPI, dan lainnya.
source_hash: 4012882ccbdb916c
translated_at: '2026-11-13T17:52:06.278Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ✔️ Plugin yang Kompatibel

:::info
Perlu diperhatikan bahwa daftar ini hanya berisi plugin yang kompatibel secara khusus. Hampir setiap plugin kompatibel dengan Ssomar Plugins. Jika Anda ingin menjalankan perintah dari plugin lain, cukup ganti nama target dengan placeholder. \

Contoh:
```yaml
- essentials:fly %player% # For essentials fly
- vanish %player% # For vanish
- economy give %player% 100 # To give money
#...
```
Dan seterusnya, **setiap perintah yang mendukung nama pemain "kompatibel" dengan plugin kami.**
:::

Bagian ini berisi plugin yang kompatibel dan bekerja dengan Ssomar Plugins. Ada beberapa fitur kami yang kompatibel dengan plugin lain.

* Sebelum memulai, Anda perlu tahu bahwa kompatibel ≠ dapat digunakan. Hampir semua plugin dapat digunakan dengan Ssomar Plugins, karena semua perintah dijalankan oleh konsol.

### MythicMobs

#### Anda dapat membuat mob MythicMobs Anda menjatuhkan item Ssomar Plugins dengan cara berikut:

*   ExecutableItems:

    1. Pegang ExecutableItem lalu jalankan `/mm i import` , ini akan mengimpor item tersebut ke file items.yml milik MythicMobs. Dari sana, Anda dapat menambahkannya ke LootTable milik MythicMobs.
    2. Menjalankan skill \~onDeath dari mob, dengan memanggil skill perintah yang menambahkan baris berikut:

    ```yaml
    Skills:
    - command{c="ei drop <item> 1 <caster.l.w> <caster.l.x> <caster.l.y> <caster.l.z>"} @self ~onDeath
    ```
* ExecutableBlocks:
  * Idenya sama, tetapi alih-alih menggunakan ExecutableItem, gunakan ExecutableBlock, dan pada perintah dari skill gunakan "eb" sebagai ganti "ei".

#### Anda dapat menentukan aktivator dari SsomarPlugins agar hanya bekerja dengan MythicMobs tertentu menggunakan fitur [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities).

* Contoh: Membuat ExecutableItem yang memberikan lebih banyak damage ke daftar MythicMobs
* Contoh: Membuat ExecutableBlock yang melukai MythicMob tertentu saat berjalan di atas blok
* Contoh: Membuat ExecutableEvent yang hanya bekerja untuk daftar MythicMobs.

#### Anda dapat memunculkan mob MM menggunakan perintah ini di dalam aktivator Anda:

* Tergantung pada aktivator yang Anda gunakan, Anda mungkin perlu mengubah placeholder.
  * Contoh: Alih-alih %world%, mungkin perlu menggunakan %player\_world%,%target\_world% atau %block\_world%

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    playerCommands:
    - mm m spawn {mob_id} 1 %world%,%x%,%y%,%z%
```

* ⭐Anda dapat menggunakan ide ini dengan ExecutableBlocks dan aktivator LOOP untuk membuat spawner MythicMobs kustom.

#### Menjalankan skill MythicMobs dari fitur Ssomar Plugins

* Anda dapat menggunakan `SUDOOP mm test cast <skill>` pada bagian perintah untuk menjalankan skill dari MythicMobs.

#### Perintah SCore kustom

* [CHANGETOMYTHICMOB](/tools-for-all-plugins-score/custom-commands/entity-commands#changetomythicmob)
  * ⭐Anda dapat membuat sistem memancing menggunakan MythicMobs seperti yang ada di server Minecraft Hypixel. Misalnya, memiliki daftar tier dari berbagai pancing (semuanya ditangani oleh ExecutableItems), dengan setiap tier memiliki probabilitas dari rendah hingga tinggi untuk menangkap mob yang lebih epik dari danau Anda, menambahkan batasan agar mob MM hanya bisa dipancing dari danau pada koordinat "x" tertentu (atau region WorldGuard), dan sebagainya.

### **LevelledMobs**

* ExecutableItems
  * Anda dapat membuat LevelledMobs menjatuhkan ExecutableItems menggunakan resource ini:
    * [https://www.spigotmc.org/resources/lm-items.102081/](https://www.spigotmc.org/resources/lm-items.102081/)

### AuraSkills (sebelumnya AureliumSkills)

* Ssomar Plugins memiliki fitur aktivator [requiredMana](/executableitems/configurations/activator-configuration/activators-features#requiredmana) agar dapat dijadikan syarat bagi aktivator untuk bekerja.
* Perintah Aurelium Skills
  * Anda juga dapat menggunakan perintah AureliumSkills di plugin Anda, seperti memberikan mana kepada pemain, memberikan mana kepada pemain di sekitar (seperti seorang supporter), dan sebagainya.
* ExecutableItems
  * NBT Aurelium Skills
    * Anda dapat membuat ExecutableItem yang menambah mana maksimum Anda selama dipegang. Caranya, buat sebuah item, jalankan perintah `/sk modifier`, lalu sambil memegang item tersebut jalankan `/ei create <id>`. Sekarang ExecutableItem memiliki NBTTag dari perintah tersebut sehingga memiliki modifikasi yang Anda buat.

### ExecutableBlocks & ExecutableItems

* Kedua plugin ini (ExecutableBlocks dan ExecutableItems) dapat saling terhubung. Hubungan ini dibuat oleh EB pada fitur [TYPE\_OF\_CREATION ](/executableblocks/configurations/block-configuration/block-features#creationtype). Contoh:
  * Menempatkan ExecutableItem lalu item tersebut menjadi ExecutableBlock yang terhubung dengannya (secara default data ExecutableItem akan hilang dan item akan ditempatkan sebagai blok vanilla)
  * Menghancurkan ExecutableBlock dan mendapatkan ExecutableItem yang terhubung dengannya.
  * Melacak penggunaan yang sama yang dimiliki ExecutableBlock saat ditempatkan ketika dihancurkan dan diubah menjadi ExecutableItem yang terhubung, dan sebaliknya.
  * Melacak nilai variabel yang sama yang dimiliki ExecutableBlock saat ditempatkan ketika dihancurkan dan diubah menjadi ExecutableItem yang terhubung, dan sebaliknya.

### ItemsAdder

* ExecutableItems
  * Anda dapat menggunakan tekstur yang dibuat dengan ItemsAdder melalui fitur [customModelData ](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14) atau dengan menggunakan [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel).
  *   Anda dapat menautkan item ItemsAdder ke EI dengan mengikuti wiki mereka tentang cara menautkan, yaitu dengan menambahkan baris kode berikut ke file item ItemsAdder.

      ```yaml
      executableitem:
        id: ZEUSCROWN
      ```
* ExecutableBlocks
  * Anda dapat membuat ExecutableBlock dengan tekstur blok ItemsAdder, ini dilakukan dengan memilih fitur [TYPE\_OF\_CREATION ](/executableblocks/configurations/block-configuration/block-features#creationtype) milik ExecutableBlocks.
* Anda dapat memilih blok ItemsAdder tertentu sebagai [detailedBlocks ](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks) untuk aktivator yang berkaitan dengan blok pada semua plugin
  *   Contoh:

      ```yaml
      activators:  
        activator0: # Activator ID, you can create as many activator on the activators list    
          option: PLAYER_BLOCK_BREAK
          detailedBlocks:
          - ITEMSADDER:turquoise_block
      ```

### Nexo

* ExecutableItems
  * Anda dapat menggunakan tekstur dari Nexo di dalam ExecutableItem Anda cukup dengan menggunakan nilai [Custom model data](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14) atau [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel).

### PlaceholderAPI

* Salah satu pilar utama dalam pembuatan item, Anda dapat menggunakan placeholder PlaceholderAPI apa pun di bagian mana pun dari plugin kami:
  * Lore
  * Bagian perintah
  * Pesan (semua jenis pesan, pesan cooldown, pesan kondisi tidak terpenuhi, pesan syarat yang dibutuhkan, dan sebagainya)
  * Variabel
  * dan lain-lain.

### ShopGui+

* Plugin ini mendukung penjualan item dengan NBT Tag tertentu di toko, sehingga mendukung penjualan ExecutableItems dan ExecutableBlocks.
* Perintah blok [SELL\_CONTENT ](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content) didukung oleh plugin ini.

### ShopKeepers

* Plugin ini mendukung penjualan item dengan NBT Tag tertentu di toko, sehingga mendukung penjualan ExecutableItems dan ExecutableBlocks.

### Tradesplus

* Plugin ini mendukung penjualan item dengan NBT Tag tertentu di toko, sehingga mendukung penjualan ExecutableItems dan ExecutableBlocks.

### WorldGuard

* Untuk semua plugin, tersedia kondisi agar aktivator hanya bekerja jika pemain berada di dalam atau di luar sebuah region, namanya [ifInRegion](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinregion-not) dan kompatibel dengan plugin ini.
* Semua perintah SCore dibatasi oleh proteksi WorldGuard
  * Artinya, BREAK (perintah SCore) tidak akan berjalan jika pemain tidak memiliki izin untuk menghancurkan blok pada posisi yang dipilih.
  * Perlu diingat bahwa fitur ini ada pada perintah SCore, bukan pada perintah yang dijalankan oleh plugin kami. Artinya, menggunakan perintah vanilla di dalam salah satu plugin kami "execute at %player% run setblock %block\_x% %block\_y% %block\_z% air replace" akan melewati semua pembatasan.
* ExecutableBlocks
  * Anda dapat mengisi sebuah region dengan ExecutableBlock tertentu dengan bobot yang terperinci menggunakan [/eb wg-fill-region](/executableblocks/commands-and-permissions#fill-a-worldguard-region-with-an-eb).
    * Dengan fitur ini, misalnya, Anda dapat membuat loop global yang mereset tambang tertentu seperti /warp mines yang umum di server Minecraft.

### HeadDB

* ExecutableItems
  * Anda dapat menggunakan plugin ini untuk memilih kepala pemain tertentu sebagai item dari ExecutableItem dengan menggunakan [head settings](/executableitems/configurations/item-configuration/item-features#head-settings).
* ExecutableBlocks
  * Anda dapat menggunakan plugin ini untuk memilih kepala pemain tertentu sebagai blok dari ExecutableBlock dengan menautkan ExecutableItem yang memakai [head settings](/executableitems/configurations/item-configuration/item-features#head-settings) dan menggunakan [TYPE\_OF\_CREATION](/executableblocks/configurations/block-configuration/block-features#creationtype) sesuai dengan ExecutableItem yang ditentukan.

### IridiumSkyblock

* Untuk semua plugin, tersedia kondisi agar aktivator hanya bekerja jika pemain berada di dalam pulau miliknya, namanya [ifPlayerMustBeOnHisIsland ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland) dan kompatibel dengan plugin ini.

### SuperiorSkyblock

* Untuk semua plugin, tersedia kondisi agar aktivator hanya bekerja jika pemain berada di dalam pulau miliknya, namanya [ifPlayerMustBeOnHisIsland ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland) dan kompatibel dengan plugin ini.

### GriefPrevention

* Untuk semua plugin, tersedia kondisi agar aktivator hanya bekerja jika pemain berada di dalam claim miliknya, namanya [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim) dan ada juga [ifPlayerMustBeOnHisClaimOrWilderness ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness), keduanya kompatibel dengan plugin ini.

### Lands

* Untuk semua plugin, tersedia kondisi agar aktivator hanya bekerja jika pemain berada di dalam claim miliknya, namanya [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim) dan ada juga [ifPlayerMustBeOnHisClaimOrWilderness ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness), keduanya kompatibel dengan plugin ini.
* ExecutableItems
  * Ada beberapa aktivator khusus untuk plugin ini, yaitu:
    * PLAYER\_ENTER\_IN\_THEIR\_LAND
    * PLAYER\_LEAVE\_THEIR\_LAND

### GriefDefender

* Untuk semua plugin, tersedia kondisi agar aktivator hanya bekerja jika pemain berada di dalam claim miliknya. Kondisi ini bernama [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim) dan kompatibel dengan plugin ini.

### Residence

* Untuk semua plugin, tersedia kondisi agar aktivator hanya bekerja jika pemain berada di dalam claim miliknya. Kondisi ini bernama [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim) dan kompatibel dengan plugin ini.

### PlotSquared

* Untuk semua plugin, tersedia kondisi agar aktivator hanya bekerja jika pemain berada di dalam plot miliknya. Kondisi ini bernama [ifPlayerMustBeOnHisPlot ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisplot) dan kompatibel dengan plugin ini.

### Towny

* Untuk semua plugin, tersedia kondisi agar aktivator hanya bekerja jika pemain berada di dalam kota miliknya. Kondisi ini bernama [ifPlayerMustBeOnHisTown ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhistown) dan kompatibel dengan plugin ini.

### Advanced Enchantments

* ExecutableItems
  * Karena cara kerja plugin Advanced Enchantments, enchant mereka tidak ada dalam daftar enchantment. Jadi enchant tersebut tidak dapat ditambahkan dengan fitur enchants:![](https://media.ssomar.com/m/docs-img-image-256.png)
  * Namun, Anda dapat menambahkan enchant mereka ke ExecutableItems Anda dengan menggunakan plugin NBTAPI dan mengikuti salah satu cara berikut:
    * Cara pertama adalah dengan membuat item vanilla, lalu menambahkan AdvancedEnchantment padanya, kemudian sambil memegangnya jalankan /ei create \<id>, ExecutableItem hasilnya akan otomatis memiliki enchant Advanced yang diimpor.
    *   Cara kedua adalah dengan menambahkan NBT Tag secara manual pada file konfigurasi ExecutableItems. Berikut contohnya:

        ```yaml
        nbt:
          '0':
            key: ae_enchantment;haste # This add the haste AdvancedEnchantment NBT tag
            type: INT
            value: 1
        ```
  * Setelah semua langkah ini, Anda harus menambahkan enchantment tersebut secara manual di lore agar pemain tahu bahwa item ini memiliki enchantment tersebut.

### RoseLoots

* Semua perintah blok yang terkait (misalnya [MINEINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#mineincube), [FARMINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#farmincube), [BREAK](/tools-for-all-plugins-score/custom-commands/block-commands#break), dan sebagainya) mendukung loot blok kustom dari plugin ini.

### MMOInventory

* ExecutableItems
  * Aktivator yang berkaitan dengan masuk dan keluar inventaris (misalnya EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY dan EI\_LEAVE\_THE\_PLAYER\_INVENTORY) dipicu oleh metode mereka.

### EnchantsSquared

* ExecutableItems
  * Plugin ini mendukung enchantment dari EnchantsSquared.

### ExcellentEnchants

* ExecutableItems
  * Plugin ini mendukung enchantment dari ExcellentEnchants

### MMOCore

* Fitur requiredMana untuk aktivator dapat menggunakan mana dari MMOCore, sehingga Anda dapat menetapkan syarat mana agar aktivator berfungsi.

### TAB

* Perintah kustom SETGLOW kompatibel dengan TAB. Anda harus menggunakan placeholder %score\_cmd-glow%

### BlocksToCommand

* Plugin yang memungkinkan Anda mengimpor struktur yang dapat ditempatkan dengan Ssomar Plugins.

### Terra

* Biome kustom dari Terra didukung oleh kondisi biome menggunakan kondisi [ifInBiome ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinbiome-not). Ini memungkinkan Anda membuat aktivator, efek, atau pembatasan tertentu berdasarkan biome tempat pemain berada.

### EcoSkills

* Anda dapat menggunakan kondisi placeholder untuk memeriksa apakah pemain memiliki nilai magic tertentu sebelum mengizinkan aktivator terpicu.
* Anda dapat menggunakan perintah untuk mendapatkan atau menghapus nilai magic.
* ExecutableItems
  * Fitur [RequiredMagic ](/executableitems/configurations/activator-configuration/activators-features#requiredmagic-ecoskills) sebagai ganti penggunaan kondisi placeholder dan perintah untuk menghapus magic.

### FACTIONS UUID

* Perintah SCore menempatkan dan menghapus blok dengan aman sesuai proteksi FactionsUUID milik pemain.

### CMI

* Perintah [SELL\_CONTENT ](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content) mendukung harga CMI, sehingga terintegrasi dengan mulus dengan sistem ekonomi CMI untuk menjual item dengan nilai yang tepat di dalam game.

### JOBS REBORN

* Perintah JOBS\_MONEY\_BOOST bekerja untuk plugin ini.

### VAULT

* ExecutableItems
  * Fitur [requiredMoney ](/executableitems/configurations/activator-configuration/activators-features#requiredmoney) bekerja dengan Vault, sehingga Anda dapat menetapkan syarat uang agar aktivator terpicu.

### Citizen NPC

* ExecutableItems
  * Aktivator berikut bekerja untuk Citizen NPC
    * PLAYER\_CLICK\_ON\_ENTITY
    * PLAYER\_FISH\_ENTITY
    * PLAYER\_KILL\_ENTIT

### NBT API

* #### itemCheckWithNBTAPI

### Wild Stacker

* Perintah SILK\_SPAWNER bekerja dengan spawner milik WildStacker.
