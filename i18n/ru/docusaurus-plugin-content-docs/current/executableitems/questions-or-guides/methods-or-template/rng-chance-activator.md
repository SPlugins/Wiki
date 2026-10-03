---
description: >-
  Руководство по SPlugins: как настроить активатор RNG Chance в ExecutableItems
  для случайного уклонения от урона.
source_hash: e2c9077e189d3702
translated_at: '2026-10-03T10:34:17.235Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Активатор RNG Chance

Так вот, некоторое время назад мне захотелось сделать NINJA Armor, и идея была такая: часть ударов уклоняется, а часть нет, но как реализовать это "уклонение"? После долгих раздумий появился этот метод, давайте разберём его.

:::info
Этот туториал будет построен на примере, указанном выше, но идея в том, чтобы вы уловили суть метода и применили его так, как вам нужно.
:::

### Создадим предмет

:::info
Для самого **предмета** потребуется премиум версия + PlaceholderAPI + RNG Expansion
:::

![](https://media.ssomar.com/m/docs-img-image-204.png)

* После добавления названия, лора и материала..

![](https://media.ssomar.com/m/docs-img-image-237.png)

### Создадим активатор, который сотворит магию

* Для начала, идея в том, чтобы сделать RECEIVE\_HIT\_BY\_GLOBAL и событие cancel.

<img src="https://media.ssomar.com/m/docs-img-imgur-ywpudsl.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-qj9rwav.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-tpgpdss.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-yi878ll.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-4wtkxti.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-bw6zczo.png" alt="" />

* Сейчас отменяется КАЖДЫЙ полученный удар, чтобы сделать так, чтобы отмена срабатывала иногда, а иногда нет, нам нужно заставить сам активатор запускаться не всегда. Для этого мы добавим условие, связанное с RNG. Суть в следующем: случайное число от 1 до 4, если оно совпадает с 1, активатор срабатывает, вероятность этого 25%, это и есть вероятность, которую мы хотим получить, давайте добавим это.
*

    <img src="https://media.ssomar.com/m/docs-img-imgur-riqfiao.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-6q81hpl.png" alt="" />

PLAYER\_NUMBER

![](https://media.ssomar.com/m/docs-img-image-178.png)

И в первой части мы добавим "%rng\_1,4%" (для этого требуется PlaceholderAPI и RNG Expansion)

![](https://media.ssomar.com/m/docs-img-image-111.png)

EQUALS

![](https://media.ssomar.com/m/docs-img-image-175.png)

"1" (потому что мы хотим, чтобы срабатывание происходило только если случайное число от 1 до 4 совпадает с 1)

![](https://media.ssomar.com/m/docs-img-image-224.png)

И предмет готов

:::info
ДЛЯ ЦЕЛЕЙ ОТЛАДКИ Я ДОБАВЛЮ, ЧТО АКТИВАТОР ПИШЕТ "dodge", А ЕСЛИ ПЛЕЙСХОЛДЕР НЕ СОВПАДАЕТ, ПИШЕТ "didn't dodge".\
\
Так что, протестировав это, мы поймём, работает ли всё правильно.
:::

![](https://media.ssomar.com/m/docs-img-image-378.png)

И это сработало, активатор срабатывает только 1 раз из 4.

Если у вас есть вопросы, не стесняйтесь задавать их в discord EI, хорошего дня :P

## Как установить правильные значения, чтобы получить нужный вам процент

<iframe width="560" height="315" src="https://www.youtube.com/embed/jXTDlqoE8dc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
