---
description: >-
  Aprende a usar detailedCommands y registerCommand en los activadores de
  comandos de ExecutableItems: condición, autocompletado y comando registrado.
source_hash: dd51810cf51b3bae
translated_at: '2026-11-13T18:12:15.876Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedCommands

* Info: Función para activadores que involucran comandos; aquí puedes seleccionar como condición el comando con el que debe ejecutarse el activador.
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

### registerCommand

* Info: Valor booleano, `false` por defecto. Solo para `PLAYER_WRITE_COMMAND`. Sin esto, el activador se ejecuta pero el comando no existe para el servidor: la barra de chat lo muestra en rojo y el servidor responde "Unknown command". Con `registerCommand: true`, los comandos de `detailedCommands` se registran en el servidor:
  * Ya no aparece "Unknown command" y, en 1.13+, la barra de chat deja de mostrar el comando en rojo.
  * Autocompletado con Tab del nombre del comando y de las palabras escritas después en `detailedCommands` (`/promo summer` y `/promo winter` sugieren `summer` y `winter`).
  * El comando registrado no hace nada por sí mismo: el activador sigue ejecutándose una sola vez, como antes.
  * Nunca reemplaza un comando existente (un comando de Minecraft o de otro plugin): se muestra una advertencia en la consola, no se registra nada para este comando y el activador se sigue ejecutando cuando se escribe el comando.
  * Varios activadores (o ExecutableItems y ExecutableEvents) pueden usar el mismo comando: se registra una sola vez.
  * Los comandos registrados siguen a las configs: se actualizan tras un reload, un guardado del editor o una eliminación, y se quitan cuando el plugin se desactiva.
  * Un activador con `registerCommand: true` pero sin `detailedCommands` no registra nada.
* Ejemplo:

```yaml
activators:
  activator1:
    option: PLAYER_WRITE_COMMAND
    detailedCommands:
    - promo summer
    - promo winter
    registerCommand: true
    playerCommands:
    - SEND_MESSAGE &aPromo: %arg1%
```
