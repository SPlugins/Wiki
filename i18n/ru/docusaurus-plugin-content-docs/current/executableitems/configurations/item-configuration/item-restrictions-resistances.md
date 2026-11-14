---
description: >-
  Узнайте, как настроить ограничения и сопротивления для предметов в
  ExecutableItems: запрет выбрасывания, крафта, наковальни, хранилищ и многого
  другого.
source_hash: bf6b77f864065099
translated_at: '2026-11-13T18:15:07.216Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Ограничения/сопротивления предметов

На этой странице вы узнаете об ограничениях предметов и некоторых сопротивлениях. Они позволяют настроить поведение предмета в определённых случаях.

## Глобальные ограничения

* Инфо: если вы хотите добавить одно из ограничений предмета ко всем предметам, созданным в плагине, добавьте конфигурацию нужных ограничений в файл config.yml плагина.
* Пример: я хочу добавить ограничения на использование наковальни и точильного камня ко всем ExecutableItems, как уже созданным, так и тем, которые будут созданы.


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

В этом разделе вы узнаете, как добавить индивидуальное ограничение только для того ExecutableItem, который вы сейчас редактируете.

### Отмена выбрасывания предмета

* Инфо: булево значение, которое не позволяет игроку выбрасывать executable item.
* Примечание: если предмет не может вернуться в инвентарь (например, он находился на курсоре, когда инвентарь закрылся, а все слоты заняты), выбрасывание разрешается, а предмет не удаляется.
* Пример:

```yaml
restrictions:
  cancel-item-drop: true
```

### Отмена установки блока на землю.

* Инфо: булево значение, которое не позволяет игроку устанавливать Executable Items на землю, если предмет является блоком.
* Пример:

```yaml
restrictions:
  cancel-item-place: true
```

### Отмена использования предмета в любых рецептах на верстаке

* Инфо: булево значение, которое не позволяет игроку создавать с помощью ExecutableItem предметы по ванильным рецептам.
* Пример:

```yaml
restrictions:
  cancel-item-craft: true
```

### Отмена использования предмета только в ванильных рецептах, не затрагивая кастомные

* Инфо: булево значение, которое не позволяет игроку создавать с помощью ExecutableItem предметы по ванильным рецептам, но предмет по-прежнему можно использовать в кастомных рецептах крафта.
* Пример:

```yaml
restrictions:
  cancel-item-craft-no-custom: true
```

### Отмена взаимодействия для украшения горшков Minecraft

* Инфо: булево значение, которое не позволяет игроку помещать ExecutableItems в декорированные горшки.
* Пример:

```yaml
restrictions:
  cancel-decorated-pot: true
```

### Отмена помещения предмета на полку

* Инфо: булево значение, которое не позволяет игроку помещать ExecutableItem на полку (Minecraft 1.21.9+, любой тип древесины).
  * Полезно для предмета, который возвращает себя через свои активаторы (например, «бесконечное» ведро воды): без этого ограничения предмет, помещённый на полку, остаётся там, а активатор выдаёт новый.
* Пример:

```yaml
restrictions:
  cancel-shelf: true
```

### Отмена помещения предмета в хранилище

* Инфо: булево значение, которое не позволяет игроку помещать ExecutableItem в следующие блоки:
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

* Инфо: булево значение, которое не позволяет игроку помещать ExecutableItem в следующие блоки:
  * Furnace
  * Blast Furnace
  * Smoker
* Пример: (эта функция не работает в творческом режиме)

```yaml
restrictions:
  cancel-deposit-in-furnace: true
```

### Отмена сгорания предмета в огне и лаве

* Инфо: булево значение, которое не позволяет ExecutableItem сгорать в огне или лаве.
* Пример:

```yaml
restrictions:
  cancel-item-burn: true
```

### Отмена удаления предмета при контакте с кактусом

* Инфо: булево значение, которое не позволяет удалять ExecutableItem при касании блока кактуса.
* Пример:

```yaml
restrictions:
  cancel-item-delete-by-cactus: true
```

### Отмена удаления предмета при ударе молнии

* Инфо: булево значение, которое не позволяет удалять ExecutableItem, когда в него ударяет молния.
* Конфиг: `cancel-item-delete-by-lightning: true`
* Пример:

```yaml
restrictions:
  cancel-item-delete-by-lightning: true
```

### Отмена зачарования предмета

* Инфо: булево значение, которое не позволяет зачаровывать предмет.
* Пример:

```yaml
restrictions:
  cancel-enchant: true
```

### Отмена помещения предмета в наковальню

* Инфо: булево значение, которое не позволяет игроку помещать ExecutableItem в наковальню. Тем самым предотвращается и переименование, и зачарование, так как предмет невозможно туда поместить.
* Пример:

```yaml
restrictions:
  cancel-anvil: true
```

### Отмена переименования с помощью наковальни

* Инфо: булево значение, которое не позволяет игроку переименовывать ExecutableItem с помощью наковальни.
* Пример:

```yaml
restrictions:
  cancel-rename-anvil: true
```

