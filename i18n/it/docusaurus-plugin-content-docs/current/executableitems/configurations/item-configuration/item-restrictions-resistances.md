---
description: >-
  Scopri come configurare le restrizioni e le resistenze degli item in
  ExecutableItems: blocca drop, crafting, incudine, contenitori e molto altro.
source_hash: bf6b77f864065099
translated_at: '2026-11-13T17:39:26.712Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Restrizioni/Resistenze degli item

In questa pagina scoprirai le restrizioni degli item e alcune resistenze, che ti permetteranno di personalizzare il comportamento dell'item in determinati casi.

## Restrizioni globali

* Info: se vuoi aggiungere una restrizione a tutti gli item che hai creato nel plugin, puoi inserire la configurazione della restrizione (o delle restrizioni) desiderata all'interno del file config.yml del plugin.
* Esempio: vorrei aggiungere le restrizioni per non usare l'incudine e la mola a tutti gli ExecutableItems creati e da creare


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


## Restrizioni individuali

In questa sezione scoprirai come aggiungere una restrizione individuale solo per l'ExecutableItem che stai modificando.

### Annullare il drop dell'item

* Info: valore booleano che impedisce al giocatore di lasciar cadere l'ExecutableItem.
* Nota: quando l'item non può tornare nell'inventario (ad esempio era sul cursore mentre l'inventario era chiuso e tutti gli slot sono pieni), il drop è consentito invece di eliminare l'item.
* Esempio:

```yaml
restrictions:
  cancel-item-drop: true
```

### Annullare il piazzamento del blocco a terra.

* Info: valore booleano che impedisce al giocatore di piazzare a terra gli Executable Items nel caso in cui l'item sia un'istanza di blocco.
* Esempio:

```yaml
restrictions:
  cancel-item-place: true
```

### Annullare l'uso dell'item in qualsiasi ricetta sul banco da lavoro

* Info: valore booleano che impedisce al giocatore di creare ricette vanilla con l'ExecutableItem.
* Esempio:

```yaml
restrictions:
  cancel-item-craft: true
```

### Annullare l'uso dell'item solo nelle ricette vanilla, senza influenzare quelle personalizzate

* Info: valore booleano che impedisce al giocatore di creare ricette vanilla con l'ExecutableItem, ma l'item può comunque essere usato nelle ricette di crafting personalizzate.
* Esempio:

```yaml
restrictions:
  cancel-item-craft-no-custom: true
```

### Annullare l'interazione per decorare i vasi di Minecraft

* Info: valore booleano che impedisce al giocatore di inserire gli ExecutableItems nei vasi decorati
* Esempio:

```yaml
restrictions:
  cancel-decorated-pot: true
```

### Annullare il posizionamento dell'item su una mensola

* Info: valore booleano che impedisce al giocatore di posizionare l'ExecutableItem su una mensola (Minecraft 1.21.9+, ogni tipo di legno).
  * Utile per un item che si restituisce tramite i suoi attivatori (ad esempio un secchio d'acqua "infinito"): senza questa restrizione, l'item posizionato sulla mensola vi resta mentre l'attivatore ne consegna uno nuovo.
* Esempio:

```yaml
restrictions:
  cancel-shelf: true
```

### Annullare il deposito dell'item in un contenitore

* Info: valore booleano che impedisce al giocatore di inserire l'ExecutableItem nei seguenti blocchi:
  * Chest
  * Ender Chest
  * Trapped Chest
  * Barrel
  * Shulker Box
* Esempio: (questa funzione non funziona in creativa)

```yaml
restrictions:
  cancel-deposit-in-chest: true
```

### Annullare il deposito dell'item in una fornace

* Info: valore booleano che impedisce al giocatore di inserire l'ExecutableItem nei seguenti blocchi:
  * Furnace
  * Blast Furnace
  * Smoker
* Esempio: (questa funzione non funziona in creativa)

```yaml
restrictions:
  cancel-deposit-in-furnace: true
```

### Annullare la combustione dell'item nel fuoco e nella lava

* Info: valore booleano che impedisce all'ExecutableItem di bruciare nel fuoco o nella lava.
* Esempio:

```yaml
restrictions:
  cancel-item-burn: true
```

### Annullare l'eliminazione dell'item a causa del contatto con un cactus

* Info: valore booleano che impedisce all'ExecutableItem di essere eliminato quando tocca un blocco di cactus.
* Esempio:

```yaml
restrictions:
  cancel-item-delete-by-cactus: true
```

### Annullare l'eliminazione dell'item quando colpito da un fulmine

* Info: valore booleano che impedisce all'ExecutableItem di essere eliminato quando viene colpito da un fulmine.
* Config: `cancel-item-delete-by-lightning: true`
* Esempio:

```yaml
restrictions:
  cancel-item-delete-by-lightning: true
```

### Annullare l'incantamento dell'item

* Info: valore booleano che impedisce all'item di essere incantato 
* Esempio:

```yaml
restrictions:
  cancel-enchant: true
```

### Annullare il posizionamento dell'item in un'incudine 

* Info: valore booleano che impedisce al giocatore di inserire l'ExecutableItem in un'incudine. Questo impedisce di fatto di posizionarlo, quindi impedisce anche di rinominarlo e di incantarlo.
* Esempio:

```yaml
restrictions:
  cancel-anvil: true
```

### Annullare l'azione di rinomina tramite incudine

* Info: valore booleano che impedisce al giocatore di rinominare l'ExecutableItem tramite un'incudine.
* Esempio:

```yaml
restrictions:
  cancel-rename-anvil: true
```

:::tip
Un item che viene riparato o incantato in un'incudine **senza essere rinominato** mantiene il suo nome colorato / sfumato grazie a [keepNameInAnvil](/executableitems/configurations/general-configuration#keepnameinanvil) (abilitato per impostazione predefinita). Questa opzione va in `plugins/ExecutableItems/config.yml`, non nel file dell'item.
:::

### Annullare l'azione di incantamento tramite incudine

* Info: valore booleano che impedisce al giocatore di incantare l'ExecutableItem tramite un'incudine.
* Esempio:

```yaml
restrictions:
  cancel-enchant-anvil: true
```

### Annullare l'interazione dell'item con cavallo/mulo/lama

* Info: valore booleano che impedisce l'interazione degli ExecutableItems con cavalli/muli/lama. Questo disabilita anche l'inventario di stoccaggio.
* Esempio:

```yaml
restrictions:
  cancel-horse: true
```

### Annullare il consumo/l'ingestione dell'item

* Info: valore booleano che impedisce al giocatore di consumare o mangiare l'ExecutableItem.
* Esempio:

```yaml
restrictions:
  cancel-consumption: true
```

### Annullare l'uso dell'item all'interno del blocco crafter

* Info: valore booleano che impedisce al giocatore di inserire gli ExecutableItems all'interno di un blocco crafter.
* Config: `cancel-crafter: false`

```yaml
restrictions:
  cancel-crafter: true
```

### Restrizione di blocco nell'inventario

* Info: valore booleano che fa restare l'ExecutableItem nello slot in cui si trova e impedisce al giocatore di spostarlo in qualsiasi modo.
* Esempio (questa funzione non funziona in creativa)

```yaml
restrictions:
  locked-in-inventory: true
```

### Annullare le interazioni degli strumenti

* Info: valore booleano che impedisce al giocatore di usare l'ExecutableItem per attivare le interazioni degli strumenti. Ad esempio (clic destro su un blocco con un'ascia per scortecciarlo, uso di una zappa per arare un blocco d'erba)
* Esempio:

```yaml
restrictions:
  cancel-tool-interactions: true
```

### Annullare il posizionamento dell'item in una cornice

* Info: valore booleano che impedisce al giocatore di inserire l'ExecutableItem in una cornice.
* Esempio:

```yaml
restrictions:
  cancel-item-frame: true
```

### Annullare l'interazione con un tavolo del fabbro

* Info: valore booleano che impedisce al giocatore di inserire l'ExecutableItem in un tavolo del fabbro.
* Esempio:

```yaml
restrictions:
  cancel-smithing-table: true
```

### Annullare l'interazione con una mola

* Info: valore booleano che impedisce al giocatore di inserire l'ExecutableItem in una mola.
* Esempio:

```yaml
restrictions:
  cancel-grind-stone: true
```

### Annullare l'interazione con un tagliapietre

* Info: valore booleano che impedisce al giocatore di inserire l'ExecutableItem in un tagliapietre.
* Esempio:

```yaml
restrictions:
  cancel-stone-cutter: true
```

### Annullare l'interazione con un banco di distillazione 

* Info: valore booleano che impedisce al giocatore di inserire l'ExecutableItem in un banco di distillazione.
* Esempio:

```yaml
restrictions:
  cancel-brewing: true
```

### Annullare l'interazione con un faro

* Info: valore booleano che impedisce al giocatore di inserire l'ExecutableItem in un faro.
* Esempio:

```yaml
restrictions:
  cancel-beacon: true
```

### Annullare l'interazione con un tavolo da cartografo

* Info: impedisce al giocatore di inserire l'ExecutableItem in un tavolo da cartografo.
* Esempio:

```yaml
restrictions:
  cancel-cartography: true
```

### Annullare l'interazione con un composter

* Info: valore booleano che impedisce al giocatore di inserire l'ExecutableItem in un composter.
* Esempio:

```yaml
restrictions:
  cancel-composter: true
```

### Annullare l'interazione con un dispenser

* Info: valore booleano che impedisce al giocatore di inserire l'ExecutableItem in un dispenser.
* Esempio:

```yaml
restrictions:
  cancel-dispenser: true
```

### Annullare l'interazione con un dropper

* Info: valore booleano che impedisce al giocatore di inserire l'ExecutableItem in un dropper.
* Esempio:

```yaml
restrictions:
  cancel-dropper: true
```

### Annullare l'interazione con una tramoggia

* Info: valore booleano che impedisce al giocatore di inserire gli item ExecutableItem all'interno di una tramoggia. Questo significa lasciare l'item nel contenitore della tramoggia. Non impedisce all'item di entrare nella tramoggia se viene lasciato cadere sopra di essa.
* Esempio:

```yaml
restrictions:
  cancel-hopper: true
```

### Annullare l'interazione con un leggio

* Info: valore booleano che impedisce al giocatore di inserire l'ExecutableItem in un leggio.
* Esempio:

```yaml
restrictions:
  cancel-lectern: true
```

### Annullare l'interazione con un mercante/villager

* Info: valore booleano che impedisce al giocatore di inserire l'ExecutableItem in uno scambio con un villager/mercante.
* Esempio:

```yaml
restrictions:
  cancel-merchant: true
```

### Annullare lo scambio degli item tra le mani

* Info: valore booleano che impedisce al giocatore di scambiare gli item da una mano all'altra. In genere premendo F sulla tastiera per "Swap items with offhand"
* Esempio:

```yaml
restrictions:
  cancel-swap-hand: true
```

### Annullare l'interazione con un corno

* Info: valore booleano che impedisce al giocatore di suonare il corno nel caso in cui l'ExecutableItem sia un corno.
* Esempio:

```yaml
restrictions:
  cancel-horn: true
```

### ANNULLARE ARMOR STAND

* Info: impedisce al giocatore di posizionare l'ExecutableItem su un armor stand.
* Esempio:

```yaml
restrictions:
  cancel-armorstand: true
```

### ANNULLARE SPAWNER

* Info: impedisce al giocatore di usare l'uovo di generazione ExecutableItem su uno spawner nel modo vanilla.
* Esempio:

```yaml
restrictions:
  cancel-spawner: true
```

### ANNULLARE POSIZIONAMENTO IN UN BUNDLE

* Info: impedisce al giocatore di inserire l'ExecutableItem in un bundle.
* Esempio:

```yaml
restrictions:
  cancel-place-in-bundle: true
```
