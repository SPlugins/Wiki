---
description: >-
  Erfahre, welche Features Aktivatoren in ExecutableItems bieten, um einfache
  bis komplexe Custom Items zu erstellen, von Slots bis Cooldowns.
source_hash: c1b2157347497341
translated_at: '2026-11-13T17:23:42.774Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';
import GeneralActivatorsFeatures from '@site/docs/_partials/general-activators-features.md';
import BlockFeatures from '@site/docs/_partials/block-features.md';
import EntityFeatures from '@site/docs/_partials/entity-features.md';
import TargetPlayerFeatures from '@site/docs/_partials/target-player-features.md';
import PlayerFeatures from '@site/docs/_partials/player-features.md';
import TargetItemFeatures from '@site/docs/_partials/target-item-features.md';
import CommandFeatures from '@site/docs/_partials/command-features.md';
import DropFeatures from '@site/docs/_partials/drop-features.md';
import EffectFeatures from '@site/docs/_partials/effect-features.md';
import DamageCauseFeatures from '@site/docs/_partials/damagecause-features.md';
import DelayFeatures from '@site/docs/_partials/delay-features.md';
import ClickFeatures from '@site/docs/_partials/click-features.md';
import InputFeatures from '@site/docs/_partials/input-features.md';
import TypeTargetFeatures from '@site/docs/_partials/typetarget-features.md';


# Features von Aktivatoren

Alle diese Features befinden sich innerhalb des Aktivators. Zur Erinnerung: Aktivatoren erlauben Dir, eigene Aktionen auf Deinem ExecutableItem auszuführen. Sie können Bedingungen haben, Befehle ausführen, einen Cooldown besitzen usw.

Premium-Features sind mit dem Tag gekennzeichnet: <CustomTag type="premium" />

## Allgemeine Features eines Aktivators

<GeneralActivatorsFeatures />

## Features für EI-Aktivatoren

### Detaillierte Slots

* Info: Liste von Ganzzahlen, die die Slots des Inventars darstellen, in denen der Aktivator funktioniert. Das heißt: Tritt das Event in einem Slot auf, der nicht in dieser Liste steht, wird der Aktivator nicht ausgelöst. 

