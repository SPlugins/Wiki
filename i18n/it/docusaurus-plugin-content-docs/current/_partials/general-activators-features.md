---
description: >-
  Scopri come configurare un attivatore in ExecutableItems: nome, modifica
  dell'usage, cooldown, cancelEvent e requisiti come denaro, livelli, esperienza
  e mana.
source_hash: a103e5315ef03316
translated_at: '2026-11-13T17:46:35.235Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### Display name dell'attivatore

* Info: Valore stringa del display name dell'attivatore. Ha poca utilità, serve allo sviluppatore per riconoscere un attivatore dall'altro. Compare anche nel messaggio predefinito "timeLeft" all'interno del file locale.yml.
* Esempio: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    name: '&eThor activator'
```

### Modifica dell'usage dell'attivatore <CustomTag type="premium" />

* Info: Funzionalità molto importante: il valore dell'usage dell'item verrà modificato da questo valore intero. Questo significa che, se il valore è positivo, l'usage aumenterà, mentre se è negativo l'usage diminuirà.
* Esempio: (Aumenta di 1 il valore dell'usage ogni volta che questo attivatore viene attivato)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    usageModification: 1
```

### Modifica delle variabili

* Info: È una lista di modifiche alle variabili da applicare alle variabili all'interno del tuo item. È utile, ad esempio, per aumentare il valore di una variabile, per sovrascrivere un vecchio valore di una variabile con un altro, ecc.
  * `variableName`: Nome della variabile a cui è rivolta la variableModification
  * `type`: Tipo di variableModification che stai usando
    * SET: Sovrascrive il vecchio valore della variabile e imposta il valore della modifica.
    * ADD: Applica un'operazione matematica al valore attuale della variabile usando il valore della modifica. Richiede che la variabile sia di tipo NUMBER. Se il valore della modifica è positivo il valore aumenterà, se è negativo diminuirà.
    * LIST\_ADD: Applicato alle variabili di tipo LIST, aggiunge il valore della modifica alla lista della variabile.
    * LIST\_CLEAR: Applicato alle variabili di tipo LIST, svuota la lista della variabile.
    * LIST\_REMOVE: Applicato alle variabili di tipo LIST, rimuove il valore della modifica dalla lista della variabile.
  * `modification`: Valore della modifica. Viene applicato alla variabile usando i tipi di modifica.
* Esempio:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of targethp to 20
        variableName: targethp 
        type: SET
        modification: 20
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by increasing it on 1
        variableName: hit
        type: MODIFICATION
        modification: 1
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by decreasing it on 1
        variableName: durability
        type: MODIFICATION
        modification: -1
```

* Fai attenzione quando usi i placeholder qui! Non ci sono problemi, assicurati solo che l'output restituito sia un NUMBER, altrimenti dovrai usare le funzionalità STRING. Ad esempio, aggiorniamo una variableModification tramite un'altra variabile che sappiamo restituire un NUMBER.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the bullets to the value of the variable max bullets, as if I was reloading a gun
        variableName: currentBullets
        type: SET
        modification: '%var_maxbullets_int%'
```

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the current bullets by the variable bullets per shot, so its decreasing our bullets depending on the amount of bullets we are firing
        variableName: currentBullets
        type: MODIFICATION
        modification: '-%var_bulletspershot%'
```

### cancelEvent

* Info: Valore booleano che indica se l'evento collegato all'attivatore verrà annullato oppure no.
  * Può essere difficile da capire, credo sia una delle cose che la maggior parte delle persone non comprende, ma per spiegarla devi sapere che ogni ATTIVATORE è collegato a un evento di Minecraft: l'evento si verifica e poi l'ATTIVATORE viene attivato. Se abilitiamo cancelEvent, che è una funzionalità dell'attivatore, l'evento si verifica, quasi nello stesso momento l'attivatore viene attivato e annulla l'evento, quindi l'attivatore continua a eseguire tutte le sue funzionalità abilitate ma l'evento non avviene, perché viene annullato. Ad esempio:
    * Se l'attivatore è PLAYER\_HIT\_PLAYER e abilitiamo cancelEvent, il giocatore non potrà colpire un altro giocatore perché tutti i colpi vengono annullati/ignorati.
    * Se l'attivatore è PLAYER\_BLOCK\_BREAK e abilitiamo cancelEvent, il giocatore non potrà rompere blocchi perché l'evento viene annullato/ignorato. 
* Esempio: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BLOCK_BREAK
    cancelEvent: true
```

