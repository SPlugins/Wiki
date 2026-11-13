---
description: 使用变量和两个激活器，在 ExecutableItems 中制作可开启/关闭的物品开关的分步指南，包含占位符条件与冷却设置。
source_hash: 739c8a7115be416e
translated_at: '2026-11-13T18:02:57.467Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 开关（On / Off Switch）

## 要求+

* ExecutableItems **Premium**

## 注意：请先创建 2 个激活器。

## 第一个激活器

### 创建变量

* 需要创建一个变量，这样我们就有一个标识符来表示开关是开启还是关闭

![点击此图标打开变量编辑器](https://media.ssomar.com/m/docs-img-imgur-nrkkixb.png)

![只需创建一个变量即可](https://media.ssomar.com/m/docs-img-imgur-jubywre.png)

![ID 没有特别的要求。在本指南中，我们将变量命名为 "x"](https://media.ssomar.com/m/docs-img-imgur-ua4vmpu.png)

![是数字还是字符串并不重要](https://media.ssomar.com/m/docs-img-imgur-nut1h4h.png)

![在本教程中，我们将使用 0 作为值](https://media.ssomar.com/m/docs-img-imgur-bj4cpf7.png)

### 创建你的物品，并添加一个激活器

* 在本例中使用 PLAYER\_ALL\_CLICK

![](https://media.ssomar.com/m/docs-img-image-94.png)

### Commands

* 输入你想要执行的命令

### Variables Modification

![首先在激活器编辑器中点击此图标](https://media.ssomar.com/m/docs-img-imgur-lvcmrrl.png)

![创建一个变量修改](https://media.ssomar.com/m/docs-img-imgur-r50hlwy.png)

![选择我们之前创建的变量](https://media.ssomar.com/m/docs-img-imgur-sksrdko.png)

![将修改类型设置为 SET](https://media.ssomar.com/m/docs-img-imgur-bbwjzw8.png)

![我们将设置一个不为 0 的值，这样同一个激活器就无法再次运行](https://media.ssomar.com/m/docs-img-imgur-av856uf.png)

### 占位符条件

* 这用于控制哪个激活器将会运行 

![首先进入条件](https://media.ssomar.com/m/docs-img-image-419.png)

![然后进入占位符条件](https://media.ssomar.com/m/docs-img-image-303.png)

![当然，我们需要创建一个占位符条件](https://media.ssomar.com/m/docs-img-image-429.png)

![PLAYER\_STRING 也是一个可选项](https://media.ssomar.com/m/docs-img-imgur-nxuypmm.png)

![我们将使用为所创建的变量提供的占位符。如果你仍然使用 PLAYER\_STRING，请使用 %var\_x\_int%](https://media.ssomar.com/m/docs-img-imgur-0qdthro.png)

![我们将使用这个比较符](https://media.ssomar.com/m/docs-img-imgur-urvtgm8.png)

![我们将使用值 0 作为 "off" 选项](https://media.ssomar.com/m/docs-img-imgur-cuorrfg.png)

### 将另一个激活器的冷却添加到物品本身

* 例如，该 EI 物品的 ID 是 `onoff-demo`。然后你需要点击此图标，再按照图片操作。

![](https://media.ssomar.com/m/docs-img-imgur-mmhsap4.png)

![](https://media.ssomar.com/m/docs-img-imgur-anndswf.png)

![](https://media.ssomar.com/m/docs-img-imgur-q6vjclp.png)

例如，开关的 ID 是 "faker"，那么就选择 "faker"。

![](https://media.ssomar.com/m/docs-img-imgur-x1dtqww.png)

自 5.0 发布以来，激活器 ID 从 "activator0" 开始，而不是 "activator1"。总之，你需要选择第二个激活器，因为激活器是从上到下依次运行的。 

:::info
这个选项很重要，因为如果没有冷却，它会直接冲过第二个本应用来关闭激活器的激活器
:::

![将冷却设置为 1 或 2，由你决定](https://media.ssomar.com/m/docs-img-imgur-zv8ioie.png)

![](https://media.ssomar.com/m/docs-img-imgur-izxlfq9.png)

如果你希望物品可以连续快速使用，建议将其设置为 true。一个 tick 就足以防止上面提到的冲过现象。

![](https://media.ssomar.com/m/docs-img-imgur-gb5oud0.png)

## 第二个激活器

* 我们将再次使用 **`PLAYER_ALL_CLICK`**

![](https://media.ssomar.com/m/docs-img-image-165.png)

###

### Commands

* 输入你想要执行的命令

### Variables Modification

![首先在激活器编辑器中点击此图标](https://media.ssomar.com/m/docs-img-imgur-lvcmrrl.png)

![创建一个变量修改](https://media.ssomar.com/m/docs-img-imgur-r50hlwy.png)

![选择我们之前创建的变量](https://media.ssomar.com/m/docs-img-imgur-sksrdko.png)

![将修改类型设置为 SET](https://media.ssomar.com/m/docs-img-imgur-bbwjzw8.png)

![我们将设置一个不为 1 的值，这样同一个激活器就无法再次运行](https://media.ssomar.com/m/docs-img-imgur-0kzktpe.png)

### 占位符条件

* 这用于控制哪个激活器将会运行 

![首先进入条件](https://media.ssomar.com/m/docs-img-image-419.png)

![然后进入占位符条件](https://media.ssomar.com/m/docs-img-image-303.png)

![当然，我们需要创建一个占位符条件](https://media.ssomar.com/m/docs-img-image-429.png)

![PLAYER\_STRING 也是一个可选项](https://media.ssomar.com/m/docs-img-imgur-nxuypmm.png)

![我们将使用为所创建的变量提供的占位符。如果你仍然使用 PLAYER\_STRING，请使用 %var\_x\_int%](https://media.ssomar.com/m/docs-img-imgur-0qdthro.png)

![我们将使用这个比较符](https://media.ssomar.com/m/docs-img-imgur-urvtgm8.png)

![我们将使用值 1 作为 "on" 选项](https://media.ssomar.com/m/docs-img-imgur-bjkv5hy.png)

### 将另一个激活器的冷却添加到物品本身

* 例如，该 EI 物品的 ID 是 `onoff-demo`。然后你需要点击此图标，再按照图片操作。

![](https://media.ssomar.com/m/docs-img-imgur-mmhsap4.png)

![](https://media.ssomar.com/m/docs-img-imgur-anndswf.png)

![](https://media.ssomar.com/m/docs-img-imgur-q6vjclp.png)

例如，开关的 ID 是 "faker"，那么就选择 "faker"。

![](https://media.ssomar.com/m/docs-img-imgur-tfly1dt.png)

自 5.0 发布以来，激活器 ID 从 "activator0" 开始，而不是 "activator1"。总之，你需要选择第二个激活器，因为激活器是从上到下依次运行的。 

:::info
这个选项很重要，因为如果没有冷却，它会直接冲过第二个本应用来关闭激活器的激活器
:::

![将冷却设置为 1 或 2，由你决定](https://media.ssomar.com/m/docs-img-imgur-zv8ioie.png)

![](https://media.ssomar.com/m/docs-img-imgur-izxlfq9.png)

如果你希望物品可以连续快速使用，建议将其设置为 true。一个 tick 就足以防止上面提到的冲过现象。

![](https://media.ssomar.com/m/docs-img-imgur-gb5oud0.png)

##

### 保存 EI 物品

* 它应该看起来像这样（我们添加了命令来显示 ON（activator1）和 OFF（activator2），以向你展示它是如何工作的 :p

## 物品配置

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

## 最后的话

如果你有任何问题，或者觉得本指南不够清晰，欢迎在 Discord 中提问。\
我们会帮助你！😁😁
