---
description: >-
  Découvrez les restrictions et résistances d'items d'ExecutableItems : bloquer
  le drop, l'enclume, les coffres, les fours et plus pour personnaliser leur
  comportement.
source_hash: bf6b77f864065099
translated_at: '2026-11-13T17:13:33.994Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Restrictions et résistances des items

Sur cette page, vous allez découvrir les restrictions d'items et certaines résistances, qui vous permettent de personnaliser le comportement de l'item dans certains cas.

## Restrictions globales

* Info : si vous souhaitez ajouter une des restrictions d'items à tous les items que vous avez créés avec le plugin, vous pouvez ajouter la configuration de la ou des restrictions voulues dans le fichier config.yml du plugin.
* Exemple : je voudrais ajouter les restrictions interdisant l'utilisation de l'enclume et de la meule à tous les ExecutableItems déjà créés et à venir


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


## Restrictions individuelles

Dans cette section, vous allez apprendre à ajouter une restriction individuelle uniquement pour l'ExecutableItem que vous êtes en train de modifier.

### Annuler le drop de l'item

* Info : valeur booléenne qui empêche le joueur de dropper l'executable item.
* Note : lorsque l'item ne peut pas retourner dans l'inventaire (par exemple s'il était sur le curseur pendant que l'inventaire a été fermé et que tous les emplacements sont pleins), le drop est autorisé au lieu de supprimer l'item.
* Exemple :

```yaml
restrictions:
  cancel-item-drop: true
```

### Annuler le placement du bloc au sol.

* Info : valeur booléenne qui empêche le joueur de placer au sol les Executable Items lorsque l'item est une instance de bloc.
* Exemple :

```yaml
restrictions:
  cancel-item-place: true
```

### Annuler l'utilisation de l'item dans toutes les recettes de l'établi

* Info : valeur booléenne qui empêche le joueur de fabriquer des recettes vanilla avec l'ExecutableItem.
* Exemple :

```yaml
restrictions:
  cancel-item-craft: true
```

### Annuler l'utilisation de l'item uniquement dans les recettes vanilla, sans affecter les recettes personnalisées

* Info : valeur booléenne qui empêche le joueur de fabriquer des recettes vanilla avec l'ExecutableItem, mais il peut toujours être utilisé dans les recettes de fabrication personnalisées.
* Exemple :

```yaml
restrictions:
  cancel-item-craft-no-custom: true
```

### Annuler l'interaction pour décorer les pots Minecraft

* Info : valeur booléenne qui empêche le joueur de mettre les ExecutableItems dans les pots décorés
* Exemple :

```yaml
restrictions:
  cancel-decorated-pot: true
```

### Annuler le placement de l'item sur une étagère

