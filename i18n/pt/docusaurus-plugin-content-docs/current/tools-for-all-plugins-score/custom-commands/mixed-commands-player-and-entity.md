---
description: >-
  Lista de comandos mistos do SCore que funcionam para jogadores e entidades:
  AROUND, DAMAGE, TELEPORT, FRONTDASH, PARTICLE e mais.
source_hash: 8e288b53710ee67c
translated_at: '2026-11-13T18:17:16.031Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Comandos Mistos (Jogador & Entidade)

:::info
Estes comandos personalizados funcionam para jogadores, mas também para entidades

Ou seja, em:
* playerCommands
* targetCommands
* entityCommands
* ownerCommands
* ...
:::

_Em ordem alfabética_

### ADD\_TEMPORARY\_ATTRIBUTE

* Info: Adiciona atributos temporários a um jogador/entidade
* Configurações do comando:
    * `{attribute}` : [Lista de atributos](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html#field-summary)
    * `{amount}` : Valor double que o atributo temporário terá
    * `{operation}` : [Lista de operações](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html#enum-constant-summary)
    * `{time in ticks}` : Tempo antes de o atributo expirar
* Exemplo:
  * `ADD_TEMPORARY_ATTRIBUTE GRAVITY 2 ADD_NUMBER 5`
  * `ADD_TEMPORARY_ATTRIBUTE attribute:SCALE amount:1.2 operation:ADD_NUMBER timeinticks:120`

### ALL\_PLAYERS

* Info: Tem como alvo todos os jogadores.
* Configuração do comando: 
  * `{command}`: O comando que será executado
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_PLAYERS SEND_MESSAGE Hello %parseother_`{%around_target%}`_`{player_name}`%
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_PLAYERS SEND_MESSAGE %target% has been hit by %player%
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_PLAYERS SEND_MESSAGE %entity% has been hit by %player%
```

Executar vários comandos: dá um item aleatório a todos os jogadores, nem todos receberão o mesmo.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
```

### ALL\_MOBS

* Info: Tem como alvo todos os jogadores.
* Configuração do comando: 
    * `{command(s)}`: O comando que será executado
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20

```

Executar vários playerCommands:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1

```

:::info
Suporta blacklist e whitelist
:::

### AROUND

* Info: Tem como alvo jogadores em um raio específico e faz com que executem comandos
* Configurações do comando:
  * `{distance}`: Até que distância, em raio, o comando selecionará jogadores (padrão 3)
  * `{displayMsgIfNoPlayer}`: (true ou false) Para notificar o usuário do item se o comando conseguiu ou não ter jogadores como alvo (padrão true)
  * `{throughBlocks}`: Afetará ou não os jogadores que estão atrás de blocos (padrão true)
  * `{safeDistance}`: Se a distância entre o alvo e quem lançou for menor ou igual ao valor de safeDistance, o alvo não será afetado. (padrão 0)
  * `{offsetYaw}`: A direção yaw que você quer para o seu offset (independente do valor de yaw da origem)
  * `{offsetPitch}`: A direção pitch que você quer para o seu offset (independente do valor de yaw da origem)
  * `{offsetDistance}`: Depois de calcular offsetYaw e offsetPitch, usando o valor desta opção, ela moverá a posição/ponto central do comando AROUND a partir da localização xyz da origem.
  * `{limit}`: A quantidade de alvos que podem ser afetados 
  * `{sort}`: Útil para a opção limit. 
    * NEAREST : Seleciona as entidades mais próximas da origem.
    * RANDOM : Seleciona aleatoriamente qualquer entidade dentro do alcance do comando.
  * `{regionCheck}`: true/false. Se true, o comando AROUND verificará se o alvo está na área selvagem ou no claim de quem lançou (contexto do plugin GriefPrevention) (em breve será atualizado para verificar com outros plugins de claim)
  * `{commands}`: Os comandos que serão executados para os jogadores alvo.

:::tip
Você pode adicionar **vários comandos**! Use o separador `<+>`

Exemplo: `SEND_MESSAGE &cYou will be damaged in 5 seconds <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Placeholders:** Os placeholders são os mesmos dos [Player Placeholders](https://splugins.net/docs/tools-for-all-plugins-score/placeholders#player-placeholders), mas você precisa substituir "player" por "around\_target"

Exemplo: %around\_target%, %around\_target\_uuid%
:::

:::info
**Número de alvos:** `%around_target_count%` fornece o número de jogadores selecionados pelo comando. É o mesmo para todos os alvos e conta os alvos mantidos após `distance`, `safeDistance`, `throughBlocks` e `regionCheck` e `limit`. As `CONDITIONS(...)` verificadas em cada alvo não são levadas em conta. Aceita o atalho `+N` / `-N`: `%around_target_count%-1`.

Exemplo: `AROUND distance:10 displayMsgIfNoPlayer:false SEND_MESSAGE &eYou are one of the %around_target_count% players hit !`
:::

* Exemplos:

Isto invoca raios nos jogadores em um raio de 20 blocos

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:20 displayMsgIfNoPlayer:false execute at %around_target% run summon lightning_bolt
```

Envia uma mensagem aos jogadores entre 5 e 10 blocos

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 displayMsgIfNoPlayer:true throughBlocks:true safeDistance:5 SENDMESSAGE &eIt is a test !
```

:::warning
Você pode aninhar AROUND com os comandos: AROUND, IF, NEAREST, ALL\_PLAYERS

Se fizer isso, o separador e os placeholders evoluirão de acordo com a etapa aninhada.

separador do comando base : `<+>`

primeiro comando aninhado : `<+::step1>`

... : `<+::step2>`; , `<+::step3>`, ...

placeholder base : %around\_target%

primeiro comando aninhado : %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

Exemplos:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:5 displayMsgIfNoPlayer:false say &a(0)&e%around_target% <+> DELAY 3 <+> AROUND distance:5 displayMsgIfNoPlayer:false say &a(1)&e%around_target::step1% <+::step1> DELAY 3 <+::step1> AROUND distance:5 displayMsgIfNoPlayer:false say &a(2)&e%around_target::step2%
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND say &a(0)&e%around_target% <+> DELAY 3 <+> NEAREST 10 say &a(1)&e%around_target::step1%
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 throughBlocks:false displayMsgIfNoPlayer:false say &a(0)&e%around_target% <+> DELAY 3 <+> AROUND distance:5 displayMsgIfNoPlayer:false say &a(1)&e%around_target::step1% and x &c%around_target_x::step1% <+::step1> IF %around_target_x::step1%>10 say &aThe target &e%around_target_x::step2% <+::step2> effect give %around_target::step2% slowness 20
```

:::info
Você pode adicionar **condições** de placeholders personalizadas para ajustar os jogadores alvo

Formato:  AROUND \<settings> CONDITIONS(\<conditions>) \<command>

     \<settings>  são as configurações do comando

     \<conditions> são as condições

Formato das condições:  CONDITIONS(%::\<my\_placeholder\_name>::%\<comparator>\<value>)

      \<my\_placeholder\_name> é o nome do placeholder

      \<comparator> O comparador: "`<`", "`<=`", "`=`", "`>`", "`>=`"

      \<value> o valor

 Você pode adicionar várias condições usando o separador "&&"
:::

* Exemplos:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'AROUND distance:10 CONDITIONS(%::player_health::%>10&#x26;&#x26;%::player_name::%=2Ssomar) SEND_MESSAGE &#x26;eclick'
```

:::info
Tenha em mente que a parte CONDITIONS() interpreta os placeholders contidos nela com o jogador selecionado pelo comando AROUND. Portanto, o que realmente aconteceu nos placeholders acima é que ele verifica se a vida do alvo é maior que 10 e se o jogador selecionado pelo comando AROUND se chama "2Ssomar"
:::

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 displayMsgIfNoPlayer:false CONDITIONS(%::parseother_`{%player%}`_`{betterteams_name}`::%!=%::betterteams_name::%) effect give %around_target% weakness 10 10 true
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'AROUND distance:2 CONDITIONS(%::player_name::%!=%player%) DAMAGE 15'
```

:::info
Placeholders vindos de plugins como ExecutableItems e ExecutableBlocks não serão interpretados pelo jogador afetado pelo comando AROUND.

Por exemplo, com ExecutableBlocks, CONDITIONS(%var\_faction%=%::factionsuuid\_faction\_name::%) funciona verificando se o valor da variável factions do bloco é igual à facção do jogador alvo\
Fonte do placeholder: [PlaceholderAPI](https://factions.support/placeholderapi/))
:::

### BACK\_DASH

* Info: Lança o jogador/alvo na direção oposta àquela para a qual está olhando **(VOCÊ NÃO PODE SER LANÇADO NO AR)**
* Configuração do comando:
  * `{amount}`: O valor da força do lançamento
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BACK_DASH 5
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - BACK_DASH 5
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - BACK_DASH 5
```

### BURN

* Info: Queima o jogador/alvo
* Configuração do comando:
 * `{timeinsecs}`: Tempo de queimadura em segundos
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BURN 200
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - BURN 200
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - BURN 200
```

### CONSOLE\_MESSAGE

* Info: Envia uma mensagem ao console
* Configuração do comando:
  * `{text}`: Texto a enviar ao console
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player%
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player% triggered by %target%
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player% triggered by %entity%
```

### COPY\_EFFECTS

* Info: Copia os efeitos do alvo
* Configuração do comando:
  * `[limitDuration]`: (Opcional) (padrão = sem limite) significa que, se o alvo tem, por exemplo, 3 minutos de efeito de veneno e você limitar a 5 segundos, você receberá apenas um efeito de veneno de 5 segundos
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - COPY_EFFECTS 5 # Using this will copy the player's own effects
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - COPY_EFFECTS 5 # Using this will copy the target effects into the player
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - COPY_EFFECTS 5 # Using this will copy the entity effects into the player 
```

### CUSTOMDASH1

* Info: Lança você para uma localização específica
* Configurações do comando:
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
  * `{fallDamage}`: true ou false. Define se o jogador sofrerá dano de queda ou não depois de ser lançado por ele.
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH1 %target_x% %target_y%+5 %target_z% true # This will dash up the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% true # This will dash up the entity
```

Se você tem ativadores relacionados entre dois tipos de alvos, pode fazer

* Exemplo 1 | Instância de jogador - entidade | Lança o jogador em direção à entidade

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% true
    entityCommands: []
```

* Exemplo 2 | Instância de jogador - entidade | Lança a entidade em direção ao jogador

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands: []
    entityCommands: 
    - CUSTOMDASH1 %player_x% %player_y% %player_z% true
```

* Exemplo 3 | Instância de jogador - bloco | Lança o jogador em direção ao bloco

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and block
    playerCommands: 
    - CUSTOMDASH1 %block_x% %block_y% %block_z% true
    blockCommands: []
```

Você pode aumentar a força do comando executando-o várias vezes (mas não no mesmo tick, as execuções precisam ser diferenciadas no tempo, senão não fará sentido, já que você estaria lançando o jogador da mesma posição em direção à localização), exemplos:

* Executando-o várias vezes manualmente

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
```

* Usando o comando utilitário LOOP START

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'LOOP START: 3'
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - LOOP END
```

### CUSTOMDASH2

* Info: Lança você para longe de uma localização específica
* Configurações do comando:
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
  * `{strength}`: Força do dash
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH2 %player_x% %player_y%+5 %player_z% 5 # This will dash down the player with strength 5
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH2 %target_x% %target_y%+5 %target_z% 5 # This will dash down the target with strength 5
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH2 %entity_x% %entity_y% %entity_z% 5 # This will dash down the entity with strength 5
```

Se você tem ativadores relacionados entre dois tipos de alvos, pode fazer

* Exemplo 1 | Instância de jogador - entidade | Lança o jogador para longe da entidade

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% 5
    entityCommands: []
```

* Exemplo 2 | Instância de jogador - entidade | Lança a entidade para longe do jogador

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands: []
    entityCommands: 
    - CUSTOMDASH1 %player_x% %player_y% %player_z% 5
```

* Exemplo 3 | Instância de jogador - bloco | Lança o jogador para longe do bloco

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and block
    playerCommands: 
    - CUSTOMDASH1 %block_x% %block_y% %block_z% 5
    blockCommands: []
```

### CUSTOMDASH3

* Info: Lança o alvo seguindo uma função matemática específica
* Configurações do comando:
  * `{function}`: A função matemática a seguir. [Site de calculadora de funções](https://www.geogebra.org/calculator)
  * `{max x value}`: Valor máximo de x da função
  * `{front z}`: Se o dash é para frente ou para trás
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH3 cosx 10 true
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH3 cosx 10 true
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH3 cosx 10 true
```

### DAMAGE

* Info: Causa dano ao jogador com uma quantidade específica. (O dano causado com a ajuda deste comando é contado como dano de jogador)
  * Este comando aciona os ativadores relacionados a dano do ExecutableItems e do ExecutableEvents
  *   O tipo de dano do Spigot é ENTITY\_ATTACK se houver um jogador envolvido no ativador.

      Caso contrário, o tipo de dano do Spigot é CUSTOM
* Configurações do comando:
  * `{amount}`: Quantidade de dano em pontos de vida (não em corações)
  * `{amplified If Strength Effect}`: true ou false, Força 1 -> + 1.5 de dano, ....
  * `{amplified with attack attribute}`: true ou false, obterá a soma de todos os seus atributos ATTACK_DAMAGE existentes que têm o operador `MULTIPLY_SCALAR_1`, multiplicada com base no seu dano de ataque atual (incluindo o efeito de força, se ativado)
  <br/>
  :::info
  Fórmula:  
  `total damage` = (`amount` * `strength effect`) * (`sum of all of your attack damage attributes with the operator (add_multiplied_total/MULTIPLY_SCALAR_1)`+1) 
  :::
  * `{damageType}`: O tipo de dano -> [Lista de DamageType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html)
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the entity 
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the player as damage
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the target as damage
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the entity as damage
```

:::info
Para aplicar dano real, você pode usar:\
\- 1.20.5++ use o comando /minecraft\:damage, por exemplo\
minecraft\:damage %target% 10 by %player%\
\
\- 1.20.5-- use o comando REGAIN HEALTH, não é o melhor, mas é uma alternativa.
:::

### DAMAGE\_NO\_KNOCKBACK

* Info: Causa dano ao jogador com uma quantidade específica sem aplicar knockback. (O dano causado com a ajuda deste comando não é contado como dano de jogador, e sim mais como um dano indireto)
  * Este comando aciona os ativadores relacionados a dano do ExecutableItems e do ExecutableEvents
  *   O tipo de dano do Spigot é ENTITY\_ATTACK se houver um jogador envolvido no ativador.

      Caso contrário, o tipo de dano do Spigot é CUSTOM
* Configurações do comando:
  * `{amount}`: Quantidade de dano em pontos de vida (não em corações)
  * `{amplified If Strength Effect}`: true ou false, Força 1 -> + 1.5 de dano, ....
  * `{amplified with attack attribute}`: true ou false, jogador com 500% de dano bônus, o comando causará 5 x "\<damage>".
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the entity 
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the player as damage
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the target as damage
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the entity as damage
```

### DAMAGE\_BOOST

* Info: Permite que você se dê um bônus de dano personalizado
  * Este comando aumenta também o dano dos comandos personalizados, por exemplo (DAMAGE, DAMAGE\_NO\_KNOCKBACK)
  * Este comando não aumenta o dano dos projéteis
* Configurações do comando:
  * `{modification in percentage example 100}`: Quantidade do bônus. Exemplo abaixo:
    * 50 = Faz você causar +50% de dano
    * -80 = Faz você causar -80% de dano
  * `{timeinticks}`: A duração do bônus de dano personalizado
* Exemplo: (O comando abaixo dá a você +50% de dano causado por 10s)

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the entity

```

Este comando pode ser usado várias vezes e o bônus será acumulado. Neste exemplo, você verá que de \[0-10] segundos o jogador causará 50% a mais de dano, depois de \[10-20] segundos causará 100% a mais de dano e depois de \[20-30] segundos 50% a mais de dano, porque em \[10-20] dois comandos DAMAGE\_BOOST estavam acumulados.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player by 50% for 200 ticks (10 seconds)
    - DELAY 10 # Delay of 10 seconds
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player by 50% for 200 ticks (10 seconds)
```

### DAMAGE\_RESISTANCE

* Info: Permite que você se dê uma resistência a dano personalizada, aplicando ampliações personalizadas ao dano recebido
* Configurações do comando:
  * `{modification in percentage example 100}`: Quantidade da ampliação. Exemplo abaixo:
    * 50 = Faz você receber +50% de dano\
      -80 = Faz você receber -80% de dano
  * `{timeinticks}`: A duração da resistência a dano personalizada
* Exemplo: (O comando abaixo dá a você +50% de dano recebido por 10s)

```yaml
- DAMAGE_RESISTANCE 50 200
```

### EQUIPMENT\_VISUAL\_REPLACE

* Info: Substitui VISUALMENTE (sem risco de perder itens) um slot de equipamento por um certo material
  * Requer o [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/).
  * O visual é mostrado aos jogadores que veem o jogador / entidade (e ao próprio jogador). Um jogador que se aproxima depois também o vê.
  * Uma entidade tem um visual por slot: um novo EQUIPMENT\_VISUAL\_REPLACE no mesmo slot substitui o anterior, com o seu novo tempo. O visual termina após `{timeinticks}`, com EQUIPMENT\_VISUAL\_CANCEL, ou quando a entidade morre, desaparece ou o jogador sai.
* Configurações do comando:
  * `{EquipmentSlot}`: O slot
    * Opções:
      * -1
      * 40
      * 36
      * 37
      * 38
      * 39
  * `{material}`: O id do item do material pelo qual você quer substituir ou o id do EI
  * `{amount}`: A quantidade da pilha 
  * `{timeinticks}`: Por quanto tempo o disfarce vai durar. (20 ticks = 1 seg)
*   Exemplo: 

```yaml
- EQUIPMENT_VISUAL_REPLACE 39 CARVED_PUMPKIN 1 100
```

```yaml
- EQUIPMENT_VISUAL_REPLACE 39 EI:test 1 100
```

### EQUIPMENT\_VISUAL\_CANCEL

* Info: Cancela o comando EQUIPMENT\_VISUAL\_REPLACE
  * Funciona em jogadores e em mobs: os jogadores que veem a entidade recebem de volta o item real neste slot.
* Configuração do comando:
  * `{EquipmentSlot}`: O slot
    * Opções:
      * -1
      * 40
      * 36
      * 37
      * 38
      * 39
* Exemplo:

```yaml
- EQUIPMENT_VISUAL_CANCEL 39
```

### FORCE\_DROP

* Aliases: `FORCEDROP`, `DROPSPECIFICEI`
* Info: Força o jogador/entidade a largar um item. Suporta dois modos:
  * **Modo slot**: larga o item no slot de inventário especificado
  * **Modo EI ID**: larga todos os itens do inventário que correspondem ao ID de ExecutableItem informado (apenas jogador)
* Configurações do comando:
  * `slot:`: número, -1 para a mão principal (padrão: -1). Veja a imagem de referência dos slots abaixo.
  * `ei_id:`: o ID do ExecutableItem a largar (substitui o modo slot quando informado)

![](https://media.ssomar.com/m/docs-img-slots-info.png)

* Exemplos:

```yaml
# Drop the item in main hand
- FORCE_DROP slot:-1

# Drop the item in slot 5
- FORCE_DROP slot:5

# Drop all items with the EI id "excalibursword" from the player's inventory
- FORCE_DROP ei_id:excalibursword
```

### FRONTDASH

* Info: Lança o jogador/alvo na direção para a qual está olhando
* Configurações do comando:
  * `{number}`: O valor da força do lançamento
  * `{custom_y}` : Para definir um impulso vertical (recomendo definir um valor pequeno, como 0.5 - 1, se você não quiser um pulo grande.)
  * `{falldamage}`: defina para ativar ou desativar o dano de queda
* Exemplo:

```yaml
- FRONTDASH 5 0.5 false
```

### GLACIAL\_FREEZE

* Info: Aplica o congelamento de neve do Minecraft 1.18
* Configuração do comando:
 * `{time in ticks}`: Tempo do congelamento em ticks. (20 ticks = 1 seg)
* Exemplo:

```yaml
- GLACIAL_FREEZE 160
```

### GLOWING

* Info: Aplica brilho ao jogador
* Configurações do comando:
  * `{time in ticks}`: Duração do brilho em ticks
  * `{color}`: Qual será a cor do brilho. [Referência de cores](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html)
* Exemplo:

```yaml
- GLOWING 100 BLUE
```

### HITSCAN\_ENTITIES

* Info: Permite executar um comando em uma certa direção para entidades
* Configurações do comando:
  * `{range}`: a que distância uma entidade pode estar para ser alvo do comando HITSCAN
  * `{radiusOfHitscan}`: Quão LARGO é o cilindro. É basicamente a diferença entre disparar uma bala e disparar uma bola de canhão.
  * `{pitch}`: Em que direção disparar, relativa ao pitch do jogador
  * `{yaw}`: A mesma coisa que o Pitch, mas com o yaw
  * `{leftRightShift}`:
    * -5 = o hitscan COMEÇA a 5 blocos à esquerda.
    * 0 = o hitscan fica centralizado onde o jogador está.
    * 5 = o hitscan COMEÇA a 5 blocos à direita do jogador. 
  * `{yShift}`: Igual a esquerda/direita, mas em um eixo diferente. 
  * `{throughEntities}`: Booleano: Se o HITSCAN pode ou não atravessar entidades.
  * `{throughBlocks}`: Booleano: Se o HITSCAN pode ou não atravessar blocos.
  * `{limit}`: A quantidade de alvos que podem ser afetados
  * `{sort}`: Útil para a opção limit.
    * NEAREST : Seleciona as entidades mais próximas da origem.
    * RANDOM : Seleciona aleatoriamente qualquer entidade dentro do alcance do comando.
  * `{regionCheck}`: true/false. Se true, o comando AROUND verificará se o alvo está na área selvagem ou no claim de quem lançou (contexto do plugin GriefPrevention) (em breve será atualizado para verificar com outros plugins de claim)
  * `{command(s)}`: O mesmo que nos comandos AROUND, você pode digitar `command1 <+> command2` ... e usar o placeholder %around\_target%
* Exemplo:

```yaml
HITSCAN_ENTITIES range:5 radius:0 pitch:0 yaw:0 leftRightShift:0 yShift:0 throughBlocks:true throughEntities:true HEAL 10 <+> BACKDASH 5
```

:::info
Os comandos depois de `HITSCAN_ENTITIES` (e depois de cada `<+>`) são executados em **cada entidade atingida**, como os entity commands: `REGAIN_HEALTH 4` cura a entidade atingida, não quem lançou. Para agir em quem lançou, use um comando vanilla com `%player%`, por exemplo `HITSCAN_ENTITIES range:8 DAMAGE 4 <+> effect give %player% instant_health 1 0 true`.
:::
* Imagem para entender:
![](https://media.ssomar.com/m/docs-img-hitscan-entities.png)

### HITSCAN\_PLAYERS

* Info: Permite executar um comando em uma certa direção para jogadores
* Configurações do comando:
  * `{range}`: a que distância uma entidade pode estar para ser alvo do comando HITSCAN
  * `{radiusOfHitscan}`: Quão LARGO é o cilindro. É basicamente a diferença entre disparar uma bala e disparar uma bola de canhão.
  * `{pitch}`: Em que direção disparar, relativa ao pitch do jogador
  * `{yaw}`: A mesma coisa que o Pitch, mas com o yaw
  * `{leftRightShift}`:
    * -5 = o hitscan COMEÇA a 5 blocos à esquerda.
    * 0 = o hitscan fica centralizado onde o jogador está.
    * 5 = o hitscan COMEÇA a 5 blocos à direita do jogador.
  * `{yShift}`: Igual a esquerda/direita, mas em um eixo diferente.
  * `{throughEntities}`: Booleano: Se o HITSCAN pode ou não atravessar entidades.
  * `{throughBlocks}`: Booleano: Se o HITSCAN pode ou não atravessar blocos.
  * `{limit}`: A quantidade de alvos que podem ser afetados
  * `{sort}`: Útil para a opção limit.
    * NEAREST : Seleciona as entidades mais próximas da origem.
    * RANDOM : Seleciona aleatoriamente qualquer entidade dentro do alcance do comando.
  * `{regionCheck}`: true/false. Se true, o comando AROUND verificará se o alvo está na área selvagem ou no claim de quem lançou (contexto do plugin GriefPrevention) (em breve será atualizado para verificar com outros plugins de claim)
  * `{command(s)}`: O mesmo que nos comandos AROUND, você pode digitar `command1 <+> command2` ... e usar o placeholder %around\_target%
* Exemplo:

```yaml
- HITSCAN_PLAYERS range:5 radius:0 pitch:0 yaw:0 leftRightShift:0 yShift:0 throughBlocks:true throughEntities:true DAMAGE 5 <+> JUMP 5
```
* Imagem para entender:
  ![](https://media.ssomar.com/m/docs-img-hitscan-players.png)

### INVULNERABILITY

* Info: Torna o jogador invulnerável por um certo período de tempo
* Configuração do comando:
 * `{ticks}`: Tempo da invulnerabilidade em ticks. (20 ticks = 1 seg)
  * Suporta valores negativos para diminuir o tempo de invulnerabilidade, como a que ocorre depois de ser atingido.
* Exemplo:

```yaml
- INVULNERABILITY 60
```

### JUMP

* Info: Lança o jogador no ar
* Configuração do comando:
  * `{number}`: A força do lançamento
  * `{fall damage}`: (Opcional) (padrão = false) Selecione se quer que o comando cause dano de queda.
* Exemplo:

```yaml
- JUMP 20
```

### LAUNCH\_ENTITY

* Info: Lança uma entidade na sua direção
* Configurações do comando:
  * `{entityType}`: ID do mob da entidade lançada (TUDO EM MAIÚSCULAS) [Lista de EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * `{speed}`: (número, Double) Define a velocidade da entidade
  * `[angle rotation y]`: (apenas para 1.14 e +) (Opcional) (padrão = 0) (em graus) Define a direção para onde a entidade será lançada
* Exemplo:

```yaml
- LAUNCH_ENTITY PIG 2
```

* Exemplo para fazer um tiro triplo:

```yaml
- LAUNCH_ENTITY PIG 2
- LAUNCH_ENTITY PIG 2 15
- LAUNCH_ENTITY PIG 2 -15
```

### MLIB\_DAMAGE

* Info: Causa dano ao alvo, mas o tipo de dano vem principalmente do plugin MythicLib
* Configurações do comando:
  * `{number}`: Dano causado aos alvos (padrão: 10)
  * `{damage_type}`: Tipo de dano infligido (padrão: PHYSICAL)
    * Exemplo: MAGIC, PHYSICAL, WEAPON, SKILL, PROJECTILE, UNARMED, ON\_HIT, MINION, DOT;
  * `{knockback}`: true/false, se aplica knockback ao alvo (padrão: false)
  * `{element}`: Especifica de que tipo de elemento é o ataque (padrão: FIRE)
    * Referência: [Lista de elementos do MythicLib](https://gitlab.com/phoenix-dvpmt/mythiclib/-/blob/master/mythiclib-plugin/src/main/resources/default/elements.yml?ref_type=heads)
  * `{crit}`: true/false, se o `CRITICAL_STRIKE_POWER` do atacante é adicionado ou não à equação do dano (padrão: false)
    * Equação: `number * (number * (total critical_strike_power/100))`
* Exemplo:

```yaml
- MLIB_DAMAGE 10 PHYSICAL false FIRE true
```

### MOB\_AROUND

* Info: Tem como alvo entidades em um raio específico e faz com que executem comandos
  * Entidades disponíveis -> [Lista de LivingEntity](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/LivingEntity.html)
* Configurações do comando:
  * `{distance}`: Até que distância, em raio, o comando selecionará entidades
  * `{displayMsgIfNoEntity}`: (true ou false) Para notificar o usuário do item se o comando não conseguiu ter nenhum mob como alvo.
    * **Defina como false para ocultar a mensagem**
  * `{throughBlocks}`: Afetará ou não os mobs que estão atrás de blocos
  * `{safeDistance}`: Se a distância entre o alvo e quem lançou for menor ou igual ao valor de safeDistance, o alvo não será afetado.
  * `{offsetYaw}`: A direção yaw que você quer para o seu offset (independente do valor de yaw da origem)
  * `{offsetPitch}`: A direção pitch que você quer para o seu offset (independente do valor de yaw da origem)
  * `{offsetDistance}`: Depois de calcular offsetYaw e offsetPitch, usando o valor desta opção, ela moverá a posição/ponto central do comando AROUND a partir da localização xyz da origem.
  * `{limit}`: A quantidade de alvos que podem ser afetados
  * `{sort}`: Útil para a opção limit.
    * NEAREST : Seleciona as entidades mais próximas da origem.
    * RANDOM : Seleciona aleatoriamente qualquer entidade dentro do alcance do comando.
  * `{regionCheck}`: true/false. Se true, o comando AROUND verificará se o alvo está na área selvagem ou no claim de quem lançou (contexto do plugin GriefPrevention) (em breve será atualizado para verificar com outros plugins de claim)
  * `{nonliving}`: true/false. Se true, terá como alvo outras entidades, como flechas e armor stands. Quaisquer bugs que ocorram ao executar comandos de entidade com este argumento ativado provavelmente serão ignorados devido ao scope creep.
  * Você pode fazer BLACKLIST ou WHITELIST de entidades adicionando uma destas em qualquer lugar do comando:
    * BLACKLIST(ZOMBIE,ARMOR\_STAND)
    * WHITELIST(CHICKEN)

:::tip
Você pode adicionar **vários comandos**! Use o separador `<+>`

Exemplo: `minecraft:effect give .. <+> DELAY 5 <+>  DAMAGE 5`
:::

:::info
**Placeholders:** Os placeholders são os mesmos dos [Entity Placeholders](https://splugins.net/docs/tools-for-all-plugins-score/placeholders#entity-placeholders), mas você precisa substituir "player" por "around\_target"

Exemplo: %around\_target%, %around\_target\_uuid%
:::

:::info
**Número de alvos:** `%around_target_count%` fornece o número de entidades selecionadas pelo comando. É o mesmo para todos os alvos e conta os alvos mantidos após `distance`, `safeDistance`, `throughBlocks`, `regionCheck` e o `WHITELIST(...)` / `BLACKLIST(...)` e `limit`. As `CONDITIONS(...)` verificadas em cada alvo não são levadas em conta. Aceita o atalho `+N` / `-N`: `%around_target_count%-1`.

Exemplo: `MOB_AROUND distance:8 WHITELIST(ZOMBIE) DAMAGE %around_target_count%`
:::

* Exemplos:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MOB_AROUND distance:3 displayMsgIfNoEntity:true throughBlocks:true safeDistance:0 [conditions] COMMAND1 <+> COMMAND2 <+> ...
    - MOB_AROUND distance:3 displayMsgIfNoEntity:false BURN 10
    - MOB_AROUND distance:5 execute at %around_target_uuid% run summon lightning_bolt
    - MOB_AROUND distance:5 BLACKLIST(ZOMBIE,ARMOR_STAND) DAMAGE 20
    - MOB_AROUND distance:5 displayMsgIfNoEntity:false effect give %around_target_uuid% poison 10 10
    - MOB_AROUND distance:10 WHITELIST(ZOMBIE`{CustomName:"*"}`) say HELLO
```

Para usar NBT de entidade no campo WHITELIST/BLACKLIST, você precisa instalar o plugin [NBT API](https://www.spigotmc.org/resources/nbt-api.7939/)

Ele suporta [NBT Tags](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities), então você pode adicionar, por exemplo, algo como: `ZOMBIE{IsBaby:1}` 

Exemplos:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MOB_AROUND distance:7 BLACKLIST(ZOMBIE`{CustomName:"Test Test"}`,ZOMBIE`{CustomName:"Miyamoto"}`) false BURN 3
    - MOB_AROUND distance:5 WHITELIST(ZOMBIE`{IsBaby:1}`) DAMAGE 20
    - MOB_AROUND distance:9 WHITELIST(WOLF`{Owner:"%player%"}`) HEAL 5
    - MOB_AROUND distance:9 WHITELIST(WOLF`{Owner:%player_uuid%}`) HEAL 5
```

:::warning
Você pode aninhar MOB\_AROUND com os comandos: MOB\_AROUND, IF, MOB\_NEAREST, ALL\_MOBS

Se fizer isso, o separador e os placeholders evoluirão de acordo com a etapa aninhada.\

separador do comando base : `<+>`

primeiro comando aninhado : `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
placeholder base : %around\_target%

primeiro comando aninhado : %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### MOB\_NEAREST

* Info: Tem como alvo o mob mais próximo do jogador/alvo.
* Configurações do comando:
    * `{max accepted distance}`:  Distância máxima aceita em que a "entidade" pode estar.
    * `{command(s)}`: Os comandos que serão executados

:::tip
Você pode adicionar **vários comandos**! Use o separador `<+>`

Exemplo: `minecraft:effect give .. <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Placeholders:** Os placeholders são os mesmos dos [Entity Placeholders](/tools-for-all-plugins-score/placeholders#entity-placeholders), mas você precisa substituir "player" por "around\_target"

Exemplo: %around\_target%, %around\_target\_uuid%
:::

* Exemplo:

Causa dano ao jogador mais próximo

```yaml
- MOB_NEAREST 10 DAMAGE 5
```

:::warning
Você pode aninhar MOB\_NEAREST com os comandos: MOB\_AROUND, IF, MOB\_NEAREST, ALL\_MOBS

Se fizer isso, o separador e os placeholders evoluirão de acordo com a etapa aninhada.\

separador do comando base : `<+>`

primeiro comando aninhado : `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
placeholder base : %around\_target%

primeiro comando aninhado : %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### NEAREST

* Info: Tem como alvo o jogador mais próximo do jogador/alvo.
* Configurações do comando:
    * `{max accepted distance}`: Distância máxima aceita em que o "alvo" pode estar.
    * `{command}`: O comando que será executado

:::tip
Você pode adicionar **vários comandos**! Use o separador `<+>`

Exemplo: `SEND_MESSAGE &cYou will be damaged in 5 seconds <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Placeholders:** Os placeholders são os mesmos dos [Player Placeholders](/tools-for-all-plugins-score/placeholders#player-placeholders), mas você precisa substituir "player" por "around\_target"

Exemplo: %around\_target%, %around\_target\_uuid%
:::

* Exemplo:

Causa dano ao jogador mais próximo

```yaml
- NEAREST 8 DAMAGE 5
```

:::warning
Você pode aninhar NEAREST com os comandos: AROUND, IF, NEAREST, ALL\_PLAYERS

Se fizer isso, o separador e os placeholders evoluirão de acordo com a etapa aninhada.\

separador do comando base : `<+>`

primeiro comando aninhado : `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
placeholder base : %around\_target%

primeiro comando aninhado : %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### OPMESSAGE

* Info: Envia uma mensagem aos jogadores OP online e ao console
* Configuração do comando:
  * `{text}`: Texto a enviar
* Exemplo:

```yaml
- OPMESSAGE This is my debug message
```

### PARTICLE

* Info: Gera partículas na localização do jogador/alvo. [Lista de partículas](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html)

* Configurações do comando:
  * `{type}`: O tipo de partícula (TUDO EM MAIÚSCULAS)
  * `{quantity}`: A quantidade de partículas que serão geradas
  * `{offset}`: O raio da área onde as partículas podem ser geradas na localização do jogador/alvo
  * `{speed}`: Quão rápidas ou quão grandes serão as partículas
* Exemplo:

```yaml
- PARTICLE FIREWORKS_SPARK 10 0.1 0.5
```

### REGAIN\_HEALTH

* Info: Dá a você uma quantidade específica de HP
* Configuração do comando:
  * `{amount}`: A quantidade de HP que você quer ganhar
   * Suporta valores negativos caso você queira causar "dano verdadeiro". 
* Exemplo:

```yaml
- REGAIN_HEALTH 10
- REGAIN_HEALTH -5
```

### REMOVE\_BURN

* Info: Apaga o fogo em você
* Sem configuração do comando
* Exemplo:

```yaml
- REMOVE_BURN
```

### REMOVE\_GLOW

* Info: Remove o efeito de brilho de uma cor específica do jogador | alvo.
* Configuração do comando:
 * `[color]`: (Opcional) (padrão = WHITE) A cor a remover. [Referência de cores](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/ChatColor.html)
* Exemplo:

```yaml
- REMOVE_GLOW BLACK
```

### SET\_GLOW

* Info: Adiciona o efeito de brilho com uma cor específica ao jogador | alvo.
* Configuração do comando:
 * `[color]`: (Opcional) (padrão = WHITE) A cor a remover. [Referência de cores](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/ChatColor.html)
* Exemplo:

```yaml
- SET_GLOW BLACK
```

:::info
Compatível com o plugin TAB usando -> %score\_cmd-glow%
:::

### SET\_HEALTH

* Info: Define a sua vida para uma quantidade específica
* Configuração do comando:
  * `{amount}`: A quantidade de vida para a qual você quer definir
* Exemplo:

```yaml
SET_HEALTH 10
```

### SET\_PITCH

* Info: Força o jogador a olhar para uma certa posição de pitch (-90/90 graus, direção cima e baixo)
* Configurações do comando:
  * `{pitch_number}`: O número que você quer informar. Placeholders também funcionam
  * `{keepVelocity}`: Permite manter a velocidade do jogador
* Exemplo:

```yaml
- SET_PITCH 0 false
- SET_PITCH %target_pitch% false
```

### SET\_YAW

* Info: Força o jogador a olhar para uma certa posição de yaw (360 graus, direção esquerda e direita)
* Configurações do comando:
  * `{yaw_number}`: O número que você quer informar. Placeholders também funcionam
  * `{keepVelocity}`: Permite manter a velocidade do jogador
* Exemplo:

```yaml
- SET_YAW 10 false
```

### SPIN

* Info: Faz o alvo girar
* Configurações do comando:
  * `{duration ticks}`: A duração do giro
  * `{velocity}`: A velocidade do giro
* Exemplo:

```yaml
- SPIN 20 1
```

:::info
P: Como congelar alvos/jogadores/mobs?

R: execute **`SPIN {duration} 0`**, por exemplo
:::

### STEAL

* Info: Rouba um item do inventário do alvo
* Configurações do comando:
  * `{slot}`: -1 para a mão principal. Confira a referência de slots abaixo.
  * `[remove item]`: (Opcional) (padrão = true)
* Exemplo:

```yaml
- STEAL 10
```

![](https://media.ssomar.com/m/docs-img-slots-info.png)

### STRIKELIGHTNING

* Info: Faz cair um raio sem dano em quem executa o comando
* Sem configuração do comando 
* Exemplo:

```yaml
- STRIKELIGHTNING
```

:::info
Isto não é o mesmo que o comando smite do Essentials. Se você quer fulminar seus alvos, coloque-o em target commands ou entity commands, junto com os ativadores adequados, como `PLAYER_CLICK_ON_PLAYER`, por exemplo.
:::

### STUN ENABLE/DISABLE

* Info: Ativa ou desativa o stun para o jogador (ele deita você no chão e impede que você mova a câmera
* Comandos:
  * STUN\_ENABLE
  * STUN\_DISABLE
* Exemplo:

```yaml
- STUN_ENABLE
- DELAY 5
- STUN_DISABLE
```

### TELEPORT

* Info: Teleporta o jogador/entidade para a localização
* Configurações do comando:
  * `{world}`: O mundo da localização para onde teleportar
  * `{x}`: A coordenada x da localização para onde teleportar.
  * `{y}`: A coordenada y da localização para onde teleportar.
  * `{z}`: A coordenada z da localização para onde teleportar.
  * `[pitch]`: (Opcional) (padrão = mantém o pitch do jogador) pitch da localização de teleporte
  * `[yaw]`: (Opcional) (padrão = mantém o yaw do jogador) yaw da localização de teleporte
  * `[keepVelocity]`: (Opcional) (padrão = true) Permite não interromper a velocidade do jogador.
* Exemplo:

```yaml
- TELEPORT ApocalypseWorld 70 70 70
```

### TELEPORT\_ON\_CURSOR

* Info: Teleporta você para onde está o seu cursor
* Configurações do comando:
  * `{range}`: Até que distância você quer teleportar
  * `{acceptAir}`: Para poder teleportar mesmo no ar, você precisa definir como true
* Exemplo:

```yaml
- TELEPORT_ON_CURSOR 8 true
```

### TRANSFER\_ITEM

* Info: Transfere um item no inventário
* Configurações do comando:
  * `{slot of launcher}`: Slot do item que será movido
  * `{slot of receiver}`: Slot onde o item vai parar
  ![](https://media.ssomar.com/m/docs-img-slots-info.png)
* Exemplo:

```yaml
- TRANSFER_ITEM 38 40
```

### UNSAFE\_TELEPORT\_ON\_CURSOR

* Info: Teleporta você para onde está o seu cursor sem considerar que você pode acabar em lugares impossíveis
* Configuração do comando:
  * `[maxRange]`: (Opcional) (padrão = 200) Até que distância você quer teleportar
* Exemplo:

```yaml
UNSAFE_TELEPORT_ON_CURSOR 20
```

### WORLD\_TELEPORT

* Info: Teleporta para um mundo na mesma localização
* Configuração do comando:
 * `{world}`: O nome do mundo para onde você quer teleportar o jogador/alvo.
* Exemplo:

```yaml
- WORLD_TELEPORT spawn_end
```

## Comandos de Animação

* BREAK\_BOOTS\_ANIMATION
* BREAK\_CHESTPLATE\_ANIMATION
* BREAK\_HELMET\_ANIMATION
* BREAK\_LEGGINGS\_ANIMATION
* BREAK\_MAIN\_HAND\_ANIMATION
* BREAK\_OFF\_HAND\_ANIMATION
* HURT\_ANIMATION
* SWING\_MAIN\_HAND
* SWING\_OFF\_HAND
* TELEPORT\_ENDER\_ANIMATION
* TOTEM\_ANIMATION
