---
description: >-
  Explica la función detailedCommands de SPlugins para configurar comandos como
  condición en los activadores.
source_hash: 81cd8e66ccc35e49
translated_at: '2026-10-03T10:35:48.738Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedCommands

* Info: Función para activadores que involucra comandos, aquí puedes seleccionar como condición el comando que el activador debe ejecutar.
* Ejemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_COMMAND # replace that with the correct activator name
    detailedCommands:
    - customHealCommand
    playerCommands:
    - SEND_MESSAGE &dYou have been healed !
    - REGAIN HEALTH 10
```
