---
description: >-
  Описание функций активатора ExecutableItems: кулдауны, отмена событий и
  требуемые ресурсы (предметы, деньги, опыт, мана) в SPlugins.
source_hash: a103e5315ef03316
translated_at: '2026-10-03T10:53:37.790Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### Отображаемое имя активатора

* Информация: строковое значение отображаемого имени активатора, особой практической пользы не несет, используется разработчиком для того, чтобы отличать один активатор от другого. Также оно отображается в стандартном сообщении "timeLeft" внутри файла locale.yml.
* Пример: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    name: '&eThor activator'
```

### Изменение usage активатора <CustomTag type="premium" />

* Информация: очень важная функция, значение usage предмета будет изменено на это целочисленное значение. То есть, если это значение положительное, usage увеличится, а если отрицательное, usage уменьшится.
* Пример: (увеличение значения usage на 1 каждый раз при срабатывании этого активатора)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    usageModification: 1
```

### Изменение переменных

* Информация: это список изменений переменных, применяемых к переменным внутри вашего предмета. Полезно, например, для увеличения значения переменной, перезаписи старого значения переменной новым значением и т.д.
  * `variableName`: имя переменной, на которую нацелено variableModification
  * `type`: тип используемого variableModification
    * SET: перезаписывает старое значение переменной и устанавливает значение изменения.
    * ADD: применяет математическую операцию к текущему значению переменной, используя значение изменения. Переменная должна быть типа NUMBER. Если значение изменения положительное, значение увеличится, если отрицательное, уменьшится.
    * LIST\_ADD: применяется к переменной типа LIST, добавляет значение изменения в список переменной.
    * LIST\_CLEAR: применяется к переменной типа LIST, очищает список переменной.
    * LIST\_REMOVE: применяется к переменной типа LIST, удаляет значение изменения из списка переменной.
  * `modification`: значение изменения. Применяется к переменной согласно типу изменения.
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of targethp to 20
        variableName: targethp 
        type: SET
        modification: 20
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by increasing it on 1
        variableName: hit
        type: MODIFICATION
        modification: 1
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by decreasing it on 1
        variableName: durability
        type: MODIFICATION
        modification: -1
```

* Будьте осторожны при использовании здесь плейсхолдеров! Проблемы в этом нет, просто убедитесь, что возвращаемое значение является NUMBER, иначе вам потребуется использовать функции STRING. Например, давайте обновим variableModification с помощью другой переменной, про которую мы знаем, что она возвращает NUMBER.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the bullets to the value of the variable max bullets, as if I was reloading a gun
        variableName: currentBullets
        type: SET
        modification: '%var_maxbullets_int%'
```

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the current bullets by the variable bullets per shot, so its decreasing our bullets depending on the amount of bullets we are firing
        variableName: currentBullets
        type: MODIFICATION
        modification: '-%var_bulletspershot%'
```

### cancelEvent

* Информация: булево значение, определяющее, будет ли отменено событие, связанное с активатором.
  * Это может быть сложно понять, думаю, это одна из вещей, которую большинство людей не понимает, но чтобы объяснить это, нужно знать, что каждый ACTIVATOR связан с событием Minecraft, то есть сначала происходит это событие, а затем срабатывает ACTIVATOR. Если мы включаем cancelEvent, функцию активатора, это значит, что событие происходит, затем почти одновременно активатор срабатывает и отменяет событие, то есть активатор продолжает выполнять все включенные в нем функции, но само событие не происходит, оно отменяется. Например:
    * Если активатор PLAYER\_HIT\_PLAYER и мы включаем cancelEvent, игрок не сможет ударить другого игрока, так как все удары отменяются/игнорируются.
    * Если активатор PLAYER\_BLOCK\_BREAK и мы включаем cancelEvent, игрок не сможет ломать блоки, так как событие отменяется/игнорируется.
* Пример: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BLOCK_BREAK
    cancelEvent: true
```

### noActivatorRunIfTheEventIsCancelled

