---
description: >-
  Erfahre, wie Custom Triggers in ExecutableItems, ExecutableBlocks und
  ExecutableEvents Befehlslisten speichern, manuell ausführen oder per Zeitplan
  starten.
source_hash: 2eab89bbd32500f6
translated_at: '2026-11-13T17:32:27.549Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 🔘 Custom Triggers

Custom Triggers sind eine leistungsstarke Möglichkeit, Befehlslisten zu speichern und entweder manuell per Befehl oder automatisch über ein Zeitplansystem auszuführen.

## Überblick

**Custom Triggers** ermöglichen Dir:
- ✅ Wiederverwendbare Befehlssequenzen zu speichern
- ✅ Befehle manuell mit einem einfachen Trigger-Befehl auszuführen
- ✅ Die automatische Ausführung zu bestimmten Zeiten zu planen
- ✅ Argumente zu übergeben, um das Verhalten anzupassen
- ✅ Komplexe Befehls-Setups zu organisieren

## Schnellstart

### Schritt 1: Den Aktivator erstellen

1. Öffne den Editor Deines Plugins (`/ei`, `/eb` oder `/ee`)
2. Erstelle einen neuen Aktivator
3. Wähle **CUSTOM_TRIGGER** als Option
4. Füge Deine Befehle zum Befehlsbereich hinzu

### Schritt 2: Den Trigger ausführen

Verwende den passenden Befehl für Dein Plugin:

```bash
# ExecutableItems
/ei run-custom-trigger trigger:{activatorID}

# ExecutableBlocks
/eb run-custom-trigger trigger:{activatorID}

# ExecutableEvents
/ee run-custom-trigger trigger:{activatorID}
```

## Befehlskontext je Plugin

Jedes Plugin bietet unterschiedliche Kontexte für die Befehlsausführung:

### 🗡️ ExecutableItems
- **Voraussetzung:** Das Item muss sich im Inventar des Spielers befinden
- **Verfügbare playerCommands:** Spielerbefehle
- **Platzhalter:** Spielerbasierte Platzhalter (`%player%` usw.)

### 🧱 ExecutableBlocks
- **Voraussetzung:** Der Block muss platziert sein
- **Verfügbare playerCommands:** Block-Befehle, Besitzer-Befehle (falls aktiviert)
- **Platzhalter:** Block- und Besitzer-Platzhalter

### 🎯 ExecutableEvents
- **Voraussetzung:** Keine (wird global ausgelöst)
- **Verfügbare playerCommands:** Nur Konsolenbefehle
- **Platzhalter:** Eingeschränkt (verwende Argumente, um Spieler gezielt anzusprechen)

## Trigger-Typen

### 1. Aufrufbare Trigger
Werden nur per Befehl ausgeführt:
```yaml
activators:
  my_trigger:
    option: CUSTOM_TRIGGER
    playerCommands:
    - "say Hello World!"
```

### 2. Geplante Trigger
Werden automatisch zu bestimmten Zeiten ausgeführt:
```yaml
activators:
  scheduled_trigger:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '%%%%:::%%:::%%:::22:::00:::XX'  # Daily at 22:00
    playerCommands:
    - "say It's 10 PM!"
```

## Befehlssyntax

### ExecutableItems
```bash
/ei run-custom-trigger trigger:{activatorID} [player:{name}] [slot:{slot}] [args...]
```

| Parameter | Beschreibung | Erforderlich |
|-----------|-------------|----------|
| `trigger` | Aktivator-ID | ✅ Ja |
| `player` | Name des Zielspielers | ❌ Nein (zielt auf alle, wenn weggelassen) |
| `slot` | Inventarslot (-1 für die Haupthand) | ❌ Nein |
| `args...` | Zusätzliche Argumente, abrufbar über %arg0%, %arg1% usw. | ❌ Nein |

**Beispiele:**
```bash
/ei run-custom-trigger trigger:daily_reward
/ei run-custom-trigger trigger:boost player:Steve slot:-1
/ei run-custom-trigger trigger:message player:Alex Hello World
```

### ExecutableBlocks
```bash
/eb run-custom-trigger trigger:{activatorID} [block:{location}] [args...]
```

| Parameter | Beschreibung | Erforderlich |
|-----------|-------------|----------|
| `trigger` | Aktivator-ID | ✅ Ja |
| `block` | Blockposition (world,x,y,z) | ❌ Nein (zielt auf alle, wenn weggelassen) |
| `args...` | Zusätzliche Argumente | ❌ Nein |

**Beispiele:**
```bash
/eb run-custom-trigger trigger:harvest_all
/eb run-custom-trigger trigger:activate block:world,100,64,200
```

### ExecutableEvents
```bash
/ee run-custom-trigger trigger:{activatorID} [args...]
```

| Parameter | Beschreibung | Erforderlich |
|-----------|-------------|----------|
| `trigger` | Aktivator-ID | ✅ Ja |
| `args...` | Zusätzliche Argumente | ❌ Nein |

**Beispiele:**
```bash
/ee run-custom-trigger trigger:server_event
/ee run-custom-trigger trigger:player_reward Steve
```

## Zeitplansystem

### Zeitplanformat

Das Zeitplansystem verwendet zwei Formate für die Zeitsteuerung:

#### Format 1: Datums- und zeitbasiert
```
{YEAR}:::{MONTH}:::{DAY}:::{HOUR}:::{MIN}:::{SEC}
```
- Verwende `%%%%` für ein beliebiges Jahr
- Verwende `%%` für einen beliebigen Monat, Tag, eine beliebige Stunde bzw. Minute
- Verwende `XX` für eine beliebige Sekunde
- Verwende `[value1,value2]` für mehrere Werte

#### Format 2: Wochenbasiert
```
{YEAR}:!:{WEEK}:!:{DAYSTRING}:!:{HOUR}:!:{MIN}:!:{SEC}
```
- `DAYSTRING` kann sein: MONDAY, TUESDAY usw.

### Häufige Zeitplanbeispiele

```yaml
scheduleFeatures:
  when:
  # Every minute
  - '%%%%:::%%:::%%:::%%:::%%:::XX'

  # Every day at 22:00
  - '%%%%:::%%:::%%:::22:::00:::XX'

  # Every Monday at 14:00
  - '%%%%:!:%%:!:MONDAY:!:14:!:00:!:XX'

  # December 24-26 at 16:00
  - '%%%%:::12:::[24,25,26]:::16:::00:::XX'

  # At 10, 14, and 18 hours daily
  - '%%%%:::%%:::%%:::[10,14,18]:::00:::XX'
```

## Praxisbeispiele

### Beispiel 1: Item für tägliche Belohnungen

```yaml
name: '&eDaily Reward Token'
material: GOLD_INGOT
activators:
  daily_reward:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '%%%%:::%%:::%%:::[10,14,18]:::00:::XX'
    playerCommands:
    - "money give %player% 500"
    - "SEND_MESSAGE &aYou received your daily reward!"
```

### Beispiel 2: Trigger für Server-Events

```yaml
# In ExecutableEvents
activators:
  new_year_celebration:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '2025:::01:::01:::00:::00:::00'
    consoleCommands:
    - "broadcast &6&lHAPPY NEW YEAR 2025!"
    - "ei giveall firework_item 10"
```

### Beispiel 3: Block-Ernte-System

```yaml
# In ExecutableBlocks
activators:
  harvest_crops:
    option: CUSTOM_TRIGGER
    playerCommands:
    - "DROPEXECUTABLEITEM wheat_item 5"
    - "score run-player-command player:%owner% SEND_MESSAGE &aHarvest complete!"
```

### Beispiel 4: Spielerbefehle aus Events

Da ExecutableEvents keinen Spielerkontext haben, verwende Argumente:

```yaml
# ExecutableEvent
activators:
  player_boost:
    option: CUSTOM_TRIGGER
    consoleCommands:
    - "score run-player-command player:%arg0% EFFECT SPEED 2 60"
```

Ausführen mit: `/ee run-custom-trigger trigger:player_boost Steve`

## Best Practices

### ✅ DO
- Verwende eindeutige Aktivator-IDs, um Konflikte zu vermeiden
- Teste Trigger manuell, bevor Du sie planst
- Verwende Argumente für flexible, wiederverwendbare Trigger
- Organisiere komplexe Befehlssequenzen in Triggern

### ❌ DON'T
- Doppelte Aktivator-IDs verwenden (sie werden alle gleichzeitig ausgelöst)
- Vergessen, die Plugin-Kontexte zu prüfen (Spieler-, Block- bzw. Konsolenbefehle)
- Einfache Setups, die keine Trigger benötigen, unnötig verkomplizieren

## Fehlerbehebung

### Trigger wird nicht ausgeführt
- ✅ Prüfe, ob die Aktivator-ID exakt übereinstimmt
- ✅ Prüfe, ob das Item, der Block oder das Event existiert und korrekt konfiguriert ist
- ✅ Stelle sicher, dass die Berechtigungen für die Befehlsausführung stimmen

### Zeitplan funktioniert nicht
- ✅ Prüfe die Syntax des Zeitplanformats
- ✅ Prüfe, ob die Serverzeit dem erwarteten Zeitplan entspricht
- ✅ Stelle sicher, dass der Bereich von startDate/endDate die aktuelle Zeit einschließt

### Befehle werden nicht ausgeführt
- ✅ Prüfe den Befehlskontext (Spieler, Block oder Konsole)
- ✅ Prüfe, ob die Platzhalter im Kontext verfügbar sind
- ✅ Teste die Befehle zuerst manuell

## Erweiterte Tipps

### Trigger verketten
Erstelle komplexe Sequenzen, indem Trigger andere Trigger aufrufen:

```yaml
trigger_1:
  option: CUSTOM_TRIGGER
  playerCommands:
  - "ei run-custom-trigger trigger:trigger_2"
  - "ei run-custom-trigger trigger:trigger_3"
```

### Globale Events
Kombiniere ExecutableEvents-Trigger mit Triggern anderer Plugins für serverweite Events:

```yaml
# Step 1: EE trigger broadcasts and activates items/blocks
server_event:
  option: CUSTOM_TRIGGER
  consoleCommands:
  - "broadcast &cSERVER EVENT STARTING!"
  - "ei run-custom-trigger trigger:event_items"
  - "eb run-custom-trigger trigger:event_blocks"
```

## Weiterführende Dokumentation

- [Platzhalter](/tools-for-all-plugins-score/placeholders)