* Info : valeur booléenne qui empêche le joueur de placer l'ExecutableItem sur une étagère (Minecraft 1.21.9+, tous les types de bois).
  * Utile pour un item qui se redonne lui-même via ses activateurs (par exemple un seau d'eau « infini ») : sans cette restriction, l'item placé sur l'étagère y reste alors que l'activateur en donne un nouveau.
* Exemple :

```yaml
restrictions:
  cancel-shelf: true
```

### Annuler le dépôt de l'item dans un stockage

* Info : valeur booléenne qui empêche le joueur de mettre l'ExecutableItem dans les éléments de la liste suivante :
  * Coffre
  * Coffre de l'Ender
  * Coffre piégé
  * Tonneau
  * Boîte de Shulker
* Exemple : (cette fonctionnalité ne fonctionne pas en créatif)

```yaml
restrictions:
  cancel-deposit-in-chest: true
```

### Annuler le dépôt de l'item dans un four

* Info : valeur booléenne qui empêche le joueur de mettre l'ExecutableItem dans les éléments de la liste suivante :
  * Four
  * Haut fourneau
  * Fumoir
* Exemple : (cette fonctionnalité ne fonctionne pas en créatif)

```yaml
restrictions:
  cancel-deposit-in-furnace: true
```

### Annuler la combustion de l'item dans le feu et la lave

* Info : valeur booléenne qui empêche l'ExecutableItem de brûler dans le feu ou la lave.
* Exemple :

```yaml
restrictions:
  cancel-item-burn: true
```

### Annuler la suppression de l'item au contact d'un cactus

* Info : valeur booléenne qui empêche l'ExecutableItem d'être supprimé au contact d'un bloc de cactus.
* Exemple :

```yaml
restrictions:
  cancel-item-delete-by-cactus: true
```

### Annuler la suppression de l'item lorsqu'il est frappé par la foudre

* Info : valeur booléenne qui empêche l'ExecutableItem d'être supprimé lorsqu'un éclair le frappe.
* Config : `cancel-item-delete-by-lightning: true`
* Exemple :

```yaml
restrictions:
  cancel-item-delete-by-lightning: true
```

### Annuler l'enchantement de l'item

* Info : valeur booléenne qui empêche l'item d'être enchanté 
* Exemple :

```yaml
restrictions:
  cancel-enchant: true
```

### Annuler le placement de l'item dans une enclume 

* Info : valeur booléenne qui empêche le joueur de mettre l'ExecutableItem dans une enclume. Cela empêche donc de le placer, ce qui empêche aussi le renommage et l'enchantement.
* Exemple :

```yaml
restrictions:
  cancel-anvil: true
```

### Annuler l'action de renommage à l'aide d'une enclume

* Info : valeur booléenne qui empêche le joueur de renommer l'ExecutableItem à l'aide d'une enclume.
* Exemple :

```yaml
restrictions:
  cancel-rename-anvil: true
```

:::tip
Un item qui est réparé ou enchanté dans une enclume **sans être renommé** conserve son nom coloré / en dégradé grâce à [keepNameInAnvil](/executableitems/configurations/general-configuration#keepnameinanvil) (activé par défaut). Cette option se place dans `plugins/ExecutableItems/config.yml`, et non dans le fichier de l'item.
:::

### Annuler l'action d'enchantement à l'aide d'une enclume

* Info : valeur booléenne qui empêche le joueur d'enchanter l'ExecutableItem à l'aide d'une enclume.
* Exemple :

```yaml
restrictions:
  cancel-enchant-anvil: true
```

### Annuler l'interaction de l'item avec un cheval/une mule/un lama

* Info : valeur booléenne qui empêche les ExecutableItems d'interagir avec les chevaux/mules/lamas. Cela désactive aussi le stockage.
* Exemple :

```yaml
restrictions:
  cancel-horse: true
```

### Annuler la consommation de l'item

* Info : valeur booléenne qui empêche le joueur de consommer ou de manger l'ExecutableItem.
* Exemple :

```yaml
restrictions:
  cancel-consumption: true
```

### Annuler l'utilisation de l'item dans un bloc de fabrication automatique (crafter)

* Info : valeur booléenne qui empêche le joueur de mettre les ExecutableItems dans un crafter.
* Config : `cancel-crafter: false`

```yaml
restrictions:
  cancel-crafter: true
```

### Restriction de verrouillage dans l'inventaire

* Info : valeur booléenne qui fait que l'ExecutableItem reste dans l'emplacement où il se trouve et empêche le joueur de le déplacer de quelque manière que ce soit.
* Exemple (cette fonctionnalité ne fonctionne pas en créatif)

```yaml
restrictions:
  locked-in-inventory: true
```

### Annuler les interactions d'outil

* Info : valeur booléenne qui empêche le joueur d'utiliser l'ExecutableItem pour déclencher des interactions d'outil. Par ex. (clic droit sur un bloc avec une hache pour l'écorcer, utiliser une houe pour labourer un bloc d'herbe)
* Exemple :

```yaml
restrictions:
  cancel-tool-interactions: true
```

### Annuler le placement de l'item dans un cadre

* Info : valeur booléenne qui empêche le joueur de mettre l'ExecutableItem dans un cadre.
* Exemple :

```yaml
restrictions:
  cancel-item-frame: true
```

### Annuler l'interaction avec une table de forge

* Info : valeur booléenne qui empêche le joueur de mettre l'ExecutableItem dans une table de forge.
* Exemple :

```yaml
restrictions:
  cancel-smithing-table: true
```

### Annuler l'interaction avec une meule

* Info : valeur booléenne qui empêche le joueur de mettre l'ExecutableItem dans une meule.
* Exemple :

```yaml
restrictions:
  cancel-grind-stone: true
```

### Annuler l'interaction avec une scie à pierre

* Info : valeur booléenne qui empêche le joueur de mettre l'ExecutableItem dans une scie à pierre.
* Exemple :

```yaml
restrictions:
  cancel-stone-cutter: true
```

### Annuler l'interaction avec un alambic 

* Info : valeur booléenne qui empêche le joueur de mettre l'ExecutableItem dans un alambic.
* Exemple :

```yaml
restrictions:
  cancel-brewing: true
```

### Annuler l'interaction avec un phare

* Info : valeur booléenne qui empêche le joueur de mettre l'ExecutableItem dans un phare.
* Exemple :

```yaml
restrictions:
  cancel-beacon: true
```

### Annuler l'interaction avec une table de cartographie

* Info : empêche le joueur de mettre l'ExecutableItem dans une table de cartographie.
* Exemple :

```yaml
restrictions:
  cancel-cartography: true
```

### Annuler l'interaction avec un composteur

* Info : valeur booléenne qui empêche le joueur de mettre l'ExecutableItem dans un composteur.
* Exemple :

```yaml
restrictions:
  cancel-composter: true
```

### Annuler l'interaction avec un distributeur.

* Info : valeur booléenne qui empêche le joueur de mettre l'ExecutableItem dans un distributeur.
* Exemple :

```yaml
restrictions:
  cancel-dispenser: true
```

### Annuler l'interaction avec un dropper

* Info : valeur booléenne qui empêche le joueur de mettre l'ExecutableItem dans un dropper.
* Exemple :

```yaml
restrictions:
  cancel-dropper: true
```

### Annuler l'interaction avec un entonnoir

* Info : valeur booléenne qui empêche le joueur de mettre les items ExecutableItem dans un entonnoir. Cela signifie laisser l'item dans le conteneur de l'entonnoir. Cela n'empêche pas l'item d'entrer dans l'entonnoir lorsqu'il est jeté au sol au-dessus de celui-ci.
* Exemple :

```yaml
restrictions:
  cancel-hopper: true
```

### Annuler l'interaction avec un lutrin

* Info : valeur booléenne qui empêche le joueur de mettre l'ExecutableItem dans un lutrin.
* Exemple :

```yaml
restrictions:
  cancel-lectern: true
```

### Annuler l'interaction avec un villageois marchand

* Info : valeur booléenne qui empêche le joueur de mettre l'ExecutableItem dans un échange avec un villageois/marchand.
* Exemple :

```yaml
restrictions:
  cancel-merchant: true
```

### Annuler l'échange d'item entre les mains

* Info : valeur booléenne qui empêche le joueur d'échanger les items d'une main à l'autre. Généralement avec la touche F du clavier pour « Échanger les items avec la main secondaire »
* Exemple :

```yaml
restrictions:
  cancel-swap-hand: true
```

### Annuler l'interaction d'un cor

* Info : valeur booléenne qui empêche le joueur de jouer du cor lorsque l'ExecutableItem est un cor.
* Exemple :

```yaml
restrictions:
  cancel-horn: true
```

### ANNULER LE SUPPORT D'ARMURE

* Info : empêche le joueur de mettre l'ExecutableItem sur un support d'armure.
* Exemple :

```yaml
restrictions:
  cancel-armorstand: true
```

### ANNULER LE SPAWNER

* Info : empêche le joueur d'utiliser l'œuf d'apparition ExecutableItem sur un spawner de la manière vanilla.
* Exemple :

```yaml
restrictions:
  cancel-spawner: true
```

### ANNULER LE PLACEMENT DANS UN BUNDLE

* Info : empêche le joueur de mettre l'ExecutableItem dans un bundle.
* Exemple :

```yaml
restrictions:
  cancel-place-in-bundle: true
```
