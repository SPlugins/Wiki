---
description: >-
  Entenda como as condições do ExecutableItems permitem definir critérios,
  condições ou requisitos no plugin.
source_hash: 5b9669d43610ab52
translated_at: '2026-10-03T10:32:22.765Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Condições de Jogador e Alvo

## Configurações de condição
Todas as condições são formatadas da mesma forma, você tem:
* `{theCondition}`
* `{theCondition}Msg`: A mensagem a ser enviada se a condição for inválida (sem ela, uma mensagem de erro padrão é enviada, exceto para o activator LOOP do ExecutableItems)
* `{theCondition}Cancel`: Se o evento deve ou não ser cancelado se a condição for inválida
* `{theCondition}Cmds`: O(s) comando(s) a ser(em) executado(s) se a condição for inválida
* Exemplo:

```yaml
playerConditions:
    ifSneaking: true
    ifSneakingMsg: "&cMy custom error message here"
    ifSneakingCancel: true
    ifSneakingCmds:
    - kill %player%
```

:::info
Para condições numéricas, você pode atribuir 2 condições ao mesmo tempo.
Exemplo:
"Eu quero criar uma condição que só ativa se o valor for maior que 50, mas menor que 250"
`{theCondition}: 50 < CONDITION < 250`
:::

:::info
Você quer adicionar player conditions?

Então, na parte do activator, adicione playerConditions.

E obviamente é targetConditions para a condição do alvo.
:::

:::info
**INFO GIFS:** O activator usado nos GIFS para demonstrar como cada condição funciona é o activator LOOP, por isso a mensagem de erro da condição aparece múltiplas vezes.
:::

### ifSneaking - Not

* Descrição: Verifica se o jogador está agachado
* Exemplo:

```yaml
playerConditions:
    ifSneaking: false
    ifSneakingMsg: '' #<- Here is where you will add the custom message.
    ifNotSneaking: true
    ifNotSneakingMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o jogador está (não) agachado, o activator será ativado.
  * Se o jogador está voando e desce pressionando o botão de agachar, o activator será ativado. para ifSneaking
* Obrigatório: NÃO (Padrão: false)

![](https://media.ssomar.com/m/docs-img-giphy-sygm0wxk3y1c0u4u3d.gif)

:::danger
Não ative ifNotSneaking se a condição ifSneaking estiver ativada, pois não faz sentido ter ambas ativadas
:::

### ifSprinting - Not

* Descrição: Verifica se o jogador está correndo
* Exemplo:

```yaml
playerConditions:
    ifSprinting: false
    ifSprintingMsg: '' #<- Here is where you will add the custom message.
    ifNotSprinting: false
    ifNotSprintingMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o jogador está (não) correndo, o activator será ativado.
* Obrigatório: NÃO (Padrão: false)

### ifFlying - Not

* Descrição: Verifica se o jogador está voando
* Exemplo:

```yaml
playerConditions:
    ifFlying: false
    ifFlyingMsg: '' #<- Here is where you will add the custom message.
    ifNotFlying: false
    ifNotFlyingMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o jogador alterna o voo clicando duas vezes no botão de pular e (não) voa, o activator será ativado.
* Obrigatório: NÃO (Padrão: false)

![](https://media.ssomar.com/m/docs-img-giphy-gqp59l3zk78sas94uo.gif)

### ifBlocking - Not

* Descrição: Verifica se o jogador está segurando um escudo e clicando com o botão direito nele (bloqueando)
* Exemplo:

```yaml
playerConditions:
    ifBlockng: false
    ifBlockingMsg: '' #<- Here is where you will add the custom message.
    ifNotBlockng: false
    ifNotBlockingMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o jogador está (não) bloqueando com um escudo, o activator será ativado
* Obrigatório: NÃO (Padrão: false)

