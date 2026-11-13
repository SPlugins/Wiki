---
description: >-
  Aktivator-Optionen in ExecutableItems: Anzeigename, Variablen, cancelEvent,
  silenceOutput, Cooldown sowie erforderliche Items, Geld und Level.
source_hash: a103e5315ef03316
translated_at: '2026-11-13T17:35:39.574Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### Anzeigename des Aktivators

* Info: String-Wert für den Anzeigenamen des Aktivators. Er hat kaum einen praktischen Nutzen und dient vor allem dazu, dass Entwickler einen Aktivator von einem anderen unterscheiden können. Er erscheint außerdem in der Standardnachricht "timeLeft" in der Datei locale.yml.
* Beispiel: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    name: '&eThor activator'
```

### Nutzungsänderung des Aktivators <CustomTag type="premium" />

* Info: Sehr wichtige Funktion: Der Nutzungswert des Items wird um diesen Integer-Wert verändert. Das heißt, ist der Wert positiv, steigt die Nutzung, und ist er negativ, sinkt die Nutzung.
* Beispiel: (Erhöht den Nutzungswert um 1, jedes Mal wenn dieser Aktivator ausgelöst wird)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    usageModification: 1
```

### Variablenmodifikation

* Info: Eine Liste von Variablenmodifikationen, die auf die Variablen in Deinem Item angewendet werden. Das ist zum Beispiel nützlich, um den Wert einer Variable zu erhöhen, einen alten Wert einer Variable durch einen anderen zu überschreiben usw.
  * `variableName`: Name der Variable, auf die sich die variableModification bezieht
  * `type`: Art der variableModification, die Du verwendest
    * SET: Überschreibt den alten Wert der Variable und setzt den Modifikationswert.
    * ADD: Wendet eine Rechenoperation auf den aktuellen Wert der Variable an, und zwar mit dem Modifikationswert. Die Variable muss vom Typ NUMBER sein. Ist der Modifikationswert positiv, steigt der Wert, ist er negativ, sinkt er.
    * LIST\_ADD: Wird auf Variablen vom Typ LIST angewendet und hängt den Modifikationswert an die Liste der Variable an.
    * LIST\_CLEAR: Wird auf Variablen vom Typ LIST angewendet und leert die Liste der Variable.
    * LIST\_REMOVE: Wird auf Variablen vom Typ LIST angewendet und entfernt den Modifikationswert aus der Liste der Variable.
  * `modification`: Wert der Modifikation. Er wird gemäß der jeweiligen Modifikationsart auf die Variable angewendet.
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of targethp to 20
        variableName: targethp 
        type: SET
        modification: 20
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by increasing it on 1
        variableName: hit
        type: MODIFICATION
        modification: 1
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by decreasing it on 1
        variableName: durability
        type: MODIFICATION
        modification: -1
```

* Sei vorsichtig, wenn Du hier Platzhalter verwendest! Das ist grundsätzlich kein Problem, stelle aber sicher, dass die Ausgabe eine NUMBER ist, sonst musst Du die STRING-Funktionen verwenden. Aktualisieren wir zum Beispiel eine variableModification mit einer anderen Variable, von der wir wissen, dass sie eine NUMBER zurückgibt.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the bullets to the value of the variable max bullets, as if I was reloading a gun
        variableName: currentBullets
        type: SET
        modification: '%var_maxbullets_int%'
```

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the current bullets by the variable bullets per shot, so its decreasing our bullets depending on the amount of bullets we are firing
        variableName: currentBullets
        type: MODIFICATION
        modification: '-%var_bulletspershot%'
```

### cancelEvent

* Info: Boolean-Wert, der angibt, ob das mit dem Aktivator verbundene Event abgebrochen wird oder nicht.
  * Das kann schwer zu verstehen sein, ich denke, es ist eines der Dinge, die die meisten Leute nicht verstehen. Um es zu erklären, musst Du wissen, dass jeder AKTIVATOR mit einem Minecraft-Event verbunden ist. Das Event tritt ein und danach wird der AKTIVATOR ausgelöst. Wenn wir cancelEvent aktivieren, eine Funktion des Aktivators, bedeutet das: Das Event tritt ein, fast zeitgleich wird der Aktivator ausgelöst und bricht das Event ab. Der Aktivator führt also weiterhin alle seine aktivierten Funktionen aus, aber das Event findet nicht statt, weil es abgebrochen wurde. Zum Beispiel:
    * Ist der Aktivator PLAYER\_HIT\_PLAYER und wir aktivieren cancelEvent, kann der Spieler keinen anderen Spieler schlagen, da alle Treffer abgebrochen bzw. ignoriert werden.
    * Ist der Aktivator PLAYER\_BLOCK\_BREAK und wir aktivieren cancelEvent, kann der Spieler keine Blöcke abbauen, da das Event abgebrochen bzw. ignoriert wird. 
* Beispiel: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BLOCK_BREAK
    cancelEvent: true
```

