---
description: >-
  Guia do plugin ExecutableItems sobre as opções usadas para criar itens simples
  ou complexos através dos activators.
source_hash: c1b2157347497341
translated_at: '2026-10-03T10:23:00.878Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';
import GeneralActivatorsFeatures from '@site/docs/_partials/general-activators-features.md';
import BlockFeatures from '@site/docs/_partials/block-features.md';
import EntityFeatures from '@site/docs/_partials/entity-features.md';
import TargetPlayerFeatures from '@site/docs/_partials/target-player-features.md';
import PlayerFeatures from '@site/docs/_partials/player-features.md';
import TargetItemFeatures from '@site/docs/_partials/target-item-features.md';
import CommandFeatures from '@site/docs/_partials/command-features.md';
import DropFeatures from '@site/docs/_partials/drop-features.md';
import EffectFeatures from '@site/docs/_partials/effect-features.md';
import DamageCauseFeatures from '@site/docs/_partials/damagecause-features.md';
import DelayFeatures from '@site/docs/_partials/delay-features.md';
import ClickFeatures from '@site/docs/_partials/click-features.md';
import InputFeatures from '@site/docs/_partials/input-features.md';
import TypeTargetFeatures from '@site/docs/_partials/typetarget-features.md';


# Funcionalidades dos activators

Todas essas funcionalidades estão dentro do activator, como lembrete, os activators permitem que você execute ações personalizadas no seu ExecutableItem, ele pode ter condições, executar comandos, ter cooldown, etc.

As funcionalidades premium são identificadas com a tag: <CustomTag type="premium" />

## Funcionalidades gerais de um activator

<GeneralActivatorsFeatures />

## Funcionalidades para activators de EI

### Detailed slots

* Info: Lista de valores inteiros que representam os slots do inventário onde o activator poderá funcionar. Isso significa que, se o evento ocorrer em um slot que não esteja nesta lista, o activator não será acionado.

