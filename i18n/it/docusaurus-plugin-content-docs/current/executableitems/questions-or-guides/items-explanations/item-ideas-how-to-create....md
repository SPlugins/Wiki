---
description: >-
  Idee pratiche per creare item con ExecutableItems: armature, abilità per
  regioni, comandi e attivatori, con esempi su come realizzarli.
source_hash: 267b9196d0e24db3
translated_at: '2026-11-13T17:40:01.276Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Idee per item - Come creare...?

## Che cos'è questa pagina?

* Questa pagina è una spiegazione in termini generali di idee per item molto comuni, di cui le persone chiedono come realizzarle. Quindi, se vuoi creare qualcosa e non sai come farlo, dai prima un'occhiata qui: forse la tua domanda è già presente, oppure c'è un metodo simile che puoi ricreare osservando come funziona il plugin ^^

:::info
Questa pagina ti dice come fare certe cose o ti dà un'idea. Se non sai come funziona una condizione, un comando, un placeholder e così via, questo non è il posto giusto per impararlo: puoi esplorare le relative sezioni della wiki. Qui ricevi solo l'idea, non un tutorial.
:::

### Vorrei che un'abilità del mio ExecutableItem non funzioni in una regione specifica

* Dentro l'attivatore che contiene la tua "abilità", vai su **playerConditions** e cerca "**ifNotInRegion**", poi usalo come preferisci: con esso puoi mettere in **blacklist** delle regioni.

### Vorrei che un'abilità del mio ExecutableItem funzioni solo in una regione specifica

* Dentro l'attivatore che contiene la tua "abilità", vai su **playerConditions** e cerca "**ifInRegion**", poi usalo come preferisci: con esso puoi mettere in **whitelist** delle regioni.

### Vorrei che il mio item chieda una conferma prima di essere usato

* Usa semplicemente la condizione personalizzata di EI dentro l'attivatore e abilita "ifNeedPlayerConfirmation"

### Armatura che dà fuoco al nemico che ti colpisce

* Crea un attivatore **PLAYER\_RECEIVE\_HIT\_BY\_PLAYER** e in **targetCommands** usa il comando BURN \<seconds>
* Se vuoi la stessa cosa con le entità, fai lo stesso ma con **PLAYER\_RECEIVE\_HIT\_BY\_ENTITY**

:::info
Non dimenticare di impostare i **detailedSlots** corretti
:::

### Item che funziona solo nel proprio claim personale

* Dentro l'attivatore che vuoi, aggiungi la **playerCondition ifPlayerMustBeOnHisClaim**

### Item che funziona solo nel proprio claim personale e non nelle aree senza claim

* Crea una condizione placeholder dentro l'attivatore che vuoi con questo formato
  * **PLAYER\_STRING**
  * **NOT EQUALS**
  * part1: %griefprevention\_currentclaim\_ownername%
  * part2: Unclaimed

### Come creare un item che attira altri giocatori verso di te?

* Dentro l'attivatore che vuoi, nei comandi, usa il comando AROUND combinato con CUSTOMDASH1, utilizzando i placeholder di posizione del giocatore. Così, quando fai clic destro, il comando CUSTOMDASH1 farà scattare le persone ATTORNO a te verso LE TUE COORDINATE, in pratica le attirerà verso di te.

### Come creare un treecapitator?

* Attivatore **PLAYER\_BREAK\_BLOCK** e in **blockCommands** usa il comando **VEINBREAKER**

### Vorrei disabilitare l'equipaggiamento della testa del giocatore

* Crea un attivatore **PLAYER\_EQUIP\_THE\_EI** e abilita **cancelEvent**

### Disabilitare la targhetta del nome al clic

* Crea un attivatore PLAYER\_CLICK\_ON\_ENTITY -> detailedClick right e abilita cancel event

### Vorrei creare un'armatura che ti dia di più...

* Se quello che vuoi è aggiungere **cuori extra**, **velocità**, **resistenza al knockback**, **armatura** e così via alla tua armatura, spada, piccone o qualunque cosa tu voglia, devi lavorare con gli **attributi**.

### Come eseguire un comando quando fai clic su un giocatore

* Usa semplicemente l'attivatore PLAYER\_CLICK\_ON\_PLAYER e aggiungi nei comandi quello che vuoi

:::info
Lo stesso vale se vuoi eseguire il comando quando COLPISCI, ma con l'attivatore PLAYER\_HIT\_PLAYER
:::

### Item che disabilita il knockback

* Il modo migliore per ottenerlo è usare gli attributi e KNOCKBACK RESISTANCE, ma se vuoi che funzioni ovunque nel tuo inventario, crea un attivatore PLAYER\_RECEIVE\_HIT\_GLOBAL e teletrasporta il giocatore su sé stesso, qualcosa come 
  * execute at %player% run tp %player% \~ \~ \~

### Vorrei un item che dia lentezza a tutte le persone intorno a me

* Usa il comando AROUND e applica l'effetto con i placeholder di around. Consulta il comando AROUND nella wiki per maggiori informazioni.

### Disabilitare l'applicazione delle tinture sui cartelli e sui collari dei lupi

* Per il CARTELLO:
  * Attivatore: PLAYER\_RIGHT\_CLICK
  * ONLY\_BLOCK
  * detailedBlocks: \<Here add the signs you want to block>
  * E abilita cancel event
* Per i collari dei lupi:
  * Attivatore: PLAYER\_CLICK\_ON\_ENTITY
  * detailedClick: RIGHT
  * detailedEntities: WOLF
  * E abilita cancel event

### Creare un lupo che resta per "x" secondi e poi scompare

Se vuoi creare, ad esempio, un lupo domestico che dura "x" secondi, aggiungi questo:

