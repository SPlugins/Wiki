---
description: >-
  Подробное руководство по созданию кастомных текстур предметов через Custom
  Model Data и ресурспаки в плагине ExecutableItems.
source_hash: 0009e0522a21f996
translated_at: '2026-10-03T10:28:09.572Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Кастомные текстуры предметов (Minecraft 1.13 - 1.21.3)

Это подробное руководство научит вас создавать кастомные текстуры для предметов в версиях Minecraft с 1.13 по 1.21.3 с помощью Custom Model Data и ресурспаков.

:::warning Текстуры брони
Это руководство **не** охватывает перетекстуровку брони. Для брони вам понадобится использовать OptiFine CIT (Custom Item Textures). Найдите "OptiFine armor retexturing" для соответствующих обучающих материалов.
:::

:::danger Важные правила именования
**ВСЕ имена файлов и папок ДОЛЖНЫ быть только в нижнем регистре.**

Использование символов в верхнем регистре приведёт к сбою загрузки текстур. Всегда используйте `custom_sword` вместо `CustomSword`.
:::

## Видеоурок

Если вы предпочитаете видеоформат, этот урок основан на следующем видео:

<iframe width="560" height="315" src="https://www.youtube.com/embed/y-t1YMslFLM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Требования

- **Текстовый редактор**: используйте Notepad++, VS Code или аналогичный (НЕ обычный Notepad)
- **Редактор изображений**: Photoshop, Paint.NET, GIMP или Paint 3D
- **Инструмент сжатия**: WinRAR, 7-Zip или встроенное сжатие ОС
- **Базовые знания JSON** (полезны, но не обязательны)

:::tip Расширения файлов
Ни один из создаваемых вами файлов не является файлом `.txt`. Убедитесь, что ваш редактор умеет сохранять конкретные типы файлов, такие как `.json`, `.mcmeta` и `.png`.
:::

## Часть 1: Настройка вашего ExecutableItem

### Шаг 1: Создайте ваш предмет

Сначала создайте ExecutableItem, который будет использовать кастомную текстуру:

```
/ei create my_custom_pickaxe
```

### Шаг 2: Настройте базовые свойства

Настройте отображаемое название предмета, описание (lore) и любые другие возможности, которые вы хотите использовать:

```
/ei edit my_custom_pickaxe
```

Пример конфигурации:
- **Название**: `&b&lCustom Pickaxe`
- **Материал**: `DIAMOND_PICKAXE`
- **Lore**: добавьте любой описательный текст

## Часть 2: Создание вашей текстуры

### Шаг 3: Разработайте изображение текстуры

Создайте кастомную текстуру с помощью редактора изображений:

**Требования:**
- **Формат**: PNG с поддержкой прозрачности
- **Разрешение**: 16x16 пикселей (или степень 2: 32x32, 64x64, 128x128 и т.д.)
- **Имя файла**: используйте нижний регистр с подчёркиваниями (например, `custom_pickaxe.png`)

:::tip Разрешение изображения
Хотя 16x16 является стандартом, вы можете использовать более высокое разрешение, например 32x32 или 64x64, для более детальных текстур. Просто сохраняйте степень 2.
:::

Сохраните файл текстуры, он понадобится вам в следующем разделе.

## Часть 3: Создание ресурспака

### Шаг 4: Создайте структуру папок

Создайте следующую структуру папок:

```
ExecutableItemsTexturePack/
├── pack.mcmeta
├── pack.png (optional)
└── assets/
    └── minecraft/
        ├── textures/
        │   └── item/
        │       └── custom_textures/
        │           └── custom_pickaxe.png
        └── models/
            └── item/
                ├── diamond_pickaxe/
                │   └── 1.json
                └── diamond_pickaxe.json
```

### Шаг 5: Создайте pack.mcmeta

В корневой папке создайте `pack.mcmeta`:

```json
{
  "pack": {
    "pack_format": 15,
    "description": "§eExecutableItems Custom Textures"
  }
}
```

