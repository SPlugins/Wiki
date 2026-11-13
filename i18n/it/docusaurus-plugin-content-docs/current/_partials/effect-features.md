---
description: >-
  Scopri la funzione detailedEffects degli attivatori di ExecutableItems: scegli
  come condizione il tipo di effetto coinvolto per far scattare l'attivatore.
source_hash: 064a6b682a182425
translated_at: '2026-11-13T17:45:47.741Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedEffects

* Info: Funzione per gli attivatori che riguardano gli effetti: qui puoi selezionare come condizione il tipo di effetto coinvolto per far scattare l'attivatore.
* Esempio:

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
