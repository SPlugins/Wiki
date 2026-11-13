---
description: >-
  Pelajari cara kerja targetCommands, targetConditions, dan placeholder pemain
  target pada aktivator ExecutableItems dan SCore, beserta contohnya.
source_hash: 8f10e4518745e33e
translated_at: '2026-11-13T17:57:29.793Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### targetCommands

Commands adalah daftar perintah yang dijalankan dari console ketika aktivator memenuhi semua kondisi dan persyaratan. Anda dapat menggunakan perintah vanilla, perintah SCore, dan perintah dari plugin lain di sini.

* Semua baris perintah dalam daftar perintah ini diparsing terlebih dahulu dengan placeholder dari Ssomar Plugins, lalu diparsing melalui PAPI. 
  * Disarankan untuk memeriksa [Placeholders](/tools-for-all-plugins-score/placeholders) guna melihat placeholder apa saja yang dapat Anda gunakan pada setiap aktivator.
* Ada tiga jenis target entitas pada perintah
  * Player: Pemain/pengguna yang memicu aktivator pada ExecutableItem.
  * Target: Pemain target/musuh yang terlibat dalam sebuah aktivator.
  * Entity: Entitas/mob/musuh yang terlibat dalam sebuah aktivator.
* Info: Target commands adalah daftar perintah yang biasanya dijalankan terhadap target ketika aktivator terpicu.
  * Artinya, jika ada perintah SCore DAMAGE 5 di targetCommands, maka damage akan diterapkan ke target/musuh yang terlibat dalam aktivator.
  * Disebut "biasanya dijalankan terhadap pemain" karena hal ini berlaku untuk perintah SCore. Ingat, Anda dapat menggunakan perintah plugin lain atau perintah vanilla, jadi jika Anda menambahkan "effect give %player% strength 5 5" meskipun berada di targetCommands, parsing placeholder akan menerapkan efeknya ke %player%. Jika Anda ingin menerapkan perintah ini ke target, gunakan %target%. Informasi lebih lanjut di [Placeholders](/tools-for-all-plugins-score/placeholders)
  * Anda dapat melihat daftar targetCommands di sini -> [Player & Target commands](/tools-for-all-plugins-score/custom-commands/player-and-target-commands)
* Contoh:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    targetCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%
    - effect give %target% slowness 5 5 true
    - SEND_MESSAGE &7Your feets are heavier than before, eh ?
```

* Penting untuk dipahami bahwa jika aktivator Anda juga memiliki pemain, Anda dapat menggunakan playerCommands sehingga kita bisa memiliki, misalnya: 

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    playerCommands:
    - SEND_MESSAGE &eYou have hit %target%, he cant pick up items in 5 seconds
    targetCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%, in 5 seconds you can't pick up items
    - CANCEL_PICKUP time:100
```

### targetConditions

* Tipe kategori aktivator: PLAYER\_TARGET
* Info: Fitur untuk aktivator yang melibatkan pemain target, di sini Anda dapat mengatur kondisi untuk pemain target yang terlibat.
* [Target conditions](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### Target player placeholders

Ketika aktor kedua dari event adalah seorang pemain, Anda dapat menggunakan [placeholder pemain target](/tools-for-all-plugins-score/placeholders#-player-placeholders) dalam konfigurasi aktivator Anda (perintah, kondisi, dan lainnya)
