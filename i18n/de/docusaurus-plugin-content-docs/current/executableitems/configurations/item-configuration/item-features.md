---
description: >-
  Alle Item-Features von ExecutableItems: Material, Name, Lore, Attribute,
  Haltbarkeit, Hiders, Variablen und mehr, die du als Erstes einrichten
  solltest.
source_hash: a5cf341732f09f83
translated_at: '2026-11-13T17:26:19.486Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Item-Features

Liste der Item-Features. Sie sind das Erste, was du bei deinem Item einrichten solltest.

Premium-Features sind mit diesem Tag gekennzeichnet:  <CustomTag type="premium" />

### Activators

* Sehr wichtige Features, mit denen du deinem Item Fähigkeiten hinzufügen kannst
* Eigenes Wiki für dieses Feature: [EI Activators list](../activator-configuration/list-of-the-activators.md) und [EI Activators features](/executableitems/configurations/activator-configuration/activators-features.md)


### Material of the item

* Info: Das Material des Minecraft-Items des Executable Items
* Beispiel: Wenn das ExecutableItem als Basis-Item DIAMOND haben soll, sieht es so aus:

```yaml
material: DIAMOND
```

* Informationen zur Materialliste findest du unter diesem Link: [Materialliste](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
* Wenn du als Material des Items einen Custom Head einrichten möchtest, sieh dir diesen Link an: [Head settings](/executableitems/configurations/item-configuration/item-features#head-settings).

### Name or DisplayName of the item

* Info: Der Anzeigename des Items. Es ist der sichtbare Name.
* Beispiel: Wenn mein Item als Anzeigename den roten Titel "Epic Sword" haben soll, sieht es so aus:

```yaml
name: '&cEpic Sword'
```

* Wenn du in deinem Anzeigenamen HEX-Farben verwenden möchtest, gehst du so vor:
  * Rufe eine Website auf, die dir bei der Auswahl einer Farbe hilft und dir den Hex-Farbcode liefert. Wir empfehlen [https://htmlcolorcodes.com/](https://htmlcolorcodes.com/)
  * Wähle dann die Farbe deiner Wahl und notiere bzw. kopiere ihren Hex-Farbcode. [Referenz](https://imgur.com/a/tNWtA0a)
  * Diesem Hex-Farbcode musst du ein "#" voranstellen, und das kommt vor den Text, den du einfärben möchtest. #\<HEX\_COLOR\_CODE>\<What you want to color>
  * Am Ende hast du so etwas wie **`#DB6725&lPractice`**, und der Text erscheint [im Spiel](https://imgur.com/a/7umxduF) in der gewählten Farbe.

### Lore or description of the item

* Info: Die Lore bzw. Beschreibung des Items
* Beispiel:

```yaml
lore:
- '&7Insta-Boom Bomb'
- ''
- '&f&lABILITIES:'
- '&f&l - &a&lInsta-Boom &f&l(&3&lRIGHT-CLICK&f&l)'
- '&fRight-Click on a block to use. Can only'
- '&fharvest blocks mined using your bare hands.'
- '&fBlows up a 5x5x5 area from where you used'
- '&fthe bomb. Will mostly blow up the type of block'
- '&fthat you clicked and sometimes the blocks around it.'
```

* Du kannst in der Lore Platzhalter verwenden. Beachte dabei: Wenn du Platzhalter außerhalb des Plugins verwendest und der Lore dann neue Inhalte hinzufügst, etwa Custom Enchants oder eigenen Text, wird alles, was außerhalb der Ssomar-Plugins hinzugefügt wurde, gelöscht, sobald sich einer der Platzhalter aktualisiert. Um das zu vermeiden, darfst du die Lore nicht aktualisieren lassen, das bedeutet aber, dass die Platzhalter nicht aktualisiert werden. Du musst dich für eine der beiden Varianten entscheiden. Zusammengefasst: ZUSÄTZLICHE DINGE IN DER LORE bedeuten KEINE AKTUALISIERUNG bedeuten KEINE EI-Platzhalter in der Lore.

:::info
Um zwischen den Lore-Zeilen eine Leerzeile einzufügen, kannst du '' in der Config-Datei verwenden. Wenn du die Lore in Minecraft über die Custom GUI bearbeitest, musst du stattdessen '\&f' verwenden.
:::

:::info
Bei der kostenlosen Version von ExecutableItems gibt es eine Zeile "Made with ExecutableItems": Sie kann nicht entfernt werden und ist das Gegenstück zum Update, das die Anzahl der Items von 25 auf 500 erhöht hat.
:::

### Glowing effect (enchanted glowing)

* Info: Boolescher Wert, der festlegt, ob das Executable Item einen Glüh- bzw. Verzauberungseffekt erhält.
* Beispiel: 

```yaml
glow: true
```

### Disable the enchant glowing <CustomTag type="version" version="1.20.5" />

* Info: Boolescher Wert, der erzwingt, dass das Item keinen Glüheffekt hat, auch wenn es verzaubert ist. 
* Beispiel: 

```yaml
disableEnchantGlow : true
```

:::info
TIPP: Du kannst den Glüheffekt auch von einigen Vanilla-Items entfernen, zum Beispiel vom Nether Star.
:::

### Display conditions on the lore of the item

* Info: Damit kannst du Bedingungen in der Lore des Items anzeigen.
* Beispiel: 

```yaml
displayConditions:
  playerConditions:
    ifSneaking: true
  worldConditions: {}
  itemConditions: {}
  placeholdersConditions: {}
  enableFeature: true
```

### Durability of the item

* Info: Lege den Haltbarkeitswert des Items fest.
  * Für Versionen bis 1.20.5: Der Haltbarkeitswert muss kleiner oder gleich der maximalen Vanilla-Haltbarkeit des gewählten Items sein.
  * Beispiel: 
```yaml
durability: 150
```
  * Für Versionen ab 1.20.5 (1.20.5++): Die Haltbarkeitsoption lässt sich anpassen. Dadurch werden neue Features möglich, etwa die Synchronisierung der Nutzung des ExecutableItems mit dem Haltbarkeitswert. Außerdem kannst du eine eigene maximale Haltbarkeit festlegen.
  * Beispiel:
```yaml
isDurabilityBasedOnUsage: true
maxDurability: 20 
durability: 19
```

### Enchantments of the item

* Info: Legt die anfänglichen Verzauberungen fest, die das Executable Item beim Erhalt hat.
* Beispiel:

```yaml
enchantments:
  enchantment1: #ID Of this enchantment, you can add as many as you want
    enchantment: sharpness
    level: 1
```

### Unbreakable

* Info: Boolescher Wert, der festlegt, ob das Executable Item unzerbrechlich ist oder nicht
* Beispiel: 

```yaml
unbreakable: true
```

### Attributes <CustomTag type="version" version="1.12" />

* Info: Du kannst die Attribute des ExecutableItems festlegen.
  * `attribute`: Der Typ des Attributs. Liste hier: [Attributliste](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/attribute/Attribute.html)
  * `uuid`: Ein Code, den Minecraft benötigt, um die Attributmodifikatoren zuzuweisen. Du kannst ihn ignorieren.
  * `name`: Der Anzeigename des Attribute Modifiers. Er hilft dir, festzuhalten, was er bewirkt. Er hat keine weitere Auswirkung, als in der GUI angezeigt zu werden.
  * `operation`: Art der Operation, die der AttributeModifier ausführt. Liste hier: [Operationen](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html)
  * `amount`: Der Wert für den AttributeModifier. Er wird mit der gewählten Operation auf das Attribut angewendet.
  * `slot`: Der Slot, in dem der AttributeModifier wirkt.
  * Beispiel:

```yaml
attributes:
  attribute1: #Id of this attribute, you can add as many as you want
    attribute: GENERIC_ARMOR
    name: '&#x26;eDefault name'
    uuid: 8d6b9b6a-c84d-4c76-9b4d-81a1f44a04a0
    amount: 1.0
    operation: ADD_NUMBER
    slot: HAND
```

:::info
**Wenn du die Version 1.12 verwendest, musst du diese Schritte befolgen:**

* Dieser Vorgang erfordert die Premium-Version von EI <CustomTag type="premium" />
* Erstelle dein Item mit Attributen auf einer Website. Wir empfehlen [https://mapmaking.fr/give1.12/](https://mapmaking.fr/give1.12/)
* Gib dir das Item dann in Minecraft selbst
* Führe, während du es in der Hand hältst, den Befehl /ei create \<id> aus
* Das war's! Dein EI hat die Attribute jetzt automatisch importiert.
:::

#### **Keep default attributes**

* Info: Boolescher Wert, der festlegt, ob die Standardattribute des Items beibehalten werden oder nicht.
* Beispiel:

```yaml
keepDefaultAttributes: true
ignoreKeepDefaultAttributesFeature: false
```

:::warning
Ab 1.21 **verliert ein Item ohne eigene Attribute, das diese beiden Zeilen nicht hat, die Standardattribute seines Materials**: Ein Schwert schlägt dann wie eine Faust, ein Rüstungsteil gibt keine Rüstung. ExecutableItems listet diese Items nach jedem Laden in der Konsole auf. So korrigierst du alle deine Items auf einmal: `/ei util-set-keepdefaultattributes-all-ei true`.
:::

:::info Schmiedetisch
Mit `keepDefaultAttributes: true` erhält ein Item, das am Schmiedetisch aufgewertet wird (Diamant zu Netherit), die Standardattribute seines neuen Materials (Netherit-Rüstung, Zähigkeit und Rückstoßresistenz). Die Attribute des Items selbst bleiben erhalten.
:::

* Unter diesem Link gibt es ein Tutorial zu Attributen und ihren Features.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HqyF0QBYIY4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


#### **ignoreKeepDefaultAttributesFeature:** 

* Info: Ignoriert die Einstellung von Keep default attributes. Nützlich für den dritten Fall in der Erklärung dieser Tabelle:
* Beispiel:

```yaml
ignoreKeepDefaultAttributesFeature: true
```

### Custom model data <CustomTag type="version" version="1.14" />

* Info: 
  * Für Minecraft-Versionen vor 1.21.4: Ganzzahl, die den Wert des customModelData-Features des Items festlegt. Nützlich, um verschiedene Texturen für ein Item zu erstellen.
  * Seit Minecraft-Version 1.21.4 kannst du auch Text und boolesche Werte hinzufügen.
* Beispiel: 

```yaml
# For the Minecraft version before 1.21.4
customModelData: 2232

# Since the 1.21.4
# Use ; to separate your data
customModelData: 1.0;true;hello;5.0;false;true;my text 2

# A vanilla item like this : /give @p brick[custom_model_data={floats:[1.0],flags:[true],strings:["hello"]}] 1
# Will look like this in EI : 
customModelData: 1.0;true;hello
```

* Tutorial: [https:/.ssomar.com/executableitems/questions-or-guides/premium-custom-textures](https:/.ssomar.com/executableitems/questions-or-guides/premium-custom-textures)

### Item Rarity features <CustomTag type="version" version="1.20.5" />

* Info: Rarity ist eine Vanilla-Statistik, die auf Items und Blöcke angewendet wird und ihren Wert und ihre Seltenheit anzeigt. Sie hat keinerlei Auswirkung auf das Gameplay. Es gibt vier Seltenheitsstufen: Common, Uncommon, Rare und Epic.
  * `enableRarity`: Boolescher Wert, der angibt, ob das Feature aktiviert ist oder nicht
  * `rarity`: Art der Seltenheit
* Beispiel:

```yaml
itemRarity:
  enableRarity: false
  rarity: COMMON
```

### Equippable features <CustomTag type="version" version="1.21.2" />

* Info: Dieser Abschnitt konfiguriert das Verhalten eines ausrüstbaren Items. Wenn aktiviert, kann das Item in einem festgelegten Slot ausgerüstet werden und dabei optional einen Soundeffekt auslösen. Du kannst außerdem ein eigenes Modell für das ausgerüstete Item angeben, festlegen, ob es Schaden nimmt, wenn der Träger verletzt wird, und Flags setzen, die das Tauschen und Entfernen erlauben oder einschränken. Zusätzlich kannst du einschränken, welche Entities das Item ausrüsten dürfen.
  * `enable`: Auf true setzen, um das Ausrüsten für dieses Item zu aktivieren
  * `slot`: Der Ausrüstungs-Slot (z. B. CHEST, HEAD, LEGS, FEET), in dem das Item ausgerüstet wird
  * `enableSound`: Boolescher Wert, der festlegt, ob beim Ausrüsten des Items ein Sound abgespielt wird
  * `sound`: Soundeffekt, der beim Ausrüsten abgespielt wird
  * `equipModel`: (Optional) eigenes Modell für das ausgerüstete Item (z. B. "mynamespace:mymodel")
  * `cameraOverlay`: (Optional) eigenes Kamera-Overlay, wenn das Item ausgerüstet ist
  * `damageableOnHurt`: Boolescher Wert, der festlegt, ob das Item Haltbarkeit verliert, wenn der Träger verletzt wird
  * `dispensable`: Boolescher Wert, der festlegt, ob das Item entfernt bzw. fallen gelassen werden kann
  * `swappable`: Boolescher Wert, der festlegt, ob das Item per Rechtsklick ausgerüstet werden kann (es wird dann gegen das Item getauscht, das in diesem Slot getragen wird)
  * `allowedEntities`: Liste der Entities, die dieses Item ausrüsten dürfen
* Beispiel:

```yaml
equippableFeatures:
    enable: false
    slot: CHEST
    enableSound: false
    sound: ITEM_ARMOR_EQUIP_DIAMOND

    equipModel: "" # Example: "mynamespace:mymodel"
    cameraOverlay: "" # Example: "mynamespace:mymodel"

    damageableOnHurt: false
    dispensable: true
    swappable: true

    allowedEntities:
     - PLAYER
```

### Repairable features <CustomTag type="version" version="1.21.2" />

* Info: Features rund um die Reparatur des ExecutableItems.
  * `enable`: Boolescher Wert, der festlegt, ob das Feature aktiviert ist oder nicht
  * `repairCost`: Ganzzahl, die die Kosten für die Reparatur am Amboss angibt
* Beispiel:

```yaml
repairableFeatures:
    enable: false
    repairCost: 2 
```

### Glider <CustomTag type="version" version="1.21.2" />

* Info: Feature, mit dem du mit dem Item gleiten kannst, so wie du es normalerweise mit dem Vanilla-Item "Elytra" tust.
* Beispiel:

```yaml
glider: false
```

### itemModel <CustomTag type="version" version="1.21.2" />

* Info: Pfad eines eigenen Item-Modells im Texturenpaket im Format \<mynamespace\:model\_id>, das auf assets/\<mynamespace>/models/item/\<model\_id> verweist.
* Beispiel:

```yaml
itemModel: "" # "mynamespace:mymodel"
```

### tooltipModel <CustomTag type="premium" /> <CustomTag type="version" version="1.21.2" />

* Info: Pfad eines eigenen Tooltip-Modells im Texturenpaket im Format \<mynamespace\:model\_id>, das auf /assets/\<mynamespace>/textures/gui/sprites/tooltip/\<id>\_frame verweist
* Beispiel:

```yaml
tootipModel: "" # "mynamespace:mymodel"
```

### Features related to the item dropped

Hier lernst du Features kennen, die nur sichtbar sind, wenn das Item auf den Boden fallen gelassen wird.

#### Glowing on drop

* Info: Wenn das Item fallen gelassen wird, hat es einen Glüheffekt
* Beispiel: 

```yaml
dropFeatures:
  glowDrop: false
```

#### Glowing color when dropped

* Info: Wenn für das Item glowEffect aktiviert ist, kannst du die Farbe des Glüheffekts beim Fallenlassen festlegen.
* Mögliche Farben: [Farbreferenz](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)
* Beispiel:

```yaml
dropFeatures:
  glowDrop: false
  glowDropColor: WHITE
```

#### Display name when the item is dropped

* Info: Lege fest, ob das Item beim Fallenlassen seinen Anzeigenamen als schwebenden Text anzeigt.
* Beispiel: 

```yaml
dropFeatures:
  displayNameDrop: true
```

###  NBT Tags

* Info: Erfordert das Plugin [**NBTAPI**](https://www.spigotmc.org/resources/nbt-api.7939/), das auf Spigot verfügbar ist.
Mit diesem Feature kannst du eigene NBT-Tags in dein ExecutableItem einfügen.
  * `type`: Der Typ des Werts, den du speicherst, z. B.:
    * BOOLEAN: true | false
    * STRING: car
    * INTEGER: 6
    * DOUBLE: 17.6
    * COMPOUND: Beispiel unten, es hängt von deinem Bedarf ab und davon, was du hinzufügen möchtest.
  * `key`: Der String-Schlüssel, der diesen NBT-Speicher repräsentiert
  * `value`: Wert des NBT-Tags, den du hinzufügst
* Beispiel:

```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: 3
 '2': #Id of this nbt, you can add as many as you want
    type: STRING
    key: 'MyOtherKey'
    value: 'myValue'
 '3': #Id of this nbt, you can add as many as you want
    type: BOOLEAN
    key: 'KeyKeyKeykey'
    value: true
 '4': #Id of this nbt, you can add as many as you want
    type: DOUBLE
    key: 'KeyKeyKeykeykeykey'
    value: 0.5
 '5': #Id of this nbt, you can add as many as you want
    type: BYTE
    key: 'IsCustom'
    value: 1
 '6': #Id of this nbt, you can add as many as you want
    key: ExtraAttributes
    type: COMPOUND
    value:
      nbt:
        '0':
          key: id
          type: STRING
          value: TRIAL_OF_THE_SUN_GOD
 '7': #Id of this nbt, you can add as many as you want
    key: CanDestroy
    type: STRING_LIST
    value:
    - minecraft:stone
 '8':
    key: PublicBukkitValues
    type: COMPOUND
    value:
      nbt:
        '0':
          key: auraskills:item_modifiers
          type: COMPOUND_LIST
          value:
            '0':
              key: comp0
              nbt:
                '0':
                  type: COMPOUND
                  value:
                    nbt:
                      '0':
                        key: auraskills:stat
                        type: STRING
                        value: auraskills/wisdom
                      '1':
                        key: auraskills:value
                        type: DOUBLE
                        value: '%rand:1|10000%'
                      '2':
                        key: auraskills:operation
                        type: STRING
                        value: add
```

### Bukkit tags

* Info: Du kannst deinem ExecutableItem Bukkit-Tag-Werte hinzufügen.
* Beispiel:

```yaml
tags:
 - mytag:blabla1
 - myothertag:blabla2
```

Im Spiel wird es in PublicBukkitValues so dargestellt:

```yaml
"executableitems:mytag":"blabla1"
"executableitems:myothertag":"blabla2"
```

Du kannst im Wertfeld von NBTs auch %rand%-Platzhalter schreiben. Das funktioniert nur für die Datentypen STRING, INTEGER und DOUBLE
```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: '%rand:-100|100%'
```
Funktioniert auch im Ingame-Editor
```
INTEGER::foo::%rand:1|2%
```  
  
Du kannst NBTs auf Wunsch auch im PDC (Persistent Data Container) speichern.
* Ingame-Beispiel: `integer::take::0::true`
* Item-Config:
```yml
nbt:
  '0':
    key: take
    saveInPDC: true
    type: INT
    value: 0
```

### Hiders features

* Info: Einstellungen zum Ausblenden von Features, die bei deinem ExecutableItem normalerweise angezeigt werden. Alle Features bleiben funktionsfähig, auch wenn sie ausgeblendet sind.
  * `hideEnchantments`: Boolescher Wert, der angibt, ob die Verzauberungen des ExecutableItems in der Lore angezeigt werden oder nicht.
  * `hideUnbreakable`: Boolescher Wert, der angibt, ob die Unzerbrechlich-Beschreibung in der Lore angezeigt wird oder nicht.
  * `hideAttributes`: Boolescher Wert, der angibt, ob die Attribute des ExecutableItems in der Lore angezeigt werden oder nicht.
  * `hidePotionEffects`: Boolescher Wert, der angibt, ob die Trank-Effekte des ExecutableItems in der Lore angezeigt werden oder nicht. Verwende ab Version 1.20.5 hideAdditionalTooltip.
  *   hideAdditionalTooltip (nur ab 1.20.5 verfügbar, 1.20.5++) 

      Einstellung zum Anzeigen/Ausblenden von Trank-Effekten, Buch- und Feuerwerksinformationen, Karten-Tooltips, Bannermustern und Verzauberungen von verzauberten Büchern. Sie ersetzt das alte hidePotionEffects
  * `hideUsage`: Boolescher Wert, der angibt, ob das Usage-Custom-Feature des ExecutableItems-Plugins für das Item selbst in der Lore angezeigt wird oder nicht.
    * Du kannst die Usage manuell anzeigen, indem du beim Bearbeiten deiner Lore den Platzhalter %usage% hinzufügst.
  * `hideDye`: Boolescher Wert, der angibt, ob die Färbung (#\<color>) des ExecutableItems in der Lore angezeigt wird oder nicht.
  * `hideArmorTrim`: Boolescher Wert, der angibt, ob der Rüstungsbesatz (Armor Trim) des ExecutableItems in der Lore angezeigt wird oder nicht.
  * `hidePlacedOn`: Boolescher Wert, der angibt, ob der NBT-Tag "Can be placed on: \[...]" des ExecutableItems in der Lore angezeigt wird oder nicht.
  * `hideDestroys`: Boolescher Wert, der angibt, ob der NBT-Tag "Can destroy: \[...]" des ExecutableItems in der Lore angezeigt wird oder nicht.
  * `hideToolTip`: Boolescher Wert, der angibt, ob der Tooltip ausgeblendet wird oder nicht. (Nur ab 1.20.5 verfügbar, 1.20.5++)
* Beispiel:

```yaml
hiders:
  hideEnchantments: false
  hideUnbreakable: false
  hideAttributes: false
  hidePotionEffects: false
  hideAdditionalTooltip: false
  hideUsage: false
  hideDye: false
  hideArmorTrim: false
  hidePlacedOn: false
  hideDestroys: false
  hideToolTip: false
```

### Usage features

Dieser Abschnitt erklärt, was Usage ist, und beschreibt die zugehörigen Features.

#### Usage

* Info: Usage ist ein Ganzzahlwert, der in deinem ExecutableItem gespeichert ist. Er kann über usageModification innerhalb eines Aktivators oder über Befehle geändert werden. Es ist aber nicht nur ein gespeicherter Wert: Er wurde geschaffen, um das "Custom-Haltbarkeitssystem" deines ExecutableItems darzustellen. Das heißt, wenn die Usage irgendwie 0 erreicht, wird dein Item gelöscht.
* Beispiel: 
  * Eine Usage von 1 bedeutet nicht, dass das Item eine Haltbarkeit von eins hat, denn wie bereits erklärt, ist es ein eigenes Haltbarkeitssystem. Das Item hält so lange, bis die Usage 0 erreicht. Wenn du zum Beispiel einen Aktivator zu deinem Item hinzufügst, der das Feature usageModification mit dem Wert "-1" hat, ist dein Item verschwunden, sobald der Aktivator einmal ausgelöst wurde.
  * Gehen wir von derselben Idee aus: Wir haben Usage 1. Wenn wir keine Aktivatoren haben, die die Usage des Items ändern, hält unser Item unendlich lange, bis wiederum irgendwie ein Befehl oder ein neu hinzugefügter Aktivator die Usage auf einen Wert kleiner oder gleich 0 ändert. Dann wird das Item gelöscht.
    * ```yaml
      usage: 1
      ```
  * Wie gesagt, betrachte Usage nicht nur als Haltbarkeitssystem, denn sie kann auch steigen! Wenn wir zum Beispiel einen Aktivator haben, der bei usageModification statt eines negativen einen positiven Wert hat, steigt unsere Usage, sobald der Aktivator ausgelöst wird ^^
  * Wenn du nun möchtest, dass sich dein Item weder erhöht noch verringert, nutzt du diesen Custom-Wertspeicher im Grunde gar nicht. Du kannst die Usage auf -1 setzen.
    * ```yaml
      usage: -1
      ```

#### Usage limit <CustomTag type="premium" />

* Info: Ganzzahlwert, der die Obergrenze begrenzt, die die Usage erreichen kann. (Der Wert darf nicht 0 sein)
* Beispiel: 

```yaml
usageLimit: 600 #Usage will not be able to go up more than this value, -1 to don't take it into account
```

#### Uses per day

* Info: Ganzzahlwert, der begrenzt, wie oft du das Item pro Tag (in echter Zeit) verwenden kannst
* Beispiel: 

```yaml
usePerDay: 200 # -1 to ignore it
```

### Food features <CustomTag type="version" version="1.20.5" />

* Info: Mit diesem Feature kannst du Nahrungseinstellungen deines ExecutableItems anpassen
  * `nutrition`: Ganzzahlwert, der die Menge an "halben Hungerpunkten" angibt, die den Spieler füllen, sobald das Item gegessen wird
    * Zum besseren Verständnis: Der Spieler hat maximal 20 Nährwert, der im Spiel als 10 Hungersymbole angezeigt wird, wobei sich jedes Symbol in 2 teilen lässt.
  * `saturation`: Ganzzahlwert, der die Sättigung angibt, die der Spieler erhält, sobald das Item gegessen wird.
  * `isMeat`: Boolescher Wert, der dafür sorgt, dass das Item als Nahrung gilt. Dies wird erzwungen, das heißt: Wenn du diesen Wert auf true setzt, gilt jedes Item, sogar solche, die nicht gegessen werden können, als Nahrung und ist somit verzehrbar.
  * `canAlwaysEat`: Boolescher Wert, der angibt, ob das Item immer gegessen werden kann, auch wenn die Hungerleiste des Spielers voll ist.
*  Beispiel:

```yaml
foodFeatures:
  nutrition: 1
  saturation: 1
  isMeat: false
  canAlwaysEat: true
```

### Consumable features <CustomTag type="version" version="1.21.4" />

* Info: Features rund um Verzehrbares. Damit kannst du die Consumable-Optionen anpassen, ähnlich dem Food-Feature.
  * `enable`: Boolescher Wert, der die Consumable-Features aktiviert oder deaktiviert
  * `animation`: ANIMATION\_TYPE, der beim Essen/Verzehren des ExecutableItems abgespielt wird
  * `sound`: SOUND, der beim Essen/Verzehren des Items abgespielt wird
  * `hasConsumeParticles`: Boolescher Wert, der angibt, ob das Item beim Essen Partikel abgibt
  * `consumeSeconds`: Anzahl der Sekunden, die das Essen/Verzehren des Items dauert.
* Beispiel:

```yaml
consumableFeatures:
  enable: true
  animation: SPYGLASS
  sound: ITEM.ARMOR.EQUIP_DIAMOND
  hasConsumeParticles: false
  consumeSeconds: 3
```

### Potion Settings

Hier kannst du die Trank-Features deines ExecutableItems anpassen, wenn das Material des Items ein Trank ist.

#### Potion color

* Info: Ganzzahl einer MapInfo-Farbe, die eine Farbe darstellt. Verwende eine Seite wie [https://www.tydac.ch/color/](https://www.tydac.ch/color/), um den MapInfo-Wert einer Farbe zu erhalten.
* Beispiel:

```yaml
potionFeatures:
  potionColor: 10265481
```

#### Potion type

* Info: Der Trank-Typ, den das Trank-Item haben soll. Es ist nur ein Anzeige-Feature und hat keinen Einfluss auf das tatsächliche Verhalten des Tranks. Die Liste findest du hier: [Trank-Typen](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionType.html)
* Beispiel:

```yaml
potionFeatures:
  potionType: WIND_CHARGED
```

#### Potion effects

* Info: Hier kannst du die Trank-Effekte erstellen, die dein Item haben soll
  * `potionEffectType`: Gewählter PotionEffectType, Liste hier verfügbar: [Trank-Effekte](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
  * `isAmbient: Boolescher Wert, der den Trank ambient macht, sodass der Trank-Effekt mehr durchscheinende Partikel erzeugt.
  * `duration`: Ganzzahlwert in Ticks (20 Ticks = 1 Sekunde), der die Dauer des Trank-Effekts angibt.
  * `amplifier`: Ganzzahlwert, der die Stufe/den Grad/die Stärke des Trank-Effekts angibt. Amplifier 0 bedeutet Stufe 1, Amplifier 1 bedeutet Stufe 2 und so weiter.
  * `hasParticles`: Boolescher Wert, der die Anzeige von Effektpartikeln um den Spieler aktiviert oder deaktiviert.
  * `hasIcon`: Boolescher Wert, der die Anzeige des Effektsymbols oben rechts auf dem Bildschirm des Spielers aktiviert oder deaktiviert.
* Beispiel:

```yaml
potionFeatures:
  potionColor: 10265481
  potionType: FIRE_RESISTANCE
  potionEffects:
    pEffect0:
      isAmbient: false
      duration: 30
      potionEffectType: HEALTH_BOOST
      amplifier: 0
      hasParticles: false
      hasIcon: false
```

### Armor color

* Info: Wenn dein ExecutableItem eine Lederrüstung ist, kannst du hier einen MapInfo-Farbwert festlegen, den du auf dieser Website erhältst, um die Farbe zu ändern: [https://www.tydac.ch/color/](https://www.tydac.ch/color/).
  * <CustomTag type="version" version="1.21.3" /> Auf Paper ist `armorColor` auch bei den anderen Rüstungsteilen (Helm, Brustplatte, Beinschutz, Schuhe aus jedem Material, Pferde- und Wolfsrüstung) und bei der Elytra verfügbar. Es setzt deren Vanilla-Komponente `dyed_color`, die Custom Models (Nexo, ItemsAdder...) für ihre Einfärbung verwenden: Ohne sie kann ein solches Modell unsichtbar sein. `/ei create` behält diese Farbe vom Item in deiner Hand bei.
* Beispiel:

```yaml
armorColor: 7702341
```

### Head Settings

Hier kannst du die Konfiguration für Head Settings auswählen, also den Custom Head aus einem Spielerkopf-Wert oder aus einer Datenbank.

#### If you don't have a plugin for head database <CustomTag type="version" version="1.13" />

* Wenn du für 1.13++ einen Custom Head hinzufügen möchtest, ohne ein Datenbank-Plugin zu haben, kannst du diese Schritte befolgen:
  * Setze das Material des ExecutableItems auf PLAYER\_HEAD
  * Besuche eine Custom-Head-Seite, zum Beispiel diese: [https://minecraft-heads.com/custom-heads](https://minecraft-heads.com/custom-heads)
  *   Hole dir dann den Value des Kopfes\

      
  * Kopiere diesen Wert und füge ihn in das Feature headValue von ExecutableItems ein
  * Beispiel:
  * ```yaml
    headValue: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTk4ZGY0MmY0NzdmMjEzZmY1ZTlkN2ZhNWE0Y2M0YTY5ZjIwZDljZWYyYjkwYzRhZTRmMjliZDE3Mjg3YjUifX19
    ```

#### If you have the plugin Head Database <CustomTag type="version" version="1.12" />

* Wenn du für 1.12++ einen Custom Head hinzufügen möchtest und das Plugin Head Database hast, kannst du diese Schritte befolgen:
  * Öffne die GUI deines Plugins und hole dir die ID des gewünschten Kopfes
  * Füge sie dann in den Head-Features bei headDBID ein
  * Beispiel:
  * ```yaml
    headDBID: 44328
    ```
* Hier findest du die Links, falls du es nicht hast und haben möchtest.
  * Premium-Version: [Head Database](https://www.spigotmc.org/resources/head-database.14280/)
  * Kostenlose Version: [Head DB](https://www.spigotmc.org/resources/headdb-head-menu-auto-update-free.84967/)

### whitelistedWorlds

* Info: Liste von Strings mit den Namen der Welten, in denen du Spielern die Nutzung des ExecutableItems verbieten oder erlauben möchtest.
* Beispiel:

```yaml
whitelistedWorlds:
- ZombieSurvivalWorld_the_end # This allows the use of the EI in that world
- '!ApocalypseWorld' # Using ! Disables the use of the EI in that world
```

### Store item info

* Info: Boolescher Wert, der angibt, ob die Informationen im Item selbst gespeichert werden oder nicht. Derzeit wird das Feature "owner" gespeichert. Wenn du also den Platzhalter %owner% oder die Bedingungen rund um den Owner verwenden möchtest, muss es aktiviert sein.
* Beispiel:

```yaml
storeItemInfo: false
```

### Owner features

#### canBeUsedOnlyByTheOwner

* Info: Boolescher Wert, der angibt, ob das Item nur vom Owner verwendet werden kann oder nicht.
  * Das funktioniert nur, wenn Store item info aktiviert ist, damit das Item einen Owner hat.
* Beispiel: 

```yaml
canBeUsedOnlyByTheOwner: false
```

#### cancelEventIfNotOwner

* Info: Boolescher Wert, der angibt, ob alle Events abgebrochen werden, wenn das Item nicht vom Owner verwendet wird. Das bedeutet: Wenn der Aktivator zum Beispiel PLAYER\_BREAK\_BLOCK ist und jemand, der nicht der Owner ist, versucht, dieses Item zu verwenden, kann er keinen Block abbauen, da alle Events abgebrochen werden.
  * Das funktioniert nur, wenn Store item info aktiviert ist, damit das Item einen Owner hat.
* Beispiel: 

```yaml
cancelEventIfNotOwner: false
```

#### onlyOwnerBlackListedActivators

* Info: Liste von Aktivator-IDs deines ExecutableItems. Dies ist eine Blacklist, die das Feature canBeUsedOnlyByTheOwner deaktiviert. Das heißt, alle hier eingetragenen Aktivator-IDs, die auf einen Aktivator des ExecutableItems verweisen, können von allen verwendet werden, auch wenn canBeUsedOnlyByTheOwner auf true steht.
  * Das funktioniert nur, wenn Store item info aktiviert ist, damit das Item einen Owner hat.
* Beispiel: 

```yaml
onlyOwnerBlackListedActivators:
- activator0
- activator1
```

### cancelEventIfNoPermission

* Info: Boolescher Wert, der angibt, ob alle Events abgebrochen werden, wenn der Spieler die Berechtigung (ei.item.\<id>) zur Nutzung des Items nicht hat. Das bedeutet: Wenn der Aktivator zum Beispiel PLAYER\_BREAK\_BLOCK ist und jemand ohne die Berechtigung zur Nutzung dieses Items versucht, es zu verwenden, kann er keinen Block abbauen, da alle Events abgebrochen werden.

```yaml
cancelEventIfNoPermission: true
```

### Keep item on death

* Info: Boolescher Wert, der angibt, ob der Spieler das Item nach dem Tod behält oder nicht.
* Beispiel: 

```yaml
keepItemOnDeath: true
```

:::info
Es ist kompatibel mit dem keepInventory-Feature von WorldGuard und mit der Vanilla-Gamerule keepInventory
:::

### Disable stack <CustomTag type="premium" />

* Info: Boolescher Wert, der angibt, ob verhindert wird, dass das ExecutableItem gestapelt werden kann. Wenn du dieses Feature auf true setzt, wird customStackSize dieses Items auf 1 gesetzt.
* Beispiel: 

```yaml
disableStack: true
```

### customStackSize <CustomTag type="premium" /> <CustomTag type="version" version="1.20.5" />

* Info: Ganzzahlwert, der die Stapelgröße dieses Items festlegt. Er überschreibt die aktuelle Stapelgröße.
* Zum besseren Verständnis: Das Vanilla-diamond\_sword hat eine Stapelgröße von 1, da es sich nicht stapeln lässt. Mit diesem Feature kannst du diesen Wert erhöhen. Dirt hingegen hat eine Stapelgröße von 64, aber damit kannst du sie verringern, zum Beispiel auf eine Stapelgröße von 20.
* Beispiel: 

```yaml
customStackSize: 32
```

### Variables Settings

* Info: Variablen sind eine Möglichkeit, Informationen in deinem ExecutableItem zu speichern. Damit kannst du Mengen verfolgen, Positionen speichern und im Grunde alles ablegen, was du möchtest. Sie helfen dabei, dynamische und anpassbare Item-Verhaltensweisen zu erstellen. Das heißt, Variablen erlauben dir, für jedes Item einzigartige Verhaltensweisen zu schaffen, indem du Daten speicherst und verfolgst, die für dieses Item spezifisch sind. Du kannst zum Beispiel verfolgen, wie oft ein Spieler ein bestimmtes Item verwendet hat oder wie viele Spieler er damit getötet hat.
  * `variableName`: Name der Variable. Er dient als Referenz mit %var\_\<name>%, um sie in der Lore, in Befehlen usw. zu verwenden. Dieser Name darf nicht "id" oder "usage" lauten und keine Leerzeichen enthalten.
  * `type`: VariableType der Variable. Es gibt die folgenden Typen mit Anwendungsbeispielen:
    * STRING: Mit diesem Variablentyp kannst du STRING-Werte speichern, etwa Wörter, Zahlen, Buchstaben, Zeichen usw. Du kannst zum Beispiel den Namen des zuletzt getroffenen Spielers speichern. Dieser Variablentyp unterstützt `variableModification(type:MODIFICATION)` zum Erhöhen oder Verringern des Werts nicht. Er ist statisch, solange er nicht durch ein `variableModification(type:SET)` ersetzt wird, das den alten Wert überschreibt.
    * NUMBER: Mit diesem Variablentyp kannst du FLOAT-Werte speichern, also Zahlen. Zum Beispiel, wenn du die Anzahl abgebauter Blöcke oder Kills speichern, die Sekunden bis zu einem Ereignis mitzählen möchtest usw. Dieser Variablentyp unterstützt `variableModification(type:MODIFICATION)` und `variableModification(type:SET)`.
    * LIST: Diese Variable ist eine Liste, die STRING-Werte speichert. Sie ist nützlich, um eine Liste von Dingen zu speichern, zum Beispiel um angeklickte Blöcke zu verfolgen und an diese Liste anzuhängen, oder um getötete Spieler hier anzuhängen usw.
  * `isRefreshableClean`: Boolescher Wert, der die Refresh-Bereinigung aktiviert. Damit kannst du eigene Lore-Zeilen hinzufügen, die nicht entfernt werden, wenn die Variable aktualisiert wird. Es wird empfohlen, ihn auf true zu setzen.
  * `refreshTagDoNotEdit`: Wird vom Plugin automatisch generiert. Er hilft den Funktionen von `isRefreshableClean`, korrekt zu arbeiten. Rühre ihn also nicht an.
  * `papiParser`: Der String-Wert, der den PlaceholderAPI-String enthält, in dem der Wert der Variable zum Parsen steht. Damit kannst du Variablenwerte in PlaceholderAPI-Platzhalter einfügen und die Ergebnisse in der Lore anzeigen. 
    * Bsp.:
      * Variable ID: `level`
      * papiParser-String-Wert: `%math_<VAR>*<VAR>%`
        * Der String `<VAR>` steht für den aktuellen Wert der Variable beim Parsen. Wenn du den Wert an mehreren Stellen des PlaceholderAPI-Platzhalter-Strings einsetzen möchtest, tippe einfach `<VAR>` an die Stellen, an denen du ihn brauchst.
      * Platzhalter-String für die Lore: `%var_level_papi%`
* Beispiel
  * ```yaml
    variables:
      var2:
        variableName: ThisVariableIsTypeIntegerAndICanDoModifications
        type: NUMBER
        default: 10.0
      var1:
        variableName: anotherVariable # This variable is type string
        type: STRING
        default: '' #It starts with no value, we can then change it from an activator or using commands
      var0:
        variableName: nameOfVariable
        type: LIST
        default:
        - value1
        - value2
        - '1'
        - '2'
    ```
* Weitere Informationen zu anderen Variablentypen findest du auf der folgenden Seite:
  * [SCore variables](/tools-for-all-plugins-score/score-variables)

### Custom give first join features

* Info: Hier kannst du das Feature anpassen, mit dem das Item ausgegeben wird, wenn der Spieler dem Server zum ersten Mal beitritt.
  * giveFirstJoin: Boolescher Wert, der angibt, ob das Feature aktiviert ist oder nicht
  * giveFirstJoinAmount: Ganzzahlwert, der angibt, wie viele Items dieses ExecutableItems dem Spieler gegeben werden.
  * giveFirstJoinSlot: Slot, in dem das ExecutableItem dem Spieler gegeben wird.
* Beispiel:

```yaml
giveFirstJoinFeatures:
  giveFirstJoin: false
  giveFirstJoinAmount: 1
  giveFirstJoinSlot: 0
```

### Item Recognition feature <CustomTag type="premium" />

* Info: Mit diesem Feature können andere Items, die nicht das ExecutableItem sind, so behandelt werden, als wären sie das ExecutableItem, das du gerade bearbeitest. Die Idee ist, mit Recognitions zu arbeiten: Das ist eine Liste von Erkennungstypen. Wenn einer davon zwischen deinem ExecutableItem und einem anderen Item übereinstimmt (auch wenn es kein ExecutableItem ist), hat das andere Item ebenfalls die Features des ExecutableItems. Das funktioniert, solange es gemäß den Anforderungen der Recognitions erkannt wird.
  * Verfügbare Recognition-Optionen:
    * NAME:  Aktiviert die Erkennung für alle Items, die dem Custom-Namen des ExecutableItems entsprechen
    * MATERIAL: Aktiviert die Erkennung für alle Items, die dem Material des ExecutableItems entsprechen
    * LORE: Aktiviert die Erkennung für alle Items, die der Lore des ExecutableItems entsprechen
* Wenn du zum Beispiel ein ExecutableItem als Diamant-Spitzhacke erstellst, das den Aktivator PLAYER\_RIGHT\_CLICK und bei den Befehlen "SEND\_MESSAGE I am a pickaxe" hat, wird bei jedem Rechtsklick diese Nachricht im Minecraft-Chat gesendet. Wenn du jetzt die Item Recognition zum Beispiel für das Material aktivierst, lösen ALLE Diamant-Spitzhacken auf dem Server diesen Aktivator aus, und die Nachricht wird angezeigt.
* Beispiel: 

```yaml
recognitions:
- NAME
- MATERIAL  
- LORE 
```

* Beispielszenarien:
  * Wenn ein EI-Item nur die Item Recognition `MATERIAL` hat und ein DIAMOND ist, verhalten sich alle Diamanten, die es auf dem Server gibt, wie dieses EI-Item
  * Wenn ein EI-Item nur die Item Recognition `NAME` hat und "\&dAngle" heißt, verhält sich jedes Item mit dem Namen "\&dAngle" wie das ursprüngliche EI-Item. ABER wenn der Name "\&eAngle" oder ein anderer Name wäre, funktioniert es nicht.
  * Wenn ein EI-Item nur die Item Recognition `LORE` hat, verhält sich ein Item nur dann wie das EI-Item, wenn es EXAKT dieselben Farbcodes in den Lore-Zeilen hat und jede Groß- und Kleinschreibung von Buchstaben und Zeichen übereinstimmt.
  * Wenn ein EI-Item nur die Item Recognition `MATERIAL` und `NAME` hat, müssen die Items den EXAKTEN NAMEN und das EXAKTE MATERIAL des EI-Items haben, damit das Item als EI-Item gilt.
* Beachte: Wenn bei einem deiner ExecutableItems die Item Recognition auf MATERIAL aktiviert ist, solltest du keine weiteren MATERIAL-basierten Item Recognitions für ein anderes ExecutableItem mit demselben MATERIAL verwenden. Der Grund: Wenn 2 ExecutableItems die Recognition MATERIAL aktiviert haben und beide DIAMOND\_BLOCK sind, hat nur das erste in alphabetischer Reihenfolge die höchste Priorität, falls jemand einen DIAMOND\_BLOCK auslöst.

## Use cooldown features <CustomTag type="version" version="1.21.2" />

* Info: Feature, das dem Item einen Use-Cooldown im Vanilla-Stil hinzufügt, ähnlich dem Cooldown bei Enderperlen oder Chorusfrüchten.
  * `cooldownGroup`: String-Wert, der eine Cooldown-Gruppe definiert. Items mit derselben Cooldown-Gruppe teilen sich denselben Cooldown. Muss kleingeschrieben sein und dem NamespacedKey-Format folgen (z. B. "mygroup" oder "namespace:mygroup")
  * `vanillaUseCooldown`: Ganzzahlwert, der die Dauer des Cooldowns in Sekunden angibt
* Beispiel:

```yaml
useCooldown:
  cooldownGroup: "custom_weapon_group"
  vanillaUseCooldown: 5
```

:::info
Dieser Cooldown unterscheidet sich vom Aktivator-Cooldown-System. Es ist ein Vanilla-Minecraft-Cooldown, bei dem das Item während des Cooldowns in der Hotbar "ausgegraut" angezeigt wird.
:::


## Depending on the item type

### Container Features

* Info: Hier kannst du die Container-Features anpassen, wenn der Block ein Container ist, etwa eine Truhe oder ein Fass.
  * `isLocked`: Boolescher Wert, der angibt, ob der Container verschlossen ist oder nicht
  * `lockedName`: String-Wert, der den Schlüsselnamen angibt, wenn der Container verschlossen ist. Das ist ein Minecraft-Feature: Wenn du ein Item mit demselben Namen wie lockedName hast, kannst du die Truhe öffnen, sonst nicht.
  * `containerContent`: Liste von Materialien im Container, wenn er platziert wird, im Format slot:\<slot>;\<material>
* Beispiel:

```yaml
containerFeatures:
  isLocked: true
  lockedName: thisIsTheKey
  containerContent:
  - slot:0;minecraft:loom
```

### Tool Rules <CustomTag type="version" version="1.20.5" />

Info: Hier kannst du die Regeln der Werkzeuge festlegen.

#### Enable

* Info: Boolescher Wert, der festlegt, ob die Tool Rules aktiviert sind oder nicht.
* Beispiel:

```yaml
toolRules:
  enable: true
```

#### Default mining speed

* Info: Float-Wert, der die Standard-Abbaugeschwindigkeit des ExecutableItems festlegt.
* Beispiel:

```yaml
toolRules:
  enable: true
  defaultMiningSpeed: 1.0
```

#### Damage per block break

* Info: Ganzzahlwert, der den Haltbarkeitswert festlegt, der abgezogen wird, nachdem das ExecutableItem einen Block abgebaut hat. 
* Beispiel:

```yaml
toolRules:
  enable: false
  damagePerBlock: 1
```

#### Specific tool rules

* Info: Du kannst die Abbaugeschwindigkeit und das Droppen für bestimmte Blöcke mit dem ExecutableItem festlegen, um das Werkzeug anzupassen.
  * `miningSpeed`: Float-Wert, der die Abbaugeschwindigkeit des ExecutableItems für die in der Tool Rule gewählten Blöcke festlegt.
  * `correctForDrops`: Boolescher Wert, der angibt, ob der Block mit dem ExecutableItem gedroppt wird oder nicht.
  * `blocks`: Liste der BLÖCKE, auf die die Tool Rules angewendet werden.
* Beispiel:

```yaml
toolRules:
  toolRule0: #ID Of this tool rule, you can add as many as you want
    miningSpeed: 1.0
    correctForDrops: true
    blocks:
    - STONE
  enable: true
```

### chargedProjectiles

* Info: Feature, mit dem bereits geladene Projektile vorhanden sind, wenn das ExecutableItem eine Armbrust ist und dem Spieler gegeben wird.
  * Das Format des Materials muss `minecraft:<id>` sein. Vorerst werden Vanilla-Items unterstützt.
* Beispiel:

```yaml
material: CROSSBOW
chargedProjectiles:
- minecraft:arrow
```

### bundleContent

* Info: Feature, mit dem bereits Inhalt in den Items vorhanden ist, wenn das ExecutableItem ein Bundle ist und dem Spieler gegeben wird.
  * Das Format des Materials muss `minecraft:<id>` sein. Vorerst werden Vanilla-Items unterstützt.
* Beispiel:

```yaml
material: BUNDLE
bundleContent:
- minecraft:stone
- minecraft:dirt
```

### Firework features

* Info: Feature, mit dem du angepasste Feuerwerks-Features haben kannst, wenn das ExecutableItem ein Feuerwerk ist.
* Beispiel:

```yaml
fireworkFeatures:
  lifeTime: 1
  fireworkExplosions:
    explosion_0:
      colors:
      - BLUE
      fadeColors:
      - RED
      type: BALL_LARGE
      hasTrail: true
      hasTwinkle: true
    explosion_1:
      colors:
      - GREEN
      fadeColors: []
      type: CREEPER
      hasTrail: true
      hasTwinkle: true
```

Für die Farben kannst du entweder die regulären [Farbnamen](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)  oder `RGB-<0-255>-<0-255>-<0-255>` verwenden

### Spawner features <CustomTag type="version" version="1.20.5" />

* Info: Feature, mit dem du Custom-Spawner mit ExecutableItems erstellen kannst
* Einstellungen:
  * `spawnCount`: Legt fest, wie viele Entities bei jedem Spawn erscheinen
  * `spawnDelay`: Legt die Verzögerung des ersten Spawns nach dem Platzieren des Spawners fest (in Ticks, 20 Ticks = 1 Sekunde)
  * `spawnRange`: Die Spawn-Reichweite
  * `requiredPlayerRange`: Legt fest, in welcher maximalen Entfernung der Spieler sein muss, um den Spawner zu aktivieren
  * `minSpawnDelay`: Die minimale Verzögerung zwischen den einzelnen Spawns  (in Ticks, 20 Ticks = 1 Sekunde)
  * `minSpawnDelay`: Die maximale Verzögerung zwischen den einzelnen Spawns  (in Ticks, 20 Ticks = 1 Sekunde)
  * `maxNearbyEntities`: Maximale Anzahl an Entities rund um den Spawner
  * `addSpawnerNbtToItem`: Ob der Spawner-Components-Tag dem Item hinzugefügt wird oder nicht (am besten auf false lassen). Wenn es false ist, fügt das Plugin die Tags erst hinzu, wenn der Spawner platziert wird.
  * `potentialSpawns`: Legt die potentialSpawns deines Spawners mit Gewichtung fest

:::tip
Am besten erstellst du deinen Spawner zuerst in [MCStaker](https://mcstacker.net/?cmd=give), gibst ihn dir dann im Spiel und hältst ihn schließlich in der Hand und führst /ei create aus.\
Dadurch werden die Spawner-Features automatisch in deine ExecutableItems importiert.
:::

* Beispiel:

```yaml
spawnerFeatures:
  spawnCount: 4
  spawnDelay: 20
  spawnRange: 4
  requiredPlayerRange: 16
  minSpawnDelay: 200
  maxSpawnDelay: 800
  maxNearbyEntities: 6
  potentialSpawns:
  # {THE ENTITY};the weight for this SpawnerEntry, when added to a spawner entries with higher weight will spawn more often.
  - '{BlockState:{Name:"minecraft:diorite"},id:"minecraft:falling_block"};1' 
  - '{id:"minecraft:chicken"};1' 
  addSpawnerNbtToItem: false
```

### Instrument features <CustomTag type="version" version="1.20.5" />

* Info: Feature, mit dem du den Ziegenhorn-Sound für Items anpassen kannst. Dieses Feature funktioniert nur bei Items mit dem Material GOAT_HORN.
  * `enable`: Boolescher Wert, der die Instrument-Features aktiviert oder deaktiviert
  * `instrument`: Der Musikinstrument-Sound, der abgespielt wird, wenn das Ziegenhorn verwendet wird. [Music Instruments](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/MusicInstrument.html)
* Beispiel:

```yaml
material: GOAT_HORN
instrumentFeatures:
  enable: true
  instrument: DREAM_GOAT_HORN
```

### Weapon features <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Info: Feature, mit dem du waffenspezifische Kampfeinstellungen für Items konfigurieren kannst.
  * `enable`: Boolescher Wert, der die Weapon-Features aktiviert oder deaktiviert
  * `disableBlockingTime`: Ganzzahlwert, der angibt, wie lange (in Sekunden) der Schild des Ziels deaktiviert wird, nachdem es von dieser Waffe getroffen wurde
  * `damagePerAttack`: Ganzzahlwert, der den Haltbarkeitsschaden angibt, den diese Waffe pro Angriff nimmt (Standard: 5)
* Beispiel:

```yaml
weaponFeatures:
  enable: true
  disableBlockingTime: 3
  damagePerAttack: 2
```


### Blocks attacks features <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Info: Feature, mit dem du konfigurieren kannst, wie Items Angriffe blocken, ähnlich wie Schilde. Damit kannst du jedes Item in die Lage versetzen, Schaden zu blocken.
  * `enable`: Boolescher Wert, der die Block-Attacks-Features aktiviert oder deaktiviert
  * `blockDelay`: Ganzzahlwert, der die Verzögerung in Sekunden angibt, bevor das Item nach der Benutzung wieder blocken kann
  * `blockSound`: Sound, der abgespielt wird, wenn ein Angriff erfolgreich geblockt wird
  * `disableSound`: Sound, der abgespielt wird, wenn das Blocken deaktiviert wird (nach einer Überwältigung)
  * `disableCooldownScale`: Double-Wert (Multiplikator), der angibt, wie lange die Deaktivierung des Blockens nach einer Überwältigung anhält (Standard: 1.0)
  * `damageReductions`: Liste von Schadensreduzierungs-Konfigurationen, die festlegen, wie stark der Schaden pro Schadensart reduziert wird
  * `bypassedBy`: Schadensart, die diesen Block vollständig umgeht
* Beispiel:

```yaml
blockAttacksFeatures:
  enable: true
  blockDelay: 1
  blockSound: ITEM_SHIELD_BLOCK
  disableSound: ITEM_SHIELD_BREAK
  disableCooldownScale: 1.5
  damageReductions:
    reduction_0:
      baseDamageBlocked: 2.0
      factorDamageBlocked: 0.5
      horizontalBlockingAngle: 90.0
      damageTypes:
      - ARROW
      - MOB_ATTACK
    reduction_1:
      baseDamageBlocked: 1.0
      factorDamageBlocked: 0.25
      horizontalBlockingAngle: 180.0
      damageTypes:
      - EXPLOSION
  bypassedBy: VOID
```

#### Damage Reduction Configuration

Jeder Damage-Reduction-Eintrag hat die folgenden Einstellungen:
* `baseDamageBlocked`: Grundmenge des geblockten Schadens (feste Reduzierung)
* `factorDamageBlocked`: Prozentsatz des geblockten Schadens (0.5 = 50 % Reduzierung)
* `horizontalBlockingAngle`: Der Winkel in Grad, aus dem Angriffe geblockt werden können (90 = vorderes Viertel, 180 = vordere Hälfte, 360 = alle Richtungen). Muss größer als 0 sein.
* `damageTypes`: Liste von Schadensarten, auf die diese Reduzierung angewendet wird. Verfügbare Arten findest du unter [Damage Types](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html).

:::tip
Mit diesem Feature kannst du eigene "Schilde" aus verschiedenen Materialien erstellen. Du könntest zum Beispiel ein Buch machen, das magischen Schaden blockt, oder einen Diamanten, der physische Angriffe blockt!
:::
