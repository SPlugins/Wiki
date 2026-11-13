---
description: >-
  Sammlung von Item-Ideen für ExecutableItems: Lösungen für Rüstungen, Regionen,
  Aktivatoren und mehr, mit Hinweisen, wie du sie umsetzt.
source_hash: 267b9196d0e24db3
translated_at: '2026-11-13T17:27:29.154Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Item-Ideen - Wie erstelle ich...?

## Was ist diese Seite?

* Diese Seite erklärt in allgemeinen Worten gängige Item-Ideen, bei denen Leute fragen, wie man sie umsetzt. Wenn du also etwas erstellen möchtest und nicht weißt, wie, wirf zuerst einen Blick hierher. Vielleicht steht deine Frage hier, oder eine ähnliche Methode, die du nachbauen kannst, wenn du dir ansiehst, wie das Plugin funktioniert ^^

:::info
Diese Seite verrät dir, wie man etwas umsetzt, oder gibt dir eine Idee. Wenn du nicht weißt, wie eine Bedingung, ein Befehl, ein Platzhalter usw. funktioniert, ist das hier nicht der richtige Ort zum Lernen. Du kannst das Wiki durchstöbern und dir die jeweiligen Abschnitte ansehen. Hier bekommst du nur die Idee, kein Tutorial.
:::

### Ich möchte, dass eine Fähigkeit meines ExecutableItem in einer bestimmten Region nicht funktioniert

* Gehe im Aktivator, der deine "Fähigkeit" enthält, zu **playerConditions** und suche nach "**ifNotInRegion**". Verwende es nach Belieben, damit kannst du Regionen auf die **Blacklist** setzen.

### Ich möchte, dass eine Fähigkeit meines ExecutableItem nur in einer bestimmten Region funktioniert

* Gehe im Aktivator, der deine "Fähigkeit" enthält, zu **playerConditions** und suche nach "**ifInRegion**". Verwende es nach Belieben, damit kannst du Regionen auf die **Whitelist** setzen.

### Ich möchte, dass mein Item vor der Verwendung eine Bestätigung verlangt

* Verwende einfach die Custom-EI-Bedingung im Aktivator und aktiviere "ifNeedPlayerConfirmation"

### Rüstung, die den Gegner in Brand setzt, der dich schlägt

* Erstelle einen Aktivator **PLAYER\_RECEIVE\_HIT\_BY\_PLAYER** und verwende unter **targetCommands** den Befehl BURN \<seconds>
* Wenn du dasselbe für Entitäten möchtest, gehe genauso vor, aber mit **PLAYER\_RECEIVE\_HIT\_BY\_ENTITY**

:::info
Vergiss nicht, die richtigen **detailedSlots** zu setzen
:::

### Item, das nur im eigenen Claim funktioniert

* Füge im gewünschten Aktivator die **playerCondition ifPlayerMustBeOnHisClaim** hinzu

### Item, das nur im eigenen Claim und nicht in nicht beanspruchten Bereichen funktioniert

* Erstelle im gewünschten Aktivator eine Platzhalter-Bedingung mit diesem Format
  * **PLAYER\_STRING**
  * **NOT EQUALS**
  * part1: %griefprevention\_currentclaim\_ownername%
  * part2: Unclaimed

### Wie erstelle ich ein Item, das andere Spieler zu mir zieht?

* Verwende im gewünschten Aktivator unter commands den Befehl AROUND in Kombination mit CUSTOMDASH1 und den Spieler-Platzhaltern für die Position. Sobald du also einen Rechtsklick machst, lässt der Befehl CUSTOMDASH1 die Spieler in deiner Nähe (AROUND) zu DEINEN KOORDINATEN dashen, sie werden also im Grunde zu dir gezogen.

### Wie erstelle ich einen Treecapitator?

* Aktivator **PLAYER\_BREAK\_BLOCK** und verwende unter **blockCommands** den Befehl **VEINBREAKER**

### Ich möchte das Tragen des Spielerkopfs deaktivieren

* Erstelle einen Aktivator **PLAYER\_EQUIP\_THE\_EI** und aktiviere **cancelEvent**

### Namensschild beim Anklicken deaktivieren

* Erstelle einen Aktivator PLAYER\_CLICK\_ON\_ENTITY -> detailedClick right und aktiviere cancel event

### Ich möchte eine Rüstung erstellen, die dir mehr gibt..

