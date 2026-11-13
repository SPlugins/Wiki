---
description: >-
  Aprenda a configurar restrições e resistências de itens no ExecutableItems,
  global ou individualmente, para personalizar o comportamento dos seus itens.
source_hash: bf6b77f864065099
translated_at: '2026-11-13T18:15:27.620Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Restrições/Resistências de itens

Nesta página você vai aprender sobre as restrições de itens e algumas resistências, que permitem personalizar o comportamento do item em certos casos.

## Restrições globais

* Info: Se você quiser adicionar uma das restrições de item a todos os itens que criou no plugin, adicione a configuração da(s) restrição(ões) desejada(s) dentro do arquivo config.yml do plugin.
* Exemplo: Quero adicionar as restrições de não usar bigorna e pedra de amolar a todos os ExecutableItems já criados e que ainda serão criados


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

Nesta seção você vai aprender a adicionar uma restrição individual apenas para o ExecutableItem que você está editando no momento.

### Cancelar o drop do item

* Info: Valor booleano que impede o jogador de dropar o executable item.
* Nota: quando o item não pode voltar para o inventário (por exemplo, ele estava no cursor enquanto o inventário foi fechado e todos os slots estão cheios), o drop é permitido em vez de o item ser deletado.
* Exemplo:

```yaml
restrictions:
  cancel-item-drop: true
```

### Cancelar a colocação do bloco no chão.

* Info: Valor booleano que impede o jogador de colocar os Executable Items no chão caso o item seja uma instância de bloco.
* Exemplo:

```yaml
restrictions:
  cancel-item-place: true
```

### Cancelar o uso do item em qualquer receita na mesa de trabalho

* Info: Valor booleano que impede o jogador de criar receitas vanilla com o ExecutableItem.
* Exemplo:

```yaml
restrictions:
  cancel-item-craft: true
```

### Cancelar o uso do item apenas em receitas vanilla, sem afetar as personalizadas

* Info: Valor booleano que impede o jogador de criar receitas vanilla com o ExecutableItem, mas ele ainda pode ser usado em receitas de criação personalizadas.
* Exemplo:

```yaml
restrictions:
  cancel-item-craft-no-custom: true
```

### Cancelar a interação para decorar vasos do Minecraft

* Info: Valor booleano que impede o jogador de colocar os ExecutableItems nos vasos decorados.
* Exemplo:

```yaml
restrictions:
  cancel-decorated-pot: true
```

### Cancelar a colocação do item em uma prateleira

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem em uma prateleira (Minecraft 1.21.9+, todos os tipos de madeira).
  * Útil para um item que se devolve por meio dos seus ativadores (por exemplo, um balde de água "infinito"): sem ela, o item colocado na prateleira permanece lá enquanto o ativador entrega um novo.
* Exemplo:

```yaml
restrictions:
  cancel-shelf: true
```

### Cancelar o depósito do item em um armazenamento

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem na seguinte lista:
  * Baú
  * Baú do Ender
  * Baú com armadilha
  * Barril
  * Caixa de shulker
* Exemplo: (Este recurso não funciona no modo criativo)

```yaml
restrictions:
  cancel-deposit-in-chest: true
```

### Cancelar o depósito do item em uma fornalha

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem na seguinte lista:
  * Fornalha
  * Alto-forno
  * Defumador
* Exemplo: (Este recurso não funciona no modo criativo)

```yaml
restrictions:
  cancel-deposit-in-furnace: true
```

### Cancelar a queima do item no fogo e na lava

* Info: Valor booleano que impede o ExecutableItem de queimar no fogo ou na lava.
* Exemplo:

```yaml
restrictions:
  cancel-item-burn: true
```

### Cancelar a exclusão do item por interação com cacto

* Info: Valor booleano que impede o ExecutableItem de ser deletado ao tocar em um bloco de cacto.
* Exemplo:

```yaml
restrictions:
  cancel-item-delete-by-cactus: true
```

### Cancelar a exclusão do item ao ser atingido por um raio

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

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de uma bigorna. Isso impede a colocação, e portanto também impede renomear e encantar.
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

