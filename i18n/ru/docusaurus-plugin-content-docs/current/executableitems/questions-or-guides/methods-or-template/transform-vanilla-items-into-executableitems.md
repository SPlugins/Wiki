---
description: >-
  Пошаговое руководство по превращению обычных ванильных предметов Minecraft в
  ExecutableItems с помощью плагина SPlugins.
source_hash: b79db1c5ed1a524c
translated_at: '2026-10-03T10:34:50.161Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Превращение ванильных предметов в ExecutableItems

:::info
Прежде всего вы должны знать, что этот метод доступен только в PREMIUM-версии
:::

![](https://media.ssomar.com/m/docs-img-executable-items-color3.png)

### Давайте создадим это, первым делом решите, какой ванильный предмет вы хотите трансформировать.

* Для этого руководства это будет **diamond\_sword**

![](https://media.ssomar.com/m/docs-img-image-96.png)

### **Затем нам нужно создать предмет, на который он будет заменён**

* Чтобы создать предмет, введите команду `/ei create <id>`

![](https://media.ssomar.com/m/docs-img-image-194.png)

* Измените Material предмета на тот ванильный предмет, который вы собираетесь менять (в данном случае diamond\_sword)

![](https://media.ssomar.com/m/docs-img-image-168.png)

* Давайте создадим активатор

![](https://media.ssomar.com/m/docs-img-image-92.png)

* Для этого примера это будет `PLAYER_CLICK_ON_ENTITY`

![](https://media.ssomar.com/m/docs-img-image-213.png)

* Подробный клик (detailed click) влево, чтобы работало только при ударе

![](https://media.ssomar.com/m/docs-img-image-272.png)

* А в командах я укажу вот это:

```yaml
playerCommands:
- SENDMESSAGE §6This is not a normal sword..
- PARTICLE FLAME 50 0.5 0
entityCommands:
- BURN 4
```

* Таким образом, при ударе мечом появится надпись _**This is not a normal sword**_, и сущность будет гореть 4 секунды
* Отлично! Предмет готов, вы можете протестировать его, если хотите (чтобы убедиться, что предмет EI работает корректно). Теперь нам нужно сделать.. трансформацию 😈😈

### Трансформация ванильного предмета в созданный EI

* Для этого сначала нужно перейти к редактированию yml вашего предмета.

:::info
Он находится в plugins/ExecutableItems/items/\<itemID>.yml
:::

![](https://media.ssomar.com/m/docs-img-image-195.png)

* Откройте его и добавьте эти строки (они должны быть без отступов/пробелов слева)

```yaml
recognitions:
- MATERIAL
```

* Теперь ExecutableItems будет считать, что любой предмет с тем же Material, что и у EI-предмета (который мы только что создали), является этим EI-предметом.
* Сохраните файл \<item>.yml, зайдите в игру и введите `/ei reload`

### Давайте протестируем это

* Если мы правильно выполнили все шаги, теперь нужно взять ванильный diamond\_sword, подойти к корове и ударить её -> она должна гореть 4 секунды, появятся частицы, и вы получите сообщение.

![](https://media.ssomar.com/m/docs-img-image-245.png)

![](https://media.ssomar.com/m/docs-img-image-105.png)

![](https://media.ssomar.com/m/docs-img-image-73.png)![](https://media.ssomar.com/m/docs-img-image-181.png)

* Проверено, работает! Ага!!

:::info
Любые вопросы вы можете задать в Discord ^^

Метод от Special70
:::
