---
description: >-
  Apprenez à créer des projectiles personnalisés avec l'éditeur en jeu de SCore,
  à les configurer (type, vitesse, particules) et à les lancer.
source_hash: 6fa479a1613c4cb0
translated_at: '2026-11-13T17:18:36.210Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 🏹 Projectiles personnalisés

Cette page vous aide à découvrir comment créer des projectiles personnalisés et les lancer.\
Nous avons créé pour vous un éditeur en jeu afin de simplifier l'édition. **Utilisez-le.**

:::info 
Pour les lancer, c'est simple : utilisez les commandes [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch) ou [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch). Ces projectiles ne peuvent pas être donnés aux joueurs.
:::

### Commandes :

| Commande                        | Fonction                                                                |
| ------------------------------- | ----------------------------------------------------------------------- |
| /score projectiles              | Affiche tous les projectiles et vous permet de les modifier             |
| /score projectiles-create \<id> | Ouvre l'éditeur pour créer un nouveau projectile                        |
| /score projectiles-delete \<id> | Action pour supprimer un projectile (nécessite une confirmation)        |
| /score reload                   | Recharge le plugin (utile si vous modifiez un projectile dans le .yml)  |

## **Informations de base**

### Type

C'est la première chose à définir : le type de projectile que vous voulez créer. SCore supporte :

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

Exemple :

```yaml
type: ARROW
```

### Custom name visible

* Permet d'afficher le nom personnalisé au-dessus du projectile
* Options :
  * true
  * false
* Exemple :

```yaml
customNameVisible: true
```

### Custom Name

* C'est le NOM du projectile, utile pour customNameVisible et pour les placeholders.
* Exemple :

```yaml
customName: '&eBullet'
```

### Visual fire

* Option permettant d'afficher du feu visuel sur le projectile
* Exemple :

```yaml
visualFire: true
```

### Invisible

