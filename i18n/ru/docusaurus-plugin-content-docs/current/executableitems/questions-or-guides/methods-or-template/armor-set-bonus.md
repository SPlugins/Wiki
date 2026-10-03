---
description: >-
  Руководство по созданию бонуса за полный набор доспехов в ExecutableItems:
  условия, активатор LOOP и настройка слотов.
source_hash: 6cf2ef4cf39ef5e2
translated_at: '2026-10-03T10:31:57.257Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Бонус набора доспехов

:::tip Новое: нативные наборы
В ExecutableItems теперь есть нативные [наборы](/executableitems/configurations/sets-configuration): один файл на набор, несколько уровней (2 предмета, 4 предмета...), эффекты и атрибуты снимаются корректно при снятии любой части, и никакого постоянно работающего LOOP. Используйте их для новых наборов. Способ ниже всё ещё работает.
:::

## Приступим к созданию!

### Сначала нужно создать предметы набора доспехов

* Для этого примера названия предметов будут такими:\
  Шлем = **nameofhelmet.yml**\
  Нагрудник = **nameofchestplate.yml**\
  Поножи = **nameofleggings.yml**\
  Ботинки = **nameofboots.yml**

![](https://media.ssomar.com/m/docs-img-image-145.png)

* Чтобы их создать
  * /ei create nameofhelmet -> Save
  * /ei create nameofchestplate -> Save
  * /ei create nameofleggings -> Save
  * /ei create nameofboots -> Save

### Теперь создадим активатор, который должен срабатывать при наличии всего набора

:::info
В этом примере мы создадим доспех, который всегда даёт силу (strength), когда на вас надет весь набор, поэтому нам понадобится LOOP ACTIVATOR. Также нужно выбрать, какая часть доспеха будет "основной" (main), то есть той, из которой будут выполняться все команды. В данном случае "основной" будет **шлем**.
:::

* Итак, как было сказано, активатор будет **LOOP**

![](https://media.ssomar.com/m/docs-img-image-399.png)

* Мы хотим, чтобы это работало только при надетом доспехе, поэтому в **detailedSlots** мы укажем, чтобы это работало только при наличии предмета в **слоте головы**.

![](https://media.ssomar.com/m/docs-img-image-189.png)

* А для бонусного эффекта мы используем ванильную команду эффекта:

```
minecraft:effect give %player% strength 10 0
```

### Условие полного набора

Отлично! Мы только что создали "способность", которой обладает весь набор, но нам нужно добавить **условие** наличия всего набора!!

* Перейдите в Player conditions -> ifHasExecutableItems

![](https://media.ssomar.com/m/docs-img-image-193.png)

![](https://media.ssomar.com/m/docs-img-image-172.png)

![](https://media.ssomar.com/m/docs-img-image-332.png)

Затем добавьте 3 условия IfHasExecutableItem для остальных 3 частей доспеха. В данном случае, так как я выбрал шлем как основной, мне нужно добавить нагрудник, поножи и ботинки.

Сначала я покажу добавление нагрудника как условия:

* Итак, на фото выше добавьте условие, и вы увидите вот это
* ![](https://media.ssomar.com/m/docs-img-image-176.png)
* Первое это нужный EI, в данном случае я прокручу вниз, чтобы найти нагрудник
* ![](https://media.ssomar.com/m/docs-img-image-389.png)
* Когда мы его нашли, перейдём к следующему параметру "Amount", он будет равен 1
* ![](https://media.ssomar.com/m/docs-img-image-258.png)
* И затем слот, в котором должен находиться этот ExecutableItem, в случае нагрудника это слот нагрудника.
* ![](https://media.ssomar.com/m/docs-img-image-179.png)
* ![](https://media.ssomar.com/m/docs-img-image-427.png)

:::info
Не забудьте отключить основную руку (main hand) и включить только 1 слот, тот, который вам нужен.
:::

* **И в данном случае мы не будем использовать условие usage, так что не трогайте его.**
* И сохраните.

То же самое нужно сделать для оставшихся 2 частей, после чего у нас будет всего 3 условия

![](https://media.ssomar.com/m/docs-img-image-249.png)

* И это всё! **Сохраните предмет** и протестируйте!

![](https://media.ssomar.com/m/docs-img-image-348.png)

Работает! Теперь... если у вас нет одной из частей доспеха, условие сообщит вам об этом...

![](https://media.ssomar.com/m/docs-img-image-384.png)

Чтобы отключить это, нам нужно снова зайти в редактор условия и нажать здесь

![](https://media.ssomar.com/m/docs-img-image-153.png)

И установить NO VALUE

![](https://media.ssomar.com/m/docs-img-image-120.png)

И вот всё, теперь сохраните, и никакого сообщения об условии больше не появится.

И теперь... это всё!! 😁😁😎

:::info
Если у вас есть вопросы, можете задать их в **Discord** ^^

Способ от Special70
:::

Примеры:


```yaml
name: '&bHelmet'
material: DIAMOND_HELMET
lore:
  - '&7Wearing the full set grants Regeneration'
activators:
  fullSetBonus:
    name: Full Set Bonus
    option: LOOP
    delay: 1 # One second delay
    delayInTick: false # To specify that the delay need to be in seconds
    detailedSlots:
      - 39
    playerCommands:
      - minecraft:effect give %player% minecraft:regeneration 1 0
    playerConditions:
      ifHasExecutableItems:
        condition1_for_checking_chestplate: # 
          executableItem: CustomChestplate
          amount: 1
          detailedSlots:
            - 38
        condition2_for_checking_leggings:
          executableItem: CustomLeggings
          amount: 1
          detailedSlots:
            - 37
        condition3_for_checking_boots:
          executableItem: CustomBoots
          amount: 1
          detailedSlots:
            - 36
```


```yaml
name: '&bChestplate'
material: DIAMOND_CHESTPLATE
lore:
  - '&7Wearing the full set grants Regeneration'
```


```yaml
name: '&bLeggings'
material: DIAMOND_LEGGINGS
lore:
  - '&7Wearing the full set grants Regeneration'
```


```yaml
name: '&bBoots'
material: DIAMOND_BOOTS
lore:
  - '&7Wearing the full set grants Regeneration'
```
