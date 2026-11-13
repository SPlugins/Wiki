---
description: >-
  Alle Befehle und Berechtigungen des ExecutableItems-Plugins:
  Item-Berechtigungen, Cooldown-Bypass, Give-, Drop- und Modifikationsbefehle im
  Überblick.
source_hash: 30fd8157fcb56ff1
translated_at: '2026-11-13T17:24:29.567Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# ⌨️ Befehle & Berechtigungen

Auf dieser Seite erfährst du alles über die Befehle und Berechtigungen des ExecutableItems-Plugins.

Premium-Funktionen sind mit diesem Tag gekennzeichnet:  <CustomTag type="premium" />

## Berechtigungen

**TIPP für Einsteiger:**

:::info
Um die Berechtigungen aller Items zu vergeben, empfehle ich dir, ein Berechtigungs-Plugin wie [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/) herunterzuladen. Sobald du ein Berechtigungs-Plugin hast, musst du nur die Berechtigung **`ei.item.*`** vergeben. Bei Luckperms lautet der Befehl **`/lp group default permission set ei.item.* true`**
:::

#### Item-Berechtigung

* Info: Berechtigung für einen Spieler, ein ExecutableItem zu verwenden.
  * Berechtigung zur Verwendung einer bestimmten ExecutableItem-ID: `ei.item.{id}`
  * Berechtigung zur Verwendung aller ExecutableItems: `ei.item.*` 
  * Negative Berechtigung, um eine bestimmte ExecutableItems-ID zu verbieten: `-ei.item.{id}` <CustomTag type="premium" />
* Beispiel: `ei.item.test`

#### Berechtigung zum Umgehen des Cooldowns

* Info: Berechtigung für einen Spieler, bei der Verwendung eines ExecutableItems keinen Cooldown zu haben. 
  * Beim Testen musst du ohne OP/Operator/Admin testen.
  * Berechtigung zum Umgehen bei einer bestimmten ExecutableItems-ID: `ei.nocd.{id}`
  * Berechtigung zum Umgehen bei allen ExecutableItems: `ei.nocd.*`
* Beispiel: `ei.nocd.test`

#### Alle Berechtigungen

* Info: Berechtigung, die alle Berechtigungen für ExecutableItems gewährt.
  * Vorsicht! Diese gewährt buchstäblich jede Berechtigung, sogar die für Administratoren.
  * Berechtigung: `ei.*`
* Wenn du eine bestimmte Berechtigung vergeben möchtest, lies unten weiter: Dort wird jeder Befehl mit seiner jeweiligen Berechtigung erklärt.

#### Berechtigungen für alle Befehle

* Info: Berechtigung, die alle Befehlsberechtigungen für ExecutableItems gewährt.
  * Berechtigung: `ei.cmds`
* Wenn du eine bestimmte Berechtigung vergeben möchtest, lies unten weiter: Dort wird jeder Befehl mit seiner jeweiligen Berechtigung erklärt.

## Befehle

Hier erfährst du alles über die Befehle von ExecutableItems. In der Erklärung wiederholen sich einige Begriffe, hier sind sie:

* SsomarPluginsItem: Die ID eines ExecutableItems, das erstellt wurde, zum Beispiel "Excalibur", "SuperPickaxe", "turtle" oder "12345". Diesen Namen haben wir festgelegt.
* SsomarPluginsPlayer: Der Name eines Spielers, zum Beispiel "Vayk\_", "Ssomar", "Special70" oder "Tidal\_Flame". Auch dieser Name wurde von uns festgelegt.

Das Format der Befehle verwendet verschiedene Symbole:

* \{\} : Steht ein Argument in \{\}, ist es zum Ausführen des Befehls notwendig.
* \[] : Steht ein Argument in \[], ist es zum Ausführen des Befehls optional.

Außerdem gibt es verschiedene Farben (die Idee ist dieselbe wie bei \{\} und \[] ):

* Blau: Pflicht
* Orange: Optional

### Allgemeine Befehle

#### Ein neues ExecutableItem erstellen

