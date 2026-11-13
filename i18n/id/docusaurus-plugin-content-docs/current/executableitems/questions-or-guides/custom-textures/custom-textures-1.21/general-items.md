---
description: >-
  Panduan membuat tekstur item kustom di Minecraft 1.13 hingga 1.21.3 dengan
  Custom Model Data dan resource pack untuk plugin ExecutableItems.
source_hash: 0009e0522a21f996
translated_at: '2026-11-13T17:50:52.023Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Tekstur Item Kustom (Minecraft 1.13 - 1.21.3)

Panduan lengkap ini akan mengajarkan Anda cara membuat tekstur kustom untuk item di Minecraft versi 1.13 hingga 1.21.3 menggunakan Custom Model Data dan resource pack.

:::warning Tekstur Armor
Tutorial ini **tidak** membahas retexturing armor. Untuk armor, Anda perlu menggunakan OptiFine CIT (Custom Item Textures). Cari "OptiFine armor retexturing" untuk tutorial tentang metode tersebut.
:::

:::danger Aturan Penamaan Penting
**SEMUA nama file dan folder HARUS menggunakan huruf kecil saja.**

Menggunakan huruf kapital akan menyebabkan tekstur gagal dimuat. Selalu gunakan `custom_sword` alih-alih `CustomSword`.
:::

## Tutorial Video

Jika Anda lebih suka format video, tutorial ini didasarkan pada video berikut:

<iframe width="560" height="315" src="https://www.youtube.com/embed/y-t1YMslFLM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prasyarat

- **Editor Teks**: Gunakan Notepad++, VS Code, atau sejenisnya (BUKAN Notepad biasa)
- **Editor Gambar**: Photoshop, Paint.NET, GIMP, atau Paint 3D
- **Alat Kompresi**: WinRAR, 7-Zip, atau kompresi bawaan sistem operasi
- **Pengetahuan dasar JSON** (membantu tetapi tidak wajib)

:::tip Ekstensi File
Tidak ada satu pun file yang Anda buat berupa file `.txt`. Pastikan editor Anda dapat menyimpan jenis file tertentu seperti `.json`, `.mcmeta`, dan `.png`.
:::

## Bagian 1: Menyiapkan ExecutableItem Anda

### Langkah 1: Buat Item Anda

Pertama, buat ExecutableItem yang akan menggunakan tekstur kustom:

```
/ei create my_custom_pickaxe
```

### Langkah 2: Konfigurasi Properti Dasar

Atur nama tampilan item, lore, dan fitur lain yang Anda inginkan:

```
/ei edit my_custom_pickaxe
```

Contoh konfigurasi:
- **Nama**: `&b&lCustom Pickaxe`
- **Material**: `DIAMOND_PICKAXE`
- **Lore**: Tambahkan teks deskriptif apa pun

## Bagian 2: Membuat Tekstur Anda

### Langkah 3: Desain Gambar Tekstur Anda

Buat tekstur kustom Anda menggunakan editor gambar:

**Persyaratan:**
- **Format**: PNG dengan dukungan transparansi
- **Resolusi**: 16x16 piksel (atau pangkat 2: 32x32, 64x64, 128x128, dll.)
- **Nama file**: Gunakan huruf kecil dengan garis bawah (misalnya, `custom_pickaxe.png`)

:::tip Resolusi Gambar
Meskipun 16x16 adalah standar, Anda dapat menggunakan resolusi yang lebih tinggi seperti 32x32 atau 64x64 untuk tekstur yang lebih detail. Pastikan tetap berupa pangkat 2.
:::

Simpan file tekstur Anda, karena Anda akan membutuhkannya di bagian berikutnya.

## Bagian 3: Membangun Resource Pack

### Langkah 4: Buat Struktur Folder

Buat struktur folder berikut:

```
ExecutableItemsTexturePack/
├── pack.mcmeta
├── pack.png (optional)
└── assets/
    └── minecraft/
        ├── textures/
        │   └── item/
        │       └── custom_textures/
        │           └── custom_pickaxe.png
        └── models/
            └── item/
                ├── diamond_pickaxe/
                │   └── 1.json
                └── diamond_pickaxe.json
```

### Langkah 5: Buat pack.mcmeta

Di folder root, buat `pack.mcmeta`:

```json
{
  "pack": {
    "pack_format": 15,
    "description": "§eExecutableItems Custom Textures"
  }
}
```