:::tip
Предмет, который чинится или зачаровывается в наковальне **без переименования**, сохраняет своё цветное / градиентное название благодаря [keepNameInAnvil](/executableitems/configurations/general-configuration#keepnameinanvil) (включено по умолчанию). Эта опция находится в `plugins/ExecutableItems/config.yml`, а не в файле предмета.
:::

### Отмена зачарования с помощью наковальни

* Инфо: булево значение, которое не позволяет игроку зачаровывать ExecutableItem с помощью наковальни.
* Пример:

```yaml
restrictions:
  cancel-enchant-anvil: true
```

### Отмена взаимодействия предмета с лошадью/мулом/ламой

* Инфо: булево значение, которое не позволяет ExecutableItems взаимодействовать с лошадьми, мулами и ламами. Это также отключает хранилище.
* Пример:

```yaml
restrictions:
  cancel-horse: true
```

### Отмена поедания/употребления предмета

* Инфо: булево значение, которое не позволяет игроку употреблять или съедать ExecutableItem.
* Пример:

```yaml
restrictions:
  cancel-consumption: true
```

### Отмена использования предмета в блоке крафтера

* Инфо: булево значение, которое не позволяет игроку помещать ExecutableItems в блок крафтера.
* Конфиг: `cancel-crafter: false`

```yaml
restrictions:
  cancel-crafter: true
```

### Ограничение блокировки в инвентаре

* Инфо: булево значение, благодаря которому ExecutableItem остаётся в своём слоте, а игрок не может переместить его никаким способом.
* Пример (эта функция не работает в творческом режиме)

```yaml
restrictions:
  locked-in-inventory: true
```

### Отмена взаимодействий с инструментами

* Инфо: булево значение, которое не позволяет игроку использовать взаимодействия ExecutableItem как инструмента. Например: (щелчок правой кнопкой по блоку топором для снятия коры, использование мотыги для вспашки блока травы)
* Пример:

```yaml
restrictions:
  cancel-tool-interactions: true
```

### Отмена помещения предмета в рамку

* Инфо: булево значение, которое не позволяет игроку помещать ExecutableItem в рамку.
* Пример:

```yaml
restrictions:
  cancel-item-frame: true
```

### Отмена взаимодействия с кузнечным столом

* Инфо: булево значение, которое не позволяет игроку помещать ExecutableItem в кузнечный стол.
* Пример:

```yaml
restrictions:
  cancel-smithing-table: true
```

### Отмена взаимодействия с точильным камнем

* Инфо: булево значение, которое не позволяет игроку помещать ExecutableItem в точильный камень.
* Пример:

```yaml
restrictions:
  cancel-grind-stone: true
```

### Отмена взаимодействия с камнерезным станком

* Инфо: булево значение, которое не позволяет игроку помещать ExecutableItem в камнерезный станок.
* Пример:

```yaml
restrictions:
  cancel-stone-cutter: true
```

### Отмена взаимодействия с варочной стойкой

* Инфо: булево значение, которое не позволяет игроку помещать ExecutableItem в варочную стойку.
* Пример:

```yaml
restrictions:
  cancel-brewing: true
```

### Отмена взаимодействия с маяком

* Инфо: булево значение, которое не позволяет игроку помещать ExecutableItem в маяк.
* Пример:

```yaml
restrictions:
  cancel-beacon: true
```

### Отмена взаимодействия с картографическим столом

* Инфо: не позволяет игроку помещать ExecutableItem в картографический стол.
* Пример:

```yaml
restrictions:
  cancel-cartography: true
```

### Отмена взаимодействия с компостером

* Инфо: булево значение, которое не позволяет игроку помещать ExecutableItem в компостер.
* Пример:

```yaml
restrictions:
  cancel-composter: true
```

### Отмена взаимодействия с раздатчиком.

* Инфо: булево значение, которое не позволяет игроку помещать ExecutableItem в раздатчик.
* Пример:

```yaml
restrictions:
  cancel-dispenser: true
```

### Отмена взаимодействия с выбрасывателем

* Инфо: булево значение, которое не позволяет игроку помещать ExecutableItem в выбрасыватель.
* Пример:

```yaml
restrictions:
  cancel-dropper: true
```

### Отмена взаимодействия с воронкой

* Инфо: булево значение, которое не позволяет игроку помещать предметы ExecutableItem в воронку, то есть оставлять предмет внутри контейнера воронки. Оно не мешает предмету попасть в воронку, если его выбросить на неё сверху.
* Пример:

```yaml
restrictions:
  cancel-hopper: true
```

### Отмена взаимодействия с кафедрой

* Инфо: булево значение, которое не позволяет игроку помещать ExecutableItem на кафедру.
* Пример:

```yaml
restrictions:
  cancel-lectern: true
```

### Отмена взаимодействия с торговцем/жителем

* Инфо: булево значение, которое не позволяет игроку помещать ExecutableItem в торговлю с жителем/торговцем.
* Пример:

```yaml
restrictions:
  cancel-merchant: true
```

### Отмена обмена предметов между руками

* Инфо: булево значение, которое не позволяет игроку менять предметы местами между одной рукой и другой. Обычно это клавиша F на клавиатуре для «Swap items with offhand».
* Пример:

```yaml
restrictions:
  cancel-swap-hand: true
```

### Отмена взаимодействия с козлиным рогом

* Инфо: булево значение, которое не позволяет игроку играть на рожке, если ExecutableItem является рогом.
* Пример:

```yaml
restrictions:
  cancel-horn: true
```

### ОТМЕНА СТОЙКИ ДЛЯ БРОНИ

* Инфо: не позволяет игроку помещать ExecutableItem на стойку для брони.
* Пример:

```yaml
restrictions:
  cancel-armorstand: true
```

### ОТМЕНА СПАВНЕРА

* Инфо: не позволяет игроку использовать яйцо призыва ExecutableItem на спавнере обычным ванильным способом.
* Пример:

```yaml
restrictions:
  cancel-spawner: true
```

### ОТМЕНА ПОМЕЩЕНИЯ В НАБОР

* Инфо: не позволяет игроку помещать ExecutableItem в набор (bundle).
* Пример:

```yaml
restrictions:
  cancel-place-in-bundle: true
```
