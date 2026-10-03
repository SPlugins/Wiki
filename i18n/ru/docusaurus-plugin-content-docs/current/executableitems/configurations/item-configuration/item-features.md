---
description: >-
  Подробное описание функций предметов плагина ExecutableItems: активаторы,
  атрибуты, прочность, зачарования и другие настройки.
source_hash: 9a41c7f27a57a232
translated_at: '2026-10-03T10:25:04.589Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Функции предмета

Список функций предмета это первое, что вам следует настроить на вашем предмете.

Премиум функции отмечены тегом: <CustomTag type="premium" />

### Активаторы

* Очень важные функции, которые позволяют добавлять способности вашему предмету
* Отдельная вики для этой функции: [Список активаторов EI](../activator-configuration/list-of-the-activators.md) и [Функции активаторов EI](/executableitems/configurations/activator-configuration/activators-features.md)


### Материал предмета

* Информация: Материал предмета Minecraft для ExecutableItem
* Пример: Если я хочу, чтобы ExecutableItem имел базовый предмет DIAMOND, то это будет выглядеть так

```yaml
material: DIAMOND
```

* Вы можете проверить список материалов по этой ссылке: [Список материалов](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
* Если вы хотите установить в качестве материала предмета кастомную голову, проверьте эту ссылку [Настройки головы](/executableitems/configurations/item-configuration/item-features#head-settings).

### Имя или DisplayName предмета

* Информация: Отображаемое имя предмета. Это видимое название.
* Пример: Если я хочу, чтобы мой предмет имел отображаемое имя в виде красного заголовка "Epic Sword", то это будет

```yaml
name: '&cEpic Sword'
```

* Если вы хотите использовать в отображаемом имени HEX цвета, вы можете сделать это так:
  * Вам нужно перейти на сайт, который поможет выбрать нужный цвет, чтобы получить hex код цвета. Мы рекомендуем [https://htmlcolorcodes.com/](https://htmlcolorcodes.com/)
  * Затем выберите нужный цвет и запишите / скопируйте его hex код. [Справка](https://imgur.com/a/tNWtA0a)
  * С этим hex кодом цвета вам нужно добавить "#" в начале, и это будет стоять перед тем, что вы хотите покрасить. #\<HEX\_COLOR\_CODE>\<What you want to color>
  * В итоге у вас получится что-то вроде **`#DB6725&lPractice`**, и это будет выглядеть с выбранным цветом [в игре](https://imgur.com/a/7umxduF).

### Lore или описание предмета

* Информация: Lore или описание предмета
* Пример:

```yaml
lore:
- '&7Insta-Boom Bomb'
- ''
- '&f&lABILITIES:'
- '&f&l - &a&lInsta-Boom &f&l(&3&lRIGHT-CLICK&f&l)'
- '&fRight-Click on a block to use. Can only'
- '&fharvest blocks mined using your bare hands.'
- '&fBlows up a 5x5x5 area from where you used'
- '&fthe bomb. Will mostly blow up the type of block'
- '&fthat you clicked and sometimes the blocks around it.'
```

* Вы можете использовать плейсхолдеры в lore. Просто учтите, что если вы используете плейсхолдеры вне плагина, а затем добавляете какой-то новый контент в lore, например кастомные зачарования, кастомный текст. Если один из плейсхолдеров обновится, то всё добавленное вне плагинов Ssomar будет удалено. Чтобы избежать этого, вам нужно не обновлять lore, но это значит, что плейсхолдеры не будут обновляться. Вам нужно выбрать тот вариант, который вам больше подходит. В заключение: ДОПОЛНИТЕЛЬНЫЕ ЭЛЕМЕНТЫ В LORE означают ОТСУТСТВИЕ ОБНОВЛЕНИЯ означают ОТСУТСТВИЕ кастомных плейсхолдеров EI в lore, пожалуйста.

:::info
Чтобы оставить пустое место между строками lore, вы можете добавить '' в конфигурационном файле. Если вы редактируете lore внутри Minecraft, используя кастомный GUI, вам нужно использовать '\&f'.
:::

:::info
Для бесплатной версии ExecutableItems есть строка с "Made with ExecutableItems": её нельзя удалить, это является компенсацией за обновление, увеличивающее количество предметов с 25 до 500.
:::

### Эффект свечения (зачарованное свечение)

* Информация: Булево значение, которое выбирает, придаёт ли executable item вид свечения/зачарованного эффекта.
* Пример: 

```yaml
glow: true
```

### Отключить свечение зачарования <CustomTag type="version" version="1.20.5" />

* Информация: Булево значение, которое принудительно отключает эффект свечения у предмета, даже если он зачарован. 
* Пример: 

```yaml
disableEnchantGlow : true
```

:::info
СОВЕТ: Вы также можете убрать эффект свечения с некоторых ванильных предметов, например, со звезды Края.
:::

### Отображение условий в lore предмета

* Информация: Позволяет отображать условия в lore предмета.
* Пример: 

```yaml
displayConditions:
  playerConditions:
    ifSneaking: true
  worldConditions: {}
  itemConditions: {}
  placeholdersConditions: {}
  enableFeature: true
```

### Прочность предмета

* Информация: Выберите значение прочности предмета.
  * Для версий до 1.20.5: Значение прочности должно быть равно или меньше максимальной ванильной прочности для выбранного предмета.
  * Пример: 
```yaml
durability: 150
```
  * Для версий 1.20.5 и выше: Опцию прочности можно настраивать, что включает новые функции, такие как синхронизация использования ExecutableItem и значения прочности. А также позволяет выбрать кастомную максимальную прочность.
  * Пример:
```yaml
isDurabilityBasedOnUsage: true
maxDurability: 20 
durability: 19
```

### Зачарования предмета

* Информация: Задаёт начальные зачарования, которые будет иметь executable item при выдаче.
* Пример:

```yaml
enchantments:
  enchantment1: #ID Of this enchantment, you can add as many as you want
    enchantment: sharpness
    level: 1
```

### Unbreakable (неразрушимость)

* Информация: Булево значение, которое выбирает, будет ли executable item неразрушимым или нет
* Пример: 

```yaml
unbreakable: true
```

### Атрибуты <CustomTag type="version" version="1.12" />

* Информация: Вы можете выбрать атрибуты ExecutableItem.
  * `attribute`: Тип атрибута. Список здесь [Список атрибутов](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/attribute/Attribute.html)
  * `uuid`: Это код, который нужен Minecraft для присвоения модификаторов атрибутов. Вы можете его игнорировать.
  * `name`: Это отображаемое имя Attribute Modifier. Полезно, чтобы записать, что он делает. Оно ни на что не влияет, кроме отображения в GUI.
  * `operation`: Тип операции, которую будет выполнять AttributeModifier. Список здесь [Операции](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html)
  * `amount`: Значение для AttributeModifier, оно будет применено к атрибуту с использованием выбранной операции.
  * `slot`: Слот, на котором будет работать AttributeModifier.
  * Пример:

```yaml
attributes:
  attribute1: #Id of this attribute, you can add as many as you want
    attribute: GENERIC_ARMOR
    name: '&#x26;eDefault name'
    uuid: 8d6b9b6a-c84d-4c76-9b4d-81a1f44a04a0
    amount: 1.0
    operation: ADD_NUMBER
    slot: HAND
```

:::info
**Если вы используете версию 1.12, вам нужно выполнить следующие шаги:**

* Этот процесс требует премиум версию EI <CustomTag type="premium" />
* Сгенерируйте ваш предмет с атрибутами на сайте. Мы рекомендуем [https://mapmaking.fr/give1.12/](https://mapmaking.fr/give1.12/)
* Затем выдайте предмет себе внутри Minecraft
* Держа его в руке, выполните команду /ei create \<id>
* Вот и всё! Теперь ваш EI имеет автоматически импортированные атрибуты.
:::

#### **Сохранить атрибуты по умолчанию**

* Информация: Булево значение для сохранения или нет атрибута по умолчанию предмета.
* Пример:

```yaml
keepDefaultAttributes: true
ignoreKeepDefaultAttributesFeature: false
```

:::warning
На 1.21+ предмет без собственных атрибутов, у которого нет этих двух строк, **теряет атрибуты по умолчанию своего материала**: меч бьёт как кулак, элемент брони не даёт брони. ExecutableItems выводит список таких предметов в консоль после каждой загрузки. Чтобы исправить все ваши предметы сразу: `/ei util-set-keepdefaultattributes-all-ei true`.
:::

:::info Кузнечный стол
С `keepDefaultAttributes: true` предмет, улучшенный на кузнечном столе (алмаз на незерит), получает атрибуты по умолчанию своего нового материала (незеритовая броня, прочность и сопротивление отбрасыванию). Атрибуты самого предмета сохраняются.
:::

* По этой ссылке есть туториал по атрибутам и их функциям.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HqyF0QBYIY4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


#### **ignoreKeepDefaultAttributesFeature:** 

* Информация: Игнорирует настройку сохранения атрибутов по умолчанию. Это полезно для третьего случая в объяснении этой таблицы:
* Пример:

```yaml
ignoreKeepDefaultAttributesFeature: true
```

### Custom model data <CustomTag type="version" version="1.14" />

* Информация: 
  * Для версий Minecraft до 1.21.4: Целое число для установки значения функции customModelData предмета. Полезно для создания разных текстур для предмета.
  * Начиная с версии Minecraft 1.21.4 вы теперь можете добавлять текст и булево значение.
* Пример: 

```yaml
# For the Minecraft version before 1.21.4
customModelData: 2232

# Since the 1.21.4
# Use ; to separate your data
customModelData: 1.0;true;hello;5.0;false;true;my text 2

# A vanilla item like this : /give @p brick[custom_model_data={floats:[1.0],flags:[true],strings:["hello"]}] 1
# Will look like this in EI : 
customModelData: 1.0;true;hello
```

* Туториал: [https:/.ssomar.com/executableitems/questions-or-guides/premium-custom-textures](https:/.ssomar.com/executableitems/questions-or-guides/premium-custom-textures)

### Функции редкости предмета <CustomTag type="version" version="1.20.5" />

* Информация: Редкость это ванильная характеристика, применяемая к предметам и блокам, чтобы обозначить их ценность и сложность получения. Она никак не влияет на геймплей. Существует четыре уровня редкости: Common, Uncommon, Rare и Epic.
  * `enableRarity`: Булево значение, которое показывает, включена функция или нет
  * `rarity`: Тип редкости
* Пример:

```yaml
itemRarity:
  enableRarity: false
  rarity: COMMON
```

### Функции Equippable <CustomTag type="version" version="1.21.2" />

* Информация: Этот раздел настраивает поведение экипируемого предмета. Когда включено, предмет можно надеть в указанный слот, опционально воспроизводя звуковой эффект. Вы также можете указать кастомную модель для надетого предмета, определить, теряет ли он прочность при получении урона владельцем, и установить флаги, разрешающие или ограничивающие замену и снятие. Кроме того, вы можете ограничить, какие сущности могут надевать этот предмет.
  * `enable`: Установите true, чтобы включить экипировку для этого предмета
  * `slot`: Слот экипировки (например, CHEST, HEAD, LEGS, FEET), в который надевается предмет
  * `enableSound`: Булево значение для воспроизведения звука при надевании предмета
  * `sound`: Звуковой эффект, который воспроизводится при надевании
  * `equipModel`: (Опционально) кастомная модель для надетого предмета (например, "mynamespace:mymodel")
  * `cameraOverlay`: (Опционально) кастомное наложение камеры при надетом предмете
  * `damageableOnHurt`: Булево значение, которое выбирает, теряет ли предмет прочность при получении урона владельцем
  * `dispensable`: Булево значение, которое выбирает, можно ли снять предмет (убрать/выбросить)
  * `swappable`: Булево значение, которое выбирает, можно ли поменять предмет на другой
  * `allowedEntities`: Список сущностей, которым разрешено надевать этот предмет
* Пример:

```yaml
equippableFeatures:
    enable: false
    slot: CHEST
    enableSound: false
    sound: ITEM_ARMOR_EQUIP_DIAMOND

    equipModel: "" # Example: "mynamespace:mymodel"
    cameraOverlay: "" # Example: "mynamespace:mymodel"

    damageableOnHurt: false
    dispensable: true
    swappable: true

    allowedEntities:
     - PLAYER
```

### Функции Repairable <CustomTag type="version" version="1.21.2" />

* Информация: Функции, связанные с ремонтом ExecutableItem.
  * `enable`: Булево значение, которое выбирает, включена ли функция или нет
  * `repairCost`: Целое значение, которое представляет стоимость ремонта на наковальне
* Пример:

```yaml
repairableFeatures:
    enable: false
    repairCost: 2 
```

### Glider (планер) <CustomTag type="version" version="1.21.2" />

* Информация: Функция, позволяющая планировать с предметом, как вы обычно делаете с ванильным предметом "элитры".
* Пример:

```yaml
glider: false
```

### itemModel <CustomTag type="version" version="1.21.2" />

* Информация: Путь кастомной модели предмета в текстурпаке в формате \<mynamespace\:model\_id>, который будет указывать внутри assets/\<mynamespace>/models/item/\<model\_id>.
* Пример:

```yaml
itemModel: "" # "mynamespace:mymodel"
```

### tooltipModel <CustomTag type="premium" /> <CustomTag type="version" version="1.21.2" />

* Информация: Путь кастомной модели подсказки в текстурпаке в формате \<mynamespace\:model\_id>, который будет указывать внутри /assets/\<mynamespace>/textures/gui/sprites/tooltip/\<id>\_frame
* Пример:

```yaml
tootipModel: "" # "mynamespace:mymodel"
```

### Функции, связанные с выброшенным предметом

Здесь вы узнаете о функциях, которые видны только тогда, когда предмет выброшен на землю.

#### Свечение при выбросе

* Информация: Когда предмет выброшен, он имеет эффект свечения
* Пример: 

```yaml
dropFeatures:
  glowDrop: false
```

#### Цвет свечения при выбросе

* Информация: Если у предмета включён glowEffect, то можно выбрать цвет эффекта свечения при выбросе.
* Возможные цвета: [Справка по цветам](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)
* Пример:

```yaml
dropFeatures:
  glowDrop: false
  glowDropColor: WHITE
```

#### Отображаемое имя при выбросе предмета

* Информация: Выберите, будет ли предмет показывать отображаемое имя в виде плавающего текста, когда он выброшен.
* Пример: 

```yaml
dropFeatures:
  displayNameDrop: true
```

### NBT теги

* Информация: Требует плагин [**NBTAPI**](https://www.spigotmc.org/resources/nbt-api.7939/), доступный на Spigot.
Эта функция позволяет добавлять ваши кастомные nbt теги внутрь вашего ExecutableItem.
  * `type`: Тип значения, которое вы сохраняете, например:
    * BOOLEAN: true | false
    * STRING: car
    * INTEGER: 6
    * DOUBLE: 17.6
    * COMPOUND: Пример ниже, это будет зависеть от ваших потребностей и того, что вы хотите добавить.
  * `key`: Строковый ключ, представляющий это nbt хранилище
  * `value`: Значение NBT тега, который вы добавляете
* Пример:

```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: 3
 '2': #Id of this nbt, you can add as many as you want
    type: STRING
    key: 'MyOtherKey'
    value: 'myValue'
 '3': #Id of this nbt, you can add as many as you want
    type: BOOLEAN
    key: 'KeyKeyKeykey'
    value: true
 '4': #Id of this nbt, you can add as many as you want
    type: DOUBLE
    key: 'KeyKeyKeykeykeykey'
    value: 0.5
 '5': #Id of this nbt, you can add as many as you want
    type: BYTE
    key: 'IsCustom'
    value: 1
 '6': #Id of this nbt, you can add as many as you want
    key: ExtraAttributes
    type: COMPOUND
    value:
      nbt:
        '0':
          key: id
          type: STRING
          value: TRIAL_OF_THE_SUN_GOD
 '7': #Id of this nbt, you can add as many as you want
    key: CanDestroy
    type: STRING_LIST
    value:
    - minecraft:stone
 '8':
    key: PublicBukkitValues
    type: COMPOUND
    value:
      nbt:
        '0':
          key: auraskills:item_modifiers
          type: COMPOUND_LIST
          value:
            '0':
              key: comp0
              nbt:
                '0':
                  type: COMPOUND
                  value:
                    nbt:
                      '0':
                        key: auraskills:stat
                        type: STRING
                        value: auraskills/wisdom
                      '1':
                        key: auraskills:value
                        type: DOUBLE
                        value: '%rand:1|10000%'
                      '2':
                        key: auraskills:operation
                        type: STRING
                        value: add
```

### Bukkit теги

* Информация: Вы можете добавить значения bukkit тегов в ваш ExecutableItem.
* Пример:

```yaml
tags:
 - mytag:blabla1
 - myothertag:blabla2
```

В игре это будет представлено в PublicBukkitValues вот так

```yaml
"executableitems:mytag":"blabla1"
"executableitems:myothertag":"blabla2"
```

Вы также можете писать плейсхолдеры %rand% в поле значения NBT. Работает только для типов данных STRING, INTEGER и DOUBLE
```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: '%rand:-100|100%'
```
Также работает в игровом редакторе
```
INTEGER::foo::%rand:1|2%
```  
  
Вы также можете сохранять nbt в PDC (Persistent Data Container), если хотите.
* Пример в игре: `integer::take::0::true`
* Конфиг предмета:
```yml
nbt:
  '0':
    key: take
    saveInPDC: true
    type: INT
    value: 0
```

### Функции Hiders

* Информация: Настройки, связанные со скрытием функций, которые обычно отображаются на вашем ExecutableItem. Все функции, даже скрытые, остаются функциональными.
  * `hideEnchantments`: Булево значение, которое показывает, будут ли зачарования ExecutableItem отображаться в lore или нет.
  * `hideUnbreakable`: Булево значение, которое показывает, будет ли описание unbreakable отображаться в lore или нет.
  * `hideAttributes`: Булево значение, которое показывает, будут ли атрибуты ExecutableItem отображаться в lore или нет.
  * `hidePotionEffects`: Булево значение, которое показывает, будут ли эффекты зелья ExecutableItem отображаться в lore или нет. В версиях 1.20.5 и выше используйте hideAdditionalTooltip.
  *   hideAdditionalTooltip (Доступно только в 1.20.5++) 

      Настройка для показа/скрытия эффектов зелья, информации о книге и фейерверке, подсказок карты, узоров баннеров и зачарований зачарованных книг. Заменяет старый hidePotionEffects
  * `hideUsage`: Булево значение, которое показывает, будет ли кастомная функция Usage самого предмета из плагина ExecutableItem отображаться в lore или нет.
    * Вы можете вручную отобразить usage, используя плейсхолдер %usage%, добавив его при редактировании lore.
  * `hideDye`: Булево значение, которое показывает, будет ли цвет краски (#\<color>) ExecutableItem отображаться в lore или нет.
  * `hideArmorTrim`: Булево значение, которое показывает, будет ли armor trim ExecutableItem отображаться в lore или нет.
  * `hidePlacedOn`: Булево значение, которое показывает, будет ли NBT тег "Can be placed on: \[...]" ExecutableItem отображаться в lore или нет.
  * `hideDestroys`: Булево значение, которое показывает, будет ли NBT тег "Can destroy: \[...]" ExecutableItem отображаться в lore или нет.
  * `hideToolTip`: Булево значение, которое показывает, скрыта ли подсказка или нет. (Доступно только в 1.20.5++)
* Пример:

```yaml
hiders:
  hideEnchantments: false
  hideUnbreakable: false
  hideAttributes: false
  hidePotionEffects: false
  hideAdditionalTooltip: false
  hideUsage: false
  hideDye: false
  hideArmorTrim: false
  hidePlacedOn: false
  hideDestroys: false
  hideToolTip: false
```

### Функции Usage

В этом разделе будет объяснено, что такое usage и его функции.

#### Usage

* Информация: Usage это целочисленное значение, хранящееся внутри вашего ExecutableItem, его можно изменить через usageModification внутри активатора или команд. Но это не просто сохранённое значение, оно было создано, чтобы представлять "кастомную систему прочности" вашего ExecutableItem, то есть если каким-то образом usage достигнет 0, ваш предмет будет удалён.
* Пример: 
  * Usage равный 1 не означает, что у предмета одна единица прочности, как мы объяснили ранее, это кастомная система прочности. Он будет существовать до тех пор, пока usage не достигнет 0. Например, если вы добавите активатор к вашему предмету, у которого есть функция usageModification со значением "-1", как только активатор сработает один раз, ваш предмет исчезнет.
  * Продолжая ту же идею, у нас usage равен 1, если у нас нет активаторов, меняющих usage предмета, наш предмет будет существовать бесконечно, до тех пор, пока снова... каким-то образом либо команда, либо новый активатор, добавленный к предмету, не изменит usage на значение, равное или меньшее 0, тогда предмет будет удалён.
    * ```yaml
      usage: 1
      ```
  * Как мы уже говорили, не воспринимайте usage просто как систему прочности: значение может и расти. Например, если у активатора в usageModification указано положительное значение вместо отрицательного, usage будет увеличиваться при каждом срабатывании активатора.
  * Если вы не хотите, чтобы значение увеличивалось или уменьшалось, просто не используйте это хранилище значения. Можно установить usage в -1.
    * ```yaml
      usage: -1
      ```

#### Лимит usage <CustomTag type="premium" />

* Информация: Целое значение, которое ограничивает верхний предел, которого может достичь usage. (Значение не может быть 0)
* Пример: 

```yaml
usageLimit: 600 #Usage will not be able to go up more than this value, -1 to don't take it into account
```

#### Использований в день

* Информация: Целое значение, которое ограничивает, сколько раз вы можете использовать предмет каждый день в реальной жизни
* Пример: 

```yaml
usePerDay: 200 # -1 to ignore it
```

### Функции Food <CustomTag type="version" version="1.20.5" />

* Информация: Эта функция позволяет настроить параметры еды, связанные с вашим ExecutableItem
  * `nutrition`: Целое значение, представляющее количество "половин еды", которое заполнит игроку при съедании предмета
    * Для лучшего понимания: у игрока максимум 20 единиц питания, и это отображается в игре как 10 иконок голода, каждая из которых может делиться на 2.
  * `saturation`: Целое значение, представляющее насыщение, которое получит игрок при съедании предмета.
  * `isMeat`: Булево значение, которое заставит предмет считаться едой. Это будет применено принудительно, то есть, если вы установите это значение в true, любой предмет, даже те, которые нельзя есть, будут считаться едой, и поэтому будут съедобными.
  * `canAlwaysEat`: Булево значение, которое показывает, можно ли всегда есть предмет, даже когда у игрока шкала голода полностью заполнена.
*  Пример:

```yaml
foodFeatures:
  nutrition: 1
  saturation: 1
  isMeat: false
  canAlwaysEat: true
```

### Функции Consumable <CustomTag type="version" version="1.21.4" />

* Информация: Функции, связанные с consumable, позволяют настроить параметры потребления, это ближе к функции food.
  * `enable`: Булево значение, которое включает или отключает функции consumable
  * `animation`: ANIMATION\_TYPE, который будет воспроизведён при поедании/потреблении ExecutableItem
  * `sound`: SOUND, который будет воспроизведён, когда предмет едят/потребляют
  * `hasConsumeParticles`: Булево значение, которое показывает, будет ли предмет выделять частицы от поедания
  * `consumeSeconds`: Количество секунд, за которое предмет съедается/потребляется.
* Пример:

```yaml
consumableFeatures:
  enable: true
  animation: SPYGLASS
  sound: ITEM.ARMOR.EQUIP_DIAMOND
  hasConsumeParticles: false
  consumeSeconds: 3
```

### Настройки зелья

Здесь вы можете настроить функции зелья вашего ExecutableItem, если материал предмета является зельем.

#### Цвет зелья

* Информация: Целое число цвета MapInfo, представляющее цвет. Используйте сайт вроде [https://www.tydac.ch/color/](https://www.tydac.ch/color/), чтобы получить значение MapInfo из цвета.
* Пример:

```yaml
potionFeatures:
  potionColor: 10265481
```

#### Тип зелья

* Информация: Тип зелья, которым вы хотите, чтобы был предмет зелья. Это только визуальная функция, она не влияет на реальное поведение зелья. Список доступен здесь [Типы зелий](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionType.html)
* Пример:

```yaml
potionFeatures:
  potionType: WIND_CHARGED
```

#### Эффекты зелья

* Информация: Здесь вы можете создать эффекты зелья, которые будет иметь ваше зелье
  * `potionEffectType`: Выбранный PotionEffectType, список доступен здесь [Эффекты зелий](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
  * `isAmbient: Булево значение, которое делает зелье ambient, из-за чего эффект зелья создаёт больше полупрозрачных частиц.
  * `duration`: Целое значение в тиках (20 тиков = 1 секунда), которое представляет длительность эффекта зелья.
  * `amplifier`: Целое значение, которое представляет уровень/степень/силу эффекта зелья. Amplifier 0 означает уровень 1, amplifier 1 означает уровень 2 и так далее.
  * `hasParticles`: Булево значение, которое включает или отключает показ частиц эффекта вокруг игрока.
  * `hasIcon`: Булево значение, которое включает или отключает показ иконки эффекта в правом верхнем углу экрана игрока.
* Пример:

```yaml
potionFeatures:
  potionColor: 10265481
  potionType: FIRE_RESISTANCE
  potionEffects:
    pEffect0:
      isAmbient: false
      duration: 30
      potionEffectType: HEALTH_BOOST
      amplifier: 0
      hasParticles: false
      hasIcon: false
```

### Цвет кожаной брони

* Информация: Если ваш ExecutableItem является экземпляром кожаной брони, то здесь вы можете выбрать значение цвета MapInfo, которое вы можете получить с этого сайта [https://www.tydac.ch/color/](https://www.tydac.ch/color/), чтобы изменить цвет.
* Пример:

```yaml
armorColor: 7702341
```

### Настройки головы

Здесь вы можете выбрать конфигурацию для настроек головы, то есть кастомную голову из значения головы игрока или из базы данных.

#### Если у вас нет плагина для базы данных голов <CustomTag type="version" version="1.13" />

* Если вы хотите добавить кастомную голову для версий 1.13++ без наличия плагина базы данных, вы можете выполнить следующие шаги:
  * Установите материал ExecutableItem на PLAYER\_HEAD
  * Посетите страницу с кастомными головами, например, эту [https://minecraft-heads.com/custom-heads](https://minecraft-heads.com/custom-heads)
  *   Затем получите Value головы\

      
  * Теперь скопируйте это значение и вставьте его в функцию headValue ExecutableItems
  * Пример:
  * ```yaml
    headValue: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTk4ZGY0MmY0NzdmMjEzZmY1ZTlkN2ZhNWE0Y2M0YTY5ZjIwZDljZWYyYjkwYzRhZTRmMjliZDE3Mjg3YjUifX19
    ```

#### Если у вас есть плагин Head Database <CustomTag type="version" version="1.12" />

* Если вы хотите добавить кастомную голову для версии 1.12 и выше и у вас установлен плагин Head Database, выполните следующие шаги:
  * Откройте GUI плагина и скопируйте ID нужной головы
  * Вставьте его в параметры головы, в headDBID
  * Пример:
  * ```yaml
    headDBID: 44328
    ```
* Вот ссылки на случай, если у вас нет этого плагина, а вы хотите его.
  * Премиум версия: [Head Database](https://www.spigotmc.org/resources/head-database.14280/)
  * Бесплатная версия: [Head DB](https://www.spigotmc.org/resources/headdb-head-menu-auto-update-free.84967/)

### whitelistedWorlds

* Информация: Список строк с названиями миров, в которых вы хотите запретить или разрешить игрокам использование ExecutableItem.
* Пример:

```yaml
whitelistedWorlds:
- ZombieSurvivalWorld_the_end # This allows the use of the EI in that world
- '!ApocalypseWorld' # Using ! Disables the use of the EI in that world
```

### Store item info

* Информация: Булево значение, которое показывает, сохраняет ли предмет информацию в самом себе или нет. В настоящее время сохраняется функция "владельца" (owner). Поэтому если вы хотите использовать плейсхолдер %owner% или условия, связанные с владельцем, вам нужно включить эту функцию.
* Пример:

```yaml
storeItemInfo: false
```

### Функции Owner

#### canBeUsedOnlyByTheOwner

* Информация: Булево значение, которое показывает, может ли предмет использоваться только владельцем или нет.
  * Это работает только если включено store item info, чтобы предмет имел владельца.
* Пример: 

```yaml
canBeUsedOnlyByTheOwner: false
```

#### cancelEventIfNotOwner

* Информация: Булево значение, которое показывает, что если предмет используется не владельцем, то все события отменяются. Это значит, что если активатор, например, PLAYER\_BREAK\_BLOCK, и кто-то, кто не является владельцем, попытается использовать этот предмет, он не сможет сломать ни одного блока, так как все события будут отменены.
  * Это работает только если включено store item info, чтобы предмет имел владельца.
* Пример: 

```yaml
cancelEventIfNotOwner: false
```

#### onlyOwnerBlackListedActivators

* Информация: Список ID активаторов вашего ExecutableItem это чёрный список, который отключает функцию canBeUsedOnlyByTheOwner, то есть все ID активаторов здесь, которые нацелены на активатор ExecutableItem, смогут использоваться всеми, даже если canBeUsedOnlyByTheOwner включён в true.
  * Это работает только если включено store item info, чтобы предмет имел владельца.
* Пример: 

```yaml
onlyOwnerBlackListedActivators:
- activator0
- activator1
```

### cancelEventIfNoPermission

* Информация: Булево значение, которое показывает, что если у игрока нет права (ei.item.\<id>) на использование предмета, то все события отменяются. Это значит, что если активатор, например, PLAYER\_BREAK\_BLOCK, и кто-то, у кого нет права использовать этот предмет, попытается его использовать, он не сможет сломать ни одного блока, так как все события будут отменены.

```yaml
cancelEventIfNoPermission: true
```

### Сохранение предмета после смерти

* Информация: Булево значение, которое показывает, сохранит ли игрок предмет после смерти или нет.
* Пример: 

```yaml
keepItemOnDeath: true
```

:::info
Совместимо с функцией keepInventory WorldGuard и ванильным геймрулом keepInventory
:::

### Disable stack (отключить стак) <CustomTag type="premium" />

* Информация: Булево значение, которое показывает, предотвращается ли возможность стакать ExecutableItem или нет. Установка этой функции в true сделает customStackSize этого предмета равным 1.
* Пример: 

```yaml
disableStack: true
```

### customStackSize <CustomTag type="premium" /> <CustomTag type="version" version="1.20.5" />

* Информация: Целое значение для установки размера стака этого предмета. Оно переопределит текущее количество в стаке.
* Чтобы лучше это понять: ванильный diamond\_sword имеет размер стака 1, так как его нельзя стакать, с этой функцией вы можете увеличить это значение. С другой стороны, dirt имеет размер стака 64, но с этим вы можете его уменьшить, например, до размера стака 20.
* Пример: 

```yaml
customStackSize: 32
```

### Настройки переменных

* Информация: Переменные это способ хранить информацию внутри вашего ExecutableItem. Это позволяет отслеживать количество, хранить позиции, фактически, вы можете хранить всё, что захотите. Они помогают создавать динамическое и настраиваемое поведение предметов, под этим мы подразумеваем, что переменные позволяют создавать уникальное поведение для каждого предмета, храня и отслеживая данные, специфичные для этого предмета. Например, вы можете отслеживать, сколько раз игрок использовал определённый предмет или сколько игроков он с его помощью убил.
  * `variableName`: Имя переменной, оно будет использоваться как ссылка через %var\_\<name>%, чтобы использовать её в lore, внутри команд и т.д. Это имя не может быть "id" или "usage" или содержать пробелы.
  * `type`: VariableType переменной, может быть одним из следующих типов с примерами использования:
    * STRING: С этим типом переменной вы можете хранить значения STRING, такие как слова, числа, буквы, символы и т.д. Например, вы можете хранить имя последнего игрока, которого ударили. Этот тип переменной не поддерживает `variableModification(type:MODIFICATION)` увеличение или уменьшение значения. Он статичен, если только не заменяется `variableModification(type:SET)`, который перезапишет старое значение.
    * NUMBER: С этим типом переменной вы можете хранить значения FLOAT, такие как числа. Например, если вы хотите хранить количество сломанных блоков, количество убийств, отслеживать секунды до того, как что-то произойдёт, и т.д. Этот тип переменной поддерживает `variableModification(type:MODIFICATION)` и `variableModification(type:SET)`.
    * LIST: Эта переменная является переменной типа списка, которая хранит значения STRING. Полезна для хранения списка вещей, например, отслеживания нажатых блоков и добавления их в этот список, или добавления убитых игроков сюда и т.д.
  * `isRefreshableClean`: Булево значение, которое включает refresh clean. Это позволяет добавлять кастомные строки lore и не удалять их при обновлении переменной. Рекомендуется держать включённым (true).
  * `refreshTagDoNotEdit`: Автоматически генерируется плагином. Это помогает функциям `isRefreshableClean` работать правильно. Так что просто не трогайте это.
  * `papiParser`: Строковое значение, которое содержит строку PlaceholderAPI, где содержится значение переменной для парсинга. Его назначение, позволить вам вставлять значения переменных внутрь плейсхолдеров PlaceholderAPI и отображать результаты в lore. 
    * Пример:
      * Variable ID: `level`
      * papiParser String Value: `%math_<VAR>*<VAR>%`
        * Строка `<VAR>` представляет текущее значение переменной при парсинге. Если вы хотите разместить значение в нескольких местах строки плейсхолдера PlaceholderAPI, просто напишите `<VAR>` в нужных местах.
      * Строка плейсхолдера для размещения в lore: `%var_level_papi%`
* Пример
  * ```yaml
    variables:
      var2:
        variableName: ThisVariableIsTypeIntegerAndICanDoModifications
        type: NUMBER
        default: 10.0
      var1:
        variableName: anotherVariable # This variable is type string
        type: STRING
        default: '' #It starts with no value, we can then change it from an activator or using commands
      var0:
        variableName: nameOfVariable
        type: LIST
        default:
        - value1
        - value2
        - '1'
        - '2'
    ```
* Вы можете найти больше информации на следующей странице о других типах переменных:
  * [Переменные SCore](/tools-for-all-plugins-score/score-variables)

### Функции кастомной выдачи при первом входе

* Информация: Здесь вы можете настроить функцию выдачи предмета, когда игрок впервые заходит на сервер.
  * giveFirstJoin: Булево значение, которое показывает, включена ли функция или нет
  * giveFirstJoinAmount: Целое значение, представляющее, сколько этих предметов ExecutableItem будет выдано игроку.
  * giveFirstJoinSlot: Слот, в который будет выдан ExecutableItem игроку.
* Пример:

```yaml
giveFirstJoinFeatures:
  giveFirstJoin: false
  giveFirstJoinAmount: 1
  giveFirstJoinSlot: 0
```

### Функция распознавания предметов <CustomTag type="premium" />

* Информация: Эта функция позволяет сделать так, чтобы другие предметы, не являющиеся ExecutableItem, воспринимались так, как будто это ExecutableItem, который вы редактируете. По сути, идея заключается в работе с распознаваниями, это список типов распознавания, и если одно из них совпадает между вашим ExecutableItem и другим предметом (даже если это не ExecutableItem), функции, которые есть у ExecutableItem, будут также и у другого предмета. Это работает до тех пор, пока он распознаётся согласно требованиям распознавания.
  * Доступные опции распознавания:
    * NAME: Включает распознавание для всех предметов, которые совпадают с кастомным именем ExecutableItem
    * MATERIAL: Включает распознавание для всех предметов, которые совпадают с материалом ExecutableItem
    * LORE: Включает распознавание для всех предметов, которые совпадают с lore ExecutableItem
* Например, если вы создадите алмазную кирку ExecutableItem, у которой есть активатор PLAYER\_RIGHT\_CLICK и в командах "SEND\_MESSAGE I am a pickaxe", каждый раз при правом клике будет отправляться это сообщение в чат minecraft. Теперь, если вы включите распознавание предметов, скажем, по материалу, то теперь ВСЕ алмазные кирки на сервере будут запускать этот активатор, и поэтому сообщение будет отображаться.
* Пример: 

```yaml
recognitions:
- NAME
- MATERIAL  
- LORE 
```

* Примеры сценариев:
  * Если предмет EI имеет только распознавание по `MATERIAL` и является DIAMOND, все алмазы, существующие на сервере, будут вести себя как этот предмет EI
  * Если предмет EI имеет только распознавание по `NAME` и называется "\&dAngle", если вы попытаетесь использовать любой предмет с именем "\&dAngle", он будет вести себя как исходный предмет EI. НО если имя было "\&eAngle" или другое имя, это не сработает.
  * Если предмет EI имеет только распознавание по `LORE`, предмет будет вести себя как EI, только если предмет ТОЧНО имеет те же цветовые коды на строках lore и каждый бит заглавных и строчных букв и символов.
  * Если предмет EI имеет только распознавание по `MATERIAL` и `NAME`, предметы должны иметь ТОЧНОЕ ИМЯ и МАТЕРИАЛ предмета EI, чтобы предмет считался предметом EI.
* Учтите, что если у одного из ваших ExecutableItems включено распознавание предметов по MATERIAL, то вам не следует использовать больше распознаваний предметов по MATERIAL для другого ExecutableItem с тем же MATERIAL. Причина в том, что если есть 2 предмета ExecutableItems с включённым распознаванием MATERIAL, и оба являются DIAMOND\_BLOCK, только первый в алфавитном порядке будет иметь наивысший приоритет в случае, если кто-то активирует DIAMOND\_BLOCK.

## Функции кулдауна использования <CustomTag type="version" version="1.21.2" />

* Информация: Функция, которая добавляет предмету кулдаун использования в ванильном стиле, похожий на кулдаун эндер-жемчуга или плода хоруса.
  * `cooldownGroup`: Строковое значение, которое определяет группу кулдауна. Предметы с одинаковой группой кулдауна будут иметь общий кулдаун. Должно быть в нижнем регистре и соответствовать формату NamespacedKey (например, "mygroup" или "namespace:mygroup")
  * `vanillaUseCooldown`: Целое значение, представляющее длительность кулдауна в секундах
* Пример:

```yaml
useCooldown:
  cooldownGroup: "custom_weapon_group"
  vanillaUseCooldown: 5
```

:::info
Этот кулдаун отличается от системы кулдауна активаторов. Это ванильный кулдаун Minecraft, который показывает предмет "затемнённым" на панели быстрого доступа во время периода кулдауна.
:::


## В зависимости от типа предмета

### Функции контейнера

* Информация: Здесь вы можете настроить функции контейнера, если блок является экземпляром контейнера, например, сундука или бочки.
  * `isLocked`: Булево значение, которое показывает, заблокирован ли контейнер или нет
  * `lockedName`: Строковое значение, которое представляет имя ключа, если контейнер заблокирован. Это функция minecraft, если у вас есть предмет с тем же именем, что и lockedName, то вы сможете открыть сундук, иначе нет.
  * `containerContent`: Список материалов внутри контейнера при размещении в формате slot:\<slot>;\<material>
* Пример:

```yaml
containerFeatures:
  isLocked: true
  lockedName: thisIsTheKey
  containerContent:
  - slot:0;minecraft:loom
```

### Tool Rules (правила инструмента) <CustomTag type="version" version="1.20.5" />

Информация: Здесь вы можете выбрать правила инструментов.

#### Enable

* Информация: Булево значение для выбора, включены ли Tool Rules или нет.
* Пример:

```yaml
toolRules:
  enable: true
```

#### Скорость добычи по умолчанию

* Информация: Значение типа float для установки скорости добычи ExecutableItem по умолчанию.
* Пример:

```yaml
toolRules:
  enable: true
  defaultMiningSpeed: 1.0
```

#### Урон за сломанный блок

* Информация: Целое значение для установки значения прочности, которое будет снято после того, как ExecutableItem сломает блок. 
* Пример:

```yaml
toolRules:
  enable: false
  damagePerBlock: 1
```

#### Специфические правила инструмента

* Информация: Вы можете выбрать скорость добычи, возможность выпадения для определённых блоков с ExecutableItem, в порядке настройки инструмента.
  * `miningSpeed`: Значение типа float для установки скорости добычи ExecutableItem для выбранных блоков в правиле инструмента.
  * `correctForDrops`: Булево значение, которое показывает, выпадет ли блок или нет при использовании ExecutableItems.
  * `blocks`: Список БЛОКОВ, к которым применяются правила инструмента.
* Пример:

```yaml
toolRules:
  toolRule0: #ID Of this tool rule, you can add as many as you want
    miningSpeed: 1.0
    correctForDrops: true
    blocks:
    - STONE
  enable: true
```

### chargedProjectiles

* Информация: Функция, позволяющая иметь уже заряженные снаряды, когда ExecutableItem является предметом арбалета и выдаётся игроку.
  * Формат материала должен быть как `minecraft:<id>`. На данный момент поддерживает ванильные предметы.
* Пример:

```yaml
material: CROSSBOW
chargedProjectiles:
- minecraft:arrow
```

### bundleContent

* Информация: Функция, позволяющая иметь уже имеющееся содержимое предметов, если ExecutableItems является предметом-набором (bundle) и выдаётся игроку.
  * Формат материала должен быть как `minecraft:<id>`. На данный момент поддерживает ванильные предметы.
* Пример:

```yaml
material: BUNDLE
bundleContent:
- minecraft:stone
- minecraft:dirt
```

### Функции фейерверка

* Информация: Функция, позволяющая иметь настроенные функции фейерверка, если ExecutableItems является предметом фейерверка.
* Пример:

```yaml
fireworkFeatures:
  lifeTime: 1
  fireworkExplosions:
    explosion_0:
      colors:
      - BLUE
      fadeColors:
      - RED
      type: BALL_LARGE
      hasTrail: true
      hasTwinkle: true
    explosion_1:
      colors:
      - GREEN
      fadeColors: []
      type: CREEPER
      hasTrail: true
      hasTwinkle: true
```

Для цветов вы можете использовать либо обычные [Названия цветов](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html), либо `RGB-<0-255>-<0-255>-<0-255>`

### Функции спавнера <CustomTag type="version" version="1.20.5" />

* Информация: Функция, позволяющая создать кастомный спавнер с ExecutableItems
* Настройки:
  * `spawnCount`: Определяет, сколько сущностей появляется при каждом спавне
  * `spawnDelay`: Определяет задержку первого спавна после размещения спавнера (в тиках, 20 тиков = 1 секунда)
  * `spawnRange`: Диапазон спавна
  * `requiredPlayerRange`: Определяет, на каком максимальном расстоянии должен находиться игрок, чтобы активировать спавнер
  * `minSpawnDelay`: Минимальная задержка между каждым спавном (в тиках, 20 тиков = 1 секунда)
  * `minSpawnDelay`: Максимальная задержка между каждым спавном (в тиках, 20 тиков = 1 секунда)
  * `maxNearbyEntities`: Максимальное количество сущностей вокруг спавнера
  * `addSpawnerNbtToItem`: Добавляет ли теги компонентов спавнера в предмет или нет (лучше оставить false) Когда false, плагин добавит теги только при размещении спавнера.
  * `potentialSpawns`: Определяет potentialSpawns вашего спавнера с весом

:::tip
Лучше сначала создать ваш спавнер в [MCStaker](https://mcstacker.net/?cmd=give), затем выдать его себе в игре и, наконец, держать его в руке + выполнить /ei create.\
Это автоматически импортирует функции спавнера в ваш ExecutableItems.
:::

* Пример:

```yaml
spawnerFeatures:
  spawnCount: 4
  spawnDelay: 20
  spawnRange: 4
  requiredPlayerRange: 16
  minSpawnDelay: 200
  maxSpawnDelay: 800
  maxNearbyEntities: 6
  potentialSpawns:
  # {THE ENTITY};the weight for this SpawnerEntry, when added to a spawner entries with higher weight will spawn more often.
  - '{BlockState:{Name:"minecraft:diorite"},id:"minecraft:falling_block"};1' 
  - '{id:"minecraft:chicken"};1' 
  addSpawnerNbtToItem: false
```

### Функции Instrument <CustomTag type="version" version="1.20.5" />

* Информация: Функция, позволяющая настроить звук козьего рога для предметов. Эта функция работает только для предметов материала GOAT_HORN.
  * `enable`: Булево значение, которое включает или отключает функции instrument
  * `instrument`: Звук музыкального инструмента, который будет воспроизведён при использовании козьего рога. [Музыкальные инструменты](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/MusicInstrument.html)
* Пример:

```yaml
material: GOAT_HORN
instrumentFeatures:
  enable: true
  instrument: DREAM_GOAT_HORN
```

### Функции Weapon <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Информация: Функция, позволяющая настроить боевые параметры оружия для предметов.
  * `enable`: Булево значение, которое включает или отключает функции weapon
  * `disableBlockingTime`: Целое значение, представляющее, как долго (в секундах) щит цели будет отключён после удара этим оружием
  * `damagePerAttack`: Целое значение, представляющее урон прочности, который получает это оружие за каждую атаку (по умолчанию: 5)
* Пример:

```yaml
weaponFeatures:
  enable: true
  disableBlockingTime: 3
  damagePerAttack: 2
```


### Функции блокирования атак <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Информация: Функция, позволяющая настроить, как предметы блокируют атаки, подобно щитам. Это позволяет сделать любой предмет способным блокировать урон.
  * `enable`: Булево значение, которое включает или отключает функции блокирования атак
  * `blockDelay`: Целое значение, представляющее задержку в секундах перед тем, как предмет снова сможет блокировать после использования
  * `blockSound`: Звук, который проигрывается при успешном блокировании атаки
  * `disableSound`: Звук, который проигрывается, когда блокирование отключено (после того, как оно было подавлено)
  * `disableCooldownScale`: Значение типа double (множитель) для того, насколько долго длится отключение блока после подавления (по умолчанию: 1.0)
  * `damageReductions`: Список конфигураций снижения урона, которые определяют, насколько снижается урон для каждого типа урона
  * `bypassedBy`: Тип урона, который полностью обходит это блокирование
* Пример:

```yaml
blockAttacksFeatures:
  enable: true
  blockDelay: 1
  blockSound: ITEM_SHIELD_BLOCK
  disableSound: ITEM_SHIELD_BREAK
  disableCooldownScale: 1.5
  damageReductions:
    reduction_0:
      baseDamageBlocked: 2.0
      factorDamageBlocked: 0.5
      horizontalBlockingAngle: 90.0
      damageTypes:
      - ARROW
      - MOB_ATTACK
    reduction_1:
      baseDamageBlocked: 1.0
      factorDamageBlocked: 0.25
      horizontalBlockingAngle: 180.0
      damageTypes:
      - EXPLOSION
  bypassedBy: VOID
```

#### Конфигурация снижения урона

Каждая запись снижения урона имеет следующие настройки:
* `baseDamageBlocked`: Базовое количество заблокированного урона (плоское снижение)
* `factorDamageBlocked`: Процент заблокированного урона (0.5 = снижение на 50%)
* `horizontalBlockingAngle`: Угол в градусах, с которого можно блокировать атаки (90 = передняя четверть, 180 = передняя половина, 360 = все направления). Должен быть больше 0.
* `damageTypes`: Список типов урона, к которым применяется это снижение. См. [Типы урона](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html) для доступных типов.

:::tip
Вы можете создавать кастомные "щиты" с разными материалами, используя эту функцию. Например, вы можете сделать книгу, которая блокирует магический урон, или алмаз, который блокирует физические атаки!
:::
