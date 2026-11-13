---
description: >-
  Pelajari fitur detailedEffects pada aktivator di ExecutableItems: pilih jenis
  efek sebagai kondisi untuk memicu aktivator, lengkap dengan contohnya.
source_hash: 064a6b682a182425
translated_at: '2026-11-13T17:56:38.717Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedEffects

* Info: Fitur untuk aktivator yang berkaitan dengan efek. Di sini Anda dapat memilih jenis efek terkait sebagai kondisi untuk memicu aktivator.
* Contoh:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_EFFECT # replace that with the correct activator name
    detailedEffects:
      effects:
      - SPEED
      cancelEventIfNotValid: true
      messageIfNotValid: '&cYou cant use the activator since you dont meet the effect
        condition'
```
