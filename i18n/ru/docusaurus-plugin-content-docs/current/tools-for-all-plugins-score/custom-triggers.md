---
description: >-
  Как использовать Custom Triggers в SPlugins: ручной запуск команд и
  автоматическое выполнение по расписанию.
source_hash: 2eab89bbd32500f6
translated_at: '2026-10-03T10:33:09.888Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 🔘 Custom Triggers

Custom Triggers - это мощный способ хранить и выполнять списки команд как вручную через команды, так и автоматически с помощью системы планирования.

## Обзор

**Custom Triggers** позволяют вам:
- ✅ Хранить переиспользуемые последовательности команд
- ✅ Выполнять команды вручную с помощью простой команды-триггера
- ✅ Планировать автоматическое выполнение в определенное время
- ✅ Передавать аргументы для настройки поведения
- ✅ Организовывать сложные наборы команд

## Быстрый старт

### Шаг 1: Создание активатора

1. Откройте редактор вашего плагина (`/ei`, `/eb` или `/ee`)
2. Создайте новый активатор
3. Выберите **CUSTOM_TRIGGER** в качестве опции
4. Добавьте ваши команды в раздел команд

### Шаг 2: Выполнение триггера

Используйте соответствующую команду для вашего плагина:

```bash
# ExecutableItems
/ei run-custom-trigger trigger:{activatorID}

# ExecutableBlocks
/eb run-custom-trigger trigger:{activatorID}

# ExecutableEvents
/ee run-custom-trigger trigger:{activatorID}
```

## Контекст команд по плагинам

Каждый плагин предоставляет разный контекст для выполнения команд:

### 🗡️ ExecutableItems
- **Требование:** предмет должен быть в инвентаре игрока
- **Доступные playerCommands:** команды игрока
- **Плейсхолдеры:** плейсхолдеры на основе игрока (`%player%` и т.д.)

### 🧱 ExecutableBlocks
- **Требование:** блок должен быть размещен
- **Доступные playerCommands:** команды блока, команды владельца (если включено)
- **Плейсхолдеры:** плейсхолдеры блока и владельца

### 🎯 ExecutableEvents
- **Требование:** отсутствует (срабатывает глобально)
- **Доступные playerCommands:** только консольные команды
- **Плейсхолдеры:** ограничены (используйте аргументы для таргетинга игрока)

## Типы триггеров

### 1. Callable Triggers
Выполняются только через команду:
```yaml
activators:
  my_trigger:
    option: CUSTOM_TRIGGER
    playerCommands:
    - "say Hello World!"
```

### 2. Scheduled Triggers
Выполняются автоматически в определенное время:
```yaml
activators:
  scheduled_trigger:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '%%%%:::%%:::%%:::22:::00:::XX'  # Daily at 22:00
    playerCommands:
    - "say It's 10 PM!"
```

## Синтаксис команд

### ExecutableItems
```bash
/ei run-custom-trigger trigger:{activatorID} [player:{name}] [slot:{slot}] [args...]
```

| Параметр | Описание | Обязателен |
|-----------|-------------|----------|
| `trigger` | ID активатора | ✅ Да |
| `player` | Имя целевого игрока | ❌ Нет (если не указано, цель - все) |
| `slot` | Слот инвентаря (-1 для основной руки) | ❌ Нет |
| `args...` | Дополнительные аргументы, доступные через %arg0%, %arg1% и т.д. | ❌ Нет |

**Примеры:**
```bash
/ei run-custom-trigger trigger:daily_reward
/ei run-custom-trigger trigger:boost player:Steve slot:-1
/ei run-custom-trigger trigger:message player:Alex Hello World
```

### ExecutableBlocks
```bash
/eb run-custom-trigger trigger:{activatorID} [block:{location}] [args...]
```

| Параметр | Описание | Обязателен |
|-----------|-------------|----------|
| `trigger` | ID активатора | ✅ Да |
| `block` | Местоположение блока (world,x,y,z) | ❌ Нет (если не указано, цель - все) |
| `args...` | Дополнительные аргументы | ❌ Нет |

**Примеры:**
```bash
/eb run-custom-trigger trigger:harvest_all
/eb run-custom-trigger trigger:activate block:world,100,64,200
```

### ExecutableEvents
```bash
/ee run-custom-trigger trigger:{activatorID} [args...]
```

| Параметр | Описание | Обязателен |
|-----------|-------------|----------|
| `trigger` | ID активатора | ✅ Да |
| `args...` | Дополнительные аргументы | ❌ Нет |

**Примеры:**
```bash
/ee run-custom-trigger trigger:server_event
/ee run-custom-trigger trigger:player_reward Steve
```

## Система расписания

### Формат расписания

Система расписания использует два формата для указания времени:

#### Формат 1: на основе даты/времени
```
{YEAR}:::{MONTH}:::{DAY}:::{HOUR}:::{MIN}:::{SEC}
```
- Используйте `%%%%` для любого года
- Используйте `%%` для любого месяца/дня/часа/минуты
- Используйте `XX` для любой секунды
- Используйте `[value1,value2]` для нескольких значений

#### Формат 2: на основе недели
```
{YEAR}:!:{WEEK}:!:{DAYSTRING}:!:{HOUR}:!:{MIN}:!:{SEC}
```
- `DAYSTRING` может быть: MONDAY, TUESDAY и т.д.

### Распространенные примеры расписания

```yaml
scheduleFeatures:
  when:
  # Every minute
  - '%%%%:::%%:::%%:::%%:::%%:::XX'

  # Every day at 22:00
  - '%%%%:::%%:::%%:::22:::00:::XX'

  # Every Monday at 14:00
  - '%%%%:!:%%:!:MONDAY:!:14:!:00:!:XX'

  # December 24-26 at 16:00
  - '%%%%:::12:::[24,25,26]:::16:::00:::XX'

  # At 10, 14, and 18 hours daily
  - '%%%%:::%%:::%%:::[10,14,18]:::00:::XX'
```

## Практические примеры

### Пример 1: предмет ежедневных наград

```yaml
name: '&eDaily Reward Token'
material: GOLD_INGOT
activators:
  daily_reward:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '%%%%:::%%:::%%:::[10,14,18]:::00:::XX'
    playerCommands:
    - "money give %player% 500"
    - "SEND_MESSAGE &aYou received your daily reward!"
```

### Пример 2: триггер серверного события

```yaml
# In ExecutableEvents
activators:
  new_year_celebration:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '2025:::01:::01:::00:::00:::00'
    consoleCommands:
    - "broadcast &6&lHAPPY NEW YEAR 2025!"
    - "ei giveall firework_item 10"
```

### Пример 3: система сбора урожая с блока

```yaml
# In ExecutableBlocks
activators:
  harvest_crops:
    option: CUSTOM_TRIGGER
    playerCommands:
    - "DROPEXECUTABLEITEM wheat_item 5"
    - "score run-player-command player:%owner% SEND_MESSAGE &aHarvest complete!"
```

### Пример 4: команды игрока из событий

Поскольку у ExecutableEvents нет контекста игрока, используйте аргументы:

```yaml
# ExecutableEvent
activators:
  player_boost:
    option: CUSTOM_TRIGGER
    consoleCommands:
    - "score run-player-command player:%arg0% EFFECT SPEED 2 60"
```

Выполните с помощью: `/ee run-custom-trigger trigger:player_boost Steve`

## Лучшие практики

### ✅ ДЕЛАЙТЕ
- Используйте уникальные ID активаторов, чтобы избежать конфликтов
- Проверяйте триггеры вручную перед планированием
- Используйте аргументы для гибких, переиспользуемых триггеров
- Организуйте сложные последовательности команд в триггеры

### ❌ НЕ ДЕЛАЙТЕ
- Не используйте дублирующиеся ID активаторов (они все сработают одновременно)
- Не забывайте проверять контексты плагина (команды игрока/блока/консоли)
- Не усложняйте простые настройки, которые не требуют триггеров

## Решение проблем

### Триггер не выполняется
- ✅ Проверьте, что ID активатора совпадает точно
- ✅ Убедитесь, что предмет/блок/событие существует и правильно настроен
- ✅ Убедитесь в наличии необходимых прав (permission) для выполнения команд

### Расписание не работает
- ✅ Проверьте синтаксис формата расписания
- ✅ Убедитесь, что время сервера соответствует ожидаемому расписанию
- ✅ Убедитесь, что диапазон startDate/endDate включает текущее время

### Команды не выполняются
- ✅ Проверьте контекст команды (игрок/блок/консоль)
- ✅ Проверьте доступность плейсхолдера в контексте
- ✅ Сначала протестируйте команды вручную

## Дополнительные советы

### Цепочка триггеров
Создавайте сложные последовательности, заставляя триггеры вызывать другие триггеры:

```yaml
trigger_1:
  option: CUSTOM_TRIGGER
  playerCommands:
  - "ei run-custom-trigger trigger:trigger_2"
  - "ei run-custom-trigger trigger:trigger_3"
```

### Глобальные события
Комбинируйте триггеры ExecutableEvents с триггерами других плагинов для серверных событий:

```yaml
# Step 1: EE trigger broadcasts and activates items/blocks
server_event:
  option: CUSTOM_TRIGGER
  consoleCommands:
  - "broadcast &cSERVER EVENT STARTING!"
  - "ei run-custom-trigger trigger:event_items"
  - "eb run-custom-trigger trigger:event_blocks"
```

## Связанная документация

- [Плейсхолдеры](/tools-for-all-plugins-score/placeholders)
