---
description: >-
  Découvrez la fonctionnalité detailedInput d'ExecutableItems : restreignez le
  déclenchement d'un activateur à l'input exact (clic, saut, sprint, etc.).
source_hash: e1ff368111ad4dd5
translated_at: '2026-11-13T17:21:21.030Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### detailedInput

* Info : fonctionnalité qui restreint le déclenchement des triggers de l'activateur uniquement si le bon input est impliqué dans l'événement.
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

* Exemple : 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_INPUT
    detailedInputk: FORWARD_PRESS
```
