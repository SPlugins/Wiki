---
description: >-
  Guia completo dos comandos de bloco do ExecutableBlocks no plugin SPlugins:
  sintaxe, configurações e exemplos de uso.
source_hash: 86f65c32a7acba4b
translated_at: '2026-10-03T10:31:24.449Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Comandos de Bloco

:::tip
Compatibilidade "Multi-world" para os comandos vanilla.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Exemplo, você quer summonar um Zombie no mundo SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Exemplo com um placeholder:

`execute in <<%block_world%>> run summon zombie 100 50 100`
:::

:::info
`In AROUND and MOB_AROUND commands, the true/false argument are not to be included in the command as they serve no purpose.`
:::

:::info
Habilite **HIDE USAGE** ao usar um número grande em **MINEINCUBE**, pois isso pode reduzir o lag que normalmente acontece bastante quando você usa `MINEINCUBE 8` por exemplo
:::

## Comandos personalizados

_Ordenados em ordem alfabética_

### &lt;+&gt; (Conector de Comandos Around)

* Info: Permite adicionar mais comandos em uma única linha de comando. Funcionará bem apenas com `AROUND` e `MOB_AROUND`.
* Exemplo: 

```text
- AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SENDMESSAGE &You got smited!
```

```text
- MOB_AROUND 7 STUN_ENABLE <+> DELAY 5 <+> STUN_DISABLE
```

### AROUND

* Info: Visa jogadores em um raio específico e faz com que eles executem comandos
* Configurações do comando
    * `{distance}`: Até que distância em raio o comando vai selecionar jogadores
    * `{affectThePlayerThatActivatesTheActivator}`: true/false. Se true, não afetará quem invocou.
      * Exemplo de situação: Quando você executa o ativador de um ExecutableItem e esse ativador suporta comandos de bloco,
      ele vai ignorar a pessoa que ativou o ativador. Porém, se essa opção for false, afetará você também.
    * `{throughBlocks}`: vai afetar ou não os mobs que estão atrás de blocos
    * `{limit}`: A quantidade de alvos que podem ser afetados
    * `{sort}`: Útil para a opção limit.
    * NEAREST: Seleciona as entidades mais próximas da origem.
    * RANDOM: Seleciona aleatoriamente qualquer entidade dentro do alcance do comando.
    * `{regionCheck}`: true/false. Se true, o comando AROUND verificará se o alvo está em terreno selvagem (wilderness) ou na claim de quem invocou (contexto do plugin GriefPrevention) (será atualizado em breve para verificar com outros plugins de claim)
    * `{command}`: O comando que os jogadores alvo irão executar
* Exemplo:

```
- AROUND 20 execute at %around_target% run summon lightning_bolt
```

* Isso invoca um raio em jogadores em um raio de 20 blocos ao redor do bloco clicado.

#### Você pode adicionar condições ao comando AROUND

* A condição se parece com AROUND \<distance> CONDITIONS(\<conditions>) \<command>
* As condições funcionam com placeholders, mas precisam ser %::\_::% em vez de %\_%
  * Por exemplo %::player\_health::%
* Para adicionar MAIS de 1 condição, use "&&" entre as condições
* Exemplo:

```
- AROUND 10 CONDITIONS(%::player_health::%>10&&%::player_name::%=2Ssomar) SENDMESSAGE &eclick
```

:::info
Tenha em mente que a parte CONDITIONS() interpreta os placeholders nela usando o jogador selecionado pelo comando AROUND. Então o que realmente aconteceu nos placeholders acima é que ele verifica se a vida do alvo é maior que 10 e se o jogador selecionado pelo comando AROUND se chama "2Ssomar"
:::

### APPLY\_BONEMEAL

* Info: Aplica o mesmo efeito que acontece quando um jogador usa farinha de osso em um bloco (cultivo)
* Sem configuração de comando
* Exemplo:

```yaml
- APPLY_BONEMEAL
```

### BREAK

* Info: Quebra o bloco alvo
* Sem configuração de comando
* Exemplo:

```
 - BREAK
```

### CONTENT\_ADD

* Info: Adiciona um item em um container
* Configurações do comando
  * \{Item\}: Item a adicionar
  * \[Amount]: Quantidade a adicionar (padrão é 1)
* Exemplo:

```
- CONTENT_ADD STONE 1
- CONTENT_ADD EI:Myitem 1
- CONTENT_ADD EI:test{Usage:1,Variables:{var1:"My text",var2:2}} 1
```

### CONTENT\_CLEAR

* Info: Limpa um container
* Sem configuração de comando
* Exemplo:

```
- CONTENT_CLEAR
```

### CONTENT\_REMOVE

* Info: Remove um item de um container
* Configurações do comando
  * \{Item\}: Item a remover
  * \[Amount]: Quantidade a remover (padrão é 1)
* Exemplo:

```
- CONTENT_REMOVE STONE 1
```

:::info
Não removerá ExecutableItems se o material corresponder. A única forma seria especificando com EXECUTABLEITEMS:`{id}`
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

* Info: Muda o tipo do bloco selecionado pelo ativador
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

* Info: Acelera o crescimento dos cultivos ao redor do bloco
* Comando: CROPS\_GROWTH\_BOOST \{radius\} \{delay between two growths in ticks\} \{total duration in ticks\} \{chance 0-100\}
* Exemplo:

```yaml
- CROPS_GROWTH_BOOST 5 10 100 50
```

### DROPEXECUTABLEITEM

* Info: Dropa um Executable Item na localização do bloco
* Configurações do comando
  * `{id}`: ID do item do ExecutableItem
  * `{quantity}`: A quantidade do executable item que vai dropar
  * `[owner]`: (Opcional) O dono do item dropado (IGN ou UUID do jogador)
  * `[itemdata]`: (Opcional) Configurações de dados do item contendo:
    * `Usage`: Define o valor de uso
    * `Variables`: Define variáveis personalizadas (formato: `{key:value}`)
    * `Durability`: Define o valor de durabilidade
* Exemplo:

