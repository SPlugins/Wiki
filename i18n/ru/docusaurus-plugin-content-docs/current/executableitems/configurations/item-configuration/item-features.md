---
description: >-
  Полный список функций предметов в ExecutableItems: материал, название, лор,
  прочность, атрибуты, зачарования, переменные и другие настройки.
source_hash: a5cf341732f09f83
translated_at: '2026-11-13T18:15:16.132Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Функции предметов

Список функций предметов. Это первое, что нужно настроить на вашем предмете.

Премиум-функции отмечены тегом: <CustomTag type="premium" />

### Активаторы

* Очень важные функции, которые позволяют добавлять способности вашему предмету
* Отдельная вики для этой функции: [Список активаторов EI](../activator-configuration/list-of-the-activators.md) и [Функции активаторов EI](/executableitems/configurations/activator-configuration/activators-features.md)


### Материал предмета

* Информация: материал предмета Minecraft для ExecutableItem
* Пример: если вы хотите, чтобы базовым предметом ExecutableItem был DIAMOND, конфигурация будет такой:

```yaml
material: DIAMOND
```

* Информацию о списке материалов можно найти по этой ссылке: [Список материалов](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
* Если вы хотите задать в качестве материала предмета кастомную голову, перейдите по этой ссылке: [Настройки головы](/executableitems/configurations/item-configuration/item-features#head-settings).

### Название или DisplayName предмета

* Информация: отображаемое название предмета. Это видимое имя.
* Пример: если вы хотите, чтобы у предмета было красное название «Epic Sword», конфигурация будет такой:

```yaml
name: '&cEpic Sword'
```

* Если вы хотите использовать в отображаемом названии HEX-цвета, сделайте следующее:
  * Перейдите на сайт, который поможет выбрать нужный цвет и получить его hex-код. Мы рекомендуем [https://htmlcolorcodes.com/](https://htmlcolorcodes.com/)
  * Затем выберите нужный цвет и запишите или скопируйте его hex-код. [Источник](https://imgur.com/a/tNWtA0a)
  * К этому hex-коду нужно добавить в начале "#", и это будет стоять перед текстом, который вы хотите покрасить. #\<HEX\_COLOR\_CODE>\<What you want to color>
  * В итоге у вас получится что-то вроде **`#DB6725&lPractice`**, и текст будет выглядеть выбранным цветом [в игре](https://imgur.com/a/7umxduF).

### Лор или описание предмета

* Информация: лор или описание предмета
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

* В лоре можно использовать плейсхолдеры. Учтите: если вы используете плейсхолдеры вне плагина, а затем добавляете в лор новое содержимое, например кастомные зачарования или кастомный текст, то при обновлении любого из плейсхолдеров всё, что было добавлено вне плагинов Ssomar, будет удалено. Чтобы этого избежать, лор не должен обновляться, но тогда плейсхолдеры не будут обновляться. Нужно выбрать, что для вас важнее. Итог: ДОПОЛНИТЕЛЬНЫЕ ЭЛЕМЕНТЫ В ЛОРЕ означают ОТСУТСТВИЕ ОБНОВЛЕНИЯ, а значит, никаких кастомных плейсхолдеров EI в лоре, пожалуйста.

:::info
Чтобы оставить пустую строку между строками лора, добавьте '' в файле конфигурации. Если вы редактируете лор внутри Minecraft через кастомный GUI, то нужно использовать '\&f'.
:::

:::info
В бесплатной версии ExecutableItems есть строка "Made with ExecutableItems": её нельзя убрать, это условие за увеличение лимита предметов с 25 до 500.
:::

### Эффект свечения (светящиеся зачарования)

* Информация: булево значение, определяющее, будет ли у executable item эффект свечения или зачарования.
* Пример: 

```yaml
glow: true
```

### Отключение свечения зачарований <CustomTag type="version" version="1.20.5" />

* Информация: булево значение, которое принудительно отключает эффект свечения у предмета, даже если он зачарован. 
* Пример: 

```yaml
disableEnchantGlow : true
```

:::info
СОВЕТ: вы также можете убрать эффект свечения у некоторых ванильных предметов, например у звезды Нижнего мира.
:::

### Отображение условий в лоре предмета

* Информация: позволяет отображать условия в лоре предмета.
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

* Информация: задаёт значение прочности предмета.
  * Для версий 1.20.5 и ниже значение прочности должно быть равно максимальной ванильной прочности выбранного предмета или меньше неё.
  * Пример: 
```yaml
durability: 150
```
  * Для версий 1.20.5++ параметр прочности можно настраивать, что открывает новые возможности, например синхронизацию использования ExecutableItem со значением прочности. Также можно задать кастомную максимальную прочность.
  * Пример:
```yaml
isDurabilityBasedOnUsage: true
maxDurability: 20 
durability: 19
```

### Зачарования предмета

* Информация: задаёт начальные зачарования, которые будут у executable item при выдаче.
* Пример:

```yaml
enchantments:
  enchantment1: #ID Of this enchantment, you can add as many as you want
    enchantment: sharpness
    level: 1
```

### Unbreakable

* Информация: булево значение, определяющее, будет ли executable item неразрушимым.
* Пример: 

```yaml
unbreakable: true
```

### Атрибуты <CustomTag type="version" version="1.12" />

* Информация: вы можете выбрать атрибуты для ExecutableItem.
  * `attribute`: тип атрибута. Список здесь: [Список атрибутов](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/attribute/Attribute.html)
  * `uuid`: код, который Minecraft требуется для назначения модификаторов атрибутов. Его можно игнорировать.
  * `name`: отображаемое название модификатора атрибута. Удобно, чтобы описать, что он делает. Он влияет только на отображение в GUI.
  * `operation`: тип операции, которую выполнит AttributeModifier. Список здесь: [Операции](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html)
  * `amount`: значение для AttributeModifier, которое будет применено к атрибуту с помощью выбранной операции.
  * `slot`: слот, в котором будет работать AttributeModifier.
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

* Для этого процесса требуется премиум-версия EI <CustomTag type="premium" />
* Создайте предмет с атрибутами на сайте. Мы рекомендуем [https://mapmaking.fr/give1.12/](https://mapmaking.fr/give1.12/)
* Затем выдайте предмет себе внутри Minecraft
* Держа его в руке, выполните команду /ei create \<id>
* Готово! Теперь атрибуты автоматически импортированы в ваш EI.
:::

#### **Сохранение атрибутов по умолчанию**

* Информация: булево значение, определяющее, сохранять ли атрибуты предмета по умолчанию.
* Пример:

```yaml
keepDefaultAttributes: true
ignoreKeepDefaultAttributesFeature: false
```

:::warning
В версиях 1.21+ предмет без собственных атрибутов, у которого нет этих двух строк, **теряет атрибуты по умолчанию своего материала**: меч бьёт как кулак, а часть брони не даёт защиты. ExecutableItems выводит такие предметы в консоль после каждой загрузки. Чтобы исправить все ваши предметы сразу: `/ei util-set-keepdefaultattributes-all-ei true`.
:::

:::info Кузнечный стол
С `keepDefaultAttributes: true` предмет, улучшенный на кузнечном столе (алмаз до незерита), получает атрибуты по умолчанию нового материала (броня, прочность и сопротивление отбрасыванию незерита). Собственные атрибуты предмета сохраняются.
:::

* По этой ссылке есть руководство по атрибутам и их функциям.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HqyF0QBYIY4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


#### **ignoreKeepDefaultAttributesFeature:** 

* Информация: игнорирует настройку сохранения атрибутов по умолчанию. Полезно для третьего случая в пояснении к этой таблице:
* Пример:

```yaml
ignoreKeepDefaultAttributesFeature: true
```

### Custom model data <CustomTag type="version" version="1.14" />

* Информация: 
  * Для версий Minecraft до 1.21.4: целое число, задающее значение функции customModelData предмета. Полезно для создания разных текстур одного предмета.
  * Начиная с версии Minecraft 1.21.4 можно также добавлять текст и булевы значения.
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

* Руководство: [https:/.ssomar.com/executableitems/questions-or-guides/premium-custom-textures](https:/.ssomar.com/executableitems/questions-or-guides/premium-custom-textures)

### Функции Item Rarity <CustomTag type="version" version="1.20.5" />

* Информация: редкость (rarity) это ванильный параметр предметов и блоков, который показывает их ценность и сложность получения. На геймплей он никак не влияет. Существует четыре уровня редкости: Common, Uncommon, Rare и Epic.
  * `enableRarity`: булево значение, определяющее, включена ли функция
  * `rarity`: тип редкости
* Пример:

```yaml
itemRarity:
  enableRarity: false
  rarity: COMMON
```

### Функции Equippable <CustomTag type="version" version="1.21.2" />

* Информация: этот раздел настраивает поведение экипируемого предмета. Когда он включён, предмет можно надеть в назначенный слот, при желании с воспроизведением звукового эффекта. Также можно указать кастомную модель для надетого предмета, определить, получает ли он урон, когда владелец ранен, и задать флаги, разрешающие или запрещающие обмен и выбрасывание. Кроме того, можно ограничить, каким сущностям разрешено надевать предмет.
  * `enable`: установите true, чтобы включить экипировку для этого предмета
  * `slot`: слот экипировки (например, CHEST, HEAD, LEGS, FEET), в который надевается предмет
  * `enableSound`: булево значение, определяющее, воспроизводить ли звук при надевании предмета
  * `sound`: звуковой эффект, который воспроизводится при надевании
  * `equipModel`: (необязательно) кастомная модель для надетого предмета (например, "mynamespace:mymodel")
  * `cameraOverlay`: (необязательно) кастомное наложение на экран при надетом предмете
  * `damageableOnHurt`: булево значение, определяющее, теряет ли предмет прочность, когда владелец ранен
  * `dispensable`: булево значение, определяющее, можно ли избавиться от предмета (снять или выбросить)
  * `swappable`: булево значение, определяющее, можно ли надеть предмет правым кликом (он меняется местами с предметом, надетым в этом слоте)
  * `allowedEntities`: список сущностей, которым разрешено надевать этот предмет
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

* Информация: функции, связанные с ремонтом ExecutableItem.
  * `enable`: булево значение, определяющее, включена ли функция
  * `repairCost`: целое число, обозначающее стоимость ремонта на наковальне
* Пример:

```yaml
repairableFeatures:
    enable: false
    repairCost: 2 
```

### Glider <CustomTag type="version" version="1.21.2" />

* Информация: функция, позволяющая планировать с предметом, как с ванильным предметом «элитры».
* Пример:

```yaml
glider: false
```

### itemModel <CustomTag type="version" version="1.21.2" />

* Информация: путь к кастомной модели предмета в текстурпаке в формате \<mynamespace\:model\_id>, который указывает на assets/\<mynamespace>/models/item/\<model\_id>.
* Пример:

```yaml
itemModel: "" # "mynamespace:mymodel"
```

### tooltipModel <CustomTag type="premium" /> <CustomTag type="version" version="1.21.2" />

* Информация: путь к кастомной модели подсказки в текстурпаке в формате \<mynamespace\:model\_id>, который указывает на /assets/\<mynamespace>/textures/gui/sprites/tooltip/\<id>\_frame
* Пример:

```yaml
tootipModel: "" # "mynamespace:mymodel"
```

### Функции, связанные с выброшенным предметом

Здесь вы узнаете о функциях, которые видны только тогда, когда предмет лежит на земле.

#### Свечение при выбрасывании

* Информация: когда предмет выброшен, у него появляется эффект свечения
* Пример: 

```yaml
dropFeatures:
  glowDrop: false
```

#### Цвет свечения при выбрасывании

* Информация: если у предмета включён glowEffect, можно выбрать цвет свечения при выбрасывании.
* Возможные цвета: [Справочник цветов](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)
* Пример:

```yaml
dropFeatures:
  glowDrop: false
  glowDropColor: WHITE
```

#### Отображаемое название выброшенного предмета

* Информация: определяет, будет ли предмет показывать отображаемое название в виде плавающего текста, когда он выброшен.
* Пример: 

```yaml
dropFeatures:
  displayNameDrop: true
```

###  NBT Tags

* Информация: требуется плагин [**NBTAPI**](https://www.spigotmc.org/resources/nbt-api.7939/), доступный на Spigot.
Эта функция позволяет добавлять собственные nbt-теги внутрь вашего ExecutableItem.
  * `type`: тип значения, которое вы сохраняете, например:
    * BOOLEAN: true | false
    * STRING: car
    * INTEGER: 6
    * DOUBLE: 17.6
    * COMPOUND: пример ниже, зависит от ваших нужд и от того, что вы хотите добавить.
  * `key`: строковый ключ, представляющий это хранилище nbt
  * `value`: значение NBT Tag, которое вы добавляете
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

### Bukkit tags

* Информация: вы можете добавлять значения bukkit-тегов в ваш ExecutableItem.
* Пример:

```yaml
tags:
 - mytag:blabla1
 - myothertag:blabla2
```

В игре это будет отображаться в PublicBukkitValues, вот так:

```yaml
"executableitems:mytag":"blabla1"
"executableitems:myothertag":"blabla2"
```

Вы также можете писать плейсхолдеры %rand% в поле значения NBT. Работает только для типов данных STRING, INTEGER и DOUBLE.
```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: '%rand:-100|100%'
```
Также работает во внутриигровом редакторе.
```
INTEGER::foo::%rand:1|2%
```  
  
При желании вы также можете сохранять nbt в PDC (Persistent Data Container).
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

* Информация: настройки, связанные со скрытием функций, которые обычно отображаются на вашем ExecutableItem. Все функции продолжают работать, даже если они скрыты.
  * `hideEnchantments`: булево значение, определяющее, будут ли зачарования ExecutableItem отображаться в лоре.
  * `hideUnbreakable`: булево значение, определяющее, будет ли описание неразрушимости отображаться в лоре.
  * `hideAttributes`: булево значение, определяющее, будут ли атрибуты ExecutableItem отображаться в лоре.
  * `hidePotionEffects`: булево значение, определяющее, будут ли эффекты зелий ExecutableItem отображаться в лоре. В версиях 1.20.5 и выше используйте hideAdditionalTooltip.
  *   hideAdditionalTooltip (доступно только в 1.20.5++) 

      Настройка для показа или скрытия эффектов зелий, информации о книгах и фейерверках, подсказок карт, узоров знамён и зачарований зачарованных книг. Заменяет прежний hidePotionEffects
  * `hideUsage`: булево значение, определяющее, будет ли кастомная функция Usage плагина ExecutableItem самого предмета отображаться в лоре.
    * Вы можете вручную отобразить usage с помощью плейсхолдера %usage%, добавив его при редактировании лора.
  * `hideDye`: булево значение, определяющее, будет ли цвет красителя (#\<color>) ExecutableItem отображаться в лоре.
  * `hideArmorTrim`: булево значение, определяющее, будет ли отделка брони ExecutableItem отображаться в лоре.
  * `hidePlacedOn`: булево значение, определяющее, будет ли NBT-тег "Can be placed on: \[...]" ExecutableItem отображаться в лоре.
  * `hideDestroys`: булево значение, определяющее, будет ли NBT-тег "Can destroy: \[...]" ExecutableItem отображаться в лоре.
  * `hideToolTip`: булево значение, определяющее, скрыта ли подсказка. (Доступно только в 1.20.5++)
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

В этом разделе объясняется, что такое usage и каковы его функции.

#### Usage

* Информация: usage это целое число, хранящееся внутри вашего ExecutableItem, его можно изменять через usageModification внутри активатора или командами. Но это не просто хранимое значение: оно создано, чтобы представлять «кастомную систему прочности» вашего ExecutableItem, то есть если usage каким-либо образом достигает 0, ваш предмет удаляется.
* Пример: 
  * Usage, равный 1, не означает, что у предмета прочность 1: как мы объяснили выше, это кастомная система прочности. Предмет будет существовать, пока usage не достигнет 0. Например, если вы добавите предмету активатор с функцией usageModification со значением "-1", то после одного срабатывания активатора ваш предмет исчезнет.
  * Продолжая ту же мысль: если у нас usage 1 и нет активаторов, которые изменяют usage предмета, наш предмет будет жить бесконечно, пока, опять же, какая-либо команда или новый активатор, добавленный предмету, не изменит usage до значения 0 или меньше, и тогда предмет будет удалён.
    * ```yaml
      usage: 1
      ```
  * Как мы уже сказали, не думайте об usage только как о системе прочности, ведь оно может и расти! Например, если у нас есть активатор, у которого в usageModification не отрицательное, а положительное значение, то наш usage будет увеличиваться при каждом срабатывании активатора ^^
  * Теперь, если вы хотите, чтобы значение предмета не увеличивалось и не уменьшалось, то есть вообще не использовать это кастомное хранилище значения, можно установить usage равным -1.
    * ```yaml
      usage: -1
      ```

#### Usage limit <CustomTag type="premium" />

* Информация: целое число, ограничивающее максимальное значение, которого может достичь usage. (Значение не может быть 0)
* Пример: 

```yaml
usageLimit: 600 #Usage will not be able to go up more than this value, -1 to don't take it into account
```

#### Использований в день

* Информация: целое число, ограничивающее, сколько раз в день можно использовать предмет в реальной жизни
* Пример: 

```yaml
usePerDay: 200 # -1 to ignore it
```

### Функции Food <CustomTag type="version" version="1.20.5" />

* Информация: эта функция позволяет настраивать параметры еды, связанные с вашим ExecutableItem
  * `nutrition`: целое число, обозначающее количество «половинок еды», которое восстановится у игрока после того, как предмет будет съеден
    * Для лучшего понимания: у игрока максимум 20 единиц насыщения по голоду, и в игре это отображается как 10 значков голода, каждый из которых делится на 2.
  * `saturation`: целое число, обозначающее насыщение, которое получит игрок после того, как предмет будет съеден.
  * `isMeat`: булево значение, которое заставит предмет считаться едой. Оно применяется принудительно: если вы установите true, любой предмет, даже тот, который нельзя съесть, будет считаться едой и, следовательно, станет съедобным.
  * `canAlwaysEat`: булево значение, определяющее, можно ли всегда есть предмет, даже когда полоска голода игрока полностью заполнена.
*  Пример:

```yaml
foodFeatures:
  nutrition: 1
  saturation: 1
  isMeat: false
  canAlwaysEat: true
```

### Функции Consumable <CustomTag type="version" version="1.21.4" />

* Информация: функции, связанные с поедаемыми предметами. Позволяют настраивать параметры consumable, близкие к функции food.
  * `enable`: булево значение, включающее или отключающее функции consumable
  * `animation`: ANIMATION\_TYPE, который будет воспроизводиться при поедании или использовании ExecutableItem
  * `sound`: SOUND, который будет воспроизводиться, когда предмет съедается или используется
  * `hasConsumeParticles`: булево значение, определяющее, будет ли предмет создавать частицы при поедании
  * `consumeSeconds`: количество секунд, в течение которых предмет съедается или используется.
* Пример:

```yaml
consumableFeatures:
  enable: true
  animation: SPYGLASS
  sound: ITEM.ARMOR.EQUIP_DIAMOND
  hasConsumeParticles: false
  consumeSeconds: 3
```

### Настройки зелий

Здесь вы можете настроить функции зелья вашего ExecutableItem, если материалом предмета является зелье.

#### Цвет зелья

* Информация: целое число цвета MapInfo, представляющее цвет. Используйте страницу вроде [https://www.tydac.ch/color/](https://www.tydac.ch/color/), чтобы получить значение MapInfo для цвета.
* Пример:

```yaml
potionFeatures:
  potionColor: 10265481
```

#### Тип зелья

* Информация: тип зелья (Potion Type), которым вы хотите сделать предмет-зелье. Это только визуальная функция, она не влияет на реальное поведение зелья. Список доступен здесь: [Типы зелий](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionType.html)
* Пример:

```yaml
potionFeatures:
  potionType: WIND_CHARGED
```

#### Эффекты зелья

* Информация: здесь вы можете создать эффекты зелья, которые будут у вашего предмета
  * `potionEffectType`: выбранный PotionEffectType, список доступен здесь: [Эффекты зелий](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
  * `isAmbient: булево значение, которое делает зелье ambient, то есть эффект зелья создаёт больше полупрозрачных частиц.
  * `duration`: целое число тиков (20 тиков = 1 секунда), обозначающее длительность эффекта зелья.
  * `amplifier`: целое число, обозначающее уровень или силу эффекта зелья. Amplifier 0 означает уровень 1, amplifier 1 означает уровень 2 и так далее.
  * `hasParticles`: булево значение, включающее или отключающее показ частиц эффекта вокруг игрока.
  * `hasIcon`: булево значение, включающее или отключающее показ значка эффекта в правом верхнем углу экрана игрока.
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

### Цвет брони

* Информация: если ваш ExecutableItem является кожаной бронёй, то здесь вы можете выбрать значение цвета MapInfo, которое можно получить на этом сайте [https://www.tydac.ch/color/](https://www.tydac.ch/color/), чтобы изменить цвет.
  * <CustomTag type="version" version="1.21.3" /> На Paper `armorColor` также доступен для остальных частей брони (шлем, нагрудник, поножи, ботинки из любого материала, броня лошади и волка) и для элитр. Он задаёт их ванильный компонент `dyed_color`, который кастомные модели (Nexo, ItemsAdder...) используют для окраски: без него такая модель может быть невидимой. `/ei create` сохраняет этот цвет у предмета в вашей руке.
* Пример:

```yaml
armorColor: 7702341
```

### Настройки головы

Здесь вы можете задать конфигурацию головы, то есть кастомную голову по значению головы игрока или из базы данных.

#### Если у вас нет плагина с базой данных голов <CustomTag type="version" version="1.13" />

* Если вы хотите добавить кастомную голову для 1.13++ без плагина с базой данных, выполните следующие шаги:
  * Установите материал ExecutableItem как PLAYER\_HEAD
  * Откройте страницу с кастомными головами, например эту: [https://minecraft-heads.com/custom-heads](https://minecraft-heads.com/custom-heads)
  *   Затем получите Value головы\

      
  * Теперь скопируйте это значение и вставьте его в функцию headValue в ExecutableItems
  * Пример:
  * ```yaml
    headValue: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTk4ZGY0MmY0NzdmMjEzZmY1ZTlkN2ZhNWE0Y2M0YTY5ZjIwZDljZWYyYjkwYzRhZTRmMjliZDE3Mjg3YjUifX19
    ```

#### Если у вас есть плагин Head Database <CustomTag type="version" version="1.12" />

* Если вы хотите добавить кастомную голову для 1.12++ и у вас есть плагин с базой данных голов, выполните следующие шаги:
  * Откройте GUI вашего плагина и получите ID нужной головы
  * Затем вставьте его в функции головы в headDBID
  * Пример:
  * ```yaml
    headDBID: 44328
    ```
* Вот ссылки на случай, если плагина у вас нет и он вам нужен.
  * Премиум-версия: [Head Database](https://www.spigotmc.org/resources/head-database.14280/)
  * Бесплатная версия: [Head DB](https://www.spigotmc.org/resources/headdb-head-menu-auto-update-free.84967/)

### whitelistedWorlds

* Информация: список строк с названиями миров, в которых вы хотите запретить или разрешить игрокам использовать ExecutableItem.
* Пример:

```yaml
whitelistedWorlds:
- ZombieSurvivalWorld_the_end # This allows the use of the EI in that world
- '!ApocalypseWorld' # Using ! Disables the use of the EI in that world
```

### Store item info

* Информация: булево значение, определяющее, сохраняется ли информация в самом предмете. Сейчас сохраняется функция "owner". Поэтому, если вы хотите использовать плейсхолдер %owner% или условия, связанные с владельцем, эта функция должна быть включена.
* Пример:

```yaml
storeItemInfo: false
```

### Функции владельца

#### canBeUsedOnlyByTheOwner

* Информация: булево значение, определяющее, может ли предмет использоваться только владельцем.
  * Работает только если включена функция store item info, чтобы у предмета был владелец.
* Пример: 

```yaml
canBeUsedOnlyByTheOwner: false
```

#### cancelEventIfNotOwner

* Информация: булево значение, определяющее, отменяются ли все события, если предмет использует не владелец. Это значит, что если активатор, например, PLAYER\_BREAK\_BLOCK, и кто-то, кто не является владельцем, попытается использовать этот предмет, он не сможет сломать ни один блок, так как все события будут отменены.
  * Работает только если включена функция store item info, чтобы у предмета был владелец.
* Пример: 

```yaml
cancelEventIfNotOwner: false
```

#### onlyOwnerBlackListedActivators

* Информация: список ID активаторов вашего ExecutableItem. Это чёрный список, который отключает действие canBeUsedOnlyByTheOwner: все указанные здесь ID активаторов ExecutableItem смогут использоваться всеми, даже если canBeUsedOnlyByTheOwner имеет значение true.
  * Работает только если включена функция store item info, чтобы у предмета был владелец.
* Пример: 

```yaml
onlyOwnerBlackListedActivators:
- activator0
- activator1
```

### cancelEventIfNoPermission

* Информация: булево значение, определяющее, отменяются ли все события, если у игрока нет права (ei.item.\<id>) на использование предмета. Это значит, что если активатор, например, PLAYER\_BREAK\_BLOCK, и у кого-то нет права использовать этот предмет, он не сможет сломать ни один блок, так как все события будут отменены.

```yaml
cancelEventIfNoPermission: true
```

### Сохранение предмета после смерти

* Информация: булево значение, определяющее, сохранит ли игрок предмет после смерти.
* Пример: 

```yaml
keepItemOnDeath: true
```

:::info
Совместимо с функцией keepInventory в WorldGuard и с ванильным игровым правилом keepInventory
:::

### Disable stack <CustomTag type="premium" />

* Информация: булево значение, определяющее, запрещено ли стакать ExecutableItem. Если установить true, customStackSize этого предмета станет равным 1.
* Пример: 

```yaml
disableStack: true
```

### customStackSize <CustomTag type="premium" /> <CustomTag type="version" version="1.20.5" />

* Информация: целое число, задающее размер стака этого предмета. Оно переопределит текущий размер стака.
* Чтобы лучше понять: у ванильного diamond\_sword размер стака 1, так как его нельзя стакать, и с помощью этой функции вы можете увеличить это значение. С другой стороны, у земли размер стака 64, но с её помощью его можно уменьшить, например, до 20.
* Пример: 

```yaml
customStackSize: 32
```

### Настройки переменных

* Информация: переменные это способ хранить информацию внутри вашего ExecutableItem. Они позволяют отслеживать количество, хранить позиции, а по сути хранить всё, что угодно. Они помогают создавать динамичное и настраиваемое поведение предметов: переменные позволяют задавать уникальное поведение каждому предмету, храня и отслеживая данные, относящиеся именно к нему. Например, вы можете отслеживать, сколько раз игрок использовал конкретный предмет или скольких игроков он убил с его помощью.
  * `variableName`: название переменной, которое будет использоваться как ссылка через %var\_\<name>% для применения в лоре, внутри команд и т. д. Это название не может быть "id" или "usage" и не может содержать пробелы.
  * `type`: VariableType переменной, возможны следующие типы с примерами использования:
    * STRING: с этим типом переменной можно хранить значения STRING, такие как слова, числа, буквы, символы и т. д. Например, можно хранить имя последнего игрока, которого вы ударили. Этот тип переменной не поддерживает `variableModification(type:MODIFICATION)` для увеличения или уменьшения значения. Она статична, пока её не заменит `variableModification(type:SET)`, который перезапишет старое значение.
    * NUMBER: с этим типом переменной можно хранить значения FLOAT, то есть числа. Например, если вы хотите хранить количество сломанных блоков, количество убийств, отслеживать секунды до какого-либо события и т. д. Этот тип переменной поддерживает `variableModification(type:MODIFICATION)` и `variableModification(type:SET)`.
    * LIST: это переменная-список, которая хранит значения STRING. Полезна для хранения списка чего-либо, например, чтобы отслеживать кликнутые блоки и добавлять их в этот список или добавлять сюда убитых игроков и т. д.
  * `isRefreshableClean`: булево значение, включающее очистку при обновлении. Это позволяет добавлять кастомные строки лора, и они не будут удаляться при обновлении переменной. Рекомендуется установить true.
  * `refreshTagDoNotEdit`: автоматически создаётся плагином. Помогает функциям `isRefreshableClean` работать правильно. Поэтому просто не трогайте его.
  * `papiParser`: строковое значение, содержащее строку PlaceholderAPI, в которой находится значение переменной для разбора. Его цель: позволить вставлять значения переменных внутрь плейсхолдеров PlaceholderAPI и отображать результаты в лоре. 
    * Пример:
      * ID переменной: `level`
      * Строковое значение papiParser: `%math_<VAR>*<VAR>%`
        * Строка `<VAR>` представляет текущее значение переменной при разборе. Если вы хотите поместить значение в нескольких местах строки плейсхолдера PlaceholderAPI, просто напишите `<VAR>` в тех местах, где оно нужно.
      * Строка плейсхолдера для вставки в лор: `%var_level_papi%`
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
* Дополнительную информацию о других типах переменных можно найти на следующей странице:
  * [Переменные SCore](/tools-for-all-plugins-score/score-variables)

### Кастомные функции выдачи при первом входе

* Информация: здесь вы можете настроить функцию выдачи предмета, когда игрок впервые заходит на сервер.
  * giveFirstJoin: булево значение, определяющее, включена ли функция
  * giveFirstJoinAmount: целое число, обозначающее, сколько предметов этого ExecutableItem будет выдано игроку.
  * giveFirstJoinSlot: слот, в который ExecutableItem будет выдан игроку.
* Пример:

```yaml
giveFirstJoinFeatures:
  giveFirstJoin: false
  giveFirstJoinAmount: 1
  giveFirstJoinSlot: 0
```

### Функция Item Recognition <CustomTag type="premium" />

* Информация: эта функция позволяет сделать так, чтобы другие предметы, не являющиеся ExecutableItem, вели себя как редактируемый вами ExecutableItem. По сути, идея в работе с распознаванием (recognitions): это список типов распознавания, и если один из них совпадает между вашим ExecutableItem и другим предметом (даже если он не ExecutableItem), то функции ExecutableItem будут работать и на этом другом предмете. Это работает до тех пор, пока предмет распознаётся по требованиям распознавания.
  * Доступные варианты распознавания:
    * NAME: включает распознавание для всех предметов, у которых совпадает кастомное название с ExecutableItem
    * MATERIAL: включает распознавание для всех предметов, у которых совпадает материал с ExecutableItem
    * LORE: включает распознавание для всех предметов, у которых совпадает лор с ExecutableItem
* Например, если вы создадите ExecutableItem алмазную кирку с активатором PLAYER\_RIGHT\_CLICK и командой "SEND\_MESSAGE I am a pickaxe", то при каждом правом клике будет отправляться это сообщение в чат minecraft. Теперь, если вы включите item recognition, скажем, по материалу, то ВСЕ алмазные кирки на сервере будут запускать этот активатор, и сообщение будет отображаться.
* Пример: 

```yaml
recognitions:
- NAME
- MATERIAL  
- LORE 
```

* Примеры сценариев:
  * Если у предмета EI включено только распознавание `MATERIAL` и он является DIAMOND, все алмазы, существующие на сервере, будут вести себя как этот предмет EI
  * Если у предмета EI включено только распознавание `NAME` и он называется "\&dAngle", то при попытке использовать любой предмет с названием "\&dAngle" он будет вести себя как исходный предмет EI. НО если название было "\&eAngle" или другое, это не сработает.
  * Если у предмета EI включено только распознавание `LORE`, предмет будет вести себя как EI, только если у него ТОЧНО такие же цветовые коды в строках лора и точно такой же регистр букв и символов.
  * Если у предмета EI включены только распознавания `MATERIAL` и `NAME`, то у предметов должны быть ТОЧНО такие же НАЗВАНИЕ и МАТЕРИАЛ, как у предмета EI, чтобы предмет считался предметом EI.
* Имейте в виду: если у одного из ваших ExecutableItems включено распознавание по MATERIAL, не стоит использовать другие распознавания по MATERIAL для другого ExecutableItem с тем же MATERIAL. Причина в том, что если есть 2 ExecutableItems с включённым распознаванием по MATERIAL и оба являются DIAMOND\_BLOCK, то наивысший приоритет будет только у первого в алфавитном порядке, когда кто-то задействует DIAMOND\_BLOCK.

## Функции Use cooldown <CustomTag type="version" version="1.21.2" />

* Информация: функция, которая добавляет предмету кулдаун использования в ванильном стиле, как у жемчуга Края или плода хоруса.
  * `cooldownGroup`: строковое значение, определяющее группу кулдауна. Предметы с одной и той же группой кулдауна будут делить один кулдаун. Должно быть в нижнем регистре и соответствовать формату NamespacedKey (например, "mygroup" или "namespace:mygroup")
  * `vanillaUseCooldown`: целое число, обозначающее длительность кулдауна в секундах
* Пример:

```yaml
useCooldown:
  cooldownGroup: "custom_weapon_group"
  vanillaUseCooldown: 5
```

:::info
Этот кулдаун отличается от системы кулдауна активаторов. Это ванильный кулдаун Minecraft, при котором предмет в хотбаре отображается «серым» в течение периода кулдауна.
:::


## В зависимости от типа предмета

### Функции Container

* Информация: здесь вы можете настроить функции контейнера, если блок является контейнером, например сундуком или бочкой.
  * `isLocked`: булево значение, определяющее, заперт ли контейнер
  * `lockedName`: строковое значение, обозначающее название ключа, если контейнер заперт. Это функция minecraft: если у вас есть предмет с таким же названием, как lockedName, вы сможете открыть сундук, иначе нет.
  * `containerContent`: список материалов внутри контейнера при установке в формате slot:\<slot>;\<material>
* Пример:

```yaml
containerFeatures:
  isLocked: true
  lockedName: thisIsTheKey
  containerContent:
  - slot:0;minecraft:loom
```

### Tool Rules <CustomTag type="version" version="1.20.5" />

Информация: здесь вы можете настроить правила инструментов.

#### Enable

* Информация: булево значение, определяющее, включены ли Tool Rules.
* Пример:

```yaml
toolRules:
  enable: true
```

#### Default mining speed

* Информация: значение float, задающее скорость добычи ExecutableItem по умолчанию.
* Пример:

```yaml
toolRules:
  enable: true
  defaultMiningSpeed: 1.0
```

#### Damage per block break

* Информация: целое число, задающее значение прочности, которое будет списано после того, как ExecutableItem сломает блок. 
* Пример:

```yaml
toolRules:
  enable: false
  damagePerBlock: 1
```

#### Specific tool rules

* Информация: вы можете выбрать скорость добычи и выпадение для определённых блоков с ExecutableItem, чтобы настроить инструмент.
  * `miningSpeed`: значение float, задающее скорость добычи ExecutableItem для выбранных блоков в правиле инструмента.
  * `correctForDrops`: булево значение, определяющее, будет ли блок выпадать при использовании ExecutableItems.
  * `blocks`: список БЛОКОВ, к которым применяются правила инструмента.
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

* Информация: функция, позволяющая иметь уже заряженные снаряды, когда ExecutableItem является арбалетом и выдаётся игроку.
  * Формат материала должен быть таким: `minecraft:<id>`. Пока поддерживаются ванильные предметы.
* Пример:

```yaml
material: CROSSBOW
chargedProjectiles:
- minecraft:arrow
```

### bundleContent

* Информация: функция, позволяющая иметь уже заложенное содержимое, если ExecutableItems является набором (bundle) и выдаётся игроку.
  * Формат материала должен быть таким: `minecraft:<id>`. Пока поддерживаются ванильные предметы.
* Пример:

```yaml
material: BUNDLE
bundleContent:
- minecraft:stone
- minecraft:dirt
```

### Функции Firework

* Информация: функция, позволяющая настроить параметры фейерверка, если ExecutableItems является фейерверком.
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

Для цветов вы можете использовать как обычные [названия цветов](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html), так и `RGB-<0-255>-<0-255>-<0-255>`

### Функции Spawner <CustomTag type="version" version="1.20.5" />

* Информация: функция, позволяющая создавать кастомные спавнеры с помощью ExecutableItems
* Настройки:
  * `spawnCount`: определяет, сколько сущностей появляется при каждом спавне
  * `spawnDelay`: определяет задержку первого спавна после установки спавнера (в тиках, 20 тиков = 1 секунда)
  * `spawnRange`: радиус спавна
  * `requiredPlayerRange`: определяет, на каком максимальном расстоянии должен находиться игрок, чтобы активировать спавнер
  * `minSpawnDelay`: минимальная задержка между спавнами (в тиках, 20 тиков = 1 секунда)
  * `minSpawnDelay`: максимальная задержка между спавнами (в тиках, 20 тиков = 1 секунда)
  * `maxNearbyEntities`: максимальное количество сущностей вокруг спавнера
  * `addSpawnerNbtToItem`: определяет, добавляется ли тег компонентов спавнера в предмет (лучше оставить false). Когда значение false, плагин будет добавлять теги только при установке спавнера.
  * `potentialSpawns`: определяет potentialSpawns вашего спавнера с весом

:::tip
Лучше сначала создать спавнер в [MCStaker](https://mcstacker.net/?cmd=give), затем выдать его себе в игре и, наконец, взять в руку и выполнить /ei create.\
Функции спавнера будут автоматически импортированы в ваши ExecutableItems.
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

* Информация: функция, позволяющая настраивать звук козьего рога для предметов. Эта функция работает только для предметов с материалом GOAT_HORN.
  * `enable`: булево значение, включающее или отключающее функции instrument
  * `instrument`: звук музыкального инструмента, который будет воспроизводиться при использовании козьего рога. [Music Instruments](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/MusicInstrument.html)
* Пример:

```yaml
material: GOAT_HORN
instrumentFeatures:
  enable: true
  instrument: DREAM_GOAT_HORN
```

### Функции Weapon <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Информация: функция, позволяющая настраивать боевые параметры оружия для предметов.
  * `enable`: булево значение, включающее или отключающее функции weapon
  * `disableBlockingTime`: целое число, обозначающее, как долго (в секундах) щит цели будет отключён после удара этим оружием
  * `damagePerAttack`: целое число, обозначающее урон прочности, который оружие получает за одну атаку (по умолчанию: 5)
* Пример:

```yaml
weaponFeatures:
  enable: true
  disableBlockingTime: 3
  damagePerAttack: 2
```


### Функции Blocks attacks <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Информация: функция, позволяющая настраивать, как предметы блокируют атаки, подобно щитам. Это позволяет сделать любой предмет способным блокировать урон.
  * `enable`: булево значение, включающее или отключающее функции block attacks
  * `blockDelay`: целое число, обозначающее задержку в секундах, после которой предмет снова сможет блокировать после использования
  * `blockSound`: звук, который воспроизводится при успешной блокировке атаки
  * `disableSound`: звук, который воспроизводится, когда блокирование отключается (после того, как его пробили)
  * `disableCooldownScale`: значение double (множитель), определяющее, как долго длится отключение блока после того, как его пробили (по умолчанию: 1.0)
  * `damageReductions`: список конфигураций снижения урона, определяющих, насколько снижается урон для каждого типа урона
  * `bypassedBy`: тип урона, который полностью обходит этот блок
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
* `baseDamageBlocked`: базовое количество блокируемого урона (фиксированное снижение)
* `factorDamageBlocked`: процент блокируемого урона (0.5 = снижение на 50%)
* `horizontalBlockingAngle`: угол в градусах, с которого можно блокировать атаки (90 = передняя четверть, 180 = передняя половина, 360 = все направления). Должен быть больше 0.
* `damageTypes`: список типов урона, к которым применяется это снижение. Доступные типы см. в разделе [Damage Types](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html).

:::tip
С помощью этой функции вы можете создавать кастомные «щиты» из разных материалов. Например, можно сделать книгу, которая блокирует магический урон, или алмаз, который блокирует физические атаки!
:::