### noActivatorRunIfTheEventIsCancelled

* Info: Valore booleano che, se abilitato, impedisce all'attivatore di essere eseguito se un altro plugin ha già annullato l'evento che lo attiva.
  * È utile quando hai plugin come WorldGuard che annullano gli eventi di danno (ad esempio nelle zone non PvP) o altri ExecutableItems che annullano gli eventi di danno (ad esempio degli stivali con PLAYER\_RECEIVE\_HIT\_GLOBAL + cancelEvent). Senza questa funzionalità, attivatori come PLAYER\_BEFORE\_DEATH verrebbero comunque attivati anche se il danno è stato annullato, perché reagiscono al calcolo grezzo del danno e non al risultato finale.
  * Un caso d'uso comune è un item personalizzato Totem of Undying che usa PLAYER\_BEFORE\_DEATH. Senza questa funzionalità abilitata, il totem si attiverebbe e verrebbe consumato anche quando il giocatore si trova in una zona protetta da WorldGuard in cui il danno è annullato, sprecando l'item. Abilitare questa funzionalità garantisce che il totem si attivi solo in caso di danno letale effettivo.
* Esempio:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BEFORE_DEATH
    noActivatorRunIfTheEventIsCancelled: true
```

### silenceOutput

* Info: Valore booleano che fa sì che tutti i comandi eseguiti dalle funzionalità di comandi come (playerCommands, blockCommands, entityCommands e targetCommands) non abbiano alcun output nella **console**.
  * Ad esempio, usando il comando vanilla di Minecraft effect give \[...] normalmente si ha un output nella console con questo formato: "Applied effect strength to \<playerName>"; per disabilitare questo output puoi abilitare questa funzionalità    
* Esempio: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activator    
    playerCommands:
    - effect give %player% strength 5 5
    silenceOutput: true
```

* È importante capire che questa funzionalità è pensata per disabilitare l'output dei comandi vanilla: se usi il comando di un altro plugin e questo ha un output nella console, non spetta a noi risolverlo, dovrebbe essere l'altro plugin a fornirti un modo per nascondere quei messaggi. In ogni caso, siccome siamo gentili, hai un modo per personalizzare quali messaggi nascondere, così puoi avere i messaggi predefiniti silenziati da silenceOutput + i messaggi personalizzati che vorresti aggiungere. Questo processo è gestito dal file di config di Score, trovi maggiori informazioni qui e come farlo qui [Config generale](/tools-for-all-plugins-score/score/general-config).

## Cooldown

### Cooldown del giocatore

* Info: Le opzioni del cooldown definiscono il cooldown applicato al giocatore che ha attivato questo attivatore, per questo attivatore.
* Se l'attivatore è PLAYER\_RIGHT\_CLICK, ha dei comandi \[] e il cooldown è di 30 secondi, quando il giocatore attiva questo attivatore dovrà attendere 30 secondi prima di poterlo attivare di nuovo. Questo non impedisce ad altri giocatori di eseguirlo in quei 30 secondi, purché anche loro non siano in cooldown. È una funzionalità per singolo giocatore
  * `cooldown`: Valore intero che rappresenta la durata del cooldown per questo attivatore.
  * `isCooldownInTicks`: Valore booleano che imposta il tempo del cooldown in tick (20 tick = 1 secondo)
  * `cooldownMsg`: Valore stringa da mostrare quando il giocatore prova ad attivare l'attivatore mentre è in cooldown
  * `displayCooldownMessage`: Valore booleano per consentire o impedire la visualizzazione del messaggio cooldownMsg se il giocatore prova ad attivare l'attivatore mentre è in cooldown.
    * Placeholder utilizzabili:
      * %time% -> l'intero cooldown in secondi
      * %time\_H% -> la parte delle ore del cooldown
      * %time\_M% -> la parte dei minuti del cooldown
      * %time\_S% -> la parte dei secondi del cooldown 
  * `cancelEventIfInCooldown`: Valore booleano che annulla l'evento dell'attivatore se il giocatore è in cooldown. Questo significa che, se l'attivatore è PLAYER\_HIT\_ENTITY, mentre è in cooldown tutti gli eventi PLAYER\_HIT\_ENTITY del giocatore verranno annullati e quindi ignorati, disabilitando la capacità del giocatore di attaccare le entità (promemoria: questo attivatore ha come bersaglio tutte le entità tranne i giocatori)
  * `pauseWhenOffline`: Valore booleano che mette in pausa il cooldown se il giocatore è offline. Per capirlo meglio: se è false, il tempo del cooldown non si ferma, quindi il giocatore può uscire dal server, aspettare il cooldown e rientrare e potrà attivare di nuovo l'attivatore. Ma se questa funzionalità è abilitata e il giocatore è uscito dal server mentre era in cooldown, quando rientra avrà lo stesso tempo di cooldown rimanente che aveva quando è uscito.
  * `pausePlaceholdersConditions`: È simile a pauseWhenOffline ma mette in pausa solo in base a determinate placeholdersConditions. Un esempio d'uso sarebbe mettere in pausa il cooldown se il giocatore ha il rank VIP, così il rank VIP ha accesso a quella funzionalità.
  * `enableVisualCooldown`: Abilita un cooldown visivo per l'item.