* Информация: булево значение, которое при включении предотвращает срабатывание активатора, если другой плагин уже отменил событие, вызывающее его.
  * Это полезно, когда у вас установлены плагины вроде WorldGuard, которые отменяют события урона (например, в зонах без PvP), или другие ExecutableItems, которые отменяют события урона (например, ботинки с PLAYER\_RECEIVE\_HIT\_GLOBAL + cancelEvent). Без этой функции активаторы вроде PLAYER\_BEFORE\_DEATH все равно срабатывали бы, даже если урон был отменен, потому что они реагируют на изначальный расчет урона, а не на конечный результат.
  * Распространенный пример использования: кастомный предмет Totem of Undying, использующий PLAYER\_BEFORE\_DEATH. Без включения этой функции тотем активировался бы и расходовался даже тогда, когда игрок находится в защищенной WorldGuard зоне, где урон отменен, впустую расходуя предмет. Включение этой функции гарантирует, что тотем активируется только при реальном смертельном уроне.
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BEFORE_DEATH
    noActivatorRunIfTheEventIsCancelled: true
```

### silenceOutput

* Информация: булево значение, благодаря которому все команды, выполняемые через функции команд (playerCommands, blockCommands, entityCommands и targetCommands), не будут выводиться в **консоль**.
  * Например, использование стандартной ванильной команды Minecraft effect give \[...] обычно выводит в консоль сообщение формата: "Applied effect strength to \<playerName>", так вот, чтобы отключить этот вывод, можно включить эту функцию    
* Пример: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activator    
    playerCommands:
    - effect give %player% strength 5 5
    silenceOutput: true
```

* Важно понимать, что эта функция создана для отключения вывода ванильных команд, если вы используете команду другого плагина и она выводит сообщение в консоль, это не наша задача это исправлять, другой плагин должен предоставить вам способ скрыть эти сообщения. В любом случае, поскольку мы заботимся о вас, у вас есть возможность настраивать скрываемые сообщения, чтобы иметь стандартные сообщения, скрытые через silenceOutput, плюс пользовательские сообщения, которые вы хотите добавить. Этот процесс обрабатывается через конфигурационный файл Score, подробнее здесь и как это сделать здесь [General config](/tools-for-all-plugins-score/score/general-config).

## Кулдаун

### Кулдаун игрока

* Информация: настройки кулдауна это кулдаун, применяемый к игроку, который вызвал срабатывание этого активатора, для этого активатора.
* Если активатор PLAYER\_RIGHT\_CLICK, в нем есть команды \[] и кулдаун составляет 30 секунд, то если игрок активирует этот активатор, ему нужно будет подождать 30 секунд, чтобы снова его активировать. Это не мешает другому игроку активировать его в течение этих 30 секунд, пока этот игрок сам не находится на кулдауне. Это функция для каждого отдельного игрока
  * `cooldown`: целочисленное значение, представляющее продолжительность кулдауна для этого активатора.
  * `isCooldownInTicks`: булево значение, устанавливающее время кулдауна в тиках (20 тиков = 1 секунда)
  * `cooldownMsg`: строковое значение, отображаемое, когда игрок пытается активировать активатор, находящийся на кулдауне
  * `displayCooldownMessage`: булево значение, разрешающее или запрещающее отображение сообщения cooldownMsg, если игрок пытается активировать активатор, находясь на кулдауне.
    * Доступные плейсхолдеры:
      * %time% -> весь кулдаун в секундах
      * %time\_H% -> часть кулдауна в часах
      * %time\_M% -> часть кулдауна в минутах
      * %time\_S% -> часть кулдауна в секундах 
  * `cancelEventIfInCooldown`: булево значение, отменяющее событие активатора, если игрок находится на кулдауне. Это означает, что если активатор PLAYER\_HIT\_ENTITY, то пока игрок находится на кулдауне, все события PLAYER\_HIT\_ENTITY этого игрока будут отменены и, следовательно, проигнорированы, тем самым лишая игрока возможности атаковать сущностей (напоминание: этот активатор нацелен на всех сущностей, кроме игроков)
  * `pauseWhenOffline`: булево значение, приостанавливающее кулдаун, если игрок не в сети. Для лучшего понимания: если это значение false, время кулдауна не останавливается, поэтому игрок может выйти с сервера, дождаться окончания кулдауна и зайти снова, после чего сможет снова активировать активатор. Но если эта функция включена и игрок вышел с сервера во время кулдауна, при повторном входе у него будет то же оставшееся время кулдауна, что было на момент выхода.
  * `pausePlaceholdersConditions`: похоже на pauseWhenOffline, но приостановка зависит от определенных placeholdersConditions. Пример использования: приостановка кулдауна, если у игрока VIP-ранг. То есть VIP-ранг получает доступ к этой возможности.
  * `enableVisualCooldown`: включает визуальный кулдаун для предмета.
