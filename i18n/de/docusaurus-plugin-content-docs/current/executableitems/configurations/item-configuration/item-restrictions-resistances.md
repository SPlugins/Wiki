---
description: >-
  Lerne, wie du mit Item-Einschränkungen und Resistenzen das Verhalten deiner
  Custom Items in ExecutableItems global oder pro Item anpasst.
source_hash: bf6b77f864065099
translated_at: '2026-11-13T17:26:28.788Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Item-Einschränkungen/Resistenzen

Auf dieser Seite lernst du die Item-Einschränkungen und einige Resistenzen kennen. Damit kannst du das Verhalten des Items in bestimmten Fällen anpassen.

## Globale Einschränkungen

* Info: Wenn du eine der Item-Einschränkungen zu allen Items hinzufügen möchtest, die du im Plugin erstellt hast, kannst du die Konfiguration der gewünschten Einschränkung(en) in die Datei config.yml des Plugins einfügen.
* Beispiel: Ich möchte die Einschränkungen „Amboss nicht verwenden“ und „Schleifstein nicht verwenden“ zu allen ExecutableItems hinzufügen, die bereits erstellt wurden und noch erstellt werden.


```yaml
# ----------------------------------
# -
#       ExecutableItems
# -
#         By: Ssomar
# -
# ----------------------------------
# -
# WIKI HERE : https://splugins.net/docs/executableitems/information-ei
# DISCORD HERE : https://discord.com/invite/TRmSwJaYNv
# -

## Start of default config features
pickup-limit: -1
disable-world: [ ]
premium-enable-cooldown-for-op: true #Premium only
checkVersionMsg: true
disableTestItems: false # If you have a big server with a lot of players, it's recommended to turn this option on true
silentEIGive: false
silentMessagePreventionErrorHeadDBError: false
disableBackup: false #<- Backup your items config at each start / reload of the server
deleteBackupsAfterDays: 7 #<- It will deletes backups older than this number of days
## End of default config features
## 
## Start for manually added restrictions to apply on all ExecutableItems
restrictions:
  cancel-anvil: true
  cancel-grind-stone: true
## End for manually added restrictions to apply on all ExecutableItems
```


## Individuelle Einschränkungen

In diesem Abschnitt lernst du, wie du eine individuelle Einschränkung nur für das ExecutableItem hinzufügst, das du gerade bearbeitest.

### Das Fallenlassen des Items abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem fallen lässt.
* Hinweis: Wenn das Item nicht zurück ins Inventar gelegt werden kann (zum Beispiel weil es auf dem Cursor lag, während das Inventar geschlossen wurde, und alle Slots belegt sind), wird das Fallenlassen erlaubt, anstatt das Item zu löschen.
* Beispiel:

```yaml
restrictions:
  cancel-item-drop: true
```

### Das Platzieren des Blocks auf dem Boden abbrechen.

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem auf dem Boden platziert, falls das Item ein Block ist.
* Beispiel:

```yaml
restrictions:
  cancel-item-place: true
```

### Die Verwendung des Items in allen Rezepten am Crafting-Tisch abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler mit dem ExecutableItem Vanilla-Rezepte herstellt.
* Beispiel:

```yaml
restrictions:
  cancel-item-craft: true
```

### Die Verwendung des Items nur in Vanilla-Rezepten abbrechen, ohne die benutzerdefinierten zu beeinflussen

* Info: Boolescher Wert, der verhindert, dass der Spieler mit dem ExecutableItem Vanilla-Rezepte herstellt, es aber weiterhin für benutzerdefinierte Crafting-Rezepte verwendet werden kann.
* Beispiel:

```yaml
restrictions:
  cancel-item-craft-no-custom: true
```

### Die Interaktion zum Verzieren von Minecraft-Töpfen abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler die ExecutableItems in verzierte Töpfe legt.
* Beispiel:

```yaml
restrictions:
  cancel-decorated-pot: true
```

### Das Ablegen des Items in einem Regal abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem in ein Regal legt (Minecraft 1.21.9+, alle Holzarten).
  * Nützlich für ein Item, das sich über seine Aktivatoren selbst zurückgibt (zum Beispiel ein „unendlicher“ Wassereimer): Ohne diese Einschränkung bleibt das ins Regal gelegte Item dort liegen, während der Aktivator ein neues Item gibt.