* Befehl: **/ei create \{id\}**
  * `id`: ID des ExecutableItems.
  * Wenn du **das Item eines anderen Plugins** oder ein angepasstes Vanilla-Item (Banner, Schild, ...) kopieren möchtest, ist das ganz einfach! Nimm es in die Haupthand und führe diesen Create-Befehl aus.
* Beispiel: `/ei create SsomarPluginsItem`
* Berechtigung: `ei.cmd.create`

#### Ein neues ExecutableItem aus einem anvisierten Block erstellen

* Befehl: /ei create-from\_block \{id\}
  * `id`: ID des ExecutableItems.
* Beispiel: `/ei create-from_block SsomarPluginsItem`
* Berechtigung: `ei.cmd.create-from-block`

#### Den Editor / das Menü öffnen

* Befehl: **/ei editor** oder **/ei show**
* Berechtigung: `ei.cmd.editor` oder `ei.cmd.show`
* In der Liste zeigt das Icon jedes Items eine Vorschau auf seinen Anzeigenamen, seine Lore, Verzauberungen und Attribute. Sie kann mit [editorIconPreview](/tools-for-all-plugins-score/score/general-config#editoriconpreview) in der SCore-Config deaktiviert werden.

#### Das Plugin neu laden

* Befehl: **/ei reload**
* Berechtigung: `ei.cmd.reload`

**Nur 1 Item neu laden**

* Befehl: **/ei reload \{id\}**
  * `id` : ID des ExecutableItems.
* Beispiel: `/ei reload SsomarPluginsItem`
* Berechtigung: `ei.cmd.reload`

**Einen Ordner neu laden**

* Befehl: **/ei reload folder\:Name\_Of\_My\_Folder**
* Berechtigung: `ei.cmd.reload`

#### Die Standard-Item-Configs neu generieren

* Befehl: **/ei default\_items**
* Berechtigung: `ei.cmd.default_items`

#### Ein ExecutableItem löschen

* Befehl: **/ei delete \{id\}**
  * `id`: ID des ExecutableItems.
* Beispiel: `/ei delete SsomarPluginsItem`
* Berechtigung: `ei.cmd.create`

#### Ein ExecutableItem mit einem Befehl bearbeiten

* Befehl: **/ei edit \{id\}**
  * `id` : ID des ExecutableItems.
* Beispiel: `/ei edit SsomarPluginsItem`
* Berechtigung: `ei.cmd.edit`

#### Alle Cooldowns und verzögerten Befehle von ExecutableItems zurücksetzen

* Befehl: **/ei clear \{target\} \[optionaltarget]**
  * `target`
    * Du kannst Spielernamen verwenden, um einen Spieler anzuvisieren.
    * Du kannst eine UUID verwenden, um eine Entität anzuvisieren.
  * `optional_target`
    * ALL: Setzt die verzögerten Befehle, Cooldowns und Actionbars des Spielers zurück.
    * DELAYED\_COMMANDS: Setzt alle verzögerten Befehle zurück, die durch DELAY und DELAYTICK ausgelöst wurden.
    * COOLDOWNS: Setzt alle Cooldowns des Spielers über alle Items hinweg zurück.
    * ACTIONBARS: Setzt alle Actionbars des Spielers zurück, die durch den Custom Command ACTIONBAR erzeugt wurden.
* Beispiel: `/ei clear SsomarPluginsPlayer COOLDOWNS`
* Berechtigung: `ei.cmd.clear`

#### Die Actionbar von ExecutableItems aktivieren / deaktivieren

* Befehl: **/ei actionbar \{on or off\}**
* **Beispiel:** `/ei actionbar off`
* Berechtigung: `ei.cmd.actionbar`

#### Das ExecutableItem in deiner Haupthand untersuchen

* Befehl: **/ei inspect**
  * Um diesen Befehl zu verwenden, muss beim ExecutableItem die Funktion zum Speichern von Item-Infos aktiviert sein. [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info)
  * Ausgabe:
    * Usage
    * Owner UUID
    * Owner name
    * ExecutableItems ID
    * Variables 
* Berechtigung: `ei.cmd.inspect`

#### Den Besitzer des EI in deiner Hand entfernen

* Befehl: **/ei unowned**
  * Damit ein Item keinen Besitzer mehr hat, muss es zuvor einen Besitzer gehabt haben. Dafür muss die Funktion [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info) bei diesem ExecutableItem aktiviert sein.
  * Nach dem Ausführen dieses Befehls wird der nächste Spieler, der mit diesem Item interagiert, der neue Besitzer. (Er darf kein Operator/OP/Admin sein.)
* Berechtigung: `ei.cmd.unowned`

#### Ein EI aus dem Spielerinventar nehmen

* Befehl: **/ei take \{player\} \{id\} \{quantity\}**
  * `player`: Name des Spielers, dem das Item abgenommen wird
  * `id`: ID des ExecutableItems
  * `quantity`: Ganzzahl für die Menge, die entfernt werden soll
* Beispiel: `/ei take SsomarPluginsPlayer SsomarPluginsItem 1`
* Berechtigung: `ei.cmd.take`

#### Die ExecutableItem(s) deiner Spieler mit ihrer letzten Config-Version aktualisieren

* Info: Dieser Befehl aktualisiert die ExecutableItemID(s) auf ihre letzte Version in ihrer Config. Das bedeutet: Hat ein Spieler ein ExecutableItem in alter Version, zum Beispiel mit dem Attribut GENERIC\_ARMOR auf 10, und du änderst anschließend den Wert des Attributs in der Config des ExecutableItems, wird er auf Spielerseite nicht aktualisiert. Um diese Aktualisierung zu ermöglichen, kannst du diesen Befehl verwenden. Dann wird das Item aktualisiert und der Spieler hat statt 10 den neuen Wert.
  * Damit die ausgewählten ExecutableItem(s) aktualisiert werden, müssen sie sich im Inventar des Spielers befinden, andernfalls werden sie nicht aktualisiert.
  * Als Tipp: Eine andere Möglichkeit für diese Aktualisierung ist [Auto update item](/executableitems/configurations/activator-configuration/activators-features#auto-update-item)
* Befehl: **/ei refresh \{player\} \{ExecutableItemID\}** **\{resetUsage\} \{resetDurability\}**
  * `player`: Name eines bestimmten Spielers oder "all", um alle Spieler online anzuvisieren.
  * `ExecutableItemID`: Name eines bestimmten ExecutableItems oder "all", um alle erstellten ExecutableItems anzuvisieren.
  * `option`: Refresh-Argument
    * Optionen:
      * MATERIAL
      * NAME
      * LORE
      * DURABILITY
      * ATTRIBUTES
      * ENCHANTS
      * CUSTOM_MODEL_DATA
      * ARMOR_SETTINGS
      * USAGE
      * ITEM_RARITY
      * BOOK
      * EQUIPPABLE
      * REPAIRABLE
      * HIDERS
      * INSTRUMENT
      * TOOL_RULES
      * FIREWORK
      * FIREWORK_EXPLOSION
      * CONTAINER
      * HEAD
      * BANNER
      * FOOD
      * CONSUMABLE
      * BUNDLE
      * BLOCK_STATE
      * CHARGED_PROJECTILES
      * MYFURNITURE
      * SPAWNER
      * WEAPON
      * BLOCK_ATTACKS
      * TOOLTIP_MODEL
      * ALL_OPTIONS (führt alle oben genannten Aufgaben aus)
* Berechtigung: `ei.cmd.refresh`

#### **Den Besitzer des ExecutableItems in deiner Hand ändern**

* Befehl: **/ei set\_owner** **\{player\}**
  * `player`: Name des Spielers, der als Ziel dieses Befehls gesetzt wird
    * Funktioniert auch bei Offline-Spielern.
* Berechtigung: `ei.cmd.set_owner`

#### Den Debug-Modus aktivieren

* Info: Modus, in dem jeder Aktivator dem Nutzer verschiedene Nachrichten ausgibt, damit man den Zustand des Aktivators und den Grund erkennt, warum er nicht funktioniert oder wie er ausgelöst wird.
* Befehl: **/ei debug**
* Berechtigung: `ei.cmd.debug`

#### Die Sets auflisten und anzeigen, was ein Spieler trägt <CustomTag type="premium" />

* Info: Listet die geladenen [Sets](/executableitems/configurations/sets-configuration) (`plugins/ExecutableItems/sets`) auf. Mit einem Spieler: die getragenen Teile und die aktive Stufe für jedes Set.
* Befehl: **/ei sets** **[player]**
* Berechtigung: `ei.cmd.sets`

#### Einen Aktivator auslösen (zum Testen eines Items)

* Info: Führt einen Aktivator eines ExecutableItems aus, das der Spieler bei sich trägt, ohne die Geste auszuführen (Klick, Treffer, Sprung...). Nützlich, um eine Config zu testen. Alles andere funktioniert wie gewohnt: detaillierte Slots, Bedingungen, Cooldowns, Usage und Befehle. Das Item wird im angegebenen Slot gesucht, sonst in der Haupthand, der Nebenhand, der Rüstung und dann im gesamten Inventar.
* Befehl: **/ei trigger \{player\} \{item id\} \{activator id\}** **[slot:N] [target:nearest|\{player\}|\{uuid\}] [block:x,y,z] [click:left|right] [input:JUMP_PRESS...]**
  * `target`: die Entität oder der Spieler bei Aktivatoren, die ein Ziel haben (Treffer, Klick auf Entität...). Standardmäßig das Ziel, das der Spieler ansieht.
  * `block`: der Block bei Aktivatoren, die einen Zielblock haben. Standardmäßig der Block, den der Spieler ansieht.
  * `click`: für Aktivatoren mit einem detaillierten Klick. Standardmäßig `right` (`left` für `PLAYER_LEFT_CLICK`).
  * `input`: erforderlich für `PLAYER_INPUT`.
* Tipp: Wenn nichts passiert, führe **/ei debug** aus, um zu sehen, welche Prüfung den Aktivator stoppt.
* Berechtigung: `ei.cmd.trigger`

#### Alle ExecutableItems die Standardattribute ihres Materials behalten lassen

* Info: Setzt [Keep default attributes](/executableitems/configurations/item-configuration/item-features#keep-default-attributes) bei **jedem** geladenen ExecutableItem (`keepDefaultAttributes: true`, `ignoreKeepDefaultAttributesFeature: false`) und speichert deren Dateien. Ab 1.21+ listet ExecutableItems nach jedem Laden in der Konsole die Items auf, die ohne diese Option den Schaden / die Rüstung ihres Materials verlieren. Mit `false` erhält jedes Item `keepDefaultAttributes: false`.
* Befehl: **/ei util-set-keepdefaultattributes-all-ei \{true or false\}**
* Beispiel: `/ei util-set-keepdefaultattributes-all-ei true`
* Berechtigung: `ei.cmd.util-set-keepdefaultattributes-all-ei`

### Give-Befehle

#### Give-Befehl

* Info: Befehl, um einem Spieler ein ExecutableItem im ersten verfügbaren Slot zu geben.
* Befehl: **/ei give \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \[giveOfflinePlayer]**
  * `player`: Name des Spielers, der das Ziel dieses Befehls ist
  * `id`: ID des ExecutableItems, das gegeben wird.
    * Optionale Werte: Um diese benutzerdefinierte Einstellung hinzuzufügen, dürfen im Format keine Leerzeichen vorkommen. 
      * `Variables`: Du kannst beim Geben des Items eine Variablen-Einstellung auswählen.
        * ✅`{Variables:{a:"1",b:"2",c:"3"}}` # Keine Leerzeichen verwendet
        * ❌`{Variables:{a : "1",b: "2",c :"3"}}` # Leerzeichen verwendet
      * `Usage:` Du kannst beim Geben des Items einen Wert für Usage auswählen.
        * ✅`{Usage:5}` # Keine Leerzeichen verwendet
        * ❌`{Usage : 5}` # Leerzeichen verwendet
      * `Durability`: Du kannst festlegen, wie viel Haltbarkeit das Item verliert, wenn es dem Nutzer gegeben wird.
        * ✅`{Durability:5}` # Keine Leerzeichen verwendet
        * ❌`{Durability : 5}` # Leerzeichen verwendet
  * `quantity`: Anzahl der Items, die gegeben werden
  * `giveOfflinePlayer`: Boolescher Wert, der festlegt, ob das Item einem Offline-Spieler gegeben wird oder nicht. Standardmäßig ist dieser Wert true.
* Beispiele: (In allen diesen Beispielen wird der Befehl innerhalb eines ExecutableItems ausgeführt, damit Platzhalter wie %player%, %var\_name% und %usage% aufgelöst werden)
  * `/ei give %player% Genesis_Crystal{Variables:{vibraniun:10,proton:30},Usage:10} 3` 
  * `/ei give %player% SurgeBlade{Variables:{charge:%var_charge%+1},Usage:%usage%-1} 1`
  * `/ei give SsomarPluginsPlayer BoneBlade 1`
  * `/ei give edp445 cupcake{Durability:12} 1`
* Berechtigung: `ei.cmd.give`

#### Give-All-Befehl

* Befehl: **/ei giveall \{id\} \{quantity\} \[world] \[giveOfflinePlayer]**
  * `id`: ID des ExecutableItems, das gegeben wird.
  * `quantity`: Anzahl der Items, die gegeben werden
  * `world`: Optionales Argument für die Welt, in der der Befehl ausgeführt wird. Dadurch erhalten Spieler, die sich nicht in dieser Welt befinden, das ExecutableItem nicht.
  * `giveOfflinePlayer`: Boolescher Wert, der festlegt, ob das Item einem Offline-Spieler gegeben wird oder nicht. Standardmäßig ist dieser Wert true.
* Berechtigung: `ei.cmd.giveall`

#### Ein EI in einen bestimmten Slot eines Spielers geben <CustomTag type="premium" />

* Befehl: **/ei giveslot \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \{slot\} \[override true or false]**
  * `player`: Name des Spielers, der das Ziel dieses Befehls ist
  * `id`: ID des ExecutableItems, das gegeben wird.
    * Optionale Werte: Um diese benutzerdefinierte Einstellung hinzuzufügen, dürfen im Format keine Leerzeichen vorkommen. 
      * `Variables`: Du kannst beim Geben des Items eine Variablen-Einstellung auswählen.
        * ✅\{Variables:\{a:"1",b:"2",c:"3"\\}\} # Keine Leerzeichen verwendet
        * ❌\{Variables:\{a : "1",b: "2",c :"3"\\}\} # Leerzeichen verwendet
      * `Usage`: Du kannst beim Geben des Items einen Wert für Usage auswählen.
        * ✅\{Usage:5\} # Keine Leerzeichen verwendet
        * ❌\{Usage : 5\} # Leerzeichen verwendet
  * `quantity`: Anzahl der Items, die gegeben werden
  * `slot`: Spieler-Slot, in den dieses Item gegeben wird.
  * `override`: Boolescher Wert, um den Slot zu überschreiben, falls sich dort bereits ein Item befindet. In diesem Fall wird es verschoben, und wenn das Inventar des Spielers voll ist, wird es auf den Boden fallen gelassen.
* Beispiele: 
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`test{Variables:{x:"Hey",world:"Island"},Usage:50} 1 0`**  
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`rum{Usage:69420,Variables:{tell_me:"why",aint_nothing:"BUT A HEARTBREAK"}} 1 %slot%`**
* Berechtigung: `ei.cmd.giveslot`

**Jedes EI eines bestimmten Ordners an einen Spieler geben**

* Info: Befehl, um einem Spieler einen Ordner des Plugins zu geben.
* Befehl: **/ei givefolder \{player\} \{folder\} \{quantity\}**
  * `player`: Name des Spielers, der das Ziel dieses Befehls ist
* Berechtigung: `ei.cmd.givefolder`

### Drop-Befehle

#### Ein EI an einem bestimmten Ort / einer bestimmten Position fallen lassen 

* Befehl: **/ei drop \{id\} \{quantity\} \{\[world] \[x] \[y] \[z]\}**
  * `id`: ID des ExecutableItems, das gegeben wird.
  * `quantity`: Anzahl der Items, die fallen gelassen werden. Standardmäßig 1.
  * location: Die gesamte Ortsangabe ist optional. Wenn du sie hinzufügen möchtest, musst du die folgenden Argumente ausfüllen:
    * `world`: Welt, in der das Item fallen gelassen wird.
    * `x`: X-Koordinate, an der das Item fallen gelassen wird.
    * `y`: Y-Koordinate, an der das Item fallen gelassen wird.
    * `z`: Z-Koordinate, an der das Item fallen gelassen wird.
* Beispiele:  (In allen diesen Beispielen wird der Befehl innerhalb eines ExecutableItems ausgeführt, damit Platzhalter wie %player%, %var\_name% und %usage% aufgelöst werden)
  * `/ei drop totemshatter 1 %world% %x% %y% %z%`
  * `ei drop nuclearWar{Usage:3,Variables:{niconico:"nii"}} 25 %block_world% %block_x% %block_y% %block_z%`
  * `ei drop cybert1_5{Variables:{eh:5},Usage:5} 1 world 535 74 1329`
* Berechtigung: `ei.cmd.drop`

### Modifikationsbefehle

#### Den Usage-Wert eines ExecutableItems ändern

* Befehl: 
  * Im Spiel: **/ei modification \{set or modification\} usage \{slot\} \{value\}**
  * In der Konsole: **/ei console-modification \{set or modification\} usage \{player\} \{slot\} \{value\}**
  * Parameter:
    * `set or modification`
      * set: Setzt den neuen \{value\} und ersetzt den alten
      * modification: Nützlich für Änderungen: erhöht oder verringert den ursprünglichen Wert um \{value\}
    * `player`: Name des Spielers, der das Ziel dieses Befehls ist
    * `slot`: Spieler-Slot, in den dieses Item gegeben wird.
      * Weitere Informationen zu Slots findest du hier: [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `value`: Wert, der für die Änderung verwendet wird.
* Berechtigung: `ei.cmd.modification`

#### Den Wert einer Variable eines ExecutableItems ändern

* Befehl: 
  * Im Spiel: **/ei modification \{set or modification\} variable \{slot\} \{variableName\} \{value\}**
  * In der Konsole: **/ei console-modification \{set or modification\} variable \{player\} \{slot\} \{variableName\} \{value\}**
  * Parameter:
    * `set or modification`
      * set: Setzt den neuen \{value\} und ersetzt den alten
      * modification: Nützlich für Änderungen: erhöht oder verringert den ursprünglichen Wert um \{value\}
    * `player`: Name des Spielers, der das Ziel dieses Befehls ist
    * `slot`: Spieler-Slot, in den dieses Item gegeben wird.
      * Weitere Informationen zu Slots findest du hier: [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `variableName`: Der Name der Variable, auf die du den typeOfModication mit dem gewählten Wert anwenden möchtest.
    * `value`: Wert, der für die Änderung verwendet wird.
* Berechtigung: `ei.cmd.modification`

#### Ein ExecutableItem auf dem Server suchen

* Info: Zeigt dir, wo sich die ExecutableItems mit der ID \{id\} auf deinem Server befinden.
* Befehl: **/ei search \{id\} \{searchMode\}**
  * `id`: ID des ExecutableItems, nach dem du suchst
  * `searchMode`: Art der Suche
    * players: Sucht das ExecutableItem in den Inventaren aller **online** befindlichen Spieler.
    * containers: Sucht das ExecutableItem in allen **geladenen** Containern.
    * all: Sucht mit beiden Methoden.
* Beispiel:
  * `/ei search EternalSword all`
* Berechtigung: `ei.cmd.search`

#### Den Dateipfad eines ExecutableItems abrufen

* Info: Dieser Befehl zeigt den absoluten Dateisystempfad zur Konfigurationsdatei eines bestimmten ExecutableItems an. Nützlich für Entwickler oder Server-Administratoren, die Item-Dateien direkt finden und bearbeiten möchten.
* Befehl: **/ei path \{id\}**
  * `id`: ID des ExecutableItems, dessen Pfad du abrufen möchtest
* Beispiel:
  * `/ei path ExcaliburSword`
  * Ausgabe: `[ExecutableItems] The path of ExcaliburSword is /path/to/plugins/ExecutableItems/Items/ExcaliburSword.yml.`
* Berechtigung: `ei.cmd.path`

#### Informationen zur Event-Optimierung prüfen

* Info: Dieser Befehl zeigt detaillierte Informationen zur Optimierung der Event-Handler von ExecutableItems und Leistungsstatistiken an. Er zeigt, auf welche Events gehört wird, und liefert Informationen zu Items mit Custom Recognition (was die Leistung beeinträchtigen kann). Die Ausgabe wird an die Server-Konsole gesendet.
* Befehl: **/ei checkevents**
* Die Ausgabe enthält:
  * Liste der optimierten Events und den Status ihrer Listener
  * Anzahl der ExecutableItems mit Custom Recognition
  * Warnungen zu Leistungsauswirkungen
  * Empfehlungen für bessere Leistung
* Berechtigung: `ei.cmd.checkevents`

:::info
Die Ausgabe dieses Befehls wird an die **Konsole** gesendet, nicht an den Spieler im Spiel. Sieh in deiner Server-Konsole nach, um die detaillierten Informationen zu sehen.
:::

:::tip
Items mit Custom Recognition können die Leistung beeinträchtigen. Der Befehl zeigt dir, wie viele Items diese Funktion verwenden. Wenn du Leistungsprobleme hast, solltest du die Anzahl der Items mit aktivierter Custom Recognition verringern.
:::

### Texturenpaket-Befehle

#### Das ExecutableItems-Texturenpaket aktualisieren

* Befehl: **/ei refresh-pack**
* Info: Aktualisiert und lädt das ExecutableItems-Texturenpaket für alle Spieler online neu. Nützlich nach Änderungen an eigenen Texturen.
* Berechtigung: `ei.cmd.refresh-pack`

#### Das Standard-Texturenpaket von ExecutableItems herunterladen

* Befehl: **/ei download-default-pack**
* Info: Lädt das Standard-Texturenpaket von ExecutableItems aus dem offiziellen Repository herunter und entpackt es automatisch. Ist `selfHostPack` in der config.yml aktiviert, wird das Pack automatisch registriert und auf deinem Server gehostet. Das ist nützlich für:
  * Die erstmalige Einrichtung des Texturenpakets
  * Das Wiederherstellen des Standard-Packs nach Änderungen
  * Das Aktualisieren auf die neueste Version des Standard-Packs
* Voraussetzungen:
  * `selfHostPack: true` muss in der config.yml gesetzt sein, damit das automatische Hosting funktioniert
  * Der Server muss eine Internetverbindung haben, um das Pack herunterzuladen
* Berechtigung: `ei.cmd.download-default-pack`

:::info
**Hosting-Optionen:**
- **Self-Hosting auf deinem Server**: Setze `selfHostPack: true` in der config.yml, das Pack wird direkt vom Plugin gehostet
- **Externes Hosting**: Wenn du das Pack selbst hosten möchtest (auf einer Website, einem CDN usw.), trage die Download-URL in `texturesPackUrl` in der config.yml ein
- **Kein Hosting**: Wenn keine der beiden Optionen aktiviert ist, wird das Pack lokal heruntergeladen und entpackt, aber nicht an die Spieler verteilt
:::

### Custom Triggers

* Info: ExecutableItems hat Befehle zum Ausführen von Custom Triggers. Wenn du wissen möchtest, was das ist und wie man sie verwendet, findest du die Infos hier: [Custom triggers](/tools-for-all-plugins-score/custom-triggers) 

### WorldGuard

* Du kannst WorldGuard-Flags verwenden, um alle EI-Aktivatoren zu aktivieren/deaktivieren
```
/rg flag <region> ei-activators deny # disables ALL EI activators in the region
/rg flag <region> ei-activators allow # re-enables them (this is the default)
```

* Die Fehlermeldung kann zum Beispiel in /ExecutableItems/locale/locale_EN.yml konfiguriert werden
```yml
disableRegion: '&8[&4Executable&7Items&8] &cYou cant use &e%item%&c in this region!'
```
