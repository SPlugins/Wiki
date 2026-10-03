---
description: >-
  Как добавить кастомные звуки в ресурспак и воспроизводить их через
  ExecutableItems: руководство по плагину SPlugins.
source_hash: 66cf4b862fca2e2f
translated_at: '2026-10-03T10:33:54.786Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Custom Sounds

:::info
Этот способ добавляет новые пользовательские звуки **без** замены существующих ванильных звуков.
:::

Пользовательские звуки в Minecraft управляются через resource pack.

## Обзор

Чтобы добавить пользовательские звуки в ваш ExecutableItems, вам нужно:
1. Создать resource pack с вашими файлами звуков
2. Настроить файл sounds.json для регистрации звуков
3. Использовать команду /playsound в ExecutableItems для их воспроизведения

## Пошаговое руководство

### Шаг 1: Создание базовой структуры resource pack

Сначала создайте базовую структуру папок resource pack:

```
RESOURCE_PACK/
  ├── assets/
  ├── pack.mcmeta
  └── pack.png
```

- `pack.mcmeta` : содержит метаданные resource pack (версия, описание)
- `pack.png` : иконка resource pack (необязательно, но рекомендуется)

### Шаг 2: Добавление папки пользовательского namespace

Внутри папки `assets` создайте свою папку пользовательского namespace. Она должна иметь уникальное имя, чтобы избежать конфликтов:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/    # Your custom namespace
  ├── pack.mcmeta
  └── pack.png
```

:::tip Именование namespace
Выберите описательный namespace, например название вашего сервера или плагина. Примеры: `myserver`, `customitems`, `epicrpg`
:::

### Шаг 3: Создание sounds.json

Внутри вашей папки пользовательского namespace создайте файл `sounds.json`:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/
  │       └── sounds.json
  ├── pack.mcmeta
  └── pack.png
```

### Шаг 4: Настройка sounds.json

Отредактируйте `sounds.json`, чтобы зарегистрировать ваши пользовательские звуки:

```json
{
  "epic_sword_slash": {
    "subtitle": "Epic Sword Slash",
    "sounds": [
      "customsounds:sword_slash1"
    ]
  },
  "magic_spell_cast": {
    "subtitle": "Magic Spell Cast",
    "sounds": [
      "customsounds:spell_cast1",
      "customsounds:spell_cast2"
    ]
  },
  "boss_roar": {
    "sounds": [
      "customsounds:dragon_roar"
    ]
  }
}
```

#### Структура sounds.json

- **Sound ID** (например, `epic_sword_slash`): имя, которое вы будете использовать в командах
- **subtitle**: необязательный текст, отображаемый при включённых субтитрах
- **sounds**: массив путей к файлам звуков (без расширения .ogg)

:::info Пути к звукам
`"customsounds:sword_slash1"` означает, что файл находится по пути:
`assets/customsounds/sounds/sword_slash1.ogg`

Формат: `namespace:path_inside_sounds_folder`
:::

### Шаг 5: Добавление файлов звуков

Создайте папку `sounds` внутри вашего namespace и добавьте туда файлы .ogg:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/
  │       ├── sounds.json
  │       └── sounds/
  │           ├── sword_slash1.ogg
  │           ├── spell_cast1.ogg
  │           ├── spell_cast2.ogg
  │           └── dragon_roar.ogg
  ├── pack.mcmeta
  └── pack.png
```

:::warning Требования к файлам звуков
- **Формат**: должен быть .ogg (Ogg Vorbis)
- **Рекомендуется моно**: стерео тоже работает, но моно лучше подходит для позиционного звука
- **Частота дискретизации**: рекомендуется 44.1 кГц или 48 кГц
- **Размер файла**: держите файлы небольшими для более быстрой загрузки
:::

### Шаг 6: Создание pack.mcmeta

Создайте файл `pack.mcmeta` с правильным форматированием версии:

```json
{
  "pack": {
    "pack_format": 15,
    "description": "Custom sounds for MyServer"
  }
}
```

#### Версии pack_format

| Версия Minecraft | pack_format |
|-------------------|-------------|
| 1.20.2 - 1.20.4   | 18          |
| 1.20 - 1.20.1     | 15          |
| 1.19.4            | 13          |
| 1.19 - 1.19.3     | 12          |
| 1.18 - 1.18.2     | 9           |

Для других версий проверьте в Google

## Использование пользовательских звуков в ExecutableItems

После создания и применения вашего resource pack используйте команду PLAYSOUND:

### Базовое использование

```yaml
activators:
  sword_attack:
    option: PLAYER_ALL_CLICK
    playerCommands:
    - "minecraft:playsound customsounds:epic_sword_slash master @a"