* Esempio: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    cooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      pauseWhenOffline: false
      pausePlaceholdersConditions: {}
      enableVisualCooldown: false
```

### Cooldown globale

* Info: È la stessa idea del cooldown, ma invece di essere applicato al giocatore è un cooldown globale applicato a tutti i giocatori. Questo significa che, se qualcuno attiva l'attivatore e questo ha 30 secondi di cooldown globale, nessuno potrà usarlo finché quei 30 secondi non saranno trascorsi. Ha le stesse funzionalità del cooldown.
  * `cooldown`: Valore intero che rappresenta la durata del cooldown per questo attivatore.
  * `isCooldownInTicks`: Valore booleano che imposta il tempo del cooldown in tick (20 tick = 1 secondo)
  * `cooldownMsg`: Valore stringa da mostrare quando un giocatore prova ad attivare questo attivatore mentre è in cooldown
  * `displayCooldownMessage`: Valore booleano per consentire o impedire la visualizzazione del messaggio cooldownMsg se il giocatore prova ad attivare l'attivatore mentre è in cooldown.
    * Placeholder utilizzabili:
      * %time% -> l'intero cooldown in secondi
      * %time\_H% -> la parte delle ore del cooldown
      * %time\_M% -> la parte dei minuti del cooldown
      * %time\_S% -> la parte dei secondi del cooldown 
  * `cancelEventIfInCooldown`: Valore booleano che annulla l'evento dell'attivatore se il giocatore è in cooldown. Questo significa che, se l'attivatore è PLAYER\_HIT\_ENTITY, mentre è in cooldown tutti gli eventi PLAYER\_HIT\_ENTITY del giocatore verranno annullati e quindi ignorati, disabilitando la capacità del giocatore di attaccare le entità (promemoria: questo attivatore ha come bersaglio tutte le entità tranne i giocatori)
  * `enableVisualCooldown`: Abilita un cooldown visivo per l'item.
* Esempio:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    globalCooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      enableVisualCooldown: false
```

## Funzionalità richieste <CustomTag type="premium" />

Questa sezione serve a configurare le funzionalità relative ai requisiti necessari per poter attivare l'attivatore. Questo significa che, se l'evento si verifica, l'attivatore verrà eseguito solo se il giocatore soddisfa questa configurazione richiesta. Gli item verranno consumati nel processo.

* Se non vuoi che gli item vengano consumati, non usare la funzionalità "required" ma usa le condizioni, che sono solo condizioni e non consumano.

### requiredExecutableItems <CustomTag type="premium" />

* Info: Questa funzionalità consente all'attivatore di avere come requisito uno o più ExecutableItem. Se il giocatore soddisfa questo requisito, il requisito verrà consumato e l'attivatore verrà eseguito.
  * `cancelEventIfError`: Valore booleano che indica se l'evento verrà annullato quando il giocatore non soddisfa il requisito.
    * Questo significa, ad esempio, che se c'è un evento PLAYER\_HIT\_ENTITY e questo si verifica ma il giocatore non ha i requisiti per attivare l'attivatore, se questa funzionalità è abilitata l'evento PLAYER\_HIT\_ENTITY verrà annullato, quindi anche se il giocatore sta cliccando/colpendo l'entità, questa non subisce danni perché in realtà l'evento non si verifica, essendo annullato.
  * `errorMessage`: Messaggio stringa che verrà inviato al giocatore se non soddisfa il requisito.
  * `executableItem`: ID dell'ExecutableItem necessario come requisito
  * `amount`: Numero intero che indica la quantità di item necessari come requisito.
  * `usageConditions`: Condizione stringa facoltativa nel formato `(==, !=, >, <, >=, <=){number}` relativa alla condizione dell'usage dell'ExecutableItem.
    * Questo significa che, se la condizione è >=5, il requisito è che l'ExecutableItem scelto si trovi nell'inventario del giocatore, essendo un requisito, ma deve anche avere un usage maggiore o uguale a 5.
