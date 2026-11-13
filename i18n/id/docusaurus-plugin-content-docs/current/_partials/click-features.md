---
description: >-
  Pelajari fitur detailedClick di ExecutableItems untuk membatasi aktivator
  berdasarkan jenis klik: klik kanan, klik kiri, atau keduanya.
source_hash: cbb8e21c8345cc14
translated_at: '2026-11-13T17:56:24.918Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedClick

* Info: Fitur yang membatasi trigger aktivator hanya jika klik yang tepat terlibat dalam event.
  * detailedClick
    * RIGHT: Membatasi aktivator agar hanya berfungsi ketika event terjadi dengan klik kanan.
    * LEFT: Membatasi aktivator agar hanya berfungsi ketika event terjadi dengan klik kiri.
    * RIGHT\_OR\_LEFT: Tidak membatasi jenis klik untuk aktivator ini, sehingga klik kanan dan klik kiri sama-sama diizinkan.
* Contoh: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    detailedClick: LEFT
```
