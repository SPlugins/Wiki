---
title: Elenco dei placeholder di SCore
description: >-
  L'elenco dei placeholder di SCore per ExecutableItems, ExecutableBlocks e
  ExecutableEvents: giocatore, item, blocco, entità, math e PlaceholderAPI.
source_hash: ecc26db0e2403378
translated_at: '2026-11-13T17:44:57.921Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 📚 Elenco dei placeholder di SCore

Un placeholder di SCore è un `%tag%` che viene sostituito con un valore in tempo reale (dati del giocatore, dati dell'item, dati del blocco, math, numeri casuali) quando viene eseguito un comando, una condizione, una riga di lore o un messaggio. Funzionano in qualsiasi parte di ExecutableItems, ExecutableBlocks e ExecutableEvents: comandi, condizioni, lore, messaggi e variabili di SCore. SCore interpreta inoltre ogni placeholder di [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) negli stessi punti, quindi i tag PAPI in stile `%player_name%` e i tag di SCore in stile `%player%` possono essere mischiati nella stessa riga.

## Indice

- [Placeholder del giocatore](#player-placeholders)
- [Placeholder del bersaglio / entità](#target--entity-placeholders)
- [Placeholder degli item](#item-placeholders)
- [Placeholder dei blocchi](#block-placeholders)
- [Placeholder dei proiettili](#projectile-placeholders)
- [Placeholder delle variabili](#variables-placeholders)
- [Placeholder del cooldown](#cooldown-placeholders)
- [Placeholder math](#math-placeholders)
- [Placeholder di utilità e testo](#utility--text-placeholders)
- [Placeholder di conteggio specifici dei plugin](#plugin-specific-count-placeholders)
- [Placeholder specifici degli eventi](#event-specific-placeholders)
- [Usare i placeholder di PlaceholderAPI in SCore](#using-placeholderapi-placeholders-in-score)
- [Domande ?](#question-)

:::tip Operazioni numeriche
Tutti i placeholder numerici supportano le operazioni aritmetiche:
- **Incremento:** `%amount%+6` (se %amount% = 15, risultato = 21)
- **Decremento:** `%amount%-8` (se %amount% = 14, risultato = 6)
:::

## Placeholder del giocatore

I placeholder del giocatore sono disponibili negli attivatori in cui è coinvolto un giocatore. Quando il giocatore è secondario nell'attivatore, sostituisci `player` con `target` (ad es. `%target_health%`). In ExecutableItems e ExecutableBlocks l'item/blocco può avere un **Owner**: sostituisci `player` con `owner` per ottenere i placeholder del proprietario (ad es. `%owner_uuid%`).

| Placeholder | Restituisce | Esempio |
|------------|---------|---------|
| `%player%` | Nome del giocatore | `SEND_MESSAGE &aWelcome %player%!` |
| `%player_uuid%` | UUID del giocatore | `SEND_MESSAGE &7Your UUID is %player_uuid%` |
| `%player_uuid_array%` | UUID del giocatore come `[I;-1288600659,-373273272,-1897203511,898446696]` | Usato internamente per memorizzare gli UUID nei comandi basati su NBT |
| `%player_world%` | Nome del mondo (`%player_world_lower%` per minuscolo) | `execute in <<%player_world%>> run summon zombie 100 50 100` |
| `%player_x%`, `%player_y%`, `%player_z%` | Coordinate (aggiungi `_int` per i numeri interi) | `execute at %player% run setblock %player_x_int% %player_y_int% %player_z_int% air` |
| `%player_pitch%`, `%player_pitch_positive%` | Pitch del giocatore (`_int` per intero) | `SEND_MESSAGE &7Pitch: %player_pitch_int%` |
| `%player_yaw%`, `%player_yaw_positive%` | Yaw del giocatore (`_int` per intero) | `SEND_MESSAGE &7Yaw: %player_yaw_int%` |
| `%player_direction%` | Direzione cardinale (N, SW, NE, ecc.) | Condizione: `part1: '%player_direction%'`, `comparator: EQUALS`, `part2: 'SW'` |
| `%player_health%` | Salute attuale | `SEND_MESSAGE &cHealth: %player_health%` |
| `%player_max_health%` | Salute massima | `SEND_MESSAGE &cHealth: %player_health%/%player_max_health%` |
| `%player_slot%` | Slot che ha attivato l'attivatore | `SEND_MESSAGE &7Used from slot %player_slot%` |
| `%player_slot_live%` | Slot attualmente in mano | `SEND_MESSAGE &7Holding slot %player_slot_live%` |
| `%player_team%` | Team del giocatore (se presente) | `SEND_MESSAGE &7Team: %player_team%` |
| `%player_attack_charge%` | Cooldown di attacco (1.0 = completamente carico) | Condizione: `part1: '%player_attack_charge%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR_OR_EQUALS`, `part2: '1.0'` |
| `%last_damage_taken%` | Ultimo danno ricevuto (`_int` per intero) | `SEND_MESSAGE &cYou took %last_damage_taken_int% damage` |
| `%last_damage_dealt%` | Ultimo danno inflitto (`_int` per intero) <CustomTag type="version" version="1.16" /> | `SEND_MESSAGE &aYou dealt %last_damage_dealt_int% damage` |
| `%player_x_velocity%`, `%player_y_velocity%`, `%player_z_velocity%` | Velocità attuale X, Y, Z (`_int` per intero) | `SEND_MESSAGE &7Y velocity: %player_y_velocity%` |

### Placeholder iniziali del giocatore

Registrano i valori del giocatore nel momento in cui scatta l'attivatore (non cambiano durante l'esecuzione):
- `%player_x_initial%`, `%player_y_initial%`, `%player_z_initial%`
- `%player_world_initial%`
- `%player_pitch_initial%`, `%player_yaw_initial%`
- `%player_direction_initial%`

## Placeholder del bersaglio / entità

I placeholder dell'entità sono disponibili negli attivatori in cui è coinvolta un'entità. Quando l'entità è secondaria nell'attivatore, sostituisci `entity` con `target` (ad es. `%target_x%`).

| Placeholder | Restituisce | Esempio |
|------------|---------|---------|
| `%entity%` | Tipo di entità (MAIUSCOLO) | `SEND_MESSAGE &7You hit a %entity%` |
| `%entity_lower_case%` | Tipo di entità (minuscolo) | `SEND_MESSAGE &7You hit a %entity_lower_case%` |
| `%entity_name%` | Nome personalizzato dell'entità | `SEND_MESSAGE &7Target: %entity_name%` |
| `%entity_uuid%` | UUID dell'entità | Usato per identificare il bersaglio nei comandi basati su NBT |
| `%entity_uuid_array%` | UUID dell'entità come `[I;-1288600659,-373273272,-1897203511,898446696]` | Usato internamente per memorizzare gli UUID nei comandi basati su NBT |
| `%entity_x%`, `%entity_y%`, `%entity_z%` | Coordinate (aggiungi `_int` per i numeri interi) | `execute at %entity% run setblock %entity_x_int% %entity_y_int% %entity_z_int% air` |
| `%entity_health%` | Salute attuale | `SEND_MESSAGE &cTarget health: %entity_health%` |
| `%entity_max_health%` | Salute massima | `SEND_MESSAGE &cTarget health: %entity_health%/%entity_max_health%` |
| `%entity_world%` | Nome del mondo | `SEND_MESSAGE &7Entity world: %entity_world%` |
| `%entity_direction%` | Direzione verso cui è rivolta | Condizione: `part1: '%entity_direction%'`, `comparator: EQUALS`, `part2: 'N'` |
| `%entity_pitch%`, `%entity_yaw%` | Valori di rotazione | `SEND_MESSAGE &7Yaw: %entity_yaw%` |
| `%entity_team%` | Team dell'entità (se presente) | `SEND_MESSAGE &7Team: %entity_team%` |
| `%entity_serialized%` | Definizione completa dell'entità | Usato per copiare/ripristinare un'entità nei comandi avanzati |
| `%entity_last_damage_taken%` | Ultimo danno ricevuto (aggiungi `_int` per i numeri interi). Le varianti `_final` esistono solo negli eventi di danno alle entità di ExecutableEvents, vedi i [placeholder degli attivatori](#event-specific-placeholders) | `SEND_MESSAGE &cTarget took %entity_last_damage_taken_int% damage` |
| `%entity_x_velocity%`, `%entity_y_velocity%`, `%entity_z_velocity%` | Velocità attuale X, Y, Z (`_int` per intero) | `SEND_MESSAGE &7Target Y velocity: %entity_y_velocity%` |

## Placeholder degli item

| Placeholder | Restituisce | Esempio |
|------------|---------|---------|
| `%name%` | Nome dell'ExecutableItem | `SEND_MESSAGE &aYou used %name%` |
| `%id%` | ID dell'ExecutableItem | `SEND_MESSAGE &7Item ID: %id%` |
| `%amount%` | Quantità nello stack attuale | `SEND_MESSAGE &7You have %amount% in this stack` |
| `%usage%` | Numero di utilizzi attuale | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%usage_roman%` | Utilizzi in numeri romani | `ADD_ITEM_LORE &7Usage: %usage_roman%` |
| `%usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` | Barra visiva degli utilizzi, maggiori informazioni sotto | `ADD_ITEM_LORE %usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` |
| `%usage_limit%` | Limite massimo di utilizzi | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%usage_raw%`, `%usage_limit_raw%` | Solo in ExecutableItems, nel nome e nel lore dell'item: gli utilizzi e il limite di utilizzi come numeri semplici, maggiori informazioni sotto | `lore: ['&7Damage: %math_0_%usage_raw%*2%']` |
| `%durability%` | Durabilità dell'item (1.14+) | `SEND_MESSAGE &7Durability left: %durability%` |
| `%max_use_per_day_item%` | Limite di utilizzi giornaliero (item) | Condizione: `part1: '%max_use_per_day_item%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR`, `part2: '0'` |
| `%max_use_per_day_activator%` | Limite di utilizzi giornaliero (attivatore) | Condizione: `part1: '%max_use_per_day_activator%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR`, `part2: '0'` |

**Speciale:** `%usage_bar(amount:30,color1:&d,color2:&5,symbol:|)%`

![](https://media.ssomar.com/m/docs-img-usage-bar.jpg)
- Crea una barra visiva degli utilizzi
- Parametri: amount (numero di barre), color1 (usato), color2 (non usato), symbol

**Placeholder degli utilizzi grezzi:** `%usage_raw%` e `%usage_limit_raw%`

- Nel nome e nel lore di un ExecutableItem, `%usage%` e `%usage_limit%` sono accompagnati da un tag invisibile (quando `isRefreshableClean` è abilitato, il valore predefinito) che permette al plugin di aggiornare il valore in seguito. All'interno di un placeholder di PlaceholderAPI questo tag rompe l'espressione, ad esempio in `%math_0_%usage%*2%`.
- `%usage_raw%` e `%usage_limit_raw%` restituiscono lo stesso valore senza alcun tag, quindi possono essere usati nei placeholder math di PlaceholderAPI: `%math_0_%usage_raw%*2%`.
- Accettano la scorciatoia `+N` / `-N`, come gli altri placeholder numerici: `%usage_raw%-1`.
- Limite: poiché non hanno un tag, vengono aggiornati solo quando il lore viene ricostruito dalla config. Quando il lore dell'item viene mantenuto così com'è (ad esempio dopo che vi sono state aggiunte delle righe), il valore scritto nel lore resta invariato, mentre `%usage%` continua a essere aggiornato.

## Placeholder dei blocchi

I placeholder del blocco sono disponibili negli attivatori in cui è coinvolto un blocco. Quando il blocco è secondario nell'attivatore, sostituisci `block` con `target_block` (ad es. `%target_block_x%`).

| Placeholder | Restituisce | Esempio |
|------------|---------|---------|
| `%block%` | Tipo di blocco (MAIUSCOLO) | `SEND_MESSAGE &7You broke %block%` |
| `%block_lower%` | Tipo di blocco (minuscolo) | `SEND_MESSAGE &7You broke %block_lower%` |
| `%block_live%`, `%block_live_lower%` | Tipo di blocco attuale | `SEND_MESSAGE &7Current block: %block_live%` |
| `%block_item_material%` | Forma di item del blocco (le colture danno i loro semi, `WALL_TORCH` dà `TORCH`, `OAK_WALL_SIGN` dà `OAK_SIGN`, `POTTED_DANDELION` dà `DANDELION`…) | Usato per dare l'item corrispondente a un blocco piazzato |
| `%block_x%`, `%block_y%`, `%block_z%` | Coordinate (aggiungi `_int` per i numeri interi) | `execute at %player% run setblock %block_x_int% %block_y_int%+1 %block_z_int% air` |
| `%blockface%` | Faccia del blocco selezionata | `SEND_MESSAGE &7Face: %blockface%` |
| `%block_world%` | Nome del mondo | `execute in <<%block_world%>> run setblock %block_x_int% %block_y_int% %block_z_int% air` |
| `%block_biome%` | Nome del bioma | Condizione: `part1: '%block_biome%'`, `comparator: EQUALS`, `part2: 'DESERT'` |
| `%block_dimension%` | Tipo di mondo (nether, normal, end) | Condizione: `part1: '%block_dimension%'`, `comparator: EQUALS`, `part2: 'nether'` |
| `%block_spawnertype%` | Tipo di mob dello spawner | `SEND_MESSAGE &7Spawner: %block_spawnertype%` |
| `%block_is_ageable%` | Indica se il blocco è ageable o no | Condizione: `part1: '%block_is_ageable%'`, `comparator: EQUALS`, `part2: 'true'` |
| `%block_eb_id%` | ID dell'ExecutableBlock (se applicabile) | `SEND_MESSAGE &7EB ID: %block_eb_id%` |
| `%block_data%` | Valore dei dati del blocco | `SEND_MESSAGE &7Block data: %block_data%` |

## Placeholder dei proiettili

I placeholder del proiettile sono disponibili negli attivatori in cui è coinvolto un proiettile.

| Placeholder | Restituisce | Esempio |
|------------|---------|---------|
| `%projectile%` | Tipo di proiettile (MAIUSCOLO) | `SEND_MESSAGE &7You shot a %projectile%` |
| `%projectile_lower_case%` | Tipo di proiettile (minuscolo) | `SEND_MESSAGE &7You shot a %projectile_lower_case%` |
| `%projectile_name%` | Nome personalizzato del proiettile | `SEND_MESSAGE &7Projectile: %projectile_name%` |
| `%projectile_uuid%` | UUID del proiettile | Usato per identificare il proiettile nei comandi basati su NBT |
| `%projectile_uuid_array%` | UUID del proiettile come `[I;-1288600659,-373273272,-1897203511,898446696]` | Usato internamente per memorizzare gli UUID nei comandi basati su NBT |
| `%projectile_x%`, `%projectile_y%`, `%projectile_z%` | Coordinate | `execute at %player% run summon minecraft:lightning_bolt %projectile_x% %projectile_y% %projectile_z%` |
| `%projectile_world%` | Nome del mondo | `SEND_MESSAGE &7World: %projectile_world%` |
| `%bow_force%` | Forza del colpo d'arco (0-1) | Condizione: `part1: '%bow_force%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR_OR_EQUALS`, `part2: '0.9'` |

## Placeholder delle variabili

### Variabili di item/blocco

**Variabili stringa/numero:**
- `%var_X%` - Valore della variabile X
- `%var_X_int%` - Valore intero della variabile X (solo per le variabili di tipo NUMBER)
- `%var_X_roman%` - Valore in numeri romani (solo per le variabili di tipo NUMBER)

**Variabili lista:**
- `%var_MYVAR%` - Lista completa con le parentesi
- `%var_MYVAR_size%` - Numero di elementi
- `%var_MYVAR_contains_VALUE%` - Controlla se la lista contiene VALUE

Esempio: `ADD_ITEM_LORE &7Defense: %var_defense%`

### Variabili di SCore (globali / per giocatore)

SCore dispone anche di un proprio sistema di variabili globali o per giocatore, indipendente dalle variabili di item/blocco. Vedi [SCore Variables](/tools-for-all-plugins-score/score-variables) per i comandi `/score variables`. Una volta installato [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/), queste variabili sono esposte come:
- `%score_variables_<variable-id>%`
- `%score_variables_<variable-id>_int%`
- `%score_variables_<variable-id>_<index>%` (lista, valore all'indice)
- `%score_variables-contains_<variable-name>_<value>%` (lista, booleano)
- `%score_variables-size_<variable-name>%` (lista, dimensione)

## Placeholder del cooldown

Formato: `%score_cooldown_{plugin}:{object_id}:{activator_id}%`

| Placeholder | Restituisce | Esempio |
|------------|---------|---------|
| `%score_cooldown_EI:Free_Lottery:activator1%` | Cooldown rimanente di un attivatore di ExecutableItems | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EI:Free_Lottery:activator1%` |
| `%score_cooldown_EB:MyBlock:activator2%` | Cooldown rimanente di un attivatore di ExecutableBlocks | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EB:MyBlock:activator2%` |

## Placeholder math

Tutti i placeholder numerici di SCore supportano l'aritmetica inline direttamente dopo il tag:
- `%amount%+6` (se `%amount%` = 15, risultato = 21)
- `%amount%-8` (se `%amount%` = 14, risultato = 6)

Per qualsiasi cosa oltre una singola operazione `+`/`-` (moltiplicazione, divisione, espressioni annidate), usa [il placeholder math di PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#math) attorno a un placeholder di SCore:

- `%math_0_(%usage%)*10%` moltiplica per 10 il valore `%usage%` dell'item.
  - Nel nome o nel lore di un ExecutableItem, usa invece [`%usage_raw%`](#item-placeholders): `%math_0_(%usage_raw%)*10%`.
- `%math_{score_variables_userLevel}*10%` moltiplica per 10 la variabile di SCore `userLevel` (vedi [Usare i placeholder di PlaceholderAPI in SCore](#using-placeholderapi-placeholders-in-score)).

:::info
I placeholder di SCore vengono interpretati **prima** dei placeholder di PlaceholderAPI, quindi `%math_...%` riceve sempre il valore di SCore già risolto.
:::

## Placeholder di utilità e testo

| Placeholder | Restituisce | Esempio |
|------------|---------|---------|
| `%rand:MIN\|MAX%` | Numero casuale tra MIN e MAX | `SEND_MESSAGE &6You rolled %rand:1\|100%` |
| `%timestamp%` | Timestamp attuale | `SEND_MESSAGE &7Time: %timestamp%` |
| `%activator_id%` | ID dell'attivatore attuale | `SEND_MESSAGE &7Activator: %activator_id%` |
| `%activator_name%` | Nome dell'attivatore attuale | `SEND_MESSAGE &7Activator: %activator_name%` |

### Comandi AROUND e NEAREST

Usa i placeholder del giocatore/entità con il prefisso `around_target`:
- `%around_target_direction%`
- `%around_target_health%`
- `%around_target_uuid%`
- Se `%around_target%` non funziona, usa `%around_target::step1%`
- `%around_target_count%`: il numero di bersagli del comando `AROUND` / `MOB_AROUND`, vedi [AROUND](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#around)

Esempio: `AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SEND_MESSAGE &cYou got smited!`

### Comandi DAMAGE

| Placeholder | Restituisce | Esempio |
|------------|---------|---------|
| `%score_cmd-damage-boost%` | Bonus al danno attuale | `SEND_MESSAGE &cDamage boost: %score_cmd-damage-boost%` |
| `%score_cmd-damage-resistance%` | Resistenza al danno attuale | `SEND_MESSAGE &cDamage resistance: %score_cmd-damage-resistance%` |

:::warning
**Attack Charge**: `%player_attack_charge%` viene azzerato dopo l'esecuzione del comando DAMAGE, quindi controlla il suo valore prima di usarlo.
:::

### Placeholder di messaggi/comandi

Per `PLAYER_WRITE_COMMAND` e `PLAYER_SEND_MESSAGE`:

| Placeholder | Restituisce | Esempio |
|------------|---------|---------|
| `%arg0%`, `%arg1%`, `%arg2%`, ecc. | Singoli argomenti del comando | `SEND_MESSAGE &7First argument: %arg0%` |
| `%all_args%` | Tutti gli argomenti | `SEND_MESSAGE &7Args: %all_args%` |
| `%all_args_without_first%` | Tutti gli argomenti tranne il primo | `SEND_MESSAGE &7Args: %all_args_without_first%` |

## Placeholder di conteggio specifici dei plugin

### ExecutableItems

- `%executableitems_checkamount%` - EI totali nell'inventario
- Argomenti (usa le virgole tra i valori per fornirne più di uno):
  - `slot`: slot da controllare. Non usare questo argomento se vuoi che vengano valutati tutti gli slot.
  - `id`: ID dell'item ei che vuoi controllare.
  - `owner`: conta solo se il valore dell'owner è corretto
  - `owneruuid`: conta solo se il valore dell'uuid dell'owner è corretto
- Esempi:
  - `%executableitems_checkamount_slot:0,2,3%` - EI in slot specifici
  - `%executableitems_checkamount_id:item1,item2_slot:0,2%` - Item specifici negli slot
  - `%executableitems_checkamount_owner:Special70%`

<hr/>

- `%executableitems_checkvar%` - Valore / Valore totale dei valori delle variabili
- Argomenti (usa le virgole tra i valori per fornirne più di uno):
  - `slot`: slot da controllare. Non usare questo argomento se vuoi che vengano valutati tutti gli slot.
  - `id`: ID dell'item ei che vuoi controllare.
  - `var`: l'id della variabile che vuoi controllare.
- Esempi:
  - `%executableitems_checkvar_id:star_man_var:defense%`
  - `%executableitems_checkvar_slot:-1,40_var:atk_bonus%`
  - `%executableitems_checkvar_var:defense,bonus_defense%`

<hr/>

- `%executableitems_set_<id>%` <CustomTag type="premium" /> - Numero di pezzi del [set](/executableitems/configurations/sets-configuration) `<id>` indossati dal giocatore
- `%executableitems_set_<id>_tier%` - Livello attivo più alto del set (numero di pezzi), `0` se nessuno

:::info
- Se il primo valore di variabile rilevato è una stringa, il valore verrà restituito immediatamente.
- Se il resto dei valori di variabile rilevati è un numero, verranno sommati tutti e verrà restituito il valore totale.
- Al momento non supporta le variabili lista.
:::

### ExecutableBlocks

- `%executableblocks_checkamount%` - EB totali nell'inventario
- Argomenti (usa le virgole tra i valori per fornirne più di uno):
  - `slot`: slot da controllare. Non usare questo argomento se vuoi che vengano valutati tutti gli slot.
  - `id`: ID dell'item ei che vuoi controllare.
  - `owner`: conta solo se il valore dell'owner è corretto
  - `owneruuid`: conta solo se il valore dell'uuid dell'owner è corretto
- Esempi:
  - `%executableblocks_checkamount_slot:0,2,3%` - EB in slot specifici
  - `%executableblocks_checkamount_id:block1,block2_slot:0,2%` - Blocchi specifici negli slot
  - `%executableblocks_checkamount_owner:Special70%`

## Placeholder specifici degli eventi

Questi placeholder sono disponibili solo all'interno dell'attivatore di evento corrispondente.

| Attivatore | Placeholder |
|-----------|--------------|
| **RAID_TRIGGER** | `%player%`, `%badomenlevel%` |
| **RAID_WAVE** | `%raiders%` (elenco di UUID) |
| **RAID_FINISH** | `%badomen%`, `%heroes%` (elenco di UUID) |
| **PLAYER_EXPERIENCE_CHANGE** | `%experience%` |
| **PLAYER_RECEIVE_EFFECT** | `%effect_received%`, `%effect_received_level%`, `%effect_received_duration%` |
| **PLAYER_HIT_ENTITY** | `%critical%` (true/false) |
| **PLAYER_TELEPORT** | `%teleport_cause%` |
| **BROADCAST_MESSAGE** | `%message%`, `%is_async%` |
| **PLUGIN_ENABLE/DISABLE** | `%plugin_name%` |
| **PLAYER_ADVANCEMENT** | `%advancement%` (solo per 1.19+) |
| **PLAYER_RECEIVE_HIT_GLOBAL, PLAYER_RECEIVE_HIT_BY_PLAYER, PLAYER_RECEIVE_HIT_BY_ENTITY** | `%last_damage_taken_nonfinal%`, `%last_damage_taken_nonfinal_int%` si riferiscono al danno grezzo subito. `%last_damage_taken_final%`, `%last_damage_taken_final_int%` si riferiscono al danno subito dopo i bonus difensivi (attributi, effetto resistenza, armatura). Solo i colpi diretti danno il valore corretto; ricevere colpi da proiettili restituisce 0 |
| **ENTITY_DAMAGE_BY_PLAYER, ENTITY_DAMAGE_BY_ENTITY, ENTITY_DAMAGE_BY_BLOCK** (EE) | `%entity_last_damage_taken_final%`, `%entity_last_damage_taken_final_int%` si riferiscono al danno subito dopo i bonus difensivi (armatura, resistenza…). ENTITY_DAMAGE_BY_PLAYER fornisce anche `%entity_last_damage_taken_final_with_booster%` e `%entity_last_damage_taken_final_with_booster_int%`, il danno finale che include i bonus al danno |
| **PLAYER_BLOCK_HIT_OF_PLAYER, PLAYER_BLOCK_HIT_OF_ENTITY** | `%damage_blocked_base%`, `%damage_blocked_base_int%` restituisce il danno grezzo bloccato dallo scudo |
| **PLAYER_PICKUP_ITEM** (EE) | 1.13+: `%item_type%`, `%item_name%`, `%item_amount%`. 1.14-1.21.3: `%item_cmdata%` (-1 se null). 1.21.4+: `%item_cmdata_s_0%` ("null" se vuoto), `%item_cmdata_f_0%` (-1 se vuoto) (primo valore custom model data di tipo stringa/float, dalla 1.21.4+ il custom model data è memorizzato in un array) |
| **PLAYER_INVENTORY_CLICK** (EE) | `%is_shift_click%`, `%is_mouse_click%`, `%is_left_click%`, `%is_right_click%`, `%is_keyboard_click%`, `%is_creative_action%`, `%get_action%` ([Valori Enum di riferimento](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryAction.html)), `%before_slot%`, `%after_slot%`, `%inventory_type%` ([Valori Enum di riferimento](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryType.html)), `%inventory_title%` (1.21+) |
| **PLAYER_KILL_ENTITY** | `%last_hitter%`: tipo di mob di chi ha inflitto l'ultimo colpo. Utile per controllare se hai inflitto tu o il tuo lupo l'ultimo colpo, ad es. `PLAYER`, `WOLF` |

## Usare i placeholder di PlaceholderAPI in SCore

[PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) è uno dei pilastri principali per creare item e blocchi: qualsiasi placeholder di PlaceholderAPI installato (`%vault_eco_balance%`, `%luckperms_prefix%`, ecc.) può essere usato ovunque SCore legga del testo, con la stessa sintassi `%...%`:

- Lore
- Sezione dei comandi
- Messaggi (tutti i tipi di messaggio: messaggio di cooldown, messaggio di condizione non soddisfatta, messaggio delle risorse richieste, ecc.)
- Variabili
- ecc.

I placeholder di SCore vengono interpretati **prima** dei placeholder di PlaceholderAPI, quindi un'espressione PAPI può racchiudere in sicurezza un placeholder di SCore, come nell'esempio math qui sopra (`%math_{score_variables_userLevel}*10%`).

## Documentazione correlata

- [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- [SCore Variables](/tools-for-all-plugins-score/score-variables)
- [Plugin compatibili](/tools-for-all-plugins-score/compatible-plugins)
- [Placeholder Conditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions)

## Domande ?

**SCore è compatibile con PlaceholderAPI?**
Sì. Qualsiasi placeholder di PlaceholderAPI funziona in lore, comandi, messaggi e variabili in ExecutableItems, ExecutableBlocks e ExecutableEvents. I placeholder di SCore vengono interpretati per primi, quindi le due sintassi possono essere combinate nella stessa riga senza conflitti.

**Posso fare calcoli con i placeholder?**
L'incremento/decremento semplice funziona direttamente: `%amount%+6` o `%amount%-8`. Per moltiplicazioni, divisioni o espressioni annidate, racchiudi il placeholder di SCore nel placeholder math di PlaceholderAPI, ad es. `%math_0_(%usage%)*10%`.

**Come uso un placeholder di PlaceholderAPI in un comando di ExecutableItems?**
Scrivilo esattamente come qualsiasi placeholder di SCore, inline nella stringa del comando, ad esempio `SEND_MESSAGE &7Balance: %vault_eco_balance%`. Funziona in comandi, condizioni, lore e in ogni tipo di messaggio, senza alcuna configurazione aggiuntiva oltre ad avere installato PlaceholderAPI e il plugin di origine.

**Qual è la differenza tra `%var_X%` e `%score_variables_X%`?**
`%var_X%` legge una variabile con ambito item/blocco memorizzata direttamente su quell'ExecutableItem o ExecutableBlock. `%score_variables_<id>%` legge una variabile di SCore globale o per giocatore, gestita con `/score variables` ed esposta tramite PlaceholderAPI.

**Perché `%around_target%` a volte non funziona?**
In alcuni attivatori il bersaglio non viene risolto al primo riferimento. Usa invece `%around_target::step1%`, che è l'alternativa documentata per i comandi AROUND/NEAREST.
