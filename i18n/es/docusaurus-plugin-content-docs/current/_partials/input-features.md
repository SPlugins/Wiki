---
description: >-
  Explica el activador detailedInput de SPlugins, que restringe los triggers
  según el tipo exacto de input del jugador.
source_hash: e1ff368111ad4dd5
translated_at: '2026-10-03T10:44:23.935Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### detailedInput

* Info: Función que restringe los triggers del activador solo si el input correcto está involucrado en el evento.
  * detailedClick
    * LEFT_PRESS
    * LEFT_RELEASE
    * RIGHT_PRESS
    * RIGHT_RELEASE
    * FORWARD_PRESS
    * FORWARD_RELEASE
    * BACKWARD_PRESS
    * BACKWARD_RELEASE
    * JUMP_PRESS
    * JUMP_RELEASE
    * SNEAK_PRESS
    * SNEAK_RELEASE
    * SPRINT_PRESS
    * SPRINT_RELEASE

* Ejemplo: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_INPUT
    detailedInputk: FORWARD_PRESS
```
