---
description: >-
  Описание entityCommands, detailedEntities и entityConditions в
  ExecutableItems: команды и условия для сущностей в плагине SPlugins.
source_hash: 54a0eb1b19c50558
translated_at: '2026-10-03T10:36:25.576Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### entityCommands

Commands это список команд, которые выполняются из консоли активатором, если он соответствует всем условиям и требованиям. Здесь можно использовать ванильные команды, команды SCore и команды других плагинов.

* Все строки команд в этом списке сначала обрабатываются плейсхолдерами Ssomar Plugins, а затем через PAPI.
  * Рекомендуется проверить [Placeholders](/tools-for-all-plugins-score/placeholders), чтобы увидеть, какие плейсхолдеры можно использовать в каждом активаторе.
* Существует три типа целевых сущностей в командах
  * Player: это игрок/пользователь, который запустил активатор на ExecutableItem
  * Target: это игрок, на которого нацелен/который является противником, участвующим в активаторе.
  * Entity: это сущность/моб/противник, участвующий в активаторе.
* Тип категории активатора: PLAYER\_ENTITY
* Информация: список команд, которые обычно выполняются против сущности при срабатывании активатора.
  * Под сущностью подразумевается сущность/моб/противник, участвующий в активаторе.
  * Мы знаем, что игрок также считается сущностью, но сущность, участвующая в активаторах, это только моб/противник, участвующий в событии.
  * Список команд для сущностей можно посмотреть здесь [Entity commands](/tools-for-all-plugins-score/custom-commands/entity-commands)
* Пример:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY # replace that with the correct activator name
    entityCommands:
    - DAMAGE 10
    - BURN 5
```

* Важно понимать, что если у вашего активатора также есть игрок, вы можете использовать playerCommands, чтобы получить, например:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY  # replace that with the correct activator name
    playerCommands:
    - SEND_MESSAGE &cThe power of the fire will rise in 5 seconds on the entity
    entityCommands:
    - DELAY 5
    - DAMAGE 10
    - BURN 2
```

### detailedEntities

* Информация: для активаторов, которые involves сущность, вы можете выбрать как условие тип сущности(ей), для которых будет срабатывать этот активатор, используя эту функцию.
  * Вы можете выбрать ванильную сущность Minecraft (информация: [EntityType list](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)), например:
    * "ZOMBIE"
  * <CustomTag type="premium" /> Требуется [NBTAPI Plugin](https://modrinth.com/plugin/nbtapi) Вы можете выбрать ванильного моба Minecraft с NBT (информация: [NBT Tags of entities](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities)), например:
    *  `ZOMBIE{isBaby:1}`
    * `ZOMBIE{CustomName:"*"}`
  * Вы можете выбрать моба MythicMob, например:
    * "MM-\<ID>"
  * Вы можете добавить моба в черный список, используя !, например
    * !SKELETON

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY  # replace that with the correct activator name
    detailedEntities:
    - MM-Giant
    - MM-MyMob
    - '!SKELETON'
    - ZOMBIE{CustomName:"*"}
    - ZOMBIE{IsBaby:1}
```

### entityConditions

* Информация: функция для активаторов, которые involves сущность, здесь вы можете настроить условия для задействованной сущности.
* [Entity conditions](/tools-for-all-plugins-score/custom-conditions/entity-conditions.md)

### Entity placeholders

Когда главным действующим лицом события является сущность, вы можете использовать в конфигурации своего активатора (команды, условия и прочее) [the entity placeholders](/tools-for-all-plugins-score/placeholders#entity-placeholders)