* Пример: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    cooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      pauseWhenOffline: false
      pausePlaceholdersConditions: {}
      enableVisualCooldown: false
```

### Глобальный кулдаун

* Информация: та же идея, что и у кулдауна, но вместо кулдауна, применяемого к игроку, это глобальный кулдаун, применяемый ко всем игрокам. Это означает, что если кто-то активирует активатор и у него глобальный кулдаун в 30 секунд, то никто не сможет использовать его, пока эти 30 секунд не истекут. Обладает теми же функциями, что и обычный кулдаун.
  * `cooldown`: целочисленное значение, представляющее продолжительность кулдауна для этого активатора.
  * `isCooldownInTicks`: булево значение, устанавливающее время кулдауна в тиках (20 тиков = 1 секунда)
  * `cooldownMsg`: строковое значение, отображаемое, когда игрок пытается активировать этот активатор, находящийся на кулдауне
  * `displayCooldownMessage`: булево значение, разрешающее или запрещающее отображение сообщения cooldownMsg, если игрок пытается активировать активатор, находясь на кулдауне.
    * Доступные плейсхолдеры:
      * %time% -> весь кулдаун в секундах
      * %time\_H% -> часть кулдауна в часах
      * %time\_M% -> часть кулдауна в минутах
      * %time\_S% -> часть кулдауна в секундах 
  * `cancelEventIfInCooldown`: булево значение, отменяющее событие активатора, если игрок находится на кулдауне. Это означает, что если активатор PLAYER\_HIT\_ENTITY, то пока игрок находится на кулдауне, все события PLAYER\_HIT\_ENTITY этого игрока будут отменены и, следовательно, проигнорированы, тем самым лишая игрока возможности атаковать сущностей (напоминание: этот активатор нацелен на всех сущностей, кроме игроков)
  * `enableVisualCooldown`: включает визуальный кулдаун для предмета.
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    globalCooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      enableVisualCooldown: false
```

## Required features (требуемые функции) <CustomTag type="premium" />

Этот раздел предназначен для настройки функций, связанных с требуемыми условиями для того, чтобы иметь возможность активировать активатор. Это означает, что если событие происходит, активатор сработает только если игрок соответствует этой требуемой настройке. Предметы будут израсходованы в процессе.

* Если вы хотите, чтобы предметы не расходовались, не используйте функцию "required", а используйте условия (conditions), которые являются просто условиями и ничего не расходуют.

### requiredExecutableItems <CustomTag type="premium" />

* Информация: эта функция позволяет задать активатору в качестве требования ExecutableItem(s). Если игрок соответствует этому требованию, требование будет израсходовано, и активатор сработает.
  * `cancelEventIfError`: булево значение, представляющее, будет ли отменено событие, если у игрока нет требования.
    * Это означает, например, допустим, происходит событие PLAYER\_HIT\_ENTITY, но у игрока нет требований для активации активатора, если эта функция включена, событие PLAYER\_HIT\_ENTITY будет отменено, поэтому, хотя игрок и кликает/бьет сущность, сущность не получает урона, потому что на самом деле событие не происходит, так как оно отменено.
  * `errorMessage`: строковое сообщение, которое будет отправлено игроку, если игрок не соответствует требованию.
  * `executableItem`: ID ExecutableItem, необходимый в качестве требования
  * `amount`: целочисленное количество предметов, необходимых в качестве требования.
  * `usageConditions`: необязательное строковое условие в формате `(==, !=, >, <, >=, <=){number}` для условия usage ExecutableItem.
    * Это означает, что если условие >=5, то требование состоит в том, что выбранный ExecutableItem должен находиться в инвентаре игрока как требование, но также должен иметь usage больше или равный значению 5.
