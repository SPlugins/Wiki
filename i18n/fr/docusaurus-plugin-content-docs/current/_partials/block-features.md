---
description: >-
  Découvrez comment utiliser blockCommands, detailedBlocks et blockConditions
  dans les activateurs PLAYER_BLOCK d'ExecutableItems.
source_hash: e670b85f3ec02fc8
translated_at: '2026-11-13T17:20:41.759Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### blockCommands 

Les commandes sont une liste de commandes exécutées depuis la console lorsque l'activateur remplit toutes les conditions et exigences. Vous pouvez utiliser ici des commandes vanilla, des commandes SCore et des commandes d'autres plugins.

* Toutes les lignes de commande de cette liste sont d'abord traitées avec les placeholders des plugins Ssomar, puis avec PAPI. 
  * Il est recommandé de consulter [Placeholders](/tools-for-all-plugins-score/placeholders) pour voir quels placeholders vous pouvez utiliser sur chaque activateur.
* Il existe trois types de cibles d'entité pour les commandes
  * Player : c'est le joueur/utilisateur qui a déclenché l'activateur sur l'ExecutableItem
  * Target : c'est le joueur ciblé/ennemi impliqué dans un activateur.
  * Entity : c'est l'entité/mob/ennemi impliqué dans un activateur.
* Type de catégorie d'activateur : PLAYER\_BLOCK
* Info : liste de commandes qui sont normalement exécutées sur le bloc lorsque l'activateur se déclenche.
  * Cela signifie que l'activateur doit impliquer un bloc. Par exemple, PLAYER\_HIT\_PLAYER est un activateur, mais il n'implique pas de bloc, donc blockCommands n'est pas disponible ici. Avec l'activateur PLAYER\_BLOCK\_BREAK, un bloc est impliqué, donc blockCommands est disponible.
  * Autre exemple : PLAYER\_RIGHT\_CLICK possède un activatorFeature appelé typeTarget, qui vaut par défaut ONLY\_AIR, donc blockCommands n'est pas disponible puisque l'activateur n'implique pas de bloc. Mais typeTarget peut être changé en ONLY\_BLOCK, et l'activateur disposera alors de blockCommands parmi ses features disponibles, plus d'infos ici -> \<IF I FORGOT PLS PING VAYK>
  * Vous pouvez consulter la liste des blockCommands ici -> [Block commands](/tools-for-all-plugins-score/custom-commands/block-commands)
* Exemple :

```yaml
activators: 
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    blockCommands:
    - EXPLODE
```

* Il est important de comprendre que si votre activateur implique aussi un joueur, vous pouvez utiliser les playerCommands, ce qui permet par exemple d'avoir : 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    playerCommands:
    - SEND_MESSAGE &6You have broken a block, it will explode in 5 seconds !
    blockCommands:
    - DELAY 5
    - EXPLODE
```

### detailedBlocks

* Info : ici, vous pouvez sélectionner comme condition le type de bloc(s) sur lequel cet activateur se déclenchera grâce à cette feature.
  * Vous pouvez sélectionner des blocs de Minecraft Vanilla, par exemple :
    * "STONE"
  * <CustomTag type="premium" /> <CustomTag type="version" version="1.13" /> Vous pouvez sélectionner des blocs de Minecraft Vanilla avec NBT (info : [Block\_states](https://minecraft.fandom.com/wiki/Block_states)), par exemple : 
    * `FURNACE{lit:true}`
  * Vous pouvez sélectionner des blocs d'ItemsAdder, par exemple :
    * "ITEMSADDER:\<id>"
  * Vous pouvez sélectionner des blocs d'ExecutableBlocks, par exemple :
    * "EXECUTABLEBLOCKS:\<id>"
  * Vous pouvez mettre certains blocs en liste noire en ajoutant ! au début, par exemple :
    * "!DIRT"
  * Vous pouvez ajouter des Block Tags, par exemple : 
    * "#MINECRAFT\:MINEABLE/PICKAXE"
  * Vous pouvez ajouter des groupes de blocs, par exemple :
    * "ALL\_ORES"

<details>

<summary>Liste des groupes de blocs</summary>

```
    ALL_CHESTS,
    ALL_FURNACES,
    ALL_PLANKS,
    ALL_LOGS,
    ALL_STRIPPED_LOGS,
    ALL_STRIPPED_WOODS,
    ALL_WOODS,
    ALL_ORES,
    ALL_WOOLS,
    ALL_SLABS,
    ALL_STAIRS,
    ALL_FENCES,
    ALL_SAPLINGS,
    ALL_CROPS,
    ALL_DOORS,
    ALL_TRAPDOORS,
    ALL_BEDS,
    ALL_TERRACOTTA,
    ALL_NORMAL_TERRACOTTA,
    ALL_GLAZED_TERRACOTTA,
    ALL_CONCRETE,
    ALL_CONCRETE_POWDERS,
    ALL_GLASS,
    ALL_STAINED_GLASS,
    ALL_SHULKER_BOXES,
    ALL_LEAVES,
    ALL_CARPETS;
```

</details>

* Exemple :

```yaml
activators:  
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    detailedBlocks:
      blocks:
      - STONE
      - COBBLESTONE
      - ANDESITE
      - FURNACE{lit:true} #(🎇 **BLOCK STATE FEATURE IS PREMIUM EXCLUSIVE ONLY AND FOR 1.13+** 🎇)
      - ITEMSADDER:turquoise_block
      - EXECUTABLEBLOCKS:CUSTOMDIRT
      - !DIRT
      - ALL_ORES
      - '#MINECRAFT:MINEABLE/PICKAXE'
      cancelEventIfNotValid: false
```

### blockConditions

* Info : ici, vous pouvez configurer des conditions pour le bloc impliqué.
* [Block conditions](/tools-for-all-plugins-score/custom-conditions/block-conditions.md)

### Block placeholders

Lorsque l'acteur principal de l'événement est un bloc, vous pouvez utiliser dans la configuration de votre activateur (commandes, conditions, autres...) [les placeholders de bloc](/tools-for-all-plugins-score/placeholders#-block-placeholders)
