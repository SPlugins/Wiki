---
description: >-
  Aprenda a criar projéteis personalizados no SCore, configurar tipo,
  velocidade, partículas e dano, e lançá-los com os comandos LAUNCH.
source_hash: 6fa479a1613c4cb0
translated_at: '2026-11-13T18:17:43.363Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 🏹 Custom Projectiles

Esta página vai ajudar você a aprender a criar projéteis personalizados e lançá-los.\
Criamos para você um editor dentro do jogo para deixar a edição simples. **Use-o.**

:::info 
Para lançá-los, é fácil: use os comandos [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch) ou [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch). Esses projéteis não podem ser dados aos jogadores.
:::

### Comandos:

| Comando                         | Função                                                      |
| ------------------------------- | ----------------------------------------------------------- |
| /score projectiles              | Mostra todos os projéteis e permite editá-los               |
| /score projectiles-create \<id> | Abre o editor para criar um novo projétil                   |
| /score projectiles-delete \<id> | Ação para excluir um projétil (precisa de confirmação)      |
| /score reload                   | Recarrega o plugin (útil se você editar um projétil no .yml) |

## **Informações básicas**

### Type

Esta é a primeira coisa que você precisa definir: o tipo de projétil que deseja criar. O SCore suporta:

* ARROW
* SPECTRAL\_ARROW
* EGG
* ENDER\_PEARL
* FIREBALL
* SPLASH\_POTION
* SHULKER\_BULLET
* SNOWBALL
* TRIDENT
* WITHER\_SKULL
* DRAGON\_FIREBALL
* THROWNEXPBOTTLE
* WIND\_CHARGE
* LLAMASPIT
* FISHHOOK
* FIREWORK

Exemplo:

```yaml
type: ARROW
```

### Custom name visible

* Permite mostrar o nome personalizado acima do projétil
* Opções:
  * true
  * false
* Exemplo:

```yaml
customNameVisible: true
```

### Custom Name

* Este é o NOME do projétil, útil para customNameVisible e para usos com placeholder.
* Exemplo:

```yaml
customName: '&eBullet'
```

### Visual fire

* Opção para permitir fogo visual no projétil
* Exemplo:

```yaml
visualFire: true
```

### Invisible

