---
description: >-
  Scopri come configurare blockCommands, detailedBlocks, blockConditions e i
  placeholder dei blocchi negli attivatori PLAYER_BLOCK di ExecutableItems.
source_hash: e670b85f3ec02fc8
translated_at: '2026-11-13T17:45:31.191Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### blockCommands 

I comandi sono una lista di comandi eseguiti dalla console quando l'attivatore soddisfa tutte le condizioni e i requisiti. Qui puoi usare i comandi vanilla, i comandi di SCore e i comandi di altri plugin.

* Tutte le righe di comando di questa lista vengono elaborate prima con i placeholder di Ssomar Plugins e poi tramite PAPI. 
  * Ti consigliamo di consultare [Placeholders](/tools-for-all-plugins-score/placeholders) per vedere quali placeholder puoi usare in ogni attivatore.
* Nei comandi esistono tre tipi di bersagli:
  * Player: è il giocatore/utente che ha fatto scattare l'attivatore sull'ExecutableItem
  * Target: è il giocatore bersaglio/nemico coinvolto in un attivatore.
  * Entity: è l'entità/mob/nemico coinvolto in un attivatore.
* Categoria di attivatore: PLAYER\_BLOCK
* Info: lista di comandi che normalmente vengono eseguiti sul blocco quando l'attivatore scatta.
  * Questo significa che l'attivatore deve coinvolgere un blocco: ad esempio PLAYER\_HIT\_PLAYER è un attivatore, ma non coinvolge un blocco, quindi qui blockCommands non è disponibile. Con l'attivatore PLAYER\_BLOCK\_BREAK è coinvolto un blocco, quindi blockCommands è disponibile.
  * Un altro esempio: PLAYER\_RIGHT\_CLICK ha un activatorFeature chiamato typeTarget, che per impostazione predefinita è ONLY\_AIR, quindi blockCommands non è disponibile perché l'attivatore non coinvolge un blocco. Tuttavia, typeTarget può essere cambiato in ONLY\_BLOCK e a quel punto l'attivatore avrà blockCommands tra le funzionalità disponibili. Maggiori info qui -> \<IF I FORGOT PLS PING VAYK>
  * Puoi consultare la lista di blockCommands qui -> [Block commands](/tools-for-all-plugins-score/custom-commands/block-commands)
* Esempio:

```yaml
activators: 
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    blockCommands:
    - EXPLODE
```

* È importante capire che, se il tuo attivatore coinvolge anche un giocatore, puoi usare i playerCommands, così ad esempio possiamo avere: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    playerCommands:
    - SEND_MESSAGE &6You have broken a block, it will explode in 5 seconds !
    blockCommands:
    - DELAY 5
    - EXPLODE
```

### detailedBlocks

* Info: qui puoi selezionare come condizione il tipo di blocco/i in cui questo attivatore scatterà, usando questa funzionalità.
  * Puoi selezionare blocchi di Minecraft Vanilla, ad esempio:
    * "STONE"
  * <CustomTag type="premium" /> <CustomTag type="version" version="1.13" /> Puoi selezionare blocchi di Minecraft Vanilla con NBT (info: [Block\_states](https://minecraft.fandom.com/wiki/Block_states)), ad esempio: 
    * `FURNACE{lit:true}`
  * Puoi selezionare blocchi di ItemsAdder, ad esempio:
    * "ITEMSADDER:\<id>"
  * Puoi selezionare blocchi di ExecutableBlocks, ad esempio:
    * "EXECUTABLEBLOCKS:\<id>"
  * Puoi mettere in blacklist alcuni blocchi aggiungendo ! all'inizio, ad esempio:
    * "!DIRT"
  * Puoi aggiungere Block Tags, ad esempio: 
    * "#MINECRAFT\:MINEABLE/PICKAXE"
  * Puoi aggiungere gruppi di blocchi, ad esempio
    * "ALL\_ORES"

<details>

<summary>Lista dei gruppi di blocchi</summary>

```
    ALL_CHESTS,
    ALL_FURNACES,
    ALL_PLANKS,
    ALL_LOGS,
    ALL_STRIPPED_LOGS,
    ALL_STRIPPED_WOODS,
    ALL_WOODS,
    ALL_ORES,
    ALL_WOOLS,
    ALL_SLABS,
    ALL_STAIRS,
    ALL_FENCES,
    ALL_SAPLINGS,
    ALL_CROPS,
    ALL_DOORS,
    ALL_TRAPDOORS,
    ALL_BEDS,
    ALL_TERRACOTTA,
    ALL_NORMAL_TERRACOTTA,
    ALL_GLAZED_TERRACOTTA,
    ALL_CONCRETE,
    ALL_CONCRETE_POWDERS,
    ALL_GLASS,
    ALL_STAINED_GLASS,
    ALL_SHULKER_BOXES,
    ALL_LEAVES,
    ALL_CARPETS;
```

</details>

* Esempio:

```yaml
activators:  
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    detailedBlocks:
      blocks:
      - STONE
      - COBBLESTONE
      - ANDESITE
      - FURNACE{lit:true} #(🎇 **BLOCK STATE FEATURE IS PREMIUM EXCLUSIVE ONLY AND FOR 1.13+** 🎇)
      - ITEMSADDER:turquoise_block
      - EXECUTABLEBLOCKS:CUSTOMDIRT
      - !DIRT
      - ALL_ORES
      - '#MINECRAFT:MINEABLE/PICKAXE'
      cancelEventIfNotValid: false
```

### blockConditions

* Info: qui puoi impostare le condizioni per il blocco coinvolto.
* [Block conditions](/tools-for-all-plugins-score/custom-conditions/block-conditions.md)

### Block placeholders

Quando l'attore principale dell'evento è un blocco, puoi usare nella configurazione del tuo attivatore (comandi, condizioni, altro...) [i placeholder dei blocchi](/tools-for-all-plugins-score/placeholders#-block-placeholders)
