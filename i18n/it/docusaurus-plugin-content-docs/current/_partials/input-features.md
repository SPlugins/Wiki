---
description: >-
  Scopri la funzione detailedInput di ExecutableItems: limita l'attivazione di
  un attivatore solo al giusto input coinvolto nell'evento, con l'elenco dei
  valori.
source_hash: e1ff368111ad4dd5
translated_at: '2026-11-13T17:46:10.041Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### detailedInput

* Info: Funzione che limita l'attivazione dei trigger dell'attivatore solo se l'input corretto è coinvolto nell'evento.
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

* Esempio: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_INPUT
    detailedInputk: FORWARD_PRESS
```
