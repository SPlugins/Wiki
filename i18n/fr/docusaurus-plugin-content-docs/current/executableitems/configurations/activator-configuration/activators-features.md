---
description: >-
  Découvrez les options des activateurs d'ExecutableItems : slots, mise à jour
  d'items, cooldowns et conditions pour créer des items simples ou complexes.
source_hash: c1b2157347497341
translated_at: '2026-11-13T17:10:58.085Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';
import GeneralActivatorsFeatures from '@site/docs/_partials/general-activators-features.md';
import BlockFeatures from '@site/docs/_partials/block-features.md';
import EntityFeatures from '@site/docs/_partials/entity-features.md';
import TargetPlayerFeatures from '@site/docs/_partials/target-player-features.md';
import PlayerFeatures from '@site/docs/_partials/player-features.md';
import TargetItemFeatures from '@site/docs/_partials/target-item-features.md';
import CommandFeatures from '@site/docs/_partials/command-features.md';
import DropFeatures from '@site/docs/_partials/drop-features.md';
import EffectFeatures from '@site/docs/_partials/effect-features.md';
import DamageCauseFeatures from '@site/docs/_partials/damagecause-features.md';
import DelayFeatures from '@site/docs/_partials/delay-features.md';
import ClickFeatures from '@site/docs/_partials/click-features.md';
import InputFeatures from '@site/docs/_partials/input-features.md';
import TypeTargetFeatures from '@site/docs/_partials/typetarget-features.md';


# Fonctionnalités des activateurs

Toutes ces fonctionnalités se trouvent dans l'activateur. Pour rappel, les activateurs vous permettent d'exécuter des actions personnalisées sur votre ExecutableItem : ils peuvent avoir des conditions, exécuter des commandes, avoir un cooldown, etc.

Les fonctionnalités premium sont signalées par le tag :  <CustomTag type="premium" />

## Fonctionnalités générales d'un activateur

<GeneralActivatorsFeatures />

## Fonctionnalités pour les activateurs EI

### Detailed slots

* Info : liste de valeurs entières qui représentent les slots de l'inventaire dans lesquels l'activateur peut fonctionner. Cela signifie que si l'événement se produit dans un slot qui ne figure pas dans cette liste, l'activateur ne sera pas déclenché. 

