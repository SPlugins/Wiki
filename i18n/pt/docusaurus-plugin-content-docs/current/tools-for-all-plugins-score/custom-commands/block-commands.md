---
description: >-
  Lista de comandos de bloco do ExecutableBlocks e ExecutableItems: AROUND,
  MINEINCUBE, VEIN_BREAKER, SETBLOCK e outros, com configurações e exemplos.
source_hash: b9677d85e164ca24
translated_at: '2026-11-13T18:16:08.229Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Comandos de bloco

:::tip
Compatibilidade "multi-world" para os comandos vanilla.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Exemplo: você quer invocar um Zombie no mundo SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Exemplo com um placeholder:

`execute in <<%block_world%>> run summon zombie 100 50 100`
:::

:::info
`In AROUND and MOB_AROUND commands, the true/false argument are not to be included in the command as they serve no purpose.`
:::

:::info
Ative **HIDE USAGE** ao usar um número grande em **MINEINCUBE**, pois isso pode reduzir o lag que costuma acontecer bastante quando você usa `MINEINCUBE 8`, por exemplo
:::

## Comandos personalizados

_Em ordem alfabética_

### &lt;+&gt; (Around Command Connector)

* Info: Permite adicionar mais comandos em uma única linha de comando. Só funcionará bem com `AROUND` e `MOB_AROUND`.
* Exemplo: 

```text
- AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SENDMESSAGE &You got smited!
```

```text
- MOB_AROUND 7 STUN_ENABLE <+> DELAY 5 <+> STUN_DISABLE
```

### AROUND

* Info: Seleciona jogadores em um raio específico e faz com que executem comandos
* Configurações do comando
    * `{distance}`: Até que distância, em raio, o comando selecionará jogadores
    * `{affectThePlayerThatActivatesTheActivator}`: true/false. Se true, não afetará quem lançou o comando.
      * Exemplo de situação: quando você executa o ativador de um ExecutableItem e esse ativador suporta comandos de bloco,
      ele ignorará a pessoa que acionou o ativador. No entanto, se esta opção for false, ele afetará você também.
    * `{throughBlocks}`: afeta ou não os mobs que estão atrás de blocos
    * `{limit}`: A quantidade de alvos que podem ser afetados
    * `{sort}`: Útil para a opção limit.
    * NEAREST : Seleciona as entidades mais próximas da origem.
    * RANDOM : Seleciona aleatoriamente qualquer entidade dentro do alcance do comando.
    * `{regionCheck}`: true/false. Se true, o comando AROUND verificará se o alvo está na região selvagem ou no claim de quem lançou o comando (contexto do plugin GriefPrevention) (será atualizado em breve para verificar também com outros plugins de claim)
    * `{command}`: O comando que os jogadores selecionados executarão
* Exemplo:

```
- AROUND 20 execute at %around_target% run summon lightning_bolt
```

* Isso invoca um raio nos jogadores em um raio de 20 blocos ao redor do bloco clicado.

:::info
**Número de alvos:** `%around_target_count%` fornece o número de jogadores selecionados pelo comando. É o mesmo para todos os alvos e conta os alvos mantidos após `distance`, `affectThePlayerThatActivatesTheActivator`, `throughBlocks`, `regionCheck` e `limit`. Os `CONDITIONS(...)` verificados em cada alvo não são levados em conta. Aceita o atalho `+N` / `-N`: `%around_target_count%-1`.

Exemplo: `AROUND 10 SEND_MESSAGE &e%around_target_count% players are around the block`
:::

#### Você pode adicionar condições ao comando AROUND

* A condição tem esta forma: AROUND \<distance> CONDITIONS(\<conditions>) \<command>
* As condições funcionam com placeholders, mas precisam ser escritas como %::\_::% em vez de %\_%
  * Por exemplo, %::player\_health::%
* Para adicionar MAIS de 1 condição, use "&&" entre as condições
* Exemplo:

```
- AROUND 10 CONDITIONS(%::player_health::%>10&&%::player_name::%=2Ssomar) SENDMESSAGE &eclick
```

:::info
Tenha em mente que a parte CONDITIONS() processa os placeholders nela com o jogador selecionado pelo comando AROUND. Portanto, o que realmente aconteceu nos placeholders acima é que ele verifica se a vida do alvo é maior que 10 e se o jogador selecionado pelo comando AROUND se chama "2Ssomar"
:::

### APPLY\_BONEMEAL

