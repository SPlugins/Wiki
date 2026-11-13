---
description: >-
  本页详细介绍 ExecutableItems
  插件中激活器的通用配置选项，包括显示名称、使用次数修改、变量修改、cancelEvent、silenceOutput、冷却与全局冷却以及各类必需功能（物品、金钱、等级、经验、魔力）的设置方法与完整示例。
source_hash: a103e5315ef03316
translated_at: '2026-11-13T18:09:49.184Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### 激活器的显示名称

* 信息：激活器显示名称的字符串值，用处不大，主要供开发者区分不同的激活器。它也会出现在 locale.yml 文件中的默认消息 "timeLeft" 里。
* 示例：

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    name: '&eThor activator'
```

### 激活器的使用次数修改 <CustomTag type="premium" />

* 信息：非常重要的功能，物品的使用次数会按这个整数值进行修改。也就是说，如果该值为正数，使用次数会增加；如果该值为负数，使用次数会减少。
* 示例：（每次触发此激活器时，使用次数增加 1）

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    usageModification: 1
```

### 变量修改

* 信息：这是一个变量修改列表，用于修改你的物品内部的变量。例如，它可以用来增加变量的值，或者用另一个值覆盖变量的旧值等。
  * `variableName`：variableModification 所针对的变量名称
  * `type`：你所使用的 variableModification 类型
    * SET：覆盖变量的旧值，并设置为修改值。
    * ADD：使用修改值对变量的当前值进行数学运算。要求该变量的类型为 NUMBER。如果修改值为正数则增加，为负数则减少。
    * LIST\_ADD：用于 LIST 类型的变量，将修改值追加到变量列表中。
    * LIST\_CLEAR：用于 LIST 类型的变量，清空变量列表。
    * LIST\_REMOVE：用于 LIST 类型的变量，从变量列表中移除修改值。
  * `modification`：修改值。它会按照所选的修改类型应用到变量上。
* 示例：

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

* 在这里使用占位符时要小心！使用占位符本身没有问题，只需确保返回的输出是 NUMBER，否则你需要使用 STRING 功能。例如，让我们用另一个已知返回 NUMBER 的变量来更新一个 variableModification。

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

* 信息：布尔值，表示与激活器相关的事件是否会被取消。
  * 这一点可能比较难理解，我认为这是大多数人不太明白的内容之一。要解释它，你需要知道每个激活器都对应一个 Minecraft 事件：事件发生后，激活器随即被触发。如果启用激活器的 cancelEvent 功能，那么事件发生后，几乎在同一时间激活器被触发并取消该事件，因此激活器会继续运行其所有已启用的功能，但事件本身并没有真正发生，因为它被取消了。例如：
    * 如果激活器是 PLAYER\_HIT\_PLAYER 并且启用了 cancelEvent，那么玩家将无法攻击玩家，因为所有攻击都会被取消/忽略。
    * 如果激活器是 PLAYER\_BLOCK\_BREAK 并且启用了 cancelEvent，那么玩家将无法破坏方块，因为该事件被取消/忽略了。
* 示例：

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BLOCK_BREAK
    cancelEvent: true
```

### noActivatorRunIfTheEventIsCancelled

* 信息：布尔值，启用后，如果触发激活器的事件已被其他插件取消，则阻止该激活器运行。
  * 当你使用了会取消伤害事件的插件（例如 WorldGuard 在非 PvP 区域中取消伤害），或者其他 ExecutableItems 取消了伤害事件（例如带有 PLAYER\_RECEIVE\_HIT\_GLOBAL + cancelEvent 的靴子）时，这个功能很有用。如果没有此功能，像 PLAYER\_BEFORE\_DEATH 这样的激活器即使在伤害已被取消的情况下仍然会触发，因为它们响应的是原始的伤害计算，而不是最终结果。
  * 一个常见的用例是使用 PLAYER\_BEFORE\_DEATH 的自定义不死图腾物品。如果没有启用此功能，即使玩家处于伤害被取消的 WorldGuard 保护区域内，图腾也会被激活并消耗，白白浪费了物品。启用此功能可确保图腾只在真正的致命伤害时才会激活。
* 示例：

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BEFORE_DEATH
    noActivatorRunIfTheEventIsCancelled: true
```

### silenceOutput

