---
description: >-
  Scopri tutti i comandi e i permessi di ExecutableItems: creazione, give, drop,
  modifica, ricarica e debug degli item, con la sintassi di ogni comando.
source_hash: 30fd8157fcb56ff1
translated_at: '2026-11-13T17:37:28.828Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# ⌨️ Comandi e permessi

In questa pagina scoprirai i comandi e i permessi del plugin ExecutableItems.

Le funzionalità premium sono contrassegnate dal tag:  <CustomTag type="premium" />

## Permessi

**CONSIGLIO per i principianti:**

:::info
Per dare i permessi di tutti gli item, ti consiglio di scaricare un plugin per i permessi come [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/). Una volta installato, ti basta dare il permesso **`ei.item.*`**; per Luckperms il comando è **`/lp group default permission set ei.item.* true`**
:::

#### Permesso dell'item

* Info: permesso che permette a un giocatore di usare un ExecutableItems.
  * Permesso per usare uno specifico ID di ExecutableItem: `ei.item.{id}`
  * Permesso per usare tutti gli ExecutableItems: `ei.item.*` 
  * Permesso negativo per vietare uno specifico ID di ExecutableItems: `-ei.item.{id}` <CustomTag type="premium" />
* Esempio: `ei.item.test`

#### Permesso per ignorare il cooldown

* Info: permesso che permette a un giocatore di non avere cooldown mentre usa un ExecutableItems. 
  * Durante i test devi provare senza essere op/operatore/admin.
  * Permesso per ignorare il cooldown di uno specifico ID di ExecutableItems: `ei.nocd.{id}`
  * Permesso per ignorare il cooldown di tutti gli ExecutableItems: `ei.nocd.*`
* Esempio: `ei.nocd.test`

#### Tutti i permessi

* Info: permesso che concede tutti i permessi di ExecutableItems.
  * Fai attenzione! Questo concede letteralmente ogni permesso, compresi quelli da amministratore.
  * Permesso: `ei.*`
* Se vuoi concedere un permesso specifico, continua a leggere qui sotto: ogni comando è descritto con il proprio permesso.

#### Permessi di tutti i comandi

* Info: permesso che concede i permessi di tutti i comandi di ExecutableItems.
  * Permesso: `ei.cmds`
* Se vuoi concedere un permesso specifico, continua a leggere qui sotto: ogni comando è descritto con il proprio permesso.

## Comandi

Qui scoprirai i comandi di ExecutableItems. Nella spiegazione ci saranno alcune parole che si ripeteranno, eccole:

* SsomarPluginsItem: è l'ID di un ExecutableItem che hai creato, ad esempio "Excalibur", "SuperPickaxe", "turtle", "12345": questo nome lo stabilisci tu.
* SsomarPluginsPlayer: è il nome di un giocatore, ad esempio "Vayk\_", "Ssomar", "Special70", "Tidal\_Flame".

Il formato dei comandi usa simboli diversi:

* \{\} : se un argomento è racchiuso tra \{\}, è necessario per eseguire il comando.
* \[] : se un argomento è racchiuso tra \[], è facoltativo per eseguire il comando.

