---
description: >-
  Aprenda todos os comandos e permissões do plugin ExecutableItems: criar, dar,
  recarregar, editar e gerenciar itens personalizados no servidor.
source_hash: 30fd8157fcb56ff1
translated_at: '2026-11-13T18:13:34.968Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# ⌨️ Comandos e Permissões

Nesta página você vai conhecer os comandos e as permissões do plugin ExecutableItems.

Os recursos premium são identificados pela tag:  <CustomTag type="premium" />

## Permissões

**DICA para iniciantes:**

:::info
Para dar as permissões de todos os itens, recomendo que você baixe um plugin de permissões como o [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/). Depois de ter um plugin de permissões, basta dar a permissão **`ei.item.*`**; para o LuckPerms, o comando é **`/lp group default permission set ei.item.* true`**
:::

#### Permissão de item

* Info: permissão para um jogador usar um ExecutableItems.
  * Permissão para usar um ID específico de ExecutableItem: `ei.item.{id}`
  * Permissão para usar todos os ExecutableItems: `ei.item.*` 
  * Permissão negativa para proibir um ID específico de ExecutableItems: `-ei.item.{id}` <CustomTag type="premium" />
* Exemplo: `ei.item.test`

#### Permissão para ignorar o cooldown

* Info: permissão para um jogador não ter cooldown ao usar um ExecutableItems. 
  * Ao testar, você deve testar sem ser op/operador/admin.
  * Permissão para ignorar o cooldown de um ID específico de ExecutableItems: `ei.nocd.{id}`
  * Permissão para ignorar o cooldown de todos os ExecutableItems: `ei.nocd.*`
* Exemplo: `ei.nocd.test`

#### Todas as permissões

* Info: permissão que concede todas as permissões do ExecutableItems.
  * Cuidado! Esta concede literalmente todas as permissões, inclusive as de administrador.
  * Permissão: `ei.*`
* Se você quiser dar uma permissão específica, continue lendo abaixo: cada comando será detalhado com a sua respectiva permissão.

#### Permissões de todos os comandos

* Info: permissão que concede as permissões de todos os comandos do ExecutableItems.
  * Permissão: `ei.cmds`
* Se você quiser dar uma permissão específica, continue lendo abaixo: cada comando será detalhado com a sua respectiva permissão.

## Comandos

Aqui você vai conhecer os comandos do ExecutableItems. Algumas palavras se repetem ao longo da explicação, e são estas:

* SsomarPluginsItem: é o ID de um ExecutableItem que foi criado, por exemplo "Excalibur", "SuperPickaxe", "turtle", "12345"; nós definimos esse nome.
* SsomarPluginsPlayer: é o nome de um jogador, por exemplo "Vayk\_", "Ssomar", "Special70", "Tidal\_Flame"; também existe esse nome.

O formato dos comandos terá símbolos diferentes:

* \{\} : se um argumento estiver entre \{\}, ele é necessário para executar o comando.
* \[] : se um argumento estiver entre \[], ele é opcional para executar o comando.

Também haverá cores diferentes (mas a ideia é a mesma de \{\} e \[] ):

* Azul: obrigatório
* Laranja: opcional

### Comandos gerais

#### Criar um novo ExecutableItem

* Comando: **/ei create \{id\}**
  * `id`: ID do ExecutableItem.
  * Se você quiser **copiar o item de outro plugin** ou um item vanilla personalizado (Banner, Shield, ...), é simples! Pegue-o na mão principal e execute este comando create.
* Exemplo: `/ei create SsomarPluginsItem`
* Permissão: `ei.cmd.create`

#### Criar um novo ExecutableItem a partir de um bloco mirado

* Comando: /ei create-from\_block \{id\}
  * `id`: ID do ExecutableItem.
* Exemplo: `/ei create-from_block SsomarPluginsItem`
* Permissão: `ei.cmd.create-from-block`

#### Abrir o editor / menu

