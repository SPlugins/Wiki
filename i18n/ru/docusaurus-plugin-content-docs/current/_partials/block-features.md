---
description: >-
  Описание blockCommands, detailedBlocks и blockConditions для активаторов в
  SPlugins (ExecutableItems/ExecutableBlocks).
source_hash: e670b85f3ec02fc8
translated_at: '2026-10-03T10:35:53.126Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### blockCommands 

Commands это список команд, которые выполняются из консоли, когда активатор соответствует всем условиям и требованиям. Здесь можно использовать ванильные команды, команды SCore и команды других плагинов.

* Все строки команд в этом списке команд сначала обрабатываются плейсхолдерами из Ssomar Plugins, а затем обрабатываются через PAPI. 
  * Рекомендуется проверить [Placeholders](/tools-for-all-plugins-score/placeholders), чтобы увидеть, какие плейсхолдеры можно использовать на каждом активаторе.
* Есть три типа целей сущностей в командах
  * Player: Это игрок/пользователь, который запустил активатор на ExecutableItem
  * Target: Это игрок, на которого нацелен/враг, вовлечённый в активатор.
  * Entity: Это сущность/моб/враг, вовлечённый в активатор.
* Тип категории активатора: PLAYER\_BLOCK
* Info: Список команд, которые обычно выполняются против блока, когда активируется активатор.
  * Это означает, что активатор должен быть связан с блоком, например PLAYER\_HIT\_PLAYER, это активатор, но он не вовлекает блок, поэтому blockCommands здесь недоступны. С активатором PLAYER\_BLOCK\_BREAK есть вовлечённый блок, поэтому blockCommands здесь доступны.
  * Другой пример, PLAYER\_RIGHT\_CLICK имеет activatorFeature под названием typeTarget, по умолчанию он ONLY\_AIR, поэтому blockCommands недоступны, поскольку активатор не связан с блоком, но typeTarget можно изменить на ONLY\_BLOCK, и тогда у активатора появится доступная функция blockCommands, больше информации здесь -> \<IF I FORGOT PLS PING VAYK>
  * Список blockCommands можно посмотреть здесь -> [Block commands](/tools-for-all-plugins-score/custom-commands/block-commands)
* Example:

```yaml
activators: 
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    blockCommands:
    - EXPLODE
```

* Важно понимать, что если ваш активатор также включает игрока, вы можете использовать playerCommands, так что мы можем получить, например: 

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

* Info: Здесь можно выбрать в качестве условия тип блока(ов), на которых будет срабатывать этот активатор, используя эту функцию.
  * Можно выбрать блоки из Minecraft Vanilla, такие как:
    * "STONE"
  * <CustomTag type="premium" /> <CustomTag type="version" version="1.13" /> Можно выбрать блоки из Minecraft Vanilla с NBT (info: [Block\_states](https://minecraft.fandom.com/wiki/Block_states)), такие как: 
    * `FURNACE{lit:true}`
  * Можно выбрать блоки из ItemsAdder, такие как:
    * "ITEMSADDER:\<id>"
  * Можно выбрать блоки из ExecutableBlocks, такие как:
    * "EXECUTABLEBLOCKS:\<id>"
  * Можно добавить определённые блоки в чёрный список, добавив ! в начале, например:
    * "!DIRT"
  * Можно добавлять теги блоков (Block Tags), например: 
    * "#MINECRAFT\:MINEABLE/PICKAXE"
  * Можно добавлять группы блоков, например
    * "ALL\_ORES"

<details>

<summary>Список групп блоков</summary>

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

* Example:

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

* Info: Здесь можно настроить условия для вовлечённого блока.
* [Block conditions](/tools-for-all-plugins-score/custom-conditions/block-conditions.md)

### Block placeholders

Когда главным действующим лицом события является блок, вы можете использовать в конфигурации своего активатора (commands, conditions, другое..) [the block placeholders](/tools-for-all-plugins-score/placeholders#-block-placeholders)
