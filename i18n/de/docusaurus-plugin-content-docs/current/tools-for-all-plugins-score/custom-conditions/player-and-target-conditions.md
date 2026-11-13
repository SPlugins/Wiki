---
description: >-
  Bedingungen für Spieler und Ziele in ExecutableItems: Alle Spieler- und
  Ziel-Bedingungen mit Beispielen, Optionen und Fehlermeldungen im Überblick.
source_hash: 5b9669d43610ab52
translated_at: '2026-11-13T17:32:33.554Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Spieler- & Ziel-Bedingungen

## Bedingungs-Einstellungen
Alle Bedingungen sind gleich aufgebaut, du hast:
* `{theCondition}`
* `{theCondition}Msg`: Die Nachricht, die gesendet wird, wenn die Bedingung ungültig ist (ohne sie wird eine Standard-Fehlermeldung gesendet, außer beim LOOP-Aktivator von ExecutableItems)
* `{theCondition}Cancel`: Ob das Event abgebrochen werden soll, wenn die Bedingung ungültig ist
* `{theCondition}Cmds`: Der/die Befehl(e), der/die ausgeführt werden, wenn die Bedingung ungültig ist
* Beispiel:

```yaml
playerConditions:
    ifSneaking: true
    ifSneakingMsg: "&cMy custom error message here"
    ifSneakingCancel: true
    ifSneakingCmds:
    - kill %player%
```

:::info
Bei numerischen Bedingungen kannst du zwei Bedingungen gleichzeitig zuweisen.
Beispiel: 
„Ich möchte eine Bedingung erstellen, die nur aktiviert wird, wenn der Wert größer als 50, aber kleiner als 250 ist"
`{theCondition}: 50 < CONDITION < 250`
:::

:::info
Du möchtest Spieler-Bedingungen hinzufügen?

Füge dann im Aktivator-Bereich playerConditions hinzu.

Und für die Bedingungen des Ziels ist es natürlich targetConditions.
:::

:::info
**INFO GIFS:** Der Aktivator, der in den GIFs verwendet wird, um die Funktionsweise jeder Bedingung zu zeigen, ist der LOOP-Aktivator. Deshalb erscheint die Fehlermeldung der Bedingung mehrfach.
:::

### ifSneaking - Not

* Beschreibung: Prüft, ob der Spieler schleicht
* Beispiel:

```yaml
playerConditions:
    ifSneaking: false
    ifSneakingMsg: '' #<- Here is where you will add the custom message.
    ifNotSneaking: true
    ifNotSneakingMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Spieler (nicht) schleicht, wird der Aktivator aktiviert.
  * Wenn der Spieler fliegt und durch Drücken der Schleichen-Taste sinkt, wird der Aktivator aktiviert (bei ifSneaking).
* Erforderlich: NEIN (Standard: false)

![](https://media.ssomar.com/m/docs-img-giphy-sygm0wxk3y1c0u4u3d.gif)

:::danger
Aktiviere ifNotSneaking nicht, wenn die Bedingung ifSneaking aktiviert ist, da es keinen Sinn ergibt, beide zu aktivieren
:::

### ifSprinting - Not

* Beschreibung: Prüft, ob der Spieler sprintet
* Beispiel:

```yaml
playerConditions:
    ifSprinting: false
    ifSprintingMsg: '' #<- Here is where you will add the custom message.
    ifNotSprinting: false
    ifNotSprintingMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Spieler (nicht) sprintet, wird der Aktivator aktiviert.
* Erforderlich: NEIN (Standard: false)

### ifFlying - Not

* Beschreibung: Prüft, ob der Spieler fliegt
* Beispiel:

```yaml
playerConditions:
    ifFlying: false
    ifFlyingMsg: '' #<- Here is where you will add the custom message.
    ifNotFlying: false
    ifNotFlyingMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Spieler den Flugmodus durch Doppelklicken der Sprungtaste umschaltet und (nicht) fliegt, wird der Aktivator aktiviert.
* Erforderlich: NEIN (Standard: false)

![](https://media.ssomar.com/m/docs-img-giphy-gqp59l3zk78sas94uo.gif)

### ifBlocking - Not

* Beschreibung: Prüft, ob der Spieler einen Schild hält und mit der rechten Maustaste darauf klickt (blockt)
* Beispiel:

```yaml
playerConditions:
    ifBlockng: false
    ifBlockingMsg: '' #<- Here is where you will add the custom message.
    ifNotBlockng: false
    ifNotBlockingMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Spieler (nicht) mit einem Schild blockt, wird der Aktivator aktiviert