![](https://media.ssomar.com/m/docs-img-slots-info.png)
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    detailedSlots:
  - -1 # Slot for mainhand, this is not a static slot but having it on mainhand
  - 40 # This is a static slot, it represents the offhand slot.
```

### Item automatisch aktualisieren

* Info: Mit diesem Feature des Aktivators wird das Item in einem der Punkte der Liste aktualisiert. Sei vorsichtig! Das ist je nach Anwendungsfall vielleicht gar nicht nötig. Manche Dinge werden automatisch aktualisiert, zum Beispiel Befehle im Aktivator, Bedingungen, Cooldown usw. werden ohne dieses Feature automatisch aktualisiert. 
* Dieses Feature zielt hauptsächlich auf die visuellen Aspekte des Items ab. Wenn Du also einmal ein ExecutableItem mit der ID id\:ex\_sword und dem Anzeigenamen "\&dExcalibur" erstellt und dieses Item an alle Spieler verteilt hast und nun möchtest, dass alle ExecutableItems "ex\_sword" den neuen Anzeigenamen "\&eEpic Sword" erhalten, musst Du dieses Feature in einem der Aktivatoren des Items aktivieren. Du aktivierst also das Feature (autoUpdateItem) zusammen mit dem Feature zum Aktualisieren des Namens (updateName).
* Zur Klarstellung: Dieses Feature überschreibt je nach den aktivierten Optionen den aktuellen Wert mit dem aktuellen Wert aus der Config-Datei und wird nur für visuelle Features verwendet. Für gewöhnliche Änderungen, die die Optionen dieses Features nicht betreffen, ist es nicht nötig.
  * `autoUpdateItem`: Boolescher Wert, der angibt, ob dieses Feature für den Aktivator aktiviert ist oder nicht.
  * `updateName`: Boolescher Wert, um den Anzeigenamen des ExecutableItem zu aktualisieren. Bei true wird der aktuelle Anzeigename des Items mit dem aktuellen/aktualisierten Itemnamen aus der Config-Datei des ExecutableItem überschrieben.
  * `updateLore`: Boolescher Wert, um die Lore des ExecutableItem zu aktualisieren. Bei true wird die aktuelle Lore des Items mit der aktuellen/aktualisierten Lore aus der Config-Datei des ExecutableItem überschrieben.
  * `updateDurability`: Boolescher Wert, um die aktuelle Haltbarkeit des ExecutableItem zu aktualisieren. Bei true wird die aktuelle Haltbarkeit des Items mit der aktuellen/aktualisierten Haltbarkeit aus der Config-Datei des ExecutableItem überschrieben.
  * `updateAttributes`: Boolescher Wert, um alle Attribute des ExecutableItem zu aktualisieren. Bei true werden die aktuellen Attribute des Items mit den aktuellen/aktualisierten Attributen aus der Config-Datei des ExecutableItem überschrieben.
  * `updateEnchants`: Boolescher Wert, um die Verzauberungen des ExecutableItem zu aktualisieren. Bei true werden die aktuellen Verzauberungen des Items mit den aktuellen/aktualisierten Verzauberungen aus der Config-Datei des ExecutableItem überschrieben.
  * `updateCustomModelData`: Boolescher Wert, um den Custom-Model-Data-Wert des ExecutableItem zu aktualisieren. Bei true wird das aktuelle Custom Model Data des Items mit dem aktuellen/aktualisierten customModelData-Wert aus der Config-Datei des ExecutableItem überschrieben.
  * `updateArmorSettings`: Boolescher Wert, um die Rüstungseinstellungen des ExecutableItem zu aktualisieren. Bei true werden die aktuellen Rüstungseinstellungen des Items mit den aktuellen/aktualisierten Rüstungseinstellungen aus der Config-Datei des ExecutableItem überschrieben, z. B. (Rüstungsfarbe).
  * `updateMaterial`: Boolescher Wert, um das Material des ExecutableItem zu aktualisieren. Bei true wird das aktuelle Material des Items mit dem aktuellen/aktualisierten Material aus der Config-Datei des ExecutableItem überschrieben.
  * `updateHiders`: Boolescher Wert, um die Hider-Konfiguration des ExecutableItem zu aktualisieren. Bei true wird die aktuelle Hider-Konfiguration mit der aktuellen/aktualisierten Hider-Einrichtung aus der Config-Datei des ExecutableItem überschrieben.
  * `updateEquippable`: Boolescher Wert, um die Hider-Konfiguration des ExecutableItem zu aktualisieren. Bei true wird die aktuelle Equippable-Komponente des Items mit der aktuellen/aktualisierten Equippable-Einrichtung aus der Config-Datei des ExecutableItem überschrieben.
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    autoUpdateItem: false
    updateName: false
    updateLore: false
    updateDurability: false
    updateAttributes: false
    updateEnchants: false
    updateCustomModelData: false
    updateArmorSettings: false
    updateMaterial: false
    updateHiders: false
    updateEquippable: false
```

<PlayerFeatures />

### worldConditions

* Info: Du kannst diese Bedingungen in allen Aktivator-Typen verwenden.
* [World-Bedingungen](/tools-for-all-plugins-score/custom-conditions/world-conditions.md)

### placeholdersConditions

* Info: Du kannst diese Bedingungen in allen Aktivator-Typen verwenden.
* [PlaceholdersConditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions.md)

### itemConditions

* Info: Du kannst diese Bedingungen in allen Aktivator-Typen verwenden.
* [Item-Bedingungen](/tools-for-all-plugins-score/custom-conditions/item-conditions.md)


### otherEICooldowns

* Info: Mit diesem Feature kannst Du einen Spieler-Cooldown auf bestimmte ExecutableItems und optional auf bestimmte Aktivatoren anwenden. 
  * `executableItem`: ID des ExecutableItem, auf das Du den Cooldown anwenden möchtest.
  * `activators`: Liste von Strings, die die IDs der Aktivatoren des angegebenen ExecutableItem sind, auf die der Cooldown wirken soll. Wenn keine ausgewählt sind, wird der Cooldown auf alle Aktivatoren des angegebenen ExecutableItem angewendet.
  * `cooldown`: Ganzzahl, die die Dauer des Cooldowns angibt.
  * `isCooldownInTicks`: Boolescher Wert, der angibt, ob der Cooldown-Wert in Sekunden oder in Ticks angegeben ist. (20 Ticks = 1 Sekunde)
* Tipps:
  * Du kannst das ExecutableItem angeben, das dieses Feature selbst ausführt. Zum Beispiel, wenn ein Aktivator einen Cooldown auf einen anderen Aktivator im selben Item anwenden soll.
  * Eine weitere Idee ist, einen Cooldown auf alle schadensbezogenen Items anzuwenden, sobald Du eines davon benutzt.
  * Ein weiteres Beispiel: Du kannst dieses Feature nutzen, damit der Spieler eines von mehreren ExecutableItems wählen kann. Wenn er eines wählt und auslöst, kann er weder das gewählte benutzen, weil es im Cooldown ist, noch die anderen, weil sie ebenfalls im Cooldown sind.
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    otherEICooldowns:
      cd1: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns list
        executableItem: test 
        activators: 
        - activator0 
        cooldown: 20 
        isCooldownInTicks: false
      cd0: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns
        executableItem: swordSharpness
        activators: [] 
        cooldown: 10
        isCooldownInTicks: false
```


## Exklusive Features je nach Aktivator-Typ

Damit leichter verständlich ist, bei welchen Aktivatoren die Features funktionieren, legen wir 4 Kategorien zur Gruppierung der Aktivatoren an. Wenn bei einem Feature eine dieser Kategorien genannt wird, weißt Du, dass das Feature für alle Aktivatoren dieser Kategorie funktioniert.  

* <CustomTag type="player_block" />: Beschreibt Aktivatoren, an denen der Spieler, der das ExecutableItem ausgelöst hat, und ein beteiligter Block beteiligt sind. Abkürzung \[P\_B]
  * PLAYER\_ALL\_CLICK (mit dem Feature typeTarget: ONLY\_BLOCK)
  * PLAYER\_BLOCK\_BREAK <CustomTag type="premium" compact />
  * PLAYER\_BLOCK\_PLACE <CustomTag type="premium" compact />
  * PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FISH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_HARVEST\_BLOCK
  * PLAYER\_LEFT\_CLICK (mit dem Feature typeTarget: ONLY\_BLOCK)
  * PLAYER\_RIGHT\_CLICK (mit dem Feature typeTarget: ONLY\_BLOCK)
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * Usw., weitere Informationen unter [Activators info](list-of-the-activators)
* <CustomTag type="player_entity" />: Beschreibt Aktivatoren, an denen der Spieler, der das ExecutableItem ausgelöst hat, und eine beteiligte Entität beteiligt sind. Abkürzung \[P\_E]
  * PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_BUCKET\_ENTITY
  * PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_CUSTOM\_LAUNCH (Die Entität ist das Projektil, das abgefeuert wird) <CustomTag type="premium" compact />
  * PLAYER\_DISMOUNT <CustomTag type="premium" compact />
  * PLAYER\_FISH\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_KILL\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * Usw., weitere Informationen unter [Activators info](list-of-the-activators)
* <CustomTag type="player_target" />: Beschreibt Aktivatoren, an denen der Spieler, der das ExecutableItem ausgelöst hat, und ein anderer Spieler beteiligt sind, der als „Ziel“ bezeichnet wird und als Ziel oder Gegner behandelt wird. Abkürzung \[P\_T]
  * PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_CLICK\_ON\_PLAYER
  * PLAYER\_FISH\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_HIT\_PLAYER
  * PLAYER\_KILL\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
  * Usw., weitere Informationen unter [Activators info](list-of-the-activators)
* <CustomTag type="specific_activators" /> Wenn es ein Feature gibt, das verschiedene Aktivatoren aus mehreren Kategorien enthält, ist es zum besseren Verständnis sinnvoller, eine neue temporäre Liste zu erstellen, die beim Feature erwähnt wird. Abkürzung \[S\_A]  

## Für \[P\_B] <CustomTag type="player_block" />

<BlockFeatures />

## Für \[P\_E] <CustomTag type="player_entity" />

<EntityFeatures />

## Für \[P\_T] <CustomTag type="player_target" />

<TargetPlayerFeatures />

## Für \[S\_A] <CustomTag type="specific_activators" />
 
<TargetItemFeatures />
* Für:
  * PLAYER_DROP_ITEM
  * PLAYER_CONSUME
  * EI_CLICK_ON_ANOTHER_INVENTORY_ITEM
  * EI_CLICKED_BY_ANOTHER_INVENTORY_ITEM


### mustBeAProjectileLaunchWithTheSameEI

* Kategorie des Aktivator-Typs: Spezifische Aktivatorliste
  * PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
* Info: Feature für Aktivatoren, die sich auf Projektile beziehen. Es legt fest, ob der Aktivator auch bei Projektilen laufen soll, die nicht vom selben EI abgefeuert wurden.
  * Beispiel: Es gibt einen Aktivator PROJECTILE\_HIT\_ENTITY mit detailedSlots: \[alle Slots] und playerCommands: \["say hi"]
    * Ist das Feature aktiviert, funktioniert es nur, wenn dieses ExecutableItem einen weiteren Aktivator mit einem LAUNCH-Befehl hat. Das Projektil wird also vom EI abgefeuert, und dann ist die Bedingung erfüllt.
    * Ist das Feature deaktiviert, führen alle Projektile den Aktivator aus, etwa der Vanilla-Bogen, der Vanilla-Schneeball, Projektile anderer ExecutableItems und Projektile des ExecutableItem selbst.
* Wichtig: Wenn `mustBeAProjectileLaunchWithTheSameEI` `true` ist, kann das Plugin nicht mit 100%iger Sicherheit garantieren, in welchem Inventar-Slot sich das Item zum Zeitpunkt des Abfeuerns befand. Es aktiviert die erste passende Kopie des EI, die im Inventar des Spielers gefunden wird. Aus diesem Grund solltest Du **den `detailedSlots` des Aktivators immer so konfigurieren, dass er alle Slots umfasst**, und ihn nicht auf die Haupthand beschränken. Ist der Aktivator auf die Haupthand beschränkt, wird er möglicherweise nicht ausgelöst, wenn das passende Item zuerst in einem anderen Slot ausgewertet wird.
  * Beispiel:

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: PROJECTILE_HIT_ENTITY
    mustBeAProjectileLaunchWithTheSameEI: true
    detailedSlots: [] # Empty list = all slots (-1 through 40)
```

<DamageCauseFeatures />
* Für:
  * PLAYER_BLOCK_HIT_OF_ENTITY
  * PLAYER_BLOCK_HIT_OF_PLAYER
  * PLAYER_DEATH
  * PLAYER_HIT_ENTITY
  * PLAYER_HIT_PLAYER
  * PLAYER_RECEIVE_HIT_BY_ENTITY
  * PLAYER_RECEIVE_HIT_BY_PLAYER
  * PLAYER_RECEIVE_HIT_GLOBAL

<EffectFeatures />
* Für:
  * PLAYER_RECEIVE_EFFECT

<CommandFeatures />
* Für:
  * PLAYER_WRITE_COMMAND

<DropFeatures />
* Für:
  * PLAYER_BLOCK_BREAK
  * PLAYER_FISH_FISH
  * PLAYER_KILL_ENTITY
  * PLAYER_KILL_PLAYER

<TypeTargetFeatures />
* Für
  * PLAYER\_ALL\_CLICK
  * PLAYER\_RIGHT\_CLICK
  * PLAYER\_LEFT\_CLICK

<ClickFeatures />
* Für:
  * PLAYER_CLICK_ON_ENTITY
  * PLAYER_CLICK_ON_PLAYER
  * INVENTORY_CLICK

<DelayFeatures />
* Für:
  * LOOP

<InputFeatures />
* Für:
  * PLAYER_INPUT
