---
description: >-
  Pelajari cara menambahkan suara kustom lewat resource pack dan memutarnya
  dengan perintah PLAYSOUND di ExecutableItems, tanpa mengganti suara vanilla.
source_hash: 66cf4b862fca2e2f
translated_at: '2026-11-13T17:50:18.922Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Suara Kustom

:::info
Metode ini menambahkan suara kustom baru **tanpa** menggantikan suara vanilla yang sudah ada.
:::

Suara kustom di Minecraft dikelola melalui resource pack.

## Ikhtisar

Untuk menambahkan suara kustom ke ExecutableItems Anda, Anda perlu:
1. Membuat resource pack dengan file suara kustom Anda
2. Mengonfigurasi file sounds.json untuk mendaftarkan suara Anda
3. Menggunakan perintah /playsound di ExecutableItems untuk memutarnya

## Panduan Langkah demi Langkah

### Langkah 1: Buat Struktur Dasar Resource Pack

Pertama, buat struktur folder dasar resource pack:

```
RESOURCE_PACK/
  ├── assets/
  ├── pack.mcmeta
  └── pack.png
```

- `pack.mcmeta` - Berisi metadata resource pack (versi, deskripsi)
- `pack.png` - Ikon resource pack (opsional, tetapi disarankan)

### Langkah 2: Tambahkan Folder Namespace Kustom

Di dalam folder `assets`, buat folder namespace kustom Anda. Nama ini harus unik untuk menghindari konflik:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/    # Your custom namespace
  ├── pack.mcmeta
  └── pack.png
```

:::tip Penamaan Namespace
Pilih namespace yang deskriptif, seperti nama server atau nama plugin Anda. Contoh: `myserver`, `customitems`, `epicrpg`
:::

### Langkah 3: Buat sounds.json

Di dalam folder namespace kustom Anda, buat file `sounds.json`:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/
  │       └── sounds.json
  ├── pack.mcmeta
  └── pack.png
```

### Langkah 4: Konfigurasikan sounds.json

Edit `sounds.json` untuk mendaftarkan suara kustom Anda:

```json
{
  "epic_sword_slash": {
    "subtitle": "Epic Sword Slash",
    "sounds": [
      "customsounds:sword_slash1"
    ]
  },
  "magic_spell_cast": {
    "subtitle": "Magic Spell Cast",
    "sounds": [
      "customsounds:spell_cast1",
      "customsounds:spell_cast2"
    ]
  },
  "boss_roar": {
    "sounds": [
      "customsounds:dragon_roar"
    ]
  }
}
```

#### Penjelasan Struktur sounds.json

- **Sound ID** (misalnya, `epic_sword_slash`): Nama yang akan Anda gunakan dalam perintah
- **subtitle**: Teks opsional yang ditampilkan saat subtitle diaktifkan
- **sounds**: Array berisi path file suara (tanpa ekstensi .ogg)

:::info Path Suara
`"customsounds:sword_slash1"` berarti file tersebut berada di:
`assets/customsounds/sounds/sword_slash1.ogg`

Formatnya adalah: `namespace:path_inside_sounds_folder`
:::

### Langkah 5: Tambahkan File Suara Anda

Buat folder `sounds` di dalam namespace Anda dan tambahkan file suara .ogg Anda:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/
  │       ├── sounds.json
  │       └── sounds/
  │           ├── sword_slash1.ogg
  │           ├── spell_cast1.ogg
  │           ├── spell_cast2.ogg
  │           └── dragon_roar.ogg
  ├── pack.mcmeta
  └── pack.png
```

:::warning Persyaratan File Suara
- **Format**: Harus berformat .ogg (Ogg Vorbis)
- **Mono disarankan**: Stereo tetap berfungsi, tetapi mono lebih baik untuk audio posisional
- **Sample rate**: 44,1 kHz atau 48 kHz disarankan
- **Ukuran file**: Jaga agar file tetap kecil supaya unduhan lebih cepat
:::

### Langkah 6: Buat pack.mcmeta

Buat file `pack.mcmeta` Anda dengan format versi yang benar:

```json
{
  "pack": {
    "pack_format": 15,
    "description": "Custom sounds for MyServer"
  }
}
```

#### Versi Pack Format

| Versi Minecraft | pack_format |
|-------------------|-------------|
| 1.20.2 - 1.20.4   | 18          |
| 1.20 - 1.20.1     | 15          |
| 1.19.4            | 13          |
| 1.19 - 1.19.3     | 12          |
| 1.18 - 1.18.2     | 9           |

Cari di Google untuk versi lainnya

## Menggunakan Suara Kustom di ExecutableItems

Setelah resource pack Anda dibuat dan diterapkan, gunakan perintah PLAYSOUND:

### Penggunaan Dasar

```yaml
activators:
  sword_attack:
    option: PLAYER_ALL_CLICK
    playerCommands:
    - "minecraft:playsound customsounds:epic_sword_slash master @a"
