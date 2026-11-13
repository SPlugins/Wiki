---
description: >-
  Erfahre, wie du mit targetItemCommands Befehle für Items ausführst und mit
  detailedTargetItems Item-Typen filterst. Gehört zum Plugin SCore.
source_hash: 3f72eb20362123f8
translated_at: '2026-11-13T17:35:30.857Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### targetItemCommands

* Info: Item Commands ist eine Liste von Befehlen, die für das Item ausgeführt werden, wenn der Aktivator ausgelöst wird.
  * Das heißt: Hat das Item einen SCore-Befehl, zum Beispiel MODIFY_ITEM_DURABILITY modification:-50000, wird die Haltbarkeit des Items um 50000 verringert.
    * Eigene [Target item commands](/tools-for-all-plugins-score/custom-commands/item-commands) sind über SCore verfügbar
* Beispiel:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: YOUR_ACTIVATOR_WITH_AN_ITEM # replace that with the correct activator name
    targetItemCommands:
    - MODIFY_ITEM_DURABILITY modification:-50
```

### detailedTargetItems

* Info: Bei Aktivatoren, die ein Item betreffen, kannst du mit diesem Feature als Bedingung festlegen, bei welchem Item-Typ (bzw. welchen Item-Typen) dieser Aktivator ausgelöst wird.
  * Du kannst ein Minecraft-Vanilla-Item auswählen, zum Beispiel:
    * "STONE"
  * Du kannst ein Minecraft-Vanilla-Item mit NBT auswählen, zum Beispiel:
    *  `DIRT{CUSTOMMODELDATA:5}`
  * Du kannst Items mit ! auf die Blacklist setzen, zum Beispiel:
    * "!TORCH"
* Beispiel:

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
