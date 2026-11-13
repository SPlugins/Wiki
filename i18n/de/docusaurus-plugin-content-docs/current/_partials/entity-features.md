---
description: >-
  Erfahre, wie du mit entityCommands, detailedEntities und entityConditions in
  einem Aktivator Entities ansprichst und filterst. Für ExecutableItems.
source_hash: 54a0eb1b19c50558
translated_at: '2026-11-13T17:34:56.142Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### entityCommands

Commands sind eine Liste von Befehlen, die von der Konsole ausgeführt werden, wenn der Aktivator ausgelöst wird und alle Bedingungen und Anforderungen erfüllt sind. Du kannst hier Vanilla-Befehle, SCore-Befehle und Befehle anderer Plugins verwenden.

* Alle Befehlszeilen dieser Befehlsliste werden zuerst mit Platzhaltern von Ssomar Plugins und anschließend über PAPI verarbeitet.
  * Es wird empfohlen, unter [Platzhalter](/tools-for-all-plugins-score/placeholders) nachzusehen, welche Platzhalter du bei welchem Aktivator verwenden kannst.
* Bei Befehlen gibt es drei Arten von Entity-Zielen
  * Player: Der Spieler bzw. Nutzer, der den Aktivator auf dem ExecutableItem ausgelöst hat.
  * Target: Der anvisierte Spieler bzw. Gegner, der an einem Aktivator beteiligt ist.
  * Entity: Die Entity, der Mob bzw. der Gegner, der an einem Aktivator beteiligt ist.
* Aktivator-Kategorie: PLAYER\_ENTITY
* Info: Liste von Befehlen, die normalerweise gegen die Entity ausgeführt werden, wenn der Aktivator ausgelöst wird.
  * Mit Entity ist die Entity, der Mob bzw. der Gegner gemeint, der an einem Aktivator beteiligt ist.
  * Wir wissen, dass ein Spieler ebenfalls als Entity gilt, aber die an Aktivatoren beteiligte Entity ist nur der Mob bzw. Gegner, der an dem Event beteiligt ist.
  * Die Liste der Entity-Befehle findest du hier: [Entity-Befehle](/tools-for-all-plugins-score/custom-commands/entity-commands)
* Beispiel:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY # replace that with the correct activator name
    entityCommands:
    - DAMAGE 10
    - BURN 5
```

* Es ist wichtig zu verstehen: Wenn dein Aktivator auch einen Spieler hat, kannst du die playerCommands verwenden, sodass wir zum Beispiel Folgendes haben können:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY  # replace that with the correct activator name
    playerCommands:
    - SEND_MESSAGE &cThe power of the fire will rise in 5 seconds on the entity
    entityCommands:
    - DELAY 5
    - DAMAGE 10
    - BURN 2
```

### detailedEntities

* Info: Bei Aktivatoren, an denen eine Entity beteiligt ist, kannst du mit diesem Feature als Bedingung festlegen, bei welchem Entity-Typ bzw. welchen Entity-Typen dieser Aktivator ausgelöst wird.
  * Du kannst eine Vanilla-Minecraft-Entity auswählen (Info: [EntityType-Liste](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)), zum Beispiel:
    * "ZOMBIE"
  * <CustomTag type="premium" /> Dafür wird das [NBTAPI Plugin](https://modrinth.com/plugin/nbtapi) benötigt. Du kannst einen Vanilla-Minecraft-Mob mit NBT auswählen (Info: [NBT-Tags von Entities](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities)), zum Beispiel:
    *  `ZOMBIE{isBaby:1}`
    * `ZOMBIE{CustomName:"*"}`
  * Du kannst einen MythicMob-Mob auswählen, zum Beispiel:
    * "MM-\<ID>"
  * Du kannst einen Mob mit ! auf die Blacklist setzen, zum Beispiel:
    * !SKELETON

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY  # replace that with the correct activator name
    detailedEntities:
    - MM-Giant
    - MM-MyMob
    - '!SKELETON'
    - ZOMBIE{CustomName:"*"}
    - ZOMBIE{IsBaby:1}
```

### entityConditions

* Info: Feature für Aktivatoren, an denen eine Entity beteiligt ist. Hier kannst du Bedingungen für die beteiligte Entity festlegen.
* [Entity-Bedingungen](/tools-for-all-plugins-score/custom-conditions/entity-conditions.md)

### Entity-Platzhalter

Wenn der Hauptakteur des Events eine Entity ist, kannst du in der Konfiguration deines Aktivators (Befehle, Bedingungen und mehr) [die Entity-Platzhalter](/tools-for-all-plugins-score/placeholders#entity-placeholders) verwenden.