### noActivatorRunIfTheEventIsCancelled

* Info: Boolean-Wert, der bei Aktivierung verhindert, dass der Aktivator ausgeführt wird, wenn ein anderes Plugin das Event, das ihn auslöst, bereits abgebrochen hat.
  * Das ist nützlich, wenn Du Plugins wie WorldGuard hast, die Schadens-Events abbrechen (z. B. in Zonen ohne PvP), oder andere ExecutableItems, die Schadens-Events abbrechen (z. B. Stiefel mit PLAYER\_RECEIVE\_HIT\_GLOBAL + cancelEvent). Ohne diese Funktion würden Aktivatoren wie PLAYER\_BEFORE\_DEATH trotzdem ausgelöst, obwohl der Schaden abgebrochen wurde, weil sie auf die rohe Schadensberechnung reagieren und nicht auf das endgültige Ergebnis.
  * Ein typischer Anwendungsfall ist ein Custom Item als Totem der Unsterblichkeit, das PLAYER\_BEFORE\_DEATH verwendet. Ohne diese Funktion würde das Totem aktiviert und verbraucht, selbst wenn sich der Spieler in einer WorldGuard-geschützten Zone befindet, in der der Schaden abgebrochen wird, und das Item wäre verschwendet. Wenn Du diese Funktion aktivierst, wird das Totem nur bei tatsächlich tödlichem Schaden aktiviert.
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BEFORE_DEATH
    noActivatorRunIfTheEventIsCancelled: true
```

### silenceOutput

* Info: Boolean-Wert, der dafür sorgt, dass alle Befehle, die über Befehls-Funktionen wie (playerCommands, blockCommands, entityCommands und targetCommands) ausgeführt werden, keine Ausgabe in der **Konsole** erzeugen.
  * Zum Beispiel erzeugt der Vanilla-Befehl von Minecraft effect give \[...] normalerweise eine Ausgabe in der Konsole in diesem Format: "Applied effect strength to \<playerName>". Um diese Ausgabe zu deaktivieren, kannst Du diese Funktion aktivieren.    
* Beispiel: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activator    
    playerCommands:
    - effect give %player% strength 5 5
    silenceOutput: true
```

* Wichtig zu verstehen: Diese Funktion ist dafür gedacht, die Ausgabe von Vanilla-Befehlen zu deaktivieren. Wenn Du einen Befehl eines anderen Plugins verwendest und dieser eine Konsolenausgabe hat, liegt es nicht an uns, das zu beheben, das andere Plugin sollte Dir eine Möglichkeit bieten, diese Nachrichten auszublenden. Trotzdem haben wir eine Möglichkeit eingebaut, Nachrichten anzupassen, die ausgeblendet werden sollen. So kannst Du die Standardnachrichten über silenceOutput unterdrücken und zusätzlich eigene Nachrichten hinzufügen. Dieser Vorgang wird über die Config-Datei von Score gesteuert. Mehr Informationen dazu und wie Du es einrichtest findest Du hier: [Allgemeine Config](/tools-for-all-plugins-score/score/general-config).

## Cooldown

### Spieler-Cooldown