:::info Pack format по версиям
Выберите правильный `pack_format` для вашей версии Minecraft:
- **15** = 1.20.5 - 1.21.1
- **34** = 1.20.2 - 1.20.4
- **18** = 1.20 - 1.20.1
- **15** = 1.19.4
- **13** = 1.19.3
- **12** = 1.19 - 1.19.2
- **9** = 1.18 - 1.18.2
- **8** = 1.17 - 1.17.1
- **6** = 1.16.2 - 1.16.5

См. [полный список pack format](https://minecraft.wiki/w/Pack_format) для всех версий.
:::

### Шаг 6: Добавьте файл вашей текстуры

1. Перейдите в `assets/minecraft/textures/item/custom_textures/`
2. Поместите сюда ваш PNG-файл текстуры (например, `custom_pickaxe.png`)

### Шаг 7: Определите материал базового предмета

Вам нужно знать Minecraft ID базового предмета:

1. Нажмите **F3 + H** в Minecraft, чтобы включить расширенные подсказки (Advanced Tooltips)
2. Наведите курсор на предмет, чтобы увидеть его ID (например, `minecraft:diamond_pickaxe`)
3. Используйте часть после двоеточия для имён файлов (например, `diamond_pickaxe`)

![ID предмета, показанный с помощью Advanced Tooltips](https://media.ssomar.com/m/docs-img-image-185.png)

:::warning Важно: используйте Minecraft ID
Имя файла ДОЛЖНО совпадать с Minecraft ID предмета, а не с:
- ❌ Отображаемым названием вашего предмета
- ❌ Именем файла вашей текстуры
- ❌ ID вашего ExecutableItem
- ✅ Minecraft ID материала (например, `diamond_pickaxe`)
:::

### Шаг 8: Создайте базовый файл модели

В `assets/minecraft/models/item/` создайте `diamond_pickaxe.json`:

```json
{
    "parent": "minecraft:item/generated",
    "textures": {
        "layer0": "minecraft:item/diamond_pickaxe"
    },
    "overrides": [
        {
            "predicate": {
                "custom_model_data": 1
            },
            "model": "item/diamond_pickaxe/1"
        }
    ]
}
```

**Понимание полей:**

- `"parent"`: базовый тип модели
  - Используйте `"generated"` для большинства предметов
  - Используйте `"handheld"`, если предмет выглядит неправильно в руке
- `"layer0"`: стандартная текстура ванильного Minecraft
- `"overrides"`: массив кастомных сопоставлений model data
- `"custom_model_data"`: число, которое вы укажете в ExecutableItems
- `"model"`: путь к вашему кастомному файлу модели

:::tip Несколько кастомных текстур
Чтобы добавить больше кастомных текстур для одного и того же предмета, добавьте больше записей override:

```json
"overrides": [
    {
        "predicate": {
            "custom_model_data": 1
        },
        "model": "item/diamond_pickaxe/1"
    },
    {
        "predicate": {
            "custom_model_data": 2
        },
        "model": "item/diamond_pickaxe/2"
    },
    {
        "predicate": {
            "custom_model_data": 3
        },
        "model": "item/diamond_pickaxe/3"
    }
]
```
:::

### Шаг 9: Создайте файл кастомной модели

1. Создайте папку: `assets/minecraft/models/item/diamond_pickaxe/`
2. Создайте файл: `1.json` внутри этой папки

Содержимое `1.json`:

```json
{
    "parent": "item/handheld",
    "textures": {
        "layer0": "item/custom_textures/custom_pickaxe"
    }
}
```

**Понимание пути к текстуре:**

Значение `"layer0"` является путём относительно `assets/minecraft/textures/`:
- Путь: `item/custom_textures/custom_pickaxe`
- Полный путь: `assets/minecraft/textures/item/custom_textures/custom_pickaxe.png`

:::danger Частая ошибка: неверный путь к текстуре
Самая частая ошибка, это указание неверного пути в `layer0`. Обязательно проверьте, что:
1. Путь совпадает с вашей структурой папок
2. Вы не включаете расширение `.png`
3. Путь начинается внутри папки `textures/`
:::

### Шаг 10: Упакуйте ресурспак

#### Для Windows (WinRAR/7-Zip):
1. Выделите `pack.mcmeta` и папку `assets`
2. Правый клик → Add to archive / Compress
3. Выберите формат `.zip`
4. Назовите файл `ExecutableItemsTexturePack.zip`

#### Для Mac/Linux:
1. Выделите `pack.mcmeta` и папку `assets`
2. Сжмите в ZIP с помощью встроенного сжатия
3. Либо поместите в папку и используйте как есть для локального тестирования

![Создание ZIP-файла](https://media.ssomar.com/m/docs-img-image-244.png)

![Изменение формата на .ZIP](https://media.ssomar.com/m/docs-img-image-158.png)

### Шаг 11: Установите ресурспак

1. Поместите файл `.zip` в `.minecraft/resourcepacks/`
2. Запустите Minecraft
3. Перейдите в Options → Resource Packs
4. Включите ваш пак, нажав на стрелку

## Часть 4: Связывание ExecutableItems с текстурой

### Шаг 12: Установите Custom Model Data

Отредактируйте ваш ExecutableItem:

```
/ei edit my_custom_pickaxe
```

Перейдите в конфигурацию `customModelData` и установите значение, совпадающее с вашим override:

![Настройка Custom Model Data](https://media.ssomar.com/m/docs-img-image-163.png)

Установите значение `1` (или любое другое число, которое вы использовали в override):

![Установка значения 1](https://media.ssomar.com/m/docs-img-image-61.png)

**В конфигурационном файле это выглядит так:**

```yaml
customModelData: 1
```

### Шаг 13: Проверьте вашу кастомную текстуру

Выдайте себе предмет:

```
/ei give my_custom_pickaxe
```

Теперь вы должны увидеть вашу кастомную текстуру!

![Кастомная текстура в инвентаре](https://media.ssomar.com/m/docs-img-image-364.png)

![Кастомная текстура в руке](https://media.ssomar.com/m/docs-img-image-392.png)

## Решение проблем

| Проблема | Решение |
|---------|----------|
| **Текстура не отображается** | Проверьте, что все имена файлов в нижнем регистре |
| **Фиолетовая/чёрная текстура** | Проверьте, что путь `layer0` совпадает с расположением вашей текстуры |
| **Пак не загружается** | Проверьте, что `pack_format` соответствует вашей версии Minecraft |
| **Неправильный внешний вид предмета** | Измените `"generated"` на `"handheld"` в parent модели |
| **Предмет выглядит ванильным** | Проверьте, что `customModelData` в EI совпадает с номером вашего override |

## Дополнительные советы

### Организация нескольких текстур

Создайте подпапки для разных типов предметов:

```
custom_textures/
├── weapons/
│   ├── sword_fire.png
│   └── sword_ice.png
├── tools/
│   └── pickaxe_emerald.png
└── misc/
    └── wand_magic.png
```

Соответствующим образом обновите ваши пути:
```json
"layer0": "item/custom_textures/weapons/sword_fire"
```

### Использование 3D-моделей

Для 3D-моделей, созданных в [Blockbench](https://www.blockbench.net/):

1. Создайте вашу модель в Blockbench
2. Экспортируйте как "Java Block/Item"
3. Замените содержимое вашего `1.json` экспортированной моделью
4. Убедитесь, что пути к текстурам совпадают со структурой вашего пака

### Развёртывание на сервере

Чтобы использовать кастомные текстуры на сервере, вам потребуется разместить ресурспак онлайн. См. наше [руководство по загрузке текстурпака](./uploading-texture-pack.md) для инструкций.

## Скачать пример пака

Если у вас возникают трудности с выполнением шагов, скачайте этот пример пака, чтобы увидеть правильную структуру:

[Скачать ExecutableItemsTexturePackExample.zip](/img/ExecutableItemsTexturePackExample.zip)

## Дополнительные ресурсы

- [Minecraft Wiki: Resource Pack](https://minecraft.wiki/w/Resource_pack)
- [Minecraft Wiki: Model Format](https://minecraft.wiki/w/Model)
- [История версий Pack Format](https://minecraft.wiki/w/Pack_format)
- [Blockbench, бесплатный редактор 3D-моделей](https://www.blockbench.net/)

---

Нужна помощь? Присоединяйтесь к нашему [сообществу в Discord](https://discord.gg/ExecutableItems) и задавайте вопросы в каналах поддержки!