```
- DROPEXECUTABLEITEM epicsnowball 1
- DROPEXECUTABLEITEM id:epicsnowball amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Info: Dropa um Executable Block na localização do bloco
* Configurações do comando
  * `{id}`: ID do item do ExecutableBlock
  * `{quantity}`: A quantidade do executable block que vai dropar
* Exemplo:

```
- DROPEXECUTABLEBLOCK House 1
```

### DRAIN IN CUBE

* Info: Drena em um cubo de raio "r" a fonte de lava e/ou água
* Configurações do comando
  * `{radius}`: O raio em blocos (9 é o limite), você pode ultrapassar o limite adicionando um * antes do seu raio (por sua conta e risco).
  * `{drainType}`: LAVA ou WATER (não precisa se você quiser ambos)
* Exemplo:

```
DRAININCUBE 4 WATER
DRAININCUBE *12 WATER
```

### DROPITEM

* Info: Dropa um item na localização do bloco
* Configurações do comando
  * `{material}`: O tipo do item.
    
<LinkPreview
  url="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"
  title="Material"
/>
  
* `{quantity}`: A quantidade do item que vai dropar
* Exemplo:

```
- DROPITEM BEDROCK 1
```

### EXPLODE

* Informação: Quebra o bloco que você visou e spawna um tnt aceso naquela localização
* Sem configuração de comando
* Exemplo:

```
- EXPLODE
```

### FARMINCUBE

* Informação: Quebra todos os cultivos em um raio determinado
* Configurações do comando
  * `{radius}`: Raio de quão grande é a área dos cultivos que você quer quebrar. **(O LIMITE É 9)**
  * `{drop}`: Se o bloco dropa loot ou não
  * `{onlyMaxAge}`: Só vai quebrar cultivos com idade máxima
  * `{replant}`: Se o cultivo será replantado ou não
  * `{event}`: Se o cultivo vai gerar o evento ou não.
* Exemplo:

```
- FARMINCUBE 9 true true true false
```

### FERTILIZEINCUBE

* Info: Fertiliza os cultivos próximos em 1 idade, é como aplicar farinha de osso, mas faz a planta crescer 100% das vezes.
* Configuração do comando
  * `{radius}`: Raio de quão grande é a área dos cultivos que você quer fertilizar **(O LIMITE É 9)**
* Exemplo:

```
- FERTILIZEINCUBE 9
```

### INLINE\_MINEINCUBE

* Info: Destrói blocos em um raio em formato de retângulo. Cada bloco quebrado por este comando é contado como um evento de quebra de bloco do jogador.
* Configurações do comando
  * `{radius}`: Raio de quão grande será o raio do cubo
  * `{depth}`: Quão profundo o retângulo será.
  * `{drop}`: Se o bloco dropa loot ou não
  * `{createBBEvent}`: se o plugin vai gerar um blockBreakEvent para cada bloco quebrado pelo MINEINCUBE (padrão true)
  * `[direction]`: (Opcional) (padrão = a direção do jogador) Se você quiser forçar uma direção. 
    * Opções:
      * `north/n/-z`: Norte
      * `south/s/+z`: Sul
      * `east/e/+x`: Leste
      * `west/w/-x`: Oeste
      * `up`: Cima
      * `down`: Baixo
      * `auto`: Usa a lógica de %player_direction_xz% da Player Expansion do PlaceholderAPI para decidir as direções `N/W/S/E`. Para a lógica de Cima/Baixo, direção `UP` se o pitch for `<=` -45; direção `DOWN` se o pitch `>=` 45. 
  * `[smelt]`: (Opcional) (padrão = false) Usa a lógica do comando SMELT. Se o bloco for fundível, ele dropa a versão fundida em vez disso. Caso contrário, dropará o bloco quebrado normalmente.
* Exemplo:

```
- INLINE_MINEINCUBE 1 4 true true
- INLINE_MINEINCUIBE radius:2 depth:4 drop:true createBBEvent:true direction:auto smelt:true
```

:::info
Suporta %player\_direction\_xz% do PlaceholderAPI - Player expansion\
Exemplo: INLINE\_MINEINCUBE 1 1 true true %player\_direction\_xz%
:::

### LAUNCH

* Info: Faz com que o bloco alvo dispare projéteis
* Configurações do comando
  * `{projectile}`: o tipo do projétil
  * `{speed}`: a velocidade do projétil
  * `{despawnDelay}`: o tempo para desaparecer é em segundos (Padrão 10)
* Exemplo:

```
- LAUNCH ARROW 2 5
```

:::info
O bloco deve ser direcional para o LAUNCH disparar o projétil corretamente.

Exemplo: AmethystCluster, Barrel, Bed, Beehive, Bell, BigDripleaf, CalibratedSculkSensor, Campfire, Chest, ChiseledBookshelf, Cocoa, CommandBlock, Comparator, CoralWallFan, DecoratedPot, Dispenser, Door, Dripleaf, EnderChest, EndPortalFrame, Furnace, Gate, Grindstone, Hopper, Ladder, Lectern, LightningRod, Observer, PinkPetals, Piston, PistonHead, RedstoneWallTorch, Repeater, SmallDripleaf, Stairs, Switch, TechnicalPiston, TrapDoor, TripwireHook, Vault, WallHangingSign, WallSign, WallSkull
:::

### MINEINCUBE

* Info: Destrói blocos em um raio em formato de cuboide. Cada bloco quebrado por este comando é contado como um evento de quebra de bloco do jogador.
* Configurações do comando
  * `{radius}`: Raio de quão grande é a área dos cultivos que você quer quebrar **(O LIMITE É 9)**
  * `{droploot}`: Se o bloco dropa loot ou não
  * `{createEvent}`: se o plugin vai gerar um blockBreakEvent para cada bloco quebrado pelo MINEINCUBE (padrão true)
  * `{offsetBreak}`: Se a área de blocos começa a quebrar a partir do bloco quebrado, ou a partir do "centro" para fazer a área realmente respeitar o "radius" selecionado. (padrão false)
  * `[smelt]`: (Opcional) (padrão = false) Usa a lógica do comando SMELT. Se o bloco for fundível, ele dropa a versão fundida em vez disso. Caso contrário, dropará o bloco quebrado normalmente.
* Exemplo:

```
- MINEINCUBE 4 true false
- MINEINCUBE radius:3 droploot:true createEvent:true offsetBreak:false smelt:false
```

### MINEINSPHERE

* Info: Destrói blocos em um raio em formato esférico. Cada bloco quebrado por este comando é contado como um evento de quebra de bloco do jogador.
* Configurações do comando
  * `{radius}`: Raio da esfera
  * `{drop}`: Se o bloco dropa loot ou não
  * `{create blockBreakEvent}`: se o plugin vai gerar um blockBreakEvent para cada bloco quebrado pelo comando
  * `[smelt]`: (Opcional) (padrão = false) Usa a lógica do comando SMELT. Se o bloco for fundível, ele dropa a versão fundida em vez disso. Caso contrário, dropará o bloco quebrado normalmente.
* Exemplo:

```
- MINEINSPHERE 4 true false
```

### MOB\_AROUND

* Info: Visa entidades em um raio específico e faz com que elas executem comandos
* Configurações do comando
  * `{distance}`: Até que distância em raio o comando vai selecionar entidades
  * `{displayMsgIfNoEntity}`: (true ou false) Para notificar o usuário do item se ele não conseguiu visar nenhum mob.
    * **Defina como false para esconder a mensagem**
  * `{throughBlocks}`: vai afetar ou não os mobs que estão atrás de blocos
  * `{safeDistance}`: Se a distância entre o alvo e quem invocou for menor ou igual ao valor de safeDistance, então o alvo não será afetado.
  * `{offsetYaw}`: A direção de yaw que você quer que seu offset tenha (independente do valor de yaw da origem)
  * `{offsetPitch}`: A direção de pitch que você quer que seu offset tenha (independente do valor de yaw da origem)
  * `{offsetDistance}`: Após calcular o offsetYaw e o offsetPitch, usando o valor disso, vai mover a posição/ponto central do comando AROUND a partir da localização xyz de origem.
  * `{limit}`: A quantidade de alvos que podem ser afetados
  * `{sort}`: Útil para a opção limit.
    * NEAREST: Seleciona as entidades mais próximas da origem.
    * RANDOM: Seleciona aleatoriamente qualquer entidade dentro do alcance do comando.
  * `{regionCheck}`: true/false. Se true, o comando AROUND verificará se o alvo está em terreno selvagem (wilderness) ou na claim de quem invocou (contexto do plugin GriefPrevention) (será atualizado em breve para verificar com outros plugins de claim)
  * `{nonliving}`: true/false. Se true, vai visar outras entidades como Arrows e Armor Stands. Quaisquer bugs que ocorram ao executar comandos de entidade com esse argumento habilitado provavelmente serão ignorados devido ao scope creep.
  * Você pode usar BLACKLIST ou WHITELIST de entidades adicionando uma dessas em qualquer lugar do comando:
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

Ele suporta NBT Tags, então você pode adicionar por exemplo algo como: `ZOMBIE{IsBaby:1}`

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

* Info: Move todas as entidades acima do bloco na direção do bloco (para entender melhor, é como uma esteira)
* Sem configuração de comando
* Exemplo:

```
- MOVE
```

:::info
**Este comando só funciona em blocos direcionais.**
:::

### MOB\_NEAREST

* Info: Visa o mob mais próximo do jogador/alvo.
* Configurações do comando
    * `{max accepted distance}`: Distância máxima aceita que a "entity" pode estar.
    * `{command(s)}`: O comando que será executado
* Exemplo:

Causa dano ao jogador mais próximo

```
- MOB_NEAREST 10 DAMAGE 5
```

### NEAREST

* Info: Visa o jogador mais próximo do jogador/alvo.
* Configurações do comando
    * `{max accepted distance}`: Distância máxima aceita que o "target" pode estar.
    * `{command}`: O comando que será executado
* Exemplo:

Causa dano ao jogador mais próximo

```
- NEAREST 8 DAMAGE 5
```

### OPENDOOR

* Abre ou fecha um bloco que pode ser aberto.
* Sem configuração de comando
* Exemplo:

```
- OPENDOOR
```

### OPMESSAGE

* Info: Envia uma mensagem para jogadores OP online e para o console
* Configuração do comando
  * `{text}`: Texto a enviar
* Exemplo:

```
- OPMESSAGE This is my debug message
```

### PARTICLE

* Info: Spawna partículas na localização do bloco
* Configurações do comando
  * `{type}`: O tipo da partícula.

<LinkPreview
  url="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html"
  title="Particles"
/>

* `{quantity}`: A quantidade de partículas que vão spawnar
* `{offset}`: O raio da área onde as partículas podem spawnar na localização do bloco
* `{speed}`: Quão rápidas ou grandes as partículas serão
* Exemplo:

```
- PARTICLE COMPOSTER 10 0.1 0.5
```

### PLACELIQUID
* Info: Coloca líquido em uma localização. Se houver um cauldron naquela localização, ele será preenchido. Se houver um bloco que pode ser waterlogged, ele será waterlogged. Caso contrário, não faz nada
* Configurações do comando
  * `{type}`: Tipo de líquido (Padrão: WATER). Opções: WATER/LAVA
* Exemplo:

```
- PLACELIQUID type:WATER
- PLACELIQUID type:LAVA
```

### PLANT\_IN\_SQUARE

* Info: Planta em quadrado respeitando o bloco selecionado.
* Configurações do comando
  * `{radius}`: Raio do quadrado
  * `{takeFromInv}`: Padrão true, pega as sementes do inventário do jogador, caso contrário gera as sementes
  * `{acceptEI}`: Padrão false, aceita EI para as sementes
  * `{cropType}`: padrão todas as sementes aceitas (pega sementes dependendo da ordem delas no inventário)
    * FARMLAND - WHEAT, CARROTS, BEETROOTS, POTATOES, SWEET\_BERRY\_BUSH, MELON\_STEM, PUMPKIN\_STEM, TORCHFLOWER\_CROP
    * SOUL SAND - NETHER\_WART
    * JUNGLE WOOD/LOG - COCOA
  * `{isCube}`: Transforma a área de plantio de quadrado em cubo. Útil para plantio de cocoa em área
* Exemplo:

```
- PLANT_IN_SQUARE 3
```

### REMOVEBLOCK

* Info: Remove o bloco, sem drops, apenas remove
* Sem configuração de comando
* Exemplo:

```
- REMOVEBLOCK
```

### SELL\_CONTENT

* Info: Vende todo o conteúdo de um chest / furnace / qualquer bloco que tenha um inventário.
* Configurações do comando
  * `{price_boost}`: Multiplicador float para os itens vendidos. Por exemplo, se o valor aqui for 2, os itens vendidos darão o dobro do preço de venda.
  * `{deleteUnsellable}`: Valor booleano para definir se deve deletar os itens não vendáveis
* Exemplo:

```
- SELL_CONTENT priceBoost:1.0 deleteUnsellable:false
```

:::info
Requer ShopGUIPlus (prioridade) & Vault & preços do CMI
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
Não substitui blocos que possuem dados extras (inventário, rotação, etc)
:::

### SET\_TEMP\_BLOCK\_POS

* Info: Substitui o bloco alvo por um bloco temporário
* Comando: SET\_TEMP\_BLOCK\_POS x:\{x\} y:\{y\} z:\{z\} material:\{material\} time:\{\} bypassProtection:\{boolean\} whitelistCurrentBlock:\{list of materials\}
* Exemplo:

```
- SET_TEMP_BLOCK_POS x:0.0 y:0.0 z:0.0 material:STONE time:10 bypassProtection:true whitelistCurrentBlock:SAND,DIRT
```

:::warning
Não substitui blocos que possuem dados extras (inventário, rotação, etc)
:::

### SETBLOCKPOS

* Info: Coloca blocos em uma posição determinada
* Configurações do comando
  * `{x}`: A posição X do bloco
  * `{y}`: A posição Y do bloco
  * `{z}`: A posição Z do bloco
  * `{material}`: O tipo do bloco
  * `{bypassWG}`: Se o WorldGuard vai interferir ou não na colocação do bloco
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
  * `{world}`: O mundo onde você quer que o Executable Block seja colocado
  * `{replace}`: Se você quer substituir um bloco que existe naquela localização ou não
  * `{bypassProtection}`: (Padrão false) Se você quer substituir o bloco mesmo que haja uma proteção de terreno de um plugin ali. 
  * `[ownerUUID]`: (Opcional) (padrão = sem dono) O uuid do jogador que seria o dono do eb
* Exemplo:

```
- SETEXECUTABLEBLOCK BLOCKS_001_STONE %block_x_int% %block_y_int% %block_z_int% %block_world% true
```

### SILK\_SPAWNER

* Info: Coleta o spawner envolvido no evento
* Sem configuração de comando
* Exemplo:

```
- SILK_SPAWNER
```

:::info
O comando SILK\_SPAWNER é compatível apenas com os seguintes plugins:

* RoseStacker
* WildStacker

E claro, os spawners vanilla.
:::

### SMELT

* Info: Funde o bloco alvo dropando o item fundido, por exemplo iron\_ore -> iron\_ingot, suporta fortune, se não puder ser fundido nada acontece. O loot do bloco não vai mudar.
* Configuração do comando
  * `[generateEvent]`: (Opcional) (padrão = true) Se ou não gera um evento de quebra de bloco
* Exemplo:

```
- SMELT 
- SMELT false
```

### STRIKELIGHTNING

* Info: Lança um raio sem dano no bloco que executa o comando
* Sem configuração de comando
* Exemplo:

```
- STRIKELIGHTNING
```

### VEIN\_BREAKER

* Info: Quebra blocos em veias com uma única quebra de bloco
* Configurações do comando
  * `{maxVeinSize}`: Quantidade máxima de blocos que o comando pode quebrar
  * `[createBBEvent]`: (Opcional) (padrão = true) Se gera ou não um evento de quebra de bloco
  * `[smelt]`: (Opcional) (padrão = false) Usa a lógica do comando SMELT. Se o bloco for fundível, ele dropa a versão fundida em vez disso. Caso contrário, dropará o bloco quebrado normalmente.
* Exemplo:

```
- VEIN_BREAKER 20
- VEIN_BREAKER maxVeinSize:10 createBBEvent:true smelt:true
```