* Пример:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExecutableItems:
      requiredEI0: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: moon
        amount: 1
        usageConditions: '>=5'
      requiredEI1: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: sun
        amount: 1
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredItems <CustomTag type="premium" />

* Информация: эта функция позволяет задать активатору в качестве требования ванильный предмет(ы). Если игрок соответствует этому требованию, требование будет израсходовано, и активатор сработает.
  * `cancelEventIfError`: булево значение, представляющее, будет ли отменено событие, если у игрока нет требования.
    * Это означает, например, допустим, происходит событие PLAYER\_HIT\_ENTITY, но у игрока нет требований для активации активатора, если эта функция включена, событие PLAYER\_HIT\_ENTITY будет отменено, поэтому, хотя игрок и кликает/бьет сущность, сущность не получает урона, потому что на самом деле событие не происходит, так как оно отменено.
  * `errorMessage`: строковое сообщение, которое будет отправлено игроку, если игрок не соответствует требованию.
  * `material`: ванильный MATERIAL, необходимый в качестве требования.
  * `amount`: целочисленное количество предметов, необходимых в качестве требования.
  * `notExecutableItem`: булево значение, определяющее, может ли требование быть выполнено ExecutableItem или нет.
    * Это означает, что если требование STONE и эта функция не включена, то требование будет удовлетворено ванильным(и) STONE(ами) и ExecutableItem(ами) с материалом STONE, и они будут израсходованы. Если вы не хотите, чтобы это происходило, включите эту функцию.
* Пример:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredItems:
      requiredItem0: # requiredItem ID, you can create as many requiredItem on the requiredItems
        material: STONE
        amount: 1
        notExecutableItem: true
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredMoney <CustomTag type="premium" />

* Информация: для этой функции требуется плагин под названием "Vault". Эта функция позволяет задать активатору в качестве требования деньги из Vault. Если игрок соответствует этому требованию, требование будет израсходовано, и активатор сработает.
  * `cancelEventIfError`: булево значение, представляющее, будет ли отменено событие, если у игрока нет требования.
    * Это означает, например, допустим, происходит событие PLAYER\_HIT\_ENTITY, но у игрока нет требований для активации активатора, если эта функция включена, событие PLAYER\_HIT\_ENTITY будет отменено, поэтому, хотя игрок и кликает/бьет сущность, сущность не получает урона, потому что на самом деле событие не происходит, так как оно отменено.
  * `errorMessage`: строковое сообщение, которое будет отправлено игроку, если игрок не соответствует требованию.
  * `requiredMoney`: значение типа float, представляющее количество денег, необходимых в качестве требования.
* Пример:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMoney:
      requiredMoney: 1200.0
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredLevel <CustomTag type="premium" />

