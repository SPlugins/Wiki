---
description: >-
  Pelajari fitur typeTarget di ExecutableItems: batasi aktivator agar hanya
  terpicu saat klik di udara, klik pada blok, atau keduanya.
source_hash: d1859a42c6017172
translated_at: '2026-11-13T17:57:37.518Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### typeTarget

* Info: Fitur yang membatasi aktivator sehingga hanya akan diaktifkan/dipicu ketika event terjadi dengan jenis klik tertentu
  * typeTarget
    * ONLY\_AIR: Membatasi aktivator sehingga hanya akan diaktifkan/dipicu ketika event terjadi saat mengklik di udara saja, artinya jika Anda mengklik sebuah blok, aktivator tidak akan terpicu. Jangan bingung! Anda mungkin bertanya, bagaimana jika saya mengklik seorang pemain? Itu bukan blok, jadi berarti "udara", bukan? Nah.. itu bahkan berada di luar instance aktivator bertipe PLAYER\_(CLICK), karena event tersebut merupakan instance dari PLAYER\_CLICK\_ON\_PLAYER, sehingga aktivator juga tidak akan terpicu, event tersebut harus merupakan instance dari PLAYER\_(CLICK).
    * ONLY\_BLOCK: Membatasi aktivator sehingga hanya akan diaktifkan/dipicu ketika event terjadi dengan mengklik pada sebuah blok saja. Artinya jika Anda mengklik di udara, aktivator tidak akan terpicu.
      * Fitur ini membuat aktivator menjadi aktivator instance blok sehingga akan memiliki blockCommands.
    * NO\_TYPE\_TARGET: Tidak membatasi aktivator pada jenis klik, kedua jenis akan diterima, klik di udara maupun klik pada blok.
* Contoh: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    typeTarget: NO_TYPE_TARGET
    playerCommands: []
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    typeTarget: ONLY_BLOCK
    playerCommands: []
    blockCommands: [] # Added because of typeTarget: ONLY_BLOCK which enables the instance of the activator to block instance
```
