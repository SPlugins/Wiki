---
description: >-
  Elenco dei comandi dei blocchi di ExecutableBlocks e ExecutableItems: AROUND,
  MINEINCUBE, SETBLOCK, VEIN_BREAKER e altri, con impostazioni ed esempi.
source_hash: b9677d85e164ca24
translated_at: '2026-11-13T17:41:27.467Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Comandi dei blocchi

:::tip
Compatibilità "multi-world" per i comandi vanilla.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Esempio: vuoi evocare uno Zombie nel mondo SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Esempio con un placeholder:

`execute in <<%block_world%>> run summon zombie 100 50 100`
:::

:::info
`In AROUND and MOB_AROUND commands, the true/false argument are not to be included in the command as they serve no purpose.`
:::

:::info
Attiva **HIDE USAGE** quando usi un numero grande in **MINEINCUBE**, perché può ridurre il lag che di solito si verifica spesso quando usi `MINEINCUBE 8`, per esempio
:::

## Comandi personalizzati

_Ordinati in ordine alfabetico_

### &lt;+&gt; (Around Command Connector)

* Info: ti permette di aggiungere più comandi in una sola riga di comando. Funziona bene solo con `AROUND` e `MOB_AROUND`.
* Esempio: 

```text
- AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SENDMESSAGE &You got smited!
```

```text
- MOB_AROUND 7 STUN_ENABLE <+> DELAY 5 <+> STUN_DISABLE
```

### AROUND

* Info: seleziona i giocatori in un raggio specifico e fa eseguire loro dei comandi
* Impostazioni del comando
    * `{distance}`: fino a che raggio il comando selezionerà i giocatori
    * `{affectThePlayerThatActivatesTheActivator}`: true/false. Se true, non influenzerà chi lancia il comando.
      * Situazione di esempio: quando esegui un attivatore di un ExecutableItem e quell'attivatore supporta i comandi dei blocchi,
      ignorerà la persona che ha attivato l'attivatore. Se invece questa opzione è false, influenzerà anche te.
    * `{throughBlocks}`: influenza o meno i mob che si trovano dietro ai blocchi
    * `{limit}`: il numero di bersagli che possono essere influenzati
    * `{sort}`: utile per l'opzione limit.
    * NEAREST : seleziona le entità più vicine all'origine.
    * RANDOM : seleziona casualmente qualsiasi entità nel raggio del comando.
    * `{regionCheck}`: true/false. Se true, il comando AROUND controllerà se il bersaglio si trova nella wilderness oppure nel claim di chi lancia il comando (contesto del plugin GriefPrevention) (sarà aggiornato presto per il controllo con altri plugin di claim)
    * `{command}`: il comando che i giocatori selezionati eseguiranno
* Esempio:

```
- AROUND 20 execute at %around_target% run summon lightning_bolt
```

* Questo evoca un fulmine sui giocatori in un raggio di 20 blocchi attorno al blocco cliccato.

:::info
**Numero di bersagli:** `%around_target_count%` restituisce il numero di giocatori selezionati dal comando. È lo stesso per ogni bersaglio e conta i bersagli rimasti dopo `distance`, `affectThePlayerThatActivatesTheActivator`, `throughBlocks`, `regionCheck` e `limit`. Le `CONDITIONS(...)` controllate su ciascun bersaglio non vengono prese in considerazione. Accetta la scorciatoia `+N` / `-N`: `%around_target_count%-1`.

Esempio: `AROUND 10 SEND_MESSAGE &e%around_target_count% players are around the block`
:::

#### Puoi aggiungere condizioni al comando AROUND

* La condizione ha questo aspetto: AROUND \<distance> CONDITIONS(\<conditions>) \<command>
* Le condizioni funzionano con i placeholder, ma devono essere scritte come %::\_::% invece di %\_%
  * Ad esempio %::player\_health::%
* Per aggiungere PIÙ di una condizione usa "&&" tra le condizioni
* Esempio:

