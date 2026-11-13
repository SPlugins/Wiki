---
description: >-
  Découvrez la fonctionnalité detailedEffects des activateurs d'ExecutableItems
  : choisissez le type d'effet concerné comme condition de déclenchement.
source_hash: 064a6b682a182425
translated_at: '2026-11-13T17:21:00.355Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedEffects

* Info : fonctionnalité pour les activateurs qui impliquent des effets. Vous pouvez y sélectionner, comme condition, le type d'effet concerné pour déclencher l'activateur.
* Exemple :

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
