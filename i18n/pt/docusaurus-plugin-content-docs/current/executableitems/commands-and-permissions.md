---
description: >-
  Guia completo de comandos e permissões do plugin ExecutableItems para
  gerenciar itens personalizados no Minecraft.
source_hash: bc9c7ad5f9180570
translated_at: '2026-10-03T10:25:07.634Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# ⌨️ Comandos e Permissões

Nesta página você vai aprender sobre os Comandos e Permissões do plugin ExecutableItems.

Recursos premium são identificados com a tag: <CustomTag type="premium" />

## Permissões

**DICA para iniciantes:**

:::info
Para dar as permissões de todos os itens, recomendamos que você baixe um plugin de permissões como [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/). Depois de ter um plugin de permissões, você só precisa dar a permissão **`ei.item.*`**, para o Luckperm o comando é **`/lp group default permission set ei.item.* true`**
:::

#### Permissão de item

* Info: Permissão para um jogador usar um ExecutableItems.
  * Permissão para usar um ID específico de ExecutableItem: `ei.item.{id}`
  * Permissão para usar todos os ExecutableItems: `ei.item.*`
  * Permissão negativa para proibir um ID específico de ExecutableItems: `-ei.item.{id}` <CustomTag type="premium" />
* Exemplo: `ei.item.test`

#### Permissão de bypass de cooldown

* Info: Permissão para um jogador não ter cooldown ao usar um ExecutableItems.
  * Durante o teste, você deve testar sem op/operador/admin.
  * Permissão para ignorar um ID específico de ExecutableItems: `ei.nocd.{id}`
  * Permissão para ignorar todos os ExecutableItems: `ei.nocd.*`
* Exemplo: `ei.nocd.test`

#### Todas as permissões

* Info: Permissão que concede todas as permissões para ExecutableItems.
  * Cuidado! Esta concede literalmente todas as permissões, até as de administrador.
  * Permissão: `ei.*`
* Se você quiser dar uma permissão específica, continue lendo abaixo, cada comando será detalhado com sua respectiva permissão.

#### Todas as permissões de comandos

* Info: Permissão que concede todas as permissões de comandos para ExecutableItems.
  * Permissão: `ei.cmds`
* Se você quiser dar uma permissão específica, continue lendo abaixo, cada comando será detalhado com sua respectiva permissão.

## Comandos

Aqui você vai aprender sobre os comandos do ExecutableItems. Algumas palavras vão se repetir ao longo da explicação, aqui estão elas:

* SsomarPluginsItem: É o ID de um ExecutableItem que foi criado, da mesma forma que pode ser "Excalibur", "SuperPickaxe", "turtle", "12345", nós estabelecemos este nome.
* SsomarPluginsPlayer: É o nome de um jogador, da mesma forma que existe "Vayk\_", "Ssomar", "Special70", "Tidal\_Flame" também existe esse nome.

O formato dos comandos terá símbolos diferentes:

* \{\} : Se um argumento estiver entre \{\}, isso significa que é necessário para executar o comando.
* \[] : Se um argumento estiver entre \[], isso significa que é opcional para executar o comando.

Também haverá cores diferentes (mas é a mesma ideia de \{\} e \[]):

* Azul: Obrigatório
* Laranja: Opcional

### Comandos gerais

#### Criar um novo ExecutableItem

* Comando: **/ei create \{id\}**
  * `id`: ID do ExecutableItem.
  * Se você quiser **copiar o item de outro plugin**, ou um item vanilla personalizado (Banner, Shield, ...), é simples! Pegue-o na sua mão principal e execute este comando create.
* Exemplo: `/ei create SsomarPluginsItem`
* Permissão: `ei.cmd.create`

#### Criar um novo ExecutableItem a partir de um bloco visado

* Comando: /ei create-from\_block \{id\}
  * `id`: ID do ExecutableItem.
* Exemplo: `/ei create-from_block SsomarPluginsItem`
* Permissão: `ei.cmd.create-from-block`

#### Abrir o editor / menu