```
- AROUND 10 CONDITIONS(%::player_health::%>10&&%::player_name::%=2Ssomar) SENDMESSAGE &eclick
```

:::info
Tieni presente che la parte CONDITIONS() interpreta i placeholder al suo interno con il giocatore selezionato dal comando AROUND. Quindi, nei placeholder qui sopra, viene controllato se la salute del bersaglio è maggiore di 10 e se il giocatore selezionato dal comando AROUND si chiama "2Ssomar"
:::

### APPLY\_BONEMEAL

* Info: applica lo stesso effetto che si ottiene quando un giocatore usa la farina d'ossa su un blocco (coltura)
* Nessuna impostazione del comando
* Esempio:

```yaml
- APPLY_BONEMEAL
```

### BREAK

* Info: rompe il blocco bersaglio
* Nessuna impostazione del comando
* Esempio:

```
 - BREAK
```

### CONTENT\_ADD

* Info: aggiunge un item in un contenitore
* Impostazioni del comando
  * \{Item\}: item da aggiungere
  * \[Amount]: quantità da aggiungere (il valore predefinito è 1)
* Esempio:

```
- CONTENT_ADD STONE 1
- CONTENT_ADD EI:Myitem 1
- CONTENT_ADD EI:test{Usage:1,Variables:{var1:"My text",var2:2}} 1
```

### CONTENT\_CLEAR

* Info: svuota un contenitore
* Nessuna impostazione del comando
* Esempio:

```
- CONTENT_CLEAR
```

### CONTENT\_REMOVE

* Info: rimuove un item da un contenitore
* Impostazioni del comando
  * \{Item\}: item da rimuovere
  * \[Amount]: quantità da rimuovere (il valore predefinito è 1)
* Esempio:

```
- CONTENT_REMOVE STONE 1
```

:::info
Non rimuoverà gli ExecutableItems se il materiale corrisponde. L'unico modo è specificarlo con EXECUTABLEITEMS:`{id}`
:::

### CONSOLEMESSAGE

* Info: invia un messaggio alla console
* Impostazione del comando
  * `{text}`: testo da inviare alla console
* Esempio:

```yaml
- CONSOLEMESSAGE This is a debug message
```

### CHANGE\_BLOCK\_TYPE

* Info: cambia il tipo di blocco del blocco selezionato dall'attivatore
* Impostazione del comando
* Esempio:

```
- CHANGE_BLOCK_TYPE STONE
```

:::info
Funziona con ItemsAdder
:::

```
- CHANGE_BLOCK_TYPE ITEMSADDER:MyIA
```

### CROPS\_GROWTH\_BOOST

* Info: accelera la crescita delle colture attorno al blocco
* Comando: CROPS\_GROWTH\_BOOST \{radius\} \{delay between two growths in ticks\} \{total duration in ticks\} \{chance 0-100\}
* Esempio:

```yaml
- CROPS_GROWTH_BOOST 5 10 100 50
```

### DROPEXECUTABLEITEM

* Info: fa cadere un Executable Item nella posizione del blocco
* Impostazioni del comando
  * `{id}`: ID dell'item dell'ExecutableItem
  * `{quantity}`: la quantità di executable item che verrà fatta cadere
  * `[owner]`: (facoltativo) il proprietario dell'item fatto cadere (IGN o UUID del giocatore)
  * `[itemdata]`: (facoltativo) impostazioni dei dati dell'item, che contengono:
    * `Usage`: imposta il valore di utilizzo
    * `Variables`: imposta le variabili personalizzate (formato: `{key:value}`)
    * `Durability`: imposta il valore di durabilità
* Esempio:

