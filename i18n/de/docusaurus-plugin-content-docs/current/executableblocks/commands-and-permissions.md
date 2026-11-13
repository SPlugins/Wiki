---
description: >-
  Alle Befehle und Berechtigungen von ExecutableBlocks im Überblick: Blöcke
  erstellen, platzieren, geben, neu laden und per Berechtigung steuern.
source_hash: 653dceef09a76278
translated_at: '2026-11-13T17:22:59.715Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ⌨️ Befehle & Berechtigungen

## Berechtigungen

**TIPP für Anfänger:**

:::info
Um die Berechtigungen für alle Items zu vergeben, empfehle ich dir, ein Berechtigungs-Plugin wie [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/) herunterzuladen. Sobald du ein Berechtigungs-Plugin hast, musst du nur die Berechtigung **`eb.block.*`** vergeben. Bei Luckperms lautet der Befehl **`/lp group default permission set eb.block.* true`**
:::

#### Block-Berechtigung

* Berechtigung: `eb.block.{id}`
* Negative Berechtigung: `-eb.block.{id}` 
* Beispiel: `eb.block.Test`
* Berechtigung für alle Items: `eb.block.*` 

#### Alle Berechtigungen von EB vergeben

* Berechtigung: `eb.*`

#### Alle Befehlsberechtigungen von EB vergeben

* Berechtigung: `eb.cmds`

#### Berechtigung zum Umgehen des Cooldowns

* Berechtigung: `eb.nocd.{id}` `eb.nocd.*`
* Beschreibung: Vergib diese benutzerdefinierte Berechtigung, um den Cooldown für deine VIP-Spieler zu deaktivieren
* (Teste unbedingt ohne OP-Status)

**Limit für EB**

* Berechtigung: `eb.limit.{amount}`
* Beschreibung: Legt den Maximalwert fest, wie viele EB(s) ein Spieler platzieren kann.

#### Ein bestimmtes EB begrenzen

* Berechtigung: `eb.block.ID.limit.{amount}`
* Beschreibung: Begrenzt die Anzahl einer bestimmten EB-ID, die ein Spieler platzieren kann

## Befehle

#### Einen neuen ExecutableBlock erstellen

* Befehl: **/eb create \{id\}**
* Tipp: 
  * Wenn du **das Item/den Block eines anderen Plugins** oder einen benutzerdefinierten Vanilla-Block (Banner, Custom Block, ...) kopieren möchtest, musst du mein anderes Plugin ExecutableItems installieren, **/ei create \{id\}** eingeben und dann dein ExecutableItem in ExecutableBlocks importieren.
* Berechtigung: `eb.cmd.create`

####

#### Eine GUI mit den platzierten EB(s) öffnen

* Befehl: /eb show-placed filter/sort:

#### Den Editor / das Menü öffnen

* Befehl: **/eb editor** oder **/eb show**
* Berechtigung: `eb.cmd.editor` oder `eb.cmd.show`

#### Den Editor öffnen, um ein bestimmtes EB zu bearbeiten

* Befehl: **/eb edit \{BlockID\}**
* Berechtigung: `eb.cmd.edit`

#### Das Plugin neu laden

* Befehl: **/eb reload**
* Berechtigung: `eb.cmd.reload`

#### Das Plugin neu laden (nur 1 Block)

* Befehl: **/eb reload \{block\_id\}**
* Berechtigung: `eb.cmd.reload`

**Einen Ordner neu laden**

* Befehl: **/eb reload folder\:Name\_Of\_My\_Folder**
* Berechtigung: `eb.cmd.reload`

#### Einen ExecutableBlock löschen

* Befehl: **/eb delete \{id\}**
* Berechtigung: `eb.cmd.create`

#### Die Standardblöcke von ExecutableBlocks neu laden

* Befehl: **/eb default\_blocks**
* Berechtigung: `eb.cmd.default_blocks`

#### Alle Cooldowns und verzögerten Befehle von EB löschen

* Befehl: **/eb clear** **\[playerName]**
* Berechtigung: `eb.cmd.clear`

:::info
Es unterstützt auch Entities, verwende einfach die UUID der Entity anstelle des Spielernamens
:::

#### Actionbar von EB aktivieren / deaktivieren

* Befehl: **/eb actionbar** **\{on or off\}**
* Berechtigung: `eb.cmd.actionbar`

#### Ein EB an einer bestimmten Position platzieren

