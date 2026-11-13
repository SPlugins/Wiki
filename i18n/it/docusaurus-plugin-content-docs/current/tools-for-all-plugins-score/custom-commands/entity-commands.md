---
description: >-
  Elenco dei comandi per entità di SCore: cambia, cura, uccidi, teletrasporta o
  fai cavalcare le entità, con impostazioni ed esempi.
source_hash: f04bd6ad6572d292
translated_at: '2026-11-13T17:41:30.854Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Comandi per entità

:::tip
Compatibilità "multi-world" per i comandi vanilla.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Esempio: vuoi evocare uno Zombie nel mondo SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Esempio con un placeholder`:`

`execute in <<%entity_world%>> run summon zombie 100 50 100`
:::

:::info
I comandi per entità supportano gli NPC di Citizens
:::

## Comandi misti

Oltre alla seguente lista di comandi puoi usare anche:

<LinkPreview
  url="docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity"
  title="Mixed commands (Compatible with Player and Entity)"
/>

Questi comandi possono essere usati nei comandi relativi al giocatore OPPURE nei comandi relativi all'entità.

## Comandi personalizzati

_In ordine alfabetico_

### ANGRY\_AT

* Info: imposta il bersaglio dell'entità su un UUID specifico
* Impostazione del comando:
  * `{entityUUID}`: l'UUID dell'entità bersaglio
* Esempio:

```
- ANGRY_AT entityUUID:%player_uuid%
# To reset the angry set null
- ANGRY_AT entityUUID:null
```

### AWARENESS

* Info: imposta se questo mob è consapevole di ciò che lo circonda. I mob non consapevoli si muovono comunque se spinti, attaccati, ecc., ma non si muovono né eseguono azioni in autonomia. Per i mob non consapevoli possono essere disattivati anche altri comportamenti non specificati, come l'annegamento.

:::info
funziona solo per la 1.16.5+
:::

* Impostazione del comando:
  * `{value}`: true o false
* Esempio:

```
- AWARENESS value:true
```

### CHANGE\_INTO\_ITEM

