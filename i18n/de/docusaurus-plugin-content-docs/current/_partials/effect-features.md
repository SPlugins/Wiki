---
description: >-
  Erfahre, wie die Funktion detailedEffects in ExecutableItems Aktivatoren mit
  Effekten steuert und den Effekttyp als Bedingung für den Trigger nutzt.
source_hash: 064a6b682a182425
translated_at: '2026-11-13T17:34:39.788Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedEffects

* Info: Funktion für Aktivatoren, die Effekte betrifft. Hier kannst Du als Bedingung den beteiligten Effekttyp auswählen, um den Aktivator auszulösen.
* Beispiel:

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
