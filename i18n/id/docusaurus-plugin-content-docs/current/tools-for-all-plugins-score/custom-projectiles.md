---
description: >-
  Pelajari cara membuat dan meluncurkan Custom Projectiles dengan editor
  in-game: tipe, velocity, partikel, panah, trident, dan lainnya di SCore.
source_hash: 6fa479a1613c4cb0
translated_at: '2026-11-13T17:54:37.684Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 🏹 Custom Projectiles

Halaman ini akan membantu Anda mempelajari cara membuat custom projectiles dan meluncurkannya.\
Kami telah membuatkan editor in-game agar proses pengeditan menjadi mudah. **Gunakan editor tersebut.**

:::info 
Untuk meluncurkannya, caranya mudah: gunakan perintah [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch) atau [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch). Projectile ini tidak dapat diberikan kepada pemain.
:::

### Perintah:

| Perintah                        | Fungsi                                                      |
| ------------------------------- | ----------------------------------------------------------- |
| /score projectiles              | Menampilkan semua projectile dan memungkinkan Anda mengeditnya |
| /score projectiles-create \<id> | Membuka editor untuk membuat projectile baru                |
| /score projectiles-delete \<id> | Aksi untuk menghapus projectile (memerlukan konfirmasi)     |
| /score reload                   | Memuat ulang plugin (berguna jika Anda mengedit projectile di file .yml) |

## **Informasi Dasar**

### Type

Ini adalah hal pertama yang harus Anda atur, yaitu tipe projectile yang ingin Anda buat. Score mendukung:

* ARROW
* SPECTRAL\_ARROW
* EGG
* ENDER\_PEARL
* FIREBALL
* SPLASH\_POTION
* SHULKER\_BULLET
* SNOWBALL
* TRIDENT
* WITHER\_SKULL
* DRAGON\_FIREBALL
* THROWNEXPBOTTLE
* WIND\_CHARGE
* LLAMASPIT
* FISHHOOK
* FIREWORK

Contoh:

```yaml
type: ARROW
```

### Custom name visible

* Opsi ini memungkinkan Anda menampilkan nama kustom di atas projectile
* Opsi:
  * true
  * false
* Contoh:

```yaml
customNameVisible: true
```

### Custom Name

* Ini adalah NAMA projectile, berguna untuk customNameVisible dan hal-hal terkait placeholder.
* Contoh:

```yaml
customName: '&eBullet'
```

### Visual fire

* Opsi untuk mengaktifkan api visual pada projectile
* Contoh:

```yaml
visualFire: true
```

### Invisible

