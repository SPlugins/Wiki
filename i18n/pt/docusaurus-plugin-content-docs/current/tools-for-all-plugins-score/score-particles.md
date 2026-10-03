---
description: >-
  Guia do plugin SCore sobre as formas de partículas pré-feitas, seus comandos e
  configurações disponíveis.
source_hash: ed81d3ba4c1a5e8c
translated_at: '2026-10-03T10:35:18.271Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ✨    Partículas do SCore

<iframe width="560" height="315" src="https://www.youtube.com/embed/_GavkHnQcvg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

O SCore inclui muitas formas de partículas pré-feitas da biblioteca XParticle e algumas outras personalizadas.

## Como exibir as partículas

O comando para exibir a partícula é `/score particles`

Você precisará selecionar uma forma e configurar corretamente o comando para conseguir fazer o que deseja.

### Como remover partículas exibidas

O comando para limpar partículas exibidas é `/score clear {player} PARTICLES`

## Configurações gerais para todas as formas

### Definir o ponto de spawn

Para definir onde a forma será exibida, você tem duas opções: mencionar diretamente a localização ou definir um UUID de entidade

#### Usando UUID de Jogador/Entidade

Quando você decide usar o UUID da entidade, **a forma seguirá um Jogador/Entidade se ele se mover**. Então isso pode deformar a forma ou criar um efeito interessante.

```css
target:{uuid of the target}
/* Example using flat UUID */
target:b33183ad-e9c0-4d48-8eea-f8c9358d3568
/* Example using a placeholder */
target:%player_uuid%
```

:::danger
Você precisa especificar um UUID de um jogador ou de uma entidade. O nome do jogador não funciona!
:::

#### Usando uma localização específica

Usando a localização, você garante que a forma não será deformada, ela permanecerá estática.

```css
location:{world},{x},{y},{z}
/* Example using flat location */
location:world,100,50,500
/* Example using placeholders */
location:%player_world%,%player_x%,%player_y%,%player_z%
```

### Definição das partículas

#### Tipo de partícula

Define a partícula usada pela forma. Por padrão, será a partícula FLAME

```css
particle:{the particle type}
/* Example */
particle:CLOUD
```

Lista de partículas disponíveis aqui: [Lista de partículas do Spigot](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html)

#### Cor

**Em vez** de usar `particle:{particle name}` se você quiser usar partículas REDSTONE / DUST, você pode usar diretamente a configuração color com uma [cor personalizada](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html).

Você pode definir duas cores separadas por uma vírgula para ter uma transição de cor.

```css
color:{color Name}
/* Example one color */
color:RED
/* Example two colors with transition */
color:AQUA,BLUE
```

Você também pode usar valores RGB para usar cores personalizadas na sua partícula do SCore (0-255).

Exemplo: `color:RGB-156-82-84`

#### Partículas de bloco