```


### Suara Posisional

```yaml
activators:
  boss_spawn:
    option: PROJECTILE_HIT_BLOCK
    blockCommands:
    - "minecraft:playsound customsounds:boss_roar master @a %block_x% %block_y% %block_z% %world%"
    # Plays at specific coordinates
```

## Mengonversi File Audio ke OGG

Jika Anda memiliki format audio MP3, WAV, atau lainnya, Anda perlu mengonversinya ke OGG:

### Menggunakan Audacity (Gratis)

1. Unduh Audacity: https://www.audacityteam.org/
2. Buka file audio Anda
3. Opsional: Konversi ke mono (Tracks → Mix → Mix Stereo down to Mono)
4. File → Export → Export as OGG
5. Pilih pengaturan kualitas (kualitas 5-7 adalah keseimbangan yang baik)

### Menggunakan Konverter Online

- CloudConvert: https://cloudconvert.com/mp3-to-ogg
- Online-Convert: https://audio.online-convert.com/convert-to-ogg

## Men-deploy Resource Pack Anda

### Metode 1: Resource Pack Server (Disarankan)

Unggah resource pack Anda dan konfigurasikan di `server.properties`:

```properties
resource-pack=https://your-url.com/resourcepack.zip
resource-pack-sha1=<SHA1 hash>
require-resource-pack=true
```

:::tip Opsi Hosting
- Dropbox (dapatkan link langsung)
- Google Drive (gunakan konverter link unduhan)
- Server web milik sendiri
- Rilis GitHub
:::

## Pemecahan Masalah

### Suara Tidak Diputar

**Masalah**: Perintah dijalankan tetapi tidak ada suara yang diputar

**Solusi**:
1. ✅ Pastikan resource pack telah diterapkan (`/playsound` uji dengan suara vanilla)
2. ✅ Periksa bahwa file suara berformat .ogg (bukan .mp3, .wav, dll.)
3. ✅ Verifikasi sintaks sounds.json (gunakan validator JSON)
4. ✅ Periksa bahwa path file cocok persis (peka huruf besar/kecil)
5. ✅ Uji dengan `/playsound customsounds:your_sound master @s`

### Resource Pack Tidak Dimuat

**Masalah**: Resource pack server tidak terunduh untuk pemain

**Solusi**:
1. ✅ Pastikan URL resource pack adalah link unduhan langsung
2. ✅ Periksa bahwa versi format pack.mcmeta cocok dengan versi server
3. ✅ Pastikan ukuran pack di bawah 100MB (batas klien)
4. ✅ Pastikan hash SHA1 di server.properties cocok dengan file tersebut

### Suara yang Salah Diputar

**Masalah**: Suara yang diputar berbeda dari yang diharapkan

**Solusi**:
1. ✅ Periksa apakah ada Sound ID ganda di sounds.json
2. ✅ Pastikan namespace sudah benar dan menggunakan huruf kecil (customsounds: vs minecraft:)
3. ✅ Periksa kesalahan ketik pada nama file suara


## Dokumentasi Terkait

- [Resource Pack Format (Minecraft Wiki)](https://minecraft.wiki/w/Resource_Pack)
- [Activators List](/executableitems/configurations/activator-configuration/list-of-the-activators)

## Sumber Daya Tambahan

- **Unduh Audacity**: https://www.audacityteam.org/
- **Efek Suara Gratis**:
  - Freesound: https://freesound.org/
  - Zapsplat: https://www.zapsplat.com/
- **Konverter OGG**: https://cloudconvert.com/mp3-to-ogg
- **Validator JSON**: https://jsonlint.com/