* Info: Aplica o mesmo efeito que acontece quando um jogador usa farinha de osso em um bloco (plantação)
* Nenhuma configuração de comando
* Exemplo:

```yaml
- APPLY_BONEMEAL
```

### BREAK

* Info: Quebra o bloco alvo
* Nenhuma configuração de comando
* Exemplo:

```
 - BREAK
```

### CONTENT\_ADD

* Info: Adiciona um item em um contêiner
* Configurações do comando
  * \{Item\}: Item a adicionar
  * \[Amount]: Quantidade a adicionar (o padrão é 1)
* Exemplo:

```
- CONTENT_ADD STONE 1
- CONTENT_ADD EI:Myitem 1
- CONTENT_ADD EI:test{Usage:1,Variables:{var1:"My text",var2:2}} 1
```

### CONTENT\_CLEAR

* Info: Esvazia um contêiner
* Nenhuma configuração de comando
* Exemplo:

```
- CONTENT_CLEAR
```

### CONTENT\_REMOVE

* Info: Remove um item de um contêiner
* Configurações do comando
  * \{Item\}: Item a remover
  * \[Amount]: Quantidade a remover (o padrão é 1)
* Exemplo:

```
- CONTENT_REMOVE STONE 1
```

:::info
Ele não removerá ExecutableItems se o material corresponder. A única forma seria especificando com EXECUTABLEITEMS:`{id}`
:::

### CONSOLEMESSAGE

* Info: Envia uma mensagem para o console
* Configuração do comando
  * `{text}`: Texto a enviar para o console
* Exemplo:

```yaml
- CONSOLEMESSAGE This is a debug message
```

### CHANGE\_BLOCK\_TYPE

* Info: Altera o tipo do bloco selecionado pelo ativador
* Configuração do comando
* Exemplo:

```
- CHANGE_BLOCK_TYPE STONE
```

:::info
Funciona com ItemsAdder
:::

```
- CHANGE_BLOCK_TYPE ITEMSADDER:MyIA
```

### CROPS\_GROWTH\_BOOST

* Info: Acelera o crescimento das plantações ao redor do bloco
* Comando: CROPS\_GROWTH\_BOOST \{radius\} \{delay between two growths in ticks\} \{total duration in ticks\} \{chance 0-100\}
* Exemplo:

```yaml
- CROPS_GROWTH_BOOST 5 10 100 50
```

### DROPEXECUTABLEITEM

* Info: Solta um Executable Item na localização do bloco
* Configurações do comando
  * `{id}`: ID do item do ExecutableItem
  * `{quantity}`: A quantidade do executable item que será solta
  * `[owner]`: (Opcional) O dono do item solto (nome do jogador ou UUID)
  * `[itemdata]`: (Opcional) Configurações de dados do item contendo:
    * `Usage`: Define o valor de usos
    * `Variables`: Define variáveis personalizadas (formato: `{key:value}`)
    * `Durability`: Define o valor de durabilidade
* Exemplo:

```
- DROPEXECUTABLEITEM epicsnowball 1
- DROPEXECUTABLEITEM id:epicsnowball amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Info: Solta um Executable Block na localização do bloco
* Configurações do comando
  * `{id}`: ID do item do ExecutableBlock
  * `{quantity}`: A quantidade do executable block que será solta
* Exemplo:

```
- DROPEXECUTABLEBLOCK House 1
```

### DRAIN IN CUBE

* Info: Drena, em um cubo de raio "r", a fonte de lava e/ou água
* Configurações do comando
  * `{radius}`: O raio em blocos (9 é o limite). Você pode contornar o limite adicionando um * antes do seu raio (por sua conta e risco).
  * `{drainType}`: LAVA ou WATER (não é necessário se você quiser ambos)
  * `[waterlogged]`: (Opcional) (padrão = false) Se true e a água for drenada (`WATER` ou sem `{drainType}`), também seca os blocos com água (waterlogged) do cubo (lajes, escadas, cercas...) e remove os blocos `KELP`, `KELP_PLANT`, `SEAGRASS`, `TALL_SEAGRASS` e `BUBBLE_COLUMN` sem soltar nada, como uma esponja faz. Apenas para servidores 1.13+.
* Exemplo:

```
DRAININCUBE 4 WATER
DRAININCUBE *12 WATER
DRAININCUBE 4 WATER waterlogged:true
```

:::info
Sem `waterlogged:true`, os blocos com água (waterlogged) mantêm a água e ela pode voltar a fluir para a área drenada.
:::

### DROPITEM

* Info: Solta um item na localização do bloco
* Configurações do comando
  * `{material}`: O tipo do item.
    
<LinkPreview
  url="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"
  title="Material"
/>
  
* `{quantity}`: A quantidade do item que será solta
* Exemplo:

```
- DROPITEM BEDROCK 1
```

### EXPLODE

* Informação: Quebra o bloco que você selecionou e faz surgir um TNT aceso nessa localização
* Nenhuma configuração de comando
* Exemplo:

```
- EXPLODE
```

### FARMINCUBE

* Informação: Quebra todas as plantações em um determinado raio
* Configurações do comando
  * `{radius}`: Raio da área das plantações que você quer quebrar. **(O LIMITE É 9)**
  * `{drop}`: (padrão = true) Se o bloco solta loot ou não
  * `{onlyMaxAge}`: (padrão = true) Só quebrará plantações com a idade máxima
  * `{replant}`: (padrão = false) Se a plantação será replantada ou não
  * `{event}`: (padrão = false, true com `runActivatorOnBlocks:true`) Se a plantação gerará o evento de quebra de bloco ou não.
  * `[runActivatorOnBlocks]`: (Opcional) (padrão = false) Apenas ExecutableItems. Se true, as plantações quebradas pelo comando também executam o ativador que o lançou, veja [runActivatorOnBlocks](#runactivatoronblocks). Pode ser escrito em qualquer lugar do comando e ativa `{event}`, a menos que `{event}` seja escrito como false.
* Exemplo:

```
- FARMINCUBE 9 true true true false
- FARMINCUBE 4 true true true runActivatorOnBlocks:true
```

### FERTILIZEINCUBE

* Info: Fertiliza as plantações próximas em 1 estágio de idade. É como aplicar farinha de osso, mas faz a planta crescer 100% das vezes.
* Configuração do comando
  * `{radius}`: Raio da área das plantações que você quer fertilizar **(O LIMITE É 9)**
* Exemplo:

```
- FERTILIZEINCUBE 9
```

### INLINE\_MINEINCUBE

* Info: Destrói blocos em um raio em formato retangular. Cada bloco quebrado por este comando conta como um evento de quebra de bloco de jogador.
* Configurações do comando
  * `{radius}`: Raio do tamanho do cubo
  * `{depth}`: Qual será a profundidade do retângulo.
  * `{drop}`: Se o bloco solta loot ou não
  * `{createBBEvent}`: se o plugin gerará um blockBreakEvent para cada bloco quebrado pelo MINEINCUBE (padrão true)
  * `[direction]`: (Opcional) (padrão = a direção do jogador) Se você quiser forçar uma direção. 
    * Opções:
      * `north/n/-z` : Norte
      * `south/s/+z` : Sul
      * `east/e/+x` : Leste
      * `west/w/-x` : Oeste
      * `up` : Cima
      * `down` : Baixo
      * `auto` : Usa a lógica de %player_direction_xz% da Player Expansion do PlaceholderAPI para decidir as direções `N/W/S/E`. Para a lógica de Cima/Baixo, direção `UP` se o pitch for `<=` -45; direção `DOWN` se o pitch for `>=` 45. 
  * `[smelt]`: (Opcional) (padrão = false) Usa a lógica do comando SMELT. Se o bloco puder ser fundido, solta a versão fundida em vez disso. Caso contrário, solta o bloco quebrado normalmente.
* Exemplo:

```
- INLINE_MINEINCUBE 1 4 true true
- INLINE_MINEINCUIBE radius:2 depth:4 drop:true createBBEvent:true direction:auto smelt:true
```

:::info
Suporta %player\_direction\_xz% da Player expansion do PlaceholderAPI\
Exemplo: INLINE\_MINEINCUBE 1 1 true true %player\_direction\_xz%
:::

### LAUNCH

* Info: Faz o bloco alvo disparar projéteis
* Configurações do comando
  * `{projectile}`: o tipo de projétil
  * `{speed}`: a velocidade do projétil
  * `{despawnDelay}`: o atraso de despawn em segundos (padrão 10)
* Exemplo:

```
- LAUNCH ARROW 2 5
```

:::info
O bloco precisa ser direcional para que o LAUNCH dispare o projétil corretamente.

Exemplo: AmethystCluster, Barrel, Bed, Beehive, Bell, BigDripleaf, CalibratedSculkSensor, Campfire, Chest, ChiseledBookshelf, Cocoa, CommandBlock, Comparator, CoralWallFan, DecoratedPot, Dispenser, Door, Dripleaf, EnderChest, EndPortalFrame, Furnace, Gate, Grindstone, Hopper, Ladder, Lectern, LightningRod, Observer, PinkPetals, Piston, PistonHead, RedstoneWallTorch, Repeater, SmallDripleaf, Stairs, Switch, TechnicalPiston, TrapDoor, TripwireHook, Vault, WallHangingSign, WallSign, WallSkull
:::

### MINEINCUBE

* Info: Destrói blocos em um raio em formato de paralelepípedo. Cada bloco quebrado por este comando conta como um evento de quebra de bloco de jogador.
* Configurações do comando
  * `{radius}`: Raio do cubo de blocos que você quer quebrar **(O LIMITE É 9)**
  * `{droploot}`: Se o bloco solta loot ou não
  * `{createEvent}`: se o plugin gerará um blockBreakEvent para cada bloco quebrado pelo MINEINCUBE (padrão true)
  * `{offsetBreak}`: Se a área de blocos começa a quebrar a partir do bloco quebrado ou a partir do "centro", para que a área funcione realmente com o "raio" selecionado. (padrão false)
  * `[smelt]`: (Opcional) (padrão = false) Usa a lógica do comando SMELT. Se o bloco puder ser fundido, solta a versão fundida em vez disso. Caso contrário, solta o bloco quebrado normalmente.
  * `[runActivatorOnBlocks]`: (Opcional) (padrão = false) Apenas ExecutableItems. Se true, os blocos quebrados pelo comando também executam o ativador que o lançou, veja [runActivatorOnBlocks](#runactivatoronblocks). Mantenha `{createEvent}` como true.
* Exemplo:

```
- MINEINCUBE 4 true false
- MINEINCUBE radius:3 droploot:true createEvent:true offsetBreak:false smelt:false
- MINEINCUBE radius:1 droploot:true createEvent:true runActivatorOnBlocks:true
```

### MINEINSPHERE

* Info: Destrói blocos em um raio em formato esférico. Cada bloco quebrado por este comando conta como um evento de quebra de bloco de jogador.
* Configurações do comando
  * `{radius}`: Raio da esfera
  * `{drop}`: Se o bloco solta loot ou não
  * `{create blockBreakEvent}`: se o plugin gerará um blockBreakEvent para cada bloco quebrado pelo comando
  * `[smelt]`: (Opcional) (padrão = false) Usa a lógica do comando SMELT. Se o bloco puder ser fundido, solta a versão fundida em vez disso. Caso contrário, solta o bloco quebrado normalmente.
* Exemplo:

```
- MINEINSPHERE 4 true false
```

### MOB\_AROUND

* Info: Seleciona entidades em um raio específico e faz com que executem comandos
* Configurações do comando
  * `{distance}`: Até que distância, em raio, o comando selecionará entidades
  * `{displayMsgIfNoEntity}`: (true ou false) Para notificar o usuário do item caso não tenha conseguido selecionar nenhum mob.
    * **Defina como false para ocultar a mensagem**
  * `{throughBlocks}`: afeta ou não os mobs que estão atrás de blocos
  * `{safeDistance}`: Se a distância entre o alvo e quem lançou for menor ou igual ao valor de safeDistance, o alvo não será afetado.
  * `{offsetYaw}`: A direção de yaw que você quer para o seu offset (independente do valor de yaw da origem)
  * `{offsetPitch}`: A direção de pitch que você quer para o seu offset (independente do valor de yaw da origem)
  * `{offsetDistance}`: Depois de calcular offsetYaw e offsetPitch, usando o valor deste parâmetro, ele moverá a posição/ponto central do comando AROUND a partir da localização xyz da origem.
  * `{limit}`: A quantidade de alvos que podem ser afetados
  * `{sort}`: Útil para a opção limit.
    * NEAREST : Seleciona as entidades mais próximas da origem.
    * RANDOM : Seleciona aleatoriamente qualquer entidade dentro do alcance do comando.
  * `{regionCheck}`: true/false. Se true, o comando AROUND verificará se o alvo está na região selvagem ou no claim de quem lançou o comando (contexto do plugin GriefPrevention) (será atualizado em breve para verificar também com outros plugins de claim)
  * `{nonliving}`: true/false. Se true, ele selecionará outras entidades, como Arrows e Armor Stands. Quaisquer bugs que ocorram ao executar comandos de entidade com este argumento ativado provavelmente serão ignorados devido ao scope creep.
  * Você pode usar BLACKLIST ou WHITELIST para entidades adicionando um destes em qualquer lugar do comando:
    * BLACKLIST(ZOMBIE,ARMOR\_STAND)
    * WHITELIST(CHICKEN)
* Exemplo:

```
- MOB_AROUND 3 false BURN 10
- MOB_AROUND 5 execute at %around_target_uuid% run summon lightning_bolt
- MOB_AROUND 5 BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
- MOB_AROUND 5 effect give %around_target_uuid% poison 10 10
```

Para usar NBT de entidade no campo WHITELIST/BLACKLIST, você precisa instalar o plugin NBT API

<LinkPreview
  url="https://www.spigotmc.org/resources/nbt-api.7939/"
  title="NBTAPI Plugin"
/>

Suporta NBT Tags, então você pode adicionar, por exemplo, algo como: `ZOMBIE{IsBaby:1}`

<LinkPreview
  url="https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities"
  title="Entities tags"
/>

```
- MOB_AROUND 7 BLACKLIST(ZOMBIE{CustomName:"Test Test"},ZOMBIE{CustomName:"Miyamoto"}) false BURN 3
- MOB_AROUND 5 WHITELIST(ZOMBIE{IsBaby:1}) DAMAGE 20
- MOB_AROUND 9 WHITELIST(WOLF{Owner:"%player%"}) HEAL 5
- MOB_AROUND 9 WHITELIST(WOLF{Owner:%player_uuid%}) HEAL 5
```

### MOVE

* Info: Move todas as entidades acima do bloco na direção do bloco (para entender melhor, é como o que uma esteira faz)
* Nenhuma configuração de comando
* Exemplo:

```
- MOVE
```

:::info
**Este comando só funciona em blocos direcionais.**
:::

### MOB\_NEAREST

* Info: Seleciona o mob mais próximo do jogador/alvo.
* Configurações do comando
    * `{max accepted distance}`:  Distância máxima aceita em que a "entidade" pode estar.
    * `{command(s)}`: O comando que será executado
* Exemplo:

Causa dano ao jogador mais próximo

```
- MOB_NEAREST 10 DAMAGE 5
```

### NEAREST

* Info: Seleciona o jogador mais próximo do jogador/alvo.
* Configurações do comando
    * `{max accepted distance}`: Distância máxima aceita em que o "alvo" pode estar.
    * `{command}`: O comando que será executado
* Exemplo:

Causa dano ao jogador mais próximo

```
- NEAREST 8 DAMAGE 5
```

### OPENDOOR

* Abre ou fecha um bloco que pode ser aberto.
* Nenhuma configuração de comando
* Exemplo:

```
- OPENDOOR
```

### OPMESSAGE

* Info: Envia uma mensagem para os jogadores OP online e para o console
* Configuração do comando
  * `{text}`: Texto a enviar
* Exemplo:

```
- OPMESSAGE This is my debug message
```

### PARTICLE

* Info: Faz surgir partículas na localização do bloco
* Configurações do comando
  * `{type}`: O tipo de partícula.

<LinkPreview
  url="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html"
  title="Particles"
/>

* `{quantity}`: A quantidade de partículas que surgirão
* `{offset}`: O raio da área onde as partículas podem surgir na localização do bloco
* `{speed}`: Quão rápidas ou quão grandes serão as partículas
* Exemplo:

```
- PARTICLE COMPOSTER 10 0.1 0.5
```

### PLACELIQUID
* Info: Coloca líquido em uma localização. Se houver um caldeirão nessa localização, enche-o. Se houver um bloco que pode ficar com água (waterloggable), ele ficará com água. Caso contrário, não faz nada
* Configurações do comando
  * `{type}`: Tipo de líquido (padrão: WATER). Opções: WATER/LAVA
* Exemplo:

```
- PLACELIQUID type:WATER
- PLACELIQUID type:LAVA
```

### PLANT\_IN\_SQUARE

* Info: Planta em um quadrado respeitando o bloco selecionado.
* Configurações do comando
  * `{radius}`: Raio do quadrado
  * `{takeFromInv}`: O padrão é true, pega as sementes do inventário do jogador; caso contrário, gera as sementes
  * `{acceptEI}`: O padrão é false, aceita EI para as sementes
  * `{cropType}`: por padrão todas as sementes são aceitas (pega as sementes de acordo com a ordem delas no inventário)
    * FARMLAND - WHEAT, CARROTS, BEETROOTS, POTATOES, SWEET\_BERRY\_BUSH, MELON\_STEM, PUMPKIN\_STEM, TORCHFLOWER\_CROP
    * SOUL SAND - NETHER\_WART
    * JUNGLE WOOD/LOG - COCOA
  * `{isCube}`: Transforma a área de plantio de quadrado em cubo. Útil para o plantio de cacau em área
* Exemplo:

```
- PLANT_IN_SQUARE 3
```

### REMOVEBLOCK

* Info: Remove o bloco, sem drops, apenas remove
* Nenhuma configuração de comando
* Exemplo:

```
- REMOVEBLOCK
```

### SELL\_CONTENT

* Info: Vende todo o conteúdo de um baú / fornalha / todos os blocos que têm um inventário.
* Configurações do comando
  * `{price_boost}`: Multiplicador float para os itens vendidos. Por exemplo, se o valor aqui for 2, os itens vendidos darão o dobro do preço de venda.
  * `{deleteUnsellable}`: Valor booleano para definir se os itens não vendáveis devem ser excluídos
* Exemplo:

```
- SELL_CONTENT priceBoost:1.0 deleteUnsellable:false
```

:::info
Requer ShopGUIPlus (prioridade) e Vault e preços do CMI
:::

### SETBLOCK

* Info: Substitui o bloco alvo por outro bloco
* Configuração do comando
  * `{material}`: O material a definir
* Exemplo:

```
- SETBLOCK STONE
```

### SETTEMPBLOCK

* Info: Substitui o bloco alvo por um bloco temporário.
* Configurações do comando
  * `{material}`: O material a definir
  * `{time}`: O tempo em ticks (20 ticks = 1 seg)
* Exemplo:

```
- SETTEMPBLOCK STONE 100
```

:::warning
Ele não substitui blocos que têm dados extras (inventário, rotação etc.)
:::

### SET\_TEMP\_BLOCK\_POS

* Info: Substitui o bloco alvo por um bloco temporário
* Comando: SET\_TEMP\_BLOCK\_POS x:\{x\} y:\{y\} z:\{z\} material:\{material\} time:\{\} bypassProtection:\{boolean\} whitelistCurrentBlock:\{list of materials\}
* Exemplo:

```
- SET_TEMP_BLOCK_POS x:0.0 y:0.0 z:0.0 material:STONE time:10 bypassProtection:true whitelistCurrentBlock:SAND,DIRT
```

:::warning
Ele não substitui blocos que têm dados extras (inventário, rotação etc.)
:::

### SETBLOCKPOS

* Info: Define blocos em uma determinada posição
* Configurações do comando
  * `{x}`: A posição X do bloco
  * `{y}`: A posição Y do bloco
  * `{z}`: A posição Z do bloco
  * `{material}`: O tipo de bloco
  * `{bypassWG}`: Se o WorldGuard interferirá ou não na colocação do bloco
* Exemplo:

```
- SETBLOCKPOS %block_x_int% %block_y_int% %block_z_int% STONE true
```

### SETEXECUTABLEBLOCK

* Info: Comando setblock, mas para Executable Blocks
* Configurações do comando
  * `{id}`: ID do Executable Block
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
  * `{world}`: O mundo em que você quer que o Executable Block fique
  * `{replace}`: Se você quer substituir ou não um bloco que exista nessa localização
  * `{bypassProtection}`: (padrão false) Se você quer substituir o bloco mesmo que haja uma proteção de terreno de um plugin ali. 
  * `[ownerUUID]`: (Opcional) (padrão = sem dono) O uuid do jogador que seria o dono do eb
* Exemplo:

```
- SETEXECUTABLEBLOCK BLOCKS_001_STONE %block_x_int% %block_y_int% %block_z_int% %block_world% true
```

### SILK\_SPAWNER

* Info: Coleta o spawner envolvido no evento
* Nenhuma configuração de comando
* Exemplo:

```
- SILK_SPAWNER
```

:::info
O comando SILK\_SPAWNER só é compatível com os seguintes plugins:

* RoseStacker
* WildStacker

E, claro, com os spawners vanilla.
:::

### SMELT

* Info: Funde o bloco alvo soltando o item fundido, por exemplo iron\_ore -> iron\_ingot. Suporta fortune; se não puder ser fundido, nada acontecerá. O loot do bloco não mudará.
* Configuração do comando
  * `[generateEvent]`: (Opcional) (padrão = true) Se gera ou não um evento de quebra de bloco
* Exemplo:

```
- SMELT 
- SMELT false
```

### STRIKELIGHTNING

* Info: Lança um raio sem dano no bloco que executa o comando
* Nenhuma configuração de comando
* Exemplo:

```
- STRIKELIGHTNING
```

### VEIN\_BREAKER

* Info: Quebra blocos em veios com uma única quebra de bloco
* Configurações do comando
  * `{maxVeinSize}`: (padrão = 10) Quantidade máxima de blocos que o comando pode quebrar
  * `[createBBEvent]`: (Opcional) (padrão = true) Se gera ou não um evento de quebra de bloco
  * `[smelt]`: (Opcional) (padrão = false) Usa a lógica do comando SMELT. Se o bloco puder ser fundido, solta a versão fundida em vez disso. Caso contrário, solta o bloco quebrado normalmente.
  * `[runActivatorOnBlocks]`: (Opcional) (padrão = false) Apenas ExecutableItems. Se true, os blocos do veio também executam o ativador que lançou o comando, veja [runActivatorOnBlocks](#runactivatoronblocks). Mantenha `createBBEvent` como true.
* Exemplo:

```
- VEIN_BREAKER 20
- VEIN_BREAKER maxVeinSize:10 createBBEvent:true smelt:false runActivatorOnBlocks:false
- VEIN_BREAKER maxVeinSize:16 runActivatorOnBlocks:true
```

:::info
`triggerEvent` não é uma configuração do VEIN\_BREAKER. O antigo modelo do editor in-game escrevia `VEIN_BREAKER maxVeinSize:10 triggerEvent:true`: a parte `triggerEvent:true` não tem efeito, você pode removê-la. Para escolher se o comando gera eventos de quebra de bloco, use `createBBEvent`.
:::

#### runActivatorOnBlocks

`runActivatorOnBlocks` é uma configuração do VEIN\_BREAKER, do [MINEINCUBE](#mineincube) e do [FARMINCUBE](#farmincube). É lida apenas pelo ExecutableItems.

* Sem ela (padrão `false`), os blocos quebrados pelo comando não executam o ativador que contém o comando: é isso que evita um loop de quebras de bloco. Os outros ativadores dos seus itens (os que não têm um comando de quebra) continuam sendo executados para esses blocos.
* Com `runActivatorOnBlocks:true`, cada bloco quebrado pelo comando também executa o ativador que o lançou, como se o jogador o tivesse quebrado: suas condições, `desactiveDrops` (sem drops vanilla), seus outros comandos (por exemplo `DROPITEM`), seu `usageModification` e suas modificações de variáveis se aplicam a cada bloco. `cancelEvent: true` também se aplica: esses blocos então não são quebrados.
* O comando de quebra não é executado novamente para esses blocos, portanto não há loop.
* Os cooldowns, os usos por dia e os recursos exigidos (`requiredItems`, `requiredExecutableItems`, `requiredMoney`...) não são verificados para esses blocos: são verificados e consumidos uma única vez, para o bloco que executou o ativador. Caso contrário, um cooldown interromperia o veio após o primeiro bloco.
* O ativador recebe esses blocos por meio dos seus eventos de quebra de bloco: mantenha `createBBEvent` (VEIN\_BREAKER) ou `{createEvent}` (MINEINCUBE) em `true`, que é o padrão deles. O FARMINCUBE gera os eventos por conta própria com `runActivatorOnBlocks:true`, a menos que seu argumento `{event}` seja `false`.
* Esses eventos são quebras de bloco, portanto só funciona quando o comando está em um ativador PLAYER\_BLOCK\_BREAK.

Exemplo: cada bloco do veio solta 1 diamante em vez dos seus drops vanilla e custa 1 uso.

```yaml
activators:
  activator0:
    option: PLAYER_BLOCK_BREAK
    desactiveDrops: true
    usageModification: -1
    blockCommands:
    - VEIN_BREAKER maxVeinSize:16 runActivatorOnBlocks:true
    - DROPITEM DIAMOND 1
```
