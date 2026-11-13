---
description: >-
  Lerne, wie du mit Variablen, zwei Aktivatoren und Cooldowns einen
  Ein-/Aus-Schalter als Item erstellst. Anleitung für ExecutableItems Premium.
source_hash: 739c8a7115be416e
translated_at: '2026-11-13T17:28:03.864Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Ein-/Aus-Schalter

## Voraussetzungen+

* ExecutableItems **Premium**

## HINWEIS: ERSTELLE ZUERST 2 AKTIVATOREN.

## Erster Aktivator

### Eine Variable erstellen

* Es muss eine Variable erstellt werden, damit wir eine Kennung haben, ob der Schalter ein- oder ausgeschaltet ist

![Du klickst auf dieses Icon, um den Variablen-Editor zu öffnen](https://media.ssomar.com/m/docs-img-imgur-nrkkixb.png)

![Du erstellst im Grunde einfach eine Variable](https://media.ssomar.com/m/docs-img-imgur-jubywre.png)

![Für die ID gibt es nichts Besonderes. In dieser Anleitung nennen wir unsere Variable „x“](https://media.ssomar.com/m/docs-img-imgur-ua4vmpu.png)

![Es spielt keine Rolle, ob es eine Zahl oder ein String ist](https://media.ssomar.com/m/docs-img-imgur-nut1h4h.png)

![In diesem Tutorial verwenden wir den Wert 0](https://media.ssomar.com/m/docs-img-imgur-bj4cpf7.png)

### Erstelle dein Item und füge einen Aktivator hinzu

* In diesem Fall ist es ein PLAYER\_ALL\_CLICK

![](https://media.ssomar.com/m/docs-img-image-94.png)

### Commands

* Gib die Befehle ein, die du ausführen möchtest

### Variables Modification

![Klicke zuerst auf dieses Icon im Aktivator-Editor](https://media.ssomar.com/m/docs-img-imgur-lvcmrrl.png)

![Erstelle eine Variablenmodifikation](https://media.ssomar.com/m/docs-img-imgur-r50hlwy.png)

![Wähle die Variable aus, die wir zuvor erstellt haben](https://media.ssomar.com/m/docs-img-imgur-sksrdko.png)

![Setze den Modifikationstyp auf SET](https://media.ssomar.com/m/docs-img-imgur-bbwjzw8.png)

![Wir setzen den Wert auf einen anderen als 0, damit derselbe Aktivator nicht ein zweites Mal ausgeführt werden kann](https://media.ssomar.com/m/docs-img-imgur-av856uf.png)

### Placeholder Condition

* Das wird benötigt, um zu steuern, welcher Aktivator ausgeführt wird 

![Zuerst gehen wir zu den Bedingungen](https://media.ssomar.com/m/docs-img-image-419.png)

![Dann zu den Platzhalter-Bedingungen](https://media.ssomar.com/m/docs-img-image-303.png)

![Natürlich müssen wir eine Platzhalter-Bedingung erstellen](https://media.ssomar.com/m/docs-img-image-429.png)

![PLAYER\_STRING ist ebenfalls eine Option](https://media.ssomar.com/m/docs-img-imgur-nxuypmm.png)

![Wir verwenden den Platzhalter für die Variable, die wir erstellt haben. Verwende %var\_x\_int%, falls du noch PLAYER\_STRING verwendet hast](https://media.ssomar.com/m/docs-img-imgur-0qdthro.png)

![Wir verwenden diesen Vergleichsoperator](https://media.ssomar.com/m/docs-img-imgur-urvtgm8.png)

![Wir verwenden den Wert 0 als „Aus“-Option](https://media.ssomar.com/m/docs-img-imgur-cuorrfg.png)

### Den Cooldown des anderen Items zum Item selbst hinzufügen

* Zum Beispiel lautet die ID des EI-Items `onoff-demo`. Dann musst du zu diesem Icon gehen und den Bildern folgen.

![](https://media.ssomar.com/m/docs-img-imgur-mmhsap4.png)

![](https://media.ssomar.com/m/docs-img-imgur-anndswf.png)

![](https://media.ssomar.com/m/docs-img-imgur-q6vjclp.png)

Zum Beispiel lautet die ID des Ein-/Aus-Schalters „faker“, wähle also „faker“ aus.

![](https://media.ssomar.com/m/docs-img-imgur-x1dtqww.png)

Seit dem Release von 5.0 beginnen die Aktivator-IDs bei „activator0“ statt bei „activator1“. Wie auch immer, du solltest den zweiten Aktivator auswählen, da Aktivatoren von oben nach unten ausgeführt werden. 

:::info
Diese Option ist wichtig, denn ohne Cooldown rauscht er direkt durch den 2. Aktivator, der eigentlich den Aktivator ausschalten soll
:::

![Setze den Cooldown auf 1 oder 2. Du entscheidest](https://media.ssomar.com/m/docs-img-imgur-zv8ioie.png)

![](https://media.ssomar.com/m/docs-img-imgur-izxlfq9.png)

Es wird empfohlen, dies auf true zu setzen, wenn das Item spammbar sein soll. Ein Tick reicht aus, um das oben erwähnte Durchrauschen zu verhindern.

![](https://media.ssomar.com/m/docs-img-imgur-gb5oud0.png)

## Zweiter Aktivator

* Wir verwenden wieder **`PLAYER_ALL_CLICK`**

![](https://media.ssomar.com/m/docs-img-image-165.png)

###

### Commands

* Gib die Befehle ein, die du ausführen möchtest

### Variables Modification

![Klicke zuerst auf dieses Icon im Aktivator-Editor](https://media.ssomar.com/m/docs-img-imgur-lvcmrrl.png)

![Erstelle eine Variablenmodifikation](https://media.ssomar.com/m/docs-img-imgur-r50hlwy.png)

![Wähle die Variable aus, die wir zuvor erstellt haben](https://media.ssomar.com/m/docs-img-imgur-sksrdko.png)

![Setze den Modifikationstyp auf SET](https://media.ssomar.com/m/docs-img-imgur-bbwjzw8.png)

![Wir setzen den Wert auf einen anderen als 1, damit derselbe Aktivator nicht ein zweites Mal ausgeführt werden kann](https://media.ssomar.com/m/docs-img-imgur-0kzktpe.png)

### Placeholder Condition

* Das wird benötigt, um zu steuern, welcher Aktivator ausgeführt wird 

![Zuerst gehen wir zu den Bedingungen](https://media.ssomar.com/m/docs-img-image-419.png)

![Dann zu den Platzhalter-Bedingungen](https://media.ssomar.com/m/docs-img-image-303.png)

![Natürlich müssen wir eine Platzhalter-Bedingung erstellen](https://media.ssomar.com/m/docs-img-image-429.png)

![PLAYER\_STRING ist ebenfalls eine Option](https://media.ssomar.com/m/docs-img-imgur-nxuypmm.png)

![Wir verwenden den Platzhalter für die Variable, die wir erstellt haben. Verwende %var\_x\_int%, falls du noch PLAYER\_STRING verwendet hast](https://media.ssomar.com/m/docs-img-imgur-0qdthro.png)

![Wir verwenden diesen Vergleichsoperator](https://media.ssomar.com/m/docs-img-imgur-urvtgm8.png)

![Wir verwenden den Wert 1 als „Ein“-Option](https://media.ssomar.com/m/docs-img-imgur-bjkv5hy.png)

### Den Cooldown des anderen Items zum Item selbst hinzufügen

* Zum Beispiel lautet die ID des EI-Items `onoff-demo`. Dann musst du zu diesem Icon gehen und den Bildern folgen.

![](https://media.ssomar.com/m/docs-img-imgur-mmhsap4.png)

![](https://media.ssomar.com/m/docs-img-imgur-anndswf.png)

![](https://media.ssomar.com/m/docs-img-imgur-q6vjclp.png)

Zum Beispiel lautet die ID des Ein-/Aus-Schalters „faker“, wähle also „faker“ aus.

![](https://media.ssomar.com/m/docs-img-imgur-tfly1dt.png)

Seit dem Release von 5.0 beginnen die Aktivator-IDs bei „activator0“ statt bei „activator1“. Wie auch immer, du solltest den zweiten Aktivator auswählen, da Aktivatoren von oben nach unten ausgeführt werden. 

:::info
Diese Option ist wichtig, denn ohne Cooldown rauscht er direkt durch den 2. Aktivator, der eigentlich den Aktivator ausschalten soll
:::

![Setze den Cooldown auf 1 oder 2. Du entscheidest](https://media.ssomar.com/m/docs-img-imgur-zv8ioie.png)

![](https://media.ssomar.com/m/docs-img-imgur-izxlfq9.png)

Es wird empfohlen, dies auf true zu setzen, wenn das Item spammbar sein soll. Ein Tick reicht aus, um das oben erwähnte Durchrauschen zu verhindern.

![](https://media.ssomar.com/m/docs-img-imgur-gb5oud0.png)

##

### Das EI-Item speichern

* So sollte es aussehen (wir haben Befehle hinzugefügt, die ON (activator1) und OFF (activator2) ausgeben, um dir zu zeigen, wie es funktioniert :p

## Item-Config

```yaml
name: '&e&lOn/Off Demo'
lore: []
material: LEVER
glow: true
usage: 1
usageLimit: -1
hiders:
  hideEnchantments: false
  hideUnbreakable: false
  hideAttributes: false
  hidePotionEffects: false
  hideUsage: true
  hideDye: false
enchantments: {}
restrictions:
  cancel-item-place: false
variables:
  x:
    variableName: x
    type: NUMBER
    default: 0.0
attributes: {}
activators:
  activator0:
    name: '&eToggle-On'
    option: PLAYER_ALL_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: false
    otherEICooldowns:
      cd0:
        executableItem: onoff-demo
        activators:
        - activator1
        cooldown: 1
        isCooldownInTicks: true
    requiredItems:
      errorMessage: ''
    requiredExecutableItems:
      errorMessage: ''
    detailedSlots:
    - -1
    playerCommands:
    - SENDMESSAGE Toggled On
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchC1:
        type: PLAYER_NUMBER
        comparator: EQUALS
        part1: '%var_x%'
        part2: '0.0'
        cancelEventIfNotValid: true
        messageIfNotValid: '&e'
    variablesModification:
      varModif0:
        variableName: x
        type: SET
        modification: 1.0
  activator1:
    name: '&eToggle-Off'
    option: PLAYER_ALL_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: false
    otherEICooldowns:
      cd0:
        executableItem: onoff-demo
        activators:
        - activator0
        cooldown: 1
        isCooldownInTicks: true
    requiredItems:
      errorMessage: ''
    requiredExecutableItems:
      errorMessage: ''
    detailedSlots:
    - -1
    playerCommands:
    - SENDMESSAGE Toggled Off
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchC1:
        type: PLAYER_NUMBER
        comparator: EQUALS
        part1: '%var_x%'
        part2: '1.0'
        cancelEventIfNotValid: true
        messageIfNotValid: '&e'
    variablesModification:
      varModif0:
        variableName: x
        type: SET
        modification: 0.0

```

## Letzter Kommentar

Wenn du Fragen hast oder denkst, dass die Anleitung nicht klar genug war, frag gerne im Discord nach.\
Wir helfen dir! 😁😁
