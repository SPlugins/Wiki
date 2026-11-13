---
description: >-
  Scopri le opzioni degli attivatori di ExecutableItems per creare item da
  semplici a complessi: slot, aggiornamento automatico, condizioni e cooldown.
source_hash: c1b2157347497341
translated_at: '2026-11-13T17:37:10.335Z'
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


# Funzionalità degli attivatori

Tutte queste funzionalità si trovano all'interno dell'attivatore. Come promemoria, gli attivatori ti permettono di eseguire azioni personalizzate sul tuo ExecutableItem: può avere condizioni, eseguire comandi, avere un cooldown, ecc.

Le funzionalità premium sono contrassegnate dal tag: <CustomTag type="premium" />

## Funzionalità generali di un attivatore

<GeneralActivatorsFeatures />

## Funzionalità per gli attivatori EI

### Detailed slots

* Info: Elenco di valori interi che rappresentano gli slot dell'inventario in cui l'attivatore potrà funzionare. Questo significa che, se l'evento avviene in uno slot che non è tra questi, l'attivatore non verrà attivato. 

![](https://media.ssomar.com/m/docs-img-slots-info.png)
* Esempio:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    detailedSlots:
  - -1 # Slot for mainhand, this is not a static slot but having it on mainhand
  - 40 # This is a static slot, it represents the offhand slot.
```

### Auto update item

* Info: Questa funzionalità dell'attivatore fa sì che l'item venga aggiornato in una delle funzionalità dell'elenco. Fai attenzione! Potrebbe non essere necessaria, a seconda di ciò che vuoi ottenere. Alcune cose vengono aggiornate automaticamente: ad esempio, i comandi dell'attivatore, le condizioni, il cooldown, ecc. si aggiornano automaticamente senza questa funzionalità. 
* Questa funzionalità riguarda soprattutto gli aspetti visivi dell'item. Quindi, se hai creato un ExecutableItem con id\:ex\_sword con un nome visualizzato "\&dExcalibur", l'hai distribuito a tutti i giocatori e ora vuoi che tutti gli ExecutableItems "ex\_sword" abbiano il nuovo nome visualizzato "\&eEpic Sword", dovrai abilitare questa funzionalità su uno degli attivatori dell'item. Abilitando la funzionalità (autoUpdateItem) + la funzionalità di aggiornamento del nome (updateName).
* Per essere sicuri che sia spiegato correttamente: questa funzionalità sovrascrive il valore attuale, in base alle opzioni che hai abilitato, con il valore corrente del file di config, e viene usata solo per le funzionalità visive. Non è necessaria per le modifiche comuni che non riguardano le opzioni di questa funzionalità.
  * `autoUpdateItem`: Valore booleano che indica se questa funzionalità è abilitata o meno per l'attivatore.
  * `updateName`: Valore booleano per aggiornare il nome visualizzato dell'ExecutableItem. Se è true, sovrascrive il nome visualizzato attuale dell'item con il nome corrente/aggiornato impostato nel file di config dell'ExecutableItem.
  * `updateLore`: Valore booleano per aggiornare la lore dell'ExecutableItem. Se è true, sovrascrive la lore attuale dell'item con la lore corrente/aggiornata impostata nel file di config dell'ExecutableItem.
  * `updateDurability`: Valore booleano per aggiornare la durabilità attuale dell'ExecutableItem. Se è true, sovrascrive la durabilità attuale dell'item con la durabilità corrente/aggiornata impostata nel file di config dell'ExecutableItem.
  * `updateAttributes`: Valore booleano per aggiornare tutti gli attributi dell'ExecutableItem. Se è true, sovrascrive gli attributi attuali dell'item con gli attributi correnti/aggiornati impostati nel file di config dell'ExecutableItem.
  * `updateEnchants`: Valore booleano per aggiornare gli incantesimi dell'ExecutableItem. Se è true, sovrascrive gli incantesimi attuali dell'item con gli incantesimi correnti/aggiornati impostati nel file di config dell'ExecutableItem.
  * `updateCustomModelData`: Valore booleano per aggiornare il valore di custom model data dell'ExecutableItem. Se è true, sovrascrive il custom model data attuale dell'item con il valore customModelData corrente/aggiornato impostato nel file di config dell'ExecutableItem.
  * `updateArmorSettings`: Valore booleano per aggiornare le impostazioni dell'armatura dell'ExecutableItem. Se è true, sovrascrive le impostazioni dell'armatura attuali dell'item con le impostazioni dell'armatura correnti/aggiornate impostate nel file di config dell'ExecutableItem. Ad es. (colore dell'armatura)
  * `updateMaterial`: Valore booleano per aggiornare il materiale dell'ExecutableItem. Se è true, sovrascrive il materiale attuale dell'item con il materiale corrente/aggiornato impostato nel file di config dell'ExecutableItem.
  * `updateHiders`: Valore booleano per aggiornare la configurazione degli hider dell'ExecutableItem. Se è true, sovrascrive la configurazione degli hider attuale con la configurazione degli hider corrente/aggiornata impostata nel file di config dell'ExecutableItem.
  * `updateEquippable`: Valore booleano per aggiornare la configurazione degli hider dell'ExecutableItem. Se è true, sovrascrive il componente equippable attuale dell'item con il componente equippable corrente/aggiornato impostato nel file di config dell'ExecutableItem.
* Esempio:

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

* Info: Puoi usare queste condizioni in tutti i tipi di attivatori
* [World conditions](/tools-for-all-plugins-score/custom-conditions/world-conditions.md)

### placeholdersConditions

* Info: Puoi usare queste condizioni in tutti i tipi di attivatori
* [PlaceholdersConditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions.md)

### itemConditions

* Info: Puoi usare queste condizioni in tutti i tipi di attivatori
* [Item conditions](/tools-for-all-plugins-score/custom-conditions/item-conditions.md)


### otherEICooldowns

* Info: Questa funzionalità permette di applicare un cooldown al giocatore per specifici ExecutableItems e, opzionalmente, per specifici attivatori. 
  * `executableItem`: ID dell'ExecutableItem a cui vuoi applicare il cooldown.
  * `activators`: Elenco di stringhe che sono gli ID degli attivatori che vuoi influenzare per l'ExecutableItem specificato con il cooldown. Se non ne viene selezionato nessuno, il cooldown verrà applicato a tutti gli attivatori dell'ExecutableItem specificato.
  * `cooldown`: Valore intero che sarà la durata del cooldown applicato.
  * `isCooldownInTicks`: Valore booleano che indica se il valore del cooldown sarà in secondi o in tick. (20 tick = 1 secondo)
* Suggerimenti:
  * Puoi specificare lo stesso ExecutableItem che esegue questa funzionalità. Ad esempio, se vuoi che un attivatore applichi un cooldown a un altro attivatore nello stesso item.
  * Un'altra idea può essere applicare un cooldown a tutti gli item legati ai danni se ne usi uno.
  * Un altro esempio sarebbe usare questa funzionalità per permettere al giocatore di scegliere uno tra diversi ExecutableItems: quando ne sceglie uno e lo attiva, non potrà più usare né quello scelto, perché è in cooldown, né gli altri, perché sono in cooldown anch'essi.
* Esempio:

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


## Funzionalità esclusive in base al tipo di attivatore

Per rendere più comprensibile in quali attivatori funzionano le funzionalità, creeremo 4 tipi di categorie per raggruppare gli attivatori. Così, se una funzionalità cita una di queste categorie, saprai che funziona per tutti gli attivatori di quella categoria.  

* <CustomTag type="player_block" />: Descrive gli attivatori che coinvolgono il giocatore che ha attivato l'ExecutableItem e un blocco coinvolto nell'attivatore. Abbreviazione \[P\_B]
  * PLAYER\_ALL\_CLICK (con la funzionalità typeTarget: ONLY\_BLOCK)
  * PLAYER\_BLOCK\_BREAK <CustomTag type="premium" compact />
  * PLAYER\_BLOCK\_PLACE <CustomTag type="premium" compact />
  * PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FISH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_HARVEST\_BLOCK
  * PLAYER\_LEFT\_CLICK (con la funzionalità typeTarget: ONLY\_BLOCK)
  * PLAYER\_RIGHT\_CLICK (con la funzionalità typeTarget: ONLY\_BLOCK)
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * Ecc., maggiori informazioni in [Activators info](list-of-the-activators)
* <CustomTag type="player_entity" />: Descrive gli attivatori che coinvolgono il giocatore che ha attivato l'ExecutableItem e un'entità coinvolta nell'attivatore. Abbreviazione \[P\_E]
  * PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_BUCKET\_ENTITY
  * PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_CUSTOM\_LAUNCH (L'entità è il proiettile che viene lanciato) <CustomTag type="premium" compact />
  * PLAYER\_DISMOUNT <CustomTag type="premium" compact />
  * PLAYER\_FISH\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_KILL\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * Ecc., maggiori informazioni in [Activators info](list-of-the-activators)
* <CustomTag type="player_target" />: Descrive gli attivatori che coinvolgono il giocatore che ha attivato l'ExecutableItem e un altro giocatore, chiamato «target», che viene trattato come bersaglio o nemico. Abbreviazione \[P\_T]
  * PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_CLICK\_ON\_PLAYER
  * PLAYER\_FISH\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_HIT\_PLAYER
  * PLAYER\_KILL\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
  * Ecc., maggiori informazioni in [Activators info](list-of-the-activators)
* <CustomTag type="specific_activators" /> Se esiste una funzionalità che contiene attivatori diversi tra le varie categorie, per maggiore chiarezza è meglio creare un nuovo elenco temporaneo, che verrà menzionato nella funzionalità. Abbreviazione \[S\_A]  

## Per \[P\_B] <CustomTag type="player_block" />

<BlockFeatures />

## Per \[P\_E] <CustomTag type="player_entity" />

<EntityFeatures />

## Per \[P\_T] <CustomTag type="player_target" />

<TargetPlayerFeatures />

## Per \[S\_A] <CustomTag type="specific_activators" />
 
<TargetItemFeatures />
* Per:
  * PLAYER_DROP_ITEM
  * PLAYER_CONSUME
  * EI_CLICK_ON_ANOTHER_INVENTORY_ITEM
  * EI_CLICKED_BY_ANOTHER_INVENTORY_ITEM


### mustBeAProjectileLaunchWithTheSameEI

* Tipo di categoria di attivatore: Specific Activator List
  * PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
* Info: Funzionalità per gli attivatori legati ai proiettili: influisce sul fatto che l'attivatore debba essere eseguito con proiettili non lanciati dallo stesso EI.
  * Esempio: c'è un attivatore PROJECTILE\_HIT\_ENTITY, detailedSlots: \[all slots] e in playerCommands: \["say hi"]
    * Se la funzionalità è abilitata, funzionerà solo se questo ExecutableItem ha un altro attivatore con il comando LAUNCH: il proiettile verrà quindi lanciato dall'EI e la condizione sarà soddisfatta
    * Se la funzionalità è disabilitata, tutti i proiettili, come l'arco vanilla, la palla di neve vanilla, i proiettili di altri ExecutableItems e i proiettili dello stesso ExecutableItem faranno eseguire l'attivatore.
* Importante: Quando `mustBeAProjectileLaunchWithTheSameEI` è `true`, il plugin non può garantire con certezza al 100% quale slot specifico dell'inventario contenesse l'item al momento del lancio. Attiva la prima copia corrispondente dell'EI trovata nell'inventario del giocatore. Per questo motivo, **configura sempre i `detailedSlots` dell'attivatore in modo da includere tutti gli slot**: non limitarli alla sola mano principale. Se l'attivatore è limitato alla mano principale, potrebbe non attivarsi se l'item corrispondente viene valutato prima in un altro slot.
  * Esempio:

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: PROJECTILE_HIT_ENTITY
    mustBeAProjectileLaunchWithTheSameEI: true
    detailedSlots: [] # Empty list = all slots (-1 through 40)
```

<DamageCauseFeatures />
* Per:
  * PLAYER_BLOCK_HIT_OF_ENTITY
  * PLAYER_BLOCK_HIT_OF_PLAYER
  * PLAYER_DEATH
  * PLAYER_HIT_ENTITY
  * PLAYER_HIT_PLAYER
  * PLAYER_RECEIVE_HIT_BY_ENTITY
  * PLAYER_RECEIVE_HIT_BY_PLAYER
  * PLAYER_RECEIVE_HIT_GLOBAL

<EffectFeatures />
* Per:
  * PLAYER_RECEIVE_EFFECT

<CommandFeatures />
* Per:
  * PLAYER_WRITE_COMMAND

<DropFeatures />
* Per:
  * PLAYER_BLOCK_BREAK
  * PLAYER_FISH_FISH
  * PLAYER_KILL_ENTITY
  * PLAYER_KILL_PLAYER

<TypeTargetFeatures />
* Per
  * PLAYER\_ALL\_CLICK
  * PLAYER\_RIGHT\_CLICK
  * PLAYER\_LEFT\_CLICK

<ClickFeatures />
* Per:
  * PLAYER_CLICK_ON_ENTITY
  * PLAYER_CLICK_ON_PLAYER
  * INVENTORY_CLICK

<DelayFeatures />
* Per:
  * LOOP

<InputFeatures />
* Per:
  * PLAYER_INPUT