* Информация: эта функция позволяет задать активатору в качестве требования ванильные уровни опыта. Если игрок соответствует этому требованию, требование будет израсходовано, и активатор сработает. Не путайте уровни опыта с опытом, подробнее здесь [Experience](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`: булево значение, представляющее, будет ли отменено событие, если у игрока нет требования.
    * Это означает, например, допустим, происходит событие PLAYER\_HIT\_ENTITY, но у игрока нет требований для активации активатора, если эта функция включена, событие PLAYER\_HIT\_ENTITY будет отменено, поэтому, хотя игрок и кликает/бьет сущность, сущность не получает урона, потому что на самом деле событие не происходит, так как оно отменено.
  * `errorMessage`: строковое сообщение, которое будет отправлено игроку, если игрок не соответствует требованию.
  * `requiredLevel`: целочисленное значение, представляющее количество ванильных уровней опыта Minecraft, необходимых в качестве требования.
* Пример:

```yaml
 activators:  
  activator1: # Activator ID, you can create as many activators on the activator
     requiredLevel:
      requiredLevel: 50
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### requiredExperience <CustomTag type="premium" />

* Информация: эта функция позволяет задать активатору в качестве требования ванильный опыт Minecraft. Если игрок соответствует этому требованию, требование будет израсходовано, и активатор сработает. Не путайте опыт с уровнями опыта, это разные вещи, подробнее здесь [Experience](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`: булево значение, представляющее, будет ли отменено событие, если у игрока нет требования.
    * Это означает, например, допустим, происходит событие PLAYER\_HIT\_ENTITY, но у игрока нет требований для активации активатора, если эта функция включена, событие PLAYER\_HIT\_ENTITY будет отменено, поэтому, хотя игрок и кликает/бьет сущность, сущность не получает урона, потому что на самом деле событие не происходит, так как оно отменено.
  * `errorMessage`: строковое сообщение, которое будет отправлено игроку, если игрок не соответствует требованию.
  * `requiredExperience`: целочисленное значение, представляющее количество опыта, необходимого в качестве требования.
* Пример:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExperience:
      requiredExperience: 20
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### RequiredMana <CustomTag type="premium" />

* Информация: эта функция позволяет задать активатору в качестве требования ману из [**AureliumSkills**](https://www.spigotmc.org/resources/auraskills.81069/), [**MMOCore**](https://www.spigotmc.org/resources/%E2%AD%90-mmocore-%E2%AD%90-classes-skills-levels-skill-trees-professions-mana-waypoints.70575/) и [**AuraSkills**](https://www.spigotmc.org/resources/auraskills.81069/). Если игрок соответствует этому требованию, требование будет израсходовано, и активатор сработает.
  * `cancelEventIfError`: булево значение, представляющее, будет ли отменено событие, если у игрока нет требования.
    * Это означает, например, допустим, происходит событие PLAYER\_HIT\_ENTITY, но у игрока нет требований для активации активатора, если эта функция включена, событие PLAYER\_HIT\_ENTITY будет отменено, поэтому, хотя игрок и кликает/бьет сущность, сущность не получает урона, потому что на самом деле событие не происходит, так как оно отменено.
  * `errorMessage`: строковое сообщение, которое будет отправлено игроку, если игрок не соответствует требованию.
  * `requiredMana`: целочисленное значение, представляющее количество маны, необходимой в качестве требования.
* Пример:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMana:
      requiredMana: 10
      errorMessage: '&c You dont meet the requirement'
```

:::info
Совместимо с AureliumSkills, MMOCore и AuraSkills
:::

### RequiredMagic (EcoSkills) <CustomTag type="premium" />

* Информация: эта функция позволяет задать активатору в качестве требования магию из [**EcoSkills**](https://www.spigotmc.org/resources/ecoskills-%E2%AD%95-addictive-mmorpg-skills-%E2%9C%85-create-skills-stats-effects-mana-%E2%9C%A8-plug-play.95541/). Если игрок соответствует этому требованию, требование будет израсходовано, и активатор сработает.
  * `cancelEventIfError`: булево значение, представляющее, будет ли отменено событие, если у игрока нет требования.
    * Это означает, например, допустим, происходит событие PLAYER\_HIT\_ENTITY, но у игрока нет требований для активации активатора, если эта функция включена, событие PLAYER\_HIT\_ENTITY будет отменено, поэтому, хотя игрок и кликает/бьет сущность, сущность не получает урона, потому что на самом деле событие не происходит, так как оно отменено.
  * `errorMessage`: строковое сообщение, которое будет отправлено игроку, если игрок не соответствует требованию.
  * `magicID`: ID магии в EcoSkills.
  * `amount`: количество магии данного magicID, необходимое в качестве требования.

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMagics:
      requiredMagic_0: # requiredMagic ID, you can create as many requiredMagic on the requiredMagics
        magicID: mana
        amount: 70
      errorMessage: '&c You dont meet the requirement'
```
