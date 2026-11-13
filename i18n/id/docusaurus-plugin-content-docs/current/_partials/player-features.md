---
description: >-
  Pelajari cara menggunakan playerCommands, playerConditions, dan placeholder
  pemain pada aktivator di ExecutableItems, beserta contoh dan tautan
  referensinya.
source_hash: 6c1515db5b50e18e
translated_at: '2026-11-13T17:57:12.873Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### playerCommands

playerCommands adalah daftar perintah yang dijalankan dari konsol ketika aktivator terpicu, jika semua kondisi dan persyaratannya terpenuhi. Anda dapat menggunakan perintah vanilla, perintah SCore, dan perintah dari plugin lain di sini.

* Semua baris perintah dalam daftar ini diproses terlebih dahulu dengan placeholder dari Ssomar Plugins, lalu diproses melalui PAPI.
  * Disarankan untuk memeriksa [Daftar placeholder](/tools-for-all-plugins-score/placeholders) guna melihat placeholder apa saja yang dapat Anda gunakan pada setiap aktivator.

* Info: Player commands adalah daftar perintah yang biasanya dijalankan terhadap pemain ketika aktivator terpicu.
  * Artinya, jika berisi perintah SCore, contohnya: DAMAGE 5, damage akan diberikan kepada pengguna ExecutableItem tersebut.
    * [Perintah pemain](/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md) kustom yang tersedia dari SCore
  * Anda juga dapat menjalankan perintah dari plugin lain atau perintah vanilla. Perintah-perintah ini akan dijalankan oleh konsol.
    * `minecraft:say Hey`
    * `money give %player% 500`
* Contoh:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_RIGHT_CLICK
    playerCommands:
    - SEND_MESSAGE &eHey ! I am a message and the player who triggered this activator
      can see it ^^
    - effect give %player% regeneration 5 5 true
    - SEND_MESSAGE &dYou received regeneration :P
```

### playerConditions

* Info: Anda dapat menggunakan kondisi ini pada semua jenis aktivator
* [Kondisi pemain](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### Placeholder pemain

Ketika aktor utama dari event adalah pemain, Anda dapat menggunakan [placeholder pemain](/tools-for-all-plugins-score/placeholders#player-placeholders) di konfigurasi aktivator Anda (perintah, kondisi, dan lainnya)
