---
description: >-
  Gemischte Befehle von SCore für Spieler und Entities: Befehlseinstellungen,
  Beispiele und Platzhalter für AROUND, DAMAGE, TELEPORT und mehr.
source_hash: 8e288b53710ee67c
translated_at: '2026-11-13T17:31:12.926Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Gemischte Befehle (Spieler & Entity)

:::info
Diese benutzerdefinierten Befehle funktionieren für Spieler, aber auch für Entities

Also in:
* playerCommands
* targetCommands
* entityCommands
* ownerCommands
* ...
:::

_In alphabetischer Reihenfolge sortiert_

### ADD\_TEMPORARY\_ATTRIBUTE

* Info: Fügt einem Spieler/einer Entity temporäre Attribute hinzu
* Befehlseinstellungen:
    * `{attribute}` : [Attributliste](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html#field-summary)
    * `{amount}` : Double-Wert, den das temporäre Attribut haben wird
    * `{operation}` : [Operationsliste](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html#enum-constant-summary)
    * `{time in ticks}` : Zeitspanne, bevor das Attribut abläuft
* Beispiel:
  * `ADD_TEMPORARY_ATTRIBUTE GRAVITY 2 ADD_NUMBER 5`
  * `ADD_TEMPORARY_ATTRIBUTE attribute:SCALE amount:1.2 operation:ADD_NUMBER timeinticks:120`

### ALL\_PLAYERS

* Info: Zielt auf alle Spieler.
* Befehlseinstellung: 
  * `{command}`: Der Befehl, der ausgeführt wird
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_PLAYERS SEND_MESSAGE Hello %parseother_`{%around_target%}`_`{player_name}`%
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_PLAYERS SEND_MESSAGE %target% has been hit by %player%
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_PLAYERS SEND_MESSAGE %entity% has been hit by %player%
```

Mehrere Befehle ausführen: Gib allen Spielern ein zufälliges Item, nicht alle Spieler erhalten dasselbe.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
```

### ALL\_MOBS

* Info: Zielt auf alle Spieler.
* Befehlseinstellung: 
    * `{command(s)}`: Der Befehl, der ausgeführt wird
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20

```

Mehrere playerCommands ausführen:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1

```

:::info
Unterstützt Blacklist und Whitelist
:::

### AROUND

* Info: Zielt auf Spieler in einem bestimmten Radius und lässt sie Befehle ausführen
* Befehlseinstellungen:
  * `{distance}`: Bis zu welchem Radius der Befehl Spieler auswählt (Standard 3)
  * `{displayMsgIfNoPlayer}`: (true oder false) Benachrichtigt den Nutzer des Items, ob es gelungen ist, Spieler anzuvisieren oder nicht (Standard true)
  * `{throughBlocks}`: Legt fest, ob Spieler, die sich hinter Blöcken befinden, betroffen sind oder nicht (Standard true)
  * `{safeDistance}`: Wenn die Distanz zwischen dem Ziel und dem Auslöser kleiner oder gleich dem Wert von safeDistance ist, wird das Ziel nicht beeinflusst. (Standard 0)
  * `{offsetYaw}`: Die Yaw-Richtung, in die dein Offset zeigen soll (unabhängig vom Yaw-Wert des Ursprungs)
  * `{offsetPitch}`: Die Pitch-Richtung, in die dein Offset zeigen soll (unabhängig vom Yaw-Wert des Ursprungs)
  * `{offsetDistance}`: Nachdem offsetYaw und offsetPitch berechnet wurden, verschiebt dieser Wert die Position/den Mittelpunkt des AROUND-Befehls ausgehend von den xyz-Koordinaten des Ursprungs.
  * `{limit}`: Die Anzahl der Ziele, die betroffen sein können 
  * `{sort}`: Nützlich für die Option limit. 
    * NEAREST : Wählt die Entities aus, die dem Ursprung am nächsten sind.
    * RANDOM : Wählt zufällig eine beliebige Entity innerhalb der Reichweite des Befehls aus.
  * `{regionCheck}`: true/false. Wenn true, prüft der AROUND-Befehl, ob sich das Ziel entweder in der Wildnis oder im Claim des Ausführenden befindet (im Kontext des Plugins GriefPrevention) (wird bald aktualisiert, damit auch mit anderen Claim-Plugins geprüft wird)
  * `{commands}`: Die Befehle, die für die Zielspieler ausgeführt werden.

:::tip
Du kannst **mehrere Befehle** hinzufügen! Verwende den Trenner `<+>`

Beispiel: `SEND_MESSAGE &cYou will be damaged in 5 seconds <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Platzhalter:** Die Platzhalter sind dieselben wie die [Player-Platzhalter](https://splugins.net/docs/tools-for-all-plugins-score/placeholders#player-placeholders), aber du musst "player" durch "around\_target" ersetzen

Beispiel: %around\_target%, %around\_target\_uuid%
:::

:::info
**Anzahl der Ziele:** `%around_target_count%` gibt die Anzahl der vom Befehl ausgewählten Spieler zurück. Sie ist für jedes Ziel gleich und zählt die Ziele, die nach `distance`, `safeDistance`, `throughBlocks` und `regionCheck` und `limit` übrig bleiben. Die `CONDITIONS(...)`, die bei jedem Ziel geprüft werden, werden nicht berücksichtigt. Die Kurzform `+N` / `-N` wird akzeptiert: `%around_target_count%-1`.

Beispiel: `AROUND distance:10 displayMsgIfNoPlayer:false SEND_MESSAGE &eYou are one of the %around_target_count% players hit !`
:::

* Beispiele:

Dies lässt Blitze bei Spielern in einem Radius von 20 Blöcken einschlagen

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:20 displayMsgIfNoPlayer:false execute at %around_target% run summon lightning_bolt
```

Sende eine Nachricht an Spieler, die zwischen 5 und 10 Blöcke entfernt sind

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 displayMsgIfNoPlayer:true throughBlocks:true safeDistance:5 SENDMESSAGE &eIt is a test !
```

:::warning
Du kannst AROUND mit folgenden Befehlen verschachteln: AROUND, IF, NEAREST, ALL\_PLAYERS

Wenn du das tust, ändern sich der Trenner und die Platzhalter je nach Verschachtelungsstufe.

Trenner des Basisbefehls: `<+>`

erster verschachtelter Befehl: `<+::step1>`

... : `<+::step2>`; , `<+::step3>`, ...

Basis-Platzhalter: %around\_target%

erster verschachtelter Befehl: %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

Beispiele:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:5 displayMsgIfNoPlayer:false say &a(0)&e%around_target% <+> DELAY 3 <+> AROUND distance:5 displayMsgIfNoPlayer:false say &a(1)&e%around_target::step1% <+::step1> DELAY 3 <+::step1> AROUND distance:5 displayMsgIfNoPlayer:false say &a(2)&e%around_target::step2%
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND say &a(0)&e%around_target% <+> DELAY 3 <+> NEAREST 10 say &a(1)&e%around_target::step1%
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 throughBlocks:false displayMsgIfNoPlayer:false say &a(0)&e%around_target% <+> DELAY 3 <+> AROUND distance:5 displayMsgIfNoPlayer:false say &a(1)&e%around_target::step1% and x &c%around_target_x::step1% <+::step1> IF %around_target_x::step1%>10 say &aThe target &e%around_target_x::step2% <+::step2> effect give %around_target::step2% slowness 20
```

:::info
Du kannst benutzerdefinierte Platzhalter-**Bedingungen** hinzufügen, um die anvisierten Spieler anzupassen

Format:  AROUND \<settings> CONDITIONS(\<conditions>) \<command>

     \<settings>  sind die Befehlseinstellungen

     \<conditions> sind die Bedingungen

Format der Bedingungen:  CONDITIONS(%::\<my\_placeholder\_name>::%\<comparator>\<value>)

      \<my\_placeholder\_name> ist der Name des Platzhalters

      \<comparator> Der Vergleichsoperator: „`<`“, „`<=`“, „`=`“, „`>`“, „`>=`“

      \<value> der Wert

 Du kannst mehrere Bedingungen mit dem Trenner „&&“ hinzufügen
:::

* Beispiele:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'AROUND distance:10 CONDITIONS(%::player_health::%>10&#x26;&#x26;%::player_name::%=2Ssomar) SEND_MESSAGE &#x26;eclick'
```

:::info
Beachte, dass der Teil CONDITIONS() die darin enthaltenen Platzhalter mit dem Spieler auswertet, der vom AROUND-Befehl ausgewählt wurde. In den obigen Platzhaltern wird also tatsächlich geprüft, ob die Gesundheit des Ziels größer als 10 ist und ob der Spieler, der vom AROUND-Befehl ausgewählt wurde, „2Ssomar“ heißt
:::

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 displayMsgIfNoPlayer:false CONDITIONS(%::parseother_`{%player%}`_`{betterteams_name}`::%!=%::betterteams_name::%) effect give %around_target% weakness 10 10 true
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'AROUND distance:2 CONDITIONS(%::player_name::%!=%player%) DAMAGE 15'
```

:::info
Platzhalter, die von Plugins wie ExecutableItems und ExecutableBlocks stammen, werden nicht mit dem Spieler ausgewertet, der vom AROUND-Befehl betroffen ist.

Zum Beispiel funktioniert bei ExecutableBlocks CONDITIONS(%var\_faction%=%::factionsuuid\_faction\_name::%), indem geprüft wird, ob der Wert der Faction-Variable des Blocks gleich der Faction des anvisierten Spielers ist\
Platzhalter-Quelle: [PlaceholderAPI](https://factions.support/placeholderapi/))
:::

### BACK\_DASH

* Info: Schleudert den Spieler/das Ziel in die entgegengesetzte Richtung seiner Blickrichtung **(DU KANNST NICHT IN DIE LUFT GESCHLEUDERT WERDEN)**
* Befehlseinstellung:
  * `{amount}`: Der Wert, der bestimmt, wie stark der Schleudereffekt ist
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BACK_DASH 5
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - BACK_DASH 5
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - BACK_DASH 5
```

### BURN

* Info: Setzt den Spieler/das Ziel in Brand
* Befehlseinstellung:
 * `{timeinsecs}`: Brenndauer in Sekunden
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BURN 200
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - BURN 200
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - BURN 200
```

### CONSOLE\_MESSAGE

* Info: Sendet eine Nachricht an die Konsole
* Befehlseinstellung:
  * `{text}`: Text, der an die Konsole gesendet wird
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player%
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player% triggered by %target%
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player% triggered by %entity%
```

### COPY\_EFFECTS

* Info: Kopiert die Effekte des Ziels
* Befehlseinstellung:
  * `[limitDuration]`: (Optional) (Standard = kein Limit) Wenn das Ziel zum Beispiel 3 Minuten Gift-Effekt hat und du das Limit auf 5 Sekunden setzt, erhältst du nur einen Gift-Effekt von 5 Sekunden
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - COPY_EFFECTS 5 # Using this will copy the player's own effects
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - COPY_EFFECTS 5 # Using this will copy the target effects into the player
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - COPY_EFFECTS 5 # Using this will copy the entity effects into the player 
```

### CUSTOMDASH1

* Info: Schleudert dich zu einer bestimmten Position
* Befehlseinstellungen:
  * `{x}`: X-Koordinate
  * `{y}`: Y-Koordinate
  * `{z}`: Z-Koordinate
  * `{fallDamage}`: true oder false. Legt fest, ob der Spieler Fallschaden erhält, nachdem er dadurch geschleudert wurde.
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH1 %target_x% %target_y%+5 %target_z% true # This will dash up the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% true # This will dash up the entity
```

Wenn du Aktivatoren hast, die sich auf zwei Arten von Zielen beziehen, kannst du Folgendes tun

* Beispiel 1 | Instanz von Spieler - Entity | Den Spieler zur Entity dashen lassen

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% true
    entityCommands: []
```

* Beispiel 2 | Instanz von Spieler - Entity | Die Entity zum Spieler dashen lassen

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands: []
    entityCommands: 
    - CUSTOMDASH1 %player_x% %player_y% %player_z% true
```

* Beispiel 3 | Instanz von Spieler - Block | Den Spieler zum Block dashen lassen

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and block
    playerCommands: 
    - CUSTOMDASH1 %block_x% %block_y% %block_z% true
    blockCommands: []
```

Du kannst die Stärke des Befehls erhöhen, indem du ihn mehrfach ausführst (aber nicht im selben Tick, die Ausführungen müssen zeitlich versetzt sein, sonst ergibt es keinen Sinn, da du den Spieler von derselben Position aus zur Position dashen lässt). Beispiele:

* Mehrfaches manuelles Ausführen

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
```

* Mit dem Utility-Befehl LOOP START

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'LOOP START: 3'
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - LOOP END
```

### CUSTOMDASH2

* Info: Schleudert dich weg von einer bestimmten Position
* Befehlseinstellungen:
  * `{x}`: X-Koordinate
  * `{y}`: Y-Koordinate
  * `{z}`: Z-Koordinate
  * `{strength}`: Stärke des Dashs
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH2 %player_x% %player_y%+5 %player_z% 5 # This will dash down the player with strength 5
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH2 %target_x% %target_y%+5 %target_z% 5 # This will dash down the target with strength 5
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH2 %entity_x% %entity_y% %entity_z% 5 # This will dash down the entity with strength 5
```

Wenn du Aktivatoren hast, die sich auf zwei Arten von Zielen beziehen, kannst du Folgendes tun

* Beispiel 1 | Instanz von Spieler - Entity | Den Spieler von der Entity weg dashen lassen

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% 5
    entityCommands: []
```

* Beispiel 2 | Instanz von Spieler - Entity | Die Entity vom Spieler weg dashen lassen

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands: []
    entityCommands: 
    - CUSTOMDASH1 %player_x% %player_y% %player_z% 5
```

* Beispiel 3 | Instanz von Spieler - Block | Den Spieler vom Block weg dashen lassen

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and block
    playerCommands: 
    - CUSTOMDASH1 %block_x% %block_y% %block_z% 5
    blockCommands: []
```

### CUSTOMDASH3

* Info: Lässt das Ziel entlang einer bestimmten mathematischen Funktion dashen
* Befehlseinstellungen:
  * `{function}`: Die mathematische Funktion, der gefolgt wird. [Website für Funktionsrechner](https://www.geogebra.org/calculator)
  * `{max x value}`: Maximaler x-Wert der Funktion
  * `{front z}`: Ob der Dash nach vorne oder nach hinten geht
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH3 cosx 10 true
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH3 cosx 10 true
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH3 cosx 10 true
```

### DAMAGE

* Info: Fügt dem Spieler einen bestimmten Schaden zu. (Mit diesem Befehl verursachter Schaden zählt als Spielerschaden)
  * Dieser Befehl löst die schadensbezogenen Aktivatoren von ExecutableItems und ExecutableEvents aus
  *   Der Spigot-Schadenstyp ist ENTITY\_ATTACK, wenn ein Spieler am Aktivator beteiligt ist.

      Andernfalls ist der Spigot-Schadenstyp CUSTOM
* Befehlseinstellungen:
  * `{amount}`: Schadensmenge in Hitpoints (nicht in Herzen)
  * `{amplified If Strength Effect}`: true oder false, Stärke 1 -> + 1.5 Schaden, ....
  * `{amplified with attack attribute}`: true oder false, es nimmt die Summe all deiner vorhandenen ATTACK_DAMAGE-Attribute mit dem Operator `MULTIPLY_SCALAR_1` und multipliziert sie basierend auf deinem aktuellen Angriffsschaden (einschließlich des Stärke-Effekts, falls aktiviert)
  <br/>
  :::info
  Formel:  
  `total damage` = (`amount` * `strength effect`) * (`sum of all of your attack damage attributes with the operator (add_multiplied_total/MULTIPLY_SCALAR_1)`+1) 
  :::
  * `{damageType}`: Die Schadensart -> [DamageType-Liste](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html)
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the entity 
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the player as damage
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the target as damage
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the entity as damage
```

:::info
Um echten Schaden zu verursachen, kannst du Folgendes verwenden:\
\- 1.20.5++ verwende den Befehl /minecraft\:damage, zum Beispiel\
minecraft\:damage %target% 10 by %player%\
\
\- 1.20.5-- verwende den Befehl REGAIN HEALTH, das ist nicht optimal, aber eine Behelfslösung.
:::

### DAMAGE\_NO\_KNOCKBACK

* Info: Fügt dem Spieler einen bestimmten Schaden zu, ohne Rückstoß anzuwenden. (Mit diesem Befehl verursachter Schaden zählt nicht als Spielerschaden, sondern eher als indirekter Schaden)
  * Dieser Befehl löst die schadensbezogenen Aktivatoren von ExecutableItems und ExecutableEvents aus
  *   Der Spigot-Schadenstyp ist ENTITY\_ATTACK, wenn ein Spieler am Aktivator beteiligt ist.

      Andernfalls ist der Spigot-Schadenstyp CUSTOM
* Befehlseinstellungen:
  * `{amount}`: Schadensmenge in Hitpoints (nicht in Herzen)
  * `{amplified If Strength Effect}`: true oder false, Stärke 1 -> + 1.5 Schaden, ....
  * `{amplified with attack attribute}`: true oder false, bei einem Spieler mit 500% Bonusschaden führt der Befehl 5 x „\<damage>“ aus.
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the entity 
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the player as damage
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the target as damage
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the entity as damage
```

### DAMAGE\_BOOST

* Info: Ermöglicht dir, dir selbst einen benutzerdefinierten Schadensbonus zu geben
  * Dieser Befehl verstärkt auch den Schaden benutzerdefinierter Befehle, z. B. (DAMAGE, DAMAGE\_NO\_KNOCKBACK)
  * Dieser Befehl verstärkt den Schaden von Projektilen nicht
* Befehlseinstellungen:
  * `{modification in percentage example 100}`: Höhe des Bonus. Beispiel unten:
    * 50 = Du verursachst +50% Schaden
    * -80 = Du verursachst -80% Schaden
  * `{timeinticks}`: Die Dauer des benutzerdefinierten Schadensbonus
* Beispiel: (Der folgende Befehl gibt dir für 10s +50% verursachten Schaden)

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the entity

```

Dieser Befehl kann mehrfach verwendet werden und die Boni werden gestapelt. In diesem Beispiel verursacht der Spieler in \[0-10] Sekunden 50% mehr Schaden, in \[10-20] Sekunden 100% mehr Schaden und dann in \[20-30] Sekunden wieder 50% mehr Schaden, da in \[10-20] zwei DAMAGE\_BOOST-Befehle gestapelt waren.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player by 50% for 200 ticks (10 seconds)
    - DELAY 10 # Delay of 10 seconds
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player by 50% for 200 ticks (10 seconds)
```

### DAMAGE\_RESISTANCE

* Info: Ermöglicht dir, dir selbst eine benutzerdefinierte Schadensresistenz zu geben, indem du dir angepasste Verstärkungen des erlittenen Schadens gibst
* Befehlseinstellungen:
  * `{modification in percentage example 100}`: Höhe der Verstärkung. Beispiel unten:
    * 50 = Du erleidest +50% Schaden\
      -80 = Du erleidest -80% Schaden
  * `{timeinticks}`: Die Dauer der benutzerdefinierten Schadensresistenz
* Beispiel: (Der folgende Befehl gibt dir für 10s +50% erlittenen Schaden)

```yaml
- DAMAGE_RESISTANCE 50 200
```

### EQUIPMENT\_VISUAL\_REPLACE

* Info: Ersetzt VISUELL (es besteht keine Gefahr, Items zu verlieren) einen Ausrüstungs-Slot durch ein bestimmtes Material
  * Es benötigt [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/).
  * Das Visual wird den Spielern angezeigt, die den Spieler / die Entity sehen (und dem Spieler selbst). Ein Spieler, der später näher kommt, sieht es ebenfalls.
  * Eine Entity hat pro Slot ein Visual: Ein neuer EQUIPMENT\_VISUAL\_REPLACE auf demselben Slot ersetzt den vorherigen, mit seiner neuen Dauer. Das Visual endet nach `{timeinticks}`, mit EQUIPMENT\_VISUAL\_CANCEL oder wenn die Entity stirbt, despawnt oder der Spieler den Server verlässt.
* Befehlseinstellungen:
  * `{EquipmentSlot}`: Der Slot
    * Optionen:
      * -1
      * 40
      * 36
      * 37
      * 38
      * 39
  * `{material}`: Die Item-ID des Materials, durch das ersetzt werden soll, oder die EI-ID
  * `{amount}`: Die Stapelgröße 
  * `{timeinticks}`: Wie lange die Verkleidung andauert. (20 Ticks = 1 Sek.)
*   Beispiel: 

```yaml
- EQUIPMENT_VISUAL_REPLACE 39 CARVED_PUMPKIN 1 100
```

```yaml
- EQUIPMENT_VISUAL_REPLACE 39 EI:test 1 100
```

### EQUIPMENT\_VISUAL\_CANCEL

* Info: Bricht den Befehl EQUIPMENT\_VISUAL\_REPLACE ab
  * Er funktioniert bei Spielern und bei Mobs: Die Spieler, die die Entity sehen, erhalten in diesem Slot ihr echtes Item zurück.
* Befehlseinstellung:
  * `{EquipmentSlot}`: Der Slot
    * Optionen:
      * -1
      * 40
      * 36
      * 37
      * 38
      * 39
* Beispiel:

```yaml
- EQUIPMENT_VISUAL_CANCEL 39
```

### FORCE\_DROP

* Aliase: `FORCEDROP`, `DROPSPECIFICEI`
* Info: Zwingt den Spieler/die Entity, ein Item fallen zu lassen. Unterstützt zwei Modi:
  * **Slot-Modus**: lässt das Item im angegebenen Inventar-Slot fallen
  * **EI-ID-Modus**: lässt alle Items fallen, die der angegebenen ExecutableItem-ID im Inventar entsprechen (nur Spieler)
* Befehlseinstellungen:
  * `slot:`: Zahl, -1 für die Haupthand (Standard: -1). Siehe das Slot-Referenzbild unten.
  * `ei_id:`: die ID des ExecutableItem, das fallen gelassen werden soll (überschreibt den Slot-Modus, wenn angegeben)

![](https://media.ssomar.com/m/docs-img-slots-info.png)

* Beispiele:

```yaml
# Drop the item in main hand
- FORCE_DROP slot:-1

# Drop the item in slot 5
- FORCE_DROP slot:5

# Drop all items with the EI id "excalibursword" from the player's inventory
- FORCE_DROP ei_id:excalibursword
```

### FRONTDASH

* Info: Schleudert den Spieler/das Ziel in die Richtung, in die er/es blickt
* Befehlseinstellungen:
  * `{number}`: Der Wert, der bestimmt, wie stark der Schleudereffekt ist
  * `{custom_y}` : Um einen vertikalen Schub zu setzen (Ich empfehle dir, einen kleinen Wert wie 0.5 - 1 zu setzen, wenn du keinen großen Sprung willst.)
  * `{falldamage}`: Legt fest, ob Fallschaden aktiviert oder deaktiviert ist
* Beispiel:

```yaml
- FRONTDASH 5 0.5 false
```

### GLACIAL\_FREEZE

* Info: Wendet das Einfrieren durch den Schnee von Minecraft 1.18 an
* Befehlseinstellung:
 * `{time in ticks}`: Dauer des Einfrierens in Ticks. (20 Ticks = 1 Sek.)
* Beispiel:

```yaml
- GLACIAL_FREEZE 160
```

### GLOWING

* Info: Lässt den Spieler leuchten
* Befehlseinstellungen:
  * `{time in ticks}`: Dauer des Leuchtens in Ticks
  * `{color}`: Welche Farbe das Leuchten hat. [Farbreferenz](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html)
* Beispiel:

```yaml
- GLOWING 100 BLUE
```

### HITSCAN\_ENTITIES

* Info: Ermöglicht es, einen Befehl in eine bestimmte Richtung auf Entities auszuführen
* Befehlseinstellungen:
  * `{range}`: Wie weit eine Entity entfernt sein darf, um vom HITSCAN-Befehl anvisiert zu werden
  * `{radiusOfHitscan}`: Wie BREIT der Zylinder ist. Das ist im Grunde der Unterschied zwischen dem Abfeuern einer Kugel und dem Abfeuern einer Kanonenkugel.
  * `{pitch}`: In welche Richtung geschossen wird, relativ zum Pitch des Spielers
  * `{yaw}`: Dasselbe wie Pitch, aber mit Yaw
  * `{leftRightShift}`:
    * -5 = der Hitscan STARTET 5 Blöcke links.
    * 0 = Der Hitscan ist auf den Spieler zentriert.
    * 5 = der Hitscan STARTET 5 Blöcke rechts vom Spieler. 
  * `{yShift}`: Wie links/rechts, nur mit einer anderen Achse. 
  * `{throughEntities}`: Boolean: Ob der HITSCAN durch Entities hindurchgehen kann oder nicht.
  * `{throughBlocks}`: Boolean: Ob der HITSCAN durch Blöcke hindurchgehen kann oder nicht.
  * `{limit}`: Die Anzahl der Ziele, die betroffen sein können
  * `{sort}`: Nützlich für die Option limit.
    * NEAREST : Wählt die Entities aus, die dem Ursprung am nächsten sind.
    * RANDOM : Wählt zufällig eine beliebige Entity innerhalb der Reichweite des Befehls aus.
  * `{regionCheck}`: true/false. Wenn true, prüft der AROUND-Befehl, ob sich das Ziel entweder in der Wildnis oder im Claim des Ausführenden befindet (im Kontext des Plugins GriefPrevention) (wird bald aktualisiert, damit auch mit anderen Claim-Plugins geprüft wird)
  * `{command(s)}`: Genau wie bei den AROUND-Befehlen kannst du `command1 <+> command2` ... eingeben und den Platzhalter %around\_target% verwenden
* Beispiel:

```yaml
HITSCAN_ENTITIES range:5 radius:0 pitch:0 yaw:0 leftRightShift:0 yShift:0 throughBlocks:true throughEntities:true HEAL 10 <+> BACKDASH 5
```

:::info
Die Befehle nach `HITSCAN_ENTITIES` (und nach jedem `<+>`) werden bei **jeder getroffenen Entity** ausgeführt, wie Entity-Befehle: `REGAIN_HEALTH 4` heilt die getroffene Entity, nicht den Ausführenden. Um auf den Ausführenden zu wirken, verwende einen Vanilla-Befehl mit `%player%`, zum Beispiel `HITSCAN_ENTITIES range:8 DAMAGE 4 <+> effect give %player% instant_health 1 0 true`.
:::
* Bild zum Verständnis:
![](https://media.ssomar.com/m/docs-img-hitscan-entities.png)

### HITSCAN\_PLAYERS

* Info: Ermöglicht es, einen Befehl in eine bestimmte Richtung auf Spieler auszuführen
* Befehlseinstellungen:
  * `{range}`: Wie weit eine Entity entfernt sein darf, um vom HITSCAN-Befehl anvisiert zu werden
  * `{radiusOfHitscan}`: Wie BREIT der Zylinder ist. Das ist im Grunde der Unterschied zwischen dem Abfeuern einer Kugel und dem Abfeuern einer Kanonenkugel.
  * `{pitch}`: In welche Richtung geschossen wird, relativ zum Pitch des Spielers
  * `{yaw}`: Dasselbe wie Pitch, aber mit Yaw
  * `{leftRightShift}`:
    * -5 = der Hitscan STARTET 5 Blöcke links.
    * 0 = Der Hitscan ist auf den Spieler zentriert.
    * 5 = der Hitscan STARTET 5 Blöcke rechts vom Spieler.
  * `{yShift}`: Wie links/rechts, nur mit einer anderen Achse.
  * `{throughEntities}`: Boolean: Ob der HITSCAN durch Entities hindurchgehen kann oder nicht.
  * `{throughBlocks}`: Boolean: Ob der HITSCAN durch Blöcke hindurchgehen kann oder nicht.
  * `{limit}`: Die Anzahl der Ziele, die betroffen sein können
  * `{sort}`: Nützlich für die Option limit.
    * NEAREST : Wählt die Entities aus, die dem Ursprung am nächsten sind.
    * RANDOM : Wählt zufällig eine beliebige Entity innerhalb der Reichweite des Befehls aus.
  * `{regionCheck}`: true/false. Wenn true, prüft der AROUND-Befehl, ob sich das Ziel entweder in der Wildnis oder im Claim des Ausführenden befindet (im Kontext des Plugins GriefPrevention) (wird bald aktualisiert, damit auch mit anderen Claim-Plugins geprüft wird)
  * `{command(s)}`: Genau wie bei den AROUND-Befehlen kannst du `command1 <+> command2` ... eingeben und den Platzhalter %around\_target% verwenden
* Beispiel:

```yaml
- HITSCAN_PLAYERS range:5 radius:0 pitch:0 yaw:0 leftRightShift:0 yShift:0 throughBlocks:true throughEntities:true DAMAGE 5 <+> JUMP 5
```
* Bild zum Verständnis:
  ![](https://media.ssomar.com/m/docs-img-hitscan-players.png)

### INVULNERABILITY

* Info: Macht den Spieler für eine bestimmte Zeit unverwundbar
* Befehlseinstellung:
 * `{ticks}`: Dauer der Unverwundbarkeit in Ticks. (20 Ticks = 1 Sek.)
  * Unterstützt negative Werte, um die Unverwundbarkeitszeit zu verringern, etwa die nach einem Treffer.
* Beispiel:

```yaml
- INVULNERABILITY 60
```

### JUMP

* Info: Schleudert den Spieler in die Luft
* Befehlseinstellung:
  * `{number}`: Wie stark der Schleudereffekt ist
  * `{fall damage}`: (Optional) (Standard = false) Legt fest, ob der Befehl Fallschaden verursachen soll.
* Beispiel:

```yaml
- JUMP 20
```

### LAUNCH\_ENTITY

* Info: Schleudert eine Entity in deine Richtung
* Befehlseinstellungen:
  * `{entityType}`: Mob-ID der geschleuderten Entity (GROSSBUCHSTABEN) [EntityType-Liste](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * `{speed}`: (Zahl, Double) Legt die Geschwindigkeit der Entity fest
  * `[angle rotation y]`: (nur für 1.14 und höher) (Optional) (Standard = 0) (in Grad) Legt die Richtung fest, in die die Entity geschleudert wird
* Beispiel:

```yaml
- LAUNCH_ENTITY PIG 2
```

* Beispiel für einen Dreifachschuss:

```yaml
- LAUNCH_ENTITY PIG 2
- LAUNCH_ENTITY PIG 2 15
- LAUNCH_ENTITY PIG 2 -15
```

### MLIB\_DAMAGE

* Info: Fügt dem Ziel Schaden zu, wobei die Schadensart hauptsächlich vom Plugin MythicLib stammt
* Befehlseinstellungen:
  * `{number}`: Schaden, der den Zielen zugefügt wird (Standard: 10)
  * `{damage_type}`: Zugefügte Schadensart (Standard: PHYSICAL)
    * Beispiel: MAGIC, PHYSICAL, WEAPON, SKILL, PROJECTILE, UNARMED, ON\_HIT, MINION, DOT;
  * `{knockback}`: true/false, ob das Ziel zurückgestoßen wird (Standard: false)
  * `{element}`: Gibt an, um welche Art von Element es sich bei dem Angriff handelt (Standard: FIRE)
    * Referenz: [Elementliste von MythicLib](https://gitlab.com/phoenix-dvpmt/mythiclib/-/blob/master/mythiclib-plugin/src/main/resources/default/elements.yml?ref_type=heads)
  * `{crit}`: true/false, ob das `CRITICAL_STRIKE_POWER` des Angreifers in die Schadensgleichung einfließt oder nicht (Standard: false)
    * Gleichung: `number * (number * (total critical_strike_power/100))`
* Beispiel:

```yaml
- MLIB_DAMAGE 10 PHYSICAL false FIRE true
```

### MOB\_AROUND

* Info: Zielt auf Entities in einem bestimmten Radius und lässt sie Befehle ausführen
  * Verfügbare Entities -> [LivingEntity-Liste](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/LivingEntity.html)
* Befehlseinstellungen:
  * `{distance}`: Bis zu welchem Radius der Befehl Entities auswählt
  * `{displayMsgIfNoEntity}`: (true oder false) Benachrichtigt den Nutzer des Items, wenn es nicht gelungen ist, Mobs anzuvisieren.
    * **Auf false setzen, um die Nachricht auszublenden**
  * `{throughBlocks}`: Legt fest, ob Mobs, die sich hinter Blöcken befinden, betroffen sind oder nicht
  * `{safeDistance}`: Wenn die Distanz zwischen dem Ziel und dem Auslöser kleiner oder gleich dem Wert von safeDistance ist, wird das Ziel nicht beeinflusst.
  * `{offsetYaw}`: Die Yaw-Richtung, in die dein Offset zeigen soll (unabhängig vom Yaw-Wert des Ursprungs)
  * `{offsetPitch}`: Die Pitch-Richtung, in die dein Offset zeigen soll (unabhängig vom Yaw-Wert des Ursprungs)
  * `{offsetDistance}`: Nachdem offsetYaw und offsetPitch berechnet wurden, verschiebt dieser Wert die Position/den Mittelpunkt des AROUND-Befehls ausgehend von den xyz-Koordinaten des Ursprungs.
  * `{limit}`: Die Anzahl der Ziele, die betroffen sein können
  * `{sort}`: Nützlich für die Option limit.
    * NEAREST : Wählt die Entities aus, die dem Ursprung am nächsten sind.
    * RANDOM : Wählt zufällig eine beliebige Entity innerhalb der Reichweite des Befehls aus.
  * `{regionCheck}`: true/false. Wenn true, prüft der AROUND-Befehl, ob sich das Ziel entweder in der Wildnis oder im Claim des Ausführenden befindet (im Kontext des Plugins GriefPrevention) (wird bald aktualisiert, damit auch mit anderen Claim-Plugins geprüft wird)
  * `{nonliving}`: true/false. Wenn true, werden auch andere Entities wie Pfeile und Rüstungsständer anvisiert. Fehler, die beim Ausführen von Entity-Befehlen auftreten, während dieses Argument aktiviert ist, werden höchstwahrscheinlich ignoriert, da der Umfang sonst ausufert.
  * Du kannst Entities per BLACKLIST oder WHITELIST ausschließen bzw. zulassen, indem du eine dieser Angaben an beliebiger Stelle im Befehl hinzufügst:
    * BLACKLIST(ZOMBIE,ARMOR\_STAND)
    * WHITELIST(CHICKEN)

:::tip
Du kannst **mehrere Befehle** hinzufügen! Verwende den Trenner `<+>`

Beispiel: `minecraft:effect give .. <+> DELAY 5 <+>  DAMAGE 5`
:::

:::info
**Platzhalter:** Die Platzhalter sind dieselben wie die [Entity-Platzhalter](https://splugins.net/docs/tools-for-all-plugins-score/placeholders#entity-placeholders), aber du musst "player" durch "around\_target" ersetzen

Beispiel: %around\_target%, %around\_target\_uuid%
:::

:::info
**Anzahl der Ziele:** `%around_target_count%` gibt die Anzahl der vom Befehl ausgewählten Entities zurück. Sie ist für jedes Ziel gleich und zählt die Ziele, die nach `distance`, `safeDistance`, `throughBlocks`, `regionCheck` und der `WHITELIST(...)` / `BLACKLIST(...)` und `limit` übrig bleiben. Die `CONDITIONS(...)`, die bei jedem Ziel geprüft werden, werden nicht berücksichtigt. Die Kurzform `+N` / `-N` wird akzeptiert: `%around_target_count%-1`.

Beispiel: `MOB_AROUND distance:8 WHITELIST(ZOMBIE) DAMAGE %around_target_count%`
:::

* Beispiele:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MOB_AROUND distance:3 displayMsgIfNoEntity:true throughBlocks:true safeDistance:0 [conditions] COMMAND1 <+> COMMAND2 <+> ...
    - MOB_AROUND distance:3 displayMsgIfNoEntity:false BURN 10
    - MOB_AROUND distance:5 execute at %around_target_uuid% run summon lightning_bolt
    - MOB_AROUND distance:5 BLACKLIST(ZOMBIE,ARMOR_STAND) DAMAGE 20
    - MOB_AROUND distance:5 displayMsgIfNoEntity:false effect give %around_target_uuid% poison 10 10
    - MOB_AROUND distance:10 WHITELIST(ZOMBIE`{CustomName:"*"}`) say HELLO
```

Um Entity-NBT im Feld WHITELIST/BLACKLIST zu verwenden, musst du das Plugin [NBT API](https://www.spigotmc.org/resources/nbt-api.7939/) installieren

Es unterstützt [NBT Tags](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities), sodass du zum Beispiel etwas wie Folgendes hinzufügen kannst: `ZOMBIE{IsBaby:1}` 

Beispiele:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MOB_AROUND distance:7 BLACKLIST(ZOMBIE`{CustomName:"Test Test"}`,ZOMBIE`{CustomName:"Miyamoto"}`) false BURN 3
    - MOB_AROUND distance:5 WHITELIST(ZOMBIE`{IsBaby:1}`) DAMAGE 20
    - MOB_AROUND distance:9 WHITELIST(WOLF`{Owner:"%player%"}`) HEAL 5
    - MOB_AROUND distance:9 WHITELIST(WOLF`{Owner:%player_uuid%}`) HEAL 5
```

:::warning
Du kannst MOB\_AROUND mit folgenden Befehlen verschachteln: MOB\_AROUND, IF, MOB\_NEAREST, ALL\_MOBS

Wenn du das tust, ändern sich der Trenner und die Platzhalter je nach Verschachtelungsstufe.\

Trenner des Basisbefehls: `<+>`

erster verschachtelter Befehl: `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
Basis-Platzhalter: %around\_target%

erster verschachtelter Befehl: %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### MOB\_NEAREST

* Info: Zielt auf den nächsten Mob vom Spieler/Ziel aus gesehen.
* Befehlseinstellungen:
    * `{max accepted distance}`:  Maximal akzeptierte Distanz, die die "Entity" haben darf.
    * `{command(s)}`: Die Befehle, die ausgeführt werden

:::tip
Du kannst **mehrere Befehle** hinzufügen! Verwende den Trenner `<+>`

Beispiel: `minecraft:effect give .. <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Platzhalter:** Die Platzhalter sind dieselben wie die [Entity-Platzhalter](/tools-for-all-plugins-score/placeholders#entity-placeholders), aber du musst "player" durch "around\_target" ersetzen

Beispiel: %around\_target%, %around\_target\_uuid%
:::

* Beispiel:

Fügt dem nächsten Spieler Schaden zu

```yaml
- MOB_NEAREST 10 DAMAGE 5
```

:::warning
Du kannst MOB\_NEAREST mit folgenden Befehlen verschachteln: MOB\_AROUND, IF, MOB\_NEAREST, ALL\_MOBS

Wenn du das tust, ändern sich der Trenner und die Platzhalter je nach Verschachtelungsstufe.\

Trenner des Basisbefehls: `<+>`

erster verschachtelter Befehl: `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
Basis-Platzhalter: %around\_target%

erster verschachtelter Befehl: %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### NEAREST

* Info: Zielt auf den nächsten Spieler vom Spieler/Ziel aus gesehen.
* Befehlseinstellungen:
    * `{max accepted distance}`: Maximal akzeptierte Distanz, die das "Ziel" haben darf.
    * `{command}`: Der Befehl, der ausgeführt wird

:::tip
Du kannst **mehrere Befehle** hinzufügen! Verwende den Trenner `<+>`

Beispiel: `SEND_MESSAGE &cYou will be damaged in 5 seconds <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Platzhalter:** Die Platzhalter sind dieselben wie die [Player-Platzhalter](/tools-for-all-plugins-score/placeholders#player-placeholders), aber du musst "player" durch "around\_target" ersetzen

Beispiel: %around\_target%, %around\_target\_uuid%
:::

* Beispiel:

Fügt dem nächsten Spieler Schaden zu

```yaml
- NEAREST 8 DAMAGE 5
```

:::warning
Du kannst NEAREST mit folgenden Befehlen verschachteln: AROUND, IF, NEAREST, ALL\_PLAYERS

Wenn du das tust, ändern sich der Trenner und die Platzhalter je nach Verschachtelungsstufe.\

Trenner des Basisbefehls: `<+>`

erster verschachtelter Befehl: `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
Basis-Platzhalter: %around\_target%

erster verschachtelter Befehl: %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### OPMESSAGE

* Info: Sendet eine Nachricht an Online-OPs und die Konsole
* Befehlseinstellung:
  * `{text}`: Text, der gesendet wird
* Beispiel:

```yaml
- OPMESSAGE This is my debug message
```

### PARTICLE

* Info: Lässt Partikel an der Position des Spielers/Ziels erscheinen. [Partikelliste](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html)

* Befehlseinstellungen:
  * `{type}`: Die Art des Partikels (GROSSBUCHSTABEN)
  * `{quantity}`: Die Anzahl der Partikel, die erscheinen
  * `{offset}`: Der Radius des Bereichs, in dem die Partikel an der Position des Spielers/Ziels erscheinen können
  * `{speed}`: Wie schnell oder wie groß die Partikel sind
* Beispiel:

```yaml
- PARTICLE FIREWORKS_SPARK 10 0.1 0.5
```

### REGAIN\_HEALTH

* Info: Gibt dir eine bestimmte Menge HP
* Befehlseinstellung:
  * `{amount}`: Die Menge an HP, die du erhalten möchtest
   * Unterstützt negative Werte, falls du "echten Schaden" verursachen möchtest. 
* Beispiel:

```yaml
- REGAIN_HEALTH 10
- REGAIN_HEALTH -5
```

### REMOVE\_BURN

* Info: Löscht das Feuer, in dem du brennst
* Keine Befehlseinstellung
* Beispiel:

```yaml
- REMOVE_BURN
```

### REMOVE\_GLOW

* Info: Entfernt den Leuchteffekt einer bestimmten Farbe vom Spieler | Ziel.
* Befehlseinstellung:
 * `[color]`: (Optional) (Standard = WHITE) Die Farbe, die entfernt werden soll. [Farbreferenz](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/ChatColor.html)
* Beispiel:

```yaml
- REMOVE_GLOW BLACK
```

### SET\_GLOW

* Info: Fügt dem Spieler | Ziel den Leuchteffekt mit einer bestimmten Farbe hinzu.
* Befehlseinstellung:
 * `[color]`: (Optional) (Standard = WHITE) Die Farbe, die entfernt werden soll. [Farbreferenz](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/ChatColor.html)
* Beispiel:

```yaml
- SET_GLOW BLACK
```

:::info
Kompatibel mit dem Plugin TAB über -> %score\_cmd-glow%
:::

### SET\_HEALTH

* Info: Setzt deine Gesundheit auf eine bestimmte Menge
* Befehlseinstellung:
  * `{amount}`: Die Menge an Gesundheit, auf die sie gesetzt werden soll
* Beispiel:

```yaml
SET_HEALTH 10
```

### SET\_PITCH

* Info: Zwingt den Spieler, in eine bestimmte Pitch-Position zu blicken (-90/90 Grad, Richtung oben/unten)
* Befehlseinstellungen:
  * `{pitch_number}`: Die Zahl, die du eingeben möchtest. Platzhalter funktionieren ebenfalls
  * `{keepVelocity}`: Ermöglicht es, die Geschwindigkeit des Spielers beizubehalten
* Beispiel:

```yaml
- SET_PITCH 0 false
- SET_PITCH %target_pitch% false
```

### SET\_YAW

* Info: Zwingt den Spieler, in eine bestimmte Yaw-Position zu blicken (360 Grad, Richtung links/rechts)
* Befehlseinstellungen:
  * `{yaw_number}`: Die Zahl, die du eingeben möchtest. Platzhalter funktionieren ebenfalls
  * `{keepVelocity}`: Ermöglicht es, die Geschwindigkeit des Spielers beizubehalten
* Beispiel:

```yaml
- SET_YAW 10 false
```

### SPIN

* Info: Lässt das Ziel rotieren
* Befehlseinstellungen:
  * `{duration ticks}`: Die Dauer der Rotation
  * `{velocity}`: Die Geschwindigkeit der Rotation
* Beispiel:

```yaml
- SPIN 20 1
```

:::info
F: Wie friere ich Ziele/Spieler/Mobs ein?

A: Führe zum Beispiel **`SPIN {duration} 0`** aus
:::

### STEAL

* Info: Stiehlt ein Item aus dem Inventar des Ziels
* Befehlseinstellungen:
  * `{slot}`: -1 für die Haupthand. Siehe die Slot-Referenz unten.
  * `[remove item]`: (Optional) (Standard = true)
* Beispiel:

```yaml
- STEAL 10
```

![](https://media.ssomar.com/m/docs-img-slots-info.png)

### STRIKELIGHTNING

* Info: Lässt einen Blitz ohne Schaden bei dem einschlagen, der den Befehl ausführt
* Keine Befehlseinstellung 
* Beispiel:

```yaml
- STRIKELIGHTNING
```

:::info
Das ist nicht dasselbe wie der Smite-Befehl von Essential. Wenn du deine Ziele mit Smite treffen möchtest, setze ihn in die Target-Befehle oder Entity-Befehle, zusammen mit den passenden Aktivatoren wie zum Beispiel `PLAYER_CLICK_ON_PLAYER`.
:::

### STUN ENABLE/DISABLE

* Info: Aktiviert oder deaktiviert den Stun für den Spieler (er legt dich hin und hindert dich daran, deine Kamera zu bewegen)
* Befehle:
  * STUN\_ENABLE
  * STUN\_DISABLE
* Beispiel:

```yaml
- STUN_ENABLE
- DELAY 5
- STUN_DISABLE
```

### TELEPORT

* Info: Teleportiert den Spieler/die Entity an die Position
* Befehlseinstellungen:
  * `{world}`: Die Welt der Position, zu der teleportiert wird
  * `{x}`: Die Koordinate x der Position, zu der teleportiert wird.
  * `{y}`: Die Koordinate y der Position, zu der teleportiert wird.
  * `{z}`: Die Koordinate z der Position, zu der teleportiert wird.
  * `[pitch]`: (Optional) (Standard = der Pitch des Spielers bleibt erhalten) Pitch der Teleportationsposition
  * `[yaw]`: (Optional) (Standard = der Yaw des Spielers bleibt erhalten) Yaw der Teleportationsposition
  * `[keepVelocity]`: (Optional) (Standard = true) Erlaubt, die Geschwindigkeit des Spielers nicht zu stoppen.
* Beispiel:

```yaml
- TELEPORT ApocalypseWorld 70 70 70
```

### TELEPORT\_ON\_CURSOR

* Info: Teleportiert dich zu deinem Cursor
* Befehlseinstellungen:
  * `{range}`: Wie weit du dich teleportieren möchtest
  * `{acceptAir}`: Um dich auch in der Luft teleportieren zu können, musst du dies auf true setzen
* Beispiel:

```yaml
- TELEPORT_ON_CURSOR 8 true
```

### TRANSFER\_ITEM

* Info: Verschiebt ein Item im Inventar
* Befehlseinstellungen:
  * `{slot of launcher}`: Slot des Items, das verschoben wird
  * `{slot of receiver}`: Slot, in dem das Item landen wird
  ![](https://media.ssomar.com/m/docs-img-slots-info.png)
* Beispiel:

```yaml
- TRANSFER_ITEM 38 40
```

### UNSAFE\_TELEPORT\_ON\_CURSOR

* Info: Teleportiert dich zu deinem Cursor, ohne zu berücksichtigen, dass du an unmöglichen Orten landen könntest
* Befehlseinstellung:
  * `[maxRange]`: (Optional) (Standard = 200) Wie weit du dich teleportieren möchtest
* Beispiel:

```yaml
UNSAFE_TELEPORT_ON_CURSOR 20
```

### WORLD\_TELEPORT

* Info: Teleportiert in eine Welt an derselben Position
* Befehlseinstellung:
 * `{world}`: Der Name der Welt, in die du den Spieler/das Ziel teleportieren möchtest.
* Beispiel:

```yaml
- WORLD_TELEPORT spawn_end
```

## Animationsbefehle

* BREAK\_BOOTS\_ANIMATION
* BREAK\_CHESTPLATE\_ANIMATION
* BREAK\_HELMET\_ANIMATION
* BREAK\_LEGGINGS\_ANIMATION
* BREAK\_MAIN\_HAND\_ANIMATION
* BREAK\_OFF\_HAND\_ANIMATION
* HURT\_ANIMATION
* SWING\_MAIN\_HAND
* SWING\_OFF\_HAND
* TELEPORT\_ENDER\_ANIMATION
* TOTEM\_ANIMATION
