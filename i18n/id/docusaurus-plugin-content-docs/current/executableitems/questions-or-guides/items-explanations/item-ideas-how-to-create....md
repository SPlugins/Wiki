---
description: >-
  Kumpulan ide item kustom yang sering ditanyakan dan cara membuatnya dengan
  aktivator, kondisi, dan perintah di ExecutableItems.
source_hash: 267b9196d0e24db3
translated_at: '2026-11-13T17:51:20.568Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Ide Item - Cara membuat...?

## Halaman apa ini?

* Halaman ini berisi penjelasan secara umum tentang ide-ide item yang sering ditanyakan orang cara membuatnya. Jadi, jika Anda ingin membuat sesuatu tetapi tidak tahu caranya, lihatlah di sini terlebih dahulu. Mungkin pertanyaan Anda ada di sini, atau ada metode serupa yang bisa Anda tiru dengan melihat cara kerja plugin ^^

:::info
Halaman ini memberi tahu Anda cara membuat sesuatu, atau memberi ide. Jika Anda tidak tahu cara kerja sebuah kondisi, perintah, placeholder, dan sebagainya, ini bukan tempat untuk mempelajarinya. Anda bisa menjelajahi wiki untuk melihat bagian-bagiannya. Di sini Anda hanya akan mendapatkan ide, bukan tutorial.
:::

### Saya ingin kemampuan dari ExecutableItem saya tidak berfungsi di region tertentu

* Di dalam aktivator yang memiliki "kemampuan" Anda, buka **playerConditions** dan cari "**ifNotInRegion**", lalu gunakan sesuai kebutuhan. Dengan kondisi ini Anda bisa membuat **blacklist** region.

### Saya ingin kemampuan dari ExecutableItem saya hanya berfungsi di region tertentu

* Di dalam aktivator yang memiliki "kemampuan" Anda, buka **playerConditions** dan cari "**ifInRegion**", lalu gunakan sesuai kebutuhan. Dengan kondisi ini Anda bisa membuat **whitelist** region.

### Saya ingin item saya meminta konfirmasi sebelum digunakan

* Cukup gunakan kondisi EI kustom di dalam aktivator dan aktifkan "ifNeedPlayerConfirmation"

### Armor yang membakar musuh yang memukul Anda

* Buat aktivator **PLAYER\_RECEIVE\_HIT\_BY\_PLAYER** dan pada **targetCommands** gunakan perintah BURN \<seconds>
* Jika ingin hal yang sama untuk entitas, lakukan hal yang sama tetapi dengan **PLAYER\_RECEIVE\_HIT\_BY\_ENTITY**

:::info
Jangan lupa mengatur **detailedSlots** yang benar
:::

### Item yang hanya berfungsi di claim pribadi

* Di dalam aktivator yang Anda inginkan, tambahkan **playerCondition ifPlayerMustBeOnHisClaim**

### Item yang hanya berfungsi di claim pribadi dan tidak di area yang belum di-claim

* Buat kondisi placeholder di dalam aktivator yang Anda inginkan dengan format berikut
  * **PLAYER\_STRING**
  * **NOT EQUALS**
  * part1: %griefprevention\_currentclaim\_ownername%
  * part2: Unclaimed

### Bagaimana cara membuat item yang menarik pemain lain ke arah Anda?

* Di dalam aktivator yang Anda inginkan, pada perintah, gunakan perintah AROUND yang dikombinasikan dengan CUSTOMDASH1 menggunakan placeholder posisi pemain. Jadi, saat Anda klik kanan, perintah CUSTOMDASH1 akan melontarkan orang-orang di SEKITAR Anda ke KOORDINAT ANDA, pada dasarnya menarik orang-orang tersebut.

### Bagaimana cara membuat treecapitator?

* Aktivator **PLAYER\_BREAK\_BLOCK** dan pada **blockCommands** gunakan perintah **VEINBREAKER**

### Saya ingin menonaktifkan pemasangan kepala pemain sebagai perlengkapan

* Buat aktivator **PLAYER\_EQUIP\_THE\_EI** dan aktifkan **cancelEvent**

### Menonaktifkan nametag saat diklik

* Buat aktivator PLAYER\_CLICK\_ON\_ENTITY -> detailedClick right dan aktifkan cancel event

