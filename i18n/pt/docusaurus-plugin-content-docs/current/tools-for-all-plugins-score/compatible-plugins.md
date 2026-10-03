---
description: >-
  Lista não exaustiva de plugins que você pode combinar com o ExecutableItems em
  seu servidor Minecraft.
source_hash: 4012882ccbdb916c
translated_at: '2026-10-03T10:31:34.833Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ✔️ Plugins Compatíveis

:::info
Observe que esta lista é estritamente relacionada a plugins compatíveis, quase todo plugin é compatível com os plugins Ssomar, se você quiser executar um comando de outro plugin, basta substituir o nome do alvo pelos placeholders. \

Por exemplo:
```yaml
- essentials:fly %player% # For essentials fly
- vanish %player% # For vanish
- economy give %player% 100 # To give money
#...
```
Etcetera, **todo comando que suporta o nome de um jogador é "compatível" com nossos plugins.**
:::

Esta seção é para plugins compatíveis que funcionam com os plugins Ssomar, existem algumas funcionalidades que temos que são compatíveis com outros plugins.

* Antes de começar, você deve saber que compatível ≠ usável, quase todos os plugins são usáveis para os plugins Ssomar, isso porque todos os comandos são executados pelo console.

### MythicMobs

#### Você pode fazer seus mobs do MythicMobs dropar itens dos plugins Ssomar das seguintes formas:

*   ExecutableItems:

    1. Segure o ExecutableItem e faça `/mm i import`, isso fará com que o item seja importado para o arquivo items.yml do MythicMobs, a partir daí, você pode adicioná-lo à LootTable do MythicMobs.
    2. Executando uma skill \~onDeath do mob, invocando uma command skill adicionando a próxima linha:

    ```yaml
    Skills:
    - command{c="ei drop <item> 1 <caster.l.w> <caster.l.x> <caster.l.y> <caster.l.z>"} @self ~onDeath
    ```
* ExecutableBlocks:
  * A mesma ideia, mas em vez de usar ExecutableItem use o ExecutableBlock, e no comando da skill use "eb" em vez de "ei".

#### Você pode especificar os ativadores dos SsomarPlugins para funcionar apenas com MythicMobs específicos usando a funcionalidade [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities).

* Exemplo: Criar um ExecutableItem que causa mais dano a uma lista de MythicMobs
* Exemplo: Criar um ExecutableBlock que causa dano a um MythicMob específico quando ele caminha sobre o bloco
* Exemplo: Criar um ExecutableEvent que só funciona para uma lista de MythicMobs.

#### Você pode invocar MM Mobs usando este comando dentro do seu ativador:

* Dependendo do ativador que você está usando, pode ser necessário mudar os placeholders.
  * Exemplo: Em vez de %world% pode ser necessário usar %player\_world%,%target\_world% ou %block\_world%

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    playerCommands:
    - mm m spawn {mob_id} 1 %world%,%x%,%y%,%z%
