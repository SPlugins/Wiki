---
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
description: >-
  Daftar lengkap aktivator ExecutableItems beserta deskripsi, fitur eksklusif,
  dan contoh penggunaan untuk menjalankan perintah, kondisi, dan cooldown.
source_hash: 7a0c050ed0ea5e9b
translated_at: '2026-11-13T17:50:01.538Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Daftar Aktivator

## Aktivator ExecutableItems

Di sini Anda menemukan daftar aktivator yang tersedia beserta deskripsi dan beberapa contohnya. Aktivator memungkinkan Anda menjalankan aksi kustom, dapat memiliki kondisi, menjalankan perintah, memiliki cooldown, dan sebagainya.

:::warning
Aktivator dengan `option:` yang tidak ada dalam daftar ini (salah ketik, aktivator dari plugin lain, dll.) akan **dinonaktifkan**: aktivator tersebut tidak pernah berjalan, dan konsol menampilkan error beserta nama opsi terdekat saat item dimuat.
:::

Aktivator premium diberi label dengan tag: <CustomTag type="premium" />

Fitur aktivator adalah fitur yang eksklusif untuk aktivator tersebut.

### PLAYER\_ALL\_CLICK

* Info: Aktivator yang terpicu saat pemain melakukan klik kiri atau klik kanan dengan item.
  * Anda tidak dapat membedakan klik tersebut, untuk itu gunakan aktivator yang berbeda seperti PLAYER\_RIGHT\_CLICK atau PLAYER\_LEFT\_CLICK.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Jika typeTarget: ONLY\_BLOCK, fitur-fitur ini akan tersedia.
    * [Block commands
      ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Contoh:
  * Warping Stone – Seketika memindahkan pemain sejauh 5 blok ke arah yang dihadapinya. Cooldown: 10 detik.
  * Healing Totem – Saat diklik, memulihkan 4 hati pemain dan memberikan Regeneration I selama 5 detik.
  * Thunder Rod – Menyambar musuh terdekat dalam jarak 10 blok dengan petir.
  * Gravity Boots – Melontarkan pemain 3 blok ke udara dan meniadakan damage jatuh selama 5 detik.
  * Explosive Rune – Membuat ledakan kecil di lokasi pemain yang menghempaskan mob di sekitarnya tetapi tidak merusak terrain.

### PLAYER\_BED\_ENTER <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain mengklik kanan tempat tidur dan masuk ke dalamnya. Jika pemain tidak masuk, aktivator ini tidak akan terpicu. Aktivator ini tidak terpicu saat pemain tidur, hanya oleh aksi masuk ke tempat tidur.
* Contoh:
  * Void Sleep – Saat masuk ke tempat tidur, pemain dipindahkan ke dimensi mimpi buatan khusus untuk dijelajahi.
  * Lunar Shield – Memberikan Absorption IV selama 5 menit saat tidur di tempat tidur, sehingga menyediakan health bonus sementara.
  * Nightmare Curse – Memunculkan phantom yang bermusuhan di atas tempat tidur saat pemain masuk ke tempat tidur, memaksa mereka bertarung sebelum bisa tidur dengan tenang.
  * Dreamwalker’s Blessing – Saat masuk ke tempat tidur, pemain mendapatkan Regeneration II sampai mereka bangun (aksi bangun akan menggunakan aktivator PLAYER\_BED\_LEAVE).

### PLAYER\_BED\_LEAVE <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain meninggalkan tempat tidur. Hati-hati! Aktivator ini terpicu saat pemain tidur lalu hari sudah siang sehingga mereka meninggalkan tempat tidur, tetapi aktivator ini juga terpicu saat pemain meninggalkan tempat tidur di tengah tidur, karena ini hanyalah aksi meninggalkan tempat tidur.
  * Jika Anda ingin aktivator berjalan hanya saat pemain benar-benar tidur, Anda dapat menggunakan aktivator ini + worldCondition -> ifWorldTime untuk memeriksa apakah sudah siang.
* Contoh:
  * Morning Boost – Saat meninggalkan tempat tidur, pemain mendapatkan Speed II dan Haste II selama 60 detik untuk memulai hari dengan penuh energi.
  * Phantom's Warning – Jika pemain meninggalkan tempat tidur sebelum tidur sepenuhnya, seekor phantom muncul di dekatnya sebagai konsekuensinya.
  * Dream Collector – Saat bangun, pemain menerima enchanted book acak sebagai "kenangan mimpi".
  * Energy Surge – Saat meninggalkan tempat tidur, hunger bar pemain terisi penuh kembali, menyimulasikan tidur malam yang nyenyak.

### PLAYER\_BEFORE\_DEATH

* Info: Aktivator yang terpicu saat pemain mati. Perbedaan antara aktivator ini dan aktivator PLAYER\_DEATH adalah aktivator ini terpicu lebih dahulu, sehingga menawarkan fitur untuk dapat menyelamatkan pemain sebelum ia mati.
  * Agar lebih mudah dipahami, totem of undying vanilla terpicu oleh aktivator ini untuk menerapkan efek yang dimilikinya.
* Contoh:
  * Soulbound Amulet – Saat pemain akan mati, ia justru dipindahkan ke titik spawn-nya dengan 2 hati dan Regeneration II sementara.
  * Last Stand Shield – Saat hampir mati, pemain mendapatkan Resistance III dan Absorption selama 5 detik, memberi mereka kesempatan untuk melawan balik.
  * Phoenix Blessing – Saat kematian sudah di depan mata, pemain meledak dalam api, memberikan damage api kepada musuh dan hidup kembali dengan setengah health.
  * Undead Pact – Jika pemain akan mati, ia justru dihidupkan kembali dengan 3 hati, tetapi tidak dapat menggunakan senjata selama 10 detik.

### PLAYER\_BLOCK\_BREAK <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain menghancurkan blok.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Contoh:
  * Ore Booster Pickaxe – Saat menghancurkan blok ore, ada peluang 20% untuk menggandakan drop.
  * Nature’s Wrath Axe – Menghancurkan log memiliki peluang 10% untuk memanggil roh pohon yang bermusuhan (mob kustom).
  * Cursed Excavation – Saat menghancurkan stone, ada peluang 5% untuk memunculkan silverfish atau memberikan Mining Fatigue selama 5 detik.
  * Explosive Demolition Hammer – Saat menghancurkan blok, blok di sekitarnya ikut hancur, sehingga dapat menghancurkan area 3x3.

### PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain memblokir serangan dari sebuah entity dengan shield.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Contoh:
  * Thorned Shield – Saat memblokir serangan, penyerang menerima damage sebesar 3 hati.
  * Shockwave Defense – Berhasil memblokir serangan menghempaskan semua musuh di sekitar dalam jarak 5 blok.
  * Energy Absorption – Saat memblokir serangan, pemain memulihkan 1 hati dan mendapatkan Resistance I selama 3 detik.
  * Frozen Guard – Jika serangan diblokir, penyerang dibekukan di tempat (Slowness IV) selama 2 detik.
  * Blazing Counter – Memblokir serangan membakar penyerang selama 4 detik.

### PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain memblokir serangan dari pemain lain dengan shield.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Contoh:
  * Retribution Shield – Saat memblokir serangan dari pemain lain, penyerang langsung dilucuti, sehingga senjatanya jatuh ke tanah.
  * Vampiric Guard – Saat berhasil memblokir serangan, pemain menyerap sebagian health penyerang (memulihkan 2 hati).
  * Dimensional Rift – Jika serangan pemain diblokir, ada peluang 20% mereka dipindahkan sejauh 10 blok ke arah acak.
  * Adrenaline Block – Saat memblokir serangan, pemain langsung mendapatkan Speed II dan Strength I selama 5 detik, memungkinkan serangan balik yang cepat.

### PLAYER\_BLOCK\_PLACE <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain menempatkan blok.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Contoh:
  * Living Roots – Saat menempatkan sapling, ada peluang 10% sapling tersebut langsung tumbuh menjadi pohon.
  * Runic Inscription – Menempatkan blok stone memiliki peluang 5% untuk mengubahnya menjadi Runed Stone, memancarkan partikel dan memberikan Haste I kepada pemain di sekitar selama 10 detik.
  * Saat menempatkan TNT, ada peluang kecil (5%) TNT langsung menyala, menciptakan ledakan yang tidak terduga.

### PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain menghancurkan shield pemain lain (biasanya disebut target).
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Contoh:
  * Shatter Strike – Saat menghancurkan shield pemain, penyerang mendapatkan Strength I selama 5 detik, memperkuat serangan berikutnya.
  * Saat shield dihancurkan, ledakan kecil terjadi di lokasi target, menghempaskannya sejauh 5 blok.
  * Saat shield hancur, target menerima **Wither I** selama **5 detik**, perlahan menguras health-nya.
  * Dimensional Fracture – Saat menghancurkan shield pemain, target sesaat dipindahkan 5 blok ke atas, membuatnya disorientasi sebelum jatuh kembali.

### PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain menyikat (brush) sebuah blok.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Contoh:
  * Cursed Dust – Jika pemain menyikat blok yang mencurigakan, ada peluang 10% mereka dibutakan sementara saat awan debu terkutuk menyembur di sekitar mereka.
  * Buried Riches – Menyikat blok memiliki peluang kecil untuk memberi pemain gold nugget atau emerald, menyimulasikan penemuan harta karun yang hilang.
  * Temporal Echoes – Saat menyikat blok artefak, pemain mendengar bisikan samar dari masa lalu, yang mengisyaratkan rahasia berlatar lore yang tersembunyi di dekatnya.

### PLAYER\_BUCKET\_ENTITY

* Info: Aktivator yang terpicu saat pemain menggunakan bucket untuk menangkap sebuah entity.
  * Contohnya adalah saat Anda menyimpan ikan di dalam bucket berisi air.
  * Jika Anda ingin menjalankan sesuatu saat "mencoba" menangkap entity yang tidak dapat ditangkap dengan bucket, aktivator ini tidak akan berjalan, gunakan PLAYER\_CLICK\_ON\_ENTITY.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Contoh:
  * Instant Fillet – Alih-alih menangkap ikan di dalam bucket, pemain langsung menerima raw fish di inventory-nya, seolah-olah ia memfilet ikan itu dengan mahir di tempat.
  * Essence Extraction – Saat menggunakan bucket pada axolotl, alih-alih menangkapnya, pemain menerima potion "Axolotl Mucus" yang memberikan Regeneration I selama 10 detik.

### PLAYER\_CHANGE\_WORLD

* Info: Aktivator yang terpicu saat pemain berpindah ke dunia yang berbeda.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
* Contoh:
  * Dimensional Adaptation – Saat pemain memasuki dunia baru, mereka menerima buff sementara acak (Speed, Strength, atau Night Vision selama 30 detik) karena tubuh mereka menyesuaikan diri dengan lingkungan baru.
  * Weight of Realms – Jika pemain memasuki Nether atau End, mereka sementara mendapatkan Slowness II selama 10 detik, menyimulasikan perubahan gravitasi yang mendadak.
  * Forgotten Memories – Saat berpindah dunia, ada peluang kecil (5%) pemain kehilangan satu item inventory secara acak, menyimulasikan "kenangan" yang terlupakan.
  * Realmwalker’s Favor – Memasuki dunia baru memberikan item loot misterius yang bertema sesuai dimensi (misalnya, Nether memberi gold ingot acak, End memberi Ender Pearl, dst.), seolah-olah dihadiahkan oleh kekuatan tak dikenal.

### PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain mengklik sebuah entity dan NPC Citizen.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Contoh:
  * Beast Tamer’s Bond – Mengklik Wolf, Cat, atau Horse sambil memegang item khusus (misalnya, Golden Apple) memberikan Speed II dan Regeneration sementara selama 60 detik.
  * Hidden Pocket – Mengklik Zombie Piglin dengan Gold Ingot memiliki peluang 5% untuk langsung menerima item loot Nether acak tanpa perlu barter.
  * Gourmet’s Choice – Mengklik Cow, Pig, atau Chicken sambil memegang Knife (item kustom) langsung menghasilkan drop daging berkualitas lebih tinggi (misalnya, Cooked Steak alih-alih Raw Beef).
  * Battle Focus – Mengklik Iron Golem sambil memegang Shield memberinya Resistance II dan Knockback Resistance sementara selama 30 detik, sehingga ia dapat menahan lebih banyak damage.
  * Final Tribute – Mengklik Skeleton atau Wither Skeleton sambil memegang Bone Block memberi pemain peningkatan Speed II singkat seolah-olah menyerap energi prajurit kuno.

### PLAYER\_CLICK\_ON\_PLAYER

* Info: Aktivator yang terpicu saat pemain mengklik pemain lain (biasanya disebut target).
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Contoh:
  * Shared Fortune – Mengklik pemain sambil memegang Emerald Block membagi level XP Anda menjadi dua, dan pemain lain langsung menerima XP yang hilang tersebut.
  * Mengklik rekan satu tim sambil memegang Potion of Healing langsung memindahkan setengah health Anda kepadanya, menjadikannya penyelamat strategis di detik-detik terakhir.
  * Tactical Mark – Mengklik pemain lain sambil sneak memberikan efek glowing kepadanya selama 10 detik, sehingga terlihat oleh rekan satu tim dalam pertarungan PvP.
  * Oath of Protection – Mengklik pemain sambil memegang Shield memberinya Resistance I selama 30 detik, berfungsi sebagai efek pelindung sementara.

### PLAYER\_CONNECTION <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain login ke server.
* Contoh:
  * Realm’s Welcome – Saat login, pemain menerima peningkatan Speed I dan Haste I sementara selama 30 detik, menyimulasikan ledakan energi saat memasuki dunia.
  * Echo of the Past – Pesan pertama yang dilihat pemain di chat adalah pesan "kenangan" yang dikustomisasi.
  * Daily Fortune – Saat login, pemain diberi buff atau debuff minor acak selama 10 menit (misalnya, Luck I, Speed I, atau Slowness I), sehingga setiap sesi terasa sedikit berbeda.
  * Dimensional Echo – Jika pemain login dari dunia lain (Nether atau End), mereka sesaat mengalami efek partikel berputar dan mendengar suara ambient yang terdistorsi selama beberapa detik sebelum benar-benar stabil.

### PLAYER\_CONSUME

* Info: Aktivator yang terpicu saat pemain berhasil memakan / mengonsumsi sebuah item.\
  Hati-hati, aktivator ini hanya berfungsi untuk item Minecraft yang dapat dimakan atau item yang diubah menjadi item yang dapat dimakan menggunakan [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CONSUME\_THE\_EI

* Info: Aktivator yang terpicu saat pemain berhasil memakan/mengonsumsi ExecutableItem itu sendiri. \
  Hati-hati, aktivator ini hanya berfungsi untuk Executable Items yang dapat dimakan atau yang diubah menjadi item yang dapat dimakan menggunakan [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CUSTOM\_LAUNCH

* Info: Aktivator yang terpicu saat pemain meluncurkan projectile dengan perintah SCore seperti:
  * [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
  * [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch)
  * [LAUNCH\_ENTITY](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#launchentity)
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [entityCommands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands) (Pada aktivator ini, entity adalah projectile)
  * [Projectile placeholders](/tools-for-all-plugins-score/placeholders#projectile-placeholders)
  * [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities) (Untuk whitelist/blacklist beberapa projectile)

### PLAYER\_DEATH

* Info: Aktivator yang terpicu saat pemain mati.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_DESELECT\_THE\_EI <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain membatalkan pemilihan ExecutableItem.
  * Ini terjadi saat ExecutableItem berada di mainhand, lalu Anda mengganti item yang dipegang, sehingga Anda "membatalkan pemilihannya".

### PLAYER\_DISABLE\_FLY

* Info: Aktivator yang terpicu saat pemain berhenti terbang.
  * Aksi terbang berarti benar-benar terbang, bukan gliding atau berada di udara karena jatuh.

### PLAYER\_DISABLE\_GLIDE

* Info: Aktivator yang terpicu saat pemain berhenti gliding.

### PLAYER\_DISABLE\_SNEAK <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain berhenti sneak.

### PLAYER\_DISABLE\_SPRINT <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain berhenti sprint.

### PLAYER\_DISABLE\_SWIM

* Info: Aktivator yang terpicu saat pemain berhenti berenang (berenang ala 1.13)
* 
### PLAYER\_DISCONNECT

* Info: Aktivator yang terpicu saat pemain logout dari server.

### PLAYER\_DISMOUNT

* Info: Aktivator yang terpicu saat pemain turun / keluar dari tunggangan entity.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_DROP\_ITEM

* Info: Aktivator yang terpicu saat pemain menjatuhkan sebuah item.

### PLAYER\_DROP\_THE\_EI <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain menjatuhkan ExecutableItem.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_EDIT\_BOOK <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain melakukan perubahan pada book and quill lalu menekan done atau menandatangani buku.

### PLAYER\_EI\_BREAK <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain merusak ExecutableItem karena durability vanilla habis.

### PLAYER\_EMPTY\_BUCKET

* Info: Aktivator yang terpicu saat pemain mengosongkan bucket ExecutableItem. Aktivator ini juga terpicu saat Anda membuat blok waterlogged atau mengisi cauldron dengan cairan tersebut, misalnya.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Saat aktivator ini diaktifkan, blok target adalah lokasi tempat air seharusnya ditempatkan. Dengan informasi tersebut, Anda dapat menggunakan SETBLOCK untuk mengganti air dengan sesuatu yang lain jika Anda mau.

### PLAYER\_ENABLE\_FLY <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain **mulai** terbang. Aktivator ini terpicu oleh aksi "menekan spasi dua kali sambil memiliki izin terbang".
  * Artinya aktivator ini tidak terpicu jika Anda sudah terbang, melainkan terpicu oleh aksi mengubah status terbang dengan "menekan spasi dua kali".
* Contoh:
  * Lightning Takeoff – Saat terbang diaktifkan, petir kecil tanpa damage menyambar posisi pemain untuk efek dramatis.
  * Aerial Boost – Saat mulai terbang, pemain mendapatkan efek Speed III sementara selama 5 detik untuk menyimulasikan lepas landas yang bertenaga.
  * Gale Force Wings – Saat mulai terbang, efek angin kencang mendorong semua entity di sekitar pemain.

### PLAYER\_ENABLE\_GLIDE

* Info: Aktivator yang terpicu saat pemain mulai gliding.

### PLAYER\_ENABLE\_SNEAK <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain mulai sneak.

### PLAYER\_ENABLE\_SPRINT <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain mulai sprint.

### PLAYER\_ENABLE\_SWIM

* Info: Aktivator yang terpicu saat pemain mulai berenang (berenang ala 1.13)

### PLAYER\_ENTER\_IN\_THEIR\_LAND <CustomTag type="premium" />

* Info: Aktivator yang terpicu jika Anda memasuki land milik Anda atau land tempat Anda dipercaya
  * Plugin yang didukung:
    * Lands

### PLAYER\_ENTER\_IN\_THEIR\_PLOT <CustomTag type="premium" />

* Info: Aktivator yang terpicu jika Anda memasuki sebuah plot.
  * Plugin yang didukung:
    * PlotSquared

### PLAYER\_EQUIP\_THE\_EI <CustomTag type="premium" />

* Info: Aktivator yang terpicu jika Anda memakai/memasang bagian armor ke slot armor.
  * `detailedSlots` dapat membatasinya ke satu slot armor: 36 boots, 37 leggings, 38 chestplate, 39 helmet (slot tempat bagian armor dipasang), ditambah -1 untuk tangan asal item tersebut.
  * <CustomTag type="version" version="1.21.3" /> Item dengan [equippable features](/executableitems/configurations/item-configuration/item-features#equippable-features-) masuk ke `slot` dari fitur-fitur tersebut, bahkan jika itu bukan slot dari materialnya: carved pumpkin yang equippable di bagian kaki dihitung sebagai leggings (37). Dengan klik kanan, item hanya dipasang jika `swappable` bernilai true.
  * Hati-hati! Plugin CMI dapat membuat aktivator ini tidak berfungsi karena izin cmi.inventoryhat disetel ke true. Jika Anda ingin aktivator ini berfungsi, setel izin tersebut ke false.
  * Addon Fabric dapat melewati aktivator ini.

### PLAYER\_EXPERIENCE\_CHANGE

* Info: Aktivator yang terpicu saat experience pemain berubah secara alami.
  * Artinya aktivator ini tidak terpicu oleh perubahan experience akibat perintah. Kecuali jika perintah tersebut memunculkan experience orb, yang akan membuat experience berubah secara "alami".

### PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" />

* Info: Aktivator yang terpicu jika pemain memupuk blok dengan bone meal.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FILL\_BUCKET

* Info: Aktivator yang terpicu saat pemain mengisi bucket dengan air atau lava.
  * Hati-hati! Saat ExecutableItem mengisi bucket dan berubah menjadi "water\_bucket" atau "lava\_bucket", item tersebut tidak lagi menjadi ExecutableItem, melainkan berubah menjadi item vanilla dan tidak dapat dikembalikan.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_BLOCK <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain mengklik kanan fishing rod ketika bobber fishing rod berada di atas sebuah blok.
  * Aktivator ini tidak terpicu jika bobber tidak berada di atas blok. Jika Anda ingin aktivator terpicu di udara, gunakan aktivator [PLAYER_FISH_NOTHING](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_fish_nothing)
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_ENTITY <CustomTag type="premium" />

* Aktif saat pemain mengklik kanan fishing rod ketika bobber fishing rod menangkap sebuah entity atau NPC Citizens.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_FISH <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain mengklik kanan fishing rod ketika bobber fishing rod menangkap sebuah item di dalam air melalui sistem loot memancing.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

:::tip
Entity yang menjadi target `entityCommands` adalah **item yang tertangkap**. Gunakan perintah entity [CHANGE\_INTO\_ITEM](/tools-for-all-plugins-score/custom-commands/entity-commands#change_into_item) untuk mengubah tangkapan menjadi item vanilla atau ExecutableItem, lihat panduan [Custom fishing loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot).
:::

### PLAYER\_FISH\_NOTHING <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain tidak menangkap apa pun, artinya bobber tidak berada di atas blok, entity, maupun pemain.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_PLAYER <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain mengklik kanan fishing rod ketika bobber fishing rod menangkap pemain lain (biasanya disebut target).
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_FISH\_XIAOMOMI\_FISH <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain berhasil menangkap sesuatu menggunakan plugin CustomFishing (sebelumnya dikenal sebagai Xiaomomi Fish). Aktivator ini membutuhkan [plugin CustomFishing](https://modrinth.com/plugin/customfishing) terpasang di server Anda.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Placeholder yang tersedia:
  * `%result%` - Hasil memancing (misalnya, SUCCESS, FAILURE, dll.)
  * `%fish_hook%` - Nama fish hook yang digunakan
  * `%loot%` - ID loot yang tertangkap
* Contoh:
  * Custom Fishing Rewards – Saat menangkap ikan langka dengan CustomFishing, berikan pemain experience bonus atau hadiah mata uang khusus.
  * Lucky Catch – Saat berhasil memancing dengan rod tertentu, ada peluang untuk menerima item loot kustom tambahan dari plugin CustomFishing.
  * Fishing Skill Progression – Lacak tangkapan yang berhasil dan tingkatkan level skill memancing pemain berdasarkan kelangkaan ikan yang ditangkap.

:::info
Aktivator ini hanya berfungsi jika Anda memasang plugin **CustomFishing**. Aktivator ini terintegrasi dengan FishingResultEvent milik CustomFishing untuk menyediakan mekanik memancing yang lebih baik.
:::

### PLAYER\_HARVEST\_BLOCK

* Info: Aktivator yang terpicu saat pemain memanen sebuah blok
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Contoh:
  * Saat mengklik kanan sweet berry bush untuk memanen, ada peluang 10% semak tersebut menggigit balik, memberikan damage setengah hati tetapi memberi pemain Strength I selama 5 detik sebagai efek "haus darah".
  * Bountiful Touch – Saat memanen tanaman, ada peluang 15% untuk langsung menanamnya kembali dalam kondisi tumbuh penuh, memungkinkan pertanian yang berkelanjutan.
  * Mystic Bloom – Saat memanen bunga, ada peluang 5% bunga tersebut menjatuhkan item enchanted acak yang dipenuhi energi alam.

### PLAYER\_HIT\_ENTITY <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain memukul sebuah entity.
  * Aktivator ini hanya berfungsi jika ada damage yang terlibat, artinya pemain benar-benar memukul entity tersebut. Jika Anda ingin aktivator berfungsi saat mengklik entity, gunakan [PLAYER_CLICK_ON_ENTITY](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_entity)
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_HIT\_PLAYER

* Info: Aktivator yang terpicu saat pemain memukul pemain lain (biasanya disebut target).
  * Aktivator ini hanya berfungsi jika ada damage yang terlibat, artinya pemain benar-benar memukul pemain lain. Jika Anda ingin aktivator berfungsi saat mengklik pemain, gunakan [PLAYER_CLICK_ON_PLAYER](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_player)
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_INPUT <CustomTag type="premium" /> <CustomTag type="version" version="1.21.3" />

* Info: Aktivator yang terpicu saat pemain menekan sebuah tombol. (maju, mundur, kiri, kanan, lompat, sprint, sneak)

### PLAYER\_ITEM\_BREAK <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain merusak ExecutableItem karena durability-nya habis sepenuhnya.

### PLAYER\_JUMP <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain melompat.
  * <CustomTag type="version" version="1.21.2" /> aktivator ini dapat terpicu bahkan jika pemain mencoba melompat di udara.

### PLAYER\_KICK

* Info: Aktivator yang terpicu saat pemain di-kick

### PLAYER\_KILL\_ENTITY <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain membunuh sebuah entity atau NPC Citizens.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)

### PLAYER\_KILL\_PLAYER <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain membunuh pemain lain (biasanya disebut target).
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_LAUNCH\_PROJECTILE

* Info: Aktivator yang terpicu saat pemain menembakkan projectile.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_LEAVE\_THEIR\_LAND

* Info: Aktivator yang terpicu jika Anda meninggalkan land milik Anda atau land tempat Anda dipercaya
  * Plugin yang didukung:
    * Lands

### PLAYER\_LEAVE\_THEIR\_PLOT <CustomTag type="premium" />

* Info: Aktivator yang terpicu jika Anda meninggalkan sebuah plot.
  * Plugin yang didukung:
    * PlotSquared

### PLAYER\_LEFT\_CLICK

* Info: Aktivator yang terpicu saat pemain mengklik kiri item.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Jika typeTarget: ONLY\_BLOCK, fitur-fitur ini akan tersedia.
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : Untuk menulis [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_MEND\_THE\_EI

* Info: Aktivator yang terpicu saat pemain memperbaiki ExecutableItem dengan enchantment mending.

### PLAYER\_OPEN\_INVENTORY

* Info: Aktivator yang terpicu saat pemain membuka inventory tetapi **BUKAN inventory miliknya sendiri**.

:::info
Saat ini tidak mungkin mendeteksi saat pemain membuka inventory **miliknya sendiri** karena hal tersebut hanya terjadi di sisi client.

Event ini hanya terpicu jika seseorang memaksa pemain membuka inventory-nya atau jika pemain membuka inventory kustom, inventory blok, atau inventory merchant.
:::

### PLAYER\_PICKUP\_THE\_EI <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain mengambil ExecutableItem.

### PLAYER\_PORTAL

* Info: Aktivator yang terpicu saat pemain menggunakan portal.

### PLAYER\_RECEIVE\_EFFECT <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain menerima efek potion.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [DetailedEffects](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedeffects)

### PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain dipukul oleh sebuah entity.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain dipukul oleh pemain lain (biasanya disebut target).
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_RECEIVE\_HIT\_GLOBAL <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain terkena pukulan.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_REGAIN\_HEALTH

* Info: Aktivator yang terpicu saat pemain memulihkan health secara alami.

### PLAYER\_RESPAWN <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain respawn.
  * Seperti biasa, semua aktivator ExecutableItem berfungsi saat pemain memilikinya di inventory, jadi jika pemain respawn tanpa item tersebut di inventory, aktivator ini tidak akan terpicu.

### PLAYER\_RIGHT\_CLICK

* Info: Aktivator yang terpicu saat pemain mengklik kanan item.
  * Karena keterbatasan Spigot, aktivator ini hanya akan terpicu jika Anda memegang sebuah item (apa pun) di tangan.
* Fitur Kustom dari aktivator ini:
  * [typeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget) : Untuk menentukan jenis klik (ONLY\_AIR, ONLY\_BLOCK, NO\_TYPE\_TARGET)
  * Jika typeTarget: ONLY\_BLOCK, fitur-fitur ini akan tersedia:
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : Untuk menulis [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [detailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks) : Untuk menentukan jenis blok yang valid

### PLAYER\_RIPTIDE

* Info: Aktivator yang terpicu saat pemain menggunakan riptide.

### PLAYER\_SELECT\_THE\_EI <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain memilih ExecutableItem di hotbar, artinya mulai memegangnya di mainhand.

### PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain menggunting sebuah entity.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat shield pemain dihancurkan oleh pemain lain (biasanya disebut target).
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_SPAWN\_CHANGE

* Info: Aktivator yang terpicu saat spawnpoint pemain diubah.

### PLAYER\_SWAPHAND\_THE\_EI

* Info: Aktivator yang terpicu saat pemain melakukan swaphand pada ExecutableItem. Artinya pintasan untuk menukar mainhand ke offhand dan sebaliknya.

### PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat sebuah entity menargetkan pemain.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_TRAMPLE\_CROP

* Info: Aktivator yang terpicu saat pemain menginjak tanaman.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Block commands
    ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_UNEQUIP\_THE\_EI <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain melepas ExecutableItem.
  * `detailedSlots` dapat membatasinya ke satu slot armor: 36 boots, 37 leggings, 38 chestplate, 39 helmet (slot asal bagian armor).
  * Hati-hati! Plugin CMI dapat membuat aktivator ini tidak berfungsi karena izin cmi.inventoryhat disetel ke true. Jika Anda ingin aktivator ini berfungsi, setel izin tersebut ke false.
  * Addon Fabric dapat melewati aktivator ini.

### PLAYER\_WALK <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain berjalan.
  * Aktivator ini terpicu setiap tick pemain berjalan, sehingga sangat berat bagi performa, gunakan dengan hati-hati. Anda dapat menambahkan fitur use cooldown untuk mengurangi dampaknya.

### PLAYER\_WRITE\_COMMAND <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain memasukkan/mengetik sebuah perintah.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [DetailedCommands](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedcommands)

### PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat projectile yang diluncurkan pemain masuk ke air.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat projectile yang diluncurkan oleh pemain mengenai sebuah blok.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat projectile yang diluncurkan oleh pemain mengenai sebuah entity. \
  Hati-hati, aktivator ini tidak terpicu saat projectile mengenai pemain (untuk itu gunakan PROJECTILE\_HIT\_PLAYER).
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_PLAYER

* Info: Aktivator yang terpicu saat projectile yang diluncurkan oleh pemain mengenai pemain lain (biasanya disebut target).
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### CUSTOM\_TRIGGER

* Info: Aktivator yang dapat dijalankan dengan menjalankan sebuah perintah, atau dapat dijadwalkan.
  * Aktivator ini berlaku untuk semua plugin, karena itu penjelasannya ada di [Custom triggers](/tools-for-all-plugins-score/custom-triggers)

### EI\_CLICK\_ON\_ANOTHER\_INVENTORY\_ITEM 

* Info: Aktivator yang terpicu saat ExecutableItem ditempatkan di atas item lain di inventory.

### EI\_CLICKED\_BY\_ANOTHER\_INVENTORY\_ITEM

* Info: Aktivator yang terpicu saat sebuah item ditempatkan di atas ExecutableItem di inventory.

### EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat ExecutableItem masuk ke inventory pemain.
  * Jika Anda menggunakan plugin lain yang mengelola pemberian item dan sebuah ExecutableItem diberikan tetapi aktivator ini tidak berjalan, hubungi dukungan plugin tersebut dan minta mereka memanggil method ini.
  * Perpindahan di dalam inventory juga dihitung: swap offhand (tombol F), swap tombol angka dan, di server Paper, pick block / pick item (klik tengah). Untuk perpindahan tersebut, EI\_LEAVE\_THE\_PLAYER\_INVENTORY selalu berjalan sebelum aktivator ini.

### EI\_LEAVE\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat item meninggalkan inventory pemain.
  * Membutuhkan ProtocolLib agar aktivator ini berfungsi dengan baik.

### INVENTORY\_CLICK <CustomTag type="premium" />

* Info: Aktivator yang terpicu saat pemain mengklik item di inventory-nya.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)

### LOOP <CustomTag type="premium" />

* Info: Aktivator yang terpicu berulang selama item berada di inventory pemain. Pada dasarnya ini adalah sebuah siklus, aktivator ini menjalankan perintah setiap \<delay> \<seconds/ticks> tergantung pada konfigurasi aktivator ini.
* Saat kondisi sebuah LOOP tidak valid, pesan error default (`You can't activate this item > invalid condition`) tidak dikirim: pemain tidak mengaktifkan apa pun. Pesan kustom (`{theCondition}Msg`) tetap dikirim.
* Untuk bonus saat beberapa bagian armor dikenakan, gunakan [sets](/executableitems/configurations/sets-configuration) alih-alih LOOP.
* activatorFeatures: Biasanya semua aktivator berbagi fitur yang sama, tetapi ada beberapa fitur yang eksklusif untuk aktivator tertentu. Jika demikian, fitur tersebut akan tercantum di sini.
  * [Delay](/executableitems/configurations/activator-configuration/activators-features#s_a_l-delay-and-delaytick)
