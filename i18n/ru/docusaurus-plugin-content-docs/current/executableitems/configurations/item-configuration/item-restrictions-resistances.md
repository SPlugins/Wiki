---
description: >-
  Описание ограничений и сопротивлений предметов ExecutableItems в плагине
  SPlugins: настройка поведения предметов в разных ситуациях.
source_hash: 6712e593bf883efe
translated_at: '2026-10-03T10:32:15.319Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Item Restrictions/Resistances

На этой странице вы узнаете об ограничениях предметов и некоторых сопротивлениях, это позволит вам настроить поведение предмета в определенных случаях.

## Глобальные ограничения

* Информация: если вы хотите добавить одно из ограничений предметов ко всем предметам, созданным в плагине, вы можете добавить конфигурацию нужного(ых) ограничения(й) внутри файла config.yml плагина.
* Пример: я хочу добавить ограничения на использование наковальни и точильного камня ко всем ExecutableItems, созданным и будущим


```yaml
# ----------------------------------
# -
#       ExecutableItems
# -
#         By: Ssomar
# -
# ----------------------------------
# -
# WIKI HERE : https://splugins.net/docs/executableitems/information-ei
# DISCORD HERE : https://discord.com/invite/TRmSwJaYNv
# -

## Start of default config features
pickup-limit: -1
disable-world: [ ]
premium-enable-cooldown-for-op: true #Premium only
checkVersionMsg: true
disableTestItems: false # If you have a big server with a lot of players, it's recommended to turn this option on true
silentEIGive: false
silentMessagePreventionErrorHeadDBError: false
disableBackup: false #<- Backup your items config at each start / reload of the server
deleteBackupsAfterDays: 7 #<- It will deletes backups older than this number of days
## End of default config features
## 
## Start for manually added restrictions to apply on all ExecutableItems
restrictions:
  cancel-anvil: true
  cancel-grind-stone: true
## End for manually added restrictions to apply on all ExecutableItems
```


## Индивидуальные ограничения

В этом разделе вы узнаете, как добавить индивидуальное ограничение только для ExecutableItem, который вы сейчас редактируете.

### Отмена выбрасывания предмета

* Информация: булево значение, которое не позволяет игроку выбросить executable предмет.
* Примечание: когда предмет не может вернуться в инвентарь (например, он был на курсоре, когда инвентарь был закрыт, и все слоты заняты), выбрасывание разрешается вместо удаления предмета.
* Пример:

```yaml
restrictions:
  cancel-item-drop: true
```

### Отмена размещения блока на земле.

* Информация: булево значение, которое не позволяет игроку разместить Executable Items на земле, если предмет является экземпляром блока.
* Пример:

```yaml
restrictions:
  cancel-item-place: true
```

### Отмена использования предмета в любых рецептах на верстаке

* Информация: булево значение, которое не позволяет игроку крафтить ванильные рецепты с ExecutableItem.
* Пример:

```yaml
restrictions:
  cancel-item-craft: true
```

### Отмена использования предмета только в ванильных рецептах, не затрагивая кастомные

* Информация: булево значение, которое не позволяет игроку крафтить ванильные рецепты с Executableitem, но предмет все еще может использоваться для кастомных рецептов крафта.
* Пример:

```yaml
restrictions:
  cancel-item-craft-no-custom: true
```

### Отмена взаимодействия для украшения горшков Minecraft

* Информация: булево значение, которое не позволяет игроку помещать ExecutableItems в декорированные горшки
* Пример:

```yaml
restrictions:
  cancel-decorated-pot: true
```

### Отмена помещения предмета в хранилище

* Информация: булево значение, которое не позволяет игроку помещать ExecutableItem в следующий список:
  * Chest
  * Ender Chest
  * Trapped Chest
  * Barrel
  * Shulker Box
* Пример: (эта функция не работает в творческом режиме)

```yaml
restrictions:
  cancel-deposit-in-chest: true
```