```


### Позиционный звук

```yaml
activators:
  boss_spawn:
    option: PROJECTILE_HIT_BLOCK
    blockCommands:
    - "minecraft:playsound customsounds:boss_roar master @a %block_x% %block_y% %block_z% %world%"
    # Plays at specific coordinates
```

## Конвертация аудиофайлов в OGG

Если у вас есть файлы MP3, WAV или других форматов, их нужно конвертировать в OGG:

### Использование Audacity (бесплатно)

1. Скачайте Audacity: https://www.audacityteam.org/
2. Откройте ваш аудиофайл
3. Необязательно: конвертируйте в моно (Tracks → Mix → Mix Stereo down to Mono)
4. File → Export → Export as OGG
5. Выберите настройки качества (качество 5-7 это хороший баланс)

### Использование онлайн-конвертеров

- CloudConvert: https://cloudconvert.com/mp3-to-ogg
- Online-Convert: https://audio.online-convert.com/convert-to-ogg

## Развёртывание вашего resource pack

### Метод 1: Серверный resource pack (рекомендуется)

Загрузите ваш resource pack и настройте в `server.properties`:

```properties
resource-pack=https://your-url.com/resourcepack.zip
resource-pack-sha1=<SHA1 hash>
require-resource-pack=true
```

:::tip Варианты хостинга
- Dropbox (получите прямую ссылку)
- Google Drive (используйте конвертер ссылок для скачивания)
- Собственный веб-сервер
- GitHub releases
:::

## Устранение неполадок

### Звуки не воспроизводятся

**Проблема**: команды выполняются, но звук не воспроизводится

**Решения**:
1. ✅ Убедитесь, что resource pack применён (`/playsound` протестируйте с ванильным звуком)
2. ✅ Проверьте, что файл звука имеет формат .ogg (не .mp3, .wav и т.д.)
3. ✅ Проверьте синтаксис sounds.json (используйте JSON-валидатор)
4. ✅ Проверьте, что путь к файлу указан точно (с учётом регистра)
5. ✅ Протестируйте с `/playsound customsounds:your_sound master @s`

### Resource pack не загружается

**Проблема**: серверный resource pack не скачивается игроками

**Решения**:
1. ✅ Убедитесь, что URL resource pack это прямая ссылка для скачивания
2. ✅ Проверьте, что версия формата pack.mcmeta совпадает с версией сервера
3. ✅ Убедитесь, что размер pack меньше 100 МБ (ограничение клиента)
4. ✅ Проверьте, что хэш SHA1 в server.properties совпадает с файлом

### Воспроизводится не тот звук

**Проблема**: воспроизводится другой звук, чем ожидалось

**Решения**:
1. ✅ Проверьте наличие дублирующихся Sound ID в sounds.json
2. ✅ Убедитесь, что namespace указан правильно и в нижнем регистре (customsounds: vs minecraft:)
3. ✅ Проверьте опечатки в именах файлов звуков


## Связанная документация

- [Формат Resource Pack (Minecraft Wiki)](https://minecraft.wiki/w/Resource_Pack)
- [Список Activators](/executableitems/configurations/activator-configuration/list-of-the-activators)

## Дополнительные ресурсы

- **Скачать Audacity**: https://www.audacityteam.org/
- **Бесплатные звуковые эффекты**:
  - Freesound: https://freesound.org/
  - Zapsplat: https://www.zapsplat.com/
- **Конвертеры OGG**: https://cloudconvert.com/mp3-to-ogg
- **JSON-валидатор**: https://jsonlint.com/