:::info Pack Format Berdasarkan Versi
Pilih `pack_format` yang benar untuk versi Minecraft Anda:
- **15** = 1.20.5 - 1.21.1
- **34** = 1.20.2 - 1.20.4
- **18** = 1.20 - 1.20.1
- **15** = 1.19.4
- **13** = 1.19.3
- **12** = 1.19 - 1.19.2
- **9** = 1.18 - 1.18.2
- **8** = 1.17 - 1.17.1
- **6** = 1.16.2 - 1.16.5

Lihat [daftar lengkap pack format](https://minecraft.wiki/w/Pack_format) untuk semua versi.
:::

### Langkah 6: Tambahkan File Tekstur Anda

1. Buka `assets/minecraft/textures/item/custom_textures/`
2. Letakkan file PNG tekstur Anda di sini (misalnya, `custom_pickaxe.png`)

### Langkah 7: Identifikasi Material Item Dasar

Anda perlu mengetahui ID Minecraft dari item dasar:

1. Tekan **F3 + H** di Minecraft untuk mengaktifkan Advanced Tooltips
2. Arahkan kursor ke item untuk melihat ID-nya (misalnya, `minecraft:diamond_pickaxe`)
3. Gunakan bagian setelah titik dua untuk nama file (misalnya, `diamond_pickaxe`)

![ID item yang ditampilkan dengan Advanced Tooltips](https://media.ssomar.com/m/docs-img-image-185.png)

:::warning Penting: Gunakan ID Minecraft
Nama file HARUS sesuai dengan ID item Minecraft, bukan:
- ❌ Nama tampilan item Anda
- ❌ Nama file tekstur Anda
- ❌ ID ExecutableItem Anda
- ✅ ID material Minecraft (misalnya, `diamond_pickaxe`)
:::

### Langkah 8: Buat File Model Dasar

Di `assets/minecraft/models/item/`, buat `diamond_pickaxe.json`:

```json
{
    "parent": "minecraft:item/generated",
    "textures": {
        "layer0": "minecraft:item/diamond_pickaxe"
    },
    "overrides": [
        {
            "predicate": {
                "custom_model_data": 1
            },
            "model": "item/diamond_pickaxe/1"
        }
    ]
}
```

**Memahami field-nya:**

- `"parent"`: Jenis model dasar
  - Gunakan `"generated"` untuk sebagian besar item
  - Gunakan `"handheld"` jika item terlihat aneh saat dipegang
- `"layer0"`: Tekstur vanilla bawaan
- `"overrides"`: Array pemetaan custom model data
- `"custom_model_data"`: Angka yang akan Anda atur di ExecutableItems
- `"model"`: Path ke file model kustom Anda

:::tip Beberapa Tekstur Kustom
Untuk menambahkan lebih banyak tekstur kustom untuk item yang sama, tambahkan lebih banyak entri override:

```json
"overrides": [
    {
        "predicate": {
            "custom_model_data": 1
        },
        "model": "item/diamond_pickaxe/1"
    },
    {
        "predicate": {
            "custom_model_data": 2
        },
        "model": "item/diamond_pickaxe/2"
    },
    {
        "predicate": {
            "custom_model_data": 3
        },
        "model": "item/diamond_pickaxe/3"
    }
]
```
:::

### Langkah 9: Buat File Model Kustom

1. Buat folder: `assets/minecraft/models/item/diamond_pickaxe/`
2. Buat file: `1.json` di dalam folder tersebut

Isi `1.json`:

```json
{
    "parent": "item/handheld",
    "textures": {
        "layer0": "item/custom_textures/custom_pickaxe"
    }
}
```

**Memahami path tekstur:**

Nilai `"layer0"` adalah path relatif terhadap `assets/minecraft/textures/`:
- Path: `item/custom_textures/custom_pickaxe`
- Path lengkap: `assets/minecraft/textures/item/custom_textures/custom_pickaxe.png`

:::danger Kesalahan Umum: Path Tekstur Salah
Kesalahan yang paling sering terjadi adalah mengatur path yang salah di `layer0`. Periksa kembali bahwa:
1. Path sesuai dengan struktur folder Anda
2. Anda tidak menyertakan ekstensi `.png`
3. Path dimulai dari dalam folder `textures/`
:::

### Langkah 10: Kemas Resource Pack

#### Untuk Windows (WinRAR/7-Zip):
1. Pilih `pack.mcmeta` dan folder `assets`
2. Klik kanan → Add to archive / Compress
3. Pilih format `.zip`
4. Beri nama `ExecutableItemsTexturePack.zip`

#### Untuk Mac/Linux:
1. Pilih `pack.mcmeta` dan folder `assets`
2. Kompres menjadi ZIP menggunakan kompresi bawaan
3. Atau letakkan di dalam folder dan gunakan apa adanya untuk pengujian lokal

![Membuat file ZIP](https://media.ssomar.com/m/docs-img-image-244.png)

![Ubah ke format .ZIP](https://media.ssomar.com/m/docs-img-image-158.png)

### Langkah 11: Instal Resource Pack

1. Letakkan file `.zip` di `.minecraft/resourcepacks/`
2. Jalankan Minecraft
3. Buka Options → Resource Packs
4. Aktifkan pack Anda dengan mengeklik panah

## Bagian 4: Menghubungkan ExecutableItems ke Tekstur

### Langkah 12: Atur Custom Model Data

Edit ExecutableItem Anda:

```
/ei edit my_custom_pickaxe
```

Buka konfigurasi `customModelData` dan atur agar sesuai dengan override Anda:

![Pengaturan Custom Model Data](https://media.ssomar.com/m/docs-img-image-163.png)

Atur nilainya ke `1` (atau angka apa pun yang Anda gunakan di override):

![Mengatur nilai ke 1](https://media.ssomar.com/m/docs-img-image-61.png)

**Di file config, tampilannya seperti ini:**

```yaml
customModelData: 1
```

### Langkah 13: Uji Tekstur Kustom Anda

Berikan item tersebut kepada diri Anda sendiri:

```
/ei give my_custom_pickaxe
```

Sekarang Anda seharusnya dapat melihat tekstur kustom Anda!

![Tekstur kustom di inventaris](https://media.ssomar.com/m/docs-img-image-364.png)

![Tekstur kustom saat dipegang](https://media.ssomar.com/m/docs-img-image-392.png)

## Pemecahan Masalah

| Masalah | Solusi |
|---------|----------|
| **Tekstur tidak muncul** | Periksa bahwa semua nama file menggunakan huruf kecil |
| **Tekstur ungu/hitam** | Pastikan path `layer0` sesuai dengan lokasi tekstur Anda |
| **Pack tidak dimuat** | Periksa bahwa `pack_format` sesuai dengan versi Minecraft Anda |
| **Tampilan item salah** | Ubah `"generated"` menjadi `"handheld"` pada parent model |
| **Item terlihat seperti vanilla** | Pastikan `customModelData` di EI sesuai dengan angka override Anda |

## Tips Lanjutan

### Mengatur Beberapa Tekstur

Buat subfolder untuk berbagai jenis item:

```
custom_textures/
├── weapons/
│   ├── sword_fire.png
│   └── sword_ice.png
├── tools/
│   └── pickaxe_emerald.png
└── misc/
    └── wand_magic.png
```

Perbarui path Anda sesuai dengan itu:
```json
"layer0": "item/custom_textures/weapons/sword_fire"
```

### Menggunakan Model 3D

Untuk model 3D yang dibuat di [Blockbench](https://www.blockbench.net/):

1. Buat model Anda di Blockbench
2. Ekspor sebagai "Java Block/Item"
3. Ganti isi `1.json` Anda dengan model yang telah diekspor
4. Pastikan path tekstur sesuai dengan struktur pack Anda

### Deployment di Server

Untuk menggunakan tekstur kustom di server, Anda perlu meng-host resource pack secara online. Lihat [Panduan Mengunggah Paket Tekstur](./uploading-texture-pack.md) kami untuk petunjuknya.

## Unduh Contoh Pack

Jika Anda kesulitan mengikuti langkah-langkahnya, unduh contoh pack ini untuk melihat struktur yang benar:

[Unduh ExecutableItemsTexturePackExample.zip](/img/ExecutableItemsTexturePackExample.zip)

## Sumber Daya Tambahan

- [Minecraft Wiki: Resource Pack](https://minecraft.wiki/w/Resource_pack)
- [Minecraft Wiki: Model Format](https://minecraft.wiki/w/Model)
- [Riwayat Versi Pack Format](https://minecraft.wiki/w/Pack_format)
- [Blockbench - Editor Model 3D Gratis](https://www.blockbench.net/)

---

Butuh bantuan? Bergabunglah dengan [komunitas Discord](https://discord.gg/ExecutableItems) kami dan bertanya di kanal dukungan!