* Erforderlich: NEIN (Standard: false)

![](https://media.ssomar.com/m/docs-img-giphy-xihlvwpznviu4c7786.gif)

### ifGliding - Not

* Beschreibung: Prüft, ob der Spieler gleitet
* Beispiel:

```yaml
playerConditions:
    ifGliding: false
    ifGlidingMsg: '' #<- Here is where you will add the custom message.
    ifNotGliding: false
    ifNotGlidingMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Spieler (nicht) mit einer Elytra in der Luft gleitet, wird der Aktivator aktiviert.
* Erforderlich: NEIN (Standard: false)

![](https://media.ssomar.com/m/docs-img-giphy-f3px7d1awbudmrj0va.gif)

### ifSwimming - Not

* Beschreibung: Prüft, ob der Spieler schwimmt (1.13 Aquatic Update)
* Beispiel:

```yaml
playerConditions:
    ifSwimming: false
    ifSwimmingMsg: '' #<- Here is where you will add the custom message.
    ifNotSwimming: false
    ifNotSwimmingMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Spieler ins Wasser springt und in der Freistil-Position zu schwimmen beginnt, wird der Aktivator aktiviert.
* Erforderlich: NEIN (Standard: false)

![](https://media.ssomar.com/m/docs-img-giphy-1cfambqwl4j9mmrpbg.gif)

### ifStunned - Not

* Beschreibung: Prüft, ob der Spieler betäubt ist
* Beispiel:

```yaml
playerConditions:
    ifStunned: false
    ifStunnedMsg: '' #<- Here is where you will add the custom message.
    ifNotStunned: false
    ifNotStunnedMsg: ''
```

:::info
Du kannst einen Spieler betäuben, indem du den benutzerdefinierten Spieler-Befehl **STUN\_ENABLE** ausführst 
:::

```
// Example of a stun of 5 seconds
- STUN_ENABLE
- DELAY 5
- STUN_DISABLE
```

* Erforderlich: NEIN (Standard: false)

### ifIsOnFire - Not

* Beschreibung: Prüft, ob der Spieler brennt
* Beispiel:

```yaml
playerConditions:
    ifIsOnFire: false
    ifIsOnFireMsg: '' #<- Here is where you will add the custom message.
    ifIsNotOnFire: false
    ifIsNotOnFireMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Spieler (nicht) brennt, weil er in Lava gefallen ist oder durch Feuer läuft, wird der Aktivator aktiviert
* Erforderlich: NEIN (Standard: false)

### ifIsInTheAir - Not

* Beschreibung: Prüft, ob der Spieler in der Luft ist.
* Beispiel:

```yaml
playerConditions:
    ifIsInTheAir: false
    ifIsInTheAirMsg: '' #<- Here is where you will add the custom message.
    ifIsNotInTheAir: false
    ifIsNotInTheAirMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Spieler (keine) Blöcke unter den Füßen hat, wird der Aktivator aktiviert.
* Erforderlich: NEIN (Standard: false)

![Es wird der Block unter deinen Füßen geprüft. Auch Stufen werden korrekt geprüft.](https://media.ssomar.com/m/docs-img-giphy-djjtjpzl1pmkbjnqvu.gif)

### ifLineOfSight

* Beschreibung: Prüft, ob der Spieler Sichtlinie zu einem Lebewesen hat (innerhalb von 50 Blöcken).
* Beispiel:

```yaml
playerConditions:
    ifLineOfSight: true
    ifLineOfSightMsg: ''
```

* Beispielsituationen:
  * Wenn der Spieler direkt auf einen Mob oder einen anderen Spieler innerhalb von 50 Blöcken schaut, wird der Aktivator aktiviert.
  * Nützlich, um Items zu erstellen, die nur funktionieren, wenn man auf ein Lebewesen zielt.
* Erforderlich: NEIN (Standard: false)

:::info
Diese Bedingung erfordert die Server-Version **1.14+**.
:::

### ifPlayerMustBeOnHisTown

* **UNTERSTÜTZT FOLGENDE PLUGINS:**
  * Towny
* Beschreibung: Prüft, ob sich der Spieler in seiner Stadt befindet.
* Beispiel:

```yaml
playerConditions:
    ifPlayerMustBeOnHisTown: true
    ifPlayerMustBeOnHisTownMsg: '' #<- Here is where you will add the custom message.
```

* Erforderlich: NEIN (Standard: false)

### ifPlayerMustBeOnHisClaim

* **UNTERSTÜTZT FOLGENDE PLUGINS:**
  * GriefPrevention
  * Lands
  * GriefDefender
  * Residence
* Beschreibung: Prüft, ob sich der Spieler in einem Claim befindet, für den er eine Berechtigung hat.
* Beispiel:

```yaml
playerConditions:
    ifPlayerMustBeOnHisClaim: true
    ifPlayerMustBeOnHisClaimMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn sich der Spieler in einem Claim befindet, der ihm gehört, wird der Aktivator aktiviert.
  * Wenn sich der Spieler in einem Claim befindet, der ihm nicht gehört, für den er aber eine Berechtigung hat, wird der Aktivator aktiviert.
* Erforderlich: NEIN (Standard: false)

### ifPlayerMustBeOnHisClaimOrWilderness

* **UNTERSTÜTZT FOLGENDE PLUGINS:**
  * GriefPrevention (Gibt gültig zurück, wenn sich der Spieler in einem öffentlichen Claim von GriefPrevention befindet)
  * Lands
  * GriefDefender
  * Residence
* Beschreibung: Prüft, ob sich der Spieler in einem Claim befindet, für den er eine Berechtigung hat, oder in der Wildnis.
* Beispiel:

```yaml
playerConditions:
    ifPlayerMustBeOnHisClaimOrWilderness: true
    ifPlayerMustBeOnHisClaimOrWildernessMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn sich der Spieler in einem Claim befindet, der ihm gehört, wird der Aktivator aktiviert.
  * Wenn sich der Spieler in einem Claim befindet, der ihm nicht gehört, für den er aber eine Berechtigung hat, wird der Aktivator aktiviert.
  * Wenn sich der Spieler in der Wildnis befindet, wird der Aktivator aktiviert.
* Erforderlich: NEIN (Standard: false)

### ifPlayerMustBeOnHisIsland

* Beschreibung: Prüft, ob sich der Spieler auf seiner Insel befindet.
* **Kompatible Plugins:**
  * **IridiumSkyblock**
  * **SuperiorSkyblock2**
  * **BentoBox**
* Beispiel:

```yaml
playerConditions:
    ifPlayerMustBeOnHisIsland: true
    ifPlayerMustBeOnHisIslandMsg: '' #<- Here is where you will add the custom message
```

* Beispielsituationen:
  * Wenn sich der Spieler auf seiner Insel befindet, wird der Aktivator aktiviert.
* Erforderlich: NEIN (Standard: false)

### ifPlayerMustBeOnHisPlot

* **UNTERSTÜTZT FOLGENDE PLUGINS:**
  * PlotSquared
* Beschreibung: Prüft, ob sich der Spieler auf einem Plot befindet, für den er eine Berechtigung hat.
* Beispiel:

```yaml
playerConditions:
    ifPlayerMustBeOnHisPlot: true
    ifPlayerMustBeOnHisPlotMsg: '' #<- Here is where you will add the custom message
```

* Erforderlich: NEIN (Standard: false)

### ifCursorDistance

* Beschreibung: Prüft, ob die Richtung, in die der Spieler schaut, frei oder blockiert ist
* Beispiel:

```yaml
 playerConditions:
  ifCursorDistance: '>5'
  ifCursorDistanceMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Bei `">5"` wird der Aktivator aktiviert, solange jenseits von 5 Blöcken vor dir Luft ist
  * Bei `"<5"` wird der Aktivator nicht aktiviert, wenn 5 Blöcke vor dir Luftblöcke sind
* Erforderlich: NEIN

![](https://media.ssomar.com/m/docs-img-giphy-mke7zyoe63jbpg2239.gif)

### ifLightLevel <a href="#iflightlevel" id="iflightlevel"></a>

* Beschreibung: Prüft, ob sich der Spieler an einem Ort mit der richtigen Lichtstufe befindet
* Beispiel:

```yaml
playerConditions:
  ifLightLevel: ==5
  ifLightLevelMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Wert `<5` ist, wird der Aktivator nur aktiviert, wenn die Lichtstufe an der Position des Spielers unter 5 liegt
  * Wenn der Wert `<=5` ist, wird der Aktivator nur aktiviert, wenn die Lichtstufe an der Position des Spielers 5 oder niedriger ist.
  * Wenn der Wert `==13` ist, wird der Aktivator nur aktiviert, wenn die Lichtstufe an der Position des Spielers 13 beträgt.
  * Wenn der Wert `>5` ist, wird der Aktivator nur aktiviert, wenn die Lichtstufe an der Position des Spielers über 5 liegt.
  * Wenn der Wert `>=5` ist, wird der Aktivator nur aktiviert, wenn die Lichtstufe an der Position des Spielers 5 oder höher ist.
* Erforderlich: NEIN
* Mehr Infos: Du kannst die Fehlermeldung bearbeiten, indem du dies in die Datei einfügst: `ifLightLevelMsg: "&4&lError you need...."` oder im Spiel.

Wenn der Wert `==13` ist, wird der Aktivator nur aktiviert, wenn die Lichtstufe an der Position des Spielers 13 beträgt. 

![Wenn der Wert ==13 ist, wird der Aktivator nur aktiviert, wenn die Lichtstufe an der Position des Spielers 13 beträgt. 
Die Nachricht im Chat führt ein SENDMESSAGE %player\_light\_level% aus, um die Lichtstufe an meiner Position anzuzeigen](https://media.ssomar.com/m/docs-img-giphy-krdtyjimugaf88pewk.gif)

### ifPlayerExp

* Beschreibung: Prüft, ob der Spieler die angegebene Menge an Erfahrungspunkten hat.
* Beispiel:

```yaml
playerConditions:
    ifPlayerExp: <8
    ifPlayerExpMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Wert `<120` ist, wird der Aktivator nur aktiviert, wenn die Erfahrungspunkte des Spielers unter 120 liegen
  * Wenn der Wert `<=96` ist, wird der Aktivator nur aktiviert, wenn die Erfahrungspunkte des Spielers 96 oder weniger betragen.
  * Wenn der Wert `==13` ist, wird der Aktivator nur aktiviert, wenn die Erfahrungspunkte des Spielers 13 betragen.
  * Wenn der Wert `>696` ist, wird der Aktivator nur aktiviert, wenn die Erfahrungspunkte des Spielers über 696 liegen.
  * Wenn der Wert `>=45` ist, wird der Aktivator nur aktiviert, wenn die Erfahrungspunkte des Spielers 45 oder mehr betragen.
* Erforderlich: NEIN

### ifPlayerLevel

* Beschreibung: Prüft, ob der Spieler die angegebene Anzahl an Erfahrungsleveln hat.
* Beispiel:

```yaml
playerConditions:
    ifPlayerLevel: <76
    ifPlayerLevelMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Wert `<700` ist, wird der Aktivator nur aktiviert, wenn die Erfahrungspunkte des Spielers unter 700 liegen
  * Wenn der Wert `<=1296` ist, wird der Aktivator nur aktiviert, wenn die Erfahrungspunkte des Spielers 1296 oder weniger betragen.
  * Wenn der Wert `==153` ist, wird der Aktivator nur aktiviert, wenn die Erfahrungspunkte des Spielers 5 betragen.
  * Wenn der Wert `>420` ist, wird der Aktivator nur aktiviert, wenn die Erfahrungspunkte des Spielers über 420 liegen.
  * Wenn der Wert `>=99` ist, wird der Aktivator nur aktiviert, wenn die Erfahrungspunkte des Spielers 99 oder mehr betragen.
* Erforderlich: NEIN

### ifPlayerFoodLevel

* Beschreibung: Prüft, ob der Spieler die angegebene Menge an Nahrung hat
* Beispiel:

```yaml
playerConditions:
    ifPlayerFoodLevel: '>=12'
    ifPlayerFoodLevelMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Wert `<10` ist, wird der Aktivator nur aktiviert, wenn die Nahrung des Spielers unter 10 liegt
  * Wenn der Wert `<=10` ist, wird der Aktivator nur aktiviert, wenn die Nahrung des Spielers 10 oder weniger beträgt.
  * Wenn der Wert `==10` ist, wird der Aktivator nur aktiviert, wenn die Nahrung des Spielers 10 beträgt.
  * Wenn der Wert `>10` ist, wird der Aktivator nur aktiviert, wenn die Nahrung des Spielers über 10 liegt.
  * Wenn der Wert `>=10` ist, wird der Aktivator nur aktiviert, wenn die Nahrung des Spielers 10 oder mehr beträgt.
* Erforderlich: NEIN

### ifPlayerHealth

* Beschreibung: Prüft, ob der Spieler die angegebene Menge an Gesundheit hat
* Beispiel:

```yaml
playerConditions:
    ifPlayerHealth: ==20
    ifPlayerHealthMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Wert `<10` ist, wird der Aktivator nur aktiviert, wenn die Gesundheit des Spielers unter 10 liegt
  * Wenn der Wert `<=10` ist, wird der Aktivator nur aktiviert, wenn die Gesundheit des Spielers 10 oder weniger beträgt.
  * Wenn der Wert `==10` ist, wird der Aktivator nur aktiviert, wenn die Gesundheit des Spielers 20 beträgt.
  * Wenn der Wert `>10` ist, wird der Aktivator nur aktiviert, wenn die Gesundheit des Spielers über 10 liegt.
  * Wenn der Wert `>=10` ist, wird der Aktivator nur aktiviert, wenn die Gesundheit des Spielers 10 oder mehr beträgt.
* Erforderlich: NEIN

![Demo der Gesundheits-Bedingung](https://media.ssomar.com/m/docs-img-giphy-lmfxm0llvaeufjsj80.gif)

_Wenn der Wert `<=10` ist, wird der Aktivator nur aktiviert, wenn die Gesundheit des Spielers 10 oder weniger beträgt._

### ifPlayerSpeed

* Beschreibung: Prüft den Betrag des Geschwindigkeitsvektors des Spielers (Bewegungsgeschwindigkeit).
* Beispiel:

```yaml
playerConditions:
    ifPlayerSpeed: '>=0.1'
    ifPlayerSpeedMsg: ''
```

* Beispielsituationen:
  * Wenn der Wert `>=0.1` ist, wird der Aktivator nur aktiviert, wenn sich der Spieler bewegt.
  * Wenn der Wert `>=0.3` ist, wird der Aktivator nur aktiviert, wenn der Spieler sprintet oder sich schnell bewegt.
  * Wenn der Wert `==0` ist, wird der Aktivator nur aktiviert, wenn der Spieler stillsteht.
* Erforderlich: NEIN

### ifPosX

* Beschreibung: Prüft, ob sich der Spieler auf dem angegebenen X-Level befindet.
* Beispiel:

```yaml
playerConditions:
    ifPosX: <76
    ifPosXMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Wert `<700` ist, wird der Aktivator nur aktiviert, wenn der X-Positionswert des Spielers unter 700 liegt
  * Wenn der Wert `<=1296` ist, wird der Aktivator nur aktiviert, wenn der X-Positionswert des Spielers 1296 oder weniger beträgt.
  * Wenn der Wert `==153` ist, wird der Aktivator nur aktiviert, wenn der X-Positionswert des Spielers 5 beträgt.
  * Wenn der Wert `>420` ist, wird der Aktivator nur aktiviert, wenn der X-Positionswert des Spielers über 420 liegt.
  * Wenn der Wert `>=99` ist, wird der Aktivator nur aktiviert, wenn der X-Positionswert des Spielers 99 oder mehr beträgt.
* Erforderlich: NEIN

### ifPosY

* Beschreibung: Prüft, ob sich der Spieler auf dem angegebenen Y-Level befindet.
* Beispiel:

```yaml
playerConditions:
    ifPosY: <76
    ifPosYMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Wert `<700` ist, wird der Aktivator nur aktiviert, wenn der Y-Positionswert des Spielers unter 700 liegt
  * Wenn der Wert `<=1296` ist, wird der Aktivator nur aktiviert, wenn der Y-Positionswert des Spielers 1296 oder weniger beträgt.
  * Wenn der Wert `==153` ist, wird der Aktivator nur aktiviert, wenn der Y-Positionswert des Spielers 5 beträgt.
  * Wenn der Wert `>420` ist, wird der Aktivator nur aktiviert, wenn der Y-Positionswert des Spielers über 420 liegt.
  * Wenn der Wert `>=99` ist, wird der Aktivator nur aktiviert, wenn der Y-Positionswert des Spielers 99 oder mehr beträgt.
* Erforderlich: NEIN

### ifPosZ

* Beschreibung: Prüft, ob sich der Spieler auf dem angegebenen Z-Level befindet.
* Beispiel:

```yaml
playerConditions:
    ifPosZ: <76
    ifPosZMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Wert `<700` ist, wird der Aktivator nur aktiviert, wenn der Z-Positionswert des Spielers unter 700 liegt
  * Wenn der Wert `<=1296` ist, wird der Aktivator nur aktiviert, wenn der Z-Positionswert des Spielers 1296 oder weniger beträgt.
  * Wenn der Wert `==153` ist, wird der Aktivator nur aktiviert, wenn der Z-Positionswert des Spielers 5 beträgt.
  * Wenn der Wert `>420` ist, wird der Aktivator nur aktiviert, wenn der Z-Positionswert des Spielers über 420 liegt.
  * Wenn der Wert `>=99` ist, wird der Aktivator nur aktiviert, wenn der Z-Positionswert des Spielers 99 oder mehr beträgt.
* Erforderlich: NEIN

### ifNearbyEntityCount

* Beschreibung: Prüft die Anzahl der Entities in einem Radius von 10 Blöcken um den Spieler.
* Beispiel:

```yaml
playerConditions:
    ifNearbyEntityCount: '>=3'
    ifNearbyEntityCountMsg: ''
```

* Beispielsituationen:
  * Wenn der Wert `>=3` ist, wird der Aktivator nur aktiviert, wenn sich mindestens 3 Entities in der Nähe des Spielers befinden.
  * Wenn der Wert `==0` ist, wird der Aktivator nur aktiviert, wenn der Spieler allein ist und keine Entities in der Nähe sind.
  * Zählt alle Entity-Typen (Mobs, Spieler, fallengelassene Items usw.).
* Erforderlich: NEIN

### ifNearbyPlayerCount

* Beschreibung: Prüft die Anzahl der Spieler in einem Radius von 10 Blöcken um den Spieler.
* Beispiel:

```yaml
playerConditions:
    ifNearbyPlayerCount: '>=1'
    ifNearbyPlayerCountMsg: ''
```

* Beispielsituationen:
  * Wenn der Wert `>=1` ist, wird der Aktivator nur aktiviert, wenn sich mindestens 1 anderer Spieler in der Nähe befindet.
  * Wenn der Wert `==0` ist, wird der Aktivator nur aktiviert, wenn sich keine anderen Spieler innerhalb von 10 Blöcken befinden.
  * Anders als bei ifNearbyEntityCount werden hier nur Spieler gezählt, keine Mobs oder anderen Entities.
* Erforderlich: NEIN

### ifHasPermission - Not

* Beschreibung: Prüft, ob der Spieler die angegebene Berechtigung (nicht) hat.
* Beispiel:

```yaml
playerConditions:   
    ifHasPermission:
    - test.ei
    ifHasPermissionMsg: '' #<- Here is where you will add the custom message.
    ifNotHasPermission:
    - test.ei
    ifNotHasPermissionMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Spieler die Berechtigung `custom.jump.yes` hat, wird der Aktivator aktiviert. Wenn der Spieler diese Berechtigung nicht hat, wird er nicht aktiviert.
  * **In diesem GIF wird die eigentliche Bedingung nicht verwendet, um das Verhalten der Bedingung korrekt darzustellen. Wenn du diese Bedingung tatsächlich verwendest, wird dir eine spezifische Fehlermeldung angezeigt**
* Erforderlich: NEIN

:::warning
**Zum Testen ist es besser, kein OP zu sein, denn als OP hast du alle Berechtigungen**
:::

![](https://media.ssomar.com/m/docs-img-giphy-iti1b991tskaavjoy7.gif)

### ifHasTag - Not

* Beschreibung: Prüft, ob der Spieler den ausgewählten Tag hat.
* Beispiel:

```yaml
    playerConditions:
      ifHasTag:
      - thisisthenameofmytag
      ifHasTagMsg: ''
      ifNotHasTag:
      - thisisthenameofmytag
      ifNotHasTagMsg: ''
```

### ifTargetBlock - Not

* Beschreibung: Prüft, ob der Spieler den angegebenen Block (nicht) anvisiert.
* Beispiel:

```yaml
playerConditions:
    ifTargetBlock:
    - SAND
    ifTargetBlockMsg: '' #<- Here is where you will add the custom message.
    ifNotTargetBlock:
    - DIRT
    ifNotTargetBlockMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Spieler den Cursor auf Sand bewegt, wird der Aktivator aktiviert.
* Erforderlich: NEIN

![](https://media.ssomar.com/m/docs-img-giphy-hgontsuwxflzmtgxny.gif)

### ifIsInTheBlock - Not

* Beschreibung: Prüft, ob der Spieler (nicht) in einem Block steht.
* Beispiel:

```yaml
playerConditions:
    ifIsInTheBlock:
     material0:
       material: COBWEB
    ifIsInTheBlockMsg: '' #<- Here is where you will add the custom message.
    ifIsNotInTheBlock:
     material0:
       material: WATER
       tags: '{level:0}'
    ifIsNotInTheBlockMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Spieler in einem COBWEB steht (Kopf oder Füße), wird der Aktivator aktiviert.
  * Solange der Spieler nicht mehr als 1 Block höher als der Block ist, in dem er sich befindet, wird der Aktivator aktiviert
* Erforderlich: NEIN (Standard: false)

Für Tag-Spezifikationen siehe diese Liste:

[https://minecraft.fandom.com/wiki/Block_states](https://minecraft.fandom.com/wiki/Block_states)

### ifIsOnTheBlock - Not

* Beschreibung: Prüft, ob der Spieler (nicht) auf einem Block steht.
* Beispiel:

```yaml
playerConditions:
    ifIsOnTheBlock:
        blocks:
        - EXECUTABLEBLOCKS:FREE_HUT
        - DIAMOND_BLOCK
```

* Beispielsituationen:
  * Wenn der Spieler Stein unter den Füßen hat, wird der Aktivator aktiviert.
  * Solange der Spieler nicht mehr als 1 Block höher als der Block ist, auf dem er steht, wird der Aktivator aktiviert
* Erforderlich: NEIN (Standard: false)

![](https://media.ssomar.com/m/docs-img-giphy-774fpgzucmhox69sww.gif)

<details>

<summary>Du kannst eine Gruppe von Blöcken hinzufügen, das sind die Gruppen:</summary>

```
    ALL_CHESTS,
    ALL_FURNACES,
    ALL_PLANKS,
    ALL_LOGS,
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
    ALL_GLASS,
    ALL_STAINED_GLASS,
    ALL_SHULKER_BOXES;
```

</details>

Für Tag-Spezifikationen siehe diese Liste:

[https://minecraft.fandom.com/wiki/Block_states](https://minecraft.fandom.com/wiki/Block_states)

:::info
Es unterstützt IA- und EB-Blöcke
:::

### ifPlayerMounts - Not

* Beschreibung: Prüft, ob der Spieler die „ausgewählten Entities" (nicht) reitet
* Beispiel:

```yaml
playerConditions:
    ifPlayerMounts:
    - COW
    - SILVERFISH
    - FOX
    ifPlayerMountsMsg: '&4&l&o[ExecutableItems] &cYou must mount on a specific entity to active the activator: &6%activator% &cof this item!'
    
    ifPlayerNotMounts:
    - PIG
    ifPlayerNotMountsMsg: '&4&l&o[ExecutableItems] &cdont mount pigs'
```

### ifInBiome - Not

* Beschreibung: Prüft, ob sich der Spieler (nicht) im angegebenen Biom befindet.
* Beispiel:

```yaml
playerConditions:
    ifInBiome:
    - TAIGA
    - EXTREME_HILLS
    ifInBiomeMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInBiome:
    - EXTREME_HILLS
    ifNotInBiomeMsg: '' #<- Here is where you will add the custom message.
```

*   Beispielsituationen:

    * Wenn sich der Spieler im Birkenwald-Biom befindet und das Birkenwald-Biom in der Weltenliste der Bedingung `ifInBiome:` aufgeführt ist, wird der Aktivator aktiviert.

[Biome](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html)

* Erforderlich: NEIN

![](https://media.ssomar.com/m/docs-img-giphy-heszwx2lktnut8abdx.gif)

### ifInRegion - Not

* Beschreibung: Prüft, ob sich der Spieler (nicht) in der angegebenen Region befindet (WorldGuard-Region).
* Beispiel:

```yaml
playerConditions:
    ifInRegion:
    - area1
    ifInRegionMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInRegion:
    - mySpawnRegion
    ifNotInRegionMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn sich der Spieler in der Region „area1" befindet und die Region „area1" in der Weltenliste der Bedingung `ifInRegion:` aufgeführt ist, wird der Aktivator aktiviert.
* Erforderlich: NEIN

![](https://media.ssomar.com/m/docs-img-giphy-rn75fb0fgshrjizbce.gif)

### ifInWorld - Not

* Beschreibung: Prüft, ob sich der Spieler (nicht) in der angegebenen Welt befindet.
* Beispiel:

```yaml
playerConditions:
    ifInWorld:
    - world_nether
    ifInWorldMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInWorld:
    - world_the_end
    ifNotInWorldMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn sich der Spieler im Nether befindet und der Nether in der Weltenliste der Bedingung `ifInWorld:` aufgeführt ist, wird der Aktivator aktiviert.
* Erforderlich: NEIN

![](https://media.ssomar.com/m/docs-img-giphy-zghtf0hlk1npsywmnz.gif)

### ifPlayerHasEffect

* Beschreibung: Prüft, ob der Spieler die Effekte hat.
* Beispiel:

```yaml
playerConditions:
    ifPlayerHasEffect:
    - "SPEED:0"        <- (Format: "EFFECT:MINIMAL_REQUIRED_AMPLIFIER") 
    ifPlayerHasEffectMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Spieler Speed mit **mindestens einem Amplifier von 0** hat, wird der Aktivator aktiviert
* Liste aller Effekte: [PotionEffectType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
* Erforderlich: NEIN


### ifPlayerNotHasEffect

* Beschreibung: Prüft, ob der Spieler die Effekte nicht hat.
* Beispiel:

```yaml
playerConditions:
    ifPlayerNotHasEffect:
    - SPEED:2 # if the player has speed 1 = okay, but if has speed 2 or above, invalid
    ifPlayerNotHasEffectMsg: '&4&l&o[ExecutableItems] &cYou have an effect that you shouldn''t have to active the activator: &6%activator% &cof this item!'
    ifPlayerNotHasEffectCE: false
```

### ifCanBreakTargetedBlock

* Beschreibung: Prüft, ob der Spieler den anvisierten Block abbauen kann. Wenn der Aktivator einen Block hat (Block abbauen, Block platzieren, auf einen Block klicken …), wird dieser Block geprüft, andernfalls der Block, auf den der Spieler schaut (maximal 5 Blöcke).
* Beispiel:

```yaml
playerConditions:
    ifCanBreakTargetedBlock: true
```

:::info
Unterstützt GriefPrevention, IridiumSkyblock, SuperiorSkyblock, BentoBox, Lands, Worldguard, Towny, ProtectionStones; Residence
:::

### ifPlayerHasEffectEquals

* Beschreibung: Prüft, ob der Spieler die Effekte hat. **MUSS DEN EXAKTEN AMPLIFIER HABEN**
* Beispiel:

```yaml
playerConditions:
    ifPlayerHasEffectEquals:
    - "SPEED:1"        #<- (Format: "EFFECT:REQUIRED_AMPLIFIER") 
    ifPlayerHasEffectEqualsMsg: '' #<- Here is where you will add the custom message.
```

* Beispielsituationen:
  * Wenn der Spieler Speed mit **einem Amplifier von 1** hat, wird der Aktivator aktiviert
* Liste aller Effekte: [PotionEffectType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
* Erforderlich: NEIN


### ifPlayerHasExecutableItems - Not

* Beschreibung: Prüft, ob der Spieler die angegebenen ExecutableItems (nicht) hat.
* Beispiel:

```yaml
playerConditions:
      ifHasExecutableItems:
        condition1:
          multi-choices:
            '1':
              executableItem: test1
              amount: 1
              detailedSlots:
              - 38
            '2':
              executableItem: test2
              amount: 1
              detailedSlots:
              - 38
            '3':
              executableItem: test3
              amount: 1
              detailedSlots:
              - 38
        condition2:
          executableItem: ddx
          amount: 1
          detailedSlots:
          - 40
      ifHasExecutableItemsMsg: war
      ifHasNotExecutableItems:
        hasExecutableItem0:
          executableItem: Leto2025_Srdcova10
          amount: 1
          detailedSlots: []
      ifHasNotExecutableItemsMsg: famine
```

* Das obige Beispiel funktioniert so. 
  * Du musst ein EI-Item mit der ID „test1", „test2" oder „test3" in Slot 38 haben, damit der Aktivator ausgeführt wird
  * Du musst ein EI-Item mit der ID „ddx" in Slot 40 haben
* Erforderlich: NEIN

![](https://media.ssomar.com/m/docs-img-imgur-kaww8n0.png)

:::info
Kopiere den Index des Beispiels korrekt: Einige Leute haben den Support gefragt, und keiner von ihnen hat das Format korrekt kopiert.
:::

### ifPlayerHasItem - Not

* Beschreibung: Prüft, ob der Spieler bestimmte Items hat
* Beispiel:

```yaml
playerConditions:
    ifHasItems:
        condition1:
          multi-choices:
            '1':
              material: DIAMOND_HELMET
              amount: 1
              detailedSlots:
              - 39
            '2':
              material: IRON_HELMET
              amount: 1
              detailedSlots:
              - 39
        condition2:
          material: DIAMOND_CHESTPLATE
          amount: 1
          detailedSlots:
          - 38
    ifHasItemMsg: '' #<- Here is where you will add the custom message.
    
    ifHasNotItems:
        hasItem0:
          material: STONE
          amount: 32
          detailedSlots:
          - -1 #<- -1 means main hand
    ifHasNotItemMsg: '&cYou should not have more than 32 stones in your main hand !'
```

* Beispielsituationen:
  * Wenn sich der Diamanthelm in Slot 39 befindet, wird der Aktivator aktiviert
* Erforderlich: NEIN
