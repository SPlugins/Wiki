---
description: >-
  Découvrez toutes les fonctionnalités des blocs ExecutableBlocks : activateurs,
  drops, titres, conteneurs, fours, ruches, affichages et plus.
source_hash: 7bbe17ba1d336968
translated_at: '2026-11-13T17:10:11.178Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Fonctionnalités des blocs


## Activateurs

* Fonctionnalités très importantes qui vous permettent d'ajouter des capacités à vos blocs
* Wiki dédié à cette fonctionnalité : [Liste des activateurs EB](/executableblocks/configurations/activator-configuration/list-of-the-activators.md) et [Fonctionnalités des activateurs EB](/executableblocks/configurations/activator-configuration/activators-features.md)


## Paramètres de base

### CreationType

* La méthode de création de l'EB
  * BASIC\_CREATION
  * DISPLAY\_CREATION
  * IMPORT FROM EI
  * IMPORT FROM ITEMSADDER
  * IMPORT FROM NEXO
  * IMPORT FROM ORAXEN

### MATERIAL

* Info : l'item Minecraft de base du bloc exécutable. [Material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
  * Info supplémentaire : l'item doit être un bloc plaçable.

```yaml
material: DIRT
```

:::info
Les spawners sont pris en charge ! Si vous voulez définir un type pour votre spawner, ajoutez :

`spawnerType: CHICKEN`

