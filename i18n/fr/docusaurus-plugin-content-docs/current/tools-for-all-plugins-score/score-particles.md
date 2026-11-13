---
description: >-
  Guide des particules SCore : formes disponibles, paramètres de chaque forme,
  et les commandes pour afficher ou supprimer les particules dans Minecraft.
source_hash: ed81d3ba4c1a5e8c
translated_at: '2026-11-13T17:19:43.440Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ✨    Particules SCore

<iframe width="560" height="315" src="https://www.youtube.com/embed/_GavkHnQcvg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

SCore inclut de nombreuses formes de particules prédéfinies issues de la bibliothèque XParticle, ainsi que quelques formes personnalisées.

## Comment afficher les particules

La commande pour afficher les particules est `/score particles`

Vous devrez choisir une forme et configurer correctement la commande pour obtenir le résultat souhaité.

### Comment supprimer les particules affichées

La commande pour effacer les particules affichées est `/score clear {player} PARTICLES` 

## Paramètres généraux pour toutes les formes

### Définir le point d'apparition

Pour définir l'endroit où la forme sera affichée, vous avez deux possibilités : indiquer directement la position ou renseigner l'UUID d'une entité.

#### Utiliser l'UUID d'un joueur/d'une entité

Si vous choisissez d'utiliser l'UUID d'une entité, **la forme suivra le joueur/l'entité lorsqu'il se déplace**. Cela peut donc déformer la forme ou créer un effet sympa.

```css
target:{uuid of the target}
/* Example using flat UUID */
target:b33183ad-e9c0-4d48-8eea-f8c9358d3568
/* Example using a placeholder */
target:%player_uuid%
```

:::danger
Vous devez indiquer l'UUID d'un joueur ou d'une entité. Le nom du joueur ne fonctionne pas !
:::

#### Utiliser une position précise

Avec une position, vous êtes sûr que la forme ne sera pas déformée : elle restera statique.

```css
location:{world},{x},{y},{z}
/* Example using flat location */
location:world,100,50,500
/* Example using placeholders */
location:%player_world%,%player_x%,%player_y%,%player_z%
```

### Définition des particules

#### Type de particule

Définit la particule utilisée par la forme. Par défaut, il s'agit de la particule FLAME.

```css
particle:{the particle type}
/* Example */
particle:CLOUD
```

Liste des particules disponibles ici : [Liste des particules Spigot ](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html)

#### Couleur

**Au lieu** d'utiliser `particle:{particle name}`  si vous voulez utiliser les particules REDSTONE / DUST, vous pouvez directement utiliser le paramètre color avec une [couleur personnalisée](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html).

Vous pouvez définir deux couleurs séparées par une , pour obtenir une transition de couleur.

```css
color:{color Name}
/* Example one color */
color:RED
/* Example two colors with transition */
color:AQUA,BLUE
```

Vous pouvez aussi utiliser des valeurs RGB pour avoir des couleurs personnalisées dans votre particule SCore (0-255).

Exemple : `color:RGB-156-82-84`

#### Particules de bloc

**Au lieu** d'utiliser `particle:{particle name}`  si vous voulez utiliser les particules BLOCK\_CRACK / BLOCK, vous pouvez directement utiliser le paramètre blockdata avec un [matériau](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

```css
blockdata:{material}
/* Example */
blockdata:LAVA
```

#### Particules d'item

**Au lieu** d'utiliser `particle:{particle name}`  si vous voulez utiliser les particules ITEM\_CRACK/ ITEM, vous pouvez directement utiliser le paramètre itemstack avec un [matériau](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

```css
itemstack:{material}
/* Example */
itemstack:DIAMOND_SHOVEL
```

### Décalage du point d'apparition de la forme 

Vous pouvez définir un décalage dans une direction précise. Cela permet par exemple d'afficher la forme autour du joueur / de l'entité, sans avoir à faire de calculs complexes.

