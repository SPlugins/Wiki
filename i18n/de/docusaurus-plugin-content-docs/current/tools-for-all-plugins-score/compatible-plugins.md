---
description: >-
  Nicht abschließende Liste kompatibler Plugins wie MythicMobs, WorldGuard und
  PlaceholderAPI, die du mit ExecutableItems kombinieren kannst.
source_hash: 4012882ccbdb916c
translated_at: '2026-11-13T17:28:30.244Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ✔️ Kompatible Plugins

:::info
Beachte, dass diese Liste nur Plugins enthält, die direkt kompatibel sind. Fast jedes Plugin ist mit den Ssomar-Plugins kompatibel. Wenn du einen Befehl eines anderen Plugins ausführen willst, ersetze einfach den Namen des Ziels durch die Platzhalter. \

Zum Beispiel:
```yaml
- essentials:fly %player% # For essentials fly
- vanish %player% # For vanish
- economy give %player% 100 # To give money
#...
```
Und so weiter: **Jeder Befehl, der den Namen eines Spielers unterstützt, ist mit unseren Plugins „kompatibel".**
:::

Dieser Abschnitt behandelt kompatible Plugins, die mit den Ssomar-Plugins zusammenarbeiten. Einige unserer Funktionen sind mit den anderen Plugins kompatibel.

* Bevor du beginnst, solltest du wissen, dass kompatibel ≠ nutzbar ist. Fast alle Plugins sind mit den Ssomar-Plugins nutzbar, weil alle Befehle von der Konsole ausgeführt werden.

### MythicMobs

#### Du kannst Items der Ssomar-Plugins auf folgende Weisen von deinen MythicMobs-Mobs droppen lassen:

*   ExecutableItems:

    1. Halte das ExecutableItem in der Hand und führe `/mm i import` aus. Dadurch wird das Item in die Datei items.yml von MythicMobs importiert, und von dort kannst du es zur LootTable von MythicMobs hinzufügen.
    2. Führe einen Skill \~onDeath des Mobs aus und löse einen Command-Skill aus, der die folgende Zeile hinzufügt:

    ```yaml
    Skills:
    - command{c="ei drop <item> 1 <caster.l.w> <caster.l.x> <caster.l.y> <caster.l.z>"} @self ~onDeath
    ```
* ExecutableBlocks:
  * Dieselbe Idee, aber statt des ExecutableItems verwendest du den ExecutableBlock, und im Command des Skills nutzt du „eb" statt „ei".

#### Du kannst die Aktivatoren der Ssomar-Plugins mit der Funktion [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities) so einschränken, dass sie nur bei bestimmten MythicMobs funktionieren.

* Beispiel: Ein ExecutableItem erstellen, das einer Liste von MythicMobs mehr Schaden zufügt
* Beispiel: Einen ExecutableBlock erstellen, der einem bestimmten MythicMob Schaden zufügt, wenn er über den Block läuft
* Beispiel: Ein ExecutableEvent erstellen, das nur für eine Liste von MythicMobs funktioniert.

#### Du kannst MM-Mobs mit diesem Befehl in deinem Aktivator spawnen:

* Je nach verwendetem Aktivator musst du eventuell die Platzhalter ändern.
  * Beispiel: Statt %world% kann es nötig sein, %player\_world%, %target\_world% oder %block\_world% zu verwenden

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    playerCommands:
    - mm m spawn {mob_id} 1 %world%,%x%,%y%,%z%