* 信息：布尔值，启用后，通过各类命令功能（如 playerCommands、blockCommands、entityCommands 和 targetCommands）运行的所有命令都不会在**控制台**中产生输出。
  * 例如，使用 Minecraft 原版命令 effect give \[...] 时，控制台通常会以这种格式输出："Applied effect strength to \<playerName>"，要禁用这条输出，你可以启用此功能。
* 示例：

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activator    
    playerCommands:
    - effect give %player% strength 5 5
    silenceOutput: true
```

* 需要理解的是，此功能是用来禁用原版命令的输出的。如果你使用的是其他插件的命令并且它有控制台输出，那不是我们这边应该修复的问题，应当由那个插件为你提供隐藏这些消息的方法。不过，我们很贴心地提供了自定义哪些消息被隐藏的方式，这样你就可以同时拥有由 silenceOutput 屏蔽的默认消息和你想要添加的自定义消息。这个过程由 SCore 配置文件处理，更多信息请见此处，具体操作方法请见此处 [General config](/tools-for-all-plugins-score/score/general-config)。

## 冷却

### 玩家冷却

* 信息：冷却选项是针对触发此激活器的玩家、对此激活器所应用的冷却。
* 如果激活器是 PLAYER\_RIGHT\_CLICK，它包含一些命令 \[]，并且冷却时间为 30 秒，那么玩家触发该激活器后，需要等待 30 秒才能再次触发。这不会阻止其他玩家在这 30 秒内运行它，只要那位玩家也不处于冷却中即可。这是一个按玩家生效的功能。
  * `cooldown`：整数值，表示此激活器的冷却持续时间。
  * `isCooldownInTicks`：布尔值，将冷却时间设置为以 tick 为单位（20 tick = 1 秒）
  * `cooldownMsg`：字符串值，当玩家在冷却中尝试触发该激活器时显示的消息
  * `displayCooldownMessage`：布尔值，用于允许或阻止在玩家处于冷却中尝试触发激活器时显示 cooldownMsg 消息。
    * 可以使用的占位符：
      * %time% -> 以秒为单位的完整冷却时间
      * %time\_H% -> 冷却时间的小时部分
      * %time\_M% -> 冷却时间的分钟部分
      * %time\_S% -> 冷却时间的秒部分
  * `cancelEventIfInCooldown`：布尔值，如果玩家处于冷却中，则取消该激活器的事件。也就是说，如果激活器是 PLAYER\_HIT\_ENTITY，那么在冷却期间，玩家所有的 PLAYER\_HIT\_ENTITY 事件都会被取消，因而被忽略，使玩家无法攻击实体（提醒：该激活器的目标是除玩家以外的所有实体）
  * `pauseWhenOffline`：布尔值，当玩家离线时暂停冷却。为了便于理解：如果为 false，冷却时间不会停止，因此玩家可以离开服务器，等待冷却结束后再加入，然后就能再次触发该激活器。但如果启用了此功能，并且玩家在冷却中离开了服务器，那么他再次加入时，剩余的冷却时间会与离开时相同。
  * `pausePlaceholdersConditions`：与 pauseWhenOffline 类似，但它只根据特定的 placeholdersConditions 来暂停。使用场景的例子是：如果玩家是 VIP 等级，则暂停冷却，这样 VIP 等级就能使用该功能。
  * `enableVisualCooldown`：为物品启用可视化冷却。
* 示例：

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

### 全局冷却

* 信息：思路与冷却相同，但它不是应用于玩家的冷却，而是应用于所有玩家的全局冷却。也就是说，如果某人触发了激活器，并且它有 30 秒的全局冷却，那么在这 30 秒结束之前，任何人都无法使用它。它拥有与冷却相同的功能。
  * `cooldown`：整数值，表示此激活器的冷却持续时间。
  * `isCooldownInTicks`：布尔值，将冷却时间设置为以 tick 为单位（20 tick = 1 秒）
  * `cooldownMsg`：字符串值，当玩家在冷却中尝试触发此激活器时显示的消息
  * `displayCooldownMessage`：布尔值，用于允许或阻止在玩家处于冷却中尝试触发激活器时显示 cooldownMsg 消息。
    * 可以使用的占位符：
      * %time% -> 以秒为单位的完整冷却时间
      * %time\_H% -> 冷却时间的小时部分
      * %time\_M% -> 冷却时间的分钟部分
      * %time\_S% -> 冷却时间的秒部分
  * `cancelEventIfInCooldown`：布尔值，如果玩家处于冷却中，则取消该激活器的事件。也就是说，如果激活器是 PLAYER\_HIT\_ENTITY，那么在冷却期间，玩家所有的 PLAYER\_HIT\_ENTITY 事件都会被取消，因而被忽略，使玩家无法攻击实体（提醒：该激活器的目标是除玩家以外的所有实体）
  * `enableVisualCooldown`：为物品启用可视化冷却。
* 示例：

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

## 必需功能 <CustomTag type="premium" />

本节用于设置与触发激活器所需条件相关的功能。也就是说，事件发生时，只有当玩家满足此必需设置，激活器才会运行。相关物品会在此过程中被消耗。

* 如果你不希望物品被消耗，请不要使用 "required" 功能，而应使用条件，条件只做判断，不会消耗物品。

### requiredExecutableItems <CustomTag type="premium" />

* 信息：此功能允许激活器将一个或多个 ExecutableItem 作为必需条件。如果玩家满足该条件，所需物品会被消耗，激活器随即运行。
  * `cancelEventIfError`：布尔值，表示当玩家不满足必需条件时，事件是否会被取消。
    * 也就是说，例如有一个 PLAYER\_HIT\_ENTITY 事件，事件发生了，但玩家不满足触发激活器所需的条件，如果启用此功能，PLAYER\_HIT\_ENTITY 事件会被取消，因此即使玩家在点击/攻击实体，该实体也不会受到伤害，因为事实上该事件并没有发生，它被取消了。
  * `errorMessage`：当玩家不满足必需条件时发送给玩家的字符串消息。
  * `executableItem`：作为必需条件的 ExecutableItem ID
  * `amount`：作为必需条件所需物品的数量（整数）。
  * `usageConditions`：可选的字符串条件，格式为 `(==, !=, >, <, >=, <=){number}`，用于该 ExecutableItem 的使用次数条件。
    * 也就是说，如果条件是 >=5，那么必需条件是所选的 ExecutableItem 必须在玩家的物品栏中，并且其使用次数还必须大于或等于 5。
* 示例：

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

* 信息：此功能允许激活器将一个或多个原版物品作为必需条件。如果玩家满足该条件，所需物品会被消耗，激活器随即运行。
  * `cancelEventIfError`：布尔值，表示当玩家不满足必需条件时，事件是否会被取消。
    * 也就是说，例如有一个 PLAYER\_HIT\_ENTITY 事件，事件发生了，但玩家不满足触发激活器所需的条件，如果启用此功能，PLAYER\_HIT\_ENTITY 事件会被取消，因此即使玩家在点击/攻击实体，该实体也不会受到伤害，因为事实上该事件并没有发生，它被取消了。
  * `errorMessage`：当玩家不满足必需条件时发送给玩家的字符串消息。
  * `material`：作为必需条件的原版 MATERIAL。
  * `amount`：作为必需条件所需物品的数量（整数）。
  * `notExecutableItem`：布尔值，决定必需条件是否可以由 ExecutableItem 满足。
    * 也就是说，如果必需条件是 STONE，并且没有启用此功能，那么原版 STONE 以及材质为 STONE 的 ExecutableItem 都能满足该条件，并会被消耗。如果你不希望出现这种情况，请启用此功能。
* 示例：

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

* 信息：此功能需要名为 "Vault" 的插件。此功能允许激活器将 Vault 中的金钱作为必需条件。如果玩家满足该条件，所需金钱会被消耗，激活器随即运行。
  * `cancelEventIfError`：布尔值，表示当玩家不满足必需条件时，事件是否会被取消。
    * 也就是说，例如有一个 PLAYER\_HIT\_ENTITY 事件，事件发生了，但玩家不满足触发激活器所需的条件，如果启用此功能，PLAYER\_HIT\_ENTITY 事件会被取消，因此即使玩家在点击/攻击实体，该实体也不会受到伤害，因为事实上该事件并没有发生，它被取消了。
  * `errorMessage`：当玩家不满足必需条件时发送给玩家的字符串消息。
  * `requiredMoney`：浮点数值，表示作为必需条件所需的金钱数量。
* 示例：

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMoney:
      requiredMoney: 1200.0
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredLevel <CustomTag type="premium" />

* 信息：此功能允许激活器将原版经验等级作为必需条件。如果玩家满足该条件，所需经验等级会被消耗，激活器随即运行。不要将经验等级与经验混淆，更多信息请见 [Experience](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`：布尔值，表示当玩家不满足必需条件时，事件是否会被取消。
    * 也就是说，例如有一个 PLAYER\_HIT\_ENTITY 事件，事件发生了，但玩家不满足触发激活器所需的条件，如果启用此功能，PLAYER\_HIT\_ENTITY 事件会被取消，因此即使玩家在点击/攻击实体，该实体也不会受到伤害，因为事实上该事件并没有发生，它被取消了。
  * `errorMessage`：当玩家不满足必需条件时发送给玩家的字符串消息。
  * `requiredLevel`：整数值，表示作为必需条件所需的 Minecraft 原版经验等级数量。
