---
description: >-
  Veja todos os recursos de configuração dos blocos no ExecutableBlocks:
  ativadores, contêineres, fornalhas, funis, displays, colmeias e muito mais.
source_hash: 7bbe17ba1d336968
translated_at: '2026-11-13T18:12:44.258Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Recursos do bloco


## Ativadores

* Recursos muito importantes que permitem adicionar habilidades aos seus blocos
* Wiki dedicada a este recurso: [Lista de ativadores do EB](/executableblocks/configurations/activator-configuration/list-of-the-activators.md) e [Recursos dos ativadores do EB](/executableblocks/configurations/activator-configuration/activators-features.md)


## Configurações básicas

### CreationType

* A forma de criar o EB
  * BASIC\_CREATION
  * DISPLAY\_CREATION
  * IMPORT FROM EI
  * IMPORT FROM ITEMSADDER
  * IMPORT FROM NEXO
  * IMPORT FROM ORAXEN

### MATERIAL

* Info: O item base do Minecraft do Executable Block. [Material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
  * Info extra: O item precisa ser um bloco colocável.

```yaml
material: DIRT
```

:::info
Ele suporta spawners! Então, se você quiser definir um tipo para o seu spawner, adicione:

`spawnerType: CHICKEN`

[Lista de EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
:::


### DISPLAYNAME

* Info: O nome do bloco
* Exemplo: 

```yaml
name: '&cEpic Sword'
```

### LORE

* Info: A lore do bloco
* Exemplo:

```yaml
lore:
- §6>> §e----------- §6<<
- §aClick on this block
- §awhen it is placed !
- §aand see the custom structures !
- §6>> §e----------- §6<<
```

* Placeholders que você pode usar na lore: %player%, [%usage%](block-features.md#hide-usage-1.14+), etc.

### DROP BLOCK IF IT IS BROKEN

* Info: Define se você quer que o seu Executable Block possa ser obtido ao ser quebrado ou não
* Exemplo: 

```yaml
dropBlockIfItIsBroken: true
```

* Obrigatório: NÃO (Padrão: true)

### DROP BLOCK IF IT IS BURNS

* Info: Define se você quer que o seu Executable Block possa ser obtido ao ser quebrado ou não
* Exemplo: 

```yaml
dropBlockIfItIsBurns: true
```

* Obrigatório: NÃO (Padrão: false)

### DROP BLOCK WHEN IT EXPLODES

* Info: Define se você quer que o seu Executable Block possa ser obtido ao ser destruído por qualquer explosão
* Exemplo:

```yaml
dropBlockWhenItExplodes: true
```

* Obrigatório: NÃO (Padrão: true)

### DROP TYPE

* Info: Selecione o tipo de drop que o bloco do EB terá
* Tipos de drop:
  * IN\_THE\_INVENTORY
  * ON\_THE\_GROUND

### ONLY BREAKABLE WITH EI

* Info: Exige ter pelo menos o Executable Item necessário na mão principal ou na mão secundária para quebrar o Executable Block
* Exemplo:

```yaml
onlyBreakableWithEI:
- firework
```

* Obrigatório: NÃO (Padrão: vazio)

### CANBEMOVED

* Info: Define se o bloco pode ser movido usando um pistão ou não.
* Exemplo:

```yaml
canBeMoved: false
```

### EXECUTABLE ITEMS ID

* Info: É basicamente uma opção que permite sincronizar o seu Executable Block com um Executable Item.
  * Info extra: O Executable Block copia o nome, o material e a lore do Executable Item. Portanto, ao tentar editar o nome, o material ou a lore do EB, nada vai mudar. Você precisa editar o nome, o material e a lore do EI para que as mudanças no EB sejam aplicadas
* Exemplo: 

```yaml
executableItem: hack
```

* Obrigatório: NÃO

## Recursos de título 

Ele suporta [DecentHolograms](https://www.spigotmc.org/resources/96927/), [HolographicDisplays](https://dev.bukkit.org/projects/holographic-displays) e [CMI](https://www.spigotmc.org/resources/3742/)

### ACTIVE TITLE 

* Info: Define se o holograma de título estará ativado ou não
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

* (Com HolographicDisplay) Você pode exibir um item no título com ITEM::MATERIAL

```yaml
title: 
- '&7&oDefault title'
- 'ITEM::DIAMOND'
```

* Obrigatório: NÃO

### TITLE ADJUSTMENT 

* Info: Quanto o holograma de título é ajustado para cima ou para baixo em altura
* Exemplo:

```yaml
titleAdjustment: 0.5
```

* Obrigatório: NÃO
  * Info extra: Número positivo para cima, número negativo para baixo

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

## Configurações de uso personalizado

#### USAGE

* Info: O valor de quantas vezes você pode usá-lo. Usado principalmente pela função de modificação de uso dos ativadores.
* Exemplo: 

```yaml
usage: 0
```

Para uso infinito do bloco:

```yaml
usage: -1
```

* Obrigatório: NÃO (Padrão: 0)

:::info
usage: 0 equivale a usage:1, mas não exibe o texto "Remaining use:..." na lore.
:::

## Recursos de contêiner

:::info
Os filtros de itens suportam corretamente a tag `{CUSTOMODELDATA:X}`, então você pode criar um funil que pega apenas um item com uma textura específica
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
No caso de FUNIS (HOPPERS), a whitelist e a blacklist restringem os itens que o funil pode sugar.
:::

### isLocked

* Define se o contêiner está trancado ou não

### lockedName

* Caso esteja trancado, você precisa definir o nome da chave

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

## Recursos de fornalha

### furnaceSpeed

* Permite personalizar a velocidade da sua fornalha.
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

## Recursos direcionais

### forceBlockFaceOnPlace

* Força o bloco a ser colocado voltado para uma determinada direção
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

:::info
`blockFaceOnPlace` só é aplicado quando `forceBlockFaceOnPlace` é `true`. Sem isso, o bloco mantém a direção com a qual foi colocado. Essas opções giram apenas os blocos direcionais (os blocos com um `facing`).

O comando [/eb place](/executableblocks/commands-and-permissions#place-an-eb-at-a-specific-position) também pode receber uma direção, que tem prioridade sobre essas opções.
:::

## Recursos de colmeia <CustomTag type="version" version="1.15" /> {#beehive-features}

Preenche previamente uma colmeia ou um ninho de abelhas quando ele é colocado. Apenas para os ExecutableBlocks cujo material é `BEEHIVE` ou `BEE_NEST` (criados com `BASIC_CREATION` ou `IMPORT_FROM_EXECUTABLE_ITEMS`); as opções não fazem nada nos outros blocos. No editor dentro do jogo, o botão só aparece para esses dois materiais.

As duas opções são opcionais: quando nenhuma delas está definida, o bloco não é modificado e nada é escrito na config.

### honeyLevel

* Info: Nível de mel do bloco colocado, de `0` (vazio) a `5` (cheio, o mel pode ser colhido). Não definido: o nível de mel não é modificado.

### bees

* Info: Número de abelhas colocadas dentro do bloco colocado. Não definido ou `0`: nenhuma abelha. Uma colmeia comporta 3 abelhas por padrão; as abelhas extras não são adicionadas.

* Exemplo:

```yaml
material: BEE_NEST
beehiveFeatures:
  honeyLevel: 5
  bees: 2
```

:::tip
Com um [ativador LOOP e `loopTimerPerBlock: true`](/executableblocks/configurations/activator-configuration/list-of-the-activators#loop-), um ninho de abelhas colhido pode ser colocado novamente (e, assim, preenchido novamente) um tempo fixo após ter sido colocado.
:::

## Recursos de suporte de poções

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

## Recursos de funil

### amountItemsTransferred

* Permite personalizar a quantidade de itens transferidos a cada transferência do funil.
* Aplica-se tanto quando o funil empurra itens para o contêiner para o qual está voltado quanto (desde a 26.11) quando ele puxa itens do contêiner acima dele.
* Exemplo:

```yaml
hopperFeatures:
  amountItemsTransferred: 5
```

## Recursos de display

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

* Se você quer que o display seja alinhado
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

* Com brilho ou não
* Exemplo:

```
DisplayFeatures:
  glow: false
```

### Recursos da zona de interação

* Largura do display
* Altura do display
* Com colisão ou não
* Exemplo:

```
DisplayFeatures:
  InteractionZoneFeatures:
    width: 1.0
    height: 1.0
    isCollidable: false
```

### Click to break

* Quantidade de cliques necessários para quebrar a criação de display
* Exemplo:

```
DisplayFeatures:
  clickToBreak: 3
```

## Chiseled Bookshelf

### occupiedSlots

* Define quais slots (índice 0-5) terão um livro

```
chiseledBookshelfFeatures:
  occupiedSlots:
  - '2'
  - '5'
```

## Cancelamento

### cancelLiquidDestroy

* Info: Cancela a destruição de sementes e cabeças de jogadores por água/lava
* Exemplo: 

```
cancelLiquidDestroy: true
```