### Saya ingin membuat armor yang memberi Anda lebih banyak...

* Jika yang Anda inginkan adalah menambahkan **heart containers**, **speed**, **knockback resistance**, **armor**, dan lainnya pada armor, pedang, beliung, atau apa pun yang Anda mau, Anda harus bekerja dengan **attributes**.

### Cara menjalankan perintah saat Anda mengklik pemain

* Cukup gunakan aktivator PLAYER\_CLICK\_ON\_PLAYER dan tambahkan apa pun yang Anda inginkan pada perintah

:::info
Hal yang sama berlaku jika Anda ingin menjalankan perintah saat MEMUKUL, tetapi dengan aktivator PLAYER\_HIT\_PLAYER
:::

### Item yang menonaktifkan knockback

* Cara terbaik untuk mencapainya adalah menggunakan attributes dan KNOCKBACK RESISTANCE. Namun, jika Anda ingin item ini berfungsi di mana saja dalam inventaris, buat aktivator PLAYER\_RECEIVE\_HIT\_GLOBAL dan teleportasikan pemain ke dirinya sendiri, seperti ini
  * execute at %player% run tp %player% \~ \~ \~

### Saya ingin item yang memberi slowness kepada semua orang di sekitar saya

* Gunakan perintah AROUND dan berikan efeknya dengan placeholder dari around. Lihat perintah AROUND di wiki untuk info lebih lanjut.

### Menonaktifkan pewarnaan pada papan tanda dan kalung serigala

* Untuk SIGN:
  * Aktivator: PLAYER\_RIGHT\_CLICK
  * ONLY\_BLOCK
  * detailedBlocks: \<Here add the signs you want to block>
  * Dan aktifkan cancel event
* Untuk kalung serigala:
  * Aktivator: PLAYER\_CLICK\_ON\_ENTITY
  * detailedClick: RIGHT
  * detailedEntities: WOLF
  * Dan aktifkan cancel event

### Membuat serigala yang bertahan selama "x" detik lalu menghilang

Jika ingin membuat serigala peliharaan yang bertahan selama "x" detik, tambahkan ini:

```
playerCommands:
- execute at %player% run summon wolf ~ ~ ~ {Owner: %player%,Tags:["%player%wolf"]}
- DELAY 10
- execute run kill @e[tag=%player%wolf]
just modify the delay depending the time you want the wolf to be alive
```

### Armor yang menonaktifkan kerusakan dari lava dan api

* Buat aktivator PLAYER\_RECEIVE\_HIT\_GLOBAL dan pada detailedDamage tambahkan LAVA, FIRE\_TICK, dan FIRE, lalu aktifkan cancelEvent pada aktivator tersebut.
*   Pastikan Anda memilih detailedSlot yang benar untuk bagian armor yang Anda gunakan

    Jika ingin menonaktifkan animasi api, hal terdekat yang bisa Anda lakukan adalah membuat aktivator loop dengan perintah REMOVEBURN.

### Armor yang memungkinkan bernapas di dalam air

* Buat aktivator LOOP, pilih detailedSlot yang benar, dan berikan efek water\_breathing kepada pemain.

### Menonaktifkan pencucian armor kulit yang diwarnai di cauldron

* Cukup buat aktivator RIGHT\_CLICK, lalu typeTarget: ONLY\_BLOCK\_CLICK, detailedBlocks: CAULDRON, dan aktifkan cancel event.

### Item yang membuka GUI

* Plugin GUI biasanya memiliki tempat untuk menambahkan pemain. Misalnya, perintahnya adalah /opengui \<player>, jadi di dalam item Anda harus menambahkan /opengui %player%
  * jika perintahnya berbeda, cukup ubah bagian itu, misalnya /enchanttable %player%
* Jika plugin Anda tidak memilikinya, alih-alih menambahkan tempat untuk pemain, gunakan SUDOOP, misalnya:
  * SUDOOP opengui
  * SUDOOP enchanttable

### Mencegah trident dilempar

* Tambahkan aktivator PLAYER\_LAUNCH\_PROJECTILE dan set cancelEvent menjadi true

### Saya ingin menonaktifkan kerusakan akibat jatuh untuk armor saya

