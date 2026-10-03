---
description: >-
  Veja como configurar restrições e resistências de itens no ExecutableItems,
  plugin do SPlugins, de forma global ou individual.
source_hash: 6712e593bf883efe
translated_at: '2026-10-03T10:32:54.999Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Restrições/Resistências de Item

Nesta página você vai aprender sobre restrições de item e algumas resistências, isso vai te permitir personalizar o comportamento em certos casos do item.

## Restrições globais

* Info: Se você gostaria de adicionar uma das restrições de item a todos os itens que você fez no plugin, você pode adicionar a configuração da restrição (ou restrições) que você quer dentro do arquivo config.yml do plugin.
* Exemplo: Eu gostaria de adicionar as restrições de não usar bigorna e pedra de afiar a todos os ExecutableItems criados e a serem criados


```yaml
# ----------------------------------
# -
#       ExecutableItems
# -
#         By: Ssomar
# -
# ----------------------------------
# -
# WIKI HERE : https://splugins.net/docs/executableitems/information-ei
# DISCORD HERE : https://discord.com/invite/TRmSwJaYNv
# -

## Start of default config features
pickup-limit: -1
disable-world: [ ]
premium-enable-cooldown-for-op: true #Premium only
checkVersionMsg: true
disableTestItems: false # If you have a big server with a lot of players, it's recommended to turn this option on true
silentEIGive: false
silentMessagePreventionErrorHeadDBError: false
disableBackup: false #<- Backup your items config at each start / reload of the server
deleteBackupsAfterDays: 7 #<- It will deletes backups older than this number of days
## End of default config features
## 
## Start for manually added restrictions to apply on all ExecutableItems
restrictions:
  cancel-anvil: true
  cancel-grind-stone: true
## End for manually added restrictions to apply on all ExecutableItems
```


## Restrições individuais

Nesta seção você vai aprender como adicionar uma restrição individual apenas para o ExecutableItem que você está editando no momento.

### Cancelar o drop do item

* Info: Valor booleano que impede o jogador de dropar o executable item.
* Nota: quando o item não pode voltar para o inventário (por exemplo, ele estava no cursor enquanto o inventário estava fechado e todos os slots estão cheios), o drop é permitido ao invés do item ser deletado.
* Exemplo:

```yaml
restrictions:
  cancel-item-drop: true
```

### Cancelar a colocação do bloco no chão.

* Info: Valor booleano que impede o jogador de colocar os Executable Items caso o item seja uma instância de bloco no chão.
* Exemplo:

```yaml
restrictions:
  cancel-item-place: true
```

### Cancelar o uso do item em qualquer receita na mesa de crafting

* Info: Valor booleano que impede o jogador de craftar receitas vanilla com o ExecutableItem.
* Exemplo:

```yaml
restrictions:
  cancel-item-craft: true
```

### Cancelar o uso do item apenas em receitas vanilla, sem afetar as personalizadas

* Info: Valor booleano que impede o jogador de craftar receitas vanilla com o Executableitem, mas ainda pode ser usado para receitas de crafting personalizadas.
* Exemplo:

```yaml
restrictions:
  cancel-item-craft-no-custom: true
```

### Cancelar a interação para decorar vasos do minecraft

* Info: Valor booleano que impede o jogador de colocar os ExecutableItems nos vasos decorados
* Exemplo:

```yaml
restrictions:
  cancel-decorated-pot: true
```

### Cancelar o depósito do item em um armazenamento

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem na seguinte lista:
  * Chest
  * Ender Chest
  * Trapped Chest
  * Barrel
  * Shulker Box
* Exemplo: (Esse recurso não funciona no criativo)

```yaml
restrictions:
  cancel-deposit-in-chest: true
```

### Cancelar o depósito do item em uma fornalha

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem na seguinte lista:
  * Furnace
  * Blast Furnace
  * Smoker
* Exemplo: (Esse recurso não funciona no criativo)

```yaml
restrictions:
  cancel-deposit-in-furnace: true
```

### Cancelar a queima do item em fogo e lava

* Info: Valor booleano que impede o ExecutableItem de queimar em fogo ou lava.
* Exemplo:

```yaml
restrictions:
  cancel-item-burn: true
```

### Cancelar a deleção do item por interação com cacto

* Info: Valor booleano que impede o ExecutableItem de ser deletado ao tocar em um bloco de cacto.
* Exemplo:

```yaml
restrictions:
  cancel-item-delete-by-cactus: true
```

### Cancelar a deleção do item quando atingido por um raio

* Info: Valor booleano que impede o ExecutableItem de ser deletado quando um raio o atinge.
* Config: `cancel-item-delete-by-lightning: true`
* Exemplo:

```yaml
restrictions:
  cancel-item-delete-by-lightning: true
```

### Cancelar o encantamento do item

* Info: Valor booleano que impede o item de ser encantado 
* Exemplo:

```yaml
restrictions:
  cancel-enchant: true
```

### Cancelar a colocação do item dentro de uma bigorna

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de uma bigorna. Isso por fim impede a colocação, então impede renomear e encantar também.
* Exemplo:

```yaml
restrictions:
  cancel-anvil: true
```

### Cancelar a ação de renomear usando uma bigorna

* Info: Valor booleano que impede o jogador de renomear o ExecutableItem usando uma bigorna.
* Exemplo:

```yaml
restrictions:
  cancel-rename-anvil: true
```

### Cancelar a ação de encantar usando uma bigorna

* Info: Valor booleano que impede o jogador de encantar o ExecutableItem usando uma bigorna.
* Exemplo:

```yaml
restrictions:
  cancel-enchant-anvil: true
```

### Cancelar a interação do item com cavalo/mula/lhama

* Info: Valor booleano que impede os ExecutableItems de interação com cavalos/mulas/lhamas. Isso desabilita o armazenamento também.
* Exemplo:

```yaml
restrictions:
  cancel-horse: true
```

### Cancelar o consumo/comer do item

* Info: Valor booleano que impede o jogador de consumir ou comer o ExecutableItem.
* Exemplo:

```yaml
restrictions:
  cancel-consumption: true
```

### Cancelar o uso do item dentro do bloco crafter

* Info: Valor booleano que impede o jogador de colocar os ExecutableItems dentro de um bloco crafter.
* Config: `cancel-crafter: false`

```yaml
restrictions:
  cancel-crafter: true
```

### Restrição de bloqueado no inventário

* Info: Valor booleano que faz o ExecutableItem ficar no slot onde está e impede o jogador de movê-lo de qualquer forma possível.
* Exemplo (Esse recurso não funciona no criativo)

```yaml
restrictions:
  locked-in-inventory: true
```

### Cancelar interações de ferramenta

* Info: Valor booleano que impede o jogador de usar o ExecutableItem para acionar interações de ferramenta. ex. (Clicar com o botão direito em um bloco usando um machado para descascá-lo, Usar uma enxada para cultivar um bloco de grama)
* Exemplo:

```yaml
restrictions:
  cancel-tool-interactions: true
```

### Cancelar a colocação do item dentro de um item frame

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de um item frame.
* Exemplo:

```yaml
restrictions:
  cancel-item-frame: true
```

### Cancelar a interação com uma mesa de ferraria

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de uma mesa de ferraria.
* Exemplo:

```yaml
restrictions:
  cancel-smithing-table: true
```

### Cancelar a interação com uma pedra de afiar

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de uma pedra de afiar.
* Exemplo:

```yaml
restrictions:
  cancel-grind-stone: true
```

### Cancelar a interação com um cortador de pedra

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de um cortador de pedra.
* Exemplo:

```yaml
restrictions:
  cancel-stone-cutter: true
```

### Cancelar a interação com um suporte de fermentação 

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de um suporte de fermentação.
* Exemplo:

```yaml
restrictions:
  cancel-brewing: true
```

### Cancelar a interação com um farol

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de um farol.
* Exemplo:

```yaml
restrictions:
  cancel-beacon: true
```

### Cancelar a interação com um bloco de cartografia

* Info: Impede o jogador de colocar o ExecutableItem dentro de um bloco de cartografia.
* Exemplo:

```yaml
restrictions:
  cancel-cartography: true
```

### Cancelar a interação com um bloco de compostagem

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de um compostador.
* Exemplo:

```yaml
restrictions:
  cancel-composter: true
```

### Cancelar a interação com um bloco dispenser.

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de um bloco dispenser.
* Exemplo:

```yaml
restrictions:
  cancel-dispenser: true
```

### Cancelar a interação com um bloco dropper

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de um bloco dropper.
* Exemplo:

```yaml
restrictions:
  cancel-dropper: true
```

### Cancelar a interação com um bloco hopper

* Info: Valor booleano que impede o jogador de colocar os itens ExecutableItem dentro de um hopper. Isso significa deixar o item dentro do container do hopper. Isso não impede o item de entrar no hopper via item dropado em cima do hopper.
* Exemplo:

```yaml
restrictions:
  cancel-hopper: true
```

### Cancelar a interação com um bloco lectern

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de um bloco lectern.
* Exemplo:

```yaml
restrictions:
  cancel-lectern: true
```

### Cancelar a interação com um comerciante/vendedor aldeão

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de um comércio de aldeão/mercador.
* Exemplo:

```yaml
restrictions:
  cancel-merchant: true
```

### Cancelar a troca de item de mão

* Info: Valor booleano que impede o jogador de trocar os itens de uma mão para a outra. Geralmente usando F no teclado para "Swap items with offhand"
* Exemplo:

```yaml
restrictions:
  cancel-swap-hand: true
```

### Cancelar a interação de uma buzina

* Info: Valor booleano que impede o jogador de tocar a buzina caso o ExecutableItem seja uma buzina.
* Exemplo:

```yaml
restrictions:
  cancel-horn: true
```

### CANCELAR ARMOR STAND

* Info: Impede o jogador de colocar o ExecutableItem em um armor stand.
* Exemplo:

```yaml
restrictions:
  cancel-armorstand: true
```

### CANCELAR SPAWNER

* Info: Impede o jogador de usar o ovo de spawn do ExecutableItem em um spawner da forma vanilla.
* Exemplo:

```yaml
restrictions:
  cancel-spawner: true
```

### CANCELAR COLOCAÇÃO EM BUNDLE

* Info: Impede o jogador de colocar o ExecutableItem dentro de um bundle.
* Exemplo:

```yaml
restrictions:
  cancel-place-in-bundle: true
```