* Wenn du **Herzcontainer**, **Geschwindigkeit**, **Rückstoßresistenz**, **Rüstung** usw. zu deiner Rüstung, deinem Schwert, deiner Spitzhacke oder was auch immer hinzufügen möchtest, musst du mit **Attributen** arbeiten.

### Wie führe ich einen Befehl aus, sobald ich einen Spieler anklicke

* Verwende einfach den Aktivator PLAYER\_CLICK\_ON\_PLAYER und füge unter commands hinzu, was du möchtest

:::info
Dasselbe gilt, wenn du den Befehl beim SCHLAGEN ausführen möchtest, nur mit dem Aktivator PLAYER\_HIT\_PLAYER
:::

### Item, das Rückstoß deaktiviert

* Am besten erreichst du das mit Attributen und KNOCKBACK RESISTANCE. Wenn es aber überall in deinem Inventar funktionieren soll, erstelle einen Aktivator PLAYER\_RECEIVE\_HIT\_GLOBAL und teleportiere den Spieler zu sich selbst, zum Beispiel so:
  * execute at %player% run tp %player% \~ \~ \~

### Ich möchte ein Item, das allen Spielern um mich herum Langsamkeit gibt

* Verwende den Befehl AROUND und vergib den Effekt mit den Platzhaltern von around. Weitere Infos findest du im Wiki beim Befehl AROUND.

### Farbstoff auf Schildern und Wolfshalsbändern blockieren

* Für das SCHILD:
  * Aktivator: PLAYER\_RIGHT\_CLICK
  * ONLY\_BLOCK
  * detailedBlocks: \<Here add the signs you want to block>
  * Und aktiviere cancel event
* Für die Wolfshalsbänder:
  * Aktivator: PLAYER\_CLICK\_ON\_ENTITY
  * detailedClick: RIGHT
  * detailedEntities: WOLF
  * Und aktiviere cancel event

### Einen Wolf erstellen, der "x" Sekunden bleibt und dann verschwindet

Wenn du zum Beispiel einen Haustier-Wolf erstellen möchtest, der "x" Sekunden lang lebt, füge Folgendes hinzu:

```
playerCommands:
- execute at %player% run summon wolf ~ ~ ~ {Owner: %player%,Tags:["%player%wolf"]}
- DELAY 10
- execute run kill @e[tag=%player%wolf]
just modify the delay depending the time you want the wolf to be alive
```

### Rüstung, die Lava- und Feuerschaden deaktiviert

* Erstelle einen Aktivator PLAYER\_RECEIVE\_HIT\_GLOBAL, füge unter detailedDamage LAVA, FIRE\_TICK und FIRE hinzu und aktiviere dann cancelEvent in diesem Aktivator.
*   Achte darauf, den richtigen detailedSlot des Rüstungsteils auszuwählen, das du verwendest

    Wenn du die Feueranimation deaktivieren möchtest, kommst du dem am nächsten, indem du einen Loop-Aktivator mit dem Befehl REMOVEBURN erstellst.

### Rüstung, die Atmen unter Wasser ermöglicht

* Erstelle einen LOOP-Aktivator, wähle den richtigen detailedSlot und gib dem Spieler den Effekt water\_breathing.

### Verhindern, dass gefärbte Lederrüstung im Kessel gewaschen wird

* Erstelle einfach einen Aktivator RIGHT\_CLICK, dann typeTarget: ONLY\_BLOCK\_CLICK, detailedBlocks: CAULDRON und aktiviere cancel event.

### Item, das ein GUI öffnet

* GUI-Plugins haben normalerweise eine Stelle, an der man einen Spieler angeben kann. Der Befehl würde zum Beispiel /opengui \<player> lauten, also musst du in deinem Item /opengui %player% eintragen
  * Wenn der Befehl anders lautet, ändere ihn einfach, zum Beispiel /enchanttable %player%
* Wenn dein Plugin das nicht bietet, verwende statt einer Stelle für den Spieler SUDOOP, zum Beispiel:
  * SUDOOP opengui
  * SUDOOP enchanttable

### Verhindern, dass ein Dreizack geworfen wird

* Füge einen Aktivator PLAYER\_LAUNCH\_PROJECTILE hinzu und setze cancelEvent auf true

### Ich möchte Fallschaden für meine Rüstung deaktivieren

