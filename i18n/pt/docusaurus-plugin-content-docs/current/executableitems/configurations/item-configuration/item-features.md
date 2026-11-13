---
description: >-
  Veja as funcionalidades de itens do ExecutableItems: ativadores, material,
  nome, lore, durabilidade, atributos, NBT, variáveis, Hiders e muito mais.
source_hash: a5cf341732f09f83
translated_at: '2026-11-13T18:15:06.947Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Funcionalidades dos itens

Lista de funcionalidades dos itens, as primeiras coisas que você deve configurar no seu item.

As funcionalidades premium são marcadas com a tag:  <CustomTag type="premium" />

### Ativadores

* Funcionalidades muito importantes que permitem adicionar habilidades ao seu item
* Wiki dedicada a esta funcionalidade: [Lista de ativadores do EI](../activator-configuration/list-of-the-activators.md) e [Funcionalidades dos ativadores do EI](/executableitems/configurations/activator-configuration/activators-features.md)


### Material do item

* Info: O material do item do Minecraft do Executable Item
* Exemplo: Se eu quiser que o ExecutableItem tenha como item base DIAMOND, ficaria assim

```yaml
material: DIAMOND
```

* Você pode consultar a lista de materiais neste link: [Lista de materiais](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
* Se você quiser configurar uma cabeça personalizada como material do item, confira este link: [Configurações de cabeça](/executableitems/configurations/item-configuration/item-features#head-settings).

### Nome ou DisplayName do item

* Info: O nome de exibição do item. É o nome visível.
* Exemplo: Se eu quiser que meu item tenha como nome de exibição o título "Epic Sword" em vermelho, ficaria assim

```yaml
name: '&cEpic Sword'
```

* Se você quiser usar cores HEX no seu nome de exibição, pode fazer assim:
  * Acesse um site que ajude você a escolher uma cor e obter o código hexadecimal dela. Recomendamos [https://htmlcolorcodes.com/](https://htmlcolorcodes.com/)
  * Depois escolha a cor desejada e anote / copie o código hexadecimal. [Referência](https://imgur.com/a/tNWtA0a)
  * Com esse código hexadecimal, você precisa adicionar "#" no início, e isso virá antes do que você quer colorir. #\<HEX\_COLOR\_CODE>\<What you want to color>
  * Por fim, você terá algo como **`#DB6725&lPractice`** e o texto aparecerá com a cor que você selecionou [no jogo](https://imgur.com/a/7umxduF).

### Lore ou descrição do item

* Info: A lore ou descrição do item
* Exemplo:

```yaml
lore:
- '&7Insta-Boom Bomb'
- ''
- '&f&lABILITIES:'
- '&f&l - &a&lInsta-Boom &f&l(&3&lRIGHT-CLICK&f&l)'
- '&fRight-Click on a block to use. Can only'
- '&fharvest blocks mined using your bare hands.'
- '&fBlows up a 5x5x5 area from where you used'
- '&fthe bomb. Will mostly blow up the type of block'
- '&fthat you clicked and sometimes the blocks around it.'
```

* Você pode usar placeholders na lore. Só tenha em mente que, se você usar placeholders fora do plugin e depois adicionar novos conteúdos à lore, como encantamentos personalizados ou texto personalizado, e um dos placeholders for atualizado, tudo o que foi adicionado fora dos plugins da Ssomar será apagado. Para evitar isso, você precisa não atualizar a lore, mas isso significa que os placeholders não serão atualizados. Você deve escolher o que preferir. Para concluir: COISAS EXTRAS NA LORE significa SEM REFRESH significa SEM placeholders personalizados do EI na lore, por favor.

:::info
Para deixar um espaço vazio entre as linhas da lore, você pode adicionar '' no arquivo de config. Se você estiver editando a lore dentro do Minecraft usando a GUI personalizada, precisará usar '\&f'.
:::

:::info
Na versão gratuita do ExecutableItems há uma linha com "Made with ExecutableItems": ela não pode ser removida, é a contrapartida da atualização que aumentou a quantidade de itens de 25 para 500.
:::

### Efeito de brilho (brilho de encantamento)

* Info: Valor booleano que define se o executable item recebe um visual de brilho/encantado.
* Exemplo: 

```yaml
glow: true
```

### Desativar o brilho de encantamento <CustomTag type="version" version="1.20.5" />

* Info: Valor booleano que força o item a não ter o efeito de brilho, mesmo que esteja encantado. 
* Exemplo: 

```yaml
disableEnchantGlow : true
```

:::info
DICA: Você também pode remover o efeito de brilho de alguns itens vanilla, como a estrela do Nether, por exemplo.
:::

### Exibir condições na lore do item

* Info: Permite exibir condições na lore do item.
* Exemplo: 

```yaml
displayConditions:
  playerConditions:
    ifSneaking: true
  worldConditions: {}
  itemConditions: {}
  placeholdersConditions: {}
  enableFeature: true
```

### Durabilidade do item

* Info: Define o valor de durabilidade do item.
  * Para versões 1.20.5-: O valor de durabilidade deve ser igual ou menor que a durabilidade máxima vanilla do item selecionado.
  * Exemplo: 
```yaml
durability: 150
```
  * Para versões 1.20.5++: A opção de durabilidade pode ser personalizada, habilitando novas funcionalidades, como a sincronização do uso do ExecutableItem com o valor de durabilidade. Também permite definir uma durabilidade máxima personalizada.
  * Exemplo:
```yaml
isDurabilityBasedOnUsage: true
maxDurability: 20 
durability: 19
```

### Encantamentos do item

* Info: Define os encantamentos iniciais que o executable item terá quando for entregue.
* Exemplo:

```yaml
enchantments:
  enchantment1: #ID Of this enchantment, you can add as many as you want
    enchantment: sharpness
    level: 1
```

### Unbreakable

* Info: Valor booleano que define se o executable item será inquebrável ou não
* Exemplo: 

```yaml
unbreakable: true
```

### Atributos <CustomTag type="version" version="1.12" />

* Info: Você pode definir os atributos do ExecutableItem.
  * `attribute`: O tipo de atributo. Veja a lista aqui: [Lista de atributos](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/attribute/Attribute.html)
  * `uuid`: É um código de que o Minecraft precisa para atribuir os modificadores de atributo. Você pode ignorá-lo.
  * `name`: É o nome de exibição do Attribute Modifier. É útil para você escrever o que ele faz. Não afeta nada além da visualização na GUI.
  * `operation`: Tipo de operação que o AttributeModifier fará. Veja a lista aqui: [Operações](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html)
  * `amount`: O valor do AttributeModifier, que será aplicado ao atributo usando a operação selecionada.
  * `slot`: O slot em que o AttributeModifier funcionará.
  * Exemplo:

```yaml
attributes:
  attribute1: #Id of this attribute, you can add as many as you want
    attribute: GENERIC_ARMOR
    name: '&#x26;eDefault name'
    uuid: 8d6b9b6a-c84d-4c76-9b4d-81a1f44a04a0
    amount: 1.0
    operation: ADD_NUMBER
    slot: HAND
```

:::info
**Se você estiver usando a versão 1.12, precisará seguir estes passos:**

* Este processo requer a versão premium do EI <CustomTag type="premium" />
* Gere seu item com atributos em um site. Sugerimos [https://mapmaking.fr/give1.12/](https://mapmaking.fr/give1.12/)
* Depois entregue o item a você mesmo dentro do Minecraft
* Segurando-o na mão, execute o comando /ei create \<id>
* E pronto! Agora seu EI tem os atributos importados automaticamente.
:::

#### **Manter atributos padrão**

* Info: Valor booleano para manter ou não o atributo padrão do item.
* Exemplo:

```yaml
keepDefaultAttributes: true
ignoreKeepDefaultAttributesFeature: false
```

:::warning
Na 1.21+, um item sem atributos próprios que não tenha estas duas linhas **perde os atributos padrão do seu material**: uma espada bate como um punho, uma peça de armadura não dá proteção. O ExecutableItems lista esses itens no console após cada carregamento. Para corrigir todos os seus itens de uma vez: `/ei util-set-keepdefaultattributes-all-ei true`.
:::

:::info Mesa de ferraria
Com `keepDefaultAttributes: true`, um item melhorado na mesa de ferraria (de diamante para netherite) recebe os atributos padrão do seu novo material (armadura de netherite, resistência e resistência a repulsão). Os atributos do próprio item são mantidos.
:::

* Neste link há um tutorial sobre atributos e suas funcionalidades.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HqyF0QBYIY4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


#### **ignoreKeepDefaultAttributesFeature:** 

* Info: Ignora a configuração de manter atributos padrão. É útil para o terceiro caso da explicação desta tabela:
* Exemplo:

```yaml
ignoreKeepDefaultAttributesFeature: true
```

### Custom model data <CustomTag type="version" version="1.14" />

* Info: 
  * Para versões do Minecraft anteriores à 1.21.4: Inteiro para definir o valor da funcionalidade customModelData do item. Útil para criar texturas diferentes para um item.
  * A partir da versão 1.21.4 do Minecraft, agora você pode adicionar texto e booleano.
* Exemplo: 

```yaml
# For the Minecraft version before 1.21.4
customModelData: 2232

# Since the 1.21.4
# Use ; to separate your data
customModelData: 1.0;true;hello;5.0;false;true;my text 2

# A vanilla item like this : /give @p brick[custom_model_data={floats:[1.0],flags:[true],strings:["hello"]}] 1
# Will look like this in EI : 
customModelData: 1.0;true;hello
```

* Tutorial: [https:/.ssomar.com/executableitems/questions-or-guides/premium-custom-textures](https:/.ssomar.com/executableitems/questions-or-guides/premium-custom-textures)

### Funcionalidades de Item Rarity <CustomTag type="version" version="1.20.5" />

* Info: Rarity é uma estatística vanilla aplicada a itens e blocos para indicar seu valor e a facilidade de obtê-los. Não tem nenhum efeito na jogabilidade. Existem quatro níveis de raridade: Common, Uncommon, Rare e Epic.
  * `enableRarity`: Booleano que representa se a funcionalidade está habilitada ou não
  * `rarity`: Tipo de raridade
* Exemplo:

```yaml
itemRarity:
  enableRarity: false
  rarity: COMMON
```

### Funcionalidades de Equippable <CustomTag type="version" version="1.21.2" />

* Info: Esta seção configura o comportamento de um item equipável. Quando habilitado, o item pode ser equipado em um slot designado, opcionalmente disparando um efeito sonoro. Você também pode especificar um modelo personalizado para o item equipado, definir se ele sofre dano quando o usuário é ferido e configurar flags para permitir ou restringir a troca e o descarte. Além disso, você pode restringir quais entidades podem equipar o item.
  * `enable`: Defina como true para habilitar o equipamento deste item
  * `slot`: O slot de equipamento (por exemplo, CHEST, HEAD, LEGS, FEET) onde o item é equipado
  * `enableSound`: Booleano para tocar um som quando o item é equipado
  * `sound`: Efeito sonoro a tocar quando equipado
  * `equipModel`: (Opcional) modelo personalizado para o item equipado (por exemplo, "mynamespace:mymodel")
  * `cameraOverlay`: (Opcional) overlay de câmera personalizado quando o item é equipado
  * `damageableOnHurt`: Booleano que define se o item perde durabilidade quando o usuário é ferido
  * `dispensable`: Booleano que define se o item pode ser descartado (removido/dropado)
  * `swappable`: Booleano que define se o item pode ser equipado com um clique direito (ele é trocado com o item usado naquele slot)
  * `allowedEntities`: Lista de entidades autorizadas a equipar este item
* Exemplo:

```yaml
equippableFeatures:
    enable: false
    slot: CHEST
    enableSound: false
    sound: ITEM_ARMOR_EQUIP_DIAMOND

    equipModel: "" # Example: "mynamespace:mymodel"
    cameraOverlay: "" # Example: "mynamespace:mymodel"

    damageableOnHurt: false
    dispensable: true
    swappable: true

    allowedEntities:
     - PLAYER
```

### Funcionalidades de Repairable <CustomTag type="version" version="1.21.2" />

* Info: Funcionalidades relacionadas a quando o ExecutableItem é reparado.
  * `enable`: Valor booleano que define se a funcionalidade está habilitada ou não
  * `repairCost`: Valor inteiro que representa o custo de repará-lo na bigorna
* Exemplo:

```yaml
repairableFeatures:
    enable: false
    repairCost: 2 
```

### Glider <CustomTag type="version" version="1.21.2" />

* Info: Funcionalidade que permite planar com o item, como você faria normalmente com o item vanilla "elytra".
* Exemplo:

```yaml
glider: false
```

### itemModel <CustomTag type="version" version="1.21.2" />

* Info: Caminho de um modelo de item personalizado no pacote de texturas, no formato \<mynamespace\:model\_id>, que apontará para dentro de assets/\<mynamespace>/models/item/\<model\_id>.
* Exemplo:

```yaml
itemModel: "" # "mynamespace:mymodel"
```

### tooltipModel <CustomTag type="premium" /> <CustomTag type="version" version="1.21.2" />

* Info: Caminho de um modelo de tooltip personalizado no pacote de texturas, no formato \<mynamespace\:model\_id>, que apontará para dentro de /assets/\<mynamespace>/textures/gui/sprites/tooltip/\<id>\_frame
* Exemplo:

```yaml
tootipModel: "" # "mynamespace:mymodel"
```

### Funcionalidades relacionadas ao item dropado

Aqui você aprenderá sobre funcionalidades que só são visíveis quando o item está dropado no chão.

#### Glowing on drop

* Info: Quando o item é dropado, ele tem um efeito de brilho
* Exemplo: 

```yaml
dropFeatures:
  glowDrop: false
```

#### Cor do brilho quando dropado

* Info: Se o item tem glowEffect habilitado, é possível selecionar a cor do efeito de brilho quando dropado.
* Cores possíveis: [Referência de cores](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)
* Exemplo:

```yaml
dropFeatures:
  glowDrop: false
  glowDropColor: WHITE
```

#### Nome de exibição quando o item é dropado

* Info: Define se o item mostrará o nome de exibição como um texto flutuante quando for dropado.
* Exemplo: 

```yaml
dropFeatures:
  displayNameDrop: true
```

###  Tags NBT

* Info: Requer o plugin [**NBTAPI**](https://www.spigotmc.org/resources/nbt-api.7939/), disponível no Spigot.
Esta funcionalidade permite adicionar suas tags nbt personalizadas dentro do seu ExecutableItem.
  * `type`: O tipo de valor que você está armazenando, por exemplo:
    * BOOLEAN: true | false
    * STRING: car
    * INTEGER: 6
    * DOUBLE: 17.6
    * COMPOUND: Exemplo abaixo, dependerá das suas necessidades e do que você quer adicionar.
  * `key`: A chave string que representa esse armazenamento nbt
  * `value`: Valor da NBT Tag que você está adicionando
* Exemplo:

```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: 3
 '2': #Id of this nbt, you can add as many as you want
    type: STRING
    key: 'MyOtherKey'
    value: 'myValue'
 '3': #Id of this nbt, you can add as many as you want
    type: BOOLEAN
    key: 'KeyKeyKeykey'
    value: true
 '4': #Id of this nbt, you can add as many as you want
    type: DOUBLE
    key: 'KeyKeyKeykeykeykey'
    value: 0.5
 '5': #Id of this nbt, you can add as many as you want
    type: BYTE
    key: 'IsCustom'
    value: 1
 '6': #Id of this nbt, you can add as many as you want
    key: ExtraAttributes
    type: COMPOUND
    value:
      nbt:
        '0':
          key: id
          type: STRING
          value: TRIAL_OF_THE_SUN_GOD
 '7': #Id of this nbt, you can add as many as you want
    key: CanDestroy
    type: STRING_LIST
    value:
    - minecraft:stone
 '8':
    key: PublicBukkitValues
    type: COMPOUND
    value:
      nbt:
        '0':
          key: auraskills:item_modifiers
          type: COMPOUND_LIST
          value:
            '0':
              key: comp0
              nbt:
                '0':
                  type: COMPOUND
                  value:
                    nbt:
                      '0':
                        key: auraskills:stat
                        type: STRING
                        value: auraskills/wisdom
                      '1':
                        key: auraskills:value
                        type: DOUBLE
                        value: '%rand:1|10000%'
                      '2':
                        key: auraskills:operation
                        type: STRING
                        value: add
```

### Tags do Bukkit

* Info: Você pode adicionar valores de tags do Bukkit ao seu ExecutableItem.
* Exemplo:

```yaml
tags:
 - mytag:blabla1
 - myothertag:blabla2
```

No jogo, isso será representado em PublicBukkitValues, assim

```yaml
"executableitems:mytag":"blabla1"
"executableitems:myothertag":"blabla2"
```

Você também pode escrever placeholders %rand% no campo de valor dos NBTs. Funciona apenas para os tipos de dados STRING, INTEGER e DOUBLE
```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: '%rand:-100|100%'
```
Também funciona no editor dentro do jogo
```
INTEGER::foo::%rand:1|2%
```  
  
Você também pode salvar nbts no PDC (Persistent Data Container), se quiser.
* Exemplo no jogo: `integer::take::0::true`
* Config do item:
```yml
nbt:
  '0':
    key: take
    saveInPDC: true
    type: INT
    value: 0
```

### Funcionalidades de Hiders

* Info: Configurações relacionadas a ocultar funcionalidades que normalmente são mostradas no seu ExecutableItem. Todas as funcionalidades continuarão funcionando, mesmo que estejam ocultas.
  * `hideEnchantments`: Valor booleano que representa se os encantamentos do ExecutableItem serão exibidos na lore ou não.
  * `hideUnbreakable`: Valor booleano que representa se a descrição de inquebrável será exibida na lore ou não.
  * `hideAttributes`: Valor booleano que representa se os atributos do ExecutableItem serão exibidos na lore ou não.
  * `hidePotionEffects`: Valor booleano que representa se os efeitos de poção do ExecutableItem serão exibidos na lore ou não. Nas versões 1.20.5 ou superiores, use hideAdditionalTooltip.
  *   hideAdditionalTooltip (Disponível apenas na 1.20.5++) 

      Configuração para mostrar/ocultar efeitos de poção, informações de livros e fogos de artifício, tooltips de mapas, padrões de estandartes e encantamentos de livros encantados. Substitui o antigo hidePotionEffects
  * `hideUsage`: Valor booleano que representa se a funcionalidade personalizada Usage do plugin ExecutableItem, do próprio item, será exibida na lore ou não.
    * Você pode exibir o usage manualmente usando o placeholder %usage%, adicionando-o ao editar sua lore.
  * `hideDye`: Valor booleano que representa se a cor de tintura (#\<color>) do ExecutableItem será exibida na lore ou não.
  * `hideArmorTrim`: Valor booleano que representa se o armor trim do ExecutableItem será exibido na lore ou não.
  * `hidePlacedOn`: Valor booleano que representa se a NBT Tag "Can be placed on: \[...]" do ExecutableItem será exibida na lore ou não.
  * `hideDestroys`: Valor booleano que representa se a NBT Tag "Can destroy: \[...]" do ExecutableItem será exibida na lore ou não.
  * `hideToolTip`: Valor booleano que representa se o tooltip está oculto ou não. (Disponível apenas na 1.20.5++)
* Exemplo:

```yaml
hiders:
  hideEnchantments: false
  hideUnbreakable: false
  hideAttributes: false
  hidePotionEffects: false
  hideAdditionalTooltip: false
  hideUsage: false
  hideDye: false
  hideArmorTrim: false
  hidePlacedOn: false
  hideDestroys: false
  hideToolTip: false
```

### Funcionalidades de Usage

Esta seção explicará o que é usage e suas funcionalidades.

#### Usage

* Info: Usage é um valor inteiro armazenado dentro do seu ExecutableItem. Ele pode ser modificado por meio de usageModification dentro de um ativador ou por comandos. Mas não é apenas um valor armazenado: ele foi criado para representar o "sistema de durabilidade personalizado" do seu ExecutableItem, ou seja, se de alguma forma o usage chegar a 0, seu item é deletado.
* Exemplo: 
  * Um usage de 1 não significa que o item tem uma de durabilidade, como explicamos antes, é um sistema de durabilidade personalizado. Ele durará enquanto o usage não chegar a 0. Por exemplo, se você adicionar ao seu item um ativador que tenha a funcionalidade usageModification com o valor "-1", assim que o ativador for disparado uma vez, seu item desaparece.
  * Seguindo a mesma ideia, se temos usage 1 e não temos ativadores que alterem o usage do item, nosso item durará infinitamente, até que, novamente, de alguma forma, um comando ou um novo ativador adicionado ao item modifique o usage para um valor igual ou menor que 0, e então o item será deletado.
    * ```yaml
      usage: 1
      ```
  * O usage, como dissemos, não deve ser visto apenas como um sistema de durabilidade, porque ele também pode aumentar! Por exemplo, se tivermos um ativador que, em vez de ter um valor negativo em usageModification, tem um valor positivo, nosso usage aumentará quando o ativador for disparado ^^
  * Agora, se você não quer que seu item aumente nem diminua, basicamente não use esse armazenamento de valor personalizado. Você pode definir o usage como -1.
    * ```yaml
      usage: -1
      ```

#### Usage limit <CustomTag type="premium" />

* Info: Valor inteiro que limita a quantidade máxima que o usage pode alcançar. (O valor não pode ser 0)
* Exemplo: 

```yaml
usageLimit: 600 #Usage will not be able to go up more than this value, -1 to don't take it into account
```

#### Usos por dia

* Info: Valor inteiro que limita quantas vezes você pode usar o item por dia na vida real
* Exemplo: 

```yaml
usePerDay: 200 # -1 to ignore it
```

### Funcionalidades de Food <CustomTag type="version" version="1.20.5" />

* Info: Esta funcionalidade permite personalizar as configurações de comida relacionadas ao seu ExecutableItem
  * `nutrition`: Valor inteiro que representa a quantidade de "meia-comida" que o item vai preencher no jogador quando for comido
    * Para entender melhor, o jogador tem no máximo 20 de nutrição, e isso é mostrado no jogo como 10 ícones de fome, cada um podendo ser dividido em 2.
  * `saturation`: Valor inteiro que representa a saturação que o jogador receberá quando o item for comido.
  * `isMeat`: Valor booleano que fará o item ser considerado comida. Isso será aplicado à força, ou seja, se você definir este valor como true, qualquer item, até os que não podem ser comidos, será considerado comida e, portanto, consumível.
  * `canAlwaysEat`: Valor booleano que representa se o item pode ser comido sempre, mesmo quando a barra de comida do jogador está cheia.
*  Exemplo:

```yaml
foodFeatures:
  nutrition: 1
  saturation: 1
  isMeat: false
  canAlwaysEat: true
```

### Funcionalidades de Consumable <CustomTag type="version" version="1.21.4" />

* Info: Funcionalidades relacionadas a consumíveis, permitem personalizar as opções de consumível, e são mais próximas da funcionalidade de food.
  * `enable`: Booleano que representa a habilitação ou desabilitação das funcionalidades de consumable
  * `animation`: ANIMATION\_TYPE que será reproduzido ao comer/consumir o ExecutableItem
  * `sound`: SOUND que será tocado enquanto o item está sendo comido/consumido
  * `hasConsumeParticles`: Valor booleano que representa se o item soltará partículas ao ser comido
  * `consumeSeconds`: Quantidade de segundos que o item leva para ser comido/consumido.
* Exemplo:

```yaml
consumableFeatures:
  enable: true
  animation: SPYGLASS
  sound: ITEM.ARMOR.EQUIP_DIAMOND
  hasConsumeParticles: false
  consumeSeconds: 3
```

### Configurações de poção

Aqui você pode personalizar as funcionalidades de poção do seu ExecutableItem se o material do item for uma poção.

#### Cor da poção

* Info: Inteiro de MapInfo Color que representa uma cor. Use uma página como [https://www.tydac.ch/color/](https://www.tydac.ch/color/) para obter o valor de MapInfo de uma cor.
* Exemplo:

```yaml
potionFeatures:
  potionColor: 10265481
```

#### Tipo de poção

* Info: Potion Type que você quer que o item de poção seja. É apenas uma funcionalidade visual, não afeta o comportamento real da poção. A lista está disponível aqui: [Tipos de poção](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionType.html)
* Exemplo:

```yaml
potionFeatures:
  potionType: WIND_CHARGED
```

#### Efeitos de poção

* Info: Aqui você pode criar os efeitos de poção que sua opção terá
  * `potionEffectType`: PotionEffectType selecionado, a lista está disponível aqui: [Efeitos de poção](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
  * `isAmbient: Valor booleano que torna a poção ambiente, fazendo o efeito de poção produzir mais partículas, translúcidas.
  * `duration`: Valor inteiro de ticks (20 ticks = 1 segundo) que representa a duração do efeito de poção.
  * `amplifier`: Valor inteiro que representa o nível/grau/força do efeito de poção. Amplifier 0 significa nível 1, amplifier 1 significa nível 2 e assim por diante.
  * `hasParticles`: Valor booleano que habilita ou desabilita a exibição de partículas do efeito ao redor do jogador.
  * `hasIcon`: Valor booleano que habilita ou desabilita a exibição do ícone do efeito no canto superior direito da tela do jogador.
* Exemplo:

```yaml
potionFeatures:
  potionColor: 10265481
  potionType: FIRE_RESISTANCE
  potionEffects:
    pEffect0:
      isAmbient: false
      duration: 30
      potionEffectType: HEALTH_BOOST
      amplifier: 0
      hasParticles: false
      hasIcon: false
```

### Cor da armadura

* Info: Se o seu ExecutableItem for uma instância de armaduras de couro, aqui você pode selecionar um valor de MapInfo Color, que você pode obter neste site [https://www.tydac.ch/color/](https://www.tydac.ch/color/), para mudar a cor.
  * <CustomTag type="version" version="1.21.3" /> No Paper, `armorColor` também está disponível nas outras peças de armadura (capacete, peitoral, calças, botas de qualquer material, armadura de cavalo e de lobo) e na elytra. Ele define o componente vanilla `dyed_color` delas, que os modelos personalizados (Nexo, ItemsAdder...) usam para sua tonalidade: sem ele, um modelo assim pode ficar invisível. `/ei create` mantém essa cor a partir do item na sua mão.
* Exemplo:

```yaml
armorColor: 7702341
```

### Configurações de cabeça

Aqui você pode definir a configuração de cabeças, ou seja, a cabeça personalizada a partir do valor de uma cabeça de jogador ou de um banco de dados.

#### Se você não tem um plugin de banco de dados de cabeças <CustomTag type="version" version="1.13" />

* Se você quiser adicionar uma cabeça personalizada na 1.13++ sem ter um plugin de banco de dados, pode seguir estes passos:
  * Defina o material do ExecutableItem como PLAYER\_HEAD
  * Visite uma página de cabeças personalizadas, como esta [https://minecraft-heads.com/custom-heads](https://minecraft-heads.com/custom-heads)
  *   Depois obtenha o Value da cabeça\

      
  * Agora copie esse valor e cole dentro da funcionalidade headValue do ExecutableItems
  * Exemplo:
  * ```yaml
    headValue: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTk4ZGY0MmY0NzdmMjEzZmY1ZTlkN2ZhNWE0Y2M0YTY5ZjIwZDljZWYyYjkwYzRhZTRmMjliZDE3Mjg3YjUifX19
    ```

#### Se você tem o plugin Head Database <CustomTag type="version" version="1.12" />

* Se você quiser adicionar uma cabeça personalizada na 1.12++ e tem o plugin Head Database, pode seguir estes passos:
  * Abra a GUI do seu plugin e obtenha o ID da cabeça que você quer
  * Depois cole-o dentro das funcionalidades de cabeça, em headDBID
  * Exemplo:
  * ```yaml
    headDBID: 44328
    ```
* Aqui estão os links, caso você não o tenha e queira obtê-lo.
  * Versão premium: [Head Database](https://www.spigotmc.org/resources/head-database.14280/)
  * Versão gratuita: [Head DB](https://www.spigotmc.org/resources/headdb-head-menu-auto-update-free.84967/)

### whitelistedWorlds

* Info: Lista de Strings com os nomes dos mundos em que você quer impedir ou permitir que os jogadores usem o ExecutableItem.
* Exemplo:

```yaml
whitelistedWorlds:
- ZombieSurvivalWorld_the_end # This allows the use of the EI in that world
- '!ApocalypseWorld' # Using ! Disables the use of the EI in that world
```

### Store item info

* Info: Valor booleano que representa se as informações são armazenadas ou não no próprio item. Atualmente ele armazena a funcionalidade de "owner". Portanto, se você quiser usar o placeholder %owner% ou as condições relacionadas ao owner, precisa tê-lo habilitado.
* Exemplo:

```yaml
storeItemInfo: false
```

### Funcionalidades de Owner

#### canBeUsedOnlyByTheOwner

* Info: Valor booleano que representa se o item só pode ser usado pelo dono ou não.
  * Isso só funciona se o store item info estiver ativado, para que o item tenha um dono.
* Exemplo: 

```yaml
canBeUsedOnlyByTheOwner: false
```

#### cancelEventIfNotOwner

* Info: Valor booleano que representa se, quando o item não é usado pelo dono, todos os eventos são cancelados. Isso significa que, se o ativador for, por exemplo, PLAYER\_BREAK\_BLOCK e alguém que não é o dono tentar usar este item, essa pessoa não conseguirá quebrar nenhum bloco, pois todos os eventos serão cancelados.
  * Isso só funciona se o store item info estiver ativado, para que o item tenha um dono.
* Exemplo: 

```yaml
cancelEventIfNotOwner: false
```

#### onlyOwnerBlackListedActivators

* Info: Lista de IDs de ativadores do seu ExecutableItem. É uma lista negra que desabilita as funcionalidades habilitadas de canBeUsedOnlyByTheOwner, ou seja, todos os IDs de ativadores listados aqui que apontem para um ativador do ExecutableItem poderão ser usados por todos, mesmo que canBeUsedOnlyByTheOwner esteja como true.
  * Isso só funciona se o store item info estiver ativado, para que o item tenha um dono.
* Exemplo: 

```yaml
onlyOwnerBlackListedActivators:
- activator0
- activator1
```

### cancelEventIfNoPermission

* Info: Valor booleano que representa se, quando o jogador não tem a permissão (ei.item.\<id>) para usar o item, todos os eventos são cancelados. Isso significa que, se o ativador for, por exemplo, PLAYER\_BREAK\_BLOCK e alguém que não tem a permissão para usar este item tentar usá-lo, essa pessoa não conseguirá quebrar nenhum bloco, pois todos os eventos serão cancelados.

```yaml
cancelEventIfNoPermission: true
```

### Manter item ao morrer

* Info: Valor booleano que representa se o jogador manterá o item após a morte ou não.
* Exemplo: 

```yaml
keepItemOnDeath: true
```

:::info
É compatível com a funcionalidade keepInventory do WorldGuard e com a gamerule keepInventory do vanilla
:::

### Disable stack <CustomTag type="premium" />

* Info: Valor booleano que representa se o ExecutableItem será impedido ou não de ser empilhado. Definir esta funcionalidade como true fará o customStackSize deste item ser 1.
* Exemplo: 

```yaml
disableStack: true
```

### customStackSize <CustomTag type="premium" /> <CustomTag type="version" version="1.20.5" />

* Info: Valor inteiro para definir o tamanho da pilha deste item. Ele substituirá a quantidade de pilha atual.
* Para entender melhor, o diamond\_sword vanilla tem um tamanho de pilha de 1, já que não pode ser empilhado; com esta funcionalidade, você pode aumentar esse valor. Por outro lado, a terra (dirt) tem um tamanho de pilha de 64, mas com isso você pode diminuí-lo para, por exemplo, um tamanho de pilha de 20.
* Exemplo: 

```yaml
customStackSize: 32
```

### Configurações de variáveis

* Info: Variáveis são uma forma de armazenar informações dentro do seu ExecutableItem. Isso permite acompanhar quantidades, armazenar posições, na verdade, você pode armazenar o que quiser. Elas ajudam a criar comportamentos de itens dinâmicos e personalizáveis, ou seja, as variáveis permitem criar comportamentos únicos para cada item, armazenando e acompanhando dados específicos dele. Por exemplo, você pode acompanhar quantas vezes um jogador usou um determinado item ou quantos jogadores ele matou com ele.
  * `variableName`: Nome da variável, que será usado como referência com %var\_\<name>% para usá-la na lore, dentro de comandos, etc. Este nome não pode ser "id" nem "usage" nem ter espaços.
  * `type`: VariableType da variável, que pode ser um dos seguintes tipos, com exemplos de uso:
    * STRING: Com este tipo de variável você pode armazenar valores STRING, como palavras, números, letras, caracteres, etc. Por exemplo, você pode armazenar o nome do último jogador atingido. Este tipo de variável não suporta `variableModification(type:MODIFICATION)` para aumentar ou diminuir o valor. Ela é estática, a menos que seja substituída por um `variableModification(type:SET)`, que sobrescreverá o valor antigo.
    * NUMBER: Com este tipo de variável você pode armazenar valores FLOAT, como números. Por exemplo, se você quiser armazenar a quantidade de blocos quebrados, a quantidade de abates, acompanhar os segundos antes de algo acontecer, etc. Este tipo de variável suporta `variableModification(type:MODIFICATION)` e `variableModification(type:SET)`.
    * LIST: Esta variável é do tipo lista e armazena valores STRING. É útil para armazenar uma lista de coisas, por exemplo, acompanhar os blocos clicados e adicioná-los a esta lista, ou adicionar aqui os jogadores mortos, etc.
  * `isRefreshableClean`: Valor booleano que habilita a limpeza no refresh. Isso permite adicionar linhas personalizadas à lore sem que sejam removidas quando a variável é atualizada. É recomendado deixá-lo como true.
  * `refreshTagDoNotEdit`: Gerado automaticamente pelo plugin. Ajuda as funções do `isRefreshableClean` a funcionarem corretamente. Então simplesmente não mexa nele.
  * `papiParser`: O valor string que contém a string do PlaceholderAPI, na qual está o valor da variável para o parsing. Seu propósito é permitir inserir valores de variáveis dentro de placeholders do PlaceholderAPI e exibir os resultados na lore. 
    * Ex:
      * ID da variável: `level`
      * Valor string do papiParser: `%math_<VAR>*<VAR>%`
        * A string `<VAR>` representa o valor atual da variável quando processada. Se você quiser posicionar o valor em várias partes da string do placeholder do PlaceholderAPI, basta digitar `<VAR>` nos lugares em que precisar dele.
      * String de placeholder para colocar na lore: `%var_level_papi%`
* Exemplo
  * ```yaml
    variables:
      var2:
        variableName: ThisVariableIsTypeIntegerAndICanDoModifications
        type: NUMBER
        default: 10.0
      var1:
        variableName: anotherVariable # This variable is type string
        type: STRING
        default: '' #It starts with no value, we can then change it from an activator or using commands
      var0:
        variableName: nameOfVariable
        type: LIST
        default:
        - value1
        - value2
        - '1'
        - '2'
    ```
* Você pode consultar mais informações na próxima página sobre outros tipos de variáveis:
  * [Variáveis do SCore](/tools-for-all-plugins-score/score-variables)

### Funcionalidades de Custom give first join

* Info: Aqui você pode personalizar a funcionalidade de entregar o item quando o jogador entra pela primeira vez no servidor.
  * giveFirstJoin: Valor booleano que representa se a funcionalidade está habilitada ou não
  * giveFirstJoinAmount: Valor inteiro que representa quantos itens deste ExecutableItem serão entregues ao jogador.
  * giveFirstJoinSlot: Slot em que o ExecutableItem será entregue ao jogador.
* Exemplo:

```yaml
giveFirstJoinFeatures:
  giveFirstJoin: false
  giveFirstJoinAmount: 1
  giveFirstJoinSlot: 0
```

### Funcionalidade de Item Recognition <CustomTag type="premium" />

* Info: Esta funcionalidade permite fazer com que outros itens, que não são o ExecutableItem, sejam tratados como se fossem o ExecutableItem que você está editando. Basicamente, a ideia é trabalhar com recognitions, uma lista de tipos de reconhecimento: se um deles coincidir entre o seu ExecutableItem e outro item (mesmo que não seja um ExecutableItem), as funcionalidades que o ExecutableItem tem também estarão nesse outro item. Isso funciona desde que ele seja reconhecido seguindo os requisitos dos reconhecimentos.
  * Opções de recognitions disponíveis:
    * NAME:  Habilita o reconhecimento para todos os itens que coincidem com o nome personalizado do ExecutableItem
    * MATERIAL: Habilita o reconhecimento para todos os itens que coincidem com o material do ExecutableItem
    * LORE: Habilita o reconhecimento para todos os itens que coincidem com a lore do ExecutableItem
* Por exemplo, se você criar um ExecutableItem de picareta de diamante, que tem um ativador PLAYER\_RIGHT\_CLICK e nos comandos "SEND\_MESSAGE I am a pickaxe", toda vez que você clicar com o botão direito, ele enviará essa mensagem ao chat do Minecraft. Agora, se você habilitar o item recognition, digamos, para o material, TODAS as picaretas de diamante do servidor dispararão esse ativador e a mensagem será exibida.
* Exemplo: 

```yaml
recognitions:
- NAME
- MATERIAL  
- LORE 
```

* Cenários de exemplo:
  * Se um item EI tem apenas o item recognition de `MATERIAL` e é um DIAMOND, todos os diamantes que existem no servidor se comportarão como esse item EI
  * Se um item EI tem apenas o item recognition de `NAME` e se chama "\&dAngle", se você tentar usar qualquer item com o nome "\&dAngle", ele se comportará como o item EI original. MAS se o nome for "\&eAngle" ou outro nome, não funcionará.
  * Se um item EI tem apenas o item recognition de `LORE`, um item só se comportará como o EI se tiver EXATAMENTE os mesmos códigos de cor nas linhas da lore e cada detalhe de maiúsculas e minúsculas de letras e caracteres.
  * Se um item EI tem apenas o item recognition de `MATERIAL` e `NAME`, os itens precisam ter o NOME e o MATERIAL EXATOS do item EI para serem considerados um item EI.
* Tenha em mente que, se um dos seus ExecutableItems tiver item recognitions habilitado em MATERIAL, você não deve usar mais item recognitions baseados em MATERIAL para outro ExecutableItem com o mesmo MATERIAL. O motivo é que, se houver 2 ExecutableItems com o reconhecimento de MATERIAL habilitado e ambos forem DIAMOND\_BLOCK, apenas o primeiro em ordem alfabética terá a maior prioridade caso alguém dispare um DIAMOND\_BLOCK.

## Funcionalidades de Use cooldown <CustomTag type="version" version="1.21.2" />

* Info: Funcionalidade que adiciona ao item um cooldown de uso no estilo vanilla, semelhante ao cooldown das pérolas do Ender ou das frutas do coro.
  * `cooldownGroup`: Valor string que define um grupo de cooldown. Itens com o mesmo grupo de cooldown compartilharão o mesmo cooldown. Deve estar em minúsculas e seguir o formato NamespacedKey (por exemplo, "mygroup" ou "namespace:mygroup")
  * `vanillaUseCooldown`: Valor inteiro que representa a duração do cooldown em segundos
* Exemplo:

```yaml
useCooldown:
  cooldownGroup: "custom_weapon_group"
  vanillaUseCooldown: 5
```

:::info
Este cooldown é diferente do sistema de cooldown dos ativadores. É um cooldown vanilla do Minecraft que mostra o item "acinzentado" na hotbar durante o período de cooldown.
:::


## Dependendo do tipo de item

### Funcionalidades de Container

* Info: Aqui você pode personalizar as funcionalidades de container se o bloco for uma instância de container, como o baú e o barril.
  * `isLocked`: Valor booleano que representa se o container está trancado ou não
  * `lockedName`: Valor string que representa o nome da chave se o container estiver trancado. É uma funcionalidade do Minecraft: se você tiver um item com o mesmo nome do lockedName, poderá abrir o baú; caso contrário, não.
  * `containerContent`: Lista de materiais dentro do container quando colocado, usando o formato slot:\<slot>;\<material>
* Exemplo:

```yaml
containerFeatures:
  isLocked: true
  lockedName: thisIsTheKey
  containerContent:
  - slot:0;minecraft:loom
```

### Tool Rules <CustomTag type="version" version="1.20.5" />

Info: Aqui você pode definir as regras das ferramentas.

#### Enable

* Info: Valor booleano para definir se as Tool Rules estão habilitadas ou não.
* Exemplo:

```yaml
toolRules:
  enable: true
```

#### Velocidade de mineração padrão

* Info: Valor float para definir a velocidade de mineração padrão do ExecutableItem.
* Exemplo:

```yaml
toolRules:
  enable: true
  defaultMiningSpeed: 1.0
```

#### Dano por bloco quebrado

* Info: Valor inteiro para definir o valor de durabilidade que será retirado depois que o ExecutableItem quebrar um bloco. 
* Exemplo:

```yaml
toolRules:
  enable: false
  damagePerBlock: 1
```

#### Regras de ferramenta específicas

* Info: Você pode definir a velocidade de mineração e o drop para determinados blocos com o ExecutableItem, para personalizar a ferramenta.
  * `miningSpeed`: Valor float para definir a velocidade de mineração do ExecutableItem para os blocos selecionados na regra de ferramenta.
  * `correctForDrops`: Valor booleano que representa se o bloco será dropado ou não usando o ExecutableItems.
  * `blocks`: Lista de BLOCKS aos quais aplicar as regras de ferramenta.
* Exemplo:

```yaml
toolRules:
  toolRule0: #ID Of this tool rule, you can add as many as you want
    miningSpeed: 1.0
    correctForDrops: true
    blocks:
    - STONE
  enable: true
```

### chargedProjectiles

* Info: Funcionalidade que permite ter projéteis já carregados quando o ExecutableItem é uma besta e é entregue ao jogador.
  * O formato do material deve ser `minecraft:<id>`. Por enquanto, suporta itens vanilla.
* Exemplo:

```yaml
material: CROSSBOW
chargedProjectiles:
- minecraft:arrow
```

### bundleContent

* Info: Funcionalidade que permite ter itens já como conteúdo se o ExecutableItems for um item bundle e for entregue ao jogador.
  * O formato do material deve ser `minecraft:<id>`. Por enquanto, suporta itens vanilla.
* Exemplo:

```yaml
material: BUNDLE
bundleContent:
- minecraft:stone
- minecraft:dirt
```

### Funcionalidades de Firework

* Info: Funcionalidade que permite ter funcionalidades de fogos de artifício personalizadas se o ExecutableItems for um item de fogos de artifício.
* Exemplo:

```yaml
fireworkFeatures:
  lifeTime: 1
  fireworkExplosions:
    explosion_0:
      colors:
      - BLUE
      fadeColors:
      - RED
      type: BALL_LARGE
      hasTrail: true
      hasTwinkle: true
    explosion_1:
      colors:
      - GREEN
      fadeColors: []
      type: CREEPER
      hasTrail: true
      hasTwinkle: true
```

Para as cores, você pode usar os [Nomes de cores](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html) normais ou `RGB-<0-255>-<0-255>-<0-255>`

### Funcionalidades de Spawner <CustomTag type="version" version="1.20.5" />

* Info: Funcionalidade que permite criar spawners personalizados com o ExecutableItems
* Configurações:
  * `spawnCount`: Define quantas entidades aparecem a cada spawn
  * `spawnDelay`: Define o atraso do primeiro spawn depois de colocar o spawner (em ticks, 20 ticks = 1 segundo)
  * `spawnRange`: O alcance de spawn
  * `requiredPlayerRange`: Define a que distância máxima o jogador deve estar para ativar o spawner
  * `minSpawnDelay`: O atraso mínimo entre cada spawn  (em ticks, 20 ticks = 1 segundo)
  * `minSpawnDelay`: O atraso máximo entre cada spawn  (em ticks, 20 ticks = 1 segundo)
  * `maxNearbyEntities`: Máximo de entidades ao redor do spawner
  * `addSpawnerNbtToItem`: Se adiciona ou não a tag de componentes do spawner ao item (é melhor deixar false). Quando é false, o plugin só adicionará as tags quando o spawner for colocado.
  * `potentialSpawns`: Define os potentialSpawns do seu spawner com weight

:::tip
É melhor criar seu spawner primeiro no [MCStaker](https://mcstacker.net/?cmd=give), depois entregá-lo a você no jogo e, por fim, segurá-lo + executar /ei create.\
Ele importará automaticamente as funcionalidades do spawner para os seus ExecutableItems.
:::

* Exemplo:

```yaml
spawnerFeatures:
  spawnCount: 4
  spawnDelay: 20
  spawnRange: 4
  requiredPlayerRange: 16
  minSpawnDelay: 200
  maxSpawnDelay: 800
  maxNearbyEntities: 6
  potentialSpawns:
  # {THE ENTITY};the weight for this SpawnerEntry, when added to a spawner entries with higher weight will spawn more often.
  - '{BlockState:{Name:"minecraft:diorite"},id:"minecraft:falling_block"};1' 
  - '{id:"minecraft:chicken"};1' 
  addSpawnerNbtToItem: false
```

### Funcionalidades de Instrument <CustomTag type="version" version="1.20.5" />

* Info: Funcionalidade que permite personalizar o som do chifre de cabra para itens. Esta funcionalidade só funciona para itens com o material GOAT_HORN.
  * `enable`: Valor booleano que habilita ou desabilita as funcionalidades de instrument
  * `instrument`: O som do instrumento musical que será tocado quando o chifre de cabra for usado. [Music Instruments](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/MusicInstrument.html)
* Exemplo:

```yaml
material: GOAT_HORN
instrumentFeatures:
  enable: true
  instrument: DREAM_GOAT_HORN
```

### Funcionalidades de Weapon <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Info: Funcionalidade que permite configurar ajustes de combate específicos de armas para itens.
  * `enable`: Valor booleano que habilita ou desabilita as funcionalidades de weapon
  * `disableBlockingTime`: Valor inteiro que representa por quanto tempo (em segundos) o escudo do alvo ficará desabilitado depois de ser atingido por esta arma
  * `damagePerAttack`: Valor inteiro que representa o dano de durabilidade que esta arma sofre por ataque (padrão: 5)
* Exemplo:

```yaml
weaponFeatures:
  enable: true
  disableBlockingTime: 3
  damagePerAttack: 2
```


### Funcionalidades de Blocks attacks <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Info: Funcionalidade que permite configurar como os itens bloqueiam ataques, de forma semelhante aos escudos. Isso permite que qualquer item seja capaz de bloquear dano.
  * `enable`: Valor booleano que habilita ou desabilita as funcionalidades de block attacks
  * `blockDelay`: Valor inteiro que representa o atraso em segundos antes que o item possa bloquear novamente depois de ser usado
  * `blockSound`: Som que toca quando um ataque é bloqueado com sucesso
  * `disableSound`: Som que toca quando o bloqueio é desabilitado (depois de ser sobrecarregado)
  * `disableCooldownScale`: Valor double (multiplicador) para a duração da desabilitação do bloqueio depois de ser sobrecarregado (padrão: 1.0)
  * `damageReductions`: Lista de configurações de redução de dano que definem quanto dano é reduzido por tipo de dano
  * `bypassedBy`: Tipo de dano que ignora este bloqueio por completo
* Exemplo:

```yaml
blockAttacksFeatures:
  enable: true
  blockDelay: 1
  blockSound: ITEM_SHIELD_BLOCK
  disableSound: ITEM_SHIELD_BREAK
  disableCooldownScale: 1.5
  damageReductions:
    reduction_0:
      baseDamageBlocked: 2.0
      factorDamageBlocked: 0.5
      horizontalBlockingAngle: 90.0
      damageTypes:
      - ARROW
      - MOB_ATTACK
    reduction_1:
      baseDamageBlocked: 1.0
      factorDamageBlocked: 0.25
      horizontalBlockingAngle: 180.0
      damageTypes:
      - EXPLOSION
  bypassedBy: VOID
```

#### Configuração de Damage Reduction

Cada entrada de redução de dano tem as seguintes configurações:
* `baseDamageBlocked`: Quantidade base de dano bloqueado (redução fixa)
* `factorDamageBlocked`: Porcentagem de dano bloqueado (0.5 = 50% de redução)
* `horizontalBlockingAngle`: O ângulo em graus a partir do qual os ataques podem ser bloqueados (90 = quarto frontal, 180 = metade frontal, 360 = todas as direções). Deve ser maior que 0.
* `damageTypes`: Lista de tipos de dano aos quais esta redução se aplica. Veja [Tipos de dano](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html) para os tipos disponíveis.

:::tip
Você pode criar "escudos" personalizados com materiais diferentes usando esta funcionalidade. Por exemplo, você poderia fazer um livro que bloqueia dano mágico ou um diamante que bloqueia ataques físicos!
:::
