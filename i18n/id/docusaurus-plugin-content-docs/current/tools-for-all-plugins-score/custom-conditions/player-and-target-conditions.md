---
description: >-
  Kondisi Player dan Target di ExecutableItems: periksa status, posisi, izin,
  dan item pemain agar aktivator hanya berjalan saat kriteria terpenuhi.
source_hash: 5b9669d43610ab52
translated_at: '2026-11-13T17:54:51.924Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Kondisi Player & Target

## Pengaturan kondisi
Semua kondisi memiliki format yang sama, Anda memiliki:
* `{theCondition}`
* `{theCondition}Msg`: Pesan yang dikirim jika kondisi tidak valid (tanpa pesan ini, pesan error default akan dikirim, kecuali untuk aktivator LOOP dari ExecutableItems)
* `{theCondition}Cancel`: Apakah event harus dibatalkan atau tidak jika kondisi tidak valid
* `{theCondition}Cmds`: Perintah yang dijalankan jika kondisi tidak valid
* Contoh:

```yaml
playerConditions:
    ifSneaking: true
    ifSneakingMsg: "&cMy custom error message here"
    ifSneakingCancel: true
    ifSneakingCmds:
    - kill %player%
```

:::info
Untuk kondisi numerik, Anda dapat menetapkan 2 kondisi sekaligus.
Contoh: 
"Saya ingin membuat kondisi yang hanya aktif jika nilainya lebih besar dari 50 tetapi lebih kecil dari 250"
`{theCondition}: 50 < CONDITION < 250`
:::

:::info
Anda ingin menambahkan kondisi player?

Maka pada bagian aktivator, tambahkan playerConditions.

Dan tentu saja targetConditions untuk kondisi target.
:::

:::info
**INFO GIF:** Aktivator yang digunakan pada GIF untuk mendemonstrasikan cara kerja setiap kondisi adalah aktivator LOOP, itulah sebabnya pesan error kondisi muncul beberapa kali.
:::

### ifSneaking - Not

* Deskripsi: Memeriksa apakah pemain sedang sneaking
* Contoh:

```yaml
playerConditions:
    ifSneaking: false
    ifSneakingMsg: '' #<- Here is where you will add the custom message.
    ifNotSneaking: true
    ifNotSneakingMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika pemain (tidak) sedang sneaking, aktivator akan aktif.
  * Jika pemain sedang terbang dan turun dengan menekan tombol sneak, aktivator akan aktif. untuk ifSneaking
* Wajib: TIDAK (Default: false)

![](https://media.ssomar.com/m/docs-img-giphy-sygm0wxk3y1c0u4u3d.gif)

:::danger
Jangan aktifkan ifNotSneaking jika kondisi ifSneaking diaktifkan, karena tidak masuk akal mengaktifkan keduanya
:::

### ifSprinting - Not

* Deskripsi: Memeriksa apakah pemain sedang sprinting
* Contoh:

```yaml
playerConditions:
    ifSprinting: false
    ifSprintingMsg: '' #<- Here is where you will add the custom message.
    ifNotSprinting: false
    ifNotSprintingMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika pemain (tidak) sedang sprinting, aktivator akan aktif.
* Wajib: TIDAK (Default: false)

### ifFlying - Not

* Deskripsi: Memeriksa apakah pemain sedang terbang
* Contoh:

```yaml
playerConditions:
    ifFlying: false
    ifFlyingMsg: '' #<- Here is where you will add the custom message.
    ifNotFlying: false
    ifNotFlyingMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika pemain mengaktifkan mode terbang dengan menekan tombol lompat dua kali dan (tidak) terbang, aktivator akan aktif.
* Wajib: TIDAK (Default: false)

![](https://media.ssomar.com/m/docs-img-giphy-gqp59l3zk78sas94uo.gif)

### ifBlocking - Not

* Deskripsi: Memeriksa apakah pemain memegang perisai dan mengeklik kanan padanya (memblokir)
* Contoh:

```yaml
playerConditions:
    ifBlockng: false
    ifBlockingMsg: '' #<- Here is where you will add the custom message.
    ifNotBlockng: false
    ifNotBlockingMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika pemain (tidak) sedang memblokir dengan perisai, aktivator akan aktif
