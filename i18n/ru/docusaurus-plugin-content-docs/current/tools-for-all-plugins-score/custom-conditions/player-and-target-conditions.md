---
description: >-
  Условия позволяют пользователям ExecutableItems задавать критерии, условия или
  требования для срабатывания триггеров.
source_hash: 5b9669d43610ab52
translated_at: '2026-10-03T10:31:45.443Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Условия игрока и цели (Player & Target Conditions)

## Настройки условия
Все условия оформлены одинаково, у вас есть:
* `{theCondition}`
* `{theCondition}Msg`: сообщение, отправляемое, если условие не выполнено (без него отправляется стандартное сообщение об ошибке, кроме активатора LOOP в ExecutableItems)
* `{theCondition}Cancel`: должно ли событие быть отменено, если условие не выполнено
* `{theCondition}Cmds`: команда(ы), которые выполняются, если условие не выполнено
* Пример:

```yaml
playerConditions:
    ifSneaking: true
    ifSneakingMsg: "&cMy custom error message here"
    ifSneakingCancel: true
    ifSneakingCmds:
    - kill %player%
```

:::info
Для числовых условий вы можете задать 2 условия одновременно.
Пример:
"Я хочу создать условие, которое срабатывает только если значение больше 50, но меньше 250"
`{theCondition}: 50 < CONDITION < 250`
:::

:::info
Вы хотите добавить условия для игрока?

Тогда в части активатора добавьте playerConditions.

А для условия цели, очевидно, это targetConditions.
:::

:::info
**ИНФОРМАЦИЯ О GIF:** активатор, используемый на GIF для демонстрации работы каждого условия, это активатор LOOP, поэтому сообщение об ошибке условия появляется несколько раз.
:::

### ifSneaking - Not

* Описание: проверяет, крадётся ли игрок
* Пример:

```yaml
playerConditions:
    ifSneaking: false
    ifSneakingMsg: '' #<- Here is where you will add the custom message.
    ifNotSneaking: true
    ifNotSneakingMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если игрок (не) крадётся, активатор сработает.
  * Если игрок летит и спускается, нажимая кнопку приседания, активатор сработает для ifSneaking
* Обязательно: НЕТ (По умолчанию: false)

![](https://media.ssomar.com/m/docs-img-giphy-sygm0wxk3y1c0u4u3d.gif)

:::danger
Не включайте ifNotSneaking, если включено условие ifSneaking, так как не имеет смысла включать оба одновременно
:::

### ifSprinting - Not

* Описание: проверяет, бежит ли игрок
* Пример:

```yaml
playerConditions:
    ifSprinting: false
    ifSprintingMsg: '' #<- Here is where you will add the custom message.
    ifNotSprinting: false
    ifNotSprintingMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если игрок (не) бежит, активатор сработает.
* Обязательно: НЕТ (По умолчанию: false)

### ifFlying - Not

* Описание: проверяет, летит ли игрок
* Пример:

```yaml
playerConditions:
    ifFlying: false
    ifFlyingMsg: '' #<- Here is where you will add the custom message.
    ifNotFlying: false
    ifNotFlyingMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если игрок переключает полёт двойным нажатием кнопки прыжка и (не) летит, активатор сработает.
* Обязательно: НЕТ (По умолчанию: false)

![](https://media.ssomar.com/m/docs-img-giphy-gqp59l3zk78sas94uo.gif)

### ifBlocking - Not

* Описание: проверяет, держит ли игрок щит и блокирует ли (ПКМ по щиту)
* Пример:

```yaml
playerConditions:
    ifBlockng: false
    ifBlockingMsg: '' #<- Here is where you will add the custom message.
    ifNotBlockng: false
    ifNotBlockingMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если игрок (не) блокирует щитом, активатор сработает
* Обязательно: НЕТ (По умолчанию: false)

