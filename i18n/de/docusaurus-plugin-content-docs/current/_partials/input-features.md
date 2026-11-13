---
description: >-
  Erfahre, wie die Funktion detailedInput in ExecutableItems Aktivator-Trigger
  nur dann auslöst, wenn die richtige Eingabe am Event beteiligt ist.
source_hash: e1ff368111ad4dd5
translated_at: '2026-11-13T17:35:02.312Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### detailedInput

* Info: Funktion, die die Trigger des Aktivators nur dann einschränkt, wenn die richtige Eingabe am Event beteiligt ist.
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

* Beispiel: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_INPUT
    detailedInputk: FORWARD_PRESS
```
