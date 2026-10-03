---
description: >-
  Explica detailedEffects en SPlugins: cómo elegir el tipo de efecto como
  condición para activar un activador.
source_hash: 064a6b682a182425
translated_at: '2026-10-03T10:36:05.891Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedEffects

* Información: Función para activadores que involucra efectos, aquí puedes seleccionar como condición el tipo de efecto involucrado para activar el activador.
* Ejemplo:

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
