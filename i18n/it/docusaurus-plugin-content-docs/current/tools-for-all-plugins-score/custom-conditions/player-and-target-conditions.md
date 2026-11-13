---
description: >-
  Scopri come configurare le condizioni del giocatore e del bersaglio negli
  attivatori di ExecutableItems: sintassi, messaggi di errore ed esempi.
source_hash: 5b9669d43610ab52
translated_at: '2026-11-13T17:43:52.235Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Condizioni del giocatore e del bersaglio

## Impostazioni delle condizioni
Tutte le condizioni hanno lo stesso formato, hai:
* `{theCondition}`
* `{theCondition}Msg`: Il messaggio da inviare se la condizione non è valida (senza di esso viene inviato un messaggio di errore predefinito, tranne per l'attivatore LOOP di ExecutableItems)
* `{theCondition}Cancel`: Indica se l'evento deve essere annullato oppure no quando la condizione non è valida
* `{theCondition}Cmds`: Il comando o i comandi da eseguire se la condizione non è valida
* Esempio:

```yaml
playerConditions:
    ifSneaking: true
    ifSneakingMsg: "&cMy custom error message here"
    ifSneakingCancel: true
    ifSneakingCmds:
    - kill %player%
```

:::info
Per le condizioni numeriche puoi assegnare 2 condizioni contemporaneamente.
Esempio: 
"Voglio creare una condizione che si attivi solo se il valore è maggiore di 50 ma minore di 250"
`{theCondition}: 50 < CONDITION < 250`
:::

:::info
Vuoi aggiungere condizioni del giocatore?

Allora nella parte dell'attivatore aggiungi playerConditions.

E ovviamente è targetConditions per la condizione del bersaglio.
:::

:::info
**GIF INFORMATIVE:** L'attivatore usato nelle GIF per mostrare il funzionamento di ogni condizione è l'attivatore LOOP, ecco perché il messaggio di errore della condizione compare più volte.
:::

### ifSneaking - Not

* Descrizione: Controlla se il giocatore si sta accovacciando
* Esempio:

```yaml
playerConditions:
    ifSneaking: false
    ifSneakingMsg: '' #<- Here is where you will add the custom message.
    ifNotSneaking: true
    ifNotSneakingMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il giocatore (non) si sta accovacciando, l'attivatore si attiverà.
  * Se il giocatore sta volando e scende premendo il tasto per accovacciarsi, l'attivatore si attiverà. Per ifSneaking
* Obbligatorio: NO (Predefinito: false)

![](https://media.ssomar.com/m/docs-img-giphy-sygm0wxk3y1c0u4u3d.gif)

:::danger
Non abilitare ifNotSneaking se la condizione ifSneaking è abilitata, perché non ha senso averle entrambe abilitate
:::

### ifSprinting - Not

* Descrizione: Controlla se il giocatore sta scattando
* Esempio:

```yaml
playerConditions:
    ifSprinting: false
    ifSprintingMsg: '' #<- Here is where you will add the custom message.
    ifNotSprinting: false
    ifNotSprintingMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il giocatore (non) sta scattando, l'attivatore si attiverà.
* Obbligatorio: NO (Predefinito: false)

### ifFlying - Not

* Descrizione: Controlla se il giocatore sta volando
* Esempio:

```yaml
playerConditions:
    ifFlying: false
    ifFlyingMsg: '' #<- Here is where you will add the custom message.
    ifNotFlying: false
    ifNotFlyingMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il giocatore attiva il volo facendo doppio clic sul tasto di salto e (non) vola, l'attivatore si attiverà.
* Obbligatorio: NO (Predefinito: false)

![](https://media.ssomar.com/m/docs-img-giphy-gqp59l3zk78sas94uo.gif)

### ifBlocking - Not

* Descrizione: Controlla se il giocatore sta tenendo uno scudo e facendo clic destro su di esso (parata)
* Esempio:

```yaml
playerConditions:
    ifBlockng: false
    ifBlockingMsg: '' #<- Here is where you will add the custom message.
    ifNotBlockng: false
    ifNotBlockingMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il giocatore (non) sta parando con uno scudo, l'attivatore si attiverà
* Obbligatorio: NO (Predefinito: false)

![](https://media.ssomar.com/m/docs-img-giphy-xihlvwpznviu4c7786.gif)

### ifGliding - Not

* Descrizione: Controlla se il giocatore sta planando
* Esempio:

```yaml
playerConditions:
    ifGliding: false
    ifGlidingMsg: '' #<- Here is where you will add the custom message.
    ifNotGliding: false
    ifNotGlidingMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il giocatore (non) plana a mezz'aria con un'elitra, l'attivatore si attiverà.
* Obbligatorio: NO (Predefinito: false)

![](https://media.ssomar.com/m/docs-img-giphy-f3px7d1awbudmrj0va.gif)

### ifSwimming - Not

* Descrizione: Controlla se il giocatore sta nuotando (aggiornamento Aquatic 1.13)
* Esempio:

```yaml
playerConditions:
    ifSwimming: false
    ifSwimmingMsg: '' #<- Here is where you will add the custom message.
    ifNotSwimming: false
    ifNotSwimmingMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il giocatore salta in acqua e inizia a nuotare in posizione a stile libero, l'attivatore si attiverà.
* Obbligatorio: NO (Predefinito: false)

![](https://media.ssomar.com/m/docs-img-giphy-1cfambqwl4j9mmrpbg.gif)

### ifStunned - Not

* Descrizione: Controlla se il giocatore è stordito
* Esempio:

```yaml
playerConditions:
    ifStunned: false
    ifStunnedMsg: '' #<- Here is where you will add the custom message.
    ifNotStunned: false
    ifNotStunnedMsg: ''
```

:::info
Puoi stordire un giocatore eseguendo il comando personalizzato del giocatore **STUN\_ENABLE** 
:::

```
// Example of a stun of 5 seconds
- STUN_ENABLE
- DELAY 5
- STUN_DISABLE
```

* Obbligatorio: NO (Predefinito: false)

### ifIsOnFire - Not

* Descrizione: Controlla se il giocatore è in fiamme
* Esempio:

```yaml
playerConditions:
    ifIsOnFire: false
    ifIsOnFireMsg: '' #<- Here is where you will add the custom message.
    ifIsNotOnFire: false
    ifIsNotOnFireMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il giocatore (non) è in fiamme per essere caduto nella lava o aver camminato sul fuoco, l'attivatore si attiverà
* Obbligatorio: NO (Predefinito: false)

### ifIsInTheAir - Not

* Descrizione: Controlla se il giocatore è in aria.
* Esempio:

```yaml
playerConditions:
    ifIsInTheAir: false
    ifIsInTheAirMsg: '' #<- Here is where you will add the custom message.
    ifIsNotInTheAir: false
    ifIsNotInTheAirMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il giocatore (non) ha blocchi sotto i piedi, l'attivatore si attiverà.
* Obbligatorio: NO (Predefinito: false)

![Controllerà il blocco sotto i tuoi piedi. Controlla correttamente anche le lastre.](https://media.ssomar.com/m/docs-img-giphy-djjtjpzl1pmkbjnqvu.gif)

### ifLineOfSight

* Descrizione: Controlla se il giocatore ha la linea di vista su un'entità vivente (entro 50 blocchi).
* Esempio:

```yaml
playerConditions:
    ifLineOfSight: true
    ifLineOfSightMsg: ''
```

* Situazioni di esempio:
  * Se il giocatore sta guardando direttamente un mob o un altro giocatore entro 50 blocchi, l'attivatore si attiverà.
  * Utile per creare item che funzionano solo quando si mira a un'entità.
* Obbligatorio: NO (Predefinito: false)

:::info
Questa condizione richiede la versione del server **1.14+**.
:::

### ifPlayerMustBeOnHisTown

* **SUPPORTA I SEGUENTI PLUGIN:**
  * Towny
* Descrizione: Controlla se il giocatore si trova nella propria città.
* Esempio:

```yaml
playerConditions:
    ifPlayerMustBeOnHisTown: true
    ifPlayerMustBeOnHisTownMsg: '' #<- Here is where you will add the custom message.
```

* Obbligatorio: NO (Predefinito: false)

### ifPlayerMustBeOnHisClaim

* **SUPPORTA I SEGUENTI PLUGIN:**
  * GriefPrevention
  * Lands
  * GriefDefender
  * Residence
* Descrizione: Controlla se il giocatore si trova in un claim in cui ha il permesso.
* Esempio:

```yaml
playerConditions:
    ifPlayerMustBeOnHisClaim: true
    ifPlayerMustBeOnHisClaimMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il giocatore si trova in un claim di cui è proprietario, l'attivatore si attiverà.
  * Se il giocatore si trova in un claim di cui non è proprietario ma in cui ha il permesso, l'attivatore si attiverà.
* Obbligatorio: NO (Predefinito: false)

### ifPlayerMustBeOnHisClaimOrWilderness

* **SUPPORTA I SEGUENTI PLUGIN:**
  * GriefPrevention (restituisce valido se il giocatore si trova in un claim pubblico di GriefPrevention)
  * Lands
  * GriefDefender
  * Residence
* Descrizione: Controlla se il giocatore si trova in un claim in cui ha il permesso oppure in una zona selvaggia.
* Esempio:

```yaml
playerConditions:
    ifPlayerMustBeOnHisClaimOrWilderness: true
    ifPlayerMustBeOnHisClaimOrWildernessMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il giocatore si trova in un claim di cui è proprietario, l'attivatore si attiverà.
  * Se il giocatore si trova in un claim di cui non è proprietario ma in cui ha il permesso, l'attivatore si attiverà.
  * Se il giocatore si trova in una zona selvaggia, l'attivatore si attiverà.
* Obbligatorio: NO (Predefinito: false)

### ifPlayerMustBeOnHisIsland

* Descrizione: Controlla se il giocatore si trova sulla propria isola.
* **Plugin compatibili:**
  * **IridiumSkyblock**
  * **SuperiorSkyblock2**
  * **BentoBox**
* Esempio:

```yaml
playerConditions:
    ifPlayerMustBeOnHisIsland: true
    ifPlayerMustBeOnHisIslandMsg: '' #<- Here is where you will add the custom message
```

* Situazioni di esempio:
  * Se il giocatore si trova sulla propria isola, l'attivatore si attiverà.
* Obbligatorio: NO (Predefinito: false)

### ifPlayerMustBeOnHisPlot

* **SUPPORTA I SEGUENTI PLUGIN:**
  * PlotSquared
* Descrizione: Controlla se il giocatore si trova su un plot in cui ha il permesso.
* Esempio:

```yaml
playerConditions:
    ifPlayerMustBeOnHisPlot: true
    ifPlayerMustBeOnHisPlotMsg: '' #<- Here is where you will add the custom message
```

* Obbligatorio: NO (Predefinito: false)

### ifCursorDistance

* Descrizione: Controlla se la direzione in cui guarda il giocatore è libera o bloccata
* Esempio:

```yaml
 playerConditions:
  ifCursorDistance: '>5'
  ifCursorDistanceMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * In `">5"`, finché c'è aria oltre 5 blocchi davanti a te, l'attivatore si attiverà
  * In `"<5"`, se ci sono blocchi d'aria a 5 blocchi davanti a te, l'attivatore non si attiverà
* Obbligatorio: NO

![](https://media.ssomar.com/m/docs-img-giphy-mke7zyoe63jbpg2239.gif)

### ifLightLevel <a href="#iflightlevel" id="iflightlevel"></a>

* Descrizione: Controlla se il giocatore si trova in un luogo con il livello di luce corretto
* Esempio:

```yaml
playerConditions:
  ifLightLevel: ==5
  ifLightLevelMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il valore è `<5`, l'attivatore si attiverà solo se il livello di luce nella posizione del giocatore è inferiore a 5
  * Se il valore è `<=5`, l'attivatore si attiverà solo se il livello di luce nella posizione del giocatore è 5 o inferiore.
  * Se il valore è `==13`, l'attivatore si attiverà solo se il livello di luce nella posizione del giocatore è 13.
  * Se il valore è `>5`, l'attivatore si attiverà solo se il livello di luce nella posizione del giocatore è superiore a 5.
  * Se il valore è `>=5`, l'attivatore si attiverà solo se il livello di luce nella posizione del giocatore è 5 o superiore.
* Obbligatorio: NO
* Ulteriori informazioni: Puoi modificare il messaggio di errore aggiungendo questo nel file: `ifLightLevelMsg: "&4&lError you need...."` oppure in game.

Se il valore è `==13`, l'attivatore si attiverà solo se il livello di luce nella posizione del giocatore è 13. 

![Se il valore è ==13, l'attivatore si attiverà solo se il livello di luce nella posizione del giocatore è 13. 
Il messaggio in chat esegue un SENDMESSAGE %player\_light\_level% per indicare il livello di luce nella mia posizione](https://media.ssomar.com/m/docs-img-giphy-krdtyjimugaf88pewk.gif)

### ifPlayerExp

* Descrizione: Controlla se il giocatore ha la quantità indicata di punti esperienza.
* Esempio:

```yaml
playerConditions:
    ifPlayerExp: <8
    ifPlayerExpMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il valore è `<120`, l'attivatore si attiverà solo se i punti esperienza del giocatore sono inferiori a 120
  * Se il valore è `<=96`, l'attivatore si attiverà solo se i punti esperienza del giocatore sono 96 o inferiori.
  * Se il valore è `==13`, l'attivatore si attiverà solo se i punti esperienza del giocatore sono 13.
  * Se il valore è `>696`, l'attivatore si attiverà solo se i punti esperienza del giocatore sono superiori a 696.
  * Se il valore è `>=45`, l'attivatore si attiverà solo se i punti esperienza del giocatore sono 45 o superiori.
* Obbligatorio: NO

### ifPlayerLevel

* Descrizione: Controlla se il giocatore ha la quantità indicata di livelli di esperienza.
* Esempio:

```yaml
playerConditions:
    ifPlayerLevel: <76
    ifPlayerLevelMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il valore è `<700`, l'attivatore si attiverà solo se i punti esperienza del giocatore sono inferiori a 700
  * Se il valore è `<=1296`, l'attivatore si attiverà solo se i punti esperienza del giocatore sono 1296 o inferiori.
  * Se il valore è `==153`, l'attivatore si attiverà solo se i punti esperienza del giocatore sono 5.
  * Se il valore è `>420`, l'attivatore si attiverà solo se i punti esperienza del giocatore sono superiori a 420.
  * Se il valore è `>=99`, l'attivatore si attiverà solo se i punti esperienza del giocatore sono 99 o superiori.
* Obbligatorio: NO

### ifPlayerFoodLevel

* Descrizione: Controlla se il giocatore ha la quantità indicata di cibo
* Esempio:

```yaml
playerConditions:
    ifPlayerFoodLevel: '>=12'
    ifPlayerFoodLevelMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il valore è `<10`, l'attivatore si attiverà solo se il cibo del giocatore è inferiore a 10
  * Se il valore è `<=10`, l'attivatore si attiverà solo se il cibo del giocatore è 10 o inferiore.
  * Se il valore è `==10`, l'attivatore si attiverà solo se il cibo del giocatore è 10.
  * Se il valore è `>10`, l'attivatore si attiverà solo se il cibo del giocatore è superiore a 10.
  * Se il valore è `>=10`, l'attivatore si attiverà solo se il cibo del giocatore è 10 o superiore.
* Obbligatorio: NO

### ifPlayerHealth

* Descrizione: Controlla se il giocatore ha la quantità indicata di salute
* Esempio:

```yaml
playerConditions:
    ifPlayerHealth: ==20
    ifPlayerHealthMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il valore è `<10`, l'attivatore si attiverà solo se la salute del giocatore è inferiore a 10
  * Se il valore è `<=10`, l'attivatore si attiverà solo se la salute del giocatore è 10 o inferiore.
  * Se il valore è `==10`, l'attivatore si attiverà solo se la salute del giocatore è 20.
  * Se il valore è `>10`, l'attivatore si attiverà solo se la salute del giocatore è superiore a 10.
  * Se il valore è `>=10`, l'attivatore si attiverà solo se la salute del giocatore è 10 o superiore.
* Obbligatorio: NO

![Dimostrazione della condizione sulla salute](https://media.ssomar.com/m/docs-img-giphy-lmfxm0llvaeufjsj80.gif)

_Se il valore è `<=10`, l'attivatore si attiverà solo se la salute del giocatore è 10 o inferiore._

### ifPlayerSpeed

* Descrizione: Controlla il modulo della velocità del giocatore (velocità di movimento).
* Esempio:

```yaml
playerConditions:
    ifPlayerSpeed: '>=0.1'
    ifPlayerSpeedMsg: ''
```

* Situazioni di esempio:
  * Se il valore è `>=0.1`, l'attivatore si attiverà solo se il giocatore si sta muovendo.
  * Se il valore è `>=0.3`, l'attivatore si attiverà solo se il giocatore sta scattando o si muove velocemente.
  * Se il valore è `==0`, l'attivatore si attiverà solo se il giocatore è fermo.
* Obbligatorio: NO

### ifPosX

* Descrizione: Controlla se il giocatore si trova al livello X indicato.
* Esempio:

```yaml
playerConditions:
    ifPosX: <76
    ifPosXMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il valore è `<700`, l'attivatore si attiverà solo se il valore della posizione X del giocatore è inferiore a 700
  * Se il valore è `<=1296`, l'attivatore si attiverà solo se il valore della posizione X del giocatore è 1296 o inferiore.
  * Se il valore è `==153`, l'attivatore si attiverà solo se il valore della posizione X del giocatore è 5.
  * Se il valore è `>420`, l'attivatore si attiverà solo se il valore della posizione X del giocatore è superiore a 420.
  * Se il valore è `>=99`, l'attivatore si attiverà solo se il valore della posizione X del giocatore è 99 o superiore.
* Obbligatorio: NO

### ifPosY

* Descrizione: Controlla se il giocatore si trova al livello Y indicato.
* Esempio:

```yaml
playerConditions:
    ifPosY: <76
    ifPosYMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il valore è `<700`, l'attivatore si attiverà solo se il valore della posizione Y del giocatore è inferiore a 700
  * Se il valore è `<=1296`, l'attivatore si attiverà solo se il valore della posizione Y del giocatore è 1296 o inferiore.
  * Se il valore è `==153`, l'attivatore si attiverà solo se il valore della posizione Y del giocatore è 5.
  * Se il valore è `>420`, l'attivatore si attiverà solo se il valore della posizione Y del giocatore è superiore a 420.
  * Se il valore è `>=99`, l'attivatore si attiverà solo se il valore della posizione Y del giocatore è 99 o superiore.
* Obbligatorio: NO

### ifPosZ

* Descrizione: Controlla se il giocatore si trova al livello Z indicato.
* Esempio:

```yaml
playerConditions:
    ifPosZ: <76
    ifPosZMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il valore è `<700`, l'attivatore si attiverà solo se il valore della posizione Z del giocatore è inferiore a 700
  * Se il valore è `<=1296`, l'attivatore si attiverà solo se il valore della posizione Z del giocatore è 1296 o inferiore.
  * Se il valore è `==153`, l'attivatore si attiverà solo se il valore della posizione Z del giocatore è 5.
  * Se il valore è `>420`, l'attivatore si attiverà solo se il valore della posizione Z del giocatore è superiore a 420.
  * Se il valore è `>=99`, l'attivatore si attiverà solo se il valore della posizione Z del giocatore è 99 o superiore.
* Obbligatorio: NO

### ifNearbyEntityCount

* Descrizione: Controlla il numero di entità in un raggio di 10 blocchi attorno al giocatore.
* Esempio:

```yaml
playerConditions:
    ifNearbyEntityCount: '>=3'
    ifNearbyEntityCountMsg: ''
```

* Situazioni di esempio:
  * Se il valore è `>=3`, l'attivatore si attiverà solo se ci sono almeno 3 entità vicino al giocatore.
  * Se il valore è `==0`, l'attivatore si attiverà solo se il giocatore è solo, senza entità nelle vicinanze.
  * Conta tutti i tipi di entità (mob, giocatori, item a terra, ecc.).
* Obbligatorio: NO

### ifNearbyPlayerCount

* Descrizione: Controlla il numero di giocatori in un raggio di 10 blocchi attorno al giocatore.
* Esempio:

```yaml
playerConditions:
    ifNearbyPlayerCount: '>=1'
    ifNearbyPlayerCountMsg: ''
```

* Situazioni di esempio:
  * Se il valore è `>=1`, l'attivatore si attiverà solo se c'è almeno 1 altro giocatore nelle vicinanze.
  * Se il valore è `==0`, l'attivatore si attiverà solo se nessun altro giocatore si trova entro 10 blocchi.
  * A differenza di ifNearbyEntityCount, conta solo i giocatori, non i mob o altre entità.
* Obbligatorio: NO

### ifHasPermission - Not

* Descrizione: Controlla se il giocatore (non) ha il permesso indicato.
* Esempio:

```yaml
playerConditions:   
    ifHasPermission:
    - test.ei
    ifHasPermissionMsg: '' #<- Here is where you will add the custom message.
    ifNotHasPermission:
    - test.ei
    ifNotHasPermissionMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il giocatore ha il permesso `custom.jump.yes`, l'attivatore si attiverà. Se il giocatore non ha quel permesso, non si attiverà.
  * **In questa gif la condizione reale non viene usata, per mostrare correttamente il comportamento della condizione. Quando usi davvero questa condizione, ti viene mostrato un errore specifico**
* Obbligatorio: NO

:::warning
**Per testarla è meglio non essere OP, perché se sei OP hai tutti i permessi**
:::

![](https://media.ssomar.com/m/docs-img-giphy-iti1b991tskaavjoy7.gif)

### ifHasTag - Not

* Descrizione: Controlla se il giocatore ha il tag selezionato.
* Esempio:

```yaml
    playerConditions:
      ifHasTag:
      - thisisthenameofmytag
      ifHasTagMsg: ''
      ifNotHasTag:
      - thisisthenameofmytag
      ifNotHasTagMsg: ''
```

### ifTargetBlock - Not

* Descrizione: Controlla se il giocatore (non) sta selezionando il blocco indicato.
* Esempio:

```yaml
playerConditions:
    ifTargetBlock:
    - SAND
    ifTargetBlockMsg: '' #<- Here is where you will add the custom message.
    ifNotTargetBlock:
    - DIRT
    ifNotTargetBlockMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il giocatore sta puntando il cursore sulla sabbia, l'attivatore si attiverà.
* Obbligatorio: NO

![](https://media.ssomar.com/m/docs-img-giphy-hgontsuwxflzmtgxny.gif)

### ifIsInTheBlock - Not

* Descrizione: Controlla se il giocatore (non) si trova in un blocco.
* Esempio:

```yaml
playerConditions:
    ifIsInTheBlock:
     material0:
       material: COBWEB
    ifIsInTheBlockMsg: '' #<- Here is where you will add the custom message.
    ifIsNotInTheBlock:
     material0:
       material: WATER
       tags: '{level:0}'
    ifIsNotInTheBlockMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il giocatore si trova in una COBWEB (testa o piedi), l'attivatore si attiverà.
  * Finché il giocatore non è più di 1 blocco più in alto rispetto al blocco in cui si trova, l'attivatore si attiverà
* Obbligatorio: NO (Predefinito: false)

Per le specifiche dei tag, consulta questa lista:

[https://minecraft.fandom.com/wiki/Block_states](https://minecraft.fandom.com/wiki/Block_states)

### ifIsOnTheBlock - Not

* Descrizione: Controlla se il giocatore (non) si trova sopra un blocco.
* Esempio:

```yaml
playerConditions:
    ifIsOnTheBlock:
        blocks:
        - EXECUTABLEBLOCKS:FREE_HUT
        - DIAMOND_BLOCK
```

* Situazioni di esempio:
  * Se il giocatore ha della pietra sotto i piedi, l'attivatore si attiverà.
  * Finché il giocatore non è più di 1 blocco più in alto rispetto al blocco su cui si trova, l'attivatore si attiverà
* Obbligatorio: NO (Predefinito: false)

![](https://media.ssomar.com/m/docs-img-giphy-774fpgzucmhox69sww.gif)

<details>

<summary>Puoi aggiungere un gruppo di blocchi, questi sono i gruppi:</summary>

```
    ALL_CHESTS,
    ALL_FURNACES,
    ALL_PLANKS,
    ALL_LOGS,
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
    ALL_GLASS,
    ALL_STAINED_GLASS,
    ALL_SHULKER_BOXES;
```

</details>

Per le specifiche dei tag, consulta questa lista:

[https://minecraft.fandom.com/wiki/Block_states](https://minecraft.fandom.com/wiki/Block_states)

:::info
Supporta i blocchi di IA e EB
:::

### ifPlayerMounts - Not

* Descrizione: Controlla se il giocatore (non) sta cavalcando le "entità selezionate"
* Esempio:

```yaml
playerConditions:
    ifPlayerMounts:
    - COW
    - SILVERFISH
    - FOX
    ifPlayerMountsMsg: '&4&l&o[ExecutableItems] &cYou must mount on a specific entity to active the activator: &6%activator% &cof this item!'
    
    ifPlayerNotMounts:
    - PIG
    ifPlayerNotMountsMsg: '&4&l&o[ExecutableItems] &cdont mount pigs'
```

### ifInBiome - Not

* Descrizione: Controlla se il giocatore (non) si trova nel bioma indicato.
* Esempio:

```yaml
playerConditions:
    ifInBiome:
    - TAIGA
    - EXTREME_HILLS
    ifInBiomeMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInBiome:
    - EXTREME_HILLS
    ifNotInBiomeMsg: '' #<- Here is where you will add the custom message.
```

*   Situazioni di esempio:

    * Se il giocatore si trova nel bioma Birch Forest e il bioma Birch Forest è presente nell'elenco dei mondi della condizione `ifInBiome:`, l'attivatore si attiverà.

[Bioma](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html)

* Obbligatorio: NO

![](https://media.ssomar.com/m/docs-img-giphy-heszwx2lktnut8abdx.gif)

### ifInRegion - Not

* Descrizione: Controlla se il giocatore (non) si trova nella regione indicata (regione di WorldGuard).
* Esempio:

```yaml
playerConditions:
    ifInRegion:
    - area1
    ifInRegionMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInRegion:
    - mySpawnRegion
    ifNotInRegionMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il giocatore si trova nella regione "area1" e la regione "area1" è presente nell'elenco dei mondi della condizione `ifInRegion:`, l'attivatore si attiverà.
* Obbligatorio: NO

![](https://media.ssomar.com/m/docs-img-giphy-rn75fb0fgshrjizbce.gif)

### ifInWorld - Not

* Descrizione: Controlla se il giocatore (non) si trova nel mondo indicato.
* Esempio:

```yaml
playerConditions:
    ifInWorld:
    - world_nether
    ifInWorldMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInWorld:
    - world_the_end
    ifNotInWorldMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il giocatore si trova nel Nether e il Nether è presente nell'elenco dei mondi della condizione `ifInWorld:`, l'attivatore si attiva.
* Obbligatorio: NO

![](https://media.ssomar.com/m/docs-img-giphy-zghtf0hlk1npsywmnz.gif)

### ifPlayerHasEffect

* Descrizione: Controlla se il giocatore ha gli effetti indicati.
* Esempio:

```yaml
playerConditions:
    ifPlayerHasEffect:
    - "SPEED:0"        <- (Format: "EFFECT:MINIMAL_REQUIRED_AMPLIFIER") 
    ifPlayerHasEffectMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il giocatore ha velocità con **almeno un amplificatore pari a 0**, l'attivatore si attiverà
* Elenco di tutti gli effetti: [PotionEffectType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
* Obbligatorio: NO


### ifPlayerNotHasEffect

* Descrizione: Controlla se il giocatore non ha gli effetti indicati.
* Esempio:

```yaml
playerConditions:
    ifPlayerNotHasEffect:
    - SPEED:2 # if the player has speed 1 = okay, but if has speed 2 or above, invalid
    ifPlayerNotHasEffectMsg: '&4&l&o[ExecutableItems] &cYou have an effect that you shouldn''t have to active the activator: &6%activator% &cof this item!'
    ifPlayerNotHasEffectCE: false
```

### ifCanBreakTargetedBlock

* Descrizione: Controlla se il giocatore può rompere il blocco bersaglio. Quando l'attivatore ha un blocco (rottura di un blocco, piazzamento di un blocco, clic su un blocco…), viene controllato quel blocco; altrimenti viene controllato il blocco che il giocatore sta guardando (5 blocchi al massimo).
* Esempio:

```yaml
playerConditions:
    ifCanBreakTargetedBlock: true
```

:::info
Supporta GriefPrevention, IridiumSkyblock, SuperiorSkyblock, BentoBox, Lands, Worldguard, Towny, ProtectionStones; Residence
:::

### ifPlayerHasEffectEquals

* Descrizione: Controlla se il giocatore ha gli effetti indicati. **DEVE AVERE L'AMPLIFICATORE ESATTO**
* Esempio:

```yaml
playerConditions:
    ifPlayerHasEffectEquals:
    - "SPEED:1"        #<- (Format: "EFFECT:REQUIRED_AMPLIFIER") 
    ifPlayerHasEffectEqualsMsg: '' #<- Here is where you will add the custom message.
```

* Situazioni di esempio:
  * Se il giocatore ha velocità con **un amplificatore pari a 1**, l'attivatore si attiverà
* Elenco di tutti gli effetti: [PotionEffectType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
* Obbligatorio: NO


### ifPlayerHasExecutableItems - Not

* Descrizione: Controlla se il giocatore (non) ha gli ExecutableItems indicati.
* Esempio:

```yaml
playerConditions:
      ifHasExecutableItems:
        condition1:
          multi-choices:
            '1':
              executableItem: test1
              amount: 1
              detailedSlots:
              - 38
            '2':
              executableItem: test2
              amount: 1
              detailedSlots:
              - 38
            '3':
              executableItem: test3
              amount: 1
              detailedSlots:
              - 38
        condition2:
          executableItem: ddx
          amount: 1
          detailedSlots:
          - 40
      ifHasExecutableItemsMsg: war
      ifHasNotExecutableItems:
        hasExecutableItem0:
          executableItem: Leto2025_Srdcova10
          amount: 1
          detailedSlots: []
      ifHasNotExecutableItemsMsg: famine
```

* L'esempio qui sopra funziona così. 
  * Devi avere un item ei con id "test1", "test2" o "test3" nello slot 38, e l'attivatore viene eseguito
  * Devi avere un item ei con id "ddx" nello slot 40
* Obbligatorio: NO

![](https://media.ssomar.com/m/docs-img-imgur-kaww8n0.png)

:::info
Copia correttamente l'indice dell'esempio: alcune persone hanno chiesto supporto e nessuna di loro aveva copiato correttamente il formato.
:::

### ifPlayerHasItem - Not

* Descrizione: Controlla se il giocatore (non) ha item specifici
* Esempio:

```yaml
playerConditions:
    ifHasItems:
        condition1:
          multi-choices:
            '1':
              material: DIAMOND_HELMET
              amount: 1
              detailedSlots:
              - 39
            '2':
              material: IRON_HELMET
              amount: 1
              detailedSlots:
              - 39
        condition2:
          material: DIAMOND_CHESTPLATE
          amount: 1
          detailedSlots:
          - 38
    ifHasItemMsg: '' #<- Here is where you will add the custom message.
    
    ifHasNotItems:
        hasItem0:
          material: STONE
          amount: 32
          detailedSlots:
          - -1 #<- -1 means main hand
    ifHasNotItemMsg: '&cYou should not have more than 32 stones in your main hand !'
```

* Situazioni di esempio:
  * Se l'elmo di diamante si trova nello slot 39, l'attivatore si attiverà
* Obbligatorio: NO
