---
description: >-
  Guia completo das funcionalidades de blocos do ExecutableBlocks: ativadores,
  configurações básicas, títulos, contêineres, fornos e displays.
source_hash: 550955941cd1e931
translated_at: '2026-10-03T10:36:02.183Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Funcionalidades de Blocos


## Activators

* Funcionalidades muito importantes que permitem adicionar habilidades aos seus blocos
* Wiki dedicada para esta funcionalidade: [EB Activators list](/executableblocks/configurations/activator-configuration/list-of-the-activators.md) e [EB Activators features](/executableblocks/configurations/activator-configuration/activators-features.md)


## Configurações Básicas

### CreationType

* A forma de criar o EB
  * BASIC\_CREATION
  * DISPLAY\_CREATION
  * IMPORT FROM EI
  * IMPORT FROM ITEMSADDER
  * IMPORT FROM NEXO
  * IMPORT FROM ORAXEN

### MATERIAL

* Info: O item base do Minecraft do bloco executável. [Material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
  * Info extra: O item precisa ser um bloco que possa ser colocado.

```yaml
material: DIRT
```

:::info
Suporta spawners! Então se você quiser definir um tipo para seu spawner adicione:

`spawnerType: CHICKEN`

[EntityType list](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
:::


### DISPLAYNAME

* Info: O nome do bloco
* Exemplo: 

```yaml
name: '&cEpic Sword'
```

### LORE

* Info: O lore do bloco
* Exemplo:

```yaml
lore:
- §6>> §e----------- §6<<
- §aClick on this block
- §awhen it is placed !
- §aand see the custom structures !
- §6>> §e----------- §6<<
```

* Placeholders que você pode usar no lore, %player%, [%usage%](block-features.md#hide-usage-1.14+), etc.

### DROP BLOCK IF IT IS BROKEN

* Info: Se você quer tornar o seu Executable Block obtenível ao ser quebrado ou não
* Exemplo: 

```yaml
dropBlockIfItIsBroken: true
```

* Obrigatório: NÃO (Padrão: true)

### DROP BLOCK IF IT IS BURNS

* Info: Se você quer tornar o seu Executable Block obtenível ao ser quebrado ou não
* Exemplo: 

```yaml
dropBlockIfItIsBurns: true
```

* Obrigatório: NÃO (Padrão: false)

### DROP BLOCK WHEN IT EXPLODES

* Info: Se você quer tornar o seu Executable Block obtenível ao ser destruído por qualquer explosão
* Exemplo:

```yaml
dropBlockWhenItExplodes: true
```

* Obrigatório: NÃO (Padrão: true)

### DROP TYPE

* Info: Selecione o tipo de drop que o bloco EB terá
* Tipos de drop:
  * IN\_THE\_INVENTORY
  * ON\_THE\_GROUND

### ONLY BREAKABLE WITH EI

* Info: Requisitos para ter pelo menos o Executable Item necessário na mão principal ou secundária para quebrar o bloco executável
* Exemplo:

```yaml
onlyBreakableWithEI:
- firework
```

* Obrigatório: NÃO (Padrão: vazio)

### CANBEMOVED

* Info: Se o bloco pode ser movido usando um pistão ou não.
* Exemplo:

```yaml
canBeMoved: false
```

### EXECUTABLE ITEMS ID

* Info: É basicamente uma opção que permite sincronizar seu executable block com um executable item.
  * Info extra: O executable block copia o nome, material e lore do executable item, então quando você tentar editar o nome, material ou lore do eb, nada vai mudar. Você precisa editar o nome, material e lore do ei para que as mudanças no eb aconteçam
* Exemplo: 

```yaml
executableItem: hack
```

* Obrigatório: NÃO

## Funcionalidades de Título 

Suporta [DecentHolograms](https://www.spigotmc.org/resources/96927/), [HolographicDisplays](https://dev.bukkit.org/projects/holographic-displays) e [CMI](https://www.spigotmc.org/resources/3742/)

### ACTIVE TITLE 

* Info: Se o holograma de título estará habilitado ou não
* Exemplo:

```yaml
activeTitle: false
```

* Obrigatório: NÃO

### TITLE NAME 

* Info: O texto exibido do holograma
* Exemplo: 

```yaml
title: '&7&oDefault title'
```

* (Com HolographicDisplay) Você pode exibir um item no tipo de título ITEM::MATERIAL

```yaml
title: 
- '&7&oDefault title'
- 'ITEM::DIAMOND'
```

* Obrigatório: NÃO

### TITLE ADJUSTMENT 

* Info: O quão alto ou baixo é o ajuste da elevação do holograma de título
* Exemplo:

```yaml
titleAdjustment: 0.5
```

* Obrigatório: NÃO
  * Info extra: Número positivo para subir, número negativo para descer

```yaml
titleFeatures:
  # Active the title
  activeTitle: true
  # The title
  title:
   - Hello
   - &6It's support color
   - and %placeholder%
  titleAdjustment: 0.5
```

## Configurações de Uso Personalizado

#### USAGE

* Info: O valor de quantas vezes você pode usá-lo. Usado principalmente para a função de modificação de uso dos ativadores.
* Exemplo: 

```yaml
usage: 0
```

Para uso infinito do bloco use:

```yaml
usage: -1
```

* Obrigatório: NÃO (Padrão: 0)

:::info
usage: 0 é equivalente a usage:1, mas não vai exibir o texto "Remaining use:..." no lore.
:::

## Funcionalidades de Contêiner

:::info
Os filtros de itens suportam corretamente a tag `{CUSTOMODELDATA:X}`, então você pode criar um hopper que suga apenas um item com uma textura específica
:::

### whitelistMaterials

* Aqui você pode adicionar uma lista de materiais que podem ser colocados dentro do seu bloco

```
containerFeatures:
  whitelistMaterials:
  - DIRT
```

### blacklistMaterials

* Aqui você pode adicionar uma lista de materiais que não podem ser colocados dentro do seu bloco

```
containerFeatures:
  blacklistMaterials:
  - STONE
```

:::info
No caso de HOPPERS, a whitelist e a blacklist restringem os itens que o hopper pode sugar.
:::

### isLocked

* Se o contêiner está trancado ou não

### lockedName

* Caso esteja trancado, você precisa selecionar o nome da chave

```
containerFeatures:
  isLocked: true
  lockedName: ThisIsMyKey
```

### inventoryTitle

* O título do inventário do contêiner 

```
containerFeatures:
  inventoryTitle: INVENTORY TITLE
```

## Funcionalidades de Forno

### furnaceSpeed

* Permite personalizar a velocidade do seu forno.
* Exemplo:

```
furnaceFeatures:
  furnaceSpeed: 2.0
```

:::info
Padrão -> 1

2 vezes a velocidade padrão -> 2

Metade da velocidade padrão -> 0.5
:::

### infiniteFuel

* Faz com que o bloco não precise de combustível para funcionar

```
furnaceFeatures:
  infiniteFuel: true
```

### infiniteVisualLit

* Faz com que o bloco pareça estar aceso

```
furnaceFeatures:
  infiniteVisualLit: true
```

### fortuneMultiplier

* Multiplicador do resultado.

```
furnaceFeatures:
  fortuneMultiplier: 5
```

:::info
Pode ser negativo para remover itens do armazenamento de resultado.
:::

### fortuneChance

* Chance de o fortune ser aplicado

```
furnaceFeatures:
  fortuneChance: 0.95
```

## Funcionalidades Direcionais

### forceBlockFaceOnPlace

* Força o bloco a ser colocado olhando em uma determinada direção
* Exemplo:

```
directionalFeatures:
  forceBlockFaceOnPlace: true
```

### blockFaceOnPlace

* Define a face do bloco quando ele é colocado
* Exemplo:

```
directionalFeatures:
  forceBlockFaceOnPlace: true
  blockFaceOnPlace: NORTH
```

## Funcionalidades de Suporte de Fermentação (Brewing Stand)

### brewingStandSpeed

* Permite personalizar a velocidade do seu brewingStand
* Exemplo:

```
brewingStandFeatures:
  brewingStandSpeed: 1.0
```

:::info
Padrão -> 1

2 vezes a velocidade padrão -> 2

Metade da velocidade padrão -> 0.5
:::

## Funcionalidades de Funil (Hopper)

### amountItemsTransferred

* Permite personalizar a quantidade de itens transferidos a cada tick do hopper.
* Exemplo:

```yaml
hopperFeatures:
  amountItemsTransferred: 5
```

## Funcionalidades de Display

### Material

* Material do item que será exibido
* Exemplo:

```
DisplayFeatures:
  material: PAPER
```

### Custom model data

* Custom model data do material que será exibido
* Exemplo:

```
DisplayFeatures:
  customModelData: 3
```

### Scale

* Escala do display
* Exemplo:

```
DisplayFeatures:
  scale: 1
```

### aligned

* Se você quer que o display fique alinhado
* Exemplo:

```
DisplayFeatures:
```
aligned: false

### customPitch

* Selecione o pitch personalizado
* Exemplo:

```
DisplayFeatures:
  customPitch: 1
```

### customY

* Selecione o Y personalizado
* Exemplo:

```
DisplayFeatures:
  customY: 1.0
```

### Glow

* Brilha ou não
* Exemplo:

```
DisplayFeatures:
  glow: false
```

### Funcionalidades de Zona de Interação

* Largura do display
* Altura do display
* Colidível ou não
* Exemplo:

```
DisplayFeatures:
  InteractionZoneFeatures:
    width: 1.0
    height: 1.0
    isCollidable: false
```

### Click to break

* Quantidade de cliques necessários para quebrar a criação do display
* Exemplo:

```
DisplayFeatures:
  clickToBreak: 3
```

## Chiseled Bookshelf

### occupiedSlots

* Define quais slots (Índice 0-5) terão um livro

```
chiseledBookshelfFeatures:
  occupiedSlots:
  - '2'
  - '5'
```

## Cancel

### cancelLiquidDestroy

* Info: Vai cancelar a destruição de sementes e cabeças de jogador por água/lava
* Exemplo: 

```
cancelLiquidDestroy: true
```