* offsetPitch : la direction du pitch vers laquelle le décalage sera orienté
* offsetYaw : la direction du yaw vers laquelle le décalage sera orienté
* offsetSitance : la distance du décalage
* offsetX : augmente le décalage sur la position X
* offsetY : augmente le décalage sur la position Y
* offsetZ : augmente le décalage sur la position Z

Par défaut, ces paramètres sont à 0

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

## Paramètres des formes

### Atom

Crée un ensemble d'orbites elliptiques avec une petite sphère de particules au centre, ressemblant à un atome.

* `orbits` : nombre d'orbites elliptiques.
* `radius` : rayon des orbites en blocs.
* `rate` : nombre de particules par orbite.

```yaml
# Examples that you can run manually in-game
/score particles shape:atom color:BLUE,YELLOW orbits:4 radius:5.0 rate:100 offsetY:1
/score particles shape:atom particle:CLOUD orbits:10 radius:20.5 rate:100 offsetY:1
# Examples that you can include into your commands

```

### Atomic

Version animée de `atom` avec des particules en orbite.

* `orbits` : nombre de trajectoires orbitales.
* `radius` : rayon de l'orbite en blocs.
* `rate` : vitesse de l'orbite.
* `time` : durée en ticks.

```yaml
# Examples that you can run manually in-game**
/score particles shape:atomic orbits:15 radius:5 rate:100 offsetY:1 time:200

# Examples that you can include into your commands
```

### BlackSun

Plusieurs cercles concentriques de taille croissante.

* `radius` : rayon maximal en blocs.
* `radiusRate` : différence de rayon entre chaque cercle.
* `rate` : densité des particules.
* `rateChange` : variation de la vitesse par couche.

```yaml
# Examples that you can run manually in-game
/score particles shape:blacksun radius:10 radiusRate:0.5 rate:200 rateChange:10

# Examples that you can include into your commands
```

### BlackHole

Un effet de vortex de particules dynamique.

* `points` : nombre de bras en spirale.
* `radius` : distance par rapport au centre.
* `rate` : vitesse de rotation.
* `mode` : de 0 à 4 pour différents styles de vortex.
* `time` : durée en ticks.

```yaml
# Examples that you can run manually in-game**
/score particles particle:SMOKE shape:blackhole points:30 radius:2.5 rate:1 mode:2 time:50

# Examples that you can include into your commands
```

### ChaoticDoublePendulum

Simule l'effet d'un double pendule chaotique.

* `radius` : rayon d'oscillation.
* `gravity` : force de gravité (généralement -1).
* `length`, `length2` : longueurs des pendules.
* `mass1`, `mass2` : masse de chaque pendule.
* `dimension3` : utiliser ou non la rotation 3D.
* `speed` : vitesse de l'animation.
* `time` : durée en ticks.

```yaml
# Examples that you can run manually in-game
/score particles shape:chaoticDoublePendulum radius:2 gravity:-1 length:200 length2:200 mass1:50 mass2:50 dimension3:false speed:2 time:200
/score particles shape:chaoticDoublePendulum color:RED,YELLOW radius:1 gravity:-1 length:200 length2:2000 mass1:50 mass2:50 dimension3:true speed:2 time:200
/score particles shape:chaoticDoublePendulum particle:FLAME radius:2 gravity:5 length:200 length2:200 mass1:50 mass2:50 dimension3:false speed:2 time:200
# Examples that you can include into your commands
```

### Circle

Affiche un cercle de particules.

* `radius` : rayon du cercle
* `density` : nombre de particules par bloc (plus élevé = plus dense).
* `drawMode` : clockWise, counterClockWise, random
* `fillMode` : disk, spiral, ring
* `time` : temps en ticks pour animer l'affichage complet. (0 = instantané)
* `directionPitch` : direction du pitch du cercle
* `directionYaw` : direction du yaw du cercle

Exemples :