* Esempio:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExecutableItems:
      requiredEI0: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: moon
        amount: 1
        usageConditions: '>=5'
      requiredEI1: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: sun
        amount: 1
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredItems <CustomTag type="premium" />

* Info: Questa funzionalità consente all'attivatore di avere come requisito uno o più item vanilla. Se il giocatore soddisfa questo requisito, il requisito verrà consumato e l'attivatore verrà eseguito.
  * `cancelEventIfError`: Valore booleano che indica se l'evento verrà annullato quando il giocatore non soddisfa il requisito.
    * Questo significa, ad esempio, che se c'è un evento PLAYER\_HIT\_ENTITY e questo si verifica ma il giocatore non ha i requisiti per attivare l'attivatore, se questa funzionalità è abilitata l'evento PLAYER\_HIT\_ENTITY verrà annullato, quindi anche se il giocatore sta cliccando/colpendo l'entità, questa non subisce danni perché in realtà l'evento non si verifica, essendo annullato.
  * `errorMessage`: Messaggio stringa che verrà inviato al giocatore se non soddisfa il requisito.
  * `material`: MATERIAL vanilla necessario come requisito.
  * `amount`: Numero intero che indica la quantità di item necessari come requisito.
  * `notExecutableItem`: Valore booleano per rendere il requisito soddisfabile o meno da un ExecutableItem.
    * Questo significa che, se il requisito è STONE e questa funzionalità non è abilitata, il requisito sarà soddisfatto sia da STONE vanilla sia da ExecutableItem con material STONE, che verranno quindi consumati. Se non vuoi che accada, abilita questa funzionalità.
* Esempio:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredItems:
      requiredItem0: # requiredItem ID, you can create as many requiredItem on the requiredItems
        material: STONE
        amount: 1
        notExecutableItem: true
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredMoney <CustomTag type="premium" />

* Info: Questa funzionalità richiede il plugin chiamato "Vault". Questa funzionalità consente all'attivatore di avere come requisito del denaro di Vault. Se il giocatore soddisfa questo requisito, il requisito verrà consumato e l'attivatore verrà eseguito.
  * `cancelEventIfError`: Valore booleano che indica se l'evento verrà annullato quando il giocatore non soddisfa il requisito.
    * Questo significa, ad esempio, che se c'è un evento PLAYER\_HIT\_ENTITY e questo si verifica ma il giocatore non ha i requisiti per attivare l'attivatore, se questa funzionalità è abilitata l'evento PLAYER\_HIT\_ENTITY verrà annullato, quindi anche se il giocatore sta cliccando/colpendo l'entità, questa non subisce danni perché in realtà l'evento non si verifica, essendo annullato.
  * `errorMessage`: Messaggio stringa che verrà inviato al giocatore se non soddisfa il requisito.
  * `requiredMoney`: Valore float che rappresenta la quantità di denaro necessaria come requisito.
* Esempio:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMoney:
      requiredMoney: 1200.0
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredLevel <CustomTag type="premium" />

* Info: Questa funzionalità consente all'attivatore di avere come requisito i livelli di esperienza vanilla. Se il giocatore soddisfa questo requisito, il requisito verrà consumato e l'attivatore verrà eseguito. Non confondere i livelli di esperienza con l'esperienza, maggiori informazioni qui [Esperienza](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`: Valore booleano che indica se l'evento verrà annullato quando il giocatore non soddisfa il requisito.
    * Questo significa, ad esempio, che se c'è un evento PLAYER\_HIT\_ENTITY e questo si verifica ma il giocatore non ha i requisiti per attivare l'attivatore, se questa funzionalità è abilitata l'evento PLAYER\_HIT\_ENTITY verrà annullato, quindi anche se il giocatore sta cliccando/colpendo l'entità, questa non subisce danni perché in realtà l'evento non si verifica, essendo annullato.
  * `errorMessage`: Messaggio stringa che verrà inviato al giocatore se non soddisfa il requisito.
  * `requiredLevel`: Valore intero che rappresenta la quantità di livelli di esperienza vanilla di Minecraft necessari come requisito.
