---
description: >-
  Elenco completo delle funzionalità degli item di ExecutableItems: nome, lore,
  durabilità, attributi, Hiders, usage, variabili, cooldown e molto altro.
source_hash: a5cf341732f09f83
translated_at: '2026-11-13T17:39:03.890Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Funzionalità degli item

Elenco delle funzionalità degli item: sono la prima cosa da configurare sul tuo item.

Le funzionalità premium sono contrassegnate dal tag:  <CustomTag type="premium" />

### Attivatori

* Funzionalità molto importanti che ti permettono di aggiungere abilità al tuo item
* Wiki dedicata a questa funzionalità: [Elenco degli attivatori di EI](../activator-configuration/list-of-the-activators.md) e [Funzionalità degli attivatori di EI](/executableitems/configurations/activator-configuration/activators-features.md)


### Material dell'item

* Info: il material dell'item Minecraft dell'ExecutableItem
* Esempio: se vuoi che l'ExecutableItem abbia come item di base DIAMOND, sarà così

```yaml
material: DIAMOND
```

* Puoi consultare la lista dei material a questo link: [Lista dei material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
* Se vuoi impostare come material dell'item una testa personalizzata, consulta questo link: [Impostazioni della testa](/executableitems/configurations/item-configuration/item-features#head-settings).

### Name o DisplayName dell'item

* Info: il nome visualizzato dell'item, cioè il nome visibile.
* Esempio: se vuoi che il tuo item abbia come nome visualizzato il titolo rosso "Epic Sword", sarà così

```yaml
name: '&cEpic Sword'
```

* Se vuoi usare i colori HEX nel nome visualizzato, puoi procedere così:
  * Vai su un sito che ti aiuti a scegliere un colore per ottenere il codice del colore hex. Ti consigliamo [https://htmlcolorcodes.com/](https://htmlcolorcodes.com/)
  * Poi scegli il colore che preferisci e annota / copia il suo codice hex. [Riferimento](https://imgur.com/a/tNWtA0a)
  * Con quel codice hex devi aggiungere "#" all'inizio, e va messo prima del testo che vuoi colorare. #\<HEX\_COLOR\_CODE>\<What you want to color>
  * Alla fine otterrai qualcosa come **`#DB6725&lPractice`** e avrà il colore che hai selezionato [in game](https://imgur.com/a/7umxduF).

### Lore o descrizione dell'item

* Info: la lore o descrizione dell'item
* Esempio:

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

* Puoi usare i placeholder nella lore. Tieni solo presente che, se usi placeholder esterni al plugin e poi aggiungi nuovo contenuto alla lore, come incantesimi personalizzati o testo personalizzato, quando uno dei placeholder si aggiorna tutto ciò che è stato aggiunto al di fuori dei plugin di Ssomar verrà eliminato. Per evitarlo non devi aggiornare la lore, ma questo significa che i placeholder non verranno aggiornati. Devi scegliere quello che preferisci. In conclusione: COSE EXTRA NELLA LORE significa NESSUN AGGIORNAMENTO significa NESSUN placeholder personalizzato di EI nella lore.

:::info
Per lasciare una riga vuota tra le righe della lore puoi aggiungere '' nel file di config. Se modifichi la lore all'interno di Minecraft usando la GUI personalizzata, dovrai invece usare '\&f'.
:::

:::info
Per ExecutableItems free c'è una riga con "Made with ExecutableItems": non può essere rimossa, è la contropartita dell'aggiornamento che ha aumentato il numero di item da 25 a 500.
:::

### Effetto luminoso (glowing da incantamento)

* Info: valore booleano che seleziona se dare all'executable item un aspetto luminoso/incantato.
* Esempio: 

```yaml
glow: true
```

### Disattivare il glowing da incantamento <CustomTag type="version" version="1.20.5" />

* Info: valore booleano che impone all'item di non avere l'effetto luminoso anche se è incantato. 
* Esempio: 

```yaml
disableEnchantGlow : true
```

:::info
CONSIGLIO: puoi rimuovere l'effetto luminoso anche da alcuni item vanilla, come ad esempio la nether star.
:::

### Visualizzare le condizioni nella lore dell'item

* Info: ti permette di visualizzare le condizioni nella lore dell'item.
* Esempio: 

```yaml
displayConditions:
  playerConditions:
    ifSneaking: true
  worldConditions: {}
  itemConditions: {}
  placeholdersConditions: {}
  enableFeature: true
```

### Durabilità dell'item

* Info: seleziona il valore di durabilità dell'item.
  * Per le versioni 1.20.5-: il valore di durabilità deve essere uguale o inferiore alla durabilità massima vanilla dell'item selezionato.
  * Esempio: 
```yaml
durability: 150
```
  * Per le versioni 1.20.5++: l'opzione di durabilità può essere personalizzata, abilitando nuove funzionalità come la sincronizzazione tra l'utilizzo dell'ExecutableItem e il valore di durabilità. Permette inoltre di selezionare una durabilità massima personalizzata.
  * Esempio:
```yaml
isDurabilityBasedOnUsage: true
maxDurability: 20 
durability: 19
```

### Incantamenti dell'item

* Info: imposta gli incantamenti iniziali che l'executable item avrà quando viene dato.
* Esempio:

```yaml
enchantments:
  enchantment1: #ID Of this enchantment, you can add as many as you want
    enchantment: sharpness
    level: 1
```

### Unbreakable

* Info: valore booleano che seleziona se l'executable item sarà infrangibile o meno
* Esempio: 

```yaml
unbreakable: true
```

### Attributi <CustomTag type="version" version="1.12" />

* Info: puoi selezionare gli attributi dell'ExecutableItem.
  * `attribute`: il tipo di attributo. Lista qui [Lista degli attributi](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/attribute/Attribute.html)
  * `uuid`: è un codice di cui Minecraft ha bisogno per assegnare i modificatori degli attributi. Puoi ignorarlo.
  * `name`: è il nome visualizzato dell'Attribute Modifier. Ti è utile per scrivere cosa fa. Non influisce su nient'altro che sulla visualizzazione nella GUI.
  * `operation`: tipo di operazione che l'AttributeModifier eseguirà. Lista qui [Operazioni](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html)
  * `amount`: il valore dell'AttributeModifier, verrà applicato all'attributo usando l'operazione selezionata.
  * `slot`: lo slot in cui l'AttributeModifier funzionerà.
  * Esempio:

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
**Se usi la versione 1.12 dovrai seguire questi passaggi:**

* Questo procedimento richiede la versione premium di EI <CustomTag type="premium" />
* Genera il tuo item con gli attributi su un sito web. Ti suggeriamo [https://mapmaking.fr/give1.12/](https://mapmaking.fr/give1.12/)
* Poi dai l'item a te stesso all'interno di Minecraft
* Tenendolo in mano, esegui il comando /ei create \<id>
* E il gioco è fatto! Ora il tuo EI ha gli attributi importati automaticamente.
:::

#### **Keep default attributes**

* Info: valore booleano per mantenere o meno l'attributo predefinito dell'item.
* Esempio:

```yaml
keepDefaultAttributes: true
ignoreKeepDefaultAttributesFeature: false
```

:::warning
Nella 1.21+, un item senza attributi propri che non ha queste due righe **perde gli attributi predefiniti del suo material**: una spada colpisce come un pugno, un pezzo di armatura non dà armatura. ExecutableItems elenca questi item nella console dopo ogni caricamento. Per correggere tutti i tuoi item in una volta: `/ei util-set-keepdefaultattributes-all-ei true`.
:::

:::info Smithing table
Con `keepDefaultAttributes: true`, un item potenziato al tavolo del fabbro (da diamante a netherite) ottiene gli attributi predefiniti del suo nuovo material (armatura, tenacia e resistenza al contraccolpo della netherite). Gli attributi dell'item stesso vengono mantenuti.
:::

* A questo link trovi un tutorial sugli attributi e le loro funzionalità.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HqyF0QBYIY4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


#### **ignoreKeepDefaultAttributesFeature:** 

* Info: ignora l'impostazione keep default attributes. È utile per il terzo caso della spiegazione di questa tabella:
* Esempio:

```yaml
ignoreKeepDefaultAttributesFeature: true
```

### Custom model data <CustomTag type="version" version="1.14" />

* Info: 
  * Per le versioni di Minecraft precedenti alla 1.21.4: intero per impostare il valore della funzionalità customModelData dell'item. Utile per creare texture diverse per un item.
  * A partire dalla versione 1.21.4 di Minecraft puoi aggiungere anche testo e booleani.
* Esempio: 

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

### Funzionalità Item Rarity <CustomTag type="version" version="1.20.5" />

* Info: la rarità è una statistica vanilla applicata a item e blocchi per indicarne il valore e la facilità di ottenimento. Non ha alcun effetto sul gameplay. Esistono quattro livelli di rarità: Common, Uncommon, Rare ed Epic.
  * `enableRarity`: booleano che indica se la funzionalità è abilitata o meno
  * `rarity`: tipo di rarità
* Esempio:

```yaml
itemRarity:
  enableRarity: false
  rarity: COMMON
```

### Funzionalità Equippable <CustomTag type="version" version="1.21.2" />

* Info: questa sezione configura il comportamento di un item equipaggiabile. Quando è abilitata, l'item può essere equipaggiato in uno slot designato, con la possibilità di attivare un effetto sonoro. Puoi anche specificare un modello personalizzato per l'item equipaggiato, definire se subisce danni quando chi lo indossa viene colpito, e impostare flag per consentire o limitare lo scambio e lo scarto. Inoltre puoi limitare quali entità possono equipaggiare l'item.
  * `enable`: imposta su true per abilitare l'equipaggiamento di questo item
  * `slot`: lo slot di equipaggiamento (ad es. CHEST, HEAD, LEGS, FEET) in cui viene equipaggiato l'item
  * `enableSound`: booleano per riprodurre un suono quando l'item viene equipaggiato
  * `sound`: effetto sonoro da riprodurre quando viene equipaggiato
  * `equipModel`: (facoltativo) modello personalizzato per l'item equipaggiato (ad es. "mynamespace:mymodel")
  * `cameraOverlay`: (facoltativo) overlay personalizzato della visuale quando l'item è equipaggiato
  * `damageableOnHurt`: booleano che seleziona se l'item perde durabilità quando chi lo indossa viene colpito
  * `dispensable`: booleano che seleziona se l'item può essere scartato (rimosso/lasciato cadere)
  * `swappable`: booleano che seleziona se l'item può essere equipaggiato con il clic destro (viene scambiato con l'item indossato in quello slot)
  * `allowedEntities`: lista delle entità autorizzate a equipaggiare questo item
* Esempio:

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

### Funzionalità Repairable <CustomTag type="version" version="1.21.2" />

* Info: funzionalità relative a quando l'ExecutableItem viene riparato.
  * `enable`: valore booleano che seleziona se la funzionalità è abilitata o meno
  * `repairCost`: valore intero che rappresenta il costo della riparazione all'incudine
* Esempio:

```yaml
repairableFeatures:
    enable: false
    repairCost: 2 
```

### Glider <CustomTag type="version" version="1.21.2" />

* Info: funzionalità che permette di planare con l'item, come faresti normalmente con l'item vanilla "elytra".
* Esempio:

```yaml
glider: false
```

### itemModel <CustomTag type="version" version="1.21.2" />

* Info: percorso di un modello di item personalizzato nel pacchetto di texture, nel formato \<mynamespace\:model\_id>, che punterà a assets/\<mynamespace>/models/item/\<model\_id>.
* Esempio:

```yaml
itemModel: "" # "mynamespace:mymodel"
```

### tooltipModel <CustomTag type="premium" /> <CustomTag type="version" version="1.21.2" />

* Info: percorso di un modello di tooltip personalizzato nel pacchetto di texture, nel formato \<mynamespace\:model\_id>, che punterà a /assets/\<mynamespace>/textures/gui/sprites/tooltip/\<id>\_frame
* Esempio:

```yaml
tootipModel: "" # "mynamespace:mymodel"
```

### Funzionalità relative all'item lasciato cadere

Qui scoprirai le funzionalità visibili solo quando l'item viene lasciato cadere a terra.

#### Glowing on drop

* Info: quando l'item viene lasciato cadere, ha un effetto luminoso
* Esempio: 

```yaml
dropFeatures:
  glowDrop: false
```

#### Colore del glowing quando viene lasciato cadere

* Info: se l'item ha glowEffect abilitato, è possibile selezionare il colore dell'effetto luminoso quando viene lasciato cadere.
* Colori possibili: [Riferimento dei colori](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)
* Esempio:

```yaml
dropFeatures:
  glowDrop: false
  glowDropColor: WHITE
```

#### Nome visualizzato quando l'item viene lasciato cadere

* Info: seleziona se l'item mostrerà il nome visualizzato come testo fluttuante quando viene lasciato cadere.
* Esempio: 

```yaml
dropFeatures:
  displayNameDrop: true
```

###  NBT Tags

* Info: richiede il plugin [**NBTAPI**](https://www.spigotmc.org/resources/nbt-api.7939/) disponibile su Spigot.
Questa funzionalità ti permette di aggiungere i tuoi nbt tag personalizzati all'interno del tuo ExecutableItem.
  * `type`: il tipo di valore che stai memorizzando, ad es.:
    * BOOLEAN: true | false
    * STRING: car
    * INTEGER: 6
    * DOUBLE: 17.6
    * COMPOUND: esempio qui sotto, dipenderà dalle tue esigenze e da cosa vuoi aggiungere.
  * `key`: la chiave stringa che rappresenta quella memorizzazione nbt
  * `value`: valore dell'NBT Tag che stai aggiungendo
* Esempio:

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

* Info: puoi aggiungere valori di bukkit tag al tuo ExecutableItem.
* Esempio:

```yaml
tags:
 - mytag:blabla1
 - myothertag:blabla2
```

In game verrà rappresentato in PublicBukkitValues, in questo modo

```yaml
"executableitems:mytag":"blabla1"
"executableitems:myothertag":"blabla2"
```

Puoi anche scrivere i placeholder %rand% nel campo del valore degli NBT. Funziona solo per i tipi di dati STRING, INTEGER e DOUBLE
```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: '%rand:-100|100%'
```
Funziona anche nell'editor in game
```
INTEGER::foo::%rand:1|2%
```  
  
Se vuoi, puoi anche salvare gli nbt nel PDC (Persistent Data Container).
* Esempio in game: `integer::take::0::true`
* Config dell'item:
```yml
nbt:
  '0':
    key: take
    saveInPDC: true
    type: INT
    value: 0
```

### Funzionalità Hiders

* Info: impostazioni relative al nascondere le funzionalità che normalmente vengono mostrate sul tuo ExecutableItem. Tutte le funzionalità, anche se nascoste, continueranno a funzionare.
  * `hideEnchantments`: valore booleano che indica se gli incantamenti dell'ExecutableItem verranno mostrati o meno nella lore.
  * `hideUnbreakable`: valore booleano che indica se la descrizione di infrangibilità verrà mostrata o meno nella lore.
  * `hideAttributes`: valore booleano che indica se gli attributi dell'ExecutableItem verranno mostrati o meno nella lore.
  * `hidePotionEffects`: valore booleano che indica se gli effetti di pozione dell'ExecutableItem verranno mostrati o meno nella lore. Nelle versioni 1.20.5 o successive usa hideAdditionalTooltip.
  *   hideAdditionalTooltip (disponibile solo nella 1.20.5++) 

      Impostazione per mostrare/nascondere gli effetti di pozione, le informazioni di libri e fuochi d'artificio, i tooltip delle mappe, i motivi degli stendardi e gli incantamenti dei libri incantati. Sostituisce il vecchio hidePotionEffects
  * `hideUsage`: valore booleano che indica se la funzionalità personalizzata Usage del plugin ExecutableItem relativa all'item stesso verrà mostrata o meno nella lore.
    * Puoi visualizzare manualmente l'usage usando il placeholder %usage% aggiungendolo quando modifichi la lore.
  * `hideDye`: valore booleano che indica se il colore della tintura (#\<color>) dell'ExecutableItem verrà mostrato o meno nella lore.
  * `hideArmorTrim`: valore booleano che indica se la rifinitura dell'armatura dell'ExecutableItem verrà mostrata o meno nella lore.
  * `hidePlacedOn`: valore booleano che indica se l'NBT Tag "Can be placed on: \[...]" dell'ExecutableItem verrà mostrato o meno nella lore.
  * `hideDestroys`: valore booleano che indica se l'NBT Tag "Can destroy: \[...]" dell'ExecutableItem verrà mostrato o meno nella lore.
  * `hideToolTip`: valore booleano che indica se il tooltip è nascosto o meno. (Disponibile solo nella 1.20.5++)
* Esempio:

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

### Funzionalità Usage

Questa sezione spiega cos'è l'usage e le sue funzionalità.

#### Usage

* Info: l'usage è un valore intero memorizzato all'interno del tuo ExecutableItem, può essere modificato tramite usageModification all'interno di un attivatore o tramite comandi. Ma non è solo un valore memorizzato: è stato creato per rappresentare il "sistema di durabilità personalizzato" del tuo ExecutableItem, il che significa che se l'usage arriva a 0, il tuo item viene eliminato.
* Esempio: 
  * Un usage di 1 non significa che l'item abbia una durabilità di uno: come abbiamo spiegato, è un sistema di durabilità personalizzato. Durerà finché l'usage non raggiunge 0. Per esempio, se aggiungi al tuo item un attivatore con la funzionalità usageModification con valore "-1", non appena l'attivatore scatta una volta, il tuo item sparisce.
  * Seguendo la stessa idea, se abbiamo usage 1 e non ci sono attivatori che modificano l'usage dell'item, il nostro item durerà all'infinito, finché, di nuovo, un comando o un nuovo attivatore aggiunto all'item modifica l'usage a un valore uguale o inferiore a 0: a quel punto l'item verrà eliminato.
    * ```yaml
      usage: 1
      ```
  * L'usage, come abbiamo detto, non è solo un sistema di durabilità, perché può anche aumentare! Per esempio, se abbiamo un attivatore che invece di avere un valore negativo in usageModification ha un valore positivo, il nostro usage aumenterà ogni volta che l'attivatore scatta ^^
  * Ora, se non vuoi che il tuo item aumenti né diminuisca, cioè se non vuoi usare questo valore personalizzato, puoi impostare l'usage a -1.
    * ```yaml
      usage: -1
      ```

#### Usage limit <CustomTag type="premium" />

* Info: valore intero che limita il valore massimo che l'usage può raggiungere. (Il valore non può essere 0)
* Esempio: 

```yaml
usageLimit: 600 #Usage will not be able to go up more than this value, -1 to don't take it into account
```

#### Uses per day

* Info: valore intero che limita quante volte puoi usare l'item ogni giorno, nella vita reale
* Esempio: 

```yaml
usePerDay: 200 # -1 to ignore it
```

### Funzionalità Food <CustomTag type="version" version="1.20.5" />

* Info: questa funzionalità ti permette di personalizzare le impostazioni di cibo relative al tuo ExecutableItem
  * `nutrition`: valore intero che rappresenta la quantità di "mezzi punti fame" che verranno ripristinati al giocatore quando l'item viene mangiato
    * Per capire meglio: il giocatore ha al massimo 20 di nutrizione, mostrati in game come 10 icone di fame, ciascuna divisibile in 2.
  * `saturation`: valore intero che rappresenta la saturazione che il giocatore riceverà quando l'item viene mangiato.
  * `isMeat`: valore booleano che fa sì che l'item sia considerato cibo. Viene applicato forzatamente: se imposti questo valore su true, qualsiasi item, anche quelli che non possono essere mangiati, verrà considerato cibo e quindi sarà consumabile.
  * `canAlwaysEat`: valore booleano che indica se l'item può essere mangiato sempre, anche quando la barra della fame del giocatore è piena.
*  Esempio:

```yaml
foodFeatures:
  nutrition: 1
  saturation: 1
  isMeat: false
  canAlwaysEat: true
```

### Funzionalità Consumable <CustomTag type="version" version="1.21.4" />

* Info: funzionalità relative ai consumabili, ti permettono di personalizzare le opzioni di consumo, in modo simile alla funzionalità food.
  * `enable`: booleano che indica se abilitare o disabilitare le funzionalità consumable
  * `animation`: ANIMATION\_TYPE che verrà riprodotto quando l'ExecutableItem viene mangiato/consumato
  * `sound`: SOUND che verrà riprodotto mentre l'item viene mangiato/consumato
  * `hasConsumeParticles`: valore booleano che indica se l'item rilascerà particelle mentre viene mangiato
  * `consumeSeconds`: quantità di secondi necessari per mangiare/consumare l'item.
* Esempio:

```yaml
consumableFeatures:
  enable: true
  animation: SPYGLASS
  sound: ITEM.ARMOR.EQUIP_DIAMOND
  hasConsumeParticles: false
  consumeSeconds: 3
```

### Impostazioni delle pozioni

Qui puoi personalizzare le funzionalità di pozione del tuo ExecutableItem se il material dell'item è una pozione.

#### Colore della pozione

* Info: intero di un colore MapInfo che rappresenta un colore. Usa una pagina come [https://www.tydac.ch/color/](https://www.tydac.ch/color/) per ottenere il valore MapInfo di un colore.
* Esempio:

```yaml
potionFeatures:
  potionColor: 10265481
```

#### Tipo di pozione

* Info: il tipo di pozione che vuoi che l'item sia. È solo una funzionalità di visualizzazione, non influisce sul comportamento reale della pozione. La lista è disponibile qui [Tipi di pozione](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionType.html)
* Esempio:

```yaml
potionFeatures:
  potionType: WIND_CHARGED
```

#### Effetti di pozione

* Info: qui puoi creare gli effetti di pozione che avrà la tua opzione
  * `potionEffectType`: PotionEffectType selezionato, lista disponibile qui [Effetti di pozione](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
  * `isAmbient: valore booleano che rende la pozione ambientale, cioè l'effetto di pozione produce più particelle, translucide.
  * `duration`: valore intero di tick (20 tick = 1 secondo) che rappresenta la durata dell'effetto di pozione.
  * `amplifier`: valore intero che rappresenta il livello/grado/potenza dell'effetto di pozione. Amplifier 0 significa livello 1, amplifier 1 significa livello 2 e così via.
  * `hasParticles`: valore booleano che abilita o disabilita la visualizzazione delle particelle dell'effetto attorno al giocatore.
  * `hasIcon`: valore booleano che abilita o disabilita la visualizzazione dell'icona dell'effetto in alto a destra nello schermo del giocatore.
* Esempio:

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

### Colore dell'armatura

* Info: se il tuo ExecutableItem è un'istanza di armature di cuoio, qui puoi selezionare un valore di colore MapInfo, che puoi ottenere da questo sito [https://www.tydac.ch/color/](https://www.tydac.ch/color/), per cambiare il colore.
  * <CustomTag type="version" version="1.21.3" /> Su Paper, `armorColor` è disponibile anche sugli altri pezzi di armatura (elmo, corazza, gambali, stivali di qualsiasi material, armatura per cavalli e per lupi) e sull'elytra. Imposta il loro componente vanilla `dyed_color`, che i modelli personalizzati (Nexo, ItemsAdder...) usano per la loro tinta: senza di esso un modello di questo tipo può risultare invisibile. `/ei create` mantiene questo colore a partire dall'item che hai in mano.
* Esempio:

```yaml
armorColor: 7702341
```

### Impostazioni della testa

Qui puoi selezionare la configurazione delle impostazioni della testa, cioè la testa personalizzata a partire dal valore di una testa di giocatore o da un database.

#### Se non hai un plugin per il database di teste <CustomTag type="version" version="1.13" />

* Se vuoi aggiungere una testa personalizzata per la 1.13++ senza avere un plugin con database, puoi seguire questi passaggi:
  * Imposta il material dell'ExecutableItem su PLAYER\_HEAD
  * Visita una pagina di teste personalizzate, come questa [https://minecraft-heads.com/custom-heads](https://minecraft-heads.com/custom-heads)
  *   Poi ottieni il Value della testa\

      
  * Ora copia quel valore e incollalo nella funzionalità headValue di ExecutableItems
  * Esempio:
  * ```yaml
    headValue: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTk4ZGY0MmY0NzdmMjEzZmY1ZTlkN2ZhNWE0Y2M0YTY5ZjIwZDljZWYyYjkwYzRhZTRmMjliZDE3Mjg3YjUifX19
    ```

#### Se hai il plugin Head Database <CustomTag type="version" version="1.12" />

* Se vuoi aggiungere una testa personalizzata per la 1.12++ e hai il plugin Head Database, puoi seguire questi passaggi:
  * Apri la GUI del tuo plugin e ottieni l'ID della testa che vuoi
  * Poi incollalo nelle funzionalità della testa in headDBID
  * Esempio:
  * ```yaml
    headDBID: 44328
    ```
* Qui trovi i link nel caso tu non lo abbia e lo voglia.
  * Versione premium: [Head Database](https://www.spigotmc.org/resources/head-database.14280/)
  * Versione free: [Head DB](https://www.spigotmc.org/resources/headdb-head-menu-auto-update-free.84967/)

### whitelistedWorlds

* Info: lista di stringhe con i nomi dei mondi in cui vuoi impedire o consentire ai giocatori di usare l'ExecutableItem.
* Esempio:

```yaml
whitelistedWorlds:
- ZombieSurvivalWorld_the_end # This allows the use of the EI in that world
- '!ApocalypseWorld' # Using ! Disables the use of the EI in that world
```

### Store item info

* Info: valore booleano che indica se le informazioni vengono memorizzate o meno nell'item stesso. Attualmente memorizza la funzionalità "owner". Quindi, se vuoi usare il placeholder %owner% o le condizioni relative all'owner, devi averla abilitata.
* Esempio:

```yaml
storeItemInfo: false
```

### Funzionalità Owner

#### canBeUsedOnlyByTheOwner

* Info: valore booleano che indica se l'item può essere usato solo dall'owner o meno.
  * Funziona solo se store item info è attivato, in modo che l'item abbia un owner.
* Esempio: 

```yaml
canBeUsedOnlyByTheOwner: false
```

#### cancelEventIfNotOwner

* Info: valore booleano che indica se, quando l'item non viene usato dall'owner, tutti gli eventi vengono annullati. Questo significa che, se l'attivatore è ad esempio PLAYER\_BREAK\_BLOCK e qualcuno che non è l'owner prova a usare questo item, non potrà rompere nessun blocco perché tutti gli eventi verranno annullati.
  * Funziona solo se store item info è attivato, in modo che l'item abbia un owner.
* Esempio: 

```yaml
cancelEventIfNotOwner: false
```

#### onlyOwnerBlackListedActivators

* Info: lista di ID degli attivatori del tuo ExecutableItem, è una blacklist che disabilita le funzionalità abilitate di canBeUsedOnlyByTheOwner: tutti gli ID di attivatori qui indicati che puntano a un attivatore dell'ExecutableItem potranno essere usati da tutti anche se canBeUsedOnlyByTheOwner è su true.
  * Funziona solo se store item info è attivato, in modo che l'item abbia un owner.
* Esempio: 

```yaml
onlyOwnerBlackListedActivators:
- activator0
- activator1
```

### cancelEventIfNoPermission

* Info: valore booleano che indica se, quando il giocatore non ha il permesso (ei.item.\<id>) per usare l'item, tutti gli eventi vengono annullati. Questo significa che, se l'attivatore è ad esempio PLAYER\_BREAK\_BLOCK e qualcuno che non ha il permesso di usare questo item prova a usarlo, non potrà rompere nessun blocco perché tutti gli eventi verranno annullati.

```yaml
cancelEventIfNoPermission: true
```

### Keep item on death

* Info: valore booleano che indica se il giocatore manterrà l'item dopo la morte o meno.
* Esempio: 

```yaml
keepItemOnDeath: true
```

:::info
È compatibile con la funzionalità keepInventory di WorldGuard e con la gamerule keepInventory vanilla
:::

### Disable stack <CustomTag type="premium" />

* Info: valore booleano che indica se impedire o meno che l'ExecutableItem venga impilato. Impostando questa funzionalità su true, il customStackSize di questo item sarà 1.
* Esempio: 

```yaml
disableStack: true
```

### customStackSize <CustomTag type="premium" /> <CustomTag type="version" version="1.20.5" />

* Info: valore intero per impostare la dimensione dello stack di questo item. Sovrascriverà la quantità di stack attuale.
* Per capirlo meglio, la diamond\_sword vanilla ha una dimensione di stack di 1, dato che non può essere impilata: con questa funzionalità puoi aumentare questo valore. D'altra parte, la dirt ha una dimensione di stack di 64, ma con questa puoi diminuirla, ad esempio a una dimensione di stack di 20.
* Esempio: 

```yaml
customStackSize: 32
```

### Impostazioni delle variabili

* Info: le variabili sono un modo per memorizzare informazioni all'interno del tuo ExecutableItem. Permettono di tenere traccia di quantità, memorizzare posizioni, in realtà puoi memorizzare ciò che vuoi. Aiutano a creare comportamenti dinamici e personalizzabili per gli item: le variabili ti permettono di creare comportamenti unici per ogni item memorizzando e monitorando dati specifici di quell'item. Per esempio, puoi tracciare quante volte un giocatore ha usato un determinato item o quanti giocatori ha ucciso con esso.
  * `variableName`: nome della variabile, verrà usato come riferimento con %var\_\<name>% per utilizzarla nella lore, nei comandi, ecc. Questo nome non può essere "id" o "usage" né contenere spazi.
  * `type`: VariableType della variabile, può essere dei seguenti tipi, con esempi di utilizzo:
    * STRING: con questo tipo di variabile puoi memorizzare valori STRING, come parole, numeri, lettere, caratteri, ecc. Per esempio puoi memorizzare il nome dell'ultimo giocatore colpito. Questo tipo di variabile non supporta `variableModification(type:MODIFICATION)` per aumentare o diminuire il valore. È statica a meno che non venga sostituita con un `variableModification(type:SET)` che sovrascriverà il vecchio valore.
    * NUMBER: con questo tipo di variabile puoi memorizzare valori FLOAT, cioè numeri. Per esempio se vuoi memorizzare la quantità di blocchi rotti, la quantità di uccisioni, tracciare i secondi prima che accada qualcosa, ecc. Questo tipo di variabile supporta `variableModification(type:MODIFICATION)` e `variableModification(type:SET)`.
    * LIST: questa variabile è di tipo lista e memorizza valori STRING. È utile per memorizzare una lista di cose, per esempio tenere traccia dei blocchi cliccati e aggiungerli a questa lista, o aggiungere qui i giocatori uccisi, ecc.
  * `isRefreshableClean`: valore booleano che abilita la pulizia all'aggiornamento (refresh clean). Permette di aggiungere righe di lore personalizzate senza che vengano rimosse quando la variabile si aggiorna. Si consiglia di tenerlo su true.
  * `refreshTagDoNotEdit`: generato automaticamente dal plugin. Aiuta le funzioni di `isRefreshableClean` a funzionare correttamente. Quindi non toccarlo.
  * `papiParser`: il valore stringa che contiene la stringa PlaceholderAPI in cui è presente il valore della variabile da elaborare. Il suo scopo è permetterti di inserire i valori delle variabili all'interno dei placeholder di PlaceholderAPI e mostrare i risultati nella lore. 
    * Es.:
      * ID della variabile: `level`
      * Valore stringa di papiParser: `%math_<VAR>*<VAR>%`
        * La stringa `<VAR>` rappresenta il valore attuale della variabile quando viene elaborata. Se vuoi posizionare il valore in più punti della stringa del placeholder di PlaceholderAPI, scrivi `<VAR>` nei punti in cui ti serve.
      * Stringa del placeholder da inserire nella lore: `%var_level_papi%`
* Esempio
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
* Puoi trovare maggiori informazioni sugli altri tipi di variabili nella pagina seguente:
  * [Variabili di SCore](/tools-for-all-plugins-score/score-variables)

### Funzionalità Custom give first join

* Info: qui puoi personalizzare la funzionalità di dare l'item quando il giocatore entra per la prima volta nel server.
  * giveFirstJoin: valore booleano che indica se la funzionalità è abilitata o meno
  * giveFirstJoinAmount: valore intero che indica quanti item di questo ExecutableItem verranno dati al giocatore.
  * giveFirstJoinSlot: slot in cui l'ExecutableItem verrà dato al giocatore.
* Esempio:

```yaml
giveFirstJoinFeatures:
  giveFirstJoin: false
  giveFirstJoinAmount: 1
  giveFirstJoinSlot: 0
```

### Funzionalità Item Recognition <CustomTag type="premium" />

* Info: questa funzionalità permette di far comportare altri item, che non sono l'ExecutableItem, come se fossero l'ExecutableItem che stai modificando. In pratica l'idea è lavorare con le recognition: è una lista di tipi di riconoscimento, e se uno di essi corrisponde tra il tuo ExecutableItem e un altro item (anche se non è un ExecutableItem), le funzionalità dell'ExecutableItem varranno anche per l'altro item. Funziona finché viene riconosciuto secondo i requisiti delle recognition.
  * Opzioni di recognition disponibili:
    * NAME: abilita il riconoscimento per tutti gli item che corrispondono al nome personalizzato dell'ExecutableItem
    * MATERIAL: abilita il riconoscimento per tutti gli item che corrispondono al material dell'ExecutableItem
    * LORE: abilita il riconoscimento per tutti gli item che corrispondono alla lore dell'ExecutableItem
* Per esempio, se crei un ExecutableItem piccone di diamante, che ha un attivatore PLAYER\_RIGHT\_CLICK e nei comandi "SEND\_MESSAGE I am a pickaxe", ogni volta che fai clic destro invierà quel messaggio nella chat di Minecraft. Ora, se abiliti l'item recognition, ad esempio per il material, TUTTI i picconi di diamante del server faranno scattare quell'attivatore e quindi il messaggio verrà mostrato.
* Esempio: 

```yaml
recognitions:
- NAME
- MATERIAL  
- LORE 
```

* Scenari di esempio:
  * Se un item EI ha solo l'item recognition `MATERIAL` ed è un DIAMOND, tutti i diamanti presenti nel server si comporteranno come quell'item EI
  * Se un item EI ha solo l'item recognition `NAME` e si chiama "\&dAngle", se provi a usare un qualsiasi item con il nome "\&dAngle", si comporterà come l'item EI originale. MA se il nome fosse "\&eAngle" o un altro nome, non funzionerà.
  * Se un item EI ha solo l'item recognition `LORE`, un item si comporterà come l'EI solo se ha ESATTAMENTE gli stessi codici colore nelle righe di lore e ogni singola maiuscola e minuscola di lettere e caratteri.
  * Se un item EI ha solo l'item recognition `MATERIAL` e `NAME`, gli item devono avere l'ESATTO NAME e MATERIAL dell'item EI affinché vengano considerati un item EI.
* Tieni presente che, se uno dei tuoi ExecutableItems ha le item recognition abilitate su MATERIAL, non dovresti usare altre item recognition basate su MATERIAL per un altro ExecutableItem con lo stesso MATERIAL. Il motivo è che, se ci sono 2 ExecutableItems con la recognition MATERIAL abilitata ed entrambi sono DIAMOND\_BLOCK, solo il primo in ordine alfabetico avrà la priorità maggiore nel caso in cui qualcuno faccia scattare un DIAMOND\_BLOCK.

## Funzionalità Use cooldown <CustomTag type="version" version="1.21.2" />

* Info: funzionalità che aggiunge all'item un cooldown di utilizzo in stile vanilla, simile al cooldown delle ender pearl o dei chorus fruit.
  * `cooldownGroup`: valore stringa che definisce un gruppo di cooldown. Gli item con lo stesso gruppo di cooldown condivideranno lo stesso cooldown. Deve essere in minuscolo e seguire il formato NamespacedKey (ad es. "mygroup" o "namespace:mygroup")
  * `vanillaUseCooldown`: valore intero che rappresenta la durata del cooldown in secondi
* Esempio:

```yaml
useCooldown:
  cooldownGroup: "custom_weapon_group"
  vanillaUseCooldown: 5
```

:::info
Questo cooldown è diverso dal sistema di cooldown degli attivatori. È un cooldown vanilla di Minecraft che mostra l'item "in grigio" nella hotbar durante il periodo di cooldown.
:::


## In base al tipo di item

### Funzionalità Container

* Info: qui puoi personalizzare le funzionalità del container se il blocco è un'istanza di container, come il baule e il barile.
  * `isLocked`: valore booleano che indica se il container è bloccato o meno
  * `lockedName`: valore stringa che rappresenta il nome della chiave se il container è bloccato. È una funzionalità di Minecraft: se hai un item con lo stesso nome del lockedName potrai aprire il baule, altrimenti no.
  * `containerContent`: lista di material all'interno del container quando viene piazzato, usando il formato slot:\<slot>;\<material>
* Esempio:

```yaml
containerFeatures:
  isLocked: true
  lockedName: thisIsTheKey
  containerContent:
  - slot:0;minecraft:loom
```

### Tool Rules <CustomTag type="version" version="1.20.5" />

Info: qui puoi selezionare le regole degli strumenti.

#### Enable

* Info: valore booleano per selezionare se le Tool Rules sono abilitate o meno.
* Esempio:

```yaml
toolRules:
  enable: true
```

#### Default mining speed

* Info: valore float per impostare la velocità di scavo predefinita dell'ExecutableItem.
* Esempio:

```yaml
toolRules:
  enable: true
  defaultMiningSpeed: 1.0
```

#### Damage per block break

* Info: valore intero da impostare come valore di durabilità che verrà sottratto dopo che l'ExecutableItem rompe un blocco. 
* Esempio:

```yaml
toolRules:
  enable: false
  damagePerBlock: 1
```

#### Specific tool rules

* Info: puoi selezionare la velocità di scavo e il drop per determinati blocchi con l'ExecutableItem, per personalizzare lo strumento.
  * `miningSpeed`: valore float per impostare la velocità di scavo dell'ExecutableItem per i blocchi selezionati nella regola dello strumento.
  * `correctForDrops`: valore booleano che indica se il blocco verrà droppato o meno usando l'ExecutableItems.
  * `blocks`: lista di BLOCKS a cui applicare le regole dello strumento.
* Esempio:

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

* Info: funzionalità che permette di avere proiettili già caricati quando l'ExecutableItem è una balestra e viene dato al giocatore.
  * Il formato del material deve essere `minecraft:<id>`. Per ora supporta gli item vanilla.
* Esempio:

```yaml
material: CROSSBOW
chargedProjectiles:
- minecraft:arrow
```

### bundleContent

* Info: funzionalità che permette di avere già degli item al suo interno se l'ExecutableItems è un bundle e viene dato al giocatore.
  * Il formato del material deve essere `minecraft:<id>`. Per ora supporta gli item vanilla.
* Esempio:

```yaml
material: BUNDLE
bundleContent:
- minecraft:stone
- minecraft:dirt
```

### Funzionalità Firework

* Info: funzionalità che permette di avere funzionalità personalizzate per i fuochi d'artificio se l'ExecutableItems è un item di tipo firework.
* Esempio:

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

Per i colori, puoi usare i normali [nomi dei colori](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)  oppure `RGB-<0-255>-<0-255>-<0-255>`

### Funzionalità Spawner <CustomTag type="version" version="1.20.5" />

* Info: funzionalità che permette di creare spawner personalizzati con ExecutableItems
* Impostazioni:
  * `spawnCount`: definisce quante entità compaiono a ogni spawn
  * `spawnDelay`: definisce il ritardo del primo spawn dopo il piazzamento dello spawner (in tick, 20 tick = 1 secondo)
  * `spawnRange`: il raggio di spawn
  * `requiredPlayerRange`: definisce a quale distanza massima deve trovarsi il giocatore per attivare lo spawner
  * `minSpawnDelay`: il ritardo minimo tra uno spawn e l'altro (in tick, 20 tick = 1 secondo)
  * `minSpawnDelay`: il ritardo massimo tra uno spawn e l'altro (in tick, 20 tick = 1 secondo)
  * `maxNearbyEntities`: numero massimo di entità attorno allo spawner
  * `addSpawnerNbtToItem`: indica se aggiungere o meno il tag dei componenti dello spawner nell'item (è meglio lasciarlo su false). Quando è su false, il plugin aggiungerà i tag solo quando lo spawner verrà piazzato.
  * `potentialSpawns`: definisce i potentialSpawns del tuo spawner con il peso

:::tip
È meglio creare prima il tuo spawner su [MCStaker](https://mcstacker.net/?cmd=give), poi dartelo in game e infine tenerlo in mano + fare /ei create.\
Importerà automaticamente le funzionalità dello spawner nei tuoi ExecutableItems.
:::

* Esempio:

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

### Funzionalità Instrument <CustomTag type="version" version="1.20.5" />

* Info: funzionalità che ti permette di personalizzare il suono del corno di capra per gli item. Questa funzionalità funziona solo per gli item con material GOAT_HORN.
  * `enable`: valore booleano che abilita o disabilita le funzionalità instrument
  * `instrument`: il suono dello strumento musicale che verrà riprodotto quando il corno di capra viene usato. [Strumenti musicali](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/MusicInstrument.html)
* Esempio:

```yaml
material: GOAT_HORN
instrumentFeatures:
  enable: true
  instrument: DREAM_GOAT_HORN
```

### Funzionalità Weapon <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Info: funzionalità che ti permette di configurare impostazioni di combattimento specifiche per le armi sugli item.
  * `enable`: valore booleano che abilita o disabilita le funzionalità weapon
  * `disableBlockingTime`: valore intero che rappresenta per quanto tempo (in secondi) lo scudo del bersaglio verrà disabilitato dopo essere stato colpito da quest'arma
  * `damagePerAttack`: valore intero che rappresenta il danno di durabilità che quest'arma subisce per ogni attacco (predefinito: 5)
* Esempio:

```yaml
weaponFeatures:
  enable: true
  disableBlockingTime: 3
  damagePerAttack: 2
```


### Funzionalità Blocks attacks <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Info: funzionalità che ti permette di configurare il modo in cui gli item bloccano gli attacchi, in modo simile agli scudi. Ti permette di rendere qualsiasi item in grado di bloccare i danni.
  * `enable`: valore booleano che abilita o disabilita le funzionalità block attacks
  * `blockDelay`: valore intero che rappresenta il ritardo in secondi prima che l'item possa bloccare di nuovo dopo essere stato usato
  * `blockSound`: suono che viene riprodotto quando un attacco viene bloccato con successo
  * `disableSound`: suono che viene riprodotto quando il blocco viene disabilitato (dopo essere stato sopraffatto)
  * `disableCooldownScale`: valore double (moltiplicatore) per la durata della disabilitazione del blocco dopo essere stato sopraffatto (predefinito: 1.0)
  * `damageReductions`: lista di configurazioni di riduzione del danno che definiscono quanto danno viene ridotto per ogni tipo di danno
  * `bypassedBy`: tipo di danno che aggira completamente questo blocco
* Esempio:

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

#### Configurazione della Damage Reduction

Ogni voce di riduzione del danno ha le seguenti impostazioni:
* `baseDamageBlocked`: quantità base di danno bloccato (riduzione fissa)
* `factorDamageBlocked`: percentuale di danno bloccato (0.5 = 50% di riduzione)
* `horizontalBlockingAngle`: l'angolo in gradi da cui gli attacchi possono essere bloccati (90 = quarto anteriore, 180 = metà anteriore, 360 = tutte le direzioni). Deve essere maggiore di 0.
* `damageTypes`: lista dei tipi di danno a cui si applica questa riduzione. Consulta [Tipi di danno](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html) per i tipi disponibili.

:::tip
Con questa funzionalità puoi creare "scudi" personalizzati con material diversi. Per esempio, potresti creare un libro che blocca i danni magici o un diamante che blocca gli attacchi fisici!
:::
