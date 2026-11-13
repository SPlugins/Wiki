---
description: >-
  Alle Entity-Befehle für ExecutableItems: Mobs heilen, teleportieren,
  verwandeln, Items droppen und mehr, mit Einstellungen und Beispielen.
source_hash: f04bd6ad6572d292
translated_at: '2026-11-13T17:29:10.869Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Entity-Befehle

:::tip
„Multi-World"-Kompatibilität für die Vanilla-Befehle.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Beispiel: Du möchtest einen Zombie in der Welt SsomarWorld spawnen:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Beispiel mit einem Platzhalter`:`

`execute in <<%entity_world%>> run summon zombie 100 50 100`
:::

:::info
Entity-Befehle unterstützen NPCs von Citizens
:::

## Gemischte Befehle

Zusätzlich zur folgenden Befehlsliste kannst du auch Folgendes verwenden:

<LinkPreview
  url="docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity"
  title="Mixed commands (Compatible with Player and Entity)"
/>

Diese Befehle können in den spielerbezogenen Befehlen ODER in den entitybezogenen Befehlen verwendet werden.

## Eigene Befehle

_Alphabetisch sortiert_

### ANGRY\_AT

* Info: Setzt das Ziel der Entity auf eine bestimmte UUID
* Befehlseinstellung:
  * `{entityUUID}`: Die Entity-UUID des Ziels
* Beispiel:

```
- ANGRY_AT entityUUID:%player_uuid%
# To reset the angry set null
- ANGRY_AT entityUUID:null
```

### AWARENESS

* Info: Legt fest, ob dieser Mob seine Umgebung wahrnimmt. Nicht wahrnehmende Mobs bewegen sich weiterhin, wenn sie geschubst, angegriffen usw. werden, bewegen sich aber nicht von selbst und führen auch keine Aktionen von selbst aus. Bei nicht wahrnehmenden Mobs können außerdem weitere nicht näher bezeichnete Verhaltensweisen deaktiviert sein, etwa das Ertrinken.

:::info
Das funktioniert nur ab 1.16.5+
:::

* Befehlseinstellung:
  * `{value}`: true oder false
* Beispiel:

```
- AWARENESS value:true
```

### CHANGE\_INTO\_ITEM

* Info: Ersetzt ein fallen gelassenes Item (eine Item-Entity am Boden oder in der Luft) durch ein Vanilla-Item oder ein ExecutableItem. Die Entity bleibt dieselbe, nur das Item, das sie trägt, ändert sich.
* Gedacht für den Aktivator `PLAYER_FISH_FISH` von ExecutableItems: Dort ist die von `entityCommands` anvisierte Entity das gefangene Item. Sie wird verändert, bevor sie eingeholt wird, sodass der Spieler die normale Angelanimation behält und statt des Fisches dein Item erhält. Kein `/ei give`, kein `DELAYTICK`, kein `data merge` nötig.
  * In ExecutableEvents (jede Angel des Servers) schreibst du ihn in die `targetEntityCommands` von `PLAYER_FISH_FISH`.
* Befehlseinstellungen:
  * `item`: Ein Material (`DIAMOND`) oder die ID eines ExecutableItems (`my_custom_fish`).
  * `amount`: (Optional) Die Anzahl des neuen Items. Standard: 1
* Beispiel:

```yaml
activators:
  activator0:
    option: PLAYER_FISH_FISH
    entityCommands:
    - CHANGE_INTO_ITEM item:my_custom_fish amount:1
```

```
- CHANGE_INTO_ITEM item:DIAMOND amount:3
- CHANGE_INTO_ITEM item:EI:my_custom_fish
```

:::info
* Wenn ein ExecutableItem und ein Material denselben Namen haben, wird das ExecutableItem verwendet. Schreibe `EI:my_id`, um nur ein ExecutableItem zu akzeptieren.
* Das ExecutableItem wird für den Spieler erstellt, der den Aktivator ausgelöst hat (Besitzer, Platzhalter des Items).
* Der Befehl tut nichts, wenn die Ziel-Entity kein fallen gelassenes Item ist (ein Mob, ein Spieler...), und er gibt eine Meldung in der Konsole aus, wenn `item` weder ein Material noch ein geladenes ExecutableItem ist.
* Vollständiges Beispiel mit einer zufälligen Loot-Tabelle: [Eigener Angel-Loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot)
:::

### CHANGE\_TO

* Info: Ersetzt den Mob durch eine Entity eines anderen Typs. Die aktuelle Geschwindigkeit der aktuellen Entity bleibt erhalten.
  * Du kannst einen [EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html) angeben
  * Oder eine Entity-Definition, Beispiel: `{HasVisualFire:1b,id:"minecraft:bee"}` (1.21.+)
  * Oder eine MythicMob-ID
* Befehlseinstellung:
  * `{entity}`: Die Entity-Angabe
* Beispiel:

```
# With EntityType
- CHANGE_TO entity:CHICKEN

# With EntitySnapshot
- CHANGE_TO entity:{HasVisualFire:1b,id:"minecraft:bee"}

# Or using variable
- CHANGE_TO entity:%var_myvar%

# With MythicMob ID
- CHANGE_TO entity:MyCustomBossID
```

### DROPEXECUTABLEITEM

* Info: Lässt ein ExecutableItem an der Position der Entity fallen
* Befehlseinstellungen:
  * `{id}`: Item-ID des ExecutableItems
  * `{quantity}`: Die Anzahl des ExecutableItems, das fallen gelassen wird
  * `[owner]`: (Optional) Der Besitzer des fallen gelassenen Items (Spieler-IGN oder UUID)
  * `[itemdata]`: (Optional) Item-Dateneinstellungen mit:
    * `Usage`: Setzt den Nutzungswert
    * `Variables`: Setzt benutzerdefinierte Variablen (Format: `{key:value}`)
    * `Durability`: Setzt den Haltbarkeitswert
* Beispiel:

```
- DROPEXECUTABLEITEM ElytraTrail 1
- DROPEXECUTABLEITEM id:ElytraTrail amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Info: Lässt einen ExecutableBlock an der Position der Entity fallen
* Befehlseinstellungen:
  * `{id}`: Item-ID des ExecutableBlocks
  * `{quantity}`: Die Anzahl des ExecutableBlocks, der fallen gelassen wird
* Beispiel:

```
- DROPEXECUTABLEBLOCK House 1
```

### DROPITEM

* Info: Lässt ein Item an der Position der Entity fallen
* Befehlseinstellungen:
  * `{material}`: Der Item-Typ. [Referenz](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) **(MUSS KOMPLETT IN GROSSBUCHSTABEN GESCHRIEBEN SEIN)**
  * `{quantity}`: Die Anzahl des Items, das fallen gelassen wird
* Beispiel:

```
- DROPITEM DIAMOND 1
```

### HEAL

* Info: Heilt die Entity um einen bestimmten Betrag. Wird keiner angegeben, wird die Entity vollständig geheilt.
* Befehlseinstellung:
  * `{amount}`: Die Heilmenge
* Beispiel:

```
# Full heal
- HEAL
# Amount specific heal
- HEAL amount:5
# Remove heal
- HEAL amount:-5
```

### KILL

* Info: Tötet den Mob ohne Todesanimation
* Keine Befehlseinstellung
* Beispiel:

```
- KILL
```

### PLAYER\_RIDE\_ENTITY

* Info: Lässt den Spieler auf der anvisierten Entity reiten.
* Befehlseinstellungen:
  * `{control}`: true/false, ob du die Entity manuell steuern kannst oder nicht
  * `{speed}`: Wie schnell die Entity beim Reiten sein kann
* Beispiel:

```yaml
- PLAYER_RIDE_ON_ENTITY control:true speed:1.0
```

### SET\_AI

* Info: Setzt den KI-Zustand der Entity
* Befehlseinstellungen:
  * `{value}`: true, um die KI der Entity zu aktivieren, und false, um sie zu deaktivieren.
* Beispiel:

```
- SET_AI value:false
```

### SET\_ADULT

* Info: Setzt die Entity in ihren „erwachsenen" Zustand
* Keine Befehlseinstellung
* Beispiel:

```
- SET_ADULT
```

* Beispielsituation:
  * Wird dieser Befehl bei einem Küken ausgeführt, verwandelt es sich in seine erwachsene Form.

### SET\_BABY

* Info: Setzt die Entity in ihren „Baby"-Zustand
* Keine Befehlseinstellung
* Beispiel:

```
- SET_BABY
```

* Beispielsituation:
  * Wird dieser Befehl bei einem ausgewachsenen Huhn ausgeführt, verwandelt es sich in seine Babyform.

### SET\_ENTITY\_NAME

* Info: Setzt den Namen der Entity zwangsweise
* Befehlseinstellung:
  * `{name}`: Der neue Name der Entity
* Beispiel:

```
- SET_ENTITY_NAME name:&6Final &cBoss
```

### SHEAR

* Info: Schert die Entity
* Keine Befehlseinstellung
* Beispiel:

```
- SHEAR
```

### TELEPORT\_ENTITY\_TO\_PLAYER

* Info: Teleportiert die Entity zum Benutzer des Items
* Keine Befehlseinstellung
* Beispiel:

```
- TELEPORT_ENTITY_TO_PLAYER
```

### TELEPORT\_PLAYER\_TO\_ENTITY

* Info: Teleportiert den Benutzer des Items zur Entity
* Keine Befehlseinstellung
* Beispiel:

```
- TELEPORT_PLAYER_TO_ENTITY
```

### TELEPORT\_POSITION

* Info: Teleportiert die Entity an eine bestimmte Position
* Befehlseinstellungen:
  * `{x}`: X-Koordinate
  * `{y}`: Y-Koordinate
  * `{z}`: Z-Koordinate
* Beispiel:

```
- TELEPORT_POSITION x:%target_x% y:%target_y% z:%target_z%
```
