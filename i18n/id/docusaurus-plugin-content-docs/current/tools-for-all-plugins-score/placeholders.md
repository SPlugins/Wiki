---
title: Daftar Placeholder SCore
description: >-
  Daftar lengkap placeholder SCore untuk ExecutableItems, ExecutableBlocks, dan
  ExecutableEvents: pemain, item, blok, entitas, matematika, PlaceholderAPI.
source_hash: ecc26db0e2403378
translated_at: '2026-11-13T17:55:49.824Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 📚 Daftar Placeholder SCore

Placeholder SCore adalah `%tag%` yang diganti dengan nilai langsung (data pemain, data item, data blok, matematika, angka acak) saat sebuah perintah, kondisi, baris lore, atau pesan dijalankan. Placeholder ini berfungsi di semua bagian ExecutableItems, ExecutableBlocks, dan ExecutableEvents: perintah, kondisi, lore, pesan, dan variabel SCore. SCore juga memproses setiap placeholder [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) di tempat yang sama, sehingga tag bergaya PAPI `%player_name%` dan tag bergaya SCore `%player%` dapat dicampur dalam satu baris yang sama.

## Daftar Isi

- [Placeholder Pemain](#player-placeholders)
- [Placeholder Target / Entitas](#target--entity-placeholders)
- [Placeholder Item](#item-placeholders)
- [Placeholder Blok](#block-placeholders)
- [Placeholder Proyektil](#projectile-placeholders)
- [Placeholder Variabel](#variables-placeholders)
- [Placeholder Cooldown](#cooldown-placeholders)
- [Placeholder Matematika](#math-placeholders)
- [Placeholder Utilitas & Teks](#utility--text-placeholders)
- [Placeholder Jumlah Khusus Plugin](#plugin-specific-count-placeholders)
- [Placeholder Khusus Event](#event-specific-placeholders)
- [Menggunakan Placeholder PlaceholderAPI di SCore](#using-placeholderapi-placeholders-in-score)
- [Pertanyaan ?](#question-)

:::tip Operasi Numerik
Semua placeholder numerik mendukung operasi aritmetika:
- **Penambahan:** `%amount%+6` (jika %amount% = 15, hasilnya = 21)
- **Pengurangan:** `%amount%-8` (jika %amount% = 14, hasilnya = 6)
:::

## Placeholder Pemain

Placeholder pemain tersedia di aktivator yang melibatkan pemain. Jika pemain berperan sekunder di aktivator, ganti `player` dengan `target` (mis., `%target_health%`). Di ExecutableItems dan ExecutableBlocks, item/blok dapat memiliki **Owner**: ganti `player` dengan `owner` untuk mendapatkan placeholder milik owner (mis., `%owner_uuid%`).

| Placeholder | Hasil | Contoh |
|------------|---------|---------|
| `%player%` | Nama pemain | `SEND_MESSAGE &aWelcome %player%!` |
| `%player_uuid%` | UUID pemain | `SEND_MESSAGE &7Your UUID is %player_uuid%` |
| `%player_uuid_array%` | UUID pemain sebagai `[I;-1288600659,-373273272,-1897203511,898446696]` | Digunakan secara internal untuk menyimpan UUID di perintah berbasis NBT |
| `%player_world%` | Nama dunia (`%player_world_lower%` untuk huruf kecil) | `execute in <<%player_world%>> run summon zombie 100 50 100` |
| `%player_x%`, `%player_y%`, `%player_z%` | Koordinat (tambahkan `_int` untuk bilangan bulat) | `execute at %player% run setblock %player_x_int% %player_y_int% %player_z_int% air` |
| `%player_pitch%`, `%player_pitch_positive%` | Pitch pemain (`_int` untuk bilangan bulat) | `SEND_MESSAGE &7Pitch: %player_pitch_int%` |
| `%player_yaw%`, `%player_yaw_positive%` | Yaw pemain (`_int` untuk bilangan bulat) | `SEND_MESSAGE &7Yaw: %player_yaw_int%` |
| `%player_direction%` | Arah mata angin (N, SW, NE, dll.) | Kondisi: `part1: '%player_direction%'`, `comparator: EQUALS`, `part2: 'SW'` |
| `%player_health%` | Health saat ini | `SEND_MESSAGE &cHealth: %player_health%` |
| `%player_max_health%` | Health maksimum | `SEND_MESSAGE &cHealth: %player_health%/%player_max_health%` |
| `%player_slot%` | Slot yang memicu aktivator | `SEND_MESSAGE &7Used from slot %player_slot%` |
| `%player_slot_live%` | Slot yang sedang dipegang | `SEND_MESSAGE &7Holding slot %player_slot_live%` |
| `%player_team%` | Tim pemain (jika ada) | `SEND_MESSAGE &7Team: %player_team%` |
| `%player_attack_charge%` | Cooldown serangan (1.0 = terisi penuh) | Kondisi: `part1: '%player_attack_charge%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR_OR_EQUALS`, `part2: '1.0'` |
| `%last_damage_taken%` | Damage terakhir yang diterima (`_int` untuk bilangan bulat) | `SEND_MESSAGE &cYou took %last_damage_taken_int% damage` |
| `%last_damage_dealt%` | Damage terakhir yang diberikan (`_int` untuk bilangan bulat) <CustomTag type="version" version="1.16" /> | `SEND_MESSAGE &aYou dealt %last_damage_dealt_int% damage` |
| `%player_x_velocity%`, `%player_y_velocity%`, `%player_z_velocity%` | Velocity X, Y, Z saat ini (`_int` untuk bilangan bulat) | `SEND_MESSAGE &7Y velocity: %player_y_velocity%` |

### Placeholder Pemain Awal

Menangkap nilai pemain pada saat aktivator terpicu (tidak berubah selama eksekusi):
- `%player_x_initial%`, `%player_y_initial%`, `%player_z_initial%`
- `%player_world_initial%`
- `%player_pitch_initial%`, `%player_yaw_initial%`
- `%player_direction_initial%`

## Placeholder Target / Entitas

Placeholder entitas tersedia di aktivator yang melibatkan entitas. Jika entitas berperan sekunder di aktivator, ganti `entity` dengan `target` (mis., `%target_x%`).

| Placeholder | Hasil | Contoh |
|------------|---------|---------|
| `%entity%` | Tipe entitas (HURUF BESAR) | `SEND_MESSAGE &7You hit a %entity%` |
| `%entity_lower_case%` | Tipe entitas (huruf kecil) | `SEND_MESSAGE &7You hit a %entity_lower_case%` |
| `%entity_name%` | Nama kustom entitas | `SEND_MESSAGE &7Target: %entity_name%` |
| `%entity_uuid%` | UUID entitas | Digunakan untuk mengidentifikasi target di perintah berbasis NBT |
| `%entity_uuid_array%` | UUID entitas sebagai `[I;-1288600659,-373273272,-1897203511,898446696]` | Digunakan secara internal untuk menyimpan UUID di perintah berbasis NBT |
| `%entity_x%`, `%entity_y%`, `%entity_z%` | Koordinat (tambahkan `_int` untuk bilangan bulat) | `execute at %entity% run setblock %entity_x_int% %entity_y_int% %entity_z_int% air` |
| `%entity_health%` | Health saat ini | `SEND_MESSAGE &cTarget health: %entity_health%` |
| `%entity_max_health%` | Health maksimum | `SEND_MESSAGE &cTarget health: %entity_health%/%entity_max_health%` |
| `%entity_world%` | Nama dunia | `SEND_MESSAGE &7Entity world: %entity_world%` |
| `%entity_direction%` | Arah hadap | Kondisi: `part1: '%entity_direction%'`, `comparator: EQUALS`, `part2: 'N'` |
| `%entity_pitch%`, `%entity_yaw%` | Nilai rotasi | `SEND_MESSAGE &7Yaw: %entity_yaw%` |
| `%entity_team%` | Tim entitas (jika ada) | `SEND_MESSAGE &7Team: %entity_team%` |
| `%entity_serialized%` | Definisi entitas lengkap | Digunakan untuk menyalin/memulihkan entitas di perintah tingkat lanjut |
| `%entity_last_damage_taken%` | Damage terakhir yang diterima (tambahkan `_int` untuk bilangan bulat). Varian `_final` hanya ada di event damage entitas ExecutableEvents, lihat [placeholder aktivator](#event-specific-placeholders) | `SEND_MESSAGE &cTarget took %entity_last_damage_taken_int% damage` |
| `%entity_x_velocity%`, `%entity_y_velocity%`, `%entity_z_velocity%` | Velocity X, Y, Z saat ini (`_int` untuk bilangan bulat) | `SEND_MESSAGE &7Target Y velocity: %entity_y_velocity%` |

## Placeholder Item

| Placeholder | Hasil | Contoh |
|------------|---------|---------|
| `%name%` | Nama ExecutableItem | `SEND_MESSAGE &aYou used %name%` |
| `%id%` | ID ExecutableItem | `SEND_MESSAGE &7Item ID: %id%` |
| `%amount%` | Jumlah dalam stack saat ini | `SEND_MESSAGE &7You have %amount% in this stack` |
| `%usage%` | Jumlah penggunaan saat ini | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%usage_roman%` | Penggunaan dalam angka Romawi | `ADD_ITEM_LORE &7Usage: %usage_roman%` |
| `%usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` | Bar penggunaan visual, info lebih lanjut di bawah | `ADD_ITEM_LORE %usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` |
| `%usage_limit%` | Batas penggunaan maksimum | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%usage_raw%`, `%usage_limit_raw%` | ExecutableItems, hanya di nama dan lore item: penggunaan dan batas penggunaan sebagai angka biasa, info lebih lanjut di bawah | `lore: ['&7Damage: %math_0_%usage_raw%*2%']` |
| `%durability%` | Durability item (1.14+) | `SEND_MESSAGE &7Durability left: %durability%` |
| `%max_use_per_day_item%` | Batas penggunaan harian (item) | Kondisi: `part1: '%max_use_per_day_item%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR`, `part2: '0'` |
| `%max_use_per_day_activator%` | Batas penggunaan harian (aktivator) | Kondisi: `part1: '%max_use_per_day_activator%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR`, `part2: '0'` |

**Khusus:** `%usage_bar(amount:30,color1:&d,color2:&5,symbol:|)%`

![](https://media.ssomar.com/m/docs-img-usage-bar.jpg)
- Membuat bar penggunaan visual
- Parameter: amount (jumlah bar), color1 (terpakai), color2 (belum terpakai), symbol

**Placeholder penggunaan mentah:** `%usage_raw%` dan `%usage_limit_raw%`

- Di nama dan lore sebuah ExecutableItem, `%usage%` dan `%usage_limit%` disertai tag tak terlihat (saat `isRefreshableClean` diaktifkan, yang merupakan default) yang memungkinkan plugin memperbarui nilainya nanti. Di dalam placeholder PlaceholderAPI, tag ini merusak ekspresi, misalnya pada `%math_0_%usage%*2%`.
- `%usage_raw%` dan `%usage_limit_raw%` memberikan nilai yang sama tanpa tag apa pun, sehingga dapat digunakan di placeholder matematika PlaceholderAPI: `%math_0_%usage_raw%*2%`.
- Keduanya menerima singkatan `+N` / `-N`, seperti placeholder numerik lainnya: `%usage_raw%-1`.
- Batasan: karena tidak memiliki tag, nilainya hanya diperbarui saat lore dibangun ulang dari config. Ketika lore item dipertahankan apa adanya (misalnya setelah baris ditambahkan ke dalamnya), nilai yang tertulis di lore tetap sama, sedangkan `%usage%` terus diperbarui.

## Placeholder Blok

Placeholder blok tersedia di aktivator yang melibatkan blok. Jika blok berperan sekunder di aktivator, ganti `block` dengan `target_block` (mis., `%target_block_x%`).

| Placeholder | Hasil | Contoh |
|------------|---------|---------|
| `%block%` | Tipe blok (HURUF BESAR) | `SEND_MESSAGE &7You broke %block%` |
| `%block_lower%` | Tipe blok (huruf kecil) | `SEND_MESSAGE &7You broke %block_lower%` |
| `%block_live%`, `%block_live_lower%` | Tipe blok saat ini | `SEND_MESSAGE &7Current block: %block_live%` |
| `%block_item_material%` | Bentuk item dari blok (tanaman memberikan bijinya, `WALL_TORCH` memberikan `TORCH`, `OAK_WALL_SIGN` memberikan `OAK_SIGN`, `POTTED_DANDELION` memberikan `DANDELION`…) | Digunakan untuk memberikan item yang sesuai bagi blok yang dipasang |
| `%block_x%`, `%block_y%`, `%block_z%` | Koordinat (tambahkan `_int` untuk bilangan bulat) | `execute at %player% run setblock %block_x_int% %block_y_int%+1 %block_z_int% air` |
| `%blockface%` | Sisi blok yang dipilih | `SEND_MESSAGE &7Face: %blockface%` |
| `%block_world%` | Nama dunia | `execute in <<%block_world%>> run setblock %block_x_int% %block_y_int% %block_z_int% air` |
| `%block_biome%` | Nama biome | Kondisi: `part1: '%block_biome%'`, `comparator: EQUALS`, `part2: 'DESERT'` |
| `%block_dimension%` | Tipe dunia (nether, normal, end) | Kondisi: `part1: '%block_dimension%'`, `comparator: EQUALS`, `part2: 'nether'` |
| `%block_spawnertype%` | Tipe mob spawner | `SEND_MESSAGE &7Spawner: %block_spawnertype%` |
| `%block_is_ageable%` | Mengembalikan apakah blok dapat bertumbuh (ageable) atau tidak | Kondisi: `part1: '%block_is_ageable%'`, `comparator: EQUALS`, `part2: 'true'` |
| `%block_eb_id%` | ID ExecutableBlock (jika berlaku) | `SEND_MESSAGE &7EB ID: %block_eb_id%` |
| `%block_data%` | Nilai data blok | `SEND_MESSAGE &7Block data: %block_data%` |

## Placeholder Proyektil

Placeholder proyektil tersedia di aktivator yang melibatkan proyektil.

| Placeholder | Hasil | Contoh |
|------------|---------|---------|
| `%projectile%` | Tipe proyektil (HURUF BESAR) | `SEND_MESSAGE &7You shot a %projectile%` |
| `%projectile_lower_case%` | Tipe proyektil (huruf kecil) | `SEND_MESSAGE &7You shot a %projectile_lower_case%` |
| `%projectile_name%` | Nama proyektil kustom | `SEND_MESSAGE &7Projectile: %projectile_name%` |
| `%projectile_uuid%` | UUID proyektil | Digunakan untuk mengidentifikasi proyektil di perintah berbasis NBT |
| `%projectile_uuid_array%` | UUID proyektil sebagai `[I;-1288600659,-373273272,-1897203511,898446696]` | Digunakan secara internal untuk menyimpan UUID di perintah berbasis NBT |
| `%projectile_x%`, `%projectile_y%`, `%projectile_z%` | Koordinat | `execute at %player% run summon minecraft:lightning_bolt %projectile_x% %projectile_y% %projectile_z%` |
| `%projectile_world%` | Nama dunia | `SEND_MESSAGE &7World: %projectile_world%` |
| `%bow_force%` | Kekuatan tembakan busur (0-1) | Kondisi: `part1: '%bow_force%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR_OR_EQUALS`, `part2: '0.9'` |

## Placeholder Variabel

### Variabel Item/Blok

**Variabel String/Angka:**
- `%var_X%` - Nilai variabel X
- `%var_X_int%` - Nilai bilangan bulat variabel X (hanya untuk variabel bertipe NUMBER)
- `%var_X_roman%` - Nilai angka Romawi (hanya untuk variabel bertipe NUMBER)

**Variabel List:**
- `%var_MYVAR%` - Seluruh list dengan tanda kurung siku
- `%var_MYVAR_size%` - Jumlah elemen
- `%var_MYVAR_contains_VALUE%` - Memeriksa apakah list berisi VALUE

Contoh: `ADD_ITEM_LORE &7Defense: %var_defense%`

### Variabel SCore (Global / Per Pemain)

SCore juga memiliki sistem variabel global atau per pemain sendiri, yang terpisah dari variabel item/blok. Lihat [SCore Variables](/tools-for-all-plugins-score/score-variables) untuk perintah `/score variables`. Setelah [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) terpasang, variabel-variabel ini tersedia sebagai:
- `%score_variables_<variable-id>%`
- `%score_variables_<variable-id>_int%`
- `%score_variables_<variable-id>_<index>%` (list, nilai pada indeks)
- `%score_variables-contains_<variable-name>_<value>%` (list, boolean)
- `%score_variables-size_<variable-name>%` (list, ukuran)

## Placeholder Cooldown

Format: `%score_cooldown_{plugin}:{object_id}:{activator_id}%`

| Placeholder | Hasil | Contoh |
|------------|---------|---------|
| `%score_cooldown_EI:Free_Lottery:activator1%` | Sisa cooldown untuk aktivator ExecutableItems | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EI:Free_Lottery:activator1%` |
| `%score_cooldown_EB:MyBlock:activator2%` | Sisa cooldown untuk aktivator ExecutableBlocks | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EB:MyBlock:activator2%` |

## Placeholder Matematika

Semua placeholder numerik SCore mendukung aritmetika inline langsung setelah tag:
- `%amount%+6` (jika `%amount%` = 15, hasilnya = 21)
- `%amount%-8` (jika `%amount%` = 14, hasilnya = 6)

Untuk operasi yang lebih dari satu operasi `+`/`-` (perkalian, pembagian, ekspresi bersarang), gunakan [placeholder matematika PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#math) yang membungkus placeholder SCore:

- `%math_0_(%usage%)*10%` mengalikan `%usage%` item dengan 10.
  - Di nama atau lore sebuah ExecutableItem, gunakan [`%usage_raw%`](#item-placeholders) sebagai gantinya: `%math_0_(%usage_raw%)*10%`.
- `%math_{score_variables_userLevel}*10%` mengalikan variabel SCore `userLevel` dengan 10 (lihat [Menggunakan Placeholder PlaceholderAPI di SCore](#using-placeholderapi-placeholders-in-score)).

:::info
Placeholder SCore diproses **sebelum** placeholder PlaceholderAPI, sehingga `%math_...%` selalu menerima nilai SCore yang sudah diselesaikan.
:::

## Placeholder Utilitas & Teks

| Placeholder | Hasil | Contoh |
|------------|---------|---------|
| `%rand:MIN\|MAX%` | Angka acak antara MIN dan MAX | `SEND_MESSAGE &6You rolled %rand:1\|100%` |
| `%timestamp%` | Timestamp saat ini | `SEND_MESSAGE &7Time: %timestamp%` |
| `%activator_id%` | ID aktivator saat ini | `SEND_MESSAGE &7Activator: %activator_id%` |
| `%activator_name%` | Nama aktivator saat ini | `SEND_MESSAGE &7Activator: %activator_name%` |

### Perintah AROUND & NEAREST

Gunakan placeholder pemain/entitas dengan awalan `around_target`:
- `%around_target_direction%`
- `%around_target_health%`
- `%around_target_uuid%`
- Jika `%around_target%` gagal, gunakan `%around_target::step1%`
- `%around_target_count%`: jumlah target dari perintah `AROUND` / `MOB_AROUND`, lihat [AROUND](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#around)

Contoh: `AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SEND_MESSAGE &cYou got smited!`

### Perintah DAMAGE

| Placeholder | Hasil | Contoh |
|------------|---------|---------|
| `%score_cmd-damage-boost%` | Damage boost saat ini | `SEND_MESSAGE &cDamage boost: %score_cmd-damage-boost%` |
| `%score_cmd-damage-resistance%` | Damage resistance saat ini | `SEND_MESSAGE &cDamage resistance: %score_cmd-damage-resistance%` |

:::warning
**Attack Charge**: `%player_attack_charge%` direset setelah perintah DAMAGE dijalankan, jadi periksa nilainya sebelum menggunakannya.
:::

### Placeholder Pesan/Perintah

Untuk `PLAYER_WRITE_COMMAND` dan `PLAYER_SEND_MESSAGE`:

| Placeholder | Hasil | Contoh |
|------------|---------|---------|
| `%arg0%`, `%arg1%`, `%arg2%`, dst. | Argumen perintah individual | `SEND_MESSAGE &7First argument: %arg0%` |
| `%all_args%` | Semua argumen | `SEND_MESSAGE &7Args: %all_args%` |
| `%all_args_without_first%` | Semua argumen kecuali yang pertama | `SEND_MESSAGE &7Args: %all_args_without_first%` |

## Placeholder Jumlah Khusus Plugin

### ExecutableItems

- `%executableitems_checkamount%` - Total EI di inventaris
- Argumen (gunakan koma di antara nilai untuk memberikan beberapa nilai):
  - `slot`: Slot yang diperiksa. Jangan gunakan argumen ini jika Anda ingin semua slot dievaluasi.
  - `id`: ID item ei yang ingin Anda periksa.
  - `owner`: Hanya dihitung jika nilai owner benar
  - `owneruuid`: Hanya dihitung jika nilai owner uuid benar
- Contoh:
  - `%executableitems_checkamount_slot:0,2,3%` - EI di slot tertentu
  - `%executableitems_checkamount_id:item1,item2_slot:0,2%` - Item tertentu di slot
  - `%executableitems_checkamount_owner:Special70%`

<hr/>

- `%executableitems_checkvar%` - Nilai / Total Nilai dari nilai variabel
- Argumen (gunakan koma di antara nilai untuk memberikan beberapa nilai):
  - `slot`: Slot yang diperiksa. Jangan gunakan argumen ini jika Anda ingin semua slot dievaluasi.
  - `id`: ID item ei yang ingin Anda periksa.
  - `var`: ID variabel yang ingin Anda periksa.
- Contoh:
  - `%executableitems_checkvar_id:star_man_var:defense%`
  - `%executableitems_checkvar_slot:-1,40_var:atk_bonus%`
  - `%executableitems_checkvar_var:defense,bonus_defense%`

<hr/>

- `%executableitems_set_<id>%` <CustomTag type="premium" /> - Jumlah bagian dari [set](/executableitems/configurations/sets-configuration) `<id>` yang dikenakan pemain
- `%executableitems_set_<id>_tier%` - Tier aktif tertinggi dari set (jumlah bagian), `0` jika tidak ada

:::info
- Jika nilai variabel pertama yang terdeteksi adalah string, nilai tersebut langsung dikembalikan.
- Jika nilai variabel lainnya yang terdeteksi adalah angka, semuanya dijumlahkan dan total nilainya dikembalikan.
- Saat ini tidak mendukung variabel list.
:::

### ExecutableBlocks

- `%executableblocks_checkamount%` - Total EB di inventaris
- Argumen (gunakan koma di antara nilai untuk memberikan beberapa nilai):
  - `slot`: Slot yang diperiksa. Jangan gunakan argumen ini jika Anda ingin semua slot dievaluasi.
  - `id`: ID item ei yang ingin Anda periksa.
  - `owner`: Hanya dihitung jika nilai owner benar
  - `owneruuid`: Hanya dihitung jika nilai owner uuid benar
- Contoh:
  - `%executableblocks_checkamount_slot:0,2,3%` - EB di slot tertentu
  - `%executableblocks_checkamount_id:block1,block2_slot:0,2%` - Blok tertentu di slot
  - `%executableblocks_checkamount_owner:Special70%`

## Placeholder Khusus Event

Placeholder ini hanya tersedia di dalam aktivator event yang sesuai.

| Aktivator | Placeholder |
|-----------|--------------|
| **RAID_TRIGGER** | `%player%`, `%badomenlevel%` |
| **RAID_WAVE** | `%raiders%` (list UUID) |
| **RAID_FINISH** | `%badomen%`, `%heroes%` (list UUID) |
| **PLAYER_EXPERIENCE_CHANGE** | `%experience%` |
| **PLAYER_RECEIVE_EFFECT** | `%effect_received%`, `%effect_received_level%`, `%effect_received_duration%` |
| **PLAYER_HIT_ENTITY** | `%critical%` (true/false) |
| **PLAYER_TELEPORT** | `%teleport_cause%` |
| **BROADCAST_MESSAGE** | `%message%`, `%is_async%` |
| **PLUGIN_ENABLE/DISABLE** | `%plugin_name%` |
| **PLAYER_ADVANCEMENT** | `%advancement%` (Hanya untuk 1.19+) |
| **PLAYER_RECEIVE_HIT_GLOBAL, PLAYER_RECEIVE_HIT_BY_PLAYER, PLAYER_RECEIVE_HIT_BY_ENTITY** | `%last_damage_taken_nonfinal%`, `%last_damage_taken_nonfinal_int%` merujuk pada damage mentah yang diterima. `%last_damage_taken_final%`, `%last_damage_taken_final_int%` merujuk pada damage yang diterima setelah buff pertahanan (atribut, efek resistance, armor). Hanya serangan langsung yang memberikan nilai yang benar; menerima serangan dari proyektil mengembalikan 0 |
| **ENTITY_DAMAGE_BY_PLAYER, ENTITY_DAMAGE_BY_ENTITY, ENTITY_DAMAGE_BY_BLOCK** (EE) | `%entity_last_damage_taken_final%`, `%entity_last_damage_taken_final_int%` merujuk pada damage yang diterima setelah buff pertahanan (armor, resistance…). ENTITY_DAMAGE_BY_PLAYER juga memberikan `%entity_last_damage_taken_final_with_booster%` dan `%entity_last_damage_taken_final_with_booster_int%`, yaitu damage akhir termasuk damage boost |
| **PLAYER_BLOCK_HIT_OF_PLAYER, PLAYER_BLOCK_HIT_OF_ENTITY** | `%damage_blocked_base%`, `%damage_blocked_base_int%` mengembalikan damage mentah yang diblokir oleh shield |
| **PLAYER_PICKUP_ITEM** (EE) | 1.13+: `%item_type%`, `%item_name%`, `%item_amount%`. 1.14-1.21.3: `%item_cmdata%` (-1 jika null). 1.21.4+: `%item_cmdata_s_0%` ("null" jika kosong), `%item_cmdata_f_0%` (-1 jika kosong) (nilai custom model data string/float pertama, sejak 1.21.4+ custom model data disimpan dalam array) |
| **PLAYER_INVENTORY_CLICK** (EE) | `%is_shift_click%`, `%is_mouse_click%`, `%is_left_click%`, `%is_right_click%`, `%is_keyboard_click%`, `%is_creative_action%`, `%get_action%` ([Nilai Enum Referensi](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryAction.html)), `%before_slot%`, `%after_slot%`, `%inventory_type%` ([Nilai Enum Referensi](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryType.html)), `%inventory_title%` (1.21+) |
| **PLAYER_KILL_ENTITY** | `%last_hitter%`: tipe mob yang memberikan pukulan terakhir. Berguna untuk memeriksa apakah Anda atau serigala peliharaan Anda yang memberikan pukulan terakhir, mis. `PLAYER`, `WOLF` |

## Menggunakan Placeholder PlaceholderAPI di SCore

[PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) adalah salah satu pilar utama untuk membuat item dan blok: placeholder PlaceholderAPI apa pun yang terpasang (`%vault_eco_balance%`, `%luckperms_prefix%`, dll.) dapat digunakan di mana saja SCore membaca teks, dengan sintaks `%...%` yang sama:

- Lore
- Bagian perintah
- Pesan (semua jenis pesan: pesan cooldown, pesan kondisi tidak terpenuhi, pesan required things, dll.)
- Variabel
- dll.

Placeholder SCore diproses **sebelum** placeholder PlaceholderAPI, sehingga ekspresi PAPI dapat dengan aman membungkus placeholder SCore, seperti pada contoh matematika di atas (`%math_{score_variables_userLevel}*10%`).

## Dokumentasi Terkait

- [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- [SCore Variables](/tools-for-all-plugins-score/score-variables)
- [Plugin yang Kompatibel](/tools-for-all-plugins-score/compatible-plugins)
- [Placeholder Conditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions)

## Pertanyaan ?

**Apakah SCore kompatibel dengan PlaceholderAPI?**
Ya. Placeholder PlaceholderAPI apa pun berfungsi di lore, perintah, pesan, dan variabel di ExecutableItems, ExecutableBlocks, dan ExecutableEvents. Placeholder SCore diproses lebih dulu, sehingga kedua sintaks dapat digabung dalam satu baris tanpa konflik.

**Bisakah saya melakukan operasi matematika dengan placeholder?**
Penambahan/pengurangan sederhana berfungsi langsung: `%amount%+6` atau `%amount%-8`. Untuk perkalian, pembagian, atau ekspresi bersarang, bungkus placeholder SCore dengan placeholder matematika PlaceholderAPI, mis. `%math_0_(%usage%)*10%`.

**Bagaimana cara menggunakan placeholder PlaceholderAPI di perintah ExecutableItems?**
Tulis persis seperti placeholder SCore mana pun, inline di string perintah, misalnya `SEND_MESSAGE &7Balance: %vault_eco_balance%`. Placeholder ini berfungsi di perintah, kondisi, lore, dan setiap jenis pesan, tanpa pengaturan tambahan selain memasang PlaceholderAPI dan plugin sumbernya.

**Apa perbedaan antara `%var_X%` dan `%score_variables_X%`?**
`%var_X%` membaca variabel berlingkup item/blok yang disimpan langsung pada ExecutableItem atau ExecutableBlock tersebut. `%score_variables_<id>%` membaca variabel SCore global atau per pemain, yang dikelola dengan `/score variables` dan tersedia melalui PlaceholderAPI.

**Mengapa `%around_target%` kadang tidak berfungsi?**
Pada beberapa aktivator, target tidak diselesaikan pada referensi pertama. Gunakan `%around_target::step1%` sebagai gantinya, yang merupakan fallback terdokumentasi untuk perintah AROUND/NEAREST.