* Comando: **/ei editor** ou **/ei show**
* Permissão: `ei.cmd.editor` ou `ei.cmd.show`
* Na lista, o ícone de cada item mostra uma prévia do nome de exibição, da lore, dos encantamentos e dos atributos. Isso pode ser desativado com [editorIconPreview](/tools-for-all-plugins-score/score/general-config#editoriconpreview) na config do SCore.

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

#### Regenerar as configs dos itens padrão

* Comando: **/ei default\_items**
* Permissão: `ei.cmd.default_items`

#### Excluir um ExecutableItem

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
    * Você pode usar nomes de jogadores para escolher um jogador como alvo
    * Você pode usar UUID para escolher uma entidade como alvo.
  * `optional_target`
    * ALL: redefine os comandos atrasados, os cooldowns e as actionbars do jogador.
    * DELAYED\_COMMANDS: redefine todos os comandos atrasados causados por DELAY e DELAYTICK.
    * COOLDOWNS: redefine todos os cooldowns do jogador em todos os itens.
    * ACTIONBARS - redefine todas as actionbars do jogador criadas pelo comando personalizado ACTIONBAR.
* Exemplo: `/ei clear SsomarPluginsPlayer COOLDOWNS`
* Permissão: `ei.cmd.clear`

#### Ativar / desativar a actionbar dos ExecutableItems

* Comando: **/ei actionbar \{on or off\}**
* **Exemplo:** `/ei actionbar off`
* Permissão: `ei.cmd.actionbar`

#### Inspecionar o ExecutableItem que está na sua mão principal

* Comando: **/ei inspect**
  * Para usar este comando, o ExecutableItem deve ter o recurso de armazenar informações do item ativado. [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info)
  * Saída:
    * Usage
    * Owner UUID
    * Owner name
    * ExecutableItems ID
    * Variables 
* Permissão: `ei.cmd.inspect`

#### Remover o dono do EI que está na sua mão

* Comando: **/ei unowned**
  * Para remover o dono de um item, ele precisa ter tido um dono antes; para isso, o recurso [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info) deve estar ativado nesse ExecutableItem
  * Depois de executar este comando, o próximo jogador que interagir com este item será o novo dono. (Ele não pode ser operador/op/admin)
* Permissão: `ei.cmd.unowned`

#### Retirar um EI do inventário de um jogador

* Comando: **/ei take \{player\} \{id\} \{quantity\}**
  * `player`: nome do jogador de quem o item será retirado
  * `id`: ID do ExecutableItems
  * `quantity`: valor inteiro da quantidade a remover
* Exemplo: `/ei take SsomarPluginsPlayer SsomarPluginsItem 1`
* Permissão: `ei.cmd.take`

#### Atualizar o(s) ExecutableItem(s) do(s) seu(s) jogador(es) com a última versão da config

* Info: este comando atualiza o(s) ExecutableItemID(s) para a última versão da sua(s) config(s). Ou seja, se um jogador tem um ExecutableItem em uma versão antiga, por exemplo com o atributo GENERIC\_ARMOR em 10, e depois você muda o valor do atributo na config do ExecutableItem, a alteração não será atualizada para o jogador. Para permitir essa atualização, você pode usar este comando: ele é atualizado e o jogador passará a ter o novo valor em vez de 10.
  * Para que o processo de atualização funcione, o(s) ExecutableItem(s) selecionado(s) deve(m) estar no inventário do jogador; caso contrário, não serão atualizados
  * Como dica, outra forma de fazer essa atualização é usando [Auto update item](/executableitems/configurations/activator-configuration/activators-features#auto-update-item)
* Comando: **/ei refresh \{player\} \{ExecutableItemID\}** **\{resetUsage\} \{resetDurability\}**
  * `player`: nome de um jogador específico ou "all" para escolher todos os jogadores online como alvo.
  * `ExecutableItemID`: nome de um ExecutableItem específico ou "all" para escolher todos os ExecutableItems criados como alvo.
  * `option`: argumento de atualização
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
      * ALL_OPTIONS (executa todas as tarefas descritas acima)
* Permissão: `ei.cmd.refresh`

#### **Modificar o dono do ExecutableItem que está na sua mão**

* Comando: **/ei set\_owner** **\{player\}**
  * `player`: nome do jogador a definir como alvo deste comando
    * Funciona com jogadores offline.
* Permissão: `ei.cmd.set_owner`

#### Ativar o modo debug

* Info: modo em que cada ativador envia ao usuário mensagens diferentes para saber o estado do ativador e entender por que ele não está funcionando ou como está sendo ativado.
* Comando: **/ei debug**
* Permissão: `ei.cmd.debug`

#### Listar os sets e o que um jogador está vestindo <CustomTag type="premium" />

* Info: lista os [sets](/executableitems/configurations/sets-configuration) carregados (`plugins/ExecutableItems/sets`). Com um jogador: as peças vestidas e o tier ativo de cada set.
* Comando: **/ei sets** **[player]**
* Permissão: `ei.cmd.sets`

#### Acionar um ativador (para testar um item)

* Info: executa um ativador de um ExecutableItem que o jogador carrega, sem fazer o gesto (clique, golpe, pulo...). Útil para testar uma config. Todo o resto funciona como de costume: slots detalhados, condições, cooldowns, usage e comandos. O item é procurado no slot indicado; se não estiver lá, na mão principal, na mão secundária, na armadura e, por fim, em todo o inventário.
* Comando: **/ei trigger \{player\} \{item id\} \{activator id\}** **[slot:N] [target:nearest|\{player\}|\{uuid\}] [block:x,y,z] [click:left|right] [input:JUMP_PRESS...]**
  * `target`: a entidade ou o jogador dos ativadores que têm um alvo (golpe, clique em entidade...). Por padrão, aquele para quem o jogador está olhando.
  * `block`: o bloco dos ativadores que têm um bloco alvo. Por padrão, o bloco para o qual o jogador está olhando.
  * `click`: para os ativadores com clique detalhado. Por padrão, `right` (`left` para `PLAYER_LEFT_CLICK`).
  * `input`: obrigatório para `PLAYER_INPUT`.
* Dica: se nada acontecer, execute **/ei debug** para ver qual verificação bloqueia o ativador.
* Permissão: `ei.cmd.trigger`

#### Fazer todos os ExecutableItems manterem os atributos padrão do seu material

* Info: define [Keep default attributes](/executableitems/configurations/item-configuration/item-features#keep-default-attributes) em **todos** os ExecutableItem carregados (`keepDefaultAttributes: true`, `ignoreKeepDefaultAttributesFeature: false`) e salva os arquivos deles. No 1.21+, o ExecutableItems lista no console, após cada carregamento, os itens que perdem o dano / a armadura do seu material sem essa opção. Com `false`, todos os itens recebem `keepDefaultAttributes: false`.
* Comando: **/ei util-set-keepdefaultattributes-all-ei \{true or false\}**
* Exemplo: `/ei util-set-keepdefaultattributes-all-ei true`
* Permissão: `ei.cmd.util-set-keepdefaultattributes-all-ei`

### Comandos de give

#### Comando give

* Info: comando para dar um ExecutableItem a um jogador no primeiro slot disponível.
* Comando: **/ei give \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \[giveOfflinePlayer]**
  * `player`: nome do jogador que será o alvo deste comando
  * `id`: ID do ExecutableItem a dar.
    * Valores opcionais: para adicionar essa configuração personalizada, não pode haver espaço(s)/espaço(s) em branco no formato. 
      * `Variables`: você pode escolher uma configuração de variáveis ao dar o item.
        * ✅`{Variables:{a:"1",b:"2",c:"3"}}` # Sem uso de espaços em branco
        * ❌`{Variables:{a : "1",b: "2",c :"3"}}` # Com uso de espaços em branco
      * `Usage:` você pode escolher um valor para o usage ao dar o item
        * ✅`{Usage:5}` # Sem uso de espaço(s) em branco
        * ❌`{Usage : 5}` # Com uso de espaço(s) em branco
      * `Durability`: você pode decidir quanta durabilidade o item perde ao ser dado ao usuário
        * ✅`{Durability:5}` # Sem uso de espaço(s) em branco
        * ❌`{Durability : 5}` # Com uso de espaço(s) em branco
  * `quantity`: quantidade de itens a dar
  * `giveOfflinePlayer`: valor booleano que define se o item será dado a um jogador offline ou não. Por padrão, este valor é true.
* Exemplos: (em todos estes exemplos, o comando está sendo executado dentro de um ExecutableItems para interpretar placeholders como %player%, %var\_name% e %usage%)
  * `/ei give %player% Genesis_Crystal{Variables:{vibraniun:10,proton:30},Usage:10} 3` 
  * `/ei give %player% SurgeBlade{Variables:{charge:%var_charge%+1},Usage:%usage%-1} 1`
  * `/ei give SsomarPluginsPlayer BoneBlade 1`
  * `/ei give edp445 cupcake{Durability:12} 1`
* Permissão: `ei.cmd.give`

#### Comando give all

* Comando: **/ei giveall \{id\} \{quantity\} \[world] \[giveOfflinePlayer]**
  * `id`: ID do ExecutableItem a dar.
  * `quantity`: quantidade de itens a dar
  * `world`: argumento opcional de mundo em que o comando será executado. Com ele, as pessoas que não estiverem nesse mundo não receberão o ExecutableItem.
  * `giveOfflinePlayer`: valor booleano que define se o item será dado a um jogador offline ou não. Por padrão, este valor é true.
* Permissão: `ei.cmd.giveall`

#### Dar um EI em um slot específico de um jogador <CustomTag type="premium" />

* Comando: **/ei giveslot \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \{slot\} \[override true or false]**
  * `player`: nome do jogador que será o alvo deste comando
  * `id`: ID do ExecutableItem a dar.
    * Valores opcionais: para adicionar essa configuração personalizada, não pode haver espaço(s)/espaço(s) em branco no formato. 
      * `Variables`: você pode escolher uma configuração de variáveis ao dar o item.
        * ✅\{Variables:\{a:"1",b:"2",c:"3"\\}\} # Sem uso de espaços em branco
        * ❌\{Variables:\{a : "1",b: "2",c :"3"\\}\} # Com uso de espaços em branco
      * `Usage`: você pode escolher um valor para o usage ao dar o item
        * ✅\{Usage:5\} # Sem uso de espaço(s) em branco
        * ❌\{Usage : 5\} # Com uso de espaço(s) em branco
  * `quantity`: quantidade de itens a dar
  * `slot`: slot do jogador em que este item será dado.
  * `override`: valor booleano para sobrescrever o slot caso já exista um item nele. Nesse caso, o item será movido e, se o inventário do jogador estiver cheio, será jogado no chão.
* Exemplos: 
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`test{Variables:{x:"Hey",world:"Island"},Usage:50} 1 0`**  
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`rum{Usage:69420,Variables:{tell_me:"why",aint_nothing:"BUT A HEARTBREAK"}} 1 %slot%`**
* Permissão: `ei.cmd.giveslot`

**Dar a um jogador todos os EI de uma pasta específica**

* Info: comando para dar a um jogador uma pasta do plugin.
* Comando: **/ei givefolder \{player\} \{folder\} \{quantity\}**
  * `player`: nome do jogador que será o alvo deste comando
* Permissão: `ei.cmd.givefolder`

### Comandos de drop

#### Dropar um EI em uma localização / posição específica 

* Comando: **/ei drop \{id\} \{quantity\} \{\[world] \[x] \[y] \[z]\}**
  * `id`: ID do ExecutableItem a dar.
  * `quantity`: quantidade de itens a dropar. Por padrão, é 1.
  * location: a localização inteira é opcional; caso queira adicioná-la, você precisará preencher os próximos argumentos:
    * `world`: mundo em que o item será dropado.
    * `x`: coordenada X em que o item será dropado.
    * `y`: coordenada Y em que o item será dropado.
    * `z`: coordenada Z em que o item será dropado.
* Exemplos:  (em todos estes exemplos, os comandos estão sendo executados dentro de um ExecutableItems para interpretar placeholders como %player%, %var\_name% e %usage%)
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
      * set: define o novo \{value\} e substitui o antigo
      * modification: útil para adicionar modificações; aumenta ou diminui o valor original em \{value\}
    * `player`: nome do jogador que será o alvo deste comando
    * `slot`: slot do jogador em que este item será dado.
      * Mais informações sobre slots aqui: [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `value`: valor usado para a modificação.
* Permissão: `ei.cmd.modification`

#### Modificar o valor de uma variável de um ExecutableItem

* Comando: 
  * No jogo: **/ei modification \{set or modification\} variable \{slot\} \{variableName\} \{value\}**
  * No console: **/ei console-modification \{set or modification\} variable \{player\} \{slot\} \{variableName\} \{value\}**
  * Parâmetros:
    * `set or modification`
      * set: define o novo \{value\} e substitui o antigo
      * modification: útil para adicionar modificações; aumenta ou diminui o valor original em \{value\}
    * `player`: nome do jogador que será o alvo deste comando
    * `slot`: slot do jogador em que este item será dado.
      * Mais informações sobre slots aqui: [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `variableName`: o nome da variável à qual você quer aplicar o typeOfModication com o valor selecionado.
    * `value`: valor usado para a modificação.
* Permissão: `ei.cmd.modification`

#### Procurar um ExecutableItem no servidor

* Info: informa onde estão os ExecutableItems com o id \{id\} no seu servidor.
* Comando: **/ei search \{id\} \{searchMode\}**
  * `id`: ID do ExecutableItem que você está procurando
  * `searchMode`: tipo de busca
    * players: procura o ExecutableItem em todos os inventários de jogadores **online**.
    * containers: procura o ExecutableItem em todos os containers **carregados**.
    * all: busca usando os dois métodos.
* Exemplo:
  * `/ei search EternalSword all`
* Permissão: `ei.cmd.search`

#### Obter o caminho do arquivo de um ExecutableItem

* Info: este comando exibe o caminho absoluto no sistema de arquivos do arquivo de configuração de um ExecutableItem específico. Útil para desenvolvedores ou administradores de servidor que precisam localizar e editar os arquivos dos itens diretamente.
* Comando: **/ei path \{id\}**
  * `id`: ID do ExecutableItem cujo caminho você quer obter
* Exemplo:
  * `/ei path ExcaliburSword`
  * Saída: `[ExecutableItems] The path of ExcaliburSword is /path/to/plugins/ExecutableItems/Items/ExcaliburSword.yml.`
* Permissão: `ei.cmd.path`

#### Verificar as informações de otimização de eventos

* Info: este comando exibe informações detalhadas sobre a otimização dos event handlers do ExecutableItems e estatísticas de desempenho. Ele mostra quais eventos estão sendo escutados e fornece informações sobre os itens que usam reconhecimento personalizado (o que pode impactar o desempenho). A saída é enviada para o console do servidor.
* Comando: **/ei checkevents**
* A saída inclui:
  * Lista de eventos otimizados e o status de seus listeners
  * Quantidade de ExecutableItems que usam reconhecimento personalizado
  * Avisos de impacto no desempenho
  * Recomendações para melhorar o desempenho
* Permissão: `ei.cmd.checkevents`

:::info
A saída deste comando é enviada para o **console**, não para o jogador no jogo. Verifique o console do seu servidor para ver as informações detalhadas.
:::

:::tip
Itens com reconhecimento personalizado podem impactar o desempenho. O comando mostrará quantos itens estão usando esse recurso. Se você tiver problemas de desempenho, considere reduzir o número de itens com reconhecimento personalizado ativado.
:::

### Comandos do pacote de texturas

#### Atualizar o pacote de texturas do ExecutableItems

* Comando: **/ei refresh-pack**
* Info: atualiza e recarrega o pacote de texturas do ExecutableItems para todos os jogadores online. Útil depois de fazer alterações em texturas personalizadas.
* Permissão: `ei.cmd.refresh-pack`

#### Baixar o pacote de texturas padrão do ExecutableItems

* Comando: **/ei download-default-pack**
* Info: baixa o pacote de texturas padrão do ExecutableItems do repositório oficial e o descompacta automaticamente. Se `selfHostPack` estiver ativado no config.yml, o pacote será registrado e hospedado automaticamente no seu servidor. Isso é útil para:
  * Configurar o pacote de texturas pela primeira vez
  * Restaurar o pacote padrão depois de modificações
  * Atualizar para a última versão do pacote padrão
* Requisitos:
  * `selfHostPack: true` deve estar definido no config.yml para a hospedagem automática
  * O servidor deve ter conexão com a internet para baixar o pacote
* Permissão: `ei.cmd.download-default-pack`

:::info
**Opções de hospedagem:**
- **Auto-hospedagem no seu servidor**: defina `selfHostPack: true` no config.yml; o pacote será hospedado diretamente pelo plugin
- **Hospedagem externa**: se você quiser hospedar o pacote por conta própria (em um site, CDN, etc.), defina a URL de download em `texturesPackUrl` no config.yml
- **Sem hospedagem**: se nenhuma das opções estiver ativada, o pacote será baixado e descompactado localmente, mas não será distribuído aos jogadores
:::

### Custom triggers

* Info: o ExecutableItems tem comandos para executar Custom triggers; se quiser saber o que são e como usá-los, veja as informações aqui: [Custom triggers](/tools-for-all-plugins-score/custom-triggers) 

### WorldGuard

* Você pode usar flags do WorldGuard para ativar/desativar todos os ativadores dos EI
```
/rg flag <region> ei-activators deny # disables ALL EI activators in the region
/rg flag <region> ei-activators allow # re-enables them (this is the default)
```

* A mensagem de erro pode ser configurada em /ExecutableItems/locale/locale_EN.yml, por exemplo
```yml
disableRegion: '&8[&4Executable&7Items&8] &cYou cant use &e%item%&c in this region!'
```
