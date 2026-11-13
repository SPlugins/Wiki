---
description: >-
  Daftar fitur item di ExecutableItems: aktivator, material, nama, lore,
  durability, atribut, NBT, Hiders, variabel, dan pengaturan lain untuk item
  kustom.
source_hash: a5cf341732f09f83
translated_at: '2026-11-13T17:50:00.126Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Fitur Item

Daftar fitur item. Ini adalah hal pertama yang perlu Anda atur pada item Anda.

Fitur premium ditandai dengan tag:  <CustomTag type="premium" />

### Aktivator

* Fitur yang sangat penting, yang memungkinkan Anda menambahkan kemampuan pada item Anda
* Wiki khusus untuk fitur ini : [Daftar aktivator EI](../activator-configuration/list-of-the-activators.md) dan [Fitur aktivator EI](/executableitems/configurations/activator-configuration/activators-features.md)


### Material dari item

* Info: Material dari item Minecraft milik ExecutableItem
* Contoh: Jika saya ingin ExecutableItem memiliki item dasar DIAMOND, maka konfigurasinya seperti ini

```yaml
material: DIAMOND
```

* Anda dapat melihat informasi daftar material pada tautan ini: [Daftar material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
* Jika Anda ingin mengatur kepala kustom sebagai material item, lihat tautan ini [Pengaturan kepala](/executableitems/configurations/item-configuration/item-features#head-settings).

### Nama atau DisplayName dari item

* Info: Nama tampilan dari item. Ini adalah nama yang terlihat.
* Contoh: Jika saya ingin item saya memiliki nama tampilan berupa judul berwarna merah "Epic Sword", maka konfigurasinya seperti ini

```yaml
name: '&cEpic Sword'
```

* Jika Anda ingin menggunakan warna HEX pada nama tampilan, Anda dapat melakukannya seperti ini:
  * Kunjungi situs yang membantu Anda memilih warna sesuai keinginan untuk mendapatkan kode warna hex. Kami merekomendasikan [https://htmlcolorcodes.com/](https://htmlcolorcodes.com/)
  * Lalu pilih warna yang Anda inginkan dan catat / salin kode hex-nya. [Referensi](https://imgur.com/a/tNWtA0a)
  * Dengan kode hex tersebut, Anda perlu menambahkan "#" di awal, dan itu harus diletakkan sebelum teks yang ingin Anda warnai. #\<HEX\_COLOR\_CODE>\<What you want to color>
  * Pada akhirnya Anda akan mendapatkan sesuatu seperti **`#DB6725&lPractice`** dan akan tampil dengan warna yang Anda pilih [di dalam game](https://imgur.com/a/7umxduF).

### Lore atau deskripsi dari item

* Info: Lore atau deskripsi dari item
* Contoh:

```yaml
lore:
- '&7Insta-Boom Bomb'
- ''
- '&f&lABILITIES:'
- '&f&l - &a&lInsta-Boom &f&l(&3&lRIGHT-CLICK&f&l)'
- '&fRight-Click on a block to use. Can only'
- '&fharvest blocks mined using your bare hands.'
- '&fBlows up a 5x5x5 area from where you used'
- '&fthe bomb. Will mostly blow up the type of block'
- '&fthat you clicked and sometimes the blocks around it.'
```

* Anda dapat menggunakan placeholder di dalam lore. Perlu diingat, jika Anda menggunakan placeholder dari luar plugin lalu menambahkan konten baru ke lore seperti enchant kustom atau teks kustom, maka ketika salah satu placeholder diperbarui, semua yang ditambahkan dari luar plugin Ssomar akan terhapus. Untuk menghindarinya, lore tidak boleh diperbarui (refresh), tetapi itu berarti placeholder tidak akan ikut diperbarui. Anda harus memilih salah satu. Kesimpulannya: TAMBAHAN DI LORE berarti TANPA REFRESH berarti TANPA placeholder EI kustom di lore.

:::info
Untuk menyisakan baris kosong di antara baris lore, Anda dapat menambahkan '' di file config. Jika Anda mengedit lore di dalam Minecraft menggunakan GUI kustom, Anda harus menggunakan '\&f'.
:::

:::info
Pada ExecutableItems versi gratis terdapat baris "Made with ExecutableItems": baris ini tidak dapat dihapus, dan merupakan imbalan dari pembaruan yang menaikkan jumlah item dari 25 menjadi 500.
:::

### Efek bercahaya (glowing enchanted)

* Info: Nilai boolean yang menentukan apakah executable item diberi tampilan bercahaya/enchanted.
* Contoh: 

```yaml
glow: true
```

### Menonaktifkan glowing enchant <CustomTag type="version" version="1.20.5" />

* Info: Nilai boolean yang memaksa item untuk tidak memiliki efek bercahaya meskipun item tersebut di-enchant. 
* Contoh: 

```yaml
disableEnchantGlow : true
```

:::info
TIPS: Anda juga dapat menghilangkan efek bercahaya dari beberapa item vanilla, misalnya nether star.
:::

### Menampilkan kondisi pada lore item

* Info: Memungkinkan Anda menampilkan kondisi pada lore item.
* Contoh: 

```yaml
displayConditions:
  playerConditions:
    ifSneaking: true
  worldConditions: {}
  itemConditions: {}
  placeholdersConditions: {}
  enableFeature: true
```

### Durability dari item

* Info: Pilih nilai durability dari item.
  * Untuk versi 1.20.5-: Nilai durability harus sama dengan atau di bawah durability vanilla maksimum dari item yang dipilih.
  * Contoh: 
```yaml
durability: 150
```
  * Untuk versi 1.20.5++: Opsi durability dapat dikustomisasi, sehingga memungkinkan fitur baru seperti sinkronisasi penggunaan ExecutableItem dengan nilai durability. Opsi ini juga memungkinkan Anda memilih durability maksimum kustom.
  * Contoh:
```yaml
isDurabilityBasedOnUsage: true
maxDurability: 20 
durability: 19
```

### Enchantment dari item

* Info: Menentukan enchantment awal yang dimiliki executable item saat diberikan.
* Contoh:

```yaml
enchantments:
  enchantment1: #ID Of this enchantment, you can add as many as you want
    enchantment: sharpness
    level: 1
```

### Unbreakable

* Info: Nilai boolean yang menentukan apakah executable item bersifat unbreakable atau tidak
* Contoh: 

```yaml
unbreakable: true
```

### Atribut <CustomTag type="version" version="1.12" />

* Info: Anda dapat memilih atribut dari ExecutableItem.
  * `attribute`: Jenis atribut. Daftarnya ada di sini [Daftar atribut](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/attribute/Attribute.html)
  * `uuid`: Kode yang dibutuhkan Minecraft untuk menetapkan modifier atribut. Anda dapat mengabaikannya.
  * `name`: Nama tampilan dari Attribute Modifier. Berguna bagi Anda untuk menuliskan fungsinya. Ini tidak memengaruhi apa pun selain tampilannya di GUI.
  * `operation`: Jenis operasi yang akan dilakukan oleh AttributeModifier. Daftarnya ada di sini [Operasi](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html)
  * `amount`: Nilai untuk AttributeModifier, yang akan diterapkan pada atribut menggunakan operasi yang dipilih.
  * `slot`: Slot tempat AttributeModifier akan bekerja.
  * Contoh:

```yaml
attributes:
  attribute1: #Id of this attribute, you can add as many as you want
    attribute: GENERIC_ARMOR
    name: '&#x26;eDefault name'
    uuid: 8d6b9b6a-c84d-4c76-9b4d-81a1f44a04a0
    amount: 1.0
    operation: ADD_NUMBER
    slot: HAND
```

:::info
**Jika Anda menggunakan versi 1.12, Anda perlu mengikuti langkah-langkah berikut:**

* Proses ini membutuhkan versi premium dari EI <CustomTag type="premium" />
* Buat item Anda dengan atribut di sebuah situs web. Kami menyarankan [https://mapmaking.fr/give1.12/](https://mapmaking.fr/give1.12/)
* Lalu berikan item tersebut kepada diri Anda sendiri di dalam Minecraft
* Sambil memegangnya di tangan, jalankan perintah /ei create \<id>
* Selesai! Sekarang EI Anda memiliki atribut yang diimpor secara otomatis.
:::

#### **Keep default attributes**

* Info: Nilai boolean untuk mempertahankan atau tidak atribut default dari item.
* Contoh:

```yaml
keepDefaultAttributes: true
ignoreKeepDefaultAttributesFeature: false
```

:::warning
Pada 1.21+, item tanpa atribut sendiri yang tidak memiliki dua baris ini **kehilangan atribut default dari materialnya**: pedang memukul seperti tinju, bagian armor tidak memberikan armor. ExecutableItems mencantumkan item-item ini di konsol setelah setiap pemuatan. Untuk memperbaiki semua item Anda sekaligus: `/ei util-set-keepdefaultattributes-all-ei true`.
:::

:::info Smithing table
Dengan `keepDefaultAttributes: true`, item yang di-upgrade di smithing table (diamond menjadi netherite) mendapatkan atribut default dari material barunya (armor, toughness, dan knockback resistance netherite). Atribut milik item itu sendiri tetap dipertahankan.
:::

* Pada tautan ini terdapat tutorial tentang atribut beserta fitur-fiturnya.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HqyF0QBYIY4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


#### **ignoreKeepDefaultAttributesFeature:** 

* Info: Mengabaikan pengaturan keep default attributes. Berguna untuk kasus ketiga dalam penjelasan tabel ini:
* Contoh:

```yaml
ignoreKeepDefaultAttributesFeature: true
```

### Custom model data <CustomTag type="version" version="1.14" />

* Info: 
  * Untuk versi Minecraft sebelum 1.21.4: Bilangan bulat untuk mengatur nilai fitur customModelData dari item. Berguna untuk membuat tekstur yang berbeda pada sebuah item.
  * Sejak versi Minecraft 1.21.4, Anda kini dapat menambahkan teks dan boolean.
* Contoh: 

```yaml
# For the Minecraft version before 1.21.4
customModelData: 2232

# Since the 1.21.4
# Use ; to separate your data
customModelData: 1.0;true;hello;5.0;false;true;my text 2

# A vanilla item like this : /give @p brick[custom_model_data={floats:[1.0],flags:[true],strings:["hello"]}] 1
# Will look like this in EI : 
customModelData: 1.0;true;hello
```

* Tutorial: [https:/.ssomar.com/executableitems/questions-or-guides/premium-custom-textures](https:/.ssomar.com/executableitems/questions-or-guides/premium-custom-textures)

### Fitur Item Rarity <CustomTag type="version" version="1.20.5" />

* Info: Rarity adalah statistik vanilla yang diterapkan pada item dan blok untuk menunjukkan nilai dan tingkat kesulitan memperolehnya. Rarity sama sekali tidak memengaruhi gameplay. Terdapat empat tingkat rarity: Common, Uncommon, Rare, dan Epic.
  * `enableRarity`: Boolean yang menyatakan apakah fitur diaktifkan atau tidak
  * `rarity`: Jenis rarity
* Contoh:

```yaml
itemRarity:
  enableRarity: false
  rarity: COMMON
```

### Fitur Equippable <CustomTag type="version" version="1.21.2" />

* Info: Bagian ini mengatur perilaku item yang dapat dikenakan (equippable). Saat diaktifkan, item dapat dikenakan pada slot yang ditentukan, dengan opsi memicu efek suara. Anda juga dapat menentukan model kustom untuk item yang dikenakan, menentukan apakah item menerima kerusakan saat pemakainya terluka, dan mengatur flag untuk mengizinkan atau membatasi penukaran dan pembuangan. Selain itu, Anda dapat membatasi entitas mana saja yang boleh mengenakan item tersebut.
  * `enable`: Atur ke true untuk mengaktifkan fitur equip pada item ini
  * `slot`: Slot perlengkapan (misalnya CHEST, HEAD, LEGS, FEET) tempat item dikenakan
  * `enableSound`: Boolean untuk memutar suara saat item dikenakan
  * `sound`: Efek suara yang diputar saat dikenakan
  * `equipModel`: (Opsional) model kustom untuk item yang dikenakan (misalnya "mynamespace:mymodel")
  * `cameraOverlay`: (Opsional) overlay kamera kustom saat item dikenakan
  * `damageableOnHurt`: Boolean yang menentukan apakah item kehilangan durability saat pemakainya terluka
  * `dispensable`: Boolean yang menentukan apakah item dapat dibuang (dilepas/dijatuhkan)
  * `swappable`: Boolean yang menentukan apakah item dapat dikenakan dengan klik kanan (item ditukar dengan item yang sedang dikenakan di slot tersebut)
  * `allowedEntities`: Daftar entitas yang diizinkan mengenakan item ini
* Contoh:

```yaml
equippableFeatures:
    enable: false
    slot: CHEST
    enableSound: false
    sound: ITEM_ARMOR_EQUIP_DIAMOND

    equipModel: "" # Example: "mynamespace:mymodel"
    cameraOverlay: "" # Example: "mynamespace:mymodel"

    damageableOnHurt: false
    dispensable: true
    swappable: true

    allowedEntities:
     - PLAYER
```

### Fitur Repairable <CustomTag type="version" version="1.21.2" />

* Info: Fitur yang berkaitan dengan saat ExecutableItem diperbaiki.
  * `enable`: Nilai boolean yang menentukan apakah fitur diaktifkan atau tidak
  * `repairCost`: Nilai bilangan bulat yang menyatakan biaya memperbaikinya di Anvil
* Contoh:

```yaml
repairableFeatures:
    enable: false
    repairCost: 2 
```

### Glider <CustomTag type="version" version="1.21.2" />

* Info: Fitur untuk memungkinkan meluncur (gliding) dengan item, seperti yang biasa Anda lakukan dengan item vanilla "elytra".
* Contoh:

```yaml
glider: false
```

### itemModel <CustomTag type="version" version="1.21.2" />

* Info: Path model item kustom pada paket tekstur dengan format \<mynamespace\:model\_id> yang akan mengarah ke assets/\<mynamespace>/models/item/\<model\_id>.
* Contoh:

```yaml
itemModel: "" # "mynamespace:mymodel"
```

### tooltipModel <CustomTag type="premium" /> <CustomTag type="version" version="1.21.2" />

* Info: Path model tooltip kustom pada paket tekstur dengan format \<mynamespace\:model\_id> yang akan mengarah ke /assets/\<mynamespace>/textures/gui/sprites/tooltip/\<id>\_frame
* Contoh:

```yaml
tootipModel: "" # "mynamespace:mymodel"
```

### Fitur terkait item yang dijatuhkan

Di sini Anda akan mempelajari fitur yang hanya terlihat saat item dijatuhkan di tanah.

#### Glowing on drop

* Info: Saat item dijatuhkan, item memiliki efek bercahaya
* Contoh: 

```yaml
dropFeatures:
  glowDrop: false
```

#### Warna cahaya saat dijatuhkan

* Info: Jika item mengaktifkan glowEffect, Anda dapat memilih warna efek cahaya saat item dijatuhkan.
* Warna yang tersedia: [Referensi warna](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)
* Contoh:

```yaml
dropFeatures:
  glowDrop: false
  glowDropColor: WHITE
```

#### Nama tampilan saat item dijatuhkan

* Info: Pilih apakah item akan menampilkan nama tampilan sebagai teks melayang saat dijatuhkan.
* Contoh: 

```yaml
dropFeatures:
  displayNameDrop: true
```

###  NBT Tags

* Info: Membutuhkan plugin [**NBTAPI**](https://www.spigotmc.org/resources/nbt-api.7939/) yang tersedia di Spigot.
Fitur ini memungkinkan Anda menambahkan nbt tag kustom ke dalam ExecutableItem Anda.
  * `type`: Jenis nilai yang Anda simpan, misalnya:
    * BOOLEAN: true | false
    * STRING: car
    * INTEGER: 6
    * DOUBLE: 17.6
    * COMPOUND: Contoh di bawah, tergantung kebutuhan Anda dan apa yang ingin Anda tambahkan.
  * `key`: Kunci string yang mewakili penyimpanan nbt tersebut
  * `value`: Nilai dari NBT Tag yang Anda tambahkan
* Contoh:

```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: 3
 '2': #Id of this nbt, you can add as many as you want
    type: STRING
    key: 'MyOtherKey'
    value: 'myValue'
 '3': #Id of this nbt, you can add as many as you want
    type: BOOLEAN
    key: 'KeyKeyKeykey'
    value: true
 '4': #Id of this nbt, you can add as many as you want
    type: DOUBLE
    key: 'KeyKeyKeykeykeykey'
    value: 0.5
 '5': #Id of this nbt, you can add as many as you want
    type: BYTE
    key: 'IsCustom'
    value: 1
 '6': #Id of this nbt, you can add as many as you want
    key: ExtraAttributes
    type: COMPOUND
    value:
      nbt:
        '0':
          key: id
          type: STRING
          value: TRIAL_OF_THE_SUN_GOD
 '7': #Id of this nbt, you can add as many as you want
    key: CanDestroy
    type: STRING_LIST
    value:
    - minecraft:stone
 '8':
    key: PublicBukkitValues
    type: COMPOUND
    value:
      nbt:
        '0':
          key: auraskills:item_modifiers
          type: COMPOUND_LIST
          value:
            '0':
              key: comp0
              nbt:
                '0':
                  type: COMPOUND
                  value:
                    nbt:
                      '0':
                        key: auraskills:stat
                        type: STRING
                        value: auraskills/wisdom
                      '1':
                        key: auraskills:value
                        type: DOUBLE
                        value: '%rand:1|10000%'
                      '2':
                        key: auraskills:operation
                        type: STRING
                        value: add
```

### Bukkit tags

* Info: Anda dapat menambahkan nilai bukkit tag ke ExecutableItem Anda.
* Contoh:

```yaml
tags:
 - mytag:blabla1
 - myothertag:blabla2
```

Di dalam game, tag ini akan ditampilkan di PublicBukkitValues, seperti ini

```yaml
"executableitems:mytag":"blabla1"
"executableitems:myothertag":"blabla2"
```

Anda juga dapat menulis placeholder %rand% di kolom nilai NBT. Hanya berfungsi untuk tipe data STRING, INTEGER, dan DOUBLE
```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: '%rand:-100|100%'
```
Juga berfungsi di editor dalam game
```
INTEGER::foo::%rand:1|2%
```  
  
Anda juga dapat menyimpan nbt ke PDC (Persistent Data Container) jika Anda mau.
* Contoh di dalam game: `integer::take::0::true`
* Config item:
```yml
nbt:
  '0':
    key: take
    saveInPDC: true
    type: INT
    value: 0
```

### Fitur Hiders

* Info: Pengaturan terkait penyembunyian fitur yang biasanya ditampilkan pada ExecutableItem Anda. Semua fitur tetap berfungsi meskipun disembunyikan.
  * `hideEnchantments`: Nilai boolean yang menyatakan apakah enchantment pada ExecutableItem akan ditampilkan di lore atau tidak.
  * `hideUnbreakable`: Nilai boolean yang menyatakan apakah deskripsi unbreakable akan ditampilkan di lore atau tidak.
  * `hideAttributes`: Nilai boolean yang menyatakan apakah atribut dari ExecutableItem akan ditampilkan di lore atau tidak.
  * `hidePotionEffects`: Nilai boolean yang menyatakan apakah efek potion dari ExecutableItem akan ditampilkan di lore atau tidak. Pada versi 1.20.5 atau lebih baru, gunakan hideAdditionalTooltip.
  *   hideAdditionalTooltip (Hanya tersedia di 1.20.5++) 

      Pengaturan untuk menampilkan/menyembunyikan efek potion, informasi buku dan firework, tooltip peta, pola banner, dan enchantment pada buku enchanted. Pengaturan ini menggantikan hidePotionEffects yang lama
  * `hideUsage`: Nilai boolean yang menyatakan apakah fitur kustom Usage dari plugin ExecutableItem pada item itu sendiri akan ditampilkan di lore atau tidak.
    * Anda dapat menampilkan usage secara manual menggunakan placeholder %usage% dengan menambahkannya saat mengedit lore Anda.
  * `hideDye`: Nilai boolean yang menyatakan apakah warna dye (#\<color>) dari ExecutableItem akan ditampilkan di lore atau tidak.
  * `hideArmorTrim`: Nilai boolean yang menyatakan apakah armor trim dari ExecutableItem akan ditampilkan di lore atau tidak.
  * `hidePlacedOn`: Nilai boolean yang menyatakan apakah NBT Tag "Can be placed on: \[...]" dari ExecutableItem akan ditampilkan di lore atau tidak.
  * `hideDestroys`: Nilai boolean yang menyatakan apakah NBT Tag "Can destroy: \[...]" dari ExecutableItem akan ditampilkan di lore atau tidak.
  * `hideToolTip`: Nilai boolean yang menyatakan apakah tooltip disembunyikan atau tidak. (Hanya tersedia di 1.20.5++)
* Contoh:

```yaml
hiders:
  hideEnchantments: false
  hideUnbreakable: false
  hideAttributes: false
  hidePotionEffects: false
  hideAdditionalTooltip: false
  hideUsage: false
  hideDye: false
  hideArmorTrim: false
  hidePlacedOn: false
  hideDestroys: false
  hideToolTip: false
```

### Fitur Usage

Bagian ini akan menjelaskan apa itu usage beserta fitur-fiturnya.

#### Usage

* Info: Usage adalah nilai bilangan bulat yang disimpan di dalam ExecutableItem Anda, dan dapat diubah melalui usageModification di dalam aktivator atau melalui perintah. Namun usage bukan sekadar nilai yang disimpan, melainkan dibuat untuk mewakili "sistem durability kustom" dari ExecutableItem Anda. Artinya, jika usage mencapai 0, item Anda akan dihapus.
* Contoh: 
  * Usage 1 tidak berarti item memiliki durability 1. Seperti yang dijelaskan sebelumnya, ini adalah sistem durability kustom. Item akan bertahan selama usage belum mencapai 0. Misalnya, jika Anda menambahkan aktivator pada item yang memiliki fitur usageModification dengan nilai "-1", begitu aktivator terpicu satu kali, item Anda akan hilang.
  * Dengan ide yang sama, jika usage bernilai 1 dan tidak ada aktivator yang mengubah usage item, item akan bertahan selamanya, sampai suatu saat sebuah perintah atau aktivator baru yang ditambahkan ke item mengubah usage menjadi nilai yang sama dengan atau kurang dari 0, lalu item akan dihapus.
    * ```yaml
      usage: 1
      ```
  * Seperti yang telah disebutkan, jangan menganggap usage hanya sebagai sistem durability, karena nilainya juga bisa naik! Misalnya, jika kita memiliki aktivator yang pada usageModification memakai nilai positif, bukan negatif, maka usage kita akan bertambah setiap kali aktivator terpicu ^^
  * Sekarang, jika Anda ingin item Anda tidak bertambah maupun berkurang, pada dasarnya tidak menggunakan penyimpanan nilai kustom ini, Anda dapat mengatur usage ke -1.
    * ```yaml
      usage: -1
      ```

#### Usage limit <CustomTag type="premium" />

* Info: Nilai bilangan bulat yang membatasi jumlah maksimum yang dapat dicapai usage. (Nilai tidak boleh 0)
* Contoh: 

```yaml
usageLimit: 600 #Usage will not be able to go up more than this value, -1 to don't take it into account
```

#### Uses per day

* Info: Nilai bilangan bulat yang membatasi berapa kali item dapat digunakan setiap hari di dunia nyata
* Contoh: 

```yaml
usePerDay: 200 # -1 to ignore it
```

### Fitur Food <CustomTag type="version" version="1.20.5" />

* Info: Fitur ini memungkinkan Anda menyesuaikan pengaturan makanan yang terkait dengan ExecutableItem Anda
  * `nutrition`: Nilai bilangan bulat yang menyatakan jumlah "setengah makanan" yang akan mengisi pemain setelah item dimakan
    * Agar lebih mudah dipahami, pemain memiliki nutrisi maksimum 20, yang ditampilkan di dalam game sebagai 10 ikon rasa lapar, dan setiap ikon dapat dibagi menjadi 2.
  * `saturation`: Nilai bilangan bulat yang menyatakan saturation yang akan diterima pemain setelah item dimakan.
  * `isMeat`: Nilai boolean yang membuat item dianggap sebagai makanan. Ini diterapkan secara paksa, artinya jika Anda mengatur nilai ini ke true, item apa pun, bahkan yang tidak dapat dimakan, akan dianggap sebagai makanan, sehingga dapat dikonsumsi.
  * `canAlwaysEat`: Nilai boolean yang menyatakan apakah item selalu dapat dimakan, bahkan ketika bar makanan pemain sudah penuh.
*  Contoh:

```yaml
foodFeatures:
  nutrition: 1
  saturation: 1
  isMeat: false
  canAlwaysEat: true
```

### Fitur Consumable <CustomTag type="version" version="1.21.4" />

* Info: Fitur terkait consumable, memungkinkan Anda menyesuaikan opsi consumable, dan lebih mirip dengan fitur food.
  * `enable`: Boolean yang menyatakan apakah fitur consumable diaktifkan atau dinonaktifkan
  * `animation`: ANIMATION\_TYPE yang akan dimainkan saat ExecutableItem dimakan/dikonsumsi
  * `sound`: SOUND yang akan diputar saat item dimakan/dikonsumsi
  * `hasConsumeParticles`: Nilai boolean yang menyatakan apakah item akan mengeluarkan partikel saat dimakan
  * `consumeSeconds`: Jumlah detik yang dibutuhkan untuk memakan/mengonsumsi item.
* Contoh:

```yaml
consumableFeatures:
  enable: true
  animation: SPYGLASS
  sound: ITEM.ARMOR.EQUIP_DIAMOND
  hasConsumeParticles: false
  consumeSeconds: 3
```

### Pengaturan Potion

Di sini Anda dapat menyesuaikan fitur potion dari ExecutableItem Anda jika material item tersebut adalah potion.

#### Warna potion

* Info: Bilangan bulat MapInfo Color yang mewakili sebuah warna. Gunakan halaman seperti [https://www.tydac.ch/color/](https://www.tydac.ch/color/) untuk mendapatkan nilai MapInfo dari sebuah warna.
* Contoh:

```yaml
potionFeatures:
  potionColor: 10265481
```

#### Jenis potion

* Info: Potion Type yang Anda inginkan untuk item potion. Ini hanya fitur tampilan, dan tidak memengaruhi perilaku asli potion. Daftarnya tersedia di sini [Jenis potion](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionType.html)
* Contoh:

```yaml
potionFeatures:
  potionType: WIND_CHARGED
```

#### Efek potion

* Info: Di sini Anda dapat membuat efek potion yang dimiliki opsi Anda
  * `potionEffectType`: PotionEffectType yang dipilih, daftarnya tersedia di sini [Efek potion](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
  * `isAmbient: Nilai boolean yang membuat potion bersifat ambient, sehingga efek potion menghasilkan partikel yang lebih banyak dan lebih transparan.
  * `duration`: Nilai bilangan bulat dalam tick (20 tick = 1 detik) yang menyatakan durasi efek potion.
  * `amplifier`: Nilai bilangan bulat yang menyatakan level/tingkat/kekuatan efek potion. Amplifier 0 berarti level 1, amplifier 1 berarti level 2, dan seterusnya.
  * `hasParticles`: Nilai boolean yang mengaktifkan atau menonaktifkan tampilan partikel efek di sekitar pemain.
  * `hasIcon`: Nilai boolean yang mengaktifkan atau menonaktifkan tampilan ikon efek di kanan atas layar pemain.
* Contoh:

```yaml
potionFeatures:
  potionColor: 10265481
  potionType: FIRE_RESISTANCE
  potionEffects:
    pEffect0:
      isAmbient: false
      duration: 30
      potionEffectType: HEALTH_BOOST
      amplifier: 0
      hasParticles: false
      hasIcon: false
```

### Warna armor

* Info: Jika ExecutableItem Anda adalah instance dari armor kulit, di sini Anda dapat memilih nilai MapInfo Color yang bisa Anda dapatkan dari situs web ini [https://www.tydac.ch/color/](https://www.tydac.ch/color/) untuk mengubah warnanya.
  * <CustomTag type="version" version="1.21.3" /> Di Paper, `armorColor` juga tersedia pada bagian armor lainnya (helm, chestplate, leggings, boots dari material apa pun, armor kuda dan serigala) serta pada elytra. Ini mengatur komponen vanilla `dyed_color` pada item tersebut, yang digunakan model kustom (Nexo, ItemsAdder...) untuk tint-nya: tanpa ini, model semacam itu bisa menjadi tidak terlihat. `/ei create` mempertahankan warna ini dari item yang ada di tangan Anda.
* Contoh:

```yaml
armorColor: 7702341
```

### Pengaturan Head

Di sini Anda dapat memilih konfigurasi untuk pengaturan head, yaitu kepala kustom dari nilai kepala pemain atau dari sebuah database.

#### Jika Anda tidak memiliki plugin head database <CustomTag type="version" version="1.13" />

* Jika Anda ingin menambahkan kepala kustom untuk 1.13++ tanpa plugin database, Anda dapat mengikuti langkah-langkah berikut:
  * Atur material ExecutableItem ke PLAYER\_HEAD
  * Kunjungi situs kepala kustom, seperti [https://minecraft-heads.com/custom-heads](https://minecraft-heads.com/custom-heads)
  *   Lalu ambil Value dari kepala tersebut\

      
  * Sekarang salin nilai tersebut dan tempel di dalam fitur headValue pada ExecutableItems
  * Contoh:
  * ```yaml
    headValue: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTk4ZGY0MmY0NzdmMjEzZmY1ZTlkN2ZhNWE0Y2M0YTY5ZjIwZDljZWYyYjkwYzRhZTRmMjliZDE3Mjg3YjUifX19
    ```

#### Jika Anda memiliki plugin Head Database <CustomTag type="version" version="1.12" />

* Jika Anda ingin menambahkan kepala kustom untuk 1.12++ dan Anda memiliki plugin head database, Anda dapat mengikuti langkah-langkah berikut:
  * Buka GUI plugin Anda dan ambil ID kepala yang Anda inginkan
  * Lalu tempel di dalam fitur head pada headDBID
  * Contoh:
  * ```yaml
    headDBID: 44328
    ```
* Berikut tautannya jika Anda belum memilikinya dan menginginkannya.
  * Versi premium: [Head Database](https://www.spigotmc.org/resources/head-database.14280/)
  * Versi gratis: [Head DB](https://www.spigotmc.org/resources/headdb-head-menu-auto-update-free.84967/)

### whitelistedWorlds

* Info: Daftar String berisi nama dunia tempat Anda ingin mencegah atau mengizinkan pemain menggunakan ExecutableItem.
* Contoh:

```yaml
whitelistedWorlds:
- ZombieSurvivalWorld_the_end # This allows the use of the EI in that world
- '!ApocalypseWorld' # Using ! Disables the use of the EI in that world
```

### Store item info

* Info: Nilai boolean yang menyatakan apakah informasi disimpan di dalam item itu sendiri atau tidak. Saat ini fitur yang disimpan adalah "owner". Jadi jika Anda ingin menggunakan placeholder %owner% atau kondisi yang berkaitan dengan owner, fitur ini harus diaktifkan.
* Contoh:

```yaml
storeItemInfo: false
```

### Fitur Owner

#### canBeUsedOnlyByTheOwner

* Info: Nilai boolean yang menyatakan apakah item hanya dapat digunakan oleh owner atau tidak.
  * Ini hanya berfungsi jika store item info diaktifkan agar item memiliki owner.
* Contoh: 

```yaml
canBeUsedOnlyByTheOwner: false
```

#### cancelEventIfNotOwner

* Info: Nilai boolean yang menyatakan bahwa jika item tidak digunakan oleh owner, maka semua event dibatalkan. Artinya, jika aktivatornya adalah, misalnya, PLAYER\_BREAK\_BLOCK dan seseorang yang bukan owner mencoba menggunakan item ini, ia tidak akan dapat menghancurkan blok apa pun karena semua event dibatalkan.
  * Ini hanya berfungsi jika store item info diaktifkan agar item memiliki owner.
* Contoh: 

```yaml
cancelEventIfNotOwner: false
```

#### onlyOwnerBlackListedActivators

* Info: Daftar ID aktivator dari ExecutableItem Anda. Ini adalah daftar blacklist yang menonaktifkan fitur canBeUsedOnlyByTheOwner, artinya semua ID aktivator di sini yang menargetkan aktivator pada ExecutableItem akan dapat digunakan oleh semua orang meskipun canBeUsedOnlyByTheOwner bernilai true.
  * Ini hanya berfungsi jika store item info diaktifkan agar item memiliki owner.
* Contoh: 

```yaml
onlyOwnerBlackListedActivators:
- activator0
- activator1
```

### cancelEventIfNoPermission

* Info: Nilai boolean yang menyatakan bahwa jika pemain tidak memiliki izin (ei.item.\<id>) untuk menggunakan item, maka semua event dibatalkan. Artinya, jika aktivatornya adalah, misalnya, PLAYER\_BREAK\_BLOCK dan seseorang yang tidak memiliki izin untuk menggunakan item ini mencoba menggunakannya, ia tidak akan dapat menghancurkan blok apa pun karena semua event dibatalkan.

```yaml
cancelEventIfNoPermission: true
```

### Keep item on death

* Info: Nilai boolean yang menyatakan apakah pemain akan mempertahankan item setelah mati atau tidak.
* Contoh: 

```yaml
keepItemOnDeath: true
```

:::info
Kompatibel dengan fitur keepInventory dari WorldGuard dan gamerule keepInventory vanilla
:::

### Disable stack <CustomTag type="premium" />

* Info: Nilai boolean yang menyatakan apakah ExecutableItem dicegah untuk ditumpuk atau tidak. Mengatur fitur ini ke true akan membuat customStackSize item ini menjadi 1.
* Contoh: 

```yaml
disableStack: true
```

### customStackSize <CustomTag type="premium" /> <CustomTag type="version" version="1.20.5" />

* Info: Nilai bilangan bulat untuk mengatur ukuran tumpukan item ini. Nilai ini akan menimpa jumlah tumpukan saat ini.
* Agar lebih mudah dipahami, diamond\_sword vanilla memiliki ukuran tumpukan 1 karena tidak dapat ditumpuk, dan dengan fitur ini Anda dapat menaikkan nilainya. Di sisi lain, dirt memiliki ukuran tumpukan 64, tetapi dengan fitur ini Anda dapat menurunkannya menjadi, misalnya, ukuran tumpukan 20.
* Contoh: 

```yaml
customStackSize: 32
```

### Pengaturan Variables

* Info: Variabel adalah cara untuk menyimpan informasi di dalam ExecutableItem Anda. Ini memungkinkan Anda melacak jumlah, menyimpan posisi, dan sebenarnya Anda dapat menyimpan apa pun yang Anda inginkan. Variabel membantu membuat perilaku item yang dinamis dan dapat dikustomisasi. Maksudnya, variabel memungkinkan Anda membuat perilaku unik untuk setiap item dengan menyimpan dan melacak data yang spesifik untuk item tersebut. Misalnya, Anda dapat melacak berapa kali pemain telah menggunakan item tertentu atau berapa banyak pemain yang telah ia bunuh dengan item itu.
  * `variableName`: Nama variabel, yang akan digunakan sebagai referensi dengan %var\_\<name>% untuk memakainya di lore, di dalam perintah, dan sebagainya. Nama ini tidak boleh "id" atau "usage" maupun mengandung spasi.
  * `type`: VariableType dari variabel, dapat berupa jenis berikut beserta contoh penggunaannya:
    * STRING: Dengan tipe variabel ini Anda dapat menyimpan nilai STRING, seperti kata, angka, huruf, karakter, dan sebagainya. Misalnya Anda dapat menyimpan nama pemain terakhir yang dipukul. Tipe variabel ini tidak mendukung `variableModification(type:MODIFICATION)` untuk menaikkan atau menurunkan nilai. Nilainya statis kecuali diganti dengan `variableModification(type:SET)` yang akan menimpa nilai lama.
    * NUMBER: Dengan tipe variabel ini Anda dapat menyimpan nilai FLOAT, seperti angka. Misalnya jika Anda ingin menyimpan jumlah blok yang dihancurkan, jumlah kill, melacak detik sebelum sesuatu terjadi, dan sebagainya. Tipe variabel ini mendukung `variableModification(type:MODIFICATION)` dan `variableModification(type:SET)`.
    * LIST: Variabel ini adalah variabel bertipe daftar yang menyimpan nilai STRING. Berguna untuk menyimpan daftar berbagai hal, misalnya melacak blok yang diklik lalu menambahkannya ke daftar ini, atau menambahkan pemain yang dibunuh di sini, dan sebagainya.
  * `isRefreshableClean`: Nilai boolean yang mengaktifkan refresh clean. Ini memungkinkan Anda menambahkan baris lore kustom tanpa terhapus saat variabel diperbarui. Disarankan untuk mengaturnya ke true.
  * `refreshTagDoNotEdit`: Dibuat otomatis oleh plugin. Membantu fungsi `isRefreshableClean` bekerja dengan benar. Jadi jangan disentuh.
  * `papiParser`: Nilai string yang berisi string PlaceholderAPI yang memuat nilai variabel untuk di-parse. Tujuannya adalah agar Anda dapat menyisipkan nilai variabel ke dalam placeholder PlaceholderAPI dan menampilkan hasilnya di lore. 
    * Contoh:
      * ID variabel: `level`
      * Nilai String papiParser: `%math_<VAR>*<VAR>%`
        * String `<VAR>` mewakili nilai variabel saat ini ketika di-parse. Jika Anda ingin menempatkan nilai di beberapa bagian string placeholder PlaceholderAPI, cukup ketik `<VAR>` di tempat yang Anda butuhkan.
      * String placeholder yang dimasukkan ke lore: `%var_level_papi%`
* Contoh
  * ```yaml
    variables:
      var2:
        variableName: ThisVariableIsTypeIntegerAndICanDoModifications
        type: NUMBER
        default: 10.0
      var1:
        variableName: anotherVariable # This variable is type string
        type: STRING
        default: '' #It starts with no value, we can then change it from an activator or using commands
      var0:
        variableName: nameOfVariable
        type: LIST
        default:
        - value1
        - value2
        - '1'
        - '2'
    ```
* Anda dapat melihat informasi lebih lanjut tentang tipe variabel lainnya di halaman berikut:
  * [Variabel SCore](/tools-for-all-plugins-score/score-variables)

### Fitur Custom give first join

* Info: Di sini Anda dapat menyesuaikan fitur pemberian item saat pemain bergabung ke server untuk pertama kalinya.
  * giveFirstJoin: Nilai boolean yang menyatakan apakah fitur diaktifkan atau tidak
  * giveFirstJoinAmount: Nilai bilangan bulat yang menyatakan berapa banyak item dari ExecutableItem ini yang akan diberikan kepada pemain.
  * giveFirstJoinSlot: Slot tempat ExecutableItem akan diberikan kepada pemain.
* Contoh:

```yaml
giveFirstJoinFeatures:
  giveFirstJoin: false
  giveFirstJoinAmount: 1
  giveFirstJoinSlot: 0
```

### Fitur Item Recognition <CustomTag type="premium" />

* Info: Fitur ini memungkinkan item lain yang bukan ExecutableItem diperlakukan seolah-olah item tersebut adalah ExecutableItem yang sedang Anda edit. Pada dasarnya idenya adalah bekerja dengan recognition, yaitu daftar jenis recognition. Jika salah satunya cocok antara ExecutableItem Anda dan item lain (meskipun bukan ExecutableItem), fitur yang dimiliki ExecutableItem juga akan berlaku pada item lain tersebut. Ini berfungsi selama item dikenali sesuai persyaratan recognition.
  * Opsi recognition yang tersedia:
    * NAME:  Mengaktifkan recognition untuk semua item yang cocok dengan nama kustom ExecutableItem
    * MATERIAL: Mengaktifkan recognition untuk semua item yang cocok dengan material ExecutableItem
    * LORE: Mengaktifkan recognition untuk semua item yang cocok dengan lore ExecutableItem
* Misalnya, jika Anda membuat ExecutableItem diamond pickaxe yang memiliki aktivator PLAYER\_RIGHT\_CLICK dan pada perintah "SEND\_MESSAGE I am a pickaxe", setiap kali Anda klik kanan, pesan tersebut akan dikirim ke chat Minecraft. Sekarang, jika Anda mengaktifkan item recognition, katakanlah untuk material, maka SEMUA diamond pickaxe di server akan memicu aktivator tersebut, sehingga pesan akan ditampilkan.
* Contoh: 

```yaml
recognitions:
- NAME
- MATERIAL  
- LORE 
```

* Contoh skenario:
  * Jika sebuah item EI hanya memiliki item recognition `MATERIAL` dan berupa DIAMOND, semua diamond yang ada di server akan berperilaku sebagai item EI tersebut
  * Jika sebuah item EI hanya memiliki item recognition `NAME` dan bernama "\&dAngle", jika Anda mencoba menggunakan item apa pun dengan nama "\&dAngle", item tersebut akan berperilaku sebagai item EI aslinya. TETAPI jika namanya "\&eAngle" atau nama lain, fitur ini tidak akan berfungsi.
  * Jika sebuah item EI hanya memiliki item recognition `LORE`, sebuah item hanya akan berperilaku sebagai EI jika item tersebut memiliki kode warna yang PERSIS sama pada baris lore dan setiap huruf besar dan huruf kecil serta karakternya juga sama persis.
  * Jika sebuah item EI hanya memiliki item recognition `MATERIAL` dan `NAME`, item tersebut harus memiliki NAME dan MATERIAL yang PERSIS sama dengan item EI agar dianggap sebagai item EI.
* Perlu diingat bahwa jika salah satu ExecutableItems Anda mengaktifkan item recognition pada MATERIAL, Anda sebaiknya tidak menggunakan item recognition lain berbasis MATERIAL untuk ExecutableItem lain dengan MATERIAL yang sama. Alasannya, jika ada 2 item ExecutableItems dengan recognition MATERIAL yang diaktifkan dan keduanya DIAMOND\_BLOCK, hanya yang pertama menurut urutan alfabet yang akan memiliki prioritas tertinggi jika seseorang memicu sebuah DIAMOND\_BLOCK.

## Fitur Use cooldown <CustomTag type="version" version="1.21.2" />

* Info: Fitur yang menambahkan use cooldown bergaya vanilla pada item, mirip dengan cooldown pada ender pearl atau chorus fruit.
  * `cooldownGroup`: Nilai string yang menentukan grup cooldown. Item dengan grup cooldown yang sama akan berbagi cooldown yang sama. Harus berupa huruf kecil dan mengikuti format NamespacedKey (misalnya "mygroup" atau "namespace:mygroup")
  * `vanillaUseCooldown`: Nilai bilangan bulat yang menyatakan durasi cooldown dalam detik
* Contoh:

```yaml
useCooldown:
  cooldownGroup: "custom_weapon_group"
  vanillaUseCooldown: 5
```

:::info
Cooldown ini berbeda dari sistem cooldown aktivator. Ini adalah cooldown vanilla Minecraft yang menampilkan item "berwarna abu-abu" di hotbar selama periode cooldown.
:::


## Tergantung pada jenis item

### Fitur Container

* Info: Di sini Anda dapat menyesuaikan fitur container jika blok tersebut adalah instance dari container seperti chest dan barrel.
  * `isLocked`: Nilai boolean yang menyatakan apakah container terkunci atau tidak
  * `lockedName`: Nilai string yang menyatakan nama kunci jika container terkunci. Ini adalah fitur Minecraft: jika Anda memiliki item dengan nama yang sama dengan lockedName, Anda akan dapat membuka chest, jika tidak maka tidak bisa.
  * `containerContent`: Daftar material di dalam container saat diletakkan, dengan format slot:\<slot>;\<material>
* Contoh:

```yaml
containerFeatures:
  isLocked: true
  lockedName: thisIsTheKey
  containerContent:
  - slot:0;minecraft:loom
```

### Tool Rules <CustomTag type="version" version="1.20.5" />

Info: Di sini Anda dapat memilih aturan dari tool.

#### Enable

* Info: Nilai boolean untuk memilih apakah Tool Rules diaktifkan atau tidak.
* Contoh:

```yaml
toolRules:
  enable: true
```

#### Default mining speed

* Info: Nilai float untuk mengatur kecepatan menambang default dari ExecutableItem.
* Contoh:

```yaml
toolRules:
  enable: true
  defaultMiningSpeed: 1.0
```

#### Damage per block break

* Info: Nilai bilangan bulat untuk mengatur nilai durability yang akan dikurangi setelah ExecutableItem menghancurkan sebuah blok. 
* Contoh:

```yaml
toolRules:
  enable: false
  damagePerBlock: 1
```

#### Specific tool rules

* Info: Anda dapat memilih kecepatan menambang dan droppable untuk blok tertentu dengan ExecutableItem, untuk kustomisasi tool.
  * `miningSpeed`: Nilai float untuk mengatur kecepatan menambang ExecutableItem untuk blok yang dipilih pada tool rule.
  * `correctForDrops`: Nilai boolean yang menyatakan apakah blok akan dijatuhkan (drop) atau tidak saat menggunakan ExecutableItems.
  * `blocks`: Daftar BLOCKS tempat tool rules diterapkan.
* Contoh:

```yaml
toolRules:
  toolRule0: #ID Of this tool rule, you can add as many as you want
    miningSpeed: 1.0
    correctForDrops: true
    blocks:
    - STONE
  enable: true
```

### chargedProjectiles

* Info: Fitur yang memungkinkan proyektil sudah terisi (charged) saat ExecutableItem adalah item crossbow dan diberikan kepada pemain.
  * Format material harus seperti `minecraft:<id>`. Untuk saat ini mendukung item vanilla.
* Contoh:

```yaml
material: CROSSBOW
chargedProjectiles:
- minecraft:arrow
```

### bundleContent

* Info: Fitur yang memungkinkan item sudah berisi konten jika ExecutableItems adalah item bundle dan diberikan kepada pemain.
  * Format material harus seperti `minecraft:<id>`. Untuk saat ini mendukung item vanilla.
* Contoh:

```yaml
material: BUNDLE
bundleContent:
- minecraft:stone
- minecraft:dirt
```

### Fitur Firework

* Info: Fitur yang memungkinkan Anda memiliki fitur firework yang dikustomisasi jika ExecutableItems adalah item firework.
* Contoh:

```yaml
fireworkFeatures:
  lifeTime: 1
  fireworkExplosions:
    explosion_0:
      colors:
      - BLUE
      fadeColors:
      - RED
      type: BALL_LARGE
      hasTrail: true
      hasTwinkle: true
    explosion_1:
      colors:
      - GREEN
      fadeColors: []
      type: CREEPER
      hasTrail: true
      hasTwinkle: true
```

Untuk warna, Anda dapat menggunakan [Nama warna](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html) biasa atau `RGB-<0-255>-<0-255>-<0-255>`

### Fitur Spawner <CustomTag type="version" version="1.20.5" />

* Info: Fitur yang memungkinkan Anda membuat spawner kustom dengan ExecutableItems
* Pengaturan:
  * `spawnCount`: Menentukan berapa banyak entitas yang muncul pada setiap spawn
  * `spawnDelay`: Menentukan delay spawn pertama setelah spawner diletakkan (dalam tick, 20 tick = 1 detik)
  * `spawnRange`: Jangkauan spawn
  * `requiredPlayerRange`: Menentukan jarak maksimum pemain agar spawner aktif
  * `minSpawnDelay`: Delay minimum di antara setiap spawn  (dalam tick, 20 tick = 1 detik)
  * `minSpawnDelay`: Delay maksimum di antara setiap spawn  (dalam tick, 20 tick = 1 detik)
  * `maxNearbyEntities`: Jumlah maksimum entitas di sekitar spawner
  * `addSpawnerNbtToItem`: Menentukan apakah tag komponen spawner ditambahkan ke item atau tidak (lebih baik dibiarkan false). Saat bernilai false, plugin hanya akan menambahkan tag ketika spawner diletakkan.
  * `potentialSpawns`: Menentukan potentialSpawns dari spawner Anda beserta bobotnya

:::tip
Sebaiknya buat spawner Anda di [MCStaker](https://mcstacker.net/?cmd=give) terlebih dahulu, lalu berikan ke diri Anda di dalam game, dan terakhir pegang item tersebut + jalankan /ei create.\
Fitur spawner akan diimpor secara otomatis ke ExecutableItems Anda.
:::

* Contoh:

```yaml
spawnerFeatures:
  spawnCount: 4
  spawnDelay: 20
  spawnRange: 4
  requiredPlayerRange: 16
  minSpawnDelay: 200
  maxSpawnDelay: 800
  maxNearbyEntities: 6
  potentialSpawns:
  # {THE ENTITY};the weight for this SpawnerEntry, when added to a spawner entries with higher weight will spawn more often.
  - '{BlockState:{Name:"minecraft:diorite"},id:"minecraft:falling_block"};1' 
  - '{id:"minecraft:chicken"};1' 
  addSpawnerNbtToItem: false
```

### Fitur Instrument <CustomTag type="version" version="1.20.5" />

* Info: Fitur yang memungkinkan Anda menyesuaikan suara goat horn untuk item. Fitur ini hanya berfungsi untuk item dengan material GOAT_HORN.
  * `enable`: Nilai boolean yang mengaktifkan atau menonaktifkan fitur instrument
  * `instrument`: Suara music instrument yang akan diputar saat goat horn digunakan. [Music Instruments](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/MusicInstrument.html)
* Contoh:

```yaml
material: GOAT_HORN
instrumentFeatures:
  enable: true
  instrument: DREAM_GOAT_HORN
```

### Fitur Weapon <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Info: Fitur yang memungkinkan Anda mengonfigurasi pengaturan pertarungan khusus senjata untuk item.
  * `enable`: Nilai boolean yang mengaktifkan atau menonaktifkan fitur weapon
  * `disableBlockingTime`: Nilai bilangan bulat yang menyatakan berapa lama (dalam detik) shield target akan dinonaktifkan setelah terkena serangan senjata ini
  * `damagePerAttack`: Nilai bilangan bulat yang menyatakan kerusakan durability yang diterima senjata ini per serangan (default: 5)
* Contoh:

```yaml
weaponFeatures:
  enable: true
  disableBlockingTime: 3
  damagePerAttack: 2
```


### Fitur Blocks attacks <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Info: Fitur yang memungkinkan Anda mengonfigurasi cara item memblokir serangan, mirip dengan shield. Dengan ini, item apa pun dapat dibuat mampu memblokir kerusakan.
  * `enable`: Nilai boolean yang mengaktifkan atau menonaktifkan fitur block attacks
  * `blockDelay`: Nilai bilangan bulat yang menyatakan delay dalam detik sebelum item dapat memblokir lagi setelah digunakan
  * `blockSound`: Suara yang diputar saat berhasil memblokir serangan
  * `disableSound`: Suara yang diputar saat pemblokiran dinonaktifkan (setelah kewalahan)
  * `disableCooldownScale`: Nilai double (pengali) untuk berapa lama penonaktifan blok berlangsung setelah kewalahan (default: 1.0)
  * `damageReductions`: Daftar konfigurasi damage reduction yang menentukan seberapa besar kerusakan dikurangi per jenis kerusakan
  * `bypassedBy`: Jenis kerusakan yang melewati blok ini sepenuhnya
* Contoh:

```yaml
blockAttacksFeatures:
  enable: true
  blockDelay: 1
  blockSound: ITEM_SHIELD_BLOCK
  disableSound: ITEM_SHIELD_BREAK
  disableCooldownScale: 1.5
  damageReductions:
    reduction_0:
      baseDamageBlocked: 2.0
      factorDamageBlocked: 0.5
      horizontalBlockingAngle: 90.0
      damageTypes:
      - ARROW
      - MOB_ATTACK
    reduction_1:
      baseDamageBlocked: 1.0
      factorDamageBlocked: 0.25
      horizontalBlockingAngle: 180.0
      damageTypes:
      - EXPLOSION
  bypassedBy: VOID
```

#### Konfigurasi Damage Reduction

Setiap entri damage reduction memiliki pengaturan berikut:
* `baseDamageBlocked`: Jumlah dasar kerusakan yang diblokir (pengurangan tetap)
* `factorDamageBlocked`: Persentase kerusakan yang diblokir (0.5 = pengurangan 50%)
* `horizontalBlockingAngle`: Sudut dalam derajat dari mana serangan dapat diblokir (90 = seperempat bagian depan, 180 = setengah bagian depan, 360 = semua arah). Harus lebih besar dari 0.
* `damageTypes`: Daftar jenis kerusakan yang menjadi sasaran pengurangan ini. Lihat [Damage Types](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html) untuk jenis yang tersedia.

:::tip
Anda dapat membuat "shield" kustom dengan berbagai material menggunakan fitur ini. Misalnya, Anda dapat membuat sebuah buku yang memblokir kerusakan sihir atau sebuah diamond yang memblokir serangan fisik!
:::
