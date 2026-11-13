---
description: >-
  Pelajari opsi desactiveDrops, nilai boolean yang mengizinkan atau mencegah
  drop vanilla saat blok dihancurkan atau mob dibunuh, pada ExecutableItems.
source_hash: 8065c44e1f6b0b11
translated_at: '2026-11-13T17:56:36.195Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### desactiveDrops

* Info: Nilai boolean yang mengizinkan atau mencegah loot vanilla dijatuhkan saat menghancurkan blok atau membunuh mob. Karena ini adalah drop vanilla, drop kustom dari mob kustom, misalnya (MythicMobs), tidak akan terpengaruh oleh opsi ini.
* Example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_DROP # replace that with the correct activator name
    desactiveDrops: true
```