![](https://media.ssomar.com/m/docs-img-slots-info.png)
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    detailedSlots:
  - -1 # Slot for mainhand, this is not a static slot but having it on mainhand
  - 40 # This is a static slot, it represents the offhand slot.
```

### Auto update item

* Info: Essa funcionalidade do activator faz com que o item seja atualizado em uma das funcionalidades da lista. Tenha cuidado! Isso pode não ser necessário dependendo do que você deseja. Há coisas que são atualizadas automaticamente, por exemplo, comandos no activator, condições, cooldown, etc são atualizados automaticamente sem essa funcionalidade.
* Essa funcionalidade afeta principalmente os aspectos visuais do item, então se você criou uma vez um ExecutableItem com id\:ex\_sword com um display name de "\&dExcalibur" e distribuiu esse item para todos os jogadores, e agora gostaria que todos os ExecutableItems "ex\_sword" tivessem o novo display name "\&eEpic Sword", então você precisaria habilitar essa funcionalidade em um dos activators do item. Habilitando a funcionalidade (autoUpdateItem) + a funcionalidade de atualização de nome (updateName).
* Para deixar bem explicado, essa funcionalidade vai sobrescrever o valor atual dependendo das opções que você habilitou com a opção atual do arquivo de configuração, e ela só é usada para funcionalidades visuais. Não é necessária para mudanças comuns que não envolvem as opções dessa funcionalidade.
  * `autoUpdateItem`: Valor booleano que representa se essa funcionalidade está habilitada ou não para o activator.
  * `updateName`: Valor booleano para atualizar o display name do ExecutableItem. Se for true, vai sobrescrever o display name atual do item com o nome atual/atualizado do item definido no arquivo de configuração do ExecutableItem.
  * `updateLore`: Valor booleano para atualizar o lore do ExecutableItem. Se for true, vai sobrescrever o lore atual do item com o lore atual/atualizado definido no arquivo de configuração do ExecutableItem.
  * `updateDurability`: Valor booleano para atualizar a durabilidade atual do ExecutableItem. Se for true, vai sobrescrever a durabilidade atual do item com a durabilidade atual/atualizada definida no arquivo de configuração do ExecutableItem.
  * `updateAttributes`: Valor booleano para atualizar todos os atributos do ExecutableItem. Se for true, vai sobrescrever os atributos atuais do item com os atributos atuais/atualizados definidos no arquivo de configuração do ExecutableItem.
  * `updateEnchants`: Valor booleano para atualizar os encantamentos do ExecutableItem. Se for true, vai sobrescrever os encantamentos atuais do item com os encantamentos atuais/atualizados definidos no arquivo de configuração do ExecutableItem.
  * `updateCustomModelData`: Valor booleano para atualizar o valor do CustomModelData do ExecutableItem. Se for true, vai sobrescrever o CustomModelData atual do item com o valor de customModelData atual/atualizado definido no arquivo de configuração do ExecutableItem.
  * `updateArmorSettings`: Valor booleano para atualizar as configurações de armadura do ExecutableItem. Se for true, vai sobrescrever as configurações de armadura atuais do item com as configurações de armadura atuais/atualizadas definidas no arquivo de configuração do ExecutableItem. ex. (Cor da armadura)
  * `updateMaterial`: Valor booleano para atualizar o material do ExecutableItem. Se for true, vai sobrescrever o material atual do item com o material atual/atualizado definido no arquivo de configuração do ExecutableItem.
  * `updateHiders`: Valor booleano para atualizar a configuração de hiders do ExecutableItem. Se for true, vai sobrescrever a configuração de hiders atual com a configuração de hiders atual/atualizada definida no arquivo de configuração do ExecutableItem.
  * `updateEquippable`: Valor booleano para atualizar a configuração de hiders do ExecutableItem. Se for true, vai sobrescrever o componente equippable atual do item com a configuração equippable atual/atualizada definida no arquivo de configuração do ExecutableItem.
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    autoUpdateItem: false
    updateName: false
    updateLore: false
    updateDurability: false
    updateAttributes: false
    updateEnchants: false
    updateCustomModelData: false
    updateArmorSettings: false
    updateMaterial: false
    updateHiders: false
    updateEquippable: false
```

<PlayerFeatures />

### worldConditions

* Info: Você pode usar essas condições em todos os tipos de activators
* [World conditions](/tools-for-all-plugins-score/custom-conditions/world-conditions.md)

### placeholdersConditions

* Info: Você pode usar essas condições em todos os tipos de activators
* [PlaceholdersConditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions.md)

### itemConditions

* Info: Você pode usar essas condições em todos os tipos de activators
* [Item conditions](/tools-for-all-plugins-score/custom-conditions/item-conditions.md)


### otherEICooldowns

* Info: Essa funcionalidade permite aplicar cooldown de jogador a ExecutableItems específicos e, opcionalmente, a activators específicos.
  * `executableItem`: ID do ExecutableItem ao qual você quer aplicar o cooldown.
  * `activators`: Lista de strings que são o ID dos activators que você quer afetar no ExecutableItem especificado com cooldown. Se nenhum for selecionado, o cooldown será aplicado a todos os activators do ExecutableItem especificado.
  * `cooldown`: Valor inteiro que será a quantidade de tempo de cooldown aplicada.
  * `isCooldownInTicks`: Valor booleano que representa se o valor de cooldown será em segundos ou em ticks. (20 ticks = 1 segundo)
* Dicas:
  * Você pode especificar o próprio ExecutableItem que executa essa funcionalidade. Por exemplo, se você quiser que um activator aplique cooldown a outro activator no mesmo item.
  * Outra ideia pode ser aplicar cooldown a todos os itens relacionados a dano se você usar um deles.
  * Outro exemplo seria usar essa funcionalidade para permitir que o jogador escolha um entre diferentes ExecutableItems, quando ele escolhe um e o aciona, ele não pode usar nem o escolhido, porque está em cooldown, nem os outros, porque também estão em cooldown.
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    otherEICooldowns:
      cd1: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns list
        executableItem: test 
        activators: 
        - activator0 
        cooldown: 20 
        isCooldownInTicks: false
      cd0: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns
        executableItem: swordSharpness
        activators: [] 
        cooldown: 10
        isCooldownInTicks: false
```


## Funcionalidades exclusivas dependendo do tipo de activator

Para tornar mais compreensível em quais pontos os activators funcionam, vamos criar 4 tipos de categorias para agrupar os activators, então se uma das funcionalidades mencionar uma dessas categorias, você saberá que a funcionalidade funciona para todos os activators dessa categoria.

* <CustomTag type="player_block" />: Descreve activators que envolvem o jogador que acionou o ExecutableItem e um bloco envolvido no activator. Abreviação \[P\_B]
  * PLAYER\_ALL\_CLICK (com a funcionalidade typeTarget: ONLY\_BLOCK)
  * PLAYER\_BLOCK\_BREAK <CustomTag type="premium" compact />
  * PLAYER\_BLOCK\_PLACE <CustomTag type="premium" compact />
  * PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FISH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_HARVEST\_BLOCK
  * PLAYER\_LEFT\_CLICK (com a funcionalidade typeTarget: ONLY\_BLOCK)
  * PLAYER\_RIGHT\_CLICK (com a funcionalidade typeTarget: ONLY\_BLOCK)
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * Etc, mais informações em [Activators info](list-of-the-activators)
* <CustomTag type="player_entity" />: Descreve activators que envolvem o jogador que acionou o ExecutableItem e uma entidade envolvida no activator. Abreviação \[P\_E]
  * PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_BUCKET\_ENTITY
  * PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_CUSTOM\_LAUNCH (A entidade é o projétil que está sendo lançado) <CustomTag type="premium" compact />
  * PLAYER\_DISMOUNT <CustomTag type="premium" compact />
  * PLAYER\_FISH\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_KILL\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * Etc, mais informações em [Activators info](list-of-the-activators)
* <CustomTag type="player_target" />: Descreve activators que envolvem o jogador que acionou o ExecutableItem e outro jogador, referido como o "alvo", que é tratado como alvo ou inimigo. Abreviação \[P\_T]
  * PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_CLICK\_ON\_PLAYER
  * PLAYER\_FISH\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_HIT\_PLAYER
  * PLAYER\_KILL\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
  * Etc, mais informações em [Activators info](list-of-the-activators)
* <CustomTag type="specific_activators" /> Se houver uma funcionalidade que contenha diferentes activators entre as categorias, é melhor para a compreensão criar uma nova lista temporal, que será mencionada na funcionalidade. Abreviação \[S\_A]

## Para \[P\_B] <CustomTag type="player_block" />

<BlockFeatures />

## Para \[P\_E] <CustomTag type="player_entity" />

<EntityFeatures />

## Para \[P\_T] <CustomTag type="player_target" />

<TargetPlayerFeatures />

## Para \[S\_A] <CustomTag type="specific_activators" />

<TargetItemFeatures />
* Para:
  * PLAYER_DROP_ITEM
  * PLAYER_CONSUME
  * EI_CLICK_ON_ANOTHER_INVENTORY_ITEM
  * EI_CLICKED_BY_ANOTHER_INVENTORY_ITEM


### mustBeAProjectileLaunchWithTheSameEI

* Tipo de categoria do activator: Specific Activator List
  * PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
* Info: Funcionalidade do activator relacionada a projéteis, ela afeta se o activator deve funcionar com projéteis não lançados pelo mesmo EI.
  * Exemplo, há um activator PROJECTILE\_HIT\_ENTITY, detailedSlots: \[all slots] e em playerCommands: \["say hi"]
    * Se a funcionalidade estiver habilitada, ela só vai funcionar se esse ExecutableItem tiver outro activator que tenha o comando LAUNCH, então o projétil será lançado a partir do EI e a condição será atendida
    * Se a funcionalidade estiver desabilitada, todos os projéteis, como: arco vanilla, bola de neve vanilla, projéteis de outros ExecutableItems e o projétil do próprio ExecutableItem vão acionar o activator.
* Importante: Quando `mustBeAProjectileLaunchWithTheSameEI` está `true`, o plugin não pode garantir com 100% de certeza qual slot específico do inventário continha o item no momento do lançamento. Ele ativa a primeira cópia correspondente do EI encontrada no inventário do jogador. Por esse motivo, **sempre configure o `detailedSlots` do activator para incluir todos os slots**, não restrinja apenas à mão principal. Se o activator estiver limitado à mão principal, ele pode falhar ao acionar se o item correspondente for avaliado a partir de outro slot primeiro.
  * Exemplo:

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: PROJECTILE_HIT_ENTITY
    mustBeAProjectileLaunchWithTheSameEI: true
    detailedSlots: [] # Empty list = all slots (-1 through 40)
```

<DamageCauseFeatures />
* Para:
  * PLAYER_BLOCK_HIT_OF_ENTITY
  * PLAYER_BLOCK_HIT_OF_PLAYER
  * PLAYER_DEATH
  * PLAYER_HIT_ENTITY
  * PLAYER_HIT_PLAYER
  * PLAYER_RECEIVE_HIT_BY_ENTITY
  * PLAYER_RECEIVE_HIT_BY_PLAYER
  * PLAYER_RECEIVE_HIT_GLOBAL

<EffectFeatures />
* Para:
  * PLAYER_RECEIVE_EFFECT

<CommandFeatures />
* Para:
  * PLAYER_WRITE_COMMAND

<DropFeatures />
* Para:
  * PLAYER_BLOCK_BREAK
  * PLAYER_FISH_FISH
  * PLAYER_KILL_ENTITY
  * PLAYER_KILL_PLAYER

<TypeTargetFeatures />
* Para
  * PLAYER\_ALL\_CLICK
  * PLAYER\_RIGHT\_CLICK
  * PLAYER\_LEFT\_CLICK

<ClickFeatures />
* Para:
  * PLAYER_CLICK_ON_ENTITY
  * PLAYER_CLICK_ON_PLAYER
  * INVENTORY_CLICK

<DelayFeatures />
* Para:
  * LOOP

<InputFeatures />
* Para:
  * PLAYER_INPUT
