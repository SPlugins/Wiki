---
description: >-
  Alle Block-Funktionen von ExecutableBlocks im Überblick: Aktivatoren,
  Grundeinstellungen, Titel, Container, Ofen, Trichter, Display und mehr.
source_hash: 7bbe17ba1d336968
translated_at: '2026-11-13T17:22:53.325Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Block-Funktionen


## Aktivatoren

* Sehr wichtige Funktionen, mit denen Du Deinen Blöcken Fähigkeiten hinzufügen kannst
* Eigenes Wiki für diese Funktion: [EB-Aktivatorenliste](/executableblocks/configurations/activator-configuration/list-of-the-activators.md) und [EB-Aktivator-Funktionen](/executableblocks/configurations/activator-configuration/activators-features.md)


## Grundeinstellungen

### CreationType

* Die Art, wie der EB erstellt wird
  * BASIC\_CREATION
  * DISPLAY\_CREATION
  * IMPORT FROM EI
  * IMPORT FROM ITEMSADDER
  * IMPORT FROM NEXO
  * IMPORT FROM ORAXEN

### MATERIAL

* Info: Das Minecraft-Basis-Item des Executable Blocks. [Material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
  * Zusätzliche Info: Das Item muss ein platzierbarer Block sein.

```yaml
material: DIRT
```

:::info
Spawner werden unterstützt! Wenn Du einen Typ für Deinen Spawner festlegen möchtest, füge Folgendes hinzu:

`spawnerType: CHICKEN`

[EntityType-Liste](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
:::


### DISPLAYNAME

* Info: Der Name des Blocks
* Beispiel: 

```yaml
name: '&cEpic Sword'
```

### LORE

* Info: Die Lore des Blocks
* Beispiel:

```yaml
lore:
- §6>> §e----------- §6<<
- §aClick on this block
- §awhen it is placed !
- §aand see the custom structures !
- §6>> §e----------- §6<<
```

* Platzhalter, die Du in der Lore verwenden kannst: %player%, [%usage%](block-features.md#hide-usage-1.14+) usw.

### DROP BLOCK IF IT IS BROKEN

* Info: Legt fest, ob Dein Executable Block durch Abbauen erhältlich sein soll oder nicht
* Beispiel: 

```yaml
dropBlockIfItIsBroken: true
```

* Erforderlich: NEIN (Standard: true)

### DROP BLOCK IF IT IS BURNS

* Info: Legt fest, ob Dein Executable Block durch Abbauen erhältlich sein soll oder nicht
* Beispiel: 

```yaml
dropBlockIfItIsBurns: true
```

* Erforderlich: NEIN (Standard: false)

### DROP BLOCK WHEN IT EXPLODES

* Info: Legt fest, ob Dein Executable Block erhältlich sein soll, wenn er durch eine Explosion zerstört wird
* Beispiel:

```yaml
dropBlockWhenItExplodes: true
```

* Erforderlich: NEIN (Standard: true)

### DROP TYPE

* Info: Wähle die Art des Drops, den der EB-Block hinterlässt
* Drop-Arten:
  * IN\_THE\_INVENTORY
  * ON\_THE\_GROUND

### ONLY BREAKABLE WITH EI

* Info: Voraussetzung, dass mindestens das erforderliche Executable Item in der Haupthand oder Nebenhand gehalten wird, um den Executable Block abzubauen
* Beispiel:

```yaml
onlyBreakableWithEI:
- firework
```

* Erforderlich: NEIN (Standard: leer)

### CANBEMOVED

* Info: Legt fest, ob der Block mit einem Kolben bewegt werden kann oder nicht.
* Beispiel:

```yaml
canBeMoved: false
```

### EXECUTABLE ITEMS ID

* Info: Im Grunde eine Option, mit der Du Deinen Executable Block mit einem Executable Item synchronisieren kannst.
  * Zusätzliche Info: Der Executable Block übernimmt Name, Material und Lore des Executable Items. Wenn Du versuchst, Name, Material oder Lore des EB zu bearbeiten, ändert sich daher nichts. Du musst Name, Material und Lore des EI bearbeiten, damit die Änderungen im EB wirksam werden
* Beispiel: 

```yaml
executableItem: hack
```

* Erforderlich: NEIN

## Title-Funktionen 

Unterstützt werden [DecentHolograms](https://www.spigotmc.org/resources/96927/), [HolographicDisplays](https://dev.bukkit.org/projects/holographic-displays) und [CMI](https://www.spigotmc.org/resources/3742/)

### ACTIVE TITLE 

* Info: Legt fest, ob das Title-Hologramm aktiviert ist oder nicht
* Beispiel:

```yaml
activeTitle: false
```

* Erforderlich: NEIN

### TITLE NAME 

* Info: Der angezeigte Text des Hologramms
* Beispiel: 

```yaml
title: '&7&oDefault title'
```

* (Mit HolographicDisplay) Du kannst im Title ein Item anzeigen, Typ ITEM::MATERIAL

```yaml
title: 
- '&7&oDefault title'
- 'ITEM::DIAMOND'
```

* Erforderlich: NEIN

### TITLE ADJUSTMENT 

* Info: Wie hoch oder niedrig die Höhe des Title-Hologramms angepasst wird
* Beispiel:

```yaml
titleAdjustment: 0.5
```

* Erforderlich: NEIN
  * Zusätzliche Info: Positive Zahl für nach oben, negative Zahl für nach unten

```yaml
titleFeatures:
  # Active the title
  activeTitle: true
  # The title
  title:
   - Hello
   - &6It's support color
   - and %placeholder%
  titleAdjustment: 0.5
```

## Benutzerdefinierte Usage-Einstellungen

#### USAGE

* Info: Der Wert, wie oft Du ihn verwenden kannst. Wird meist für die Usage-Änderungsfunktion von Aktivatoren verwendet.
* Beispiel: 

```yaml
usage: 0
```

Für unendliche Blocknutzung:

```yaml
usage: -1
```

* Erforderlich: NEIN (Standard: 0)

:::info
usage: 0 entspricht usage:1, zeigt aber den Text "Remaining use:..." nicht in der Lore an.
:::

## Container-Funktionen

:::info
Item-Filter unterstützen den Tag `{CUSTOMODELDATA:X}` korrekt, sodass Du einen Trichter erstellen kannst, der nur Items mit einer bestimmten Textur aufnimmt
:::

### whitelistMaterials

* Hier kannst Du eine Liste von Materialien hinzufügen, die in Deinen Block gelegt werden dürfen

```
containerFeatures:
  whitelistMaterials:
  - DIRT
```

### blacklistMaterials

* Hier kannst Du eine Liste von Materialien hinzufügen, die nicht in Deinen Block gelegt werden dürfen

```
containerFeatures:
  blacklistMaterials:
  - STONE
```

:::info
Bei TRICHTERN (HOPPERS) schränken Whitelist und Blacklist die Items ein, die der Trichter einsaugen kann.
:::

### isLocked

* Legt fest, ob der Container gesperrt ist oder nicht

### lockedName

* Falls er gesperrt ist, musst Du den Namen des Schlüssels auswählen

```
containerFeatures:
  isLocked: true
  lockedName: ThisIsMyKey
```

### inventoryTitle

* Der Inventartitel des Containers 

```
containerFeatures:
  inventoryTitle: INVENTORY TITLE
```

## Ofen-Funktionen

### furnaceSpeed

* Damit kannst Du die Geschwindigkeit Deines Ofens anpassen.
* Beispiel:

```
furnaceFeatures:
  furnaceSpeed: 2.0
```

:::info
Standard -> 1

Doppelte Standardgeschwindigkeit -> 2

Halbe Standardgeschwindigkeit -> 0.5
:::

### infiniteFuel

* Der Block benötigt keinen Brennstoff, um zu laufen

```
furnaceFeatures:
  infiniteFuel: true
```

### infiniteVisualLit

* Lässt den Block so aussehen, als wäre er an

```
furnaceFeatures:
  infiniteVisualLit: true
```

### fortuneMultiplier

* Multiplikator des Ergebnisses.

```
furnaceFeatures:
  fortuneMultiplier: 5
```

:::info
Er kann negativ sein, um Items aus dem Ergebnisspeicher zu entfernen.
:::

### fortuneChance

* Wahrscheinlichkeit, dass Fortune angewendet wird

```
furnaceFeatures:
  fortuneChance: 0.95
```

## Richtungs-Funktionen

### forceBlockFaceOnPlace

* Erzwingt, dass der Block in eine bestimmte Richtung blickend platziert wird
* Beispiel:

```
directionalFeatures:
  forceBlockFaceOnPlace: true
```

### blockFaceOnPlace

* Legt die Seite des Blocks fest, wenn er platziert wird
* Beispiel:

```
directionalFeatures:
  forceBlockFaceOnPlace: true
  blockFaceOnPlace: NORTH
```

:::info
`blockFaceOnPlace` wird nur angewendet, wenn `forceBlockFaceOnPlace` `true` ist. Ohne diese Option behält der Block die Richtung, mit der er platziert wurde. Diese Optionen drehen nur gerichtete Blöcke (die Blöcke mit einem `facing`).

Der Befehl [/eb place](/executableblocks/commands-and-permissions#place-an-eb-at-a-specific-position) kann ebenfalls eine Richtung entgegennehmen, die Vorrang vor diesen Optionen hat.
:::

## Beehive-Funktionen <CustomTag type="version" version="1.15" /> {#beehive-features}

Befüllt einen Bienenstock oder ein Bienennest vor, wenn er bzw. es platziert wird. Nur für die ExecutableBlocks, deren Material `BEEHIVE` oder `BEE_NEST` ist (erstellt mit `BASIC_CREATION` oder `IMPORT_FROM_EXECUTABLE_ITEMS`), bei allen anderen Blöcken bewirken die Optionen nichts. Im Ingame-Editor erscheint der Button nur für diese beiden Materialien.

Beide Optionen sind optional: Wenn keine davon gesetzt ist, wird der Block nicht verändert und nichts in die Config geschrieben.

### honeyLevel

* Info: Honigstand des platzierten Blocks, von `0` (leer) bis `5` (voll, Honig kann geerntet werden). Nicht gesetzt: Der Honigstand wird nicht verändert.

### bees

* Info: Anzahl der Bienen, die in den platzierten Block gesetzt werden. Nicht gesetzt oder `0`: keine Biene. Ein Bienenstock fasst standardmäßig 3 Bienen, die überzähligen Bienen werden nicht hinzugefügt.

* Beispiel:

```yaml
material: BEE_NEST
beehiveFeatures:
  honeyLevel: 5
  bees: 2
```

:::tip
Mit einem [LOOP-Aktivator und `loopTimerPerBlock: true`](/executableblocks/configurations/activator-configuration/list-of-the-activators#loop-) kann ein geerntetes Bienennest eine feste Zeit nach dem Platzieren erneut platziert (und damit erneut befüllt) werden.
:::

## Braustand-Funktionen

### brewingStandSpeed

* Damit kannst Du die Geschwindigkeit Deines Braustands anpassen
* Beispiel:

```
brewingStandFeatures:
  brewingStandSpeed: 1.0
```

:::info
Standard -> 1

Doppelte Standardgeschwindigkeit -> 2

Halbe Standardgeschwindigkeit -> 0.5
:::

## Trichter-Funktionen

### amountItemsTransferred

* Damit kannst Du die Menge der Items anpassen, die bei jedem Trichter-Transfer übertragen wird.
* Sie gilt sowohl, wenn der Trichter Items in den Container schiebt, auf den er zeigt, als auch (seit 26.11), wenn er Items aus dem Container über ihm zieht.
* Beispiel:

```yaml
hopperFeatures:
  amountItemsTransferred: 5
```

## Display-Funktionen

### Material

* Material des Items, das angezeigt wird
* Beispiel:

```
DisplayFeatures:
  material: PAPER
```

### Custom model data

* Custom Model Data des Materials, das angezeigt wird
* Beispiel:

```
DisplayFeatures:
  customModelData: 3
```

### Scale

* Skalierung des Displays
* Beispiel:

```
DisplayFeatures:
  scale: 1
```

### aligned

* Legt fest, ob das Display ausgerichtet sein soll
* Beispiel:

```
DisplayFeatures:
```
aligned: false

### customPitch

* Wähle den benutzerdefinierten Pitch
* Beispiel:

```
DisplayFeatures:
  customPitch: 1
```

### customY

* Wähle das benutzerdefinierte Y
* Beispiel:

```
DisplayFeatures:
  customY: 1.0
```

### Glow

* Leuchten oder nicht
* Beispiel:

```
DisplayFeatures:
  glow: false
```

### Interaction zone features

* Breite des Displays
* Höhe des Displays
* Kollidierbar oder nicht
* Beispiel:

```
DisplayFeatures:
  InteractionZoneFeatures:
    width: 1.0
    height: 1.0
    isCollidable: false
```

### Click to break

* Anzahl der Klicks, die nötig sind, um die Display-Kreation abzubauen
* Beispiel:

```
DisplayFeatures:
  clickToBreak: 3
```

## Gemeißeltes Bücherregal

### occupiedSlots

* Legt fest, welche Slots (Index 0-5) ein Buch enthalten

```
chiseledBookshelfFeatures:
  occupiedSlots:
  - '2'
  - '5'
```

## Abbrechen

### cancelLiquidDestroy

* Info: Verhindert die Zerstörung von Samen und Spielerköpfen durch Wasser/Lava
* Beispiel: 

```
cancelLiquidDestroy: true
```
