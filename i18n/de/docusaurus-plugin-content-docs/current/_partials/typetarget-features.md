---
description: >-
  Erfahre, wie das Feature typeTarget in ExecutableItems den Aktivator auf
  Klicks in die Luft oder auf Blöcke beschränkt, inklusive Beispiel.
source_hash: d1859a42c6017172
translated_at: '2026-11-13T17:35:52.775Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### typeTarget

* Info: Feature, das den Aktivator einschränkt, sodass er nur aktiviert/getriggert wird, wenn das Event mit einer bestimmten Klickart ausgelöst wurde
  * typeTarget
    * ONLY\_AIR: Schränkt den Aktivator so ein, dass er nur aktiviert/getriggert wird, wenn das Event durch einen Klick ausschließlich in die Luft ausgelöst wurde. Das heißt: Wenn Du auf einen Block geklickt hast, wird der Aktivator nicht getriggert. Lass dich nicht verwirren! Du fragst dich vielleicht, was passiert, wenn ich auf einen Spieler klicke? Das ist ja kein Block, also „Luft“. Nun ja, dieses Event liegt außerhalb der Instanz der Aktivatoren vom Typ PLAYER\_(CLICK), es ist eine Instanz von PLAYER\_CLICK\_ON\_PLAYER, daher wird der Aktivator auch dann nicht getriggert. Es muss eine Instanz von PLAYER\_(CLICK) sein.
    * ONLY\_BLOCK: Schränkt den Aktivator so ein, dass er nur aktiviert/getriggert wird, wenn das Event durch einen Klick ausschließlich auf einen Block ausgelöst wurde. Das bedeutet: Wenn Du in die Luft geklickt hast, wird der Aktivator nicht getriggert.
      * Dieses Feature macht den Aktivator zu einem Aktivator mit Block-Instanz, daher hat er blockCommands.
    * NO\_TYPE\_TARGET: Schränkt den Aktivator nicht bei der Klickart ein, beide Arten werden akzeptiert, Klicks in die Luft und Klicks auf Blöcke.
* Beispiel: 

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