```

* ⭐Você pode usar essa ideia com ExecutableBlocks e o ativador LOOP para criar um spawner personalizado de MythicMobs.

#### Executar skill do MythicMobs a partir das funcionalidades dos plugins Ssomar

* Você pode usar na seção de comandos `SUDOOP mm test cast <skill>` para executar uma skill do MythicMobs.

#### Comandos personalizados do SCore

* [CHANGETOMYTHICMOB](/tools-for-all-plugins-score/custom-commands/entity-commands#changetomythicmob)
  * ⭐É possível criar um sistema de pesca usando MythicMobs como o que existe no servidor Hypixel Minecraft. Por exemplo, tendo uma lista de tiers de diferentes varas de pescar (todas gerenciadas pelo ExecutableItems), em que cada tier terá de baixa a alta probabilidade de pegar mobs mais épicos de seus lagos, adicionando restrições para pescar apenas mobs do MM nos lagos nas coordenadas "x" (ou uma região do WorldGuard), etc.

### **LevelledMobs**

* ExecutableItems
  * Você pode fazer seus LevelledMobs dropar ExecutableItems usando este recurso:
    * [https://www.spigotmc.org/resources/lm-items.102081/](https://www.spigotmc.org/resources/lm-items.102081/)

### AuraSkills (anteriormente AureliumSkills)

* Os plugins Ssomar têm a funcionalidade de ativador [requiredMana](/executableitems/configurations/activator-configuration/activators-features#requiredmana) para usar como requisito para que o ativador funcione.
* Comandos do Aurelium Skills
  * Você também pode usar comandos do AureliumSkills no seu plugin, como dar mana ao jogador, dar mana aos jogadores ao redor (como um suporte), etc.
* ExecutableItems
  * NBT do Aurelium Skills
    * Você pode criar um ExecutableItem que, enquanto estiver equipado, aumenta sua mana máxima, isso pode ser feito criando um item, executando o comando `/sk modifier` e, em seguida, enquanto estiver equipando o item, executando `/ei create <id>`, agora o ExecutableItem tem a NBTTag do comando e, portanto, tem as modificações que você fez.

### ExecutableBlocks & ExecutableItems

* Esses dois plugins (ExecutableBlocks e ExecutableItems) podem ser vinculados entre si. Esse vínculo é feito pelo EB na funcionalidade [TYPE\_OF\_CREATION ](/executableblocks/configurations/block-configuration/block-features#creationtype). Por exemplo:
  * Colocar o ExecutableItem e ele se torna o ExecutableBlock vinculado a ele (por padrão ele perderia os dados do ExecutableItem e seria colocado como um bloco vanilla)
  * Quebrar um ExecutableBlock e obter o ExecutableItem vinculado a ele.
  * Rastrear o mesmo uso que o ExecutableBlock tinha quando colocado, ao ser quebrado e transformado no ExecutableItem vinculado e vice-versa.
  * Rastrear os mesmos valores de variável que o ExecutableBlock tinha quando colocado, ao ser quebrado e transformado no ExecutableItem vinculado e vice-versa.

### ItemsAdder

* ExecutableItems
  * Você pode usar as texturas criadas com o ItemsAdder usando a funcionalidade [customModelData ](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14) ou usando [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel).
  *   Você pode vincular o item do ItemsAdder ao EI seguindo a wiki deles sobre como vincular, adicionando a próxima linha de código ao arquivo do item do ItemsAdder.

      ```yaml
      executableitem:
        id: ZEUSCROWN
      ```
* ExecutableBlocks
  * Você pode criar um ExecutableBlock com a textura de um bloco do ItemsAdder, isso é feito selecionando a funcionalidade [TYPE\_OF\_CREATION ](/executableblocks/configurations/block-configuration/block-features#creationtype) do ExecutableBlocks.
* É possível selecionar como [detailedBlocks ](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks) para os ativadores relacionados a um bloco de todos os plugins, para selecionar blocos específicos do ItemsAdder
  *   Exemplo:

      ```yaml
      activators:  
        activator0: # Activator ID, you can create as many activator on the activators list    
          option: PLAYER_BLOCK_BREAK
          detailedBlocks:
          - ITEMSADDER:turquoise_block
      ```

### Nexo

* ExecutableItems
  * Você pode usar as texturas do Nexo dentro do seu ExecutableItem apenas usando o valor de [Custom model data](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14) ou o [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel).

### PlaceholderAPI

* Um dos principais pilares quando se trata de criar itens, você pode usar qualquer placeholder do PlaceholderAPI em qualquer parte dos nossos plugins:
  * Lore
  * Seção de comandos
  * Mensagens (todos os tipos de mensagens, mensagem de cooldown, mensagem de condição não atendida, mensagem de requisitos, etc)
  * Variáveis
  * etc.

### ShopGui+

* Este plugin suporta a venda de itens com NBT Tags específicas na loja, portanto, suporta ExecutableItems e ExecutableBlocks para serem vendidos.
* O comando de bloco [SELL\_CONTENT ](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content) é suportado por este plugin.

### ShopKeepers

* Este plugin suporta a venda de itens com NBT Tags específicas na loja, portanto, suporta ExecutableItems e ExecutableBlocks para serem vendidos.

### Tradesplus

* Este plugin suporta a venda de itens com NBT Tags específicas na loja, portanto, suporta ExecutableItems e ExecutableBlocks para serem vendidos.

### WorldGuard

* Para todos os plugins, você tem a condição para fazer o ativador funcionar apenas se o jogador estiver dentro ou fora de uma região, chamada [ifInRegion](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinregion-not), e ela é compatível com este plugin.
* Todos os comandos do SCore são condicionados pela proteção do WorldGuard
  * Isso significa que um BREAK (comando do SCore) não será executado se o jogador não tiver permissão para quebrar um bloco na posição selecionada.
  * Tenha em mente que esta funcionalidade é dos comandos do SCore, não dos comandos executados pelos nossos plugins, isso significa que usar um comando vanilla dentro de um dos nossos plugins "execute at %player% run setblock %block\_x% %block\_y% %block\_z% air replace" vai ignorar qualquer restrição.
* ExecutableBlocks
  * Você pode preencher uma região com ExecutableBlock(s) específicos com pesos detalhados usando [/eb wg-fill-region](/executableblocks/commands-and-permissions#fill-a-worldguard-region-with-an-eb).
    * Com esta funcionalidade, por exemplo, você poderia criar um loop global que reinicia uma mina específica, como as típicas /warp mines dentro de servidores Minecraft.

### HeadDB

* ExecutableItems
  * Você pode usar este plugin para selecionar uma cabeça de jogador específica para o item do ExecutableItem usando [head settings](/executableitems/configurations/item-configuration/item-features#head-settings).
* ExecutableBlocks
  * Você pode usar este plugin para selecionar uma cabeça de jogador específica para o bloco do ExecutableBlock vinculando um ExecutableItem com [head settings](/executableitems/configurations/item-configuration/item-features#head-settings) e usando o [TYPE\_OF\_CREATION](/executableblocks/configurations/block-configuration/block-features#creationtype) a partir do ExecutableItem especificado.

### IridiumSkyblock

* Para todos os plugins, você tem a condição para fazer o ativador funcionar apenas se o jogador estiver dentro de sua ilha, chamada [ifPlayerMustBeOnHisIsland ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland), e ela é compatível com este plugin.

### SuperiorSkyblock

* Para todos os plugins, você tem a condição para fazer o ativador funcionar apenas se o jogador estiver dentro de sua ilha, chamada [ifPlayerMustBeOnHisIsland ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland), e ela é compatível com este plugin.

### GriefPrevention

* Para todos os plugins, você tem a condição para fazer o ativador funcionar apenas se o jogador estiver dentro de seu claim, chamada [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim) e também existe [ifPlayerMustBeOnHisClaimOrWilderness ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness), ambas compatíveis com este plugin.

### Lands

* Para todos os plugins, você tem a condição para fazer o ativador funcionar apenas se o jogador estiver dentro de seu claim, chamada [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim) e também existe [ifPlayerMustBeOnHisClaimOrWilderness ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness), ambas compatíveis com este plugin.
* ExecutableItems
  * Existem alguns ativadores específicos para este plugin, são eles:
    * PLAYER\_ENTER\_IN\_THEIR\_LAND
    * PLAYER\_LEAVE\_THEIR\_LAND

### GriefDefender

* Para todos os plugins, você tem a condição para fazer o ativador funcionar apenas se o jogador estiver dentro de seu claim. Esta condição é chamada [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim) e é compatível com este plugin.

### Residence

* Para todos os plugins, você tem a condição para fazer o ativador funcionar apenas se o jogador estiver dentro de seu claim. Esta condição é chamada [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim) e é compatível com este plugin.

### PlotSquared

* Para todos os plugins, você tem a condição para fazer o ativador funcionar apenas se o jogador estiver dentro de seu plot. Esta condição é chamada [ifPlayerMustBeOnHisPlot ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisplot) e é compatível com este plugin.

### Towny

* Para todos os plugins, você tem a condição para fazer o ativador funcionar apenas se o jogador estiver dentro de sua cidade. Esta condição é chamada [ifPlayerMustBeOnHisTown ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhistown) e é compatível com este plugin.

### Advanced Enchantments

* ExecutableItems
  * Devido à forma como o plugin Advanced Enchantments funciona, seus encantamentos não estão presentes na lista de encantamentos. Então não é possível adicioná-los com a funcionalidade de encantamentos:![](https://media.ssomar.com/m/docs-img-image-256.png)
  * Mas é possível adicionar seus encantamentos aos seus ExecutableItems usando o plugin NBTAPI e seguindo uma destas formas:
    * A primeira forma é criando um item vanilla, depois adicionando o AdvancedEnchantment nele e, em seguida, enquanto estiver equipando, fazer /ei create \<id>, o ExecutableItem gerado automaticamente terá os encantamentos avançados importados.
    *   A segunda forma é adicionando a NBT Tag manualmente no arquivo de configuração do ExecutableItems. Aqui está um exemplo:

        ```yaml
        nbt:
          '0':
            key: ae_enchantment;haste # This add the haste AdvancedEnchantment NBT tag
            type: INT
            value: 1
        ```
  * Depois de todas essas etapas, você deve adicionar manualmente o encantamento na lore para informar aos jogadores que este item tem esse encantamento.

### RoseLoots

* Todos os comandos de bloco relacionados (por exemplo, [MINEINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#mineincube), [FARMINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#farmincube), [BREAK](/tools-for-all-plugins-score/custom-commands/block-commands#break), etc) suportam os drops personalizados de blocos deste plugin.

### MMOInventory

* ExecutableItems
  * Os ativadores relacionados a entrar e sair do inventário (por exemplo, EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY e EI\_LEAVE\_THE\_PLAYER\_INVENTORY) são acionados pelos métodos deles.

### EnchantsSquared

* ExecutableItems
  * Este plugin suporta os encantamentos do EnchantsSquared.

### ExcellentEnchants

* ExecutableItems
  * Este plugin suporta os encantamentos do ExcellentEnchants

### MMOCore

* A funcionalidade requiredMana para ativadores pode usar mana do MMOCore, permitindo que você defina requisitos de mana para que os ativadores funcionem.

### TAB

* O comando personalizado SETGLOW é compatível com o TAB. Você precisa usar o placeholder %score\_cmd-glow%

### BlocksToCommand

* Plugin que permite importar estruturas que podem ser colocadas com os plugins Ssomar.

### Terra

* Os biomas personalizados do Terra são suportados por condições de bioma usando a condição [ifInBiome ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinbiome-not). Isso permite criar ativadores, efeitos ou restrições específicos com base no bioma em que o jogador está.

### EcoSkills

* Você pode usar condições de placeholder para verificar se um jogador tem valores de magia específicos antes de permitir que um ativador seja acionado.
* Você pode usar comandos para obter ou remover valores de magia.
* ExecutableItems
  * Funcionalidade [RequiredMagic ](/executableitems/configurations/activator-configuration/activators-features#requiredmagic-ecoskills) em vez de usar condições de placeholder e comandos para remover magia.

### FACTIONS UUID

* Os comandos do SCore colocam e removem blocos com segurança, respeitando as proteções do FactionsUUID do jogador.

### CMI

* O comando [SELL\_CONTENT ](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content) suporta os preços do CMI, permitindo integração perfeita com o sistema de economia do CMI para vender itens pelo valor correto no jogo.

### JOBS REBORN

* O comando JOBS\_MONEY\_BOOST funciona para este plugin.

### VAULT

* ExecutableItems
  * A funcionalidade [requiredMoney ](/executableitems/configurations/activator-configuration/activators-features#requiredmoney) funciona com o Vault, permitindo que você defina um requisito de dinheiro para que os ativadores sejam acionados.

### Citizen NPC

* ExecutableItems
  * Os próximos ativadores funcionam para Citizen NPC(s)
    * PLAYER\_CLICK\_ON\_ENTITY
    * PLAYER\_FISH\_ENTITY
    * PLAYER\_KILL\_ENTIT

### NBT API

* #### itemCheckWithNBTAPI

### Wild Stacker

* Os comandos SILK\_SPAWNER funcionam com os spawners do WildStacker.
