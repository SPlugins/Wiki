---
description: >-
  Pelajari entityCommands, detailedEntities, entityConditions, dan placeholder
  entitas untuk aktivator ExecutableItems yang melibatkan entitas atau mob.
source_hash: 54a0eb1b19c50558
translated_at: '2026-11-13T17:56:54.785Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### entityCommands

Commands adalah daftar perintah yang dijalankan dari konsol ketika aktivator memenuhi semua kondisi dan persyaratannya. Anda dapat menggunakan perintah vanilla, perintah SCore, dan perintah plugin lain di sini.

* Semua baris perintah dalam daftar perintah ini diproses terlebih dahulu dengan placeholder dari Ssomar Plugins, lalu diproses melalui PAPI. 
  * Disarankan untuk memeriksa [Placeholders](/tools-for-all-plugins-score/placeholders) guna melihat placeholder apa saja yang dapat Anda gunakan pada setiap aktivator.
* Ada tiga jenis target entitas pada perintah
  * Player: pemain/pengguna yang memicu aktivator pada ExecutableItem.
  * Target: pemain yang ditargetkan/musuh yang terlibat dalam sebuah aktivator.
  * Entity: entitas/mob/musuh yang terlibat dalam sebuah aktivator.
* Jenis kategori aktivator: PLAYER\_ENTITY
* Info: Daftar perintah yang biasanya dijalankan terhadap entitas ketika aktivator terpicu.
  * Yang dimaksud entitas di sini adalah entitas/mob/musuh yang terlibat dalam sebuah aktivator.
  * Kami tahu bahwa pemain juga dianggap sebagai entitas, tetapi entitas yang terlibat dalam aktivator hanyalah mob/musuh yang terlibat dalam event tersebut.
  * Anda dapat melihat daftar perintah entitas di sini: [Perintah entitas](/tools-for-all-plugins-score/custom-commands/entity-commands)
* Contoh:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY # replace that with the correct activator name
    entityCommands:
    - DAMAGE 10
    - BURN 5
```

* Penting untuk dipahami bahwa jika aktivator Anda juga memiliki pemain, Anda dapat menggunakan playerCommands sehingga kita bisa memiliki, misalnya: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY  # replace that with the correct activator name
    playerCommands:
    - SEND_MESSAGE &cThe power of the fire will rise in 5 seconds on the entity
    entityCommands:
    - DELAY 5
    - DAMAGE 10
    - BURN 2
```

### detailedEntities

* Info: Untuk aktivator yang melibatkan entitas, Anda dapat memilih jenis entitas sebagai kondisi tempat aktivator ini akan terpicu dengan menggunakan fitur ini.
  * Anda dapat memilih entitas Minecraft vanilla (info: [Daftar EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)) seperti:
    * "ZOMBIE"
  * <CustomTag type="premium" /> Memerlukan [plugin NBTAPI](https://modrinth.com/plugin/nbtapi). Anda dapat memilih mob Minecraft vanilla dengan NBT (info: [NBT Tags of entities](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities)) seperti:
    *  `ZOMBIE{isBaby:1}`
    * `ZOMBIE{CustomName:"*"}`
  * Anda dapat memilih mob MythicMob seperti:
    * "MM-\<ID>"
  * Anda dapat memasukkan sebuah mob ke daftar hitam dengan menggunakan ! seperti
    * !SKELETON

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY  # replace that with the correct activator name
    detailedEntities:
    - MM-Giant
    - MM-MyMob
    - '!SKELETON'
    - ZOMBIE{CustomName:"*"}
    - ZOMBIE{IsBaby:1}
```

### entityConditions

* Info: Fitur untuk aktivator yang melibatkan entitas, di sini Anda dapat mengatur kondisi untuk entitas yang terlibat.
* [Kondisi entitas](/tools-for-all-plugins-score/custom-conditions/entity-conditions.md)

### Entity placeholders

Ketika pelaku utama dari event adalah sebuah entitas, Anda dapat menggunakan [placeholder entitas](/tools-for-all-plugins-score/placeholders#entity-placeholders) dalam konfigurasi aktivator Anda (perintah, kondisi, dan lainnya).