```
- DROPEXECUTABLEITEM epicsnowball 1
- DROPEXECUTABLEITEM id:epicsnowball amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Info: fa cadere un Executable Block nella posizione del blocco
* Impostazioni del comando
  * `{id}`: ID dell'item dell'ExecutableBlock
  * `{quantity}`: la quantità di executable block che verrà fatta cadere
* Esempio:

```
- DROPEXECUTABLEBLOCK House 1
```

### DRAIN IN CUBE

* Info: drena in un cubo di raggio "r" le sorgenti di lava e/o acqua
* Impostazioni del comando
  * `{radius}`: il raggio in blocchi (il limite è 9), puoi aggirare il limite aggiungendo un * prima del raggio (a tuo rischio e pericolo).
  * `{drainType}`: LAVA o WATER (non serve se vuoi entrambe)
  * `[waterlogged]`: (facoltativo) (predefinito = false) Se true e l'acqua viene drenata (`WATER` o nessun `{drainType}`), prosciuga anche i blocchi waterlogged del cubo (lastre, scale, recinzioni...) e rimuove i blocchi `KELP`, `KELP_PLANT`, `SEAGRASS`, `TALL_SEAGRASS` e `BUBBLE_COLUMN` senza far cadere nulla, come fa una spugna. Solo per server 1.13+.
* Esempio:

```
DRAININCUBE 4 WATER
DRAININCUBE *12 WATER
DRAININCUBE 4 WATER waterlogged:true
```

:::info
Senza `waterlogged:true`, i blocchi waterlogged mantengono la loro acqua, che può rifluire nell'area drenata.
:::

### DROPITEM

* Info: fa cadere un item nella posizione del blocco
* Impostazioni del comando
  * `{material}`: il tipo di item.
    
<LinkPreview
  url="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"
  title="Material"
/>
  
* `{quantity}`: la quantità di item che verrà fatta cadere
* Esempio:

```
- DROPITEM BEDROCK 1
```

### EXPLODE

* Informazioni: rompe il blocco che hai preso come bersaglio e fa apparire un TNT innescato in quella posizione
* Nessuna impostazione del comando
* Esempio:

```
- EXPLODE
```

### FARMINCUBE

* Informazioni: rompe tutte le colture in un dato raggio
* Impostazioni del comando
  * `{radius}`: raggio dell'area delle colture che vuoi rompere. **(IL LIMITE È 9)**
  * `{drop}`: (predefinito = true) se il blocco fa cadere o meno il loot
  * `{onlyMaxAge}`: (predefinito = true) romperà solo le colture all'età massima
  * `{replant}`: (predefinito = false) se la coltura verrà ripiantata o meno
  * `{event}`: (predefinito = false, true con `runActivatorOnBlocks:true`) se la coltura genererà o meno l'evento di rottura del blocco.
  * `[runActivatorOnBlocks]`: (facoltativo) (predefinito = false) solo per ExecutableItems. Se true, anche le colture rotte dal comando eseguono l'attivatore che lo ha lanciato, vedi [runActivatorOnBlocks](#runactivatoronblocks). Può essere scritto in qualsiasi punto del comando e attiva `{event}` a meno che `{event}` non sia scritto false.
* Esempio:

```
- FARMINCUBE 9 true true true false
- FARMINCUBE 4 true true true runActivatorOnBlocks:true
```

### FERTILIZEINCUBE

* Info: fertilizza le colture vicine di 1 età, è come applicare la farina d'ossa ma fa crescere la pianta il 100% delle volte.
* Impostazione del comando
  * `{radius}`: raggio dell'area delle colture che vuoi fertilizzare **(IL LIMITE È 9)**
* Esempio:

```
- FERTILIZEINCUBE 9
```

### INLINE\_MINEINCUBE

* Info: distrugge i blocchi in un raggio a forma di rettangolo. Ogni blocco rotto da questo comando viene contato come un evento di rottura di blocco del giocatore.
* Impostazioni del comando
  * `{radius}`: quanto sarà grande il raggio del cubo
  * `{depth}`: quanto sarà profondo il rettangolo.
  * `{drop}`: se il blocco fa cadere o meno il loot
  * `{createBBEvent}`: se il plugin genererà un blockBreakEvent per ogni blocco rotto da MINEINCUBE (predefinito true)
  * `[direction]`: (facoltativo) (predefinito = la direzione del giocatore) se vuoi forzare una direzione. 
    * Opzioni:
      * `north/n/-z` : nord
      * `south/s/+z` : sud
      * `east/e/+x` : est
      * `west/w/-x` : ovest
      * `up` : su
      * `down` : giù
      * `auto` : usa la logica di %player_direction_xz% della Player Expansion di PlaceholderAPI per decidere le direzioni `N/W/S/E`. Per la logica su/giù, direzione `UP` se il pitch è `<=` -45; direzione `DOWN` se il pitch è `>=` 45. 
  * `[smelt]`: (facoltativo) (predefinito = false) usa la logica del comando SMELT. Se il blocco può essere fuso, fa cadere la versione fusa. Altrimenti fa cadere correttamente il blocco rotto.
* Esempio:

```
- INLINE_MINEINCUBE 1 4 true true
- INLINE_MINEINCUIBE radius:2 depth:4 drop:true createBBEvent:true direction:auto smelt:true
```

:::info
Supporta %player\_direction\_xz% di PlaceholderAPI - Player expansion\
Esempio: INLINE\_MINEINCUBE 1 1 true true %player\_direction\_xz%
:::

### LAUNCH

* Info: fa sparare proiettili al blocco bersaglio
* Impostazioni del comando
  * `{projectile}`: il tipo di proiettile
  * `{speed}`: la velocità del proiettile
  * `{despawnDelay}`: il ritardo di despawn è in secondi (predefinito 10)
* Esempio:

```
- LAUNCH ARROW 2 5
```

:::info
Il blocco deve essere direzionale per LANCIARE correttamente il proiettile.

Esempio: AmethystCluster, Barrel, Bed, Beehive, Bell, BigDripleaf, CalibratedSculkSensor, Campfire, Chest, ChiseledBookshelf, Cocoa, CommandBlock, Comparator, CoralWallFan, DecoratedPot, Dispenser, Door, Dripleaf, EnderChest, EndPortalFrame, Furnace, Gate, Grindstone, Hopper, Ladder, Lectern, LightningRod, Observer, PinkPetals, Piston, PistonHead, RedstoneWallTorch, Repeater, SmallDripleaf, Stairs, Switch, TechnicalPiston, TrapDoor, TripwireHook, Vault, WallHangingSign, WallSign, WallSkull
:::

### MINEINCUBE

* Info: distrugge i blocchi in un raggio a forma di cuboide. Ogni blocco rotto da questo comando viene contato come un evento di rottura di blocco del giocatore.
* Impostazioni del comando
  * `{radius}`: raggio del cubo di blocchi che vuoi rompere **(IL LIMITE È 9)**
  * `{droploot}`: se il blocco fa cadere o meno il loot
  * `{createEvent}`: se il plugin genererà un blockBreakEvent per ogni blocco rotto da MINEINCUBE (predefinito true)
  * `{offsetBreak}`: se l'area di blocchi inizia a rompersi dal blocco rotto oppure dal "centro", per far funzionare davvero l'area con il "radius" selezionato. (predefinito false)
  * `[smelt]`: (facoltativo) (predefinito = false) usa la logica del comando SMELT. Se il blocco può essere fuso, fa cadere la versione fusa. Altrimenti fa cadere correttamente il blocco rotto.
  * `[runActivatorOnBlocks]`: (facoltativo) (predefinito = false) solo per ExecutableItems. Se true, anche i blocchi rotti dal comando eseguono l'attivatore che lo ha lanciato, vedi [runActivatorOnBlocks](#runactivatoronblocks). Mantieni `{createEvent}` su true.
* Esempio:

```
- MINEINCUBE 4 true false
- MINEINCUBE radius:3 droploot:true createEvent:true offsetBreak:false smelt:false
- MINEINCUBE radius:1 droploot:true createEvent:true runActivatorOnBlocks:true
```

### MINEINSPHERE

* Info: distrugge i blocchi in un raggio a forma sferica. Ogni blocco rotto da questo comando viene contato come un evento di rottura di blocco del giocatore.
* Impostazioni del comando
  * `{radius}`: raggio della sfera
  * `{drop}`: se il blocco fa cadere o meno il loot
  * `{create blockBreakEvent}`: se il plugin genererà un blockBreakEvent per ogni blocco rotto dal comando
  * `[smelt]`: (facoltativo) (predefinito = false) usa la logica del comando SMELT. Se il blocco può essere fuso, fa cadere la versione fusa. Altrimenti fa cadere correttamente il blocco rotto.
* Esempio:

```
- MINEINSPHERE 4 true false
```

### MOB\_AROUND

* Info: seleziona le entità in un raggio specifico e fa eseguire loro dei comandi
* Impostazioni del comando
  * `{distance}`: fino a che raggio il comando selezionerà le entità
  * `{displayMsgIfNoEntity}`: (true o false) per avvisare l'utente dell'item se non è riuscito a selezionare nessun mob.
    * **Imposta su false per nascondere il messaggio**
  * `{throughBlocks}`: influenza o meno i mob che si trovano dietro ai blocchi
  * `{safeDistance}`: se la distanza tra il bersaglio e chi lancia il comando è inferiore o uguale al valore di safeDistance, il bersaglio non verrà influenzato.
  * `{offsetYaw}`: la direzione yaw che vuoi dare al tuo offset (indipendente dal valore di yaw dell'origine)
  * `{offsetPitch}`: la direzione pitch che vuoi dare al tuo offset (indipendente dal valore di yaw dell'origine)
  * `{offsetDistance}`: dopo aver calcolato offsetYaw e offsetPitch, usando il valore di questa opzione, sposta la posizione/il punto centrale del comando AROUND rispetto alla posizione xyz dell'origine.
  * `{limit}`: il numero di bersagli che possono essere influenzati
  * `{sort}`: utile per l'opzione limit.
    * NEAREST : seleziona le entità più vicine all'origine.
    * RANDOM : seleziona casualmente qualsiasi entità nel raggio del comando.
  * `{regionCheck}`: true/false. Se true, il comando AROUND controllerà se il bersaglio si trova nella wilderness oppure nel claim di chi lancia il comando (contesto del plugin GriefPrevention) (sarà aggiornato presto per il controllo con altri plugin di claim)
  * `{nonliving}`: true/false. Se true, prenderà come bersaglio anche altre entità come Arrows e Armor Stands. Gli eventuali bug che si verificano eseguendo comandi per entità con questo argomento attivo verranno molto probabilmente ignorati a causa dello scope creep.
  * Puoi mettere in BLACKLIST o in WHITELIST delle entità aggiungendo una di queste in qualsiasi punto del comando:
    * BLACKLIST(ZOMBIE,ARMOR\_STAND)
    * WHITELIST(CHICKEN)
* Esempio:

```
- MOB_AROUND 3 false BURN 10
- MOB_AROUND 5 execute at %around_target_uuid% run summon lightning_bolt
- MOB_AROUND 5 BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
- MOB_AROUND 5 effect give %around_target_uuid% poison 10 10
```

Per usare gli NBT delle entità nel campo WHITELIST/BLACKLIST, devi installare il plugin NBT API

<LinkPreview
  url="https://www.spigotmc.org/resources/nbt-api.7939/"
  title="NBTAPI Plugin"
/>

Supporta i tag NBT, quindi puoi aggiungere per esempio qualcosa come: `ZOMBIE{IsBaby:1}`

<LinkPreview
  url="https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities"
  title="Entities tags"
/>

```
- MOB_AROUND 7 BLACKLIST(ZOMBIE{CustomName:"Test Test"},ZOMBIE{CustomName:"Miyamoto"}) false BURN 3
- MOB_AROUND 5 WHITELIST(ZOMBIE{IsBaby:1}) DAMAGE 20
- MOB_AROUND 9 WHITELIST(WOLF{Owner:"%player%"}) HEAL 5
- MOB_AROUND 9 WHITELIST(WOLF{Owner:%player_uuid%}) HEAL 5
```

### MOVE

* Info: sposta tutte le entità che si trovano sopra il blocco nella direzione del blocco (per capirci, è come fa un nastro trasportatore)
* Nessuna impostazione del comando
* Esempio:

```
- MOVE
```

:::info
**Questo comando funziona solo sui blocchi direzionali.**
:::

### MOB\_NEAREST

* Info: seleziona il mob più vicino al giocatore/bersaglio.
* Impostazioni del comando
    * `{max accepted distance}`:  distanza massima accettata a cui può trovarsi l'"entità".
    * `{command(s)}`: il comando che verrà eseguito
* Esempio:

Danneggia il giocatore più vicino

```
- MOB_NEAREST 10 DAMAGE 5
```

### NEAREST

* Info: seleziona il giocatore più vicino al giocatore/bersaglio.
* Impostazioni del comando
    * `{max accepted distance}`: distanza massima accettata a cui può trovarsi il "bersaglio".
    * `{command}`: il comando che verrà eseguito
* Esempio:

Danneggia il giocatore più vicino

```
- NEAREST 8 DAMAGE 5
```

### OPENDOOR

* Apre o chiude un blocco apribile.
* Nessuna impostazione del comando
* Esempio:

```
- OPENDOOR
```

### OPMESSAGE

* Info: invia un messaggio ai giocatori OP online e alla console
* Impostazione del comando
  * `{text}`: testo da inviare
* Esempio:

```
- OPMESSAGE This is my debug message
```

### PARTICLE

* Info: fa apparire particelle nella posizione del blocco
* Impostazioni del comando
  * `{type}`: il tipo di particella.

<LinkPreview
  url="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html"
  title="Particles"
/>

* `{quantity}`: la quantità di particelle che appariranno
* `{offset}`: il raggio dell'area in cui le particelle possono apparire nella posizione del blocco
* `{speed}`: quanto saranno veloci o grandi le particelle
* Esempio:

```
- PARTICLE COMPOSTER 10 0.1 0.5
```

### PLACELIQUID
* Info: piazza un liquido in una posizione. Se in quella posizione è presente un calderone, lo riempie. Se è presente un blocco che può essere waterlogged, lo riempie d'acqua. Altrimenti non fa nulla
* Impostazioni del comando
  * `{type}`: tipo di liquido (predefinito: WATER). Scelte: WATER/LAVA
* Esempio:

```
- PLACELIQUID type:WATER
- PLACELIQUID type:LAVA
```

### PLANT\_IN\_SQUARE

* Info: pianta in un quadrato rispetto al blocco selezionato.
* Impostazioni del comando
  * `{radius}`: raggio del quadrato
  * `{takeFromInv}`: predefinito true, prende i semi dall'inventario del giocatore, altrimenti li genera
  * `{acceptEI}`: predefinito false, accetta gli EI per i semi
  * `{cropType}`: per impostazione predefinita sono accettati tutti i semi (prende i semi in base al loro ordine nell'inventario)
    * FARMLAND - WHEAT, CARROTS, BEETROOTS, POTATOES, SWEET\_BERRY\_BUSH, MELON\_STEM, PUMPKIN\_STEM, TORCHFLOWER\_CROP
    * SOUL SAND - NETHER\_WART
    * JUNGLE WOOD/LOG - COCOA
  * `{isCube}`: trasforma l'area di piantagione da quadrato a cubo. Utile per piantare cacao in area
* Esempio:

```
- PLANT_IN_SQUARE 3
```

### REMOVEBLOCK

* Info: rimuove il blocco, senza drop, lo rimuove e basta
* Nessuna impostazione del comando
* Esempio:

```
- REMOVEBLOCK
```

### SELL\_CONTENT

* Info: vende tutto il contenuto di una chest / fornace / tutti i blocchi che hanno un inventario.
* Impostazioni del comando
  * `{price_boost}`: moltiplicatore float per gli item venduti. Ad esempio, se il valore qui è 2, gli item venduti ti daranno il doppio del prezzo di vendita.
  * `{deleteUnsellable}`: valore booleano per impostare se eliminare gli item non vendibili
* Esempio:

```
- SELL_CONTENT priceBoost:1.0 deleteUnsellable:false
```

:::info
Richiede ShopGUIPlus (priorità) & Vault & i prezzi di CMI
:::

### SETBLOCK

* Info: sostituisce il blocco bersaglio con un altro blocco
* Impostazione del comando
  * `{material}`: il materiale da impostare
* Esempio:

```
- SETBLOCK STONE
```

### SETTEMPBLOCK

* Info: sostituisce il blocco bersaglio con un blocco temporaneo.
* Impostazioni del comando
  * `{material}`: il materiale da impostare
  * `{time}`: il tempo in tick (20 tick = 1 sec)
* Esempio:

```
- SETTEMPBLOCK STONE 100
```

:::warning
Non sostituisce i blocchi che hanno dati aggiuntivi (inventario, rotazione, ecc.)
:::

### SET\_TEMP\_BLOCK\_POS

* Info: sostituisce il blocco bersaglio con un blocco temporaneo
* Comando: SET\_TEMP\_BLOCK\_POS x:\{x\} y:\{y\} z:\{z\} material:\{material\} time:\{\} bypassProtection:\{boolean\} whitelistCurrentBlock:\{list of materials\}
* Esempio:

```
- SET_TEMP_BLOCK_POS x:0.0 y:0.0 z:0.0 material:STONE time:10 bypassProtection:true whitelistCurrentBlock:SAND,DIRT
```

:::warning
Non sostituisce i blocchi che hanno dati aggiuntivi (inventario, rotazione, ecc.)
:::

### SETBLOCKPOS

* Info: imposta un blocco in una determinata posizione
* Impostazioni del comando
  * `{x}`: la posizione X del blocco
  * `{y}`: la posizione Y del blocco
  * `{z}`: la posizione Z del blocco
  * `{material}`: il tipo di blocco
  * `{bypassWG}`: se WorldGuard interferirà o meno con il posizionamento del blocco
* Esempio:

```
- SETBLOCKPOS %block_x_int% %block_y_int% %block_z_int% STONE true
```

### SETEXECUTABLEBLOCK

* Info: comando setblock, ma per gli Executable Block
* Impostazioni del comando
  * `{id}`: ID dell'Executable Block
  * `{x}`: coordinate X
  * `{y}`: coordinate Y
  * `{z}`: coordinate Z
  * `{world}`: il mondo in cui vuoi che si trovi l'Executable Block
  * `{replace}`: se vuoi sostituire o meno un blocco già presente in quella posizione
  * `{bypassProtection}`: (predefinito false) se vuoi sostituire il blocco anche quando in quel punto c'è una protezione del terreno di un plugin. 
  * `[ownerUUID]`: (facoltativo) (predefinito = nessun proprietario) l'uuid del giocatore che sarà il proprietario dell'eb
* Esempio:

```
- SETEXECUTABLEBLOCK BLOCKS_001_STONE %block_x_int% %block_y_int% %block_z_int% %block_world% true
```

### SILK\_SPAWNER

* Info: raccoglie lo spawner coinvolto nell'evento
* Nessuna impostazione del comando
* Esempio:

```
- SILK_SPAWNER
```

:::info
Il comando SILK\_SPAWNER è compatibile solo con i seguenti plugin:

* RoseStacker
* WildStacker

E ovviamente con gli spawner vanilla.
:::

### SMELT

* Info: fonde il blocco bersaglio facendo cadere l'item fuso, ad esempio iron\_ore -> iron\_ingot, supporta fortune, se non può essere fuso non succede nulla. Il loot del blocco non cambierà.
* Impostazione del comando
  * `[generateEvent]`: (facoltativo) (predefinito = true) se genera o meno un evento di rottura del blocco
* Esempio:

```
- SMELT 
- SMELT false
```

### STRIKELIGHTNING

* Info: fa cadere un fulmine senza danni sul blocco che esegue il comando
* Nessuna impostazione del comando
* Esempio:

```
- STRIKELIGHTNING
```

### VEIN\_BREAKER

* Info: rompe i blocchi di un filone con una sola rottura di blocco
* Impostazioni del comando
  * `{maxVeinSize}`: (predefinito = 10) numero massimo di blocchi che il comando può rompere
  * `[createBBEvent]`: (facoltativo) (predefinito = true) se genera o meno un evento di rottura del blocco
  * `[smelt]`: (facoltativo) (predefinito = false) usa la logica del comando SMELT. Se il blocco può essere fuso, fa cadere la versione fusa. Altrimenti fa cadere correttamente il blocco rotto.
  * `[runActivatorOnBlocks]`: (facoltativo) (predefinito = false) solo per ExecutableItems. Se true, anche i blocchi del filone eseguono l'attivatore che ha lanciato il comando, vedi [runActivatorOnBlocks](#runactivatoronblocks). Mantieni `createBBEvent` su true.
* Esempio:

```
- VEIN_BREAKER 20
- VEIN_BREAKER maxVeinSize:10 createBBEvent:true smelt:false runActivatorOnBlocks:false
- VEIN_BREAKER maxVeinSize:16 runActivatorOnBlocks:true
```

:::info
`triggerEvent` non è un'impostazione di VEIN\_BREAKER. Il vecchio template dell'editor in-game scriveva `VEIN_BREAKER maxVeinSize:10 triggerEvent:true`: la parte `triggerEvent:true` non ha alcun effetto, puoi rimuoverla. Per scegliere se il comando genera eventi di rottura del blocco, usa `createBBEvent`.
:::

#### runActivatorOnBlocks

`runActivatorOnBlocks` è un'impostazione di VEIN\_BREAKER, [MINEINCUBE](#mineincube) e [FARMINCUBE](#farmincube). Viene letta solo da ExecutableItems.

* Senza di essa (predefinito `false`), i blocchi rotti dal comando non eseguono l'attivatore che contiene il comando: è ciò che evita un loop di rotture di blocchi. Gli altri attivatori dei tuoi item (quelli senza un comando di rottura) vengono comunque eseguiti per questi blocchi.
* Con `runActivatorOnBlocks:true`, ogni blocco rotto dal comando esegue anche l'attivatore che lo ha lanciato, come se il giocatore lo avesse rotto: le sue condizioni, `desactiveDrops` (nessun drop vanilla), i suoi altri comandi (ad esempio `DROPITEM`), il suo `usageModification` e le modifiche alle sue variabili si applicano a ogni blocco. Si applica anche `cancelEvent: true`: questi blocchi allora non vengono rotti.
* Il comando di rottura non viene eseguito di nuovo per questi blocchi, quindi non c'è alcun loop.
* I cooldown, gli utilizzi al giorno e le funzionalità richieste (`requiredItems`, `requiredExecutableItems`, `requiredMoney`...) non vengono controllati per questi blocchi: vengono controllati e conteggiati una sola volta, per il blocco che ha eseguito l'attivatore. Altrimenti un cooldown fermerebbe il filone dopo il primo blocco.
* L'attivatore riceve questi blocchi tramite i loro eventi di rottura del blocco: mantieni `createBBEvent` (VEIN\_BREAKER) o `{createEvent}` (MINEINCUBE) su `true`, che è il loro valore predefinito. FARMINCUBE genera da solo gli eventi con `runActivatorOnBlocks:true`, a meno che il suo argomento `{event}` non sia `false`.
* Questi eventi sono rotture di blocchi, quindi funziona solo quando il comando si trova in un attivatore PLAYER\_BLOCK\_BREAK.

Esempio: ogni blocco del filone fa cadere 1 diamante invece dei suoi drop vanilla e costa 1 utilizzo.

```yaml
activators:
  activator0:
    option: PLAYER_BLOCK_BREAK
    desactiveDrops: true
    usageModification: -1
    blockCommands:
    - VEIN_BREAKER maxVeinSize:16 runActivatorOnBlocks:true
    - DROPITEM DIAMOND 1
```