**Em vez** de usar `particle:{particle name}` se você quiser usar partículas BLOCK_CRACK / BLOCK, você pode usar diretamente a configuração blockdata com um [material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

```css
blockdata:{material}
/* Example */
blockdata:LAVA
```

#### Partículas de item

**Em vez** de usar `particle:{particle name}` se você quiser usar partículas ITEM_CRACK / ITEM, você pode usar diretamente a configuração itemstack com um [material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

```css
itemstack:{material}
/* Example */
itemstack:DIAMOND_SHOVEL
```

### Offset / Deslocar o ponto de spawn da forma

Você pode definir um offset em uma direção específica, isso permite, por exemplo, exibir a forma em volta do jogador / entidade, sem precisar fazer cálculos complexos.

* offsetPitch: a direção de pitch para onde o offset será direcionado
* offsetYaw: a direção de yaw para onde o offset será direcionado
* offsetSitance: a distância do offset
* offsetX: Aumenta a localização X do offset
* offsetY: Aumenta a localização Y do offset
* offsetZ: Aumenta a localização Z do offset

Por padrão, essas configurações são definidas como 0

```css
offsetPitch:{the pitch direction}
offsetYaw:{the yaw direction}
offsetDistance:{the distance}
offsetX:{x bonus}
offsetY:{y bonus}
offsetZ:{z bonus}
/* Example with flat values */
offsetPitch:0
offsetYaw:-90
offsetDistance:5
offsetY:-1
/* Example with placeholders */
offsetPitch:%player_pitch_initial%+30
offsetYaw:%player_yaw_initial%
offsetDistance:%var_myvar%
```

## Configurações das formas

### Atom

Cria um conjunto de órbitas elípticas com uma pequena esfera de partículas no centro, lembrando um átomo.

* `orbits`: Número de órbitas elípticas.
* `radius`: Raio das órbitas em blocos
* `rate`: Número de partículas por órbita.

```yaml
# Examples that you can run manually in-game
/score particles shape:atom color:BLUE,YELLOW orbits:4 radius:5.0 rate:100 offsetY:1
/score particles shape:atom particle:CLOUD orbits:10 radius:20.5 rate:100 offsetY:1
# Examples that you can include into your commands

```

### Atomic

Versão animada de `atom` com partículas orbitando.

* `orbits`: Número de trajetórias orbitais.
* `radius`: Raio da órbita em blocos.
* `rate`: Taxa de órbita.
* `time`: Duração em ticks.

```yaml
# Examples that you can run manually in-game**
/score particles shape:atomic orbits:15 radius:5 rate:100 offsetY:1 time:200

# Examples that you can include into your commands
```

### BlackSun

Múltiplos círculos concêntricos aumentando de tamanho.

* `radius`: Raio máximo em blocos.
* `radiusRate`: Diferença de raio entre cada círculo.
* `rate`: Densidade de partículas.
* `rateChange`: Taxa de alteração por camada.

```yaml
# Examples that you can run manually in-game
/score particles shape:blacksun radius:10 radiusRate:0.5 rate:200 rateChange:10

# Examples that you can include into your commands
```

### BlackHole

Um efeito dinâmico de vórtice de partículas.

* `points`: Número de braços espirais.
* `radius`: Distância do centro.
* `rate`: Taxa de rotação.
* `mode`: 0 a 4 para diferentes estilos de vórtice.
* `time`: Duração em ticks.

```yaml
# Examples that you can run manually in-game**
/score particles particle:SMOKE shape:blackhole points:30 radius:2.5 rate:1 mode:2 time:50

# Examples that you can include into your commands
```

### ChaoticDoublePendulum

Simula um efeito de pêndulo duplo caótico.

* `radius`: Raio de oscilação.
* `gravity`: Força da gravidade (normalmente -1).
* `length`, `length2`: Comprimentos dos pêndulos.
* `mass1`, `mass2`: Massa de cada pêndulo.
* `dimension3`: Se deve usar rotação 3D.
* `speed`: Velocidade da animação.
* `time`: Duração em ticks.

```yaml
# Examples that you can run manually in-game
/score particles shape:chaoticDoublePendulum radius:2 gravity:-1 length:200 length2:200 mass1:50 mass2:50 dimension3:false speed:2 time:200
/score particles shape:chaoticDoublePendulum color:RED,YELLOW radius:1 gravity:-1 length:200 length2:2000 mass1:50 mass2:50 dimension3:true speed:2 time:200
/score particles shape:chaoticDoublePendulum particle:FLAME radius:2 gravity:5 length:200 length2:200 mass1:50 mass2:50 dimension3:false speed:2 time:200
# Examples that you can include into your commands
```

### Circle

Exibe um círculo de partículas.

* `radius`: raio do círculo
* `density`: número de partículas por bloco (maior = mais densidade).
* `drawMode`: clockWise, counterClockWise, random
* `fillMode`: disk, spiral, ring
* `time`: tempo em ticks para animar a exibição completa. (0 = instantâneo)
* `directionPitch`: direção de pitch do círculo
* `directionYaw`: direção de yaw do círculo

Exemplos:

```yaml
# Examples that you can include into your commands
# Display multiple Green circles in front the player
playerCommands:
- FOR [+20,-20,+40,-40,+60,-60,+80,-80,+100,-100] > for3
- score particles shape:circle location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% color:GREEN,WHITE radius:3 density:100 time:10 drawMode:clockwise offsetDistance:8 offsetPitch:0 offsetYaw:%player_yaw_initial%%for3%  directionYaw:%player_yaw_initial%%for3% fillMode:disk directionPitch:-90 offsetY:-1
- END_FOR for3
```

### CircularBeam

Feixe animado com tamanhos de círculo mudando ao longo do tempo.

* `maxRadius`: Raio máximo do círculo em blocos.
* `rate`: Taxa de pontos por círculo.
* `radiusRate`: Variação no raio.
* `extend`: Distância de extensão em blocos.
* `time`: Duração em ticks.

```yaml
# Examples that you can run manually in-game
/score particles shape:circularBeam color:PURPLE maxRadius:5 rate:500 radiusRate:15 extend:1 time:100

# Examples that you can include into your commands
```

### Cone

Cone feito de círculos empilhados.

* `height`: Altura do cone.
* `radius`: Raio da base.
* `rate`: Espaçamento entre círculos.
* `circleRate`: Densidade de pontos.
* `fillMode`: o modo de preenchimento "disk", "ring", "spiral", por padrão é disk

```yaml
# Examples that you can run manually in-game
/score particles shape:cone color:GREEN,YELLOW height:3 radius:2 rate:0.4 circleRate:40 fillMode:ring

# Examples that you can include into your commands
```

### Crescent

Renderiza uma lua crescente usando dois círculos sobrepostos.

* `radius`: tamanho do arco externo.
* `rate`: resolução da curva.
* `directionYaw`: direção do crescente em graus

```yaml
# Examples that you can run manually in-game
/score particles shape:crescent radius:3 rate:100 directionYaw:90 color:RED,YELLOW

# Examples that you can include into your commands
```

### Cylinder

* `radius`: raio do cilindro
* `height`: a altura do cilindro
* `density`: número de partículas por bloco (maior = mais densidade).
* `drawMode`: clockWise, counterClockWise, random
* `timeToDisplay`: tempo em ticks para animar a exibição completa.
* `directionPitch`: direção de pitch do quadrado
* `directionYaw`: direção de yaw do quadrado

Exemplos:

```yaml
# Examples that you can include into your commands
# Display two green cylinder in front of the player
- FOR [+20,-20] > for3
- score particles shape:cylinder location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% color:GREEN,WHITE radius:1 density:100 timeToDisplay:5 drawMode:clockwise offsetDistance:8 offsetPitch:0 offsetYaw:%player_yaw_initial%%for3%  directionYaw:%player_yaw_initial%%for3% directionPitch:-90 offsetY:-1 height:3
- END_FOR for3
```

### Diamond

Cria uma forma de diamante (losango) em 2D ou 3D.

* `radiusRate`: Controla a largura.
* `rate`: Espaçamento entre pontos.
* `height`: Altura total.

```yaml
# Examples that you can run manually in-game
/score particles shape:diamond color:BLUE,AQUA radiusRate:0.6 rate:0.4 height:3

# Examples that you can include into your commands
```

### DNA

Exibe uma dupla hélice de DNA com ligações de hidrogênio.

* `radius`: Raio das hélices.
* `rate`: Espaçamento entre pontos.
* `extension`: Fator de alongamento da hélice.
* `height`: Altura total.

```yaml
# Examples that you can run manually in-game
/score particles shape:dna color:BLUE,AQUA radius:10 rate:0.1 height:4 extension:15

# Examples that you can include into your commands
```

### DNA Replication

Simula a replicação de DNA com ligações e cores.

* `radius`, `rate`, `extension`, `height`: Iguais a `DNA`.
* `speed`: Velocidade da animação.
* `hydrogenBondDist`: Distância entre as ligações.

```yaml
# Examples that you can run manually in-game
/score particles shape:dnaReplication color:BLUE,AQUA radius:4 rate:0.2 height:3 extension:5 hydrogenBondDist:1 speed:1

# Examples that you can include into your commands
```

### Ellipse

* `start`, `end`: Ângulos inicial e final.
* `rate`: Espaçamento angular.
* `radius`, `otherRadius`: Raios X e Y.

```yaml
# Examples that you can run manually in-game
/score particles shape:ellipse color:BLUE,AQUA radius:3 rate:0.8 otherRadius:2 start:50 end:200 offsetY:1

# Examples that you can include into your commands
```

### ExplosionWave

Animação ondulada representando uma onda de choque de explosão.

* `rate`: Densidade de partículas dentro da onda.
* `start`: a distância inicial do centro para começar a onda.
* `height`: a amplitude vertical da onda.

```yaml
# Examples that you can run manually in-game
/score particles shape:explosionWave rate:5 start:-3 height:3
/score particles shape:explosionWave rate:5 height:1 offsetY:-1
/score particles shape:explosionWave rate:10
# Examples that you can include into your commands
```

### Eye

Desenha uma forma oval parecida com um olho.

* `radius`, `radius2`: Raios principais.
* `rate`: Resolução.
* `extension`: Fator de alongamento
* `directionPitch`: direção de pitch do olho
* `directionYaw`: direção de yaw do olho

```yaml
# Examples that you can run manually in-game
/score particles shape:eye particle:INFESTED radius:2 radius2:2 extension:1 rate:100 directionYaw:-164

# Examples that you can include into your commands
```

### Heart

Desenha um coração usando uma curva polar.

* `cut`, `cutAngle`: Ajustam os lóbulos do coração.
* `depth`: Profundidade da reentrância central.
* `compressHeight`: Compressão vertical.
* `rate`: Resolução.
* `directionPitch`: direção de pitch do coração
* `directionYaw`: direção de yaw do coração

```yaml
# Examples that you can run manually in-game
/score particles shape:heart particle:HEART cut:4 cutAngle:2 depth:2 compressHeight:1 rate:100 offsetY:-1 directionYaw:-75

# Examples that you can include into your commands
```

### Helix

Desenha hélices 3D animadas.

* `strings`: Número de hélices.
* `radius`: Raio da hélice.
* `rate`, `extension`: Espaçamento e força da espiral.
* `height`: Altura total.
* `speed`: Velocidade da animação.
* `fadeUp`, `fadeDown`: Variação gradual do raio.

```yaml
# Examples that you can run manually in-game
/score particles shape:helix particle:TOTEM_OF_UNDYING strings:3 radius:2.5 rate:0.1 extension:2 height:3 speed:2 fadeUp:true fadeDown:true

# Examples that you can include into your commands
```

### Illuminati

Cria uma forma de símbolo de infinito 3D.

* `size`: Tamanho da forma.
* `extension`: A extensão do olho do illuminati.

```yaml
# Examples that you can run manually in-game
/score particles shape:illuminati particle:SCULK_SOUL size:5 extension:15

# Examples that you can include into your commands
```

### Infinity

### MagicCircles

Exibe anéis em expansão como glifos mágicos.

* `radius`: Raio inicial.
* `rate`: Espaçamento entre pontos.
* `radiusRate`: Velocidade de crescimento.
* `distance`: Espaçamento entre os anéis.
* `time`: Duração em ticks.

```yaml
# Examples that you can run manually in-game
/score particles shape:magicCircles radius:1 rate:3 radiusRate:1 time:20

# Examples that you can include into your command
```

### MeguminExplosion

Efeito de explosão mágica estilizada.

* `size`: Tamanho geral da explosão.

```yaml
# Examples that you can run manually in-game
/score particles shape:meguminExplosion color:RED size:5

# Examples that you can include into your commands
```

### Polygon

Desenha um polígono com conexões internas opcionais

* `points`: Número de cantos.
* `connection`: Quantos cantos conectar.
* `size`: Raio do polígono.
* `rate`: Resolução.
* `extend`: Fator de extensão da conexão.

```yaml
# Examples that you can run manually in-game
/score particles shape:polygon points:5 connection:5 size:5 rate:1 extend:1

# Examples that you can include into your commands
```

### Rainbow

Exibe arcos de arco-íris empilhados com camadas coloridas.

* `radius`: Raio do arco-íris
* `rate`: Taxa de pontos, mais = mais pontos
* `curve`: Curva 1 para subir e -1 para descer
* `layers`: Número de arcos.
* `compact`: Reduz o espaçamento entre os arcos.

```yaml
# Examples that you can run manually in-game
/score particles shape:rainbow radius:3 rate:100 curve:2 layers:1 compact:1

# Examples that you can include into your commands
```

### Ring

Desenha um anel plano (coroa circular).

* `radius`: Raio do anel.
* `density`: Densidade de partículas.
* `time`: Duração da exibição em ticks.
* `drawMode`: Ordem de desenho: clockWise, counterClockWise ou random
* `directionPitch`: direção de pitch do círculo
* `directionYaw`: direção de yaw do círculo

```yaml
# Examples that you can run manually in-game
/score particles particle:SONIC_BOOM shape:ring radius:5 density:100 time:0

# Examples that you can include into your commands
```

### Sphere

Desenha uma esfera 3D completa.

* `radius`: Raio da esfera.
* `rate`: Densidade de pontos

```yaml
# Examples that you can run manually in-game
/score particles particle:SNEEZE shape:sphere radius:5 rate:30

# Examples that you can include into your commands
```

### SpikeSphere

Desenha uma esfera com espinhos aleatórios.

* `radius`, `rate`: Parâmetros base da esfera.
* `chance`: Chance de espinho.
* `minRandomDistance`, `maxRandomDistance`: Intervalo de comprimento dos espinhos.

```yaml
# Examples that you can run manually in-game
/score particles particle:GLOW shape:spikeSphere radius:4 rate:20 chance:30 minRandomDistance:2 maxRandomDistance:4

# Examples that you can include into your commands
```

### Square

* `height`: altura em blocos ao longo do eixo vertical.
* `length`: comprimento em blocos ao longo do vetor de direção.
* `width`: largura em blocos perpendicular à direção da parede.
* `density`: número de partículas por bloco (maior = mais densidade).
* `timeToDisplay`: tempo em ticks para animar a exibição completa.
* `drawMode`: "vertical" ou "horizontal" (controla a ordem de iteração).
* `verticalOrder`: "up" ou "down" (ordem ao longo da altura).
* `horizontalOrder`: "near" ou "far" (ordem ao longo do comprimento).
* `directionPitch`: direção de pitch do quadrado
* `directionYaw`: direção de yaw do quadrado

```yaml
# Examples that you can run manually in-game
...

# Examples that you can include into your commands
playerCommands:
# A line of explosion
- score particles shape:square location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% particle:EXPLOSION height:1 length:30 timeToDisplay:20 density:1 directionYaw:%player_yaw_initial% directionPitch:%player_pitch_initial% verticalOrder:up horizontalOrder:near offsetY:-1
# A wall of flame
- score particles shape:square location:%player_world_initial%,%player_x_initial%,%player_y
```

### Star

Cria uma estrela 3D com espinhos animados.

* `points`: Número de lados base.
* `spikes`: Número de pontas da estrela.
* `rate`: Quantidade de exibições de pontos
* `spikeLength`: Comprimento da ponta.
* `coreRadius`: Raio do núcleo.
* `neuron`: Curvatura da ponta.
* `prototype`: Usar hélices em vez de linhas.
* `speed`: Velocidade da animação.

```yaml
# Examples that you can run manually in-game
/score particles shape:star points:5 spikes:5 rate:20 spikeLength:20 coreRadius:4 speed:1 neuron:3

# Examples that you can include into your commands
```

### Tesseract

Desenha um tesserato

* `size`: Tamanho geral.
* `rate`: Densidade.
* `speed`: velocidade.
* `time`: Tempo de exibição.

```yaml
# Examples that you can run manually in-game
/score particles shape:tesseract size:3 rate:100 speed:2 time:200 offsetY:2 particle:END_ROD

# Examples that you can include into your commands
```

### Vortex

Efeito espiral como uma galáxia ou um tornado.

* `points`: Número de braços espirais.
* `rate`: Velocidade de rotação.
* `time`: Duração.

```yaml
# Examples that you can run manually in-game
/score particles shape:vortex particle:ENCHANT points:5 rate:25 time:100 offsetY:2

# Examples that you can include into your commands
```
