---
description: >-
  Veja como criar um bônus de conjunto de armadura no ExecutableItems usando
  ativadores LOOP e condições de conjunto completo.
source_hash: 6cf2ef4cf39ef5e2
translated_at: '2026-10-03T10:32:42.497Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Bônus de Conjunto de Armadura

:::tip Novidade: sets nativos
O ExecutableItems agora tem [sets](/executableitems/configurations/sets-configuration) nativos: um arquivo por set, vários tiers (2 peças, 4 peças...), efeitos e atributos removidos de forma limpa quando uma peça é retirada, e nenhum LOOP rodando o tempo todo. Use-os para novos sets. O método abaixo ainda funciona.
:::

## Vamos criar!

### Primeiro precisamos criar as peças do conjunto de armadura

* Para este exemplo, o nome dos itens será:\
  Elmo = **nameofhelmet.yml**\
  Peitoral = **nameofchestplate.yml**\
  Calças = **nameofleggings.yml**\
  Botas = **nameofboots.yml**

![](https://media.ssomar.com/m/docs-img-image-145.png)

* Para criá-los
  * /ei create nameofhelmet -> Save
  * /ei create nameofchestplate -> Save
  * /ei create nameofleggings -> Save
  * /ei create nameofboots -> Save

### Agora crie o ativador que queremos ativar ao ter o conjunto completo

:::info
Neste exemplo vamos criar uma armadura que te dá força sempre que você tiver o conjunto completo, então, vamos precisar de um LOOP ACTIVATOR, além disso você precisa escolher qual parte da armadura será a "principal", aquela de onde todos os comandos serão executados. Neste caso a "principal" será o **elmo**.
:::

* Então, como dito antes, o ativador será **LOOP**

![](https://media.ssomar.com/m/docs-img-image-399.png)

* Queremos que isso funcione apenas quando equipado, então em **detailedSlots** vamos configurar para funcionar apenas quando estiver no **slot da cabeça.**

![](https://media.ssomar.com/m/docs-img-image-189.png)

* E, para o efeito do bônus vamos usar o comando de efeito vanilla:

```
minecraft:effect give %player% strength 10 0
```

### Condição do conjunto completo

Certo! Acabamos de criar a "habilidade" que o conjunto completo tem, mas precisamos adicionar a **condição** de ter o conjunto completo!!

* Vá em Player conditions->ifHasExecutableItems

![](https://media.ssomar.com/m/docs-img-image-193.png)

![](https://media.ssomar.com/m/docs-img-image-172.png)

![](https://media.ssomar.com/m/docs-img-image-332.png)

Depois adicione 3 condições IfHasExecutableItem para as outras 3 partes da armadura, neste caso, como escolhi o elmo como principal, preciso adicionar o peitoral, as calças e as botas.

Vou explicar adicionando o peitoral como condição primeiro:

* Então, na foto acima, adicione uma condição e você verá isso
* ![](https://media.ssomar.com/m/docs-img-image-176.png)
* O primeiro é o EI necessário, neste caso, vou rolar para baixo até pegar o peitoral
* ![](https://media.ssomar.com/m/docs-img-image-389.png)
* Depois de pegá-lo, vamos para a próxima opção -> "Amount", que será 1
* ![](https://media.ssomar.com/m/docs-img-image-258.png)
* E então, o slot em que queremos que esse ExecutableItem esteja, no caso do peitoral, o slot do peitoral.
* ![](https://media.ssomar.com/m/docs-img-image-179.png)
* ![](https://media.ssomar.com/m/docs-img-image-427.png)

:::info
Lembre-se de desativar a mão principal e ativar apenas 1 slot, o que você quiser.
:::

* **E neste caso não vamos usar a condição de uso, então não toque nela.**
* E salve.

Você tem que fazer o mesmo para as outras 2 peças, feito isso, teremos 3 condições no total

![](https://media.ssomar.com/m/docs-img-image-249.png)

* E é isso! **Salve o item** e teste!

![](https://media.ssomar.com/m/docs-img-image-348.png)

Funciona! Agora.. se você não tiver uma das armaduras, a condição vai te avisar..

![](https://media.ssomar.com/m/docs-img-image-384.png)

Para desativá-la vamos precisar entrar no editor de condição novamente e clicar aqui

![](https://media.ssomar.com/m/docs-img-image-153.png)

E definir para NO VALUE

![](https://media.ssomar.com/m/docs-img-image-120.png)

E é isso, agora salve e nenhuma mensagem de condição vai aparecer.

E agora.. é isso!! 😁😁😎

:::info
Se tiver alguma dúvida, pode perguntar no **Discord** ^^

Método por Special70
:::

Exemplos:


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