```

* ⭐Du kannst diese Idee mit ExecutableBlocks und dem LOOP-Aktivator nutzen, um einen eigenen MythicMobs-Spawner zu erstellen.

#### MythicMobs-Skills über Funktionen der Ssomar-Plugins ausführen

* Du kannst im Abschnitt Befehle `SUDOOP mm test cast <skill>` verwenden, um einen Skill von MythicMobs auszuführen.

#### Benutzerdefinierte SCore-Befehle

* [CHANGETOMYTHICMOB](/tools-for-all-plugins-score/custom-commands/entity-commands#changetomythicmob)
  * ⭐Mit MythicMobs lässt sich ein Angelsystem wie auf dem Hypixel Minecraft Server umsetzen. Zum Beispiel eine Stufenliste verschiedener Angelruten (alles über ExecutableItems gesteuert), bei der jede Stufe eine höhere Wahrscheinlichkeit hat, epischere Mobs aus deinen Seen zu angeln. Außerdem kannst du Einschränkungen hinzufügen, sodass MM-Mobs nur in den Seen bei den Koordinaten „x" (oder in einer WorldGuard-Region) geangelt werden können, und vieles mehr.

### **LevelledMobs**

* ExecutableItems
  * Mit dieser Ressource kannst du deine LevelledMobs ExecutableItems droppen lassen:
    * [https://www.spigotmc.org/resources/lm-items.102081/](https://www.spigotmc.org/resources/lm-items.102081/)

### AuraSkills (früher AureliumSkills)

* Die Ssomar-Plugins haben die Aktivator-Funktion [requiredMana](/executableitems/configurations/activator-configuration/activators-features#requiredmana), um Mana als Voraussetzung dafür festzulegen, dass der Aktivator funktioniert.
* Aurelium-Skills-Befehle
  * Außerdem kannst du AureliumSkills-Befehle in deinem Plugin verwenden, zum Beispiel um dem Spieler Mana zu geben oder den Spielern in der Umgebung Mana zu geben (wie ein Supporter).
* ExecutableItems
  * Aurelium Skills NBT
    * Du kannst ein ExecutableItem erstellen, das dein maximales Mana erhöht, solange du es in der Hand hältst. Dazu erstellst du ein Item, führst den Befehl `/sk modifier` aus und führst dann, während du das Item in der Hand hältst, `/ei create <id>` aus. Jetzt hat das ExecutableItem den NBTTag des Befehls und damit auch die von dir vorgenommenen Änderungen.

### ExecutableBlocks & ExecutableItems

* Diese beiden Plugins (ExecutableBlocks und ExecutableItems) lassen sich miteinander verknüpfen. Die Verknüpfung wird in EB über die Funktion [TYPE\_OF\_CREATION ](/executableblocks/configurations/block-configuration/block-features#creationtype)hergestellt. Zum Beispiel:
  * Wenn du das ExecutableItem platzierst, wird es zum damit verknüpften ExecutableBlock (standardmäßig würde es die Daten des ExecutableItems verlieren und als Vanilla-Block platziert werden)
  * Wenn du einen ExecutableBlock abbaust, erhältst du das damit verknüpfte ExecutableItem.
  * Die gleiche Nutzung, die der platzierte ExecutableBlock hatte, wird beim Abbau und der Umwandlung in das verknüpfte ExecutableItem übernommen und umgekehrt.
  * Die gleichen Variablenwerte, die der platzierte ExecutableBlock hatte, werden beim Abbau und der Umwandlung in das verknüpfte ExecutableItem übernommen und umgekehrt.

### ItemsAdder

* ExecutableItems
  * Du kannst die mit ItemsAdder erstellten Texturen über die Funktion [customModelData ](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14)oder über [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel) verwenden.
  *   Du kannst das ItemsAdder-Item mit EI verknüpfen, indem du der Anleitung in ihrem Wiki zum Verknüpfen folgst. Dazu fügst du die folgende Codezeile zur Datei des ItemsAdder-Items hinzu.

      ```yaml
      executableitem:
        id: ZEUSCROWN
      ```
* ExecutableBlocks
  * Du kannst einen ExecutableBlock mit der Textur eines ItemsAdder-Blocks erstellen. Das geschieht über die Funktion [TYPE\_OF\_CREATION ](/executableblocks/configurations/block-configuration/block-features#creationtype)von ExecutableBlocks.
* Du kannst bei den Aktivatoren, die sich auf einen Block beziehen, in allen Plugins über [detailedBlocks ](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)bestimmte ItemsAdder-Blöcke auswählen
  *   Beispiel:

      ```yaml
      activators:  
        activator0: # Activator ID, you can create as many activator on the activators list    
          option: PLAYER_BLOCK_BREAK
          detailedBlocks:
          - ITEMSADDER:turquoise_block
      ```

### Nexo

* ExecutableItems
  * Du kannst die Texturen von Nexo in deinem ExecutableItem verwenden, indem du einfach den Wert für [Custom model data](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14) oder [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel) nutzt.

### PlaceholderAPI

* Eine der wichtigsten Säulen beim Erstellen von Items: Du kannst jeden PlaceholderAPI-Platzhalter in jedem Teil unserer Plugins verwenden:
  * Lore
  * Abschnitt Befehle
  * Nachrichten (alle Arten von Nachrichten, Cooldown-Nachricht, Nachricht bei nicht erfüllter Bedingung, Nachricht bei fehlenden Anforderungen usw.)
  * Variablen
  * usw.

### ShopGui+

* Dieses Plugin unterstützt den Verkauf von Items mit bestimmten NBT Tags im Shop und daher auch den Verkauf von ExecutableItems und ExecutableBlocks.
* Der Block-Befehl [SELL\_CONTENT ](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content)wird von diesem Plugin unterstützt.

### ShopKeepers

* Dieses Plugin unterstützt den Verkauf von Items mit bestimmten NBT Tags im Shop und daher auch den Verkauf von ExecutableItems und ExecutableBlocks.

### Tradesplus

* Dieses Plugin unterstützt den Verkauf von Items mit bestimmten NBT Tags im Shop und daher auch den Verkauf von ExecutableItems und ExecutableBlocks.

### WorldGuard

* Für alle Plugins gibt es die Bedingung, den Aktivator nur funktionieren zu lassen, wenn sich der Spieler innerhalb oder außerhalb einer Region befindet. Sie heißt [ifInRegion](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinregion-not) und ist mit diesem Plugin kompatibel.
* Alle SCore-Befehle unterliegen dem Schutz von WorldGuard
  * Das bedeutet: Ein BREAK (SCore-Befehl) wird nicht ausgeführt, wenn der Spieler keine Berechtigung hat, an der gewählten Position einen Block abzubauen.
  * Beachte, dass diese Funktion für SCore-Befehle gilt, nicht für Befehle, die von unseren Plugins ausgeführt werden. Wenn du also einen Vanilla-Befehl in einem unserer Plugins verwendest, z. B. "execute at %player% run setblock %block\_x% %block\_y% %block\_z% air replace", werden alle Einschränkungen umgangen.
* ExecutableBlocks
  * Mit [/eb wg-fill-region](/executableblocks/commands-and-permissions#fill-a-worldguard-region-with-an-eb) kannst du eine Region mit bestimmten ExecutableBlock(s) und detaillierten Gewichtungen füllen.
    * Damit könntest du zum Beispiel einen globalen Loop erstellen, der eine bestimmte Mine zurücksetzt, wie die typischen /warp-Minen auf Minecraft-Servern.

### HeadDB

* ExecutableItems
  * Du kannst dieses Plugin verwenden, um mit den [head settings](/executableitems/configurations/item-configuration/item-features#head-settings) einen bestimmten Spielerkopf für das Item des ExecutableItems auszuwählen.
* ExecutableBlocks
  * Du kannst dieses Plugin verwenden, um einen bestimmten Spielerkopf für den Block des ExecutableBlocks auszuwählen. Dazu verknüpfst du ein ExecutableItem mit den [head settings](/executableitems/configurations/item-configuration/item-features#head-settings) und nutzt [TYPE\_OF\_CREATION](/executableblocks/configurations/block-configuration/block-features#creationtype) gemäß dem angegebenen ExecutableItem.

### IridiumSkyblock

* Für alle Plugins gibt es die Bedingung, den Aktivator nur funktionieren zu lassen, wenn sich der Spieler auf seiner Insel befindet. Sie heißt [ifPlayerMustBeOnHisIsland ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland)und ist mit diesem Plugin kompatibel.

### SuperiorSkyblock

* Für alle Plugins gibt es die Bedingung, den Aktivator nur funktionieren zu lassen, wenn sich der Spieler auf seiner Insel befindet. Sie heißt [ifPlayerMustBeOnHisIsland ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland)und ist mit diesem Plugin kompatibel.

### GriefPrevention

* Für alle Plugins gibt es die Bedingung, den Aktivator nur funktionieren zu lassen, wenn sich der Spieler in seinem Claim befindet. Sie heißt [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim)und zusätzlich gibt es [ifPlayerMustBeOnHisClaimOrWilderness ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness). Beide sind mit diesem Plugin kompatibel.

### Lands

* Für alle Plugins gibt es die Bedingung, den Aktivator nur funktionieren zu lassen, wenn sich der Spieler in seinem Claim befindet. Sie heißt [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim)und zusätzlich gibt es [ifPlayerMustBeOnHisClaimOrWilderness ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness). Beide sind mit diesem Plugin kompatibel.
* ExecutableItems
  * Es gibt einige Aktivatoren, die speziell für dieses Plugin gedacht sind:
    * PLAYER\_ENTER\_IN\_THEIR\_LAND
    * PLAYER\_LEAVE\_THEIR\_LAND

### GriefDefender

* Für alle Plugins gibt es die Bedingung, den Aktivator nur funktionieren zu lassen, wenn sich der Spieler in seinem Claim befindet. Diese Bedingung heißt [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim)und ist mit diesem Plugin kompatibel.

### Residence

* Für alle Plugins gibt es die Bedingung, den Aktivator nur funktionieren zu lassen, wenn sich der Spieler in seinem Claim befindet. Diese Bedingung heißt [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim)und ist mit diesem Plugin kompatibel.

### PlotSquared

* Für alle Plugins gibt es die Bedingung, den Aktivator nur funktionieren zu lassen, wenn sich der Spieler auf seinem Plot befindet. Diese Bedingung heißt [ifPlayerMustBeOnHisPlot ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisplot)und ist mit diesem Plugin kompatibel.

### Towny

* Für alle Plugins gibt es die Bedingung, den Aktivator nur funktionieren zu lassen, wenn sich der Spieler in seiner Stadt befindet. Diese Bedingung heißt [ifPlayerMustBeOnHisTown ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhistown)und ist mit diesem Plugin kompatibel.

### Advanced Enchantments

* ExecutableItems
  * Aufgrund der Funktionsweise des Plugins Advanced Enchantments sind dessen Verzauberungen nicht in der Liste der Verzauberungen enthalten. Sie können daher nicht über die Funktion für Verzauberungen hinzugefügt werden:![](https://media.ssomar.com/m/docs-img-image-256.png)
  * Es ist aber möglich, deren Verzauberungen über das Plugin NBTAPI zu deinen ExecutableItems hinzuzufügen, und zwar auf einem dieser Wege:
    * Der erste Weg: Du erstellst ein Vanilla-Item, fügst die AdvancedEnchantment darauf hinzu und führst dann, während du es in der Hand hältst, /ei create \<id> aus. Das ausgegebene ExecutableItem enthält automatisch die importierten Advanced Enchantments.
    *   Der zweite Weg: Du fügst den NBT Tag manuell in der Config-Datei des ExecutableItems hinzu. Hier ein Beispiel:

        ```yaml
        nbt:
          '0':
            key: ae_enchantment;haste # This add the haste AdvancedEnchantment NBT tag
            type: INT
            value: 1
        ```
  * Nach all diesen Schritten musst du die Verzauberung manuell in der Lore ergänzen, damit die Spieler wissen, dass dieses Item diese Verzauberung hat.

### RoseLoots

* Alle Block-Befehle (z. B. [MINEINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#mineincube), [FARMINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#farmincube), [BREAK](/tools-for-all-plugins-score/custom-commands/block-commands#break) usw.) unterstützen die benutzerdefinierten Block-Loots dieses Plugins.

### MMOInventory

* ExecutableItems
  * Die Aktivatoren für das Betreten und Verlassen des Inventars (z. B. EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY und EI\_LEAVE\_THE\_PLAYER\_INVENTORY) werden durch dessen Methoden ausgelöst.

### EnchantsSquared

* ExecutableItems
  * Dieses Plugin unterstützt die Verzauberungen von EnchantsSquared.

### ExcellentEnchants

* ExecutableItems
  * Dieses Plugin unterstützt die Verzauberungen von ExcellentEnchants

### MMOCore

* Die Funktion requiredMana für Aktivatoren kann Mana aus MMOCore verwenden. So kannst du Mana-Anforderungen festlegen, damit Aktivatoren funktionieren.

### TAB

* Der benutzerdefinierte Befehl SETGLOW ist mit TAB kompatibel. Du musst den Platzhalter %score\_cmd-glow% verwenden.

### BlocksToCommand

* Ein Plugin, mit dem du Strukturen importieren kannst, die sich mit den Ssomar-Plugins platzieren lassen.

### Terra

* Die benutzerdefinierten Biome von Terra werden von Biom-Bedingungen mit der Bedingung [ifInBiome ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinbiome-not)unterstützt. So kannst du spezielle Aktivatoren, Effekte oder Einschränkungen erstellen, die vom Biom abhängen, in dem sich ein Spieler befindet.

### EcoSkills

* Du kannst Platzhalter-Bedingungen verwenden, um zu prüfen, ob ein Spieler bestimmte Magie-Werte hat, bevor ein Aktivator ausgelöst werden darf.
* Du kannst Befehle verwenden, um Magie-Werte abzufragen oder zu entfernen.
* ExecutableItems
  * Die Funktion [RequiredMagic ](/executableitems/configurations/activator-configuration/activators-features#requiredmagic-ecoskills)statt Platzhalter-Bedingungen und Befehlen zum Entfernen von Magie.

### FACTIONS UUID

* SCore-Befehle platzieren und entfernen Blöcke sicher und beachten dabei die FactionsUUID-Schutzbereiche des Spielers.

### CMI

* Der Befehl [SELL\_CONTENT ](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content)unterstützt CMI-Preise und ermöglicht so eine nahtlose Integration mit dem CMI-Wirtschaftssystem, um Items zum richtigen Ingame-Wert zu verkaufen.

### JOBS REBORN

* Der Befehl JOBS\_MONEY\_BOOST funktioniert mit diesem Plugin.

### VAULT

* ExecutableItems
  * Die Funktion [requiredMoney ](/executableitems/configurations/activator-configuration/activators-features#requiredmoney)funktioniert mit Vault. So kannst du eine Geldanforderung festlegen, damit Aktivatoren ausgelöst werden.

### Citizen NPC

* ExecutableItems
  * Die folgenden Aktivatoren funktionieren für Citizen NPC(s)
    * PLAYER\_CLICK\_ON\_ENTITY
    * PLAYER\_FISH\_ENTITY
    * PLAYER\_KILL\_ENTIT

### NBT API

* #### itemCheckWithNBTAPI

### Wild Stacker

* SILK\_SPAWNER-Befehle funktionieren mit den Spawnern von WildStacker.