* Gunakan aktivator PLAYER\_RECEIVE\_HIT\_GLOBAL dan tentukan FALL pada detailedDamage, lalu aktifkan cancel event

### Menonaktifkan pengambilan air dengan botol

* PLAYER\_RIGHT\_CLICK dan aktifkan cancel event

### Memeriksa apakah seorang pemain memancing pemain lain

* Gunakan aktivator PROJECTILE\_HIT\_PLAYER, PLAYER\_FISH\_PLAYER, sebuah aktivator LOOP, dan sebuah variabel. (Ditambah beberapa aktivator untuk mencegah bug)
  * Begitu ROD mengenai pemain, PROJECTILE\_HIT\_PLAYER akan berjalan, jadi set variabel Anda ke "%target%"
  * Aktivator loop hanya akan berfungsi jika variabelnya berbeda dari "NO", dan Anda bisa menggunakan variabel tersebut untuk menargetkan pemain yang dipancing.
  * Dan jika pemain berhasil MEMANCING target, set variabel ke "NO", sehingga variabel di-reset dan aktivator berhenti berfungsi
  * Aktivator untuk mencegah bug adalah PLAYER\_DROP\_THE\_EI dan PLAYER\_DESELECT\_THE\_EI, reset variabel pada keduanya ATAU batalkan event-nya.

### Memanggil petir pada kursor

* Pertama, buat aktivator PLAYER\_ALL\_CLICK atau PLAYER\_RIGHT\_CLICK atau PLAYER\_LEFT\_CLICK
* Lalu pada perintah gunakan perintah kustom [SPAWNENTITYONCURSOR](/tools-for-all-plugins/custom-commands/player-and-target-commands#spawnentityoncursor) [LIGHTNING](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html#LIGHTNING) 1
  * Secara default petir ini tidak memberi kerusakan, jadi Anda juga bisa menambahkan perintah kustom `DAMAGE <number>`

### Cara menambah nyawa maksimum sebanyak "x" setiap kali aktivator terpicu

* Untuk menambah nyawa maksimum Anda, Anda memerlukan PlaceholderAPI dan ekspansi Player, dan perintah yang akan Anda gunakan adalah:
  * execute run attribute %player% minecraft\:generic.max\_health base set %player\_max\_health%+2

### Cara memulihkan nyawa setiap kali memukul

* Pada aktivator yang berkaitan dengan pukulan seperti PLAYER\_HIT\_PLAYER dan PLAYER\_HIT\_ENTITY, gunakan perintah REGAIN\_HEALTH pada playerCommands, lihat perintah tersebut di bagian Commands untuk info lebih lanjut.
* Jika ingin memulihkan nyawa sebesar kerusakan yang Anda berikan, gunakan Placeholder EI **%last\_damage**_**\_**_**dealt%**

### Busur yang meledak saat proyektil mengenai blok

* Buat aktivator PROJECTILE\_HIT\_BLOCK pada item Anda, dan pada perintah Anda bisa menggunakan
  * EXPLODE blockCommand
  * execute at %player% run summon tnt %block\_x\_int% %block\_y\_int% %block\_z\_int%
    * Setelah baris itu Anda memerlukan execute run kill %projectile\_uuid%
  * atau hal yang sama seperti sebelumnya tetapi dengan memanggil creeper

### Saya ingin menonaktifkan pengisian busur atau crossbow

* Ini belum bisa dilakukan menggunakan ExecutableItems. Satu-satunya hal yang bisa dilakukan EI adalah mencegah busur atau crossbow menembakkan proyektil, tetapi untuk pengisiannya? Belum bisa.

### Cara membuat armor yang menonaktifkan pembekuan pada pemain (1.18)

* Anda bisa menjalankan perintah FREEZE secara loop, seperti ini:

```
    playerCommands:
    - 'LOOP START: 20'
    - GLACIAL_FREEZE 1
    - DELAYTICK 1
    - LOOP END
```

### Saya ingin aktivator hanya berfungsi jika pemain memiliki nilai tertentu pada scoreboard

Cukup gunakan ekspansi Scoreboard dari PlaceholderAPI, lalu gunakan placeholder-nya di bagian placeholderCondition di dalam aktivator Anda ^^
