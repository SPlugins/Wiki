---
description: >-
  Lerne, wie du mit einem Ressourcenpaket Custom Sounds zu ExecutableItems
  hinzufügst und per Befehl abspielst, ohne Vanilla-Sounds zu ersetzen.
source_hash: 66cf4b862fca2e2f
translated_at: '2026-11-13T17:26:47.557Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Custom Sounds

:::info
Mit dieser Methode fügst du neue Custom Sounds hinzu, **ohne** vorhandene Vanilla-Sounds zu ersetzen.
:::

Custom Sounds in Minecraft werden über Ressourcenpakete verwaltet.

## Überblick

Um Custom Sounds zu deinen ExecutableItems hinzuzufügen, musst du:
1. Ein Ressourcenpaket mit deinen eigenen Sounddateien erstellen
2. Die Datei sounds.json konfigurieren, um deine Sounds zu registrieren
3. Den Befehl /playsound in ExecutableItems verwenden, um sie abzuspielen

## Schritt-für-Schritt-Anleitung

### Schritt 1: Grundstruktur des Ressourcenpakets erstellen

Erstelle zunächst die grundlegende Ordnerstruktur des Ressourcenpakets:

```
RESOURCE_PACK/
  ├── assets/
  ├── pack.mcmeta
  └── pack.png
```

- `pack.mcmeta` - Enthält die Metadaten des Ressourcenpakets (Version, Beschreibung)
- `pack.png` - Das Icon des Ressourcenpakets (optional, aber empfohlen)

### Schritt 2: Eigenen Namespace-Ordner hinzufügen

Erstelle im Ordner `assets` deinen eigenen Namespace-Ordner. Er sollte einen eindeutigen Namen haben, um Konflikte zu vermeiden:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/    # Your custom namespace
  ├── pack.mcmeta
  └── pack.png
```

:::tip Namespace-Benennung
Wähle einen aussagekräftigen Namespace, zum Beispiel den Namen deines Servers oder Plugins. Beispiele: `myserver`, `customitems`, `epicrpg`
:::

### Schritt 3: sounds.json erstellen

Erstelle in deinem eigenen Namespace-Ordner eine Datei `sounds.json`:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/
  │       └── sounds.json
  ├── pack.mcmeta
  └── pack.png
```

### Schritt 4: sounds.json konfigurieren

Bearbeite `sounds.json`, um deine Custom Sounds zu registrieren:

```json
{
  "epic_sword_slash": {
    "subtitle": "Epic Sword Slash",
    "sounds": [
      "customsounds:sword_slash1"
    ]
  },
  "magic_spell_cast": {
    "subtitle": "Magic Spell Cast",
    "sounds": [
      "customsounds:spell_cast1",
      "customsounds:spell_cast2"
    ]
  },
  "boss_roar": {
    "sounds": [
      "customsounds:dragon_roar"
    ]
  }
}
```

#### Aufbau der sounds.json erklärt

- **Sound-ID** (z. B. `epic_sword_slash`): Der Name, den du in Befehlen verwendest
- **subtitle**: Optionaler Text, der angezeigt wird, wenn Untertitel aktiviert sind
- **sounds**: Array mit Pfaden zu Sounddateien (ohne .ogg-Endung)

:::info Sound-Pfade
`"customsounds:sword_slash1"` bedeutet, dass die Datei hier liegt:
`assets/customsounds/sounds/sword_slash1.ogg`

Das Format lautet: `namespace:path_inside_sounds_folder`
:::

### Schritt 5: Sounddateien hinzufügen

Erstelle in deinem Namespace einen Ordner `sounds` und lege deine .ogg-Sounddateien darin ab:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/
  │       ├── sounds.json
  │       └── sounds/
  │           ├── sword_slash1.ogg
  │           ├── spell_cast1.ogg
  │           ├── spell_cast2.ogg
  │           └── dragon_roar.ogg
  ├── pack.mcmeta
  └── pack.png
```

:::warning Anforderungen an Sounddateien
- **Format**: Muss das Format .ogg (Ogg Vorbis) haben
- **Mono empfohlen**: Stereo funktioniert, aber Mono eignet sich besser für positionsbezogenen Sound
- **Samplerate**: 44,1 kHz oder 48 kHz empfohlen
- **Dateigröße**: Halte die Dateien klein, damit sie schneller heruntergeladen werden
:::

### Schritt 6: pack.mcmeta erstellen

Erstelle deine Datei `pack.mcmeta` mit der richtigen Versionsangabe:

```json
{
  "pack": {
    "pack_format": 15,
    "description": "Custom sounds for MyServer"
  }
}
```

#### Pack-Format-Versionen

| Minecraft-Version | pack_format |
|-------------------|-------------|
| 1.20.2 - 1.20.4   | 18          |
| 1.20 - 1.20.1     | 15          |
| 1.19.4            | 13          |
| 1.19 - 1.19.3     | 12          |
| 1.18 - 1.18.2     | 9           |

Die Werte für die anderen Versionen findest du über eine Google-Suche.

## Custom Sounds in ExecutableItems verwenden

Sobald dein Ressourcenpaket erstellt und angewendet ist, verwende den Befehl PLAYSOUND:

### Grundlegende Verwendung

```yaml
activators:
  sword_attack:
    option: PLAYER_ALL_CLICK
    playerCommands:
    - "minecraft:playsound customsounds:epic_sword_slash master @a"
