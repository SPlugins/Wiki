---
description: >-
  Ideias práticas para criar itens personalizados com ExecutableItems no
  SPlugins: habilidades, armaduras, armas e muito mais.
source_hash: 267b9196d0e24db3
translated_at: '2026-10-03T10:46:53.773Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Ideias de itens, como criar...?

## O que é esta página?

* Esta página será uma explicação em termos gerais de ideias comuns de itens que as pessoas perguntam como fazer, então, se você quer criar algo e não sabe como fazer, você deveria dar uma olhada aqui primeiro, talvez sua pergunta esteja aqui, ou um método parecido, que você possa pensar em como recriar olhando como o plugin funciona ^^

:::info
Esta página te diz como fazer coisas, ou te dá uma ideia, se você não sabe como uma condição funciona, como um comando funciona, como um placeholder funciona, etc, este não é o lugar para aprender, você pode explorar a wiki para verificar essas seções, aqui você só vai pegar a ideia, não um tutorial.
:::

### Eu gostaria que uma habilidade do meu ExecutableItem não funcionasse em uma região específica

* Dentro do ativador que tem sua "habilidade", vá em **playerConditions** e procure por "**ifNotInRegion**" e use como quiser, com ela você pode colocar regiões em **blacklist**.

### Eu gostaria que uma habilidade do meu ExecutableItem só funcionasse em uma região específica

* Dentro do ativador que tem sua "habilidade", vá em **playerConditions** e procure por "**ifInRegion**" e use como quiser, com ela você pode colocar regiões em **whitelist**.

### Eu gostaria que meu item tivesse uma confirmação antes de usar o item

* Basta usar a condição customizada de EI dentro do ativador e ativar "ifNeedPlayerConfirmation"

### Armadura que queima o inimigo que te acerta

* Crie um ativador **PLAYER_RECEIVE_HIT_BY_PLAYER** e em **targetCommands** use o comando BURN <seconds>
* Se quiser o mesmo com entidades, basta fazer o mesmo mas com **PLAYER_RECEIVE_HIT_BY_ENTITY**

:::info
Não esqueça de configurar os **detailedSlots** corretos
:::

### Item que só funciona em claim pessoal

* Dentro do ativador que você quiser, adicione a **playerCondition ifPlayerMustBeOnHisClaim**

### Item que só funciona em claim pessoal e não em áreas não reivindicadas

* Crie uma condição de placeholder dentro do ativador que você quiser com este formato
  * **PLAYER_STRING**
  * **NOT EQUALS**
  * part1: %griefprevention_currentclaim_ownername%
  * part2: Unclaimed

### Como fazer um item que atrai outros jogadores para você?

* Dentro do ativador que você quiser, em commands, use o comando AROUND combinado com CUSTOMDASH1 usando os placeholders de posição do jogador. Então, ao clicar com o botão direito, o comando CUSTOMDASH1 vai fazer um dash das pessoas AROUND você para as SUAS COORDENADAS, basicamente puxando as pessoas.

### Como criar um treecapitator?

* Ativador **PLAYER_BREAK_BLOCK** e em **blockCommands** use o comando **VEINBREAKER**

### Eu gostaria de desabilitar o equipamento do capacete do jogador

* Crie um ativador **PLAYER_EQUIP_THE_EI** e ative **cancelEvent**

### Desabilitar nametag ao clicar

* Crie um ativador PLAYER_CLICK_ON_ENTITY -> detailedClick right e ative cancel event

### Eu gostaria de criar uma armadura que te dá mais...

* Se o que você quer é adicionar **heart containers**, **velocidade**, **resistência a knockback**, **armadura**, etc na sua armadura, espada, picareta, no que você quiser, você tem que trabalhar com **atributos**.

### Como executar um comando ao clicar em um jogador

* Basta usar o ativador PLAYER_CLICK_ON_PLAYER e adicionar em commands o que você quiser

:::info
O mesmo se você quiser executar o comando ao acertar (HIT), mas com o ativador PLAYER_HIT_PLAYER
:::

### Item que desabilita o knockback

* A melhor forma de conseguir isso é usando atributos e KNOCKBACK RESISTANCE, mas se você quiser que funcione em qualquer lugar do seu inventário, crie um ativador PLAYER_RECEIVE_HIT_GLOBAL e teleporte o jogador para ele mesmo, algo como
  * execute at %player% run tp %player% ~ ~ ~

### Eu gostaria de um item que dê lentidão a todas as pessoas ao redor

* Use o comando AROUND e dê o efeito com os placeholders de around. Verifique o comando AROUND na wiki para mais informações.

### Desabilitar a aplicação de corante de bloco em placas e coleiras de lobo

* Para a PLACA (SIGN):
  * Ativador: PLAYER_RIGHT_CLICK
  * ONLY_BLOCK
  * detailedBlocks: <Here add the signs you want to block>
  * E ative cancel event
* Para as coleiras de lobo:
  * Ativador: PLAYER_CLICK_ON_ENTITY
  * detailedClick: RIGHT
  * detailedEntities: WOLF
  * E ative cancel event

### Criar um lobo que fica por "x" segundos e depois desaparece

Se você quiser criar algo como um lobo de estimação que dura "x" segundos, adicione isso:

```
playerCommands:
- execute at %player% run summon wolf ~ ~ ~ {Owner: %player%,Tags:["%player%wolf"]}
- DELAY 10
- execute run kill @e[tag=%player%wolf]
just modify the delay depending the time you want the wolf to be alive
```

### Armadura que desabilita o dano de fogo-lava

* Crie um ativador PLAYER_RECEIVE_HIT_GLOBAL e em detailedDamage adicione LAVA, FIRE_TICK e FIRE, depois ative cancelEvent nesse ativador.
*   Certifique-se de selecionar o detailedSlot correto da peça de armadura que você está usando

    Se você quiser desabilitar a animação de fogo, o mais próximo que você pode conseguir é criando um ativador LOOP com o comando REMOVEBURN.

### Armadura que permite respirar na água

* Crie um ativador LOOP, selecione o detailedSlot correto e dê ao jogador o efeito de water_breathing.

### Desabilitar o bloco de lavagem de armadura de couro tingida no caldeirão

* Basta criar um ativador RIGHT_CLICK, depois typeTarget: ONLY_BLOCK_CLICK, detailedBlocks: CAULDRON e ativar cancel event.

### Item que abre uma GUI

* Plugins de GUI normalmente têm um lugar para adicionar um jogador, por exemplo, o comando seria /opengui <player>, então dentro do seu item você tem que adicionar /opengui %player%
  * se o comando for diferente, apenas mude isso, por exemplo /enchanttable %player%
* Se o seu plugin não tiver isso, em vez de adicionar um lugar para o jogador, use SUDOOP, por exemplo:
  * SUDOOP opengui
  * SUDOOP enchanttable

### Impedir que o tridente seja lançado

* Adicione um ativador PLAYER_LAUNCH_PROJECTILE e cancelEvent em true

### Eu gostaria de desabilitar o dano de queda para minha armadura

* Use o ativador PLAYER_RECEIVE_HIT_GLOBAL e especifique em detailedDamage FALL, depois ative cancel event

### Desabilitar a coleta de água com garrafa

* PLAYER_RIGHT_CLICK e ative cancel event

### Verificar se um jogador está pescando outro jogador

* Use o ativador PROJECTILE_HIT_PLAYER, PLAYER_FISH_PLAYER, um ativador LOOP e uma variável. (Também alguns ativadores para prevenir bugs)
  * Quando a VARA acertar o jogador, PROJECTILE_HIT_PLAYER vai executar, então defina sua variável para "%target%"
  * O ativador loop só vai funcionar se a variável for diferente de "NO", e você pode usar a variável para atingir o jogador pescado.
  * E se o jogador PESCAR o alvo, defina a variável para "NO", então agora ela reseta e para de funcionar
  * Agora os ativadores para prevenir bugs são PLAYER_DROP_THE_EI e PLAYER_DESELECT_THE_EI, resete a variável nesses OU cancele o evento.

### Invocar um raio no cursor

* Primeiro crie um ativador PLAYER_ALL_CLICK ou PLAYER_RIGHT_CLICK ou PLAYER_LEFT_CLICK
* Depois em commands use o comando customizado [SPAWNENTITYONCURSOR](/tools-for-all-plugins/custom-commands/player-and-target-commands#spawnentityoncursor) [LIGHTNING](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html#LIGHTNING) 1
  * Por padrão isso não causa dano, então, adicionalmente, você pode adicionar o comando customizado `DAMAGE <number>`

### Como aumentar a vida máxima "x" cada vez que o ativador for acionado

* Para aumentar sua vida máxima você precisa do PlaceholderAPI e da expansão Player, e o comando que você vai usar é:
  * execute run attribute %player% minecraft:generic.max_health base set %player_max_health%+2

### Como recuperar vida por golpe

* Em um ativador relacionado a golpe, como PLAYER_HIT_PLAYER e PLAYER_HIT_ENTITY, use o comando REGAIN_HEALTH em playerCommands, verifique esse comando na seção Commands para mais informações.
* Se quiser recuperar o mesmo dano que causou, use o placeholder de EI **%last_damage_dealt%**

### Arco que explode quando o projétil acerta o bloco

* Crie um ativador PROJECTILE_HIT_BLOCK no seu item, e em commands você pode usar
  * EXPLODE blockCommand
  * execute at %player% run summon tnt %block_x_int% %block_y_int% %block_z_int%
    * Depois dessa linha você vai precisar de um execute run kill %projectile_uuid%
  * ou o mesmo de antes, mas invocando um creeper

### Eu gostaria de desabilitar o carregamento do arco ou da besta

* Isso ainda não é possível usando ExecutableItems, a única coisa que EI pode fazer é impedir que o arco ou a besta disparem o projétil, mas carregá-lo? não.

### Como criar uma armadura que desabilita o congelamento do jogador (1.18)

* Você pode executar o comando FREEZE em loop, assim:

```
    playerCommands:
    - 'LOOP START: 20'
    - GLACIAL_FREEZE 1
    - DELAYTICK 1
    - LOOP END
```

### Eu quero fazer o ativador funcionar apenas se o jogador tiver certo valor em um scoreboard

Basta usar a expansão Scoreboard do PlaceholderAPI, depois use os placeholders dela na seção placeholderCondition dentro do seu ativador ^^
