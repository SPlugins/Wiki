---
description: >-
  Alle Block-Befehle für ExecutableItems und ExecutableBlocks im Überblick:
  Einstellungen, Beispiele und Hinweise von AROUND bis VEIN_BREAKER.
source_hash: b9677d85e164ca24
translated_at: '2026-11-13T17:30:04.264Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Block-Befehle

:::tip
„Multi-World“-Kompatibilität für die Vanilla-Befehle.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Beispiel: Du möchtest einen Zombie in der Welt SsomarWorld spawnen:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Beispiel mit einem Platzhalter:

`execute in <<%block_world%>> run summon zombie 100 50 100`
:::

:::info
`In AROUND and MOB_AROUND commands, the true/false argument are not to be included in the command as they serve no purpose.`
:::

:::info
Aktiviere **HIDE USAGE**, wenn du eine große Zahl in **MINEINCUBE** verwendest, da dies den Lag verkürzen kann, der oft auftritt, wenn du zum Beispiel `MINEINCUBE 8` verwendest
:::

## Benutzerdefinierte Befehle

_Alphabetisch sortiert_

### &lt;+&gt; (Around Command Connector)

* Info: Ermöglicht es dir, mehr Befehle in einer Befehlszeile hinzuzufügen. Funktioniert nur richtig mit `AROUND` und `MOB_AROUND`.
* Beispiel: 

```text
- AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SENDMESSAGE &You got smited!
```

```text
- MOB_AROUND 7 STUN_ENABLE <+> DELAY 5 <+> STUN_DISABLE
```

### AROUND

* Info: Zielt auf Spieler in einem bestimmten Radius und lässt sie Befehle ausführen
* Befehlseinstellungen
    * `{distance}`: Bis zu welchem Radius der Befehl Spieler auswählt
    * `{affectThePlayerThatActivatesTheActivator}`: true/false. Wenn true, wird der Anwender des Befehls nicht betroffen.
      * Beispielsituation: Wenn du den Aktivator eines ExecutableItems ausführst und dieser Aktivator Block-Befehle unterstützt,
      wird die Person ignoriert, die den Aktivator ausgelöst hat. Ist diese Option jedoch false, wirst auch du betroffen.
    * `{throughBlocks}`: Legt fest, ob Mobs hinter Blöcken betroffen sind oder nicht
    * `{limit}`: Die Anzahl der Ziele, die betroffen sein können
    * `{sort}`: Nützlich für die Limit-Option.
    * NEAREST : Wählt die Entitäten aus, die dem Ursprung am nächsten sind.
    * RANDOM : Wählt zufällig eine beliebige Entität im Bereich des Befehls aus.
    * `{regionCheck}`: true/false. Wenn true, prüft der AROUND-Befehl, ob sich das Ziel entweder in der Wildnis oder im Claim des Anwenders befindet (im Kontext des Plugins GriefPrevention) (wird bald aktualisiert, damit auch andere Claim-Plugins geprüft werden)
    * `{command}`: Der Befehl, den die ausgewählten Spieler ausführen
* Beispiel:

```
- AROUND 20 execute at %around_target% run summon lightning_bolt
```

* Dies lässt bei Spielern in einem Radius von 20 Blöcken um den angeklickten Block einen Blitz einschlagen.

:::info
**Anzahl der Ziele:** `%around_target_count%` gibt die Anzahl der vom Befehl ausgewählten Spieler an. Sie ist für jedes Ziel gleich und zählt die Ziele, die nach `distance`, `affectThePlayerThatActivatesTheActivator`, `throughBlocks`, `regionCheck` und `limit` übrig bleiben. Die bei jedem Ziel geprüften `CONDITIONS(...)` werden nicht berücksichtigt. Sie akzeptiert die Kurzschreibweise `+N` / `-N`: `%around_target_count%-1`.

Beispiel: `AROUND 10 SEND_MESSAGE &e%around_target_count% players are around the block`
:::

#### Du kannst dem AROUND-Befehl Bedingungen hinzufügen

* Die Bedingung sieht so aus: AROUND \<distance> CONDITIONS(\<conditions>) \<command>
* Bedingungen funktionieren mit Platzhaltern, diese müssen aber als %::\_::% statt %\_% geschrieben werden
  * Zum Beispiel %::player\_health::%
* Um MEHR als 1 Bedingung hinzuzufügen, verwende „&&“ zwischen den Bedingungen
* Beispiel:

```
- AROUND 10 CONDITIONS(%::player_health::%>10&&%::player_name::%=2Ssomar) SENDMESSAGE &eclick
```

:::info
Beachte, dass der CONDITIONS()-Teil die darin enthaltenen Platzhalter mit dem Spieler auswertet, der vom AROUND-Befehl ausgewählt wurde. In den obigen Platzhaltern wird also tatsächlich geprüft, ob die Gesundheit des Ziels größer als 10 ist und ob der vom AROUND-Befehl ausgewählte Spieler „2Ssomar“ heißt
:::

### APPLY\_BONEMEAL

* Info: Wendet denselben Effekt an, der auftritt, wenn ein Spieler Knochenmehl auf einen Block (Nutzpflanze) anwendet
* Keine Befehlseinstellung
* Beispiel:

```yaml
- APPLY_BONEMEAL
```

### BREAK

* Info: Zerstört den Zielblock
* Keine Befehlseinstellung
* Beispiel:

```
 - BREAK
```

### CONTENT\_ADD

* Info: Fügt ein Item zu einem Container hinzu
* Befehlseinstellungen
  * \{Item\}: Hinzuzufügendes Item
  * \[Amount]: Hinzuzufügende Menge (Standard ist 1)
* Beispiel:

```
- CONTENT_ADD STONE 1
- CONTENT_ADD EI:Myitem 1
- CONTENT_ADD EI:test{Usage:1,Variables:{var1:"My text",var2:2}} 1
```

### CONTENT\_CLEAR

* Info: Leert einen Container
* Keine Befehlseinstellung
* Beispiel:

```
- CONTENT_CLEAR
```

### CONTENT\_REMOVE

* Info: Entfernt ein Item aus einem Container
* Befehlseinstellungen
  * \{Item\}: Zu entfernendes Item
  * \[Amount]: Zu entfernende Menge (Standard ist 1)
* Beispiel:

```
- CONTENT_REMOVE STONE 1
```

:::info
Es entfernt keine ExecutableItems, wenn das Material übereinstimmt. Die einzige Möglichkeit ist die Angabe mit EXECUTABLEITEMS:`{id}`
:::

### CONSOLEMESSAGE

* Info: Sendet eine Nachricht an die Konsole
* Befehlseinstellung
  * `{text}`: Text, der an die Konsole gesendet wird
* Beispiel:

```yaml
- CONSOLEMESSAGE This is a debug message
```

### CHANGE\_BLOCK\_TYPE

* Info: Ändert den Blocktyp des vom Aktivator ausgewählten Blocks
* Befehlseinstellung
* Beispiel:

```
- CHANGE_BLOCK_TYPE STONE
```

:::info
Funktioniert mit ItemsAdder
:::

```
- CHANGE_BLOCK_TYPE ITEMSADDER:MyIA
```

### CROPS\_GROWTH\_BOOST

* Info: Beschleunigt das Wachstum der Nutzpflanzen um den Block
* Befehl: CROPS\_GROWTH\_BOOST \{radius\} \{delay between two growths in ticks\} \{total duration in ticks\} \{chance 0-100\}
* Beispiel:

```yaml
- CROPS_GROWTH_BOOST 5 10 100 50
```

### DROPEXECUTABLEITEM

* Info: Lässt ein Executable Item an der Position des Blocks fallen
* Befehlseinstellungen
  * `{id}`: Item-ID des ExecutableItem
  * `{quantity}`: Die Anzahl des Executable Items, die fallen gelassen wird
  * `[owner]`: (Optional) Der Besitzer des fallen gelassenen Items (Spielername oder UUID)
  * `[itemdata]`: (Optional) Item-Daten-Einstellungen, die Folgendes enthalten:
    * `Usage`: Legt den Nutzungswert fest
    * `Variables`: Legt benutzerdefinierte Variablen fest (Format: `{key:value}`)
    * `Durability`: Legt den Haltbarkeitswert fest
* Beispiel:

```
- DROPEXECUTABLEITEM epicsnowball 1
- DROPEXECUTABLEITEM id:epicsnowball amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Info: Lässt einen Executable Block an der Position des Blocks fallen
* Befehlseinstellungen
  * `{id}`: Item-ID des ExecutableBlock
  * `{quantity}`: Die Anzahl des Executable Blocks, die fallen gelassen wird
* Beispiel:

```
- DROPEXECUTABLEBLOCK House 1
```

### DRAIN IN CUBE

* Info: Entleert in einem Würfel mit dem Radius „r“ die Quellblöcke von Lava und/oder Wasser
* Befehlseinstellungen
  * `{radius}`: Der Radius in Blöcken (9 ist das Limit), du kannst das Limit umgehen, indem du vor deinem Radius ein * hinzufügst (auf eigene Gefahr).
  * `{drainType}`: LAVA oder WATER (nicht nötig, wenn du beides möchtest)
  * `[waterlogged]`: (Optional) (Standard = false) Wenn true und das Wasser entleert wird (`WATER` oder kein `{drainType}`), trocknet es auch die wassergefüllten Blöcke des Würfels (Stufen, Treppen, Zäune...) und entfernt die Blöcke `KELP`, `KELP_PLANT`, `SEAGRASS`, `TALL_SEAGRASS` und `BUBBLE_COLUMN`, ohne etwas fallen zu lassen, so wie es ein Schwamm tut. Nur für Server ab 1.13.
* Beispiel:

```
DRAININCUBE 4 WATER
DRAININCUBE *12 WATER
DRAININCUBE 4 WATER waterlogged:true
```

:::info
Ohne `waterlogged:true` behalten die wassergefüllten Blöcke ihr Wasser, und es kann zurück in den entleerten Bereich fließen.
:::

### DROPITEM

* Info: Lässt ein Item an der Position des Blocks fallen
* Befehlseinstellungen
  * `{material}`: Der Item-Typ.
    
<LinkPreview
  url="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"
  title="Material"
/>
  
* `{quantity}`: Die Anzahl des Items, die fallen gelassen wird
* Beispiel:

```
- DROPITEM BEDROCK 1
```

### EXPLODE

* Information: Zerstört den anvisierten Block und erzeugt an dieser Stelle ein gezündetes TNT
* Keine Befehlseinstellung
* Beispiel:

```
- EXPLODE
```

### FARMINCUBE

* Information: Zerstört alle Nutzpflanzen in einem bestimmten Radius
* Befehlseinstellungen
  * `{radius}`: Radius des Bereichs der Nutzpflanzen, die du zerstören möchtest. **(DAS LIMIT IST 9)**
  * `{drop}`: (Standard = true) Ob der Block Beute fallen lässt oder nicht
  * `{onlyMaxAge}`: (Standard = true) Es werden nur Nutzpflanzen mit maximalem Alter zerstört
  * `{replant}`: (Standard = false) Ob die Nutzpflanze neu gepflanzt wird oder nicht
  * `{event}`: (Standard = false, true mit `runActivatorOnBlocks:true`) Ob die Nutzpflanze das Block-Break-Event erzeugt oder nicht.
  * `[runActivatorOnBlocks]`: (Optional) (Standard = false) Nur für ExecutableItems. Wenn true, führen die vom Befehl zerstörten Nutzpflanzen ebenfalls den Aktivator aus, der ihn gestartet hat, siehe [runActivatorOnBlocks](#runactivatoronblocks). Er kann an beliebiger Stelle im Befehl stehen und schaltet `{event}` ein, außer `{event}` ist auf false gesetzt.
* Beispiel:

```
- FARMINCUBE 9 true true true false
- FARMINCUBE 4 true true true runActivatorOnBlocks:true
```

### FERTILIZEINCUBE

* Info: Düngt Nutzpflanzen in der Nähe um 1 Wachstumsstufe. Das ist, als würdest du Knochenmehl anwenden, nur dass die Pflanze zu 100 % wächst.
* Befehlseinstellung
  * `{radius}`: Radius des Bereichs der Nutzpflanzen, die du düngen möchtest **(DAS LIMIT IST 9)**
* Beispiel:

```
- FERTILIZEINCUBE 9
```

### INLINE\_MINEINCUBE

* Info: Zerstört Blöcke in einem Radius in Rechteckform. Jeder von diesem Befehl zerstörte Block zählt als Block-Break-Event eines Spielers.
* Befehlseinstellungen
  * `{radius}`: Radius, wie groß der Würfelradius sein wird
  * `{depth}`: Wie tief das Rechteck sein wird.
  * `{drop}`: Ob der Block Beute fallen lässt oder nicht
  * `{createBBEvent}`: Ob das Plugin für jeden vom MINEINCUBE zerstörten Block ein blockBreakEvent erzeugt (Standard true)
  * `[direction]`: (Optional) (Standard = die Blickrichtung des Spielers) Wenn du eine Richtung erzwingen möchtest. 
    * Optionen:
      * `north/n/-z` : Norden
      * `south/s/+z` : Süden
      * `east/e/+x` : Osten
      * `west/w/-x` : Westen
      * `up` : Oben
      * `down` : Unten
      * `auto` : Verwendet die Logik von %player_direction_xz% der Player Expansion von PlaceholderAPI, um die `N/W/S/E`-Richtungen zu bestimmen. Für die Up/Down-Logik gilt: Richtung `UP`, wenn der Pitch `<=` -45 ist; Richtung `DOWN`, wenn der Pitch `>=` 45 ist. 
  * `[smelt]`: (Optional) (Standard = false) Verwendet die Logik des SMELT-Befehls. Ist der Block schmelzbar, lässt er stattdessen die geschmolzene Version fallen. Andernfalls lässt er den zerstörten Block normal fallen.
* Beispiel:

```
- INLINE_MINEINCUBE 1 4 true true
- INLINE_MINEINCUIBE radius:2 depth:4 drop:true createBBEvent:true direction:auto smelt:true
```

:::info
Er unterstützt %player\_direction\_xz% der PlaceholderAPI-Player-Expansion\
Beispiel: INLINE\_MINEINCUBE 1 1 true true %player\_direction\_xz%
:::

### LAUNCH

* Info: Lässt den Zielblock Projektile abfeuern
* Befehlseinstellungen
  * `{projectile}`: Der Projektiltyp
  * `{speed}`: Die Projektilgeschwindigkeit
  * `{despawnDelay}`: Die Despawn-Verzögerung in Sekunden (Standard 10)
* Beispiel:

```
- LAUNCH ARROW 2 5
```

:::info
Der Block muss eine Ausrichtung (directional) haben, damit er das Projektil richtig abfeuern kann (LAUNCH).

Beispiel: AmethystCluster, Barrel, Bed, Beehive, Bell, BigDripleaf, CalibratedSculkSensor, Campfire, Chest, ChiseledBookshelf, Cocoa, CommandBlock, Comparator, CoralWallFan, DecoratedPot, Dispenser, Door, Dripleaf, EnderChest, EndPortalFrame, Furnace, Gate, Grindstone, Hopper, Ladder, Lectern, LightningRod, Observer, PinkPetals, Piston, PistonHead, RedstoneWallTorch, Repeater, SmallDripleaf, Stairs, Switch, TechnicalPiston, TrapDoor, TripwireHook, Vault, WallHangingSign, WallSign, WallSkull
:::

### MINEINCUBE

* Info: Zerstört Blöcke in einem Radius in Quaderform. Jeder von diesem Befehl zerstörte Block zählt als Block-Break-Event eines Spielers.
* Befehlseinstellungen
  * `{radius}`: Radius des Blockwürfels, den du zerstören möchtest **(DAS LIMIT IST 9)**
  * `{droploot}`: Ob der Block Beute fallen lässt oder nicht
  * `{createEvent}`: Ob das Plugin für jeden vom MINEINCUBE zerstörten Block ein blockBreakEvent erzeugt (Standard true)
  * `{offsetBreak}`: Ob der Blockbereich ab dem zerstörten Block zu brechen beginnt oder vom „Zentrum“, damit der gewählte „Radius“ wirklich funktioniert. (Standard false)
  * `[smelt]`: (Optional) (Standard = false) Verwendet die Logik des SMELT-Befehls. Ist der Block schmelzbar, lässt er stattdessen die geschmolzene Version fallen. Andernfalls lässt er den zerstörten Block normal fallen.
  * `[runActivatorOnBlocks]`: (Optional) (Standard = false) Nur für ExecutableItems. Wenn true, führen die vom Befehl zerstörten Blöcke ebenfalls den Aktivator aus, der ihn gestartet hat, siehe [runActivatorOnBlocks](#runactivatoronblocks). Lass `{createEvent}` auf true.
* Beispiel:

```
- MINEINCUBE 4 true false
- MINEINCUBE radius:3 droploot:true createEvent:true offsetBreak:false smelt:false
- MINEINCUBE radius:1 droploot:true createEvent:true runActivatorOnBlocks:true
```

### MINEINSPHERE

* Info: Zerstört Blöcke in einem Radius in Kugelform. Jeder von diesem Befehl zerstörte Block zählt als Block-Break-Event eines Spielers.
* Befehlseinstellungen
  * `{radius}`: Radius der Kugel
  * `{drop}`: Ob der Block Beute fallen lässt oder nicht
  * `{create blockBreakEvent}`: Ob das Plugin für jeden vom Befehl zerstörten Block ein blockBreakEvent erzeugt
  * `[smelt]`: (Optional) (Standard = false) Verwendet die Logik des SMELT-Befehls. Ist der Block schmelzbar, lässt er stattdessen die geschmolzene Version fallen. Andernfalls lässt er den zerstörten Block normal fallen.
* Beispiel:

```
- MINEINSPHERE 4 true false
```

### MOB\_AROUND

* Info: Zielt auf Entitäten in einem bestimmten Radius und lässt sie Befehle ausführen
* Befehlseinstellungen
  * `{distance}`: Bis zu welchem Radius der Befehl Entitäten auswählt
  * `{displayMsgIfNoEntity}`: (true oder false) Um den Benutzer des Items zu benachrichtigen, wenn es keine Mobs anvisieren konnte.
    * **Auf false setzen, um die Nachricht auszublenden**
  * `{throughBlocks}`: Legt fest, ob Mobs hinter Blöcken betroffen sind oder nicht
  * `{safeDistance}`: Ist die Distanz zwischen dem Ziel und dem Auslöser kleiner oder gleich dem Wert von safeDistance, wird das Ziel nicht betroffen.
  * `{offsetYaw}`: Die Yaw-Richtung, in die dein Offset zeigen soll (unabhängig vom Yaw-Wert des Ursprungs)
  * `{offsetPitch}`: Die Pitch-Richtung, in die dein Offset zeigen soll (unabhängig vom Yaw-Wert des Ursprungs)
  * `{offsetDistance}`: Nach der Berechnung von offsetYaw und offsetPitch verschiebt dieser Wert die Position/den Mittelpunkt des AROUND-Befehls von der xyz-Position des Ursprungs.
  * `{limit}`: Die Anzahl der Ziele, die betroffen sein können
  * `{sort}`: Nützlich für die Limit-Option.
    * NEAREST : Wählt die Entitäten aus, die dem Ursprung am nächsten sind.
    * RANDOM : Wählt zufällig eine beliebige Entität im Bereich des Befehls aus.
  * `{regionCheck}`: true/false. Wenn true, prüft der AROUND-Befehl, ob sich das Ziel entweder in der Wildnis oder im Claim des Anwenders befindet (im Kontext des Plugins GriefPrevention) (wird bald aktualisiert, damit auch andere Claim-Plugins geprüft werden)
  * `{nonliving}`: true/false. Wenn true, werden auch andere Entitäten wie Pfeile und Rüstungsständer anvisiert. Fehler, die beim Ausführen von Entity-Befehlen mit aktiviertem Argument auftreten, werden aufgrund von Scope Creep höchstwahrscheinlich ignoriert.
  * Du kannst Entitäten auf die BLACKLIST oder WHITELIST setzen, indem du eine dieser Angaben an beliebiger Stelle im Befehl hinzufügst:
    * BLACKLIST(ZOMBIE,ARMOR\_STAND)
    * WHITELIST(CHICKEN)
* Beispiel:

```
- MOB_AROUND 3 false BURN 10
- MOB_AROUND 5 execute at %around_target_uuid% run summon lightning_bolt
- MOB_AROUND 5 BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
- MOB_AROUND 5 effect give %around_target_uuid% poison 10 10
```

Um Entity-NBT im WHITELIST/BLACKLIST-Feld zu verwenden, musst du das Plugin NBT API installieren

<LinkPreview
  url="https://www.spigotmc.org/resources/nbt-api.7939/"
  title="NBTAPI Plugin"
/>

Es unterstützt NBT-Tags, sodass du zum Beispiel etwas wie Folgendes hinzufügen kannst: `ZOMBIE{IsBaby:1}`

<LinkPreview
  url="https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities"
  title="Entities tags"
/>

```
- MOB_AROUND 7 BLACKLIST(ZOMBIE{CustomName:"Test Test"},ZOMBIE{CustomName:"Miyamoto"}) false BURN 3
- MOB_AROUND 5 WHITELIST(ZOMBIE{IsBaby:1}) DAMAGE 20
- MOB_AROUND 9 WHITELIST(WOLF{Owner:"%player%"}) HEAL 5
- MOB_AROUND 9 WHITELIST(WOLF{Owner:%player_uuid%}) HEAL 5
```

### MOVE

* Info: Bewegt alle Entitäten über dem Block in Richtung des Blocks (zum besseren Verständnis: Das funktioniert wie ein Förderband)
* Keine Befehlseinstellung
* Beispiel:

```
- MOVE
```

:::info
**Dieser Befehl funktioniert nur bei Blöcken mit Ausrichtung (directional).**
:::

### MOB\_NEAREST

* Info: Zielt auf den Mob, der dem Spieler/Ziel am nächsten ist.
* Befehlseinstellungen
    * `{max accepted distance}`: Maximal akzeptierte Distanz, in der sich die „Entität“ befinden darf.
    * `{command(s)}`: Der Befehl, der ausgeführt wird
* Beispiel:

Fügt dem nächsten Spieler Schaden zu

```
- MOB_NEAREST 10 DAMAGE 5
```

### NEAREST

* Info: Zielt auf den Spieler, der dem Spieler/Ziel am nächsten ist.
* Befehlseinstellungen
    * `{max accepted distance}`: Maximal akzeptierte Distanz, in der sich das „Ziel“ befinden darf.
    * `{command}`: Der Befehl, der ausgeführt wird
* Beispiel:

Fügt dem nächsten Spieler Schaden zu

```
- NEAREST 8 DAMAGE 5
```

### OPENDOOR

* Öffnet oder schließt einen Block, der sich öffnen lässt.
* Keine Befehlseinstellung
* Beispiel:

```
- OPENDOOR
```

### OPMESSAGE

* Info: Sendet eine Nachricht an die online befindlichen OP-Spieler und die Konsole
* Befehlseinstellung
  * `{text}`: Der zu sendende Text
* Beispiel:

```
- OPMESSAGE This is my debug message
```

### PARTICLE

* Info: Lässt Partikel an der Position des Blocks erscheinen
* Befehlseinstellungen
  * `{type}`: Der Partikeltyp.

<LinkPreview
  url="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html"
  title="Particles"
/>

* `{quantity}`: Die Anzahl der Partikel, die erscheinen
* `{offset}`: Der Radius des Bereichs, in dem Partikel an der Position des Blocks erscheinen können
* `{speed}`: Wie schnell oder wie groß die Partikel sein werden
* Beispiel:

```
- PARTICLE COMPOSTER 10 0.1 0.5
```

### PLACELIQUID
* Info: Platziert Flüssigkeit an einer Position. Befindet sich dort ein Kessel, wird er gefüllt. Befindet sich dort ein Block, der Wasser aufnehmen kann, wird er mit Wasser gefüllt. Andernfalls passiert nichts
* Befehlseinstellungen
  * `{type}`: Flüssigkeitstyp (Standard: WATER). Auswahl: WATER/LAVA
* Beispiel:

```
- PLACELIQUID type:WATER
- PLACELIQUID type:LAVA
```

### PLANT\_IN\_SQUARE

* Info: Pflanzt im Quadrat um den ausgewählten Block.
* Befehlseinstellungen
  * `{radius}`: Radius des Quadrats
  * `{takeFromInv}`: Standardmäßig true, es nimmt die Samen aus dem Inventar des Spielers, andernfalls werden die Samen erzeugt
  * `{acceptEI}`: Standardmäßig false, akzeptiert EI für die Samen
  * `{cropType}`: Standardmäßig werden alle Samen akzeptiert (es nimmt Samen je nach ihrer Reihenfolge im Inventar)
    * FARMLAND - WHEAT, CARROTS, BEETROOTS, POTATOES, SWEET\_BERRY\_BUSH, MELON\_STEM, PUMPKIN\_STEM, TORCHFLOWER\_CROP
    * SOUL SAND - NETHER\_WART
    * JUNGLE WOOD/LOG - COCOA
  * `{isCube}`: Macht aus dem Pflanzbereich statt eines Quadrats einen Würfel. Nützlich für das Pflanzen von Kakao in einem Bereich
* Beispiel:

```
- PLANT_IN_SQUARE 3
```

### REMOVEBLOCK

* Info: Entfernt den Block, ohne Drops, er wird nur entfernt
* Keine Befehlseinstellung
* Beispiel:

```
- REMOVEBLOCK
```

### SELL\_CONTENT

* Info: Verkauft den gesamten Inhalt einer Truhe / eines Ofens / aller Blöcke, die ein Inventar haben.
* Befehlseinstellungen
  * `{price_boost}`: Float-Multiplikator für die verkauften Items. Ist der Wert hier zum Beispiel 2, erhältst du für die verkauften Items den doppelten Verkaufspreis.
  * `{deleteUnsellable}`: Boolean-Wert, der festlegt, ob unverkäufliche Items gelöscht werden sollen
* Beispiel:

```
- SELL_CONTENT priceBoost:1.0 deleteUnsellable:false
```

:::info
Erfordert ShopGUIPlus (Priorität) & Vault & CMI-Preise
:::

### SETBLOCK

* Info: Ersetzt den Zielblock durch einen anderen Block
* Befehlseinstellung
  * `{material}`: Das zu setzende Material
* Beispiel:

```
- SETBLOCK STONE
```

### SETTEMPBLOCK

* Info: Ersetzt den Zielblock durch einen temporären Block.
* Befehlseinstellungen
  * `{material}`: Das zu setzende Material
  * `{time}`: Die Zeit in Ticks (20 Ticks = 1 Sek.)
* Beispiel:

```
- SETTEMPBLOCK STONE 100
```

:::warning
Er ersetzt keine Blöcke mit zusätzlichen Daten (Inventar, Rotation usw.)
:::

### SET\_TEMP\_BLOCK\_POS

* Info: Ersetzt den anvisierten Block durch einen temporären Block
* Befehl: SET\_TEMP\_BLOCK\_POS x:\{x\} y:\{y\} z:\{z\} material:\{material\} time:\{\} bypassProtection:\{boolean\} whitelistCurrentBlock:\{list of materials\}
* Beispiel:

```
- SET_TEMP_BLOCK_POS x:0.0 y:0.0 z:0.0 material:STONE time:10 bypassProtection:true whitelistCurrentBlock:SAND,DIRT
```

:::warning
Er ersetzt keine Blöcke mit zusätzlichen Daten (Inventar, Rotation usw.)
:::

### SETBLOCKPOS

* Info: Setzt Blöcke an einer bestimmten Position
* Befehlseinstellungen
  * `{x}`: Die Block-Position X
  * `{y}`: Die Block-Position Y
  * `{z}`: Die Block-Position Z
  * `{material}`: Der Blocktyp
  * `{bypassWG}`: Ob WorldGuard die Platzierung des Blocks beeinflusst oder nicht
* Beispiel:

```
- SETBLOCKPOS %block_x_int% %block_y_int% %block_z_int% STONE true
```

### SETEXECUTABLEBLOCK

* Info: Setblock-Befehl, aber für Executable Blocks
* Befehlseinstellungen
  * `{id}`: ID des Executable Blocks
  * `{x}`: X-Koordinaten
  * `{y}`: Y-Koordinaten
  * `{z}`: Z-Koordinaten
  * `{world}`: Die Welt, in der sich der Executable Block befinden soll
  * `{replace}`: Ob du einen Block ersetzen möchtest, der an dieser Position existiert, oder nicht
  * `{bypassProtection}`: (Standard false) Ob du den Block auch dann ersetzen möchtest, wenn dort ein Geländeschutz eines Plugins besteht. 
  * `[ownerUUID]`: (Optional) (Standard = kein Besitzer) Die UUID des Spielers, der der Besitzer des EB sein soll
* Beispiel:

```
- SETEXECUTABLEBLOCK BLOCKS_001_STONE %block_x_int% %block_y_int% %block_z_int% %block_world% true
```

### SILK\_SPAWNER

* Info: Sammelt den am Event beteiligten Spawner ein
* Keine Befehlseinstellung
* Beispiel:

```
- SILK_SPAWNER
```

:::info
Der Befehl SILK\_SPAWNER ist nur mit den folgenden Plugins kompatibel:

* RoseStacker
* WildStacker

Und natürlich mit den Vanilla-Spawnern.
:::

### SMELT

* Info: Schmilzt den Zielblock und lässt das geschmolzene Item fallen, zum Beispiel iron\_ore -> iron\_ingot. Er unterstützt Glück (Fortune). Kann der Block nicht geschmolzen werden, passiert nichts. Die Beute des Blocks ändert sich nicht.
* Befehlseinstellung
  * `[generateEvent]`: (Optional) (Standard = true) Ob ein Block-Break-Event erzeugt wird oder nicht
* Beispiel:

```
- SMELT 
- SMELT false
```

### STRIKELIGHTNING

* Info: Lässt an dem Block, der den Befehl ausführt, einen Blitz ohne Schaden einschlagen
* Keine Befehlseinstellung
* Beispiel:

```
- STRIKELIGHTNING
```

### VEIN\_BREAKER

* Info: Zerstört Blöcke in Adern mit einem einzigen Block-Break
* Befehlseinstellungen
  * `{maxVeinSize}`: (Standard = 10) Maximale Anzahl an Blöcken, die der Befehl zerstören kann
  * `[createBBEvent]`: (Optional) (Standard = true) Ob ein Block-Break-Event erzeugt wird oder nicht
  * `[smelt]`: (Optional) (Standard = false) Verwendet die Logik des SMELT-Befehls. Ist der Block schmelzbar, lässt er stattdessen die geschmolzene Version fallen. Andernfalls lässt er den zerstörten Block normal fallen.
  * `[runActivatorOnBlocks]`: (Optional) (Standard = false) Nur für ExecutableItems. Wenn true, führen die Blöcke der Ader ebenfalls den Aktivator aus, der den Befehl gestartet hat, siehe [runActivatorOnBlocks](#runactivatoronblocks). Lass `createBBEvent` auf true.
* Beispiel:

```
- VEIN_BREAKER 20
- VEIN_BREAKER maxVeinSize:10 createBBEvent:true smelt:false runActivatorOnBlocks:false
- VEIN_BREAKER maxVeinSize:16 runActivatorOnBlocks:true
```

:::info
`triggerEvent` ist keine Einstellung von VEIN\_BREAKER. Die alte Vorlage des In-Game-Editors schrieb `VEIN_BREAKER maxVeinSize:10 triggerEvent:true`: Der Teil `triggerEvent:true` hat keine Wirkung, du kannst ihn entfernen. Um festzulegen, ob der Befehl Block-Break-Events erzeugt, verwende `createBBEvent`.
:::

#### runActivatorOnBlocks

`runActivatorOnBlocks` ist eine Einstellung von VEIN\_BREAKER, [MINEINCUBE](#mineincube) und [FARMINCUBE](#farmincube). Sie wird nur von ExecutableItems gelesen.

* Ohne sie (Standard `false`) führen die vom Befehl zerstörten Blöcke den Aktivator, der den Befehl enthält, nicht aus: Das verhindert eine Endlosschleife von Block-Breaks. Die anderen Aktivatoren deiner Items (die ohne Break-Befehl) werden für diese Blöcke weiterhin ausgeführt.
* Mit `runActivatorOnBlocks:true` führt jeder vom Befehl zerstörte Block ebenfalls den Aktivator aus, der ihn gestartet hat, als hätte der Spieler ihn zerstört: Seine Bedingungen, `desactiveDrops` (keine Vanilla-Drops), seine anderen Befehle (zum Beispiel `DROPITEM`), sein `usageModification` und seine Variablenänderungen gelten für jeden Block. `cancelEvent: true` gilt ebenfalls: Diese Blöcke werden dann nicht zerstört.
* Der Break-Befehl wird für diese Blöcke nicht erneut ausgeführt, es gibt also keine Endlosschleife.
* Die Cooldowns, die Nutzungen pro Tag und die erforderlichen Features (`requiredItems`, `requiredExecutableItems`, `requiredMoney`...) werden für diese Blöcke nicht geprüft: Sie werden einmal geprüft und abgezogen, und zwar für den Block, der den Aktivator ausgeführt hat. Sonst würde ein Cooldown die Ader nach dem ersten Block stoppen.
* Der Aktivator erhält diese Blöcke über ihre Block-Break-Events: Lass `createBBEvent` (VEIN\_BREAKER) bzw. `{createEvent}` (MINEINCUBE) auf `true`, ihrem Standardwert. FARMINCUBE erzeugt die Events selbst mit `runActivatorOnBlocks:true`, es sei denn, sein Argument `{event}` ist `false`.
* Diese Events sind Block-Breaks, daher funktioniert es nur, wenn der Befehl in einem PLAYER\_BLOCK\_BREAK-Aktivator steht.

Beispiel: Jeder Block der Ader lässt 1 Diamant statt seiner Vanilla-Drops fallen und kostet 1 Nutzung.

```yaml
activators:
  activator0:
    option: PLAYER_BLOCK_BREAK
    desactiveDrops: true
    usageModification: -1
    blockCommands:
    - VEIN_BREAKER maxVeinSize:16 runActivatorOnBlocks:true
    - DROPITEM DIAMOND 1
```
