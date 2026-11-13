---
description: >-
  Scopri come creare un bonus per set di armatura completo in ExecutableItems
  con un attivatore LOOP e la condizione ifHasExecutableItems.
source_hash: 6cf2ef4cf39ef5e2
translated_at: '2026-11-13T17:40:06.468Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Bonus per set di armatura

:::tip Novità: set nativi
ExecutableItems ora ha dei [set](/executableitems/configurations/sets-configuration) nativi: un file per set, più livelli (2 pezzi, 4 pezzi...), effetti e attributi rimossi in modo pulito quando si toglie un pezzo, e nessun LOOP sempre in esecuzione. Usali per i nuovi set. Il metodo qui sotto funziona ancora.
:::

## Creiamolo!

### Per prima cosa dobbiamo creare i pezzi del set di armatura

* Per questo esempio, i nomi degli item saranno:\
  Elmo = **nameofhelmet.yml**\
  Corazza = **nameofchestplate.yml**\
  Gambali = **nameofleggings.yml**\
  Stivali = **nameofboots.yml**

![](https://media.ssomar.com/m/docs-img-image-145.png)

* Per crearli
  * /ei create nameofhelmet -> Save
  * /ei create nameofchestplate -> Save
  * /ei create nameofleggings -> Save
  * /ei create nameofboots -> Save

### Ora crea l'attivatore che vogliamo attivare quando si indossa l'intero set

:::info
In questo esempio creeremo un'armatura che ti dà forza ogni volta che indossi l'intero set, quindi ci servirà un LOOP ACTIVATOR. Devi anche scegliere quale pezzo dell'armatura sarà il "principale", quello da cui verranno eseguiti tutti i comandi. In questo caso il "principale" sarà l'**elmo**.
:::

* Quindi, come detto prima, l'attivatore sarà **LOOP**

![](https://media.ssomar.com/m/docs-img-image-399.png)

* Vogliamo che funzioni solo quando è indossato, quindi in **detailedSlots** lo imposteremo in modo che funzioni solo quando si trova nello **slot della testa.**

![](https://media.ssomar.com/m/docs-img-image-189.png)

* E, per l'effetto bonus useremo il comando vanilla per gli effetti:

```
minecraft:effect give %player% strength 10 0
```

### Condizione dell'intero set

Perfetto! Abbiamo appena creato l'"abilità" che ha l'intero set, ma dobbiamo aggiungere la **condizione** di avere l'intero set!!

* Vai su Player conditions->ifHasExecutableItems

![](https://media.ssomar.com/m/docs-img-image-193.png)

![](https://media.ssomar.com/m/docs-img-image-172.png)

![](https://media.ssomar.com/m/docs-img-image-332.png)

Poi aggiungi 3 condizioni IfHasExecutableItem per gli altri 3 pezzi dell'armatura. In questo caso, dato che ho scelto l'elmo come principale, devo aggiungere la corazza, i gambali e gli stivali.

Spiegherò prima come aggiungere la corazza come condizione:

* Quindi, nella foto qui sopra, aggiungi una condizione e vedrai questo
* ![](https://media.ssomar.com/m/docs-img-image-176.png)
* Il primo campo è l'EI necessario, in questo caso scorrerò verso il basso fino a trovare la corazza
* ![](https://media.ssomar.com/m/docs-img-image-389.png)
* Una volta trovata, passiamo all'opzione successiva -> "Amount", che sarà 1
* ![](https://media.ssomar.com/m/docs-img-image-258.png)
* E poi lo slot in cui vogliamo che si trovi questo ExecutableItem, nel caso della corazza lo slot della corazza.
* ![](https://media.ssomar.com/m/docs-img-image-179.png)
* ![](https://media.ssomar.com/m/docs-img-image-427.png)

:::info
Ricorda di disattivare la mano principale e di abilitare un solo slot, quello che ti serve.
:::

* **E in questo caso non useremo la condizione di utilizzo, quindi non toccarla.**
* E salva.

Devi fare lo stesso per gli altri 2 pezzi; una volta fatto, avremo 3 condizioni in totale

![](https://media.ssomar.com/m/docs-img-image-249.png)

* E questo è tutto! **Salva l'item** e provalo!

![](https://media.ssomar.com/m/docs-img-image-348.png)

Funziona! Ora... se non hai uno dei pezzi dell'armatura, la condizione te lo dirà..

![](https://media.ssomar.com/m/docs-img-image-384.png)

Per disattivarla dovremo entrare di nuovo nell'editor delle condizioni e cliccare qui

![](https://media.ssomar.com/m/docs-img-image-153.png)

E impostarla su NO VALUE

![](https://media.ssomar.com/m/docs-img-image-120.png)

E questo è tutto, ora salva e non apparirà più nessun messaggio della condizione.

E ora... è tutto!! 😁😁😎

:::info
Se hai qualche domanda puoi farla su **Discord** ^^

Metodo di Special70
:::

Esempi:


```yaml
name: '&bHelmet'
material: DIAMOND_HELMET
lore:
  - '&7Wearing the full set grants Regeneration'
activators:
  fullSetBonus:
    name: Full Set Bonus
    option: LOOP
    delay: 1 # One second delay
    delayInTick: false # To specify that the delay need to be in seconds
    detailedSlots:
      - 39
    playerCommands:
      - minecraft:effect give %player% minecraft:regeneration 1 0
    playerConditions:
      ifHasExecutableItems:
        condition1_for_checking_chestplate: # 
          executableItem: CustomChestplate
          amount: 1
          detailedSlots:
            - 38
        condition2_for_checking_leggings:
          executableItem: CustomLeggings
          amount: 1
          detailedSlots:
            - 37
        condition3_for_checking_boots:
          executableItem: CustomBoots
          amount: 1
          detailedSlots:
            - 36
```


```yaml
name: '&bChestplate'
material: DIAMOND_CHESTPLATE
lore:
  - '&7Wearing the full set grants Regeneration'
```


```yaml
name: '&bLeggings'
material: DIAMOND_LEGGINGS
lore:
  - '&7Wearing the full set grants Regeneration'
```


```yaml
name: '&bBoots'
material: DIAMOND_BOOTS
lore:
  - '&7Wearing the full set grants Regeneration'
```
