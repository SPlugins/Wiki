---
description: >-
  Erfahre, wie du mit detailedDamageCauses in Aktivatoren die Art des erlittenen
  oder verursachten Schadens als Bedingung festlegst. Teil der SPlugins.
source_hash: 2b07f0e42975b7ba
translated_at: '2026-11-13T17:34:25.104Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedDamageCauses

* Info: Feature für Aktivatoren, die mit Schaden zu tun haben. Hier kannst du als Bedingung die Art des Schadens auswählen, der je nach verwendetem Aktivator entweder erlitten oder verursacht wird.
* Beispiel:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_DAMAGES # replace that with the correct activator name
    detailedDamageCauses:
    - ENTITY_EXPLOSION
```
