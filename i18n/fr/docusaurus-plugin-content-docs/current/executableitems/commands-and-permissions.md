---
description: >-
  Découvrez toutes les commandes et permissions du plugin ExecutableItems :
  création, give, drop, reload, modification d'items et leurs permissions.
source_hash: 30fd8157fcb56ff1
translated_at: '2026-11-13T17:11:13.150Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# ⌨️ Commandes et permissions

Sur cette page, vous allez découvrir les commandes et les permissions du plugin ExecutableItems.

Les fonctionnalités premium sont signalées par le tag : <CustomTag type="premium" />

## Permissions

**Conseil pour les débutants :**

:::info
Pour donner les permissions de tous les items, je vous conseille de télécharger un plugin de permissions comme [**LuckPerms**](https://www.spigotmc.org/resources/luckperms.28140/). Une fois que vous avez un plugin de permissions, il suffit de donner la permission **`ei.item.*`**. Pour LuckPerms, la commande est **`/lp group default permission set ei.item.* true`**
:::

#### Permission d'item

* Info : permission permettant à un joueur d'utiliser un ExecutableItems.
  * Permission pour utiliser un ID d'ExecutableItem précis : `ei.item.{id}`
  * Permission pour utiliser tous les ExecutableItems : `ei.item.*` 
  * Permission négative pour interdire un ID d'ExecutableItems précis : `-ei.item.{id}` <CustomTag type="premium" />
* Exemple : `ei.item.test`

#### Permission de bypass du cooldown

* Info : permission permettant à un joueur de ne pas avoir de cooldown lorsqu'il utilise un ExecutableItems. 
  * Pendant vos tests, vous devez tester sans être op/opérateur/admin.
  * Permission pour ignorer le cooldown d'un ID d'ExecutableItems précis : `ei.nocd.{id}`
  * Permission pour ignorer le cooldown de tous les ExecutableItems : `ei.nocd.*`
* Exemple : `ei.nocd.test`

#### Toutes les permissions

* Info : permission qui accorde toutes les permissions d'ExecutableItems.
  * Attention ! Celle-ci accorde littéralement toutes les permissions, même celles d'administrateur.
  * Permission : `ei.*`
* Si vous souhaitez donner une permission précise, continuez la lecture ci-dessous : chaque commande est détaillée avec sa permission.

#### Toutes les permissions de commandes

* Info : permission qui accorde toutes les permissions de commandes d'ExecutableItems.
  * Permission : `ei.cmds`
* Si vous souhaitez donner une permission précise, continuez la lecture ci-dessous : chaque commande est détaillée avec sa permission.

## Commandes

Ici, vous allez découvrir les commandes d'ExecutableItems. Certains mots reviendront tout au long des explications, les voici :

* SsomarPluginsItem : c'est l'ID d'un ExecutableItem qui a été créé, par exemple « Excalibur », « SuperPickaxe », « turtle », « 12345 » : nous avons établi ce nom.
* SsomarPluginsPlayer : c'est le nom d'un joueur, par exemple « Vayk\_ », « Ssomar », « Special70 », « Tidal\_Flame » : ce nom existe aussi.

Le format des commandes utilise différents symboles :

* \{\} : si un argument est entouré de \{\}, il est nécessaire pour exécuter la commande.
* \[] : si un argument est entouré de \[], il est optionnel pour exécuter la commande.

Il y a aussi différentes couleurs (mais c'est la même idée que \{\} et \[] ) :

* Bleu : obligatoire
* Orange : optionnel

### Commandes générales

#### Créer un nouvel ExecutableItem

* Commande : **/ei create \{id\}**
  * `id` : ID de l'ExecutableItem.
  * Si vous voulez **copier l'item d'un autre plugin**, ou un item vanilla personnalisé (bannière, bouclier, ...), c'est simple ! Prenez-le dans votre main principale et exécutez cette commande create.
* Exemple : `/ei create SsomarPluginsItem`
* Permission : `ei.cmd.create`

#### Créer un nouvel ExecutableItem à partir d'un bloc ciblé

* Commande : /ei create-from\_block \{id\}
  * `id` : ID de l'ExecutableItem.
* Exemple : `/ei create-from_block SsomarPluginsItem`
* Permission : `ei.cmd.create-from-block`

#### Ouvrir l'éditeur / le menu

* Commande : **/ei editor** ou **/ei show**
* Permission : `ei.cmd.editor` ou `ei.cmd.show`
* Dans la liste, l'icône de chaque item affiche un aperçu de son nom d'affichage, de son lore, de ses enchantements et de ses attributs. Cela peut être désactivé avec [editorIconPreview](/tools-for-all-plugins-score/score/general-config#editoriconpreview) dans la config de SCore.

#### Recharger le plugin

* Commande : **/ei reload**
* Permission : `ei.cmd.reload`

**Recharger un seul item**

* Commande : **/ei reload \{id\}**
  * `id` : ID de l'ExecutableItem.
* Exemple : `/ei reload SsomarPluginsItem`
* Permission : `ei.cmd.reload`

**Recharger un dossier**

* Commande : **/ei reload folder\:Name\_Of\_My\_Folder**
* Permission : `ei.cmd.reload`

#### Régénérer les configs des items par défaut

* Commande : **/ei default\_items**
* Permission : `ei.cmd.default_items`

#### Supprimer un ExecutableItem

* Commande : **/ei delete \{id\}**
  * `id` : ID de l'ExecutableItem.
* Exemple : `/ei delete SsomarPluginsItem`
* Permission : `ei.cmd.create`

#### Modifier un ExecutableItem avec une commande

* Commande : **/ei edit \{id\}**
  * `id` : ID de l'ExecutableItem.
* Exemple : `/ei edit SsomarPluginsItem`
* Permission : `ei.cmd.edit`

#### Effacer tous les cooldowns et commandes différées des ExecutableItems

* Commande : **/ei clear \{target\} \[optionaltarget]**
  * `target`
    * Vous pouvez utiliser des noms de joueurs pour cibler un joueur
    * Vous pouvez utiliser un UUID pour cibler une entité.
  * `optional_target`
    * ALL : réinitialise les commandes différées, les cooldowns et les actionbars du joueur.
    * DELAYED\_COMMANDS : réinitialise toutes les commandes différées provoquées par DELAY et DELAYTICK.
    * COOLDOWNS : réinitialise tous les cooldowns du joueur sur l'ensemble des items.
    * ACTIONBARS : réinitialise toutes les actionbars du joueur issues de la commande personnalisée ACTIONBAR.
* Exemple : `/ei clear SsomarPluginsPlayer COOLDOWNS`
* Permission : `ei.cmd.clear`

#### Activer / désactiver l'actionbar des ExecutableItems

* Commande : **/ei actionbar \{on or off\}**
* **Exemple :** `/ei actionbar off`
* Permission : `ei.cmd.actionbar`

#### Inspecter l'ExecutableItem qui se trouve dans votre main principale

* Commande : **/ei inspect**
  * Pour utiliser cette commande, l'ExecutableItem doit avoir la fonctionnalité de stockage des infos de l'item activée. [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info)
  * Résultat :
    * Usage
    * UUID du propriétaire
    * Nom du propriétaire
    * ID d'ExecutableItems
    * Variables 
* Permission : `ei.cmd.inspect`

#### Retirer le propriétaire de l'EI qui se trouve dans votre main

* Commande : **/ei unowned**
  * Pour retirer le propriétaire d'un item, celui-ci doit d'abord en avoir un. Pour cela, la fonctionnalité [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info) doit être activée sur cet ExecutableItem
  * Après avoir exécuté cette commande, le prochain joueur qui interagira avec cet item en deviendra le nouveau propriétaire. (Il ne doit pas être opérateur/op/admin)
* Permission : `ei.cmd.unowned`

#### Retirer un EI de l'inventaire d'un joueur

* Commande : **/ei take \{player\} \{id\} \{quantity\}**
  * `player` : nom du joueur à qui retirer l'item
  * `id` : ID des ExecutableItems
  * `quantity` : valeur entière de la quantité à retirer
* Exemple : `/ei take SsomarPluginsPlayer SsomarPluginsItem 1`
* Permission : `ei.cmd.take`

#### Actualiser le ou les ExecutableItems de vos joueurs avec leur dernière version de config

* Info : cette commande actualise le ou les ExecutableItemID vers leur dernière version dans leur config. Autrement dit, si un joueur possède un ExecutableItem dans une ancienne version, par exemple avec un attribut GENERIC\_ARMOR à 10, et que vous changez ensuite la valeur de l'attribut dans la config de l'ExecutableItem, elle ne sera pas mise à jour côté joueur. Pour permettre cette mise à jour, vous pouvez utiliser cette commande : l'item sera actualisé et le joueur aura la nouvelle valeur au lieu de 10.
  * Pour que cette actualisation fonctionne, le ou les ExecutableItems sélectionnés doivent se trouver dans l'inventaire du joueur, sinon ils ne seront pas actualisés
  * Un conseil : une autre manière de réaliser cette actualisation est d'utiliser [Auto update item](/executableitems/configurations/activator-configuration/activators-features#auto-update-item)
* Commande : **/ei refresh \{player\} \{ExecutableItemID\}** **\{resetUsage\} \{resetDurability\}**
  * `player` : nom d'un joueur précis ou « all » pour cibler tous les joueurs en ligne.
  * `ExecutableItemID` : nom d'un ExecutableItem précis ou « all » pour cibler tous les ExecutableItems créés.
  * `option` : argument d'actualisation
    * Options :
      * MATERIAL
      * NAME
      * LORE
      * DURABILITY
      * ATTRIBUTES
      * ENCHANTS
      * CUSTOM_MODEL_DATA
      * ARMOR_SETTINGS
      * USAGE
      * ITEM_RARITY
      * BOOK
      * EQUIPPABLE
      * REPAIRABLE
      * HIDERS
      * INSTRUMENT
      * TOOL_RULES
      * FIREWORK
      * FIREWORK_EXPLOSION
      * CONTAINER
      * HEAD
      * BANNER
      * FOOD
      * CONSUMABLE
      * BUNDLE
      * BLOCK_STATE
      * CHARGED_PROJECTILES
      * MYFURNITURE
      * SPAWNER
      * WEAPON
      * BLOCK_ATTACKS
      * TOOLTIP_MODEL
      * ALL_OPTIONS (effectue toutes les tâches citées ci-dessus)
* Permission : `ei.cmd.refresh`

#### **Modifier le propriétaire de l'ExecutableItem qui se trouve dans votre main**

* Commande : **/ei set\_owner** **\{player\}**
  * `player` : nom du joueur à définir comme cible de cette commande
    * Fonctionne avec les joueurs hors ligne.
* Permission : `ei.cmd.set_owner`

#### Activer le mode debug

* Info : mode dans lequel chaque activateur envoie à l'utilisateur différents messages pour connaître l'état de l'activateur et comprendre pourquoi il ne fonctionne pas ou comment il est déclenché.
* Commande : **/ei debug**
* Permission : `ei.cmd.debug`

#### Lister les sets et ce qu'un joueur porte <CustomTag type="premium" />

* Info : liste les [sets](/executableitems/configurations/sets-configuration) chargés (`plugins/ExecutableItems/sets`). Avec un joueur : les pièces portées et le palier actif pour chaque set.
* Commande : **/ei sets** **[player]**
* Permission : `ei.cmd.sets`

#### Déclencher un activateur (pour tester un item)

* Info : exécute un activateur d'un ExecutableItem que le joueur porte, sans effectuer le geste (clic, coup, saut...). Utile pour tester une config. Tout le reste fonctionne comme d'habitude : slots détaillés, conditions, cooldowns, usage et commandes. L'item est recherché dans le slot indiqué, sinon dans la main principale, la main secondaire, l'armure, puis dans tout l'inventaire.
* Commande : **/ei trigger \{player\} \{item id\} \{activator id\}** **[slot:N] [target:nearest|\{player\}|\{uuid\}] [block:x,y,z] [click:left|right] [input:JUMP_PRESS...]**
  * `target` : l'entité ou le joueur des activateurs qui ont une cible (coup, clic sur une entité...). Par défaut, celle que le joueur regarde.
  * `block` : le bloc des activateurs qui ont un bloc cible. Par défaut, le bloc que le joueur regarde.
  * `click` : pour les activateurs avec un clic détaillé. Par défaut `right` (`left` pour `PLAYER_LEFT_CLICK`).
  * `input` : requis pour `PLAYER_INPUT`.
* Conseil : si rien ne se passe, exécutez **/ei debug** pour voir quelle vérification bloque l'activateur.
* Permission : `ei.cmd.trigger`

#### Faire conserver à tous les ExecutableItems les attributs par défaut de leur matériau

* Info : active [Keep default attributes](/executableitems/configurations/item-configuration/item-features#keep-default-attributes) sur **chaque** ExecutableItem chargé (`keepDefaultAttributes: true`, `ignoreKeepDefaultAttributesFeature: false`) et enregistre leurs fichiers. En 1.21+, ExecutableItems liste dans la console, après chaque chargement, les items qui perdent les dégâts / l'armure de leur matériau sans cette option. Avec `false`, chaque item reçoit `keepDefaultAttributes: false`.
* Commande : **/ei util-set-keepdefaultattributes-all-ei \{true or false\}**
* Exemple : `/ei util-set-keepdefaultattributes-all-ei true`
* Permission : `ei.cmd.util-set-keepdefaultattributes-all-ei`

### Commandes give

#### Commande give

* Info : commande pour donner un ExecutableItem à un joueur dans le premier slot disponible.
* Commande : **/ei give \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \[giveOfflinePlayer]**
  * `player` : nom du joueur qui sera la cible de cette commande
  * `id` : ID de l'ExecutableItem à donner.
    * Valeurs optionnelles : pour ajouter cette configuration personnalisée, le format ne doit contenir aucun espace. 
      * `Variables` : vous pouvez choisir une configuration de variables lors de la remise de l'item.
        * ✅`{Variables:{a:"1",b:"2",c:"3"}}` # Sans espaces
        * ❌`{Variables:{a : "1",b: "2",c :"3"}}` # Avec des espaces
      * `Usage:` : vous pouvez choisir une valeur d'usage lors de la remise de l'item
        * ✅`{Usage:5}` # Sans espace
        * ❌`{Usage : 5}` # Avec des espaces
      * `Durability` : vous pouvez décider de la durabilité que l'item perd lorsqu'il est donné à l'utilisateur
        * ✅`{Durability:5}` # Sans espace
        * ❌`{Durability : 5}` # Avec des espaces
  * `quantity` : quantité d'items à donner
  * `giveOfflinePlayer` : valeur booléenne qui indique si l'item sera donné à un joueur hors ligne ou non. Par défaut, cette valeur est à true.
* Exemples : (dans tous ces exemples, la commande est exécutée à l'intérieur d'un ExecutableItems afin de résoudre des placeholders tels que %player%, %var\_name% et %usage%)
  * `/ei give %player% Genesis_Crystal{Variables:{vibraniun:10,proton:30},Usage:10} 3` 
  * `/ei give %player% SurgeBlade{Variables:{charge:%var_charge%+1},Usage:%usage%-1} 1`
  * `/ei give SsomarPluginsPlayer BoneBlade 1`
  * `/ei give edp445 cupcake{Durability:12} 1`
* Permission : `ei.cmd.give`

#### Commande give all

* Commande : **/ei giveall \{id\} \{quantity\} \[world] \[giveOfflinePlayer]**
  * `id` : ID de l'ExecutableItem à donner.
  * `quantity` : quantité d'items à donner
  * `world` : argument optionnel indiquant le monde dans lequel exécuter la commande. Les joueurs qui ne se trouvent pas dans ce monde ne recevront pas l'ExecutableItem.
  * `giveOfflinePlayer` : valeur booléenne qui indique si l'item sera donné à un joueur hors ligne ou non. Par défaut, cette valeur est à true.
* Permission : `ei.cmd.giveall`

#### Donner un EI dans un slot précis d'un joueur <CustomTag type="premium" />

* Commande : **/ei giveslot \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \{slot\} \[override true or false]**
  * `player` : nom du joueur qui sera la cible de cette commande
  * `id` : ID de l'ExecutableItem à donner.
    * Valeurs optionnelles : pour ajouter cette configuration personnalisée, le format ne doit contenir aucun espace. 
      * `Variables` : vous pouvez choisir une configuration de variables lors de la remise de l'item.
        * ✅\{Variables:\{a:"1",b:"2",c:"3"\\}\} # Sans espaces
        * ❌\{Variables:\{a : "1",b: "2",c :"3"\\}\} # Avec des espaces
      * `Usage` : vous pouvez choisir une valeur d'usage lors de la remise de l'item
        * ✅\{Usage:5\} # Sans espace
        * ❌\{Usage : 5\} # Avec des espaces
  * `quantity` : quantité d'items à donner
  * `slot` : slot du joueur dans lequel cet item sera donné.
  * `override` : valeur booléenne pour écraser le slot s'il contient déjà un item. Dans ce cas, l'item sera déplacé, et si l'inventaire du joueur est plein, il sera jeté au sol.
* Exemples : 
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`test{Variables:{x:"Hey",world:"Island"},Usage:50} 1 0`**  
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`rum{Usage:69420,Variables:{tell_me:"why",aint_nothing:"BUT A HEARTBREAK"}} 1 %slot%`**
* Permission : `ei.cmd.giveslot`

**Donner à un joueur tous les EI d'un dossier précis**

* Info : commande pour donner un dossier du plugin à un joueur.
* Commande : **/ei givefolder \{player\} \{folder\} \{quantity\}**
  * `player` : nom du joueur qui sera la cible de cette commande
* Permission : `ei.cmd.givefolder`

### Commandes drop

#### Faire tomber un EI à un emplacement / une position précise 

* Commande : **/ei drop \{id\} \{quantity\} \{\[world] \[x] \[y] \[z]\}**
  * `id` : ID de l'ExecutableItem à donner.
  * `quantity` : quantité d'items à faire tomber. Par défaut, 1.
  * location : l'emplacement entier est optionnel. Si vous souhaitez l'ajouter, vous devrez renseigner les arguments suivants :
    * `world` : monde dans lequel l'item sera lâché.
    * `x` : coordonnée X où l'item sera lâché.
    * `y` : coordonnée Y où l'item sera lâché.
    * `z` : coordonnée Z où l'item sera lâché.
* Exemples : (dans tous ces exemples, la commande est exécutée à l'intérieur d'un ExecutableItems afin de résoudre des placeholders tels que %player%, %var\_name% et %usage%)
  * `/ei drop totemshatter 1 %world% %x% %y% %z%`
  * `ei drop nuclearWar{Usage:3,Variables:{niconico:"nii"}} 25 %block_world% %block_x% %block_y% %block_z%`
  * `ei drop cybert1_5{Variables:{eh:5},Usage:5} 1 world 535 74 1329`
* Permission : `ei.cmd.drop`

### Commandes de modification

#### Modifier la valeur d'usage d'un ExecutableItem

* Commande : 
  * En jeu : **/ei modification \{set or modification\} usage \{slot\} \{value\}**
  * Dans la console : **/ei console-modification \{set or modification\} usage \{player\} \{slot\} \{value\}**
  * Paramètres :
    * `set or modification`
      * set : définit la nouvelle \{value\} et remplace l'ancienne
      * modification : utile pour ajouter des modifications, elle augmente ou diminue la valeur d'origine de \{value\}
    * `player` : nom du joueur qui sera la cible de cette commande
    * `slot` : slot du joueur dans lequel cet item sera donné.
      * Plus d'informations sur les slots ici : [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `value` : valeur utilisée pour la modification.
* Permission : `ei.cmd.modification`

#### Modifier la valeur d'une variable d'un ExecutableItem

* Commande : 
  * En jeu : **/ei modification \{set or modification\} variable \{slot\} \{variableName\} \{value\}**
  * Dans la console : **/ei console-modification \{set or modification\} variable \{player\} \{slot\} \{variableName\} \{value\}**
  * Paramètres :
    * `set or modification`
      * set : définit la nouvelle \{value\} et remplace l'ancienne
      * modification : utile pour ajouter des modifications, elle augmente ou diminue la valeur d'origine de \{value\}
    * `player` : nom du joueur qui sera la cible de cette commande
    * `slot` : slot du joueur dans lequel cet item sera donné.
      * Plus d'informations sur les slots ici : [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `variableName` : nom de la variable à laquelle vous voulez appliquer le typeOfModication avec la valeur sélectionnée.
    * `value` : valeur utilisée pour la modification.
* Permission : `ei.cmd.modification`

#### Rechercher un ExecutableItem sur le serveur

* Info : cette commande vous indique où se trouvent les ExecutableItems ayant l'ID \{id\} sur votre serveur.
* Commande : **/ei search \{id\} \{searchMode\}**
  * `id` : ID de l'ExecutableItem que vous recherchez
  * `searchMode` : type de recherche
    * players : recherche l'ExecutableItem dans les inventaires de tous les joueurs **en ligne**.
    * containers : recherche l'ExecutableItem dans tous les conteneurs **chargés**.
    * all : recherche avec les deux méthodes.
* Exemple :
  * `/ei search EternalSword all`
* Permission : `ei.cmd.search`

#### Obtenir le chemin du fichier d'un ExecutableItem

* Info : cette commande affiche le chemin absolu dans le système de fichiers vers le fichier de configuration d'un ExecutableItem précis. Utile pour les développeurs ou les administrateurs de serveur qui doivent localiser et modifier directement les fichiers d'items.
* Commande : **/ei path \{id\}**
  * `id` : ID de l'ExecutableItem dont vous voulez obtenir le chemin
* Exemple :
  * `/ei path ExcaliburSword`
  * Résultat : `[ExecutableItems] The path of ExcaliburSword is /path/to/plugins/ExecutableItems/Items/ExcaliburSword.yml.`
* Permission : `ei.cmd.path`

#### Vérifier les informations d'optimisation des events

* Info : cette commande affiche des informations détaillées sur l'optimisation des gestionnaires d'events d'ExecutableItems et des statistiques de performance. Elle indique quels events sont écoutés et fournit des informations sur les items utilisant la reconnaissance personnalisée (ce qui peut impacter les performances). Le résultat est envoyé dans la console du serveur.
* Commande : **/ei checkevents**
* Le résultat comprend :
  * La liste des events optimisés et l'état de leur listener
  * Le nombre d'ExecutableItems utilisant la reconnaissance personnalisée
  * Des avertissements sur l'impact sur les performances
  * Des recommandations pour de meilleures performances
* Permission : `ei.cmd.checkevents`

:::info
Le résultat de cette commande est envoyé dans la **console**, et non au joueur en jeu. Consultez la console de votre serveur pour voir les informations détaillées.
:::

:::tip
Les items avec reconnaissance personnalisée peuvent impacter les performances. La commande vous indiquera combien d'items utilisent cette fonctionnalité. Si vous rencontrez des problèmes de performances, envisagez de réduire le nombre d'items pour lesquels la reconnaissance personnalisée est activée.
:::

### Commandes du pack de textures

#### Actualiser le pack de textures d'ExecutableItems

* Commande : **/ei refresh-pack**
* Info : actualise et recharge le pack de textures d'ExecutableItems pour tous les joueurs en ligne. Utile après avoir modifié des textures personnalisées.
* Permission : `ei.cmd.refresh-pack`

#### Télécharger le pack de textures d'ExecutableItems par défaut

* Commande : **/ei download-default-pack**
* Info : télécharge le pack de textures d'ExecutableItems par défaut depuis le dépôt officiel et le décompresse automatiquement. Si `selfHostPack` est activé dans config.yml, le pack sera automatiquement enregistré et hébergé sur votre serveur. C'est utile pour :
  * Configurer le pack de textures pour la première fois
  * Restaurer le pack par défaut après des modifications
  * Passer à la dernière version du pack par défaut
* Prérequis :
  * `selfHostPack: true` doit être défini dans config.yml pour l'hébergement automatique
  * Le serveur doit avoir une connexion internet pour télécharger le pack
* Permission : `ei.cmd.download-default-pack`

:::info
**Options d'hébergement :**
- **Auto-hébergement sur votre serveur** : définissez `selfHostPack: true` dans config.yml, le pack sera hébergé directement par le plugin
- **Hébergement externe** : si vous voulez héberger le pack vous-même (sur un site web, un CDN, etc.), définissez l'URL de téléchargement dans `texturesPackUrl` dans config.yml
- **Aucun hébergement** : si aucune des deux options n'est activée, le pack sera téléchargé et décompressé localement, mais pas distribué aux joueurs
:::

### Custom Triggers

* Info : ExecutableItems dispose de commandes pour exécuter des Custom Triggers. Si vous voulez savoir ce qu'ils sont et comment les utiliser, consultez les informations ici : [Custom triggers](/tools-for-all-plugins-score/custom-triggers) 

### WorldGuard

* Vous pouvez utiliser les flags WorldGuard pour activer/désactiver tous les activateurs des EI
```
/rg flag <region> ei-activators deny # disables ALL EI activators in the region
/rg flag <region> ei-activators allow # re-enables them (this is the default)
```

* Le message d'erreur peut être configuré dans /ExecutableItems/locale/locale_EN.yml, par exemple
```yml
disableRegion: '&8[&4Executable&7Items&8] &cYou cant use &e%item%&c in this region!'
```
