---
description: >-
  Pelajari cara kerja targetItemCommands dan detailedTargetItems untuk
  menentukan item target pada aktivator di SCore dan plugin SPlugins lainnya.
source_hash: 3f72eb20362123f8
translated_at: '2026-11-13T17:57:19.606Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### targetItemCommands

* Info: Item commands adalah daftar perintah yang dijalankan untuk item ketika aktivator terpicu.
  * Artinya, jika ada perintah SCore, contoh: MODIFY_ITEM_DURABILITY modification:-50000, durability item akan berkurang sebanyak 50000.
    * [Target item commands](/tools-for-all-plugins-score/custom-commands/item-commands) kustom tersedia dari SCore
* Contoh:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: YOUR_ACTIVATOR_WITH_AN_ITEM # replace that with the correct activator name
    targetItemCommands:
    - MODIFY_ITEM_DURABILITY modification:-50
```

### detailedTargetItems

* Info: Untuk aktivator yang melibatkan sebuah item, Anda dapat memilih sebagai kondisi jenis item yang akan memicu aktivator ini dengan menggunakan fitur ini.
  * Anda dapat memilih item vanilla Minecraft seperti:
    * "STONE"
  * Anda dapat memilih item vanilla Minecraft dengan NBT seperti:
    *  `DIRT{CUSTOMMODELDATA:5}`
  * Anda dapat memasukkan item ke daftar hitam menggunakan ! seperti:
    * "!TORCH"
* Contoh:

```yaml
activators:
  activator3: # Activator ID, you can create as many activator on the activators list  
    option: YOUR_ACTIVATOR_WITH_AN_ITEM # replace that with the correct activator name
    detailedTargetItems:
      items:
      - DIRT{CUSTOMMODELDATA:5}
      - !TORCH
      cancelEventIfNotValid: false
      messageIfNotValid: '&4&l[Error] &cthe item is not correct !'
```
