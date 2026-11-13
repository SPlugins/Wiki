---
description: >-
  Elenco non esaustivo dei plugin compatibili con ExecutableItems: scopri come
  integrare MythicMobs, WorldGuard, ItemsAdder, PlaceholderAPI e molti altri.
source_hash: 4012882ccbdb916c
translated_at: '2026-11-13T17:41:01.730Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ✔️ Plugin compatibili

:::info
Tieni presente che questo elenco riguarda strettamente i plugin compatibili: quasi tutti i plugin sono compatibili con i plugin Ssomar. Se vuoi eseguire un comando di un altro plugin, basta sostituire il nome del bersaglio con i placeholder. \

Per esempio:
```yaml
- essentials:fly %player% # For essentials fly
- vanish %player% # For vanish
- economy give %player% 100 # To give money
#...
```
Eccetera, **ogni comando che supporta il nome di un giocatore è "compatibile" con i nostri plugin.**
:::

Questa sezione riguarda i plugin compatibili che funzionano con i plugin Ssomar: alcune delle nostre funzionalità sono compatibili con gli altri plugin.

* Prima di iniziare devi sapere che compatibile ≠ utilizzabile: quasi tutti i plugin sono utilizzabili con i plugin Ssomar, perché tutti i comandi vengono eseguiti dalla console.

### MythicMobs

#### Puoi far droppare ai tuoi mob MythicMobs gli item dei plugin Ssomar in questi modi:

*   ExecutableItems:

    1. Tieni in mano l'ExecutableItem ed esegui `/mm i import` : questo importerà l'item nel file items.yml di MythicMobs e da lì potrai aggiungerlo alla LootTable di MythicMobs.
    2. Esegui una skill \~onDeath dal mob, lanciando una skill di comando che aggiunge la riga seguente:

    ```yaml
    Skills:
    - command{c="ei drop <item> 1 <caster.l.w> <caster.l.x> <caster.l.y> <caster.l.z>"} @self ~onDeath
    ```
* ExecutableBlocks:
  * La stessa idea, ma invece di usare un ExecutableItem usa un ExecutableBlock e, nel comando della skill, usa "eb" al posto di "ei".

#### Puoi far funzionare gli attivatori dei plugin Ssomar solo con specifici MythicMobs usando la funzionalità [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities).

* Esempio: creare un ExecutableItem che infligge più danni a un elenco di MythicMobs
* Esempio: creare un ExecutableBlock che danneggia uno specifico MythicMob quando cammina sopra il blocco
* Esempio: creare un ExecutableEvent che funziona solo per un elenco di MythicMobs.

#### Puoi evocare i mob MM usando questo comando all'interno del tuo attivatore:

* A seconda dell'attivatore che stai usando, potresti dover cambiare i placeholder.
  * Esempio: invece di %world% potrebbe essere necessario usare %player\_world%, %target\_world% o %block\_world%

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    playerCommands:
    - mm m spawn {mob_id} 1 %world%,%x%,%y%,%z%
