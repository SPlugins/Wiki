---
description: >-
  Pelajari fitur detailedInput di ExecutableItems: membatasi trigger aktivator
  hanya jika input yang tepat terlibat dalam event, beserta daftar nilai
  detailedClick.
source_hash: e1ff368111ad4dd5
translated_at: '2026-11-13T17:57:00.785Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### detailedInput

* Info: Fitur yang membatasi trigger aktivator hanya jika input yang benar terlibat dalam event.
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

* Contoh: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_INPUT
    detailedInputk: FORWARD_PRESS
```