* Verwende den Aktivator PLAYER\_RECEIVE\_HIT\_GLOBAL und gib unter detailedDamage FALL an, dann aktiviere cancel event

### Wasser aufnehmen mit der Flasche deaktivieren

* PLAYER\_RIGHT\_CLICK und aktiviere cancel event

### Prüfen, ob ein Spieler einen Spieler angelt

* Verwende die Aktivatoren PROJECTILE\_HIT\_PLAYER, PLAYER\_FISH\_PLAYER, einen LOOP-Aktivator und eine Variable. (Dazu einige Aktivatoren, um Bugs zu vermeiden)
  * Sobald die ANGEL den Spieler trifft, wird PROJECTILE\_HIT\_PLAYER ausgeführt, setze also deine Variable auf "%target%"
  * Der Loop-Aktivator funktioniert nur, wenn die Variable ungleich "NO" ist, und du kannst die Variable nutzen, um den geangelten Spieler anzuvisieren.
  * Und wenn der Spieler den Zielspieler ANGELT, setze die Variable auf "NO", dann wird sie zurückgesetzt und der Aktivator hört auf zu arbeiten
  * Die Aktivatoren zur Bug-Vermeidung sind PLAYER\_DROP\_THE\_EI und PLAYER\_DESELECT\_THE\_EI. Setze die Variable dort zurück ODER brich das Event ab.

### Blitz am Cursor beschwören

* Erstelle zuerst einen Aktivator PLAYER\_ALL\_CLICK oder PLAYER\_RIGHT\_CLICK oder PLAYER\_LEFT\_CLICK
* Verwende dann unter commands den Custom-Befehl [SPAWNENTITYONCURSOR](/tools-for-all-plugins/custom-commands/player-and-target-commands#spawnentityoncursor) [LIGHTNING](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html#LIGHTNING) 1
  * Standardmäßig richtet er keinen Schaden an, daher kannst du zusätzlich den Custom-Befehl `DAMAGE <number>` hinzufügen

### Wie erhöhe ich das maximale Leben jedes Mal um "x", wenn der Aktivator ausgelöst wird

* Um dein maximales Leben zu erhöhen, brauchst du PlaceholderAPI und die Player-Expansion, und der Befehl, den du verwendest, lautet:
  * execute run attribute %player% minecraft\:generic.max\_health base set %player\_max\_health%+2

### Wie erhalte ich pro Schlag Leben zurück

* Verwende bei einem Aktivator, der mit Schlägen zu tun hat, wie PLAYER\_HIT\_PLAYER und PLAYER\_HIT\_ENTITY, den Befehl REGAIN\_HEALTH unter playerCommands. Weitere Infos findest du zu diesem Befehl im Abschnitt Commands.
* Wenn du genau den Schaden zurückerhalten möchtest, den du verursacht hast, verwende den EI-Platzhalter **%last\_damage**_**\_**_**dealt%**

### Bogen, der explodiert, wenn das Projektil den Block trifft

* Erstelle einen Aktivator PROJECTILE\_HIT\_BLOCK für dein Item und unter commands kannst du Folgendes verwenden
  * EXPLODE blockCommand
  * execute at %player% run summon tnt %block\_x\_int% %block\_y\_int% %block\_z\_int%
    * Nach dieser Zeile brauchst du ein execute run kill %projectile\_uuid%
  * oder dasselbe wie zuvor, aber mit dem Beschwören eines Creepers

### Ich möchte das Spannen des Bogens oder der Armbrust deaktivieren

* Das ist mit ExecutableItems noch nicht möglich. EI kann nur verhindern, dass der Bogen oder die Armbrust das Projektil abschießt, aber das Spannen? Nein.

### Wie erstelle ich eine Rüstung, die das Einfrieren des Spielers deaktiviert (1.18)

* Du kannst den Befehl FREEZE in einem Loop ausführen, so wie hier:

```
    playerCommands:
    - 'LOOP START: 20'
    - GLACIAL_FREEZE 1
    - DELAYTICK 1
    - LOOP END
```

### Ich möchte, dass der Aktivator nur funktioniert, wenn der Spieler einen bestimmten Wert in einem Scoreboard hat

Verwende einfach die Scoreboard-Expansion von PlaceholderAPI und nutze deren Platzhalter im Abschnitt placeholderCondition in deinem Aktivator ^^
