---
title: Lista de placeholders de SCore
description: >-
  Lista completa de placeholders de SCore para ExecutableItems, ExecutableBlocks
  y ExecutableEvents: jugador, ítem, bloque, entidad, math y sintaxis
  PlaceholderAPI.
source_hash: 0e838029fd9172b0
translated_at: '2026-10-03T10:26:11.630Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 📚 Lista de Placeholders de SCore

Un placeholder de SCore es un `%tag%` que se sustituye por un valor en vivo (datos del jugador, datos del ítem, datos del bloque, math, números aleatorios) cuando se ejecuta un comando, una condición, una línea de lore o un mensaje. Funcionan en cualquier parte de ExecutableItems, ExecutableBlocks y ExecutableEvents: comandos, condiciones, lore, mensajes y SCore variables. SCore también interpreta cualquier placeholder de [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) en esos mismos lugares, así que las etiquetas de tipo PAPI `%player_name%` y las propias etiquetas de SCore de tipo `%player%` se pueden combinar en la misma línea.

## Tabla de Contenidos

- [Placeholders de Jugador](#player-placeholders)
- [Placeholders de Objetivo / Entidad](#target--entity-placeholders)
- [Placeholders de Ítem](#item-placeholders)
- [Placeholders de Bloque](#block-placeholders)
- [Placeholders de Proyectil](#projectile-placeholders)
- [Placeholders de Variables](#variables-placeholders)
- [Placeholders de Cooldown](#cooldown-placeholders)
- [Placeholders de Math](#math-placeholders)
- [Placeholders de Utilidad y Texto](#utility--text-placeholders)
- [Placeholders de Conteo Específicos de Plugin](#plugin-specific-count-placeholders)
- [Placeholders Específicos de Evento](#event-specific-placeholders)
- [Usar Placeholders de PlaceholderAPI en SCore](#using-placeholderapi-placeholders-in-score)
- [¿Preguntas?](#question-)

:::tip Operaciones Numéricas
Todos los placeholders numéricos admiten operaciones aritméticas:
- **Incremento:** `%amount%+6` (si %amount% = 15, el resultado = 21)
- **Decremento:** `%amount%-8` (si %amount% = 14, el resultado = 6)
:::

## Placeholders de Jugador

Los placeholders de jugador están disponibles en los activadores donde interviene un jugador. Cuando el jugador es secundario en el activador, sustituye `player` por `target` (por ejemplo, `%target_health%`). En ExecutableItems y ExecutableBlocks el ítem/bloque puede tener un **Owner**: sustituye `player` por `owner` para obtener los placeholders del propietario (por ejemplo, `%owner_uuid%`).

| Placeholder | Devuelve | Ejemplo |
|------------|---------|---------|
| `%player%` | Nombre del jugador | `SEND_MESSAGE &aWelcome %player%!` |
| `%player_uuid%` | UUID del jugador | `SEND_MESSAGE &7Your UUID is %player_uuid%` |
| `%player_uuid_array%` | UUID del jugador como `[I;-1288600659,-373273272,-1897203511,898446696]` | Se usa internamente para guardar UUIDs en comandos basados en NBT |
| `%player_world%` | Nombre del mundo (`%player_world_lower%` para minúsculas) | `execute in <<%player_world%>> run summon zombie 100 50 100` |
| `%player_x%`, `%player_y%`, `%player_z%` | Coordenadas (añade `_int` para enteros) | `execute at %player% run setblock %player_x_int% %player_y_int% %player_z_int% air` |
| `%player_pitch%`, `%player_pitch_positive%` | Pitch del jugador (`_int` para entero) | `SEND_MESSAGE &7Pitch: %player_pitch_int%` |
| `%player_yaw%`, `%player_yaw_positive%` | Yaw del jugador (`_int` para entero) | `SEND_MESSAGE &7Yaw: %player_yaw_int%` |
| `%player_direction%` | Dirección cardinal (N, SW, NE, etc.) | Condición: `part1: '%player_direction%'`, `comparator: EQUALS`, `part2: 'SW'` |
| `%player_health%` | Salud actual | `SEND_MESSAGE &cHealth: %player_health%` |
| `%player_max_health%` | Salud máxima | `SEND_MESSAGE &cHealth: %player_health%/%player_max_health%` |
| `%player_slot%` | Slot que activó el activador | `SEND_MESSAGE &7Used from slot %player_slot%` |
| `%player_slot_live%` | Slot que tiene seleccionado actualmente | `SEND_MESSAGE &7Holding slot %player_slot_live%` |
| `%player_team%` | Equipo del jugador (si tiene) | `SEND_MESSAGE &7Team: %player_team%` |
| `%player_attack_charge%` | Cooldown de ataque (1.0 = totalmente cargado) | Condición: `part1: '%player_attack_charge%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR_OR_EQUALS`, `part2: '1.0'` |
| `%last_damage_taken%` | Último daño recibido (`_int` para entero) | `SEND_MESSAGE &cYou took %last_damage_taken_int% damage` |
| `%last_damage_dealt%` | Último daño infligido (`_int` para entero) <CustomTag type="version" version="1.16" /> | `SEND_MESSAGE &aYou dealt %last_damage_dealt_int% damage` |
| `%player_x_velocity%`, `%player_y_velocity%`, `%player_z_velocity%` | Velocidad actual en X, Y, Z (`_int` para entero) | `SEND_MESSAGE &7Y velocity: %player_y_velocity%` |

### Placeholders Iniciales de Jugador

Capturan los valores del jugador en el momento en que se dispara el activador (no cambiarán durante la ejecución):
- `%player_x_initial%`, `%player_y_initial%`, `%player_z_initial%`
- `%player_world_initial%`
- `%player_pitch_initial%`, `%player_yaw_initial%`
- `%player_direction_initial%`

## Placeholders de Objetivo / Entidad

Los placeholders de entidad están disponibles en los activadores donde interviene una entidad. Cuando la entidad es secundaria en el activador, sustituye `entity` por `target` (por ejemplo, `%target_x%`).

| Placeholder | Devuelve | Ejemplo |
|------------|---------|---------|
| `%entity%` | Tipo de entidad (MAYÚSCULAS) | `SEND_MESSAGE &7You hit a %entity%` |
| `%entity_lower_case%` | Tipo de entidad (minúsculas) | `SEND_MESSAGE &7You hit a %entity_lower_case%` |
| `%entity_name%` | Nombre personalizado de la entidad | `SEND_MESSAGE &7Target: %entity_name%` |
| `%entity_uuid%` | UUID de la entidad | Se usa para identificar al objetivo en comandos basados en NBT |
| `%entity_uuid_array%` | UUID de la entidad como `[I;-1288600659,-373273272,-1897203511,898446696]` | Se usa internamente para guardar UUIDs en comandos basados en NBT |
| `%entity_x%`, `%entity_y%`, `%entity_z%` | Coordenadas (añade `_int` para enteros) | `execute at %entity% run setblock %entity_x_int% %entity_y_int% %entity_z_int% air` |
| `%entity_health%` | Salud actual | `SEND_MESSAGE &cTarget health: %entity_health%` |
| `%entity_max_health%` | Salud máxima | `SEND_MESSAGE &cTarget health: %entity_health%/%entity_max_health%` |
| `%entity_world%` | Nombre del mundo | `SEND_MESSAGE &7Entity world: %entity_world%` |
| `%entity_direction%` | Dirección hacia la que mira | Condición: `part1: '%entity_direction%'`, `comparator: EQUALS`, `part2: 'N'` |
| `%entity_pitch%`, `%entity_yaw%` | Valores de rotación | `SEND_MESSAGE &7Yaw: %entity_yaw%` |
| `%entity_team%` | Equipo de la entidad (si tiene) | `SEND_MESSAGE &7Team: %entity_team%` |
| `%entity_serialized%` | Definición completa de la entidad | Se usa para copiar/restaurar una entidad en comandos avanzados |
| `%entity_last_damage_taken%` | Último daño recibido (añade `_int` para enteros). Las variantes `_final` solo existen en los eventos de daño a entidad de ExecutableEvents, consulta los [placeholders del activador](#event-specific-placeholders) | `SEND_MESSAGE &cTarget took %entity_last_damage_taken_int% damage` |
| `%entity_x_velocity%`, `%entity_y_velocity%`, `%entity_z_velocity%` | Velocidad actual en X, Y, Z (`_int` para entero) | `SEND_MESSAGE &7Target Y velocity: %entity_y_velocity%` |

## Placeholders de Ítem

| Placeholder | Devuelve | Ejemplo |
|------------|---------|---------|
| `%name%` | Nombre del ExecutableItem | `SEND_MESSAGE &aYou used %name%` |
| `%id%` | ID del ExecutableItem | `SEND_MESSAGE &7Item ID: %id%` |
| `%amount%` | Cantidad en la pila actual | `SEND_MESSAGE &7You have %amount% in this stack` |
| `%usage%` | Contador de uso actual | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%usage_roman%` | Uso en números romanos | `ADD_ITEM_LORE &7Usage: %usage_roman%` |
| `%usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` | Barra visual de uso, más información abajo | `ADD_ITEM_LORE %usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` |
| `%usage_limit%` | Límite máximo de uso | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%durability%` | Durabilidad del ítem (1.14+) | `SEND_MESSAGE &7Durability left: %durability%` |
| `%max_use_per_day_item%` | Límite de uso diario (ítem) | Condición: `part1: '%max_use_per_day_item%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR`, `part2: '0'` |
| `%max_use_per_day_activator%` | Límite de uso diario (activador) | Condición: `part1: '%max_use_per_day_activator%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR`, `part2: '0'` |

**Especial:** `%usage_bar(amount:30,color1:&d,color2:&5,symbol:|)%`

![](https://media.ssomar.com/m/docs-img-usage-bar.jpg)
- Crea una barra visual de uso
- Parámetros: amount (número de barras), color1 (usado), color2 (sin usar), symbol

## Placeholders de Bloque

Los placeholders de bloque están disponibles en los activadores donde interviene un bloque. Cuando el bloque es secundario en el activador, sustituye `block` por `target_block` (por ejemplo, `%target_block_x%`).

| Placeholder | Devuelve | Ejemplo |
|------------|---------|---------|
| `%block%` | Tipo de bloque (MAYÚSCULAS) | `SEND_MESSAGE &7You broke %block%` |
| `%block_lower%` | Tipo de bloque (minúsculas) | `SEND_MESSAGE &7You broke %block_lower%` |
| `%block_live%`, `%block_live_lower%` | Tipo de bloque actual | `SEND_MESSAGE &7Current block: %block_live%` |
| `%block_item_material%` | Forma en ítem del bloque (los cultivos dan sus semillas, `WALL_TORCH` da `TORCH`, `OAK_WALL_SIGN` da `OAK_SIGN`, `POTTED_DANDELION` da `DANDELION`…) | Se usa para dar el ítem correspondiente a un bloque colocado |
| `%block_x%`, `%block_y%`, `%block_z%` | Coordenadas (añade `_int` para enteros) | `execute at %player% run setblock %block_x_int% %block_y_int%+1 %block_z_int% air` |
| `%blockface%` | Cara del bloque seleccionada | `SEND_MESSAGE &7Face: %blockface%` |
| `%block_world%` | Nombre del mundo | `execute in <<%block_world%>> run setblock %block_x_int% %block_y_int% %block_z_int% air` |
| `%block_biome%` | Nombre del bioma | Condición: `part1: '%block_biome%'`, `comparator: EQUALS`, `part2: 'DESERT'` |
| `%block_dimension%` | Tipo de mundo (nether, normal, end) | Condición: `part1: '%block_dimension%'`, `comparator: EQUALS`, `part2: 'nether'` |
| `%block_spawnertype%` | Tipo de mob del spawner | `SEND_MESSAGE &7Spawner: %block_spawnertype%` |
| `%block_is_ageable%` | Indica si el bloque es ageable o no | Condición: `part1: '%block_is_ageable%'`, `comparator: EQUALS`, `part2: 'true'` |
| `%block_eb_id%` | ID del ExecutableBlock (si corresponde) | `SEND_MESSAGE &7EB ID: %block_eb_id%` |
| `%block_data%` | Valor de datos del bloque | `SEND_MESSAGE &7Block data: %block_data%` |

## Placeholders de Proyectil

Los placeholders de proyectil están disponibles en los activadores donde interviene un proyectil.

| Placeholder | Devuelve | Ejemplo |
|------------|---------|---------|
| `%projectile%` | Tipo de proyectil (MAYÚSCULAS) | `SEND_MESSAGE &7You shot a %projectile%` |
| `%projectile_lower_case%` | Tipo de proyectil (minúsculas) | `SEND_MESSAGE &7You shot a %projectile_lower_case%` |
| `%projectile_name%` | Nombre personalizado del proyectil | `SEND_MESSAGE &7Projectile: %projectile_name%` |
| `%projectile_uuid%` | UUID del proyectil | Se usa para identificar el proyectil en comandos basados en NBT |
| `%projectile_uuid_array%` | UUID del proyectil como `[I;-1288600659,-373273272,-1897203511,898446696]` | Se usa internamente para guardar UUIDs en comandos basados en NBT |
| `%projectile_x%`, `%projectile_y%`, `%projectile_z%` | Coordenadas | `execute at %player% run summon minecraft:lightning_bolt %projectile_x% %projectile_y% %projectile_z%` |
| `%projectile_world%` | Nombre del mundo | `SEND_MESSAGE &7World: %projectile_world%` |
| `%bow_force%` | Fuerza del disparo de arco (0-1) | Condición: `part1: '%bow_force%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR_OR_EQUALS`, `part2: '0.9'` |

## Placeholders de Variables

### Variables de Ítem/Bloque

**Variables de Texto/Número:**
- `%var_X%` : Valor de la variable X
- `%var_X_int%` : Valor entero de la variable X (solo para variables de tipo NUMBER)
- `%var_X_roman%` : Valor en números romanos (solo para variables de tipo NUMBER)

**Variables de Lista:**
- `%var_MYVAR%` : Lista completa con corchetes
- `%var_MYVAR_size%` : Número de elementos
- `%var_MYVAR_contains_VALUE%` : Comprueba si la lista contiene VALUE

Ejemplo: `ADD_ITEM_LORE &7Defense: %var_defense%`

### SCore Variables (Globales / Por Jugador)

SCore también tiene su propio sistema de variables globales o por jugador, independiente de las variables de ítem/bloque. Consulta [SCore Variables](/tools-for-all-plugins-score/score-variables) para los comandos `/score variables`. Una vez instalado [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/), estas variables se exponen como:
- `%score_variables_<variable-id>%`
- `%score_variables_<variable-id>_int%`
- `%score_variables_<variable-id>_<index>%` (lista, valor en el índice)
- `%score_variables-contains_<variable-name>_<value>%` (lista, booleano)
- `%score_variables-size_<variable-name>%` (lista, tamaño)

## Placeholders de Cooldown

Formato: `%score_cooldown_{plugin}:{object_id}:{activator_id}%`

| Placeholder | Devuelve | Ejemplo |
|------------|---------|---------|
| `%score_cooldown_EI:Free_Lottery:activator1%` | Cooldown restante de un activador de ExecutableItems | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EI:Free_Lottery:activator1%` |
| `%score_cooldown_EB:MyBlock:activator2%` | Cooldown restante de un activador de ExecutableBlocks | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EB:MyBlock:activator2%` |

## Placeholders de Math

Todos los placeholders numéricos de SCore admiten operaciones aritméticas directamente después de la etiqueta:
- `%amount%+6` (si `%amount%` = 15, el resultado = 21)
- `%amount%-8` (si `%amount%` = 14, el resultado = 6)

Para cualquier cosa que vaya más allá de una sola operación `+`/`-` (multiplicación, división, expresiones anidadas), usa el [placeholder de math de PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#math) alrededor de un placeholder de SCore:

- `%math_0_(%usage%)*10%` multiplica el `%usage%` del ítem por 10.
- `%math_{score_variables_userLevel}*10%` multiplica la variable de SCore `userLevel` por 10 (consulta [Usar Placeholders de PlaceholderAPI en SCore](#using-placeholderapi-placeholders-in-score)).

:::info
Los placeholders de SCore se interpretan **antes** que los de PlaceholderAPI, así que `%math_...%` siempre recibe el valor de SCore ya resuelto.
:::

## Placeholders de Utilidad y Texto

| Placeholder | Devuelve | Ejemplo |
|------------|---------|---------|
| `%rand:MIN\|MAX%` | Número aleatorio entre MIN y MAX | `SEND_MESSAGE &6You rolled %rand:1\|100%` |
| `%timestamp%` | Marca de tiempo actual | `SEND_MESSAGE &7Time: %timestamp%` |
| `%activator_id%` | ID del activador actual | `SEND_MESSAGE &7Activator: %activator_id%` |
| `%activator_name%` | Nombre del activador actual | `SEND_MESSAGE &7Activator: %activator_name%` |

### Comandos AROUND y NEAREST

Usa los placeholders de jugador/entidad con el prefijo `around_target`:
- `%around_target_direction%`
- `%around_target_health%`
- `%around_target_uuid%`
- Si `%around_target%` falla, usa `%around_target::step1%`

Ejemplo: `AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SEND_MESSAGE &cYou got smited!`

### Comandos DAMAGE

| Placeholder | Devuelve | Ejemplo |
|------------|---------|---------|
| `%score_cmd-damage-boost%` | Bonus de daño actual | `SEND_MESSAGE &cDamage boost: %score_cmd-damage-boost%` |
| `%score_cmd-damage-resistance%` | Resistencia a daño actual | `SEND_MESSAGE &cDamage resistance: %score_cmd-damage-resistance%` |

:::warning
**Attack Charge**: `%player_attack_charge%` se reinicia después de que se ejecuta el comando DAMAGE, así que comprueba su valor antes de usarlo.
:::

### Placeholders de Mensaje/Comando

Para `PLAYER_WRITE_COMMAND` y `PLAYER_SEND_MESSAGE`:

| Placeholder | Devuelve | Ejemplo |
|------------|---------|---------|
| `%arg0%`, `%arg1%`, `%arg2%`, etc. | Argumentos individuales del comando | `SEND_MESSAGE &7First argument: %arg0%` |
| `%all_args%` | Todos los argumentos | `SEND_MESSAGE &7Args: %all_args%` |
| `%all_args_without_first%` | Todos excepto el primer argumento | `SEND_MESSAGE &7Args: %all_args_without_first%` |

## Placeholders de Conteo Específicos de Plugin

### ExecutableItems

- `%executableitems_checkamount%` : Total de EI en el inventario
- Argumentos (usa comas entre valores para proporcionar varios valores):
  - `slot`: Slots a comprobar. No uses este argumento si quieres que se evalúen todos los slots.
  - `id`: ID del ítem ei que quieres comprobar.
  - `owner`: Solo cuenta si el valor del owner es correcto
  - `owneruuid`: Solo cuenta si el uuid del owner es correcto
- Ejemplos:
  - `%executableitems_checkamount_slot:0,2,3%` : EI en slots específicos
  - `%executableitems_checkamount_id:item1,item2_slot:0,2%` : Ítems específicos en slots
  - `%executableitems_checkamount_owner:Special70%`

<hr/>

- `%executableitems_checkvar%` : Valor / Valor Total de los valores de la Variable
- Argumentos (usa comas entre valores para proporcionar varios valores):
  - `slot`: Slots a comprobar. No uses este argumento si quieres que se evalúen todos los slots.
  - `id`: ID del ítem ei que quieres comprobar.
  - `var`: El id de la variable que quieres comprobar.
- Ejemplos:
  - `%executableitems_checkvar_id:star_man_var:defense%`
  - `%executableitems_checkvar_slot:-1,40_var:atk_bonus%`
  - `%executableitems_checkvar_var:defense,bonus_defense%`

<hr/>

- `%executableitems_set_<id>%` <CustomTag type="premium" /> : Número de piezas del [set](/executableitems/configurations/sets-configuration) `<id>` que el jugador lleva puesto
- `%executableitems_set_<id>_tier%` : Tier activo más alto del set (número de piezas), `0` si ninguno

:::info
- Si el primer valor de variable detectado es una cadena de texto, ese valor se devuelve inmediatamente.
- Si el resto de valores de variable detectados son numéricos, se sumarán todos y se devolverá el valor total.
- Actualmente no admite variables de tipo lista.
:::

### ExecutableBlocks

- `%executableblocks_checkamount%` : Total de EB en el inventario
- Argumentos (usa comas entre valores para proporcionar varios valores):
  - `slot`: Slots a comprobar. No uses este argumento si quieres que se evalúen todos los slots.
  - `id`: ID del ítem ei que quieres comprobar.
  - `owner`: Solo cuenta si el valor del owner es correcto
  - `owneruuid`: Solo cuenta si el uuid del owner es correcto
- Ejemplos:
  - `%executableblocks_checkamount_slot:0,2,3%` : EB en slots específicos
  - `%executableblocks_checkamount_id:block1,block2_slot:0,2%` : Bloques específicos en slots
  - `%executableblocks_checkamount_owner:Special70%`

## Placeholders Específicos de Evento

Estos placeholders solo están disponibles dentro del activador de evento correspondiente.

| Activador | Placeholders |
|-----------|--------------|
| **RAID_TRIGGER** | `%player%`, `%badomenlevel%` |
| **RAID_WAVE** | `%raiders%` (lista de UUID) |
| **RAID_FINISH** | `%badomen%`, `%heroes%` (lista de UUID) |
| **PLAYER_EXPERIENCE_CHANGE** | `%experience%` |
| **PLAYER_RECEIVE_EFFECT** | `%effect_received%`, `%effect_received_level%`, `%effect_received_duration%` |
| **PLAYER_HIT_ENTITY** | `%critical%` (true/false) |
| **PLAYER_TELEPORT** | `%teleport_cause%` |
| **BROADCAST_MESSAGE** | `%message%`, `%is_async%` |
| **PLUGIN_ENABLE/DISABLE** | `%plugin_name%` |
| **PLAYER_ADVANCEMENT** | `%advancement%` (Solo para 1.19+) |
| **PLAYER_RECEIVE_HIT_GLOBAL, PLAYER_RECEIVE_HIT_BY_PLAYER, PLAYER_RECEIVE_HIT_BY_ENTITY** | `%last_damage_taken_nonfinal%`, `%last_damage_taken_nonfinal_int%` se refieren al daño bruto recibido. `%last_damage_taken_final%`, `%last_damage_taken_final_int%` se refieren al daño recibido después de los buffs de defensa (atributos, efecto de resistencia, armadura). Solo los golpes directos dan el valor correcto; recibir golpes de proyectiles devuelve 0 |
| **ENTITY_DAMAGE_BY_PLAYER, ENTITY_DAMAGE_BY_ENTITY, ENTITY_DAMAGE_BY_BLOCK** (EE) | `%entity_last_damage_taken_final%`, `%entity_last_damage_taken_final_int%` se refieren al daño recibido después de los buffs de defensa (armadura, resistencia…). ENTITY_DAMAGE_BY_PLAYER también da `%entity_last_damage_taken_final_with_booster%` y `%entity_last_damage_taken_final_with_booster_int%`, el daño final incluyendo los bonus de daño |
| **PLAYER_BLOCK_HIT_OF_PLAYER, PLAYER_BLOCK_HIT_OF_ENTITY** | `%damage_blocked_base%`, `%damage_blocked_base_int%` devuelve el daño bruto bloqueado por el escudo |
| **PLAYER_PICKUP_ITEM** (EE) | 1.13+: `%item_type%`, `%item_name%`, `%item_amount%`. 1.14-1.21.3: `%item_cmdata%` (-1 si es null). 1.21.4+: `%item_cmdata_s_0%` ("null" si está vacío), `%item_cmdata_f_0%` (-1 si está vacío) (primer valor de custom model data en texto/float, ya que desde 1.21.4+ el custom model data se guarda en un array) |
| **PLAYER_INVENTORY_CLICK** (EE) | `%is_shift_click%`, `%is_mouse_click%`, `%is_left_click%`, `%is_right_click%`, `%is_keyboard_click%`, `%is_creative_action%`, `%get_action%` ([Valores de Enum de Referencia](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryAction.html)), `%before_slot%`, `%after_slot%`, `%inventory_type%` ([Valores de Enum de Referencia](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryType.html)), `%inventory_title%` (1.21+) |
| **PLAYER_KILL_ENTITY** | `%last_hitter%`: tipo de mob de quien dio el golpe final. Útil para comprobar si fuiste tú o tu lobo mascota quien dio el golpe final, por ejemplo `PLAYER`, `WOLF` |

## Usar Placeholders de PlaceholderAPI en SCore

[PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) es uno de los pilares principales para construir ítems y bloques: cualquier placeholder de PlaceholderAPI instalado (`%vault_eco_balance%`, `%luckperms_prefix%`, etc.) se puede usar en cualquier lugar donde SCore lea texto, usando la misma sintaxis `%...%`:

- Lore
- Sección de comandos
- Mensajes (todos los tipos de mensaje: mensaje de cooldown, mensaje de condición no cumplida, mensaje de cosas requeridas, etc.)
- Variables
- etc.

Los propios placeholders de SCore se interpretan **antes** que los de PlaceholderAPI, así que una expresión PAPI puede envolver con seguridad una de SCore, como en el ejemplo de math de arriba (`%math_{score_variables_userLevel}*10%`).

## Documentación Relacionada

- [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- [SCore Variables](/tools-for-all-plugins-score/score-variables)
- [Plugins Compatibles](/tools-for-all-plugins-score/compatible-plugins)
- [Condiciones de Placeholder](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions)

## ¿Preguntas?

**¿Es SCore compatible con PlaceholderAPI?**
Sí. Cualquier placeholder de PlaceholderAPI funciona en lore, comandos, mensajes y variables en ExecutableItems, ExecutableBlocks y ExecutableEvents. Los propios placeholders de SCore se interpretan primero, así que las dos sintaxis se pueden combinar en la misma línea sin conflicto.

**¿Puedo hacer operaciones de math con placeholders?**
El incremento/decremento simple funciona directamente: `%amount%+6` o `%amount%-8`. Para multiplicación, división o expresiones anidadas, envuelve el placeholder de SCore en el placeholder de math de PlaceholderAPI, por ejemplo `%math_0_(%usage%)*10%`.

**¿Cómo uso un placeholder de PlaceholderAPI en un comando de ExecutableItems?**
Escríbelo exactamente igual que cualquier placeholder de SCore, en línea dentro de la cadena del comando, por ejemplo `SEND_MESSAGE &7Balance: %vault_eco_balance%`. Funciona en comandos, condiciones, lore y en todos los tipos de mensaje, sin necesidad de configuración adicional más allá de tener instalados PlaceholderAPI y el plugin de origen.

**¿Cuál es la diferencia entre `%var_X%` y `%score_variables_X%`?**
`%var_X%` lee una variable de ámbito ítem/bloque guardada directamente en ese ExecutableItem o ExecutableBlock. `%score_variables_<id>%` lee una variable de SCore global o por jugador, gestionada con `/score variables` y expuesta a través de PlaceholderAPI.

**¿Por qué `%around_target%` a veces no funciona?**
En algunos activadores el objetivo no se resuelve en la primera referencia. Usa `%around_target::step1%` en su lugar, que es el fallback documentado para los comandos AROUND/NEAREST.