* Comando: **/ei editor** ou **/ei show**
* Permissão: `ei.cmd.editor` ou `ei.cmd.show`
* Na lista, o ícone de cada item mostra uma pré-visualização do seu nome de exibição, lore, encantamentos e atributos. Isso pode ser desativado com [editorIconPreview](/tools-for-all-plugins-score/score/general-config#editoriconpreview) na config do SCore.

#### Recarregar o plugin

* Comando: **/ei reload**
* Permissão: `ei.cmd.reload`

**Recarregar apenas 1 item**

* Comando: **/ei reload \{id\}**
  * `id` : ID do ExecutableItem.
* Exemplo: `/ei reload SsomarPluginsItem`
* Permissão: `ei.cmd.reload`

**Recarregar uma pasta**

* Comando: **/ei reload folder\:Name\_Of\_My\_Folder**
* Permissão: `ei.cmd.reload`

#### Regenerar as configurações padrão dos itens

* Comando: **/ei default\_items**
* Permissão: `ei.cmd.default_items`

#### Deletar um ExecutableItem

* Comando: **/ei delete \{id\}**
  * `id`: ID do ExecutableItem.
* Exemplo: `/ei delete SsomarPluginsItem`
* Permissão: `ei.cmd.create`

#### Editar um ExecutableItem com um comando

* Comando: **/ei edit \{id\}**
  * `id` : ID do ExecutableItem.
* Exemplo: `/ei edit SsomarPluginsItem`
* Permissão: `ei.cmd.edit`

#### Limpar todos os cooldowns e comandos atrasados dos ExecutableItems

* Comando: **/ei clear \{target\} \[optionaltarget]**
  * `target`
    * Você pode usar nomes de jogadores para direcionar um jogador
    * Você pode usar UUID para direcionar uma entidade.
  * `optional_target`
    * ALL: Reseta os comandos atrasados, cooldowns e actionbars do jogador.
    * DELAYED\_COMMANDS: Reseta todos os comandos atrasados causados por DELAY e DELAYTICK.
    * COOLDOWNS: Reseta todos os cooldowns do jogador em todos os itens.
    * ACTIONBARS: Reseta todas as actionbars do jogador do comando personalizado ACTIONBAR.
* Exemplo: `/ei clear SsomarPluginsPlayer COOLDOWNS`
* Permissão: `ei.cmd.clear`

#### Ativar / Desativar actionbar dos ExecutableItems

* Comando: **/ei actionbar \{on or off\}**
* **Exemplo:** `/ei actionbar off`
* Permissão: `ei.cmd.actionbar`

#### Inspecionar o ExecutableItem que está na sua mão principal

* Comando: **/ei inspect**
  * Para usar este comando o ExecutableItem deve ter o recurso de armazenar informações do item ativado. [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info)
  * Saída:
    * Usage
    * Owner UUID
    * Owner name
    * ID do ExecutableItems
    * Variáveis
* Permissão: `ei.cmd.inspect`

#### Remover o owner do EI que está na sua mão

* Comando: **/ei unowned**
  * Para remover o owner de um item, ele deve ter um owner antes. Para isso, o recurso [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info) deve estar ativado nesse ExecutableItem
  * Após executar este comando, o próximo jogador que interagir com este item será o próximo owner. (Ele não deve ser operador/op/admin)
* Permissão: `ei.cmd.unowned`

#### Retirar EI do inventário do jogador

* Comando: **/ei take \{player\} \{id\} \{quantity\}**
  * `player`: Nome do jogador do qual o item será retirado
  * `id`: Id do ExecutableItems
  * `quantity`: Valor inteiro da quantidade a remover
* Exemplo: `/ei take SsomarPluginsPlayer SsomarPluginsItem 1`
* Permissão: `ei.cmd.take`

#### Atualizar o(s) ExecutableItem(s) do(s) seu(s) jogador(es) com a última versão da configuração

* Info: Este comando atualiza o(s) ExecutableItemID(s) para a última versão da sua configuração. Isso significa que, se um jogador tiver um ExecutableItem em uma versão antiga, por exemplo, com o atributo GENERIC\_ARMOR em 10, e então você mudar o valor desse atributo na configuração do ExecutableItem, ele não será atualizado do lado do jogador. Para permitir essa atualização, você pode usar este comando para que seja atualizado e ele passe a ter, em vez de 10, o novo valor atualizado.
  * Para que esse processo de atualização funcione, o(s) ExecutableItem(s) selecionado(s) deve(m) estar no inventário dos jogadores, caso contrário não serão atualizados
  * Como dica, outra forma de fazer essa atualização é usando [Auto update item](/executableitems/configurations/activator-configuration/activators-features#auto-update-item)
* Comando: **/ei refresh \{player\} \{ExecutableItemID\}** **\{resetUsage\} \{resetDurability\}**
  * `player`: Nome de um jogador específico ou "all" para direcionar todos os jogadores online.
  * `ExecutableItemID`: Nome de um ExecutableItem específico ou "all" para direcionar todos os ExecutableItems criados.
  * `option`: Argumento de atualização
    * Opções:
      * MATERIAL
      * NAME
      * LORE
      * DURABILITY
      * ATTRIBUTES
      * ENCHANTS
      * CUSTOM_MODEL_DATA
      * ARMOR_SETTINGS
      * USAGE
      * ITEM_RARITY
      * BOOK
      * EQUIPPABLE
      * REPAIRABLE
      * HIDERS
      * INSTRUMENT
      * TOOL_RULES
      * FIREWORK
      * FIREWORK_EXPLOSION
      * CONTAINER
      * HEAD
      * BANNER
      * FOOD
      * CONSUMABLE
      * BUNDLE
      * BLOCK_STATE
      * CHARGED_PROJECTILES
      * MYFURNITURE
      * SPAWNER
      * WEAPON
      * BLOCK_ATTACKS
      * TOOLTIP_MODEL
      * ALL_OPTIONS (Faz todas as tarefas mencionadas acima)
* Permissão: `ei.cmd.refresh`

#### **Modificar o owner do ExecutableItem que está na sua mão**

* Comando: **/ei set\_owner** **\{player\}**
  * `player`: Nome do jogador a ser definido como alvo deste comando
    * Funciona com jogadores offline.
* Permissão: `ei.cmd.set_owner`

#### Ativar o modo debug

* Info: Modo em que cada ativador imprime mensagens diferentes para o usuário, para saber o estado do ativador e entender por que ele não está sendo ativado da forma esperada.
* Comando: **/ei debug**
* Permissão: `ei.cmd.debug`

#### Listar os sets e o que um jogador está vestindo <CustomTag type="premium" />

* Info: Lista os [sets](/executableitems/configurations/sets-configuration) carregados (`plugins/ExecutableItems/sets`). Com um jogador: as peças vestidas e o tier ativo de cada set.
* Comando: **/ei sets** **[player]**
* Permissão: `ei.cmd.sets`

#### Acionar um ativador (para testar um item)

* Info: Executa um ativador de um ExecutableItem que o jogador carrega, sem fazer o gesto (clique, golpe, salto...). Útil para testar uma configuração. Todo o resto funciona normalmente: slots detalhados, condições, cooldowns, usage e comandos. O item é procurado no slot informado, senão na mão principal, na mão secundária, na armadura, e depois em todo o inventário.
* Comando: **/ei trigger \{player\} \{item id\} \{activator id\}** **[slot:N] [target:nearest|\{player\}|\{uuid\}] [block:x,y,z] [click:left|right] [input:JUMP_PRESS...]**
  * `target`: a entidade ou jogador dos ativadores que possuem um target (golpe, clique em entidade...). Por padrão, aquele que o jogador está olhando.
  * `block`: o bloco dos ativadores que possuem um bloco como target. Por padrão, o bloco que o jogador está olhando.
  * `click`: para os ativadores com um clique detalhado. Por padrão `right` (`left` para `PLAYER_LEFT_CLICK`).
  * `input`: obrigatório para `PLAYER_INPUT`.
* Dica: se nada acontecer, execute **/ei debug** para ver qual verificação está bloqueando o ativador.
* Permissão: `ei.cmd.trigger`

### Comandos de give

#### Comando give

* Info: Comando para dar a um jogador um ExecutableItem no primeiro slot disponível.
* Comando: **/ei give \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \[giveOfflinePlayer]**
  * `player`: Nome do jogador que será o alvo deste comando
  * `id`: Id do ExecutableItem a dar.
    * Valores opcionais: Para adicionar esta configuração personalizada, não deve haver espaço(s) em branco no formato.
      * `Variables`: Você pode selecionar uma configuração de variáveis para quando o item for entregue.
        * ✅`{Variables:{a:"1",b:"2",c:"3"}}` # Sem uso de espaços em branco
        * ❌`{Variables:{a : "1",b: "2",c :"3"}}` # Uso de espaços em branco
      * `Usage:` Você pode selecionar um valor para o usage ao entregar o item
        * ✅`{Usage:5}` # Sem uso de espaço(s) em branco
        * ❌`{Usage : 5}` # Uso de espaço(s) em branco
      * `Durability`: Você pode decidir quanta durabilidade o item perde ao ser entregue ao usuário
        * ✅`{Durability:5}` # Sem uso de espaço(s) em branco
        * ❌`{Durability : 5}` # Uso de espaço(s) em branco
  * `quantity`: Quantidade de itens a dar
  * `giveOfflinePlayer`: Valor booleano para definir se o item será dado a um jogador offline ou não. Por padrão este valor é true.
* Exemplos: (Em todos estes exemplos os comandos estão sendo executados dentro de um ExecutableItems para que os placeholders como %player%,%var\_name% e %usage% sejam processados)
  * `/ei give %player% Genesis_Crystal{Variables:{vibraniun:10,proton:30},Usage:10} 3`
  * `/ei give %player% SurgeBlade{Variables:{charge:%var_charge%+1},Usage:%usage%-1} 1`
  * `/ei give SsomarPluginsPlayer BoneBlade 1`
  * `/ei give edp445 cupcake{Durability:12} 1`
* Permissão: `ei.cmd.give`

#### Comando Give All

* Comando: **/ei giveall \{id\} \{quantity\} \[world] \[giveOfflinePlayer]**
  * `id`: Id do ExecutableItem a dar.
  * `quantity`: Quantidade de itens a dar
  * `world`: Argumento opcional de mundo em que o comando será executado. Isso fará com que jogadores que não estejam neste mundo não recebam o ExecutableItem.
  * `giveOfflinePlayer`: Valor booleano para definir se o item será dado a um jogador offline ou não. Por padrão este valor é true.
* Permissão: `ei.cmd.giveall`

#### Dar um EI em um slot específico de um jogador <CustomTag type="premium" />

* Comando: **/ei giveslot \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \{slot\} \[override true or false]**
  * `player`: Nome do jogador que será o alvo deste comando
  * `id`: Id do ExecutableItem a dar.
    * Valores opcionais: Para adicionar esta configuração personalizada, não deve haver espaço(s) em branco no formato.
      * `Variables`: Você pode selecionar uma configuração de variáveis para quando o item for entregue.
        * ✅\{Variables:\{a:"1",b:"2",c:"3"\\}\} # Sem uso de espaços em branco
        * ❌\{Variables:\{a : "1",b: "2",c :"3"\\}\} # Uso de espaços em branco
      * `Usage`: Você pode selecionar um valor para o usage ao entregar o item
        * ✅\{Usage:5\} # Sem uso de espaço(s) em branco
        * ❌\{Usage : 5\} # Uso de espaço(s) em branco
  * `quantity`: Quantidade de itens a dar
  * `slot`: Slot do jogador onde este item será entregue.
  * `override`: Valor booleano para sobrescrever o slot caso já exista um item nele. Se for o caso, ele será movido, e se o jogador tiver o inventário cheio, será derrubado no chão.
* Exemplos:
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`test{Variables:{x:"Hey",world:"Island"},Usage:50} 1 0`**
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`rum{Usage:69420,Variables:{tell_me:"why",aint_nothing:"BUT A HEARTBREAK"}} 1 %slot%`**
* Permissão: `ei.cmd.giveslot`

**Dar todos os EI de uma pasta específica a um jogador**

* Info: Comando para dar uma pasta do plugin a um jogador.
* Comando: **/ei givefolder \{player\} \{folder\} \{quantity\}**
  * `player`: Nome do jogador que será o alvo deste comando
* Permissão: `ei.cmd.givefolder`

### Comandos de drop

#### Dropar um EI em uma localização / posição específica

* Comando: **/ei drop \{id\} \{quantity\} \{\[world] \[x] \[y] \[z]\}**
  * `id`: Id do ExecutableItem a dar.
  * `quantity`: Quantidade de itens a dropar. Por padrão é 1.
  * localização: A localização inteira é opcional, caso você queira adicioná-la, você precisará preencher os próximos argumentos:
    * `world`: Mundo onde o item será dropado.
    * `x`: Coordenada X onde o item será dropado.
    * `y`: Coordenada Y onde o item será dropado.
    * `z`: Coordenada Z onde o item será dropado.
* Exemplos: (Em todos estes exemplos os comandos estão sendo executados dentro de um ExecutableItems para que os placeholders como %player%,%var\_name% e %usage% sejam processados)
  * `/ei drop totemshatter 1 %world% %x% %y% %z%`
  * `ei drop nuclearWar{Usage:3,Variables:{niconico:"nii"}} 25 %block_world% %block_x% %block_y% %block_z%`
  * `ei drop cybert1_5{Variables:{eh:5},Usage:5} 1 world 535 74 1329`
* Permissão: `ei.cmd.drop`

### Comandos de modificação

#### Modificar o valor de usage de um ExecutableItem

* Comando:
  * No jogo: **/ei modification \{set or modification\} usage \{slot\} \{value\}**
  * No console: **/ei console-modification \{set or modification\} usage \{player\} \{slot\} \{value\}**
  * Parâmetros:
    * `set or modification`
      * set: Define o novo \{value\} e substitui o antigo
      * modification: Útil para adicionar modificações, aumenta ou diminui o valor original pelo \{value\}
    * `player`: Nome do jogador que será o alvo deste comando
    * `slot`: Slot do jogador onde este item será entregue.
      * Mais informações sobre slots aqui [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots)
    * `value`: Valor usado para a modificação.
* Permissão: `ei.cmd.modification`

#### Modificar o valor de uma variável de um ExecutableItem

* Comando:
  * No jogo: **/ei modification \{set or modification\} variable \{slot\} \{variableName\} \{value\}**
  * No console: **/ei console-modification \{set or modification\} variable \{player\} \{slot\} \{variableName\} \{value\}**
  * Parâmetros:
    * `set or modification`
      * set: Define o novo \{value\} e substitui o antigo
      * modification: Útil para adicionar modificações, aumenta ou diminui o valor original pelo \{value\}
    * `player`: Nome do jogador que será o alvo deste comando
    * `slot`: Slot do jogador onde este item será entregue.
      * Mais informações sobre slots aqui [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots)
    * `variableName`: O nome da variável à qual você quer aplicar o typeOfModication com o valor selecionado.
    * `value`: Valor usado para a modificação.
* Permissão: `ei.cmd.modification`

#### Buscar um ExecutableItem no servidor

* Info: Isso te dá informações sobre onde estão os ExecutableItems com id \{id\} no seu servidor.
* Comando: **/ei search \{id\} \{searchMode\}**
  * `id`: Id do ExecutableItem que você está buscando
  * `searchMode`: Tipo de busca
    * players: Busca o ExecutableItem em todos os inventários de jogadores **online**.
    * containers: Busca o ExecutableItem em todos os containers **carregados**.
    * all: Busca usando ambos os métodos.
* Exemplo:
  * `/ei search EternalSword all`
* Permissão: `ei.cmd.search`

#### Obter o caminho do arquivo de um ExecutableItem

* Info: Este comando exibe o caminho absoluto do sistema de arquivos para o arquivo de configuração de um ExecutableItem específico. Útil para desenvolvedores ou administradores de servidor que precisam localizar e editar os arquivos de itens diretamente.
* Comando: **/ei path \{id\}**
  * `id`: Id do ExecutableItem para o qual você quer obter o caminho
* Exemplo:
  * `/ei path ExcaliburSword`
  * Saída: `[ExecutableItems] The path of ExcaliburSword is /path/to/plugins/ExecutableItems/Items/ExcaliburSword.yml.`
* Permissão: `ei.cmd.path`

#### Verificar informações de otimização de eventos

* Info: Este comando exibe informações detalhadas sobre a otimização do manipulador de eventos e estatísticas de desempenho do ExecutableItems. Ele mostra quais eventos estão sendo escutados e fornece informações sobre itens que usam reconhecimento personalizado (que pode impactar o desempenho). A saída é enviada para o console do servidor.
* Comando: **/ei checkevents**
* A saída inclui:
  * Lista de eventos otimizados e o status de seus listeners
  * Contagem de ExecutableItems usando reconhecimento personalizado
  * Avisos de impacto no desempenho
  * Recomendações para melhor desempenho
* Permissão: `ei.cmd.checkevents`

:::info
A saída deste comando é enviada ao **console**, não ao jogador dentro do jogo. Verifique o console do seu servidor para ver as informações detalhadas.
:::

:::tip
Itens com reconhecimento personalizado podem impactar o desempenho. O comando mostrará quantos itens estão usando este recurso. Se você tiver problemas de desempenho, considere reduzir a quantidade de itens com reconhecimento personalizado ativado.
:::

### Comandos do Resource Pack

#### Atualizar o resource pack do ExecutableItems

* Comando: **/ei refresh-pack**
* Info: Atualiza e recarrega o resource pack do ExecutableItems para todos os jogadores online. Útil após fazer alterações em texturas personalizadas.
* Permissão: `ei.cmd.refresh-pack`

#### Baixar o resource pack padrão do ExecutableItems

* Comando: **/ei download-default-pack**
* Info: Baixa o resource pack padrão do ExecutableItems do repositório oficial e extrai automaticamente o arquivo. Se `selfHostPack` estiver ativado no config.yml, o pack será automaticamente registrado e hospedado no seu servidor. Isso é útil para:
  * Configurar o resource pack pela primeira vez
  * Restaurar o pack padrão após modificações
  * Atualizar para a versão mais recente do pack padrão
* Requisitos:
  * `selfHostPack: true` deve estar definido no config.yml para hospedagem automática
  * O servidor deve ter conexão com a internet para baixar o pack
* Permissão: `ei.cmd.download-default-pack`

:::info
**Opções de hospedagem:**
- **Autohospedagem no seu servidor**: Defina `selfHostPack: true` no config.yml, o pack será hospedado diretamente pelo plugin
- **Hospedagem externa**: Se você quiser hospedar o pack você mesmo (em um site, CDN, etc.), defina a URL de download em `texturesPackUrl` no config.yml
- **Sem hospedagem**: Se nenhuma das opções estiver ativada, o pack será baixado e extraído localmente, mas não será distribuído aos jogadores
:::

### Custom triggers

* Info: ExecutableItems tem comandos para executar custom triggers. Se você quiser saber o que são e como usá-los, confira as informações aqui [Custom triggers](/tools-for-all-plugins-score/custom-triggers)

### WorldGuard

* Você pode usar flags do WorldGuard para ativar/desativar todos os ativadores do ei
```
/rg flag <region> ei-activators deny # disables ALL EI activators in the region
/rg flag <region> ei-activators allow # re-enables them (this is the default)
```

* A mensagem de erro pode ser configurada em /ExecutableItems/locale/locale_EN.yml, por exemplo
```yml
disableRegion: '&8[&4Executable&7Items&8] &cYou cant use &e%item%&c in this region!'
```
