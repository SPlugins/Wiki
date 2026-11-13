---
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
description: >-
  Elenco completo degli attivatori di ExecutableItems con descrizione,
  funzionalità esclusive ed esempi per eseguire azioni personalizzate sugli
  item.
source_hash: 7a0c050ed0ea5e9b
translated_at: '2026-11-13T17:39:01.937Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Elenco degli attivatori

## Attivatori di ExecutableItems

Qui trovi l'elenco degli attivatori disponibili con la loro descrizione e alcuni esempi. Gli attivatori ti permettono di eseguire azioni personalizzate: possono avere condizioni, eseguire comandi, avere un cooldown, ecc.

:::warning
Un attivatore il cui `option:` non è in questo elenco (errore di battitura, attivatore di un altro plugin…) è **disabilitato**: non viene mai eseguito e la console mostra un errore con i nomi di opzione più vicini quando l'item viene caricato.
:::

Gli attivatori premium sono contrassegnati dal tag: <CustomTag type="premium" />

Le activatorFeatures sono funzionalità esclusive di quell'attivatore.

### PLAYER\_ALL\_CLICK

* Info: attivatore che viene attivato quando il giocatore fa clic sinistro o destro con l'item. 
  * Non puoi distinguere i clic: per farlo usa attivatori diversi, come PLAYER\_RIGHT\_CLICK o PLAYER\_LEFT\_CLICK.
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Se typeTarget: ONLY\_BLOCK, queste funzionalità saranno disponibili.
    * [Block commands
      ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Esempi: 
  * Warping Stone – Teletrasporta istantaneamente il giocatore di 5 blocchi nella direzione in cui guarda. Cooldown: 10 secondi.
  * Healing Totem – Al clic, cura il giocatore di 4 cuori e gli concede Regeneration I per 5 secondi.
  * Thunder Rod – Scaglia un fulmine sul nemico più vicino entro 10 blocchi.
  * Gravity Boots – Lancia il giocatore a 3 blocchi in aria e annulla il danno da caduta per 5 secondi.
  * Explosive Rune – Crea una piccola esplosione nella posizione del giocatore che respinge i mob vicini ma non danneggia il terreno.

### PLAYER\_BED\_ENTER <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore fa clic destro su un letto e ci entra. Se il giocatore non entra, questo attivatore non viene attivato. Non viene attivato quando il giocatore dorme, ma solo per l'azione di entrare nel letto.
* Esempi:
  * Void Sleep – Entrando nel letto, il giocatore viene teletrasportato in una dimensione dei sogni costruita su misura da esplorare.
  * Lunar Shield – Concede Absorption IV per 5 minuti quando si dorme nel letto, fornendo salute bonus temporanea.
  * Nightmare Curse – Fa comparire un phantom ostile sopra il letto quando il giocatore entra nel letto, costringendolo a combattere prima di dormire in pace.
  * Dreamwalker’s Blessing – Entrando nel letto, il giocatore ottiene Regeneration II finché non si sveglia (l'azione di svegliarsi sarebbe l'attivatore PLAYER\_BED\_LEAVE).

### PLAYER\_BED\_LEAVE <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore lascia il letto. Attenzione! Questo attivatore viene attivato quando il giocatore dorme ed è giorno, quindi lascia il letto, ma si attiva anche quando il giocatore lascia il letto nel mezzo del sonno: conta solo l'azione di lasciare il letto.
  * Se vuoi attivarlo solo quando il giocatore ha dormito, puoi usare questo attivatore + worldCondition -> ifWorldTime per controllare se è effettivamente giorno.
* Esempi:
  * Morning Boost – Lasciando il letto, il giocatore ottiene Speed II e Haste II per 60 secondi per iniziare la giornata carico di energia.
  * Phantom's Warning – Se il giocatore lascia il letto prima di aver dormito completamente, un phantom compare nelle vicinanze come conseguenza.
  * Dream Collector – Al risveglio, il giocatore riceve un libro incantato casuale come "ricordo di un sogno".
  * Energy Surge – Lasciando il letto, la barra della fame del giocatore viene ripristinata completamente, simulando una notte ben riposata.

### PLAYER\_BEFORE\_DEATH

* Info: attivatore che viene attivato quando il giocatore muore. La differenza tra questo attivatore e l'attivatore PLAYER\_DEATH è che questo viene attivato per primo, offrendo la possibilità di salvare il giocatore prima che muoia.
  * Per capirlo meglio: i totem dell'immortalità vanilla vengono attivati da questo attivatore per applicare i loro effetti.
* Esempi:
  * Soulbound Amulet – Quando il giocatore sta per morire, viene invece teletrasportato al suo punto di spawn con 2 cuori e Regeneration II temporanea.
  * Last Stand Shield – Quando è in punto di morte, il giocatore ottiene Resistance III e Absorption per 5 secondi, avendo la possibilità di reagire.
  * Phoenix Blessing – Quando la morte è imminente, il giocatore esplode in fiamme, infliggendo danno da fuoco ai nemici e tornando in vita con metà salute.
  * Undead Pact – Se il giocatore dovesse morire, torna invece in vita con 3 cuori, ma non potrà usare armi per 10 secondi.

### PLAYER\_BLOCK\_BREAK <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore rompe un blocco.
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Esempi:
  * Ore Booster Pickaxe – Quando si rompe un blocco di minerale, c'è il 20% di probabilità di raddoppiare il drop.
  * Nature’s Wrath Axe – Rompere un tronco ha il 10% di probabilità di evocare uno spirito dell'albero ostile (mob personalizzato).
  * Cursed Excavation – Quando si rompe la pietra, c'è il 5% di probabilità di far comparire dei silverfish o di applicare Mining Fatigue per 5 secondi.
  * Explosive Demolition Hammer – Quando si rompono blocchi, vengono rotti anche i blocchi circostanti, permettendo di rompere in 3x3.

### PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore blocca con lo scudo un colpo proveniente da un'entità.
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Esempi:
  * Thorned Shield – Quando si blocca un attacco, l'attaccante subisce 3 cuori di danno.
  * Shockwave Defense – Bloccare con successo un attacco respinge tutti i nemici vicini entro 5 blocchi.
  * Energy Absorption – Quando si blocca un attacco, il giocatore rigenera 1 cuore e ottiene Resistance I per 3 secondi.
  * Frozen Guard – Se un attacco viene bloccato, l'attaccante rimane congelato sul posto (Slowness IV) per 2 secondi.
  * Blazing Counter – Bloccare un attacco dà fuoco all'attaccante per 4 secondi.

### PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore blocca con lo scudo un colpo proveniente da un giocatore.
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Esempi:
  * Retribution Shield – Quando si blocca un attacco di un giocatore, l'attaccante viene disarmato istantaneamente e lascia cadere la sua arma a terra.
  * Vampiric Guard – Quando si blocca con successo un attacco, il giocatore assorbe una parte della salute dell'attaccante (curandosi di 2 cuori).
  * Dimensional Rift – Se l'attacco di un giocatore viene bloccato, c'è il 20% di probabilità che venga teletrasportato a 10 blocchi di distanza in una direzione casuale.
  * Adrenaline Block – Quando si blocca un attacco, il giocatore ottiene istantaneamente Speed II e Strength I per 5 secondi, permettendo un rapido contrattacco.

### PLAYER\_BLOCK\_PLACE <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore piazza un blocco.
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Esempi:
  * Living Roots – Quando si piazza un germoglio, c'è il 10% di probabilità che cresca istantaneamente in un albero.
  * Runic Inscription – Piazzare un blocco di pietra ha il 5% di probabilità di trasformarlo in una Runed Stone, emettendo particelle e fornendo ai giocatori vicini Haste I per 10 secondi.
  * Quando si piazza del TNT, c'è una piccola probabilità (5%) che si inneschi immediatamente, creando un'esplosione inaspettata.

### PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore rompe lo scudo di un altro giocatore (di solito chiamato target).
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Esempi:
  * Shatter Strike – Quando si rompe lo scudo di un giocatore, l'attaccante ottiene Strength I per 5 secondi, potenziando il suo prossimo attacco.
  * Alla distruzione di uno scudo, si verifica una piccola esplosione nella posizione del target, respingendolo di 5 blocchi.
  * Quando uno scudo viene mandato in frantumi, il target riceve **Wither I** per **5 secondi**, perdendo lentamente salute.
  * Dimensional Fracture – Quando si rompe lo scudo di un giocatore, il target viene teletrasportato per un istante 5 blocchi più in alto, disorientandolo prima che ricada.

### PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore spazzola un blocco.
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Esempi:
  * Cursed Dust – Se il giocatore spazzola un blocco sospetto, c'è il 10% di probabilità che venga temporaneamente accecato mentre una nuvola di polvere maledetta erompe intorno a lui.
  * Buried Riches – Spazzolare un blocco ha una piccola probabilità di ricompensare il giocatore con una pepita d'oro o uno smeraldo, simulando la scoperta di un tesoro perduto.
  * Temporal Echoes – Quando si spazzola un blocco di artefatto, il giocatore sente deboli sussurri dal passato, che suggeriscono segreti legati alla lore nascosti nelle vicinanze.

### PLAYER\_BUCKET\_ENTITY

* Info: attivatore che viene attivato quando il giocatore, usando un secchio, cattura un'entità nel secchio.
  * Un esempio è come si conserva un pesce dentro un secchio con acqua.
  * Se vuoi eseguire qualcosa quando "provi" a catturare in un secchio un'entità che non può essere catturata, questo attivatore non verrà eseguito: dovresti usare PLAYER\_CLICK\_ON\_ENTITY.
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Esempi:
  * Instant Fillet – Invece di catturare un pesce in un secchio, il giocatore riceve istantaneamente pesce crudo nell'inventario, come se lo avesse sfilettato con maestria sul posto.
  * Essence Extraction – Quando si usa un secchio su un axolotl, invece di catturarlo, il giocatore riceve una pozione "Axolotl Mucus", che concede Regeneration I per 10 secondi.

### PLAYER\_CHANGE\_WORLD

* Info: attivatore che viene attivato quando il giocatore passa a un mondo diverso.
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
* Esempi:
  * Dimensional Adaptation – Quando il giocatore entra in un nuovo mondo, riceve un potenziamento temporaneo casuale (Speed, Strength o Night Vision per 30 secondi) mentre il suo corpo si adatta al nuovo ambiente.
  * Weight of Realms – Se un giocatore entra nel Nether o nell'End, ottiene temporaneamente Slowness II per 10 secondi, simulando l'improvviso cambiamento di gravità.
  * Forgotten Memories – Quando si cambia mondo, c'è una piccola probabilità (5%) che il giocatore perda un item casuale dell'inventario, simulando un "ricordo" dimenticato.
  * Realmwalker’s Favor – Entrare in un nuovo mondo concede un misterioso item di loot, a tema con la dimensione (ad es. il Nether dà un lingotto d'oro casuale, l'End dà una Ender Pearl, ecc.), come se fosse donato da una forza sconosciuta.

### PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore fa clic su un'entità e sugli NPC di Citizen.
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Esempi:
  * Beast Tamer’s Bond – Fare clic su un Wolf, un Cat o un Horse tenendo in mano un item speciale (ad es. una Golden Apple) gli concede Speed II e Regeneration temporanee per 60 secondi.
  * Hidden Pocket – Fare clic su uno Zombie Piglin con dei lingotti d'oro ha il 5% di probabilità di ricevere istantaneamente un item di loot del Nether casuale invece di dover barattare.
  * Gourmet’s Choice – Fare clic su una Cow, un Pig o un Chicken tenendo in mano un Knife (item personalizzato) fornisce istantaneamente un drop di carne di qualità superiore (ad es. Cooked Steak invece di Raw Beef).
  * Battle Focus – Fare clic su un Iron Golem tenendo in mano uno Shield gli concede Resistance II e Knockback Resistance temporanee per 30 secondi, permettendogli di incassare più danni.
  * Final Tribute – Fare clic su uno Skeleton o su un Wither Skeleton tenendo in mano dei Bone Block concede al giocatore un breve potenziamento Speed II, come se assorbisse l'energia di un antico guerriero.

### PLAYER\_CLICK\_ON\_PLAYER

* Info: attivatore che viene attivato quando il giocatore fa clic su un giocatore (di solito chiamato target).
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Esempi:
  * Shared Fortune – Fare clic su un giocatore tenendo in mano un blocco di smeraldo divide a metà i tuoi livelli di XP, dando istantaneamente all'altro giocatore l'XP perso.
  * Fare clic su un compagno di squadra tenendo in mano una Potion of Healing trasferisce istantaneamente metà della tua salute a lui, rendendola un'ancora di salvezza strategica all'ultimo secondo.
  * Tactical Mark – Fare clic su un altro giocatore mentre si è accovacciati applica un effetto luminoso su di lui per 10 secondi, rendendolo visibile ai compagni di squadra in uno scontro PvP.
  * Oath of Protection – Fare clic su un giocatore tenendo in mano uno Shield gli concede Resistance I per 30 secondi, agendo come un effetto di guardiano temporaneo.

### PLAYER\_CONNECTION <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore entra nel server.
* Esempi:
  * Realm’s Welcome – All'accesso, il giocatore riceve un potenziamento temporaneo di Speed I e Haste I per 30 secondi, simulando un'ondata di energia all'ingresso nel mondo.
  * Echo of the Past – Il primo messaggio che il giocatore vede in chat è un messaggio "ricordo" personalizzato.
  * Daily Fortune – All'accesso, al giocatore viene concesso un bonus o malus minore casuale per 10 minuti (ad es. Luck I, Speed I o Slowness I), rendendo ogni sessione leggermente diversa.
  * Dimensional Echo – Se il giocatore accede da un altro mondo (Nether o End), vive brevemente un effetto di particelle vorticanti e sente suoni ambientali distorti per qualche secondo prima di stabilizzarsi completamente.

### PLAYER\_CONSUME

* Info: attivatore che viene attivato quando il giocatore mangia / consuma con successo un item.\
  Attenzione: funziona solo per gli item di Minecraft commestibili o per quelli trasformati in item commestibili tramite le [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CONSUME\_THE\_EI

* Info: attivatore che viene attivato quando il giocatore mangia/consuma con successo l'ExecutableItem stesso. \
  Attenzione: funziona solo per gli ExecutableItems commestibili o per quelli trasformati in item commestibili tramite le [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CUSTOM\_LAUNCH

* Info: attivatore che viene attivato quando il giocatore lancia un proiettile con un comando di SCore come:
  * [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
  * [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch)
  * [LAUNCH\_ENTITY](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#launchentity)
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [entityCommands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands) (in questo attivatore l'entità è il proiettile)
  * [Projectile placeholders](/tools-for-all-plugins-score/placeholders#projectile-placeholders)
  * [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities) (per inserire alcuni proiettili in whitelist/blacklist)

### PLAYER\_DEATH

* Info: attivatore che viene attivato quando il giocatore muore.
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui. 
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_DESELECT\_THE\_EI <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore deseleziona l'ExecutableItem.
  * Questo accade quando l'ExecutableItem è nella mano principale e poi cambi l'item che tieni in mano, quindi lo "deselezioni". 

### PLAYER\_DISABLE\_FLY

* Info: attivatore che viene attivato quando il giocatore smette di volare. 
  * L'azione di volare significa letteralmente volare, non planare né trovarsi in aria a causa di una caduta.

### PLAYER\_DISABLE\_GLIDE

* Info: attivatore che viene attivato quando il giocatore smette di planare. 

### PLAYER\_DISABLE\_SNEAK <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore smette di accovacciarsi. 

### PLAYER\_DISABLE\_SPRINT <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore smette di scattare 

### PLAYER\_DISABLE\_SWIM

* Info: attivatore che viene attivato quando il giocatore smette di nuotare (nuoto 1.13)
* 
### PLAYER\_DISCONNECT

* Info: attivatore che viene attivato quando il giocatore esce dal server.

### PLAYER\_DISMOUNT

* Info: attivatore che viene attivato quando il giocatore smonta / scende da un'entità che stava cavalcando. 
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_DROP\_ITEM

* Info: attivatore che viene attivato quando il giocatore lascia cadere un item. 

### PLAYER\_DROP\_THE\_EI <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore lascia cadere l'ExecutableItem. 
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_EDIT\_BOOK <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore modifica il libro e la penna e preme fine o firma il libro. 

### PLAYER\_EI\_BREAK <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore rompe l'ExecutableItem a causa della rottura vanilla per durabilità.

### PLAYER\_EMPTY\_BUCKET

* Info: attivatore che viene attivato quando il giocatore svuota un secchio ExecutableItem. Si attiva anche, ad esempio, quando riempi d'acqua un blocco (waterlog) o riempi un calderone con quel liquido.
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Quando questo attivatore viene attivato, il blocco target è la posizione in cui dovrebbe essere piazzata l'acqua. Con questa informazione, puoi usare SETBLOCK per sostituire l'acqua con qualcos'altro, se vuoi.

### PLAYER\_ENABLE\_FLY <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore **inizia** a volare. Questo attivatore viene attivato dall'azione "doppia pressione della barra spaziatrice con il permesso di volare".
  * Questo significa che non viene attivato se stai già volando: viene attivato dall'azione di cambiare lo stato di volo tramite la "doppia pressione della barra spaziatrice".
* Esempi:
  * Lightning Takeoff – Quando il volo viene attivato, un piccolo fulmine senza danni colpisce la posizione del giocatore per un effetto scenico.
  * Aerial Boost – All'inizio del volo, il giocatore ottiene un effetto Speed III temporaneo per 5 secondi per simulare un potente decollo.
  * Gale Force Wings – Quando inizia a volare, un forte effetto di vento spinge tutte le entità intorno al giocatore.

### PLAYER\_ENABLE\_GLIDE

* Info: attivatore che viene attivato quando il giocatore inizia a planare. 

### PLAYER\_ENABLE\_SNEAK <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore inizia ad accovacciarsi. 

### PLAYER\_ENABLE\_SPRINT <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore inizia a scattare.

### PLAYER\_ENABLE\_SWIM

* Info: attivatore che viene attivato quando il giocatore inizia a nuotare (nuoto 1.13)

### PLAYER\_ENTER\_IN\_THEIR\_LAND <CustomTag type="premium" />

* Info: attivatore che viene attivato se entri nel tuo land o in un land in cui sei trusted 
  * Plugin supportati:
    * Lands

### PLAYER\_ENTER\_IN\_THEIR\_PLOT <CustomTag type="premium" />

* Info: attivatore che viene attivato se entri in un plot.
  * Plugin supportati:
    * PlotSquared 

### PLAYER\_EQUIP\_THE\_EI <CustomTag type="premium" />

* Info: attivatore che viene attivato se indossi/metti il pezzo di armatura nello slot dell'armatura.
  * `detailedSlots` può limitarlo a uno slot dell'armatura: 36 stivali, 37 gambali, 38 corazza, 39 elmo (lo slot in cui va il pezzo), oltre a -1 per la mano da cui proviene.
  * <CustomTag type="version" version="1.21.3" /> Un item con [equippable features](/executableitems/configurations/item-configuration/item-features#equippable-features-) va nello `slot` di queste funzionalità, anche quando non è lo slot del suo materiale: una zucca intagliata equipaggiabile sulle gambe conta come gambali (37). Con un clic destro, viene indossato solo se il suo `swappable` è true.
  * Attenzione! Il plugin CMI può far sì che questo attivatore non funzioni a causa del permesso cmi.inventoryhat impostato su true. Se vuoi che questo attivatore funzioni, imposta il permesso su false. 
  * Gli addon Fabric possono aggirare questo attivatore.

### PLAYER\_EXPERIENCE\_CHANGE

* Info: attivatore che viene attivato quando l'esperienza del giocatore cambia in modo naturale. 
  * Questo significa che questo attivatore non viene attivato per i cambi di esperienza dovuti a comandi. Tranne se quei comandi sono l'evocazione di un orb di esperienza, che farebbe cambiare l'esperienza in modo "naturale".

### PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" />

* Info: attivatore che viene attivato se il giocatore fertilizza un blocco con la bone meal. 
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FILL\_BUCKET

* Info: attivatore che viene attivato quando il giocatore riempie il secchio con acqua o lava. 
  * Attenzione! Quando un ExecutableItem riempie un secchio e diventa "water\_bucket" o "lava\_bucket", non è più un ExecutableItem: diventa un item vanilla e non può essere ripristinato.
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_BLOCK <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore fa clic destro con la canna da pesca mentre il galleggiante della canna si trova su un blocco. 
  * Non viene attivato quando non è su un blocco: se vuoi attivarlo in aria, usa l'attivatore [PLAYER_FISH_NOTHING](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_fish_nothing)
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_ENTITY <CustomTag type="premium" />

* Si attiva quando il giocatore fa clic destro con la canna da pesca mentre il galleggiante della canna aggancia un'entità o un NPC di Citizens.
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui. 
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_FISH <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore fa clic destro con la canna da pesca mentre il galleggiante della canna prende un item nell'acqua grazie al sistema di loot della pesca. 
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

:::tip
L'entità presa di mira da `entityCommands` è l'**item pescato**. Usa il comando entità [CHANGE\_INTO\_ITEM](/tools-for-all-plugins-score/custom-commands/entity-commands#change_into_item) per trasformare la cattura in un item vanilla o in un ExecutableItem, consulta la guida [Custom fishing loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot).
:::

### PLAYER\_FISH\_NOTHING <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore non pesca nulla, cioè il galleggiante non si trovava né su un blocco, né su un'entità, né su un giocatore.
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_PLAYER <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore fa clic destro con la canna da pesca mentre il galleggiante della canna aggancia un altro giocatore (di solito chiamato target).
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_FISH\_XIAOMOMI\_FISH <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore pesca con successo qualcosa usando il plugin CustomFishing (precedentemente noto come Xiaomomi Fish). Questo attivatore richiede che il [plugin CustomFishing](https://modrinth.com/plugin/customfishing) sia installato sul tuo server.
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Placeholder disponibili:
  * `%result%` - Il risultato della pesca (ad es. SUCCESS, FAILURE, ecc.)
  * `%fish_hook%` - Il nome dell'amo usato
  * `%loot%` - L'ID del loot pescato
* Esempi:
  * Custom Fishing Rewards – Quando si pesca un pesce raro con CustomFishing, concede al giocatore esperienza bonus o una ricompensa in valuta speciale.
  * Lucky Catch – Quando si pesca con successo con una canna specifica, c'è la possibilità di ricevere item di loot personalizzati aggiuntivi dal plugin CustomFishing.
  * Fishing Skill Progression – Traccia le catture riuscite e aumenta i livelli di abilità di pesca del giocatore in base alla rarità dei pesci pescati.

:::info
Questo attivatore funziona solo se hai il plugin **CustomFishing** installato. Si integra con il FishingResultEvent di CustomFishing per fornire meccaniche di pesca avanzate.
:::

### PLAYER\_HARVEST\_BLOCK

* Info: attivatore che viene attivato quando il giocatore raccoglie un blocco
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui. 
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Esempi:
  * Quando si fa clic destro su un cespuglio di bacche dolci per raccogliere, c'è il 10% di probabilità che il cespuglio morda, infliggendo mezzo cuore di danno ma dando al giocatore Strength I per 5 secondi come effetto "sete di sangue".
  * Bountiful Touch – Quando si raccolgono colture, c'è il 15% di probabilità di ripiantarle istantaneamente a piena crescita, permettendo una coltivazione continua.
  * Mystic Bloom – Quando si raccoglie un fiore, c'è il 5% di probabilità che rilasci un item incantato casuale infuso con l'energia della natura.

### PLAYER\_HIT\_ENTITY <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore colpisce un'entità.
  * Questo attivatore funziona solo quando c'è un danno coinvolto, cioè il giocatore ha effettivamente colpito l'entità. Se vuoi che funzioni quando si fa clic sull'entità, usa [PLAYER_CLICK_ON_ENTITY](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_entity)
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_HIT\_PLAYER

* Info: attivatore che viene attivato quando il giocatore colpisce un altro giocatore (di solito chiamato target).
  * Questo attivatore funziona solo quando c'è un danno coinvolto, cioè il giocatore ha effettivamente colpito l'altro giocatore. Se vuoi che funzioni quando si fa clic sul giocatore, usa [PLAYER_CLICK_ON_PLAYER](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_player)
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_INPUT <CustomTag type="premium" /> <CustomTag type="version" version="1.21.3" />

* Info: attivatore che viene attivato quando il giocatore preme un tasto. (avanti, indietro, sinistra, destra, salto, scatto, accovacciarsi)

### PLAYER\_ITEM\_BREAK <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore rompe l'ExecutableItem facendogli perdere tutta la durabilità. 

### PLAYER\_JUMP <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore salta.
  * <CustomTag type="version" version="1.21.2" /> può attivarsi anche se il giocatore ha tentato di saltare a mezz'aria.

### PLAYER\_KICK

* Info: attivatore che viene attivato quando il giocatore viene espulso (kick) 

### PLAYER\_KILL\_ENTITY <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore uccide un'entità o un NPC di Citizens. 
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)

### PLAYER\_KILL\_PLAYER <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore uccide un giocatore (di solito chiamato target).
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_LAUNCH\_PROJECTILE

* Info: attivatore che viene attivato quando il giocatore lancia un proiettile. 
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_LEAVE\_THEIR\_LAND

* Info: attivatore che viene attivato se esci dal tuo land o da un land in cui sei trusted 
  * Plugin supportati:
    * Lands

### PLAYER\_LEAVE\_THEIR\_PLOT <CustomTag type="premium" />

* Info: attivatore che viene attivato se esci da un plot.
  * Plugin supportati:
    * PlotSquared 

### PLAYER\_LEFT\_CLICK

* Info: attivatore che viene attivato quando il giocatore fa clic sinistro con l'item. 
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Se typeTarget: ONLY\_BLOCK, queste funzionalità saranno disponibili.
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : per scrivere i [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_MEND\_THE\_EI

* Info: attivatore che viene attivato quando il giocatore ripara l'ExecutableItem con l'incantesimo mending. 

### PLAYER\_OPEN\_INVENTORY

* Info: attivatore che viene attivato quando il giocatore apre inventari, ma **NON il proprio inventario**. 

:::info
Al momento non è possibile rilevare quando il giocatore apre il **proprio** inventario perché avviene solo lato client. 

L'evento viene attivato solo quando qualcuno costringe il giocatore ad aprire il proprio inventario o se il giocatore apre inventari personalizzati, di blocchi o di mercanti.
:::

### PLAYER\_PICKUP\_THE\_EI <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore raccoglie l'ExecutableItem. 

### PLAYER\_PORTAL

* Info: attivatore che viene attivato quando il giocatore usa un portale.

### PLAYER\_RECEIVE\_EFFECT <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore riceve un effetto di pozione. 
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [DetailedEffects](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedeffects)

### PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore viene colpito da un'entità. 
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore viene colpito da un altro giocatore (di solito chiamato target).
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_RECEIVE\_HIT\_GLOBAL <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore viene colpito. 
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_REGAIN\_HEALTH

* Info: attivatore che viene attivato quando il giocatore recupera salute in modo naturale.

### PLAYER\_RESPAWN <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore rinasce (respawn).
  * Come di consueto, tutti gli attivatori di ExecutableItem funzionano quando il giocatore ha l'item nell'inventario, quindi se il giocatore rinasce senza l'item nell'inventario questo attivatore non verrà attivato.

### PLAYER\_RIGHT\_CLICK

* Info: attivatore che viene attivato quando il giocatore fa clic destro con l'item. 
  * A causa dei limiti di Spigot, questo attivatore verrà attivato solo se hai un item (qualsiasi) in mano.
* Funzionalità personalizzate di questo attivatore:
  * [typeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget) : per specificare il tipo di clic (ONLY\_AIR, ONLY\_BLOCK, NO\_TYPE\_TARGET)
  * Se typeTarget: ONLY\_BLOCK, queste funzionalità saranno disponibili:
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : per scrivere i [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [detailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks) : per specificare quali tipi di blocco sono validi

### PLAYER\_RIPTIDE

* Info: attivatore che viene attivato quando il giocatore usa il riptide.

### PLAYER\_SELECT\_THE\_EI <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore seleziona l'ExecutableItem nella hotbar, cioè inizia a tenerlo nella mano principale. 

### PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore tosa un'entità. 
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" />

* Info: attivatore che viene attivato quando lo scudo del giocatore viene rotto da un altro giocatore (di solito chiamato target).
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_SPAWN\_CHANGE

* Info: attivatore che viene attivato quando il punto di spawn del giocatore viene cambiato. 

### PLAYER\_SWAPHAND\_THE\_EI

* Info: attivatore che viene attivato quando il giocatore scambia di mano l'ExecutableItem. Cioè la scorciatoia dalla mano principale alla mano secondaria e viceversa. 

### PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" />

* Info: attivatore che viene attivato quando un'entità prende di mira il giocatore. 
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_TRAMPLE\_CROP

* Info: attivatore che viene attivato quando il giocatore calpesta una coltura. 
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Block commands
    ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_UNEQUIP\_THE\_EI <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore si toglie l'ExecutableItem. 
  * `detailedSlots` può limitarlo a uno slot dell'armatura: 36 stivali, 37 gambali, 38 corazza, 39 elmo (lo slot da cui proviene il pezzo).
  * Attenzione! Il plugin CMI può far sì che questo attivatore non funzioni a causa del permesso cmi.inventoryhat impostato su true. Se vuoi che questo attivatore funzioni, imposta il permesso su false.
  * Gli addon Fabric possono aggirare questo attivatore.

### PLAYER\_WALK <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore cammina. 
  * Questo attivatore viene attivato a ogni tick in cui il giocatore cammina, quindi è molto costoso in termini di prestazioni: usalo con attenzione. Puoi aggiungere la funzionalità di cooldown d'uso per ridurne l'impatto.

### PLAYER\_WRITE\_COMMAND <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore inserisce/digita un comando. 
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [DetailedCommands](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedcommands)

### PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" />

* Info: attivatore che viene attivato quando un proiettile lanciato dal giocatore entra in acqua.
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" />

* Info: attivatore che viene attivato quando un proiettile lanciato da un giocatore colpisce un blocco. 
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" />

* Info: attivatore che viene attivato quando un proiettile lanciato da un giocatore colpisce un'entità. \
  Attenzione: non viene attivato quando il proiettile colpisce un giocatore (per quello usa PROJECTILE\_HIT\_PLAYER).
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_PLAYER

* Info: attivatore che viene attivato quando un proiettile lanciato da un giocatore colpisce un altro giocatore (di solito chiamato target).
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### CUSTOM\_TRIGGER

* Info: attivatore che può essere eseguito tramite un comando, oppure può essere programmato. 
  * Questo attivatore è comune a tutti i plugin, per questo è spiegato in [Custom triggers](/tools-for-all-plugins-score/custom-triggers)

### EI\_CLICK\_ON\_ANOTHER\_INVENTORY\_ITEM 

* Info: attivatore che viene attivato quando l'ExecutableItem viene posizionato sopra un altro item nell'inventario.

### EI\_CLICKED\_BY\_ANOTHER\_INVENTORY\_ITEM

* Info: attivatore che viene attivato quando un item viene posizionato sopra l'ExecutableItem nell'inventario.

### EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: attivatore che viene attivato quando l'ExecutableItem entra nell'inventario del giocatore.
  * Se stai usando un altro plugin che gestisce la consegna di item e viene dato un ExecutableItem ma questo attivatore non viene eseguito, rivolgiti al loro supporto e chiedi di chiamare questo metodo.
  * Contano anche gli spostamenti all'interno dell'inventario: scambio con la mano secondaria (tasto F), scambio con i tasti numerici e, sui server Paper, pick block / pick item (clic centrale). Per questi spostamenti EI\_LEAVE\_THE\_PLAYER\_INVENTORY viene sempre eseguito prima di questo attivatore.

### EI\_LEAVE\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: attivatore che viene attivato quando l'item lascia l'inventario del giocatore.
  * Richiede ProtocolLib per far funzionare correttamente questo attivatore. 

### INVENTORY\_CLICK <CustomTag type="premium" />

* Info: attivatore che viene attivato quando il giocatore fa clic sull'item nel proprio inventario. 
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)

### LOOP <CustomTag type="premium" />

* Info: attivatore che viene attivato ripetutamente finché l'item si trova nell'inventario del giocatore. È fondamentalmente un ciclo: esegue i comandi ogni \<delay> \<seconds/ticks> a seconda della configurazione di questo attivatore.
* Quando una condizione di un LOOP non è valida, il messaggio di errore predefinito (`You can't activate this item > invalid condition`) non viene inviato: il giocatore non ha attivato nulla. Un messaggio personalizzato (`{theCondition}Msg`) viene comunque inviato.
* Per un bonus mentre sono indossati più pezzi, usa i [sets](/executableitems/configurations/sets-configuration) invece di un LOOP.
* activatorFeatures: normalmente tutti gli attivatori condividono le funzionalità, ma alcune sono esclusive di certi attivatori; in tal caso, le funzionalità saranno elencate qui.
  * [Delay](/executableitems/configurations/activator-configuration/activators-features#s_a_l-delay-and-delaytick)