* Info: Die Cooldown-Optionen legen den Cooldown fest, der für diesen Aktivator auf den Spieler angewendet wird, der ihn ausgelöst hat.
* Ist der Aktivator PLAYER\_RIGHT\_CLICK, hat er einige Befehle \[] und der Cooldown beträgt 30 Sekunden, muss der Spieler nach dem Auslösen 30 Sekunden warten, bevor er ihn erneut auslösen kann. Das hindert andere Spieler nicht daran, den Aktivator in diesen 30 Sekunden auszuführen, solange sie selbst keinen Cooldown haben. Das ist eine Funktion pro Spieler.
  * `cooldown`: Integer-Wert, der angibt, wie lange der Cooldown für diesen Aktivator dauert.
  * `isCooldownInTicks`: Boolean-Wert, der die Cooldown-Zeit in Ticks angibt (20 Ticks = 1 Sekunde)
  * `cooldownMsg`: String-Wert, der angezeigt wird, wenn der Spieler versucht, den Aktivator auszulösen, während er im Cooldown ist
  * `displayCooldownMessage`: Boolean-Wert, der die Anzeige der cooldownMsg erlaubt oder verhindert, wenn der Spieler versucht, den Aktivator auszulösen, während er im Cooldown ist.
    * Platzhalter, die verwendet werden können:
      * %time% -> der gesamte Cooldown in Sekunden
      * %time\_H% -> der Stundenanteil des Cooldowns
      * %time\_M% -> der Minutenanteil des Cooldowns
      * %time\_S% -> der Sekundenanteil des Cooldowns 
  * `cancelEventIfInCooldown`: Boolean-Wert, der das Event des Aktivators abbricht, wenn der Spieler im Cooldown ist. Das bedeutet: Ist der Aktivator PLAYER\_HIT\_ENTITY, werden während des Cooldowns alle PLAYER\_HIT\_ENTITY-Events des Spielers abgebrochen und somit ignoriert, wodurch der Spieler keine Entities angreifen kann (Hinweis: Dieser Aktivator zielt auf alle Entities außer Spielern)
  * `pauseWhenOffline`: Boolean-Wert, der den Cooldown pausiert, wenn der Spieler offline ist. Zum besseren Verständnis: Ist er false, läuft die Cooldown-Zeit weiter, sodass der Spieler den Server verlassen, den Cooldown abwarten und wieder beitreten kann und den Aktivator dann wieder auslösen kann. Ist diese Funktion aber aktiviert und der Spieler hat den Server während des Cooldowns verlassen, hat er beim erneuten Beitreten dieselbe verbleibende Cooldown-Zeit wie beim Verlassen.
  * `pausePlaceholdersConditions`: Ähnlich wie pauseWhenOffline, pausiert aber nur abhängig von bestimmten placeholdersConditions. Ein Anwendungsbeispiel wäre, den Cooldown zu pausieren, wenn der Spieler den Rang VIP hat. Der Rang VIP hat dann Zugriff auf diese Funktion.
  * `enableVisualCooldown`: Aktiviert einen visuellen Cooldown für das Item.
* Beispiel: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    cooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      pauseWhenOffline: false
      pausePlaceholdersConditions: {}
      enableVisualCooldown: false
```

### Globaler Cooldown

* Info: Die Idee ist dieselbe wie beim Cooldown, aber er wird nicht auf den einzelnen Spieler angewendet, sondern ist ein globaler Cooldown, der für alle Spieler gilt. Das heißt: Löst jemand den Aktivator aus und dieser hat 30 Sekunden globalen Cooldown, kann ihn bis zum Ablauf dieser 30 Sekunden niemand verwenden. Er hat dieselben Funktionen wie der Cooldown.
  * `cooldown`: Integer-Wert, der angibt, wie lange der Cooldown für diesen Aktivator dauert.
  * `isCooldownInTicks`: Boolean-Wert, der die Cooldown-Zeit in Ticks angibt (20 Ticks = 1 Sekunde)
  * `cooldownMsg`: String-Wert, der angezeigt wird, wenn ein Spieler versucht, diesen Aktivator auszulösen, während er im Cooldown ist
  * `displayCooldownMessage`: Boolean-Wert, der die Anzeige der cooldownMsg erlaubt oder verhindert, wenn der Spieler versucht, den Aktivator auszulösen, während er im Cooldown ist.
    * Platzhalter, die verwendet werden können:
      * %time% -> der gesamte Cooldown in Sekunden
      * %time\_H% -> der Stundenanteil des Cooldowns
      * %time\_M% -> der Minutenanteil des Cooldowns
      * %time\_S% -> der Sekundenanteil des Cooldowns 
  * `cancelEventIfInCooldown`: Boolean-Wert, der das Event des Aktivators abbricht, wenn der Spieler im Cooldown ist. Das bedeutet: Ist der Aktivator PLAYER\_HIT\_ENTITY, werden während des Cooldowns alle PLAYER\_HIT\_ENTITY-Events des Spielers abgebrochen und somit ignoriert, wodurch der Spieler keine Entities angreifen kann (Hinweis: Dieser Aktivator zielt auf alle Entities außer Spielern)
  * `enableVisualCooldown`: Aktiviert einen visuellen Cooldown für das Item.
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    globalCooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      enableVisualCooldown: false
```