* Esempio:

```yaml
 activators:  
  activator1: # Activator ID, you can create as many activators on the activator
     requiredLevel:
      requiredLevel: 50
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### requiredExperience <CustomTag type="premium" />

* Info: Questa funzionalità consente all'attivatore di avere come requisito l'esperienza vanilla di Minecraft. Se il giocatore soddisfa questo requisito, il requisito verrà consumato e l'attivatore verrà eseguito. Non confondere l'esperienza con i livelli di esperienza, sono cose diverse, maggiori informazioni in [Esperienza](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`: Valore booleano che indica se l'evento verrà annullato quando il giocatore non soddisfa il requisito.
    * Questo significa, ad esempio, che se c'è un evento PLAYER\_HIT\_ENTITY e questo si verifica ma il giocatore non ha i requisiti per attivare l'attivatore, se questa funzionalità è abilitata l'evento PLAYER\_HIT\_ENTITY verrà annullato, quindi anche se il giocatore sta cliccando/colpendo l'entità, questa non subisce danni perché in realtà l'evento non si verifica, essendo annullato.
  * `errorMessage`: Messaggio stringa che verrà inviato al giocatore se non soddisfa il requisito.
  * `requiredExperience`: Valore intero che rappresenta la quantità di esperienza necessaria come requisito.
* Esempio:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExperience:
      requiredExperience: 20
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### RequiredMana <CustomTag type="premium" />

* Info: Questa funzionalità consente all'attivatore di avere come requisito il mana di [**AureliumSkills**](https://www.spigotmc.org/resources/auraskills.81069/), [**MMOCore**](https://www.spigotmc.org/resources/%E2%AD%90-mmocore-%E2%AD%90-classes-skills-levels-skill-trees-professions-mana-waypoints.70575/) e [**AuraSkills**](https://www.spigotmc.org/resources/auraskills.81069/). Se il giocatore soddisfa questo requisito, il requisito verrà consumato e l'attivatore verrà eseguito.
  * `cancelEventIfError`: Valore booleano che indica se l'evento verrà annullato quando il giocatore non soddisfa il requisito.
    * Questo significa, ad esempio, che se c'è un evento PLAYER\_HIT\_ENTITY e questo si verifica ma il giocatore non ha i requisiti per attivare l'attivatore, se questa funzionalità è abilitata l'evento PLAYER\_HIT\_ENTITY verrà annullato, quindi anche se il giocatore sta cliccando/colpendo l'entità, questa non subisce danni perché in realtà l'evento non si verifica, essendo annullato.
  * `errorMessage`: Messaggio stringa che verrà inviato al giocatore se non soddisfa il requisito.
  * `requiredMana`: Valore intero che rappresenta la quantità di mana necessaria come requisito.
* Esempio:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMana:
      requiredMana: 10
      errorMessage: '&c You dont meet the requirement'
```

:::info
Compatibile con AureliumSkills, MMOCore e AuraSkills
:::

### RequiredMagic (EcoSkills) <CustomTag type="premium" />

* Info: Questa funzionalità consente all'attivatore di avere come requisito la magia di [**EcoSkills**](https://www.spigotmc.org/resources/ecoskills-%E2%AD%95-addictive-mmorpg-skills-%E2%9C%85-create-skills-stats-effects-mana-%E2%9C%A8-plug-play.95541/). Se il giocatore soddisfa questo requisito, il requisito verrà consumato e l'attivatore verrà eseguito.
  * `cancelEventIfError`: Valore booleano che indica se l'evento verrà annullato quando il giocatore non soddisfa il requisito.
    * Questo significa, ad esempio, che se c'è un evento PLAYER\_HIT\_ENTITY e questo si verifica ma il giocatore non ha i requisiti per attivare l'attivatore, se questa funzionalità è abilitata l'evento PLAYER\_HIT\_ENTITY verrà annullato, quindi anche se il giocatore sta cliccando/colpendo l'entità, questa non subisce danni perché in realtà l'evento non si verifica, essendo annullato.
  * `errorMessage`: Messaggio stringa che verrà inviato al giocatore se non soddisfa il requisito.
  * `magicID`: L'ID della magia in EcoSkills.
  * `amount`: Quantità di magia del magicID necessaria come requisito.

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMagics:
      requiredMagic_0: # requiredMagic ID, you can create as many requiredMagic on the requiredMagics
        magicID: mana
        amount: 70
      errorMessage: '&c You dont meet the requirement'
```
