---
description: >-
  Lista de comandos de Player e Target do SCore para ExecutableItems e
  ExecutableBlocks: sintaxe, configurações e exemplos de cada comando.
source_hash: 0ab741c02dc34406
translated_at: '2026-11-13T18:17:43.289Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';
import CustomTag from '@site/src/components/CustomTag';

# Comandos de Player e Target

:::warning
Você precisa saber que, por padrão, todos os comandos são executados pelo console, então, se quiser que o jogador execute o comando, adicione [**SUDO**](player-and-target-commands.md#sudo) ou [**SUDO\_OP**](player-and-target-commands.md#sudo_op) antes. 

_(Clique em SUDO ou SUDO\_OP para mais informações)_

\
**Não use esta opção para comandos vanilla e CUSTOM COMMANDS. Para usar comandos vanilla corretamente, vá até a FAQ e "How to use vanilla commands",**
:::

:::tip
Compatibilidade "Multi-world" para os comandos vanilla.

`execute in <<NAME`_`OF`_`YOUR_WORLD>> run ...`

Exemplo: você quer invocar um Zombie no mundo SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Exemplo com um placeholder`:`

`execute in <<%player_world%>> run summon zombie 100 50 100`
:::

:::info
Quer manter a forma HEX bruta no seu comando? Adicione a tag **BRUT\_HEX** ao seu comando. Ela funciona em qualquer lugar da linha de comando, mas é recomendado colocá-la na primeira parte do comando para ficar menos confuso
:::

:::info
Por padrão, nenhum comando é executado se o jogador estiver offline. (os comandos serão executados quando o jogador se conectar)

Mas você pode adicionar a tag **\[\<OFFLINE>]** nos seus comandos para remover essa restrição.

_(Muito útil para comandos de broadcast, boost, giveall, ...)_

Exemplo:

* \[\<OFFLINE>] broadcast hello !
* \[\<OFFLINE>] execute at %player% run setblock %block\_x\_int%+3 %block\_y\_int%-1 %block\_z\_int%-14 minecraft\:air
:::

:::info
Você pode usar \[\<CLEAR\_IF\_DISCONNECT>] se quiser limpar os comandos caso o jogador se desconecte

Exemplo:

* \[\<CLEAR\_IF\_DISCONNECT>] say meow
:::

## Comandos mistos

Além da lista de comandos a seguir, você também pode usar:

<LinkPreview
  url="docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity"
  title="Mixed commands (Compatible with Player and Entity)"
/>

Esses comandos podem ser usados nos comandos relacionados ao jogador OU nos comandos relacionados às entidades.

## Comandos personalizados

_Em ordem alfabética_

### ABSORPTION

* Info: Dá o efeito de absorção ao jogador
* Configurações do comando:
  * `{amount}`: quantidade de meios corações de absorção. Aceita valores negativos para remover.
  * `{time}`: duração do efeito em ticks. Deixe vazio ou "0" se quiser infinito.
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ABSORPTION amount:5 time:200 # Gives the player absorption
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ABSORPTION amount:5 time:200 # Gives the target absorption
```

:::warning
O valor do seu atributo MAX\_ABSORPTION deve ser maior que 0 !

Verifique o valor digitando : /attribute PLAYER\_NAME minecraft:max\_absorption base get

E você pode aumentá-lo digitando: /attribute PLAYER\_NAME minecraft:max\_absorption base set 20
:::

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    # You can do that to temporary up the max_absorption value of the player
    - minecraft:attribute %player% minecraft:max_absorption base set 5**
    - ABSORPTION amount:5 time:200
    - DELAY_TICK 200
    - minecraft:attribute PLAYER_NAME minecraft:max_absorption base set 0
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    # You can do that to temporary up the max_absorption value of the target
    - minecraft:attribute %player% minecraft:max_absorption base set 5
    - ABSORPTION amount:5 time:200
    - DELAY_TICK 200
    - minecraft:attribute PLAYER_NAME minecraft:max_absorption base set 0
```

### ACTIONBAR

* Info: Exibe a action bar com o seu texto + o tempo restante (59, 58, 57...).
* Configurações do comando:
  * `{text}`: O seu texto a exibir
  * `{delay}`: Duração em segundos
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - `ACTIONBAR &6Hey &e%player% ! 10` # Sends an ACTIONBAR to the player
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - `ACTIONBAR &6Hey &e%player% ! 10`# Sends an ACTIONBAR to the target
```

### ADD\_ITEM\_ATTRIBUTE

* Info: Adiciona um atributo a um item como operação de soma ou subtração.
* Configurações do comando:
  * `{slot}`: O slot onde será aplicado. -1 para a mão principal
  * `{attribute}`: O atributo que você quer adicionar. [Lista de atributos](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html)
  * `{value}`: O valor da operação
  * `{equipmentSlot}`: O slot onde o atributo será ativado. [Lista de EquipmentSlot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html)
  * `{mode}`: selecione o modo de adição
    * `mode:ADD`: Adiciona o atributo ao item
    * `mode:OVERRIDE`: Remove os atributos atuais do mesmo tipo do item + Adiciona o atributo ao item
    * `mode:STACK`: Empilha com o atributo presente no item; se nenhum existir, ele o adiciona
  * affectDefaultAttributes: true ou false # Quando for true, o modo OVERRIDE também sobrescreverá os atributos padrão, e para o MODE stack permite empilhar com os atributos padrão (verdes)
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ADD_ITEM_ATTRIBUTE slot:%slot% attribute:GENERIC_ATTACK_DAMAGE value:1.0 equipmentSlot:HAND mode:ADD # Add this attribute to the player
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ADD_ITEM_ATTRIBUTE slot:%slot% attribute:GENERIC_ATTACK_DAMAGE value:1.0 equipmentSlot:HAND mode:STACK affectDefaultAttributes: true # Add this attribute to the target
```

### ADD\_ITEM\_ENCHANTMENT

* Info: Adiciona um encantamento a um item em um slot específico com certo nível
* Configurações do comando:
  * `{slot}`: O slot onde será aplicado. -1 para a mão principal
  * `{enchantment}`: O encantamento que você quer aplicar, não use espaços, use os encantamentos do Minecraft e não os de exibição. [Encantamentos](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html)
  * `{level}`: O nível do encantamento
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ADD_ITEM_ENCHANTMENT slot:-1 enchantment:unbreaking level:1 
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ADD_ITEM_ENCHANTMENT slot:-1 enchantment:unbreaking level:1
```

### ADD\_ITEM\_LORE

* Info: Adiciona uma linha de lore
* Configurações do comando:
  * `{slot}`: O slot onde será aplicado. -1 para a mão principal
  * `{text}`: O texto da nova linha de lore
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ADD_ITEM_LORE slot:%slot% text:&7Item of %player%
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    playerCommands:
    - ADD_ITEM_LORE slot:%slot% text:&7Item of %target% added by %player%
```

### BOOTS

* Info: Coloca o item da sua mão principal no seu slot de botas. (Não funcionará se o item tiver "Curse of Binding")
* Sem configuração de comando
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BOOTS
```

### BOSSBAR

* Info: Cria um texto de bossbar por uma certa duração.
* Configurações do comando:
  * `{time}`: A duração da bossbar em ticks
  * `{color}`: Cor do texto da bossbar
  * `{text}`: texto na bossbar (Use underscores "_" para adicionar espaços ao seu argumento.)
  * `{count}`: quantas vezes você quer que ela conte
    * se esta opção estiver presente, o argumento de tempo deixará de importar
  * `{countTicks}`: true/false, se você quer que ela conte em ticks ou, em vez disso, em segundos
  * `{countOrder}`:
    * ascending: faz o timer contar a partir de 0
    * descending: faz o timer contar a partir do valor informado
  * `{overrideMode}`:
    * NO\_OVERRIDE: Não sobrescreve as outras Bossbars
    * OVERRIDE\_ALL: Sobrescreverá todas as outras BossBars enviadas pelo SCore
    * OVERRIDE\_SAME\_TEXT: Sobrescreverá as outras Bossbars enviadas pelo SCore que contenham o mesmo texto
  * `{barProgress}`: (padrão = 1.0) O progresso inicial da barra (0.0 a 1.0). Funciona com barras estáticas e com contagem regressiva (apenas contagem descending)
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BOSSBAR time:200 color:RED text:This_is_a_bossbar text
    - BOSSBAR time:20 color:BLUE text:Hello_world count:50 countTicks:true countOrder:ascending
    - BOSSBAR time:200 color:RED text:This is a bossbar text overrideMode:OVERRIDE_SAME_TEXT
    - BOSSBAR time:200 color:GREEN text:Half filled bar barProgress:0.5
```

### CANCEL\_PICKUP

* Info: Desativa a coleta de itens de um jogador por um período definido
* Configurações do comando:
  * `{time}`: A duração em ticks até o jogador poder coletar itens novamente
  * `{material}`: Se definido, o jogador não pode coletar apenas o material especificado; se for null, ele não pode coletar nada
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CANCEL_PICKUP time:600
    - CANCEL_PICKUP time:600 material:stone
```

:::info
A única forma de RESETAR este comando depois de definir um tempo em ticks é recarregar ou reiniciar o servidor. Se você gostaria de uma forma de resetá-lo, sugira no canal #suggestions do Discord.
:::

### CHAT

* Info: Envia uma mensagem do jogador para o chat
* Configurações do comando:
  * `{text}`: Texto a enviar
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CHAT &6Hello !!
```

### CHESTPLATE

* Info: Coloca o item da sua mão principal no seu slot de peitoral. (Não funcionará se o item tiver "Curse of Binding")
* Sem configuração de comando
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CHESTPLATE
```

### CLOSE\_INVENTORY

* Info: Fecha o inventário do jogador
* Sem configuração de comando
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CLOSE_INVENTORY
```

### CROPS\_GROWTH\_BOOST

* Info: Acelera o crescimento das plantações ao seu redor
* Configurações do comando:
  * `{radius}`: O raio do boost (padrão 5)
  * `{delay}`: O atraso em ticks entre cada boost de crescimento
  * `{duration}`: A duração total do boost em ticks
  * `{chance}`: A chance de crescimento que os blocos têm quando o boost é aplicado
* Exemplo:

O comando a seguir gerará 20 boosts de crescimento a cada 10 ticks.\
Todos os blocos dentro do raio terão 50% de chance de crescer quando um boost for aplicado.

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CROPS_GROWTH_BOOST radius:5 delay:10 durations:200 chance:50
```

### DISABLE\_FLY\_ACTIVATION

* Info: Impede o uso do fly por um jogador (planar com Elytra não é considerado voar)
* Configuração do comando:
  * `{time}`: A duração do efeito em segundos
* Exemplo: (O comando abaixo desativa a ativação do fly durante 1 minuto)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DISABLE_FLY_ACTIVATION time:60
```

### DISABLE\_GLIDE\_ACTIVATION

* Info: Impede o uso da elytra por um período de tempo
* Configurações do comando:
  * `{time}`: A duração do efeito em segundos
* Exemplo: (o comando abaixo desativa o uso da elytra por 20 segundos)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DISABLE_GLIDE_ACTIVATION time:20
```

### EICOOLDOWN

* Info: Aplica um cooldown a um ExecutableItems específico
* Configurações do comando:
  * `{PLAYER}`: O jogador alvo do comando
  * `{ID}`: O id do ExecutableItem ou "all" para todos os ExecutableItems
  * `{DURATION}`: A quantidade de tempo
  * `{boolean TICKS}`: (Padrão: false) Se false, o valor do argumento de duração será considerado em segundos. Se true, será considerado em ticks.
  * `[optional activator id]`: (Opcional) Você pode aplicá-lo a um id de ativador específico
* Exemplo: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EICOOLDOWN %player% thisismyid 10 true # For the ExecutableItem thisismyid 
    - EICOOLDOWN %player% all 10 true # For all ExecutableItems
```

:::info
`EICOOLDOWN` só pode **adicionar** um cooldown: quando vários cooldowns estão em andamento no mesmo ativador, o mais longo prevalece. Para encurtar ou remover um cooldown, use [`EICOOLDOWN_RESET`](#eicooldown_reset).
:::

### EICOOLDOWN_RESET

* Info: Remove o cooldown de um ExecutableItem para um jogador (todos os seus ativadores, ou apenas um ativador). O cooldown visual vanilla (`enableVisualCooldown`) também é resetado.
* Configurações do comando:
  * `{PLAYER}`: O jogador alvo do comando
  * `{ID}`: O id do ExecutableItem ou "all" para todos os ExecutableItems
  * `[optional activator id]`: (Opcional) Remove apenas o cooldown deste ativador; os outros ativadores mantêm o deles
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EICOOLDOWN_RESET %player% thisismyid activator1 # Only activator1 of the ExecutableItem thisismyid
    - EICOOLDOWN_RESET %player% thisismyid # All the activators of thisismyid
    - EICOOLDOWN_RESET %player% all # All ExecutableItems
```

Pelo console, `/score cooldowns clear EI:{ID}:{activator id} {player}` faz o mesmo para um ativador.

### EBCOOLDOWN

* Info: Aplica um cooldown a um ExecutableBlocks específico
* Configurações do comando:
  * `{PLAYER}`: O jogador alvo do comando
  * `{ID}`: O id do ExecutableBlocks ou "all" para todos os ExecutableBlocks
  * `{DURATION}`: A quantidade de tempo
  * `{boolean TICKS}`: (Padrão: false) Se false, o valor do argumento de duração será considerado em segundos. Se true, será considerado em ticks.
  * `[optional activator id]`: (Opcional) Você pode aplicá-lo a um id de ativador específico
* Exemplo: 

```yaml
activators:**
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EBCOOLDOWN %player% thisismyid 10 true # For the ExecutableBlock thisismyid 
    - EBCOOLDOWN %player% all 10 true # For all ExecutableBlocks
```

### EECOOLDOWN

* Info: Aplica um cooldown a um ExecutableItems específico
* Configurações do comando:
  * `{PLAYER}`: O jogador alvo do comando
  * `{ID}`: O id do ExecutableEvent ou "all" para todos os ExecutableEvents
  * `{DURATION}`: A quantidade de tempo
  * `{boolean TICKS}`: (Padrão: false) Se false, o valor do argumento de duração será considerado em segundos. Se true, será considerado em ticks.
  * `[optional activator id]`: (Opcional) Você pode aplicá-lo a um id de ativador específico
* Exemplo: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EECOOLDOWN %player% thisismyid 10 true # For the ExecutableEvent thisismyid 
    - EECOOLDOWN %player% all 10 true # For all ExecutableEvents
```

### FIREWORK\_BOOST
* Info: Se este comando for executado enquanto quem o executa estiver planando com a elytra, ele invocará um foguete de fogos de artifício de forma semelhante a quando os jogadores
clicam com o botão direito em um fogo de artifício na mão enquanto planam para ganhar distância.
* Configurações do comando:
  * `{duration}`: A duração de vida do fogo de artifício em segundos
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FIREWORK_BOOST 20
```

### FLY OFF

* Info: Desativa o voo criativo do jogador e, se o voo do jogador for desativado no ar, o jogador será teletransportado para o bloco possível abaixo dele.
* Configuração do comando:
  * `[teleportOnTheGround]`: (Opcional) (padrão = true) Se o jogador será teletransportado para o chão ou não
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FLY_OFF teleportOnTheGround:true
```

### FLY\_ON

* Info: Dá voo criativo ao jogador
* Sem configuração de comando
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FLY_ON
```

### FORMAT\_ENCHANTMENTS

* Info: Formata todos os encantamentos na sua lore
* Configurações do comando:
  * `{slot}`: O slot alvo (-1 para a mão principal)
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FORMAT_ENCHANTMENTS %slot%
```

![](https://media.ssomar.com/m/docs-img-image-393.png) -> ![](https://media.ssomar.com/m/docs-img-image-382.png)

### GIVE\_MONEY

* Info: Dá dinheiro a um jogador
  * Requer o plugin Vault
* Configurações do comando:
  * amount: a quantidade a dar
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - GIVE_MONEY amount:50.0
```

### GRAVITY\_DISABLE

* Info: Desativa a gravidade do jogador, impedindo-o de "cair" ou subir.
* Sem configurações de comando
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - GRAVITY_DISABLE
    - DELAY 5
    - GRAVITY_ENABLE
```

### GRAVITY\_ENABLE

* Info: Ativa a gravidade novamente para o jogador, que voltará a cair normalmente.
* Sem configuração de comando
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - GRAVITY_DISABLE
    - DELAY 5
    - GRAVITY_ENABLE
```

### HEAD

* Info: Coloca o item da sua mão principal no seu slot de cabeça. (Não funcionará se o item tiver "Curse of Binding")
* Sem configuração de comando
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - HEAD
```

### JOBS\_MONEY\_BOOST

* Info: Aumenta temporariamente o dinheiro ganho. Para [Jobs reborn](https://www.spigotmc.org/resources/jobs-reborn.4216/)
* Configurações do comando:
  * `{multiplier}`: Valor do multiplicador
  * `{time}`: Duração do boost em segundos
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - JOBS_MONEY_BOOST multiplier:2.0 time:10
```

:::info
O multiplicador não afeta os valores da actionbar do Jobs. O multiplicador deste comando só se aplica quando o plugin Jobs decide incrementar o dinheiro, o xp e os pontos obtidos.

Se for executado várias vezes com duração suficiente em cada boost, todos os boosts em andamento podem se acumular.
:::

### JOBS\_XP\_BOOST

* Info: Multiplica temporariamente os ganhos de XP do plugin Jobs. Para [Jobs reborn](https://www.spigotmc.org/resources/jobs-reborn.4216/)
* Configurações do comando:
  * `{multiplier}`: Valor do multiplicador de XP (por exemplo, 2.0 para XP em dobro)
  * `{time}`: Duração em segundos antes de o boost expirar
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - JOBS_XP_BOOST multiplier:2.0 time:10
```

:::info
O multiplicador não afeta os valores da actionbar do Jobs. O multiplicador deste comando só se aplica quando o plugin Jobs decide incrementar o dinheiro, o xp e os pontos obtidos.

Se for executado várias vezes com duração suficiente em cada boost, todos os boosts em andamento podem se acumular.
:::

:::info
Este comando permite acumular vários boosts de forma multiplicativa.
:::

### LAUNCH

* Info: Lança um projétil personalizado. [Referência](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type)
* Lista: 
<details>
<summary>Tipos de projétil</summary>
* ARROW
* DRAGONFIREBALL
* EGG
* ENDERPEARL
* FIREBALL
* LARGEFIREBALL
* LINGENRINGPOTION
* LLAMASPIT
* SHULKERBULLET (Disponível apenas para 1.12+)
* SIZEDFIREBALL
* SNOWBALL
* TRIDENT
* WITHERSKULL
</details>

* Configurações do comando:
  * `{projectile}`: o tipo do projétil ou o ID do projétil personalizado do SCore ( [Referência](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type) )
  * `[angleRotationVertical]`: (Opcional) (padrão = 0) (em graus) Define a direção para onde a entidade será lançada
  * `[angleRotationHorizontal]`: (Opcional) (padrão = 0) (em graus) Define a direção para onde a entidade será lançada
  * `[velocity]`: (Opcional) (padrão = 1) Para personalizar a velocidade do projétil (também funciona do 1.8 ao 1.12)
  * `[name]`: (Opcional) Nome personalizado dado ao projétil lançado, por exemplo para reconhecê-lo depois em uma condição (`name:&cFire_ball`).
  * `[strictYaw]`: (Opcional) (em graus) Direção horizontal do lançamento, usada no lugar da direção para onde o jogador olha (`0` = sul, `90` = oeste, `180` = norte, `-90` = leste). As configurações `angleRotation...` são somadas a ela.
  * `[strictPitch]`: (Opcional) (em graus) Direção vertical do lançamento, usada no lugar da direção para onde o jogador olha (`0` = em frente, `-90` = para cima, `90` = para baixo). As configurações `angleRotation...` são somadas a ela.
    * <CustomTag type="version" version="1.20.5" /> Também altera a velocidade das bolas de fogo (FIREBALL, SIZEDFIREBALL, LARGEFIREBALL, DRAGONFIREBALL, WITHERSKULL): `velocity:2` voa duas vezes mais rápido, `velocity:1` mantém a velocidade vanilla. Antes da 1.20.5, elas mantêm a velocidade vanilla.
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LAUNCH projectile:My_Custom_Proj velocity:5
```

* Exemplo de vários disparos:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LAUNCH projectile:WITHERSKULL
    - LAUNCH projectile:WITHERSKULL angleRotationVertical:20
    - LAUNCH projectile:WITHERSKULL angleRotationVertical:-20
```

* Exemplo: lançar sempre em linha reta (na horizontal), independentemente de o jogador olhar para cima ou para baixo, com um projétil nomeado:

```yaml
activators:
  activator0:
    option: PLAYER_RIGHT_CLICK
    playerCommands:
    - LAUNCH projectile:SNOWBALL strictPitch:0 name:Frost_Ball
```

:::info
Se você usar o LAUNCH COMMAND no ativador PLAYER\_LAUNCH\_PROJECTILE e o projétil tiver sido lançado por um arco, o projétil lançado com o comando LAUNCH personalizado manterá a mesma velocidade.
:::

:::info
Se você usar SHULKERBULLET como tipo de projétil, ele escolherá o cursor de quem o executa como alvo. Caso contrário, ele terá como alvo a entidade mais próxima de quem o executa.
:::

:::warning
Problemas atuais:  
- Shulker Bullets não podem ser usadas no 1.9.4, 1.10.2, 1.11.2. A partir do 1.12 não deve haver complicações, exceto ter que criar um projétil do SCore para dar à Shulker Bullet uma velocidade de voo adequada.
:::

### LEGGINGS

* Info: Coloca o item da sua mão principal no seu slot de calças. (Não funcionará se o item tiver "Curse of Binding")
* Sem configuração de comando
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LEGGINGS
```

### LOCATED\_LAUNCH

* Info: Lança um projétil em uma localização específica
* Configurações do comando:
  * `{projectileType}`: o tipo do projétil ou o ID do projétil personalizado do SCore ( [Referência](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type) )
  * `[frontValue]`: (Opcional) (padrão = 0) positivo = frente, negativo = trás - Posição Frente/Trás. Por exemplo, se você quer invocar o projétil a 5 blocos de distância de onde está olhando, use um valor positivo maior
  * `[rightValue]`: (Opcional) (padrão = 0) direita = positivo, negativo = esquerda - Posição Direita/Esquerda. Por exemplo, se você quer que o projétil seja invocado à sua esquerda, use um valor negativo maior
  * `[yValue]`: (Opcional) (padrão = 0) A que altura acima da sua posição Y o projétil será invocado.
  * `[velocity]`: (Opcional) (padrão = 1) A velocidade com que o projétil voará. Defina o valor como 0 para o projétil cair para baixo ao ser invocado.
  * `[angleRotationVertical]`: (Opcional) (padrão = 0) <CustomTag type="version" version="1.14" /> você pode adicionar uma rotação vertical ao seu projétil (em graus)
  * `[angleRotationHorizontal]`: (Opcional) (padrão = 0) <CustomTag type="version" version="1.14" /> você pode adicionar uma rotação horizontal ao seu projétil (em graus)
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LOCATED_LAUNCH projectile:ARROW frontValue:0 rightValue:0 yValue:0 velocity:1 angleRotationVertical:0 angleRotationHorizontal:0
```

### MINECART\_BOOST

* Info: Dá um boost quando você está em um minecart (efeito próximo ao de subir em um trilho energizado)
* Configuração do comando:
  * `{boost}`: A velocidade do boost
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MINECART_BOOST boost:10
```

### MIX\_HOTBAR

* Info: embaralha a hotbar do jogador
* Sem configuração de comando
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MIX_HOTBAR
```

### MODIFY\_DURABILITY

* Modifica a durabilidade de um item específico em um slot específico
* Configurações do comando:
  * `{modification}`: Valor positivo para aumentar a durabilidade. Valor negativo para diminuir a durabilidade
  * `{slot}`: O número do slot do item (-1 para o slot em mãos)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{supportUnbreaking}`: (true ou false) Se suporta o encantamento unbreaking ou não
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MODIFY_DURABILITY modification:-1 slot:%slot% supportUnbreaking:true
```

### OPEN\_CHEST

* Info: Abre um baú ou barril na localização selecionada
* Configurações do comando:
  * `{world}`: Nome do mundo
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
  * `[bypassProtections]`: (Opcional) (padrão = false) Se abrirá o baú mesmo que ele esteja protegido
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OPENCHEST VanillaWorld 100 100 100
```

### OPEN\_ENDERCHEST

* Info: Abre o baú do End para o jogador que executa o ativador
* Sem configuração de comando
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OPEN_ENDERCHEST
```

### OPEN\_WORKBENCH

* Info: Abre uma bancada de trabalho para o jogador que executa o ativador
* Sem configuração de comando
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OPEN_WORKBENCH
```

### OXYGEN

* Info: Dá oxigênio ao alvo
* Configuração do comando:
  * `{time}`: A duração em ticks de oxigênio que você quer dar
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OXYGEN time:200
```

### PROJECTILE\_CUSTOMDASH1

* Info: Semelhante ao CUSTOMDASH1, mas o xyz será substituído pelas coordenadas xyz do projétil mais próximo de você.
* Configurações do comando:
  * `{fallDamage}`: Se você sofrerá dano de queda ou não (Se você esquecer de definir true ou false, o padrão será false. Para sofrer dano de queda, defina como true)
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - PROJECTILE_CUSTOMDASH1 fallDamage:false
```

### REGAIN\_FOOD

* Info: Dá a você uma quantidade específica de comida/saturação
* Configurações do comando:
  * `{amount}`: A quantidade de pontos de saturação que você quer ganhar. Use valores negativos para reduzir os pontos de fome
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REGAIN_FOOD amount:5
```

### REGAIN\_MAGIC

* Info: Dá ao jogador valores específicos da magia específica do [Ecoskills](https://www.spigotmc.org/resources/ecoskills-%E2%AD%95-addictive-mmorpg-skills-%E2%9C%85-create-skills-stats-effects-mana-%E2%9C%A8-plug-play.95541/).  
* Configurações do comando:
  * `{ecoSkillsMagicID}`: O ID da magia do Ecoskills.
  * `{amount}`: A quantidade a receber.
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REGAIN_MAGIC ecoSkillsMagicID:mana amount:15
```

:::info
Suporta valores negativos.
:::

### REGAIN\_SATURATION

* Info: Dá a você uma quantidade específica de saturação
* Configurações do comando:
  * `{amount}`: A quantidade de saturação que você quer dar
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REGAIN_SATURATION amount:10
```

### REMOVE\_ENCHANTMENT

* Info: Remove um encantamento de um slot
* Configurações do comando:
  * `{slot}`: Slot de onde remover o encantamento (-1 para o slot em mãos)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{enchantment}`: Encantamento a remover (ALL para todos os encantamentos)
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REMOVE_ENCHANTMENT slot:-1 enchantment:ALL
```

### REMOVE\_LORE

* Info: Remove uma linha de lore
* Configurações do comando:
  * `{slot}`: Slot de onde remover a lore (-1 para o slot em mãos)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{line}`: A linha que você quer remover
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REMOVE_LORE slot:1 line:5
```

### REPLACE\_BLOCK

* Info: Substitui o bloco para o qual o jogador está olhando por outro diferente
* Configurações do comando:
  * `{material}`: ID do bloco (Block states são suportados)
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REPLACE_BLOCK STONE_BRICKS
    - REPLACE_BLOCK WATER[LEVEL=0]
```

### SEND\_BLANK\_MESSAGE

* Info: Envia uma mensagem em branco para você
* Sem configuração de comando
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SEND_BLANK_MESSAGE
```

### SEND\_MESSAGE

* Info: Envia uma mensagem para você
  * [MiniMessage](https://docs.papermc.io/adventure/minimessage/format/) suportado
* Configurações do comando:
  * `{message}`: a mensagem que você quer enviar
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    playerCommands:
    - SEND_MESSAGE text:&fThis is a somewhat random text.
    - SEND_MESSAGE text:<yellow>Hello </yellow><blue>World</blue><yellow>!</yellow> # MiniMessage Suported, but dont use MiniMessage + vanilla at the same time
```

### SEND\_CENTERED\_MESSAGE

* Info: Envia uma mensagem centralizada no chat para você
  * [MiniMessage](https://docs.papermc.io/adventure/minimessage/format/) suportado
* Configurações do comando:
  * `{message}`: a mensagem que você quer enviar
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SEND_CENTERED_MESSAGE text:&fThis is a somewhat random text.
    - SEND_CENTERED_MESSAGE text:<yellow>Hello </yellow><blue>World</blue><yellow>!</yellow> # MiniMessage Suported, but dont use MiniMessage + vanilla at the same time
```


### SET\_ARMOR\_TRIM

* Info: Define o armor trim específico com o padrão específico para o slot especificado
* Configurações do comando:
  * `{slot}`: O slot onde aplicar o comando (slot -1 para a mão principal)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{pattern}`: O padrão do trim (se 'null' ou 'remove', removerá o padrão atual). [Lista de TrimPattern](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimPattern.html)
  * `{patternMaterial}`: O material do padrão. [Lista de TrimMaterial](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimMaterial.html)
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ARMOR_TRIM slot:38 pattern:vex patternMaterial:netherite
    - SET_ARMOR_TRIM slot:38 pattern:null #to clear the armor trim
```


### SET\_BLOCK

* Info: Coloca um bloco sobre o bloco alvo do jogador
* Configurações do comando:
  * `{blockface}`: Você pode especificar ou não uma blockFace para forçar a colocação por cima, por exemplo. [BlockFaces](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/block/BlockFace.html)
  * `{material}`: ID do bloco (Block states são suportados) 
  * `{bypassProtection}`: Se colocará o bloco ou não, mesmo que o jogador não tenha a permissão
  * `[whitelistCurrentBlock]`: (Opcional) (padrão = pode ser definido sobre todos os tipos de bloco) Lista de blocos com os quais o bloco atual deve corresponder para ser substituído
    * Exemplos:
    * AIR, WATER
    * !STONE, !COBBLESTONE
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_BLOCK blockface:UP material:OAK_WOOD
    - SET_BLOCK material:FURNACE[LIT=TRUE]
    - SET_BLOCK material:GOLD_BLOCK whitelistCurrentBlock:SAND,DIRT
```

### SET\_BLOCK\_POS

* Info: Define um bloco em uma posição específica
* Configurações do comando:
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
  * `{material}`: o material do bloco
  * `[bypassProtection]`: (Opcional) (padrão = false), se ignora ou não a proteção de região, claim e ilha
  * `[replace]`: (Opcional) (padrão = true), se substitui ou não o bloco caso já exista um
  * `[whitelistCurrentBlock]`: (Opcional) (padrão = pode ser definido sobre todos os tipos de bloco) Lista de blocos com os quais o bloco atual deve corresponder para ser substituído
    * Exemplos:
    * AIR, WATER
    * !STONE, !COBBLESTONE
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_BLOCK_POS x:0 y:0 z:0 material:STONE bypassProtection:false replace:true
    - SET_BLOCK_POS x:0 y:0 z:0 material:GOLD_BLOCK whitelistCurrentBlock:SAND,DIRT
```

### SET\_EQUIPPABLE\_MODEL

* Info: Define o equippable model data de um item em um slot específico
* Configurações do comando:
  * `{slot}`: O número do slot onde está o item alvo
  * `{model}`: O nome do modelo de equipamento que você deseja atribuir ao item
* Exemplo:

```yml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_EQUIPPABLE_MODEL slot:-1 model:minecraft:diamond
```

### SET\_EXECUTABLE\_BLOCK

* Info: Setblock, mas para Executable Blocks. **(O EXECUTABLE BLOCKS PRECISA ESTAR INSTALADO)**
* Configurações do comando:
  * `{id}`: ID do executable block que você está tentando colocar
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
  * `{world}`: Nome do mundo
  * `[replace]`: (Opcional) (padrão = true). Se substituirá ou não o bloco existente nas coordenadas indicadas
  * `[bypassProtection]`: (Opcional) (padrão = false) se você quer ignorar as proteções como o worldguard
  * `[ownerUUID]`: (Opcional) (padrão = sem dono) O uuid do suposto dono do executable block
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_EXECUTABLE_BLOCK id:Mithril_Ore x:%block_x_int% y:%block_y_int% z:%block_z_int% world:%block_world% replace:false bypassProtection:true ownerUUID:%player_uuid%
```

### SET\_ITEM\_COLOR

* Info: Define uma cor específica para o item (itens coloríveis como armadura de couro / estrela de fogos de artifício)
*  Configurações do comando:
  * `{slot}`: O slot onde será aplicado. (-1 para a mão principal)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{color}`: valor numérico da cor. [Site de seleção de cores](https://www.tydac.ch/color/)
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_COLOR slot:1 color:0
```

### SET\_ITEM\_ATTRIBUTE

* Info: Define um atributo em um item.
* Configurações do comando:
  * `{slot}`: O slot onde será aplicado. (-1 para a mão principal)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{attribute}`: O atributo que você quer adicionar. [Atributos](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html)
  * `{value}`: O valor da operação
  * `{equipmentSlot}`: O slot do atributo [EquipmentSlots](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html)
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_ATTRIBUTE slot:%slot% attribute:GENERIC_ARMOR value:10 equipmentSlot:CHEST
```


### SET\_ITEM\_COOLDOWN

* Dá ao jogador/alvo um cooldown em um item
* Configurações do comando:
  * `{material or group}`: O tipo de material ou o grupo. [Mais informações sobre grupos](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-2)
  * `{cooldown}`: cooldown em segundos
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_COOLDOWN material:ENDER_PEARL cooldown:10
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_COOLDOWN group:my_cooldown_group cooldown:10
```

### SET\_ITEM\_CUSTOM\_MODEL\_DATA

* Info: Define um custom model data específico no item específico
* Configurações do comando:
  * `{slot}`: O slot onde será aplicado. (-1 para a mão principal)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{customModelData}`: valor do customModelData
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_CUSTOM_MODEL_DATA slot:10 customModelData:10
```

### SET\_ITEM\_LORE

* Info: Define uma linha de lore
* Configurações do comando:
  * `{slot}`: Número do slot (-1 para a mão principal)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
* `{line}` : Se você quer definir a lore da primeira linha, digite 1
* `{text}`: O texto da nova linha
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_LORE slot:%slot% line:3 text:&6LEGENDARY SWORD
```

### SET\_ITEM\_MATERIAL 

<CustomTag type="version" version="1.20.5" />
* Substitui o material do item por um material diferente, mantendo o nbt do item alvo
* Configurações do comando:
  * `{slot}`: Número do slot (-1 para a mão principal)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{material}`: O material no qual você quer que o item se transforme
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_MATERIAL slot:10 material:DIAMOND_HOE
```

### SET\_ITEM\_MODEL

* Info: Define um modelo personalizado para o seu item em um slot específico
* Configurações do comando:
  * `{slot}`: O slot onde será aplicado. (-1 para a mão principal)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{model}`: o valor do modelo que você quer aplicar ao item alvo
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_MODEL slot:-1 model:minecraft:stone
```

### SET\_ITEM\_NAME

* Info: Define um nome personalizado para o seu item em um slot específico
* Configurações do comando:
  * `{slot}`: O slot onde será aplicado. (-1 para a mão principal)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{name}`: o novo nome do item
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_NAME slot:%slot% name:&eThis is the new name of the item
```

### SET\_ITEM\_POTIONCOLOR

* Info: Define uma cor personalizada para a cor da poção de um item em um slot específico
* Configurações do comando:
  * `{slot}`: O slot onde será aplicado. (-1 para a mão principal)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{color}`: A cor que você quer aplicar. Para a cor, acesse `https://www.tydac.ch/color/` e pegue o valor `MapInfo Color` da cor de sua escolha.
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_POTIONCOLOR slot:%slot% color:10944256
```

### SET\_ITEM\_TOOLTIPSTYLE

* Info: Define o estilo de tooltip personalizado do item no slot.
* Configurações do comando:
  * `{slot}`: O slot onde será aplicado. (-1 para a mão principal)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{tooltipModel}`: (Valor padrão: `namespace:id`) O id do tooltip.
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_TOOLTIPSTYLE slot:-1 tooltipModel:namespace:id
```

### SET\_PLAYER\_TIME

* Info: Define o horário do jogador sem afetar o horário do lado do servidor.
* Configurações do comando:
  * `{time}`: O valor do horário. Digite `-1` para fazer o horário do jogador voltar a depender do horário do lado do servidor.
  * `{relative}`: (Valor padrão: false) Se não for true, definirá o horário do ponto de vista do usuário literalmente para esse valor. Mas se for true, pegará o horário atual do mundo e o somará ao valor fornecido para definir o seu horário atual do ponto de vista.
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_PLAYER_TIME time:6000 relative:false
```

### SET\_PLAYER\_WEATHER

* Info: Define o clima do jogador sem afetar o clima do lado do servidor.
* Configurações do comando:
  * `{weather The time value}`: Define o clima do jogador do seu ponto de vista
    * Opções:
      * RESET : Restaura o clima do lado do servidor
      * DOWNFALL : Chovendo ou nevando, dependendo do bioma
      * CLEAR : Clima limpo, nuvens, mas sem chuva.
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_PLAYER_WEATHER weather:CLEAR
```

### SET\_TEMP\_BLOCK\_POS

* Info : Define um bloco temporário
* Configurações do comando:
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
  * `{world}`: Nome do mundo
  * `{material}`: ID do bloco
  * `{time}`: Tempo em ticks
  * `[bypassProtection]`: (Opcional) (padrão = false) Se ignora ou não a intervenção de terceiros
  * `[whitelistCurrentBlock]`: (Opcional) (padrão = pode ser definido sobre todos os tipos de bloco) Lista de blocos aos quais prestar atenção
    * Exemplos:
    * AIR, WATER
    * !STONE, !COBBLESTONE


```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_TEMP_BLOCK_POS x:%entity_x% y:%entity_y% z:%entity_z% world:%entity_world% material:BEDROCK time:40 bypassProtection:true whitelistCurrentBlock:!AIR,!WATER
```

:::warning
Ele não substitui blocos que tenham dados extras (inventário, rotação, etc.)
:::

### SPAWN\_ENTITY\_ON\_CURSOR

* Info: Invoca entidades no seu cursor
  * Você pode especificar um [EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * Ou uma definição de entidade, exemplo: `{HasVisualFire:1b,id:"minecraft:bee"}` (1.21.+)
  * Ou um ID de MythicMob
* Configurações do comando:
  * `{entity}`: A especificação da entidade
  * `{amount}`: A quantidade de mobs que serão invocados nesse ponto
  * `[maxRange]`: (Opcional) (padrão = 200) O alcance máximo da invocação
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SPAWN_ENTITY_ON_CURSOR entity:CREEPER amount:1
```

```
# With EntitySnapshot
- SPAWN_ENTITY_ON_CURSOR entity:{HasVisualFire:1b,id:"minecraft:bee"} amount:1

# With MythicMob ID
- SPAWN_ENTITY_ON_CURSOR entity:MyCustomBossID amount:1
```

### SUDO

* Info: Força você a executar um comando
* Configuração do comando:
  * `{command}`: O comando a executar
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SUDO sit
    - SUDO say hi
```

### SUDO\_OP

* Info: Dá OP ao jogador, executa o SUDO com o jogador e depois retira o OP dele
* Info extra: Durante o OP, o jogador só pode executar o comando especificado após o SUDOOP; todos os outros comandos são bloqueados enquanto o jogador está com OP e, se o servidor travar, não há problema. O jogador terá o OP retirado quando se reconectar.
* Configurações do comando:
  * `{command}`: O comando a executar com OP
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SUDO_OP summon zombie
    - SUDO_OP fly
    - SUDO_OP god
    - SUDO_OP /replacenear 20 tnt
```

:::danger
Não é recomendado usar isto **muito**. Como explicado no topo desta página, se quiser executar comandos vanilla, use o comando execute (explicado na FAQ [How to use vanilla commands](/executableitems/questions-or-guides/frequently-asked-questions/how-to-use-vanilla-commands)).

Use SUDOOP apenas se não houver absolutamente nenhuma outra opção: ele deve ser seu último recurso, não sua primeira escolha.
:::

### SWAP\_HAND

* Info: Troca o item atual com o item da sua mão secundária
* Sem configuração de comando
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SWAP_HAND
```

### TRANSFER\_ITEM

* Info: Troca 2 itens no inventário por slot
* Configurações do comando:
  * `{slot of launcher}`: Slot alvo para o slot nº 1
  * `{slot of receiver}`: Slot alvo para o slot nº 2
  
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `[boolean drop]`: (Opcional) (padrão = false) Se o slot de quem executa é dropado durante a troca ou não

### XP_BOOST

* Info: Aumenta o ganho de xp por um tempo.
* Configurações do comando:
  * `{multiplier}`: Valor do multiplicador de XP
  * `{timeinsecs}`: Duração em segundos
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - XP_BOOST 2 10
```

:::info
Cuidado! Este comando pode se acumular, então, se você executar este comando várias vezes, obterá cada vez mais multiplicadores caso o tempo entre eles não seja suficiente para o último boost desaparecer.\
```yaml
- XP_BOOST 2 5
- DELAY 1
- XP_BOOST 2 5
```

Isso significa que o XP será aumentado nesta ordem:
* 1 segundo: x2
* 4 segundos: x4
* 1 segundo: x2
:::