## Erforderliche Funktionen <CustomTag type="premium" />

Dieser Abschnitt dient dazu, Funktionen einzurichten, die Voraussetzungen betreffen, damit der Aktivator ausgelöst werden kann. Das bedeutet: Tritt das Event ein, wird der Aktivator nur ausgeführt, wenn der Spieler diese Voraussetzungen erfüllt. Die Items werden dabei verbraucht.

* Wenn Du nicht möchtest, dass die Items verbraucht werden, verwende nicht die Funktion „required“, sondern Bedingungen, die nur prüfen und nichts verbrauchen.

### requiredExecutableItems <CustomTag type="premium" />

* Info: Mit dieser Funktion kann der Aktivator ein oder mehrere ExecutableItems als Voraussetzung haben. Erfüllt der Spieler diese Voraussetzung, wird sie verbraucht und der Aktivator wird ausgeführt.
  * `cancelEventIfError`: Boolean-Wert, der angibt, ob das Event abgebrochen wird, wenn der Spieler die Voraussetzung nicht erfüllt.
    * Das bedeutet zum Beispiel: Angenommen, es gibt ein Event PLAYER\_HIT\_ENTITY und es tritt ein, aber der Spieler erfüllt die Voraussetzungen zum Auslösen des Aktivators nicht. Ist diese Funktion aktiviert, wird das Event PLAYER\_HIT\_ENTITY abgebrochen. Obwohl der Spieler also klickt bzw. die Entity schlägt, erleidet die Entity keinen Schaden, weil das Event in Wirklichkeit nicht stattfindet, da es abgebrochen wird.
  * `errorMessage`: String-Nachricht, die an den Spieler gesendet wird, wenn er die Voraussetzung nicht erfüllt.
  * `executableItem`: ID des ExecutableItems, das als Voraussetzung benötigt wird
  * `amount`: Integer für die Anzahl der Items, die als Voraussetzung benötigt werden.
  * `usageConditions`: Optionale String-Bedingung im Format `(==, !=, >, <, >=, <=){number}` für die Nutzungsbedingung des ExecutableItems.
    * Das bedeutet: Lautet die Bedingung >=5, muss das gewählte ExecutableItem im Inventar des Spielers sein, da es eine Voraussetzung ist, und zusätzlich eine Nutzung von mindestens 5 haben.
* Beispiel:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExecutableItems:
      requiredEI0: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: moon
        amount: 1
        usageConditions: '>=5'
      requiredEI1: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: sun
        amount: 1
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredItems <CustomTag type="premium" />

* Info: Mit dieser Funktion kann der Aktivator ein oder mehrere Vanilla-Items als Voraussetzung haben. Erfüllt der Spieler diese Voraussetzung, wird sie verbraucht und der Aktivator wird ausgeführt.
  * `cancelEventIfError`: Boolean-Wert, der angibt, ob das Event abgebrochen wird, wenn der Spieler die Voraussetzung nicht erfüllt.
    * Das bedeutet zum Beispiel: Angenommen, es gibt ein Event PLAYER\_HIT\_ENTITY und es tritt ein, aber der Spieler erfüllt die Voraussetzungen zum Auslösen des Aktivators nicht. Ist diese Funktion aktiviert, wird das Event PLAYER\_HIT\_ENTITY abgebrochen. Obwohl der Spieler also klickt bzw. die Entity schlägt, erleidet die Entity keinen Schaden, weil das Event in Wirklichkeit nicht stattfindet, da es abgebrochen wird.
  * `errorMessage`: String-Nachricht, die an den Spieler gesendet wird, wenn er die Voraussetzung nicht erfüllt.
  * `material`: Vanilla-MATERIAL, das als Voraussetzung benötigt wird.
  * `amount`: Integer für die Anzahl der Items, die als Voraussetzung benötigt werden.
  * `notExecutableItem`: Boolean-Wert, der festlegt, ob die Voraussetzung auch durch ein ExecutableItem erfüllt werden kann oder nicht.
    * Das bedeutet: Ist die Voraussetzung STONE und diese Funktion nicht aktiviert, wird die Voraussetzung sowohl durch Vanilla-STONE als auch durch ExecutableItems mit dem Material STONE erfüllt und diese werden verbraucht. Wenn Du das nicht möchtest, aktiviere diese Funktion.