```
playerCommands:
- execute at %player% run summon wolf ~ ~ ~ {Owner: %player%,Tags:["%player%wolf"]}
- DELAY 10
- execute run kill @e[tag=%player%wolf]
just modify the delay depending the time you want the wolf to be alive
```

### Armatura che disabilita il danno di lava e fuoco

* Crea un attivatore PLAYER\_RECEIVE\_HIT\_GLOBAL e in detailedDamage aggiungi LAVA, FIRE\_TICK e FIRE, poi abilita cancelEvent in quell'attivatore.
*   Assicurati di selezionare il detailedSlot corretto del pezzo di armatura che stai usando

    Se vuoi disabilitare l'animazione del fuoco, il massimo che puoi fare è creare un attivatore loop con il comando REMOVEBURN.

### Armatura che permette di respirare sott'acqua

* Crea un attivatore LOOP, seleziona il detailedSlot corretto e dai al giocatore l'effetto water\_breathing.

### Disabilitare il lavaggio dell'armatura di cuoio tinta nel calderone

* Crea semplicemente un attivatore RIGHT\_CLICK, poi typeTarget: ONLY\_BLOCK\_CLICK, detailedBlocks: CAULDRON e abilita cancel event.

### Item che apre una GUI

* I plugin di GUI di solito hanno un posto dove inserire un giocatore, ad esempio il comando sarebbe /opengui \<player>, quindi dentro il tuo item devi aggiungere /opengui %player%
  * se il comando è diverso, cambia semplicemente quello, ad esempio /enchanttable %player%
* Se il tuo plugin non ha questa possibilità, invece di inserire un posto per il giocatore, usa SUDOOP, ad esempio:
  * SUDOOP opengui
  * SUDOOP enchanttable

### Impedire il lancio del tridente

* Aggiungi un attivatore PLAYER\_LAUNCH\_PROJECTILE e imposta cancelEvent su true

### Vorrei disabilitare il danno da caduta per la mia armatura

* Usa l'attivatore PLAYER\_RECEIVE\_HIT\_GLOBAL e specifica in detailedDamage FALL, poi abilita cancel event

### Disabilitare la raccolta dell'acqua con la bottiglia

* PLAYER\_RIGHT\_CLICK e abilita cancel event

### Controllare se un giocatore sta pescando un giocatore

* Usa gli attivatori PROJECTILE\_HIT\_PLAYER, PLAYER\_FISH\_PLAYER, un attivatore LOOP e una variabile. (Più alcuni attivatori per prevenire i bug)
  * Quando la CANNA colpisce il giocatore, verrà eseguito PROJECTILE\_HIT\_PLAYER, quindi imposta la tua variabile su "%target%"
  * L'attivatore loop funzionerà solo se la variabile è diversa da "NO", e puoi usare la variabile per puntare il giocatore pescato.
  * E se il giocatore PESCA il bersaglio, imposta la variabile su "NO", così si reimposta e smette di funzionare
  * Gli attivatori per prevenire i bug sono PLAYER\_DROP\_THE\_EI e PLAYER\_DESELECT\_THE\_EI: reimposta la variabile in questi OPPURE annulla l'evento.

### Evocare un fulmine sul cursore

* Per prima cosa crea un attivatore PLAYER\_ALL\_CLICK o PLAYER\_RIGHT\_CLICK o PLAYER\_LEFT\_CLICK
* Poi nei comandi usa il comando personalizzato [SPAWNENTITYONCURSOR](/tools-for-all-plugins/custom-commands/player-and-target-commands#spawnentityoncursor) [LIGHTNING](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html#LIGHTNING) 1
  * Per impostazione predefinita non fa danno, quindi in aggiunta puoi usare il comando personalizzato `DAMAGE <number>`

### Come aumentare la vita massima di "x" ogni volta che l'attivatore viene eseguito

* Per aumentare la tua vita massima ti serve PlaceholderAPI con l'espansione Player, e il comando da usare è:
  * execute run attribute %player% minecraft\:generic.max\_health base set %player\_max\_health%+2

### Come recuperare salute a ogni colpo

* In un attivatore legato al colpire, come PLAYER\_HIT\_PLAYER e PLAYER\_HIT\_ENTITY, usa il comando REGAIN\_HEALTH in playerCommands, consulta quel comando nella sezione Commands per maggiori informazioni.
* Se vuoi recuperare la stessa quantità di danno che hai inflitto, usa il placeholder di EI **%last\_damage**_**\_**_**dealt%**

### Arco che esplode quando il proiettile colpisce il blocco

* Crea un attivatore PROJECTILE\_HIT\_BLOCK sul tuo item e nei comandi puoi usare
  * EXPLODE blockCommand
  * execute at %player% run summon tnt %block\_x\_int% %block\_y\_int% %block\_z\_int%
    * Dopo quella riga ti servirà un execute run kill %projectile\_uuid%
  * oppure lo stesso di prima ma evocando un creeper

### Vorrei disabilitare la carica dell'arco o della balestra

* Questo non è ancora possibile con ExecutableItems: l'unica cosa che EI può fare è impedire all'arco o alla balestra di sparare il proiettile, ma la carica? No.

### Come creare un'armatura che disabilita il congelamento del giocatore (1.18)

* Puoi eseguire il comando FREEZE in loop, proprio così:

```
    playerCommands:
    - 'LOOP START: 20'
    - GLACIAL_FREEZE 1
    - DELAYTICK 1
    - LOOP END
```

### Voglio che l'attivatore funzioni solo se il giocatore ha un certo valore in uno scoreboard

Usa semplicemente l'espansione Scoreboard di PlaceholderAPI, poi usa i suoi placeholder nella sezione placeholderCondition dentro il tuo attivatore ^^