* Beispiel:

```yaml
restrictions:
  cancel-shelf: true
```

### Das Einlagern des Items in einen Behälter abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem in die folgenden Blöcke legt:
  * Chest
  * Ender Chest
  * Trapped Chest
  * Barrel
  * Shulker Box
* Beispiel: (Diese Funktion funktioniert im Kreativmodus nicht)

```yaml
restrictions:
  cancel-deposit-in-chest: true
```

### Das Einlegen des Items in einen Ofen abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem in die folgenden Blöcke legt:
  * Furnace
  * Blast Furnace
  * Smoker
* Beispiel: (Diese Funktion funktioniert im Kreativmodus nicht)

```yaml
restrictions:
  cancel-deposit-in-furnace: true
```

### Das Verbrennen des Items in Feuer und Lava abbrechen

* Info: Boolescher Wert, der verhindert, dass das ExecutableItem in Feuer oder Lava verbrennt.
* Beispiel:

```yaml
restrictions:
  cancel-item-burn: true
```

### Das Löschen des Items durch Kaktus-Interaktion abbrechen

* Info: Boolescher Wert, der verhindert, dass das ExecutableItem gelöscht wird, wenn es einen Kaktusblock berührt.
* Beispiel:

```yaml
restrictions:
  cancel-item-delete-by-cactus: true
```

### Das Löschen des Items bei einem Blitzeinschlag abbrechen

* Info: Boolescher Wert, der verhindert, dass das ExecutableItem gelöscht wird, wenn es von einem Blitz getroffen wird.
* Config: `cancel-item-delete-by-lightning: true`
* Beispiel:

```yaml
restrictions:
  cancel-item-delete-by-lightning: true
```

### Das Verzaubern des Items abbrechen

* Info: Boolescher Wert, der verhindert, dass das Item verzaubert wird.
* Beispiel:

```yaml
restrictions:
  cancel-enchant: true
```

### Das Platzieren des Items in einem Amboss abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem in einen Amboss legt. Dadurch wird das Platzieren selbst verhindert, also auch das Umbenennen und Verzaubern.
* Beispiel:

```yaml
restrictions:
  cancel-anvil: true
```

### Das Umbenennen im Amboss abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem in einem Amboss umbenennt.
* Beispiel:

```yaml
restrictions:
  cancel-rename-anvil: true
```

