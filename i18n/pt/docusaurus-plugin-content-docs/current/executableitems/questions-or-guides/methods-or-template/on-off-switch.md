---
description: >-
  Guia do ExecutableItems que explica como criar um interruptor ligado/desligado
  usando variáveis e ativadores no plugin SPlugins.
source_hash: 739c8a7115be416e
translated_at: '2026-10-03T10:48:08.024Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Interruptor Ligado/Desligado

## Requisitos+

* ExecutableItems **Premium**

## OBSERVAÇÃO: CRIE 2 ATIVADORES PRIMEIRO.

## Primeiro ativador

### Criar uma variável

* É necessário criar uma variável para que possamos ter um identificador de se o interruptor está ligado ou desligado

![Você clica neste ícone para abrir o editor de variáveis](https://media.ssomar.com/m/docs-img-imgur-nrkkixb.png)

![Basicamente você só cria uma variável](https://media.ssomar.com/m/docs-img-imgur-jubywre.png)

![Para o id, não há nada muito específico. Para este guia, vamos nomear nossa variável como "x"](https://media.ssomar.com/m/docs-img-imgur-ua4vmpu.png)

![Não importa muito se é um número ou uma string](https://media.ssomar.com/m/docs-img-imgur-nut1h4h.png)

![Para este tutorial usaremos o valor 0](https://media.ssomar.com/m/docs-img-imgur-bj4cpf7.png)

### Crie seu item e adicione um ativador

* Nesse caso, será um PLAYER\_ALL\_CLICK

![](https://media.ssomar.com/m/docs-img-image-94.png)

### Comandos

* Digite os comandos que você deseja

### Variables Modification

![Primeiro clique neste ícone no editor do ativador](https://media.ssomar.com/m/docs-img-imgur-lvcmrrl.png)

![Crie uma modificação de variável](https://media.ssomar.com/m/docs-img-imgur-r50hlwy.png)

![Selecione a variável que criamos anteriormente](https://media.ssomar.com/m/docs-img-imgur-sksrdko.png)

![Defina o tipo de modificação como SET](https://media.ssomar.com/m/docs-img-imgur-bbwjzw8.png)

![Definiremos um valor diferente de 0 para que o mesmo ativador não possa rodar pela segunda vez](https://media.ssomar.com/m/docs-img-imgur-av856uf.png)

### Placeholder Condition

* Isso é necessário para controlar qual ativador vai rodar 

![Primeiro vamos até as condições](https://media.ssomar.com/m/docs-img-image-419.png)

![Depois até as condições de placeholder](https://media.ssomar.com/m/docs-img-image-303.png)

![É claro, temos que criar uma condição de placeholder](https://media.ssomar.com/m/docs-img-image-429.png)

![PLAYER\_STRING também é uma opção](https://media.ssomar.com/m/docs-img-imgur-nxuypmm.png)

![Usaremos o placeholder da variável que criamos. Use %var\_x\_int% se você ainda usou PLAYER\_STRING](https://media.ssomar.com/m/docs-img-imgur-0qdthro.png)

![Usaremos este comparador](https://media.ssomar.com/m/docs-img-imgur-urvtgm8.png)

![Usaremos o valor 0 como a opção "off"](https://media.ssomar.com/m/docs-img-imgur-cuorrfg.png)

### Adicione o cooldown do outro item ao próprio item

* Por exemplo, o id do item ei é `onoff-demo`. Você então terá que ir até este ícone e seguir as imagens.

![](https://media.ssomar.com/m/docs-img-imgur-mmhsap4.png)

![](https://media.ssomar.com/m/docs-img-imgur-anndswf.png)

![](https://media.ssomar.com/m/docs-img-imgur-q6vjclp.png)

Por exemplo, o id do interruptor ligado/desligado é "faker", então selecione "faker".

![](https://media.ssomar.com/m/docs-img-imgur-x1dtqww.png)

Desde que a versão 5.0 saiu, os ids dos ativadores começam em "activator0" em vez de "activator1". De toda forma, você vai querer selecionar o segundo ativador, já que os ativadores rodam de cima para baixo. 

:::info
Essa opção é importante porque, se não houver cooldown, ele vai atropelar o 2º ativador que deveria desligar o ativador
:::

![Defina o cooldown para 1 ou 2. Você decide](https://media.ssomar.com/m/docs-img-imgur-zv8ioie.png)

![](https://media.ssomar.com/m/docs-img-imgur-izxlfq9.png)

É recomendado definir isso como true se você quiser que o item possa ser usado em sequência rápida (spammable). Um tick já é suficiente para evitar o atropelamento mencionado acima.

![](https://media.ssomar.com/m/docs-img-imgur-gb5oud0.png)

## Segundo ativador

* Usaremos novamente **`PLAYER_ALL_CLICK`**

![](https://media.ssomar.com/m/docs-img-image-165.png)

###

### Comandos

* Digite os comandos que você deseja

### Variables Modification

![Primeiro clique neste ícone no editor do ativador](https://media.ssomar.com/m/docs-img-imgur-lvcmrrl.png)

![Crie uma modificação de variável](https://media.ssomar.com/m/docs-img-imgur-r50hlwy.png)

![Selecione a variável que criamos anteriormente](https://media.ssomar.com/m/docs-img-imgur-sksrdko.png)

![Defina o tipo de modificação como SET](https://media.ssomar.com/m/docs-img-imgur-bbwjzw8.png)

![Definiremos um valor diferente de 1 para que o mesmo ativador não possa rodar pela segunda vez](https://media.ssomar.com/m/docs-img-imgur-0kzktpe.png)

### Placeholder Condition

* Isso é necessário para controlar qual ativador vai rodar 

![Primeiro vamos até as condições](https://media.ssomar.com/m/docs-img-image-419.png)

![Depois até as condições de placeholder](https://media.ssomar.com/m/docs-img-image-303.png)

![É claro, temos que criar uma condição de placeholder](https://media.ssomar.com/m/docs-img-image-429.png)

![PLAYER\_STRING também é uma opção](https://media.ssomar.com/m/docs-img-imgur-nxuypmm.png)

![Usaremos o placeholder da variável que criamos. Use %var\_x\_int% se você ainda usou PLAYER\_STRING](https://media.ssomar.com/m/docs-img-imgur-0qdthro.png)

![Usaremos este comparador](https://media.ssomar.com/m/docs-img-imgur-urvtgm8.png)

![Usaremos o valor 1 como a opção "on"](https://media.ssomar.com/m/docs-img-imgur-bjkv5hy.png)

### Adicione o cooldown do outro item ao próprio item

* Por exemplo, o id do item ei é `onoff-demo`. Você então terá que ir até este ícone e seguir as imagens.

![](https://media.ssomar.com/m/docs-img-imgur-mmhsap4.png)

![](https://media.ssomar.com/m/docs-img-imgur-anndswf.png)

![](https://media.ssomar.com/m/docs-img-imgur-q6vjclp.png)

Por exemplo, o id do interruptor ligado/desligado é "faker", então selecione "faker".

![](https://media.ssomar.com/m/docs-img-imgur-tfly1dt.png)

Desde que a versão 5.0 saiu, os ids dos ativadores começam em "activator0" em vez de "activator1". De toda forma, você vai querer selecionar o segundo ativador, já que os ativadores rodam de cima para baixo. 

:::info
Essa opção é importante porque, se não houver cooldown, ele vai atropelar o 2º ativador que deveria desligar o ativador
:::

![Defina o cooldown para 1 ou 2. Você decide](https://media.ssomar.com/m/docs-img-imgur-zv8ioie.png)

![](https://media.ssomar.com/m/docs-img-imgur-izxlfq9.png)

É recomendado definir isso como true se você quiser que o item possa ser usado em sequência rápida (spammable). Um tick já é suficiente para evitar o atropelamento mencionado acima.

![](https://media.ssomar.com/m/docs-img-imgur-gb5oud0.png)

##

### Salve o item do EI

* Deve ficar assim (adicionamos comandos para dizer ON (activator1) e OFF (activator2) para mostrar a você como funciona :p

## Configuração do item

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

## Comentário final

Se você tiver alguma dúvida ou achar que o guia não ficou claro o suficiente, sinta-se à vontade para perguntar no Discord.\
Nós vamos ajudar! 😁😁
