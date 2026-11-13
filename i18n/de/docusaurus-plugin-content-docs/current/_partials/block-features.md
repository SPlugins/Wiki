---
description: >-
  Erfahre, wie blockCommands, detailedBlocks, blockConditions und
  Block-Platzhalter bei Aktivatoren mit Blöcken in ExecutableItems
  funktionieren.
source_hash: e670b85f3ec02fc8
translated_at: '2026-11-13T17:34:07.985Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### blockCommands 

Commands sind eine Liste von Befehlen, die über die Konsole ausgeführt werden, wenn der Aktivator ausgelöst wird und alle Bedingungen und Voraussetzungen erfüllt sind. Du kannst hier Vanilla-Befehle, SCore-Befehle und Befehle anderer Plugins verwenden.

* Alle Befehlszeilen dieser Befehlsliste werden zuerst mit Platzhaltern von Ssomar Plugins und anschließend über PAPI geparst. 
  * Es wird empfohlen, unter [Platzhalter](/tools-for-all-plugins-score/placeholders) nachzuschauen, welche Platzhalter Du bei welchem Aktivator verwenden kannst.
* Es gibt drei Arten von Entity-Zielen bei Befehlen:
  * Player: Der Spieler/User, der den Aktivator des ExecutableItem ausgelöst hat.
  * Target: Der Spieler, der anvisiert wird, bzw. der Gegner, der an einem Aktivator beteiligt ist.
  * Entity: Die Entity/der Mob/der Gegner, die/der an einem Aktivator beteiligt ist.
* Art der Aktivator-Kategorie: PLAYER\_BLOCK
* Info: Liste von Befehlen, die normalerweise auf den Block ausgeführt werden, wenn der Aktivator ausgelöst wird.
  * Das bedeutet, dass der Aktivator mit einem Block zu tun haben muss. PLAYER\_HIT\_PLAYER ist zum Beispiel ein Aktivator, der keinen Block einbezieht, daher sind blockCommands hier nicht verfügbar. Beim Aktivator PLAYER\_BLOCK\_BREAK ist ein Block beteiligt, daher sind blockCommands hier verfügbar.
  * Ein weiteres Beispiel: PLAYER\_RIGHT\_CLICK hat ein activatorFeature namens typeTarget, standardmäßig ONLY\_AIR. Daher sind blockCommands nicht verfügbar, da der Aktivator keinen Block einbezieht. typeTarget kann jedoch auf ONLY\_BLOCK geändert werden, und dann stehen dem Aktivator blockCommands als Features zur Verfügung. Mehr Infos hier -> \<IF I FORGOT PLS PING VAYK>
  * Die Liste der blockCommands findest Du hier -> [Block-Befehle](/tools-for-all-plugins-score/custom-commands/block-commands)
* Beispiel:

```yaml
activators: 
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    blockCommands:
    - EXPLODE
```

* Es ist wichtig zu verstehen, dass Du, wenn Dein Aktivator auch einen Player hat, die playerCommands verwenden kannst. So können wir zum Beispiel Folgendes haben: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    playerCommands:
    - SEND_MESSAGE &6You have broken a block, it will explode in 5 seconds !
    blockCommands:
    - DELAY 5
    - EXPLODE
```

### detailedBlocks

* Info: Hier kannst Du als Bedingung den Typ der Blöcke auswählen, bei denen dieser Aktivator ausgelöst wird.
  * Du kannst Blöcke aus Minecraft Vanilla auswählen, zum Beispiel:
    * "STONE"
  * <CustomTag type="premium" /> <CustomTag type="version" version="1.13" /> Du kannst Blöcke aus Minecraft Vanilla mit NBT auswählen (Info: [Block\_states](https://minecraft.fandom.com/wiki/Block_states)), zum Beispiel: 
    * `FURNACE{lit:true}`
  * Du kannst Blöcke aus ItemsAdder auswählen, zum Beispiel:
    * "ITEMSADDER:\<id>"
  * Du kannst Blöcke aus ExecutableBlocks auswählen, zum Beispiel:
    * "EXECUTABLEBLOCKS:\<id>"
  * Du kannst bestimmte Blöcke auf die Blacklist setzen, indem Du ein ! an den Anfang stellst, zum Beispiel:
    * "!DIRT"
  * Du kannst Block Tags hinzufügen, zum Beispiel: 
    * "#MINECRAFT\:MINEABLE/PICKAXE"
  * Du kannst Blockgruppen hinzufügen, zum Beispiel:
    * "ALL\_ORES"

<details>

<summary>Liste der Blockgruppen</summary>

```
    ALL_CHESTS,
    ALL_FURNACES,
    ALL_PLANKS,
    ALL_LOGS,
    ALL_STRIPPED_LOGS,
    ALL_STRIPPED_WOODS,
    ALL_WOODS,
    ALL_ORES,
    ALL_WOOLS,
    ALL_SLABS,
    ALL_STAIRS,
    ALL_FENCES,
    ALL_SAPLINGS,
    ALL_CROPS,
    ALL_DOORS,
    ALL_TRAPDOORS,
    ALL_BEDS,
    ALL_TERRACOTTA,
    ALL_NORMAL_TERRACOTTA,
    ALL_GLAZED_TERRACOTTA,
    ALL_CONCRETE,
    ALL_CONCRETE_POWDERS,
    ALL_GLASS,
    ALL_STAINED_GLASS,
    ALL_SHULKER_BOXES,
    ALL_LEAVES,
    ALL_CARPETS;
```

</details>

* Beispiel:

```yaml
activators:  
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    detailedBlocks:
      blocks:
      - STONE
      - COBBLESTONE
      - ANDESITE
      - FURNACE{lit:true} #(🎇 **BLOCK STATE FEATURE IS PREMIUM EXCLUSIVE ONLY AND FOR 1.13+** 🎇)
      - ITEMSADDER:turquoise_block
      - EXECUTABLEBLOCKS:CUSTOMDIRT
      - !DIRT
      - ALL_ORES
      - '#MINECRAFT:MINEABLE/PICKAXE'
      cancelEventIfNotValid: false
```

### blockConditions

* Info: Hier kannst Du Bedingungen für den beteiligten Block festlegen.
* [Block-Bedingungen](/tools-for-all-plugins-score/custom-conditions/block-conditions.md)

### Block placeholders

Wenn der Hauptakteur des Events ein Block ist, kannst Du in Deiner Aktivator-Konfiguration (Befehle, Bedingungen und mehr) [die Block-Platzhalter](/tools-for-all-plugins-score/placeholders#-block-placeholders) verwenden.
