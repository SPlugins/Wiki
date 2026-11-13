---
title: Список плейсхолдеров SCore
description: >-
  Полный список плейсхолдеров SCore для ExecutableItems, ExecutableBlocks и
  ExecutableEvents: игрок, предмет, блок, сущность, математика и PlaceholderAPI.
source_hash: ecc26db0e2403378
translated_at: '2026-11-13T18:18:34.237Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 📚 Список плейсхолдеров SCore

Плейсхолдер SCore (SCore placeholder) это `%tag%`, которая заменяется актуальным значением (данные игрока, предмета, блока, математика, случайные числа) при выполнении команды, условия, строки lore или сообщения. Они работают в любой части ExecutableItems, ExecutableBlocks и ExecutableEvents: в командах, условиях, lore, сообщениях и переменных SCore. SCore также обрабатывает все плейсхолдеры [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) в тех же местах, поэтому теги PAPI в стиле `%player_name%` и собственные теги SCore в стиле `%player%` можно смешивать в одной строке.

## Содержание

- [Плейсхолдеры игрока](#player-placeholders)
- [Плейсхолдеры цели / сущности](#target--entity-placeholders)
- [Плейсхолдеры предмета](#item-placeholders)
- [Плейсхолдеры блока](#block-placeholders)
- [Плейсхолдеры снаряда](#projectile-placeholders)
- [Плейсхолдеры переменных](#variables-placeholders)
- [Плейсхолдеры кулдауна](#cooldown-placeholders)
- [Математические плейсхолдеры](#math-placeholders)
- [Вспомогательные и текстовые плейсхолдеры](#utility--text-placeholders)
- [Плейсхолдеры подсчёта для конкретных плагинов](#plugin-specific-count-placeholders)
- [Плейсхолдеры для конкретных событий](#event-specific-placeholders)
- [Использование плейсхолдеров PlaceholderAPI в SCore](#using-placeholderapi-placeholders-in-score)
- [Вопросы ?](#question-)

:::tip Числовые операции
Все числовые плейсхолдеры поддерживают арифметические операции:
- **Увеличение:** `%amount%+6` (если %amount% = 15, результат = 21)
- **Уменьшение:** `%amount%-8` (если %amount% = 14, результат = 6)
:::

## Плейсхолдеры игрока

Плейсхолдеры игрока доступны в активаторах, где участвует игрок. Если игрок в активаторе является второстепенным, замените `player` на `target` (например, `%target_health%`). В ExecutableItems и ExecutableBlocks у предмета/блока может быть **Owner**: замените `player` на `owner`, чтобы получить плейсхолдеры владельца (например, `%owner_uuid%`).

| Плейсхолдер | Возвращает | Пример |
|------------|---------|---------|
| `%player%` | Имя игрока | `SEND_MESSAGE &aWelcome %player%!` |
| `%player_uuid%` | UUID игрока | `SEND_MESSAGE &7Your UUID is %player_uuid%` |
| `%player_uuid_array%` | UUID игрока в виде `[I;-1288600659,-373273272,-1897203511,898446696]` | Используется внутри для хранения UUID в командах на основе NBT |
| `%player_world%` | Название мира (`%player_world_lower%` для нижнего регистра) | `execute in <<%player_world%>> run summon zombie 100 50 100` |
| `%player_x%`, `%player_y%`, `%player_z%` | Координаты (добавьте `_int` для целых чисел) | `execute at %player% run setblock %player_x_int% %player_y_int% %player_z_int% air` |
| `%player_pitch%`, `%player_pitch_positive%` | Наклон головы (pitch) игрока (`_int` для целого числа) | `SEND_MESSAGE &7Pitch: %player_pitch_int%` |
| `%player_yaw%`, `%player_yaw_positive%` | Поворот (yaw) игрока (`_int` для целого числа) | `SEND_MESSAGE &7Yaw: %player_yaw_int%` |
| `%player_direction%` | Сторона света (N, SW, NE и т. д.) | Условие: `part1: '%player_direction%'`, `comparator: EQUALS`, `part2: 'SW'` |
| `%player_health%` | Текущее здоровье | `SEND_MESSAGE &cHealth: %player_health%` |
| `%player_max_health%` | Максимальное здоровье | `SEND_MESSAGE &cHealth: %player_health%/%player_max_health%` |
| `%player_slot%` | Слот, вызвавший активатор | `SEND_MESSAGE &7Used from slot %player_slot%` |
| `%player_slot_live%` | Слот, который игрок держит в руке | `SEND_MESSAGE &7Holding slot %player_slot_live%` |
| `%player_team%` | Команда игрока (если есть) | `SEND_MESSAGE &7Team: %player_team%` |
| `%player_attack_charge%` | Кулдаун атаки (1.0 = полностью заряжена) | Условие: `part1: '%player_attack_charge%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR_OR_EQUALS`, `part2: '1.0'` |
| `%last_damage_taken%` | Последний полученный урон (`_int` для целого числа) | `SEND_MESSAGE &cYou took %last_damage_taken_int% damage` |
| `%last_damage_dealt%` | Последний нанесённый урон (`_int` для целого числа) <CustomTag type="version" version="1.16" /> | `SEND_MESSAGE &aYou dealt %last_damage_dealt_int% damage` |
| `%player_x_velocity%`, `%player_y_velocity%`, `%player_z_velocity%` | Текущая скорость по X, Y, Z (`_int` для целого числа) | `SEND_MESSAGE &7Y velocity: %player_y_velocity%` |

### Начальные плейсхолдеры игрока

Фиксируют значения игрока в момент срабатывания активатора (не меняются во время выполнения):
- `%player_x_initial%`, `%player_y_initial%`, `%player_z_initial%`
- `%player_world_initial%`
- `%player_pitch_initial%`, `%player_yaw_initial%`
- `%player_direction_initial%`

## Плейсхолдеры цели / сущности

Плейсхолдеры сущности доступны в активаторах, где участвует сущность. Если сущность в активаторе является второстепенной, замените `entity` на `target` (например, `%target_x%`).

| Плейсхолдер | Возвращает | Пример |
|------------|---------|---------|
| `%entity%` | Тип сущности (ВЕРХНИЙ РЕГИСТР) | `SEND_MESSAGE &7You hit a %entity%` |
| `%entity_lower_case%` | Тип сущности (нижний регистр) | `SEND_MESSAGE &7You hit a %entity_lower_case%` |
| `%entity_name%` | Кастомное имя сущности | `SEND_MESSAGE &7Target: %entity_name%` |
| `%entity_uuid%` | UUID сущности | Используется для определения цели в командах на основе NBT |
| `%entity_uuid_array%` | UUID сущности в виде `[I;-1288600659,-373273272,-1897203511,898446696]` | Используется внутри для хранения UUID в командах на основе NBT |
| `%entity_x%`, `%entity_y%`, `%entity_z%` | Координаты (добавьте `_int` для целых чисел) | `execute at %entity% run setblock %entity_x_int% %entity_y_int% %entity_z_int% air` |
| `%entity_health%` | Текущее здоровье | `SEND_MESSAGE &cTarget health: %entity_health%` |
| `%entity_max_health%` | Максимальное здоровье | `SEND_MESSAGE &cTarget health: %entity_health%/%entity_max_health%` |
| `%entity_world%` | Название мира | `SEND_MESSAGE &7Entity world: %entity_world%` |
| `%entity_direction%` | Направление взгляда | Условие: `part1: '%entity_direction%'`, `comparator: EQUALS`, `part2: 'N'` |
| `%entity_pitch%`, `%entity_yaw%` | Значения поворота | `SEND_MESSAGE &7Yaw: %entity_yaw%` |
| `%entity_team%` | Команда сущности (если есть) | `SEND_MESSAGE &7Team: %entity_team%` |
| `%entity_serialized%` | Полное описание сущности | Используется для копирования/восстановления сущности в расширенных командах |
| `%entity_last_damage_taken%` | Последний полученный урон (добавьте `_int` для целых чисел). Варианты `_final` существуют только в событиях урона сущности ExecutableEvents, см. [плейсхолдеры активаторов](#event-specific-placeholders) | `SEND_MESSAGE &cTarget took %entity_last_damage_taken_int% damage` |
| `%entity_x_velocity%`, `%entity_y_velocity%`, `%entity_z_velocity%` | Текущая скорость по X, Y, Z (`_int` для целого числа) | `SEND_MESSAGE &7Target Y velocity: %entity_y_velocity%` |

## Плейсхолдеры предмета

| Плейсхолдер | Возвращает | Пример |
|------------|---------|---------|
| `%name%` | Имя ExecutableItem | `SEND_MESSAGE &aYou used %name%` |
| `%id%` | ID ExecutableItem | `SEND_MESSAGE &7Item ID: %id%` |
| `%amount%` | Количество в текущем стаке | `SEND_MESSAGE &7You have %amount% in this stack` |
| `%usage%` | Текущее количество использований | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%usage_roman%` | Использования римскими цифрами | `ADD_ITEM_LORE &7Usage: %usage_roman%` |
| `%usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` | Визуальная шкала использований, подробнее ниже | `ADD_ITEM_LORE %usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` |
| `%usage_limit%` | Максимальный лимит использований | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%usage_raw%`, `%usage_limit_raw%` | ExecutableItems, только в названии и lore предмета: использования и лимит использований в виде обычных чисел, подробнее ниже | `lore: ['&7Damage: %math_0_%usage_raw%*2%']` |
| `%durability%` | Прочность предмета (1.14+) | `SEND_MESSAGE &7Durability left: %durability%` |
| `%max_use_per_day_item%` | Суточный лимит использований (предмет) | Условие: `part1: '%max_use_per_day_item%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR`, `part2: '0'` |
| `%max_use_per_day_activator%` | Суточный лимит использований (активатор) | Условие: `part1: '%max_use_per_day_activator%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR`, `part2: '0'` |

**Особое:** `%usage_bar(amount:30,color1:&d,color2:&5,symbol:|)%`

![](https://media.ssomar.com/m/docs-img-usage-bar.jpg)
- Создаёт визуальную шкалу использований
- Параметры: amount (количество делений шкалы), color1 (использованные), color2 (неиспользованные), symbol

**Сырые плейсхолдеры использований:** `%usage_raw%` и `%usage_limit_raw%`

- В названии и lore ExecutableItem плейсхолдеры `%usage%` и `%usage_limit%` содержат невидимый тег (когда включена опция `isRefreshableClean`, по умолчанию она включена), который позволяет плагину позже обновлять значение. Внутри плейсхолдера PlaceholderAPI этот тег ломает выражение, например в `%math_0_%usage%*2%`.
- `%usage_raw%` и `%usage_limit_raw%` возвращают то же значение без какого-либо тега, поэтому их можно использовать в математических плейсхолдерах PlaceholderAPI: `%math_0_%usage_raw%*2%`.
- Они поддерживают сокращённую запись `+N` / `-N`, как и другие числовые плейсхолдеры: `%usage_raw%-1`.
- Ограничение: поскольку тега у них нет, они обновляются только при перестроении lore из конфига. Если lore предмета сохраняется как есть (например, после добавления в него строк), значение, записанное в lore, остаётся прежним, тогда как `%usage%` продолжает обновляться.

## Плейсхолдеры блока

Плейсхолдеры блока доступны в активаторах, где участвует блок. Если блок в активаторе является второстепенным, замените `block` на `target_block` (например, `%target_block_x%`).

| Плейсхолдер | Возвращает | Пример |
|------------|---------|---------|
| `%block%` | Тип блока (ВЕРХНИЙ РЕГИСТР) | `SEND_MESSAGE &7You broke %block%` |
| `%block_lower%` | Тип блока (нижний регистр) | `SEND_MESSAGE &7You broke %block_lower%` |
| `%block_live%`, `%block_live_lower%` | Текущий тип блока | `SEND_MESSAGE &7Current block: %block_live%` |
| `%block_item_material%` | Предметная форма блока (культуры дают свои семена, `WALL_TORCH` даёт `TORCH`, `OAK_WALL_SIGN` даёт `OAK_SIGN`, `POTTED_DANDELION` даёт `DANDELION`…) | Используется, чтобы выдать предмет, соответствующий поставленному блоку |
| `%block_x%`, `%block_y%`, `%block_z%` | Координаты (добавьте `_int` для целых чисел) | `execute at %player% run setblock %block_x_int% %block_y_int%+1 %block_z_int% air` |
| `%blockface%` | Выбранная грань блока | `SEND_MESSAGE &7Face: %blockface%` |
| `%block_world%` | Название мира | `execute in <<%block_world%>> run setblock %block_x_int% %block_y_int% %block_z_int% air` |
| `%block_biome%` | Название биома | Условие: `part1: '%block_biome%'`, `comparator: EQUALS`, `part2: 'DESERT'` |
| `%block_dimension%` | Тип мира (nether, normal, end) | Условие: `part1: '%block_dimension%'`, `comparator: EQUALS`, `part2: 'nether'` |
| `%block_spawnertype%` | Тип моба спавнера | `SEND_MESSAGE &7Spawner: %block_spawnertype%` |
| `%block_is_ageable%` | Возвращает, растёт ли блок поэтапно (ageable) или нет | Условие: `part1: '%block_is_ageable%'`, `comparator: EQUALS`, `part2: 'true'` |
| `%block_eb_id%` | ID ExecutableBlock (если применимо) | `SEND_MESSAGE &7EB ID: %block_eb_id%` |
| `%block_data%` | Значение данных блока | `SEND_MESSAGE &7Block data: %block_data%` |

## Плейсхолдеры снаряда

Плейсхолдеры снаряда доступны в активаторах, где участвует снаряд.

| Плейсхолдер | Возвращает | Пример |
|------------|---------|---------|
| `%projectile%` | Тип снаряда (ВЕРХНИЙ РЕГИСТР) | `SEND_MESSAGE &7You shot a %projectile%` |
| `%projectile_lower_case%` | Тип снаряда (нижний регистр) | `SEND_MESSAGE &7You shot a %projectile_lower_case%` |
| `%projectile_name%` | Кастомное имя снаряда | `SEND_MESSAGE &7Projectile: %projectile_name%` |
| `%projectile_uuid%` | UUID снаряда | Используется для определения снаряда в командах на основе NBT |
| `%projectile_uuid_array%` | UUID снаряда в виде `[I;-1288600659,-373273272,-1897203511,898446696]` | Используется внутри для хранения UUID в командах на основе NBT |
| `%projectile_x%`, `%projectile_y%`, `%projectile_z%` | Координаты | `execute at %player% run summon minecraft:lightning_bolt %projectile_x% %projectile_y% %projectile_z%` |
| `%projectile_world%` | Название мира | `SEND_MESSAGE &7World: %projectile_world%` |
| `%bow_force%` | Сила выстрела из лука (0-1) | Условие: `part1: '%bow_force%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR_OR_EQUALS`, `part2: '0.9'` |

## Плейсхолдеры переменных

### Переменные предмета/блока

**Строковые/числовые переменные:**
- `%var_X%` - значение переменной X
- `%var_X_int%` - целочисленное значение переменной X (только для переменных типа NUMBER)
- `%var_X_roman%` - значение римскими цифрами (только для переменных типа NUMBER)

**Переменные-списки:**
- `%var_MYVAR%` - полный список в скобках
- `%var_MYVAR_size%` - количество элементов
- `%var_MYVAR_contains_VALUE%` - проверка, содержит ли список VALUE

Пример: `ADD_ITEM_LORE &7Defense: %var_defense%`

### Переменные SCore (глобальные / для каждого игрока)

В SCore есть и собственная система глобальных переменных или переменных для каждого игрока, независимая от переменных предметов/блоков. Команды `/score variables` описаны в разделе [SCore Variables](/tools-for-all-plugins-score/score-variables). После установки [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) эти переменные доступны в виде:
- `%score_variables_<variable-id>%`
- `%score_variables_<variable-id>_int%`
- `%score_variables_<variable-id>_<index>%` (список, значение по индексу)
- `%score_variables-contains_<variable-name>_<value>%` (список, булево значение)
- `%score_variables-size_<variable-name>%` (список, размер)

## Плейсхолдеры кулдауна

Формат: `%score_cooldown_{plugin}:{object_id}:{activator_id}%`

| Плейсхолдер | Возвращает | Пример |
|------------|---------|---------|
| `%score_cooldown_EI:Free_Lottery:activator1%` | Оставшийся кулдаун активатора ExecutableItems | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EI:Free_Lottery:activator1%` |
| `%score_cooldown_EB:MyBlock:activator2%` | Оставшийся кулдаун активатора ExecutableBlocks | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EB:MyBlock:activator2%` |

## Математические плейсхолдеры

Все числовые плейсхолдеры SCore поддерживают встроенную арифметику сразу после тега:
- `%amount%+6` (если `%amount%` = 15, результат = 21)
- `%amount%-8` (если `%amount%` = 14, результат = 6)

Для всего, что выходит за рамки одной операции `+`/`-` (умножение, деление, вложенные выражения), используйте [математический плейсхолдер PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#math), оборачивающий плейсхолдер SCore:

- `%math_0_(%usage%)*10%` умножает `%usage%` предмета на 10.
  - В названии или lore ExecutableItem используйте вместо этого [`%usage_raw%`](#item-placeholders): `%math_0_(%usage_raw%)*10%`.
- `%math_{score_variables_userLevel}*10%` умножает переменную SCore `userLevel` на 10 (см. [Использование плейсхолдеров PlaceholderAPI в SCore](#using-placeholderapi-placeholders-in-score)).

:::info
Плейсхолдеры SCore обрабатываются **до** плейсхолдеров PlaceholderAPI, поэтому `%math_...%` всегда получает уже вычисленное значение SCore.
:::

## Вспомогательные и текстовые плейсхолдеры

| Плейсхолдер | Возвращает | Пример |
|------------|---------|---------|
| `%rand:MIN\|MAX%` | Случайное число от MIN до MAX | `SEND_MESSAGE &6You rolled %rand:1\|100%` |
| `%timestamp%` | Текущая метка времени | `SEND_MESSAGE &7Time: %timestamp%` |
| `%activator_id%` | ID текущего активатора | `SEND_MESSAGE &7Activator: %activator_id%` |
| `%activator_name%` | Название текущего активатора | `SEND_MESSAGE &7Activator: %activator_name%` |

### Команды AROUND и NEAREST

Используйте плейсхолдеры игрока/сущности с префиксом `around_target`:
- `%around_target_direction%`
- `%around_target_health%`
- `%around_target_uuid%`
- Если `%around_target%` не работает, используйте `%around_target::step1%`
- `%around_target_count%`: количество целей команды `AROUND` / `MOB_AROUND`, см. [AROUND](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#around)

Пример: `AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SEND_MESSAGE &cYou got smited!`

### Команды DAMAGE

| Плейсхолдер | Возвращает | Пример |
|------------|---------|---------|
| `%score_cmd-damage-boost%` | Текущий бонус к урону | `SEND_MESSAGE &cDamage boost: %score_cmd-damage-boost%` |
| `%score_cmd-damage-resistance%` | Текущее сопротивление урону | `SEND_MESSAGE &cDamage resistance: %score_cmd-damage-resistance%` |

:::warning
**Заряд атаки**: `%player_attack_charge%` сбрасывается после выполнения команды DAMAGE, поэтому проверяйте его значение до использования.
:::

### Плейсхолдеры сообщений/команд

Для `PLAYER_WRITE_COMMAND` и `PLAYER_SEND_MESSAGE`:

| Плейсхолдер | Возвращает | Пример |
|------------|---------|---------|
| `%arg0%`, `%arg1%`, `%arg2%` и т. д. | Отдельные аргументы команды | `SEND_MESSAGE &7First argument: %arg0%` |
| `%all_args%` | Все аргументы | `SEND_MESSAGE &7Args: %all_args%` |
| `%all_args_without_first%` | Все аргументы, кроме первого | `SEND_MESSAGE &7Args: %all_args_without_first%` |

## Плейсхолдеры подсчёта для конкретных плагинов

### ExecutableItems

- `%executableitems_checkamount%` - общее количество EI в инвентаре
- Аргументы (используйте запятые между значениями, чтобы передать несколько значений):
  - `slot`: слоты для проверки. Не используйте этот аргумент, если нужно проверить все слоты.
  - `id`: ID предмета ei, который нужно проверить.
  - `owner`: считать, только если значение owner совпадает
  - `owneruuid`: считать, только если значение owner uuid совпадает
- Примеры:
  - `%executableitems_checkamount_slot:0,2,3%` - EI в определённых слотах
  - `%executableitems_checkamount_id:item1,item2_slot:0,2%` - определённые предметы в слотах
  - `%executableitems_checkamount_owner:Special70%`

<hr/>

- `%executableitems_checkvar%` - значение / общая сумма значений переменной
- Аргументы (используйте запятые между значениями, чтобы передать несколько значений):
  - `slot`: слоты для проверки. Не используйте этот аргумент, если нужно проверить все слоты.
  - `id`: ID предмета ei, который нужно проверить.
  - `var`: ID переменной, которую нужно проверить.
- Примеры:
  - `%executableitems_checkvar_id:star_man_var:defense%`
  - `%executableitems_checkvar_slot:-1,40_var:atk_bonus%`
  - `%executableitems_checkvar_var:defense,bonus_defense%`

<hr/>

- `%executableitems_set_<id>%` <CustomTag type="premium" /> - количество частей [набора](/executableitems/configurations/sets-configuration) `<id>`, надетых на игрока
- `%executableitems_set_<id>_tier%` - наивысший активный уровень набора (количество частей), `0` если ни одного нет

:::info
- Если первое найденное значение переменной является строкой, значение будет возвращено сразу.
- Если остальные найденные значения переменной являются числами, они будут сложены, и вернётся общая сумма.
- В настоящее время переменные-списки не поддерживаются.
:::

### ExecutableBlocks

- `%executableblocks_checkamount%` - общее количество EB в инвентаре
- Аргументы (используйте запятые между значениями, чтобы передать несколько значений):
  - `slot`: слоты для проверки. Не используйте этот аргумент, если нужно проверить все слоты.
  - `id`: ID предмета ei, который нужно проверить.
  - `owner`: считать, только если значение owner совпадает
  - `owneruuid`: считать, только если значение owner uuid совпадает
- Примеры:
  - `%executableblocks_checkamount_slot:0,2,3%` - EB в определённых слотах
  - `%executableblocks_checkamount_id:block1,block2_slot:0,2%` - определённые блоки в слотах
  - `%executableblocks_checkamount_owner:Special70%`

## Плейсхолдеры для конкретных событий

Эти плейсхолдеры доступны только внутри соответствующего активатора события.

| Активатор | Плейсхолдеры |
|-----------|--------------|
| **RAID_TRIGGER** | `%player%`, `%badomenlevel%` |
| **RAID_WAVE** | `%raiders%` (список UUID) |
| **RAID_FINISH** | `%badomen%`, `%heroes%` (список UUID) |
| **PLAYER_EXPERIENCE_CHANGE** | `%experience%` |
| **PLAYER_RECEIVE_EFFECT** | `%effect_received%`, `%effect_received_level%`, `%effect_received_duration%` |
| **PLAYER_HIT_ENTITY** | `%critical%` (true/false) |
| **PLAYER_TELEPORT** | `%teleport_cause%` |
| **BROADCAST_MESSAGE** | `%message%`, `%is_async%` |
| **PLUGIN_ENABLE/DISABLE** | `%plugin_name%` |
| **PLAYER_ADVANCEMENT** | `%advancement%` (только для 1.19+) |
| **PLAYER_RECEIVE_HIT_GLOBAL, PLAYER_RECEIVE_HIT_BY_PLAYER, PLAYER_RECEIVE_HIT_BY_ENTITY** | `%last_damage_taken_nonfinal%`, `%last_damage_taken_nonfinal_int%` означают необработанный полученный урон. `%last_damage_taken_final%`, `%last_damage_taken_final_int%` означают урон, полученный после защитных бонусов (атрибуты, эффект сопротивления, броня). Правильное значение дают только прямые удары; при получении ударов от снарядов возвращается 0 |
| **ENTITY_DAMAGE_BY_PLAYER, ENTITY_DAMAGE_BY_ENTITY, ENTITY_DAMAGE_BY_BLOCK** (EE) | `%entity_last_damage_taken_final%`, `%entity_last_damage_taken_final_int%` означают урон, полученный после защитных бонусов (броня, сопротивление…). ENTITY_DAMAGE_BY_PLAYER также даёт `%entity_last_damage_taken_final_with_booster%` и `%entity_last_damage_taken_final_with_booster_int%`, то есть итоговый урон с учётом бонусов к урону |
| **PLAYER_BLOCK_HIT_OF_PLAYER, PLAYER_BLOCK_HIT_OF_ENTITY** | `%damage_blocked_base%`, `%damage_blocked_base_int%` возвращает необработанный урон, заблокированный щитом |
| **PLAYER_PICKUP_ITEM** (EE) | 1.13+: `%item_type%`, `%item_name%`, `%item_amount%`. 1.14-1.21.3: `%item_cmdata%` (-1, если null). 1.21.4+: `%item_cmdata_s_0%` ("null", если пусто), `%item_cmdata_f_0%` (-1, если пусто) (первое строковое/числовое значение custom model data, начиная с 1.21.4 custom model data хранится в массиве) |
| **PLAYER_INVENTORY_CLICK** (EE) | `%is_shift_click%`, `%is_mouse_click%`, `%is_left_click%`, `%is_right_click%`, `%is_keyboard_click%`, `%is_creative_action%`, `%get_action%` ([справочник значений Enum](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryAction.html)), `%before_slot%`, `%after_slot%`, `%inventory_type%` ([справочник значений Enum](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryType.html)), `%inventory_title%` (1.21+) |
| **PLAYER_KILL_ENTITY** | `%last_hitter%`: тип моба, нанёсшего последний удар. Полезно, чтобы проверить, нанесли последний удар вы или ваш питомец-волк, например `PLAYER`, `WOLF` |

## Использование плейсхолдеров PlaceholderAPI в SCore

[PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) является одной из главных опор при создании предметов и блоков: любой установленный плейсхолдер PlaceholderAPI (`%vault_eco_balance%`, `%luckperms_prefix%` и т. д.) можно использовать везде, где SCore читает текст, с тем же синтаксисом `%...%`:

- Lore
- Раздел Commands
- Сообщения (все типы сообщений: сообщение о кулдауне, сообщение о невыполненном условии, сообщение о необходимых вещах и т. д.)
- Переменные
- и т. д.

Собственные плейсхолдеры SCore обрабатываются **до** плейсхолдеров PlaceholderAPI, поэтому выражение PAPI может безопасно оборачивать плейсхолдер SCore, как в приведённом выше математическом примере (`%math_{score_variables_userLevel}*10%`).

## Связанная документация

- [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- [SCore Variables](/tools-for-all-plugins-score/score-variables)
- [Compatible Plugins](/tools-for-all-plugins-score/compatible-plugins)
- [Placeholder Conditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions)

## Вопросы ?

**Совместим ли SCore с PlaceholderAPI?**
Да. Любой плейсхолдер PlaceholderAPI работает в lore, командах, сообщениях и переменных в ExecutableItems, ExecutableBlocks и ExecutableEvents. Собственные плейсхолдеры SCore обрабатываются первыми, поэтому оба синтаксиса можно сочетать в одной строке без конфликтов.

**Можно ли выполнять математические операции с плейсхолдерами?**
Простое увеличение/уменьшение работает напрямую: `%amount%+6` или `%amount%-8`. Для умножения, деления или вложенных выражений оберните плейсхолдер SCore в математический плейсхолдер PlaceholderAPI, например `%math_0_(%usage%)*10%`.

**Как использовать плейсхолдер PlaceholderAPI в команде ExecutableItems?**
Пишите его точно так же, как любой плейсхолдер SCore, прямо в строке команды, например `SEND_MESSAGE &7Balance: %vault_eco_balance%`. Он работает в командах, условиях, lore и во всех типах сообщений, никакой дополнительной настройки не требуется, нужно лишь, чтобы были установлены PlaceholderAPI и плагин-источник.

**В чём разница между `%var_X%` и `%score_variables_X%`?**
`%var_X%` читает переменную уровня предмета/блока, хранящуюся непосредственно в этом ExecutableItem или ExecutableBlock. `%score_variables_<id>%` читает глобальную переменную SCore или переменную для каждого игрока, которой управляют с помощью `/score variables` и которая доступна через PlaceholderAPI.

**Почему `%around_target%` иногда не работает?**
В некоторых активаторах цель не определяется при первом обращении. Используйте вместо этого `%around_target::step1%`, это задокументированный запасной вариант для команд AROUND/NEAREST.