[Liste des EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
:::


### DISPLAYNAME

* Info : le nom du bloc
* Exemple : 

```yaml
name: '&cEpic Sword'
```

### LORE

* Info : le lore du bloc
* Exemple :

```yaml
lore:
- §6>> §e----------- §6<<
- §aClick on this block
- §awhen it is placed !
- §aand see the custom structures !
- §6>> §e----------- §6<<
```

* Placeholders utilisables dans le lore : %player%, [%usage%](block-features.md#hide-usage-1.14+), etc.

### DROP BLOCK IF IT IS BROKEN

* Info : permet de rendre ou non votre Executable Block obtenable en le cassant
* Exemple : 

```yaml
dropBlockIfItIsBroken: true
```

* Requis : NON (par défaut : true)

### DROP BLOCK IF IT IS BURNS

* Info : permet de rendre ou non votre Executable Block obtenable en le cassant
* Exemple : 

```yaml
dropBlockIfItIsBurns: true
```

* Requis : NON (par défaut : false)

### DROP BLOCK WHEN IT EXPLODES

* Info : permet de rendre ou non votre Executable Block obtenable lorsqu'il est détruit par une explosion
* Exemple :

```yaml
dropBlockWhenItExplodes: true
```

* Requis : NON (par défaut : true)

### DROP TYPE

* Info : sélectionne le type de drop du bloc EB
* Types de drops :
  * IN\_THE\_INVENTORY
  * ON\_THE\_GROUND

### ONLY BREAKABLE WITH EI

* Info : impose d'avoir au moins l'Executable Item requis dans la main principale ou la seconde main pour casser le bloc exécutable
* Exemple :

```yaml
onlyBreakableWithEI:
- firework
```

* Requis : NON (par défaut : vide)

### CANBEMOVED

* Info : indique si le bloc peut être déplacé avec un piston ou non.
* Exemple :

```yaml
canBeMoved: false
```

### EXECUTABLE ITEMS ID

* Info : il s'agit d'une option qui permet de synchroniser votre bloc exécutable avec un executable item.
  * Info supplémentaire : le bloc exécutable copie le nom, le material et le lore de l'executable item. Si vous essayez de modifier le nom, le material ou le lore de l'EB, rien ne changera. Vous devez modifier le nom, le material et le lore de l'EI pour que les changements s'appliquent à l'EB
* Exemple : 

```yaml
executableItem: hack
```

* Requis : NON

## Fonctionnalités du titre (Title) 

Compatible avec [DecentHolograms](https://www.spigotmc.org/resources/96927/), [HolographicDisplays](https://dev.bukkit.org/projects/holographic-displays) et [CMI](https://www.spigotmc.org/resources/3742/)

### ACTIVE TITLE 

* Info : indique si l'hologramme du titre est activé ou non
* Exemple :

```yaml
activeTitle: false
```

* Requis : NON

### TITLE NAME 

* Info : le texte affiché de l'hologramme
* Exemple : 

```yaml
title: '&7&oDefault title'
```

* (Avec HolographicDisplay) Vous pouvez afficher un item dans le titre avec ITEM::MATERIAL

```yaml
title: 
- '&7&oDefault title'
- 'ITEM::DIAMOND'
```

* Requis : NON

### TITLE ADJUSTMENT 

* Info : l'ajustement de la hauteur de l'hologramme du titre, vers le haut ou vers le bas
* Exemple :

```yaml
titleAdjustment: 0.5
```

* Requis : NON
  * Info supplémentaire : un nombre positif pour monter, un nombre négatif pour descendre

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

## Paramètres d'usage personnalisés

#### USAGE

* Info : le nombre de fois où vous pouvez l'utiliser. Surtout utilisé pour la fonction de modification d'usage des activateurs.
* Exemple : 

```yaml
usage: 0
```

Pour une utilisation infinie du bloc :

```yaml
usage: -1
```

* Requis : NON (par défaut : 0)

:::info
usage: 0 équivaut à usage:1, mais le texte « Remaining use:... » ne sera pas affiché dans le lore.
:::

## Fonctionnalités des conteneurs

:::info
Les filtres d'items prennent correctement en charge le tag `{CUSTOMODELDATA:X}`, ce qui vous permet de créer un entonnoir qui n'accepte qu'un item avec une texture précise
:::

### whitelistMaterials

* Vous pouvez ajouter ici une liste de materials qui peuvent être placés dans votre bloc

```
containerFeatures:
  whitelistMaterials:
  - DIRT
```

### blacklistMaterials

* Vous pouvez ajouter ici une liste de materials qui ne peuvent pas être placés dans votre bloc

```
containerFeatures:
  blacklistMaterials:
  - STONE
```

:::info
Dans le cas des HOPPERS, la whitelist et la blacklist restreignent les items que l'entonnoir peut aspirer.
:::

### isLocked

* Indique si le conteneur est verrouillé ou non

### lockedName

* S'il est verrouillé, vous devez choisir le nom de la clé

```
containerFeatures:
  isLocked: true
  lockedName: ThisIsMyKey
```

### inventoryTitle

* Le titre de l'inventaire du conteneur 

```
containerFeatures:
  inventoryTitle: INVENTORY TITLE
```

## Fonctionnalités des fours

### furnaceSpeed

* Permet de personnaliser la vitesse de votre four.
* Exemple :

```
furnaceFeatures:
  furnaceSpeed: 2.0
```

:::info
Par défaut -> 1

2 fois la vitesse par défaut -> 2

Moitié de la vitesse par défaut -> 0.5
:::

### infiniteFuel

* Le bloc n'a plus besoin de combustible pour fonctionner

```
furnaceFeatures:
  infiniteFuel: true
```

### infiniteVisualLit

* Le bloc apparaît comme étant allumé

```
furnaceFeatures:
  infiniteVisualLit: true
```

### fortuneMultiplier

* Multiplicateur du résultat.

```
furnaceFeatures:
  fortuneMultiplier: 5
```

:::info
Il peut être négatif pour retirer des items du stockage des résultats.
:::

### fortuneChance

* Probabilité que la fortune s'applique

```
furnaceFeatures:
  fortuneChance: 0.95
```

## Fonctionnalités directionnelles

### forceBlockFaceOnPlace

* Force le bloc à être placé en regardant dans une certaine direction
* Exemple :

```
directionalFeatures:
  forceBlockFaceOnPlace: true
```

### blockFaceOnPlace

* Définit la face du bloc lorsqu'il est placé
* Exemple :

```
directionalFeatures:
  forceBlockFaceOnPlace: true
  blockFaceOnPlace: NORTH
```

:::info
`blockFaceOnPlace` ne s'applique que lorsque `forceBlockFaceOnPlace` vaut `true`. Sans cela, le bloc garde la direction avec laquelle il a été placé. Ces options ne font tourner que les blocs directionnels (les blocs ayant un `facing`).

La commande [/eb place](/executableblocks/commands-and-permissions#place-an-eb-at-a-specific-position) peut aussi prendre une direction, qui l'emporte sur ces options.
:::

## Fonctionnalités des ruches <CustomTag type="version" version="1.15" /> {#beehive-features}

Pré-remplit une ruche ou un nid d'abeilles lorsqu'il est placé. Uniquement pour les ExecutableBlocks dont le material est `BEEHIVE` ou `BEE_NEST` (créés avec `BASIC_CREATION` ou `IMPORT_FROM_EXECUTABLE_ITEMS`) ; les options ne font rien sur les autres blocs. Dans l'éditeur en jeu, le bouton n'apparaît que pour ces deux materials.

Les deux options sont facultatives : lorsqu'aucune n'est définie, le bloc n'est pas modifié et rien n'est écrit dans la config.

### honeyLevel

* Info : niveau de miel du bloc placé, de `0` (vide) à `5` (plein, le miel peut être récolté). Non défini : le niveau de miel n'est pas modifié.

### bees

* Info : nombre d'abeilles placées dans le bloc posé. Non défini ou `0` : aucune abeille. Une ruche contient 3 abeilles par défaut, les abeilles en trop ne sont pas ajoutées.

* Exemple :

```yaml
material: BEE_NEST
beehiveFeatures:
  honeyLevel: 5
  bees: 2
```

:::tip
Avec un [activateur LOOP et `loopTimerPerBlock: true`](/executableblocks/configurations/activator-configuration/list-of-the-activators#loop-), un nid d'abeilles récolté peut être placé à nouveau (et donc rempli à nouveau) un certain temps après avoir été posé.
:::

## Fonctionnalités de l'alambic

### brewingStandSpeed

* Permet de personnaliser la vitesse de votre alambic
* Exemple :

```
brewingStandFeatures:
  brewingStandSpeed: 1.0
```

:::info
Par défaut -> 1

2 fois la vitesse par défaut -> 2

Moitié de la vitesse par défaut -> 0.5
:::

## Fonctionnalités de l'entonnoir

### amountItemsTransferred

* Permet de personnaliser la quantité d'items transférés à chaque transfert de l'entonnoir.
* S'applique aussi bien lorsque l'entonnoir pousse des items vers le conteneur qu'il fait face que (depuis la 26.11) lorsqu'il tire des items du conteneur situé au-dessus de lui.
* Exemple :

```yaml
hopperFeatures:
  amountItemsTransferred: 5
```

## Fonctionnalités d'affichage

### Material

* Material de l'item qui sera affiché
* Exemple :

```
DisplayFeatures:
  material: PAPER
```

### Custom model data

* Custom model data du material qui sera affiché
* Exemple :

```
DisplayFeatures:
  customModelData: 3
```

### Scale

* Échelle de l'affichage
* Exemple :

```
DisplayFeatures:
  scale: 1
```

### aligned

* Pour que l'affichage soit aligné ou non
* Exemple :

```
DisplayFeatures:
```
aligned: false

### customPitch

* Sélectionne le pitch personnalisé
* Exemple :

```
DisplayFeatures:
  customPitch: 1
```

### customY

* Sélectionne le Y personnalisé
* Exemple :

```
DisplayFeatures:
  customY: 1.0
```

### Glow

* Brillance activée ou non
* Exemple :

```
DisplayFeatures:
  glow: false
```

### Fonctionnalités de la zone d'interaction

* Largeur de l'affichage
* Hauteur de l'affichage
* Collisions activées ou non
* Exemple :

```
DisplayFeatures:
  InteractionZoneFeatures:
    width: 1.0
    height: 1.0
    isCollidable: false
```

### Click to break

* Nombre de clics nécessaires pour casser la création d'affichage
* Exemple :

```
DisplayFeatures:
  clickToBreak: 3
```

## Bibliothèque sculptée

### occupiedSlots

* Définit quels emplacements (index 0-5) contiennent un livre

```
chiseledBookshelfFeatures:
  occupiedSlots:
  - '2'
  - '5'
```

## Annulation

### cancelLiquidDestroy

* Info : annule la destruction des graines et des têtes de joueur par l'eau ou la lave
* Exemple : 

```
cancelLiquidDestroy: true
```
