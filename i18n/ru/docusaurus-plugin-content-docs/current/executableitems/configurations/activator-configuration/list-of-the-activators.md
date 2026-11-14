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
  Полный список активаторов ExecutableItems с описанием, особенностями и
  примерами: узнайте, когда срабатывает каждый активатор в Minecraft.
source_hash: 7a0c050ed0ea5e9b
translated_at: '2026-11-13T18:14:34.252Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Список активаторов

## Активаторы ExecutableItems

Здесь вы найдёте список доступных активаторов с их описанием и несколькими примерами. Активаторы позволяют выполнять собственные действия: у них могут быть условия, они могут запускать команды, иметь кулдаун и так далее.

:::warning
Активатор, чей `option:` отсутствует в этом списке (опечатка, активатор другого плагина…), **отключён**: он никогда не срабатывает, а в консоли при загрузке предмета выводится ошибка с наиболее близкими названиями опций.
:::

Премиум-активаторы отмечены тегом: <CustomTag type="premium" />

Activator features (функции активатора) - это функции, эксклюзивные для данного активатора.

### PLAYER\_ALL\_CLICK

* Info: Активатор, который срабатывает, когда игрок нажимает левой или правой кнопкой мыши с предметом в руке. 
  * Различить клики нельзя, для этого используйте отдельные активаторы, например PLAYER\_RIGHT\_CLICK или PLAYER\_LEFT\_CLICK.
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Если typeTarget: ONLY\_BLOCK, будут доступны следующие функции.
    * [Block commands
      ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Примеры: 
  * Warping Stone – мгновенно телепортирует игрока на 5 блоков в направлении, в котором он смотрит. Кулдаун: 10 секунд.
  * Healing Totem – при клике лечит игрока на 4 сердца и даёт Regeneration I на 5 секунд.
  * Thunder Rod – бьёт молнией в ближайшего врага в радиусе 10 блоков.
  * Gravity Boots – подбрасывает игрока на 3 блока в воздух и отменяет урон от падения на 5 секунд.
  * Explosive Rune – создаёт небольшой взрыв в позиции игрока, который отбрасывает ближайших мобов, но не повреждает ландшафт.

### PLAYER\_BED\_ENTER <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок кликает правой кнопкой по кровати и ложится в неё. Если игрок не ложится, активатор не срабатывает. Он не срабатывает, пока игрок спит, а только в момент действия «лечь в кровать».
* Примеры:
  * Void Sleep – при входе в кровать игрок телепортируется в специально построенное измерение снов для исследования.
  * Lunar Shield – даёт Absorption IV на 5 минут при сне в кровати, обеспечивая временное дополнительное здоровье.
  * Nightmare Curse – создаёт враждебного фантома над кроватью, когда игрок ложится, и заставляет его сражаться, прежде чем он сможет спокойно спать.
  * Dreamwalker’s Blessing – при входе в кровать игрок получает Regeneration II, пока не проснётся (действие пробуждения отслеживается активатором PLAYER\_BED\_LEAVE).

### PLAYER\_BED\_LEAVE <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок встаёт с кровати. Будьте осторожны! Этот активатор срабатывает, когда игрок спит, наступает день и он встаёт с кровати, но также срабатывает, когда игрок встаёт с кровати посреди сна: это просто действие «встать с кровати».
  * Если вы хотите, чтобы активатор срабатывал только после сна, используйте этот активатор вместе с worldCondition -> ifWorldTime, чтобы проверить, что действительно наступил день.
* Примеры:
  * Morning Boost – при выходе из кровати игрок получает Speed II и Haste II на 60 секунд, чтобы начать день бодрым.
  * Phantom's Warning – если игрок встаёт с кровати, не доспав, рядом появляется фантом в качестве последствия.
  * Dream Collector – при пробуждении игрок получает случайную зачарованную книгу как «воспоминание о сне».
  * Energy Surge – при выходе из кровати шкала голода игрока полностью восстанавливается, имитируя хорошо проведённую ночь.

### PLAYER\_BEFORE\_DEATH

* Info: Активатор, который срабатывает, когда игрок умирает. Отличие этого активатора от активатора PLAYER\_DEATH в том, что он срабатывает первым, что даёт возможность спасти игрока до его смерти.
  * Для лучшего понимания: ванильные тотемы бессмертия срабатывают именно по этому активатору, чтобы применить свои эффекты.
* Примеры:
  * Soulbound Amulet – когда игрок вот-вот умрёт, он вместо этого телепортируется в точку возрождения с 2 сердцами и временной Regeneration II.
  * Last Stand Shield – при смертельной опасности игрок получает Resistance III и Absorption на 5 секунд, что даёт ему шанс дать отпор.
  * Phoenix Blessing – когда смерть неизбежна, игрок взрывается пламенем, нанося огненный урон врагам, и возрождается с половиной здоровья.
  * Undead Pact – если игрок должен умереть, он вместо этого воскресает с 3 сердцами, но не может использовать оружие в течение 10 секунд.

### PLAYER\_BLOCK\_BREAK <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок ломает блок.
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Примеры:
  * Ore Booster Pickaxe – при добыче блока руды есть 20% шанс удвоить добычу.
  * Nature’s Wrath Axe – при рубке бревна есть 10% шанс призвать враждебного духа дерева (кастомный моб).
  * Cursed Excavation – при добыче камня есть 5% шанс призвать чешуйниц или наложить Mining Fatigue на 5 секунд.
  * Explosive Demolition Hammer – при разрушении блоков окружающие блоки тоже ломаются, что позволяет копать областью 3x3.

### PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок блокирует щитом удар, нанесённый сущностью.
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Примеры:
  * Thorned Shield – при блокировании атаки нападающий получает 3 сердца урона.
  * Shockwave Defense – успешное блокирование атаки отбрасывает всех ближайших врагов в радиусе 5 блоков.
  * Energy Absorption – при блокировании атаки игрок восстанавливает 1 сердце и получает Resistance I на 3 секунды.
  * Frozen Guard – если атака заблокирована, нападающий замирает на месте (Slowness IV) на 2 секунды.
  * Blazing Counter – блокирование атаки поджигает нападающего на 4 секунды.

### PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок блокирует щитом удар, нанесённый другим игроком.
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Примеры:
  * Retribution Shield – при блокировании атаки игрока нападающий мгновенно обезоруживается и роняет оружие на землю.
  * Vampiric Guard – при успешном блокировании атаки игрок поглощает часть здоровья нападающего (лечение на 2 сердца).
  * Dimensional Rift – если атака игрока заблокирована, есть 20% шанс, что он будет телепортирован на 10 блоков в случайном направлении.
  * Adrenaline Block – при блокировании атаки игрок мгновенно получает Speed II и Strength I на 5 секунд, что позволяет быстро контратаковать.

### PLAYER\_BLOCK\_PLACE <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок ставит блок.
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Примеры:
  * Living Roots – при посадке саженца есть 10% шанс, что он мгновенно вырастет в дерево.
  * Runic Inscription – установка каменного блока с 5% шансом превращает его в Runed Stone, который испускает частицы и даёт ближайшим игрокам Haste I на 10 секунд.
  * При установке TNT есть небольшой шанс (5%), что он сразу воспламенится и вызовет неожиданный взрыв.

### PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок ломает щит другого игрока (обычно называемого целью).
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Примеры:
  * Shatter Strike – при разрушении щита игрока атакующий получает Strength I на 5 секунд, усиливая свою следующую атаку.
  * При уничтожении щита в позиции цели происходит небольшой взрыв, отбрасывающий её на 5 блоков.
  * Когда щит разбит, цель получает **Wither I** на **5 секунд**, что медленно истощает её здоровье.
  * Dimensional Fracture – при разрушении щита игрока цель ненадолго телепортируется на 5 блоков вверх, дезориентируя её, прежде чем она упадёт обратно.

### PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок чистит блок кисточкой.
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Примеры:
  * Cursed Dust – если игрок чистит подозрительный блок, есть 10% шанс, что он временно ослепнет, когда вокруг него поднимется облако проклятой пыли.
  * Buried Riches – чистка блока с небольшим шансом награждает игрока золотым самородком или изумрудом, имитируя находку потерянного сокровища.
  * Temporal Echoes – при чистке блока-артефакта игрок слышит слабые шёпоты из прошлого, намекающие на секреты лора, спрятанные поблизости.

### PLAYER\_BUCKET\_ENTITY

* Info: Активатор, который срабатывает, когда игрок с помощью ведра подбирает сущность в ведро.
  * Пример: так вы помещаете рыбу в ведро с водой.
  * Если нужно выполнить что-то при «попытке» подобрать в ведро сущность, которую нельзя подобрать, этот активатор не сработает, используйте PLAYER\_CLICK\_ON\_ENTITY.
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Примеры:
  * Instant Fillet – вместо того чтобы поймать рыбу в ведро, игрок мгновенно получает в инвентарь сырую рыбу, как будто мастерски разделал её на месте.
  * Essence Extraction – при использовании ведра на аксолотле вместо его поимки игрок получает зелье «Axolotl Mucus», которое даёт Regeneration I на 10 секунд.

### PLAYER\_CHANGE\_WORLD

* Info: Активатор, который срабатывает, когда игрок переходит в другой мир.
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
* Примеры:
  * Dimensional Adaptation – когда игрок попадает в новый мир, он получает случайный временный бонус (Speed, Strength или Night Vision на 30 секунд), пока его тело приспосабливается к новой среде.
  * Weight of Realms – если игрок попадает в Нижний мир или Энд, он временно получает Slowness II на 10 секунд, имитируя внезапное изменение гравитации.
  * Forgotten Memories – при смене мира есть небольшой шанс (5%), что игрок потеряет случайный предмет из инвентаря, имитируя «забытое воспоминание».
  * Realmwalker’s Favor – вход в новый мир даёт таинственный лут, соответствующий измерению (например, из Нижнего мира выпадает случайный золотой слиток, из Энда жемчуг Эндера и так далее), как будто это дар неизвестной силы.

### PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок кликает по сущности и по NPC Citizens.
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Примеры:
  * Beast Tamer’s Bond – клик по волку, коту или лошади с особым предметом в руке (например, золотым яблоком) даёт им временные Speed II и Regeneration на 60 секунд.
  * Hidden Pocket – клик по зомби-свинолюду с золотыми слитками даёт 5% шанс мгновенно получить случайный лут Нижнего мира вместо обмена.
  * Gourmet’s Choice – клик по корове, свинье или курице с Knife (кастомный предмет) мгновенно даёт более качественное мясо (например, жареный стейк вместо сырой говядины).
  * Battle Focus – клик по железному голему со щитом в руке даёт ему временные Resistance II и сопротивление отбрасыванию на 30 секунд, позволяя ему выдерживать больше урона.
  * Final Tribute – клик по скелету или скелету-иссушителю с костяными блоками в руке даёт игроку краткий бонус Speed II, как будто он поглощает энергию древнего воина.

### PLAYER\_CLICK\_ON\_PLAYER

* Info: Активатор, который срабатывает, когда игрок кликает по другому игроку (обычно называемому целью).
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Примеры:
  * Shared Fortune – клик по игроку с изумрудным блоком в руке делит ваши уровни опыта пополам, и другой игрок мгновенно получает потерянный опыт.
  * Клик по союзнику с зельем лечения в руке мгновенно передаёт ему половину вашего здоровья, что делает предмет стратегическим спасением в последний момент.
  * Tactical Mark – клик по другому игроку, пока вы крадётесь, накладывает на него эффект свечения на 10 секунд, делая его видимым для союзников во время PvP-боя.
  * Oath of Protection – клик по игроку со щитом в руке даёт ему Resistance I на 30 секунд, действуя как временный эффект стража.

### PLAYER\_CONNECTION <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок заходит на сервер.
* Примеры:
  * Realm’s Welcome – при входе игрок получает временный бонус Speed I и Haste I на 30 секунд, имитируя прилив энергии при входе в мир.
  * Echo of the Past – первое сообщение, которое игрок видит в чате, является настроенным «воспоминанием».
  * Daily Fortune – при входе игрок получает случайный небольшой бонус или штраф на 10 минут (например, Luck I, Speed I или Slowness I), благодаря чему каждая сессия немного отличается.
  * Dimensional Echo – если игрок заходит из другого мира (Нижнего мира или Энда), он ненадолго видит вихрь частиц и слышит искажённые фоновые звуки в течение нескольких секунд, пока всё полностью не стабилизируется.

### PLAYER\_CONSUME

* Info: Активатор, который срабатывает, когда игрок успешно съедает или потребляет предмет.\
  Будьте осторожны: он работает только для предметов Minecraft, которые съедобны, или для тех, которые превращены в съедобные с помощью [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CONSUME\_THE\_EI

* Info: Активатор, который срабатывает, когда игрок успешно съедает или потребляет сам ExecutableItem. \
  Будьте осторожны: он работает только для ExecutableItems, которые съедобны, или для тех, которые превращены в съедобные с помощью [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CUSTOM\_LAUNCH

* Info: Активатор, который срабатывает, когда игрок запускает снаряд с помощью команды SCore, например:
  * [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
  * [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch)
  * [LAUNCH\_ENTITY](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#launchentity)
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [entityCommands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands) (в этом активаторе сущностью является снаряд)
  * [Projectile placeholders](/tools-for-all-plugins-score/placeholders#projectile-placeholders)
  * [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities) (чтобы добавить некоторые снаряды в белый или чёрный список)

### PLAYER\_DEATH

* Info: Активатор, который срабатывает, когда игрок умирает.
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь. 
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_DESELECT\_THE\_EI <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок перестаёт выбирать ExecutableItem.
  * Это происходит, когда ExecutableItem находится в основной руке, а затем вы меняете удерживаемый предмет, то есть «снимаете выбор» с него. 

### PLAYER\_DISABLE\_FLY

* Info: Активатор, который срабатывает, когда игрок прекращает летать. 
  * Полёт означает именно полёт, а не планирование и не нахождение в воздухе из-за падения.

### PLAYER\_DISABLE\_GLIDE

* Info: Активатор, который срабатывает, когда игрок прекращает планировать. 

### PLAYER\_DISABLE\_SNEAK <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок прекращает красться. 

### PLAYER\_DISABLE\_SPRINT <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок прекращает бежать. 

### PLAYER\_DISABLE\_SWIM

* Info: Активатор, который срабатывает, когда игрок прекращает плыть (плавание версии 1.13)
* 
### PLAYER\_DISCONNECT

* Info: Активатор, который срабатывает, когда игрок выходит с сервера.

### PLAYER\_DISMOUNT

* Info: Активатор, который срабатывает, когда игрок спешивается или слезает с сущности, на которой ехал. 
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_DROP\_ITEM

* Info: Активатор, который срабатывает, когда игрок выбрасывает предмет. 

### PLAYER\_DROP\_THE\_EI <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок выбрасывает ExecutableItem. 
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_EDIT\_BOOK <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок внёс изменения в книгу с пером и нажал «Готово» или подписал книгу. 

### PLAYER\_EI\_BREAK <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок ломает ExecutableItem из-за потери ванильной прочности.

### PLAYER\_EMPTY\_BUCKET

* Info: Активатор, который срабатывает, когда игрок опустошает ведро ExecutableItem. Он также срабатывает, например, когда вы заполняете блок водой (waterlog) или наполняете котёл этой жидкостью.
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Когда этот активатор срабатывает, целевой блок находится в месте, где должна быть размещена вода. Зная это, вы можете использовать SETBLOCK, чтобы при желании заменить воду чем-то другим.

### PLAYER\_ENABLE\_FLY <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок **начинает** летать. Этот активатор срабатывает по действию «двойное нажатие пробела при наличии права на полёт».
  * Это означает, что он не срабатывает, если вы уже летите, а только по действию смены состояния полёта «двойным нажатием пробела».
* Примеры:
  * Lightning Takeoff – при включении полёта в позицию игрока бьёт небольшая молния без урона для драматического эффекта.
  * Aerial Boost – при начале полёта игрок получает временный эффект Speed III на 5 секунд, имитируя мощный взлёт.
  * Gale Force Wings – при начале полёта сильный порыв ветра отталкивает все сущности вокруг игрока.

### PLAYER\_ENABLE\_GLIDE

* Info: Активатор, который срабатывает, когда игрок начинает планировать. 

### PLAYER\_ENABLE\_SNEAK <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок начинает красться. 

### PLAYER\_ENABLE\_SPRINT <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок начинает бежать.

### PLAYER\_ENABLE\_SWIM

* Info: Активатор, который срабатывает, когда игрок начинает плыть (плавание версии 1.13)

### PLAYER\_ENTER\_IN\_THEIR\_LAND <CustomTag type="premium" />

* Info: Активатор, который срабатывает, если вы входите в свой ленд или в ленд, где вам доверяют. 
  * Поддерживаемые плагины:
    * Lands

### PLAYER\_ENTER\_IN\_THEIR\_PLOT <CustomTag type="premium" />

* Info: Активатор, который срабатывает, если вы входите на участок (plot).
  * Поддерживаемые плагины:
    * PlotSquared 

### PLAYER\_EQUIP\_THE\_EI <CustomTag type="premium" />

* Info: Активатор, который срабатывает, если вы надеваете часть брони в слот брони.
  * `detailedSlots` может ограничить его одним слотом брони: 36 ботинки, 37 поножи, 38 нагрудник, 39 шлем (слот, в который попадает предмет), а также -1 для руки, из которой он был взят.
  * <CustomTag type="version" version="1.21.3" /> Предмет с [equippable features](/executableitems/configurations/item-configuration/item-features#equippable-features-) попадает в `slot` этих функций, даже если это не слот его материала: вырезанная тыква, которую можно надеть на ноги, считается поножами (37). При клике правой кнопкой он надевается, только если его `swappable` равно true.
  * Будьте осторожны! Плагин CMI может сделать так, что этот активатор не будет работать из-за права cmi.inventoryhat со значением true. Если вы хотите, чтобы этот активатор работал, установите для этого права значение false. 
  * Аддоны Fabric могут обходить этот активатор.

### PLAYER\_EXPERIENCE\_CHANGE

* Info: Активатор, который срабатывает, когда опыт игрока изменяется естественным образом. 
  * Это означает, что активатор не срабатывает при изменении опыта командами. Исключение составляют команды, создающие сферу опыта: это считается «естественным» изменением опыта.

### PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" />

* Info: Активатор, который срабатывает, если игрок удобряет блок костной мукой. 
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FILL\_BUCKET

* Info: Активатор, который срабатывает, когда игрок наполняет ведро водой или лавой. 
  * Будьте осторожны! Когда ExecutableItem наполняет ведро и оно превращается в "water\_bucket" или "lava\_bucket", оно перестаёт быть ExecutableItem, становится ванильным предметом, и это нельзя отменить.
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_BLOCK <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок кликает правой кнопкой удочкой, а поплавок находится на блоке. 
  * Он не срабатывает, если поплавок не на блоке. Если вы хотите, чтобы он срабатывал в воздухе, используйте активатор [PLAYER_FISH_NOTHING](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_fish_nothing)
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_ENTITY <CustomTag type="premium" />

* Срабатывает, когда игрок кликает правой кнопкой удочкой, а поплавок зацепил сущность или NPC Citizens.
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь. 
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_FISH <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок кликает правой кнопкой удочкой, а поплавок поймал предмет в воде по системе рыбацкого лута. 
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

:::tip
Сущность, на которую нацелен `entityCommands`, это **пойманный предмет**. Используйте команду сущности [CHANGE\_INTO\_ITEM](/tools-for-all-plugins-score/custom-commands/entity-commands#change_into_item), чтобы превратить улов в ванильный предмет или ExecutableItem, см. руководство [Custom fishing loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot).
:::

### PLAYER\_FISH\_NOTHING <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок ничего не ловит, то есть поплавок не оказался ни на блоке, ни на сущности, ни на игроке.
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_PLAYER <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок кликает правой кнопкой удочкой, а поплавок зацепил другого игрока (обычно называемого целью).
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_FISH\_XIAOMOMI\_FISH <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок успешно ловит что-либо с помощью плагина CustomFishing (ранее известного как Xiaomomi Fish). Для этого активатора на вашем сервере должен быть установлен [плагин CustomFishing](https://modrinth.com/plugin/customfishing).
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Доступные плейсхолдеры:
  * `%result%` - результат рыбалки (например, SUCCESS, FAILURE и так далее)
  * `%fish_hook%` - название использованного крючка
  * `%loot%` - ID пойманного лута
* Примеры:
  * Custom Fishing Rewards – при поимке редкой рыбы с помощью CustomFishing игрок получает бонусный опыт или особую денежную награду.
  * Lucky Catch – при успешной рыбалке с определённой удочкой есть шанс получить дополнительные кастомные предметы из плагина CustomFishing.
  * Fishing Skill Progression – отслеживайте успешные уловы и повышайте уровни навыка рыбалки игроков в зависимости от редкости пойманной рыбы.

:::info
Этот активатор работает, только если на сервере установлен плагин **CustomFishing**. Он интегрируется с FishingResultEvent плагина CustomFishing, чтобы расширить механики рыбалки.
:::

### PLAYER\_HARVEST\_BLOCK

* Info: Активатор, который срабатывает, когда игрок собирает урожай с блока
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь. 
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Примеры:
  * При сборе урожая правым кликом по кусту сладких ягод есть 10% шанс, что куст «укусит» в ответ, нанеся полсердца урона, но дав игроку Strength I на 5 секунд как эффект «вкуса крови».
  * Bountiful Touch – при сборе урожая есть 15% шанс мгновенно посадить растения заново с полным ростом, что позволяет вести непрерывное земледелие.
  * Mystic Bloom – при сборе цветка есть 5% шанс, что из него выпадет случайный зачарованный предмет, наполненный энергией природы.

### PLAYER\_HIT\_ENTITY <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок бьёт сущность.
  * Этот активатор работает только при нанесении урона, то есть игрок действительно ударил сущность. Если вы хотите, чтобы он срабатывал при клике по сущности, используйте [PLAYER_CLICK_ON_ENTITY](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_entity)
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_HIT\_PLAYER

* Info: Активатор, который срабатывает, когда игрок бьёт другого игрока (обычно называемого целью).
  * Этот активатор работает только при нанесении урона, то есть игрок действительно ударил другого игрока. Если вы хотите, чтобы он срабатывал при клике по игроку, используйте [PLAYER_CLICK_ON_PLAYER](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_player)
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_INPUT <CustomTag type="premium" /> <CustomTag type="version" version="1.21.3" />

* Info: Активатор, который срабатывает, когда игрок нажимает клавишу ввода. (вперёд, назад, влево, вправо, прыжок, бег, красться)

### PLAYER\_ITEM\_BREAK <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок ломает ExecutableItem, полностью израсходовав его прочность. 

### PLAYER\_JUMP <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок прыгает.
  * <CustomTag type="version" version="1.21.2" /> он может сработать, даже если игрок попытался прыгнуть в воздухе.

### PLAYER\_KICK

* Info: Активатор, который срабатывает, когда игрока кикают 

### PLAYER\_KILL\_ENTITY <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок убивает сущность или NPC Citizens. 
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)

### PLAYER\_KILL\_PLAYER <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок убивает другого игрока (обычно называемого целью).
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_LAUNCH\_PROJECTILE

* Info: Активатор, который срабатывает, когда игрок стреляет снарядом. 
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_LEAVE\_THEIR\_LAND

* Info: Активатор, который срабатывает, если вы покидаете свой ленд или ленд, где вам доверяют. 
  * Поддерживаемые плагины:
    * Lands

### PLAYER\_LEAVE\_THEIR\_PLOT <CustomTag type="premium" />

* Info: Активатор, который срабатывает, если вы покидаете участок (plot).
  * Поддерживаемые плагины:
    * PlotSquared 

### PLAYER\_LEFT\_CLICK

* Info: Активатор, который срабатывает, когда игрок кликает левой кнопкой по предмету. 
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Если typeTarget: ONLY\_BLOCK, будут доступны следующие функции.
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : для написания [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_MEND\_THE\_EI

* Info: Активатор, который срабатывает, когда игрок чинит ExecutableItem зачарованием «Починка». 

### PLAYER\_OPEN\_INVENTORY

* Info: Активатор, который срабатывает, когда игрок открывает инвентари, но **НЕ свой собственный инвентарь**. 

:::info
В настоящее время невозможно определить, когда игрок открывает **свой собственный** инвентарь, потому что это происходит только на стороне клиента. 

Событие срабатывает только тогда, когда кто-то заставляет игрока открыть инвентарь или когда игрок открывает кастомные инвентари, инвентари блоков или торговцев.
:::

### PLAYER\_PICKUP\_THE\_EI <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок подбирает ExecutableItem. 

### PLAYER\_PORTAL

* Info: Активатор, который срабатывает, когда игрок использует портал.

### PLAYER\_RECEIVE\_EFFECT <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок получает эффект зелья. 
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [DetailedEffects](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedeffects)

### PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрока бьёт сущность. 
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрока бьёт другой игрок (обычно называемый целью).
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_RECEIVE\_HIT\_GLOBAL <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрока бьют. 
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_REGAIN\_HEALTH

* Info: Активатор, который срабатывает, когда игрок естественным образом восстанавливает здоровье.

### PLAYER\_RESPAWN <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок возрождается.
  * Как обычно, все активаторы ExecutableItem работают, когда предмет находится в инвентаре игрока, поэтому если игрок возрождается без предмета в инвентаре, этот активатор не сработает.

### PLAYER\_RIGHT\_CLICK

* Info: Активатор, который срабатывает, когда игрок кликает правой кнопкой по предмету. 
  * Из-за ограничений Spigot этот активатор сработает, только если в вашей руке есть предмет (любой).
* Особые функции этого активатора:
  * [typeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget) : чтобы указать тип клика (ONLY\_AIR, ONLY\_BLOCK, NO\_TYPE\_TARGET)
  * Если typeTarget: ONLY\_BLOCK, будут доступны следующие функции:
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : для написания [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [detailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks) : чтобы указать, какие типы блоков допустимы

### PLAYER\_RIPTIDE

* Info: Активатор, который срабатывает, когда игрок использует тягу прилива (riptide).

### PLAYER\_SELECT\_THE\_EI <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок выбирает ExecutableItem на панели быстрого доступа, то есть начинает держать его в основной руке. 

### PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок стрижёт сущность. 
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда щит игрока ломает другой игрок (обычно называемый целью).
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_SPAWN\_CHANGE

* Info: Активатор, который срабатывает, когда меняется точка возрождения игрока. 

### PLAYER\_SWAPHAND\_THE\_EI

* Info: Активатор, который срабатывает, когда игрок меняет руки с ExecutableItem (swaphand). Это означает сочетание клавиш для обмена предметов между основной и второй рукой и наоборот. 

### PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда сущность выбирает игрока своей целью. 
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_TRAMPLE\_CROP

* Info: Активатор, который срабатывает, когда игрок вытаптывает посевы. 
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Block commands
    ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_UNEQUIP\_THE\_EI <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок снимает ExecutableItem. 
  * `detailedSlots` может ограничить его одним слотом брони: 36 ботинки, 37 поножи, 38 нагрудник, 39 шлем (слот, из которого снимается предмет).
  * Будьте осторожны! Плагин CMI может сделать так, что этот активатор не будет работать из-за права cmi.inventoryhat со значением true. Если вы хотите, чтобы этот активатор работал, установите для этого права значение false.
  * Аддоны Fabric могут обходить этот активатор.

### PLAYER\_WALK <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок идёт. 
  * Этот активатор срабатывает на каждом тике ходьбы игрока, поэтому он очень ресурсоёмок, используйте его осторожно. Вы можете добавить функцию use cooldown, чтобы снизить нагрузку.

### PLAYER\_WRITE\_COMMAND <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок вводит команду. 
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [DetailedCommands](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedcommands)

### PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда выпущенный игроком снаряд попадает в воду.
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда выпущенный игроком снаряд попадает в блок. 
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда выпущенный игроком снаряд попадает в сущность. \
  Будьте осторожны: он не срабатывает, когда снаряд попадает в игрока (для этого используйте PROJECTILE\_HIT\_PLAYER).
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_PLAYER

* Info: Активатор, который срабатывает, когда выпущенный игроком снаряд попадает в другого игрока (обычно называемого целью).
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### CUSTOM\_TRIGGER

* Info: Активатор, который можно выполнить командой или запланировать. 
  * Этот активатор общий для всех плагинов, поэтому он описан на странице [Custom triggers](/tools-for-all-plugins-score/custom-triggers)

### EI\_CLICK\_ON\_ANOTHER\_INVENTORY\_ITEM 

* Info: Активатор, который срабатывает, когда ExecutableItem кладут поверх другого предмета в инвентаре.

### EI\_CLICKED\_BY\_ANOTHER\_INVENTORY\_ITEM

* Info: Активатор, который срабатывает, когда предмет кладут поверх ExecutableItem в инвентаре.

### EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда ExecutableItem попадает в инвентарь игрока.
  * Если вы используете другой плагин, который управляет выдачей предметов, и ExecutableItem выдаётся, а этот активатор не срабатывает, обратитесь в поддержку этого плагина и попросите вызывать этот метод.
  * Перемещения внутри инвентаря тоже учитываются: обмен со второй рукой (клавиша F), обмен по цифровой клавише и, на серверах Paper, pick block / pick item (средняя кнопка мыши). Для таких перемещений EI\_LEAVE\_THE\_PLAYER\_INVENTORY всегда срабатывает раньше этого активатора.

### EI\_LEAVE\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда предмет покидает инвентарь игрока.
  * Для корректной работы этого активатора требуется ProtocolLib. 

### INVENTORY\_CLICK <CustomTag type="premium" />

* Info: Активатор, который срабатывает, когда игрок кликает по предмету в своём инвентаре. 
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)

### LOOP <CustomTag type="premium" />

* Info: Активатор, который срабатывает повторно, пока предмет находится в инвентаре игрока. По сути это цикл: он выполняет команды каждые \<delay> \<seconds/ticks> в зависимости от конфигурации этого активатора.
* Когда условие активатора LOOP не выполнено, сообщение об ошибке по умолчанию (`You can't activate this item > invalid condition`) не отправляется: игрок ничего не активировал. Кастомное сообщение (`{theCondition}Msg`) по-прежнему отправляется.
* Для бонуса при ношении нескольких частей брони используйте [sets](/executableitems/configurations/sets-configuration) вместо LOOP.
* activatorFeatures: Обычно все активаторы используют общие функции, но некоторые из них эксклюзивны для отдельных активаторов. В таком случае эти функции перечислены здесь.
  * [Delay](/executableitems/configurations/activator-configuration/activators-features#s_a_l-delay-and-delaytick)
