---
description: >-
  Daftar perintah blok kustom untuk ExecutableItems dan ExecutableBlocks:
  AROUND, MINEINCUBE, VEIN_BREAKER, SETBLOCK, dan lainnya, beserta pengaturan
  dan contohnya.
source_hash: b9677d85e164ca24
translated_at: '2026-11-13T17:52:48.099Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Perintah Blok

:::tip
Kompatibilitas "multi-world" untuk perintah vanilla.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Contoh, Anda ingin memunculkan Zombie di dunia SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Contoh dengan placeholder:

`execute in <<%block_world%>> run summon zombie 100 50 100`
:::

:::info
`In AROUND and MOB_AROUND commands, the true/false argument are not to be included in the command as they serve no purpose.`
:::

:::info
Aktifkan **HIDE USAGE** saat menggunakan angka besar pada **MINEINCUBE**, karena dapat mengurangi lag yang biasanya sering terjadi saat Anda menggunakan `MINEINCUBE 8`, misalnya
:::

## Perintah kustom

_Diurutkan berdasarkan abjad_

### &lt;+&gt; (Around Command Connector)

* Info: Memungkinkan Anda menambahkan lebih banyak perintah dalam satu baris perintah. Hanya akan berfungsi dengan baik bersama `AROUND` dan `MOB_AROUND`.
* Contoh: 

```text
- AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SENDMESSAGE &You got smited!
```

```text
- MOB_AROUND 7 STUN_ENABLE <+> DELAY 5 <+> STUN_DISABLE
```

### AROUND

* Info: Menargetkan pemain dalam radius tertentu dan membuat mereka menjalankan perintah
* Pengaturan perintah
    * `{distance}`: Seberapa jauh radius yang akan digunakan perintah untuk memilih pemain
    * `{affectThePlayerThatActivatesTheActivator}`: true/false. Jika true, perintah tidak akan memengaruhi pelaku (caster).
      * Contoh situasi: Saat Anda menjalankan aktivator milik sebuah ExecutableItem dan aktivator tersebut mendukung perintah blok,
      perintah akan mengabaikan orang yang mengaktifkan aktivator tersebut. Namun, jika opsi ini false, Anda juga akan terpengaruh.
    * `{throughBlocks}`: menentukan apakah mob yang berada di balik blok ikut terpengaruh atau tidak
    * `{limit}`: Jumlah target yang dapat terpengaruh
    * `{sort}`: Berguna untuk opsi limit.
    * NEAREST : Memilih entitas yang paling dekat dengan titik asal.
    * RANDOM : Memilih entitas mana pun secara acak dalam jangkauan perintah.
    * `{regionCheck}`: true/false. Jika true, perintah AROUND akan memeriksa apakah target berada di wilderness atau di dalam claim milik caster (dalam konteks plugin GriefPrevention) (Akan segera diperbarui agar dapat diperiksa dengan plugin claim lainnya)
    * `{command}`: Perintah yang akan dijalankan oleh pemain yang ditargetkan
* Contoh:

```
- AROUND 20 execute at %around_target% run summon lightning_bolt
```

* Perintah ini memunculkan petir pada pemain dalam radius 20 blok di sekitar blok yang diklik.

:::info
**Jumlah target:** `%around_target_count%` memberikan jumlah pemain yang dipilih oleh perintah. Nilainya sama untuk setiap target, dan menghitung target yang dipertahankan setelah `distance`, `affectThePlayerThatActivatesTheActivator`, `throughBlocks`, `regionCheck` dan `limit`. `CONDITIONS(...)` yang diperiksa pada setiap target tidak diperhitungkan. Perintah ini menerima singkatan `+N` / `-N`: `%around_target_count%-1`.

Contoh: `AROUND 10 SEND_MESSAGE &e%around_target_count% players are around the block`
:::

#### Anda dapat menambahkan kondisi pada perintah AROUND

* Kondisi tersebut berbentuk AROUND \<distance> CONDITIONS(\<conditions>) \<command>
* Kondisi berfungsi dengan placeholder, tetapi harus ditulis %::\_::% dan bukan %\_%
  * Misalnya %::player\_health::%
* Untuk menambahkan LEBIH dari 1 kondisi, gunakan "&&" di antara kondisi-kondisi tersebut
* Contoh:

```
- AROUND 10 CONDITIONS(%::player_health::%>10&&%::player_name::%=2Ssomar) SENDMESSAGE &eclick
```

:::info
Perlu diingat bahwa bagian CONDITIONS() mem-parse placeholder di dalamnya dengan pemain yang dipilih oleh perintah AROUND. Jadi, yang sebenarnya terjadi pada placeholder di atas adalah perintah memeriksa apakah health target lebih besar dari 10 dan apakah pemain yang dipilih oleh perintah AROUND bernama "2Ssomar"
:::

### APPLY\_BONEMEAL

* Info: Menerapkan efek yang sama seperti saat pemain menggunakan bone meal pada sebuah blok (tanaman)
* Tanpa pengaturan perintah
* Contoh:

```yaml
- APPLY_BONEMEAL
```

### BREAK

* Info: Menghancurkan blok target
* Tanpa pengaturan perintah
* Contoh:

```
 - BREAK
```

### CONTENT\_ADD

* Info: Menambahkan item ke dalam sebuah container
* Pengaturan perintah
  * \{Item\}: Item yang akan ditambahkan
  * \[Amount]: Jumlah yang akan ditambahkan (default 1)
* Contoh:

```
- CONTENT_ADD STONE 1
- CONTENT_ADD EI:Myitem 1
- CONTENT_ADD EI:test{Usage:1,Variables:{var1:"My text",var2:2}} 1
```

### CONTENT\_CLEAR

* Info: Mengosongkan sebuah container
* Tanpa pengaturan perintah
* Contoh:

```
- CONTENT_CLEAR
```

### CONTENT\_REMOVE

* Info: Menghapus item dari sebuah container
* Pengaturan perintah
  * \{Item\}: Item yang akan dihapus
  * \[Amount]: Jumlah yang akan dihapus (default 1)
* Contoh:

```
- CONTENT_REMOVE STONE 1
```

:::info
Perintah ini tidak akan menghapus ExecutableItems meskipun materialnya cocok. Satu-satunya cara adalah dengan menentukannya menggunakan EXECUTABLEITEMS:`{id}`
:::

### CONSOLEMESSAGE

* Info: Mengirim pesan ke konsol
* Pengaturan perintah
  * `{text}`: Teks yang akan dikirim ke konsol
* Contoh:

```yaml
- CONSOLEMESSAGE This is a debug message
```

### CHANGE\_BLOCK\_TYPE

* Info: Mengubah tipe blok dari blok yang dipilih oleh aktivator
* Pengaturan perintah
* Contoh:

```
- CHANGE_BLOCK_TYPE STONE
```

:::info
Berfungsi dengan ItemsAdder
:::

```
- CHANGE_BLOCK_TYPE ITEMSADDER:MyIA
```

### CROPS\_GROWTH\_BOOST

* Info: Mempercepat pertumbuhan tanaman di sekitar blok
* Perintah: CROPS\_GROWTH\_BOOST \{radius\} \{delay between two growths in ticks\} \{total duration in ticks\} \{chance 0-100\}
* Contoh:

```yaml
- CROPS_GROWTH_BOOST 5 10 100 50
```

### DROPEXECUTABLEITEM

* Info: Menjatuhkan sebuah Executable Item di lokasi blok
* Pengaturan perintah
  * `{id}`: ID item dari ExecutableItem
  * `{quantity}`: Jumlah executable item yang akan dijatuhkan
  * `[owner]`: (Opsional) Pemilik item yang dijatuhkan (IGN pemain atau UUID)
  * `[itemdata]`: (Opsional) Pengaturan data item yang berisi:
    * `Usage`: Mengatur nilai usage
    * `Variables`: Mengatur variabel kustom (format: `{key:value}`)
    * `Durability`: Mengatur nilai durability
* Contoh:

```
- DROPEXECUTABLEITEM epicsnowball 1
- DROPEXECUTABLEITEM id:epicsnowball amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Info: Menjatuhkan sebuah Executable Block di lokasi blok
* Pengaturan perintah
  * `{id}`: ID item dari ExecutableBlock
  * `{quantity}`: Jumlah executable block yang akan dijatuhkan
* Contoh:

```
- DROPEXECUTABLEBLOCK House 1
```

### DRAIN IN CUBE

* Info: menguras sumber lava dan/atau air dalam sebuah kubus dengan radius "r"
* Pengaturan perintah
  * `{radius}`: Radius dalam blok (batasnya 9), Anda dapat melewati batas tersebut dengan menambahkan * sebelum radius (risiko ditanggung sendiri).
  * `{drainType}`: LAVA atau WATER (tidak perlu diisi jika Anda ingin keduanya)
  * `[waterlogged]`: (Opsional) (default = false) Jika true dan air dikuras (`WATER` atau tanpa `{drainType}`), perintah ini juga mengeringkan blok waterlogged di dalam kubus (slab, tangga, pagar...) dan menghapus blok `KELP`, `KELP_PLANT`, `SEAGRASS`, `TALL_SEAGRASS` dan `BUBBLE_COLUMN` tanpa menjatuhkan apa pun, seperti yang dilakukan sponge. Hanya untuk server 1.13+.
* Contoh:

```
DRAININCUBE 4 WATER
DRAININCUBE *12 WATER
DRAININCUBE 4 WATER waterlogged:true
```

:::info
Tanpa `waterlogged:true`, blok waterlogged tetap menyimpan airnya dan air tersebut dapat mengalir kembali ke area yang telah dikuras.
:::

### DROPITEM

* Info: Menjatuhkan sebuah item di lokasi blok
* Pengaturan perintah
  * `{material}`: Tipe item.
    
<LinkPreview
  url="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"
  title="Material"
/>
  
* `{quantity}`: Jumlah item yang akan dijatuhkan
* Contoh:

```
- DROPITEM BEDROCK 1
```

### EXPLODE

* Informasi: Menghancurkan blok yang Anda targetkan dan memunculkan TNT yang telah menyala (primed) di lokasi tersebut
* Tanpa pengaturan perintah
* Contoh:

```
- EXPLODE
```

### FARMINCUBE

* Informasi: Menghancurkan semua tanaman dalam radius tertentu
* Pengaturan perintah
  * `{radius}`: Radius area tanaman yang ingin Anda hancurkan. **(BATASNYA 9)**
  * `{drop}`: (default = true) Apakah blok menjatuhkan loot atau tidak
  * `{onlyMaxAge}`: (default = true) Hanya akan menghancurkan tanaman yang telah mencapai umur maksimal
  * `{replant}`: (default = false) Apakah tanaman akan ditanam kembali atau tidak
  * `{event}`: (default = false, true dengan `runActivatorOnBlocks:true`) Apakah tanaman akan menghasilkan event penghancuran blok atau tidak.
  * `[runActivatorOnBlocks]`: (Opsional) (default = false) Hanya untuk ExecutableItems. Jika true, tanaman yang dihancurkan oleh perintah ini juga menjalankan aktivator yang meluncurkannya, lihat [runActivatorOnBlocks](#runactivatoronblocks). Argumen ini dapat ditulis di mana saja dalam perintah, dan akan mengaktifkan `{event}` kecuali `{event}` ditulis false.
* Contoh:

```
- FARMINCUBE 9 true true true false
- FARMINCUBE 4 true true true runActivatorOnBlocks:true
```

### FERTILIZEINCUBE

* Info: Memupuk tanaman di sekitar sebanyak 1 tingkat umur, seperti menggunakan bone meal tetapi tanaman tumbuh 100% setiap saat.
* Pengaturan perintah
  * `{radius}`: Radius area tanaman yang ingin Anda pupuk **(BATASNYA 9)**
* Contoh:

```
- FERTILIZEINCUBE 9
```

### INLINE\_MINEINCUBE

* Info: Menghancurkan blok dalam sebuah radius berbentuk persegi panjang. Setiap blok yang dihancurkan oleh perintah ini dihitung sebagai event penghancuran blok oleh pemain.
* Pengaturan perintah
  * `{radius}`: Seberapa besar radius kubus
  * `{depth}`: Seberapa dalam persegi panjang tersebut.
  * `{drop}`: Apakah blok menjatuhkan loot atau tidak
  * `{createBBEvent}`: apakah plugin akan menghasilkan blockBreakEvent untuk setiap blok yang dihancurkan oleh MINEINCUBE (default true)
  * `[direction]`: (Opsional) (default = arah pemain) Jika Anda ingin memaksa suatu arah. 
    * Opsi:
      * `north/n/-z` : Utara
      * `south/s/+z` : Selatan
      * `east/e/+x` : Timur
      * `west/w/-x` : Barat
      * `up` : Atas
      * `down` : Bawah
      * `auto` : Menggunakan logika %player_direction_xz% dari Player Expansion milik PlaceholderAPI untuk menentukan arah `N/W/S/E`. Untuk logika Atas/Bawah, arah `UP` jika pitch `<=` -45; arah `DOWN` jika pitch `>=` 45. 
  * `[smelt]`: (Opsional) (default = false) Menggunakan logika perintah SMELT. Jika blok dapat dilebur, perintah menjatuhkan versi hasil lebur. Jika tidak, blok yang dihancurkan akan dijatuhkan seperti biasa.
* Contoh:

```
- INLINE_MINEINCUBE 1 4 true true
- INLINE_MINEINCUIBE radius:2 depth:4 drop:true createBBEvent:true direction:auto smelt:true
```

:::info
Mendukung %player\_direction\_xz% dari PlaceholderAPI - Player expansion\
Contoh: INLINE\_MINEINCUBE 1 1 true true %player\_direction\_xz%
:::

### LAUNCH

* Info: Membuat blok target menembakkan proyektil
* Pengaturan perintah
  * `{projectile}`: tipe proyektil
  * `{speed}`: kecepatan proyektil
  * `{despawnDelay}`: delay despawn dalam detik (Default 10)
* Contoh:

```
- LAUNCH ARROW 2 5
```

:::info
Blok harus bersifat directional agar dapat MELUNCURKAN (LAUNCH) proyektil dengan benar.

Contoh: AmethystCluster, Barrel, Bed, Beehive, Bell, BigDripleaf, CalibratedSculkSensor, Campfire, Chest, ChiseledBookshelf, Cocoa, CommandBlock, Comparator, CoralWallFan, DecoratedPot, Dispenser, Door, Dripleaf, EnderChest, EndPortalFrame, Furnace, Gate, Grindstone, Hopper, Ladder, Lectern, LightningRod, Observer, PinkPetals, Piston, PistonHead, RedstoneWallTorch, Repeater, SmallDripleaf, Stairs, Switch, TechnicalPiston, TrapDoor, TripwireHook, Vault, WallHangingSign, WallSign, WallSkull
:::

### MINEINCUBE

* Info: Menghancurkan blok dalam sebuah radius berbentuk kuboid. Setiap blok yang dihancurkan oleh perintah ini dihitung sebagai event penghancuran blok oleh pemain.
* Pengaturan perintah
  * `{radius}`: Radius kubus blok yang ingin Anda hancurkan **(BATASNYA 9)**
  * `{droploot}`: Apakah blok menjatuhkan loot atau tidak
  * `{createEvent}`: apakah plugin akan menghasilkan blockBreakEvent untuk setiap blok yang dihancurkan oleh MINEINCUBE (default true)
  * `{offsetBreak}`: Apakah area blok mulai hancur dari blok yang dihancurkan, atau dari "pusat" agar area benar-benar sesuai dengan "radius" yang dipilih. (default false)
  * `[smelt]`: (Opsional) (default = false) Menggunakan logika perintah SMELT. Jika blok dapat dilebur, perintah menjatuhkan versi hasil lebur. Jika tidak, blok yang dihancurkan akan dijatuhkan seperti biasa.
  * `[runActivatorOnBlocks]`: (Opsional) (default = false) Hanya untuk ExecutableItems. Jika true, blok yang dihancurkan oleh perintah ini juga menjalankan aktivator yang meluncurkannya, lihat [runActivatorOnBlocks](#runactivatoronblocks). Biarkan `{createEvent}` tetap true.
* Contoh:

```
- MINEINCUBE 4 true false
- MINEINCUBE radius:3 droploot:true createEvent:true offsetBreak:false smelt:false
- MINEINCUBE radius:1 droploot:true createEvent:true runActivatorOnBlocks:true
```

### MINEINSPHERE

* Info: Menghancurkan blok dalam sebuah radius berbentuk bola. Setiap blok yang dihancurkan oleh perintah ini dihitung sebagai event penghancuran blok oleh pemain.
* Pengaturan perintah
  * `{radius}`: Radius bola
  * `{drop}`: Apakah blok menjatuhkan loot atau tidak
  * `{create blockBreakEvent}`: apakah plugin akan menghasilkan blockBreakEvent untuk setiap blok yang dihancurkan oleh perintah
  * `[smelt]`: (Opsional) (default = false) Menggunakan logika perintah SMELT. Jika blok dapat dilebur, perintah menjatuhkan versi hasil lebur. Jika tidak, blok yang dihancurkan akan dijatuhkan seperti biasa.
* Contoh:

```
- MINEINSPHERE 4 true false
```

### MOB\_AROUND

* Info: Menargetkan entitas dalam radius tertentu dan membuat mereka menjalankan perintah
* Pengaturan perintah
  * `{distance}`: Seberapa jauh radius yang akan digunakan perintah untuk memilih entitas
  * `{displayMsgIfNoEntity}`: (true atau false) Untuk memberi tahu pengguna item jika perintah gagal menargetkan mob mana pun.
    * **Atur ke false untuk menyembunyikan pesan**
  * `{throughBlocks}`: menentukan apakah mob yang berada di balik blok ikut terpengaruh atau tidak
  * `{safeDistance}`: Jika jarak antara target dan peluncur lebih kecil dari atau sama dengan nilai safeDistance, maka target tidak akan terpengaruh.
  * `{offsetYaw}`: Arah yaw yang Anda inginkan untuk offset (Independen dari nilai yaw titik asal)
  * `{offsetPitch}`: Arah pitch yang Anda inginkan untuk offset (Independen dari nilai yaw titik asal)
  * `{offsetDistance}`: Setelah menghitung offsetYaw dan offsetPitch, dengan menggunakan nilai ini, posisi/titik pusat perintah AROUND akan digeser dari lokasi xyz titik asal.
  * `{limit}`: Jumlah target yang dapat terpengaruh
  * `{sort}`: Berguna untuk opsi limit.
    * NEAREST : Memilih entitas yang paling dekat dengan titik asal.
    * RANDOM : Memilih entitas mana pun secara acak dalam jangkauan perintah.
  * `{regionCheck}`: true/false. Jika true, perintah AROUND akan memeriksa apakah target berada di wilderness atau di dalam claim milik caster (dalam konteks plugin GriefPrevention) (Akan segera diperbarui agar dapat diperiksa dengan plugin claim lainnya)
  * `{nonliving}`: true/false. Jika true, perintah akan menargetkan entitas lain seperti Arrow dan Armor Stand. Bug apa pun yang terjadi saat menjalankan perintah entitas dengan argumen ini aktif kemungkinan besar akan diabaikan karena scope creep.
  * Anda dapat membuat BLACKLIST atau WHITELIST entitas dengan menambahkan salah satu dari berikut di bagian mana pun dalam perintah:
    * BLACKLIST(ZOMBIE,ARMOR\_STAND)
    * WHITELIST(CHICKEN)
* Contoh:

```
- MOB_AROUND 3 false BURN 10
- MOB_AROUND 5 execute at %around_target_uuid% run summon lightning_bolt
- MOB_AROUND 5 BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
- MOB_AROUND 5 effect give %around_target_uuid% poison 10 10
```

Untuk menggunakan NBT entitas pada kolom WHITELIST/BLACKLIST, Anda perlu memasang plugin NBT API

<LinkPreview
  url="https://www.spigotmc.org/resources/nbt-api.7939/"
  title="NBTAPI Plugin"
/>

Perintah ini mendukung NBT Tags sehingga Anda dapat menambahkan, misalnya, sesuatu seperti: `ZOMBIE{IsBaby:1}`

<LinkPreview
  url="https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities"
  title="Entities tags"
/>

```
- MOB_AROUND 7 BLACKLIST(ZOMBIE{CustomName:"Test Test"},ZOMBIE{CustomName:"Miyamoto"}) false BURN 3
- MOB_AROUND 5 WHITELIST(ZOMBIE{IsBaby:1}) DAMAGE 20
- MOB_AROUND 9 WHITELIST(WOLF{Owner:"%player%"}) HEAL 5
- MOB_AROUND 9 WHITELIST(WOLF{Owner:%player_uuid%}) HEAL 5
```

### MOVE

* Info: Memindahkan semua entitas di atas blok ke arah blok tersebut (agar lebih mudah dipahami, ini seperti cara kerja conveyor)
* Tanpa pengaturan perintah
* Contoh:

```
- MOVE
```

:::info
**Perintah ini hanya berfungsi pada blok directional.**
:::

### MOB\_NEAREST

* Info: Menargetkan mob terdekat dari pemain/target.
* Pengaturan perintah
    * `{max accepted distance}`:  Jarak maksimum yang diterima agar "entitas" dapat ditargetkan.
    * `{command(s)}`: Perintah yang akan dijalankan
* Contoh:

Memberi damage pada pemain terdekat

```
- MOB_NEAREST 10 DAMAGE 5
```

### NEAREST

* Info: Menargetkan pemain terdekat dari pemain/target.
* Pengaturan perintah
    * `{max accepted distance}`: Jarak maksimum yang diterima agar "target" dapat ditargetkan.
    * `{command}`: Perintah yang akan dijalankan
* Contoh:

Memberi damage pada pemain terdekat

```
- NEAREST 8 DAMAGE 5
```

### OPENDOOR

* Membuka atau menutup blok yang dapat dibuka.
* Tanpa pengaturan perintah
* Contoh:

```
- OPENDOOR
```

### OPMESSAGE

* Info: Mengirim pesan ke pemain OP yang sedang online dan ke konsol
* Pengaturan perintah
  * `{text}`: Teks yang akan dikirim
* Contoh:

```
- OPMESSAGE This is my debug message
```

### PARTICLE

* Info: Memunculkan partikel di lokasi blok
* Pengaturan perintah
  * `{type}`: Tipe partikel.

<LinkPreview
  url="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html"
  title="Particles"
/>

* `{quantity}`: Jumlah partikel yang akan muncul
* `{offset}`: Radius area tempat partikel dapat muncul di lokasi blok
* `{speed}`: Seberapa cepat atau seberapa besar partikel tersebut
* Contoh:

```
- PARTICLE COMPOSTER 10 0.1 0.5
```

### PLACELIQUID
* Info: Menempatkan cairan di sebuah lokasi. Jika ada cauldron di lokasi tersebut, cauldron akan diisi. Jika ada blok yang dapat di-waterlog, blok tersebut akan di-waterlog. Jika tidak, tidak terjadi apa-apa
* Pengaturan perintah
  * `{type}`: Tipe cairan (Default: WATER). Pilihan: WATER/LAVA
* Contoh:

```
- PLACELIQUID type:WATER
- PLACELIQUID type:LAVA
```

### PLANT\_IN\_SQUARE

* Info: Menanam dalam area persegi dengan blok yang dipilih sebagai acuan.
* Pengaturan perintah
  * `{radius}`: Radius persegi
  * `{takeFromInv}`: Default true, perintah mengambil benih dari inventaris pemain, jika tidak maka benih akan dihasilkan
  * `{acceptEI}`: Default false, menerima EI sebagai benih
  * `{cropType}`: secara default semua benih diterima (perintah mengambil benih sesuai urutannya di inventaris)
    * FARMLAND - WHEAT, CARROTS, BEETROOTS, POTATOES, SWEET\_BERRY\_BUSH, MELON\_STEM, PUMPKIN\_STEM, TORCHFLOWER\_CROP
    * SOUL SAND - NETHER\_WART
    * JUNGLE WOOD/LOG - COCOA
  * `{isCube}`: Mengubah area penanaman dari persegi menjadi kubus. Berguna untuk penanaman cocoa dalam area
* Contoh:

```
- PLANT_IN_SQUARE 3
```

### REMOVEBLOCK

* Info: Menghapus blok, tanpa drop, hanya dihapus
* Tanpa pengaturan perintah
* Contoh:

```
- REMOVEBLOCK
```

### SELL\_CONTENT

* Info: Menjual seluruh isi sebuah chest / furnace / semua blok yang memiliki inventaris.
* Pengaturan perintah
  * `{price_boost}`: Pengali float untuk item yang dijual. Misalnya, nilainya 2 sehingga item yang dijual akan memberi Anda dua kali lipat harga jual.
  * `{deleteUnsellable}`: Nilai boolean untuk menentukan apakah item yang tidak dapat dijual harus dihapus
* Contoh:

```
- SELL_CONTENT priceBoost:1.0 deleteUnsellable:false
```

:::info
Memerlukan ShopGUIPlus (prioritas) & Vault & harga CMI
:::

### SETBLOCK

* Info: Mengganti blok target dengan blok lain
* Pengaturan perintah
  * `{material}`: Material yang akan diatur
* Contoh:

```
- SETBLOCK STONE
```

### SETTEMPBLOCK

* Info: Mengganti blok target dengan blok sementara.
* Pengaturan perintah
  * `{material}`: Material yang akan diatur
  * `{time}`: Waktu dalam tick (20 tick = 1 detik)
* Contoh:

```
- SETTEMPBLOCK STONE 100
```

:::warning
Perintah ini tidak mengganti blok yang memiliki data tambahan (inventaris, rotasi, dll.)
:::

### SET\_TEMP\_BLOCK\_POS

* Info: Mengganti blok yang ditargetkan dengan blok sementara
* Perintah: SET\_TEMP\_BLOCK\_POS x:\{x\} y:\{y\} z:\{z\} material:\{material\} time:\{\} bypassProtection:\{boolean\} whitelistCurrentBlock:\{list of materials\}
* Contoh:

```
- SET_TEMP_BLOCK_POS x:0.0 y:0.0 z:0.0 material:STONE time:10 bypassProtection:true whitelistCurrentBlock:SAND,DIRT
```

:::warning
Perintah ini tidak mengganti blok yang memiliki data tambahan (inventaris, rotasi, dll.)
:::

### SETBLOCKPOS

* Info: Melakukan setblock pada posisi tertentu
* Pengaturan perintah
  * `{x}`: Posisi X blok
  * `{y}`: Posisi Y blok
  * `{z}`: Posisi Z blok
  * `{material}`: Tipe blok
  * `{bypassWG}`: Apakah WorldGuard akan mengganggu penempatan blok atau tidak
* Contoh:

```
- SETBLOCKPOS %block_x_int% %block_y_int% %block_z_int% STONE true
```

### SETEXECUTABLEBLOCK

* Info: Perintah setblock, tetapi untuk Executable Block
* Pengaturan perintah
  * `{id}`: ID dari Executable Block
  * `{x}`: Koordinat X
  * `{y}`: Koordinat Y
  * `{z}`: Koordinat Z
  * `{world}`: Dunia tempat Executable Block akan ditempatkan
  * `{replace}`: Apakah Anda ingin mengganti blok yang sudah ada di lokasi tersebut atau tidak
  * `{bypassProtection}`: (Default false) Apakah Anda ingin mengganti blok meskipun ada proteksi terrain dari sebuah plugin di sana. 
  * `[ownerUUID]`: (Opsional) (default = tanpa pemilik) UUID pemain yang akan menjadi pemilik EB
* Contoh:

```
- SETEXECUTABLEBLOCK BLOCKS_001_STONE %block_x_int% %block_y_int% %block_z_int% %block_world% true
```

### SILK\_SPAWNER

* Info: Mengambil spawner yang terlibat dalam event
* Tanpa pengaturan perintah
* Contoh:

```
- SILK_SPAWNER
```

:::info
Perintah SILK\_SPAWNER hanya kompatibel dengan plugin berikut:

* RoseStacker
* WildStacker

Dan tentu saja spawner vanilla.
:::

### SMELT

* Info: Melebur blok target dan menjatuhkan item hasil lebur, misalnya iron\_ore -> iron\_ingot, mendukung fortune, jika tidak dapat dilebur maka tidak akan terjadi apa-apa. Loot blok tidak akan berubah.
* Pengaturan perintah
  * `[generateEvent]`: (Opsional) (default = true) Apakah perintah menghasilkan event penghancuran blok atau tidak
* Contoh:

```
- SMELT 
- SMELT false
```

### STRIKELIGHTNING

* Info: Menyambarkan petir tanpa damage di blok yang menjalankan perintah
* Tanpa pengaturan perintah
* Contoh:

```
- STRIKELIGHTNING
```

### VEIN\_BREAKER

* Info: Menghancurkan blok dalam bentuk vein hanya dengan satu penghancuran blok
* Pengaturan perintah
  * `{maxVeinSize}`: (default = 10) Jumlah maksimum blok yang dapat dihancurkan oleh perintah
  * `[createBBEvent]`: (Opsional) (default = true) Apakah perintah menghasilkan event penghancuran blok atau tidak
  * `[smelt]`: (Opsional) (default = false) Menggunakan logika perintah SMELT. Jika blok dapat dilebur, perintah menjatuhkan versi hasil lebur. Jika tidak, blok yang dihancurkan akan dijatuhkan seperti biasa.
  * `[runActivatorOnBlocks]`: (Opsional) (default = false) Hanya untuk ExecutableItems. Jika true, blok-blok dalam vein juga menjalankan aktivator yang meluncurkan perintah, lihat [runActivatorOnBlocks](#runactivatoronblocks). Biarkan `createBBEvent` tetap true.
* Contoh:

```
- VEIN_BREAKER 20
- VEIN_BREAKER maxVeinSize:10 createBBEvent:true smelt:false runActivatorOnBlocks:false
- VEIN_BREAKER maxVeinSize:16 runActivatorOnBlocks:true
```

:::info
`triggerEvent` bukan pengaturan dari VEIN\_BREAKER. Template lama pada editor in-game menuliskan `VEIN_BREAKER maxVeinSize:10 triggerEvent:true`: bagian `triggerEvent:true` tidak berpengaruh, Anda dapat menghapusnya. Untuk memilih apakah perintah menghasilkan event penghancuran blok, gunakan `createBBEvent`.
:::

#### runActivatorOnBlocks

`runActivatorOnBlocks` adalah pengaturan dari VEIN\_BREAKER, [MINEINCUBE](#mineincube) dan [FARMINCUBE](#farmincube). Pengaturan ini hanya dibaca oleh ExecutableItems.

* Tanpanya (default `false`), blok yang dihancurkan oleh perintah tidak menjalankan aktivator yang berisi perintah tersebut: inilah yang mencegah terjadinya loop penghancuran blok. Aktivator lain dari item Anda (yang tidak memiliki perintah penghancuran) tetap berjalan untuk blok-blok ini.
* Dengan `runActivatorOnBlocks:true`, setiap blok yang dihancurkan oleh perintah juga menjalankan aktivator yang meluncurkannya, seolah-olah pemain yang menghancurkannya: kondisi, `desactiveDrops` (tanpa drop vanilla), perintah lainnya (misalnya `DROPITEM`), `usageModification` dan modifikasi variabelnya berlaku pada setiap blok. `cancelEvent: true` juga berlaku: blok-blok tersebut kemudian tidak dihancurkan.
* Perintah penghancuran tidak dijalankan lagi untuk blok-blok ini, sehingga tidak ada loop.
* Cooldown, penggunaan per hari, dan fitur yang diperlukan (`requiredItems`, `requiredExecutableItems`, `requiredMoney`...) tidak diperiksa untuk blok-blok ini: semuanya diperiksa dan dikenakan satu kali, untuk blok yang menjalankan aktivator. Jika tidak, sebuah cooldown akan menghentikan vein setelah blok pertama.
* Aktivator menerima blok-blok ini melalui event penghancuran blok masing-masing: biarkan `createBBEvent` (VEIN\_BREAKER) atau `{createEvent}` (MINEINCUBE) tetap `true`, yang merupakan default-nya. FARMINCUBE menghasilkan event-nya sendiri dengan `runActivatorOnBlocks:true`, kecuali argumen `{event}` miliknya bernilai `false`.
* Event ini merupakan penghancuran blok, sehingga hanya berfungsi jika perintah berada di dalam aktivator PLAYER_BLOCK_BREAK.

Contoh: setiap blok dalam vein menjatuhkan 1 diamond sebagai pengganti drop vanilla-nya, dan mengurangi 1 usage.

```yaml
activators:
  activator0:
    option: PLAYER_BLOCK_BREAK
    desactiveDrops: true
    usageModification: -1
    blockCommands:
    - VEIN_BREAKER maxVeinSize:16 runActivatorOnBlocks:true
    - DROPITEM DIAMOND 1
```