* Beispiel:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredItems:
      requiredItem0: # requiredItem ID, you can create as many requiredItem on the requiredItems
        material: STONE
        amount: 1
        notExecutableItem: true
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredMoney <CustomTag type="premium" />

* Info: Diese Funktion benötigt das Plugin "Vault". Mit dieser Funktion kann der Aktivator Geld aus Vault als Voraussetzung haben. Erfüllt der Spieler diese Voraussetzung, wird sie verbraucht und der Aktivator wird ausgeführt.
  * `cancelEventIfError`: Boolean-Wert, der angibt, ob das Event abgebrochen wird, wenn der Spieler die Voraussetzung nicht erfüllt.
    * Das bedeutet zum Beispiel: Angenommen, es gibt ein Event PLAYER\_HIT\_ENTITY und es tritt ein, aber der Spieler erfüllt die Voraussetzungen zum Auslösen des Aktivators nicht. Ist diese Funktion aktiviert, wird das Event PLAYER\_HIT\_ENTITY abgebrochen. Obwohl der Spieler also klickt bzw. die Entity schlägt, erleidet die Entity keinen Schaden, weil das Event in Wirklichkeit nicht stattfindet, da es abgebrochen wird.
  * `errorMessage`: String-Nachricht, die an den Spieler gesendet wird, wenn er die Voraussetzung nicht erfüllt.
  * `requiredMoney`: Float-Wert, der die Geldmenge angibt, die als Voraussetzung benötigt wird.
* Beispiel:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMoney:
      requiredMoney: 1200.0
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredLevel <CustomTag type="premium" />

