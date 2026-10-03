---
description: >-
  Guia do SCore sobre como criar e configurar projéteis personalizados (tipo,
  partículas, dano, efeitos) para o seu servidor.
source_hash: 865d4da043f01247
translated_at: '2026-10-03T10:33:19.414Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 🏹 Projéteis Personalizados

Esta página vai te ajudar a aprender sobre como criar projéteis personalizados e lançá-los.\
Criamos para você um editor in-game para tornar a edição simples. **Use-o.**

:::info 
Para lançá-los, é fácil, use os comandos [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch) ou [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch). Esses projéteis não podem ser dados aos jogadores.
:::

### Comandos:

| Comando                         | Função                                                    |
| ------------------------------- | ----------------------------------------------------------- |
| /score projectiles              | Mostra todos os projéteis e permite editá-los             |
| /score projectiles-create \<id> | Abre o editor para criar um novo projétil                  |
| /score projectiles-delete \<id> | Ação para deletar um projétil (precisa de confirmação)           |
| /score reload                   | Recarrega o plugin (útil se você editar um projétil no .yml) |

## **Informações Básicas**

### Type

Essa é a primeira coisa que você precisa configurar, o tipo de projétil que você quer criar, o SCore suporta:

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

* Permite que você mostre o nome personalizado acima do projétil
* Opções:
  * true
  * false
* Exemplo:

```yaml
customNameVisible: true
```

### Custom Name

* Esse é o NAME do projétil, útil para o customNameVisible e para placeholders
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

* Se o projétil será invisível ou não. Requer o [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
```yaml
invisible: false
```

### Pickup status

* Opção para configurar se o projétil pode ser pego
* Opções: [Pickup status](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/AbstractArrow.PickupStatus.html)
* Exemplo:

```yaml
pickupStatus: CREATIVE_ONLY # DISALLOWED, ALLOWED
```

### Glowing

* Se o projétil terá o efeito de brilho (glowing) ou não
* Opções:
  * true
  * false
* Exemplo:

```yaml
glowing: true
```

### Bounce

* Se o projétil vai quicar da entidade durante seu estado de invulnerabilidade.
* Opções:
  * true
  * false
* Exemplo:

```yaml
bounce: true
```

### Gravity

* Se o projétil será afetado pela gravidade ou não
* Opções:
  * true
  * false
* Exemplo:

```yaml
gravity: true
```

### Velocity

* O quão rápido o projétil será
* Exemplo:

```yaml
velocity: 2.0
```

:::danger
O DANO DA **ARROW** SERÁ AFETADO POR ESSA OPÇÃO

Equação: `velocity x 1 = Arrow Damage`
:::

### Particles

* Isso pode editar quais partículas o projétil vai exibir ao seu redor.
 * `particlesType`: Tipo de partícula 
 * `particlesAmount`: Quantas partículas ele vai emitir a cada vez                                                                 
 * `particlesOffSet`: A que distância do projétil as partículas vão surgir                                                                
 * `particlesSpeed`: O quão rápido as partículas vão se mover                                                                 
 * `redstoneColor`: Muda a cor da partícula de redstone. [Colors](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)
 * `blockType`: Qual bloco a partícula usa. Somente para: BLOCK\_CRACK, BLOCK\_DUST, BLOCK\_MARKER
 * `particleDensity`: Densidade das partículas, útil quando se quer um rastro limpo do seu projétil

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

* Quanto tempo de vida o projétil terá em segundos. (Suporta valores decimais)
* Exemplo:

```yaml
despawnDelay: 10
```

### Knockback strength

* O quão forte será o knockback que o projétil vai infligir em seus alvos
* Equação:

`Knockback strength x 3` = Quantidade de blocos que o alvo é empurrado
```yaml
knockbackStrengt: 1
```

### Remove when hit block

* Se o projétil desaparece ao atingir um bloco
* Opções:
  * true
  * false
* Exemplo:

```yaml
removeWhenHitBlock: true
```

## **Informações Personalizadas**

* Todas as informações a seguir são restritas de acordo com o tipo de projétil.

### Visual item:

* Isso traz a você a capacidade de disfarçar um projétil com um item
* Projéteis disponíveis:
* **EGG**
* **ENDER\_PEARL**
* **SNOWBALL**

Exemplo:

```yaml
visualItem: diamond_sword
```

:::info
visualItem é compatível com cabeça personalizada e com a adição de texturas a essa cabeça
:::

#### Custom model data

* O visual item também suporta o CustomModelData do item.

```yaml
customModelData: 37
```

#### Item Model

* Desde a versão 1.21.2 você pode editar o item_model do projétil.

```yaml
itemModel: mypack:mymodel
```

### Arrow

#### Critical

* Se o projétil **ARROW** vai deixar um rastro de partículas de crítico
* Opções:
  * true
  * false
* Exemplo:

```yaml
critical: true
```

:::info
Somente para o projétil ARROW
:::

#### Damage

* Quanto de dano a arrow vai causar
* Equação:

`<Damage> x 3` = Dano da arrow 

* Padrão: -1
* Exemplo:

```yaml
damage: 10.0
```

:::info
Não use valor negativo, nada vai mudar.
:::

#### Pierce level

* Quantos mobs serão atingidos em um único projétil antes dele desaparecer
* Equação:

`<PierceLevel> + 1` = Quantidade de mobs que serão atingidos

* Se o valor for definido como -1, ele vai desaparecer após atingir 1 mob.
* Exemplo:

```yaml
pierceLevel: 4
```

#### Active color | Color

* **Active color** em -> **true** permite a edição da Color. [Colors](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)

```yaml
activeColor: true
```

* É a cor que a arrow vai emitir

```yaml
color: AQUA
```

#### Silent

* Se a arrow vai emitir ruído
* Opções:
  * true
  * false
* Exemplo:

```yaml
silent: true
```

#### Hit sound

<CustomTag type="paper" />
* Configura o som que será emitido quando a arrow atingir algo. [Sounds](https://jd.papermc.io/paper/1.21.8/org/bukkit/Sound.html)
* Funciona para ARROW, TRIDENT e SPECTRAL\_ARROW

* Exemplo:

```yaml
hitSound: BLOCK_BELL_USE
```

### Wither skull

#### Charged

* Se o wither\_skull está carregado ou não
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

* Se o projétil fireball vai causar fogo ou não ao atingir algo
* Opções:
  * true
  * false
* Exemplo:

```yaml
incendiary: true
```

### Firework

**Lifetime**

* Por quanto tempo o fogo de artifício pode durar antes de desaparecer (como quantas pólvoras foram usadas)
* Exemplo:

```yaml
lifeTime: 3
```

**fireworkExplosions:**

* As configurações das cores da explosão do fogo de artifício
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

Para as cores, você pode usar tanto os [nomes de cores](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html) comuns quanto `RGB-<0-255>-<0-255>-<0-255>`

## YML Config

* Existem algumas funcionalidades que ainda não são editáveis in-game

### Enchantments (TRIDENT)

<CustomTag type="version" version="1.16.4" />
* Permite encantar tridents.

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

## Full YAML Config

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