* Define se o projétil será invisível ou não. Requer o [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
```yaml
invisible: false
```

### Pickup status

* Opção para configurar se o projétil pode ser coletado
* Opções: [Pickup status](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/AbstractArrow.PickupStatus.html)
* Exemplo:

```yaml
pickupStatus: CREATIVE_ONLY # DISALLOWED, ALLOWED
```

### Glowing

* Define se o projétil terá o efeito de brilho ou não
* Opções:
  * true
  * false
* Exemplo:

```yaml
glowing: true
```

### Bounce

* Define se o projétil vai quicar na entidade durante o estado de invulnerabilidade dela.
* Opções:
  * true
  * false
* Exemplo:

```yaml
bounce: true
```

### Gravity

* Define se o projétil será afetado pela gravidade ou não
* Opções:
  * true
  * false
* Exemplo:

```yaml
gravity: true
```

### Velocity

* Qual será a velocidade do projétil
  * <CustomTag type="version" version="1.20.5" /> Também funciona em FIREBALL, WITHER\_SKULL e DRAGON\_FIREBALL: `2.0` voa duas vezes mais rápido, `1` mantém a velocidade vanilla. Antes da 1.20.5, eles mantêm a velocidade vanilla.
* Exemplo:

```yaml
velocity: 2.0
```

:::danger
O DANO DA **ARROW** SERÁ AFETADO POR ESTA OPÇÃO

Equação: `velocity x 1 = Arrow Damage`
:::

### Particles

* Permite editar quais partículas o projétil exibirá ao seu redor.
 * `particlesType`: Tipo de partícula 
 * `particlesAmount`: Quantas partículas serão emitidas a cada vez                                                                 
 * `particlesOffSet`: Quão perto do projétil as partículas vão surgir                                                                
 * `particlesSpeed`: Quão rápido as partículas vão se mover                                                                 
 * `redstoneColor`: Altera a cor da partícula de redstone. [Colors](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)
 * `blockType`: Qual bloco a partícula usa. Apenas para: BLOCK\_CRACK, BLOCK\_DUST, BLOCK\_MARKER
 * `particleDensity`: Densidade das partículas, útil quando você quer um rastro limpo do seu projétil

* Exemplo:

```yaml
particles:
  1:
    particlesType: FLAME
    particlesAmount: 10
    particlesOffSet: 1
    particlesSpeed: 2
  2:
    particlesType: REDSTONE
    particlesAmount: 10
    particlesOffSet: 0.2
    particlesSpeed: 0.5
    redstoneColor: GRAY
  3:
    particlesType: BLOCK_DUST
    particlesAmount: 10
    particlesOffSet: 1.0
    particlesSpeed: 1.0
    particlesDelay: 1
    blockType: SPONGE
```

### Despawn delay

* Quanto tempo de vida o projétil terá, em segundos. (Suporta decimais)
* Exemplo:

```yaml
despawnDelay: 10
```

### Knockback strength

* Quão forte será o knockback que o projétil causará aos seus alvos
* Equação:

`Knockback strength x 3` = Quantidade de blocos que o alvo é empurrado para trás
```yaml
knockbackStrengt: 1
```

### Remove when hit block

* Define se o projétil desaparece quando atinge um bloco
* Opções:
  * true
  * false
* Exemplo:

```yaml
removeWhenHitBlock: true
```

## **Informações personalizadas**

* Todas as informações a seguir são restritas ao tipo de projétil.

### Visual item:

* Isso dá a você a capacidade de disfarçar um projétil com um item
* Projéteis disponíveis:
* **EGG**
* **ENDER\_PEARL**
* **SNOWBALL**

Exemplo:

```yaml
visualItem: diamond_sword
```

:::info
visualItem é compatível com cabeças personalizadas e com a adição de texturas a essa cabeça
:::

#### Custom model data

* O visual item também suporta o custom model data do item.

```yaml
customModelData: 37
```

#### Item Model

* Desde a 1.21.2, você pode editar o item Model do projétil.

```yaml
itemModel: mypack:mymodel
```

### Arrow

#### Critical

* Define se o projétil **ARROW** deixará um rastro de partículas críticas
* Opções:
  * true
  * false
* Exemplo:

```yaml
critical: true
```

:::info
Apenas para o projétil ARROW
:::

#### Damage

* Quanto de dano a flecha causará
* Equação:

`<Damage> x 3` = Dano da flecha 

* Padrão: -1
* Exemplo:

```yaml
damage: 10.0
```

:::info
Não use valor negativo, nada vai mudar.
:::

#### Pierce level

* Quantos mobs serão atingidos por um único projétil antes de ele desaparecer
* Equação:

`<PierceLevel> + 1` = Quantidade de mobs que serão atingidos

* Se o valor for definido como -1, o projétil desaparecerá após atingir 1 mob.
* Exemplo:

```yaml
pierceLevel: 4
```

#### Active color | Color

* **Active color** em -> **true** permite a edição de Color. [Colors](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)

```yaml
activeColor: true
```

* É a cor que a flecha vai emitir

```yaml
color: AQUA
```

#### Silent

* Define se a flecha emitirá som
* Opções:
  * true
  * false
* Exemplo:

```yaml
silent: true
```

#### Hit sound

<CustomTag type="paper" />
* Configura o som que será emitido quando a flecha atingir algo. [Sounds](https://jd.papermc.io/paper/1.21.8/org/bukkit/Sound.html)
* Funciona para ARROW, TRIDENT e SPECTRAL\_ARROW

* Exemplo:

```yaml
hitSound: BLOCK_BELL_USE
```

### Wither skull

#### Charged

* Define se o wither\_skull está carregado ou não
* Opções:
  * true
  * false
* Exemplo:

```yaml
charged: true
```

### Fireball

#### Radius

* Raio da explosão
* Exemplo

```yaml
radius: 3
```

#### Incendiary

* Define se o projétil fireball causará fogo ou não ao atingir algo
* Opções:
  * true
  * false
* Exemplo:

```yaml
incendiary: true
```

### Firework

**Lifetime**

* Por quanto tempo o firework pode durar antes de desaparecer (como a quantidade de pólvora usada)
* Exemplo:

```yaml
lifeTime: 3
```

**fireworkExplosions:**

* As configurações das cores da explosão do firework
* Exemplo:

```yaml
fireworkExplosions:
    explosion_0:
      colors:
      - RGB-94-84-214
      fadeColors:
      - RGB-1-2-33
      type: BALL_LARGE
      hasTrail: true
      hasTwinkle: true
```

Para as cores, você pode usar os [nomes de cores](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html) normais ou `RGB-<0-255>-<0-255>-<0-255>`

## Config YML

* Existem alguns recursos que ainda não são editáveis dentro do jogo

### Enchantments (TRIDENT)

<CustomTag type="version" version="1.16.4" />
* Permite encantar tridentes.

```yaml
enchantments:
 enchantment1:
   enchantment: unbreaking
   level: 1
 enchantment3:
   enchantment: mending
   level: 1
```

### Potion effects (Splash potion)

* Permite editar os efeitos da splash potion. [Potion effects](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)

```yaml
potionEffects:
 1:
  potionEffectType: SPEED
  duration: 20
  amplifier: 2
 2:
  potionEffectType: INCREASE_DAMAGE
  duration: 10
  amplifier: 4
```

## Config YAML completa

```yaml
type: TRIDENT
customNameVisible: false
customName: "Trident2"
visualFire: true
invisible: false
pickupStatus: DISALLOWED
glowing: true
critical: false
bounce: true
gravity: true
damage: -1
velocity: 1
knockbackStrength: -1
pierceLevel: -1
despawnDelay: 3
removeWhenHitBlock: false
enchantments:
  enchantment1:
    enchantment: unbreaking
    level: 1
  enchantment3:
    enchantment: mending
    level: 1
particles:
  1:
    particlesType: WATER_BUBBLE
    particlesAmount: 10
    particlesOffSet: 0.5
    particlesSpeed: 0.3
    particlesDelay: 1
#visualItem: DIAMOND_SWORD
#customModelData: 5
#critical: true
#charged: true
#radius: 3
#incendiary: true
#lifeTime: 3
#fireworkExplosions:
#    explosion_0:
#      colors:
#      - RGB-94-84-214
#      fadeColors:
#      - RGB-1-2-33
#      type: BALL_LARGE
#      hasTrail: true
#      hasTwinkle: true
```