![](https://media.ssomar.com/m/docs-img-slots-info.png)
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    detailedSlots:
  - -1 # Slot for mainhand, this is not a static slot but having it on mainhand
  - 40 # This is a static slot, it represents the offhand slot.
```

### Auto update item

* Info : cette fonctionnalité de l'activateur permet de mettre à jour l'item selon les options de la liste. Attention ! Elle n'est pas forcément nécessaire, selon ce que vous voulez faire. Certaines choses sont mises à jour automatiquement : par exemple, les commandes de l'activateur, les conditions, le cooldown, etc. sont mis à jour automatiquement sans cette fonctionnalité. 
* Cette fonctionnalité cible surtout les aspects visuels de l'item. Ainsi, si vous avez créé un jour un ExecutableItem avec l'id\:ex\_sword et le nom d'affichage "\&dExcalibur", que vous avez distribué cet item à tous les joueurs, et que vous souhaitez maintenant que tous les ExecutableItems "ex\_sword" aient le nouveau nom d'affichage "\&eEpic Sword", vous devez activer cette fonctionnalité sur l'un des activateurs de l'item. Il faut activer la fonctionnalité (autoUpdateItem) + celle de mise à jour du nom (updateName).
* Pour bien clarifier : cette fonctionnalité écrase la valeur actuelle, selon les options que vous avez activées, avec la valeur actuelle du fichier de config, et elle ne sert que pour les aspects visuels. Elle n'est pas nécessaire pour les changements courants qui n'impliquent pas les options de cette fonctionnalité.
  * `autoUpdateItem` : valeur booléenne qui indique si cette fonctionnalité est activée ou non pour l'activateur.
  * `updateName` : valeur booléenne pour mettre à jour le nom d'affichage de l'ExecutableItem. Si elle vaut true, elle écrase le nom d'affichage actuel de l'item avec le nom d'item actuel/mis à jour défini dans le fichier de config de l'ExecutableItem.
  * `updateLore` : valeur booléenne pour mettre à jour le lore de l'ExecutableItem. Si elle vaut true, elle écrase le lore actuel de l'item avec le lore actuel/mis à jour défini dans le fichier de config de l'ExecutableItem.
  * `updateDurability` : valeur booléenne pour mettre à jour la durabilité actuelle de l'ExecutableItem. Si elle vaut true, elle écrase la durabilité actuelle de l'item avec la durabilité actuelle/mise à jour définie dans le fichier de config de l'ExecutableItem.
  * `updateAttributes` : valeur booléenne pour mettre à jour tous les attributs de l'ExecutableItem. Si elle vaut true, elle écrase les attributs actuels de l'item avec les attributs actuels/mis à jour définis dans le fichier de config de l'ExecutableItem.
  * `updateEnchants` : valeur booléenne pour mettre à jour les enchantements de l'ExecutableItem. Si elle vaut true, elle écrase les enchantements actuels de l'item avec les enchantements actuels/mis à jour définis dans le fichier de config de l'ExecutableItem.
  * `updateCustomModelData` : valeur booléenne pour mettre à jour la valeur de CustomModelData de l'ExecutableItem. Si elle vaut true, elle écrase le CustomModelData actuel de l'item avec la valeur de customModelData actuelle/mise à jour définie dans le fichier de config de l'ExecutableItem.
  * `updateArmorSettings` : valeur booléenne pour mettre à jour les paramètres d'armure de l'ExecutableItem. Si elle vaut true, elle écrase les paramètres d'armure actuels de l'item avec les paramètres d'armure actuels/mis à jour définis dans le fichier de config de l'ExecutableItem. Par ex. (couleur de l'armure)
  * `updateMaterial` : valeur booléenne pour mettre à jour le matériau de l'ExecutableItem. Si elle vaut true, elle écrase le matériau actuel de l'item avec le matériau actuel/mis à jour défini dans le fichier de config de l'ExecutableItem.
  * `updateHiders` : valeur booléenne pour mettre à jour la configuration des Hiders de l'ExecutableItem. Si elle vaut true, elle écrase la configuration actuelle des Hiders avec la configuration des Hiders actuelle/mise à jour définie dans le fichier de config de l'ExecutableItem.
  * `updateEquippable` : valeur booléenne pour mettre à jour la configuration des Hiders de l'ExecutableItem. Si elle vaut true, elle écrase le composant equippable actuel de l'item avec la configuration equippable actuelle/mise à jour définie dans le fichier de config de l'ExecutableItem.
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    autoUpdateItem: false
    updateName: false
    updateLore: false
    updateDurability: false
    updateAttributes: false
    updateEnchants: false
    updateCustomModelData: false
    updateArmorSettings: false
    updateMaterial: false
    updateHiders: false
    updateEquippable: false
```

<PlayerFeatures />

### worldConditions

* Info : vous pouvez utiliser ces conditions dans tous les types d'activateurs
* [Conditions de monde](/tools-for-all-plugins-score/custom-conditions/world-conditions.md)

### placeholdersConditions

* Info : vous pouvez utiliser ces conditions dans tous les types d'activateurs
* [PlaceholdersConditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions.md)

### itemConditions

* Info : vous pouvez utiliser ces conditions dans tous les types d'activateurs
* [Conditions d'item](/tools-for-all-plugins-score/custom-conditions/item-conditions.md)


### otherEICooldowns

* Info : cette fonctionnalité permet d'appliquer un cooldown au joueur pour des ExecutableItems précis et, en option, pour des activateurs précis. 
  * `executableItem` : ID de l'ExecutableItem auquel vous voulez appliquer le cooldown.
  * `activators` : liste de chaînes de caractères correspondant aux ID des activateurs que vous voulez affecter pour l'ExecutableItem spécifié avec le cooldown. Si aucun n'est sélectionné, le cooldown sera appliqué à tous les activateurs de l'ExecutableItem spécifié.
  * `cooldown` : valeur entière qui correspond à la durée du cooldown appliqué.
  * `isCooldownInTicks` : valeur booléenne qui indique si la valeur du cooldown est en secondes ou en ticks. (20 ticks = 1 seconde)
* Astuces :
  * Vous pouvez spécifier l'ExecutableItem qui exécute cette fonctionnalité lui-même. Par exemple, si vous voulez qu'un activateur applique un cooldown à un autre activateur du même item.
  * Une autre idée consiste à appliquer un cooldown à tous les items liés aux dégâts si vous en utilisez un.
  * Un autre exemple serait d'utiliser cette fonctionnalité pour permettre au joueur de choisir parmi plusieurs ExecutableItems : quand il en choisit un et le déclenche, il ne peut plus utiliser ni celui qu'il a choisi, car il est en cooldown, ni les autres, car ils sont eux aussi en cooldown.
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    otherEICooldowns:
      cd1: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns list
        executableItem: test 
        activators: 
        - activator0 
        cooldown: 20 
        isCooldownInTicks: false
      cd0: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns
        executableItem: swordSharpness
        activators: [] 
        cooldown: 10
        isCooldownInTicks: false
```


## Fonctionnalités exclusives selon le type d'activateur

Pour mieux comprendre sur quels activateurs les fonctionnalités s'appliquent, nous allons créer 4 types de catégories pour regrouper les activateurs. Ainsi, si une fonctionnalité mentionne l'une de ces catégories, vous saurez qu'elle fonctionne pour tous les activateurs de cette catégorie.  

* <CustomTag type="player_block" /> : décrit les activateurs impliquant le joueur qui a déclenché l'ExecutableItem et un bloc concerné par l'activateur. Abréviation \[P\_B]
  * PLAYER\_ALL\_CLICK (avec la fonctionnalité typeTarget: ONLY\_BLOCK)
  * PLAYER\_BLOCK\_BREAK <CustomTag type="premium" compact />
  * PLAYER\_BLOCK\_PLACE <CustomTag type="premium" compact />
  * PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FISH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_HARVEST\_BLOCK
  * PLAYER\_LEFT\_CLICK (avec la fonctionnalité typeTarget: ONLY\_BLOCK)
  * PLAYER\_RIGHT\_CLICK (avec la fonctionnalité typeTarget: ONLY\_BLOCK)
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * Etc., plus d'informations sur [Activators info](list-of-the-activators)
* <CustomTag type="player_entity" /> : décrit les activateurs impliquant le joueur qui a déclenché l'ExecutableItem et une entité concernée par l'activateur. Abréviation \[P\_E]
  * PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_BUCKET\_ENTITY
  * PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_CUSTOM\_LAUNCH (l'entité est le projectile qui est lancé) <CustomTag type="premium" compact />
  * PLAYER\_DISMOUNT <CustomTag type="premium" compact />
  * PLAYER\_FISH\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_KILL\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * Etc., plus d'informations sur [Activators info](list-of-the-activators)
* <CustomTag type="player_target" /> : décrit les activateurs impliquant le joueur qui a déclenché l'ExecutableItem et un autre joueur, appelé la « cible », qui est traité comme la cible ou l'ennemi. Abréviation \[P\_T]
  * PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_CLICK\_ON\_PLAYER
  * PLAYER\_FISH\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_HIT\_PLAYER
  * PLAYER\_KILL\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
  * Etc., plus d'informations sur [Activators info](list-of-the-activators)
* <CustomTag type="specific_activators" /> Si une fonctionnalité concerne des activateurs de différentes catégories, il est plus clair de créer une nouvelle liste temporaire, qui sera mentionnée dans la fonctionnalité. Abréviation \[S\_A]  

## Pour \[P\_B] <CustomTag type="player_block" />

<BlockFeatures />

## Pour \[P\_E] <CustomTag type="player_entity" />

<EntityFeatures />

## Pour \[P\_T] <CustomTag type="player_target" />

<TargetPlayerFeatures />

## Pour \[S\_A] <CustomTag type="specific_activators" />
 
<TargetItemFeatures />
* Pour :
  * PLAYER_DROP_ITEM
  * PLAYER_CONSUME
  * EI_CLICK_ON_ANOTHER_INVENTORY_ITEM
  * EI_CLICKED_BY_ANOTHER_INVENTORY_ITEM


### mustBeAProjectileLaunchWithTheSameEI

* Type de catégorie d'activateur : Specific Activator List
  * PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
* Info : fonctionnalité de l'activateur liée aux projectiles, qui détermine si l'activateur doit s'exécuter avec des projectiles qui n'ont pas été lancés par le même EI.
  * Exemple : il y a un activateur PROJECTILE\_HIT\_ENTITY, avec detailedSlots: \[all slots] et, dans playerCommands: \["say hi"]
    * Si la fonctionnalité est activée, l'activateur ne fonctionnera que si cet ExecutableItem possède un autre activateur avec une commande LAUNCH : le projectile sera donc lancé depuis l'EI, puis la condition sera remplie
    * Si la fonctionnalité est désactivée, tous les projectiles, tels que l'arc vanilla, la boule de neige vanilla, les projectiles d'autres ExecutableItems et les projectiles de l'ExecutableItem lui-même exécuteront l'activateur.
* Important : lorsque `mustBeAProjectileLaunchWithTheSameEI` vaut `true`, le plugin ne peut pas garantir avec une certitude de 100 % quel slot précis de l'inventaire contenait l'item au moment du lancement. Il active la première copie correspondante de l'EI trouvée dans l'inventaire du joueur. Pour cette raison, **configurez toujours le `detailedSlots` de l'activateur pour inclure tous les slots** : ne le limitez pas à la main principale. Si l'activateur est limité à la main principale, il peut ne pas se déclencher si l'item correspondant est évalué depuis un autre slot en premier.
  * Exemple :

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: PROJECTILE_HIT_ENTITY
    mustBeAProjectileLaunchWithTheSameEI: true
    detailedSlots: [] # Empty list = all slots (-1 through 40)
```

<DamageCauseFeatures />
* Pour :
  * PLAYER_BLOCK_HIT_OF_ENTITY
  * PLAYER_BLOCK_HIT_OF_PLAYER
  * PLAYER_DEATH
  * PLAYER_HIT_ENTITY
  * PLAYER_HIT_PLAYER
  * PLAYER_RECEIVE_HIT_BY_ENTITY
  * PLAYER_RECEIVE_HIT_BY_PLAYER
  * PLAYER_RECEIVE_HIT_GLOBAL

<EffectFeatures />
* Pour :
  * PLAYER_RECEIVE_EFFECT

<CommandFeatures />
* Pour :
  * PLAYER_WRITE_COMMAND

<DropFeatures />
* Pour :
  * PLAYER_BLOCK_BREAK
  * PLAYER_FISH_FISH
  * PLAYER_KILL_ENTITY
  * PLAYER_KILL_PLAYER

<TypeTargetFeatures />
* Pour
  * PLAYER\_ALL\_CLICK
  * PLAYER\_RIGHT\_CLICK
  * PLAYER\_LEFT\_CLICK

<ClickFeatures />
* Pour :
  * PLAYER_CLICK_ON_ENTITY
  * PLAYER_CLICK_ON_PLAYER
  * INVENTORY_CLICK

<DelayFeatures />
* Pour :
  * LOOP

<InputFeatures />
* Pour :
  * PLAYER_INPUT
