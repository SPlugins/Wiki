---
title: Lista de placeholders do SCore
description: >-
  Lista completa de placeholders do SCore para ExecutableItems, ExecutableBlocks
  e ExecutableEvents: player, item, block, entity, math e sintaxe
  PlaceholderAPI.
source_hash: 0e838029fd9172b0
translated_at: '2026-10-03T10:26:14.774Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 📚 Lista de Placeholders do SCore

Um placeholder do SCore é um `%tag%` que é substituído por um valor em tempo real (dados do player, dados do item, dados do bloco, matemática, números aleatórios) quando um comando, condição, linha de lore ou mensagem é executado. Eles funcionam em qualquer parte do ExecutableItems, ExecutableBlocks e ExecutableEvents: comandos, condições, lore, mensagens e SCore variables. O SCore também interpreta todo placeholder do [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) nos mesmos lugares, então tags no estilo `%player_name%` do PAPI e as próprias tags no estilo `%player%` do SCore podem ser misturadas na mesma linha.

## Índice

- [Placeholders de Player](#player-placeholders)
- [Placeholders de Target / Entity](#target--entity-placeholders)
- [Placeholders de Item](#item-placeholders)
- [Placeholders de Block](#block-placeholders)
- [Placeholders de Projectile](#projectile-placeholders)
- [Placeholders de Variables](#variables-placeholders)
- [Placeholders de Cooldown](#cooldown-placeholders)
- [Placeholders de Math](#math-placeholders)
- [Placeholders de Utilidade e Texto](#utility--text-placeholders)
- [Placeholders de Contagem Específicos de Plugin](#plugin-specific-count-placeholders)
- [Placeholders Específicos de Evento](#event-specific-placeholders)
- [Usando Placeholders do PlaceholderAPI no SCore](#using-placeholderapi-placeholders-in-score)
- [Dúvidas?](#question-)

:::tip Operações Numéricas
Todos os placeholders numéricos suportam operações aritméticas:
- **Incremento:** `%amount%+6` (se %amount% = 15, resultado = 21)
- **Decremento:** `%amount%-8` (se %amount% = 14, resultado = 6)
:::

## Placeholders de Player

Os placeholders de player estão disponíveis nos ativadores em que um player está envolvido. Quando o player é secundário no ativador, substitua `player` por `target` (ex.: `%target_health%`). No ExecutableItems e ExecutableBlocks, o item/bloco pode ter um **Owner**: substitua `player` por `owner` para obter os placeholders do owner (ex.: `%owner_uuid%`).

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%player%` | Nome do player | `SEND_MESSAGE &aWelcome %player%!` |
| `%player_uuid%` | UUID do player | `SEND_MESSAGE &7Your UUID is %player_uuid%` |
| `%player_uuid_array%` | UUID do player como `[I;-1288600659,-373273272,-1897203511,898446696]` | Usado internamente para armazenar UUIDs em comandos baseados em NBT |
| `%player_world%` | Nome do mundo (`%player_world_lower%` para minúsculo) | `execute in <<%player_world%>> run summon zombie 100 50 100` |
| `%player_x%`, `%player_y%`, `%player_z%` | Coordenadas (adicione `_int` para inteiros) | `execute at %player% run setblock %player_x_int% %player_y_int% %player_z_int% air` |
| `%player_pitch%`, `%player_pitch_positive%` | Pitch do player (`_int` para inteiro) | `SEND_MESSAGE &7Pitch: %player_pitch_int%` |
| `%player_yaw%`, `%player_yaw_positive%` | Yaw do player (`_int` para inteiro) | `SEND_MESSAGE &7Yaw: %player_yaw_int%` |
| `%player_direction%` | Direção cardinal (N, SW, NE, etc.) | Condição: `part1: '%player_direction%'`, `comparator: EQUALS`, `part2: 'SW'` |
| `%player_health%` | Vida atual | `SEND_MESSAGE &cHealth: %player_health%` |
| `%player_max_health%` | Vida máxima | `SEND_MESSAGE &cHealth: %player_health%/%player_max_health%` |
| `%player_slot%` | Slot que acionou o ativador | `SEND_MESSAGE &7Used from slot %player_slot%` |
| `%player_slot_live%` | Slot atualmente selecionado | `SEND_MESSAGE &7Holding slot %player_slot_live%` |
| `%player_team%` | Time do player (se houver) | `SEND_MESSAGE &7Team: %player_team%` |
| `%player_attack_charge%` | Cooldown de ataque (1.0 = totalmente carregado) | Condição: `part1: '%player_attack_charge%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR_OR_EQUALS`, `part2: '1.0'` |
| `%last_damage_taken%` | Último dano recebido (`_int` para inteiro) | `SEND_MESSAGE &cYou took %last_damage_taken_int% damage` |
| `%last_damage_dealt%` | Último dano causado (`_int` para inteiro) <CustomTag type="version" version="1.16" /> | `SEND_MESSAGE &aYou dealt %last_damage_dealt_int% damage` |
| `%player_x_velocity%`, `%player_y_velocity%`, `%player_z_velocity%` | Velocidade atual em X, Y, Z (`_int` para inteiro) | `SEND_MESSAGE &7Y velocity: %player_y_velocity%` |

### Placeholders de Player Iniciais

Captura os valores do player no momento em que o ativador é acionado (não muda durante a execução):
- `%player_x_initial%`, `%player_y_initial%`, `%player_z_initial%`
- `%player_world_initial%`
- `%player_pitch_initial%`, `%player_yaw_initial%`
- `%player_direction_initial%`

## Placeholders de Target / Entity

Os placeholders de entity estão disponíveis nos ativadores em que uma entity está envolvida. Quando a entity é secundária no ativador, substitua `entity` por `target` (ex.: `%target_x%`).

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%entity%` | Tipo da entity (MAIÚSCULO) | `SEND_MESSAGE &7You hit a %entity%` |
| `%entity_lower_case%` | Tipo da entity (minúsculo) | `SEND_MESSAGE &7You hit a %entity_lower_case%` |
| `%entity_name%` | Nome personalizado da entity | `SEND_MESSAGE &7Target: %entity_name%` |
| `%entity_uuid%` | UUID da entity | Usado para identificar o target em comandos baseados em NBT |
| `%entity_uuid_array%` | UUID da entity como `[I;-1288600659,-373273272,-1897203511,898446696]` | Usado internamente para armazenar UUIDs em comandos baseados em NBT |
| `%entity_x%`, `%entity_y%`, `%entity_z%` | Coordenadas (adicione `_int` para inteiros) | `execute at %entity% run setblock %entity_x_int% %entity_y_int% %entity_z_int% air` |
| `%entity_health%` | Vida atual | `SEND_MESSAGE &cTarget health: %entity_health%` |
| `%entity_max_health%` | Vida máxima | `SEND_MESSAGE &cTarget health: %entity_health%/%entity_max_health%` |
| `%entity_world%` | Nome do mundo | `SEND_MESSAGE &7Entity world: %entity_world%` |
| `%entity_direction%` | Direção para a qual está olhando | Condição: `part1: '%entity_direction%'`, `comparator: EQUALS`, `part2: 'N'` |
| `%entity_pitch%`, `%entity_yaw%` | Valores de rotação | `SEND_MESSAGE &7Yaw: %entity_yaw%` |
| `%entity_team%` | Time da entity (se houver) | `SEND_MESSAGE &7Team: %entity_team%` |
| `%entity_serialized%` | Definição completa da entity | Usado para copiar/restaurar uma entity em comandos avançados |
| `%entity_last_damage_taken%` | Último dano recebido (adicione `_int` para inteiros). As variantes `_final` só existem nos eventos de dano a entity do ExecutableEvents, veja [placeholders do ativador](#event-specific-placeholders) | `SEND_MESSAGE &cTarget took %entity_last_damage_taken_int% damage` |
| `%entity_x_velocity%`, `%entity_y_velocity%`, `%entity_z_velocity%` | Velocidade atual em X, Y, Z (`_int` para inteiro) | `SEND_MESSAGE &7Target Y velocity: %entity_y_velocity%` |

## Placeholders de Item

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%name%` | Nome do ExecutableItem | `SEND_MESSAGE &aYou used %name%` |
| `%id%` | ID do ExecutableItem | `SEND_MESSAGE &7Item ID: %id%` |
| `%amount%` | Quantidade na stack atual | `SEND_MESSAGE &7You have %amount% in this stack` |
| `%usage%` | Contagem de uso atual | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%usage_roman%` | Uso em numerais romanos | `ADD_ITEM_LORE &7Usage: %usage_roman%` |
| `%usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` | Barra visual de uso, mais informações abaixo | `ADD_ITEM_LORE %usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` |
| `%usage_limit%` | Limite máximo de uso | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%durability%` | Durabilidade do item (1.14+) | `SEND_MESSAGE &7Durability left: %durability%` |
| `%max_use_per_day_item%` | Limite diário de uso (item) | Condição: `part1: '%max_use_per_day_item%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR`, `part2: '0'` |
| `%max_use_per_day_activator%` | Limite diário de uso (ativador) | Condição: `part1: '%max_use_per_day_activator%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR`, `part2: '0'` |

**Especial:** `%usage_bar(amount:30,color1:&d,color2:&5,symbol:|)%`

![](https://media.ssomar.com/m/docs-img-usage-bar.jpg)
- Cria uma barra visual de uso
- Parâmetros: amount (quantidade de barras), color1 (usado), color2 (não usado), symbol

## Placeholders de Block

Os placeholders de block estão disponíveis nos ativadores em que um bloco está envolvido. Quando o bloco é secundário no ativador, substitua `block` por `target_block` (ex.: `%target_block_x%`).

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%block%` | Tipo de bloco (MAIÚSCULO) | `SEND_MESSAGE &7You broke %block%` |
| `%block_lower%` | Tipo de bloco (minúsculo) | `SEND_MESSAGE &7You broke %block_lower%` |
| `%block_live%`, `%block_live_lower%` | Tipo de bloco atual | `SEND_MESSAGE &7Current block: %block_live%` |
| `%block_item_material%` | Forma de item do bloco (crops dão suas seeds, `WALL_TORCH` dá `TORCH`, `OAK_WALL_SIGN` dá `OAK_SIGN`, `POTTED_DANDELION` dá `DANDELION`…) | Usado para dar o item correspondente a um bloco colocado |
| `%block_x%`, `%block_y%`, `%block_z%` | Coordenadas (adicione `_int` para inteiros) | `execute at %player% run setblock %block_x_int% %block_y_int%+1 %block_z_int% air` |
| `%blockface%` | Face selecionada do bloco | `SEND_MESSAGE &7Face: %blockface%` |
| `%block_world%` | Nome do mundo | `execute in <<%block_world%>> run setblock %block_x_int% %block_y_int% %block_z_int% air` |
| `%block_biome%` | Nome do bioma | Condição: `part1: '%block_biome%'`, `comparator: EQUALS`, `part2: 'DESERT'` |
| `%block_dimension%` | Tipo de mundo (nether, normal, end) | Condição: `part1: '%block_dimension%'`, `comparator: EQUALS`, `part2: 'nether'` |
| `%block_spawnertype%` | Tipo de mob do spawner | `SEND_MESSAGE &7Spawner: %block_spawnertype%` |
| `%block_is_ageable%` | Retorna se o bloco é ageable ou não | Condição: `part1: '%block_is_ageable%'`, `comparator: EQUALS`, `part2: 'true'` |
| `%block_eb_id%` | ID do ExecutableBlock (se aplicável) | `SEND_MESSAGE &7EB ID: %block_eb_id%` |
| `%block_data%` | Valor de data do bloco | `SEND_MESSAGE &7Block data: %block_data%` |

## Placeholders de Projectile

Os placeholders de projectile estão disponíveis nos ativadores em que um projectile está envolvido.

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%projectile%` | Tipo de projectile (MAIÚSCULO) | `SEND_MESSAGE &7You shot a %projectile%` |
| `%projectile_lower_case%` | Tipo de projectile (minúsculo) | `SEND_MESSAGE &7You shot a %projectile_lower_case%` |
| `%projectile_name%` | Nome personalizado do projectile | `SEND_MESSAGE &7Projectile: %projectile_name%` |
| `%projectile_uuid%` | UUID do projectile | Usado para identificar o projectile em comandos baseados em NBT |
| `%projectile_uuid_array%` | UUID do projectile como `[I;-1288600659,-373273272,-1897203511,898446696]` | Usado internamente para armazenar UUIDs em comandos baseados em NBT |
| `%projectile_x%`, `%projectile_y%`, `%projectile_z%` | Coordenadas | `execute at %player% run summon minecraft:lightning_bolt %projectile_x% %projectile_y% %projectile_z%` |
| `%projectile_world%` | Nome do mundo | `SEND_MESSAGE &7World: %projectile_world%` |
| `%bow_force%` | Força do disparo do arco (0-1) | Condição: `part1: '%bow_force%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR_OR_EQUALS`, `part2: '0.9'` |

## Placeholders de Variables

### Variables de Item/Block

**Variables de String/Number:**
- `%var_X%` - Valor da variable X
- `%var_X_int%` - Valor inteiro da variable X (apenas para variables do tipo NUMBER)
- `%var_X_roman%` - Valor em numeral romano (apenas para variables do tipo NUMBER)

**Variables de Lista:**
- `%var_MYVAR%` - Lista completa com colchetes
- `%var_MYVAR_size%` - Número de elementos
- `%var_MYVAR_contains_VALUE%` - Verifica se a lista contém VALUE

Exemplo: `ADD_ITEM_LORE &7Defense: %var_defense%`

### SCore Variables (Globais / Por Player)

O SCore também tem seu próprio sistema de variáveis globais ou por player, independente das variáveis de item/block. Veja [SCore Variables](/tools-for-all-plugins-score/score-variables) para os comandos `/score variables`. Depois que o [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) estiver instalado, essas variáveis são expostas como:
- `%score_variables_<variable-id>%`
- `%score_variables_<variable-id>_int%`
- `%score_variables_<variable-id>_<index>%` (lista, valor no índice)
- `%score_variables-contains_<variable-name>_<value>%` (lista, boolean)
- `%score_variables-size_<variable-name>%` (lista, tamanho)

## Placeholders de Cooldown

Formato: `%score_cooldown_{plugin}:{object_id}:{activator_id}%`

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%score_cooldown_EI:Free_Lottery:activator1%` | Cooldown restante para um ativador de ExecutableItems | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EI:Free_Lottery:activator1%` |
| `%score_cooldown_EB:MyBlock:activator2%` | Cooldown restante para um ativador de ExecutableBlocks | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EB:MyBlock:activator2%` |

## Placeholders de Math

Todos os placeholders numéricos do SCore suportam operações aritméticas inline diretamente após a tag:
- `%amount%+6` (se `%amount%` = 15, resultado = 21)
- `%amount%-8` (se `%amount%` = 14, resultado = 6)

Para qualquer coisa além de uma única operação de `+`/`-` (multiplicação, divisão, expressões aninhadas), use o [placeholder de math do PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#math) em torno de um placeholder do SCore:

- `%math_0_(%usage%)*10%` multiplica o `%usage%` do item por 10.
- `%math_{score_variables_userLevel}*10%` multiplica a SCore variable `userLevel` por 10 (veja [Usando Placeholders do PlaceholderAPI no SCore](#using-placeholderapi-placeholders-in-score)).

:::info
Os placeholders do SCore são interpretados **antes** dos placeholders do PlaceholderAPI, então `%math_...%` sempre recebe o valor do SCore já resolvido.
:::

## Placeholders de Utilidade e Texto

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%rand:MIN\|MAX%` | Número aleatório entre MIN e MAX | `SEND_MESSAGE &6You rolled %rand:1\|100%` |
| `%timestamp%` | Timestamp atual | `SEND_MESSAGE &7Time: %timestamp%` |
| `%activator_id%` | ID do ativador atual | `SEND_MESSAGE &7Activator: %activator_id%` |
| `%activator_name%` | Nome do ativador atual | `SEND_MESSAGE &7Activator: %activator_name%` |

### Comandos AROUND & NEAREST

Use placeholders de player/entity com o prefixo `around_target`:
- `%around_target_direction%`
- `%around_target_health%`
- `%around_target_uuid%`
- Se `%around_target%` falhar, use `%around_target::step1%`

Exemplo: `AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SEND_MESSAGE &cYou got smited!`

### Comandos DAMAGE

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%score_cmd-damage-boost%` | Aumento de dano atual | `SEND_MESSAGE &cDamage boost: %score_cmd-damage-boost%` |
| `%score_cmd-damage-resistance%` | Resistência a dano atual | `SEND_MESSAGE &cDamage resistance: %score_cmd-damage-resistance%` |

:::warning
**Attack Charge**: `%player_attack_charge%` é reiniciado após a execução do comando DAMAGE, então verifique o valor antes de usá-lo.
:::

### Placeholders de Message/Command

Para `PLAYER_WRITE_COMMAND` e `PLAYER_SEND_MESSAGE`:

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%arg0%`, `%arg1%`, `%arg2%`, etc. | Argumentos individuais do comando | `SEND_MESSAGE &7First argument: %arg0%` |
| `%all_args%` | Todos os argumentos | `SEND_MESSAGE &7Args: %all_args%` |
| `%all_args_without_first%` | Todos exceto o primeiro argumento | `SEND_MESSAGE &7Args: %all_args_without_first%` |

## Placeholders de Contagem Específicos de Plugin

### ExecutableItems

- `%executableitems_checkamount%` - Total de EI no inventário
- Argumentos (use vírgulas entre os valores para fornecer múltiplos valores):
  - `slot`: Slots a verificar. Não use este argumento se quiser que todos os slots sejam avaliados.
  - `id`: ID do item ei que você quer verificar.
  - `owner`: Só contar se o valor do owner estiver correto
  - `owneruuid`: Só contar se o uuid do owner estiver correto
- Exemplos:
  - `%executableitems_checkamount_slot:0,2,3%` - EI em slots específicos
  - `%executableitems_checkamount_id:item1,item2_slot:0,2%` - Itens específicos em slots
  - `%executableitems_checkamount_owner:Special70%`

<hr/>

- `%executableitems_checkvar%` - Valor / Valor Total de valores de Variable
- Argumentos (use vírgulas entre os valores para fornecer múltiplos valores):
  - `slot`: Slots a verificar. Não use este argumento se quiser que todos os slots sejam avaliados.
  - `id`: ID do item ei que você quer verificar.
  - `var`: O id da variável que você quer verificar.
- Exemplos:
  - `%executableitems_checkvar_id:star_man_var:defense%`
  - `%executableitems_checkvar_slot:-1,40_var:atk_bonus%`
  - `%executableitems_checkvar_var:defense,bonus_defense%`

<hr/>

- `%executableitems_set_<id>%` <CustomTag type="premium" /> - Número de peças do [set](/executableitems/configurations/sets-configuration) `<id>` que o player está vestindo
- `%executableitems_set_<id>_tier%` - Tier ativo mais alto do set (número de peças), `0` se nenhum

:::info
- Se o primeiro valor de variável detectado for uma string, o valor será retornado imediatamente.
- Se o restante dos valores de variável detectados for um número, eles serão somados e o valor total será retornado.
- Atualmente não há suporte para variáveis de lista.
:::

### ExecutableBlocks

- `%executableblocks_checkamount%` - Total de EB no inventário
- Argumentos (use vírgulas entre os valores para fornecer múltiplos valores):
  - `slot`: Slots a verificar. Não use este argumento se quiser que todos os slots sejam avaliados.
  - `id`: ID do item ei que você quer verificar.
  - `owner`: Só contar se o valor do owner estiver correto
  - `owneruuid`: Só contar se o uuid do owner estiver correto
- Exemplos:
  - `%executableblocks_checkamount_slot:0,2,3%` - EB em slots específicos
  - `%executableblocks_checkamount_id:block1,block2_slot:0,2%` - Blocos específicos em slots
  - `%executableblocks_checkamount_owner:Special70%`

## Placeholders Específicos de Evento

Estes placeholders só estão disponíveis dentro do ativador de evento correspondente.

| Ativador | Placeholders |
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
| **PLAYER_ADVANCEMENT** | `%advancement%` (Apenas para 1.19+) |
| **PLAYER_RECEIVE_HIT_GLOBAL, PLAYER_RECEIVE_HIT_BY_PLAYER, PLAYER_RECEIVE_HIT_BY_ENTITY** | `%last_damage_taken_nonfinal%`, `%last_damage_taken_nonfinal_int%` referem-se ao dano bruto recebido. `%last_damage_taken_final%`, `%last_damage_taken_final_int%` referem-se ao dano recebido após os buffs de defesa (atributos, efeito de resistência, armadura). Apenas golpes diretos fornecem o valor correto; receber golpes de projectiles retorna 0 |
| **ENTITY_DAMAGE_BY_PLAYER, ENTITY_DAMAGE_BY_ENTITY, ENTITY_DAMAGE_BY_BLOCK** (EE) | `%entity_last_damage_taken_final%`, `%entity_last_damage_taken_final_int%` referem-se ao dano recebido após os buffs de defesa (armadura, resistência…). ENTITY_DAMAGE_BY_PLAYER também fornece `%entity_last_damage_taken_final_with_booster%` e `%entity_last_damage_taken_final_with_booster_int%`, o dano final incluindo os aumentos de dano |
| **PLAYER_BLOCK_HIT_OF_PLAYER, PLAYER_BLOCK_HIT_OF_ENTITY** | `%damage_blocked_base%`, `%damage_blocked_base_int%` retorna o dano bruto bloqueado pelo shield |
| **PLAYER_PICKUP_ITEM** (EE) | 1.13+: `%item_type%`, `%item_name%`, `%item_amount%`. 1.14-1.21.3: `%item_cmdata%` (-1 se null). 1.21.4+: `%item_cmdata_s_0%` ("null" se vazio), `%item_cmdata_f_0%` (-1 se vazio) (primeiro valor de custom model data em string/float, já que desde a 1.21.4+ o custom model data é armazenado em um array) |
| **PLAYER_INVENTORY_CLICK** (EE) | `%is_shift_click%`, `%is_mouse_click%`, `%is_left_click%`, `%is_right_click%`, `%is_keyboard_click%`, `%is_creative_action%`, `%get_action%` ([Valores de Enum de Referência](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryAction.html)), `%before_slot%`, `%after_slot%`, `%inventory_type%` ([Valores de Enum de Referência](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryType.html)), `%inventory_title%` (1.21+) |
| **PLAYER_KILL_ENTITY** | `%last_hitter%`: tipo de mob de quem deu o golpe final. Útil para verificar se foi você ou seu pet wolf que deu o golpe final, ex.: `PLAYER`, `WOLF` |

## Usando Placeholders do PlaceholderAPI no SCore

O [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) é um dos principais pilares para construir itens e blocos: qualquer placeholder do PlaceholderAPI instalado (`%vault_eco_balance%`, `%luckperms_prefix%`, etc.) pode ser usado em qualquer lugar onde o SCore lê texto, usando a mesma sintaxe `%...%`:

- Lore
- Seção de comandos
- Mensagens (todos os tipos de mensagem: mensagem de cooldown, mensagem de condição não atendida, mensagem de itens necessários, etc.)
- Variables
- etc.

Os próprios placeholders do SCore são interpretados **antes** dos placeholders do PlaceholderAPI, então uma expressão do PAPI pode envolver com segurança uma do SCore, como no exemplo de math acima (`%math_{score_variables_userLevel}*10%`).

## Documentação Relacionada

- [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- [SCore Variables](/tools-for-all-plugins-score/score-variables)
- [Plugins Compatíveis](/tools-for-all-plugins-score/compatible-plugins)
- [Condições de Placeholder](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions)

## Dúvidas?

**O SCore é compatível com o PlaceholderAPI?**
Sim. Qualquer placeholder do PlaceholderAPI funciona em lore, comandos, mensagens e variáveis em ExecutableItems, ExecutableBlocks e ExecutableEvents. Os próprios placeholders do SCore são interpretados primeiro, então as duas sintaxes podem ser combinadas na mesma linha sem conflito.

**Posso fazer operações matemáticas com placeholders?**
Incremento/decremento simples funciona diretamente: `%amount%+6` ou `%amount%-8`. Para multiplicação, divisão ou expressões aninhadas, envolva o placeholder do SCore no placeholder de math do PlaceholderAPI, ex.: `%math_0_(%usage%)*10%`.

**Como uso um placeholder do PlaceholderAPI em um comando do ExecutableItems?**
Escreva exatamente como qualquer placeholder do SCore, inline na string do comando, por exemplo `SEND_MESSAGE &7Balance: %vault_eco_balance%`. Funciona em comandos, condições, lore e todos os tipos de mensagem, sem configuração extra além de ter o PlaceholderAPI e o plugin de origem instalados.

**Qual é a diferença entre `%var_X%` e `%score_variables_X%`?**
`%var_X%` lê uma variável com escopo de item/block armazenada diretamente naquele ExecutableItem ou ExecutableBlock. `%score_variables_<id>%` lê uma SCore variable global ou por player, gerenciada com `/score variables` e exposta através do PlaceholderAPI.

**Por que `%around_target%` às vezes não funciona?**
Em alguns ativadores, o target não é resolvido na primeira referência. Use `%around_target::step1%` em vez disso, que é o fallback documentado para comandos AROUND/NEAREST.
