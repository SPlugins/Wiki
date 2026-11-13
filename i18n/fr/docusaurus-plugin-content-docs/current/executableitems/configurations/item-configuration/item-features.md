---
description: >-
  Découvrez les fonctionnalités d'item d'ExecutableItems : matériau, lore,
  attributs, durabilité, Hiders, variables et plus, à configurer en premier.
source_hash: a5cf341732f09f83
translated_at: '2026-11-13T17:14:02.109Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Fonctionnalités des items

Liste des fonctionnalités des items, c'est la première chose à configurer sur votre item.

Les fonctionnalités premium sont signalées par le tag : <CustomTag type="premium" />

### Activateurs

* Des fonctionnalités très importantes qui vous permettent d'ajouter des capacités à votre item
* Wiki dédié à cette fonctionnalité : [Liste des activateurs EI](../activator-configuration/list-of-the-activators.md) et [Fonctionnalités des activateurs EI](/executableitems/configurations/activator-configuration/activators-features.md)


### Matériau de l'item

* Info : le matériau de l'item Minecraft de l'ExecutableItem
* Exemple : si je veux que l'ExecutableItem ait DIAMOND comme item de base, cela donne

```yaml
material: DIAMOND
```

* Vous pouvez consulter la liste des matériaux à ce lien : [Liste des matériaux](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
* Si vous voulez configurer une tête personnalisée comme matériau de l'item, consultez ce lien : [Paramètres de tête](/executableitems/configurations/item-configuration/item-features#head-settings).

### Nom ou DisplayName de l'item

* Info : le nom d'affichage de l'item. C'est le nom visible.
* Exemple : si je veux que mon item ait comme nom d'affichage un titre rouge « Epic Sword », cela donne

```yaml
name: '&cEpic Sword'
```

* Si vous voulez utiliser des couleurs HEX dans votre nom d'affichage, voici comment faire :
  * Rendez-vous sur un site qui vous aide à choisir une couleur pour obtenir son code hexadécimal. Nous recommandons [https://htmlcolorcodes.com/](https://htmlcolorcodes.com/)
  * Choisissez ensuite la couleur de votre choix, puis notez / copiez son code hexadécimal. [Référence](https://imgur.com/a/tNWtA0a)
  * Avec ce code hexadécimal, vous devez ajouter « # » au début, et le placer avant ce que vous voulez colorer. #\<HEX\_COLOR\_CODE>\<What you want to color>
  * Au final, vous obtiendrez quelque chose comme **`#DB6725&lPractice`** et le rendu aura la couleur que vous avez sélectionnée [en jeu](https://imgur.com/a/7umxduF).

### Lore ou description de l'item

* Info : le lore ou la description de l'item
* Exemple :

```yaml
lore:
- '&7Insta-Boom Bomb'
- ''
- '&f&lABILITIES:'
- '&f&l - &a&lInsta-Boom &f&l(&3&lRIGHT-CLICK&f&l)'
- '&fRight-Click on a block to use. Can only'
- '&fharvest blocks mined using your bare hands.'
- '&fBlows up a 5x5x5 area from where you used'
- '&fthe bomb. Will mostly blow up the type of block'
- '&fthat you clicked and sometimes the blocks around it.'
```

* Vous pouvez utiliser des placeholders dans le lore. Gardez simplement en tête que si vous utilisez des placeholders en dehors du plugin, puis ajoutez de nouveaux contenus au lore (enchantements personnalisés, texte personnalisé), dès qu'un des placeholders se rafraîchit, tout ce qui a été ajouté en dehors des plugins Ssomar sera supprimé. Pour éviter cela, il faut ne pas rafraîchir le lore, mais cela signifie que les placeholders ne seront pas mis à jour. À vous de choisir ce que vous préférez. Pour conclure : DES ÉLÉMENTS SUPPLÉMENTAIRES DANS LE LORE signifie PAS DE RAFRAÎCHISSEMENT signifie PAS de placeholders d'EI dans le lore, s'il vous plaît.

:::info
Pour laisser une ligne vide entre deux lignes de lore, vous pouvez ajouter '' dans le fichier de config. Si vous modifiez le lore dans Minecraft avec le GUI personnalisé, vous devrez alors utiliser '\&f'.
:::

:::info
Dans la version gratuite d'ExecutableItems, il y a une ligne « Made with ExecutableItems » : elle ne peut pas être retirée, c'est la contrepartie de la mise à jour qui a fait passer le nombre d'items de 25 à 500.
:::

### Effet de brillance (glowing enchanté)

* Info : valeur booléenne qui détermine si l'ExecutableItem a un aspect brillant / enchanté.
* Exemple : 

```yaml
glow: true
```

### Désactiver la brillance d'enchantement <CustomTag type="version" version="1.20.5" />

* Info : valeur booléenne qui force l'item à ne pas avoir l'effet de brillance, même s'il est enchanté. 
* Exemple : 

```yaml
disableEnchantGlow : true
```

:::info
ASTUCE : vous pouvez aussi retirer l'effet de brillance de certains items vanilla, comme l'étoile du Nether par exemple.
:::

### Afficher des conditions dans le lore de l'item

* Info : cela vous permet d'afficher des conditions dans le lore de l'item.
* Exemple : 

```yaml
displayConditions:
  playerConditions:
    ifSneaking: true
  worldConditions: {}
  itemConditions: {}
  placeholdersConditions: {}
  enableFeature: true
```

### Durabilité de l'item

* Info : définit la valeur de durabilité de l'item.
  * Pour les versions 1.20.5 et antérieures : la valeur de durabilité doit être inférieure ou égale à la durabilité maximale vanilla de l'item choisi.
  * Exemple : 
```yaml
durability: 150
```
  * Pour les versions 1.20.5++ : l'option de durabilité est personnalisable, ce qui permet de nouvelles fonctionnalités comme la synchronisation de l'utilisation de l'ExecutableItem avec la valeur de durabilité, et de choisir une durabilité maximale personnalisée.
  * Exemple :
```yaml
isDurabilityBasedOnUsage: true
maxDurability: 20 
durability: 19
```

### Enchantements de l'item

* Info : définit les enchantements initiaux de l'ExecutableItem lorsqu'il est donné.
* Exemple :

```yaml
enchantments:
  enchantment1: #ID Of this enchantment, you can add as many as you want
    enchantment: sharpness
    level: 1
```

### Unbreakable

* Info : valeur booléenne qui détermine si l'ExecutableItem sera incassable ou non
* Exemple : 

```yaml
unbreakable: true
```

### Attributs <CustomTag type="version" version="1.12" />

* Info : vous pouvez choisir les attributs de l'ExecutableItem.
  * `attribute` : le type d'attribut. Liste ici : [Liste des attributs](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/attribute/Attribute.html)
  * `uuid` : c'est un code dont Minecraft a besoin pour attribuer les modificateurs d'attribut. Vous pouvez l'ignorer.
  * `name` : c'est le nom d'affichage de l'Attribute Modifier. Il vous sert à écrire ce qu'il fait. Il n'a pas d'autre effet que l'affichage dans le GUI.
  * `operation` : type d'opération que l'AttributeModifier effectuera. Liste ici : [Opérations](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html)
  * `amount` : la valeur de l'AttributeModifier, elle sera appliquée à l'attribut selon l'opération choisie.
  * `slot` : le slot sur lequel l'AttributeModifier fonctionnera.
  * Exemple :

```yaml
attributes:
  attribute1: #Id of this attribute, you can add as many as you want
    attribute: GENERIC_ARMOR
    name: '&#x26;eDefault name'
    uuid: 8d6b9b6a-c84d-4c76-9b4d-81a1f44a04a0
    amount: 1.0
    operation: ADD_NUMBER
    slot: HAND
```

:::info
**Si vous utilisez la version 1.12, vous devrez suivre ces étapes :**

* Ce processus nécessite la version premium d'EI <CustomTag type="premium" />
* Générez votre item avec ses attributs sur un site web. Nous suggérons [https://mapmaking.fr/give1.12/](https://mapmaking.fr/give1.12/)
* Donnez ensuite l'item à vous-même dans Minecraft
* Tout en le tenant en main, exécutez la commande /ei create \<id>
* Et c'est tout ! Votre EI a maintenant les attributs importés automatiquement.
:::

#### **Keep default attributes**

* Info : valeur booléenne pour conserver ou non l'attribut par défaut de l'item.
* Exemple :

```yaml
keepDefaultAttributes: true
ignoreKeepDefaultAttributesFeature: false
```

:::warning
Sur 1.21+, un item sans attributs propres qui n'a pas ces deux lignes **perd les attributs par défaut de son matériau** : une épée frappe comme un poing, une pièce d'armure ne donne aucune armure. ExecutableItems liste ces items dans la console après chaque chargement. Pour corriger tous vos items d'un coup : `/ei util-set-keepdefaultattributes-all-ei true`.
:::

:::info Table de forge
Avec `keepDefaultAttributes: true`, un item amélioré à la table de forge (diamant vers netherite) obtient les attributs par défaut de son nouveau matériau (armure, robustesse et résistance au recul de la netherite). Les attributs propres à l'item sont conservés.
:::

* Sur ce lien, vous trouverez un tutoriel sur les attributs et leurs fonctionnalités.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HqyF0QBYIY4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


#### **ignoreKeepDefaultAttributesFeature :** 

* Info : il ignore le réglage de keep default attributes. Utile pour le troisième cas de l'explication du tableau :
* Exemple :

```yaml
ignoreKeepDefaultAttributesFeature: true
```

### Custom model data <CustomTag type="version" version="1.14" />

* Info : 
  * Pour les versions de Minecraft antérieures à 1.21.4 : entier qui définit la valeur de la fonctionnalité customModelData de l'item. Utile pour créer différentes textures pour un item.
  * Depuis la version 1.21.4 de Minecraft, vous pouvez aussi ajouter du texte et des booléens.
* Exemple : 

```yaml
# For the Minecraft version before 1.21.4
customModelData: 2232

# Since the 1.21.4
# Use ; to separate your data
customModelData: 1.0;true;hello;5.0;false;true;my text 2

# A vanilla item like this : /give @p brick[custom_model_data={floats:[1.0],flags:[true],strings:["hello"]}] 1
# Will look like this in EI : 
customModelData: 1.0;true;hello
```

* Tutoriel : [https:/.ssomar.com/executableitems/questions-or-guides/premium-custom-textures](https:/.ssomar.com/executableitems/questions-or-guides/premium-custom-textures)

### Fonctionnalités Item Rarity <CustomTag type="version" version="1.20.5" />

* Info : la rareté est une statistique vanilla appliquée aux items et aux blocs pour indiquer leur valeur et leur difficulté d'obtention. Elle n'a aucun effet sur le gameplay. Il existe quatre niveaux de rareté : Common, Uncommon, Rare et Epic.
  * `enableRarity` : booléen qui indique si la fonctionnalité est activée ou non
  * `rarity` : type de rareté
* Exemple :

```yaml
itemRarity:
  enableRarity: false
  rarity: COMMON
```

### Fonctionnalités Equippable <CustomTag type="version" version="1.21.2" />

* Info : cette section configure le comportement d'un item équipable. Lorsqu'elle est activée, l'item peut être équipé dans un slot désigné, en déclenchant éventuellement un effet sonore. Vous pouvez aussi spécifier un modèle personnalisé pour l'item équipé, définir s'il subit des dégâts lorsque le porteur est blessé, et régler des flags pour autoriser ou restreindre l'échange et la mise au rebut. Vous pouvez également restreindre les entités autorisées à équiper l'item.
  * `enable` : mettez true pour activer l'équipement de cet item
  * `slot` : le slot d'équipement (par ex. CHEST, HEAD, LEGS, FEET) dans lequel l'item est équipé
  * `enableSound` : booléen pour jouer un son lorsque l'item est équipé
  * `sound` : effet sonore à jouer lorsque l'item est équipé
  * `equipModel` : (facultatif) modèle personnalisé pour l'item équipé (par ex. « mynamespace:mymodel »)
  * `cameraOverlay` : (facultatif) overlay de caméra personnalisé lorsque l'item est équipé
  * `damageableOnHurt` : booléen qui détermine si l'item perd de la durabilité lorsque le porteur est blessé
  * `dispensable` : booléen qui détermine si l'item peut être mis au rebut (retiré / jeté)
  * `swappable` : booléen qui détermine si l'item peut être équipé par un clic droit (il est alors échangé avec l'item porté dans ce slot)
  * `allowedEntities` : liste des entités autorisées à équiper cet item
* Exemple :

```yaml
equippableFeatures:
    enable: false
    slot: CHEST
    enableSound: false
    sound: ITEM_ARMOR_EQUIP_DIAMOND

    equipModel: "" # Example: "mynamespace:mymodel"
    cameraOverlay: "" # Example: "mynamespace:mymodel"

    damageableOnHurt: false
    dispensable: true
    swappable: true

    allowedEntities:
     - PLAYER
```

### Fonctionnalités Repairable <CustomTag type="version" version="1.21.2" />

* Info : fonctionnalités liées à la réparation de l'ExecutableItem.
  * `enable` : valeur booléenne qui détermine si la fonctionnalité est activée ou non
  * `repairCost` : valeur entière qui représente le coût de réparation à l'enclume
* Exemple :

```yaml
repairableFeatures:
    enable: false
    repairCost: 2 
```

### Glider <CustomTag type="version" version="1.21.2" />

* Info : fonctionnalité qui permet de planer avec l'item, comme vous le feriez avec l'item vanilla « elytra ».
* Exemple :

```yaml
glider: false
```

### itemModel <CustomTag type="version" version="1.21.2" />

* Info : chemin d'un modèle d'item personnalisé dans le pack de textures, au format \<mynamespace\:model\_id>, qui ciblera assets/\<mynamespace>/models/item/\<model\_id>.
* Exemple :

```yaml
itemModel: "" # "mynamespace:mymodel"
```

### tooltipModel <CustomTag type="premium" /> <CustomTag type="version" version="1.21.2" />

* Info : chemin d'un modèle de tooltip personnalisé dans le pack de textures, au format \<mynamespace\:model\_id>, qui ciblera /assets/\<mynamespace>/textures/gui/sprites/tooltip/\<id>\_frame
* Exemple :

```yaml
tootipModel: "" # "mynamespace:mymodel"
```

### Fonctionnalités liées à l'item jeté au sol

Ici, vous découvrirez les fonctionnalités qui ne sont visibles que lorsque l'item est jeté au sol.

#### Brillance quand l'item est jeté

* Info : lorsque l'item est jeté, il a un effet de brillance
* Exemple : 

```yaml
dropFeatures:
  glowDrop: false
```

#### Couleur de la brillance quand l'item est jeté

* Info : si l'item a glowEffect activé, il est possible de choisir la couleur de l'effet de brillance lorsqu'il est jeté.
* Couleurs possibles : [Référence des couleurs](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)
* Exemple :

```yaml
dropFeatures:
  glowDrop: false
  glowDropColor: WHITE
```

#### Nom d'affichage quand l'item est jeté

* Info : choisissez si l'item affichera son nom d'affichage sous forme de texte flottant lorsqu'il est jeté.
* Exemple : 

```yaml
dropFeatures:
  displayNameDrop: true
```

###  NBT Tags

* Info : nécessite le plugin [**NBTAPI**](https://www.spigotmc.org/resources/nbt-api.7939/) disponible sur Spigot.
Cette fonctionnalité vous permet d'ajouter vos propres tags NBT dans votre ExecutableItem.
  * `type` : le type de valeur que vous stockez, par ex. :
    * BOOLEAN: true | false
    * STRING: car
    * INTEGER: 6
    * DOUBLE: 17.6
    * COMPOUND : exemple ci-dessous, cela dépendra de vos besoins et de ce que vous voulez ajouter.
  * `key` : la clé (string) qui représente ce stockage nbt
  * `value` : valeur du tag NBT que vous ajoutez
* Exemple :

```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: 3
 '2': #Id of this nbt, you can add as many as you want
    type: STRING
    key: 'MyOtherKey'
    value: 'myValue'
 '3': #Id of this nbt, you can add as many as you want
    type: BOOLEAN
    key: 'KeyKeyKeykey'
    value: true
 '4': #Id of this nbt, you can add as many as you want
    type: DOUBLE
    key: 'KeyKeyKeykeykeykey'
    value: 0.5
 '5': #Id of this nbt, you can add as many as you want
    type: BYTE
    key: 'IsCustom'
    value: 1
 '6': #Id of this nbt, you can add as many as you want
    key: ExtraAttributes
    type: COMPOUND
    value:
      nbt:
        '0':
          key: id
          type: STRING
          value: TRIAL_OF_THE_SUN_GOD
 '7': #Id of this nbt, you can add as many as you want
    key: CanDestroy
    type: STRING_LIST
    value:
    - minecraft:stone
 '8':
    key: PublicBukkitValues
    type: COMPOUND
    value:
      nbt:
        '0':
          key: auraskills:item_modifiers
          type: COMPOUND_LIST
          value:
            '0':
              key: comp0
              nbt:
                '0':
                  type: COMPOUND
                  value:
                    nbt:
                      '0':
                        key: auraskills:stat
                        type: STRING
                        value: auraskills/wisdom
                      '1':
                        key: auraskills:value
                        type: DOUBLE
                        value: '%rand:1|10000%'
                      '2':
                        key: auraskills:operation
                        type: STRING
                        value: add
```

### Bukkit tags

* Info : vous pouvez ajouter des valeurs de tag Bukkit à votre ExecutableItem.
* Exemple :

```yaml
tags:
 - mytag:blabla1
 - myothertag:blabla2
```

En jeu, cela sera représenté dans PublicBukkitValues, comme ceci

```yaml
"executableitems:mytag":"blabla1"
"executableitems:myothertag":"blabla2"
```

Vous pouvez aussi écrire des placeholders %rand% dans le champ de valeur des NBT. Ne fonctionne que pour les types de données STRING, INTEGER et DOUBLE
```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: '%rand:-100|100%'
```
Fonctionne aussi dans l'éditeur en jeu
```
INTEGER::foo::%rand:1|2%
```  
  
Vous pouvez aussi enregistrer des nbt dans le PDC (Persistent Data Container) si vous le souhaitez.
* Exemple en jeu : `integer::take::0::true`
* Config de l'item :
```yml
nbt:
  '0':
    key: take
    saveInPDC: true
    type: INT
    value: 0
```

### Fonctionnalités Hiders

* Info : paramètres liés au masquage de fonctionnalités normalement affichées sur votre ExecutableItem. Toutes les fonctionnalités, même masquées, restent fonctionnelles.
  * `hideEnchantments` : valeur booléenne qui indique si les enchantements de l'ExecutableItem seront affichés dans le lore ou non.
  * `hideUnbreakable` : valeur booléenne qui indique si la description d'incassable sera affichée dans le lore ou non.
  * `hideAttributes` : valeur booléenne qui indique si les attributs de l'ExecutableItem seront affichés dans le lore ou non.
  * `hidePotionEffects` : valeur booléenne qui indique si les effets de potion de l'ExecutableItem seront affichés dans le lore ou non. Dans les versions 1.20.5 ou +, utilisez hideAdditionalTooltip.
  *   hideAdditionalTooltip (disponible uniquement en 1.20.5++) 

      Paramètre pour afficher / masquer les effets de potion, les informations de livre et de feu d'artifice, les tooltips de carte, les motifs de bannières et les enchantements des livres enchantés. Il remplace l'ancien hidePotionEffects
  * `hideUsage` : valeur booléenne qui indique si la fonctionnalité personnalisée Usage du plugin ExecutableItems, propre à l'item, sera affichée dans le lore ou non.
    * Vous pouvez afficher manuellement l'usage avec le placeholder %usage% en l'ajoutant lors de la modification de votre lore.
  * `hideDye` : valeur booléenne qui indique si la couleur de teinture (#\<color>) de l'ExecutableItem sera affichée dans le lore ou non.
  * `hideArmorTrim` : valeur booléenne qui indique si l'ornement d'armure de l'ExecutableItem sera affiché dans le lore ou non.
  * `hidePlacedOn` : valeur booléenne qui indique si le tag NBT « Can be placed on: \[...] » de l'ExecutableItem sera affiché dans le lore ou non.
  * `hideDestroys` : valeur booléenne qui indique si le tag NBT « Can destroy: \[...] » de l'ExecutableItem sera affiché dans le lore ou non.
  * `hideToolTip` : valeur booléenne qui indique si le tooltip est masqué ou non. (Disponible uniquement en 1.20.5++)
* Exemple :

```yaml
hiders:
  hideEnchantments: false
  hideUnbreakable: false
  hideAttributes: false
  hidePotionEffects: false
  hideAdditionalTooltip: false
  hideUsage: false
  hideDye: false
  hideArmorTrim: false
  hidePlacedOn: false
  hideDestroys: false
  hideToolTip: false
```

### Fonctionnalités Usage

Cette section explique ce qu'est l'usage et ses fonctionnalités.

#### Usage

* Info : l'usage est une valeur entière stockée dans votre ExecutableItem, elle peut être modifiée via usageModification dans un activateur ou via des commandes. Mais ce n'est pas qu'une simple valeur stockée : il a été conçu pour représenter le « système de durabilité personnalisé » de votre ExecutableItem, ce qui signifie que si l'usage tombe à 0, votre item est supprimé.
* Exemple : 
  * Un usage de 1 ne signifie pas que l'item a une durabilité de un : comme expliqué précédemment, c'est un système de durabilité personnalisé. L'item durera tant que l'usage n'atteint pas 0. Par exemple, si vous ajoutez à votre item un activateur qui a la fonctionnalité usageModification avec la valeur « -1 », dès que l'activateur se déclenche une fois, votre item disparaît.
  * Dans la même idée, avec un usage de 1, si aucun activateur ne change l'usage de l'item, notre item durera indéfiniment, jusqu'à ce que, encore une fois, une commande ou un nouvel activateur ajouté à l'item modifie l'usage à une valeur inférieure ou égale à 0 : l'item sera alors supprimé.
    * ```yaml
      usage: 1
      ```
  * L'usage, comme nous l'avons dit, ne se limite pas à un système de durabilité, car il peut aussi augmenter ! Par exemple, si nous avons un activateur qui, au lieu d'avoir une valeur négative dans usageModification, a une valeur positive, alors notre usage augmentera à chaque déclenchement de l'activateur ^^
  * Maintenant, si vous ne voulez que votre item ni n'augmente ni ne diminue, c'est-à-dire ne pas utiliser ce stockage de valeur personnalisé, vous pouvez mettre l'usage à -1.
    * ```yaml
      usage: -1
      ```

#### Usage limit <CustomTag type="premium" />

* Info : valeur entière qui limite le maximum que l'usage peut atteindre. (La valeur ne peut pas être 0)
* Exemple : 

```yaml
usageLimit: 600 #Usage will not be able to go up more than this value, -1 to don't take it into account
```

#### Uses per day

* Info : valeur entière qui limite le nombre de fois où vous pouvez utiliser l'item chaque jour en vie réelle
* Exemple : 

```yaml
usePerDay: 200 # -1 to ignore it
```

### Fonctionnalités Food <CustomTag type="version" version="1.20.5" />

* Info : cette fonctionnalité vous permet de personnaliser les paramètres de nourriture liés à votre ExecutableItem
  * `nutrition` : valeur entière qui représente le nombre de « demi-points de nourriture » que l'item restaurera au joueur une fois mangé
    * Pour mieux comprendre : le joueur a 20 de nutrition maximum, ce qui s'affiche en jeu sous forme de 10 icônes de faim, chaque icône pouvant être divisée en 2.
  * `saturation` : valeur entière qui représente la saturation que le joueur recevra une fois l'item mangé.
  * `isMeat` : valeur booléenne qui fera considérer l'item comme de la nourriture. Elle est appliquée de force : si vous mettez cette valeur à true, n'importe quel item, même ceux qui ne peuvent pas être mangés, sera considéré comme de la nourriture et sera donc consommable.
  * `canAlwaysEat` : valeur booléenne qui indique si l'item peut toujours être mangé, même lorsque la barre de nourriture du joueur est pleine.
*  Exemple :

```yaml
foodFeatures:
  nutrition: 1
  saturation: 1
  isMeat: false
  canAlwaysEat: true
```

### Fonctionnalités Consumable <CustomTag type="version" version="1.21.4" />

* Info : fonctionnalités liées au consumable, elles vous permettent de personnaliser les options de consommation, et sont proches de la fonctionnalité Food.
  * `enable` : booléen qui indique l'activation ou la désactivation des fonctionnalités consumable
  * `animation` : ANIMATION\_TYPE qui sera joué lorsque l'ExecutableItem est mangé / consommé
  * `sound` : SOUND qui sera joué lorsque l'item est mangé / consommé
  * `hasConsumeParticles` : valeur booléenne qui indique si l'item produira des particules lorsqu'il est mangé
  * `consumeSeconds` : nombre de secondes nécessaires pour manger / consommer l'item.
* Exemple :

```yaml
consumableFeatures:
  enable: true
  animation: SPYGLASS
  sound: ITEM.ARMOR.EQUIP_DIAMOND
  hasConsumeParticles: false
  consumeSeconds: 3
```

### Paramètres de potion

Ici, vous pouvez personnaliser les fonctionnalités de potion de votre ExecutableItem si le matériau de l'item est une potion.

#### Couleur de la potion

* Info : entier de couleur MapInfo qui représente une couleur. Utilisez un site comme [https://www.tydac.ch/color/](https://www.tydac.ch/color/) pour obtenir la valeur MapInfo d'une couleur.
* Exemple :

```yaml
potionFeatures:
  potionColor: 10265481
```

#### Type de potion

* Info : type de potion que vous voulez pour l'item potion. C'est seulement une fonctionnalité visuelle, elle n'affecte pas le comportement réel de la potion. La liste est disponible ici : [Types de potion](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionType.html)
* Exemple :

```yaml
potionFeatures:
  potionType: WIND_CHARGED
```

#### Effets de potion

* Info : ici, vous pouvez créer les effets de potion de votre item
  * `potionEffectType` : PotionEffectType choisi, liste disponible ici : [Effets de potion](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
  * `isAmbient : valeur booléenne qui rend la potion ambiante, ce qui fait produire à l'effet de potion plus de particules, translucides.
  * `duration` : valeur entière en ticks (20 ticks = 1 seconde) qui représente la durée de l'effet de potion.
  * `amplifier` : valeur entière qui représente le niveau / degré / force de l'effet de potion. Un amplifier de 0 signifie niveau 1, un amplifier de 1 signifie niveau 2, et ainsi de suite.
  * `hasParticles` : valeur booléenne qui active ou désactive l'affichage des particules de l'effet autour du joueur.
  * `hasIcon` : valeur booléenne qui active ou désactive l'affichage de l'icône de l'effet en haut à droite de l'écran du joueur.
* Exemple :

```yaml
potionFeatures:
  potionColor: 10265481
  potionType: FIRE_RESISTANCE
  potionEffects:
    pEffect0:
      isAmbient: false
      duration: 30
      potionEffectType: HEALTH_BOOST
      amplifier: 0
      hasParticles: false
      hasIcon: false
```

### Couleur d'armure

* Info : si votre ExecutableItem est une armure en cuir, vous pouvez ici choisir une valeur de couleur MapInfo, que vous pouvez obtenir sur ce site [https://www.tydac.ch/color/](https://www.tydac.ch/color/), pour changer la couleur.
  * <CustomTag type="version" version="1.21.3" /> Sur Paper, `armorColor` est aussi disponible sur les autres pièces d'armure (casque, plastron, jambières, bottes de n'importe quel matériau, armure de cheval et de loup) et sur l'élytre. Il définit leur composant vanilla `dyed_color`, que les modèles personnalisés (Nexo, ItemsAdder...) utilisent pour leur teinte : sans lui, un tel modèle peut être invisible. `/ei create` conserve cette couleur depuis l'item que vous tenez en main.
* Exemple :

```yaml
armorColor: 7702341
```

### Paramètres de tête

Ici, vous pouvez choisir la configuration des paramètres de tête, c'est-à-dire la tête personnalisée à partir d'une valeur de tête de joueur ou d'une base de données.

#### Si vous n'avez pas de plugin de base de données de têtes <CustomTag type="version" version="1.13" />

* Si vous voulez ajouter une tête personnalisée en 1.13++ sans plugin de base de données, vous pouvez suivre les étapes suivantes :
  * Définissez le matériau de l'ExecutableItem sur PLAYER\_HEAD
  * Rendez-vous sur un site de têtes personnalisées, comme celui-ci [https://minecraft-heads.com/custom-heads](https://minecraft-heads.com/custom-heads)
  *   Récupérez ensuite la Value de la tête\

      
  * Copiez maintenant cette valeur et collez-la dans la fonctionnalité headValue d'ExecutableItems
  * Exemple :
  * ```yaml
    headValue: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTk4ZGY0MmY0NzdmMjEzZmY1ZTlkN2ZhNWE0Y2M0YTY5ZjIwZDljZWYyYjkwYzRhZTRmMjliZDE3Mjg3YjUifX19
    ```

#### Si vous avez le plugin Head Database <CustomTag type="version" version="1.12" />

* Si vous voulez ajouter une tête personnalisée en 1.12++ et que vous avez le plugin Head Database, vous pouvez suivre les étapes suivantes :
  * Ouvrez le GUI de votre plugin et récupérez l'ID de la tête que vous voulez
  * Collez-le ensuite dans les fonctionnalités de tête, sur headDBID
  * Exemple :
  * ```yaml
    headDBID: 44328
    ```
* Voici les liens au cas où vous ne l'auriez pas et le voudriez.
  * Version premium : [Head Database](https://www.spigotmc.org/resources/head-database.14280/)
  * Version gratuite : [Head DB](https://www.spigotmc.org/resources/headdb-head-menu-auto-update-free.84967/)

### whitelistedWorlds

* Info : liste de String des noms des mondes dans lesquels vous voulez empêcher ou autoriser les joueurs à utiliser l'ExecutableItem.
* Exemple :

```yaml
whitelistedWorlds:
- ZombieSurvivalWorld_the_end # This allows the use of the EI in that world
- '!ApocalypseWorld' # Using ! Disables the use of the EI in that world
```

### Store item info

* Info : valeur booléenne qui indique si l'information est stockée ou non dans l'item lui-même. Actuellement, elle stocke la fonctionnalité « owner ». Donc si vous voulez utiliser le placeholder %owner% ou les conditions liées à owner, vous devez l'activer.
* Exemple :

```yaml
storeItemInfo: false
```

### Fonctionnalités Owner

#### canBeUsedOnlyByTheOwner

* Info : valeur booléenne qui indique si l'item ne peut être utilisé que par son propriétaire ou non.
  * Cela ne fonctionne que si store item info est activé, afin que l'item ait un propriétaire.
* Exemple : 

```yaml
canBeUsedOnlyByTheOwner: false
```

#### cancelEventIfNotOwner

* Info : valeur booléenne qui indique que si l'item n'est pas utilisé par son propriétaire, tous les événements sont annulés. Cela signifie que si l'activateur est, par exemple, PLAYER\_BREAK\_BLOCK et que quelqu'un qui n'est pas le propriétaire essaie d'utiliser cet item, il ne pourra casser aucun bloc, car tous les événements seront annulés.
  * Cela ne fonctionne que si store item info est activé, afin que l'item ait un propriétaire.
* Exemple : 

```yaml
cancelEventIfNotOwner: false
```

#### onlyOwnerBlackListedActivators

* Info : liste d'ID d'activateurs de votre ExecutableItem. C'est une liste noire qui désactive les fonctionnalités activées de canBeUsedOnlyByTheOwner : tous les ID d'activateurs présents ici, qui ciblent un activateur de l'ExecutableItem, pourront être utilisés par tout le monde, même si canBeUsedOnlyByTheOwner est à true.
  * Cela ne fonctionne que si store item info est activé, afin que l'item ait un propriétaire.
* Exemple : 

```yaml
onlyOwnerBlackListedActivators:
- activator0
- activator1
```

### cancelEventIfNoPermission

* Info : valeur booléenne qui indique que si le joueur n'a pas la permission (ei.item.\<id>) d'utiliser l'item, tous les événements sont annulés. Cela signifie que si l'activateur est, par exemple, PLAYER\_BREAK\_BLOCK et que quelqu'un qui n'a pas la permission d'utiliser cet item essaie de l'utiliser, il ne pourra casser aucun bloc, car tous les événements seront annulés.

```yaml
cancelEventIfNoPermission: true
```

### Conserver l'item à la mort

* Info : valeur booléenne qui indique si le joueur conservera l'item après sa mort ou non.
* Exemple : 

```yaml
keepItemOnDeath: true
```

:::info
Compatible avec la fonctionnalité keepInventory de WorldGuard et avec la gamerule keepInventory vanilla
:::

### Disable stack <CustomTag type="premium" />

* Info : valeur booléenne qui indique s'il faut empêcher ou non l'ExecutableItem d'être empilé. Mettre cette fonctionnalité à true fera que le customStackSize de cet item sera de 1.
* Exemple : 

```yaml
disableStack: true
```

### customStackSize <CustomTag type="premium" /> <CustomTag type="version" version="1.20.5" />

* Info : valeur entière pour définir la taille de la pile de cet item. Elle remplacera la quantité de pile actuelle.
* Pour mieux comprendre : le diamond\_sword vanilla a une taille de pile de 1, puisqu'il ne peut pas être empilé ; avec cette fonctionnalité, vous pouvez augmenter cette valeur. À l'inverse, la terre (dirt) a une taille de pile de 64, mais vous pouvez la diminuer, par exemple à 20.
* Exemple : 

```yaml
customStackSize: 32
```

### Paramètres des variables

* Info : les variables sont un moyen de stocker des informations dans votre ExecutableItem. Elles permettent de suivre des quantités, de stocker des positions, et en fait de stocker ce que vous voulez. Elles aident à créer des comportements d'item dynamiques et personnalisables : les variables vous permettent de créer des comportements uniques pour chaque item en stockant et en suivant des données propres à cet item. Par exemple, vous pouvez suivre combien de fois un joueur a utilisé un item en particulier, ou combien de joueurs il a tués avec.
  * `variableName` : nom de la variable, il servira de référence avec %var\_\<name>% pour l'utiliser dans le lore, dans les commandes, etc. Ce nom ne peut pas être « id » ou « usage », ni contenir d'espaces.
  * `type` : VariableType de la variable, il peut s'agir des types suivants, avec des exemples d'utilisation :
    * STRING : avec ce type de variable, vous pouvez stocker des valeurs STRING, comme des mots, des nombres, des lettres, des caractères, etc. Par exemple, vous pouvez stocker le nom du dernier joueur touché. Ce type de variable ne prend pas en charge `variableModification(type:MODIFICATION)` pour augmenter ou diminuer la valeur. Elle est statique, sauf si elle est remplacée par un `variableModification(type:SET)` qui écrasera l'ancienne valeur.
    * NUMBER : avec ce type de variable, vous pouvez stocker des valeurs FLOAT, comme des nombres. Par exemple, si vous voulez stocker le nombre de blocs cassés, le nombre de kills, suivre les secondes avant qu'un événement se produise, etc. Ce type de variable prend en charge `variableModification(type:MODIFICATION)` et `variableModification(type:SET)`.
    * LIST : cette variable est une variable de type liste qui stocke des valeurs STRING. Elle est utile pour stocker une liste d'éléments, par exemple pour suivre les blocs cliqués et les ajouter à cette liste, ou y ajouter les joueurs tués, etc.
  * `isRefreshableClean` : valeur booléenne qui active le refresh clean. Cela permet d'ajouter des lignes de lore personnalisées sans qu'elles soient supprimées lorsque la variable est mise à jour. Il est recommandé de la laisser à true.
  * `refreshTagDoNotEdit` : généré automatiquement par le plugin. Il aide les fonctions de `isRefreshableClean` à fonctionner correctement. Ne le touchez donc pas.
  * `papiParser` : la valeur string qui contient la chaîne PlaceholderAPI dans laquelle se trouve la valeur de la variable à parser. Son but est de vous permettre d'insérer des valeurs de variables dans des placeholders PlaceholderAPI et d'afficher les résultats dans le lore. 
    * Ex :
      * ID de la variable : `level`
      * Valeur string de papiParser : `%math_<VAR>*<VAR>%`
        * La chaîne `<VAR>` représente la valeur actuelle de la variable lors du parsing. Si vous voulez placer la valeur à plusieurs endroits de la chaîne du placeholder PlaceholderAPI, tapez simplement `<VAR>` aux endroits où vous en avez besoin.
      * Chaîne de placeholder à mettre dans le lore : `%var_level_papi%`
* Exemple
  * ```yaml
    variables:
      var2:
        variableName: ThisVariableIsTypeIntegerAndICanDoModifications
        type: NUMBER
        default: 10.0
      var1:
        variableName: anotherVariable # This variable is type string
        type: STRING
        default: '' #It starts with no value, we can then change it from an activator or using commands
      var0:
        variableName: nameOfVariable
        type: LIST
        default:
        - value1
        - value2
        - '1'
        - '2'
    ```
* Vous pouvez consulter plus d'informations sur les autres types de variables sur la page suivante :
  * [Variables SCore](/tools-for-all-plugins-score/score-variables)

### Fonctionnalités de give à la première connexion

* Info : ici, vous pouvez personnaliser la fonctionnalité qui donne l'item lorsque le joueur rejoint le serveur pour la première fois.
  * giveFirstJoin : valeur booléenne qui indique si la fonctionnalité est activée ou non
  * giveFirstJoinAmount : valeur entière qui représente combien d'items de cet ExecutableItem seront donnés au joueur.
  * giveFirstJoinSlot : slot dans lequel l'ExecutableItem sera donné au joueur.
* Exemple :

```yaml
giveFirstJoinFeatures:
  giveFirstJoin: false
  giveFirstJoinAmount: 1
  giveFirstJoinSlot: 0
```

### Fonctionnalité Item Recognition <CustomTag type="premium" />

* Info : cette fonctionnalité permet de faire en sorte que d'autres items, qui ne sont pas l'ExecutableItem, soient traités comme l'ExecutableItem que vous modifiez. L'idée est de travailler avec des recognitions : c'est une liste de types de reconnaissance, et si l'un d'eux correspond entre votre ExecutableItem et un autre item (même s'il n'est pas un ExecutableItem), les fonctionnalités de l'ExecutableItem seront aussi présentes sur cet autre item. Cela fonctionne tant qu'il est reconnu selon les conditions des recognitions.
  * Options de reconnaissance disponibles :
    * NAME : active la reconnaissance pour tous les items dont le nom personnalisé correspond à celui de l'ExecutableItem
    * MATERIAL : active la reconnaissance pour tous les items dont le matériau correspond à celui de l'ExecutableItem
    * LORE : active la reconnaissance pour tous les items dont le lore correspond à celui de l'ExecutableItem
* Par exemple, si vous créez un ExecutableItem pioche en diamant, qui a un activateur PLAYER\_RIGHT\_CLICK et, dans les commandes, « SEND\_MESSAGE I am a pickaxe », chaque clic droit enverra ce message dans le chat de Minecraft. Maintenant, si vous activez l'item recognition, disons pour le matériau, TOUTES les pioches en diamant du serveur déclencheront cet activateur et le message sera donc affiché.
* Exemple : 

```yaml
recognitions:
- NAME
- MATERIAL  
- LORE 
```

* Scénarios d'exemple :
  * Si un item EI n'a que l'item recognition `MATERIAL` et est un DIAMOND, tous les diamants qui existent sur le serveur se comporteront comme cet item EI
  * Si un item EI n'a que l'item recognition `NAME` et s'appelle « \&dAngle », tout item portant le nom « \&dAngle » se comportera comme l'item EI d'origine. MAIS si le nom était « \&eAngle » ou un autre nom, cela ne fonctionnera pas.
  * Si un item EI n'a que l'item recognition `LORE`, un item ne se comportera comme l'EI que s'il a EXACTEMENT les mêmes codes couleur sur les lignes de lore et exactement les mêmes majuscules et minuscules pour chaque lettre et chaque caractère.
  * Si un item EI n'a que l'item recognition `MATERIAL` et `NAME`, les items doivent avoir le NOM et le MATÉRIAU EXACTS de l'item EI pour être considérés comme un item EI.
* Gardez à l'esprit que si l'un de vos ExecutableItems a les item recognitions activées sur MATERIAL, vous ne devriez pas utiliser d'autres item recognitions basées sur MATERIAL pour un autre ExecutableItem ayant le même MATERIAL. La raison est que s'il y a 2 ExecutableItems avec la recognition MATERIAL activée et que les deux sont DIAMOND\_BLOCK, seul le premier par ordre alphabétique aura la priorité la plus élevée si quelqu'un déclenche un DIAMOND\_BLOCK.

## Fonctionnalités Use cooldown <CustomTag type="version" version="1.21.2" />

* Info : fonctionnalité qui ajoute à l'item un cooldown d'utilisation de style vanilla, similaire au cooldown des perles d'Ender ou des fruits de chorus.
  * `cooldownGroup` : valeur string qui définit un groupe de cooldown. Les items du même groupe de cooldown partagent le même cooldown. Doit être en minuscules et respecter le format NamespacedKey (par ex. « mygroup » ou « namespace:mygroup »)
  * `vanillaUseCooldown` : valeur entière qui représente la durée du cooldown en secondes
* Exemple :

```yaml
useCooldown:
  cooldownGroup: "custom_weapon_group"
  vanillaUseCooldown: 5
```

:::info
Ce cooldown est différent du système de cooldown des activateurs. C'est un cooldown vanilla de Minecraft qui affiche l'item « grisé » dans la hotbar pendant la période de cooldown.
:::


## Selon le type d'item

### Fonctionnalités Container

* Info : ici, vous pouvez personnaliser les fonctionnalités de conteneur si le bloc est un conteneur, comme le coffre et le tonneau.
  * `isLocked` : valeur booléenne qui indique si le conteneur est verrouillé ou non
  * `lockedName` : valeur string qui représente le nom de la clé si le conteneur est verrouillé. C'est une fonctionnalité de Minecraft : si vous avez un item portant le même nom que lockedName, vous pourrez ouvrir le coffre, sinon non.
  * `containerContent` : liste de matériaux à l'intérieur du conteneur une fois posé, au format slot:\<slot>;\<material>
* Exemple :

```yaml
containerFeatures:
  isLocked: true
  lockedName: thisIsTheKey
  containerContent:
  - slot:0;minecraft:loom
```

### Tool Rules <CustomTag type="version" version="1.20.5" />

Info : ici, vous pouvez définir les règles des outils.

#### Enable

* Info : valeur booléenne pour choisir si les Tool Rules sont activées ou non.
* Exemple :

```yaml
toolRules:
  enable: true
```

#### Default mining speed

* Info : valeur flottante pour définir la vitesse de minage par défaut de l'ExecutableItem.
* Exemple :

```yaml
toolRules:
  enable: true
  defaultMiningSpeed: 1.0
```

#### Damage per block break

* Info : valeur entière à définir comme valeur de durabilité qui sera retirée après que l'ExecutableItem a cassé un bloc. 
* Exemple :

```yaml
toolRules:
  enable: false
  damagePerBlock: 1
```

#### Specific tool rules

* Info : vous pouvez choisir la vitesse de minage et le drop pour certains blocs avec l'ExecutableItem, afin de personnaliser l'outil.
  * `miningSpeed` : valeur flottante pour définir la vitesse de minage de l'ExecutableItem pour les blocs sélectionnés dans la règle d'outil.
  * `correctForDrops` : valeur booléenne qui indique si le bloc sera lâché (drop) ou non avec l'ExecutableItem.
  * `blocks` : liste de BLOCS auxquels appliquer les règles d'outil.
* Exemple :

```yaml
toolRules:
  toolRule0: #ID Of this tool rule, you can add as many as you want
    miningSpeed: 1.0
    correctForDrops: true
    blocks:
    - STONE
  enable: true
```

### chargedProjectiles

* Info : fonctionnalité qui permet d'avoir des projectiles déjà chargés lorsque l'ExecutableItem est une arbalète et qu'il est donné au joueur.
  * Le format du matériau doit être `minecraft:<id>`. Pour l'instant, les items vanilla sont pris en charge.
* Exemple :

```yaml
material: CROSSBOW
chargedProjectiles:
- minecraft:arrow
```

### bundleContent

* Info : fonctionnalité qui permet d'avoir déjà du contenu dans l'item si l'ExecutableItem est un bundle et qu'il est donné au joueur.
  * Le format du matériau doit être `minecraft:<id>`. Pour l'instant, les items vanilla sont pris en charge.
* Exemple :

```yaml
material: BUNDLE
bundleContent:
- minecraft:stone
- minecraft:dirt
```

### Fonctionnalités Firework

* Info : fonctionnalité qui permet d'avoir des fonctionnalités de feu d'artifice personnalisées si l'ExecutableItem est un feu d'artifice.
* Exemple :

```yaml
fireworkFeatures:
  lifeTime: 1
  fireworkExplosions:
    explosion_0:
      colors:
      - BLUE
      fadeColors:
      - RED
      type: BALL_LARGE
      hasTrail: true
      hasTwinkle: true
    explosion_1:
      colors:
      - GREEN
      fadeColors: []
      type: CREEPER
      hasTrail: true
      hasTwinkle: true
```

Pour les couleurs, vous pouvez utiliser soit les [noms de couleurs](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html) classiques, soit `RGB-<0-255>-<0-255>-<0-255>`

### Fonctionnalités Spawner <CustomTag type="version" version="1.20.5" />

* Info : fonctionnalité qui permet de créer des spawners personnalisés avec ExecutableItems
* Paramètres :
  * `spawnCount` : définit combien d'entités apparaissent à chaque spawn
  * `spawnDelay` : définit le délai avant le premier spawn après la pose du spawner (en ticks, 20 ticks = 1 seconde)
  * `spawnRange` : la portée de spawn
  * `requiredPlayerRange` : définit à quelle distance maximale le joueur doit se trouver pour activer le spawner
  * `minSpawnDelay` : le délai minimum entre chaque spawn  (en ticks, 20 ticks = 1 seconde)
  * `minSpawnDelay` : le délai maximum entre chaque spawn  (en ticks, 20 ticks = 1 seconde)
  * `maxNearbyEntities` : nombre maximum d'entités autour du spawner
  * `addSpawnerNbtToItem` : indique s'il ajoute ou non le tag de composants du spawner dans l'item (il vaut mieux laisser false). Quand c'est false, le plugin n'ajoutera les tags qu'au moment où le spawner sera posé.
  * `potentialSpawns` : définit les potentialSpawns de votre spawner avec leur poids

:::tip
Il est préférable de créer d'abord votre spawner dans [MCStaker](https://mcstacker.net/?cmd=give), puis de vous le donner en jeu et enfin de le tenir en main + faire /ei create.\
Cela importera automatiquement les fonctionnalités du spawner dans vos ExecutableItems.
:::

* Exemple :

```yaml
spawnerFeatures:
  spawnCount: 4
  spawnDelay: 20
  spawnRange: 4
  requiredPlayerRange: 16
  minSpawnDelay: 200
  maxSpawnDelay: 800
  maxNearbyEntities: 6
  potentialSpawns:
  # {THE ENTITY};the weight for this SpawnerEntry, when added to a spawner entries with higher weight will spawn more often.
  - '{BlockState:{Name:"minecraft:diorite"},id:"minecraft:falling_block"};1' 
  - '{id:"minecraft:chicken"};1' 
  addSpawnerNbtToItem: false
```

### Fonctionnalités Instrument <CustomTag type="version" version="1.20.5" />

* Info : fonctionnalité qui vous permet de personnaliser le son de la corne de chèvre pour les items. Cette fonctionnalité ne fonctionne que pour les items de matériau GOAT_HORN.
  * `enable` : valeur booléenne qui active ou désactive les fonctionnalités instrument
  * `instrument` : le son d'instrument de musique qui sera joué lorsque la corne de chèvre est utilisée. [Instruments de musique](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/MusicInstrument.html)
* Exemple :

```yaml
material: GOAT_HORN
instrumentFeatures:
  enable: true
  instrument: DREAM_GOAT_HORN
```

### Fonctionnalités Weapon <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Info : fonctionnalité qui vous permet de configurer des paramètres de combat propres aux armes pour les items.
  * `enable` : valeur booléenne qui active ou désactive les fonctionnalités weapon
  * `disableBlockingTime` : valeur entière qui représente pendant combien de temps (en secondes) le bouclier de la cible sera désactivé après avoir été touché par cette arme
  * `damagePerAttack` : valeur entière qui représente les dégâts de durabilité que cette arme subit à chaque attaque (par défaut : 5)
* Exemple :

```yaml
weaponFeatures:
  enable: true
  disableBlockingTime: 3
  damagePerAttack: 2
```


### Fonctionnalités Blocks attacks <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Info : fonctionnalité qui vous permet de configurer la façon dont les items bloquent les attaques, comme les boucliers. Cela permet de rendre n'importe quel item capable de bloquer des dégâts.
  * `enable` : valeur booléenne qui active ou désactive les fonctionnalités block attacks
  * `blockDelay` : valeur entière qui représente le délai en secondes avant que l'item puisse bloquer à nouveau après avoir été utilisé
  * `blockSound` : son joué lorsqu'une attaque est bloquée avec succès
  * `disableSound` : son joué lorsque le blocage est désactivé (après avoir été submergé)
  * `disableCooldownScale` : valeur double (multiplicateur) pour la durée de la désactivation du blocage après avoir été submergé (par défaut : 1.0)
  * `damageReductions` : liste de configurations de réduction de dégâts qui définissent de combien les dégâts sont réduits selon le type de dégâts
  * `bypassedBy` : type de dégâts qui contourne entièrement ce blocage
* Exemple :

```yaml
blockAttacksFeatures:
  enable: true
  blockDelay: 1
  blockSound: ITEM_SHIELD_BLOCK
  disableSound: ITEM_SHIELD_BREAK
  disableCooldownScale: 1.5
  damageReductions:
    reduction_0:
      baseDamageBlocked: 2.0
      factorDamageBlocked: 0.5
      horizontalBlockingAngle: 90.0
      damageTypes:
      - ARROW
      - MOB_ATTACK
    reduction_1:
      baseDamageBlocked: 1.0
      factorDamageBlocked: 0.25
      horizontalBlockingAngle: 180.0
      damageTypes:
      - EXPLOSION
  bypassedBy: VOID
```

#### Configuration de la réduction de dégâts

Chaque entrée de réduction de dégâts possède les paramètres suivants :
* `baseDamageBlocked` : quantité de base de dégâts bloqués (réduction fixe)
* `factorDamageBlocked` : pourcentage de dégâts bloqués (0.5 = 50 % de réduction)
* `horizontalBlockingAngle` : l'angle en degrés depuis lequel les attaques peuvent être bloquées (90 = quart avant, 180 = moitié avant, 360 = toutes les directions). Doit être supérieur à 0.
* `damageTypes` : liste des types de dégâts auxquels cette réduction s'applique. Consultez [Types de dégâts](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html) pour les types disponibles.

:::tip
Vous pouvez créer des « boucliers » personnalisés avec différents matériaux grâce à cette fonctionnalité. Par exemple, vous pourriez faire un livre qui bloque les dégâts magiques ou un diamant qui bloque les attaques physiques !
:::
