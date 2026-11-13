---
description: >-
  Pelajari blockCommands, detailedBlocks, blockConditions, dan placeholder blok
  untuk aktivator kategori PLAYER_BLOCK di ExecutableItems.
source_hash: e670b85f3ec02fc8
translated_at: '2026-11-13T17:56:18.158Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### blockCommands 

Commands adalah daftar perintah yang dijalankan dari konsol ketika aktivator memenuhi semua kondisi dan persyaratan. Anda dapat menggunakan perintah vanilla, perintah SCore, dan perintah dari plugin lain di sini.

* Semua baris perintah dalam daftar perintah ini diproses terlebih dahulu dengan placeholder dari Ssomar Plugins, lalu diproses melalui PAPI. 
  * Disarankan untuk memeriksa [Placeholder](/tools-for-all-plugins-score/placeholders) guna melihat placeholder apa saja yang dapat Anda gunakan pada setiap aktivator.
* Ada tiga tipe target entitas pada perintah
  * Player: Pemain/pengguna yang memicu aktivator pada ExecutableItem.
  * Target: Pemain yang ditargetkan/musuh yang terlibat dalam sebuah aktivator.
  * Entity: Entitas/mob/musuh yang terlibat dalam sebuah aktivator.
* Tipe kategori aktivator: PLAYER\_BLOCK
* Info: Daftar perintah yang biasanya dijalankan terhadap blok ketika aktivator terpicu.
  * Artinya, aktivator harus melibatkan sebuah blok. Misalnya PLAYER\_HIT\_PLAYER adalah sebuah aktivator, tetapi tidak melibatkan blok, sehingga blockCommands tidak tersedia di sana. Dengan aktivator PLAYER\_BLOCK\_BREAK ada blok yang terlibat, sehingga blockCommands tersedia di sana.
  * Contoh lain: PLAYER\_RIGHT\_CLICK memiliki activatorFeature bernama typeTarget, secara default nilainya ONLY\_AIR sehingga blockCommands tidak tersedia karena aktivator tidak melibatkan blok. Namun, typeTarget dapat diubah menjadi ONLY\_BLOCK, dan aktivator tersebut akan memiliki blockCommands sebagai fitur yang tersedia, info selengkapnya di sini -> \<IF I FORGOT PLS PING VAYK>
  * Anda dapat melihat daftar blockCommands di sini -> [Perintah blok](/tools-for-all-plugins-score/custom-commands/block-commands)
* Contoh:

```yaml
activators: 
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    blockCommands:
    - EXPLODE
```

* Penting untuk dipahami bahwa jika aktivator Anda juga memiliki pemain, Anda dapat menggunakan playerCommands, sehingga kita bisa memiliki misalnya: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    playerCommands:
    - SEND_MESSAGE &6You have broken a block, it will explode in 5 seconds !
    blockCommands:
    - DELAY 5
    - EXPLODE
```

### detailedBlocks

* Info: Di sini Anda dapat memilih, sebagai kondisi, tipe blok tempat aktivator ini akan terpicu dengan menggunakan fitur ini.
  * Anda dapat memilih blok dari Minecraft Vanilla seperti:
    * "STONE"
  * <CustomTag type="premium" /> <CustomTag type="version" version="1.13" /> Anda dapat memilih blok dari Minecraft Vanilla dengan NBT (info: [Block\_states](https://minecraft.fandom.com/wiki/Block_states)) seperti: 
    * `FURNACE{lit:true}`
  * Anda dapat memilih blok dari ItemsAdder seperti:
    * "ITEMSADDER:\<id>"
  * Anda dapat memilih blok dari ExecutableBlocks seperti:
    * "EXECUTABLEBLOCKS:\<id>"
  * Anda dapat memasukkan blok tertentu ke daftar hitam dengan menambahkan ! di awal seperti:
    * "!DIRT"
  * Anda dapat menambahkan Block Tags seperti: 
    * "#MINECRAFT\:MINEABLE/PICKAXE"
  * Anda dapat menambahkan grup blok seperti
    * "ALL\_ORES"

<details>

<summary>Daftar grup blok</summary>

```
    ALL_CHESTS,
    ALL_FURNACES,
    ALL_PLANKS,
    ALL_LOGS,
    ALL_STRIPPED_LOGS,
    ALL_STRIPPED_WOODS,
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
    ALL_CONCRETE_POWDERS,
    ALL_GLASS,
    ALL_STAINED_GLASS,
    ALL_SHULKER_BOXES,
    ALL_LEAVES,
    ALL_CARPETS;
```

</details>

* Contoh:

```yaml
activators:  
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    detailedBlocks:
      blocks:
      - STONE
      - COBBLESTONE
      - ANDESITE
      - FURNACE{lit:true} #(🎇 **BLOCK STATE FEATURE IS PREMIUM EXCLUSIVE ONLY AND FOR 1.13+** 🎇)
      - ITEMSADDER:turquoise_block
      - EXECUTABLEBLOCKS:CUSTOMDIRT
      - !DIRT
      - ALL_ORES
      - '#MINECRAFT:MINEABLE/PICKAXE'
      cancelEventIfNotValid: false
```

### blockConditions

* Info: Di sini Anda dapat mengatur kondisi untuk blok yang terlibat.
* [Kondisi blok](/tools-for-all-plugins-score/custom-conditions/block-conditions.md)

### Placeholder blok

Ketika aktor utama dari event adalah sebuah blok, Anda dapat menggunakan [placeholder blok](/tools-for-all-plugins-score/placeholders#-block-placeholders) di konfigurasi aktivator Anda (perintah, kondisi, dan lainnya)