![](https://media.ssomar.com/m/docs-img-giphy-xihlvwpznviu4c7786.gif)

### ifGliding - Not

* Описание: проверяет, парит ли игрок
* Пример:

```yaml
playerConditions:
    ifGliding: false
    ifGlidingMsg: '' #<- Here is where you will add the custom message.
    ifNotGliding: false
    ifNotGlidingMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если игрок (не) парит в воздухе с элитрами, активатор сработает.
* Обязательно: НЕТ (По умолчанию: false)

![](https://media.ssomar.com/m/docs-img-giphy-f3px7d1awbudmrj0va.gif)

### ifSwimming - Not

* Описание: проверяет, плывёт ли игрок (Aquatic Update 1.13)
* Пример:

```yaml
playerConditions:
    ifSwimming: false
    ifSwimmingMsg: '' #<- Here is where you will add the custom message.
    ifNotSwimming: false
    ifNotSwimmingMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если игрок прыгает в воду и начинает плыть в горизонтальном положении, активатор сработает.
* Обязательно: НЕТ (По умолчанию: false)

![](https://media.ssomar.com/m/docs-img-giphy-1cfambqwl4j9mmrpbg.gif)

### ifStunned - Not

* Описание: проверяет, оглушён ли игрок
* Пример:

```yaml
playerConditions:
    ifStunned: false
    ifStunnedMsg: '' #<- Here is where you will add the custom message.
    ifNotStunned: false
    ifNotStunnedMsg: ''
```

:::info
Вы можете оглушить игрока, выполнив кастомную команду игрока **STUN\_ENABLE**
:::

```
// Example of a stun of 5 seconds
- STUN_ENABLE
- DELAY 5
- STUN_DISABLE
```

* Обязательно: НЕТ (По умолчанию: false)

### ifIsOnFire - Not

* Описание: проверяет, горит ли игрок
* Пример:

```yaml
playerConditions:
    ifIsOnFire: false
    ifIsOnFireMsg: '' #<- Here is where you will add the custom message.
    ifIsNotOnFire: false
    ifIsNotOnFireMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если игрок (не) горит, упав в лаву / идя по огню, активатор сработает
* Обязательно: НЕТ (По умолчанию: false)

### ifIsInTheAir - Not

* Описание: проверяет, находится ли игрок в воздухе.
* Пример:

```yaml
playerConditions:
    ifIsInTheAir: false
    ifIsInTheAirMsg: '' #<- Here is where you will add the custom message.
    ifIsNotInTheAir: false
    ifIsNotInTheAirMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если под ногами игрока (нет) блоков, активатор сработает.
* Обязательно: НЕТ (По умолчанию: false)

![Это проверит блок под вашими ногами. Также корректно проверяет плиты (slabs).](https://media.ssomar.com/m/docs-img-giphy-djjtjpzl1pmkbjnqvu.gif)

### ifLineOfSight

* Описание: проверяет, есть ли у игрока прямая линия обзора на живую сущность (в пределах 50 блоков).
* Пример:

```yaml
playerConditions:
    ifLineOfSight: true
    ifLineOfSightMsg: ''
```

* Примеры ситуаций:
  * Если игрок смотрит прямо на моба или другого игрока в пределах 50 блоков, активатор сработает.
  * Полезно для создания предметов, работающих только при прицеливании на сущность.
* Обязательно: НЕТ (По умолчанию: false)

:::info
Это условие требует версию сервера **1.14+**.
:::

### ifPlayerMustBeOnHisTown

* **ПОДДЕРЖИВАЕТ СЛЕДУЮЩИЕ ПЛАГИНЫ:**
  * Towny
* Описание: проверяет, находится ли игрок в своём городе.
* Пример:

```yaml
playerConditions:
    ifPlayerMustBeOnHisTown: true
    ifPlayerMustBeOnHisTownMsg: '' #<- Here is where you will add the custom message.
```

* Обязательно: НЕТ (По умолчанию: false)

### ifPlayerMustBeOnHisClaim

* **ПОДДЕРЖИВАЕТ СЛЕДУЮЩИЕ ПЛАГИНЫ:**
  * GriefPrevention
  * Lands
  * GriefDefender
  * Residence
* Описание: проверяет, находится ли игрок на клейме, на котором у него есть права.
* Пример:

```yaml
playerConditions:
    ifPlayerMustBeOnHisClaim: true
    ifPlayerMustBeOnHisClaimMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если игрок находится на клейме, которым он владеет, активатор сработает.
  * Если игрок находится на клейме, которым он не владеет, но на который у него есть права, активатор сработает.
* Обязательно: НЕТ (По умолчанию: false)

### ifPlayerMustBeOnHisClaimOrWilderness

* **ПОДДЕРЖИВАЕТ СЛЕДУЮЩИЕ ПЛАГИНЫ:**
  * GriefPrevention (возвращает истину, если игрок находится в публичном клейме GriefPrevention)
  * Lands
  * GriefDefender
  * Residence
* Описание: проверяет, находится ли игрок на клейме, на котором у него есть права, или в дикой местности.
* Пример:

```yaml
playerConditions:
    ifPlayerMustBeOnHisClaimOrWilderness: true
    ifPlayerMustBeOnHisClaimOrWildernessMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если игрок находится на клейме, которым он владеет, активатор сработает.
  * Если игрок находится на клейме, которым он не владеет, но на который у него есть права, активатор сработает.
  * Если игрок находится в дикой местности, активатор сработает.
* Обязательно: НЕТ (По умолчанию: false)

### ifPlayerMustBeOnHisIsland

* Описание: проверяет, находится ли игрок на своём острове.
* **Совместимые плагины:**
  * **IridiumSkyblock**
  * **SuperiorSkyblock2**
  * **BentoBox**
* Пример:

```yaml
playerConditions:
    ifPlayerMustBeOnHisIsland: true
    ifPlayerMustBeOnHisIslandMsg: '' #<- Here is where you will add the custom message
```

* Примеры ситуаций:
  * Если игрок находится на своём острове, активатор сработает.
* Обязательно: НЕТ (По умолчанию: false)

### ifPlayerMustBeOnHisPlot

* **ПОДДЕРЖИВАЕТ СЛЕДУЮЩИЕ ПЛАГИНЫ:**
  * PlotSquared
* Описание: проверяет, находится ли игрок на участке (plot), на котором у него есть права.
* Пример:

```yaml
playerConditions:
    ifPlayerMustBeOnHisPlot: true
    ifPlayerMustBeOnHisPlotMsg: '' #<- Here is where you will add the custom message
```

* Обязательно: НЕТ (По умолчанию: false)

### ifCursorDistance

* Описание: проверяет, свободно направление, куда смотрит игрок, или оно заблокировано
* Пример:

```yaml
 playerConditions:
  ifCursorDistance: '>5'
  ifCursorDistanceMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * В `">5"`, если воздух присутствует дальше 5 блоков перед вами, активатор сработает
  * В `"<5"`, если есть блоки воздуха на 5 блоках перед вами, активатор не сработает
* Обязательно: НЕТ

![](https://media.ssomar.com/m/docs-img-giphy-mke7zyoe63jbpg2239.gif)

### ifLightLevel <a href="#iflightlevel" id="iflightlevel"></a>

* Описание: проверяет, находится ли игрок в месте с правильным уровнем освещённости
* Пример:

```yaml
playerConditions:
  ifLightLevel: ==5
  ifLightLevelMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если значение `<5`, активатор сработает только если уровень освещённости в месте игрока ниже 5
  * Если значение `<=5`, активатор сработает только если уровень освещённости в месте игрока 5 и ниже.
  * Если значение `==13`, активатор сработает только если уровень освещённости в месте игрока равен 13.
  * Если значение `>5`, активатор сработает только если уровень освещённости в месте игрока выше 5.
  * Если значение `>=5`, активатор сработает только если уровень освещённости в месте игрока 5 и выше.
* Обязательно: НЕТ
* Дополнительная информация: вы можете изменить сообщение об ошибке, добавив это в файл: `ifLightLevelMsg: "&4&lError you need...."` или прямо в игре.

​Если значение `==13`, активатор сработает только если уровень освещённости в месте игрока равен 13.

![Если значение ==13, активатор сработает только если уровень освещённости в месте игрока равен 13.
Сообщение в чате выполняет SENDMESSAGE %player\_light\_level% для отображения уровня освещённости в моём местоположении](https://media.ssomar.com/m/docs-img-giphy-krdtyjimugaf88pewk.gif)

### ifPlayerExp

* Описание: проверяет, есть ли у игрока указанное количество очков опыта.
* Пример:

```yaml
playerConditions:
    ifPlayerExp: <8
    ifPlayerExpMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если значение `<120`, активатор сработает только если очки опыта игрока ниже 120
  * Если значение `<=96`, активатор сработает только если очки опыта игрока 96 и ниже.
  * Если значение `==13`, активатор сработает только если очки опыта игрока равны 13.
  * Если значение `>696`, активатор сработает только если очки опыта игрока выше 696.
  * Если значение `>=45`, активатор сработает только если очки опыта игрока 45 и выше.
* Обязательно: НЕТ

### ifPlayerLevel

* Описание: проверяет, есть ли у игрока указанное количество уровней опыта.
* Пример:

```yaml
playerConditions:
    ifPlayerLevel: <76
    ifPlayerLevelMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если значение `<700`, активатор сработает только если очки опыта игрока ниже 700
  * Если значение `<=1296`, активатор сработает только если очки опыта игрока 1296 и ниже.
  * Если значение `==153`, активатор сработает только если очки опыта игрока равны 5.
  * Если значение `>420`, активатор сработает только если очки опыта игрока выше 420.
  * Если значение `>=99`, активатор сработает только если очки опыта игрока 99 и выше.
* Обязательно: НЕТ

### ifPlayerFoodLevel

* Описание: проверяет, есть ли у игрока указанное количество сытости
* Пример:

```yaml
playerConditions:
    ifPlayerFoodLevel: '>=12'
    ifPlayerFoodLevelMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если значение `<10`, активатор сработает только если сытость игрока ниже 10
  * Если значение `<=10`, активатор сработает только если сытость игрока 10 и ниже.
  * Если значение `==10`, активатор сработает только если сытость игрока равна 10.
  * Если значение `>10`, активатор сработает только если сытость игрока выше 10.
  * Если значение `>=10`, активатор сработает только если сытость игрока 10 и выше.
* Обязательно: НЕТ

### ifPlayerHealth

* Описание: проверяет, есть ли у игрока указанное количество здоровья
* Пример:

```yaml
playerConditions:
    ifPlayerHealth: ==20
    ifPlayerHealthMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если значение `<10`, активатор сработает только если здоровье игрока ниже 10
  * Если значение `<=10`, активатор сработает только если здоровье игрока 10 и ниже.
  * Если значение `==10`, активатор сработает только если здоровье игрока равно 20.
  * Если значение `>10`, активатор сработает только если здоровье игрока выше 10.
  * Если значение `>=10`, активатор сработает только если здоровье игрока 10 и выше.
* Обязательно: НЕТ

![Демонстрация условия здоровья](https://media.ssomar.com/m/docs-img-giphy-lmfxm0llvaeufjsj80.gif)

_Если значение `<=10`, активатор сработает только если здоровье игрока 10 и ниже._

### ifPlayerSpeed

* Описание: проверяет величину скорости игрока (скорость движения).
* Пример:

```yaml
playerConditions:
    ifPlayerSpeed: '>=0.1'
    ifPlayerSpeedMsg: ''
```

* Примеры ситуаций:
  * Если значение `>=0.1`, активатор сработает только если игрок двигается.
  * Если значение `>=0.3`, активатор сработает только если игрок бежит или двигается быстро.
  * Если значение `==0`, активатор сработает только если игрок стоит на месте.
* Обязательно: НЕТ

### ifPosX

* Описание: проверяет, находится ли игрок на указанном уровне X.
* Пример:

```yaml
playerConditions:
    ifPosX: <76
    ifPosXMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если значение `<700`, активатор сработает только если значение X-позиции игрока ниже 700
  * Если значение `<=1296`, активатор сработает только если значение X-позиции игрока 1296 и ниже.
  * Если значение `==153`, активатор сработает только если значение X-позиции игрока равно 5.
  * Если значение `>420`, активатор сработает только если значение X-позиции игрока выше 420.
  * Если значение `>=99`, активатор сработает только если значение X-позиции игрока 99 и выше.
* Обязательно: НЕТ

### ifPosY

* Описание: проверяет, находится ли игрок на указанном уровне Y.
* Пример:

```yaml
playerConditions:
    ifPosY: <76
    ifPosYMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если значение `<700`, активатор сработает только если значение Y-позиции игрока ниже 700
  * Если значение `<=1296`, активатор сработает только если значение Y-позиции игрока 1296 и ниже.
  * Если значение `==153`, активатор сработает только если значение Y-позиции игрока равно 5.
  * Если значение `>420`, активатор сработает только если значение Y-позиции игрока выше 420.
  * Если значение `>=99`, активатор сработает только если значение Y-позиции игрока 99 и выше.
* Обязательно: НЕТ

### ifPosZ

* Описание: проверяет, находится ли игрок на указанном уровне Z.
* Пример:

```yaml
playerConditions:
    ifPosZ: <76
    ifPosZMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если значение `<700`, активатор сработает только если значение Z-позиции игрока ниже 700
  * Если значение `<=1296`, активатор сработает только если значение Z-позиции игрока 1296 и ниже.
  * Если значение `==153`, активатор сработает только если значение Z-позиции игрока равно 5.
  * Если значение `>420`, активатор сработает только если значение Z-позиции игрока выше 420.
  * Если значение `>=99`, активатор сработает только если значение Z-позиции игрока 99 и выше.
* Обязательно: НЕТ

### ifNearbyEntityCount

* Описание: проверяет количество сущностей в радиусе 10 блоков вокруг игрока.
* Пример:

```yaml
playerConditions:
    ifNearbyEntityCount: '>=3'
    ifNearbyEntityCountMsg: ''
```

* Примеры ситуаций:
  * Если значение `>=3`, активатор сработает только если рядом с игроком есть хотя бы 3 сущности.
  * Если значение `==0`, активатор сработает только если игрок один и рядом нет сущностей.
  * Учитываются все типы сущностей (мобы, игроки, выпавшие предметы и т. д.).
* Обязательно: НЕТ

### ifNearbyPlayerCount

* Описание: проверяет количество игроков в радиусе 10 блоков вокруг игрока.
* Пример:

```yaml
playerConditions:
    ifNearbyPlayerCount: '>=1'
    ifNearbyPlayerCountMsg: ''
```

* Примеры ситуаций:
  * Если значение `>=1`, активатор сработает только если рядом есть хотя бы 1 другой игрок.
  * Если значение `==0`, активатор сработает только если в пределах 10 блоков нет других игроков.
  * В отличие от ifNearbyEntityCount, здесь учитываются только игроки, а не мобы или другие сущности.
* Обязательно: НЕТ

### ifHasPermission - Not

* Описание: проверяет, есть ли (или нет) у игрока указанное право (permission).
* Пример:

```yaml
playerConditions:   
    ifHasPermission:
    - test.ei
    ifHasPermissionMsg: '' #<- Here is where you will add the custom message.
    ifNotHasPermission:
    - test.ei
    ifNotHasPermissionMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если у игрока есть право `custom.jump.yes`, активатор сработает. Если у игрока нет этого права, он не сработает.
  * **В этом GIF фактическое условие не используется для корректного отображения поведения условия. Когда вы реально используете это условие, конкретная ошибка зависит от вас**
* Обязательно: НЕТ

:::warning
**Для проверки лучше не быть OP, так как если вы OP, у вас есть все права**
:::

![](https://media.ssomar.com/m/docs-img-giphy-iti1b991tskaavjoy7.gif)

### ifHasTag - Not

* Описание: проверяет, есть ли у игрока выбранный тег.
* Пример:

```yaml
    playerConditions:
      ifHasTag:
      - thisisthenameofmytag
      ifHasTagMsg: ''
      ifNotHasTag:
      - thisisthenameofmytag
      ifNotHasTagMsg: ''
```

### ifTargetBlock - Not

* Описание: проверяет, выбирает ли игрок (или не выбирает) указанный блок.
* Пример:

```yaml
playerConditions:
    ifTargetBlock:
    - SAND
    ifTargetBlockMsg: '' #<- Here is where you will add the custom message.
    ifNotTargetBlock:
    - DIRT
    ifNotTargetBlockMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если игрок наводит курсор на песок, активатор сработает.
* Обязательно: НЕТ

![](https://media.ssomar.com/m/docs-img-giphy-hgontsuwxflzmtgxny.gif)

### ifIsInTheBlock - Not

* Описание: проверяет, находится ли игрок (или не находится) в блоке.
* Пример:

```yaml
playerConditions:
    ifIsInTheBlock:
     material0:
       material: COBWEB
    ifIsInTheBlockMsg: '' #<- Here is where you will add the custom message.
    ifIsNotInTheBlock:
     material0:
       material: WATER
       tags: '{level:0}'
    ifIsNotInTheBlockMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если игрок находится в COBWEB (головой или ногами), активатор сработает.
  * Пока игрок находится не более чем на 1 блок выше блока, в котором он находится, активатор сработает
* Обязательно: НЕТ (По умолчанию: false)

Спецификации тегов смотрите в этом списке:

[https://minecraft.fandom.com/wiki/Block_states](https://minecraft.fandom.com/wiki/Block_states)

### ifIsOnTheBlock - Not

* Описание: проверяет, стоит ли игрок (или не стоит) на блоке.
* Пример:

```yaml
playerConditions:
    ifIsOnTheBlock:
        blocks:
        - EXECUTABLEBLOCKS:FREE_HUT
        - DIAMOND_BLOCK
```

* Примеры ситуаций:
  * Если под ногами игрока камень, активатор сработает.
  * Пока игрок находится не более чем на 1 блок выше блока, на котором он стоит, активатор сработает
* Обязательно: НЕТ (По умолчанию: false)

![](https://media.ssomar.com/m/docs-img-giphy-774fpgzucmhox69sww.gif)

<details>

<summary>Вы можете добавить группу блоков, вот эти группы:</summary>

```
    ALL_CHESTS,
    ALL_FURNACES,
    ALL_PLANKS,
    ALL_LOGS,
    ALL_WOODS,
    ALL_ORES,
    ALL_WOOLS,
    ALL_SLABS,
    ALL_STAIRS,
    ALL_FENCES,
    ALL_SAPLINGS,
    ALL_CROPS,
    ALL_DOORS,
    ALL_TRAPDOORS,
    ALL_BEDS,
    ALL_TERRACOTTA,
    ALL_NORMAL_TERRACOTTA,
    ALL_GLAZED_TERRACOTTA,
    ALL_CONCRETE,
    ALL_GLASS,
    ALL_STAINED_GLASS,
    ALL_SHULKER_BOXES;
```

</details>

Спецификации тегов смотрите в этом списке:

[https://minecraft.fandom.com/wiki/Block_states](https://minecraft.fandom.com/wiki/Block_states)

:::info
Поддерживает блоки IA и EB
:::

### ifPlayerMounts - Not

* Описание: проверяет, оседлал ли игрок (или не оседлал) "выбранную сущность(и)"
* Пример:

```yaml
playerConditions:
    ifPlayerMounts:
    - COW
    - SILVERFISH
    - FOX
    ifPlayerMountsMsg: '&4&l&o[ExecutableItems] &cYou must mount on a specific entity to active the activator: &6%activator% &cof this item!'
    
    ifPlayerNotMounts:
    - PIG
    ifPlayerNotMountsMsg: '&4&l&o[ExecutableItems] &cdont mount pigs'
```

### ifInBiome - Not

* Описание: проверяет, находится ли игрок (или не находится) в указанном биоме.
* Пример:

```yaml
playerConditions:
    ifInBiome:
    - TAIGA
    - EXTREME_HILLS
    ifInBiomeMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInBiome:
    - EXTREME_HILLS
    ifNotInBiomeMsg: '' #<- Here is where you will add the custom message.
```

*   Примеры ситуаций:

    * Если игрок находится в биоме Березовый лес (Birch Forest) и этот биом указан в списке миров в условии `ifInBiome:`, активатор сработает.

[Биом](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html)

* Обязательно: НЕТ

![](https://media.ssomar.com/m/docs-img-giphy-heszwx2lktnut8abdx.gif)

### ifInRegion - Not

* Описание: проверяет, находится ли игрок (или не находится) в указанном регионе (регион WorldGuard).
* Пример:

```yaml
playerConditions:
    ifInRegion:
    - area1
    ifInRegionMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInRegion:
    - mySpawnRegion
    ifNotInRegionMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если игрок находится в регионе "area1" и регион "area1" указан в списке миров в условии `ifInRegion:`, активатор сработает.
* Обязательно: НЕТ

![](https://media.ssomar.com/m/docs-img-giphy-rn75fb0fgshrjizbce.gif)

### ifInWorld - Not

* Описание: проверяет, находится ли игрок (или не находится) в указанном мире.
* Пример:

```yaml
playerConditions:
    ifInWorld:
    - world_nether
    ifInWorldMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInWorld:
    - world_the_end
    ifNotInWorldMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если игрок находится в Нижнем мире (nether) и этот мир указан в списке миров в условии `ifInWorld:`, активатор сработает.
* Обязательно: НЕТ

![](https://media.ssomar.com/m/docs-img-giphy-zghtf0hlk1npsywmnz.gif)

### ifPlayerHasEffect

* Описание: проверяет, есть ли у игрока эффект(ы).
* Пример:

```yaml
playerConditions:
    ifPlayerHasEffect:
    - "SPEED:0"        <- (Format: "EFFECT:MINIMAL_REQUIRED_AMPLIFIER") 
    ifPlayerHasEffectMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если у игрока есть speed с **амплификатором не менее 0**, активатор сработает
* Список всех эффектов: [PotionEffectType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
* Обязательно: НЕТ

### ifPlayerNotHasEffect

* Описание: проверяет, нет ли у игрока эффекта(ов).
* Пример:

```yaml
playerConditions:
    ifPlayerNotHasEffect:
    - SPEED:2 # if the player has speed 1 = okay, but if has speed 2 or above, invalid
    ifPlayerNotHasEffectMsg: '&4&l&o[ExecutableItems] &cYou have an effect that you shouldn''t have to active the activator: &6%activator% &cof this item!'
    ifPlayerNotHasEffectCE: false
```

### ifCanBreakTargetedBlock

* Описание: проверяет, может ли игрок сломать выбранный блок. Если у активатора есть блок (ломание блока, установка блока, клик по блоку...), проверяется этот блок; в противном случае проверяется блок, на который смотрит игрок (максимум 5 блоков).
* Пример:

```yaml
playerConditions:
    ifCanBreakTargetedBlock: true
```

:::info
Поддерживает GriefPrevention, IridiumSkyblock, SuperiorSkyblock, BentoBox, Lands, Worldguard, Towny, ProtectionStones, Residence
:::

### ifPlayerHasEffectEquals

* Описание: проверяет, есть ли у игрока эффект(ы). **АМПЛИФИКАТОР ДОЛЖЕН СОВПАДАТЬ ТОЧНО**
* Пример:

```yaml
playerConditions:
    ifPlayerHasEffectEquals:
    - "SPEED:1"        #<- (Format: "EFFECT:REQUIRED_AMPLIFIER") 
    ifPlayerHasEffectEqualsMsg: '' #<- Here is where you will add the custom message.
```

* Примеры ситуаций:
  * Если у игрока есть speed с **амплификатором 1**, активатор сработает
* Список всех эффектов: [PotionEffectType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
* Обязательно: НЕТ

### ifPlayerHasExecutableItems - Not

* Описание: проверяет, есть ли (или нет) у игрока указанный ExecutableItems.
* Пример:

```yaml
playerConditions:
      ifHasExecutableItems:
        condition1:
          multi-choices:
            '1':
              executableItem: test1
              amount: 1
              detailedSlots:
              - 38
            '2':
              executableItem: test2
              amount: 1
              detailedSlots:
              - 38
            '3':
              executableItem: test3
              amount: 1
              detailedSlots:
              - 38
        condition2:
          executableItem: ddx
          amount: 1
          detailedSlots:
          - 40
      ifHasExecutableItemsMsg: war
      ifHasNotExecutableItems:
        hasExecutableItem0:
          executableItem: Leto2025_Srdcova10
          amount: 1
          detailedSlots: []
      ifHasNotExecutableItemsMsg: famine
```

* Пример выше работает так:
  * У вас должен быть предмет ei с id либо "test1", "test2", либо "test3" в слоте 38, тогда активатор выполняется
  * У вас должен быть предмет ei с id "ddx" в слоте 40
* Обязательно: НЕТ

![](https://media.ssomar.com/m/docs-img-imgur-kaww8n0.png)

:::info
Правильно копируйте индекс из примера, некоторые пользователи обращались в поддержку, и все они неправильно скопировали формат.
:::

### ifPlayerHasItem - Not

* Описание: проверяет, есть ли у игрока определённые предметы
* Пример:

```yaml
playerConditions:
    ifHasItems:
        condition1:
          multi-choices:
            '1':
              material: DIAMOND_HELMET
              amount: 1
              detailedSlots:
              - 39
            '2':
              material: IRON_HELMET
              amount: 1
              detailedSlots:
              - 39
        condition2:
          material: DIAMOND_CHESTPLATE
          amount: 1
          detailedSlots:
          - 38
    ifHasItemMsg: '' #<- Here is where you will add the custom message.
    
    ifHasNotItems:
        hasItem0:
          material: STONE
          amount: 32
          detailedSlots:
          - -1 #<- -1 means main hand
    ifHasNotItemMsg: '&cYou should not have more than 32 stones in your main hand !'
```

* Примеры ситуаций:
  * Если алмазный шлем находится в слоте 39, активатор сработает
* Обязательно: НЕТ
