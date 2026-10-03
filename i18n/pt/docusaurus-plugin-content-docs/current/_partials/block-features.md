---
description: >-
  Explica os recursos blockCommands, detailedBlocks e blockConditions dos
  activators no SPlugins, incluindo comandos e condições de blocos.
source_hash: e670b85f3ec02fc8
translated_at: '2026-10-03T10:48:24.855Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### blockCommands 

Commands são uma lista de comandos que são executados a partir do console quando o activator atende todas as condições e requisitos. Você pode usar comandos vanilla aqui, comandos do SCore e comandos de outros plugins.

* Todas as linhas de comando dessa lista de comandos são primeiro processadas com placeholders dos Ssomar Plugins e depois processadas através do PAPI. 
  * É recomendado verificar [Placeholders](/tools-for-all-plugins-score/placeholders) para ver quais placeholders você pode usar em cada activator.
* Existem três tipos de entity targets em commands
  * Player: É o jogador/usuário que acionou o activator no ExecutableItem
  * Target: É o jogador alvo/inimigo envolvido em um activator.
  * Entity: É a entidade/mob/inimigo envolvido em um activator.
* Tipo de categoria de activator: PLAYER\_BLOCK
* Info: Lista de comandos que normalmente são executados contra o bloco quando o activator é acionado.
  * Isso significa que o activator precisa estar envolvido com um bloco, por exemplo PLAYER\_HIT\_PLAYER é um activator, mas não envolve um bloco, então blockCommands não estão disponíveis aqui. Com o activator PLAYER\_BLOCK\_BREAK existe um bloco envolvido, então blockCommands estão disponíveis aqui.
  * Outro exemplo: PLAYER\_RIGHT\_CLICK tem uma activatorFeature chamada typeTarget, por padrão ela é ONLY\_AIR, então blockCommands não estão disponíveis já que o activator não está envolvido com um bloco, mas, typeTarget pode ser alterado para ONLY\_BLOCK e então o activator terá como feature disponível blockCommands, mais informações aqui -> \<IF I FORGOT PLS PING VAYK>
  * Você pode verificar a lista de blockCommands aqui -> [Block commands](/tools-for-all-plugins-score/custom-commands/block-commands)
* Exemplo:

```yaml
activators: 
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    blockCommands:
    - EXPLODE
```

* É importante entender que se o seu activator também tiver um player, você pode usar os playerCommands, então podemos ter por exemplo: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    playerCommands:
    - SEND_MESSAGE &6You have broken a block, it will explode in 5 seconds !
    blockCommands:
    - DELAY 5
    - EXPLODE
```

### detailedBlocks

* Info: Aqui você pode selecionar como condição o tipo de bloco(s) onde esse activator irá acionar usando essa feature.
  * Você pode selecionar blocos do Minecraft Vanilla como:
    * "STONE"
  * <CustomTag type="premium" /> <CustomTag type="version" version="1.13" /> Você pode selecionar blocos do Minecraft Vanilla com NBT (info: [Block\_states](https://minecraft.fandom.com/wiki/Block_states)) como: 
    * `FURNACE{lit:true}`
  * Você pode selecionar blocos do ItemsAdder como:
    * "ITEMSADDER:\<id>"
  * Você pode selecionar blocos do ExecutableBlocks como:
    * "EXECUTABLEBLOCKS:\<id>"
  * Você pode colocar blocos específicos em blacklist adicionando ! no início como:
    * "!DIRT"
  * Você pode adicionar Block Tags como: 
    * "#MINECRAFT\:MINEABLE/PICKAXE"
  * Você pode adicionar grupos de blocos como
    * "ALL\_ORES"

<details>

<summary>Lista de grupos de blocos</summary>

```
    ALL_CHESTS,
    ALL_FURNACES,
    ALL_PLANKS,
    ALL_LOGS,
    ALL_STRIPPED_LOGS,
    ALL_STRIPPED_WOODS,
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
    ALL_CONCRETE_POWDERS,
    ALL_GLASS,
    ALL_STAINED_GLASS,
    ALL_SHULKER_BOXES,
    ALL_LEAVES,
    ALL_CARPETS;
```

</details>

* Exemplo:

```yaml
activators:  
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    detailedBlocks:
      blocks:
      - STONE
      - COBBLESTONE
      - ANDESITE
      - FURNACE{lit:true} #(🎇 **BLOCK STATE FEATURE IS PREMIUM EXCLUSIVE ONLY AND FOR 1.13+** 🎇)
      - ITEMSADDER:turquoise_block
      - EXECUTABLEBLOCKS:CUSTOMDIRT
      - !DIRT
      - ALL_ORES
      - '#MINECRAFT:MINEABLE/PICKAXE'
      cancelEventIfNotValid: false
```

### blockConditions

* Info: Aqui você pode configurar condições para o bloco envolvido.
* [Block conditions](/tools-for-all-plugins-score/custom-conditions/block-conditions.md)

### Block placeholders

Quando o ator principal do evento é um bloco, então você pode usar na configuração do seu activator (commands, conditions, outros..) [os block placeholders](/tools-for-all-plugins-score/placeholders#-block-placeholders)
