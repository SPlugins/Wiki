---
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
description: >-
  Полный список активаторов ExecutableItems для плагина SPlugins: описание,
  особенности и примеры использования каждого триггера.
source_hash: 0848802095c73aa9
translated_at: '2026-10-03T10:25:47.200Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Список активаторов

## Активаторы ExecutableItems

Здесь вы найдете список доступных активаторов с их описанием и некоторыми примерами. Активаторы позволяют выполнять кастомные действия, они могут иметь условия, запускать команды, иметь кулдаун и т.д.

:::warning
Активатор, чьё значение `option:` отсутствует в этом списке (опечатка, активатор другого плагина…), **отключён**: он никогда не срабатывает, и консоль показывает ошибку с ближайшими вариантами названий при загрузке предмета.
:::

Премиум активаторы помечены тегом: <CustomTag type="premium" />

Фичи активатора - это фичи, эксклюзивные для этого активатора.

### PLAYER\_ALL\_CLICK

* Инфо: Активатор срабатывает, когда игрок кликает ПКМ или ЛКМ по предмету.
  * Вы не можете различить клики, для этого используйте другие активаторы, такие как PLAYER\_RIGHT\_CLICK или PLAYER\_LEFT\_CLICK.
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Если typeTarget: ONLY\_BLOCK, эти фичи будут доступны.
    * [Block commands
      ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Примеры: 
  * Камень Врат (Warping Stone) - мгновенно телепортирует игрока на 5 блоков в направлении, куда он смотрит. Кулдаун: 10 секунд.
  * Тотем Исцеления (Healing Totem) - при клике лечит игрока на 4 сердца и даёт Regeneration I на 5 секунд.
  * Жезл Грома (Thunder Rod) - бьёт молнией по ближайшему врагу в радиусе 10 блоков.
  * Гравитационные Ботинки (Gravity Boots) - подбрасывает игрока на 3 блока вверх и отменяет урон от падения на 5 секунд.
  * Взрывная Руна (Explosive Rune) - создаёт небольшой взрыв на месте игрока, отбрасывающий ближайших мобов, но не повреждающий рельеф.

### PLAYER\_BED\_ENTER <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок кликает ПКМ по кровати и ложится в неё. Если игрок не ложится, активатор не сработает. Он не срабатывает во время сна, только при действии ложиться в кровать.
* Примеры:
  * Сон в Пустоте (Void Sleep) - при входе в кровать игрок телепортируется в кастомное измерение сна для исследования.
  * Лунный Щит (Lunar Shield) - даёт Absorption IV на 5 минут при сне на кровати, предоставляя временное дополнительное здоровье.
  * Проклятие Кошмара (Nightmare Curse) - призывает враждебного фантома над кроватью, когда игрок ложится, заставляя его сразиться перед спокойным сном.
  * Благословение Сновидца (Dreamwalker's Blessing) - при входе в кровать игрок получает Regeneration II до пробуждения (действие пробуждения - активатор PLAYER\_BED\_LEAVE).

### PLAYER\_BED\_LEAVE <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок покидает кровать. Будьте осторожны! Этот активатор срабатывает, когда игрок спит и наступает день, и он встаёт с кровати, но также срабатывает, если игрок встаёт с кровати посреди сна, это просто действие вставания с кровати.
  * Если вы хотите активировать только когда игрок спит, вы можете использовать этот активатор + worldCondition -> ifWorldTime, чтобы проверить, действительно ли сейчас день.
* Примеры:
  * Утренний Заряд (Morning Boost) - при вставании с кровати игрок получает Speed II и Haste II на 60 секунд, чтобы начать день заряженным энергией.
  * Предупреждение Фантома (Phantom's Warning) - если игрок встаёт с кровати до завершения сна, рядом появляется фантом как следствие.
  * Коллекционер Снов (Dream Collector) - при пробуждении игрок получает случайную зачарованную книгу как "память сна".
  * Прилив Энергии (Energy Surge) - при вставании с кровати полоса голода игрока полностью восстанавливается, имитируя хорошо отдохнувшую ночь.

### PLAYER\_BEFORE\_DEATH

* Инфо: Активатор срабатывает, когда игрок умирает, разница между этим активатором и активатором PLAYER\_DEATH в том, что этот активатор срабатывает первым, предоставляя возможность спасти игрока перед смертью.
  * Чтобы лучше понять: ванильные тотемы бессмертия срабатывают с помощью этого активатора для применения своих эффектов.
* Примеры:
  * Амулет Привязки Души (Soulbound Amulet) - когда игрок вот-вот умрёт, он вместо этого телепортируется на точку спавна с 2 сердцами и временным Regeneration II.
  * Щит Последнего Рубежа (Last Stand Shield) - при приближении смерти игрок получает Resistance III и Absorption на 5 секунд, давая шанс дать отпор.
  * Благословение Феникса (Phoenix Blessing) - когда смерть неизбежна, игрок взрывается пламенем, нанося урон огнём врагам, и возрождается с половиной здоровья.
  * Пакт Нежити (Undead Pact) - если игрок должен был умереть, он вместо этого возрождается с 3 сердцами, но не сможет использовать оружие 10 секунд.

### PLAYER\_BLOCK\_BREAK <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок ломает блок.
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Примеры:
  * Кирка Бустера Руды (Ore Booster Pickaxe) - при ломании блока руды есть 20% шанс удвоить дроп.
  * Топор Гнева Природы (Nature's Wrath Axe) - ломание бревна с 10% шансом призывает враждебного духа дерева (кастомный моб).
  * Проклятая Добыча (Cursed Excavation) - при ломании камня есть 5% шанс появления чешуйниц или наложения Mining Fatigue на 5 секунд.
  * Взрывной Молот Сноса (Explosive Demolition Hammer) - при ломании блоков окружающие блоки тоже ломаются, можно ломать 3x3.

### PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок блокирует удар от сущности с помощью щита.
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Примеры:
  * Шипованный Щит (Thorned Shield) - при блокировании атаки атакующий получает 3 сердца урона.
  * Защита Ударной Волны (Shockwave Defense) - успешная блокировка атаки отбрасывает всех ближайших врагов в радиусе 5 блоков.
  * Поглощение Энергии (Energy Absorption) - при блокировании атаки игрок восстанавливает 1 сердце и получает Resistance I на 3 секунды.
  * Ледяная Защита (Frozen Guard) - если атака заблокирована, атакующий замораживается на месте (Slowness IV) на 2 секунды.
  * Пылающий Контрудар (Blazing Counter) - блокировка атаки поджигает атакующего на 4 секунды.

### PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок блокирует удар от игрока с помощью щита.
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Примеры:
  * Щит Возмездия (Retribution Shield) - при блокировании атаки от игрока атакующий мгновенно разоружается, роняя оружие на землю.
  * Вампирская Защита (Vampiric Guard) - при успешном блокировании атаки игрок поглощает часть здоровья атакующего (исцеление на 2 сердца).
  * Пространственный Разлом (Dimensional Rift) - если атака игрока заблокирована, есть 20% шанс, что он телепортируется на 10 блоков в случайном направлении.
  * Адреналиновый Блок (Adrenaline Block) - при блокировании атаки игрок мгновенно получает Speed II и Strength I на 5 секунд, позволяя быстро контратаковать.

### PLAYER\_BLOCK\_PLACE <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок ставит блок.
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Примеры:
  * Живые Корни (Living Roots) - при посадке саженца есть 10% шанс, что он мгновенно вырастет в дерево.
  * Рунная Надпись (Runic Inscription) - установка каменного блока с 5% шансом превращает его в Рунный Камень, испускающий частицы и дающий ближайшим игрокам Haste I на 10 секунд.
  * При установке TNT есть небольшой шанс (5%), что он сразу же воспламенится, создавая неожиданный взрыв.

### PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок ломает щит другого игрока (обычно называемого целью).
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Примеры:
  * Разящий Удар (Shatter Strike) - при ломании щита игрока атакующий получает Strength I на 5 секунд, усиливая следующую атаку.
  * При уничтожении щита происходит небольшой взрыв на месте цели, отбрасывая её на 5 блоков.
  * Когда щит разбит, цель получает **Wither I** на **5 секунд**, медленно истощающий здоровье.
  * Пространственный Разлом (Dimensional Fracture) - при ломании щита игрока цель на мгновение телепортируется на 5 блоков вверх, дезориентируя её перед тем, как она упадёт обратно.

### PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок расчищает блок кистью.
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Примеры:
  * Проклятая Пыль (Cursed Dust) - если игрок расчищает подозрительный блок, есть 10% шанс временно ослепить его, когда вокруг него вырывается облако проклятой пыли.
  * Погребённые Богатства (Buried Riches) - расчистка блока с небольшим шансом награждает игрока золотым самородком или изумрудом, имитируя обнаружение потерянного сокровища.
  * Временные Отголоски (Temporal Echoes) - при расчистке блока-артефакта игрок слышит слабый шёпот из прошлого, намекающий на скрытые поблизости лорные секреты.

### PLAYER\_BUCKET\_ENTITY

* Инфо: Активатор срабатывает, когда игрок, используя ведро, зачерпывает сущность.
  * Пример: как вы помещаете рыбу в ведро с водой.
  * Если вы хотите, чтобы что-то срабатывало при "попытке" зачерпнуть сущность, которую нельзя зачерпнуть, этот активатор не сработает, используйте PLAYER\_CLICK\_ON\_ENTITY.
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Примеры:
  * Мгновенное Филе (Instant Fillet) - вместо захвата рыбы в ведро игрок мгновенно получает сырую рыбу в инвентарь, как будто он мастерски разделал её на месте.
  * Извлечение Эссенции (Essence Extraction) - при использовании ведра на аксолотле вместо захвата игрок получает зелье "Слизь Аксолотля", дающее Regeneration I на 10 секунд.

### PLAYER\_CHANGE\_WORLD

* Инфо: Активатор срабатывает, когда игрок переходит в другой мир.
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
* Примеры:
  * Адаптация к Измерению (Dimensional Adaptation) - при входе игрока в новый мир он получает случайный временный баф (Speed, Strength или Night Vision на 30 секунд), пока его тело приспосабливается к новой среде.
  * Тяжесть Миров (Weight of Realms) - если игрок входит в Нижний мир или Край, он временно получает Slowness II на 10 секунд, имитируя внезапное изменение гравитации.
  * Забытые Воспоминания (Forgotten Memories) - при смене мира есть небольшой шанс (5%), что игрок теряет случайный предмет из инвентаря, имитируя "забытую память".
  * Милость Странника Миров (Realmwalker's Favor) - вход в новый мир даёт таинственный предмет добычи, тематически соответствующий измерению (например, Нижний мир даёт случайный золотой слиток, Край даёт жемчуг Края и т.д.), как будто подаренный неизвестной силой.

### PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок кликает по сущности и NPC Citizens.
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Примеры:
  * Связь Укротителя Зверей (Beast Tamer's Bond) - клик по Волку, Коту или Лошади с особым предметом (например, Золотым Яблоком) даёт временный Speed II и Regeneration на 60 секунд.
  * Скрытый Карман (Hidden Pocket) - клик по Зомби-Пиглину с золотыми слитками с 5% шансом мгновенно даёт случайный предмет добычи Нижнего мира вместо необходимости торговаться.
  * Выбор Гурмана (Gourmet's Choice) - клик по Корове, Свинье или Курице с Ножом (кастомный предмет) мгновенно даёт дроп мяса более высокого качества (например, Жареную Говядину вместо Сырой Говядины).
  * Боевая Сосредоточенность (Battle Focus) - клик по Железному Голему со Щитом даёт ему временный Resistance II и Knockback Resistance на 30 секунд, позволяя танковать больше урона.
  * Последняя Дань (Final Tribute) - клик по Скелету или Скелету-Иссушителю с блоками Кости даёт игроку краткий прирост Speed II, как будто поглощая энергию древнего воина.

### PLAYER\_CLICK\_ON\_PLAYER

* Инфо: Активатор срабатывает, когда игрок кликает по игроку (обычно называемому целью).
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Примеры:
  * Разделённая Удача (Shared Fortune) - клик по игроку с блоком изумруда в руке делит ваши уровни опыта пополам, мгновенно отдавая потерянный опыт другому игроку.
  * Клик по союзнику с Зельем Исцеления мгновенно передаёт половину вашего здоровья ему, делая это стратегическим спасением в последний момент.
  * Тактическая Метка (Tactical Mark) - клик по другому игроку во время приседания накладывает на него эффект свечения на 10 секунд, делая его видимым для союзников в PvP-бою.
  * Клятва Защиты (Oath of Protection) - клик по игроку со Щитом даёт ему Resistance I на 30 секунд, действуя как временный эффект защитника.

### PLAYER\_CONNECTION <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок заходит на сервер.
* Примеры:
  * Приветствие Мира (Realm's Welcome) - при входе игрок получает временный прирост Speed I и Haste I на 30 секунд, имитируя всплеск энергии при входе в мир.
  * Эхо Прошлого (Echo of the Past) - первое сообщение, которое видит игрок в чате, это настроенное сообщение-"воспоминание".
  * Ежедневная Удача (Daily Fortune) - при входе игроку даётся случайный небольшой баф или дебаф на 10 минут (например, Luck I, Speed I или Slowness I), делая каждую сессию немного другой.
  * Отголосок Измерения (Dimensional Echo) - если игрок заходит из другого мира (Нижнего мира или Края), он кратко испытывает эффект вихревых частиц и слышит искажённые фоновые звуки в течение нескольких секунд, прежде чем полностью стабилизироваться.

### PLAYER\_CONSUME

* Инфо: Активатор срабатывает, когда игрок успешно съедает / потребляет предмет.\
  Будьте осторожны, он работает только для предметов Minecraft, которые съедобны, или тех, что превращены в съедобный предмет с помощью [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CONSUME\_THE\_EI

* Инфо: Активатор срабатывает, когда игрок успешно съедает/потребляет сам ExecutableItem. \
  Будьте осторожны, он работает только для ExecutableItem, которые съедобны, или тех, что превращены в съедобный предмет с помощью [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CUSTOM\_LAUNCH

* Инфо: Активатор срабатывает, когда игрок запускает снаряд с помощью команды SCore, такой как:
  * [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
  * [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch)
  * [LAUNCH\_ENTITY](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#launchentity)
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [entityCommands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands) (В этом активаторе сущность - это снаряд)
  * [Projectile placeholders](/tools-for-all-plugins-score/placeholders#projectile-placeholders)
  * [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities) (Для добавления снарядов в белый/чёрный список)

### PLAYER\_DEATH

* Инфо: Активатор срабатывает, когда игрок умирает.
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь. 
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_DESELECT\_THE\_EI <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок отменяет выбор ExecutableItem.
  * Это происходит, когда ExecutableItem находится в основной руке, и затем вы меняете предмет, который держите, то есть "отменяете его выбор". 

### PLAYER\_DISABLE\_FLY

* Инфо: Активатор срабатывает, когда игрок перестаёт летать. 
  * Действие полёта означает буквально полёт, это не планирование и не нахождение в воздухе из-за падения.

### PLAYER\_DISABLE\_GLIDE

* Инфо: Активатор срабатывает, когда игрок перестаёт планировать. 

### PLAYER\_DISABLE\_SNEAK <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок перестаёт приседать. 

### PLAYER\_DISABLE\_SPRINT <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок перестаёт бежать 

### PLAYER\_DISABLE\_SWIM

* Инфо: Активатор срабатывает, когда игрок перестаёт плавать (плавание версии 1.13)
* 
### PLAYER\_DISCONNECT

* Инфо: Активатор срабатывает, когда игрок выходит с сервера.

### PLAYER\_DISMOUNT

* Инфо: Активатор срабатывает, когда игрок спешивается / слезает, перестав ехать на сущности. 
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_DROP\_ITEM

* Инфо: Активатор срабатывает, когда игрок выбрасывает предмет. 

### PLAYER\_DROP\_THE\_EI <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок выбрасывает ExecutableItem. 
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_EDIT\_BOOK <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок внёс изменения в книгу с пером и нажал готово или подписал книгу. 

### PLAYER\_EI\_BREAK <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок ломает ExecutableItem из-за ванильной потери прочности.

### PLAYER\_EMPTY\_BUCKET

* Инфо: Активатор срабатывает, когда игрок опустошает ведро ExecutableItem. Также срабатывает, когда вы заполняете водой блок или наполняете котёл этой жидкостью, например.
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Когда этот активатор срабатывает, целевой блок - это место, куда предположительно должна быть размещена вода. С этой информацией вы можете использовать SETBLOCK, чтобы заменить воду чем-то другим, если хотите.

### PLAYER\_ENABLE\_FLY <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок **начинает** летать. Этот активатор срабатывает при действии "двойное нажатие пробела при наличии права на полёт".
  * Это означает, что он не срабатывает, если вы уже летите, он срабатывает при действии изменения состояния полёта через "двойное нажатие пробела".
* Примеры:
  * Взлёт Молнии (Lightning Takeoff) - при активации полёта небольшая молния без урона бьёт в позицию игрока для драматического эффекта.
  * Воздушный Разгон (Aerial Boost) - при начале полёта игрок получает временный эффект Speed III на 5 секунд, имитирующий мощный взлёт.
  * Крылья Силы Ветра (Gale Force Wings) - при начале полёта сильный эффект ветра отталкивает всех сущностей вокруг игрока.

### PLAYER\_ENABLE\_GLIDE

* Инфо: Активатор срабатывает, когда игрок начинает планировать. 

### PLAYER\_ENABLE\_SNEAK <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок начинает приседать. 

### PLAYER\_ENABLE\_SPRINT <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок начинает бежать.

### PLAYER\_ENABLE\_SWIM

* Инфо: Активатор срабатывает, когда игрок начинает плавать (плавание версии 1.13)

### PLAYER\_ENTER\_IN\_THEIR\_LAND <CustomTag type="premium" />

* Инфо: Активатор срабатывает, если вы входите на свою землю или землю, где вам доверяют 
  * Поддерживаемые плагины:
    * Lands

### PLAYER\_ENTER\_IN\_THEIR\_PLOT <CustomTag type="premium" />

* Инфо: Активатор срабатывает, если вы входите на участок (plot).
  * Поддерживаемые плагины:
    * PlotSquared 

### PLAYER\_EQUIP\_THE\_EI <CustomTag type="premium" />

* Инфо: Активатор срабатывает, если вы надеваете/помещаете часть брони в слот брони.
  * `detailedSlots` может ограничить это одним слотом брони: 36 ботинки, 37 поножи, 38 нагрудник, 39 шлем (слот, куда помещается часть), в дополнение к -1 для руки, откуда она пришла.
  * Будьте осторожны! Плагин CMI может сделать так, что этот активатор не будет работать из-за права cmi.inventoryhat, установленного в true. Если вы хотите, чтобы этот активатор работал, установите это право в false. 
  * Аддоны Fabric могут обходить этот активатор.

### PLAYER\_EXPERIENCE\_CHANGE

* Инфо: Активатор срабатывает, когда опыт игрока меняется естественным образом. 
  * Это означает, что этот активатор не срабатывает при изменении опыта командами. За исключением случаев, когда эти команды являются призывом шара опыта, что сделает изменение опыта "естественным".

### PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" />

* Инфо: Активатор срабатывает, если игрок удобряет блок костной мукой. 
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FILL\_BUCKET

* Инфо: Активатор срабатывает, когда игрок наполняет ведро либо водой, либо лавой. 
  * Будьте осторожны! Когда ExecutableItem наполняет ведро и превращается либо в "water\_bucket", либо в "lava\_bucket", он больше не является ExecutableItem, он превращается в ванильный предмет и не может быть возвращён обратно.
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_BLOCK <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок кликает ПКМ удочкой, когда поплавок удочки находится на блоке. 
  * Он не срабатывает, когда поплавок не на блоке, если вы хотите, чтобы он срабатывал в воздухе, используйте активатор [PLAYER_FISH_NOTHING](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_fish_nothing)
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_ENTITY <CustomTag type="premium" />

* Активируется, когда игрок кликает ПКМ удочкой, когда поплавок удочки ловит сущность или NPC Citizens.
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь. 
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_FISH <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок кликает ПКМ удочкой, когда поплавок удочки ловит предмет в воде благодаря системе лута от рыбалки. 
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

:::tip
Цель, выбранная `entityCommands`, это **пойманный предмет**. Используйте команду сущности [CHANGE\_INTO\_ITEM](/tools-for-all-plugins-score/custom-commands/entity-commands#change_into_item), чтобы превратить улов в ванильный предмет или ExecutableItem, смотрите руководство [Custom fishing loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot).
:::

### PLAYER\_FISH\_NOTHING <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок ничего не ловит, то есть поплавок не был ни на блоке, ни на сущности, ни на игроке.
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_PLAYER <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок кликает ПКМ удочкой, когда поплавок удочки ловит другого игрока (обычно называемого целью).
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_FISH\_XIAOMOMI\_FISH <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок успешно что-то ловит с помощью плагина CustomFishing (ранее известного как Xiaomomi Fish). Этот активатор требует установки на вашем сервере [плагина CustomFishing](https://modrinth.com/plugin/customfishing).
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Доступные плейсхолдеры:
  * `%result%` - Результат рыбалки (например, SUCCESS, FAILURE и т.д.)
  * `%fish_hook%` - Название использованного рыболовного крючка
  * `%loot%` - ID пойманного лута
* Примеры:
  * Кастомные Награды за Рыбалку (Custom Fishing Rewards) - при поимке редкой рыбы с CustomFishing дайте игроку бонусный опыт или специальную валютную награду.
  * Удачливая Поимка (Lucky Catch) - при успешной рыбалке с конкретной удочкой есть шанс получить дополнительные кастомные предметы добычи от плагина CustomFishing.
  * Прогресс Навыка Рыбалки (Fishing Skill Progression) - отслеживайте успешные поимки и повышайте уровни навыка рыбалки игрока в зависимости от редкости пойманной рыбы.

:::info
Этот активатор работает только если у вас установлен плагин **CustomFishing**. Он интегрируется с FishingResultEvent от CustomFishing для предоставления улучшенной механики рыбалки.
:::

### PLAYER\_HARVEST\_BLOCK

* Инфо: Активатор срабатывает, когда игрок собирает урожай с блока
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь. 
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Примеры:
  * При клике ПКМ по кусту сладких ягод для сбора есть 10% шанс, что куст укусит в ответ, нанося половину сердца урона, но давая игроку Strength I на 5 секунд как эффект "вкус крови".
  * Щедрое Прикосновение (Bountiful Touch) - при сборе урожая с культур есть 15% шанс мгновенно пересадить их полностью выросшими, позволяя непрерывное земледелие.
  * Мистическое Цветение (Mystic Bloom) - при сборе цветка есть 5% шанс выпадения случайного зачарованного предмета, наполненного энергией природы.

### PLAYER\_HIT\_ENTITY <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок ударяет сущность.
  * Этот активатор работает только когда задействован урон, то есть игрок действительно ударил сущность. Если вы хотите, чтобы он работал при клике по сущности, используйте [PLAYER_CLICK_ON_ENTITY](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_entity)
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_HIT\_PLAYER

* Инфо: Активатор срабатывает, когда игрок ударяет другого игрока (обычно называемого целью).
  * Этот активатор работает только когда задействован урон, то есть игрок действительно ударил другого игрока. Если вы хотите, чтобы он работал при клике по игроку, используйте [PLAYER_CLICK_ON_PLAYER](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_player)
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_INPUT <CustomTag type="premium" /> <CustomTag type="version" version="1.21.3" />

* Инфо: Активатор срабатывает, когда игрок вводит клавишу. (вперёд, назад, влево, вправо, прыжок, бег, присед)

### PLAYER\_ITEM\_BREAK <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок ломает ExecutableItem, полностью потеряв его прочность. 

### PLAYER\_JUMP <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок прыгает.
  * <CustomTag type="version" version="1.21.2" /> он может сработать, даже если игрок попытался прыгнуть в воздухе.

### PLAYER\_KICK

* Инфо: Активатор срабатывает, когда игрока кикают 

### PLAYER\_KILL\_ENTITY <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок убивает сущность или NPC Citizens. 
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)

### PLAYER\_KILL\_PLAYER <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок убивает игрока (обычно называемого целью).
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_LAUNCH\_PROJECTILE

* Инфо: Активатор срабатывает, когда игрок выпускает снаряд. 
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_LEAVE\_THEIR\_LAND

* Инфо: Активатор срабатывает, если вы покидаете свою землю или землю, где вам доверяют 
  * Поддерживаемые плагины:
    * Lands

### PLAYER\_LEAVE\_THEIR\_PLOT <CustomTag type="premium" />

* Инфо: Активатор срабатывает, если вы покидаете участок (plot).
  * Поддерживаемые плагины:
    * PlotSquared 

### PLAYER\_LEFT\_CLICK

* Инфо: Активатор срабатывает, когда игрок кликает ЛКМ по предмету. 
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Если typeTarget: ONLY\_BLOCK, эти фичи будут доступны.
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : Для написания [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_MEND\_THE\_EI

* Инфо: Активатор срабатывает, когда игрок чинит ExecutableItem с помощью чар починки. 

### PLAYER\_OPEN\_INVENTORY

* Инфо: Активатор срабатывает, когда игрок открывает инвентари, но **НЕ свой собственный инвентарь**. 

:::info
В настоящее время невозможно определить, когда игрок открывает **свой собственный** инвентарь, потому что это происходит только на стороне клиента. 

Событие срабатывает только когда кто-то заставляет игрока открыть его инвентарь, или если игрок открывает кастомные, блочные или торговые инвентари.
:::

### PLAYER\_PICKUP\_THE\_EI <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок подбирает ExecutableItem. 

### PLAYER\_PORTAL

* Инфо: Активатор срабатывает, когда игрок использует портал.

### PLAYER\_RECEIVE\_EFFECT <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок получает эффект зелья. 
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [DetailedEffects](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedeffects)

### PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрока бьёт сущность. 
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрока бьёт другой игрок (обычно называемый целью).
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_RECEIVE\_HIT\_GLOBAL <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрока бьют. 
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_REGAIN\_HEALTH

* Инфо: Активатор срабатывает, когда игрок восстанавливает здоровье естественным образом.

### PLAYER\_RESPAWN <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок возрождается.
  * Как обычно, все активаторы ExecutableItem работают, когда у игрока есть предмет в инвентаре, поэтому если игрок возрождается без предмета в инвентаре, этот активатор не сработает.

### PLAYER\_RIGHT\_CLICK

* Инфо: Активатор срабатывает, когда игрок кликает ПКМ по предмету. 
  * Из-за ограничений Spigot этот активатор сработает только если у вас есть предмет (любой) в руке.
* Кастомные фичи этого активатора:
  * [typeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget) : Для указания типа клика (ONLY\_AIR, ONLY\_BLOCK, NO\_TYPE\_TARGET)
  * Если typeTarget: ONLY\_BLOCK, эти фичи будут доступны:
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : Для написания [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [detailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks) : Для указания, какие типы блоков действительны

### PLAYER\_RIPTIDE

* Инфо: Активатор срабатывает, когда игрок использует риптайд.

### PLAYER\_SELECT\_THE\_EI <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок выбирает ExecutableItem в хотбаре, то есть начинает держать его в основной руке. 

### PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок стрижёт сущность. 
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда щит игрока ломается другим игроком (обычно называемым целью).
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_SPAWN\_CHANGE

* Инфо: Активатор срабатывает, когда точка спавна игрока меняется. 

### PLAYER\_SWAPHAND\_THE\_EI

* Инфо: Активатор срабатывает, когда игрок меняет руки с ExecutableItem. Это означает горячую клавишу переключения между основной рукой и второй рукой и наоборот. 

### PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда сущность нацеливается на игрока. 
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_TRAMPLE\_CROP

* Инфо: Активатор срабатывает, когда игрок вытаптывает урожай. 
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Block commands
    ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_UNEQUIP\_THE\_EI <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок снимает ExecutableItem. 
  * `detailedSlots` может ограничить это одним слотом брони: 36 ботинки, 37 поножи, 38 нагрудник, 39 шлем (слот, откуда часть снимается).
  * Будьте осторожны! Плагин CMI может сделать так, что этот активатор не будет работать из-за права cmi.inventoryhat, установленного в true. Если вы хотите, чтобы этот активатор работал, установите это право в false.
  * Аддоны Fabric могут обходить этот активатор.

### PLAYER\_WALK <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок идёт. 
  * Этот активатор срабатывает каждый тик, пока игрок идёт, поэтому он очень затратен по производительности, используйте его осторожно. Вы можете добавить фичу кулдауна, чтобы снизить влияние.

### PLAYER\_WRITE\_COMMAND <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок вводит команду. 
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [DetailedCommands](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedcommands)

### PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда выпущенный игроком снаряд входит в воду.
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда выпущенный игроком снаряд попадает в блок. 
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда выпущенный игроком снаряд попадает в сущность. \
  Будьте осторожны, он не срабатывает, когда снаряд попадает в игрока (для этого используйте PROJECTILE\_HIT\_PLAYER).
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_PLAYER

* Инфо: Активатор срабатывает, когда выпущенный игроком снаряд попадает в другого игрока (обычно называемого целью).
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### CUSTOM\_TRIGGER

* Инфо: Активатор, который может быть выполнен путём запуска команды, или может быть запланирован. 
  * Этот активатор предназначен для всех плагинов, поэтому он объясняется в разделе [Custom triggers](/tools-for-all-plugins-score/custom-triggers)

### EI\_CLICK\_ON\_ANOTHER\_INVENTORY\_ITEM 

* Инфо: Активатор срабатывает, когда ExecutableItem помещается поверх другого предмета в инвентаре.

### EI\_CLICKED\_BY\_ANOTHER\_INVENTORY\_ITEM

* Инфо: Активатор срабатывает, когда предмет помещается поверх ExecutableItem в инвентаре.

### EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда ExecutableItem попадает в инвентарь игрока.
  * Если вы используете другой плагин, управляющий выдачей предметов, и ExecutableItem выдан, но этот активатор не срабатывает, обратитесь в их поддержку и попросите их вызвать этот метод.
  * Перемещения внутри инвентаря тоже учитываются: обмен со второй рукой (клавиша F), обмен цифровой клавишей и, на серверах Paper, выбор блока / выбор предмета (клик средней кнопкой). Для этих перемещений EI\_LEAVE\_THE\_PLAYER\_INVENTORY всегда срабатывает перед этим активатором.

### EI\_LEAVE\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда предмет покидает инвентарь игрока.
  * Требует ProtocolLib для корректной работы этого активатора. 

### INVENTORY\_CLICK <CustomTag type="premium" />

* Инфо: Активатор срабатывает, когда игрок кликает по предмету в своём инвентаре. 
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)

### LOOP <CustomTag type="premium" />

* Инфо: Активатор срабатывает повторно, пока предмет находится в инвентаре игрока. По сути это цикл, он запускает команды каждые \<delay> \<seconds/ticks> в зависимости от конфигурации этого активатора.
* Когда условие LOOP не выполняется, стандартное сообщение об ошибке (`You can't activate this item > invalid condition`) не отправляется: игрок ничего не активировал. Кастомное сообщение (`{theCondition}Msg`) всё равно отправляется.
* Для бонуса при ношении нескольких частей используйте [sets](/executableitems/configurations/sets-configuration) вместо LOOP.
* activatorFeatures: Обычно все активаторы имеют общие фичи, но есть некоторые, эксклюзивные для определённых активаторов, в таком случае они будут перечислены здесь.
  * [Delay](/executableitems/configurations/activator-configuration/activators-features#s_a_l-delay-and-delaytick)
