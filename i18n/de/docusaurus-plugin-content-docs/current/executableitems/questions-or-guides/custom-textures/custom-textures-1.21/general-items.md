---
description: >-
  Lerne, wie du mit Custom Model Data und einem Ressourcenpaket Texturen für
  Custom Items in ExecutableItems (Minecraft 1.13 bis 1.21.3) erstellst.
source_hash: 0009e0522a21f996
translated_at: '2026-11-13T17:27:07.913Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Texturen für Custom Items (Minecraft 1.13 - 1.21.3)

Diese ausführliche Anleitung zeigt dir, wie du mit Custom Model Data und Ressourcenpaketen eigene Texturen für Items in Minecraft-Versionen von 1.13 bis 1.21.3 erstellst.

:::warning Rüstungstexturen
Dieses Tutorial behandelt **nicht** das Ändern von Rüstungstexturen. Für Rüstungen musst du OptiFine CIT (Custom Item Textures) verwenden. Suche nach "OptiFine armor retexturing", um Tutorials zu dieser Methode zu finden.
:::

:::danger Wichtige Namensregeln
**ALLE Datei- und Ordnernamen MÜSSEN ausschließlich kleingeschrieben sein.**

Großbuchstaben führen dazu, dass Texturen nicht geladen werden. Verwende immer `custom_sword` statt `CustomSword`.
:::

## Video-Tutorial

Wenn du lieber ein Video ansiehst: Dieses Tutorial basiert auf dem folgenden Video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/y-t1YMslFLM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Voraussetzungen

- **Texteditor**: Verwende Notepad++, VS Code oder Ähnliches (NICHT den normalen Notepad)
- **Bildbearbeitungsprogramm**: Photoshop, Paint.NET, GIMP oder Paint 3D
- **Komprimierungstool**: WinRAR, 7-Zip oder die im Betriebssystem integrierte Komprimierung
- **Grundkenntnisse in JSON** (hilfreich, aber nicht erforderlich)

:::tip Dateiendungen
Keine der Dateien, die du erstellst, sind `.txt`-Dateien. Stelle sicher, dass dein Editor bestimmte Dateitypen wie `.json`, `.mcmeta` und `.png` speichern kann.
:::

## Teil 1: Dein ExecutableItem einrichten

### Schritt 1: Dein Item erstellen

Erstelle zuerst das ExecutableItem, das die Custom-Textur verwenden soll:

```
/ei create my_custom_pickaxe
```

### Schritt 2: Grundeigenschaften konfigurieren

Lege den Anzeigenamen, die Lore und alle weiteren gewünschten Funktionen des Items fest:

```
/ei edit my_custom_pickaxe
```

Beispielkonfiguration:
- **Name**: `&b&lCustom Pickaxe`
- **Material**: `DIAMOND_PICKAXE`
- **Lore**: Füge einen beliebigen beschreibenden Text hinzu

## Teil 2: Deine Textur erstellen

### Schritt 3: Dein Texturbild gestalten

Erstelle deine Custom-Textur mit einem Bildbearbeitungsprogramm:

**Anforderungen:**
- **Format**: PNG mit Transparenzunterstützung
- **Auflösung**: 16x16 Pixel (oder eine Zweierpotenz: 32x32, 64x64, 128x128 usw.)
- **Dateiname**: Verwende Kleinbuchstaben mit Unterstrichen (z. B. `custom_pickaxe.png`)

:::tip Bildauflösung
16x16 ist der Standard, für detailliertere Texturen kannst du aber auch höhere Auflösungen wie 32x32 oder 64x64 verwenden. Achte nur darauf, dass es eine Zweierpotenz bleibt.
:::

Speichere deine Texturdatei, du brauchst sie im nächsten Abschnitt.

## Teil 3: Das Ressourcenpaket erstellen

### Schritt 4: Ordnerstruktur anlegen

Lege die folgende Ordnerstruktur an:

```
ExecutableItemsTexturePack/
├── pack.mcmeta
├── pack.png (optional)
└── assets/
    └── minecraft/
        ├── textures/
        │   └── item/
        │       └── custom_textures/
        │           └── custom_pickaxe.png
        └── models/
            └── item/
                ├── diamond_pickaxe/
                │   └── 1.json
                └── diamond_pickaxe.json
```

### Schritt 5: pack.mcmeta erstellen

Erstelle im Hauptordner die Datei `pack.mcmeta`:

```json
{
  "pack": {
    "pack_format": 15,
    "description": "§eExecutableItems Custom Textures"
  }
}
```

