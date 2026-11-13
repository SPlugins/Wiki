---
description: >-
  Scopri come creare un interruttore On/Off per un item con due attivatori,
  variabili e condizioni placeholder in ExecutableItems Premium.
source_hash: 739c8a7115be416e
translated_at: '2026-11-13T17:40:22.835Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Interruttore On / Off

## Requisiti+

* ExecutableItems **Premium**

## NOTA: CREA PRIMA 2 ATTIVATORI.

## Primo attivatore

### Crea una variabile

* Bisogna creare una variabile per avere un identificatore che indichi se l'interruttore è acceso o spento (on/off)

![Clicca su questa icona per aprire l'editor delle variabili](https://media.ssomar.com/m/docs-img-imgur-nrkkixb.png)

![Devi semplicemente creare una variabile](https://media.ssomar.com/m/docs-img-imgur-jubywre.png)

![Per l'id non c'è nulla di particolare. In questa guida chiameremo la nostra variabile "x"](https://media.ssomar.com/m/docs-img-imgur-ua4vmpu.png)

![Non importa se è un numero o una stringa](https://media.ssomar.com/m/docs-img-imgur-nut1h4h.png)

![In questo tutorial useremo il valore 0](https://media.ssomar.com/m/docs-img-imgur-bj4cpf7.png)

### Crea il tuo item e aggiungi un attivatore

* In questo caso sarà un PLAYER\_ALL\_CLICK

![](https://media.ssomar.com/m/docs-img-image-94.png)

### Comandi

* Scrivi i comandi che vuoi eseguire

### Variables Modification

![Per prima cosa clicca su questa icona nell'editor dell'attivatore](https://media.ssomar.com/m/docs-img-imgur-lvcmrrl.png)

![Crea una variables modification](https://media.ssomar.com/m/docs-img-imgur-r50hlwy.png)

![Seleziona la variabile che abbiamo creato prima](https://media.ssomar.com/m/docs-img-imgur-sksrdko.png)

![Imposta il tipo di modifica su SET](https://media.ssomar.com/m/docs-img-imgur-bbwjzw8.png)

![Imposteremo un valore diverso da 0 in modo che lo stesso attivatore non possa essere eseguito una seconda volta](https://media.ssomar.com/m/docs-img-imgur-av856uf.png)

### Condizione placeholder

* Serve per controllare quale attivatore verrà eseguito 

![Per prima cosa andiamo su conditions](https://media.ssomar.com/m/docs-img-image-419.png)

![Poi su placeholder conditions](https://media.ssomar.com/m/docs-img-image-303.png)

![Naturalmente dobbiamo creare una condizione placeholder](https://media.ssomar.com/m/docs-img-image-429.png)

![Anche PLAYER\_STRING è un'opzione](https://media.ssomar.com/m/docs-img-imgur-nxuypmm.png)

![Useremo il placeholder della variabile che abbiamo creato. Usa %var\_x\_int% se hai usato PLAYER\_STRING](https://media.ssomar.com/m/docs-img-imgur-0qdthro.png)

![Useremo questo comparatore](https://media.ssomar.com/m/docs-img-imgur-urvtgm8.png)

![Useremo il valore 0 come opzione "off"](https://media.ssomar.com/m/docs-img-imgur-cuorrfg.png)

### Aggiungi all'item stesso il cooldown dell'altro item

* Ad esempio, l'id dell'item EI è `onoff-demo`. Dovrai quindi andare a questa icona e poi seguire le immagini.

![](https://media.ssomar.com/m/docs-img-imgur-mmhsap4.png)

![](https://media.ssomar.com/m/docs-img-imgur-anndswf.png)

![](https://media.ssomar.com/m/docs-img-imgur-q6vjclp.png)

Ad esempio, l'id dell'interruttore on/off è "faker", quindi seleziona "faker".

![](https://media.ssomar.com/m/docs-img-imgur-x1dtqww.png)

Da quando è uscita la versione 5.0, gli id degli attivatori partono da "activator0" invece che da "activator1". In ogni caso, devi selezionare il secondo attivatore, perché gli attivatori vengono eseguiti dall'alto verso il basso. 

:::info
Questa opzione è importante perché, se non c'è un cooldown, il secondo attivatore, che dovrebbe spegnere l'attivatore, verrebbe eseguito subito di seguito
:::

![Imposta il cooldown su 1 o 2. Decidi tu](https://media.ssomar.com/m/docs-img-imgur-zv8ioie.png)

![](https://media.ssomar.com/m/docs-img-imgur-izxlfq9.png)

Si consiglia di impostarlo su true se vuoi che l'item possa essere usato a ripetizione. Un tick è sufficiente per evitare l'esecuzione immediata di cui sopra.

![](https://media.ssomar.com/m/docs-img-imgur-gb5oud0.png)

## Secondo attivatore

* Useremo di nuovo **`PLAYER_ALL_CLICK`**

![](https://media.ssomar.com/m/docs-img-image-165.png)

###

### Comandi

* Scrivi i comandi che vuoi eseguire

### Variables Modification

![Per prima cosa clicca su questa icona nell'editor dell'attivatore](https://media.ssomar.com/m/docs-img-imgur-lvcmrrl.png)

![Crea una variables modification](https://media.ssomar.com/m/docs-img-imgur-r50hlwy.png)

![Seleziona la variabile che abbiamo creato prima](https://media.ssomar.com/m/docs-img-imgur-sksrdko.png)

![Imposta il tipo di modifica su SET](https://media.ssomar.com/m/docs-img-imgur-bbwjzw8.png)

![Imposteremo un valore diverso da 1 in modo che lo stesso attivatore non possa essere eseguito una seconda volta](https://media.ssomar.com/m/docs-img-imgur-0kzktpe.png)

### Condizione placeholder

* Serve per controllare quale attivatore verrà eseguito 

![Per prima cosa andiamo su conditions](https://media.ssomar.com/m/docs-img-image-419.png)

![Poi su placeholder conditions](https://media.ssomar.com/m/docs-img-image-303.png)

![Naturalmente dobbiamo creare una condizione placeholder](https://media.ssomar.com/m/docs-img-image-429.png)

![Anche PLAYER\_STRING è un'opzione](https://media.ssomar.com/m/docs-img-imgur-nxuypmm.png)

![Useremo il placeholder della variabile che abbiamo creato. Usa %var\_x\_int% se hai usato PLAYER\_STRING](https://media.ssomar.com/m/docs-img-imgur-0qdthro.png)

![Useremo questo comparatore](https://media.ssomar.com/m/docs-img-imgur-urvtgm8.png)

![Useremo il valore 1 come opzione "on"](https://media.ssomar.com/m/docs-img-imgur-bjkv5hy.png)

### Aggiungi all'item stesso il cooldown dell'altro item

* Ad esempio, l'id dell'item EI è `onoff-demo`. Dovrai quindi andare a questa icona e poi seguire le immagini.

![](https://media.ssomar.com/m/docs-img-imgur-mmhsap4.png)

![](https://media.ssomar.com/m/docs-img-imgur-anndswf.png)

![](https://media.ssomar.com/m/docs-img-imgur-q6vjclp.png)

Ad esempio, l'id dell'interruttore on/off è "faker", quindi seleziona "faker".

![](https://media.ssomar.com/m/docs-img-imgur-tfly1dt.png)

Da quando è uscita la versione 5.0, gli id degli attivatori partono da "activator0" invece che da "activator1". In ogni caso, devi selezionare il secondo attivatore, perché gli attivatori vengono eseguiti dall'alto verso il basso. 

:::info
Questa opzione è importante perché, se non c'è un cooldown, il secondo attivatore, che dovrebbe spegnere l'attivatore, verrebbe eseguito subito di seguito
:::

![Imposta il cooldown su 1 o 2. Decidi tu](https://media.ssomar.com/m/docs-img-imgur-zv8ioie.png)

![](https://media.ssomar.com/m/docs-img-imgur-izxlfq9.png)

Si consiglia di impostarlo su true se vuoi che l'item possa essere usato a ripetizione. Un tick è sufficiente per evitare l'esecuzione immediata di cui sopra.

![](https://media.ssomar.com/m/docs-img-imgur-gb5oud0.png)

##

### Salva l'item EI

* Dovrebbe avere questo aspetto (abbiamo aggiunto dei comandi che scrivono ON (activator1) e OFF (activator2) per mostrarti come funziona :p

## Config dell'item

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

## Ultimo commento

Se hai domande o pensi che la guida non sia stata abbastanza chiara, non esitare a chiedere su Discord.\
Ti aiuteremo! 😁😁
