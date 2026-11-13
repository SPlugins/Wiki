---
description: >-
  Pelajari cara menampilkan dan menghapus partikel SCore, pengaturan umum, serta
  parameter semua bentuk partikel yang tersedia di plugin SCore.
source_hash: ed81d3ba4c1a5e8c
translated_at: '2026-11-13T17:55:28.003Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ✨    Partikel SCore

<iframe width="560" height="315" src="https://www.youtube.com/embed/_GavkHnQcvg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Score menyertakan banyak bentuk partikel siap pakai dari library XParticle dan beberapa bentuk kustom lainnya. 

## Cara menampilkan partikel

Perintah untuk menampilkan partikel adalah `/score particles`

Anda harus memilih sebuah bentuk dan mengonfigurasi perintah dengan benar agar mendapatkan hasil yang Anda inginkan.

### Cara menghapus partikel yang ditampilkan

Perintah untuk menghapus partikel yang ditampilkan adalah `/score clear {player} PARTICLES` 

## Pengaturan umum untuk semua bentuk

### Menentukan titik spawn

Untuk menentukan di mana bentuk akan ditampilkan, Anda memiliki dua pilihan: menyebutkan lokasi secara langsung atau menetapkan UUID entity. 

#### Menggunakan UUID Player/Entity

Saat Anda memutuskan untuk menggunakan UUID entity, **bentuk akan mengikuti Player/Entity jika ia bergerak**. Jadi bentuk bisa menjadi terdeformasi atau menghasilkan efek yang keren.

```css
target:{uuid of the target}
/* Example using flat UUID */
target:b33183ad-e9c0-4d48-8eea-f8c9358d3568
/* Example using a placeholder */
target:%player_uuid%
```

:::danger
Anda harus menentukan UUID dari seorang player atau sebuah entity. Nama player tidak berfungsi !
:::

#### Menggunakan lokasi tertentu

Dengan menggunakan lokasi, Anda yakin bahwa bentuk tidak akan terdeformasi, dan akan tetap statis.

```css
location:{world},{x},{y},{z}
/* Example using flat location */
location:world,100,50,500
/* Example using placeholders */
location:%player_world%,%player_x%,%player_y%,%player_z%
```

### Definisi partikel

#### Tipe partikel

Menentukan partikel yang digunakan oleh bentuk. Secara default, partikelnya adalah FLAME.

```css
particle:{the particle type}
/* Example */
particle:CLOUD
```

Daftar partikel yang tersedia ada di sini: [Daftar partikel Spigot ](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html)

#### Warna

**Sebagai ganti** menggunakan `particle:{particle name}`  jika Anda ingin menggunakan partikel REDSTONE / DUST, Anda bisa langsung menggunakan pengaturan color dengan [warna kustom](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html).

Anda bisa menetapkan dua warna yang dipisahkan oleh , untuk mendapatkan transisi warna.

```css
color:{color Name}
/* Example one color */
color:RED
/* Example two colors with transition */
color:AQUA,BLUE
```

Anda juga bisa menggunakan nilai RGB untuk memakai warna kustom pada partikel SCore Anda (0-255).

Contoh: `color:RGB-156-82-84`

#### Partikel blok