* Définit si le projectile sera invisible ou non. Nécessite [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
```yaml
invisible: false
```

### Pickup status

* Option pour configurer si le projectile peut être ramassé
* Options : [Pickup status](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/AbstractArrow.PickupStatus.html)
* Exemple :

```yaml
pickupStatus: CREATIVE_ONLY # DISALLOWED, ALLOWED
```

### Glowing

* Définit si le projectile aura l'effet de brillance ou non
* Options :
  * true
  * false
* Exemple :

```yaml
glowing: true
```

### Bounce

* Définit si le projectile rebondira sur l'entité pendant son état d'invulnérabilité.
* Options :
  * true
  * false
* Exemple :

```yaml
bounce: true
```

### Gravity

* Définit si le projectile sera affecté par la gravité ou non
* Options :
  * true
  * false
* Exemple :

```yaml
gravity: true
```

### Velocity

* La vitesse du projectile
  * <CustomTag type="version" version="1.20.5" /> Cela fonctionne aussi sur FIREBALL, WITHER\_SKULL et DRAGON\_FIREBALL : `2.0` vole deux fois plus vite, `1` garde la vitesse vanilla. Avant la 1.20.5, ils gardent leur vitesse vanilla.
* Exemple :

```yaml
velocity: 2.0
```

:::danger
LES DÉGÂTS DE LA **FLÈCHE** SERONT AFFECTÉS PAR CETTE OPTION

Équation : `velocity x 1 = Arrow Damage`
:::

### Particles

* Permet de modifier les particules que le projectile affiche autour de lui.
 * `particlesType` : type de particule 
 * `particlesAmount` : nombre de particules émises à chaque fois                                                                 
 * `particlesOffSet` : distance par rapport au projectile à laquelle les particules apparaissent                                                                
 * `particlesSpeed` : vitesse de déplacement des particules                                                                 
 * `redstoneColor` : change la couleur de la particule redstone. [Couleurs](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)
 * `blockType` : bloc utilisé pour la particule. Uniquement pour : BLOCK\_CRACK, BLOCK\_DUST, BLOCK\_MARKER
 * `particleDensity` : densité des particules, utile pour obtenir une traînée nette derrière votre projectile

* Exemple :

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

* Durée de vie du projectile en secondes. (Les décimales sont supportées)
* Exemple :

```yaml
despawnDelay: 10
```

### Knockback strength

* Force du recul que le projectile inflige à ses cibles
* Équation :

`Knockback strength x 3` = nombre de blocs dont la cible est repoussée
```yaml
knockbackStrengt: 1
```

### Remove when hit block

* Définit si le projectile disparaît lorsqu'il touche un bloc
* Options :
  * true
  * false
* Exemple :

```yaml
removeWhenHitBlock: true
```

## **Informations personnalisées**

* Toutes les informations suivantes dépendent du type de projectile.

### Visual item :

* Cela vous permet de déguiser un projectile avec un item
* Projectiles disponibles :
* **EGG**
* **ENDER\_PEARL**
* **SNOWBALL**

Exemple :

```yaml
visualItem: diamond_sword
```

:::info
visualItem est compatible avec les têtes personnalisées et l'ajout de textures à ces têtes
:::

#### Custom model data

* Le visual item supporte aussi le custom model data de l'item.

```yaml
customModelData: 37
```

#### Item Model

* Depuis la 1.21.2, vous pouvez modifier l'item Model du projectile.

```yaml
itemModel: mypack:mymodel
```

### Arrow

#### Critical

* Définit si le projectile **ARROW** laissera une traînée de particules critiques
* Options :
  * true
  * false
* Exemple :

```yaml
critical: true
```

:::info
Uniquement pour le projectile ARROW
:::

#### Damage

* Les dégâts que la flèche infligera
* Équation :

`<Damage> x 3` = dégâts de la flèche 

* Par défaut : -1
* Exemple :

```yaml
damage: 10.0
```

:::info
N'utilisez pas de valeur négative, rien ne changera.
:::

#### Pierce level

* Nombre de mobs touchés par un seul projectile avant qu'il disparaisse
* Équation :

`<PierceLevel> + 1` = nombre de mobs qui seront touchés

* Si la valeur est -1, il disparaîtra après avoir touché 1 mob.
* Exemple :

```yaml
pierceLevel: 4
```

#### Active color | Color

* **Active color** à -> **true** permet de modifier Color. [Couleurs](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)

```yaml
activeColor: true
```

* C'est la couleur que la flèche émettra

```yaml
color: AQUA
```

#### Silent

* Définit si la flèche émettra du bruit
* Options :
  * true
  * false
* Exemple :

```yaml
silent: true
```

#### Hit sound

<CustomTag type="paper" />
* Configure le son émis lorsque la flèche touche quelque chose. [Sons](https://jd.papermc.io/paper/1.21.8/org/bukkit/Sound.html)
* Cela fonctionne pour ARROW, TRIDENT et SPECTRAL\_ARROW

* Exemple :

```yaml
hitSound: BLOCK_BELL_USE
```

### Wither skull

#### Charged

* Définit si le wither\_skull est chargé ou non
* Options :
  * true
  * false
* Exemple :

```yaml
charged: true
```

### Fireball

#### Radius

* Rayon de l'explosion
* Exemple

```yaml
radius: 3
```

#### Incendiary

* Définit si le projectile fireball provoquera du feu ou non en touchant quelque chose
* Options :
  * true
  * false
* Exemple :

```yaml
incendiary: true
```

### Firework

**Lifetime**

* Durée pendant laquelle le feu d'artifice peut durer avant de disparaître (comme le nombre de poudres à canon utilisées)
* Exemple :

```yaml
lifeTime: 3
```

**fireworkExplosions:**

* Les paramètres des couleurs de l'explosion du feu d'artifice
* Exemple :

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

Pour les couleurs, vous pouvez utiliser soit les [noms de couleurs](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html) classiques, soit `RGB-<0-255>-<0-255>-<0-255>`

## Configuration YML

* Certaines fonctionnalités ne sont pas encore modifiables en jeu

### Enchantments (TRIDENT)

<CustomTag type="version" version="1.16.4" />
* Permet d'enchanter les tridents.

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

* Permet de modifier les effets de la splash potion. [Effets de potion](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)

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

## Configuration YAML complète

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