* Befehl: **/eb place \{id\} \{x\} \{y\} \{z\} \{world\}** \[direction]
* Berechtigung: `eb.cmd.place`
* `[direction]`: (Optional) `NORTH`, `SOUTH`, `EAST`, `WEST`, `UP` oder `DOWN` (beliebige Groß-/Kleinschreibung, mit Tab-Vervollständigung). Der platzierte Block wird in diese Richtung gedreht.
  * Sie hat Vorrang vor den [Richtungsfunktionen](/executableblocks/configurations/block-configuration/block-features#directional-features) des Blocks (`blockFaceOnPlace` mit `forceBlockFaceOnPlace: true`).
  * Sie funktioniert bei Blöcken, die gedreht werden können: Blöcke mit Ausrichtung (Öfen, Observer, Bienennester ...), drehbare Blöcke (Schilder, Köpfe, Banner: nicht `UP` / `DOWN`) und Blöcke mit einer Achse (Baumstämme, Säulen: `UP` / `DOWN` = vertikal). Eine Richtung, die der Block nicht akzeptiert, wird ignoriert.
  * Nur für ExecutableBlocks, die mit `BASIC_CREATION` oder `IMPORT_FROM_EXECUTABLE_ITEMS` erstellt wurden, auf Servern ab 1.13.
  * Ohne das Argument ändert sich nichts: Der Block wird wie bisher platziert.
* Beispiel: `/eb place my_furnace 100 64 -20 world EAST`

#### Ein EB an einer bestimmten Position entfernen

* Befehl: **/eb remove \{x\} \{y\} \{z\} \{world\}** \[replaceWithAir default true]
* Berechtigung: `eb.cmd.remove`

#### Eine Regionsauswahl mit einem EB füllen

* Voraussetzung: Für diesen Befehl wird das Plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit) benötigt
* Befehl: **/eb we-place \{id\}**
* Berechtigung: `eb.cmd.we-place`

#### Eine WorldGuard-Region mit einem EB füllen

* Voraussetzung: Für diesen Befehl wird das Plugin WorldGuard benötigt
* Befehl: **/eb wg-fill-region \{world\} \{region\_name\} stone:70,MyEb:30**
* Berechtigung: `eb.cmd.wg-fill-region`

#### Alle EB in einer Blockauswahl entfernen

* Voraussetzung: Für diesen Befehl wird das Plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit) benötigt
* Befehl: **/eb we-remove \{replaceTheEBByAir true or false\}**
* Berechtigung: `eb.cmd.we-remove`

#### EB-Variablen ändern

* Befehl: /eb modification \{set/modification\} variable \{world\} \{x\} \{y\} \{z\} \{variableName\} \{value\} 

#### EB-Usage ändern

* /eb modification \{set/modification\} usage \{world\} \{x\} \{y\} \{z\} \{value\}

### Give- & Take-Befehle

#### Give-Befehl

* (Funktioniert bei Offline-Spielern)
* Befehl: 
  * **/eb give \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\}** \[giveOfflinePlayer default true]
* Berechtigung: `eb.cmd.give`
* Beispiele:
  * Beispiele: 
    * **/eb give %player% Genesis\_Crystal\{Variables:\{vibraniun:10,proton:30\},Usage:10\} 3** 
    * **/eb give %player% SurgeBlade\{Variables:\{charge:%var\_charge%+1\},Usage:%usage%-1\} 1**
    * **/eb give %player% BoneBlade 1**

#### Take-Befehl

* Befehl: 
  * **/eb take \{playername\} \{id\} \{quantity\}**
* Berechtigung: `eb.cmd.take`

#### GiveAll-Befehl

* Befehl: 
  * **/eb giveall \{id\} \{quantity\}** **\[world]**
* Berechtigung: `eb.cmd.giveall`

#### Ein EB in einen bestimmten Slot eines Spielers geben 

* Befehl: 
  * **/eb giveslot \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\} \{slot\}**  **\[override true or false]**
  * Beispiele: 
    * **/eb giveslot Ssomar test\{Variables:\{x:"Hey",world:"Island"\},Usage:50\} 1 0**  
    * **/eb giveslot Special70 rum\{Usage:69420,Variables:\{tell\_me:"why",aint\_nothing:"BUT A HEARTBREAK"\\}\} 1 %slot%**
    * **/eb giveslot Ssomar xyz\{Variables:\{test:"Hello boss!"\},Usage:5\} 1 5**
  * _Standard-Usage: Die Usage, die in der Config deines EB steht_
  * _Override erlaubt dem EB, diesen Slot zu belegen. Falls dort ein Item lag, wird es in einen anderen Slot verschoben oder auf den Boden fallen gelassen._
* Berechtigung: `eb.cmd.giveslot`

**Jedes EB in einem bestimmten Ordner an einen Spieler geben**

* Befehl:
  * **/eb givefolder \{playername\} \{folder\} \{quantity\}**

### Drop-Befehle

#### Ein EB an einer bestimmten Position droppen 

* Befehl: 
  * **/eb drop \{id\}** **\[quantity] \[world] \[x] \[y] \[z]**
  * _Standardmenge: 1_
  * _Standardposition: Die Position des Spielers, der diesen Befehl ausgeführt hat_
* Berechtigung: `eb.cmd.drop`

### Custom Trigger

Befehle:

* /eb run-custom-trigger trigger:\{activatorId\} // Er führt den/die Aktivator(en) für alle platzierten EB aus, die einen Aktivator mit der angegebenen ID haben.
* /eb run-custom-trigger trigger:\{activatorId\} block:\{world,x,y,z\} // Er führt den/die Aktivator(en) nur für das EB aus, das an der angegebenen Position platziert ist und einen Aktivator mit der angegebenen ID hat.