**Sebagai ganti** menggunakan `particle:{particle name}`  jika Anda ingin menggunakan partikel BLOCK\_CRACK / BLOCK, Anda bisa langsung menggunakan pengaturan blockdata dengan sebuah [material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

```css
blockdata:{material}
/* Example */
blockdata:LAVA
```

#### Partikel item

**Sebagai ganti** menggunakan `particle:{particle name}`  jika Anda ingin menggunakan partikel ITEM\_CRACK/ ITEM, Anda bisa langsung menggunakan pengaturan itemstack dengan sebuah [material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

```css
itemstack:{material}
/* Example */
itemstack:DIAMOND_SHOVEL
```

### Offset / Menggeser titik spawn bentuk 

Anda bisa menentukan offset ke arah tertentu. Ini memungkinkan Anda, misalnya, menampilkan bentuk di sekitar player / entity tanpa harus melakukan perhitungan yang rumit.

* offsetPitch: arah pitch ke mana offset akan diarahkan
* offsetYaw: arah yaw ke mana offset akan diarahkan
* offsetSitance: jarak offset
* offsetX: Menambah offset pada lokasi X
* offsetY: Menambah offset pada lokasi Y
* offsetZ: Menambah offset pada lokasi Z

Secara default, pengaturan ini diatur ke 0

```css
offsetPitch:{the pitch direction}
offsetYaw:{the yaw direction}
offsetDistance:{the distance}
offsetX:{x bonus}
offsetY:{y bonus}
offsetZ:{z bonus}
/* Example with flat values */
offsetPitch:0
offsetYaw:-90
offsetDistance:5
offsetY:-1
/* Example with placeholders */
offsetPitch:%player_pitch_initial%+30
offsetYaw:%player_yaw_initial%
offsetDistance:%var_myvar%
```

## Pengaturan bentuk

### Atom

Membuat sekumpulan orbit elips dengan bola partikel kecil di tengahnya, menyerupai sebuah atom.

* `orbits`: Jumlah orbit elips.
* `radius`: Radius orbit dalam blok
* `rate`: Jumlah partikel per orbit.

```yaml
# Examples that you can run manually in-game
/score particles shape:atom color:BLUE,YELLOW orbits:4 radius:5.0 rate:100 offsetY:1
/score particles shape:atom particle:CLOUD orbits:10 radius:20.5 rate:100 offsetY:1
# Examples that you can include into your commands

```

### Atomic

Versi animasi dari `atom` dengan partikel yang mengorbit.

* `orbits`: Jumlah jalur orbit.
* `radius`: Radius orbit dalam blok.
* `rate`: Kecepatan orbit.
* `time`: Durasi dalam tick.

```yaml
# Examples that you can run manually in-game**
/score particles shape:atomic orbits:15 radius:5 rate:100 offsetY:1 time:200

# Examples that you can include into your commands
```

### BlackSun

Beberapa lingkaran konsentris yang ukurannya bertambah.

* `radius`: Radius maksimum dalam blok.
* `radiusRate`: Selisih radius antar lingkaran.
* `rate`: Kepadatan partikel.
* `rateChange`: Perubahan kecepatan per lapisan.

```yaml
# Examples that you can run manually in-game
/score particles shape:blacksun radius:10 radiusRate:0.5 rate:200 rateChange:10

# Examples that you can include into your commands
```

### BlackHole

Efek pusaran partikel yang dinamis.

* `points`: Jumlah lengan spiral.
* `radius`: Jarak dari pusat.
* `rate`: Kecepatan rotasi.
* `mode`: 0 sampai 4 untuk gaya pusaran yang berbeda.
* `time`: Durasi dalam tick.

```yaml
# Examples that you can run manually in-game**
/score particles particle:SMOKE shape:blackhole points:30 radius:2.5 rate:1 mode:2 time:50

# Examples that you can include into your commands
```

### ChaoticDoublePendulum

Mensimulasikan efek pendulum ganda yang kacau.

* `radius`: Radius ayunan.
* `gravity`: Gaya gravitasi (biasanya -1).
* `length`, `length2`: Panjang pendulum.
* `mass1`, `mass2`: Massa masing-masing pendulum.
* `dimension3`: Apakah menggunakan rotasi 3D.
* `speed`: Kecepatan animasi.
* `time`: Durasi dalam tick.

```yaml
# Examples that you can run manually in-game
/score particles shape:chaoticDoublePendulum radius:2 gravity:-1 length:200 length2:200 mass1:50 mass2:50 dimension3:false speed:2 time:200
/score particles shape:chaoticDoublePendulum color:RED,YELLOW radius:1 gravity:-1 length:200 length2:2000 mass1:50 mass2:50 dimension3:true speed:2 time:200
/score particles shape:chaoticDoublePendulum particle:FLAME radius:2 gravity:5 length:200 length2:200 mass1:50 mass2:50 dimension3:false speed:2 time:200
# Examples that you can include into your commands
```

### Circle

Menampilkan lingkaran partikel.

* `radius`: radius lingkaran
* `density`: jumlah partikel per blok (semakin tinggi = semakin padat).
* `drawMode`: clockWise, counterClockWise, random
* `fillMode`: disk, spiral, ring
* `time`: waktu dalam tick untuk menganimasikan seluruh tampilan. (0 = instan)
* `directionPitch`: arah pitch lingkaran
* `directionYaw`: arah yaw lingkaran

Contoh:

```yaml
# Examples that you can include into your commands
# Display multiple Green circles in front the player
playerCommands:
- FOR [+20,-20,+40,-40,+60,-60,+80,-80,+100,-100] > for3
- score particles shape:circle location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% color:GREEN,WHITE radius:3 density:100 time:10 drawMode:clockwise offsetDistance:8 offsetPitch:0 offsetYaw:%player_yaw_initial%%for3%  directionYaw:%player_yaw_initial%%for3% fillMode:disk directionPitch:-90 offsetY:-1
- END_FOR for3
```

### CircularBeam

Sinar animasi dengan ukuran lingkaran yang berubah seiring waktu.

* `maxRadius`: Radius lingkaran maksimum dalam blok.
* `rate`: Kecepatan titik per lingkaran.
* `radiusRate`: Perubahan radius.
* `extend`: Jarak perpanjangan dalam blok.
* `time`: Durasi dalam tick.

```yaml
# Examples that you can run manually in-game
/score particles shape:circularBeam color:PURPLE maxRadius:5 rate:500 radiusRate:15 extend:1 time:100

# Examples that you can include into your commands
```

### Cone

Kerucut yang terbuat dari lingkaran-lingkaran bertumpuk.

* `height`: Tinggi kerucut.
* `radius`: Radius alas.
* `rate`: Jarak antar lingkaran.
* `circleRate`: Kepadatan titik.
* `fillMode`: mode pengisian "disk", "ring", "spiral", secara default adalah disk

```yaml
# Examples that you can run manually in-game
/score particles shape:cone color:GREEN,YELLOW height:3 radius:2 rate:0.4 circleRate:40 fillMode:ring

# Examples that you can include into your commands
```

### Crescent

Merender bulan sabit menggunakan dua lingkaran yang saling tumpang tindih.

* `radius`: ukuran busur luar.
* `rate`: resolusi kurva.
* `directionYaw`: arah bulan sabit dalam derajat

```yaml
# Examples that you can run manually in-game
/score particles shape:crescent radius:3 rate:100 directionYaw:90 color:RED,YELLOW

# Examples that you can include into your commands
```

### Cylinder

* `radius`: radius silinder
* `height`: tinggi silinder
* `density`: jumlah partikel per blok (semakin tinggi = semakin padat).
* `drawMode`: clockWise, counterClockWise, random
* `timeToDisplay`: waktu dalam tick untuk menganimasikan seluruh tampilan.
* `directionPitch`: arah pitch persegi
* `directionYaw`: arah yaw persegi

Contoh:

```yaml
# Examples that you can include into your commands
# Display two green cylinder in front of the player
- FOR [+20,-20] > for3
- score particles shape:cylinder location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% color:GREEN,WHITE radius:1 density:100 timeToDisplay:5 drawMode:clockwise offsetDistance:8 offsetPitch:0 offsetYaw:%player_yaw_initial%%for3%  directionYaw:%player_yaw_initial%%for3% directionPitch:-90 offsetY:-1 height:3
- END_FOR for3
```

### Diamond

Membuat bentuk berlian (belah ketupat) dalam 2D atau 3D.

* `radiusRate`: Mengatur lebar.
* `rate`: Jarak antar titik.
* `height`: Tinggi total.

```yaml
# Examples that you can run manually in-game
/score particles shape:diamond color:BLUE,AQUA radiusRate:0.6 rate:0.4 height:3

# Examples that you can include into your commands
```

### DNA

Menampilkan heliks ganda DNA dengan ikatan hidrogen.

* `radius`: Radius heliks.
* `rate`: Jarak antar titik.
* `extension`: Faktor peregangan heliks.
* `height`: Tinggi total.

```yaml
# Examples that you can run manually in-game
/score particles shape:dna color:BLUE,AQUA radius:10 rate:0.1 height:4 extension:15

# Examples that you can include into your commands
```

### DNA Replication

Mensimulasikan replikasi DNA dengan ikatan dan warna.

* `radius`, `rate`, `extension`, `height`: Sama seperti `DNA`.
* `speed`: Kecepatan animasi.
* `hydrogenBondDist`: Jarak antar ikatan.

```yaml
# Examples that you can run manually in-game
/score particles shape:dnaReplication color:BLUE,AQUA radius:4 rate:0.2 height:3 extension:5 hydrogenBondDist:1 speed:1

# Examples that you can include into your commands
```

### Ellipse

* `start`, `end`: Sudut awal dan akhir.
* `rate`: Jarak sudut.
* `radius`, `otherRadius`: Radius X dan Y.

```yaml
# Examples that you can run manually in-game
/score particles shape:ellipse color:BLUE,AQUA radius:3 rate:0.8 otherRadius:2 start:50 end:200 offsetY:1

# Examples that you can include into your commands
```

### ExplosionWave

Animasi bergelombang yang merepresentasikan gelombang kejut ledakan.

* `rate`: Kepadatan partikel di dalam gelombang.
* `start`: jarak awal dari pusat untuk memulai gelombang.
* `height`: amplitudo vertikal gelombang.

```yaml
# Examples that you can run manually in-game
/score particles shape:explosionWave rate:5 start:-3 height:3
/score particles shape:explosionWave rate:5 height:1 offsetY:-1
/score particles shape:explosionWave rate:10
# Examples that you can include into your commands
```

### Eye

Menggambar bentuk oval menyerupai mata.

* `radius`, `radius2`: Radius utama.
* `rate`: Resolusi.
* `extension`: Faktor pemanjangan
* `directionPitch`: arah pitch mata
* `directionYaw`: arah yaw mata

```yaml
# Examples that you can run manually in-game
/score particles shape:eye particle:INFESTED radius:2 radius2:2 extension:1 rate:100 directionYaw:-164

# Examples that you can include into your commands
```

### Heart

Menggambar hati menggunakan kurva polar.

* `cut`, `cutAngle`: Menyesuaikan lobus hati.
* `depth`: Kedalaman lekukan tengah.
* `compressHeight`: Kompresi vertikal.
* `rate`: Resolusi.
* `directionPitch`: arah pitch hati
* `directionYaw`: arah yaw hati

```yaml
# Examples that you can run manually in-game
/score particles shape:heart particle:HEART cut:4 cutAngle:2 depth:2 compressHeight:1 rate:100 offsetY:-1 directionYaw:-75

# Examples that you can include into your commands
```

### Helix

Menggambar heliks 3D beranimasi.

* `strings`: Jumlah heliks.
* `radius`: Radius heliks.
* `rate`, `extension`: Jarak dan kekuatan spiral.
* `height`: Tinggi total.
* `speed`: Kecepatan animasi.
* `fadeUp`, `fadeDown`: Perubahan radius secara bertahap.

```yaml
# Examples that you can run manually in-game
/score particles shape:helix particle:TOTEM_OF_UNDYING strings:3 radius:2.5 rate:0.1 extension:2 height:3 speed:2 fadeUp:true fadeDown:true

# Examples that you can include into your commands
```

### Illuminati

Membuat bentuk simbol tak terhingga 3D.

* `size`: Ukuran bentuk.
* `extension`: Perpanjangan mata illuminati.

```yaml
# Examples that you can run manually in-game
/score particles shape:illuminati particle:SCULK_SOUL size:5 extension:15

# Examples that you can include into your commands
```

### Infinity

### MagicCircles

Menampilkan cincin yang membesar seperti glif sihir.

* `radius`: Radius awal.
* `rate`: Jarak antar titik.
* `radiusRate`: Kecepatan pertumbuhan.
* `distance`: Jarak antar cincin.
* `time`: Durasi dalam tick.

```yaml
# Examples that you can run manually in-game
/score particles shape:magicCircles radius:1 rate:3 radiusRate:1 time:20

# Examples that you can include into your command
```

### MeguminExplosion

Efek ledakan sihir bergaya.

* `size`: Ukuran ledakan secara keseluruhan.

```yaml
# Examples that you can run manually in-game
/score particles shape:meguminExplosion color:RED size:5

# Examples that you can include into your commands
```

### Polygon

Menggambar poligon dengan koneksi internal opsional

* `points`: Jumlah sudut.
* `connection`: Berapa banyak sudut yang dihubungkan.
* `size`: Radius poligon.
* `rate`: Resolusi.
* `extend`: Faktor perpanjangan koneksi.

```yaml
# Examples that you can run manually in-game
/score particles shape:polygon points:5 connection:5 size:5 rate:1 extend:1

# Examples that you can include into your commands
```

### Rainbow

Menampilkan busur pelangi bertumpuk dengan lapisan berwarna.

* `radius`: Radius pelangi
* `rate`: Kecepatan titik, semakin tinggi = semakin banyak titik
* `curve`: Lengkungan, 1 untuk ke atas dan -1 untuk ke bawah
* `layers`: Jumlah busur.
* `compact`: Mengurangi jarak antar busur.

```yaml
# Examples that you can run manually in-game
/score particles shape:rainbow radius:3 rate:100 curve:2 layers:1 compact:1

# Examples that you can include into your commands
```

### Ring

Menggambar cincin datar (annulus).

* `radius`: Radius cincin.
* `density`: Kepadatan partikel.
* `time`: Durasi tampilan dalam tick.
* `drawMode`: Urutan menggambar: clockWise, counterClockWise atau random
* `directionPitch`: arah pitch lingkaran
* `directionYaw`: arah yaw lingkaran

```yaml
# Examples that you can run manually in-game
/score particles particle:SONIC_BOOM shape:ring radius:5 density:100 time:0

# Examples that you can include into your commands
```

### Sphere

Menggambar bola 3D penuh.

* `radius`: Radius bola.
* `rate`: Kepadatan titik

```yaml
# Examples that you can run manually in-game
/score particles particle:SNEEZE shape:sphere radius:5 rate:30

# Examples that you can include into your commands
```

### SpikeSphere

Menggambar bola dengan duri acak.

* `radius`, `rate`: Parameter bola dasar.
* `chance`: Peluang munculnya duri.
* `minRandomDistance`, `maxRandomDistance`: Rentang panjang duri.

```yaml
# Examples that you can run manually in-game
/score particles particle:GLOW shape:spikeSphere radius:4 rate:20 chance:30 minRandomDistance:2 maxRandomDistance:4

# Examples that you can include into your commands
```

### Square

* `height`: tinggi dalam blok sepanjang sumbu vertikal.
* `length`: panjang dalam blok sepanjang vektor arah.
* `width`: lebar dalam blok tegak lurus terhadap arah dinding.
* `density`: jumlah partikel per blok (semakin tinggi = semakin padat).
* `timeToDisplay`: waktu dalam tick untuk menganimasikan seluruh tampilan.
* `drawMode`: "vertical" atau "horizontal", mengatur urutan iterasi.
* `verticalOrder`: "up" atau "down", urutan sepanjang tinggi.
* `horizontalOrder`: "near" atau "far", urutan sepanjang panjang.
* `directionPitch`: arah pitch persegi
* `directionYaw`: arah yaw persegi

```yaml
# Examples that you can run manually in-game
...

# Examples that you can include into your commands
playerCommands:
# A line of explosion
- score particles shape:square location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% particle:EXPLOSION height:1 length:30 timeToDisplay:20 density:1 directionYaw:%player_yaw_initial% directionPitch:%player_pitch_initial% verticalOrder:up horizontalOrder:near offsetY:-1
# A wall of flame
- score particles shape:square location:%player_world_initial%,%player_x_initial%,%player_y
```

### Star

Membuat bintang 3D dengan duri beranimasi.

* `points`: Jumlah sisi dasar.
* `spikes`: Jumlah ujung bintang.
* `rate`: Berapa kali titik ditampilkan
* `spikeLength`: Panjang ujung.
* `coreRadius`: Radius inti.
* `neuron`: Kelengkungan ujung.
* `prototype`: Menggunakan heliks sebagai ganti garis.
* `speed`: Kecepatan animasi.

```yaml
# Examples that you can run manually in-game
/score particles shape:star points:5 spikes:5 rate:20 spikeLength:20 coreRadius:4 speed:1 neuron:3

# Examples that you can include into your commands
```

### Tesseract

Menggambar tesseract

* `size`: Ukuran keseluruhan.
* `rate`: Kepadatan.
* `speed`: kecepatan.
* `time`: Waktu tampilan.

```yaml
# Examples that you can run manually in-game
/score particles shape:tesseract size:3 rate:100 speed:2 time:200 offsetY:2 particle:END_ROD

# Examples that you can include into your commands
```

### Vortex

Efek spiral seperti galaksi atau tornado.

* `points`: Jumlah lengan spiral.
* `rate`: Kecepatan rotasi.
* `time`: Durasi.

```yaml
# Examples that you can run manually in-game
/score particles shape:vortex particle:ENCHANT points:5 rate:25 time:100 offsetY:2

# Examples that you can include into your commands
```
