---
description: >-
  Erfahre, wie du mit ExecutableItems Custom Drops für Entities und Blöcke
  erstellst, mit Aktivatoren, EI-Befehlen und Vanilla-Befehlen.
source_hash: 53c8b7deae5be6f3
translated_at: '2026-11-13T12:05:39.778Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Custom Drops

:::danger
DIESES TUTORIAL GILT FÜR EXECUTABLEITEMS, DAS BEDEUTET: **DIESE DROPS FUNKTIONIEREN NICHT GLOBAL**, SIE FUNKTIONIEREN NUR, WENN DU EIN EXECUTABLEITEM IN DEINEM INVENTAR HAST.

\
WENN DU EINEN GLOBALEN CUSTOM DROP ERSTELLEN MÖCHTEST, VERWENDE **EXECUTABLEVENTS**
:::

Wenn du Custom Drops erstellen möchtest, müssen wir zuerst wissen, um welche Art von Drop es sich handelt. Beide werden erklärt:

## Entity-Drops

Verwende den Aktivator PLAYER\_KILL\_ENTITY oder PLAYER\_KILL\_PLAYER und bei den Befehlen kannst du entweder Folgendes verwenden:

* EI-Befehle, um die Items zu droppen
  * DROPEXECUTABLEITEM
  * DROPEXECUTABLEBLOCK
  * DROPITEM
* Vanilla-Befehle, um die Items zu droppen
  * Ein gutes Beispiel dafür ist, den Kopf des Spielers zu geben
    * execute at %player% run summon item %target\_x\_int% %target\_y\_int% %target\_z\_int%  \{Item:\{id:"player\_head",Count:1b,tag:\{SkullOwner:"%target%"\\}\}\}

:::info
Vergiss nicht: Wenn du nicht willst, dass dieser Befehl zu 100 % funktioniert, kannst du ihm Chancen geben! Schau einfach im Wiki nach, das ist dort bereits erklärt ^^
:::

## Block-Drops

Verwende den Aktivator PLAYER\_BREAK\_BLOCK und bei den Befehlen kannst du entweder Folgendes verwenden:

* EI-Befehle, um die Items zu droppen
  * DROPEXECUTABLEITEM
  * DROPEXECUTABLEBLOCK
  * DROPITEM
* Vanilla-Befehle, um die Items zu droppen
  * Vanilla-Befehl, um mehr als ein abgebautes Item zu droppen (dieses Beispiel gibt 2 Items mehr, du kannst das randomisieren, indem du statt „2" einen RNG-Platzhalter verwendest)
    * execute at %player% run summon minecraft\:item %block\_x\_int% %block\_y\_int% %block\_z\_int% \{Item:\{id:"minecraft:%block\_item\_material\_lower%",Count:2b\\}\}

:::info
Vergiss nicht: Wenn du nicht willst, dass dieser Befehl zu 100 % funktioniert, kannst du ihm Chancen geben! Schau einfach im Wiki nach, das ist dort bereits erklärt ^^
:::