:::info Pack-Format nach Version
Wähle das passende `pack_format` für deine Minecraft-Version:
- **15** = 1.20.5 - 1.21.1
- **34** = 1.20.2 - 1.20.4
- **18** = 1.20 - 1.20.1
- **15** = 1.19.4
- **13** = 1.19.3
- **12** = 1.19 - 1.19.2
- **9** = 1.18 - 1.18.2
- **8** = 1.17 - 1.17.1
- **6** = 1.16.2 - 1.16.5

Alle Versionen findest du in der [vollständigen Liste der Pack-Formate](https://minecraft.wiki/w/Pack_format).
:::

### Schritt 6: Deine Texturdatei hinzufügen

1. Navigiere zu `assets/minecraft/textures/item/custom_textures/`
2. Lege deine PNG-Texturdatei hier ab (z. B. `custom_pickaxe.png`)

### Schritt 7: Das Basis-Material des Items ermitteln

Du musst die Minecraft-ID des Basis-Items kennen:

1. Drücke in Minecraft **F3 + H**, um die erweiterten Tooltips zu aktivieren
2. Fahre mit der Maus über das Item, um seine ID zu sehen (z. B. `minecraft:diamond_pickaxe`)
3. Verwende für die Dateinamen den Teil nach dem Doppelpunkt (z. B. `diamond_pickaxe`)

![Item-ID, angezeigt mit erweiterten Tooltips](https://media.ssomar.com/m/docs-img-image-185.png)

:::warning Wichtig: Verwende die Minecraft-ID
Der Dateiname MUSS mit der Minecraft-Item-ID übereinstimmen, nicht mit:
- ❌ dem Anzeigenamen deines Items
- ❌ dem Namen deiner Texturdatei
- ❌ der ID deines ExecutableItems
- ✅ Die Minecraft-Material-ID (z. B. `diamond_pickaxe`)
:::

### Schritt 8: Die Basis-Modelldatei erstellen

Erstelle in `assets/minecraft/models/item/` die Datei `diamond_pickaxe.json`:

```json
{
    "parent": "minecraft:item/generated",
    "textures": {
        "layer0": "minecraft:item/diamond_pickaxe"
    },
    "overrides": [
        {
            "predicate": {
                "custom_model_data": 1
            },
            "model": "item/diamond_pickaxe/1"
        }
    ]
}
```

**Die Felder im Überblick:**

- `"parent"`: Basis-Modelltyp
  - Verwende `"generated"` für die meisten Items
  - Verwende `"handheld"`, wenn das Item in der Hand falsch aussieht
- `"layer0"`: Standard-Vanilla-Textur
- `"overrides"`: Array der Custom-Model-Data-Zuordnungen
- `"custom_model_data"`: Die Zahl, die du in ExecutableItems festlegst
- `"model"`: Pfad zu deiner Custom-Modelldatei

:::tip Mehrere Custom-Texturen
Um weitere Custom-Texturen für dasselbe Item hinzuzufügen, ergänze weitere Override-Einträge:

```json
"overrides": [
    {
        "predicate": {
            "custom_model_data": 1
        },
        "model": "item/diamond_pickaxe/1"
    },
    {
        "predicate": {
            "custom_model_data": 2
        },
        "model": "item/diamond_pickaxe/2"
    },
    {
        "predicate": {
            "custom_model_data": 3
        },
        "model": "item/diamond_pickaxe/3"
    }
]
```
:::

### Schritt 9: Die Custom-Modelldatei erstellen

1. Erstelle den Ordner: `assets/minecraft/models/item/diamond_pickaxe/`
2. Erstelle die Datei `1.json` in diesem Ordner

Inhalt von `1.json`:

```json
{
    "parent": "item/handheld",
    "textures": {
        "layer0": "item/custom_textures/custom_pickaxe"
    }
}
```

**Den Texturpfad verstehen:**

Der Wert `"layer0"` ist ein Pfad relativ zu `assets/minecraft/textures/`:
- Pfad: `item/custom_textures/custom_pickaxe`
- Vollständiger Pfad: `assets/minecraft/textures/item/custom_textures/custom_pickaxe.png`

:::danger Häufiger Fehler: Falscher Texturpfad
Der häufigste Fehler ist ein falscher Pfad in `layer0`. Prüfe noch einmal, dass:
1. der Pfad zu deiner Ordnerstruktur passt
2. du die Endung `.png` nicht angibst
3. der Pfad innerhalb des Ordners `textures/` beginnt
:::

### Schritt 10: Das Ressourcenpaket packen

#### Für Windows (WinRAR/7-Zip):
1. Wähle `pack.mcmeta` und den Ordner `assets` aus
2. Rechtsklick → Zum Archiv hinzufügen / Komprimieren
3. Wähle das Format `.zip`
4. Benenne es `ExecutableItemsTexturePack.zip`

#### Für Mac/Linux:
1. Wähle `pack.mcmeta` und den Ordner `assets` aus
2. Komprimiere sie mit der integrierten Komprimierung zu einer ZIP-Datei
3. Oder lege sie in einen Ordner und verwende sie unverändert für lokale Tests

![ZIP-Datei erstellen](https://media.ssomar.com/m/docs-img-image-244.png)

![In das .ZIP-Format ändern](https://media.ssomar.com/m/docs-img-image-158.png)

### Schritt 11: Das Ressourcenpaket installieren

1. Lege die Datei `.zip` in `.minecraft/resourcepacks/` ab
2. Starte Minecraft
3. Gehe zu Options → Resource Packs
4. Aktiviere dein Pack, indem du auf den Pfeil klickst

## Teil 4: ExecutableItems mit der Textur verbinden

### Schritt 12: Custom Model Data festlegen

Bearbeite dein ExecutableItem:

```
/ei edit my_custom_pickaxe
```

Navigiere zur Konfiguration `customModelData` und stelle sie passend zu deinem Override ein:

![Custom-Model-Data-Einstellung](https://media.ssomar.com/m/docs-img-image-163.png)

Setze den Wert auf `1` (oder auf die Zahl, die du im Override verwendet hast):

![Wert auf 1 setzen](https://media.ssomar.com/m/docs-img-image-61.png)

**In der Config-Datei sieht es so aus:**

```yaml
customModelData: 1
```

### Schritt 13: Deine Custom-Textur testen

Gib dir das Item:

```
/ei give my_custom_pickaxe
```

Jetzt solltest du deine Custom-Textur sehen!

![Custom-Textur im Inventar](https://media.ssomar.com/m/docs-img-image-364.png)

![Custom-Textur in der Hand](https://media.ssomar.com/m/docs-img-image-392.png)

## Fehlerbehebung

| Problem | Lösung |
|---------|----------|
| **Textur wird nicht angezeigt** | Prüfe, ob alle Dateinamen kleingeschrieben sind |
| **Lila/schwarze Textur** | Stelle sicher, dass der Pfad `layer0` zum Speicherort deiner Textur passt |
| **Pack wird nicht geladen** | Prüfe, ob `pack_format` zu deiner Minecraft-Version passt |
| **Falsches Aussehen des Items** | Ändere `"generated"` in `"handheld"` im Model-Parent |
| **Item sieht aus wie Vanilla** | Stelle sicher, dass `customModelData` in EI mit der Zahl deines Overrides übereinstimmt |

## Erweiterte Tipps

### Mehrere Texturen organisieren

Lege Unterordner für verschiedene Item-Typen an:

```
custom_textures/
├── weapons/
│   ├── sword_fire.png
│   └── sword_ice.png
├── tools/
│   └── pickaxe_emerald.png
└── misc/
    └── wand_magic.png
```

Passe deine Pfade entsprechend an:
```json
"layer0": "item/custom_textures/weapons/sword_fire"
```

### 3D-Modelle verwenden

Für 3D-Modelle, die mit [Blockbench](https://www.blockbench.net/) erstellt wurden:

1. Erstelle dein Modell in Blockbench
2. Exportiere es als "Java Block/Item"
3. Ersetze den Inhalt deiner Datei `1.json` durch das exportierte Modell
4. Stelle sicher, dass die Texturpfade zur Struktur deines Packs passen

### Einsatz auf einem Server

Um Custom-Texturen auf einem Server zu verwenden, musst du das Ressourcenpaket online hosten. Eine Anleitung findest du in unserer [Anleitung zum Hochladen von Texturenpaketen](./uploading-texture-pack.md).

## Beispiel-Pack herunterladen

Wenn du Schwierigkeiten hast, den Schritten zu folgen, lade dieses Beispiel-Pack herunter, um die korrekte Struktur zu sehen:

[ExecutableItemsTexturePackExample.zip herunterladen](/img/ExecutableItemsTexturePackExample.zip)

## Weitere Ressourcen

- [Minecraft Wiki: Ressourcenpaket](https://minecraft.wiki/w/Resource_pack)
- [Minecraft Wiki: Modellformat](https://minecraft.wiki/w/Model)
- [Verlauf der Pack-Format-Versionen](https://minecraft.wiki/w/Pack_format)
- [Blockbench - kostenloser 3D-Modell-Editor](https://www.blockbench.net/)

---

Brauchst du Hilfe? Tritt unserer [Discord-Community](https://discord.gg/ExecutableItems) bei und frage in den Support-Kanälen!