```yaml
# Examples that you can include into your commands
# Display multiple Green circles in front the player
playerCommands:
- FOR [+20,-20,+40,-40,+60,-60,+80,-80,+100,-100] > for3
- score particles shape:circle location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% color:GREEN,WHITE radius:3 density:100 time:10 drawMode:clockwise offsetDistance:8 offsetPitch:0 offsetYaw:%player_yaw_initial%%for3%  directionYaw:%player_yaw_initial%%for3% fillMode:disk directionPitch:-90 offsetY:-1
- END_FOR for3
```

### CircularBeam

Faisceau animé avec des cercles dont la taille change au fil du temps.

* `maxRadius` : rayon maximal des cercles en blocs.
* `rate` : vitesse des points par cercle.
* `radiusRate` : variation du rayon.
* `extend` : distance d'extension en blocs.
* `time` : durée en ticks.

```yaml
# Examples that you can run manually in-game
/score particles shape:circularBeam color:PURPLE maxRadius:5 rate:500 radiusRate:15 extend:1 time:100

# Examples that you can include into your commands
```

### Cone

Cône formé de cercles empilés.

* `height` : hauteur du cône.
* `radius` : rayon de la base.
* `rate` : espacement des cercles.
* `circleRate` : densité des points.
* `fillMode` : le mode de remplissage « disk », « ring », « spiral », par défaut disk

```yaml
# Examples that you can run manually in-game
/score particles shape:cone color:GREEN,YELLOW height:3 radius:2 rate:0.4 circleRate:40 fillMode:ring

# Examples that you can include into your commands
```

### Crescent

Affiche un croissant de lune à l'aide de deux cercles qui se chevauchent.

* `radius` : taille de l'arc extérieur.
* `rate` : résolution de la courbe.
* `directionYaw` : direction du croissant en degrés

```yaml
# Examples that you can run manually in-game
/score particles shape:crescent radius:3 rate:100 directionYaw:90 color:RED,YELLOW

# Examples that you can include into your commands
```

### Cylinder

* `radius` : rayon du cylindre
* `height` : hauteur du cylindre
* `density` : nombre de particules par bloc (plus élevé = plus dense).
* `drawMode` : clockWise, counterClockWise, random
* `timeToDisplay` : temps en ticks pour animer l'affichage complet.
* `directionPitch` : direction du pitch du carré
* `directionYaw` : direction du yaw du carré

Exemples :

```yaml
# Examples that you can include into your commands
# Display two green cylinder in front of the player
- FOR [+20,-20] > for3
- score particles shape:cylinder location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% color:GREEN,WHITE radius:1 density:100 timeToDisplay:5 drawMode:clockwise offsetDistance:8 offsetPitch:0 offsetYaw:%player_yaw_initial%%for3%  directionYaw:%player_yaw_initial%%for3% directionPitch:-90 offsetY:-1 height:3
- END_FOR for3
```

### Diamond

Crée une forme de diamant (losange) en 2D ou en 3D.

* `radiusRate` : contrôle la largeur.
* `rate` : espacement entre les points.
* `height` : hauteur totale.

```yaml
# Examples that you can run manually in-game
/score particles shape:diamond color:BLUE,AQUA radiusRate:0.6 rate:0.4 height:3

# Examples that you can include into your commands
```

### DNA

Affiche une double hélice d'ADN avec des liaisons hydrogène.

* `radius` : rayon des hélices.
* `rate` : espacement entre les points.
* `extension` : facteur d'étirement de l'hélice.
* `height` : hauteur totale.

```yaml
# Examples that you can run manually in-game
/score particles shape:dna color:BLUE,AQUA radius:10 rate:0.1 height:4 extension:15

# Examples that you can include into your commands
```

### DNA Replication

Simule la réplication de l'ADN avec des liaisons et des couleurs.

* `radius`, `rate`, `extension`, `height` : identiques à `DNA`.
* `speed` : vitesse de l'animation.
* `hydrogenBondDist` : distance entre les liaisons.

```yaml
# Examples that you can run manually in-game
/score particles shape:dnaReplication color:BLUE,AQUA radius:4 rate:0.2 height:3 extension:5 hydrogenBondDist:1 speed:1

# Examples that you can include into your commands
```