* Info: Mit dieser Funktion kann der Aktivator Vanilla-Erfahrungslevel als Voraussetzung haben. Erfüllt der Spieler diese Voraussetzung, wird sie verbraucht und der Aktivator wird ausgeführt. Verwechsle Erfahrungslevel nicht mit Erfahrung, mehr Infos hier: [Erfahrung](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`: Boolean-Wert, der angibt, ob das Event abgebrochen wird, wenn der Spieler die Voraussetzung nicht erfüllt.
    * Das bedeutet zum Beispiel: Angenommen, es gibt ein Event PLAYER\_HIT\_ENTITY und es tritt ein, aber der Spieler erfüllt die Voraussetzungen zum Auslösen des Aktivators nicht. Ist diese Funktion aktiviert, wird das Event PLAYER\_HIT\_ENTITY abgebrochen. Obwohl der Spieler also klickt bzw. die Entity schlägt, erleidet die Entity keinen Schaden, weil das Event in Wirklichkeit nicht stattfindet, da es abgebrochen wird.
  * `errorMessage`: String-Nachricht, die an den Spieler gesendet wird, wenn er die Voraussetzung nicht erfüllt.
  * `requiredLevel`: Integer-Wert, der die Anzahl der Minecraft-Vanilla-Erfahrungslevel angibt, die als Voraussetzung benötigt werden.
* Beispiel:

```yaml
 activators:  
  activator1: # Activator ID, you can create as many activators on the activator
     requiredLevel:
      requiredLevel: 50
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### requiredExperience <CustomTag type="premium" />

* Info: Mit dieser Funktion kann der Aktivator Minecraft-Vanilla-Erfahrung als Voraussetzung haben. Erfüllt der Spieler diese Voraussetzung, wird sie verbraucht und der Aktivator wird ausgeführt. Verwechsle Erfahrung nicht mit Erfahrungslevel, das sind unterschiedliche Dinge, mehr Infos unter [Erfahrung](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`: Boolean-Wert, der angibt, ob das Event abgebrochen wird, wenn der Spieler die Voraussetzung nicht erfüllt.
    * Das bedeutet zum Beispiel: Angenommen, es gibt ein Event PLAYER\_HIT\_ENTITY und es tritt ein, aber der Spieler erfüllt die Voraussetzungen zum Auslösen des Aktivators nicht. Ist diese Funktion aktiviert, wird das Event PLAYER\_HIT\_ENTITY abgebrochen. Obwohl der Spieler also klickt bzw. die Entity schlägt, erleidet die Entity keinen Schaden, weil das Event in Wirklichkeit nicht stattfindet, da es abgebrochen wird.
  * `errorMessage`: String-Nachricht, die an den Spieler gesendet wird, wenn er die Voraussetzung nicht erfüllt.
  * `requiredExperience`: Integer-Wert, der die Menge an Erfahrung angibt, die als Voraussetzung benötigt wird.
* Beispiel:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExperience:
      requiredExperience: 20
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### RequiredMana <CustomTag type="premium" />

* Info: Mit dieser Funktion kann der Aktivator Mana von [**AureliumSkills**](https://www.spigotmc.org/resources/auraskills.81069/), [**MMOCore**](https://www.spigotmc.org/resources/%E2%AD%90-mmocore-%E2%AD%90-classes-skills-levels-skill-trees-professions-mana-waypoints.70575/) und [**AuraSkills**](https://www.spigotmc.org/resources/auraskills.81069/) als Voraussetzung haben. Erfüllt der Spieler diese Voraussetzung, wird sie verbraucht und der Aktivator wird ausgeführt.
  * `cancelEventIfError`: Boolean-Wert, der angibt, ob das Event abgebrochen wird, wenn der Spieler die Voraussetzung nicht erfüllt.
    * Das bedeutet zum Beispiel: Angenommen, es gibt ein Event PLAYER\_HIT\_ENTITY und es tritt ein, aber der Spieler erfüllt die Voraussetzungen zum Auslösen des Aktivators nicht. Ist diese Funktion aktiviert, wird das Event PLAYER\_HIT\_ENTITY abgebrochen. Obwohl der Spieler also klickt bzw. die Entity schlägt, erleidet die Entity keinen Schaden, weil das Event in Wirklichkeit nicht stattfindet, da es abgebrochen wird.
  * `errorMessage`: String-Nachricht, die an den Spieler gesendet wird, wenn er die Voraussetzung nicht erfüllt.
  * `requiredMana`: Integer-Wert, der die Menge an Mana angibt, die als Voraussetzung benötigt wird.
* Beispiel:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMana:
      requiredMana: 10
      errorMessage: '&c You dont meet the requirement'
```

:::info
Kompatibel mit AureliumSkills, MMOCore und AuraSkills
:::

### RequiredMagic (EcoSkills) <CustomTag type="premium" />

* Info: Mit dieser Funktion kann der Aktivator Magie von [**EcoSkills**](https://www.spigotmc.org/resources/ecoskills-%E2%AD%95-addictive-mmorpg-skills-%E2%9C%85-create-skills-stats-effects-mana-%E2%9C%A8-plug-play.95541/) als Voraussetzung haben. Erfüllt der Spieler diese Voraussetzung, wird sie verbraucht und der Aktivator wird ausgeführt.
  * `cancelEventIfError`: Boolean-Wert, der angibt, ob das Event abgebrochen wird, wenn der Spieler die Voraussetzung nicht erfüllt.
    * Das bedeutet zum Beispiel: Angenommen, es gibt ein Event PLAYER\_HIT\_ENTITY und es tritt ein, aber der Spieler erfüllt die Voraussetzungen zum Auslösen des Aktivators nicht. Ist diese Funktion aktiviert, wird das Event PLAYER\_HIT\_ENTITY abgebrochen. Obwohl der Spieler also klickt bzw. die Entity schlägt, erleidet die Entity keinen Schaden, weil das Event in Wirklichkeit nicht stattfindet, da es abgebrochen wird.
  * `errorMessage`: String-Nachricht, die an den Spieler gesendet wird, wenn er die Voraussetzung nicht erfüllt.
  * `magicID`: Die ID der Magie in EcoSkills.
  * `amount`: Menge an Magie der magicID, die als Voraussetzung benötigt wird.

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMagics:
      requiredMagic_0: # requiredMagic ID, you can create as many requiredMagic on the requiredMagics
        magicID: mana
        amount: 70
      errorMessage: '&c You dont meet the requirement'
```
