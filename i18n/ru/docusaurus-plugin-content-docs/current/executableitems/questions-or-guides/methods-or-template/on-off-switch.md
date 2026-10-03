---
description: >-
  Руководство ExecutableItems (SPlugins) по созданию переключателя On/Off с
  переменными и условиями-плейсхолдерами.
source_hash: 739c8a7115be416e
translated_at: '2026-10-03T10:35:36.916Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Переключатель On / Off

## Требования+

* ExecutableItems **Premium**

## ВНИМАНИЕ: СНАЧАЛА СОЗДАЙТЕ 2 АКТИВАТОРА.

## Первый активатор

### Создание переменной

* Необходимо создать переменную, чтобы у нас был идентификатор состояния переключателя (включён/выключен)

![Нажмите на эту иконку, чтобы открыть редактор переменных](https://media.ssomar.com/m/docs-img-imgur-nrkkixb.png)

![По сути, вы просто создаёте переменную](https://media.ssomar.com/m/docs-img-imgur-jubywre.png)

![Для id не имеет особого значения, что указывать. в этом руководстве мы назовём нашу переменную "x"](https://media.ssomar.com/m/docs-img-imgur-ua4vmpu.png)

![Не имеет значения, будет это число или строка](https://media.ssomar.com/m/docs-img-imgur-nut1h4h.png)

![В этом руководстве мы будем использовать значение 0](https://media.ssomar.com/m/docs-img-imgur-bj4cpf7.png)

### Создание предмета и добавление активатора

* В данном случае это будет PLAYER\_ALL\_CLICK

![](https://media.ssomar.com/m/docs-img-image-94.png)

### Команды

* Введите команды, которые вы хотите указать

### Изменение переменных

![Сначала нажмите на эту иконку в редакторе активатора](https://media.ssomar.com/m/docs-img-imgur-lvcmrrl.png)

![Создайте изменение переменной](https://media.ssomar.com/m/docs-img-imgur-r50hlwy.png)

![Выберите переменную, которую мы создали ранее](https://media.ssomar.com/m/docs-img-imgur-sksrdko.png)

![Установите тип изменения на SET](https://media.ssomar.com/m/docs-img-imgur-bbwjzw8.png)

![Мы установим значение, отличное от 0, чтобы тот же активатор не мог сработать второй раз](https://media.ssomar.com/m/docs-img-imgur-av856uf.png)

### Условие-плейсхолдер

* Это нужно для того, чтобы контролировать, какой активатор будет срабатывать

![Сначала переходим к условиям](https://media.ssomar.com/m/docs-img-image-419.png)

![Затем к условиям-плейсхолдерам](https://media.ssomar.com/m/docs-img-image-303.png)

![Конечно, нам нужно создать условие-плейсхолдер](https://media.ssomar.com/m/docs-img-image-429.png)

![PLAYER\_STRING тоже является вариантом](https://media.ssomar.com/m/docs-img-imgur-nxuypmm.png)

![Мы будем использовать плейсхолдер для переменной, которую мы создали. Используйте %var\_x\_int%, если вы всё же использовали PLAYER\_STRING](https://media.ssomar.com/m/docs-img-imgur-0qdthro.png)

![Мы будем использовать этот оператор сравнения](https://media.ssomar.com/m/docs-img-imgur-urvtgm8.png)

![Мы будем использовать значение 0 как вариант "выключено"](https://media.ssomar.com/m/docs-img-imgur-cuorrfg.png)

### Добавление кулдауна другого предмета на сам предмет

* Например, id предмета ei это `onoff-demo`. Тогда вам нужно перейти к этой иконке и следовать картинкам.

![](https://media.ssomar.com/m/docs-img-imgur-mmhsap4.png)

![](https://media.ssomar.com/m/docs-img-imgur-anndswf.png)

![](https://media.ssomar.com/m/docs-img-imgur-q6vjclp.png)

Например, id переключателя on/off это "faker", поэтому выбираем "faker".

![](https://media.ssomar.com/m/docs-img-imgur-x1dtqww.png)

Начиная с версии 5.0, id активаторов начинаются с "activator0" вместо "activator1". В любом случае, вам нужно выбрать второй активатор, так как активаторы выполняются сверху вниз.

:::info
Этот параметр важен, потому что без кулдауна выполнение будет прорываться через второй активатор, который должен выключать активатор
:::

![Установите кулдаун на 1 или 2. Решайте сами](https://media.ssomar.com/m/docs-img-imgur-zv8ioie.png)

![](https://media.ssomar.com/m/docs-img-imgur-izxlfq9.png)

Рекомендуется установить значение true, если вы хотите, чтобы предметом можно было спамить. Одного тика достаточно, чтобы предотвратить прорыв, упомянутый выше.

![](https://media.ssomar.com/m/docs-img-imgur-gb5oud0.png)

## Второй активатор

* Мы снова будем использовать **`PLAYER_ALL_CLICK`**

![](https://media.ssomar.com/m/docs-img-image-165.png)

###

### Команды

* Введите команды, которые вы хотите указать

### Изменение переменных

![Сначала нажмите на эту иконку в редакторе активатора](https://media.ssomar.com/m/docs-img-imgur-lvcmrrl.png)

![Создайте изменение переменной](https://media.ssomar.com/m/docs-img-imgur-r50hlwy.png)

![Выберите переменную, которую мы создали ранее](https://media.ssomar.com/m/docs-img-imgur-sksrdko.png)

![Установите тип изменения на SET](https://media.ssomar.com/m/docs-img-imgur-bbwjzw8.png)

![Мы установим значение, отличное от 1, чтобы тот же активатор не мог сработать второй раз](https://media.ssomar.com/m/docs-img-imgur-0kzktpe.png)

### Условие-плейсхолдер

* Это нужно для того, чтобы контролировать, какой активатор будет срабатывать

![Сначала переходим к условиям](https://media.ssomar.com/m/docs-img-image-419.png)

![Затем к условиям-плейсхолдерам](https://media.ssomar.com/m/docs-img-image-303.png)

![Конечно, нам нужно создать условие-плейсхолдер](https://media.ssomar.com/m/docs-img-image-429.png)

![PLAYER\_STRING тоже является вариантом](https://media.ssomar.com/m/docs-img-imgur-nxuypmm.png)

![Мы будем использовать плейсхолдер для переменной, которую мы создали. Используйте %var\_x\_int%, если вы всё же использовали PLAYER\_STRING](https://media.ssomar.com/m/docs-img-imgur-0qdthro.png)

![Мы будем использовать этот оператор сравнения](https://media.ssomar.com/m/docs-img-imgur-urvtgm8.png)

![Мы будем использовать значение 1 как вариант "включено"](https://media.ssomar.com/m/docs-img-imgur-bjkv5hy.png)

### Добавление кулдауна другого предмета на сам предмет

* Например, id предмета ei это `onoff-demo`. Тогда вам нужно перейти к этой иконке и следовать картинкам.

![](https://media.ssomar.com/m/docs-img-imgur-mmhsap4.png)

![](https://media.ssomar.com/m/docs-img-imgur-anndswf.png)

![](https://media.ssomar.com/m/docs-img-imgur-q6vjclp.png)

Например, id переключателя on/off это "faker", поэтому выбираем "faker".

![](https://media.ssomar.com/m/docs-img-imgur-tfly1dt.png)

Начиная с версии 5.0, id активаторов начинаются с "activator0" вместо "activator1". В любом случае, вам нужно выбрать второй активатор, так как активаторы выполняются сверху вниз.

:::info
Этот параметр важен, потому что без кулдауна выполнение будет прорываться через второй активатор, который должен выключать активатор
:::

![Установите кулдаун на 1 или 2. Решайте сами](https://media.ssomar.com/m/docs-img-imgur-zv8ioie.png)

![](https://media.ssomar.com/m/docs-img-imgur-izxlfq9.png)

Рекомендуется установить значение true, если вы хотите, чтобы предметом можно было спамить. Одного тика достаточно, чтобы предотвратить прорыв, упомянутый выше.

![](https://media.ssomar.com/m/docs-img-imgur-gb5oud0.png)

##

### Сохранение предмета EI

* Должно получиться вот так (мы добавили команды, которые выводят ON (activator1) и OFF (activator2), чтобы показать вам, как это работает :p

## Конфигурация предмета

```yaml
name: '&e&lOn/Off Demo'
lore: []
material: LEVER
glow: true
usage: 1
usageLimit: -1
hiders:
  hideEnchantments: false
  hideUnbreakable: false
  hideAttributes: false
  hidePotionEffects: false
  hideUsage: true
  hideDye: false
enchantments: {}
restrictions:
  cancel-item-place: false
variables:
  x:
    variableName: x
    type: NUMBER
    default: 0.0
attributes: {}
activators:
  activator0:
    name: '&eToggle-On'
    option: PLAYER_ALL_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: false
    otherEICooldowns:
      cd0:
        executableItem: onoff-demo
        activators:
        - activator1
        cooldown: 1
        isCooldownInTicks: true
    requiredItems:
      errorMessage: ''
    requiredExecutableItems:
      errorMessage: ''
    detailedSlots:
    - -1
    playerCommands:
    - SENDMESSAGE Toggled On
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchC1:
        type: PLAYER_NUMBER
        comparator: EQUALS
        part1: '%var_x%'
        part2: '0.0'
        cancelEventIfNotValid: true
        messageIfNotValid: '&e'
    variablesModification:
      varModif0:
        variableName: x
        type: SET
        modification: 1.0
  activator1:
    name: '&eToggle-Off'
    option: PLAYER_ALL_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: false
    otherEICooldowns:
      cd0:
        executableItem: onoff-demo
        activators:
        - activator0
        cooldown: 1
        isCooldownInTicks: true
    requiredItems:
      errorMessage: ''
    requiredExecutableItems:
      errorMessage: ''
    detailedSlots:
    - -1
    playerCommands:
    - SENDMESSAGE Toggled Off
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchC1:
        type: PLAYER_NUMBER
        comparator: EQUALS
        part1: '%var_x%'
        part2: '1.0'
        cancelEventIfNotValid: true
        messageIfNotValid: '&e'
    variablesModification:
      varModif0:
        variableName: x
        type: SET
        modification: 0.0

```

## Последний комментарий

Если у вас есть вопросы, или вы считаете, что руководство недостаточно понятно, не стесняйтесь спрашивать в Discord.\
Мы вам поможем! 😁😁
