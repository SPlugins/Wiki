---
description: >-
  Daftar perintah Player & Target di SCore: perintah kustom untuk
  ExecutableItems dan ExecutableBlocks beserta parameter dan contoh
  penggunaannya.
source_hash: 0ab741c02dc34406
translated_at: '2026-11-13T17:54:16.168Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';
import CustomTag from '@site/src/components/CustomTag';

# Perintah Player & Target

:::warning
Anda perlu tahu bahwa secara default semua perintah dijalankan oleh konsol, jadi jika Anda ingin pemain yang menjalankan perintah, tambahkan [**SUDO**](player-and-target-commands.md#sudo) atau [**SUDO\_OP**](player-and-target-commands.md#sudo_op) di depannya. 

_(Klik SUDO atau SUDO\_OP untuk info lebih lanjut)_

\
**Jangan gunakan opsi ini untuk perintah vanilla dan CUSTOM COMMANDS. Untuk menggunakan perintah vanilla dengan benar, buka FAQ dan "Cara menggunakan perintah vanilla".**
:::

:::tip
Kompatibilitas "Multi-world" untuk perintah vanilla.

`execute in <<NAME`_`OF`_`YOUR_WORLD>> run ...`

Contoh, Anda ingin memunculkan Zombie di world SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Contoh dengan placeholder`:`

`execute in <<%player_world%>> run summon zombie 100 50 100`
:::

:::info
Anda ingin mempertahankan bentuk HEX mentah di perintah Anda? Tambahkan tag **BRUT\_HEX** di perintah Anda. Tag ini berfungsi di bagian mana pun pada baris perintah, tetapi disarankan untuk menaruhnya di bagian pertama perintah agar tidak membingungkan.
:::

:::info
Secara default semua perintah tidak dijalankan jika pemain sedang offline. (perintah akan dijalankan saat pemain terhubung)

Namun Anda dapat menambahkan tag **\[\<OFFLINE>]** di perintah Anda untuk menghapus batasan ini.

_(Sangat berguna untuk perintah broadcast, boost, giveall, ...)_

Contoh:

* \[\<OFFLINE>] broadcast hello !
* \[\<OFFLINE>] execute at %player% run setblock %block\_x\_int%+3 %block\_y\_int%-1 %block\_z\_int%-14 minecraft\:air
:::

:::info
Anda dapat menggunakan \[\<CLEAR\_IF\_DISCONNECT>] jika ingin menghapus perintah ketika pemain terputus

Contoh:

* \[\<CLEAR\_IF\_DISCONNECT>] say meow
:::

## Perintah Campuran

Selain daftar perintah berikut, Anda juga dapat menggunakan:

<LinkPreview
  url="docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity"
  title="Mixed commands (Compatible with Player and Entity)"
/>

Perintah-perintah ini dapat digunakan pada perintah terkait Player ATAU perintah terkait Entity.

## Perintah kustom

_Diurutkan secara alfabet_

### ABSORPTION

* Info: Memberikan efek absorption kepada pemain
* Pengaturan perintah:
  * `{amount}`: jumlah setengah hati absorption. Mendukung nilai negatif untuk menghapus.
  * `{time}`: durasi efek dalam tick. Kosongkan atau isi "0" jika ingin tak terbatas.
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ABSORPTION amount:5 time:200 # Gives the player absorption
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ABSORPTION amount:5 time:200 # Gives the target absorption
```

:::warning
Nilai atribut MAX\_ABSORPTION Anda harus di atas 0 !

Periksa nilainya dengan mengetik : /attribute PLAYER\_NAME minecraft:max\_absorption base get

Dan Anda dapat menaikkannya dengan mengetik: /attribute PLAYER\_NAME minecraft:max\_absorption base set 20
:::

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    # You can do that to temporary up the max_absorption value of the player
    - minecraft:attribute %player% minecraft:max_absorption base set 5**
    - ABSORPTION amount:5 time:200
    - DELAY_TICK 200
    - minecraft:attribute PLAYER_NAME minecraft:max_absorption base set 0
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    # You can do that to temporary up the max_absorption value of the target
    - minecraft:attribute %player% minecraft:max_absorption base set 5
    - ABSORPTION amount:5 time:200
    - DELAY_TICK 200
    - minecraft:attribute PLAYER_NAME minecraft:max_absorption base set 0
```

### ACTIONBAR

* Info: Menampilkan action bar dengan teks Anda + sisa waktu (59, 58, 57...).
* Pengaturan perintah:
  * `{text}`: Teks Anda yang akan ditampilkan
  * `{delay}`: Durasi dalam detik
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - `ACTIONBAR &6Hey &e%player% ! 10` # Sends an ACTIONBAR to the player
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - `ACTIONBAR &6Hey &e%player% ! 10`# Sends an ACTIONBAR to the target
```

### ADD\_ITEM\_ATTRIBUTE

* Info: Menambahkan atribut ke item dengan operasi penjumlahan atau pengurangan.
* Pengaturan perintah:
  * `{slot}`: Slot tempat atribut diterapkan. -1 untuk mainhand
  * `{attribute}`: Atribut yang ingin Anda tambahkan. [Daftar atribut](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html)
  * `{value}`: Nilai untuk operasi
  * `{equipmentSlot}`: Slot tempat atribut akan aktif. [Daftar EquipmentSlot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html)
  * `{mode}`: pilih mode penambahan
    * `mode:ADD`: Menambahkan atribut ke item
    * `mode:OVERRIDE`: Menghapus atribut saat ini dengan tipe yang sama pada item + Menambahkan atribut ke item
    * `mode:STACK`: Menumpuk dengan atribut yang ada pada item, jika belum ada maka atribut ditambahkan
  * affectDefaultAttributes: true atau false # Jika true, mode OVERRIDE juga akan menimpa atribut default, dan untuk mode stack memungkinkan penumpukan dengan atribut default (hijau)
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ADD_ITEM_ATTRIBUTE slot:%slot% attribute:GENERIC_ATTACK_DAMAGE value:1.0 equipmentSlot:HAND mode:ADD # Add this attribute to the player
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ADD_ITEM_ATTRIBUTE slot:%slot% attribute:GENERIC_ATTACK_DAMAGE value:1.0 equipmentSlot:HAND mode:STACK affectDefaultAttributes: true # Add this attribute to the target
```

### ADD\_ITEM\_ENCHANTMENT

* Info: Menambahkan enchantment pada item di slot tertentu dengan level tertentu
* Pengaturan perintah:
  * `{slot}`: Slot tempat enchantment diterapkan. -1 untuk mainhand
  * `{enchantment}`: Enchantment yang ingin diterapkan, jangan gunakan spasi, gunakan enchantment Minecraft, bukan yang tampil di item. [Enchantments](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html)
  * `{level}`: Level untuk enchantment
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ADD_ITEM_ENCHANTMENT slot:-1 enchantment:unbreaking level:1 
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ADD_ITEM_ENCHANTMENT slot:-1 enchantment:unbreaking level:1
```

### ADD\_ITEM\_LORE

* Info: Menambahkan satu baris lore
* Pengaturan perintah:
  * `{slot}`: Slot tempat lore diterapkan. -1 untuk mainhand
  * `{text}`: Teks untuk baris lore baru
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ADD_ITEM_LORE slot:%slot% text:&7Item of %player%
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    playerCommands:
    - ADD_ITEM_LORE slot:%slot% text:&7Item of %target% added by %player%
```

### BOOTS

* Info: Memindahkan item di main hand Anda ke slot boots. (Tidak akan berfungsi jika item memiliki "Curse of Binding")
* Tanpa pengaturan perintah
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BOOTS
```

### BOSSBAR

* Info: Membuat teks bossbar untuk durasi tertentu.
* Pengaturan perintah:
  * `{time}`: Durasi bossbar dalam tick
  * `{color}`: Warna teks bossbar
  * `{text}`: teks pada bossbar (Gunakan underscore "_" untuk menambahkan spasi pada argumen Anda.)
  * `{count}`: berapa kali Anda ingin menghitung
    * jika opsi ini ada, argumen waktu tidak lagi berpengaruh
  * `{countTicks}`: true/false apakah Anda ingin menghitung dalam tick atau dalam detik
  * `{countOrder}`:
    * ascending: membuat timer menghitung dari 0
    * descending: membuat timer menghitung dari nilai yang diberikan
  * `{overrideMode}`:
    * NO\_OVERRIDE: Tidak menimpa Bossbar lainnya
    * OVERRIDE\_ALL: Akan menimpa semua BossBar lain yang dikirim oleh SCore
    * OVERRIDE\_SAME\_TEXT: Akan menimpa Bossbar lain yang dikirim oleh SCore yang berisi teks yang sama
  * `{barProgress}`: (default = 1.0) Progres awal bar (0.0 sampai 1.0). Berfungsi pada bar statis maupun countdown (hanya countdown descending)
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BOSSBAR time:200 color:RED text:This_is_a_bossbar text
    - BOSSBAR time:20 color:BLUE text:Hello_world count:50 countTicks:true countOrder:ascending
    - BOSSBAR time:200 color:RED text:This is a bossbar text overrideMode:OVERRIDE_SAME_TEXT
    - BOSSBAR time:200 color:GREEN text:Half filled bar barProgress:0.5
```

### CANCEL\_PICKUP

* Info: Menonaktifkan pengambilan item pada pemain selama jangka waktu tertentu
* Pengaturan perintah:
  * `{time}`: Durasi dalam tick sampai pemain dapat mengambil item lagi
  * `{material}`: Jika diatur, pemain hanya tidak dapat mengambil material yang ditentukan, jika null pemain tidak dapat mengambil apa pun
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CANCEL_PICKUP time:600
    - CANCEL_PICKUP time:600 material:stone
```

:::info
Satu-satunya cara untuk me-RESET perintah ini setelah mengatur waktu dalam tick adalah dengan reload atau restart server. Jika Anda menginginkan cara untuk meresetnya, sarankan di channel #suggestions di Discord.
:::

### CHAT

* Info: Mengirim pesan dari pemain ke chat
* Pengaturan perintah:
  * `{text}`: Teks yang dikirim
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CHAT &6Hello !!
```

### CHESTPLATE

* Info: Memindahkan item di main hand Anda ke slot chestplate. (Tidak akan berfungsi jika item memiliki "Curse of Binding")
* Tanpa pengaturan perintah
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CHESTPLATE
```

### CLOSE\_INVENTORY

* Info: Menutup inventory pemain
* Tanpa pengaturan perintah
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CLOSE_INVENTORY
```

### CROPS\_GROWTH\_BOOST

* Info: Mempercepat pertumbuhan tanaman di sekitar Anda
* Pengaturan perintah:
  * `{radius}`: Radius boost (Default 5)
  * `{delay}`: Jeda dalam tick antara setiap growth boost
  * `{duration}`: Durasi total boost dalam tick
  * `{chance}`: Peluang tumbuh yang dimiliki blok saat boost diterapkan
* Contoh:

Perintah berikut akan menghasilkan 20 growth boost setiap 10 tick.\
Semua blok dalam radius akan memiliki peluang 50% untuk tumbuh saat boost diterapkan.

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CROPS_GROWTH_BOOST radius:5 delay:10 durations:200 chance:50
```

### DISABLE\_FLY\_ACTIVATION

* Info: Melarang penggunaan fly untuk pemain (Meluncur dengan Elytra tidak dianggap terbang)
* Pengaturan perintah:
  * `{time}`: Durasi efek dalam detik
* Contoh: (Perintah di bawah menonaktifkan aktivasi fly selama 1 menit)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DISABLE_FLY_ACTIVATION time:60
```

### DISABLE\_GLIDE\_ACTIVATION

* Info: Melarang penggunaan elytra untuk jangka waktu tertentu
* Pengaturan perintah:
  * `{time}`: Durasi efek dalam detik
* Contoh: (perintah di bawah menonaktifkan penggunaan elytra selama 20 detik)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DISABLE_GLIDE_ACTIVATION time:20
```

### EICOOLDOWN

* Info: Menerapkan cooldown pada ExecutableItems tertentu
* Pengaturan perintah:
  * `{PLAYER}`: Pemain yang menjadi target perintah
  * `{ID}`: ID dari ExecutableItem atau "all" untuk semua ExecutableItems
  * `{DURATION}`: Jumlah waktu
  * `{boolean TICKS}`: (Default: false) Jika false, nilai argumen durasi dianggap dalam detik. Jika true, dianggap dalam tick.
  * `[optional activator id]`: (Opsional) Anda dapat menerapkannya pada id aktivator tertentu
* Contoh: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EICOOLDOWN %player% thisismyid 10 true # For the ExecutableItem thisismyid 
    - EICOOLDOWN %player% all 10 true # For all ExecutableItems
```

:::info
`EICOOLDOWN` hanya dapat **menambahkan** cooldown: ketika beberapa cooldown berjalan pada aktivator yang sama, yang terlama yang berlaku. Untuk memperpendek atau menghapus cooldown, gunakan [`EICOOLDOWN_RESET`](#eicooldown_reset).
:::

### EICOOLDOWN_RESET

* Info: Menghapus cooldown sebuah ExecutableItem untuk seorang pemain (semua aktivatornya, atau hanya satu aktivator). Cooldown visual vanilla (`enableVisualCooldown`) juga direset.
* Pengaturan perintah:
  * `{PLAYER}`: Pemain yang menjadi target perintah
  * `{ID}`: ID dari ExecutableItem atau "all" untuk semua ExecutableItems
  * `[optional activator id]`: (Opsional) Hanya hapus cooldown aktivator ini; aktivator lainnya tetap mempertahankan cooldown mereka
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EICOOLDOWN_RESET %player% thisismyid activator1 # Only activator1 of the ExecutableItem thisismyid
    - EICOOLDOWN_RESET %player% thisismyid # All the activators of thisismyid
    - EICOOLDOWN_RESET %player% all # All ExecutableItems
```

Dari konsol, `/score cooldowns clear EI:{ID}:{activator id} {player}` melakukan hal yang sama untuk satu aktivator.

### EBCOOLDOWN

* Info: Menerapkan cooldown pada ExecutableBlocks tertentu
* Pengaturan perintah:
  * `{PLAYER}`: Pemain yang menjadi target perintah
  * `{ID}`: ID dari ExecutableBlocks atau "all" untuk semua ExecutableBlocks
  * `{DURATION}`: Jumlah waktu
  * `{boolean TICKS}`: (Default: false) Jika false, nilai argumen durasi dianggap dalam detik. Jika true, dianggap dalam tick.
  * `[optional activator id]`: (Opsional) Anda dapat menerapkannya pada id aktivator tertentu
* Contoh: 

```yaml
activators:**
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EBCOOLDOWN %player% thisismyid 10 true # For the ExecutableBlock thisismyid 
    - EBCOOLDOWN %player% all 10 true # For all ExecutableBlocks
```

### EECOOLDOWN

* Info: Menerapkan cooldown pada ExecutableItems tertentu
* Pengaturan perintah:
  * `{PLAYER}`: Pemain yang menjadi target perintah
  * `{ID}`: ID dari ExecutableEvent atau "all" untuk semua ExecutableEvents
  * `{DURATION}`: Jumlah waktu
  * `{boolean TICKS}`: (Default: false) Jika false, nilai argumen durasi dianggap dalam detik. Jika true, dianggap dalam tick.
  * `[optional activator id]`: (Opsional) Anda dapat menerapkannya pada id aktivator tertentu
* Contoh: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EECOOLDOWN %player% thisismyid 10 true # For the ExecutableEvent thisismyid 
    - EECOOLDOWN %player% all 10 true # For all ExecutableEvents
```

### FIREWORK\_BOOST
* Info: Jika perintah ini dijalankan saat pelaku sedang meluncur menggunakan elytra, perintah ini akan memunculkan firework rocket dengan cara yang mirip seperti ketika pemain
klik kanan firework di tangan mereka saat meluncur untuk menambah jarak.
* Pengaturan perintah:
  * `{duration}`: Masa hidup firework dalam detik
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FIREWORK_BOOST 20
```

### FLY OFF

* Info: Menonaktifkan terbang creative pada pemain dan jika terbang pemain dinonaktifkan di udara, pemain akan diteleportasi ke blok yang memungkinkan di bawah pemain.
* Pengaturan perintah:
  * `[teleportOnTheGround]`: (Opsional) (default = true) Apakah pemain akan diteleportasi ke tanah atau tidak
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FLY_OFF teleportOnTheGround:true
```

### FLY\_ON

* Info: Memberikan pemain terbang creative
* Tanpa pengaturan perintah
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FLY_ON
```

### FORMAT\_ENCHANTMENTS

* Info: Memformat semua enchantment di lore Anda
* Pengaturan perintah:
  * `{slot}`: Slot yang menjadi target (-1 untuk mainhand)
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FORMAT_ENCHANTMENTS %slot%
```

![](https://media.ssomar.com/m/docs-img-image-393.png) -> ![](https://media.ssomar.com/m/docs-img-image-382.png)

### GIVE\_MONEY

* Info: Memberikan uang kepada pemain
  * Membutuhkan plugin Vault
* Pengaturan perintah:
  * amount: jumlah yang diberikan
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - GIVE_MONEY amount:50.0
```

### GRAVITY\_DISABLE

* Info: Menghentikan gravitasi untuk pemain, sehingga pemain tidak "jatuh" ke bawah atau naik ke atas.
* Tanpa pengaturan perintah
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - GRAVITY_DISABLE
    - DELAY 5
    - GRAVITY_ENABLE
```

### GRAVITY\_ENABLE

* Info: Mengaktifkan kembali gravitasi untuk pemain, sehingga pemain akan jatuh secara normal.
* Tanpa pengaturan perintah
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - GRAVITY_DISABLE
    - DELAY 5
    - GRAVITY_ENABLE
```

### HEAD

* Info: Memindahkan item di main hand Anda ke slot head. (Tidak akan berfungsi jika item memiliki "Curse of Binding")
* Tanpa pengaturan perintah
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - HEAD
```

### JOBS\_MONEY\_BOOST

* Info: Meningkatkan uang yang diperoleh secara sementara. Untuk [Jobs reborn](https://www.spigotmc.org/resources/jobs-reborn.4216/)
* Pengaturan perintah:
  * `{multiplier}`: Nilai pengali
  * `{time}`: Durasi boost dalam detik
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - JOBS_MONEY_BOOST multiplier:2.0 time:10
```

:::info
Pengali tidak memengaruhi nilai actionbar dari Jobs. Pengali dari perintah ini hanya berlaku ketika plugin Jobs memutuskan untuk menambah uang, xp, dan poin yang diperoleh.

Jika dijalankan beberapa kali dengan durasi yang cukup pada setiap boost, semua boost yang sedang berjalan dapat menumpuk.
:::

### JOBS\_XP\_BOOST

* Info: Mengalikan perolehan XP plugin Jobs secara sementara. Untuk [Jobs reborn](https://www.spigotmc.org/resources/jobs-reborn.4216/)
* Pengaturan perintah:
  * `{multiplier}`: Nilai pengali XP (misalnya, 2.0 untuk XP ganda)
  * `{time}`: Durasi dalam detik sebelum boost berakhir
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - JOBS_XP_BOOST multiplier:2.0 time:10
```

:::info
Pengali tidak memengaruhi nilai actionbar dari Jobs. Pengali dari perintah ini hanya berlaku ketika plugin Jobs memutuskan untuk menambah uang, xp, dan poin yang diperoleh.

Jika dijalankan beberapa kali dengan durasi yang cukup pada setiap boost, semua boost yang sedang berjalan dapat menumpuk.
:::

:::info
Perintah ini mendukung penumpukan beberapa boost secara perkalian.
:::

### LAUNCH

* Info: Meluncurkan projectile kustom. [Referensi](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type)
* Daftar: 
<details>
<summary>Tipe Projectile</summary>
* ARROW
* DRAGONFIREBALL
* EGG
* ENDERPEARL
* FIREBALL
* LARGEFIREBALL
* LINGENRINGPOTION
* LLAMASPIT
* SHULKERBULLET (Hanya tersedia untuk 1.12+)
* SIZEDFIREBALL
* SNOWBALL
* TRIDENT
* WITHERSKULL
</details>

* Pengaturan perintah:
  * `{projectile}`: tipe projectile atau ID projectile kustom dari SCore ( [Referensi](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type) )
  * `[angleRotationVertical]`: (Opsional) (default = 0) (dalam derajat) Menentukan arah ke mana entity akan diluncurkan
  * `[angleRotationHorizontal]`: (Opsional) (default = 0) (dalam derajat) Menentukan arah ke mana entity akan diluncurkan
  * `[velocity]`: (Opsional) (default = 1) Untuk menyesuaikan kecepatan projectile (juga berfungsi di 1.8 sampai 1.12)
  * `[name]`: (Opsional) Nama kustom yang diberikan pada projectile yang diluncurkan, misalnya untuk mengenalinya nanti dalam sebuah kondisi (`name:&cFire_ball`).
  * `[strictYaw]`: (Opsional) (dalam derajat) Arah horizontal peluncuran, digunakan menggantikan arah yang dilihat pemain (`0` = selatan, `90` = barat, `180` = utara, `-90` = timur). Pengaturan `angleRotation...` ditambahkan padanya.
  * `[strictPitch]`: (Opsional) (dalam derajat) Arah vertikal peluncuran, digunakan menggantikan arah yang dilihat pemain (`0` = lurus ke depan, `-90` = ke atas, `90` = ke bawah). Pengaturan `angleRotation...` ditambahkan padanya.
    * <CustomTag type="version" version="1.20.5" /> Ini juga mengubah kecepatan fireball (FIREBALL, SIZEDFIREBALL, LARGEFIREBALL, DRAGONFIREBALL, WITHERSKULL): `velocity:2` terbang dua kali lebih cepat, `velocity:1` mempertahankan kecepatan vanilla. Sebelum 1.20.5 kecepatannya tetap vanilla.
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LAUNCH projectile:My_Custom_Proj velocity:5
```

* Contoh beberapa tembakan:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LAUNCH projectile:WITHERSKULL
    - LAUNCH projectile:WITHERSKULL angleRotationVertical:20
    - LAUNCH projectile:WITHERSKULL angleRotationVertical:-20
```

* Contoh: selalu lempar lurus ke depan (secara horizontal), apa pun arah pemain melihat ke atas atau ke bawah, dengan projectile bernama:

```yaml
activators:
  activator0:
    option: PLAYER_RIGHT_CLICK
    playerCommands:
    - LAUNCH projectile:SNOWBALL strictPitch:0 name:Frost_Ball
```

:::info
Jika Anda menggunakan LAUNCH COMMAND pada aktivator PLAYER\_LAUNCH\_PROJECTILE, dan projectile diluncurkan oleh sebuah busur, projectile yang diluncurkan dengan perintah LAUNCH kustom akan mempertahankan kecepatan yang sama.
:::

:::info
Jika Anda menggunakan SHULKERBULLET sebagai tipe projectile, projectile akan memilih kursor pelaku sebagai targetnya. Jika tidak, projectile akan menargetkan entity terdekat dari pelaku.
:::

:::warning
Masalah saat ini:  
- Shulker Bullets tidak dapat digunakan di 1.9.4, 1.10.2, 1.11.2. Mulai 1.12 seharusnya tidak ada komplikasi, selain Anda harus membuat projectile SCore agar Shulker Bullet memiliki kecepatan terbang yang tepat.
:::

### LEGGINGS

* Info: Memindahkan item di main hand Anda ke slot leggings. (Tidak akan berfungsi jika item memiliki "Curse of Binding")
* Tanpa pengaturan perintah
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LEGGINGS
```

### LOCATED\_LAUNCH

* Info: Meluncurkan projectile di lokasi tertentu
* Pengaturan perintah:
  * `{projectileType}`: tipe projectile atau ID projectile kustom dari SCore ( [Referensi](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type) )
  * `[frontValue]`: (Opsional) (default = 0) positif=depan , negatif=belakang - Posisi Depan/Belakang. Misalnya, jika Anda ingin projectile muncul 5 blok jauhnya dari arah yang Anda hadapi, gunakan nilai positif yang lebih tinggi
  * `[rightValue]`: (Opsional) (default = 0) kanan=positif, negatif=kiri - Posisi Kanan/Kiri. Misalnya, jika Anda ingin projectile muncul di sebelah kiri Anda, gunakan nilai negatif yang lebih tinggi
  * `[yValue]`: (Opsional) (default = 0) Seberapa tinggi dari posisi Y Anda projectile akan muncul.
  * `[velocity]`: (Opsional) (default = 1) Seberapa cepat projectile akan terbang. Atur nilai ke 0 agar projectile jatuh ke bawah saat dimunculkan.
  * `[angleRotationVertical]`: (Opsional) (default = 0) <CustomTag type="version" version="1.14" /> Anda dapat menambahkan rotasi vertikal untuk projectile Anda (dalam derajat)
  * `[angleRotationHorizontal]`: (Opsional) (default = 0) <CustomTag type="version" version="1.14" /> Anda dapat menambahkan rotasi horizontal untuk projectile Anda (dalam derajat)
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LOCATED_LAUNCH projectile:ARROW frontValue:0 rightValue:0 yValue:0 velocity:1 angleRotationVertical:0 angleRotationHorizontal:0
```

### MINECART\_BOOST

* Info: Memberi Anda dorongan saat menaiki minecart (Efeknya mirip ketika Anda naik di powered rail)
* Pengaturan perintah:
  * `{boost}`: Kecepatan boost
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MINECART_BOOST boost:10
```

### MIX\_HOTBAR

* Info: mengacak hotbar pemain
* Tanpa pengaturan perintah
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MIX_HOTBAR
```

### MODIFY\_DURABILITY

* Mengubah durability item tertentu di slot tertentu
* Pengaturan perintah:
  * `{modification}`: Nilai positif untuk menambah durability. Nilai negatif untuk mengurangi durability
  * `{slot}`: Nomor slot item (-1 untuk slot yang sedang dipegang)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{supportUnbreaking}`: (true atau false) Apakah mendukung enchantment unbreaking atau tidak
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MODIFY_DURABILITY modification:-1 slot:%slot% supportUnbreaking:true
```

### OPEN\_CHEST

* Info: Membuka chest atau barrel di lokasi yang dipilih
* Pengaturan perintah:
  * `{world}`: Nama world
  * `{x}`: Koordinat X
  * `{y}`: Koordinat Y
  * `{z}`: Koordinat Z
  * `[bypassProtections]`: (Opsional) (default = false) Apakah chest akan tetap dibuka meskipun dilindungi
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OPENCHEST VanillaWorld 100 100 100
```

### OPEN\_ENDERCHEST

* Info: Membuka ender chest untuk pemain yang menjalankan aktivator
* Tanpa pengaturan perintah
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OPEN_ENDERCHEST
```

### OPEN\_WORKBENCH

* Info: Membuka workbench untuk pemain yang menjalankan aktivator
* Tanpa pengaturan perintah
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OPEN_WORKBENCH
```

### OXYGEN

* Info: Memberikan oksigen kepada target
* Pengaturan perintah:
  * `{time}`: Durasi oksigen dalam tick yang ingin Anda berikan
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OXYGEN time:200
```

### PROJECTILE\_CUSTOMDASH1

* Info: Mirip dengan CUSTOMDASH1 tetapi xyz akan diganti dengan koordinat xyz projectile terdekat dari Anda.
* Pengaturan perintah:
  * `{fallDamage}`: Apakah Anda akan menerima fall damage atau tidak (Jika Anda lupa mengatur true atau false, defaultnya adalah false. Untuk menerima fall damage, atur ke true)
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - PROJECTILE_CUSTOMDASH1 fallDamage:false
```

### REGAIN\_FOOD

* Info: Memberi Anda sejumlah food/saturation tertentu
* Pengaturan perintah:
  * `{amount}`: Jumlah poin saturation yang ingin Anda dapatkan. Gunakan nilai negatif untuk mengurangi poin lapar
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REGAIN_FOOD amount:5
```

### REGAIN\_MAGIC

* Info: Memberi pemain nilai tertentu dari magic [Ecoskills](https://www.spigotmc.org/resources/ecoskills-%E2%AD%95-addictive-mmorpg-skills-%E2%9C%85-create-skills-stats-effects-mana-%E2%9C%A8-plug-play.95541/) tertentu.  
* Pengaturan perintah:
  * `{ecoSkillsMagicID}`: ID dari magic Ecoskills.
  * `{amount}`: Jumlah yang diberikan.
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REGAIN_MAGIC ecoSkillsMagicID:mana amount:15
```

:::info
Mendukung nilai negatif.
:::

### REGAIN\_SATURATION

* Info: Memberi Anda sejumlah saturation tertentu
* Pengaturan perintah:
  * `{amount}`: Jumlah saturation yang ingin Anda berikan
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REGAIN_SATURATION amount:10
```

### REMOVE\_ENCHANTMENT

* Info: Menghapus enchantment dari sebuah slot
* Pengaturan perintah:
  * `{slot}`: Slot tempat enchantment dihapus (-1 untuk slot yang sedang dipegang)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{enchantment}`: Enchantment yang dihapus (ALL untuk semua enchantment)
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REMOVE_ENCHANTMENT slot:-1 enchantment:ALL
```

### REMOVE\_LORE

* Info: Menghapus satu baris lore
* Pengaturan perintah:
  * `{slot}`: Slot tempat lore dihapus (-1 untuk slot yang sedang dipegang)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{line}`: Baris yang ingin Anda hapus
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REMOVE_LORE slot:1 line:5
```

### REPLACE\_BLOCK

* Info: Mengganti blok yang dilihat pemain menjadi blok yang berbeda
* Pengaturan perintah:
  * `{material}`: ID blok (Block states didukung)
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REPLACE_BLOCK STONE_BRICKS
    - REPLACE_BLOCK WATER[LEVEL=0]
```

### SEND\_BLANK\_MESSAGE

* Info: Mengirimi Anda pesan kosong
* Tanpa pengaturan perintah
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SEND_BLANK_MESSAGE
```

### SEND\_MESSAGE

* Info: Mengirimi Anda sebuah pesan
  * [MiniMessage](https://docs.papermc.io/adventure/minimessage/format/) didukung
* Pengaturan perintah:
  * `{message}`: pesan yang ingin Anda kirim
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    playerCommands:
    - SEND_MESSAGE text:&fThis is a somewhat random text.
    - SEND_MESSAGE text:<yellow>Hello </yellow><blue>World</blue><yellow>!</yellow> # MiniMessage Suported, but dont use MiniMessage + vanilla at the same time
```

### SEND\_CENTERED\_MESSAGE

* Info: Mengirimi Anda pesan yang diratakan di tengah chat
  * [MiniMessage](https://docs.papermc.io/adventure/minimessage/format/) didukung
* Pengaturan perintah:
  * `{message}`: pesan yang ingin Anda kirim
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SEND_CENTERED_MESSAGE text:&fThis is a somewhat random text.
    - SEND_CENTERED_MESSAGE text:<yellow>Hello </yellow><blue>World</blue><yellow>!</yellow> # MiniMessage Suported, but dont use MiniMessage + vanilla at the same time
```


### SET\_ARMOR\_TRIM

* Info: Mengatur armor trim tertentu dengan pola tertentu untuk slot yang ditentukan
* Pengaturan perintah:
  * `{slot}`: Slot tempat perintah diterapkan (slot -1 untuk main hand)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{pattern}`: Pola trim (jika 'null' atau 'remove' maka pola saat ini akan dihapus). [Daftar TrimPattern](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimPattern.html)
  * `{patternMaterial}`: Material dari pola. [Daftar TrimMaterial](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimMaterial.html)
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ARMOR_TRIM slot:38 pattern:vex patternMaterial:netherite
    - SET_ARMOR_TRIM slot:38 pattern:null #to clear the armor trim
```


### SET\_BLOCK

* Info: Menempatkan blok pada blok yang menjadi target pemain
* Pengaturan perintah:
  * `{blockface}`: Anda dapat menentukan atau tidak sebuah blockFace untuk memaksa penempatan di atas, misalnya. [BlockFaces](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/block/BlockFace.html)
  * `{material}`: ID blok (Block states didukung) 
  * `{bypassProtection}`: Apakah blok akan tetap ditempatkan meskipun pemain tidak memiliki izin
  * `[whitelistCurrentBlock]`: (Opsional) (default = dapat diatur pada semua tipe blok) Daftar blok yang harus cocok dengan blok saat ini agar dapat diganti
    * Contoh:
    * AIR, WATER
    * !STONE, !COBBLESTONE
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_BLOCK blockface:UP material:OAK_WOOD
    - SET_BLOCK material:FURNACE[LIT=TRUE]
    - SET_BLOCK material:GOLD_BLOCK whitelistCurrentBlock:SAND,DIRT
```

### SET\_BLOCK\_POS

* Info: Menempatkan blok di posisi tertentu
* Pengaturan perintah:
  * `{x}`: Koordinat X
  * `{y}`: Koordinat Y
  * `{z}`: Koordinat Z
  * `{material}`: material dari blok
  * `[bypassProtection]`: (Opsional) (default = false), apakah melewati perlindungan region, claim, atau island
  * `[replace]`: (Opsional) (default = true), apakah mengganti blok jika sudah ada blok di sana
  * `[whitelistCurrentBlock]`: (Opsional) (default = dapat diatur pada semua tipe blok) Daftar blok yang harus cocok dengan blok saat ini agar dapat diganti
    * Contoh:
    * AIR, WATER
    * !STONE, !COBBLESTONE
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_BLOCK_POS x:0 y:0 z:0 material:STONE bypassProtection:false replace:true
    - SET_BLOCK_POS x:0 y:0 z:0 material:GOLD_BLOCK whitelistCurrentBlock:SAND,DIRT
```

### SET\_EQUIPPABLE\_MODEL

* Info: Mengatur data model equippable dari item di slot tertentu
* Pengaturan perintah:
  * `{slot}`: Nomor slot tempat item target berada
  * `{model}`: Nama model equipment yang ingin Anda berikan pada item
* Contoh:

```yml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_EQUIPPABLE_MODEL slot:-1 model:minecraft:diamond
```

### SET\_EXECUTABLE\_BLOCK

* Info: Setblock tetapi untuk Executable Blocks. **(EXECUTABLE BLOCKS HARUS TERPASANG)**
* Pengaturan perintah:
  * `{id}`: ID dari executable block yang ingin Anda tempatkan
  * `{x}`: Koordinat X
  * `{y}`: Koordinat Y
  * `{z}`: Koordinat Z
  * `{world}`: Nama world
  * `[replace]`: (Opsional) (default = true). Apakah akan mengganti blok yang ada pada koordinat tersebut atau tidak
  * `[bypassProtection]`: (Opsional) (default = false) jika Anda ingin melewati perlindungan seperti worldguard
  * `[ownerUUID]`: (Opsional) (default = tanpa pemilik) UUID dari calon pemilik executable block
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_EXECUTABLE_BLOCK id:Mithril_Ore x:%block_x_int% y:%block_y_int% z:%block_z_int% world:%block_world% replace:false bypassProtection:true ownerUUID:%player_uuid%
```

### SET\_ITEM\_COLOR

* Info: Mengatur warna tertentu untuk item (item yang dapat diwarnai seperti leather armor / firework star)
*  Pengaturan perintah:
  * `{slot}`: Slot tempat warna diterapkan. (-1 untuk mainhand)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{color}`: nilai angka dari warna. [Situs color picker](https://www.tydac.ch/color/)
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_COLOR slot:1 color:0
```

### SET\_ITEM\_ATTRIBUTE

* Info: Mengatur atribut pada item.
* Pengaturan perintah:
  * `{slot}`: Slot tempat atribut diterapkan. (-1 untuk mainhand)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{attribute}`: Atribut yang ingin Anda tambahkan. [Atribut](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html)
  * `{value}`: Nilai untuk operasi
  * `{equipmentSlot}`: Slot untuk atribut [EquipmentSlots](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html)
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_ATTRIBUTE slot:%slot% attribute:GENERIC_ARMOR value:10 equipmentSlot:CHEST
```


### SET\_ITEM\_COOLDOWN

* Memberi pemain/target cooldown pada sebuah item
* Pengaturan perintah:
  * `{material or group}`: Tipe material atau grup. [Info lebih lanjut untuk grup](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-2)
  * `{cooldown}`: cooldown dalam detik
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_COOLDOWN material:ENDER_PEARL cooldown:10
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_COOLDOWN group:my_cooldown_group cooldown:10
```

### SET\_ITEM\_CUSTOM\_MODEL\_DATA

* Info: Mengatur custom model data tertentu pada item tertentu
* Pengaturan perintah:
  * `{slot}`: Slot tempat data diterapkan. (-1 untuk mainhand)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{customModelData}`: nilai dari customModelData
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_CUSTOM_MODEL_DATA slot:10 customModelData:10
```

### SET\_ITEM\_LORE

* Info: Mengatur satu baris lore
* Pengaturan perintah:
  * `{slot}`: Nomor slot (-1 untuk mainhand)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
* `{line}` : Jika Anda ingin mengatur lore pertama, ketik 1
* `{text}`: Teks baris baru
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_LORE slot:%slot% line:3 text:&6LEGENDARY SWORD
```

### SET\_ITEM\_MATERIAL 

<CustomTag type="version" version="1.20.5" />
* Mengganti material item dengan material yang berbeda sambil mempertahankan nbt dari item target
* Pengaturan perintah:
  * `{slot}`: Nomor slot (-1 untuk mainhand)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{material}`: Material yang ingin Anda jadikan item
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_MATERIAL slot:10 material:DIAMOND_HOE
```

### SET\_ITEM\_MODEL

* Info: Mengatur model kustom untuk item Anda di slot tertentu
* Pengaturan perintah:
  * `{slot}`: Slot tempat model diterapkan. (-1 untuk mainhand)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{model}`: nilai model yang ingin Anda terapkan pada item target
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_MODEL slot:-1 model:minecraft:stone
```

### SET\_ITEM\_NAME

* Info: Mengatur nama kustom untuk item Anda di slot tertentu
* Pengaturan perintah:
  * `{slot}`: Slot tempat nama diterapkan. (-1 untuk mainhand)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{name}`: nama baru item
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_NAME slot:%slot% name:&eThis is the new name of the item
```

### SET\_ITEM\_POTIONCOLOR

* Info: Mengatur warna kustom pada warna potion item di slot tertentu
* Pengaturan perintah:
  * `{slot}`: Slot tempat warna diterapkan. (-1 untuk mainhand)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{color}`: Warna yang ingin Anda terapkan. Untuk warnanya, buka `https://www.tydac.ch/color/` dan ambil nilai `MapInfo Color` dari warna pilihan Anda.
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_POTIONCOLOR slot:%slot% color:10944256
```

### SET\_ITEM\_TOOLTIPSTYLE

* Info: Mengatur gaya tooltip kustom dari item di slot.
* Pengaturan perintah:
  * `{slot}`: Slot tempat gaya diterapkan. (-1 untuk mainhand)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{tooltipModel}`: (Nilai default: `namespace:id`) ID tooltip.
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_TOOLTIPSTYLE slot:-1 tooltipModel:namespace:id
```

### SET\_PLAYER\_TIME

* Info: Mengatur waktu pemain tanpa memengaruhi waktu di sisi server.
* Pengaturan perintah:
  * `{time}`: Nilai waktu. Masukkan `-1` untuk mengembalikan waktu pemain agar kembali mengikuti waktu sisi server.
  * `{relative}`: (Nilai default: false) Jika bukan true, waktu dari sudut pandang pengguna akan diatur secara harfiah ke nilai tersebut. Tetapi jika true, waktu saat ini di world akan diambil lalu ditambahkan dengan nilai yang diberikan untuk mengatur waktu sudut pandang Anda saat ini.
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_PLAYER_TIME time:6000 relative:false
```

### SET\_PLAYER\_WEATHER

* Info: Mengatur cuaca pemain tanpa memengaruhi waktu di sisi server.
* Pengaturan perintah:
  * `{weather The time value}`: Mengatur cuaca pemain dari sudut pandang mereka
    * Opsi:
      * RESET : Mengembalikan ke cuaca sisi server
      * DOWNFALL : Hujan atau bersalju tergantung biome
      * CLEAR : Cuaca cerah, ada awan tetapi tidak ada hujan.
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_PLAYER_WEATHER weather:CLEAR
```

### SET\_TEMP\_BLOCK\_POS

* Info : Menempatkan blok sementara
* Pengaturan perintah:
  * `{x}`: Koordinat X
  * `{y}`: Koordinat Y
  * `{z}`: Koordinat Z
  * `{world}`: Nama world
  * `{material}`: ID blok
  * `{time}`: Waktu dalam tick
  * `[bypassProtection]`: (Opsional) (default = false) Apakah mengabaikan intervensi pihak ketiga atau tidak
  * `[whitelistCurrentBlock]`: (Opsional) (default = dapat diatur pada semua tipe blok) Daftar blok yang perlu diperhatikan
    * Contoh:
    * AIR, WATER
    * !STONE, !COBBLESTONE


```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_TEMP_BLOCK_POS x:%entity_x% y:%entity_y% z:%entity_z% world:%entity_world% material:BEDROCK time:40 bypassProtection:true whitelistCurrentBlock:!AIR,!WATER
```

:::warning
Perintah ini tidak mengganti blok yang memiliki data tambahan (inventory, rotasi, dll)
:::

### SPAWN\_ENTITY\_ON\_CURSOR

* Info: Memunculkan entity di kursor Anda
  * Anda dapat menentukan [EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * Atau definisi entity, contoh: `{HasVisualFire:1b,id:"minecraft:bee"}` (1.21.+)
  * Atau ID MythicMob
* Pengaturan perintah:
  * `{entity}`: Spesifikasi entity
  * `{amount}`: Jumlah mob yang akan muncul di titik tersebut
  * `[maxRange]`: (Opsional) (default = 200) Jangkauan maksimum spawn
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SPAWN_ENTITY_ON_CURSOR entity:CREEPER amount:1
```

```
# With EntitySnapshot
- SPAWN_ENTITY_ON_CURSOR entity:{HasVisualFire:1b,id:"minecraft:bee"} amount:1

# With MythicMob ID
- SPAWN_ENTITY_ON_CURSOR entity:MyCustomBossID amount:1
```

### SUDO

* Info: Memaksa Anda menjalankan sebuah perintah
* Pengaturan perintah:
  * `{command}`: Perintah yang dijalankan
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SUDO sit
    - SUDO say hi
```

### SUDO\_OP

* Info: Memberi pemain OP, menjalankan SUDO pada pemain, lalu mencabut OP-nya (DEOP)
* Info Tambahan: Selama OP, pemain hanya dapat menjalankan perintah yang ditentukan setelah SUDOOP, semua perintah lain diblokir saat pemain berstatus OP, dan jika server crash, tidak masalah. Pemain akan di-DEOP saat pemain terhubung kembali.
* Pengaturan perintah:
  * `{command}`: Perintah yang dijalankan dengan OP
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SUDO_OP summon zombie
    - SUDO_OP fly
    - SUDO_OP god
    - SUDO_OP /replacenear 20 tnt
```

:::danger
Tidak disarankan menggunakan ini **terlalu sering**. Seperti dijelaskan di bagian atas halaman ini, jika ingin menjalankan perintah vanilla gunakan perintah execute (Dijelaskan di FAQ [Cara menggunakan perintah vanilla](/executableitems/questions-or-guides/frequently-asked-questions/how-to-use-vanilla-commands)).

Gunakan SUDOOP hanya jika benar-benar tidak ada opsi lain, SUDOOP harus menjadi pilihan terakhir, bukan yang pertama.
:::

### SWAP\_HAND

* Info: Menukar item saat ini dengan item offhand Anda
* Tanpa pengaturan perintah
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SWAP_HAND
```

### TRANSFER\_ITEM

* Info: Menukar 2 item di inventory berdasarkan slot
* Pengaturan perintah:
  * `{slot of launcher}`: Slot target untuk slot no.1
  * `{slot of receiver}`: Slot target untuk slot no.2
  
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `[boolean drop]`: (Opsional) (default = false) Apakah slot peluncur dijatuhkan saat penukaran atau tidak

### XP_BOOST

* Info: Meningkatkan perolehan xp untuk jangka waktu tertentu.
* Pengaturan perintah:
  * `{multiplier}`: Nilai pengali XP
  * `{timeinsecs}`: Durasi dalam detik
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - XP_BOOST 2 10
```

:::info
Hati-hati ! Perintah ini dapat menumpuk, jadi jika Anda menjalankan perintah ini beberapa kali, Anda akan mendapatkan pengali yang semakin besar jika jeda di antara keduanya tidak cukup bagi boost terakhir untuk menghilang.\
```yaml
- XP_BOOST 2 5
- DELAY 1
- XP_BOOST 2 5
```

Artinya XP akan di-boost dengan urutan ini:
* 1 detik: x2
* 4 detik: x4
* 1 detik: x2
:::