Ci sono anche colori diversi (ma l'idea è la stessa di \{\} e \[] ):

* Blu: obbligatorio
* Arancione: facoltativo

### Comandi generali

#### Creare un nuovo ExecutableItem

* Comando: **/ei create \{id\}**
  * `id`: ID dell'ExecutableItem.
  * Se vuoi **copiare l'item di un altro plugin**, oppure un item vanilla personalizzato (stendardo, scudo, ...), è semplice! Prendilo nella mano principale ed esegui questo comando create.
* Esempio: `/ei create SsomarPluginsItem`
* Permesso: `ei.cmd.create`

#### Creare un nuovo ExecutableItem da un blocco puntato

* Comando: /ei create-from\_block \{id\}
  * `id`: ID dell'ExecutableItem.
* Esempio: `/ei create-from_block SsomarPluginsItem`
* Permesso: `ei.cmd.create-from-block`

#### Aprire l'editor / il menu

* Comando: **/ei editor** o **/ei show**
* Permesso: `ei.cmd.editor` o `ei.cmd.show`
* Nell'elenco, l'icona di ogni item mostra un'anteprima del suo nome visualizzato, della lore, degli incantesimi e degli attributi. Può essere disattivata con [editorIconPreview](/tools-for-all-plugins-score/score/general-config#editoriconpreview) nella config di SCore.

#### Ricaricare il plugin

* Comando: **/ei reload**
* Permesso: `ei.cmd.reload`

**Ricaricare un solo item**

* Comando: **/ei reload \{id\}**
  * `id` : ID dell'ExecutableItem.
* Esempio: `/ei reload SsomarPluginsItem`
* Permesso: `ei.cmd.reload`

**Ricaricare una cartella**

* Comando: **/ei reload folder\:Name\_Of\_My\_Folder**
* Permesso: `ei.cmd.reload`

#### Rigenerare le config degli item predefiniti

* Comando: **/ei default\_items**
* Permesso: `ei.cmd.default_items`

#### Eliminare un ExecutableItem

* Comando: **/ei delete \{id\}**
  * `id`: ID dell'ExecutableItem.
* Esempio: `/ei delete SsomarPluginsItem`
* Permesso: `ei.cmd.create`

#### Modificare un ExecutableItem con un comando

* Comando: **/ei edit \{id\}**
  * `id` : ID dell'ExecutableItem.
* Esempio: `/ei edit SsomarPluginsItem`
* Permesso: `ei.cmd.edit`

#### Cancellare tutti i cooldown e i comandi ritardati di ExecutableItems

* Comando: **/ei clear \{target\} \[optionaltarget]**
  * `target`
    * Puoi usare i nomi dei giocatori per scegliere come bersaglio un giocatore
    * Puoi usare l'UUID per scegliere come bersaglio un'entità.
  * `optional_target`
    * ALL: reimposta i comandi ritardati, i cooldown e le actionbar del giocatore.
    * DELAYED\_COMMANDS: reimposta tutti i comandi ritardati causati da DELAY e DELAYTICK.
    * COOLDOWNS: reimposta tutti i cooldown del giocatore su tutti gli item.
    * ACTIONBARS - reimposta tutte le actionbar del giocatore provenienti dal comando personalizzato ACTIONBAR.
* Esempio: `/ei clear SsomarPluginsPlayer COOLDOWNS`
* Permesso: `ei.cmd.clear`

#### Attivare / disattivare l'actionbar di ExecutableItems

* Comando: **/ei actionbar \{on or off\}**
* **Esempio:** `/ei actionbar off`
* Permesso: `ei.cmd.actionbar`

#### Ispezionare l'ExecutableItem che hai nella mano principale

* Comando: **/ei inspect**
  * Per usare questo comando l'ExecutableItem deve avere attiva la funzione di salvataggio delle informazioni dell'item. [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info)
  * Output:
    * Usage
    * Owner UUID
    * Owner name
    * ExecutableItems ID
    * Variables 
* Permesso: `ei.cmd.inspect`

#### Rimuovere il proprietario dell'EI che hai in mano

* Comando: **/ei unowned**
  * Per rimuovere il proprietario di un item, questo deve averne già uno; per farlo, la funzione [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info) deve essere attiva su quell'ExecutableItem
  * Dopo aver eseguito questo comando, il prossimo giocatore che interagisce con questo item ne diventerà il nuovo proprietario. (Non deve essere operatore/op/admin)
* Permesso: `ei.cmd.unowned`

#### Prendere un EI dall'inventario di un giocatore

* Comando: **/ei take \{player\} \{id\} \{quantity\}**
  * `player`: nome del giocatore a cui prendere l'item
  * `id`: ID dell'ExecutableItems
  * `quantity`: valore intero della quantità da rimuovere
* Esempio: `/ei take SsomarPluginsPlayer SsomarPluginsItem 1`
* Permesso: `ei.cmd.take`

#### Aggiornare gli ExecutableItem dei tuoi giocatori con l'ultima versione della config

* Info: questo comando aggiorna gli ExecutableItemID alla loro ultima versione presente nella config. Significa che, se un giocatore ha un ExecutableItem in una vecchia versione, ad esempio con l'attributo GENERIC\_ARMOR a 10, e poi cambi il valore dell'attributo nella config dell'ExecutableItem, il cambiamento non verrà applicato lato giocatore. Per permettere questo aggiornamento puoi usare questo comando: l'item verrà aggiornato e avrà il nuovo valore al posto di 10.
  * Perché l'aggiornamento avvenga, gli ExecutableItem selezionati devono trovarsi nell'inventario del giocatore, altrimenti non verranno aggiornati
  * Come consiglio, un altro modo per eseguire questo aggiornamento è usare [Auto update item](/executableitems/configurations/activator-configuration/activators-features#auto-update-item)
* Comando: **/ei refresh \{player\} \{ExecutableItemID\}** **\{resetUsage\} \{resetDurability\}**
  * `player`: nome di un giocatore specifico oppure "all" per scegliere come bersaglio tutti i giocatori online.
  * `ExecutableItemID`: nome di uno specifico ExecutableItem oppure "all" per scegliere come bersaglio tutti gli ExecutableItem creati.
  * `option`: argomento di aggiornamento
    * Opzioni:
      * MATERIAL
      * NAME
      * LORE
      * DURABILITY
      * ATTRIBUTES
      * ENCHANTS
      * CUSTOM_MODEL_DATA
      * ARMOR_SETTINGS
      * USAGE
      * ITEM_RARITY
      * BOOK
      * EQUIPPABLE
      * REPAIRABLE
      * HIDERS
      * INSTRUMENT
      * TOOL_RULES
      * FIREWORK
      * FIREWORK_EXPLOSION
      * CONTAINER
      * HEAD
      * BANNER
      * FOOD
      * CONSUMABLE
      * BUNDLE
      * BLOCK_STATE
      * CHARGED_PROJECTILES
      * MYFURNITURE
      * SPAWNER
      * WEAPON
      * BLOCK_ATTACKS
      * TOOLTIP_MODEL
      * ALL_OPTIONS (esegue tutte le operazioni elencate sopra)
* Permesso: `ei.cmd.refresh`

#### **Modificare il proprietario dell'ExecutableItem che hai in mano**

* Comando: **/ei set\_owner** **\{player\}**
  * `player`: nome del giocatore da impostare come bersaglio di questo comando
    * Funziona con i giocatori offline.
* Permesso: `ei.cmd.set_owner`

#### Attivare la modalità debug

* Info: modalità in cui ogni attivatore mostra all'utente diversi messaggi per conoscere lo stato dell'attivatore e capire perché non funziona o come viene attivato.
* Comando: **/ei debug**
* Permesso: `ei.cmd.debug`

#### Elencare i set e cosa indossa un giocatore <CustomTag type="premium" />

* Info: elenca i [set](/executableitems/configurations/sets-configuration) caricati (`plugins/ExecutableItems/sets`). Con un giocatore: i pezzi indossati e il tier attivo per ogni set.
* Comando: **/ei sets** **[player]**
* Permesso: `ei.cmd.sets`

#### Attivare un attivatore (per testare un item)

* Info: esegue un attivatore di un ExecutableItem che il giocatore porta con sé, senza fare il gesto (click, colpo, salto...). Utile per testare una config. Tutto il resto funziona normalmente: slot dettagliati, condizioni, cooldown, usage e comandi. L'item viene cercato nello slot indicato, altrimenti nella mano principale, nella mano secondaria, nell'armatura e poi in tutto l'inventario.
* Comando: **/ei trigger \{player\} \{item id\} \{activator id\}** **[slot:N] [target:nearest|\{player\}|\{uuid\}] [block:x,y,z] [click:left|right] [input:JUMP_PRESS...]**
  * `target`: l'entità o il giocatore degli attivatori che hanno un bersaglio (colpo, click su un'entità...). Per impostazione predefinita, quello che il giocatore sta guardando.
  * `block`: il blocco degli attivatori che hanno un blocco bersaglio. Per impostazione predefinita, il blocco che il giocatore sta guardando.
  * `click`: per gli attivatori con un click dettagliato. Per impostazione predefinita `right` (`left` per `PLAYER_LEFT_CLICK`).
  * `input`: obbligatorio per `PLAYER_INPUT`.
* Consiglio: se non succede nulla, esegui **/ei debug** per vedere quale controllo blocca l'attivatore.
* Permesso: `ei.cmd.trigger`

#### Far mantenere a tutti gli ExecutableItems gli attributi predefiniti del loro materiale

* Info: imposta [Keep default attributes](/executableitems/configurations/item-configuration/item-features#keep-default-attributes) su **ogni** ExecutableItem caricato (`keepDefaultAttributes: true`, `ignoreKeepDefaultAttributesFeature: false`) e salva i loro file. Nella 1.21+, dopo ogni caricamento ExecutableItems elenca nella console gli item che perdono il danno / l'armatura del loro materiale senza questa opzione. Con `false`, ogni item riceve `keepDefaultAttributes: false`.
* Comando: **/ei util-set-keepdefaultattributes-all-ei \{true or false\}**
* Esempio: `/ei util-set-keepdefaultattributes-all-ei true`
* Permesso: `ei.cmd.util-set-keepdefaultattributes-all-ei`

### Comandi give

#### Comando give

* Info: comando per dare a un giocatore un ExecutableItem nel primo slot disponibile.
* Comando: **/ei give \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \[giveOfflinePlayer]**
  * `player`: nome del giocatore che sarà il bersaglio di questo comando
  * `id`: ID dell'ExecutableItem da dare.
    * Valori facoltativi: per aggiungere questa configurazione personalizzata, nel formato non devono esserci spazi/spazi bianchi. 
      * `Variables`: puoi scegliere una configurazione di variabili da applicare quando dai l'item.
        * ✅`{Variables:{a:"1",b:"2",c:"3"}}` # Nessun uso di spazi
        * ❌`{Variables:{a : "1",b: "2",c :"3"}}` # Uso di spazi
      * `Usage:` puoi scegliere un valore per l'usage quando dai l'item
        * ✅`{Usage:5}` # Nessun uso di spazi bianchi
        * ❌`{Usage : 5}` # Uso di spazi bianchi
      * `Durability`: puoi decidere quanta durabilità perde l'item quando lo dai all'utente
        * ✅`{Durability:5}` # Nessun uso di spazi bianchi
        * ❌`{Durability : 5}` # Uso di spazi bianchi
  * `quantity`: quantità di item da dare
  * `giveOfflinePlayer`: valore booleano che indica se l'item verrà dato a un giocatore offline oppure no. Per impostazione predefinita questo valore è true.
* Esempi: (in tutti questi esempi il comando viene eseguito all'interno di un ExecutableItems per poter elaborare placeholder come %player%, %var\_name% e %usage%)
  * `/ei give %player% Genesis_Crystal{Variables:{vibraniun:10,proton:30},Usage:10} 3` 
  * `/ei give %player% SurgeBlade{Variables:{charge:%var_charge%+1},Usage:%usage%-1} 1`
  * `/ei give SsomarPluginsPlayer BoneBlade 1`
  * `/ei give edp445 cupcake{Durability:12} 1`
* Permesso: `ei.cmd.give`

#### Comando give all

* Comando: **/ei giveall \{id\} \{quantity\} \[world] \[giveOfflinePlayer]**
  * `id`: ID dell'ExecutableItem da dare.
  * `quantity`: quantità di item da dare
  * `world`: argomento facoltativo del mondo in cui eseguire il comando. In questo modo, chi non si trova in questo mondo non riceverà l'ExecutableItem.
  * `giveOfflinePlayer`: valore booleano che indica se l'item verrà dato a un giocatore offline oppure no. Per impostazione predefinita questo valore è true.
* Permesso: `ei.cmd.giveall`

#### Dare un EI in uno slot specifico di un giocatore <CustomTag type="premium" />

* Comando: **/ei giveslot \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \{slot\} \[override true or false]**
  * `player`: nome del giocatore che sarà il bersaglio di questo comando
  * `id`: ID dell'ExecutableItem da dare.
    * Valori facoltativi: per aggiungere questa configurazione personalizzata, nel formato non devono esserci spazi/spazi bianchi. 
      * `Variables`: puoi scegliere una configurazione di variabili da applicare quando dai l'item.
        * ✅\{Variables:\{a:"1",b:"2",c:"3"\\}\} # Nessun uso di spazi
        * ❌\{Variables:\{a : "1",b: "2",c :"3"\\}\} # Uso di spazi
      * `Usage`: puoi scegliere un valore per l'usage quando dai l'item
        * ✅\{Usage:5\} # Nessun uso di spazi bianchi
        * ❌\{Usage : 5\} # Uso di spazi bianchi
  * `quantity`: quantità di item da dare
  * `slot`: slot del giocatore in cui verrà dato questo item.
  * `override`: valore booleano per sovrascrivere lo slot se contiene già un item. In tal caso l'item verrà spostato e, se l'inventario del giocatore è pieno, verrà lasciato cadere a terra.
* Esempi: 
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`test{Variables:{x:"Hey",world:"Island"},Usage:50} 1 0`**  
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`rum{Usage:69420,Variables:{tell_me:"why",aint_nothing:"BUT A HEARTBREAK"}} 1 %slot%`**
* Permesso: `ei.cmd.giveslot`

**Dare a un giocatore ogni EI di una cartella specifica**

* Info: comando per dare a un giocatore una cartella del plugin.
* Comando: **/ei givefolder \{player\} \{folder\} \{quantity\}**
  * `player`: nome del giocatore che sarà il bersaglio di questo comando
* Permesso: `ei.cmd.givefolder`

### Comandi drop

#### Lasciare cadere un EI in una posizione / località specifica 

* Comando: **/ei drop \{id\} \{quantity\} \{\[world] \[x] \[y] \[z]\}**
  * `id`: ID dell'ExecutableItem da dare.
  * `quantity`: quantità di item da lasciare cadere. Per impostazione predefinita è 1.
  * location: l'intera posizione è facoltativa; se vuoi aggiungerla, dovrai compilare i seguenti argomenti:
    * `world`: mondo in cui verrà lasciato cadere l'item.
    * `x`: coordinata X in cui verrà lasciato cadere l'item.
    * `y`: coordinata Y in cui verrà lasciato cadere l'item.
    * `z`: coordinata Z in cui verrà lasciato cadere l'item.
* Esempi:  (in tutti questi esempi il comando viene eseguito all'interno di un ExecutableItems per poter elaborare placeholder come %player%, %var\_name% e %usage%)
  * `/ei drop totemshatter 1 %world% %x% %y% %z%`
  * `ei drop nuclearWar{Usage:3,Variables:{niconico:"nii"}} 25 %block_world% %block_x% %block_y% %block_z%`
  * `ei drop cybert1_5{Variables:{eh:5},Usage:5} 1 world 535 74 1329`
* Permesso: `ei.cmd.drop`

### Comandi di modifica

#### Modificare il valore di usage di un ExecutableItem

* Comando: 
  * In gioco: **/ei modification \{set or modification\} usage \{slot\} \{value\}**
  * Dalla console: **/ei console-modification \{set or modification\} usage \{player\} \{slot\} \{value\}**
  * Parametri:
    * `set or modification`
      * set: imposta il nuovo \{value\} e sostituisce quello vecchio
      * modification: utile per aggiungere modifiche, aumenta o diminuisce il valore originale di \{value\}
    * `player`: nome del giocatore che sarà il bersaglio di questo comando
    * `slot`: slot del giocatore in cui verrà dato questo item.
      * Maggiori informazioni sugli slot qui: [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `value`: valore usato per la modifica.
* Permesso: `ei.cmd.modification`

#### Modificare il valore di una variabile di un ExecutableItem

* Comando: 
  * In gioco: **/ei modification \{set or modification\} variable \{slot\} \{variableName\} \{value\}**
  * Dalla console: **/ei console-modification \{set or modification\} variable \{player\} \{slot\} \{variableName\} \{value\}**
  * Parametri:
    * `set or modification`
      * set: imposta il nuovo \{value\} e sostituisce quello vecchio
      * modification: utile per aggiungere modifiche, aumenta o diminuisce il valore originale di \{value\}
    * `player`: nome del giocatore che sarà il bersaglio di questo comando
    * `slot`: slot del giocatore in cui verrà dato questo item.
      * Maggiori informazioni sugli slot qui: [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `variableName`: il nome della variabile a cui vuoi applicare il typeOfModication con il valore selezionato.
    * `value`: valore usato per la modifica.
* Permesso: `ei.cmd.modification`

#### Cercare un ExecutableItem nel server

* Info: ti fornisce informazioni su dove si trovano nel tuo server gli ExecutableItems con ID \{id\}.
* Comando: **/ei search \{id\} \{searchMode\}**
  * `id`: ID dell'ExecutableItem che stai cercando
  * `searchMode`: tipo di ricerca
    * players: cerca l'ExecutableItem in tutti gli inventari dei giocatori **online**.
    * containers: cerca l'ExecutableItem in tutti i contenitori **caricati**.
    * all: cerca con entrambi i metodi.
* Esempio:
  * `/ei search EternalSword all`
* Permesso: `ei.cmd.search`

#### Ottenere il percorso del file di un ExecutableItem

* Info: questo comando mostra il percorso assoluto nel file system del file di configurazione di uno specifico ExecutableItem. Utile per gli sviluppatori o per gli amministratori del server che devono trovare e modificare direttamente i file degli item.
* Comando: **/ei path \{id\}**
  * `id`: ID dell'ExecutableItem di cui vuoi ottenere il percorso
* Esempio:
  * `/ei path ExcaliburSword`
  * Output: `[ExecutableItems] The path of ExcaliburSword is /path/to/plugins/ExecutableItems/Items/ExcaliburSword.yml.`
* Permesso: `ei.cmd.path`

#### Controllare le informazioni sull'ottimizzazione degli eventi

* Info: questo comando mostra informazioni dettagliate sull'ottimizzazione degli event handler di ExecutableItems e le statistiche sulle prestazioni. Indica quali eventi vengono ascoltati e fornisce informazioni sugli item che usano il riconoscimento personalizzato (che può influire sulle prestazioni). L'output viene inviato alla console del server.
* Comando: **/ei checkevents**
* L'output include:
  * Elenco degli eventi ottimizzati e stato del loro listener
  * Numero di ExecutableItems che usano il riconoscimento personalizzato
  * Avvisi sull'impatto sulle prestazioni
  * Raccomandazioni per migliorare le prestazioni
* Permesso: `ei.cmd.checkevents`

:::info
L'output di questo comando viene inviato alla **console**, non al giocatore in gioco. Controlla la console del server per vedere le informazioni dettagliate.
:::

:::tip
Gli item con riconoscimento personalizzato possono influire sulle prestazioni. Il comando ti mostrerà quanti item usano questa funzione. Se hai problemi di prestazioni, valuta di ridurre il numero di item con il riconoscimento personalizzato attivo.
:::

### Comandi del pacchetto di texture

#### Aggiornare il pacchetto di texture di ExecutableItems

* Comando: **/ei refresh-pack**
* Info: aggiorna e ricarica il pacchetto di texture di ExecutableItems per tutti i giocatori online. Utile dopo aver modificato le texture personalizzate.
* Permesso: `ei.cmd.refresh-pack`

#### Scaricare il pacchetto di texture predefinito di ExecutableItems

* Comando: **/ei download-default-pack**
* Info: scarica il pacchetto di texture predefinito di ExecutableItems dal repository ufficiale e lo decomprime automaticamente. Se `selfHostPack` è attivo in config.yml, il pack verrà registrato e ospitato automaticamente sul tuo server. È utile per:
  * Configurare il pacchetto di texture per la prima volta
  * Ripristinare il pack predefinito dopo delle modifiche
  * Aggiornare all'ultima versione del pack predefinito
* Requisiti:
  * `selfHostPack: true` deve essere impostato in config.yml per l'hosting automatico
  * Il server deve avere una connessione a internet per scaricare il pack
* Permesso: `ei.cmd.download-default-pack`

:::info
**Opzioni di hosting:**
- **Self-hosting sul tuo server**: imposta `selfHostPack: true` in config.yml - il pack verrà ospitato direttamente dal plugin
- **Hosting esterno**: se vuoi ospitare il pack da solo (su un sito web, una CDN, ecc.), imposta l'URL di download in `texturesPackUrl` in config.yml
- **Nessun hosting**: se nessuna delle due opzioni è attiva, il pack verrà scaricato e decompresso in locale ma non distribuito ai giocatori
:::

### Custom triggers

* Info: ExecutableItems ha dei comandi per eseguire i custom triggers; se vuoi sapere cosa sono e come usarli, consulta le informazioni qui: [Custom triggers](/tools-for-all-plugins-score/custom-triggers) 

### WorldGuard

* Puoi usare i flag di WorldGuard per attivare/disattivare tutti gli attivatori degli EI
```
/rg flag <region> ei-activators deny # disables ALL EI activators in the region
/rg flag <region> ei-activators allow # re-enables them (this is the default)
```

* Il messaggio di errore può essere configurato in /ExecutableItems/locale/locale_EN.yml, ad esempio
```yml
disableRegion: '&8[&4Executable&7Items&8] &cYou cant use &e%item%&c in this region!'
```
