---
description: >-
  Scopri tutti i comandi e i permessi di ExecutableBlocks: creare, piazzare,
  rimuovere, ricaricare e dare blocchi personalizzati con /eb.
source_hash: 653dceef09a76278
translated_at: '2026-11-13T17:36:37.699Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ⌨️ Comandi e permessi

## Permessi

**CONSIGLIO per i principianti:**

:::info
Per assegnare i permessi di tutti gli item, ti consiglio di scaricare un plugin di permessi come [**LuckPerms**](https://www.spigotmc.org/resources/luckperms.28140/). Una volta installato, ti basta assegnare il permesso **`eb.block.*`**; per LuckPerms il comando è **`/lp group default permission set eb.block.* true`**
:::

#### Permesso dei blocchi

* Permesso: `eb.block.{id}`
* Permesso negativo: `-eb.block.{id}` 
* Esempio: `eb.block.Test`
* Permesso per dare tutti gli item: `eb.block.*` 

#### Assegnare tutti i permessi di EB

* Permesso: `eb.*`

#### Assegnare i permessi di tutti i comandi di EB

* Permesso: `eb.cmds`

#### Permesso per ignorare il cooldown

* Permesso: `eb.nocd.{id}` `eb.nocd.*`
* Descrizione: assegna questo permesso personalizzato per disattivare il cooldown dei tuoi giocatori vip
* (Assicurati di fare il test senza essere op)

**Limite di EB**

* Permesso: `eb.limit.{amount}`
* Descrizione: imposta il valore massimo di EB che un giocatore può piazzare.

#### Limitare un EB specifico

* Permesso: `eb.block.ID.limit.{amount}`
* Descrizione: limita la quantità di un EB con un ID specifico che un giocatore può piazzare

## Comandi

#### Creare un nuovo ExecutableBlock

* Comando: **/eb create \{id\}**
* Suggerimento: 
  * Se vuoi **copiare l'item/blocco di un altro plugin**, o un blocco vanilla personalizzato (Banner, blocco personalizzato, ...), devi installare il mio altro plugin, ExecutableItems, digitare **/ei create \{id\}** e poi importare il tuo ExecutableItem in ExecutableBlocks.
* Permesso: `eb.cmd.create`

####

#### Aprire una GUI con gli EB piazzati

* comando: /eb show-placed filter/sort:

#### Aprire l'editor / il menu

* Comando: **/eb editor** oppure **/eb show**
* Permesso: `eb.cmd.editor` oppure `eb.cmd.show`

#### Aprire l'editor per modificare un EB specifico

* Comando: **/eb edit \{BlockID\}**
* Permesso: `eb.cmd.edit`

#### Ricaricare il plugin

* Comando: **/eb reload**
* Permesso: `eb.cmd.reload`

#### Ricaricare il plugin (solo 1 blocco)

* Comando: **/eb reload \{block\_id\}**
* Permesso: `eb.cmd.reload`

**Ricaricare una cartella**

* Comando: **/eb reload folder\:Name\_Of\_My\_Folder**
* Permesso: `eb.cmd.reload`

#### Eliminare un ExecutableBlock

* Comando: **/eb delete \{id\}**
* Permesso: `eb.cmd.create`

#### Ricaricare i blocchi predefiniti di ExecutableBlocks

* Comando: **/eb default\_blocks**
* Permesso: `eb.cmd.default_blocks`

#### Cancellare tutti i cooldown e i comandi ritardati di EB

* Comando: **/eb clear** **\[playerName]**
* Permesso: `eb.cmd.clear`

:::info
Supporta anche le entità: usa l'UUID dell'entità al posto del nome del giocatore
:::

#### Attivare / disattivare l'actionbar di EB

* Comando: **/eb actionbar** **\{on or off\}**
* Permesso: `eb.cmd.actionbar`

#### Piazzare un EB in una posizione specifica

* Comando: **/eb place \{id\} \{x\} \{y\} \{z\} \{world\}** \[direction]
* Permesso: `eb.cmd.place`
* `[direction]`: (Opzionale) `NORTH`, `SOUTH`, `EAST`, `WEST`, `UP` oppure `DOWN` (maiuscole o minuscole, con completamento con Tab). Il blocco piazzato viene orientato verso questa direzione.
  * Ha la precedenza sulle [funzionalità direzionali](/executableblocks/configurations/block-configuration/block-features#directional-features) del blocco (`blockFaceOnPlace` con `forceBlockFaceOnPlace: true`).
  * Funziona sui blocchi che possono essere orientati: blocchi direzionali (fornaci, observer, nidi d'ape...), blocchi rotabili (cartelli, teste, banner: non `UP` / `DOWN`) e blocchi con un asse (tronchi, pilastri: `UP` / `DOWN` = verticale). Una direzione che il blocco non accetta viene ignorata.
  * Solo per gli ExecutableBlocks creati con `BASIC_CREATION` o `IMPORT_FROM_EXECUTABLE_ITEMS`, su server 1.13+.
  * Senza l'argomento non cambia nulla: il blocco viene piazzato come prima.
* Esempio: `/eb place my_furnace 100 64 -20 world EAST`

#### Rimuovere un EB in una posizione specifica

* Comando: **/eb remove \{x\} \{y\} \{z\} \{world\}** \[replaceWithAir default true]
* Permesso: `eb.cmd.remove`

#### Riempire una selezione di regione con un EB

* Requisito: questo comando richiede il plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Comando: **/eb we-place \{id\}**
* Permesso: `eb.cmd.we-place`

#### Riempire una regione WorldGuard con un EB

* Requisito: questo comando richiede il plugin WorldGuard
* Comando: **/eb wg-fill-region \{world\} \{region\_name\} stone:70,MyEb:30**
* Permesso: `eb.cmd.wg-fill-region`

#### Rimuovere tutti gli EB presenti in una selezione di blocchi

* Requisito: questo comando richiede il plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Comando: **/eb we-remove \{replaceTheEBByAir true or false\}**
* Permesso: `eb.cmd.we-remove`

#### Modifica delle variabili di EB

* Comando: /eb modification \{set/modification\} variable \{world\} \{x\} \{y\} \{z\} \{variableName\} \{value\} 

#### Modifica dell'usage di EB

* /eb modification \{set/modification\} usage \{world\} \{x\} \{y\} \{z\} \{value\}

### Comandi Give e Take

#### Comando give

* (Funziona anche con i giocatori offline)
* Comando: 
  * **/eb give \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\}** \[giveOfflinePlayer default true]
* Permesso: `eb.cmd.give`
* Esempi:
  * Esempi: 
    * **/eb give %player% Genesis\_Crystal\{Variables:\{vibraniun:10,proton:30\},Usage:10\} 3** 
    * **/eb give %player% SurgeBlade\{Variables:\{charge:%var\_charge%+1\},Usage:%usage%-1\} 1**
    * **/eb give %player% BoneBlade 1**

#### Comando take

* Comando: 
  * **/eb take \{playername\} \{id\} \{quantity\}**
* Permesso: `eb.cmd.take`

#### Comando giveall

* Comando: 
  * **/eb giveall \{id\} \{quantity\}** **\[world]**
* Permesso: `eb.cmd.giveall`

#### Dare un EB in uno slot specifico di un giocatore 

* Comando: 
  * **/eb giveslot \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\} \{slot\}**  **\[override true or false]**
  * Esempi: 
    * **/eb giveslot Ssomar test\{Variables:\{x:"Hey",world:"Island"\},Usage:50\} 1 0**  
    * **/eb giveslot Special70 rum\{Usage:69420,Variables:\{tell\_me:"why",aint\_nothing:"BUT A HEARTBREAK"\\}\} 1 %slot%**
    * **/eb giveslot Ssomar xyz\{Variables:\{test:"Hello boss!"\},Usage:5\} 1 5**
  * _Usage predefinito: l'usage presente nella config del tuo EB_
  * _Override permette all'EB di occupare quello slot; se lì c'era un item, viene spostato in un altro slot o lasciato cadere a terra._
* Permesso: `eb.cmd.giveslot`

**Dare a un giocatore tutti gli EB di una cartella specifica**

* Comando:
  * **/eb givefolder \{playername\} \{folder\} \{quantity\}**

### Comandi drop

#### Lasciare cadere un EB in una posizione specifica 

* Comando: 
  * **/eb drop \{id\}** **\[quantity] \[world] \[x] \[y] \[z]**
  * _Quantità predefinita: 1_
  * _Posizione predefinita: la posizione del giocatore che ha eseguito questo comando_
* Permesso: `eb.cmd.drop`

### Custom trigger

Comandi:

* /eb run-custom-trigger trigger:\{activatorId\} // Eseguirà gli attivatori per tutti gli EB piazzati che hanno un attivatore con l'ID specificato.
* /eb run-custom-trigger trigger:\{activatorId\} block:\{world,x,y,z\} // Eseguirà gli attivatori solo per l'EB piazzato nella posizione specificata, se ha un attivatore con l'ID specificato.
