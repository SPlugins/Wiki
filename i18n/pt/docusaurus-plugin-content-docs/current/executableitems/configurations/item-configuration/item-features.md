---
description: >-
  Guia completo das funcionalidades de item do ExecutableItems: ativadores,
  atributos, durabilidade, variáveis, cooldown e muito mais.
source_hash: 9a41c7f27a57a232
translated_at: '2026-10-03T10:25:06.208Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Funcionalidades do Item

Lista de funcionalidades de item, estas são as primeiras coisas que você deve configurar no seu item.

Funcionalidades premium são marcadas com a tag:  <CustomTag type="premium" />

### Ativadores

* Funcionalidades muito importantes que permitem adicionar habilidades ao seu item
* Wiki dedicada para esta funcionalidade: [Lista de EI Activators](../activator-configuration/list-of-the-activators.md) e [Funcionalidades de EI Activators](/executableitems/configurations/activator-configuration/activators-features.md)


### Material do item

* Info: O material do item do Minecraft do Executable Item
* Exemplo: Se eu quiser que o ExecutableItem tenha como item base DIAMOND, então seria

```yaml
material: DIAMOND
```

* Você pode checar as informações da lista de materiais neste link: [Lista de materiais](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
* Se você quiser configurar como material do item uma head personalizada, confira este link [Configurações de Head](/executableitems/configurations/item-configuration/item-features#head-settings).

### Nome ou DisplayName do item

* Info: O nome de exibição do item. É o nome visível.
* Exemplo: Se eu quiser que meu item tenha como nome de exibição um título vermelho "Epic Sword", então seria

```yaml
name: '&cEpic Sword'
```

* Se você quiser usar no seu nome de exibição Cores HEX você pode fazer isso:
  * Você tem que ir a um site que pode te ajudar a escolher uma cor da sua preferência para obter o código de cor hex. Nós recomendamos [https://htmlcolorcodes.com/](https://htmlcolorcodes.com/)
  * Então escolha a cor da sua preferência e anote / copie o código de cor hex dela. [Referência](https://imgur.com/a/tNWtA0a)
  * Com esse código de cor hex você tem que adicionar "#" no início e isso vai ficar antes do que você quer colorir. #\<HEX\_COLOR\_CODE>\<What you want to color>
  * Finalmente você terá algo como **`#DB6725&lPractice`** e vai aparecer com a cor que você selecionou [no jogo](https://imgur.com/a/7umxduF).

### Lore ou descrição do item

* Info: O lore ou descrição do item
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

* Você pode usar placeholders no lore. Apenas tenha em mente que se você usar placeholders fora do plugin e depois adicionar algum conteúdo novo ao lore, como encantamentos personalizados, texto personalizado. Se um dos placeholders atualizar, então tudo que foi adicionado fora dos plugins Ssomar será deletado. Para evitar isso você precisará não atualizar o lore, mas isso significa que os placeholders não serão atualizados. Você tem que escolher o que preferir. Para concluir: COISAS EXTRAS NO LORE significa SEM ATUALIZAÇÃO significa SEM placeholders personalizados de EI no lore, por favor.

:::info
Para deixar um espaço vazio entre linhas do lore você pode adicionar '' no arquivo de configuração. Se você estiver editando o lore dentro do Minecraft usando a GUI personalizada, você precisaria usar '\&f' nesse caso.
:::

:::info
Para ExecutableItems grátis existe uma linha com "Made with ExecutableItems": Ela não pode ser removida, é a contrapartida da atualização de aumentar a quantidade de itens de 25 para 500.
:::

### Efeito glowing (brilho encantado)

* Info: Valor booleano que seleciona se dá ao executable item uma aparência de brilho/efeito encantado.
* Exemplo: 

```yaml
glow: true
```

### Desativar o brilho do encantamento <CustomTag type="version" version="1.20.5" />

* Info: Valor booleano que força o item a não ter o efeito de brilho mesmo se ele estiver encantado. 
* Exemplo: 

```yaml
disableEnchantGlow : true
```

:::info
DICA: Você também pode remover o efeito de brilho de alguns itens vanilla, como a nether star, por exemplo.
:::

### Exibir condições no lore do item

* Info: Permite exibir condições no lore do item.
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

* Info: Selecione o valor de durabilidade do item.
  * Para versões 1.20.5 ou anteriores: O valor de durabilidade deve ser igual ou menor que a durabilidade máxima vanilla do item selecionado.
  * Exemplo: 
```yaml
durability: 150
```
  * Para versões 1.20.5 em diante: A opção de durabilidade pode ser personalizada, habilitando novas funcionalidades como a sincronização do uso do ExecutableItem e o valor de durabilidade. E permite selecionar durabilidade máxima personalizada.
  * Exemplo:
```yaml
isDurabilityBasedOnUsage: true
maxDurability: 20 
durability: 19
```

### Encantamentos do item

* Info: Define os encantamentos iniciais que o executable item terá quando for dado.
* Exemplo:

```yaml
enchantments:
  enchantment1: #ID Of this enchantment, you can add as many as you want
    enchantment: sharpness
    level: 1
```

### Indestrutível (Unbreakable)

* Info: Valor booleano que seleciona se o executable item será indestrutível ou não
* Exemplo: 

```yaml
unbreakable: true
```

### Atributos <CustomTag type="version" version="1.12" />

* Info: Você pode selecionar os atributos do ExecutableItem.
  * `attribute`: O tipo de atributo. Lista aqui [Lista de atributos](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/attribute/Attribute.html)
  * `uuid`: É um código que o minecraft precisa para atribuir os modificadores de atributo. Você pode ignorar isso.
  * `name`: É o nome de exibição do Attribute Modifier. É útil para você escrever o que ele faz. Não afeta em nada além de visualizá-lo na GUI.
  * `operation`: Tipo de operação que o AttributeModifier fará. Lista aqui [Operações](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html)
  * `amount`: O valor para o AttributeModifier, ele será aplicado ao atributo usando a operação selecionada.
  * `slot`: O slot em que o AttributeModifier vai funcionar.
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
**Se você estiver usando a versão 1.12, você precisará seguir estes passos:**

* Este processo requer a versão premium do EI <CustomTag type="premium" />
* Gere seu item com atributos em um site. Sugerimos [https://mapmaking.fr/give1.12/](https://mapmaking.fr/give1.12/)
* Depois dê o item para você mesmo dentro do Minecraft
* Enquanto estiver segurando ele na sua mão execute o comando /ei create \<id>
* E é isso! Agora seu EI tem os atributos importados automaticamente.
:::

#### **Manter atributos padrão**

* Info: Valor booleano para manter ou não o atributo padrão do item.
* Exemplo:

```yaml
keepDefaultAttributes: true
ignoreKeepDefaultAttributesFeature: false
```

:::warning
Na 1.21+, um item sem atributos próprios que não tenha estas duas linhas **perde os atributos padrão do seu material**: uma espada bate como um punho, uma peça de armadura não dá armadura. ExecutableItems lista esses itens no console após cada carregamento. Para corrigir todos os seus itens de uma vez: `/ei util-set-keepdefaultattributes-all-ei true`.
:::

:::info Mesa de ferraria
Com `keepDefaultAttributes: true`, um item atualizado na mesa de ferraria (diamante para netherite) recebe os atributos padrão do seu novo material (armadura de netherite, resistência e resistência ao recuo). Os atributos do próprio item são mantidos.
:::

* Neste link há um tutorial sobre atributos, e suas funcionalidades.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HqyF0QBYIY4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


#### **ignoreKeepDefaultAttributesFeature:** 

* Info: Ignora a configuração de manter atributos padrão. É útil para o terceiro caso na explicação desta tabela:
* Exemplo:

```yaml
ignoreKeepDefaultAttributesFeature: true
```

### Custom model data <CustomTag type="version" version="1.14" />

* Info: 
  * Para a versão do Minecraft antes de 1.21.4: Integer para definir o valor da funcionalidade customModelData do item. Útil para criar texturas diferentes para um item.
  * A partir da versão 1.21.4 do Minecraft você agora pode adicionar texto e boolean.
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

### Funcionalidade de Raridade do Item <CustomTag type="version" version="1.20.5" />

* Info: Rarity é uma estatística vanilla aplicada a itens e blocos para indicar seu valor e facilidade de obtenção. Não tem efeito algum na jogabilidade. Existem quatro níveis de raridade: Common, Uncommon, Rare e Epic.
  * `enableRarity`: Boolean que representa se a funcionalidade está habilitada ou não
  * `rarity`: Tipo de raridade
* Exemplo:

```yaml
itemRarity:
  enableRarity: false
  rarity: COMMON
```

### Funcionalidades Equippable <CustomTag type="version" version="1.21.2" />

* Info: Esta seção configura o comportamento de um item equipável. Quando habilitado, o item pode ser equipado em um slot designado, opcionalmente disparando um efeito sonoro. Você também pode especificar um modelo personalizado para o item equipado, definir se ele toma dano quando quem o usa é ferido, e definir flags para permitir ou restringir troca e descarte. Além disso, você pode restringir quais entidades podem equipar o item.
  * `enable`: Defina como true para habilitar o equipamento deste item
  * `slot`: O slot de equipamento (ex.: CHEST, HEAD, LEGS, FEET) onde o item é equipado
  * `enableSound`: Boolean para tocar um som quando o item for equipado
  * `sound`: Efeito sonoro a ser tocado quando equipado
  * `equipModel`: (Opcional) modelo personalizado para o item equipado (ex.: "mynamespace:mymodel")
  * `cameraOverlay`: (Opcional) overlay de câmera personalizado quando o item é equipado
  * `damageableOnHurt`: Boolean que seleciona se o item perde durabilidade quando quem o usa é ferido
  * `dispensable`: Boolean que seleciona se o item pode ser descartado (removido/dropado)
  * `swappable`: Boolean que seleciona se o item pode ser trocado por outro item
  * `allowedEntities`: Lista de entidades permitidas a equipar este item
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

### Funcionalidades Repairable <CustomTag type="version" version="1.21.2" />

* Info: Funcionalidades relacionadas a quando o ExecutableItem é reparado.
  * `enable`: Valor booleano que seleciona se a funcionalidade está habilitada ou não
  * `repairCost`: Valor integer que representa o custo de repará-lo na bancada (Anvil)
* Exemplo:

```yaml
repairableFeatures:
    enable: false
    repairCost: 2 
```

### Glider <CustomTag type="version" version="1.21.2" />

* Info: Funcionalidade para permitir planar com o item como você normalmente faria com o item vanilla "elytra".
* Exemplo:

```yaml
glider: false
```

### itemModel <CustomTag type="version" version="1.21.2" />

* Info: Caminho de um modelo de item personalizado no texture pack no formato de \<mynamespace\:model\_id> que vai apontar para dentro de assets/\<mynamespace>/models/item/\<model\_id>.
* Exemplo:

```yaml
itemModel: "" # "mynamespace:mymodel"
```

### tooltipModel <CustomTag type="premium" /> <CustomTag type="version" version="1.21.2" />

* Info: Caminho de um modelo de tooltip personalizado no texture pack no formato de \<mynamespace\:model\_id> que vai apontar para dentro de /assets/\<mynamespace>/textures/gui/sprites/tooltip/\<id>\_frame
* Exemplo:

```yaml
tootipModel: "" # "mynamespace:mymodel"
```

### Funcionalidades relacionadas ao item dropado

Aqui você vai aprender sobre funcionalidades que só são visíveis quando o item é dropado no chão.

#### Glowing ao dropar

* Info: Quando o item é dropado, ele tem um efeito de brilho
* Exemplo: 

```yaml
dropFeatures:
  glowDrop: false
```

#### Cor do glowing ao dropar

* Info: Se o item tiver o glowEffect habilitado, então é possível selecionar a cor do efeito de brilho quando dropado.
* Cores possíveis: [Referência de cores](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)
* Exemplo:

```yaml
dropFeatures:
  glowDrop: false
  glowDropColor: WHITE
```

#### Nome de exibição quando o item é dropado

* Info: Selecione se o item vai mostrar o nome de exibição como um texto flutuante quando ele é dropado.
* Exemplo: 

```yaml
dropFeatures:
  displayNameDrop: true
```

### NBT Tags

* Info: Requer o plugin [**NBTAPI**](https://www.spigotmc.org/resources/nbt-api.7939/) disponível no Spigot.
Esta funcionalidade permite adicionar suas nbt tags personalizadas dentro do seu ExecutableItem.
  * `type`: O tipo de valor que você está armazenando, ex:
    * BOOLEAN: true | false
    * STRING: car
    * INTEGER: 6
    * DOUBLE: 17.6
    * COMPOUND: Exemplo abaixo, vai depender das suas necessidades e do que você quer adicionar.
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

### Bukkit tags

* Info: Você pode adicionar valores de bukkit tag ao seu ExecutableItem.
* Exemplo:

```yaml
tags:
 - mytag:blabla1
 - myothertag:blabla2
```

No jogo isso será representado em PublicBukkitValues, assim

```yaml
"executableitems:mytag":"blabla1"
"executableitems:myothertag":"blabla2"
```

Você também pode escrever placeholders %rand% no campo de valor das NBTs. Funciona apenas para os tipos de dados STRING, INTEGER e DOUBLE
```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: '%rand:-100|100%'
```
Também funciona no editor in-game
```
INTEGER::foo::%rand:1|2%
```  
  
Você também pode salvar nbts no PDC (Persistent Data Container) se quiser.
* Exemplo in-game: `integer::take::0::true`
* Config do item:
```yml
nbt:
  '0':
    key: take
    saveInPDC: true
    type: INT
    value: 0
```

### Funcionalidades Hiders

* Info: Configurações relacionadas a ocultar funcionalidades que normalmente são exibidas no seu ExecutableItem. Todas as funcionalidades, mesmo quando ocultas, continuarão funcionais.
  * `hideEnchantments`: Valor booleano que representa se os encantamentos no ExecutableItem serão exibidos no lore ou não.
  * `hideUnbreakable`: Valor booleano que representa se a descrição de indestrutível será mostrada no lore ou não.
  * `hideAttributes`: Valor booleano que representa se os atributos do ExecutableItem serão exibidos no lore ou não.
  * `hidePotionEffects`: Valor booleano que representa se os efeitos de poção do ExecutableItem serão exibidos no lore ou não. Nas versões 1.20.5 ou + use hideAdditionalTooltip.
  *   hideAdditionalTooltip (Disponível apenas em 1.20.5++) 

      Configuração para mostrar/ocultar efeitos de poção, informações de livro e foguete, tooltips de mapa, padrões de bandeiras e encantamentos de livros encantados. Substitui o antigo hidePotionEffects
  * `hideUsage`: Valor booleano que representa se a funcionalidade personalizada Usage do próprio item do plugin ExecutableItem será exibida no lore ou não.
    * Você pode exibir manualmente o usage usando o placeholder %usage% adicionando-o ao editar seu lore.
  * `hideDye`: Valor booleano que representa se a cor de tingimento (#\<color>) do ExecutableItem será exibida no lore ou não.
  * `hideArmorTrim`: Valor booleano que representa se o armor trim do ExecutableItem será exibido no lore ou não.
  * `hidePlacedOn`: Valor booleano que representa se a NBT Tag de "Can be placed on: \[...]" do ExecutableItem será exibida no lore ou não.
  * `hideDestroys`: Valor booleano que representa se a NBT Tag de "Can destroy: \[...]" do ExecutableItem será exibida no lore ou não.
  * `hideToolTip`: Valor booleano que representa se o tooltip está oculto ou não. (Disponível apenas em 1.20.5++)
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

Esta seção vai explicar o que é usage e suas funcionalidades.

#### Usage

* Info: Usage é um valor integer armazenado dentro do seu ExecutableItem, ele pode ser modificado através de usageModification dentro de um ativador ou de comandos. Mas não é apenas um valor armazenado, isso foi feito para representar o "sistema de durabilidade personalizado" do seu ExecutableItem, o que significa que se de alguma forma o usage chegar a 0, seu item é deletado.
* Exemplo: 
  * Um usage de 1 não significa que o item tem uma unidade de durabilidade, como explicamos anteriormente, é um sistema personalizado de durabilidade. Ele vai durar enquanto o usage não chegar a 0. Por exemplo, se você adicionar um ativador ao seu item que tenha a funcionalidade usageModification com valor "-1", uma vez que o ativador disparar uma vez, seu item vai sumir.
  * Seguindo a mesma ideia, se temos usage 1, se não tivermos ativadores que mudam o usage do item, nosso item vai durar infinitamente, até que... de alguma forma, um comando ou um novo ativador adicionado ao item, modifique o usage para um valor igual ou menor que 0, então o item será deletado.
    * ```yaml
      usage: 1
      ```
  * Usage as we said, don't think like its just a durability system, because it can go up too ! .  For example if we have an activator that instead of having a negative value on usageModification it has a positive value, then our usage will increase once the activator is triggered ^^
  * Now, if you want your item neither increase nor decrease, basically don't use this custom value storage. You can set the usage to -1.
    * ```yaml
      usage: -1
      ```

#### Limite de usage <CustomTag type="premium" />

* Info: Valor integer que limita o valor máximo que o usage pode alcançar. (O valor não pode ser 0)
* Exemplo: 

```yaml
usageLimit: 600 #Usage will not be able to go up more than this value, -1 to don't take it into account
```

#### Usos por dia

* Info: Valor integer que limita quantas vezes você pode usar o item a cada dia na vida real
* Exemplo: 

```yaml
usePerDay: 200 # -1 to ignore it
```

### Funcionalidades Food <CustomTag type="version" version="1.20.5" />

* Info: Esta funcionalidade permite personalizar configurações de comida relacionadas ao seu ExecutableItem
  * `nutrition`: Valor integer que representa a quantidade de "meio-alimento" que vai preencher no jogador uma vez que o item for comido
    * Para melhor compreensão, o jogador tem 20 de nutrição máxima, e é mostrado no jogo como 10 ícones de fome, cada ícone podendo se dividir em 2.
  * `saturation`: Valor integer que representa a saturação que o jogador vai receber uma vez que o item for comido.
  * `isMeat`: Valor booleano que vai fazer o item ser considerado como comida. Isso será forçado, o que significa que, se você definir este valor como true, qualquer item, mesmo os que não podem ser comidos, será considerado como comida, e assim poderão ser consumidos.
  * `canAlwaysEat`: Valor booleano que representa se o item sempre pode ser comido mesmo quando a barra de fome do jogador estiver completamente cheia.
*  Exemplo:

```yaml
foodFeatures:
  nutrition: 1
  saturation: 1
  isMeat: false
  canAlwaysEat: true
```

### Funcionalidades Consumable <CustomTag type="version" version="1.21.4" />

* Info: Funcionalidades relacionadas a consumable, permite personalizar as opções de consumable, é mais próximo da funcionalidade de food.
  * `enable`: Boolean que representa habilitar ou desabilitar as funcionalidades consumable
  * `animation`: ANIMATION\_TYPE que será reproduzida ao comer/consumir o ExecutableItem
  * `sound`: SOUND que será tocado quando o item estiver sendo comido/consumido
  * `hasConsumeParticles`: Valor booleano que representa se o item vai soltar partículas de estar sendo comido
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

### Configurações de Potion

Aqui você pode personalizar as funcionalidades de potion do seu ExecutableItem se o material do item for uma potion.

#### Cor da potion

* Info: Integer de Cor MapInfo que representa uma cor. Use uma página como [https://www.tydac.ch/color/](https://www.tydac.ch/color/) para obter o valor de MapInfo de uma cor.
* Exemplo:

```yaml
potionFeatures:
  potionColor: 10265481
```

#### Tipo de potion

* Info: Potion Type que você quer que o item de potion tenha. É apenas uma funcionalidade visual, não afeta o comportamento real da potion. A lista está disponível aqui [Tipos de potion](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionType.html)
* Exemplo:

```yaml
potionFeatures:
  potionType: WIND_CHARGED
```

#### Efeitos de potion

* Info: Aqui você pode criar os efeitos de potion que sua opção vai ter
  * `potionEffectType`: PotionEffectType selecionado, lista disponível aqui [Efeitos de potion](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
  * `isAmbient: Valor booleano que faz a potion ser ambient, fazendo o efeito de potion produzir mais partículas translúcidas.
  * `duration`: Valor integer de ticks (20 ticks = 1 segundo) que representa a duração do efeito de potion.
  * `amplifier`: Valor integer que representa o nível/grau/força do efeito de potion. Amplifier 0 significa nível 1, amplifier 1 significa nível 2 e assim por diante.
  * `hasParticles`: Valor booleano que habilita ou desabilita a exibição de partículas de efeito em volta do jogador.
  * `hasIcon`: Valor booleano que habilita ou desabilita a exibição do ícone de efeito no canto superior direito da tela do jogador.
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

### Cor da armadura de couro

* Info: Se o seu ExecutableItem for uma instância de armaduras de couro, então aqui você pode selecionar um valor de Cor MapInfo que você pode obter neste site [https://www.tydac.ch/color/](https://www.tydac.ch/color/) para mudar a cor.
* Exemplo:

```yaml
armorColor: 7702341
```

### Configurações de Head

Aqui você pode selecionar a configuração para as configurações de head, ou seja, a head personalizada a partir de um valor de head de jogador ou de um banco de dados.

#### Se você não tiver um plugin para banco de dados de heads <CustomTag type="version" version="1.13" />

* Se você quiser adicionar uma head personalizada para 1.13++ sem ter um plugin de banco de dados, você pode seguir os próximos passos:
  * Defina o material do ExecutableItem para PLAYER\_HEAD
  * Visite uma página de heads personalizadas, como esta [https://minecraft-heads.com/custom-heads](https://minecraft-heads.com/custom-heads)
  *   Depois obtenha o Value da head\

      
  * Agora copie esse valor e cole dentro da funcionalidade headValue do ExecutableItems
  * Exemplo:
  * ```yaml
    headValue: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTk4ZGY0MmY0NzdmMjEzZmY1ZTlkN2ZhNWE0Y2M0YTY5ZjIwZDljZWYyYjkwYzRhZTRmMjliZDE3Mjg3YjUifX19
    ```

#### If you have the plugin Head Database <CustomTag type="version" version="1.12" />

* If you want to add a custom head for 1.12++ and you have the plugin head databases you can follow the next steps:
  * Open the GUI of your plugin and get the ID of the head you want
  * Then paste it inside the head features on headDBID
  * Example:
  * ```yaml
    headDBID: 44328
    ```
* Aqui você tem os links caso você não tenha e queira obter.
  * Versão premium: [Head Database](https://www.spigotmc.org/resources/head-database.14280/)
  * Versão grátis: [Head DB](https://www.spigotmc.org/resources/headdb-head-menu-auto-update-free.84967/)

### whitelistedWorlds

* Info: Lista de String com os nomes dos mundos onde você quer impedir ou permitir que os jogadores usem o ExecutableItem.
* Exemplo:

```yaml
whitelistedWorlds:
- ZombieSurvivalWorld_the_end # This allows the use of the EI in that world
- '!ApocalypseWorld' # Using ! Disables the use of the EI in that world
```

### Store item info

* Info: Valor booleano que representa se armazena ou não a informação dentro do próprio item. Atualmente ele armazena a funcionalidade de "owner". Então se você quiser usar o placeholder %owner% ou as condições relacionadas ao owner, você deve ter isso habilitado.
* Exemplo:

```yaml
storeItemInfo: false
```

### Funcionalidades de Owner

#### canBeUsedOnlyByTheOwner

* Info: Valor booleano que representa se o item só pode ser usado pelo owner ou não.
  * Isso só funciona se o store item info estiver ativado para que o item tenha um owner.
* Exemplo: 

```yaml
canBeUsedOnlyByTheOwner: false
```

#### cancelEventIfNotOwner

* Info: Valor booleano que representa se o item não for usado pelo owner, então todos os eventos são cancelados. Isso significa que, se o ativador for, por exemplo, PLAYER\_BREAK\_BLOCK, se alguém que não é o owner tentar usar este item, ele não conseguirá quebrar nenhum bloco, pois todos os eventos serão cancelados.
  * Isso só funciona se o store item info estiver ativado para que o item tenha um owner.
* Exemplo: 

```yaml
cancelEventIfNotOwner: false
```

#### onlyOwnerBlackListedActivators

* Info: Lista de ID de ativadores do seu ExecutableItem, esta é uma lista de blacklist que desabilita as funcionalidades habilitadas de canBeUsedOnlyByTheOwner, isso significa que, todos os IDs de ativadores aqui que apontam para um ativador do ExecutableItem poderão ser usados por qualquer pessoa, mesmo se canBeUsedOnlyByTheOwner estiver em true.
  * Isso só funciona se o store item info estiver ativado para que o item tenha um owner.
* Exemplo: 

```yaml
onlyOwnerBlackListedActivators:
- activator0
- activator1
```

### cancelEventIfNoPermission

* Info: Valor booleano que representa se o jogador não tiver a permissão (ei.item.\<id>) para usar o item, então todos os eventos são cancelados. Isso significa que, se o ativador for, por exemplo, PLAYER\_BREAK\_BLOCK, se alguém que não tem permissão para usar este item tentar usá-lo, ele não conseguirá quebrar nenhum bloco, pois todos os eventos serão cancelados.

```yaml
cancelEventIfNoPermission: true
```

### Manter item na morte

* Info: Valor booleano que representa se o jogador vai manter o item após a morte ou não.
* Exemplo: 

```yaml
keepItemOnDeath: true
```

:::info
É compatível com a funcionalidade keepInventory do WorldGuard e com a gamerule keepInventory vanilla
:::

### Disable stack <CustomTag type="premium" />

* Info: Valor booleano que representa impedir ou não que o ExecutableItem seja empilhado. Definir esta funcionalidade como true vai fazer com que o customStackSize deste item seja 1.
* Exemplo: 

```yaml
disableStack: true
```

### customStackSize <CustomTag type="premium" /> <CustomTag type="version" version="1.20.5" />

* Info: Valor integer para definir o tamanho da pilha deste item. Isso vai sobrescrever a quantidade de pilha atual.
* Para entender melhor, o diamond\_sword vanilla tem um tamanho de pilha de 1, já que ele não pode ser empilhado, com esta funcionalidade você pode aumentar esse valor. Por outro lado, a terra (dirt) tem um tamanho de pilha de 64, mas com isso você pode diminuí-lo, para, por exemplo, um tamanho de pilha de 20.
* Exemplo: 

```yaml
customStackSize: 32
```

### Configurações de Variables

* Info: Variables são uma forma de armazenar informações dentro do seu ExecutableItem. Isso permite rastrear quantidades, armazenar posições, na verdade, você pode armazenar o que quiser. Elas ajudam a criar comportamentos de item dinâmicos e personalizáveis, com isso queremos dizer que variables permitem criar comportamentos únicos para cada item ao armazenar e rastrear dados específicos daquele item. Por exemplo, você pode rastrear quantas vezes um jogador usou um item específico ou quantos jogadores ele matou com ele.
  * `variableName`: Nome da variable, será usado como referência com %var\_\<name>% para usá-la no lore, dentro de comandos, etc. Este nome não pode ser "id" ou "usage" ou ter espaços.
  * `type`: VariableType da variable, pode ser um dos seguintes tipos, com exemplos de uso:
    * STRING: Com este tipo de variable você pode armazenar valores STRING, como palavras, números, letras, caracteres, etc. Por exemplo, você pode armazenar o nome do último jogador atingido. Este tipo de variable não suporta aumentar ou diminuir o valor de `variableModification(type:MODIFICATION)`. É estático a menos que seja substituído por um `variableModification(type:SET)` que vai sobrescrever o valor antigo.
    * NUMBER: Com este tipo de variable você pode armazenar valores FLOAT, como números. Por exemplo, se você quiser armazenar a quantidade de blocos quebrados, a quantidade de kills, rastrear os segundos antes de algo acontecer, etc. Este tipo de variable suporta `variableModification(type:MODIFICATION)` e `variableModification(type:SET)`.
    * LIST: Esta variable é uma variable do tipo lista que armazena valores STRING. É útil para armazenar uma lista de coisas, por exemplo, ter o rastreio dos blocos clicados e adicioná-los a esta lista, ou adicionar os jogadores mortos aqui, etc.
  * `isRefreshableClean`: Valor booleano que habilita o refresh clean. Isso permite adicionar linhas de lore personalizadas sem que sejam removidas quando a variable for atualizada. É recomendado deixá-lo em true.
  * `refreshTagDoNotEdit`: Gerado automaticamente pelo plugin. Ajuda as funções do `isRefreshableClean` a funcionarem corretamente. Então apenas não altere isso.
  * `papiParser`: O valor string que contém a string do PlaceholderAPI onde ela contém o valor da variable para fazer o parsing. Seu propósito é permitir que você insira valores de variable dentro de placeholders do PlaceholderAPI e exiba os resultados no lore. 
    * Ex:
      * ID da Variable: `level`
      * Valor da String papiParser: `%math_<VAR>*<VAR>%`
        * A string `<VAR>` representa o valor atual da variable quando feito o parsing. Se você quiser posicionar o valor em várias partes da string do placeholder do PlaceholderAPI, basta digitar `<VAR>` nos lugares onde você precisa que ele esteja.
      * String do Placeholder para colocar no lore: `%var_level_papi%`
* Exemplo
  * ```yaml
    variables:
      var2:
        variableName: ThisVariableIsTypeIntegerAndICanDoModifications
        type: NUMBER
        default: 10.0
      var1:
        variableName: anotherVariable # Esta variable é do tipo string
        type: STRING
        default: '' #Ela começa sem valor, podemos então mudá-la a partir de um ativador ou usando comandos
      var0:
        variableName: nameOfVariable
        type: LIST
        default:
        - value1
        - value2
        - '1'
        - '2'
    ```
* Você pode verificar mais informações na próxima página sobre outros tipos de variables:
  * [SCore variables](/tools-for-all-plugins-score/score-variables)

### Funcionalidade de dar no primeiro join personalizado

* Info: Aqui você pode personalizar a funcionalidade de dar o item quando o jogador entra pela primeira vez no servidor.
  * giveFirstJoin: Valor booleano que representa se a funcionalidade está habilitada ou não
  * giveFirstJoinAmount: Valor integer que representa quantos itens serão dados ao jogador deste ExecutableItem.
  * giveFirstJoinSlot: Slot onde o ExecutableItem será dado ao jogador.
* Exemplo:

```yaml
giveFirstJoinFeatures:
  giveFirstJoin: false
  giveFirstJoinAmount: 1
  giveFirstJoinSlot: 0
```

### Funcionalidade Item Recognition <CustomTag type="premium" />

* Info: Esta funcionalidade permite fazer com que outros itens que não são o ExecutableItem se comportem como se fossem o ExecutableItem que você está editando. Basicamente a ideia é trabalhar com recognitions, é uma lista de tipos de recognitions que, se uma delas corresponder entre o seu ExecutableItem e outro item (mesmo que não seja ExecutableItem), as funcionalidades que o ExecutableItem tem estarão também no outro item. Isso funciona desde que ele seja reconhecido seguindo os requisitos das recognitions.
  * Opções de recognitions disponíveis:
    * NAME:  Isso habilita o reconhecimento para todos os itens que correspondem ao nome personalizado do ExecutableItem
    * MATERIAL: Isso habilita o reconhecimento para todos os itens que correspondem ao material do ExecutableItem
    * LORE: Isso habilita o reconhecimento para todos os itens que correspondem ao lore do ExecutableItem
* Por exemplo, se você criar um ExecutableItem de picareta de diamante, que tem um ativador PLAYER\_RIGHT\_CLICK e nos comandos "SEND\_MESSAGE I am a pickaxe", toda vez que você clicar com o botão direito vai enviar essa mensagem para o chat do minecraft. Agora, se você habilitar item recognition, digamos, para o material, agora TODAS as picaretas de diamante no servidor vão disparar aquele ativador e assim a mensagem será exibida.
* Exemplo: 

```yaml
recognitions:
- NAME
- MATERIAL  
- LORE 
```

* Exemplos de cenários:
  * Se um item EI só tem o item recognition de `MATERIAL` e é um DIAMOND, todos os diamantes que existirem no servidor vão se comportar como aquele item EI
  * Se um item EI só tem o item recognition de `NAME` e é chamado de "\&dAngle", se você tentar usar qualquer item com o nome "\&dAngle", ele vai se comportar como o item EI original. MAS se o nome for "\&eAngle" ou outro nome, não vai funcionar.
  * Se um item EI só tem o item recognition de `LORE`, um item só vai se comportar como o EI se o item tiver EXATAMENTE os mesmos códigos de cor nas linhas do lore e toda letra maiúscula e minúscula idêntica.
  * Se um item EI só tem o item recognition de `MATERIAL` e `NAME`, os itens devem ter o NOME e MATERIAL EXATOS do item EI para o item ser considerado um item EI.
* Tenha em mente que se um dos seus ExecutableItems tiver item recognitions habilitados em MATERIAL, então você não deveria usar mais item recognitions baseados em MATERIAL para outro ExecutableItem com o mesmo MATERIAL. A razão é porque se existirem 2 itens ExecutableItems com o recognition de MATERIAL habilitado e ambos forem DIAMOND\_BLOCK, apenas o primeiro em ordem alfabética será o que terá mais prioridade no caso de alguém disparar um DIAMOND\_BLOCK.

## Funcionalidade de use cooldown <CustomTag type="version" version="1.21.2" />

* Info: Funcionalidade que adiciona um cooldown de uso no estilo vanilla ao item, similar ao cooldown de pérolas de ender ou fruta corus.
  * `cooldownGroup`: Valor string que define um grupo de cooldown. Itens com o mesmo grupo de cooldown vão compartilhar o mesmo cooldown. Deve estar em minúsculas e seguir o formato NamespacedKey (ex.: "mygroup" ou "namespace:mygroup")
  * `vanillaUseCooldown`: Valor integer que representa a duração do cooldown em segundos
* Exemplo:

```yaml
useCooldown:
  cooldownGroup: "custom_weapon_group"
  vanillaUseCooldown: 5
```

:::info
Este cooldown é diferente do sistema de cooldown de ativador. Este é um cooldown vanilla do Minecraft que mostra o item "acinzentado" na hotbar durante o período de cooldown.
:::


## Dependendo do tipo do item

### Funcionalidades de Container

* Info: Aqui você pode personalizar as funcionalidades de container se o bloco for uma instância de container, como o baú e o barril.
  * `isLocked`: Valor booleano que representa se o container está trancado ou não
  * `lockedName`: Valor string que representa o nome da chave se o container estiver trancado. É uma funcionalidade do minecraft, se você tiver um item com o mesmo nome do lockedName, então você conseguirá abrir o baú, caso contrário não.
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

Info: Aqui você pode selecionar as regras das ferramentas.

#### Enable

* Info: Valor booleano para selecionar se as Tool Rules estão habilitadas ou não.
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

* Info: Valor integer para definir o valor de durabilidade que será retirado depois que o ExecutableItem quebrar um bloco. 
* Exemplo:

```yaml
toolRules:
  enable: false
  damagePerBlock: 1
```

#### Regras específicas de ferramenta

* Info: Você pode selecionar a velocidade de mineração, se é possível dropar certos blocos com o ExecutableItem, em ordem de personalização de ferramenta.
  * `miningSpeed`: Valor float para definir a velocidade de mineração do ExecutableItem para os blocos selecionados na tool rule.
  * `correctForDrops`: Valor booleano que representa se o bloco será dropado ou não usando o ExecutableItems.
  * `blocks`: Lista de BLOCKS para aplicar as tool rules.
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

* Info: Funcionalidade que permite ter projéteis já carregados quando o ExecutableItem é um item de besta (crossbow) e é dado ao jogador.
  * O formato do material deve ser como `minecraft:<id>`. Por agora, suporta itens vanilla.
* Exemplo:

```yaml
material: CROSSBOW
chargedProjectiles:
- minecraft:arrow
```

### bundleContent

* Info: Funcionalidade que permite ter itens de conteúdo já presentes se o ExecutableItems for um item de bundle e for dado ao jogador.
  * O formato do material deve ser como `minecraft:<id>`. Por agora, suporta itens vanilla.
* Exemplo:

```yaml
material: BUNDLE
bundleContent:
- minecraft:stone
- minecraft:dirt
```

### Funcionalidades de Firework

* Info: Funcionalidade que permite ter funcionalidades de firework personalizadas se o ExecutableItems for um item de fogos de artifício (firework).
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

Para as cores, você pode usar tanto os [Nomes de cores](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html) normais quanto `RGB-<0-255>-<0-255>-<0-255>`

### Funcionalidades de Spawner <CustomTag type="version" version="1.20.5" />

* Info: Funcionalidade que permite criar spawners personalizados com ExecutableItems
* Configurações:
  * `spawnCount`: Define quantas entidades aparecem em cada spawn
  * `spawnDelay`: Define o delay do primeiro spawn depois de colocar o spawner (em ticks, 20 ticks = 1 segundo)
  * `spawnRange`: O alcance do spawn
  * `requiredPlayerRange`: Define a que distância máxima o jogador deve estar para ativar o spawner
  * `minSpawnDelay`: O delay mínimo entre cada spawn (em ticks, 20 ticks = 1 segundo)
  * `minSpawnDelay`: O delay máximo entre cada spawn (em ticks, 20 ticks = 1 segundo)
  * `maxNearbyEntities`: Máximo de entidades em volta do spawner
  * `addSpawnerNbtToItem`: Se adiciona ou não a tag dos componentes do spawner no item (É melhor deixar false) Quando está false, o plugin só vai adicionar as tags quando o spawner for colocado.
  * `potentialSpawns`: Define os potentialSpawns do seu spawner com peso (weight)

:::tip
É melhor criar seu spawner primeiro no [MCStaker](https://mcstacker.net/?cmd=give), depois dar a você mesmo no jogo e finalmente segurá-lo + fazer /ei create.\
Isso vai importar automaticamente as funcionalidades do spawner para o seu ExecutableItems.
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

* Info: Funcionalidade que permite personalizar o som do chifre de cabra (goat horn) para itens. Esta funcionalidade só funciona para itens de material GOAT_HORN.
  * `enable`: Valor booleano que habilita ou desabilita as funcionalidades de instrument
  * `instrument`: O som do instrumento musical que será tocado quando o goat horn for usado. [Instrumentos musicais](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/MusicInstrument.html)
* Exemplo:

```yaml
material: GOAT_HORN
instrumentFeatures:
  enable: true
  instrument: DREAM_GOAT_HORN
```

### Funcionalidades de Weapon <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Info: Funcionalidade que permite configurar configurações de combate específicas de arma para itens.
  * `enable`: Valor booleano que habilita ou desabilita as funcionalidades de weapon
  * `disableBlockingTime`: Valor integer representando por quanto tempo (em segundos) o escudo do alvo ficará desabilitado depois de ser atingido por esta arma
  * `damagePerAttack`: Valor integer representando o dano de durabilidade que esta arma sofre por ataque (padrão: 5)
* Exemplo:

```yaml
weaponFeatures:
  enable: true
  disableBlockingTime: 3
  damagePerAttack: 2
```


### Funcionalidades de Blocks attacks <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Info: Funcionalidade que permite configurar como itens bloqueiam ataques, de forma similar aos escudos. Isso permite transformar qualquer item em capaz de bloquear dano.
  * `enable`: Valor booleano que habilita ou desabilita as funcionalidades de block attacks
  * `blockDelay`: Valor integer representando o delay em segundos antes do item poder bloquear novamente depois de ser usado
  * `blockSound`: Sound que é tocado ao bloquear um ataque com sucesso
  * `disableSound`: Sound que é tocado quando o bloqueio é desabilitado (depois de ser sobrecarregado)
  * `disableCooldownScale`: Valor double (multiplicador) para quanto tempo a desabilitação do bloqueio dura depois de ser sobrecarregado (padrão: 1.0)
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

#### Configuração de Redução de Dano

Cada entrada de redução de dano tem as seguintes configurações:
* `baseDamageBlocked`: Quantidade base de dano bloqueado (redução fixa)
* `factorDamageBlocked`: Porcentagem de dano bloqueado (0.5 = 50% de redução)
* `horizontalBlockingAngle`: O ângulo em graus a partir do qual ataques podem ser bloqueados (90 = quarto frontal, 180 = metade frontal, 360 = todas as direções). Deve ser maior que 0.
* `damageTypes`: Lista de tipos de dano aos quais esta redução se aplica. Veja [Tipos de Dano](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html) para os tipos disponíveis.

:::tip
Você pode criar "escudos" personalizados com materiais diferentes usando esta funcionalidade. Por exemplo, você poderia fazer um livro que bloqueia dano mágico ou um diamante que bloqueia ataques físicos!
:::