```


### Positionsbezogener Sound

```yaml
activators:
  boss_spawn:
    option: PROJECTILE_HIT_BLOCK
    blockCommands:
    - "minecraft:playsound customsounds:boss_roar master @a %block_x% %block_y% %block_z% %world%"
    # Plays at specific coordinates
```

## Audiodateien in OGG konvertieren

Wenn du MP3, WAV oder andere Audioformate hast, musst du sie in OGG konvertieren:

### Mit Audacity (kostenlos)

1. Audacity herunterladen: https://www.audacityteam.org/
2. Öffne deine Audiodatei
3. Optional: In Mono konvertieren (Tracks → Mix → Mix Stereo down to Mono)
4. File → Export → Export as OGG
5. Wähle die Qualitätseinstellungen (Qualität 5-7 ist ein guter Kompromiss)

### Mit Online-Konvertern

- CloudConvert: https://cloudconvert.com/mp3-to-ogg
- Online-Convert: https://audio.online-convert.com/convert-to-ogg

## Dein Ressourcenpaket bereitstellen

### Methode 1: Server-Ressourcenpaket (empfohlen)

Lade dein Ressourcenpaket hoch und konfiguriere es in `server.properties`:

```properties
resource-pack=https://your-url.com/resourcepack.zip
resource-pack-sha1=<SHA1 hash>
require-resource-pack=true
```

:::tip Hosting-Optionen
- Dropbox (Direktlink verwenden)
- Google Drive (Konverter für Download-Links verwenden)
- Selbst gehosteter Webserver
- GitHub-Releases
:::

## Fehlerbehebung

### Sounds werden nicht abgespielt

**Problem**: Die Befehle werden ausgeführt, aber es ist kein Sound zu hören

**Lösungen**:
1. ✅ Prüfe, ob das Ressourcenpaket angewendet wird (`/playsound` Test mit einem Vanilla-Sound)
2. ✅ Prüfe, ob die Sounddatei das Format .ogg hat (nicht .mp3, .wav usw.)
3. ✅ Prüfe die Syntax der sounds.json (verwende einen JSON-Validator)
4. ✅ Prüfe, ob der Dateipfad exakt übereinstimmt (Groß- und Kleinschreibung beachten)
5. ✅ Teste mit `/playsound customsounds:your_sound master @s`

### Ressourcenpaket wird nicht geladen

**Problem**: Das Server-Ressourcenpaket wird für Spieler nicht heruntergeladen

**Lösungen**:
1. ✅ Prüfe, ob die URL des Ressourcenpakets ein direkter Download-Link ist
2. ✅ Prüfe, ob das Versionsformat in der pack.mcmeta zur Server-Version passt
3. ✅ Stelle sicher, dass das Pack kleiner als 100 MB ist (Limit des Clients)
4. ✅ Prüfe, ob der SHA1-Hash in der server.properties zur Datei passt

### Falscher Sound wird abgespielt

**Problem**: Es wird ein anderer Sound abgespielt als erwartet

**Lösungen**:
1. ✅ Suche in der sounds.json nach doppelten Sound-IDs
2. ✅ Prüfe, ob der Namespace korrekt und in Kleinbuchstaben geschrieben ist (customsounds: vs. minecraft:)
3. ✅ Suche nach Tippfehlern in den Namen der Sounddateien


## Weiterführende Dokumentation

- [Ressourcenpaket-Format (Minecraft Wiki)](https://minecraft.wiki/w/Resource_Pack)
- [Aktivatoren-Liste](/executableitems/configurations/activator-configuration/list-of-the-activators)

## Weitere Ressourcen

- **Audacity herunterladen**: https://www.audacityteam.org/
- **Kostenlose Soundeffekte**:
  - Freesound: https://freesound.org/
  - Zapsplat: https://www.zapsplat.com/
- **OGG-Konverter**: https://cloudconvert.com/mp3-to-ogg
- **JSON-Validator**: https://jsonlint.com/