:::tip
Um item que é reparado ou encantado em uma bigorna **sem ser renomeado** mantém seu nome colorido / com gradiente graças a [keepNameInAnvil](/executableitems/configurations/general-configuration#keepnameinanvil) (ativado por padrão). Essa opção fica em `plugins/ExecutableItems/config.yml`, não no arquivo do item.
:::

### Cancelar a ação de encantar usando uma bigorna

* Info: Valor booleano que impede o jogador de encantar o ExecutableItem usando uma bigorna.
* Exemplo:

```yaml
restrictions:
  cancel-enchant-anvil: true
```

### Cancelar a interação do item com cavalo/mula/lhama

* Info: Valor booleano que impede os ExecutableItems de interagir com cavalos/mulas/lhamas. Isso também desativa o armazenamento.
* Exemplo:

```yaml
restrictions:
  cancel-horse: true
```

### Cancelar o consumo/ingestão do item

* Info: Valor booleano que impede o jogador de consumir ou comer o ExecutableItem.
* Exemplo:

```yaml
restrictions:
  cancel-consumption: true
```

### Cancelar o uso do item dentro do bloco de criação automática (crafter)

* Info: Valor booleano que impede o jogador de colocar os ExecutableItems dentro de um bloco crafter.
* Config: `cancel-crafter: false`

```yaml
restrictions:
  cancel-crafter: true
```

### Restrição de bloqueio no inventário

* Info: Valor booleano que faz o ExecutableItem permanecer no slot onde está e impede o jogador de movê-lo de qualquer forma possível.
* Exemplo (Este recurso não funciona no modo criativo)

```yaml
restrictions:
  locked-in-inventory: true
```

### Cancelar interações de ferramenta

* Info: Valor booleano que impede o jogador de usar o ExecutableItem para acionar interações de ferramenta. Ex.: (clicar com o botão direito em um bloco usando um machado para descascá-lo, usar uma enxada para arar um bloco de grama)
* Exemplo:

```yaml
restrictions:
  cancel-tool-interactions: true
```

### Cancelar a colocação do item dentro de uma moldura

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de uma moldura.
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

### Cancelar a interação com uma pedra de amolar

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de uma pedra de amolar.
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

### Cancelar a interação com uma estande de poções 

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de um estande de poções.
* Exemplo:

```yaml
restrictions:
  cancel-brewing: true
```

### Cancelar a interação com um sinalizador

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de um sinalizador.
* Exemplo:

```yaml
restrictions:
  cancel-beacon: true
```

### Cancelar a interação com uma mesa de cartografia

* Info: Impede o jogador de colocar o ExecutableItem dentro de uma mesa de cartografia.
* Exemplo:

```yaml
restrictions:
  cancel-cartography: true
```

### Cancelar a interação com um bloco de composteira

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de uma composteira.
* Exemplo:

```yaml
restrictions:
  cancel-composter: true
```

### Cancelar a interação com um bloco de dispensador.

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de um bloco de dispensador.
* Exemplo:

```yaml
restrictions:
  cancel-dispenser: true
```

### Cancelar a interação com um bloco de liberador

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de um bloco de liberador.
* Exemplo:

```yaml
restrictions:
  cancel-dropper: true
```

### Cancelar a interação com um bloco de funil

* Info: Valor booleano que impede o jogador de colocar os itens ExecutableItem dentro de um funil. Isso significa deixar o item dentro do contêiner do funil. Isso não impede o item de entrar no funil quando é dropado em cima dele.
* Exemplo:

```yaml
restrictions:
  cancel-hopper: true
```

### Cancelar a interação com um bloco de atril

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de um bloco de atril.
* Exemplo:

```yaml
restrictions:
  cancel-lectern: true
```

### Cancelar a interação com um aldeão comerciante/mercador

* Info: Valor booleano que impede o jogador de colocar o ExecutableItem dentro de uma troca de aldeão/mercador.
* Exemplo:

```yaml
restrictions:
  cancel-merchant: true
```

### Cancelar a troca de item entre as mãos

* Info: Valor booleano que impede o jogador de trocar os itens de uma mão para a outra. Geralmente usando F no teclado para "Swap items with offhand"
* Exemplo:

```yaml
restrictions:
  cancel-swap-hand: true
```

### Cancelar a interação de uma trompa

* Info: Valor booleano que impede o jogador de tocar a trompa caso o ExecutableItem seja uma trompa.
* Exemplo:

```yaml
restrictions:
  cancel-horn: true
```

### CANCELAR SUPORTE DE ARMADURA

* Info: Impede o jogador de colocar o ExecutableItem em um suporte de armadura.
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

### CANCELAR COLOCAÇÃO EM PACOTE

* Info: Impede o jogador de colocar o ExecutableItem dentro de um pacote.
* Exemplo:

```yaml
restrictions:
  cancel-place-in-bundle: true
```
