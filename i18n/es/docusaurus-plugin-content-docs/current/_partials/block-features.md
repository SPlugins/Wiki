---
description: >-
  Guía en español sobre blockCommands, detailedBlocks y blockConditions para
  configurar activadores relacionados con bloques en SPlugins.
source_hash: e670b85f3ec02fc8
translated_at: '2026-10-03T10:35:50.312Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### blockCommands 

Los comandos son una lista de comandos que se ejecutan desde la consola cuando el activador cumple todas las condiciones y requisitos. Aquí puedes usar comandos vanilla, comandos de SCore y comandos de otros plugins.

* Todas las líneas de comando de esta lista de comandos se procesan primero con los placeholders de Ssomar Plugins y después se procesan mediante PAPI. 
  * Se recomienda consultar [Placeholders](/tools-for-all-plugins-score/placeholders) para ver qué placeholders puedes usar en cada activador.
* Hay tres tipos de objetivos de entidad en los comandos
  * Player: es el jugador/usuario que activó el activador en el ExecutableItem
  * Target: es el jugador objetivo/enemigo involucrado en un activador.
  * Entity: es la entidad/mob/enemigo involucrado en un activador.
* Tipo de categoría de activador: PLAYER\_BLOCK
* Info: lista de comandos que normalmente se ejecutan contra el bloque cuando se dispara el activador.
  * Esto significa que el activador debe estar relacionado con un bloque, por ejemplo PLAYER\_HIT\_PLAYER es un activador, pero no involucra un bloque, así que blockCommands no está disponible aquí. Con el activador PLAYER\_BLOCK\_BREAK sí hay un bloque involucrado, así que blockCommands está disponible aquí.
  * Otro ejemplo, PLAYER\_RIGHT\_CLICK tiene un activatorFeature llamado typeTarget, que por defecto es ONLY\_AIR, así que blockCommands no está disponible porque el activador no involucra un bloque, pero typeTarget puede cambiarse a ONLY\_BLOCK y entonces el activador tendrá disponible la función blockCommands, más info aquí -> \<IF I FORGOT PLS PING VAYK>
  * Puedes consultar la lista de blockCommands aquí -> [Block commands](/tools-for-all-plugins-score/custom-commands/block-commands)
* Ejemplo:

```yaml
activators: 
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    blockCommands:
    - EXPLODE
```

* Es importante entender que si tu activador también tiene un jugador, puedes usar playerCommands, de modo que podemos tener por ejemplo: 

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

* Info: aquí puedes seleccionar como condición el tipo de bloque(s) en el que se disparará este activador usando esta función.
  * Puedes seleccionar bloques de Minecraft Vanilla como:
    * "STONE"
  * <CustomTag type="premium" /> <CustomTag type="version" version="1.13" /> Puedes seleccionar bloques de Minecraft Vanilla con NBT (info: [Block\_states](https://minecraft.fandom.com/wiki/Block_states)) como: 
    * `FURNACE{lit:true}`
  * Puedes seleccionar bloques de ItemsAdder como:
    * "ITEMSADDER:\<id>"
  * Puedes seleccionar bloques de ExecutableBlocks como:
    * "EXECUTABLEBLOCKS:\<id>"
  * Puedes poner en lista negra ciertos bloques añadiendo ! al principio como:
    * "!DIRT"
  * Puedes añadir Block Tags como: 
    * "#MINECRAFT\:MINEABLE/PICKAXE"
  * Puedes añadir grupos de bloques como
    * "ALL\_ORES"

<details>

<summary>Lista de grupos de bloques</summary>

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

* Ejemplo:

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

* Info: aquí puedes configurar condiciones para el bloque involucrado.
* [Block conditions](/tools-for-all-plugins-score/custom-conditions/block-conditions.md)

### Block placeholders

Cuando el actor principal del evento es un bloque, puedes usar en la configuración de tu activador (comandos, condiciones, otros...) [los block placeholders](/tools-for-all-plugins-score/placeholders#-block-placeholders)