* Info: sostituisce un item lasciato cadere (un'entità item a terra o in aria) con un item vanilla o un ExecutableItem. L'entità resta la stessa, cambia solo l'item che trasporta.
* Pensato per l'attivatore `PLAYER_FISH_FISH` di ExecutableItems: in questo caso l'entità bersaglio di `entityCommands` è l'item pescato. Viene cambiato prima di essere recuperato, quindi il giocatore mantiene la normale animazione di pesca e riceve il tuo item al posto del pesce. Nessun `/ei give`, nessun `DELAYTICK`, nessun `data merge` necessario.
  * In ExecutableEvents (ogni canna da pesca del server), scrivilo nel `targetEntityCommands` di `PLAYER_FISH_FISH`.
* Impostazioni del comando:
  * `item`: un materiale (`DIAMOND`) o l'id di un ExecutableItem (`my_custom_fish`).
  * `amount`: (facoltativo) la quantità del nuovo item. Default: 1
* Esempio:

```yaml
activators:
  activator0:
    option: PLAYER_FISH_FISH
    entityCommands:
    - CHANGE_INTO_ITEM item:my_custom_fish amount:1
```

```
- CHANGE_INTO_ITEM item:DIAMOND amount:3
- CHANGE_INTO_ITEM item:EI:my_custom_fish
```

:::info
* Se un ExecutableItem e un materiale hanno lo stesso nome, viene usato l'ExecutableItem. Scrivi `EI:my_id` per accettare solo un ExecutableItem.
* L'ExecutableItem viene creato per il giocatore che ha attivato l'attivatore (proprietario, placeholder dell'item).
* Il comando non fa nulla se l'entità bersaglio non è un item lasciato cadere (un mob, un giocatore...) e stampa un messaggio nella console se `item` non è né un materiale né un ExecutableItem caricato.
* Esempio completo con una loot table casuale: [Loot di pesca personalizzato](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot)
:::

### CHANGE\_TO

* Info: sostituisce il mob con un'entità di un altro tipo. Mantiene la velocità attuale dell'entità corrente.
  * Puoi specificare un [EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * Oppure una definizione di entità, esempio: `{HasVisualFire:1b,id:"minecraft:bee"}` (1.21.+)
  * Oppure un ID di MythicMob
* Impostazione del comando:
  * `{entity}`: la specifica dell'entità
* Esempio:

```
# With EntityType
- CHANGE_TO entity:CHICKEN

# With EntitySnapshot
- CHANGE_TO entity:{HasVisualFire:1b,id:"minecraft:bee"}

# Or using variable
- CHANGE_TO entity:%var_myvar%

# With MythicMob ID
- CHANGE_TO entity:MyCustomBossID
```

### DROPEXECUTABLEITEM

* Info: lascia cadere un Executable Item nella posizione dell'entità
* Impostazioni del comando:
  * `{id}`: l'id item dell'ExecutableItem
  * `{quantity}`: la quantità di executable item che verrà lasciata cadere
  * `[owner]`: (facoltativo) il proprietario dell'item lasciato cadere (IGN o UUID del giocatore)
  * `[itemdata]`: (facoltativo) impostazioni dei dati dell'item che contengono:
    * `Usage`: imposta il valore di utilizzo
    * `Variables`: imposta le variabili personalizzate (formato: `{key:value}`)
    * `Durability`: imposta il valore di durabilità
* Esempio:

```
- DROPEXECUTABLEITEM ElytraTrail 1
- DROPEXECUTABLEITEM id:ElytraTrail amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Info: lascia cadere un Executable Block nella posizione dell'entità
* Impostazioni del comando:
  * `{id}`: l'id item dell'ExecutableBlock
  * `{quantity}`: la quantità di executable block che verrà lasciata cadere
* Esempio:

```
- DROPEXECUTABLEBLOCK House 1
```

### DROPITEM

* Info: lascia cadere un item nella posizione dell'entità
* Impostazioni del comando:
  * `{material}`: il tipo di item. [Riferimento](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) **(DEVE ESSERE TUTTO IN MAIUSCOLO)**
  * `{quantity}`: la quantità di item che verrà lasciata cadere
* Esempio:

```
- DROPITEM DIAMOND 1
```

### HEAL

* Info: cura l'entità di una quantità specifica; se non è specificata, cura completamente l'entità.
* Impostazione del comando:
  * `{amount}`: la quantità di cura
* Esempio:

```
# Full heal
- HEAL
# Amount specific heal
- HEAL amount:5
# Remove heal
- HEAL amount:-5
```

### KILL

* Info: uccide il mob senza l'animazione di morte
* Nessuna impostazione del comando
* Esempio:

```
- KILL
```

### PLAYER\_RIDE\_ENTITY

* Info: fa cavalcare al giocatore l'entità bersaglio.
* Impostazioni del comando:
  * `{control}`: true/false, indica se puoi controllare manualmente l'entità oppure no
  * `{speed}`: la velocità che l'entità può raggiungere mentre la cavalchi
* Esempio:

```yaml
- PLAYER_RIDE_ON_ENTITY control:true speed:1.0
```

### SET\_AI

* Info: imposta lo stato dell'IA dell'entità
* Impostazioni del comando:
  * `{value}`: true per attivare l'IA dell'entità e false per disattivarla.
* Esempio:

```
- SET_AI value:false
```

### SET\_ADULT

* Info: imposta l'entità nel suo stato "adulto"
* Nessuna impostazione del comando
* Esempio:

```
- SET_ADULT
```

* Situazione di esempio:
  * Se questo comando viene eseguito su un pulcino, questo diventerà una gallina adulta.

### SET\_BABY

* Info: imposta l'entità nel suo stato "cucciolo"
* Nessuna impostazione del comando
* Esempio:

```
- SET_BABY
```

* Situazione di esempio:
  * Se questo comando viene eseguito su una gallina adulta, questa diventerà un pulcino.

### SET\_ENTITY\_NAME

* Info: imposta forzatamente il nome dell'entità
* Impostazione del comando:
  * `{name}`: il nuovo nome dell'entità
* Esempio:

```
- SET_ENTITY_NAME name:&6Final &cBoss
```

### SHEAR

* Info: tosa l'entità
* Nessuna impostazione del comando
* Esempio:

```
- SHEAR
```

### TELEPORT\_ENTITY\_TO\_PLAYER

* Info: teletrasporta l'entità dall'utilizzatore dell'item
* Nessuna impostazione del comando
* Esempio:

```
- TELEPORT_ENTITY_TO_PLAYER
```

### TELEPORT\_PLAYER\_TO\_ENTITY

* Info: teletrasporta l'utilizzatore dell'item dall'entità
* Nessuna impostazione del comando
* Esempio:

```
- TELEPORT_PLAYER_TO_ENTITY
```

### TELEPORT\_POSITION

* Info: teletrasporta l'entità in una posizione specifica
* Impostazioni del comando:
  * `{x}`: coordinata X
  * `{y}`: coordinata Y
  * `{z}`: coordinata Z
* Esempio:

```
- TELEPORT_POSITION x:%target_x% y:%target_y% z:%target_z%
```
