---
description: >-
  Explica el feature typeTarget de SPlugins, que restringe los activadores según
  el tipo de clic: aire, bloque o ambos.
source_hash: d1859a42c6017172
translated_at: '2026-10-03T10:44:43.287Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### typeTarget

* Info: Feature que restringe el activador para que solo se active/dispare cuando el evento ocurra con cierto tipo de clic
  * typeTarget
    * ONLY\_AIR: Restringe el activador para que solo se active/dispare cuando el evento ocurra al hacer clic únicamente en el aire, es decir, si hiciste clic en un bloque el activador no se disparará. ¡No te confundas! Puedes pensar: ¿qué pasa si hago clic en un jugador? que no será un bloque, así que estaría en el "aire", pues bien.. eso incluso está fuera de la instancia de los activadores de tipo PLAYER\_(CLICK), ese evento es instancia de PLAYER\_CLICK\_ON\_PLAYER así que el activador tampoco se disparará, debe ser instancia de PLAYER\_(CLICK).
    * ONLY\_BLOCK: Restringe el activador para que solo se active/dispare cuando el evento ocurra al hacer clic únicamente en un bloque. Esto significa que si hiciste clic en el aire el activador no se disparará.
      * Este feature convierte al activador en una instancia de activador de bloque, por lo que tendrá blockCommands.
    * NO\_TYPE\_TARGET: No restringe el activador según el tipo de clic, se aceptan ambos tipos, clics en el aire y clics en bloques.
* Ejemplo: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    typeTarget: NO_TYPE_TARGET
    playerCommands: []
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    typeTarget: ONLY_BLOCK
    playerCommands: []
    blockCommands: [] # Added because of typeTarget: ONLY_BLOCK which enables the instance of the activator to block instance
```
