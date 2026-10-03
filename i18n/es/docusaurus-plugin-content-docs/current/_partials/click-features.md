---
description: >-
  Explica la función detailedClick de SPlugins, que restringe los triggers de un
  activador según el tipo de clic (derecho o izquierdo).
source_hash: cbb8e21c8345cc14
translated_at: '2026-10-03T10:35:40.976Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedClick

* Info: Función que restringe los triggers del activador solo si el clic correcto está implicado en el evento.
  * detailedClick
    * RIGHT: Restringe el activador para que solo funcione cuando el evento se haya producido con clic derecho
    * LEFT: Restringe el activador para que solo funcione cuando el evento se haya producido con clic izquierdo
    * RIGHT\_OR\_LEFT: No restringe el tipo de clic para este activador, permitirá tanto el clic derecho como el izquierdo.
* Example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    detailedClick: LEFT
```
