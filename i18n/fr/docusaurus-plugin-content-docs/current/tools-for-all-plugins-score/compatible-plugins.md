---
description: >-
  Liste non exhaustive des plugins compatibles avec ExecutableItems et les
  plugins Ssomar : MythicMobs, WorldGuard, ItemsAdder, Vault, PlaceholderAPI et
  plus.
source_hash: 4012882ccbdb916c
translated_at: '2026-11-13T17:15:38.168Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ✔️ Plugins compatibles

:::info
Notez que cette liste ne concerne que les plugins strictement compatibles : presque tous les plugins sont compatibles avec les plugins Ssomar. Si vous voulez exécuter une commande d'un autre plugin, remplacez simplement le nom de la cible par les placeholders. \

Par exemple :
```yaml
- essentials:fly %player% # For essentials fly
- vanish %player% # For vanish
- economy give %player% 100 # To give money
#...
```
Etc. **Toute commande qui accepte le nom d'un joueur est « compatible » avec nos plugins.**
:::

Cette section présente les plugins compatibles qui fonctionnent avec les plugins Ssomar : certaines de nos fonctionnalités sont compatibles avec ces autres plugins.

* Avant de commencer, sachez que compatible ≠ utilisable : presque tous les plugins sont utilisables avec les plugins Ssomar, car toutes les commandes sont exécutées par la console.

### MythicMobs

#### Vous pouvez faire dropper des items des plugins Ssomar à vos mobs MythicMobs de ces façons :

*   ExecutableItems :

    1. Tenez l'ExecutableItem en main et exécutez `/mm i import` : l'item sera importé dans le fichier items.yml de MythicMobs, d'où vous pourrez l'ajouter à la LootTable de MythicMobs.
    2. Exécuter un skill \~onDeath du mob, en lançant un skill de commande avec la ligne suivante :

    ```yaml
    Skills:
    - command{c="ei drop <item> 1 <caster.l.w> <caster.l.x> <caster.l.y> <caster.l.z>"} @self ~onDeath
    ```
* ExecutableBlocks :
  * Le principe est le même, mais en utilisant l'ExecutableBlock à la place de l'ExecutableItem, et dans la commande du skill, utilisez « eb » au lieu de « ei ».

#### Vous pouvez limiter les activateurs des plugins Ssomar à certains MythicMobs précis grâce à la fonctionnalité [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities).

* Exemple : créer un ExecutableItem qui inflige plus de dégâts à une liste de MythicMobs
* Exemple : créer un ExecutableBlock qui blesse un MythicMob précis lorsqu'il marche au-dessus du bloc
* Exemple : créer un ExecutableEvent qui ne fonctionne que pour une liste de MythicMobs.

#### Vous pouvez invoquer des mobs MM avec cette commande dans votre activateur :

* Selon l'activateur que vous utilisez, vous devrez peut-être changer les placeholders.
  * Exemple : à la place de %world%, il peut être nécessaire d'utiliser %player\_world%, %target\_world% ou %block\_world%

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    playerCommands:
    - mm m spawn {mob_id} 1 %world%,%x%,%y%,%z%