:::tip
Ein Item, das in einem Amboss repariert oder verzaubert wird, **ohne umbenannt zu werden**, behält dank [keepNameInAnvil](/executableitems/configurations/general-configuration#keepnameinanvil) (standardmäßig aktiviert) seinen farbigen Namen bzw. seinen Namen mit Farbverlauf. Diese Option gehört in `plugins/ExecutableItems/config.yml`, nicht in die Item-Datei.
:::

### Das Verzaubern im Amboss abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem in einem Amboss verzaubert.
* Beispiel:

```yaml
restrictions:
  cancel-enchant-anvil: true
```

### Die Interaktion des Items mit Pferd/Maultier/Lama abbrechen

* Info: Boolescher Wert, der die Interaktion der ExecutableItems mit Pferden, Maultieren und Lamas verhindert. Dadurch wird auch der Lagerraum deaktiviert.
* Beispiel:

```yaml
restrictions:
  cancel-horse: true
```

### Das Verbrauchen/Essen des Items abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem verbraucht oder isst.
* Beispiel:

```yaml
restrictions:
  cancel-consumption: true
```

### Die Verwendung des Items im Crafter-Block abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler die ExecutableItems in einen Crafter-Block legt.
* Config: `cancel-crafter: false`

```yaml
restrictions:
  cancel-crafter: true
```

### Einschränkung „Im Inventar gesperrt“

* Info: Boolescher Wert, der dafür sorgt, dass das ExecutableItem in seinem Slot bleibt und der Spieler es auf keine Weise verschieben kann.
* Beispiel (Diese Funktion funktioniert im Kreativmodus nicht)

```yaml
restrictions:
  locked-in-inventory: true
```

### Werkzeug-Interaktionen abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler mit dem ExecutableItem Werkzeug-Interaktionen auslöst, z. B. (Rechtsklick auf einen Block mit einer Axt, um ihn zu entrinden, oder Verwendung einer Hacke, um einen Grasblock umzugraben).
* Beispiel:

```yaml
restrictions:
  cancel-tool-interactions: true
```

### Das Platzieren des Items in einem Item-Rahmen abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem in einen Item-Rahmen legt.
* Beispiel:

```yaml
restrictions:
  cancel-item-frame: true
```

### Die Interaktion mit einem Schmiedetisch abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem in einen Schmiedetisch legt.
* Beispiel:

```yaml
restrictions:
  cancel-smithing-table: true
```

### Die Interaktion mit einem Schleifstein abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem in einen Schleifstein legt.
* Beispiel:

```yaml
restrictions:
  cancel-grind-stone: true
```

### Die Interaktion mit einem Steinschneider abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem in einen Steinschneider legt.
* Beispiel:

```yaml
restrictions:
  cancel-stone-cutter: true
```

### Die Interaktion mit einem Braustand abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem in einen Braustand legt.
* Beispiel:

```yaml
restrictions:
  cancel-brewing: true
```

### Die Interaktion mit einem Leuchtfeuer abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem in ein Leuchtfeuer legt.
* Beispiel:

```yaml
restrictions:
  cancel-beacon: true
```

### Die Interaktion mit einem Kartentisch abbrechen

* Info: Verhindert, dass der Spieler das ExecutableItem in einen Kartentisch legt.
* Beispiel:

```yaml
restrictions:
  cancel-cartography: true
```

### Die Interaktion mit einem Komposter abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem in einen Komposter legt.
* Beispiel:

```yaml
restrictions:
  cancel-composter: true
```

### Die Interaktion mit einem Werfer abbrechen.

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem in einen Werfer legt.
* Beispiel:

```yaml
restrictions:
  cancel-dispenser: true
```

### Die Interaktion mit einem Spender abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem in einen Spender legt.
* Beispiel:

```yaml
restrictions:
  cancel-dropper: true
```

### Die Interaktion mit einem Trichter abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler die ExecutableItem-Items in einen Trichter legt. Gemeint ist, dass das Item im Behälter des Trichters liegen bleibt. Dies verhindert nicht, dass das Item in den Trichter gelangt, wenn es als fallengelassenes Item auf den Trichter fällt.
* Beispiel:

```yaml
restrictions:
  cancel-hopper: true
```

### Die Interaktion mit einem Lesepult abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem in ein Lesepult legt.
* Beispiel:

```yaml
restrictions:
  cancel-lectern: true
```

### Die Interaktion mit einem Dorfbewohner-Händler abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das ExecutableItem in einen Handel mit einem Dorfbewohner/Händler legt.
* Beispiel:

```yaml
restrictions:
  cancel-merchant: true
```

### Das Tauschen des Items zwischen den Händen abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler Items von einer Hand in die andere tauscht. Normalerweise mit der Taste F auf der Tastatur für „Items mit der Zweithand tauschen“.
* Beispiel:

```yaml
restrictions:
  cancel-swap-hand: true
```

### Die Interaktion mit einem Horn abbrechen

* Info: Boolescher Wert, der verhindert, dass der Spieler das Horn spielt, falls das ExecutableItem ein Horn ist.
* Beispiel:

```yaml
restrictions:
  cancel-horn: true
```

### CANCEL ARMOR STAND

* Info: Verhindert, dass der Spieler das ExecutableItem auf einen Rüstungsständer legt.
* Beispiel:

```yaml
restrictions:
  cancel-armorstand: true
```

### CANCEL SPAWNER

* Info: Verhindert, dass der Spieler das Spawn-Ei des ExecutableItems auf die Vanilla-Weise an einem Spawner verwendet.
* Beispiel:

```yaml
restrictions:
  cancel-spawner: true
```

### CANCEL PLACE IN BUNDLE

* Info: Verhindert, dass der Spieler das ExecutableItem in ein Bundle legt.
* Beispiel:

```yaml
restrictions:
  cancel-place-in-bundle: true
```