```

* ⭐Puoi usare questa idea con ExecutableBlocks e l'attivatore LOOP per creare uno spawner personalizzato di MythicMobs.

#### Eseguire una skill di MythicMobs dalle funzionalità dei plugin Ssomar

* Puoi usare nella sezione dei comandi `SUDOOP mm test cast <skill>` per eseguire una skill di MythicMobs.

#### Comandi personalizzati di SCore

* [CHANGETOMYTHICMOB](/tools-for-all-plugins-score/custom-commands/entity-commands#changetomythicmob)
  * ⭐È possibile creare un sistema di pesca con MythicMobs come quello del server Minecraft Hypixel. Per esempio, una lista di livelli di canne da pesca diverse (tutte gestite da ExecutableItems), in cui ogni livello ha una probabilità crescente di pescare mob più epici dai tuoi laghi, aggiungendo restrizioni per pescare i mob MM solo dai laghi alle coordinate "x" (o in una regione WorldGuard), ecc.

### **LevelledMobs**

* ExecutableItems
  * Puoi far droppare ExecutableItems ai tuoi LevelledMobs usando questa risorsa:
    * [https://www.spigotmc.org/resources/lm-items.102081/](https://www.spigotmc.org/resources/lm-items.102081/)

### AuraSkills (prev AureliumSkills)

* I plugin Ssomar hanno la funzionalità degli attivatori [requiredMana](/executableitems/configurations/activator-configuration/activators-features#requiredmana) per impostare il mana come requisito affinché l'attivatore funzioni.
* Comandi di Aurelium Skills
  * Inoltre puoi usare i comandi di AureliumSkills nel tuo plugin, per esempio dare mana al giocatore, dare mana ai giocatori intorno (come un supporter), ecc.
* ExecutableItems
  * NBT di Aurelium Skills
    * Puoi creare un ExecutableItem che, mentre lo tieni in mano, aumenta il tuo mana massimo: crea un item, esegui il comando `/sk modifier` e poi, tenendo l'item in mano, esegui `/ei create <id>`. A quel punto l'ExecutableItem ha l'NBTTag del comando e quindi ha le modifiche che hai applicato.

### ExecutableBlocks & ExecutableItems

* Questi due plugin (ExecutableBlocks ed ExecutableItems) possono essere collegati tra loro. Il collegamento viene fatto da EB con la funzionalità [TYPE\_OF\_CREATION ](/executableblocks/configurations/block-configuration/block-features#creationtype)Per esempio:
  * Piazzando l'ExecutableItem, questo diventa l'ExecutableBlock collegato (per impostazione predefinita perderebbe i dati dell'ExecutableItem e verrebbe piazzato come blocco vanilla)
  * Rompendo un ExecutableBlock si ottiene l'ExecutableItem collegato.
  * Viene tracciato lo stesso utilizzo che aveva l'ExecutableBlock piazzato quando viene rotto e trasformato nell'ExecutableItem collegato, e viceversa.
  * Vengono tracciati gli stessi valori delle variabili che aveva l'ExecutableBlock piazzato quando viene rotto e trasformato nell'ExecutableItem collegato, e viceversa.

### ItemsAdder

* ExecutableItems
  * Puoi usare le texture create con ItemsAdder tramite la funzionalità [customModelData ](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14)oppure tramite [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel).
  *   Puoi collegare l'item di ItemsAdder a EI seguendo la loro wiki sul collegamento: basta aggiungere la riga di codice seguente al file dell'item di ItemsAdder.

      ```yaml
      executableitem:
        id: ZEUSCROWN
      ```
* ExecutableBlocks
  * Puoi creare un ExecutableBlock con la texture di un blocco di ItemsAdder selezionando la funzionalità [TYPE\_OF\_CREATION ](/executableblocks/configurations/block-configuration/block-features#creationtype)di ExecutableBlocks.
* È possibile selezionare specifici blocchi di ItemsAdder come [detailedBlocks ](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)per gli attivatori legati a un blocco di tutti i plugin
  *   Esempio:

      ```yaml
      activators:  
        activator0: # Activator ID, you can create as many activator on the activators list    
          option: PLAYER_BLOCK_BREAK
          detailedBlocks:
          - ITEMSADDER:turquoise_block
      ```

### Nexo

* ExecutableItems
  * Puoi usare le texture di Nexo all'interno del tuo ExecutableItem semplicemente usando il valore [Custom model data](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14) oppure [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel).

### PlaceholderAPI

* Uno dei pilastri principali nella creazione degli item: puoi usare qualsiasi placeholder di PlaceholderAPI in ogni parte dei nostri plugin:
  * Lore
  * Sezione dei comandi
  * Messaggi (tutti i tipi di messaggi, messaggio di cooldown, messaggio di condizione non soddisfatta, messaggio delle cose richieste, ecc.)
  * Variabili
  * ecc.

### ShopGui+

* Questo plugin supporta la vendita di item con specifici NBT Tag nel negozio, quindi supporta la vendita di ExecutableItems ed ExecutableBlocks.
* Il comando per blocchi [SELL\_CONTENT ](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content)è supportato da questo plugin.

### ShopKeepers

* Questo plugin supporta la vendita di item con specifici NBT Tag nel negozio, quindi supporta la vendita di ExecutableItems ed ExecutableBlocks.

### Tradesplus

* Questo plugin supporta la vendita di item con specifici NBT Tag nel negozio, quindi supporta la vendita di ExecutableItems ed ExecutableBlocks.

### WorldGuard

* Per tutti i plugin hai la condizione per far funzionare l'attivatore solo se il giocatore si trova dentro o fuori da una regione: si chiama [ifInRegion](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinregion-not) ed è compatibile con questo plugin.
* Tutti i comandi di SCore sono condizionati dalla protezione di WorldGuard
  * Questo significa che un BREAK (comando di SCore) non verrà eseguito se il giocatore non ha il permesso di rompere un blocco nella posizione selezionata.
  * Tieni presente che questa funzionalità riguarda i comandi di SCore, non i comandi eseguiti dai nostri plugin: usare un comando vanilla all'interno di uno dei nostri plugin, come "execute at %player% run setblock %block\_x% %block\_y% %block\_z% air replace", aggirerà qualsiasi restrizione.
* ExecutableBlocks
  * Puoi riempire una regione con specifici ExecutableBlock con pesi dettagliati usando [/eb wg-fill-region](/executableblocks/commands-and-permissions#fill-a-worldguard-region-with-an-eb).
    * Con questa funzionalità potresti, per esempio, creare un loop globale che reimposta una miniera specifica, come le tipiche miniere /warp nei server Minecraft.

### HeadDB

* ExecutableItems
  * Puoi usare questo plugin per selezionare una specifica testa di giocatore per l'item dell'ExecutableItem usando le [head settings](/executableitems/configurations/item-configuration/item-features#head-settings).
* ExecutableBlocks
  * Puoi usare questo plugin per selezionare una specifica testa di giocatore per il blocco dell'ExecutableBlock collegando un ExecutableItem con le [head settings](/executableitems/configurations/item-configuration/item-features#head-settings) e usando [TYPE\_OF\_CREATION](/executableblocks/configurations/block-configuration/block-features#creationtype) come dall'ExecutableItem specificato.

### IridiumSkyblock

* Per tutti i plugin hai la condizione per far funzionare l'attivatore solo se il giocatore si trova nella propria isola: si chiama [ifPlayerMustBeOnHisIsland ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland)ed è compatibile con questo plugin.

### SuperiorSkyblock

* Per tutti i plugin hai la condizione per far funzionare l'attivatore solo se il giocatore si trova nella propria isola: si chiama [ifPlayerMustBeOnHisIsland ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland)ed è compatibile con questo plugin.

### GriefPrevention

* Per tutti i plugin hai la condizione per far funzionare l'attivatore solo se il giocatore si trova nel proprio claim: si chiama [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim)e c'è anche [ifPlayerMustBeOnHisClaimOrWilderness ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness)ed entrambe sono compatibili con questo plugin.

### Lands

* Per tutti i plugin hai la condizione per far funzionare l'attivatore solo se il giocatore si trova nel proprio claim: si chiama [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim)e c'è anche [ifPlayerMustBeOnHisClaimOrWilderness ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness)ed entrambe sono compatibili con questo plugin.
* ExecutableItems
  * Ci sono alcuni attivatori specifici per questo plugin, che sono:
    * PLAYER\_ENTER\_IN\_THEIR\_LAND
    * PLAYER\_LEAVE\_THEIR\_LAND

### GriefDefender

* Per tutti i plugin hai la condizione per far funzionare l'attivatore solo se il giocatore si trova nel proprio claim. Questa condizione si chiama [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim)ed è compatibile con questo plugin.

### Residence

* Per tutti i plugin hai la condizione per far funzionare l'attivatore solo se il giocatore si trova nel proprio claim. Questa condizione si chiama [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim)ed è compatibile con questo plugin.

### PlotSquared

* Per tutti i plugin hai la condizione per far funzionare l'attivatore solo se il giocatore si trova nel proprio plot. Questa condizione si chiama [ifPlayerMustBeOnHisPlot ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisplot)ed è compatibile con questo plugin.

### Towny

* Per tutti i plugin hai la condizione per far funzionare l'attivatore solo se il giocatore si trova nella propria città. Questa condizione si chiama [ifPlayerMustBeOnHisTown ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhistown)ed è compatibile con questo plugin.

### Advanced Enchantments

* ExecutableItems
  * Per il modo in cui funziona il plugin Advanced Enchantments, i suoi incantesimi non sono presenti nell'elenco degli incantesimi. Quindi non possono essere aggiunti con la funzionalità degli incantesimi:![](https://media.ssomar.com/m/docs-img-image-256.png)
  * Ma è possibile aggiungere i suoi incantesimi ai tuoi ExecutableItems usando il plugin NBTAPI e seguendo uno di questi modi:
    * Il primo modo è creare un item vanilla, aggiungerci l'AdvancedEnchantment e poi, tenendolo in mano, eseguire /ei create \<id>: l'ExecutableItem ottenuto avrà automaticamente importati gli incantesimi di Advanced Enchantments.
    *   Il secondo modo è aggiungere manualmente l'NBT Tag nel file di config degli ExecutableItems. Ecco un esempio:

        ```yaml
        nbt:
          '0':
            key: ae_enchantment;haste # This add the haste AdvancedEnchantment NBT tag
            type: INT
            value: 1
        ```
  * Dopo tutti questi passaggi devi aggiungere manualmente l'incantesimo nella lore, per far sapere ai giocatori che questo item ha quell'incantesimo.

### RoseLoots

* Tutti i comandi per blocchi correlati (es. [MINEINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#mineincube), [FARMINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#farmincube), [BREAK](/tools-for-all-plugins-score/custom-commands/block-commands#break), ecc.) supportano i loot personalizzati dei blocchi di questo plugin.

### MMOInventory

* ExecutableItems
  * Gli attivatori legati all'ingresso e all'uscita dall'inventario (es. EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY ed EI\_LEAVE\_THE\_PLAYER\_INVENTORY) vengono attivati dai suoi metodi.

### EnchantsSquared

* ExecutableItems
  * Questo plugin supporta gli incantesimi di EnchantsSquared.

### ExcellentEnchants

* ExecutableItems
  * Questo plugin supporta gli incantesimi di ExcellentEnchants

### MMOCore

* La funzionalità requiredMana per gli attivatori può usare il mana di MMOCore, permettendoti di impostare requisiti di mana affinché gli attivatori funzionino.

### TAB

* Il comando personalizzato SETGLOW è compatibile con TAB. Devi usare il placeholder %score\_cmd-glow%

### BlocksToCommand

* Plugin che permette di importare strutture che possono essere piazzate con i plugin Ssomar.

### Terra

* I biomi personalizzati di Terra sono supportati dalle condizioni dei biomi tramite la condizione [ifInBiome ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinbiome-not). Questo ti permette di creare attivatori, effetti o restrizioni specifici in base al bioma in cui si trova un giocatore.

### EcoSkills

* Puoi usare le condizioni con placeholder per verificare se un giocatore ha determinati valori di magia prima di permettere l'attivazione di un attivatore.
* Puoi usare i comandi per ottenere o rimuovere valori di magia.
* ExecutableItems
  * La funzionalità [RequiredMagic ](/executableitems/configurations/activator-configuration/activators-features#requiredmagic-ecoskills)al posto di usare condizioni con placeholder e comandi per rimuovere la magia.

### FACTIONS UUID

* I comandi di SCore piazzano e rimuovono blocchi in modo sicuro, rispettando le protezioni di FactionsUUID del giocatore.

### CMI

* Il comando [SELL\_CONTENT ](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content)supporta i prezzi di CMI, permettendo un'integrazione fluida con il sistema economico di CMI per vendere gli item al giusto valore in gioco.

### JOBS REBORN

* Il comando JOBS\_MONEY\_BOOST funziona con questo plugin.

### VAULT

* ExecutableItems
  * La funzionalità [requiredMoney ](/executableitems/configurations/activator-configuration/activators-features#requiredmoney)funziona con Vault, permettendoti di impostare un requisito di denaro per l'attivazione degli attivatori.

### Citizen NPC

* ExecutableItems
  * I seguenti attivatori funzionano con gli NPC di Citizen
    * PLAYER\_CLICK\_ON\_ENTITY
    * PLAYER\_FISH\_ENTITY
    * PLAYER\_KILL\_ENTIT

### NBT API

* #### itemCheckWithNBTAPI

### Wild Stacker

* I comandi SILK\_SPAWNER funzionano con gli spawner di WildStacker.