### Ellipse

* `start`, `end` : angles de début et de fin.
* `rate` : espacement angulaire.
* `radius`, `otherRadius` : rayons X et Y.

```yaml
# Examples that you can run manually in-game
/score particles shape:ellipse color:BLUE,AQUA radius:3 rate:0.8 otherRadius:2 start:50 end:200 offsetY:1

# Examples that you can include into your commands
```

### ExplosionWave

Animation ondulante représentant l'onde de choc d'une explosion.

* `rate` : densité des particules dans l'onde.
* `start` : la distance initiale depuis le centre à laquelle l'onde démarre.
* `height` : l'amplitude verticale de l'onde.

```yaml
# Examples that you can run manually in-game
/score particles shape:explosionWave rate:5 start:-3 height:3
/score particles shape:explosionWave rate:5 height:1 offsetY:-1
/score particles shape:explosionWave rate:10
# Examples that you can include into your commands
```

### Eye

Dessine une forme ovale en forme d'œil.

* `radius`, `radius2` : rayons principaux.
* `rate` : résolution.
* `extension` : facteur d'allongement
* `directionPitch` : direction du pitch de l'œil
* `directionYaw` : direction du yaw de l'œil

```yaml
# Examples that you can run manually in-game
/score particles shape:eye particle:INFESTED radius:2 radius2:2 extension:1 rate:100 directionYaw:-164

# Examples that you can include into your commands
```

### Heart

Dessine un cœur à l'aide d'une courbe polaire.

* `cut`, `cutAngle` : ajustent les lobes du cœur.
* `depth` : profondeur de l'encoche centrale.
* `compressHeight` : compression verticale.
* `rate` : résolution.
* `directionPitch` : direction du pitch du cœur
* `directionYaw` : direction du yaw du cœur

```yaml
# Examples that you can run manually in-game
/score particles shape:heart particle:HEART cut:4 cutAngle:2 depth:2 compressHeight:1 rate:100 offsetY:-1 directionYaw:-75

# Examples that you can include into your commands
```

### Helix

Dessine des hélices 3D animées.

* `strings` : nombre d'hélices.
* `radius` : rayon de l'hélice.
* `rate`, `extension` : espacement et intensité de la spirale.
* `height` : hauteur totale.
* `speed` : vitesse de l'animation.
* `fadeUp`, `fadeDown` : variation progressive du rayon.

```yaml
# Examples that you can run manually in-game
/score particles shape:helix particle:TOTEM_OF_UNDYING strings:3 radius:2.5 rate:0.1 extension:2 height:3 speed:2 fadeUp:true fadeDown:true

# Examples that you can include into your commands
```

### Illuminati

Crée une forme de symbole d'infini en 3D.

* `size` : taille de la forme.
* `extension` : l'extension de l'œil illuminati.

```yaml
# Examples that you can run manually in-game
/score particles shape:illuminati particle:SCULK_SOUL size:5 extension:15

# Examples that you can include into your commands
```

### Infinity

### MagicCircles

Affiche des anneaux en expansion, comme des glyphes magiques.

* `radius` : rayon initial.
* `rate` : espacement des points.
* `radiusRate` : vitesse de croissance.
* `distance` : espacement entre les anneaux.
* `time` : durée en ticks.

```yaml
# Examples that you can run manually in-game
/score particles shape:magicCircles radius:1 rate:3 radiusRate:1 time:20

# Examples that you can include into your command
```

### MeguminExplosion

Effet d'explosion magique stylisé.

* `size` : taille globale de l'explosion.

```yaml
# Examples that you can run manually in-game
/score particles shape:meguminExplosion color:RED size:5

# Examples that you can include into your commands
```

### Polygon

Dessine un polygone avec des connexions internes optionnelles

* `points` : nombre de coins.
* `connection` : nombre de coins à relier.
* `size` : rayon du polygone.
* `rate` : résolution.
* `extend` : facteur d'extension des connexions.