* Wajib: TIDAK (Default: false)

![](https://media.ssomar.com/m/docs-img-giphy-xihlvwpznviu4c7786.gif)

### ifGliding - Not

* Deskripsi: Memeriksa apakah pemain sedang gliding
* Contoh:

```yaml
playerConditions:
    ifGliding: false
    ifGlidingMsg: '' #<- Here is where you will add the custom message.
    ifNotGliding: false
    ifNotGlidingMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika pemain (tidak) meluncur di udara dengan elytra, aktivator akan aktif.
* Wajib: TIDAK (Default: false)

![](https://media.ssomar.com/m/docs-img-giphy-f3px7d1awbudmrj0va.gif)

### ifSwimming - Not

* Deskripsi: Memeriksa apakah pemain sedang berenang (Update Aquatic 1.13)
* Contoh:

```yaml
playerConditions:
    ifSwimming: false
    ifSwimmingMsg: '' #<- Here is where you will add the custom message.
    ifNotSwimming: false
    ifNotSwimmingMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika pemain melompat ke dalam air dan mulai berenang dengan posisi gaya bebas, aktivator akan aktif.
* Wajib: TIDAK (Default: false)

![](https://media.ssomar.com/m/docs-img-giphy-1cfambqwl4j9mmrpbg.gif)

### ifStunned - Not

* Deskripsi: Memeriksa apakah pemain sedang stunned
* Contoh:

```yaml
playerConditions:
    ifStunned: false
    ifStunnedMsg: '' #<- Here is where you will add the custom message.
    ifNotStunned: false
    ifNotStunnedMsg: ''
```

:::info
Anda dapat membuat pemain stunned dengan menjalankan perintah pemain kustom **STUN\_ENABLE** 
:::

```
// Example of a stun of 5 seconds
- STUN_ENABLE
- DELAY 5
- STUN_DISABLE
```

* Wajib: TIDAK (Default: false)

### ifIsOnFire - Not

* Deskripsi: Memeriksa apakah pemain sedang terbakar
* Contoh:

```yaml
playerConditions:
    ifIsOnFire: false
    ifIsOnFireMsg: '' #<- Here is where you will add the custom message.
    ifIsNotOnFire: false
    ifIsNotOnFireMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika pemain (tidak) terbakar karena jatuh ke lava / berjalan di atas api, aktivator akan aktif
* Wajib: TIDAK (Default: false)

### ifIsInTheAir - Not

* Deskripsi: Memeriksa apakah pemain berada di udara.
* Contoh:

```yaml
playerConditions:
    ifIsInTheAir: false
    ifIsInTheAirMsg: '' #<- Here is where you will add the custom message.
    ifIsNotInTheAir: false
    ifIsNotInTheAirMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika pemain (tidak) memiliki blok di bawah kakinya, aktivator akan aktif.
* Wajib: TIDAK (Default: false)

![Kondisi ini akan memeriksa blok di bawah kaki Anda. Slab juga diperiksa dengan benar.](https://media.ssomar.com/m/docs-img-giphy-djjtjpzl1pmkbjnqvu.gif)

### ifLineOfSight

* Deskripsi: Memeriksa apakah pemain memiliki garis pandang ke makhluk hidup (dalam jarak 50 blok).
* Contoh:

```yaml
playerConditions:
    ifLineOfSight: true
    ifLineOfSightMsg: ''
```

* Contoh situasi:
  * Jika pemain menatap langsung ke mob atau pemain lain dalam jarak 50 blok, aktivator akan aktif.
  * Berguna untuk membuat item yang hanya berfungsi saat membidik sebuah entity.
* Wajib: TIDAK (Default: false)

:::info
Kondisi ini membutuhkan versi server **1.14+**.
:::

### ifPlayerMustBeOnHisTown

* **MENDUKUNG PLUGIN BERIKUT:**
  * Towny
* Deskripsi: Memeriksa apakah pemain berada di town miliknya.
* Contoh:

```yaml
playerConditions:
    ifPlayerMustBeOnHisTown: true
    ifPlayerMustBeOnHisTownMsg: '' #<- Here is where you will add the custom message.
```

* Wajib: TIDAK (Default: false)

### ifPlayerMustBeOnHisClaim

* **MENDUKUNG PLUGIN BERIKUT:**
  * GriefPrevention
  * Lands
  * GriefDefender
  * Residence
* Deskripsi: Memeriksa apakah pemain berada di claim yang ia memiliki izin di dalamnya.
* Contoh:

```yaml
playerConditions:
    ifPlayerMustBeOnHisClaim: true
    ifPlayerMustBeOnHisClaimMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika pemain berada di claim miliknya, aktivator akan aktif.
  * Jika pemain berada di claim yang bukan miliknya tetapi ia memiliki izin, aktivator akan aktif.
* Wajib: TIDAK (Default: false)

### ifPlayerMustBeOnHisClaimOrWilderness

* **MENDUKUNG PLUGIN BERIKUT:**
  * GriefPrevention (mengembalikan valid jika pemain berada di claim publik GriefPrevention)
  * Lands
  * GriefDefender
  * Residence
* Deskripsi: Memeriksa apakah pemain berada di claim yang ia memiliki izin di dalamnya atau di wilderness.
* Contoh:

```yaml
playerConditions:
    ifPlayerMustBeOnHisClaimOrWilderness: true
    ifPlayerMustBeOnHisClaimOrWildernessMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika pemain berada di claim miliknya, aktivator akan aktif.
  * Jika pemain berada di claim yang bukan miliknya tetapi ia memiliki izin, aktivator akan aktif.
  * Jika pemain berada di wilderness, aktivator akan aktif.
* Wajib: TIDAK (Default: false)

### ifPlayerMustBeOnHisIsland

* Deskripsi: Memeriksa apakah pemain berada di island miliknya.
* **Plugin yang kompatibel:**
  * **IridiumSkyblock**
  * **SuperiorSkyblock2**
  * **BentoBox**
* Contoh:

```yaml
playerConditions:
    ifPlayerMustBeOnHisIsland: true
    ifPlayerMustBeOnHisIslandMsg: '' #<- Here is where you will add the custom message
```

* Contoh situasi:
  * Jika pemain berada di island miliknya, aktivator akan aktif.
* Wajib: TIDAK (Default: false)

### ifPlayerMustBeOnHisPlot

* **MENDUKUNG PLUGIN BERIKUT:**
  * PlotSquared
* Deskripsi: Memeriksa apakah pemain berada di plot yang ia memiliki izin di dalamnya.
* Contoh:

```yaml
playerConditions:
    ifPlayerMustBeOnHisPlot: true
    ifPlayerMustBeOnHisPlotMsg: '' #<- Here is where you will add the custom message
```

* Wajib: TIDAK (Default: false)

### ifCursorDistance

* Deskripsi: Memeriksa apakah arah yang dilihat pemain kosong atau terhalang
* Contoh:

```yaml
 playerConditions:
  ifCursorDistance: '>5'
  ifCursorDistanceMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Pada `">5"`, selama ada udara di luar jarak 5 blok di depan Anda, aktivator akan aktif
  * Pada `"<5"`, jika ada blok udara 5 blok di depan Anda, aktivator tidak akan aktif
* Wajib: TIDAK

![](https://media.ssomar.com/m/docs-img-giphy-mke7zyoe63jbpg2239.gif)

### ifLightLevel <a href="#iflightlevel" id="iflightlevel"></a>

* Deskripsi: Memeriksa apakah pemain berada di tempat dengan level cahaya yang sesuai
* Contoh:

```yaml
playerConditions:
  ifLightLevel: ==5
  ifLightLevelMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika nilainya `<5`, aktivator hanya akan aktif jika level cahaya di lokasi pemain di bawah 5
  * Jika nilainya `<=5`, aktivator hanya akan aktif jika level cahaya di lokasi pemain 5 ke bawah.
  * Jika nilainya `==13`, aktivator hanya akan aktif jika level cahaya di lokasi pemain adalah 13.
  * Jika nilainya `>5`, aktivator hanya akan aktif jika level cahaya di lokasi pemain di atas 5.
  * Jika nilainya `>=5`, aktivator hanya akan aktif jika level cahaya di lokasi pemain 5 ke atas.
* Wajib: TIDAK
* Info lebih lanjut: Anda dapat mengedit pesan error dengan menambahkan ini di file: `ifLightLevelMsg: "&4&lError you need...."` atau di dalam game.

​Jika nilainya `==13`, aktivator hanya akan aktif jika level cahaya di lokasi pemain adalah 13. 

![Jika nilainya ==13, aktivator hanya akan aktif jika level cahaya di lokasi pemain adalah 13. 
Pesan di chat menjalankan SENDMESSAGE %player\_light\_level% untuk menunjukkan level cahaya di lokasi saya](https://media.ssomar.com/m/docs-img-giphy-krdtyjimugaf88pewk.gif)

### ifPlayerExp

* Deskripsi: Memeriksa apakah pemain memiliki jumlah experience point yang disebutkan.
* Contoh:

```yaml
playerConditions:
    ifPlayerExp: <8
    ifPlayerExpMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika nilainya `<120`, aktivator hanya akan aktif jika experience point pemain di bawah 120
  * Jika nilainya `<=96`, aktivator hanya akan aktif jika experience point pemain 96 ke bawah.
  * Jika nilainya `==13`, aktivator hanya akan aktif jika experience point pemain adalah 13.
  * Jika nilainya `>696`, aktivator hanya akan aktif jika experience point pemain di atas 696.
  * Jika nilainya `>=45`, aktivator hanya akan aktif jika experience point pemain 45 ke atas.
* Wajib: TIDAK

### ifPlayerLevel

* Deskripsi: Memeriksa apakah pemain memiliki jumlah experience level yang disebutkan.
* Contoh:

```yaml
playerConditions:
    ifPlayerLevel: <76
    ifPlayerLevelMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika nilainya `<700`, aktivator hanya akan aktif jika experience point pemain di bawah 700
  * Jika nilainya `<=1296`, aktivator hanya akan aktif jika experience point pemain 1296 ke bawah.
  * Jika nilainya `==153`, aktivator hanya akan aktif jika experience point pemain adalah 5.
  * Jika nilainya `>420`, aktivator hanya akan aktif jika experience point pemain di atas 420.
  * Jika nilainya `>=99`, aktivator hanya akan aktif jika experience point pemain 99 ke atas.
* Wajib: TIDAK

### ifPlayerFoodLevel

* Deskripsi: Memeriksa apakah pemain memiliki jumlah makanan yang disebutkan
* Contoh:

```yaml
playerConditions:
    ifPlayerFoodLevel: '>=12'
    ifPlayerFoodLevelMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika nilainya `<10`, aktivator hanya akan aktif jika makanan pemain di bawah 10
  * Jika nilainya `<=10`, aktivator hanya akan aktif jika makanan pemain 10 ke bawah.
  * Jika nilainya `==10`, aktivator hanya akan aktif jika makanan pemain adalah 10.
  * Jika nilainya `>10`, aktivator hanya akan aktif jika makanan pemain di atas 10.
  * Jika nilainya `>=10`, aktivator hanya akan aktif jika makanan pemain 10 ke atas.
* Wajib: TIDAK

### ifPlayerHealth

* Deskripsi: Memeriksa apakah pemain memiliki jumlah health yang disebutkan
* Contoh:

```yaml
playerConditions:
    ifPlayerHealth: ==20
    ifPlayerHealthMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika nilainya `<10`, aktivator hanya akan aktif jika health pemain di bawah 10
  * Jika nilainya `<=10`, aktivator hanya akan aktif jika health pemain 10 ke bawah.
  * Jika nilainya `==10`, aktivator hanya akan aktif jika health pemain adalah 20.
  * Jika nilainya `>10`, aktivator hanya akan aktif jika health pemain di atas 10.
  * Jika nilainya `>=10`, aktivator hanya akan aktif jika health pemain 10 ke atas.
* Wajib: TIDAK

![Demo yang menunjukkan kondisi health](https://media.ssomar.com/m/docs-img-giphy-lmfxm0llvaeufjsj80.gif)

_Jika nilainya `<=10`, aktivator hanya akan aktif jika health pemain 10 ke bawah._

### ifPlayerSpeed

* Deskripsi: Memeriksa besaran kecepatan (velocity) pemain (kecepatan gerak).
* Contoh:

```yaml
playerConditions:
    ifPlayerSpeed: '>=0.1'
    ifPlayerSpeedMsg: ''
```

* Contoh situasi:
  * Jika nilainya `>=0.1`, aktivator hanya akan aktif jika pemain sedang bergerak.
  * Jika nilainya `>=0.3`, aktivator hanya akan aktif jika pemain sedang sprinting atau bergerak cepat.
  * Jika nilainya `==0`, aktivator hanya akan aktif jika pemain diam di tempat.
* Wajib: TIDAK

### ifPosX

* Deskripsi: Memeriksa apakah pemain berada pada level X yang disebutkan.
* Contoh:

```yaml
playerConditions:
    ifPosX: <76
    ifPosXMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika nilainya `<700`, aktivator hanya akan aktif jika nilai posisi X pemain di bawah 700
  * Jika nilainya `<=1296`, aktivator hanya akan aktif jika nilai posisi X pemain 1296 ke bawah.
  * Jika nilainya `==153`, aktivator hanya akan aktif jika nilai posisi X pemain adalah 5.
  * Jika nilainya `>420`, aktivator hanya akan aktif jika nilai posisi X pemain di atas 420.
  * Jika nilainya `>=99`, aktivator hanya akan aktif jika nilai posisi X pemain 99 ke atas.
* Wajib: TIDAK

### ifPosY

* Deskripsi: Memeriksa apakah pemain berada pada level Y yang disebutkan.
* Contoh:

```yaml
playerConditions:
    ifPosY: <76
    ifPosYMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika nilainya `<700`, aktivator hanya akan aktif jika nilai posisi Y pemain di bawah 700
  * Jika nilainya `<=1296`, aktivator hanya akan aktif jika nilai posisi Y pemain 1296 ke bawah.
  * Jika nilainya `==153`, aktivator hanya akan aktif jika nilai posisi Y pemain adalah 5.
  * Jika nilainya `>420`, aktivator hanya akan aktif jika nilai posisi Y pemain di atas 420.
  * Jika nilainya `>=99`, aktivator hanya akan aktif jika nilai posisi Y pemain 99 ke atas.
* Wajib: TIDAK

### ifPosZ

* Deskripsi: Memeriksa apakah pemain berada pada level Z yang disebutkan.
* Contoh:

```yaml
playerConditions:
    ifPosZ: <76
    ifPosZMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika nilainya `<700`, aktivator hanya akan aktif jika nilai posisi Z pemain di bawah 700
  * Jika nilainya `<=1296`, aktivator hanya akan aktif jika nilai posisi Z pemain 1296 ke bawah.
  * Jika nilainya `==153`, aktivator hanya akan aktif jika nilai posisi Z pemain adalah 5.
  * Jika nilainya `>420`, aktivator hanya akan aktif jika nilai posisi Z pemain di atas 420.
  * Jika nilainya `>=99`, aktivator hanya akan aktif jika nilai posisi Z pemain 99 ke atas.
* Wajib: TIDAK

### ifNearbyEntityCount

* Deskripsi: Memeriksa jumlah entity dalam radius 10 blok di sekitar pemain.
* Contoh:

```yaml
playerConditions:
    ifNearbyEntityCount: '>=3'
    ifNearbyEntityCountMsg: ''
```

* Contoh situasi:
  * Jika nilainya `>=3`, aktivator hanya akan aktif jika ada setidaknya 3 entity di dekat pemain.
  * Jika nilainya `==0`, aktivator hanya akan aktif jika pemain sendirian tanpa entity di sekitarnya.
  * Menghitung semua jenis entity (mob, pemain, item yang dijatuhkan, dll.).
* Wajib: TIDAK

### ifNearbyPlayerCount

* Deskripsi: Memeriksa jumlah pemain dalam radius 10 blok di sekitar pemain.
* Contoh:

```yaml
playerConditions:
    ifNearbyPlayerCount: '>=1'
    ifNearbyPlayerCountMsg: ''
```

* Contoh situasi:
  * Jika nilainya `>=1`, aktivator hanya akan aktif jika ada setidaknya 1 pemain lain di dekatnya.
  * Jika nilainya `==0`, aktivator hanya akan aktif jika tidak ada pemain lain dalam jarak 10 blok.
  * Berbeda dengan ifNearbyEntityCount, kondisi ini hanya menghitung pemain, bukan mob atau entity lainnya.
* Wajib: TIDAK

### ifHasPermission - Not

* Deskripsi: Memeriksa apakah pemain (tidak) memiliki izin yang disebutkan.
* Contoh:

```yaml
playerConditions:   
    ifHasPermission:
    - test.ei
    ifHasPermissionMsg: '' #<- Here is where you will add the custom message.
    ifNotHasPermission:
    - test.ei
    ifNotHasPermissionMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika pemain memiliki izin `custom.jump.yes`, aktivator akan aktif. Jika pemain tidak memiliki izin tersebut, aktivator tidak akan aktif.
  * **Kondisi yang sebenarnya tidak digunakan pada gif ini agar perilaku kondisi dapat ditampilkan dengan benar. Saat Anda benar-benar menggunakan kondisi ini, sebuah error khusus akan muncul untuk Anda**
* Wajib: TIDAK

:::warning
**Untuk mengujinya, sebaiknya jangan menjadi OP karena jika Anda OP, Anda memiliki semua izin**
:::

![](https://media.ssomar.com/m/docs-img-giphy-iti1b991tskaavjoy7.gif)

### ifHasTag - Not

* Deskripsi: Memeriksa apakah pemain memiliki tag yang dipilih.
* Contoh:

```yaml
    playerConditions:
      ifHasTag:
      - thisisthenameofmytag
      ifHasTagMsg: ''
      ifNotHasTag:
      - thisisthenameofmytag
      ifNotHasTagMsg: ''
```

### ifTargetBlock - Not

* Deskripsi: Memeriksa apakah pemain (tidak) sedang menyorot blok yang disebutkan.
* Contoh:

```yaml
playerConditions:
    ifTargetBlock:
    - SAND
    ifTargetBlockMsg: '' #<- Here is where you will add the custom message.
    ifNotTargetBlock:
    - DIRT
    ifNotTargetBlockMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika pemain mengarahkan kursornya ke pasir, aktivator akan aktif.
* Wajib: TIDAK

![](https://media.ssomar.com/m/docs-img-giphy-hgontsuwxflzmtgxny.gif)

### ifIsInTheBlock - Not

* Deskripsi: Memeriksa apakah pemain (tidak) berada di dalam sebuah blok.
* Contoh:

```yaml
playerConditions:
    ifIsInTheBlock:
     material0:
       material: COBWEB
    ifIsInTheBlockMsg: '' #<- Here is where you will add the custom message.
    ifIsNotInTheBlock:
     material0:
       material: WATER
       tags: '{level:0}'
    ifIsNotInTheBlockMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika pemain berada di dalam COBWEB (kepala atau kaki), aktivator akan aktif.
  * Selama pemain tidak lebih dari 1 blok lebih tinggi dari blok tempat pemain berada, aktivator akan aktif
* Wajib: TIDAK (Default: false)

Untuk spesifikasi tag, lihat daftar berikut:

[https://minecraft.fandom.com/wiki/Block_states](https://minecraft.fandom.com/wiki/Block_states)

### ifIsOnTheBlock - Not

* Deskripsi: Memeriksa apakah pemain (tidak) berdiri di atas sebuah blok.
* Contoh:

```yaml
playerConditions:
    ifIsOnTheBlock:
        blocks:
        - EXECUTABLEBLOCKS:FREE_HUT
        - DIAMOND_BLOCK
```

* Contoh situasi:
  * Jika pemain memiliki stone di bawah kakinya, aktivator akan aktif.
  * Selama pemain tidak lebih dari 1 blok lebih tinggi dari blok tempat pemain berdiri, aktivator akan aktif
* Wajib: TIDAK (Default: false)

![](https://media.ssomar.com/m/docs-img-giphy-774fpgzucmhox69sww.gif)

<details>

<summary>Anda dapat menambahkan grup blok, berikut grup-grupnya:</summary>

```
    ALL_CHESTS,
    ALL_FURNACES,
    ALL_PLANKS,
    ALL_LOGS,
    ALL_WOODS,
    ALL_ORES,
    ALL_WOOLS,
    ALL_SLABS,
    ALL_STAIRS,
    ALL_FENCES,
    ALL_SAPLINGS,
    ALL_CROPS,
    ALL_DOORS,
    ALL_TRAPDOORS,
    ALL_BEDS,
    ALL_TERRACOTTA,
    ALL_NORMAL_TERRACOTTA,
    ALL_GLAZED_TERRACOTTA,
    ALL_CONCRETE,
    ALL_GLASS,
    ALL_STAINED_GLASS,
    ALL_SHULKER_BOXES;
```

</details>

Untuk spesifikasi tag, lihat daftar berikut:

[https://minecraft.fandom.com/wiki/Block_states](https://minecraft.fandom.com/wiki/Block_states)

:::info
Mendukung blok IA dan EB
:::

### ifPlayerMounts - Not

* Deskripsi: Memeriksa apakah pemain (tidak) sedang menunggangi "entity yang dipilih"
* Contoh:

```yaml
playerConditions:
    ifPlayerMounts:
    - COW
    - SILVERFISH
    - FOX
    ifPlayerMountsMsg: '&4&l&o[ExecutableItems] &cYou must mount on a specific entity to active the activator: &6%activator% &cof this item!'
    
    ifPlayerNotMounts:
    - PIG
    ifPlayerNotMountsMsg: '&4&l&o[ExecutableItems] &cdont mount pigs'
```

### ifInBiome - Not

* Deskripsi: Memeriksa apakah pemain (tidak) berada di biome yang disebutkan.
* Contoh:

```yaml
playerConditions:
    ifInBiome:
    - TAIGA
    - EXTREME_HILLS
    ifInBiomeMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInBiome:
    - EXTREME_HILLS
    ifNotInBiomeMsg: '' #<- Here is where you will add the custom message.
```

*   Contoh situasi:

    * Jika pemain berada di Birch Forest Biome dan Birch Forest Biome terdaftar dalam daftar world pada kondisi `ifInBiome:`, aktivator akan aktif.

[Biome](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html)

* Wajib: TIDAK

![](https://media.ssomar.com/m/docs-img-giphy-heszwx2lktnut8abdx.gif)

### ifInRegion - Not

* Deskripsi: Memeriksa apakah pemain (tidak) berada di region yang disebutkan (WorldGuard Region).
* Contoh:

```yaml
playerConditions:
    ifInRegion:
    - area1
    ifInRegionMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInRegion:
    - mySpawnRegion
    ifNotInRegionMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika pemain berada di region "area1" dan region "area1" terdaftar dalam daftar world pada kondisi `ifInRegion:`, aktivator akan aktif.
* Wajib: TIDAK

![](https://media.ssomar.com/m/docs-img-giphy-rn75fb0fgshrjizbce.gif)

### ifInWorld - Not

* Deskripsi: Memeriksa apakah pemain (tidak) berada di world yang disebutkan.
* Contoh:

```yaml
playerConditions:
    ifInWorld:
    - world_nether
    ifInWorldMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInWorld:
    - world_the_end
    ifNotInWorldMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika pemain berada di nether dan nether terdaftar dalam daftar world pada kondisi `ifInWorld:`, aktivator akan aktif.
* Wajib: TIDAK

![](https://media.ssomar.com/m/docs-img-giphy-zghtf0hlk1npsywmnz.gif)

### ifPlayerHasEffect

* Deskripsi: Memeriksa apakah pemain memiliki efek tersebut.
* Contoh:

```yaml
playerConditions:
    ifPlayerHasEffect:
    - "SPEED:0"        <- (Format: "EFFECT:MINIMAL_REQUIRED_AMPLIFIER") 
    ifPlayerHasEffectMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika pemain memiliki speed dengan **amplifier minimal 0**, aktivator akan aktif
* Daftar semua efek: [PotionEffectType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
* Wajib: TIDAK


### ifPlayerNotHasEffect

* Deskripsi: Memeriksa apakah pemain tidak memiliki efek tersebut.
* Contoh:

```yaml
playerConditions:
    ifPlayerNotHasEffect:
    - SPEED:2 # if the player has speed 1 = okay, but if has speed 2 or above, invalid
    ifPlayerNotHasEffectMsg: '&4&l&o[ExecutableItems] &cYou have an effect that you shouldn''t have to active the activator: &6%activator% &cof this item!'
    ifPlayerNotHasEffectCE: false
```

### ifCanBreakTargetedBlock

* Deskripsi: Memeriksa apakah pemain dapat menghancurkan blok yang ditargetkan. Jika aktivator memiliki sebuah blok (block break, block place, klik pada blok…), blok itulah yang diperiksa; jika tidak, blok yang sedang dilihat pemain (maksimal 5 blok).
* Contoh:

```yaml
playerConditions:
    ifCanBreakTargetedBlock: true
```

:::info
Mendukung GriefPrevention, IridiumSkyblock, SuperiorSkyblock, BentoBox, Lands, Worldguard, Towny, ProtectionStones; Residence
:::

### ifPlayerHasEffectEquals

* Deskripsi: Memeriksa apakah pemain memiliki efek tersebut. **HARUS MEMILIKI AMPLIFIER YANG PERSIS SAMA**
* Contoh:

```yaml
playerConditions:
    ifPlayerHasEffectEquals:
    - "SPEED:1"        #<- (Format: "EFFECT:REQUIRED_AMPLIFIER") 
    ifPlayerHasEffectEqualsMsg: '' #<- Here is where you will add the custom message.
```

* Contoh situasi:
  * Jika pemain memiliki speed dengan **amplifier 1**, aktivator akan aktif
* Daftar semua efek: [PotionEffectType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
* Wajib: TIDAK


### ifPlayerHasExecutableItems - Not

* Deskripsi: Memeriksa apakah pemain (tidak) memiliki ExecutableItems yang disebutkan.
* Contoh:

```yaml
playerConditions:
      ifHasExecutableItems:
        condition1:
          multi-choices:
            '1':
              executableItem: test1
              amount: 1
              detailedSlots:
              - 38
            '2':
              executableItem: test2
              amount: 1
              detailedSlots:
              - 38
            '3':
              executableItem: test3
              amount: 1
              detailedSlots:
              - 38
        condition2:
          executableItem: ddx
          amount: 1
          detailedSlots:
          - 40
      ifHasExecutableItemsMsg: war
      ifHasNotExecutableItems:
        hasExecutableItem0:
          executableItem: Leto2025_Srdcova10
          amount: 1
          detailedSlots: []
      ifHasNotExecutableItemsMsg: famine
```

* Contoh di atas bekerja seperti ini. 
  * Anda harus memiliki item ei dengan id "test1", "test2" atau "test3" di slot 38, maka aktivator berjalan
  * Anda harus memiliki item ei dengan id "ddx" di slot 40
* Wajib: TIDAK

![](https://media.ssomar.com/m/docs-img-imgur-kaww8n0.png)

:::info
Salin indeks dari contoh dengan benar, beberapa orang telah meminta dukungan, dan semuanya tidak menyalin formatnya dengan benar.
:::

### ifPlayerHasItem - Not

* Deskripsi: Memeriksa apakah pemain memiliki item tertentu
* Contoh:

```yaml
playerConditions:
    ifHasItems:
        condition1:
          multi-choices:
            '1':
              material: DIAMOND_HELMET
              amount: 1
              detailedSlots:
              - 39
            '2':
              material: IRON_HELMET
              amount: 1
              detailedSlots:
              - 39
        condition2:
          material: DIAMOND_CHESTPLATE
          amount: 1
          detailedSlots:
          - 38
    ifHasItemMsg: '' #<- Here is where you will add the custom message.
    
    ifHasNotItems:
        hasItem0:
          material: STONE
          amount: 32
          detailedSlots:
          - -1 #<- -1 means main hand
    ifHasNotItemMsg: '&cYou should not have more than 32 stones in your main hand !'
```

* Contoh situasi:
  * Jika diamond helmet berada di slot 39, aktivator akan aktif
* Wajib: TIDAK