* Menentukan apakah projectile akan tidak terlihat atau tidak. Memerlukan [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
```yaml
invisible: false
```

### Pickup status

* Opsi untuk mengonfigurasi apakah projectile dapat diambil
* Opsi: [Pickup status](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/AbstractArrow.PickupStatus.html)
* Contoh:

```yaml
pickupStatus: CREATIVE_ONLY # DISALLOWED, ALLOWED
```

### Glowing

* Menentukan apakah projectile akan memiliki efek bersinar atau tidak
* Opsi:
  * true
  * false
* Contoh:

```yaml
glowing: true
```

### Bounce

* Menentukan apakah projectile akan memantul dari entity selama entity tersebut dalam keadaan kebal.
* Opsi:
  * true
  * false
* Contoh:

```yaml
bounce: true
```

### Gravity

* Menentukan apakah projectile akan dipengaruhi gravitasi atau tidak
* Opsi:
  * true
  * false
* Contoh:

```yaml
gravity: true
```

### Velocity

* Seberapa cepat projectile akan melaju
  * <CustomTag type="version" version="1.20.5" /> Opsi ini juga berfungsi pada FIREBALL, WITHER\_SKULL, dan DRAGON\_FIREBALL: `2.0` melaju dua kali lebih cepat, `1` mempertahankan kecepatan vanilla. Sebelum 1.20.5, projectile ini mempertahankan kecepatan vanilla.
* Contoh:

```yaml
velocity: 2.0
```

:::danger
DAMAGE DARI **ARROW** AKAN DIPENGARUHI OLEH OPSI INI

Rumus: `velocity x 1 = Arrow Damage`
:::

### Particles

* Opsi ini dapat mengubah partikel apa yang ditampilkan di sekitar projectile.
 * `particlesType`: Tipe partikel 
 * `particlesAmount`: Berapa banyak partikel yang dipancarkan setiap kali                                                                 
 * `particlesOffSet`: Seberapa dekat partikel muncul dari projectile                                                                
 * `particlesSpeed`: Seberapa cepat partikel bergerak                                                                 
 * `redstoneColor`: Mengubah warna partikel redstone. [Colors](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)
 * `blockType`: Blok apa yang digunakan partikel. Hanya untuk: BLOCK\_CRACK, BLOCK\_DUST, BLOCK\_MARKER
 * `particleDensity`: Kepadatan partikel, berguna jika Anda menginginkan jejak projectile yang rapi

* Contoh:

```yaml
particles:
  1:
    particlesType: FLAME
    particlesAmount: 10
    particlesOffSet: 1
    particlesSpeed: 2
  2:
    particlesType: REDSTONE
    particlesAmount: 10
    particlesOffSet: 0.2
    particlesSpeed: 0.5
    redstoneColor: GRAY
  3:
    particlesType: BLOCK_DUST
    particlesAmount: 10
    particlesOffSet: 1.0
    particlesSpeed: 1.0
    particlesDelay: 1
    blockType: SPONGE
```

### Despawn delay

* Berapa lama umur projectile dalam detik. (Mendukung desimal)
* Contoh:

```yaml
despawnDelay: 10
```

### Knockback strength

* Seberapa kuat knockback yang diberikan projectile kepada targetnya
* Rumus:

`Knockback strength x 3` = Jumlah blok target terpental ke belakang
```yaml
knockbackStrengt: 1
```

### Remove when hit block

* Menentukan apakah projectile menghilang saat mengenai blok
* Opsi:
  * true
  * false
* Contoh:

```yaml
removeWhenHitBlock: true
```

## **Informasi Kustom**

* Semua informasi berikut dibatasi oleh tipe projectile.

### Visual item:

* Opsi ini memberi Anda kemampuan untuk menyamarkan projectile dengan sebuah item
* Projectile yang tersedia:
* **EGG**
* **ENDER\_PEARL**
* **SNOWBALL**

Contoh:

```yaml
visualItem: diamond_sword
```

:::info
visualItem kompatibel dengan custom head dan penambahan tekstur pada head tersebut
:::

#### Custom model data

* Visual item juga mendukung custom model data dari item.

```yaml
customModelData: 37
```

#### Item Model

* Sejak 1.21.2, Anda dapat mengedit item Model dari projectile.

```yaml
itemModel: mypack:mymodel
```

### Arrow

#### Critical

* Menentukan apakah projectile **ARROW** akan meninggalkan jejak partikel critical
* Opsi:
  * true
  * false
* Contoh:

```yaml
critical: true
```

:::info
Hanya untuk projectile ARROW
:::

#### Damage

* Seberapa besar damage yang diberikan arrow
* Rumus:

`<Damage> x 3` = Damage arrow 

* Default: -1
* Contoh:

```yaml
damage: 10.0
```

:::info
Jangan gunakan nilai negatif, tidak akan ada yang berubah.
:::

#### Pierce level

* Berapa banyak mob yang terkena dalam satu projectile sebelum projectile tersebut menghilang
* Rumus:

`<PierceLevel> + 1` = Jumlah mob yang akan terkena

* Jika nilainya diatur ke -1, projectile akan menghilang setelah mengenai 1 mob.
* Contoh:

```yaml
pierceLevel: 4
```

#### Active color | Color

* **Active color** diatur ke **true** memungkinkan pengeditan Color. [Colors](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)

```yaml
activeColor: true
```

* Ini adalah warna yang akan dipancarkan arrow

```yaml
color: AQUA
```

#### Silent

* Menentukan apakah arrow akan mengeluarkan suara
* Opsi:
  * true
  * false
* Contoh:

```yaml
silent: true
```

#### Hit sound

<CustomTag type="paper" />
* Mengonfigurasi suara yang akan dikeluarkan saat arrow mengenai sesuatu. [Sounds](https://jd.papermc.io/paper/1.21.8/org/bukkit/Sound.html)
* Berfungsi untuk ARROW, TRIDENT, dan SPECTRAL\_ARROW

* Contoh:

```yaml
hitSound: BLOCK_BELL_USE
```

### Wither skull

#### Charged

* Menentukan apakah wither\_skull bermuatan atau tidak
* Opsi:
  * true
  * false
* Contoh:

```yaml
charged: true
```

### Fireball

#### Radius

* Radius ledakan
* Contoh

```yaml
radius: 3
```

#### Incendiary

* Menentukan apakah projectile fireball akan menyebabkan api atau tidak saat mengenai sesuatu
* Opsi:
  * true
  * false
* Contoh:

```yaml
incendiary: true
```

### Firework

**Lifetime**

* Berapa lama firework dapat bertahan sebelum menghilang (seperti jumlah gunpowder yang digunakan)
* Contoh:

```yaml
lifeTime: 3
```

**fireworkExplosions:**

* Pengaturan warna ledakan firework
* Contoh:

```yaml
fireworkExplosions:
    explosion_0:
      colors:
      - RGB-94-84-214
      fadeColors:
      - RGB-1-2-33
      type: BALL_LARGE
      hasTrail: true
      hasTwinkle: true
```

Untuk warna, Anda dapat menggunakan [nama warna](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html) biasa atau `RGB-<0-255>-<0-255>-<0-255>`

## Konfigurasi YML

* Ada beberapa fitur yang belum dapat diedit di dalam game

### Enchantments (TRIDENT)

<CustomTag type="version" version="1.16.4" />
* Memungkinkan Anda memberi enchantment pada trident.

```yaml
enchantments:
 enchantment1:
   enchantment: unbreaking
   level: 1
 enchantment3:
   enchantment: mending
   level: 1
```

### Potion effects (Splash potion)

* Memungkinkan Anda mengedit efek dari splash potion. [Potion effects](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)

```yaml
potionEffects:
 1:
  potionEffectType: SPEED
  duration: 20
  amplifier: 2
 2:
  potionEffectType: INCREASE_DAMAGE
  duration: 10
  amplifier: 4
```

## Konfigurasi YAML Lengkap

```yaml
type: TRIDENT
customNameVisible: false
customName: "Trident2"
visualFire: true
invisible: false
pickupStatus: DISALLOWED
glowing: true
critical: false
bounce: true
gravity: true
damage: -1
velocity: 1
knockbackStrength: -1
pierceLevel: -1
despawnDelay: 3
removeWhenHitBlock: false
enchantments:
  enchantment1:
    enchantment: unbreaking
    level: 1
  enchantment3:
    enchantment: mending
    level: 1
particles:
  1:
    particlesType: WATER_BUBBLE
    particlesAmount: 10
    particlesOffSet: 0.5
    particlesSpeed: 0.3
    particlesDelay: 1
#visualItem: DIAMOND_SWORD
#customModelData: 5
#critical: true
#charged: true
#radius: 3
#incendiary: true
#lifeTime: 3
#fireworkExplosions:
#    explosion_0:
#      colors:
#      - RGB-94-84-214
#      fadeColors:
#      - RGB-1-2-33
#      type: BALL_LARGE
#      hasTrail: true
#      hasTwinkle: true
```