![](https://media.ssomar.com/m/docs-img-giphy-xihlvwpznviu4c7786.gif)

### ifGliding - Not

* Descrição: Verifica se o jogador está planando
* Exemplo:

```yaml
playerConditions:
    ifGliding: false
    ifGlidingMsg: '' #<- Here is where you will add the custom message.
    ifNotGliding: false
    ifNotGlidingMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o jogador (não) plana no ar com um elytra, o activator será ativado.
* Obrigatório: NÃO (Padrão: false)

![](https://media.ssomar.com/m/docs-img-giphy-f3px7d1awbudmrj0va.gif)

### ifSwimming - Not

* Descrição: Verifica se o jogador está nadando (1.13 Aquatic Update)
* Exemplo:

```yaml
playerConditions:
    ifSwimming: false
    ifSwimmingMsg: '' #<- Here is where you will add the custom message.
    ifNotSwimming: false
    ifNotSwimmingMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o jogador pula na água e começa a nadar em posição livre, o activator será ativado.
* Obrigatório: NÃO (Padrão: false)

![](https://media.ssomar.com/m/docs-img-giphy-1cfambqwl4j9mmrpbg.gif)

### ifStunned - Not

* Descrição: Verifica se o jogador está atordoado
* Exemplo:

```yaml
playerConditions:
    ifStunned: false
    ifStunnedMsg: '' #<- Here is where you will add the custom message.
    ifNotStunned: false
    ifNotStunnedMsg: ''
```

:::info
Você pode atordoar um jogador executando o comando de jogador personalizado **STUN\_ENABLE**
:::

```
// Example of a stun of 5 seconds
- STUN_ENABLE
- DELAY 5
- STUN_DISABLE
```

* Obrigatório: NÃO (Padrão: false)

### ifIsOnFire - Not

* Descrição: Verifica se o jogador está pegando fogo
* Exemplo:

```yaml
playerConditions:
    ifIsOnFire: false
    ifIsOnFireMsg: '' #<- Here is where you will add the custom message.
    ifIsNotOnFire: false
    ifIsNotOnFireMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o jogador está (não) pegando fogo por cair em lava / andar no fogo, o activator será ativado
* Obrigatório: NÃO (Padrão: false)

### ifIsInTheAir - Not

* Descrição: Verifica se o jogador está no ar.
* Exemplo:

```yaml
playerConditions:
    ifIsInTheAir: false
    ifIsInTheAirMsg: '' #<- Here is where you will add the custom message.
    ifIsNotInTheAir: false
    ifIsNotInTheAirMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o jogador (não) tem blocos sob seus pés, o activator será ativado.
* Obrigatório: NÃO (Padrão: false)

![Isso vai verificar o bloco sob seus pés. Também vai verificar corretamente lajes.](https://media.ssomar.com/m/docs-img-giphy-djjtjpzl1pmkbjnqvu.gif)

### ifLineOfSight

* Descrição: Verifica se o jogador tem linha de visão para uma entidade viva (dentro de 50 blocos).
* Exemplo:

```yaml
playerConditions:
    ifLineOfSight: true
    ifLineOfSightMsg: ''
```

* Situações de exemplo:
  * Se o jogador está olhando diretamente para um mob ou outro jogador dentro de 50 blocos, o activator será ativado.
  * Útil para criar itens que só funcionam quando mirando em uma entidade.
* Obrigatório: NÃO (Padrão: false)

:::info
Esta condição requer a versão do servidor **1.14+**.
:::

### ifPlayerMustBeOnHisTown

* **SUPORTA OS SEGUINTES PLUGINS:**
  * Towny
* Descrição: Verifica se o jogador está em sua cidade.
* Exemplo:

```yaml
playerConditions:
    ifPlayerMustBeOnHisTown: true
    ifPlayerMustBeOnHisTownMsg: '' #<- Here is where you will add the custom message.
```

* Obrigatório: NÃO (Padrão: false)

### ifPlayerMustBeOnHisClaim

* **SUPORTA OS SEGUINTES PLUGINS:**
  * GriefPrevention
  * Lands
  * GriefDefender
  * Residence
* Descrição: Verifica se o jogador está em um claim no qual ele/ela tem permissão.
* Exemplo:

```yaml
playerConditions:
    ifPlayerMustBeOnHisClaim: true
    ifPlayerMustBeOnHisClaimMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o jogador está em um claim que ele/ela possui, o activator será ativado.
  * Se o jogador está em um claim que ele/ela não possui, mas tem permissão, o activator será ativado.
* Obrigatório: NÃO (Padrão: false)

### ifPlayerMustBeOnHisClaimOrWilderness

* **SUPORTA OS SEGUINTES PLUGINS:**
  * GriefPrevention (Retorna válido se o jogador estiver em um claim público do GriefPrevention)
  * Lands
  * GriefDefender
  * Residence
* Descrição: Verifica se o jogador está em um claim no qual ele/ela tem permissão ou em wilderness.
* Exemplo:

```yaml
playerConditions:
    ifPlayerMustBeOnHisClaimOrWilderness: true
    ifPlayerMustBeOnHisClaimOrWildernessMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o jogador está em um claim que ele/ela possui, o activator será ativado.
  * Se o jogador está em um claim que ele/ela não possui, mas tem permissão, o activator será ativado.
  * Se o jogador está em wilderness, o activator será ativado.
* Obrigatório: NÃO (Padrão: false)

### ifPlayerMustBeOnHisIsland

* Descrição: Verifica se o jogador está em sua ilha.
* **Plugins compatíveis:**
  * **IridiumSkyblock**
  * **SuperiorSkyblock2**
  * **BentoBox**
* Exemplo:

```yaml
playerConditions:
    ifPlayerMustBeOnHisIsland: true
    ifPlayerMustBeOnHisIslandMsg: '' #<- Here is where you will add the custom message
```

* Situações de exemplo:
  * Se o jogador está em sua ilha, o activator será ativado.
* Obrigatório: NÃO (Padrão: false)

### ifPlayerMustBeOnHisPlot

* **SUPORTA OS SEGUINTES PLUGINS:**
  * PlotSquared
* Descrição: Verifica se o jogador está em um plot no qual ele/ela tem permissão.
* Exemplo:

```yaml
playerConditions:
    ifPlayerMustBeOnHisPlot: true
    ifPlayerMustBeOnHisPlotMsg: '' #<- Here is where you will add the custom message
```

* Obrigatório: NÃO (Padrão: false)

### ifCursorDistance

* Descrição: Verifica se a direção para onde o jogador está olhando está livre ou bloqueada
* Exemplo:

```yaml
 playerConditions:
  ifCursorDistance: '>5'
  ifCursorDistanceMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Em `">5"`, desde que haja ar além de 5 blocos à sua frente, o activator será ativado
  * Em `"<5"`, se houver blocos de ar 5 blocos à sua frente, o activator não será ativado
* Obrigatório: NÃO

![](https://media.ssomar.com/m/docs-img-giphy-mke7zyoe63jbpg2239.gif)

### ifLightLevel <a href="#iflightlevel" id="iflightlevel"></a>

* Descrição: Verifica se o jogador está em um local com o nível de luz correto
* Exemplo:

```yaml
playerConditions:
  ifLightLevel: ==5
  ifLightLevelMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o valor é `<5`, o activator só será ativado se o nível de luz na localização do jogador for inferior a 5
  * Se o valor é `<=5`, o activator só será ativado se o nível de luz na localização do jogador for 5 ou inferior.
  * Se o valor é `==13`, o activator só será ativado se o nível de luz na localização do jogador for 13.
  * Se o valor é `>5`, o activator só será ativado se o nível de luz na localização do jogador for superior a 5.
  * Se o valor é `>=5`, o activator só será ativado se o nível de luz na localização do jogador for 5 ou superior.
* Obrigatório: NÃO
* Mais informações: Você pode editar a mensagem de erro adicionando isso no arquivo: `ifLightLevelMsg: "&4&lError you need...."` ou no jogo.

​Se o valor é `==13`, o activator só será ativado se o nível de luz na localização do jogador for 13.

![Se o valor é ==13, o activator só será ativado se o nível de luz na localização do jogador for 13.
A mensagem no chat executa um SENDMESSAGE %player\_light\_level% para indicar o nível de luz na minha localização](https://media.ssomar.com/m/docs-img-giphy-krdtyjimugaf88pewk.gif)

### ifPlayerExp

* Descrição: Verifica se o jogador tem a quantidade dita de pontos de experiência.
* Exemplo:

```yaml
playerConditions:
    ifPlayerExp: <8
    ifPlayerExpMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o valor é `<120`, o activator só será ativado se os pontos de experiência do jogador forem inferiores a 120
  * Se o valor é `<=96`, o activator só será ativado se os pontos de experiência do jogador forem 96 ou inferiores.
  * Se o valor é `==13`, o activator só será ativado se os pontos de experiência do jogador forem 13.
  * Se o valor é `>696`, o activator só será ativado se os pontos de experiência do jogador forem superiores a 696.
  * Se o valor é `>=45`, o activator só será ativado se os pontos de experiência do jogador forem 45 ou superiores.
* Obrigatório: NÃO

### ifPlayerLevel

* Descrição: Verifica se o jogador tem a quantidade dita de níveis de experiência.
* Exemplo:

```yaml
playerConditions:
    ifPlayerLevel: <76
    ifPlayerLevelMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o valor é `<700`, o activator só será ativado se os pontos de experiência do jogador forem inferiores a 700
  * Se o valor é `<=1296`, o activator só será ativado se os pontos de experiência do jogador forem 1296 ou inferiores.
  * Se o valor é `==153`, o activator só será ativado se os pontos de experiência do jogador forem 5.
  * Se o valor é `>420`, o activator só será ativado se os pontos de experiência do jogador forem superiores a 420.
  * Se o valor é `>=99`, o activator só será ativado se os pontos de experiência do jogador forem 99 ou superiores.
* Obrigatório: NÃO

### ifPlayerFoodLevel

* Descrição: Verifica se o jogador tem a quantidade dita de comida
* Exemplo:

```yaml
playerConditions:
    ifPlayerFoodLevel: '>=12'
    ifPlayerFoodLevelMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o valor é `<10`, o activator só será ativado se a comida do jogador for inferior a 10
  * Se o valor é `<=10`, o activator só será ativado se a comida do jogador for 10 ou inferior.
  * Se o valor é `==10`, o activator só será ativado se a comida do jogador for 10.
  * Se o valor é `>10`, o activator só será ativado se a comida do jogador for superior a 10.
  * Se o valor é `>=10`, o activator só será ativado se a comida do jogador for 10 ou superior.
* Obrigatório: NÃO

### ifPlayerHealth

* Descrição: Verifica se o jogador tem a quantidade dita de vida
* Exemplo:

```yaml
playerConditions:
    ifPlayerHealth: ==20
    ifPlayerHealthMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o valor é `<10`, o activator só será ativado se a vida do jogador for inferior a 10
  * Se o valor é `<=10`, o activator só será ativado se a vida do jogador for 10 ou inferior.
  * Se o valor é `==10`, o activator só será ativado se a vida do jogador for 20.
  * Se o valor é `>10`, o activator só será ativado se a vida do jogador for superior a 10.
  * Se o valor é `>=10`, o activator só será ativado se a vida do jogador for 10 ou superior.
* Obrigatório: NÃO

![Demonstração mostrando a condição de vida](https://media.ssomar.com/m/docs-img-giphy-lmfxm0llvaeufjsj80.gif)

_Se o valor é `<=10`, o activator só será ativado se a vida do jogador for 10 ou inferior._

### ifPlayerSpeed

* Descrição: Verifica a magnitude da velocidade do jogador (velocidade de movimento).
* Exemplo:

```yaml
playerConditions:
    ifPlayerSpeed: '>=0.1'
    ifPlayerSpeedMsg: ''
```

* Situações de exemplo:
  * Se o valor é `>=0.1`, o activator só será ativado se o jogador estiver se movendo.
  * Se o valor é `>=0.3`, o activator só será ativado se o jogador estiver correndo ou se movendo rápido.
  * Se o valor é `==0`, o activator só será ativado se o jogador estiver parado.
* Obrigatório: NÃO

### ifPosX

* Descrição: Verifica se o jogador está no nível X dito.
* Exemplo:

```yaml
playerConditions:
    ifPosX: <76
    ifPosXMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o valor é `<700`, o activator só será ativado se o valor da posição X do jogador for inferior a 700
  * Se o valor é `<=1296`, o activator só será ativado se o valor da posição X do jogador for 1296 ou inferior.
  * Se o valor é `==153`, o activator só será ativado se o valor da posição X do jogador for 5.
  * Se o valor é `>420`, o activator só será ativado se o valor da posição X do jogador for superior a 420.
  * Se o valor é `>=99`, o activator só será ativado se o valor da posição X do jogador for 99 ou superior.
* Obrigatório: NÃO

### ifPosY

* Descrição: Verifica se o jogador está no nível Y dito.
* Exemplo:

```yaml
playerConditions:
    ifPosY: <76
    ifPosYMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o valor é `<700`, o activator só será ativado se o valor da posição Y do jogador for inferior a 700
  * Se o valor é `<=1296`, o activator só será ativado se o valor da posição Y do jogador for 1296 ou inferior.
  * Se o valor é `==153`, o activator só será ativado se o valor da posição Y do jogador for 5.
  * Se o valor é `>420`, o activator só será ativado se o valor da posição Y do jogador for superior a 420.
  * Se o valor é `>=99`, o activator só será ativado se o valor da posição Y do jogador for 99 ou superior.
* Obrigatório: NÃO

### ifPosZ

* Descrição: Verifica se o jogador está no nível Z dito.
* Exemplo:

```yaml
playerConditions:
    ifPosZ: <76
    ifPosZMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o valor é `<700`, o activator só será ativado se o valor da posição Z do jogador for inferior a 700
  * Se o valor é `<=1296`, o activator só será ativado se o valor da posição Z do jogador for 1296 ou inferior.
  * Se o valor é `==153`, o activator só será ativado se o valor da posição Z do jogador for 5.
  * Se o valor é `>420`, o activator só será ativado se o valor da posição Z do jogador for superior a 420.
  * Se o valor é `>=99`, o activator só será ativado se o valor da posição Z do jogador for 99 ou superior.
* Obrigatório: NÃO

### ifNearbyEntityCount

* Descrição: Verifica o número de entidades dentro de um raio de 10 blocos ao redor do jogador.
* Exemplo:

```yaml
playerConditions:
    ifNearbyEntityCount: '>=3'
    ifNearbyEntityCountMsg: ''
```

* Situações de exemplo:
  * Se o valor é `>=3`, o activator só será ativado se houver pelo menos 3 entidades perto do jogador.
  * Se o valor é `==0`, o activator só será ativado se o jogador estiver sozinho sem entidades por perto.
  * Conta todos os tipos de entidades (mobs, jogadores, itens dropados, etc.).
* Obrigatório: NÃO

### ifNearbyPlayerCount

* Descrição: Verifica o número de jogadores dentro de um raio de 10 blocos ao redor do jogador.
* Exemplo:

```yaml
playerConditions:
    ifNearbyPlayerCount: '>=1'
    ifNearbyPlayerCountMsg: ''
```

* Situações de exemplo:
  * Se o valor é `>=1`, o activator só será ativado se houver pelo menos 1 outro jogador por perto.
  * Se o valor é `==0`, o activator só será ativado se nenhum outro jogador estiver dentro de 10 blocos.
  * Diferente do ifNearbyEntityCount, isso só conta jogadores, não mobs ou outras entidades.
* Obrigatório: NÃO

### ifHasPermission - Not

* Descrição: Verifica se o jogador tem (ou não) a permissão dita.
* Exemplo:

```yaml
playerConditions:   
    ifHasPermission:
    - test.ei
    ifHasPermissionMsg: '' #<- Here is where you will add the custom message.
    ifNotHasPermission:
    - test.ei
    ifNotHasPermissionMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o jogador tem a permissão `custom.jump.yes`, o activator será ativado. Se o jogador não tem essa permissão, não será ativado.
  * **A condição real não é usada neste gif para exibir corretamente o comportamento da condição. Quando você realmente usar essa condição, um erro específico depende de você**
* Obrigatório: NÃO

:::warning
**Para testar, é melhor não ser OP, porque se você for OP, você tem todas as permissões**
:::

![](https://media.ssomar.com/m/docs-img-giphy-iti1b991tskaavjoy7.gif)

### ifHasTag - Not

* Descrição: Verifica se o jogador tem a tag selecionada.
* Exemplo:

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

* Descrição: Verifica se o jogador está (não) selecionando o bloco dito.
* Exemplo:

```yaml
playerConditions:
    ifTargetBlock:
    - SAND
    ifTargetBlockMsg: '' #<- Here is where you will add the custom message.
    ifNotTargetBlock:
    - DIRT
    ifNotTargetBlockMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o jogador está com o cursor sobre areia, o activator será ativado.
* Obrigatório: NÃO

![](https://media.ssomar.com/m/docs-img-giphy-hgontsuwxflzmtgxny.gif)

### ifIsInTheBlock - Not

* Descrição: Verifica se o jogador está (não) dentro de um bloco.
* Exemplo:

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

* Situações de exemplo:
  * Se o jogador está em uma COBWEB (cabeça ou pés), o activator será ativado.
  * Desde que o jogador não esteja mais de 1 bloco acima do bloco em que está, o activator será ativado
* Obrigatório: NÃO (Padrão: false)

Para especificações de tags, consulte esta lista:

[https://minecraft.fandom.com/wiki/Block_states](https://minecraft.fandom.com/wiki/Block_states)

### ifIsOnTheBlock - Not

* Descrição: Verifica se o jogador está (não) em pé sobre um bloco.
* Exemplo:

```yaml
playerConditions:
    ifIsOnTheBlock:
        blocks:
        - EXECUTABLEBLOCKS:FREE_HUT
        - DIAMOND_BLOCK
```

* Situações de exemplo:
  * Se o jogador tem pedra sob seus pés, o activator será ativado.
  * Desde que o jogador não esteja mais de 1 bloco acima do bloco em que está em pé, o activator será ativado
* Obrigatório: NÃO (Padrão: false)

![](https://media.ssomar.com/m/docs-img-giphy-774fpgzucmhox69sww.gif)

<details>

<summary>Você pode adicionar um grupo de blocos, estes são os grupos:</summary>

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

Para especificações de tags, consulte esta lista:

[https://minecraft.fandom.com/wiki/Block_states](https://minecraft.fandom.com/wiki/Block_states)

:::info
Suporta blocos IA e EB
:::

### ifPlayerMounts - Not

* Descrição: Verifica se o jogador está (não) montando a(s) "entidade(s) selecionada(s)"
* Exemplo:

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

* Descrição: Verifica se o jogador está (não) no bioma dito.
* Exemplo:

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

*   Situações de exemplo:

    * Se o jogador está no Birch Forest Biome e o Birch Forest Biome está listado na lista de mundos na condição `ifInBiome:`, o activator será ativado.

[Biome](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html)

* Obrigatório: NÃO

![](https://media.ssomar.com/m/docs-img-giphy-heszwx2lktnut8abdx.gif)

### ifInRegion - Not

* Descrição: Verifica se o jogador está (não) na região dita (WorldGuard Region).
* Exemplo:

```yaml
playerConditions:
    ifInRegion:
    - area1
    ifInRegionMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInRegion:
    - mySpawnRegion
    ifNotInRegionMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o jogador está na região "area1" e a região "area1" está listada na lista de mundos na condição `ifInRegion:`, o activator será ativado.
* Obrigatório: NÃO

![](https://media.ssomar.com/m/docs-img-giphy-rn75fb0fgshrjizbce.gif)

### ifInWorld - Not

* Descrição: Verifica se o jogador está (não) no mundo dito.
* Exemplo:

```yaml
playerConditions:
    ifInWorld:
    - world_nether
    ifInWorldMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInWorld:
    - world_the_end
    ifNotInWorldMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o jogador está no nether e o nether está listado na lista de mundos na condição `ifInWorld:`, o activator ativa.
* Obrigatório: NÃO

![](https://media.ssomar.com/m/docs-img-giphy-zghtf0hlk1npsywmnz.gif)

### ifPlayerHasEffect

* Descrição: Verifica se o jogador tem o(s) efeito(s).
* Exemplo:

```yaml
playerConditions:
    ifPlayerHasEffect:
    - "SPEED:0"        <- (Format: "EFFECT:MINIMAL_REQUIRED_AMPLIFIER") 
    ifPlayerHasEffectMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o jogador tem speed com **pelo menos um amplifier de 0**, o activator será ativado
* Lista de todos os efeitos: [PotionEffectType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
* Obrigatório: NÃO

### ifPlayerNotHasEffect

* Descrição: Verifica se o jogador não tem o(s) efeito(s).
* Exemplo:

```yaml
playerConditions:
    ifPlayerNotHasEffect:
    - SPEED:2 # if the player has speed 1 = okay, but if has speed 2 or above, invalid
    ifPlayerNotHasEffectMsg: '&4&l&o[ExecutableItems] &cYou have an effect that you shouldn''t have to active the activator: &6%activator% &cof this item!'
    ifPlayerNotHasEffectCE: false
```

### ifCanBreakTargetedBlock

* Descrição: Verifica se o jogador pode quebrar o bloco alvo. Quando o activator tem um bloco (block break, block place, clique em um bloco...) esse bloco é verificado, caso contrário, o bloco que o jogador está olhando (5 blocos no máximo).
* Exemplo:

```yaml
playerConditions:
    ifCanBreakTargetedBlock: true
```

:::info
Suporta GriefPrevention, IridiumSkyblock, SuperiorSkyblock, BentoBox, Lands, Worldguard, Towny, ProtectionStones, Residence
:::

### ifPlayerHasEffectEquals

* Descrição: Verifica se o jogador tem o(s) efeito(s). **DEVE TER O AMPLIFIER EXATO**
* Exemplo:

```yaml
playerConditions:
    ifPlayerHasEffectEquals:
    - "SPEED:1"        #<- (Format: "EFFECT:REQUIRED_AMPLIFIER") 
    ifPlayerHasEffectEqualsMsg: '' #<- Here is where you will add the custom message.
```

* Situações de exemplo:
  * Se o jogador tem speed com **um amplifier de 1**, o activator será ativado
* Lista de todos os efeitos: [PotionEffectType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
* Obrigatório: NÃO

### ifPlayerHasExecutableItems - Not

* Descrição: Verifica se o jogador tem (não) o ExecutableItems dito.
* Exemplo:

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

* O exemplo acima funciona assim.
  * Você deve ter um item ei com o id "test1", "test2" ou "test3" no slot 38, o activator executa
  * Você deve ter um item ei com o id "ddx" no slot 40
* Obrigatório: NÃO

![](https://media.ssomar.com/m/docs-img-imgur-kaww8n0.png)

:::info
Copie corretamente o índice do exemplo, algumas pessoas pediram suporte, todas elas não copiaram corretamente o formato.
:::

### ifPlayerHasItem - Not

* Descrição: Verifica se o jogador tem itens específicos
* Exemplo:

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

* Situações de exemplo:
  * Se o capacete de diamante está no slot 39, o activator será ativado
* Obrigatório: NÃO