### Отмена помещения предмета в печь

* Информация: булево значение, которое не позволяет игроку помещать ExecutableItem в следующий список:
  * Furnace
  * Blast Furnace
  * Smoker
* Пример: (эта функция не работает в творческом режиме)

```yaml
restrictions:
  cancel-deposit-in-furnace: true
```

### Отмена сгорания предмета в огне и лаве

* Информация: булево значение, которое не позволяет ExecutableItem сгореть в огне или лаве.
* Пример:

```yaml
restrictions:
  cancel-item-burn: true
```

### Отмена удаления предмета из-за взаимодействия с кактусом

* Информация: булево значение, которое не позволяет ExecutableItem удалиться при касании блока кактуса.
* Пример:

```yaml
restrictions:
  cancel-item-delete-by-cactus: true
```

### Отмена удаления предмета при ударе молнией

* Информация: булево значение, которое не позволяет ExecutableItem удалиться при ударе молнией.
* Конфиг: `cancel-item-delete-by-lightning: true`
* Пример:

```yaml
restrictions:
  cancel-item-delete-by-lightning: true
```

### Отмена зачарования предмета

* Информация: булево значение, которое не позволяет зачаровать предмет
* Пример:

```yaml
restrictions:
  cancel-enchant: true
```

### Отмена размещения предмета внутри наковальни

* Информация: булево значение, которое не позволяет игроку помещать ExecutableItem внутрь наковальни. Это также предотвращает его размещение, тем самым предотвращая переименование и зачарование.
* Пример:

```yaml
restrictions:
  cancel-anvil: true
```

### Отмена действия переименования с помощью наковальни

* Информация: булево значение, которое не позволяет игроку переименовать ExecutableItem с помощью наковальни.
* Пример:

```yaml
restrictions:
  cancel-rename-anvil: true
```

### Отмена действия зачарования с помощью наковальни

* Информация: булево значение, которое не позволяет игроку зачаровать ExecutableItem с помощью наковальни.
* Пример:

```yaml
restrictions:
  cancel-enchant-anvil: true
```

### Отмена взаимодействия предмета с лошадью/мулом/ламой

* Информация: булево значение, которое не позволяет ExecutableItems взаимодействовать с лошадьми/мулами/ламами. Это также отключает хранилище.
* Пример:

```yaml
restrictions:
  cancel-horse: true
```

### Отмена потребления/поедания предмета

* Информация: булево значение, которое не позволяет игроку употреблять или есть ExecutableItem.
* Пример:

```yaml
restrictions:
  cancel-consumption: true
```

### Отмена использования предмета внутри блока crafter

* Информация: булево значение, которое не позволяет игроку помещать ExecutableItems внутрь блока crafter.
* Конфиг: `cancel-crafter: false`

```yaml
restrictions:
  cancel-crafter: true
```

### Ограничение блокировки в инвентаре

* Информация: булево значение, которое заставляет ExecutableItem оставаться в слоте, где он находится, и не позволяет игроку перемещать его каким-либо образом.
* Пример (эта функция не работает в творческом режиме)

```yaml
restrictions:
  locked-in-inventory: true
```

### Отмена взаимодействий инструмента

* Информация: булево значение, которое не позволяет игроку использовать срабатывание взаимодействий инструмента у ExecutableItem. Например (правый клик по блоку топором, чтобы ободрать его, использование мотыги для вспашки блока травы)
* Пример:

```yaml
restrictions:
  cancel-tool-interactions: true
```

### Отмена размещения предмета внутри item frame

* Информация: булево значение, которое не позволяет игроку помещать ExecutableItem внутрь item frame.
* Пример:

```yaml
restrictions:
  cancel-item-frame: true
```

### Отмена взаимодействия с кузнечным столом

* Информация: булево значение, которое не позволяет игроку помещать ExecutableItem внутрь кузнечного стола.
* Пример:

```yaml
restrictions:
  cancel-smithing-table: true
```

### Отмена взаимодействия с точильным камнем

* Информация: булево значение, которое не позволяет игроку помещать ExecutableItem внутрь grindstone.
* Пример:

```yaml
restrictions:
  cancel-grind-stone: true
```

### Отмена взаимодействия с камнерезом

* Информация: булево значение, которое не позволяет игроку помещать ExecutableItem внутрь камнереза.
* Пример:

```yaml
restrictions:
  cancel-stone-cutter: true
```

### Отмена взаимодействия с варочной стойкой

* Информация: булево значение, которое не позволяет игроку помещать ExecutableItem внутрь варочной стойки.
* Пример:

```yaml
restrictions:
  cancel-brewing: true
```

### Отмена взаимодействия с маяком

* Информация: булево значение, которое не позволяет игроку помещать ExecutableItem внутрь маяка.
* Пример:

```yaml
restrictions:
  cancel-beacon: true
```

### Отмена взаимодействия с картографическим блоком

* Информация: не позволяет игроку помещать ExecutableItem внутрь картографического блока.
* Пример:

```yaml
restrictions:
  cancel-cartography: true
```

### Отмена взаимодействия с блоком компостера

* Информация: булево значение, которое не позволяет игроку помещать ExecutableItem внутрь компостера.
* Пример:

```yaml
restrictions:
  cancel-composter: true
```

### Отмена взаимодействия с блоком раздатчика.

* Информация: булево значение, которое не позволяет игроку помещать ExecutableItem в блок раздатчика.
* Пример:

```yaml
restrictions:
  cancel-dispenser: true
```

### Отмена взаимодействия с блоком выбрасывателя

* Информация: булево значение, которое не позволяет игроку помещать ExecutableItem внутрь блока выбрасывателя.
* Пример:

```yaml
restrictions:
  cancel-dropper: true
```

### Отмена взаимодействия с блоком воронки

* Информация: булево значение, которое не позволяет игроку помещать предметы ExecutableItem внутрь воронки. Это означает оставление предмета внутри контейнера воронки. Это не предотвращает попадание предмета в воронку через брошенный предмет сверху воронки.
* Пример:

```yaml
restrictions:
  cancel-hopper: true
```

### Отмена взаимодействия с блоком аналоя

* Информация: булево значение, которое не позволяет игроку помещать ExecutableItem внутрь блока аналоя.
* Пример:

```yaml
restrictions:
  cancel-lectern: true
```

### Отмена взаимодействия с торговцем/жителем-торговцем

* Информация: булево значение, которое не позволяет игроку помещать ExecutableItem в сделку жителя/торговца.
* Пример:

```yaml
restrictions:
  cancel-merchant: true
```

### Отмена смены предмета рукой

* Информация: булево значение, которое не позволяет игроку менять предметы из одной руки в другую. Обычно используется клавиша F на клавиатуре для "Swap items with offhand"
* Пример:

```yaml
restrictions:
  cancel-swap-hand: true
```

### Отмена взаимодействия с рогом

* Информация: булево значение, которое не позволяет игроку играть на роге, если ExecutableItem является рогом.
* Пример:

```yaml
restrictions:
  cancel-horn: true
```

### ОТМЕНА ARMOR STAND

* Информация: не позволяет игроку надевать ExecutableItem на armor stand.
* Пример:

```yaml
restrictions:
  cancel-armorstand: true
```

### ОТМЕНА SPAWNER

* Информация: не позволяет игроку использовать spawn egg ExecutableItem на spawner его ванильным способом.
* Пример:

```yaml
restrictions:
  cancel-spawner: true
```

### ОТМЕНА РАЗМЕЩЕНИЯ В BUNDLE

* Информация: не позволяет игроку помещать ExecutableItem внутрь bundle.
* Пример:

```yaml
restrictions:
  cancel-place-in-bundle: true
```
