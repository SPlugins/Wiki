---
description: >-
  Scopri tutte le opzioni dei blocchi di ExecutableBlocks: impostazioni di base,
  titoli, container, forni, display, hopper e molto altro.
source_hash: 7bbe17ba1d336968
translated_at: '2026-11-13T17:36:33.833Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Funzionalità dei blocchi


## Attivatori

* Funzionalità molto importanti che ti permettono di aggiungere abilità ai tuoi blocchi
* Wiki dedicata a questa funzionalità: [Elenco degli attivatori EB](/executableblocks/configurations/activator-configuration/list-of-the-activators.md) e [Funzionalità degli attivatori EB](/executableblocks/configurations/activator-configuration/activators-features.md)


## Impostazioni di base

### CreationType

* Il modo in cui creare l'EB
  * BASIC\_CREATION
  * DISPLAY\_CREATION
  * IMPORT FROM EI
  * IMPORT FROM ITEMSADDER
  * IMPORT FROM NEXO
  * IMPORT FROM ORAXEN

### MATERIAL

* Info: l'item Minecraft di base dell'Executable Block. [Material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
  * Info aggiuntive: l'item deve essere un blocco piazzabile.

```yaml
material: DIRT
```

:::info
Supporta gli spawner! Quindi, se vuoi definire un tipo per il tuo spawner, aggiungi:

`spawnerType: CHICKEN`

[Elenco degli EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
:::


### DISPLAYNAME

* Info: il nome del blocco
* Esempio: 

```yaml
name: '&cEpic Sword'
```

### LORE

* Info: il lore del blocco
* Esempio:

```yaml
lore:
- §6>> §e----------- §6<<
- §aClick on this block
- §awhen it is placed !
- §aand see the custom structures !
- §6>> §e----------- §6<<
```

* Placeholder che puoi usare nel lore: %player%, [%usage%](block-features.md#hide-usage-1.14+), ecc.

### DROP BLOCK IF IT IS BROKEN

* Info: se vuoi rendere il tuo Executable Block ottenibile rompendolo oppure no
* Esempio: 

```yaml
dropBlockIfItIsBroken: true
```

* Obbligatorio: NO (Predefinito: true)

### DROP BLOCK IF IT IS BURNS

* Info: se vuoi rendere il tuo Executable Block ottenibile rompendolo oppure no
* Esempio: 

```yaml
dropBlockIfItIsBurns: true
```

* Obbligatorio: NO (Predefinito: false)

### DROP BLOCK WHEN IT EXPLODES

* Info: se vuoi rendere il tuo Executable Block ottenibile quando viene distrutto da una qualsiasi esplosione
* Esempio:

```yaml
dropBlockWhenItExplodes: true
```

* Obbligatorio: NO (Predefinito: true)

### DROP TYPE

* Info: seleziona il tipo di drop che avrà il blocco EB
* Tipi di drop:
  * IN\_THE\_INVENTORY
  * ON\_THE\_GROUND

### ONLY BREAKABLE WITH EI

* Info: requisito per avere almeno l'Executable Item richiesto nella mano principale o nella seconda mano per rompere l'Executable Block
* Esempio:

```yaml
onlyBreakableWithEI:
- firework
```

* Obbligatorio: NO (Predefinito: vuoto)

### CANBEMOVED

* Info: se il blocco può essere spostato con un pistone oppure no.
* Esempio:

```yaml
canBeMoved: false
```

### EXECUTABLE ITEMS ID

* Info: è un'opzione che ti permette di sincronizzare il tuo Executable Block con un Executable Item.
  * Info aggiuntive: l'Executable Block copia il nome, il material e il lore dell'Executable Item, quindi se provi a modificare il nome, il material o il lore dell'EB, non cambierà nulla. Devi modificare il nome, il material e il lore dell'EI perché le modifiche abbiano effetto sull'EB
* Esempio: 

```yaml
executableItem: hack
```

* Obbligatorio: NO

## Funzionalità del titolo 

Supporta [DecentHolograms](https://www.spigotmc.org/resources/96927/), [HolographicDisplays](https://dev.bukkit.org/projects/holographic-displays) e [CMI](https://www.spigotmc.org/resources/3742/)

### ACTIVE TITLE 

* Info: se l'ologramma del titolo è attivo oppure no
* Esempio:

```yaml
activeTitle: false
```

* Obbligatorio: NO

### TITLE NAME 

* Info: il testo mostrato dall'ologramma
* Esempio: 

```yaml
title: '&7&oDefault title'
```

* (Con HolographicDisplay) Puoi mostrare un item nel titolo con ITEM::MATERIAL

```yaml
title: 
- '&7&oDefault title'
- 'ITEM::DIAMOND'
```

* Obbligatorio: NO

### TITLE ADJUSTMENT 

* Info: di quanto è regolata l'altezza dell'ologramma del titolo, verso l'alto o verso il basso
* Esempio:

```yaml
titleAdjustment: 0.5
```

* Obbligatorio: NO
  * Info aggiuntive: un numero positivo sposta verso l'alto, un numero negativo verso il basso

```yaml
titleFeatures:
  # Active the title
  activeTitle: true
  # The title
  title:
   - Hello
   - &6It's support color
   - and %placeholder%
  titleAdjustment: 0.5
```

## Impostazioni di utilizzo personalizzato

#### USAGE

* Info: il valore che indica quante volte puoi usarlo. Usato soprattutto per la funzione di modifica dell'utilizzo degli attivatori.
* Esempio: 

```yaml
usage: 0
```

Per un blocco con utilizzo infinito:

```yaml
usage: -1
```

* Obbligatorio: NO (Predefinito: 0)

:::info
usage: 0 equivale a usage:1, ma non mostrerà il testo "Remaining use:..." nel lore.
:::

## Funzionalità dei container

:::info
I filtri degli item supportano correttamente il tag `{CUSTOMODELDATA:X}`, quindi puoi creare un hopper che prende solo un item con una texture specifica
:::

### whitelistMaterials

* Qui puoi aggiungere un elenco di material che possono essere inseriti nel tuo blocco

```
containerFeatures:
  whitelistMaterials:
  - DIRT
```

### blacklistMaterials

* Qui puoi aggiungere un elenco di material che non possono essere inseriti nel tuo blocco

```
containerFeatures:
  blacklistMaterials:
  - STONE
```

:::info
Nel caso degli HOPPER, la whitelist e la blacklist limitano gli item che l'hopper può aspirare.
:::

### isLocked

* Se il container è bloccato oppure no

### lockedName

* Se è bloccato, devi selezionare il nome della chiave

```
containerFeatures:
  isLocked: true
  lockedName: ThisIsMyKey
```

### inventoryTitle

* Il titolo dell'inventario del container 

```
containerFeatures:
  inventoryTitle: INVENTORY TITLE
```

## Funzionalità delle fornaci

### furnaceSpeed

* Ti permette di personalizzare la velocità della tua fornace.
* Esempio:

```
furnaceFeatures:
  furnaceSpeed: 2.0
```

:::info
Predefinito -> 1

2 volte la velocità predefinita -> 2

Metà della velocità predefinita -> 0.5
:::

### infiniteFuel

* Fa in modo che il blocco non richieda combustibile per funzionare

```
furnaceFeatures:
  infiniteFuel: true
```

### infiniteVisualLit

* Fa sembrare il blocco acceso

```
furnaceFeatures:
  infiniteVisualLit: true
```

### fortuneMultiplier

* Moltiplicatore del risultato.

```
furnaceFeatures:
  fortuneMultiplier: 5
```

:::info
Può essere negativo per rimuovere item dal contenitore dei risultati.
:::

### fortuneChance

* Probabilità che la fortuna venga applicata

```
furnaceFeatures:
  fortuneChance: 0.95
```

## Funzionalità direzionali

### forceBlockFaceOnPlace

* Forza il blocco a essere piazzato rivolto in una certa direzione
* Esempio:

```
directionalFeatures:
  forceBlockFaceOnPlace: true
```

### blockFaceOnPlace

* Imposta la faccia del blocco quando viene piazzato
* Esempio:

```
directionalFeatures:
  forceBlockFaceOnPlace: true
  blockFaceOnPlace: NORTH
```

:::info
`blockFaceOnPlace` viene applicato solo quando `forceBlockFaceOnPlace` è `true`. Senza di esso, il blocco mantiene la direzione con cui è stato piazzato. Queste opzioni ruotano solo i blocchi direzionali (i blocchi con un `facing`).

Anche il comando [/eb place](/executableblocks/commands-and-permissions#place-an-eb-at-a-specific-position) può ricevere una direzione, che ha la precedenza su queste opzioni.
:::

## Funzionalità degli alveari <CustomTag type="version" version="1.15" /> {#beehive-features}

Pre-riempie un alveare o un nido d'api quando viene piazzato. Solo per gli ExecutableBlocks il cui material è `BEEHIVE` o `BEE_NEST` (creati con `BASIC_CREATION` o `IMPORT_FROM_EXECUTABLE_ITEMS`); le opzioni non fanno nulla sugli altri blocchi. Nell'editor in gioco, il pulsante compare solo per questi due material.

Entrambe le opzioni sono facoltative: quando nessuna delle due è impostata, il blocco non viene modificato e non viene scritto nulla nella config.

### honeyLevel

* Info: livello di miele del blocco piazzato, da `0` (vuoto) a `5` (pieno, il miele può essere raccolto). Non impostato: il livello di miele non viene modificato.

### bees

* Info: numero di api inserite nel blocco piazzato. Non impostato o `0`: nessuna ape. Un alveare ne contiene 3 per impostazione predefinita, le api in eccesso non vengono aggiunte.

* Esempio:

```yaml
material: BEE_NEST
beehiveFeatures:
  honeyLevel: 5
  bees: 2
```

:::tip
Con un [attivatore LOOP e `loopTimerPerBlock: true`](/executableblocks/configurations/activator-configuration/list-of-the-activators#loop-), un nido d'api raccolto può essere piazzato di nuovo (e quindi riempito di nuovo) dopo un tempo fisso dal momento in cui è stato piazzato.
:::

## Funzionalità del banco di distillazione

### brewingStandSpeed

* Ti permette di personalizzare la velocità del tuo brewingStand
* Esempio:

```
brewingStandFeatures:
  brewingStandSpeed: 1.0
```

:::info
Predefinito -> 1

2 volte la velocità predefinita -> 2

Metà della velocità predefinita -> 0.5
:::

## Funzionalità degli hopper

### amountItemsTransferred

* Ti permette di personalizzare la quantità di item trasferiti a ogni trasferimento dell'hopper.
* Si applica sia quando l'hopper spinge gli item nel container verso cui è rivolto, sia (dalla 26.11) quando preleva item dal container sopra di esso.
* Esempio:

```yaml
hopperFeatures:
  amountItemsTransferred: 5
```

## Funzionalità dei display

### Material

* Material dell'item che verrà mostrato
* Esempio:

```
DisplayFeatures:
  material: PAPER
```

### Custom model data

* Custom model data del material che verrà mostrato
* Esempio:

```
DisplayFeatures:
  customModelData: 3
```

### Scale

* Scala del display
* Esempio:

```
DisplayFeatures:
  scale: 1
```

### aligned

* Se vuoi che il display sia allineato
* Esempio:

```
DisplayFeatures:
```
aligned: false

### customPitch

* Seleziona il pitch personalizzato
* Esempio:

```
DisplayFeatures:
  customPitch: 1
```

### customY

* Seleziona la Y personalizzata
* Esempio:

```
DisplayFeatures:
  customY: 1.0
```

### Glow

* Con bagliore oppure no
* Esempio:

```
DisplayFeatures:
  glow: false
```

### Funzionalità della zona di interazione

* Larghezza del display
* Altezza del display
* Con collisione oppure no
* Esempio:

```
DisplayFeatures:
  InteractionZoneFeatures:
    width: 1.0
    height: 1.0
    isCollidable: false
```

### Click to break

* Numero di click necessari per rompere la creazione display
* Esempio:

```
DisplayFeatures:
  clickToBreak: 3
```

## Chiseled Bookshelf

### occupiedSlots

* Imposta quali slot (indice 0-5) conterranno un libro

```
chiseledBookshelfFeatures:
  occupiedSlots:
  - '2'
  - '5'
```

## Cancel

### cancelLiquidDestroy

* Info: annulla la distruzione di semi e teste di giocatori da parte di acqua/lava
* Esempio: 

```
cancelLiquidDestroy: true
```