```yaml
# Examples that you can run manually in-game
/score particles shape:polygon points:5 connection:5 size:5 rate:1 extend:1

# Examples that you can include into your commands
```

### Rainbow

Affiche des arcs-en-ciel empilés avec des couches colorées.

* `radius` : rayon de l'arc-en-ciel
* `rate` : taux de points, plus élevé = plus de points
* `curve` : courbure, 1 pour vers le haut et -1 pour vers le bas
* `layers` : nombre d'arcs.
* `compact` : réduit l'espacement entre les arcs.

```yaml
# Examples that you can run manually in-game
/score particles shape:rainbow radius:3 rate:100 curve:2 layers:1 compact:1

# Examples that you can include into your commands
```

### Ring

Dessine un anneau plat.

* `radius` : rayon de l'anneau.
* `density` : densité des particules.
* `time` : durée d'affichage en ticks.
* `drawMode` : ordre de dessin : clockWise, counterClockWise ou random
* `directionPitch` : direction du pitch du cercle
* `directionYaw` : direction du yaw du cercle

```yaml
# Examples that you can run manually in-game
/score particles particle:SONIC_BOOM shape:ring radius:5 density:100 time:0

# Examples that you can include into your commands
```

### Sphere

Dessine une sphère 3D pleine.

* `radius` : rayon de la sphère.
* `rate` : densité des points

```yaml
# Examples that you can run manually in-game
/score particles particle:SNEEZE shape:sphere radius:5 rate:30

# Examples that you can include into your commands
```

### SpikeSphere

Dessine une sphère avec des pointes aléatoires.

* `radius`, `rate` : paramètres de la sphère de base.
* `chance` : probabilité d'apparition d'une pointe.
* `minRandomDistance`, `maxRandomDistance` : plage de longueur des pointes.

```yaml
# Examples that you can run manually in-game
/score particles particle:GLOW shape:spikeSphere radius:4 rate:20 chance:30 minRandomDistance:2 maxRandomDistance:4

# Examples that you can include into your commands
```

### Square

* `height` : hauteur en blocs le long de l'axe vertical.
* `length` : longueur en blocs le long du vecteur de direction.
* `width` : largeur en blocs perpendiculairement à la direction du mur.
* `density` : nombre de particules par bloc (plus élevé = plus dense).
* `timeToDisplay` : temps en ticks pour animer l'affichage complet.
* `drawMode` : « vertical » ou « horizontal », contrôle l'ordre d'itération.
* `verticalOrder` : « up » ou « down », ordre le long de la hauteur.
* `horizontalOrder` : « near » ou « far », ordre le long de la longueur.
* `directionPitch` : direction du pitch du carré
* `directionYaw` : direction du yaw du carré

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

Crée une étoile 3D avec des pointes animées.

* `points` : nombre de côtés de la base.
* `spikes` : nombre de pointes de l'étoile.
* `rate` : nombre d'affichages des points
* `spikeLength` : longueur des pointes.
* `coreRadius` : rayon du cœur.
* `neuron` : courbure des pointes.
* `prototype` : utiliser des hélices au lieu de lignes.
* `speed` : vitesse de l'animation.

```yaml
# Examples that you can run manually in-game
/score particles shape:star points:5 spikes:5 rate:20 spikeLength:20 coreRadius:4 speed:1 neuron:3

# Examples that you can include into your commands
```

### Tesseract

Dessine un tesseract

* `size` : taille globale.
* `rate` : densité.
* `speed` : vitesse.
* `time` : durée d'affichage.

```yaml
# Examples that you can run manually in-game
/score particles shape:tesseract size:3 rate:100 speed:2 time:200 offsetY:2 particle:END_ROD

# Examples that you can include into your commands
```

### Vortex

Effet de spirale comme une galaxie ou une tornade.

* `points` : nombre de bras en spirale.
* `rate` : vitesse de rotation.
* `time` : durée.

```yaml
# Examples that you can run manually in-game
/score particles shape:vortex particle:ENCHANT points:5 rate:25 time:100 offsetY:2

# Examples that you can include into your commands
```