* 示例：

```yaml
 activators:  
  activator1: # Activator ID, you can create as many activators on the activator
     requiredLevel:
      requiredLevel: 50
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### requiredExperience <CustomTag type="premium" />

* 信息：此功能允许激活器将 Minecraft 原版经验作为必需条件。如果玩家满足该条件，所需经验会被消耗，激活器随即运行。不要将经验与经验等级混淆，它们是不同的东西，更多信息请见 [Experience](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`：布尔值，表示当玩家不满足必需条件时，事件是否会被取消。
    * 也就是说，例如有一个 PLAYER\_HIT\_ENTITY 事件，事件发生了，但玩家不满足触发激活器所需的条件，如果启用此功能，PLAYER\_HIT\_ENTITY 事件会被取消，因此即使玩家在点击/攻击实体，该实体也不会受到伤害，因为事实上该事件并没有发生，它被取消了。
  * `errorMessage`：当玩家不满足必需条件时发送给玩家的字符串消息。
  * `requiredExperience`：整数值，表示作为必需条件所需的经验数量。
* 示例：

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExperience:
      requiredExperience: 20
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### RequiredMana <CustomTag type="premium" />

* 信息：此功能允许激活器将来自 [**AureliumSkills**](https://www.spigotmc.org/resources/auraskills.81069/)、[**MMOCore**](https://www.spigotmc.org/resources/%E2%AD%90-mmocore-%E2%AD%90-classes-skills-levels-skill-trees-professions-mana-waypoints.70575/) 和 [**AuraSkills**](https://www.spigotmc.org/resources/auraskills.81069/) 的魔力作为必需条件。如果玩家满足该条件，所需魔力会被消耗，激活器随即运行。
  * `cancelEventIfError`：布尔值，表示当玩家不满足必需条件时，事件是否会被取消。
    * 也就是说，例如有一个 PLAYER\_HIT\_ENTITY 事件，事件发生了，但玩家不满足触发激活器所需的条件，如果启用此功能，PLAYER\_HIT\_ENTITY 事件会被取消，因此即使玩家在点击/攻击实体，该实体也不会受到伤害，因为事实上该事件并没有发生，它被取消了。
  * `errorMessage`：当玩家不满足必需条件时发送给玩家的字符串消息。
  * `requiredMana`：整数值，表示作为必需条件所需的魔力数量。
* 示例：

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMana:
      requiredMana: 10
      errorMessage: '&c You dont meet the requirement'
```

:::info
兼容 AureliumSkills、MMOCore 和 AuraSkills
:::

### RequiredMagic (EcoSkills) <CustomTag type="premium" />

* 信息：此功能允许激活器将来自 [**EcoSkills**](https://www.spigotmc.org/resources/ecoskills-%E2%AD%95-addictive-mmorpg-skills-%E2%9C%85-create-skills-stats-effects-mana-%E2%9C%A8-plug-play.95541/) 的魔法值作为必需条件。如果玩家满足该条件，所需魔法值会被消耗，激活器随即运行。
  * `cancelEventIfError`：布尔值，表示当玩家不满足必需条件时，事件是否会被取消。
    * 也就是说，例如有一个 PLAYER\_HIT\_ENTITY 事件，事件发生了，但玩家不满足触发激活器所需的条件，如果启用此功能，PLAYER\_HIT\_ENTITY 事件会被取消，因此即使玩家在点击/攻击实体，该实体也不会受到伤害，因为事实上该事件并没有发生，它被取消了。
  * `errorMessage`：当玩家不满足必需条件时发送给玩家的字符串消息。
  * `magicID`：EcoSkills 中魔法的 ID。
  * `amount`：作为必需条件所需的该 magicID 魔法值的数量。

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMagics:
      requiredMagic_0: # requiredMagic ID, you can create as many requiredMagic on the requiredMagics
        magicID: mana
        amount: 70
      errorMessage: '&c You dont meet the requirement'
```