```

* ⭐Vous pouvez appliquer cette idée avec ExecutableBlocks et l'activateur LOOP pour créer un spawner MythicMobs personnalisé.

#### Exécuter un skill MythicMobs depuis les fonctionnalités des plugins Ssomar

* Vous pouvez utiliser `SUDOOP mm test cast <skill>` dans la section des commandes pour exécuter un skill de MythicMobs.

#### Commandes SCore personnalisées

* [CHANGETOMYTHICMOB](/tools-for-all-plugins-score/custom-commands/entity-commands#changetomythicmob)
  * ⭐Il est possible de créer un système de pêche avec MythicMobs, comme celui du serveur Minecraft Hypixel. Par exemple, avec une liste de paliers de différentes cannes à pêche (le tout géré par ExecutableItems), où chaque palier offre une probabilité plus ou moins élevée de pêcher des mobs plus épiques dans vos lacs, en ajoutant des restrictions pour ne pêcher des mobs MM que dans les lacs situés aux coordonnées « x » (ou dans une région WorldGuard), etc.

### **LevelledMobs**

* ExecutableItems
  * Vous pouvez faire dropper des ExecutableItems à vos LevelledMobs grâce à cette ressource :
    * [https://www.spigotmc.org/resources/lm-items.102081/](https://www.spigotmc.org/resources/lm-items.102081/)

### AuraSkills (anciennement AureliumSkills)

* Les plugins Ssomar disposent de la fonctionnalité d'activateur [requiredMana](/executableitems/configurations/activator-configuration/activators-features#requiredmana), qui permet d'exiger du mana pour que l'activateur fonctionne.
* Commandes d'Aurelium Skills
  * Vous pouvez aussi utiliser les commandes d'AureliumSkills dans votre plugin, par exemple pour donner du mana au joueur, donner du mana aux joueurs alentour (comme un soutien), etc.
* ExecutableItems
  * NBT d'Aurelium Skills
    * Vous pouvez créer un ExecutableItem qui augmente votre mana maximum tant que vous le tenez en main : créez un item, exécutez la commande `/sk modifier`, puis, en tenant l'item, exécutez `/ei create <id>`. L'ExecutableItem possède alors le NBTTag de la commande et donc les modifications que vous avez faites.

### ExecutableBlocks & ExecutableItems

* Ces deux plugins (ExecutableBlocks et ExecutableItems) peuvent être liés l'un à l'autre. Ce lien est établi par EB via la fonctionnalité [TYPE\_OF\_CREATION ](/executableblocks/configurations/block-configuration/block-features#creationtype). Par exemple :
  * Poser l'ExecutableItem le transforme en l'ExecutableBlock qui lui est lié (par défaut, il perdrait les données de l'ExecutableItem et serait posé comme un bloc vanilla)
  * Casser un ExecutableBlock donne l'ExecutableItem qui lui est lié.
  * Conserver la même utilisation que celle de l'ExecutableBlock posé lorsqu'il est cassé et transformé en l'ExecutableItem lié, et inversement.
  * Conserver les mêmes valeurs de variables que celles de l'ExecutableBlock posé lorsqu'il est cassé et transformé en l'ExecutableItem lié, et inversement.

### ItemsAdder

* ExecutableItems
  * Vous pouvez utiliser les textures créées avec ItemsAdder grâce à la fonctionnalité [customModelData ](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14) ou à [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel).
  *   Vous pouvez lier l'item ItemsAdder à un EI en suivant leur wiki sur la façon de lier : il suffit d'ajouter la ligne de code suivante au fichier de l'item ItemsAdder.

      ```yaml
      executableitem:
        id: ZEUSCROWN
      ```
* ExecutableBlocks
  * Vous pouvez créer un ExecutableBlock avec la texture d'un bloc ItemsAdder en sélectionnant la fonctionnalité [TYPE\_OF\_CREATION ](/executableblocks/configurations/block-configuration/block-features#creationtype) d'ExecutableBlocks.
* Il est possible de sélectionner des blocs ItemsAdder précis avec [detailedBlocks ](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks) pour les activateurs liés à un bloc, dans tous les plugins
  *   Exemple :

      ```yaml
      activators:  
        activator0: # Activator ID, you can create as many activator on the activators list    
          option: PLAYER_BLOCK_BREAK
          detailedBlocks:
          - ITEMSADDER:turquoise_block
      ```

### Nexo

* ExecutableItems
  * Vous pouvez utiliser les textures de Nexo dans votre ExecutableItem simplement avec la valeur [Custom model data](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14) ou [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel).

### PlaceholderAPI

* Un des piliers de la création d'items : vous pouvez utiliser n'importe quel placeholder PlaceholderAPI dans toutes les parties de nos plugins :
  * Lore
  * Section des commandes
  * Messages (tous les types de messages : message de cooldown, message de condition non remplie, message de ressources requises, etc.)
  * Variables
  * etc.

### ShopGui+

* Ce plugin permet de vendre dans la boutique des items portant des NBT Tags précis ; il prend donc en charge la vente d'ExecutableItems et d'ExecutableBlocks.
* La commande de bloc [SELL\_CONTENT ](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content) est prise en charge par ce plugin.

### ShopKeepers

* Ce plugin permet de vendre dans la boutique des items portant des NBT Tags précis ; il prend donc en charge la vente d'ExecutableItems et d'ExecutableBlocks.

### Tradesplus

* Ce plugin permet de vendre dans la boutique des items portant des NBT Tags précis ; il prend donc en charge la vente d'ExecutableItems et d'ExecutableBlocks.

### WorldGuard

* Pour tous les plugins, une condition permet de faire fonctionner l'activateur uniquement si le joueur se trouve à l'intérieur ou à l'extérieur d'une région : elle s'appelle [ifInRegion](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinregion-not) et elle est compatible avec ce plugin.
* Toutes les commandes SCore sont soumises à la protection de WorldGuard
  * Cela signifie qu'un BREAK (commande SCore) ne s'exécutera pas si le joueur n'a pas la permission de casser un bloc à la position choisie.
  * Gardez à l'esprit que cette fonctionnalité concerne les commandes SCore, et non les commandes exécutées par nos plugins : utiliser une commande vanilla dans l'un de nos plugins, par exemple "execute at %player% run setblock %block\_x% %block\_y% %block\_z% air replace", contournera toute restriction.
* ExecutableBlocks
  * Vous pouvez remplir une région avec un ou plusieurs ExecutableBlocks précis, avec des poids détaillés, grâce à [/eb wg-fill-region](/executableblocks/commands-and-permissions#fill-a-worldguard-region-with-an-eb).
    * Avec cette fonctionnalité, vous pourriez par exemple créer un loop global qui réinitialise une mine précise, comme les /warp mines typiques des serveurs Minecraft.

### HeadDB

* ExecutableItems
  * Vous pouvez utiliser ce plugin pour sélectionner une tête de joueur précise pour l'item de l'ExecutableItem grâce aux [head settings](/executableitems/configurations/item-configuration/item-features#head-settings).
* ExecutableBlocks
  * Vous pouvez utiliser ce plugin pour sélectionner une tête de joueur précise pour le bloc de l'ExecutableBlock en liant un ExecutableItem configuré avec les [head settings](/executableitems/configurations/item-configuration/item-features#head-settings) et en utilisant [TYPE\_OF\_CREATION](/executableblocks/configurations/block-configuration/block-features#creationtype) à partir de cet ExecutableItem.

### IridiumSkyblock

* Pour tous les plugins, une condition permet de faire fonctionner l'activateur uniquement si le joueur se trouve sur son île : elle s'appelle [ifPlayerMustBeOnHisIsland ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland) et elle est compatible avec ce plugin.

### SuperiorSkyblock

* Pour tous les plugins, une condition permet de faire fonctionner l'activateur uniquement si le joueur se trouve sur son île : elle s'appelle [ifPlayerMustBeOnHisIsland ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland) et elle est compatible avec ce plugin.

### GriefPrevention

* Pour tous les plugins, une condition permet de faire fonctionner l'activateur uniquement si le joueur se trouve dans son claim : elle s'appelle [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim). Il existe aussi [ifPlayerMustBeOnHisClaimOrWilderness ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness), et les deux sont compatibles avec ce plugin.

### Lands

* Pour tous les plugins, une condition permet de faire fonctionner l'activateur uniquement si le joueur se trouve dans son claim : elle s'appelle [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim). Il existe aussi [ifPlayerMustBeOnHisClaimOrWilderness ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness), et les deux sont compatibles avec ce plugin.
* ExecutableItems
  * Certains activateurs sont spécifiques à ce plugin :
    * PLAYER\_ENTER\_IN\_THEIR\_LAND
    * PLAYER\_LEAVE\_THEIR\_LAND

### GriefDefender

* Pour tous les plugins, une condition permet de faire fonctionner l'activateur uniquement si le joueur se trouve dans son claim. Cette condition s'appelle [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim) et elle est compatible avec ce plugin.

### Residence

* Pour tous les plugins, une condition permet de faire fonctionner l'activateur uniquement si le joueur se trouve dans son claim. Cette condition s'appelle [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim) et elle est compatible avec ce plugin.

### PlotSquared

* Pour tous les plugins, une condition permet de faire fonctionner l'activateur uniquement si le joueur se trouve dans sa parcelle. Cette condition s'appelle [ifPlayerMustBeOnHisPlot ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisplot) et elle est compatible avec ce plugin.

### Towny

* Pour tous les plugins, une condition permet de faire fonctionner l'activateur uniquement si le joueur se trouve dans sa ville. Cette condition s'appelle [ifPlayerMustBeOnHisTown ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhistown) et elle est compatible avec ce plugin.

### Advanced Enchantments

* ExecutableItems
  * En raison du fonctionnement du plugin Advanced Enchantments, ses enchantements ne figurent pas dans la liste des enchantements. Il n'est donc pas possible de les ajouter avec la fonctionnalité des enchantements :![](https://media.ssomar.com/m/docs-img-image-256.png)
  * Mais il est possible d'ajouter leurs enchantements à vos ExecutableItems en utilisant le plugin NBTAPI, de l'une de ces deux façons :
    * La première consiste à créer un item vanilla, à y ajouter l'AdvancedEnchantment, puis, en le tenant en main, à exécuter /ei create \<id> : l'ExecutableItem obtenu aura automatiquement les Advanced Enchantments importés.
    *   La seconde consiste à ajouter manuellement le NBT Tag dans le fichier de configuration de l'ExecutableItem. Voici un exemple :

        ```yaml
        nbt:
          '0':
            key: ae_enchantment;haste # This add the haste AdvancedEnchantment NBT tag
            type: INT
            value: 1
        ```
  * Après toutes ces étapes, vous devez ajouter manuellement l'enchantement dans le lore pour que les joueurs sachent que cet item possède cet enchantement.

### RoseLoots

* Toutes les commandes de bloc concernées (par ex. [MINEINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#mineincube), [FARMINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#farmincube), [BREAK](/tools-for-all-plugins-score/custom-commands/block-commands#break), etc.) prennent en charge les loots de blocs personnalisés de ce plugin.

### MMOInventory

* ExecutableItems
  * Les activateurs liés à l'entrée et à la sortie de l'inventaire (par ex. EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY et EI\_LEAVE\_THE\_PLAYER\_INVENTORY) sont déclenchés par ses méthodes.

### EnchantsSquared

* ExecutableItems
  * Ce plugin prend en charge les enchantements d'EnchantsSquared.

### ExcellentEnchants

* ExecutableItems
  * Ce plugin prend en charge les enchantements d'ExcellentEnchants

### MMOCore

* La fonctionnalité requiredMana des activateurs peut utiliser le mana de MMOCore, ce qui vous permet de définir un mana requis pour que les activateurs fonctionnent.

### TAB

* La commande personnalisée SETGLOW est compatible avec TAB. Vous devez utiliser le placeholder %score\_cmd-glow%

### BlocksToCommand

* Plugin qui permet d'importer des structures pouvant être placées avec les plugins Ssomar.

### Terra

* Les biomes personnalisés de Terra sont pris en charge par les conditions de biome, avec la condition [ifInBiome ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinbiome-not). Cela vous permet de créer des activateurs, des effets ou des restrictions spécifiques selon le biome dans lequel se trouve un joueur.

### EcoSkills

* Vous pouvez utiliser des conditions de placeholders pour vérifier qu'un joueur possède certaines valeurs de magie avant d'autoriser le déclenchement d'un activateur.
* Vous pouvez utiliser des commandes pour obtenir ou retirer des valeurs de magie.
* ExecutableItems
  * Fonctionnalité [RequiredMagic ](/executableitems/configurations/activator-configuration/activators-features#requiredmagic-ecoskills), à la place des conditions de placeholders et des commandes pour retirer de la magie.

### FACTIONS UUID

* Les commandes SCore placent et retirent des blocs en toute sécurité, en respectant les protections FactionsUUID du joueur.

### CMI

* La commande [SELL\_CONTENT ](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content) prend en charge les prix de CMI, ce qui permet une intégration transparente avec le système économique de CMI pour vendre des items à leur valeur correcte en jeu.

### JOBS REBORN

* La commande JOBS\_MONEY\_BOOST fonctionne avec ce plugin.

### VAULT

* ExecutableItems
  * La fonctionnalité [requiredMoney ](/executableitems/configurations/activator-configuration/activators-features#requiredmoney) fonctionne avec Vault, ce qui vous permet de définir un montant d'argent requis pour que les activateurs se déclenchent.

### Citizen NPC

* ExecutableItems
  * Les activateurs suivants fonctionnent pour les NPC de Citizen
    * PLAYER\_CLICK\_ON\_ENTITY
    * PLAYER\_FISH\_ENTITY
    * PLAYER\_KILL\_ENTIT

### NBT API

* #### itemCheckWithNBTAPI

### Wild Stacker

* Les commandes SILK\_SPAWNER fonctionnent avec les spawners de WildStacker.
