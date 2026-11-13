---
description: >-
  Pelajari cara menyimpan dan menjalankan daftar perintah dengan Custom
  Triggers, secara manual atau terjadwal, di ExecutableItems, ExecutableBlocks,
  dan ExecutableEvents.
source_hash: 2eab89bbd32500f6
translated_at: '2026-11-13T17:54:54.912Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 🔘 Custom Triggers

Custom Triggers adalah cara yang andal untuk menyimpan dan menjalankan daftar perintah, baik secara manual melalui perintah maupun otomatis melalui sistem penjadwalan.

## Ikhtisar

**Custom Triggers** memungkinkan Anda untuk:
- ✅ Menyimpan urutan perintah yang dapat digunakan ulang
- ✅ Menjalankan perintah secara manual dengan perintah trigger sederhana
- ✅ Menjadwalkan eksekusi otomatis pada waktu tertentu
- ✅ Meneruskan argumen untuk menyesuaikan perilaku
- ✅ Mengatur konfigurasi perintah yang kompleks

## Mulai Cepat

### Langkah 1: Buat Aktivator

1. Buka editor plugin Anda (`/ei`, `/eb`, atau `/ee`)
2. Buat aktivator baru
3. Pilih **CUSTOM_TRIGGER** sebagai opsi
4. Tambahkan perintah Anda ke bagian perintah

### Langkah 2: Jalankan Trigger

Gunakan perintah yang sesuai untuk plugin Anda:

```bash
# ExecutableItems
/ei run-custom-trigger trigger:{activatorID}

# ExecutableBlocks
/eb run-custom-trigger trigger:{activatorID}

# ExecutableEvents
/ee run-custom-trigger trigger:{activatorID}
```

## Konteks Perintah per Plugin

Setiap plugin menyediakan konteks yang berbeda untuk eksekusi perintah:

### 🗡️ ExecutableItems
- **Persyaratan:** Item harus berada di inventaris pemain
- **playerCommands yang tersedia:** Perintah pemain
- **Placeholder:** Placeholder berbasis pemain (`%player%`, dll.)

### 🧱 ExecutableBlocks
- **Persyaratan:** Blok harus sudah dipasang
- **playerCommands yang tersedia:** Perintah blok, perintah pemilik (jika diaktifkan)
- **Placeholder:** Placeholder blok dan pemilik

### 🎯 ExecutableEvents
- **Persyaratan:** Tidak ada (trigger berjalan secara global)
- **playerCommands yang tersedia:** Hanya perintah konsol
- **Placeholder:** Terbatas (gunakan argumen untuk menargetkan pemain)

## Jenis Trigger

### 1. Callable Triggers
Hanya dijalankan melalui perintah:
```yaml
activators:
  my_trigger:
    option: CUSTOM_TRIGGER
    playerCommands:
    - "say Hello World!"
```

### 2. Scheduled Triggers
Dijalankan otomatis pada waktu tertentu:
```yaml
activators:
  scheduled_trigger:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '%%%%:::%%:::%%:::22:::00:::XX'  # Daily at 22:00
    playerCommands:
    - "say It's 10 PM!"
```

## Sintaks Perintah

### ExecutableItems
```bash
/ei run-custom-trigger trigger:{activatorID} [player:{name}] [slot:{slot}] [args...]
```

| Parameter | Deskripsi | Wajib |
|-----------|-------------|----------|
| `trigger` | ID aktivator | ✅ Ya |
| `player` | Nama pemain target | ❌ Tidak (menargetkan semua jika dihilangkan) |
| `slot` | Slot inventaris (-1 untuk tangan utama) | ❌ Tidak |
| `args...` | Argumen tambahan yang dapat diakses melalui %arg0%, %arg1%, dll. | ❌ Tidak |

**Contoh:**
```bash
/ei run-custom-trigger trigger:daily_reward
/ei run-custom-trigger trigger:boost player:Steve slot:-1
/ei run-custom-trigger trigger:message player:Alex Hello World
```

### ExecutableBlocks
```bash
/eb run-custom-trigger trigger:{activatorID} [block:{location}] [args...]
```

| Parameter | Deskripsi | Wajib |
|-----------|-------------|----------|
| `trigger` | ID aktivator | ✅ Ya |
| `block` | Lokasi blok (world,x,y,z) | ❌ Tidak (menargetkan semua jika dihilangkan) |
| `args...` | Argumen tambahan | ❌ Tidak |

**Contoh:**
```bash
/eb run-custom-trigger trigger:harvest_all
/eb run-custom-trigger trigger:activate block:world,100,64,200
```

### ExecutableEvents
```bash
/ee run-custom-trigger trigger:{activatorID} [args...]
```

| Parameter | Deskripsi | Wajib |
|-----------|-------------|----------|
| `trigger` | ID aktivator | ✅ Ya |
| `args...` | Argumen tambahan | ❌ Tidak |

**Contoh:**
```bash
/ee run-custom-trigger trigger:server_event
/ee run-custom-trigger trigger:player_reward Steve
```

## Sistem Jadwal

### Format Jadwal

Sistem jadwal menggunakan dua format untuk pengaturan waktu:

#### Format 1: Berbasis Tanggal/Waktu
```
{YEAR}:::{MONTH}:::{DAY}:::{HOUR}:::{MIN}:::{SEC}
```
- Gunakan `%%%%` untuk tahun apa pun
- Gunakan `%%` untuk bulan/hari/jam/menit apa pun
- Gunakan `XX` untuk detik apa pun
- Gunakan `[value1,value2]` untuk beberapa nilai

#### Format 2: Berbasis Minggu
```
{YEAR}:!:{WEEK}:!:{DAYSTRING}:!:{HOUR}:!:{MIN}:!:{SEC}
```
- `DAYSTRING` dapat berupa: MONDAY, TUESDAY, dll.

### Contoh Jadwal Umum

```yaml
scheduleFeatures:
  when:
  # Every minute
  - '%%%%:::%%:::%%:::%%:::%%:::XX'

  # Every day at 22:00
  - '%%%%:::%%:::%%:::22:::00:::XX'

  # Every Monday at 14:00
  - '%%%%:!:%%:!:MONDAY:!:14:!:00:!:XX'

  # December 24-26 at 16:00
  - '%%%%:::12:::[24,25,26]:::16:::00:::XX'

  # At 10, 14, and 18 hours daily
  - '%%%%:::%%:::%%:::[10,14,18]:::00:::XX'
```

## Contoh Praktis

### Contoh 1: Item Hadiah Harian

```yaml
name: '&eDaily Reward Token'
material: GOLD_INGOT
activators:
  daily_reward:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '%%%%:::%%:::%%:::[10,14,18]:::00:::XX'
    playerCommands:
    - "money give %player% 500"
    - "SEND_MESSAGE &aYou received your daily reward!"
```

### Contoh 2: Trigger Event Server

```yaml
# In ExecutableEvents
activators:
  new_year_celebration:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '2025:::01:::01:::00:::00:::00'
    consoleCommands:
    - "broadcast &6&lHAPPY NEW YEAR 2025!"
    - "ei giveall firework_item 10"
```

### Contoh 3: Sistem Panen Blok

```yaml
# In ExecutableBlocks
activators:
  harvest_crops:
    option: CUSTOM_TRIGGER
    playerCommands:
    - "DROPEXECUTABLEITEM wheat_item 5"
    - "score run-player-command player:%owner% SEND_MESSAGE &aHarvest complete!"
```

### Contoh 4: Perintah Pemain dari Event

Karena ExecutableEvents tidak memiliki konteks pemain, gunakan argumen:

```yaml
# ExecutableEvent
activators:
  player_boost:
    option: CUSTOM_TRIGGER
    consoleCommands:
    - "score run-player-command player:%arg0% EFFECT SPEED 2 60"
```

Jalankan dengan: `/ee run-custom-trigger trigger:player_boost Steve`

## Praktik Terbaik

### ✅ LAKUKAN
- Gunakan ID aktivator yang unik untuk menghindari konflik
- Uji trigger secara manual sebelum menjadwalkannya
- Gunakan argumen agar trigger fleksibel dan dapat digunakan ulang
- Susun urutan perintah yang kompleks ke dalam trigger

### ❌ JANGAN
- Menggunakan ID aktivator yang duplikat (semuanya akan terpicu secara bersamaan)
- Lupa memeriksa konteks plugin (perintah pemain/blok/konsol)
- Memperumit konfigurasi sederhana yang tidak membutuhkan trigger

## Pemecahan Masalah

### Trigger Tidak Berjalan
- ✅ Pastikan ID aktivator cocok persis
- ✅ Periksa apakah item/blok/event ada dan dikonfigurasi dengan benar
- ✅ Pastikan izin yang sesuai untuk menjalankan perintah

### Jadwal Tidak Berfungsi
- ✅ Periksa sintaks format jadwal
- ✅ Pastikan waktu server sesuai dengan jadwal yang diharapkan
- ✅ Pastikan rentang startDate/endDate mencakup waktu saat ini

### Perintah Tidak Berjalan
- ✅ Pastikan konteks perintah (pemain/blok/konsol)
- ✅ Periksa ketersediaan placeholder dalam konteks tersebut
- ✅ Uji perintah secara manual terlebih dahulu

## Tips Lanjutan

### Merangkai Trigger
Buat urutan yang kompleks dengan membuat trigger memanggil trigger lain:

```yaml
trigger_1:
  option: CUSTOM_TRIGGER
  playerCommands:
  - "ei run-custom-trigger trigger:trigger_2"
  - "ei run-custom-trigger trigger:trigger_3"
```

### Event Global
Gabungkan trigger ExecutableEvents dengan trigger plugin lain untuk event di seluruh server:

```yaml
# Step 1: EE trigger broadcasts and activates items/blocks
server_event:
  option: CUSTOM_TRIGGER
  consoleCommands:
  - "broadcast &cSERVER EVENT STARTING!"
  - "ei run-custom-trigger trigger:event_items"
  - "eb run-custom-trigger trigger:event_blocks"
```

## Dokumentasi Terkait

- [Placeholders](/tools-for-all-plugins-score/placeholders)
