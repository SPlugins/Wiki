---
title: Lista de placeholders do SCore
description: >-
  Lista completa de placeholders do SCore para ExecutableItems, ExecutableBlocks
  e ExecutableEvents: jogador, item, bloco, matemática e PlaceholderAPI.
source_hash: ecc26db0e2403378
translated_at: '2026-11-13T18:18:42.365Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 📚 Lista de placeholders do SCore

Um placeholder do SCore é um `%tag%` que é substituído por um valor em tempo real (dados do jogador, dados do item, dados do bloco, matemática, números aleatórios) quando um comando, uma condição, uma linha de lore ou uma mensagem é executado. Eles funcionam em qualquer parte do ExecutableItems, ExecutableBlocks e ExecutableEvents: comandos, condições, lore, mensagens e variáveis do SCore. O SCore também interpreta todos os placeholders do [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) nos mesmos lugares, então tags PAPI no estilo `%player_name%` e as tags próprias do SCore no estilo `%player%` podem ser misturadas na mesma linha.

## Índice

- [Placeholders de jogador](#player-placeholders)
- [Placeholders de alvo / entidade](#target--entity-placeholders)
- [Placeholders de item](#item-placeholders)
- [Placeholders de bloco](#block-placeholders)
- [Placeholders de projétil](#projectile-placeholders)
- [Placeholders de variáveis](#variables-placeholders)
- [Placeholders de cooldown](#cooldown-placeholders)
- [Placeholders matemáticos](#math-placeholders)
- [Placeholders utilitários e de texto](#utility--text-placeholders)
- [Placeholders de contagem específicos de cada plugin](#plugin-specific-count-placeholders)
- [Placeholders específicos de eventos](#event-specific-placeholders)
- [Usando placeholders do PlaceholderAPI no SCore](#using-placeholderapi-placeholders-in-score)
- [Perguntas?](#question-)

:::tip Operações numéricas
Todos os placeholders numéricos aceitam operações aritméticas:
- **Incremento:** `%amount%+6` (se %amount% = 15, resultado = 21)
- **Decremento:** `%amount%-8` (se %amount% = 14, resultado = 6)
:::

## Placeholders de jogador

Os placeholders de jogador estão disponíveis nos ativadores em que um jogador está envolvido. Quando o jogador é secundário no ativador, substitua `player` por `target` (por exemplo, `%target_health%`). No ExecutableItems e no ExecutableBlocks, o item/bloco pode ter um **Owner**: substitua `player` por `owner` para obter os placeholders do dono (por exemplo, `%owner_uuid%`).

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%player%` | Nome do jogador | `SEND_MESSAGE &aWelcome %player%!` |
| `%player_uuid%` | UUID do jogador | `SEND_MESSAGE &7Your UUID is %player_uuid%` |
| `%player_uuid_array%` | UUID do jogador como `[I;-1288600659,-373273272,-1897203511,898446696]` | Usado internamente para armazenar UUIDs em comandos baseados em NBT |
| `%player_world%` | Nome do mundo (`%player_world_lower%` para minúsculas) | `execute in <<%player_world%>> run summon zombie 100 50 100` |
| `%player_x%`, `%player_y%`, `%player_z%` | Coordenadas (adicione `_int` para inteiros) | `execute at %player% run setblock %player_x_int% %player_y_int% %player_z_int% air` |
| `%player_pitch%`, `%player_pitch_positive%` | Pitch do jogador (`_int` para inteiro) | `SEND_MESSAGE &7Pitch: %player_pitch_int%` |
| `%player_yaw%`, `%player_yaw_positive%` | Yaw do jogador (`_int` para inteiro) | `SEND_MESSAGE &7Yaw: %player_yaw_int%` |
| `%player_direction%` | Direção cardeal (N, SW, NE, etc.) | Condição: `part1: '%player_direction%'`, `comparator: EQUALS`, `part2: 'SW'` |
| `%player_health%` | Vida atual | `SEND_MESSAGE &cHealth: %player_health%` |
| `%player_max_health%` | Vida máxima | `SEND_MESSAGE &cHealth: %player_health%/%player_max_health%` |
| `%player_slot%` | Slot que acionou o ativador | `SEND_MESSAGE &7Used from slot %player_slot%` |
| `%player_slot_live%` | Slot segurado atualmente | `SEND_MESSAGE &7Holding slot %player_slot_live%` |
| `%player_team%` | Time do jogador (se houver) | `SEND_MESSAGE &7Team: %player_team%` |
| `%player_attack_charge%` | Cooldown de ataque (1.0 = totalmente carregado) | Condição: `part1: '%player_attack_charge%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR_OR_EQUALS`, `part2: '1.0'` |
| `%last_damage_taken%` | Último dano recebido (`_int` para inteiro) | `SEND_MESSAGE &cYou took %last_damage_taken_int% damage` |
| `%last_damage_dealt%` | Último dano causado (`_int` para inteiro) <CustomTag type="version" version="1.16" /> | `SEND_MESSAGE &aYou dealt %last_damage_dealt_int% damage` |
| `%player_x_velocity%`, `%player_y_velocity%`, `%player_z_velocity%` | Velocidade atual em X, Y, Z (`_int` para inteiro) | `SEND_MESSAGE &7Y velocity: %player_y_velocity%` |

### Placeholders iniciais de jogador

Capturam os valores do jogador no momento em que o ativador é acionado (não mudam durante a execução):
- `%player_x_initial%`, `%player_y_initial%`, `%player_z_initial%`
- `%player_world_initial%`
- `%player_pitch_initial%`, `%player_yaw_initial%`
- `%player_direction_initial%`

## Placeholders de alvo / entidade

Os placeholders de entidade estão disponíveis nos ativadores em que uma entidade está envolvida. Quando a entidade é secundária no ativador, substitua `entity` por `target` (por exemplo, `%target_x%`).

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%entity%` | Tipo da entidade (MAIÚSCULAS) | `SEND_MESSAGE &7You hit a %entity%` |
| `%entity_lower_case%` | Tipo da entidade (minúsculas) | `SEND_MESSAGE &7You hit a %entity_lower_case%` |
| `%entity_name%` | Nome personalizado da entidade | `SEND_MESSAGE &7Target: %entity_name%` |
| `%entity_uuid%` | UUID da entidade | Usado para identificar o alvo em comandos baseados em NBT |
| `%entity_uuid_array%` | UUID da entidade como `[I;-1288600659,-373273272,-1897203511,898446696]` | Usado internamente para armazenar UUIDs em comandos baseados em NBT |
| `%entity_x%`, `%entity_y%`, `%entity_z%` | Coordenadas (adicione `_int` para inteiros) | `execute at %entity% run setblock %entity_x_int% %entity_y_int% %entity_z_int% air` |
| `%entity_health%` | Vida atual | `SEND_MESSAGE &cTarget health: %entity_health%` |
| `%entity_max_health%` | Vida máxima | `SEND_MESSAGE &cTarget health: %entity_health%/%entity_max_health%` |
| `%entity_world%` | Nome do mundo | `SEND_MESSAGE &7Entity world: %entity_world%` |
| `%entity_direction%` | Direção para a qual está virada | Condição: `part1: '%entity_direction%'`, `comparator: EQUALS`, `part2: 'N'` |
| `%entity_pitch%`, `%entity_yaw%` | Valores de rotação | `SEND_MESSAGE &7Yaw: %entity_yaw%` |
| `%entity_team%` | Time da entidade (se houver) | `SEND_MESSAGE &7Team: %entity_team%` |
| `%entity_serialized%` | Definição completa da entidade | Usado para copiar/restaurar uma entidade em comandos avançados |
| `%entity_last_damage_taken%` | Último dano recebido (adicione `_int` para inteiros). As variantes `_final` só existem nos eventos de dano a entidades do ExecutableEvents, veja os [placeholders de ativadores](#event-specific-placeholders) | `SEND_MESSAGE &cTarget took %entity_last_damage_taken_int% damage` |
| `%entity_x_velocity%`, `%entity_y_velocity%`, `%entity_z_velocity%` | Velocidade atual em X, Y, Z (`_int` para inteiro) | `SEND_MESSAGE &7Target Y velocity: %entity_y_velocity%` |

## Placeholders de item

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%name%` | Nome do ExecutableItem | `SEND_MESSAGE &aYou used %name%` |
| `%id%` | ID do ExecutableItem | `SEND_MESSAGE &7Item ID: %id%` |
| `%amount%` | Quantidade na pilha atual | `SEND_MESSAGE &7You have %amount% in this stack` |
| `%usage%` | Contagem de usos atual | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%usage_roman%` | Usos em algarismos romanos | `ADD_ITEM_LORE &7Usage: %usage_roman%` |
| `%usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` | Barra visual de usos, mais informações abaixo | `ADD_ITEM_LORE %usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` |
| `%usage_limit%` | Limite máximo de usos | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%usage_raw%`, `%usage_limit_raw%` | ExecutableItems, somente no nome e na lore do item: os usos e o limite de usos como números simples, mais informações abaixo | `lore: ['&7Damage: %math_0_%usage_raw%*2%']` |
| `%durability%` | Durabilidade do item (1.14+) | `SEND_MESSAGE &7Durability left: %durability%` |
| `%max_use_per_day_item%` | Limite diário de usos (item) | Condição: `part1: '%max_use_per_day_item%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR`, `part2: '0'` |
| `%max_use_per_day_activator%` | Limite diário de usos (ativador) | Condição: `part1: '%max_use_per_day_activator%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR`, `part2: '0'` |

**Especial:** `%usage_bar(amount:30,color1:&d,color2:&5,symbol:|)%`

![](https://media.ssomar.com/m/docs-img-usage-bar.jpg)
- Cria uma barra visual de usos
- Parâmetros: amount (quantidade de barras), color1 (usadas), color2 (não usadas), symbol

**Placeholders de usos brutos:** `%usage_raw%` e `%usage_limit_raw%`

- No nome e na lore de um ExecutableItem, `%usage%` e `%usage_limit%` vêm com uma tag invisível (quando `isRefreshableClean` está ativado, o padrão) que permite ao plugin atualizar o valor depois. Dentro de um placeholder do PlaceholderAPI, essa tag quebra a expressão, por exemplo em `%math_0_%usage%*2%`.
- `%usage_raw%` e `%usage_limit_raw%` dão o mesmo valor sem nenhuma tag, então podem ser usados nos placeholders matemáticos do PlaceholderAPI: `%math_0_%usage_raw%*2%`.
- Eles aceitam a abreviação `+N` / `-N`, como os outros placeholders numéricos: `%usage_raw%-1`.
- Limite: como não têm tag, eles só são atualizados quando a lore é reconstruída a partir da config. Quando a lore do item é mantida como está (por exemplo, depois que linhas foram adicionadas a ela), o valor escrito na lore permanece o mesmo, enquanto `%usage%` continua sendo atualizado.

## Placeholders de bloco

Os placeholders de bloco estão disponíveis nos ativadores em que um bloco está envolvido. Quando o bloco é secundário no ativador, substitua `block` por `target_block` (por exemplo, `%target_block_x%`).

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%block%` | Tipo do bloco (MAIÚSCULAS) | `SEND_MESSAGE &7You broke %block%` |
| `%block_lower%` | Tipo do bloco (minúsculas) | `SEND_MESSAGE &7You broke %block_lower%` |
| `%block_live%`, `%block_live_lower%` | Tipo atual do bloco | `SEND_MESSAGE &7Current block: %block_live%` |
| `%block_item_material%` | Forma de item do bloco (plantações dão suas sementes, `WALL_TORCH` dá `TORCH`, `OAK_WALL_SIGN` dá `OAK_SIGN`, `POTTED_DANDELION` dá `DANDELION`…) | Usado para dar o item correspondente a um bloco colocado |
| `%block_x%`, `%block_y%`, `%block_z%` | Coordenadas (adicione `_int` para inteiros) | `execute at %player% run setblock %block_x_int% %block_y_int%+1 %block_z_int% air` |
| `%blockface%` | Face do bloco selecionada | `SEND_MESSAGE &7Face: %blockface%` |
| `%block_world%` | Nome do mundo | `execute in <<%block_world%>> run setblock %block_x_int% %block_y_int% %block_z_int% air` |
| `%block_biome%` | Nome do bioma | Condição: `part1: '%block_biome%'`, `comparator: EQUALS`, `part2: 'DESERT'` |
| `%block_dimension%` | Tipo de mundo (nether, normal, end) | Condição: `part1: '%block_dimension%'`, `comparator: EQUALS`, `part2: 'nether'` |
| `%block_spawnertype%` | Tipo de mob do spawner | `SEND_MESSAGE &7Spawner: %block_spawnertype%` |
| `%block_is_ageable%` | Retorna se o bloco é ageable ou não | Condição: `part1: '%block_is_ageable%'`, `comparator: EQUALS`, `part2: 'true'` |
| `%block_eb_id%` | ID do ExecutableBlock (se aplicável) | `SEND_MESSAGE &7EB ID: %block_eb_id%` |
| `%block_data%` | Valor de block data | `SEND_MESSAGE &7Block data: %block_data%` |

## Placeholders de projétil

Os placeholders de projétil estão disponíveis nos ativadores em que um projétil está envolvido.

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%projectile%` | Tipo do projétil (MAIÚSCULAS) | `SEND_MESSAGE &7You shot a %projectile%` |
| `%projectile_lower_case%` | Tipo do projétil (minúsculas) | `SEND_MESSAGE &7You shot a %projectile_lower_case%` |
| `%projectile_name%` | Nome personalizado do projétil | `SEND_MESSAGE &7Projectile: %projectile_name%` |
| `%projectile_uuid%` | UUID do projétil | Usado para identificar o projétil em comandos baseados em NBT |
| `%projectile_uuid_array%` | UUID do projétil como `[I;-1288600659,-373273272,-1897203511,898446696]` | Usado internamente para armazenar UUIDs em comandos baseados em NBT |
| `%projectile_x%`, `%projectile_y%`, `%projectile_z%` | Coordenadas | `execute at %player% run summon minecraft:lightning_bolt %projectile_x% %projectile_y% %projectile_z%` |
| `%projectile_world%` | Nome do mundo | `SEND_MESSAGE &7World: %projectile_world%` |
| `%bow_force%` | Força do disparo do arco (0-1) | Condição: `part1: '%bow_force%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR_OR_EQUALS`, `part2: '0.9'` |

## Placeholders de variáveis

### Variáveis de item/bloco

**Variáveis de string/número:**
- `%var_X%` - Valor da variável X
- `%var_X_int%` - Valor inteiro da variável X (somente para variáveis do tipo NUMBER)
- `%var_X_roman%` - Valor em algarismos romanos (somente para variáveis do tipo NUMBER)

**Variáveis de lista:**
- `%var_MYVAR%` - Lista completa com colchetes
- `%var_MYVAR_size%` - Número de elementos
- `%var_MYVAR_contains_VALUE%` - Verifica se a lista contém VALUE

Exemplo: `ADD_ITEM_LORE &7Defense: %var_defense%`

### Variáveis do SCore (globais / por jogador)

O SCore também tem seu próprio sistema de variáveis globais ou por jogador, independente das variáveis de item/bloco. Veja [SCore Variables](/tools-for-all-plugins-score/score-variables) para os comandos `/score variables`. Depois que o [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) estiver instalado, essas variáveis ficam expostas como:
- `%score_variables_<variable-id>%`
- `%score_variables_<variable-id>_int%`
- `%score_variables_<variable-id>_<index>%` (lista, valor no índice)
- `%score_variables-contains_<variable-name>_<value>%` (lista, booleano)
- `%score_variables-size_<variable-name>%` (lista, tamanho)

## Placeholders de cooldown

Formato: `%score_cooldown_{plugin}:{object_id}:{activator_id}%`

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%score_cooldown_EI:Free_Lottery:activator1%` | Cooldown restante de um ativador do ExecutableItems | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EI:Free_Lottery:activator1%` |
| `%score_cooldown_EB:MyBlock:activator2%` | Cooldown restante de um ativador do ExecutableBlocks | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EB:MyBlock:activator2%` |

## Placeholders matemáticos

Todos os placeholders numéricos do SCore aceitam aritmética inline logo após a tag:
- `%amount%+6` (se `%amount%` = 15, resultado = 21)
- `%amount%-8` (se `%amount%` = 14, resultado = 6)

Para qualquer coisa além de uma única operação `+`/`-` (multiplicação, divisão, expressões aninhadas), use o [placeholder matemático do PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#math) em volta de um placeholder do SCore:

- `%math_0_(%usage%)*10%` multiplica o `%usage%` do item por 10.
  - No nome ou na lore de um ExecutableItem, use [`%usage_raw%`](#item-placeholders) em vez disso: `%math_0_(%usage_raw%)*10%`.
- `%math_{score_variables_userLevel}*10%` multiplica a variável do SCore `userLevel` por 10 (veja [Usando placeholders do PlaceholderAPI no SCore](#using-placeholderapi-placeholders-in-score)).

:::info
Os placeholders do SCore são interpretados **antes** dos placeholders do PlaceholderAPI, então `%math_...%` sempre recebe o valor do SCore já resolvido.
:::

## Placeholders utilitários e de texto

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%rand:MIN\|MAX%` | Número aleatório entre MIN e MAX | `SEND_MESSAGE &6You rolled %rand:1\|100%` |
| `%timestamp%` | Timestamp atual | `SEND_MESSAGE &7Time: %timestamp%` |
| `%activator_id%` | ID do ativador atual | `SEND_MESSAGE &7Activator: %activator_id%` |
| `%activator_name%` | Nome do ativador atual | `SEND_MESSAGE &7Activator: %activator_name%` |

### Comandos AROUND e NEAREST

Use os placeholders de jogador/entidade com o prefixo `around_target`:
- `%around_target_direction%`
- `%around_target_health%`
- `%around_target_uuid%`
- Se `%around_target%` falhar, use `%around_target::step1%`
- `%around_target_count%`: o número de alvos do comando `AROUND` / `MOB_AROUND`, veja [AROUND](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#around)

Exemplo: `AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SEND_MESSAGE &cYou got smited!`

### Comandos DAMAGE

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%score_cmd-damage-boost%` | Bônus de dano atual | `SEND_MESSAGE &cDamage boost: %score_cmd-damage-boost%` |
| `%score_cmd-damage-resistance%` | Resistência a dano atual | `SEND_MESSAGE &cDamage resistance: %score_cmd-damage-resistance%` |

:::warning
**Carga de ataque**: `%player_attack_charge%` é resetado depois que o comando DAMAGE é executado, então verifique o valor antes de usá-lo.
:::

### Placeholders de mensagem/comando

Para `PLAYER_WRITE_COMMAND` e `PLAYER_SEND_MESSAGE`:

| Placeholder | Retorna | Exemplo |
|------------|---------|---------|
| `%arg0%`, `%arg1%`, `%arg2%`, etc. | Argumentos individuais do comando | `SEND_MESSAGE &7First argument: %arg0%` |
| `%all_args%` | Todos os argumentos | `SEND_MESSAGE &7Args: %all_args%` |
| `%all_args_without_first%` | Todos os argumentos, exceto o primeiro | `SEND_MESSAGE &7Args: %all_args_without_first%` |

## Placeholders de contagem específicos de cada plugin

### ExecutableItems

- `%executableitems_checkamount%` - Total de EI no inventário
- Argumentos (use vírgulas entre os valores para fornecer vários valores):
  - `slot`: Slots a verificar. Não use este argumento se quiser que todos os slots sejam avaliados.
  - `id`: ID do item EI que você quer verificar.
  - `owner`: Conta apenas se o valor do owner estiver correto
  - `owneruuid`: Conta apenas se o valor do UUID do owner estiver correto
- Exemplos:
  - `%executableitems_checkamount_slot:0,2,3%` - EI em slots específicos
  - `%executableitems_checkamount_id:item1,item2_slot:0,2%` - Itens específicos em slots
  - `%executableitems_checkamount_owner:Special70%`

<hr/>

- `%executableitems_checkvar%` - Valor / valor total dos valores da variável
- Argumentos (use vírgulas entre os valores para fornecer vários valores):
  - `slot`: Slots a verificar. Não use este argumento se quiser que todos os slots sejam avaliados.
  - `id`: ID do item EI que você quer verificar.
  - `var`: O ID da variável que você quer verificar.
- Exemplos:
  - `%executableitems_checkvar_id:star_man_var:defense%`
  - `%executableitems_checkvar_slot:-1,40_var:atk_bonus%`
  - `%executableitems_checkvar_var:defense,bonus_defense%`

<hr/>

- `%executableitems_set_<id>%` <CustomTag type="premium" /> - Número de peças do [set](/executableitems/configurations/sets-configuration) `<id>` que o jogador está vestindo
- `%executableitems_set_<id>_tier%` - Maior nível ativo do set (número de peças), `0` se nenhum

:::info
- Se o primeiro valor de variável detectado for uma string, o valor será retornado imediatamente.
- Se o restante dos valores de variável detectados forem números, eles serão somados e o valor total será retornado.
- Atualmente não há suporte para variáveis de lista.
:::

### ExecutableBlocks

- `%executableblocks_checkamount%` - Total de EB no inventário
- Argumentos (use vírgulas entre os valores para fornecer vários valores):
  - `slot`: Slots a verificar. Não use este argumento se quiser que todos os slots sejam avaliados.
  - `id`: ID do item EI que você quer verificar.
  - `owner`: Conta apenas se o valor do owner estiver correto
  - `owneruuid`: Conta apenas se o valor do UUID do owner estiver correto
- Exemplos:
  - `%executableblocks_checkamount_slot:0,2,3%` - EB em slots específicos
  - `%executableblocks_checkamount_id:block1,block2_slot:0,2%` - Blocos específicos em slots
  - `%executableblocks_checkamount_owner:Special70%`

## Placeholders específicos de eventos

Esses placeholders só estão disponíveis dentro do ativador de evento correspondente.

| Ativador | Placeholders |
|-----------|--------------|
| **RAID_TRIGGER** | `%player%`, `%badomenlevel%` |
| **RAID_WAVE** | `%raiders%` (lista de UUIDs) |
| **RAID_FINISH** | `%badomen%`, `%heroes%` (lista de UUIDs) |
| **PLAYER_EXPERIENCE_CHANGE** | `%experience%` |
| **PLAYER_RECEIVE_EFFECT** | `%effect_received%`, `%effect_received_level%`, `%effect_received_duration%` |
| **PLAYER_HIT_ENTITY** | `%critical%` (true/false) |
| **PLAYER_TELEPORT** | `%teleport_cause%` |
| **BROADCAST_MESSAGE** | `%message%`, `%is_async%` |
| **PLUGIN_ENABLE/DISABLE** | `%plugin_name%` |
| **PLAYER_ADVANCEMENT** | `%advancement%` (somente 1.19+) |
| **PLAYER_RECEIVE_HIT_GLOBAL, PLAYER_RECEIVE_HIT_BY_PLAYER, PLAYER_RECEIVE_HIT_BY_ENTITY** | `%last_damage_taken_nonfinal%`, `%last_damage_taken_nonfinal_int%` referem-se ao dano bruto recebido. `%last_damage_taken_final%`, `%last_damage_taken_final_int%` referem-se ao dano recebido depois dos buffs de defesa (atributos, efeito de resistência, armadura). Somente golpes diretos dão o valor correto; receber golpes de projéteis retorna 0 |
| **ENTITY_DAMAGE_BY_PLAYER, ENTITY_DAMAGE_BY_ENTITY, ENTITY_DAMAGE_BY_BLOCK** (EE) | `%entity_last_damage_taken_final%`, `%entity_last_damage_taken_final_int%` referem-se ao dano recebido depois dos buffs de defesa (armadura, resistência…). ENTITY_DAMAGE_BY_PLAYER também fornece `%entity_last_damage_taken_final_with_booster%` e `%entity_last_damage_taken_final_with_booster_int%`, o dano final incluindo os bônus de dano |
| **PLAYER_BLOCK_HIT_OF_PLAYER, PLAYER_BLOCK_HIT_OF_ENTITY** | `%damage_blocked_base%`, `%damage_blocked_base_int%` retorna o dano bruto bloqueado pelo escudo |
| **PLAYER_PICKUP_ITEM** (EE) | 1.13+: `%item_type%`, `%item_name%`, `%item_amount%`. 1.14-1.21.3: `%item_cmdata%` (-1 se nulo). 1.21.4+: `%item_cmdata_s_0%` ("null" se vazio), `%item_cmdata_f_0%` (-1 se vazio) (primeiro valor de custom model data em string/float, pois desde a 1.21.4 o custom model data é armazenado em um array) |
| **PLAYER_INVENTORY_CLICK** (EE) | `%is_shift_click%`, `%is_mouse_click%`, `%is_left_click%`, `%is_right_click%`, `%is_keyboard_click%`, `%is_creative_action%`, `%get_action%` ([valores de enum de referência](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryAction.html)), `%before_slot%`, `%after_slot%`, `%inventory_type%` ([valores de enum de referência](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryType.html)), `%inventory_title%` (1.21+) |
| **PLAYER_KILL_ENTITY** | `%last_hitter%`: tipo de mob de quem deu o último golpe. Útil para verificar se foi você ou seu lobo de estimação que deu o último golpe, por exemplo `PLAYER`, `WOLF` |

## Usando placeholders do PlaceholderAPI no SCore

O [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) é um dos principais pilares para criar itens e blocos: qualquer placeholder do PlaceholderAPI instalado (`%vault_eco_balance%`, `%luckperms_prefix%`, etc.) pode ser usado em qualquer lugar onde o SCore lê texto, com a mesma sintaxe `%...%`:

- Lore
- Seção de comandos
- Mensagens (todos os tipos de mensagem: mensagem de cooldown, mensagem de condição não atendida, mensagem de requisitos necessários, etc.)
- Variáveis
- etc.

Os placeholders próprios do SCore são interpretados **antes** dos placeholders do PlaceholderAPI, então uma expressão PAPI pode envolver com segurança uma do SCore, como no exemplo matemático acima (`%math_{score_variables_userLevel}*10%`).

## Documentação relacionada

- [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- [SCore Variables](/tools-for-all-plugins-score/score-variables)
- [Plugins compatíveis](/tools-for-all-plugins-score/compatible-plugins)
- [Placeholder Conditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions)

## Perguntas?

**O SCore é compatível com o PlaceholderAPI?**
Sim. Qualquer placeholder do PlaceholderAPI funciona em lore, comandos, mensagens e variáveis no ExecutableItems, ExecutableBlocks e ExecutableEvents. Os placeholders próprios do SCore são interpretados primeiro, então as duas sintaxes podem ser combinadas na mesma linha sem conflito.

**Posso fazer contas com placeholders?**
Incremento/decremento simples funciona diretamente: `%amount%+6` ou `%amount%-8`. Para multiplicação, divisão ou expressões aninhadas, envolva o placeholder do SCore no placeholder matemático do PlaceholderAPI, por exemplo `%math_0_(%usage%)*10%`.

**Como uso um placeholder do PlaceholderAPI em um comando do ExecutableItems?**
Escreva-o exatamente como qualquer placeholder do SCore, inline na string do comando, por exemplo `SEND_MESSAGE &7Balance: %vault_eco_balance%`. Ele funciona em comandos, condições, lore e em todos os tipos de mensagem, sem nenhuma configuração extra além de ter o PlaceholderAPI e o plugin de origem instalados.

**Qual é a diferença entre `%var_X%` e `%score_variables_X%`?**
`%var_X%` lê uma variável de escopo de item/bloco armazenada diretamente naquele ExecutableItem ou ExecutableBlock. `%score_variables_<id>%` lê uma variável global ou por jogador do SCore, gerenciada com `/score variables` e exposta pelo PlaceholderAPI.

**Por que `%around_target%` às vezes não funciona?**
Em alguns ativadores, o alvo não é resolvido na primeira referência. Use `%around_target::step1%` em vez disso, que é a alternativa documentada para os comandos AROUND/NEAREST.
