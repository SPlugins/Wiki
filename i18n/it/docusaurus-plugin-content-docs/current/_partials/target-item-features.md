---
description: >-
  Scopri come usare targetItemCommands e detailedTargetItems per eseguire
  comandi sugli item di un attivatore e filtrare gli item in ExecutableItems.
source_hash: 3f72eb20362123f8
translated_at: '2026-11-13T17:46:29.646Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### targetItemCommands

* Info: Gli item commands sono una lista di comandi che vengono eseguiti sull'item quando l'attivatore scatta.
  * Questo significa che se contiene un comando SCore, ad esempio MODIFY_ITEM_DURABILITY modification:-50000, la durabilità dell'item verrà ridotta di 50000.
    * Comandi [Target item commands](/tools-for-all-plugins-score/custom-commands/item-commands) personalizzati disponibili da SCore
* Esempio:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: YOUR_ACTIVATOR_WITH_AN_ITEM # replace that with the correct activator name
    targetItemCommands:
    - MODIFY_ITEM_DURABILITY modification:-50
```

### detailedTargetItems

* Info: Per gli attivatori che coinvolgono un item, puoi usare questa funzione come condizione per selezionare il tipo di item su cui questo attivatore scatterà.
  * Puoi selezionare un item vanilla di Minecraft, ad esempio:
    * "STONE"
  * Puoi selezionare un item vanilla di Minecraft con NBT, ad esempio:
    *  `DIRT{CUSTOMMODELDATA:5}`
  * Puoi mettere item in blacklist usando !, ad esempio:
    * "!TORCH"
* Esempio:

```yaml
activators:
  activator3: # Activator ID, you can create as many activator on the activators list  
    option: YOUR_ACTIVATOR_WITH_AN_ITEM # replace that with the correct activator name
    detailedTargetItems:
      items:
      - DIRT{CUSTOMMODELDATA:5}
      - !TORCH
      cancelEventIfNotValid: false
      messageIfNotValid: '&4&l[Error] &cthe item is not correct !'
```
