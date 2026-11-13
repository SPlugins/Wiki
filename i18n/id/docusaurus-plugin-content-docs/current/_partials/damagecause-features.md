---
description: >-
  Pelajari fitur detailedDamageCauses di ExecutableItems: pilih jenis kerusakan
  yang diterima atau diberikan sebagai kondisi pada aktivator yang terkait
  kerusakan.
source_hash: 2b07f0e42975b7ba
translated_at: '2026-11-13T17:56:30.517Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedDamageCauses

* Info: Fitur untuk aktivator yang melibatkan kerusakan. Di sini Anda dapat memilih jenis kerusakan yang diterima atau diberikan sebagai kondisi, tergantung pada aktivator yang Anda gunakan.
* Contoh:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_DAMAGES # replace that with the correct activator name
    detailedDamageCauses:
    - ENTITY_EXPLOSION
```
