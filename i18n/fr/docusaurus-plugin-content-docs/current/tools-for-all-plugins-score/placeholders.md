---
title: Liste des placeholders SCore
description: >-
  Liste complète des placeholders SCore pour ExecutableItems, ExecutableBlocks
  et ExecutableEvents : joueur, item, bloc, entité, calculs et PlaceholderAPI.
source_hash: ecc26db0e2403378
translated_at: '2026-11-13T17:20:23.855Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 📚 Liste des placeholders SCore

Un placeholder SCore est un `%tag%` remplacé par une valeur en direct (données du joueur, de l'item, du bloc, calculs, nombres aléatoires) lorsqu'une commande, une condition, une ligne de lore ou un message s'exécute. Ils fonctionnent dans toutes les parties d'ExecutableItems, d'ExecutableBlocks et d'ExecutableEvents : commandes, conditions, lore, messages et variables SCore. SCore analyse aussi tous les placeholders [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) aux mêmes endroits, si bien que les tags de style PAPI `%player_name%` et les tags de style SCore `%player%` peuvent être mélangés sur une même ligne.

## Table des matières

- [Placeholders de joueur](#player-placeholders)
- [Placeholders de cible / d'entité](#target--entity-placeholders)
- [Placeholders d'item](#item-placeholders)
- [Placeholders de bloc](#block-placeholders)
- [Placeholders de projectile](#projectile-placeholders)
- [Placeholders de variables](#variables-placeholders)
- [Placeholders de cooldown](#cooldown-placeholders)
- [Placeholders mathématiques](#math-placeholders)
- [Placeholders utilitaires et de texte](#utility--text-placeholders)
- [Placeholders de comptage spécifiques aux plugins](#plugin-specific-count-placeholders)
- [Placeholders spécifiques aux événements](#event-specific-placeholders)
- [Utiliser les placeholders PlaceholderAPI dans SCore](#using-placeholderapi-placeholders-in-score)
- [Questions ?](#question-)

:::tip Opérations numériques
Tous les placeholders numériques prennent en charge les opérations arithmétiques :
- **Incrément :** `%amount%+6` (si %amount% = 15, résultat = 21)
- **Décrément :** `%amount%-8` (si %amount% = 14, résultat = 6)
:::

## Placeholders de joueur

Les placeholders de joueur sont disponibles dans les activateurs où un joueur est impliqué. Lorsque le joueur est secondaire dans l'activateur, remplacez `player` par `target` (par ex. `%target_health%`). Dans ExecutableItems et ExecutableBlocks, l'item/le bloc peut avoir un **Owner** : remplacez `player` par `owner` pour obtenir les placeholders du propriétaire (par ex. `%owner_uuid%`).

| Placeholder | Retourne | Exemple |
|------------|---------|---------|
| `%player%` | Nom du joueur | `SEND_MESSAGE &aWelcome %player%!` |
| `%player_uuid%` | UUID du joueur | `SEND_MESSAGE &7Your UUID is %player_uuid%` |
| `%player_uuid_array%` | UUID du joueur sous forme de `[I;-1288600659,-373273272,-1897203511,898446696]` | Utilisé en interne pour stocker les UUID dans les commandes basées sur NBT |
| `%player_world%` | Nom du monde (`%player_world_lower%` pour les minuscules) | `execute in <<%player_world%>> run summon zombie 100 50 100` |
| `%player_x%`, `%player_y%`, `%player_z%` | Coordonnées (ajouter `_int` pour les entiers) | `execute at %player% run setblock %player_x_int% %player_y_int% %player_z_int% air` |
| `%player_pitch%`, `%player_pitch_positive%` | Pitch du joueur (`_int` pour un entier) | `SEND_MESSAGE &7Pitch: %player_pitch_int%` |
| `%player_yaw%`, `%player_yaw_positive%` | Yaw du joueur (`_int` pour un entier) | `SEND_MESSAGE &7Yaw: %player_yaw_int%` |
| `%player_direction%` | Point cardinal (N, SW, NE, etc.) | Condition : `part1: '%player_direction%'`, `comparator: EQUALS`, `part2: 'SW'` |
| `%player_health%` | Santé actuelle | `SEND_MESSAGE &cHealth: %player_health%` |
| `%player_max_health%` | Santé maximale | `SEND_MESSAGE &cHealth: %player_health%/%player_max_health%` |
| `%player_slot%` | Slot ayant déclenché l'activateur | `SEND_MESSAGE &7Used from slot %player_slot%` |
| `%player_slot_live%` | Slot actuellement tenu en main | `SEND_MESSAGE &7Holding slot %player_slot_live%` |
| `%player_team%` | Équipe du joueur (le cas échéant) | `SEND_MESSAGE &7Team: %player_team%` |
| `%player_attack_charge%` | Cooldown d'attaque (1.0 = entièrement chargé) | Condition : `part1: '%player_attack_charge%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR_OR_EQUALS`, `part2: '1.0'` |
| `%last_damage_taken%` | Dernier dégât reçu (`_int` pour un entier) | `SEND_MESSAGE &cYou took %last_damage_taken_int% damage` |
| `%last_damage_dealt%` | Dernier dégât infligé (`_int` pour un entier) <CustomTag type="version" version="1.16" /> | `SEND_MESSAGE &aYou dealt %last_damage_dealt_int% damage` |
| `%player_x_velocity%`, `%player_y_velocity%`, `%player_z_velocity%` | Vélocité actuelle en X, Y, Z (`_int` pour un entier) | `SEND_MESSAGE &7Y velocity: %player_y_velocity%` |

### Placeholders de joueur initiaux

Capture les valeurs du joueur au moment du déclenchement de l'activateur (elles ne changent pas pendant l'exécution) :
- `%player_x_initial%`, `%player_y_initial%`, `%player_z_initial%`
- `%player_world_initial%`
- `%player_pitch_initial%`, `%player_yaw_initial%`
- `%player_direction_initial%`

## Placeholders de cible / d'entité

Les placeholders d'entité sont disponibles dans les activateurs où une entité est impliquée. Lorsque l'entité est secondaire dans l'activateur, remplacez `entity` par `target` (par ex. `%target_x%`).

| Placeholder | Retourne | Exemple |
|------------|---------|---------|
| `%entity%` | Type d'entité (MAJUSCULES) | `SEND_MESSAGE &7You hit a %entity%` |
| `%entity_lower_case%` | Type d'entité (minuscules) | `SEND_MESSAGE &7You hit a %entity_lower_case%` |
| `%entity_name%` | Nom personnalisé de l'entité | `SEND_MESSAGE &7Target: %entity_name%` |
| `%entity_uuid%` | UUID de l'entité | Utilisé pour identifier la cible dans les commandes basées sur NBT |
| `%entity_uuid_array%` | UUID de l'entité sous forme de `[I;-1288600659,-373273272,-1897203511,898446696]` | Utilisé en interne pour stocker les UUID dans les commandes basées sur NBT |
| `%entity_x%`, `%entity_y%`, `%entity_z%` | Coordonnées (ajouter `_int` pour les entiers) | `execute at %entity% run setblock %entity_x_int% %entity_y_int% %entity_z_int% air` |
| `%entity_health%` | Santé actuelle | `SEND_MESSAGE &cTarget health: %entity_health%` |
| `%entity_max_health%` | Santé maximale | `SEND_MESSAGE &cTarget health: %entity_health%/%entity_max_health%` |
| `%entity_world%` | Nom du monde | `SEND_MESSAGE &7Entity world: %entity_world%` |
| `%entity_direction%` | Direction de face | Condition : `part1: '%entity_direction%'`, `comparator: EQUALS`, `part2: 'N'` |
| `%entity_pitch%`, `%entity_yaw%` | Valeurs de rotation | `SEND_MESSAGE &7Yaw: %entity_yaw%` |
| `%entity_team%` | Équipe de l'entité (le cas échéant) | `SEND_MESSAGE &7Team: %entity_team%` |
| `%entity_serialized%` | Définition complète de l'entité | Utilisé pour copier/restaurer une entité dans les commandes avancées |
| `%entity_last_damage_taken%` | Dernier dégât reçu (ajouter `_int` pour les entiers). Les variantes `_final` n'existent que dans les événements de dégâts d'entité d'ExecutableEvents, voir [placeholders d'activateur](#event-specific-placeholders) | `SEND_MESSAGE &cTarget took %entity_last_damage_taken_int% damage` |
| `%entity_x_velocity%`, `%entity_y_velocity%`, `%entity_z_velocity%` | Vélocité actuelle en X, Y, Z (`_int` pour un entier) | `SEND_MESSAGE &7Target Y velocity: %entity_y_velocity%` |

## Placeholders d'item

| Placeholder | Retourne | Exemple |
|------------|---------|---------|
| `%name%` | Nom de l'ExecutableItem | `SEND_MESSAGE &aYou used %name%` |
| `%id%` | ID de l'ExecutableItem | `SEND_MESSAGE &7Item ID: %id%` |
| `%amount%` | Quantité dans la pile actuelle | `SEND_MESSAGE &7You have %amount% in this stack` |
| `%usage%` | Nombre d'utilisations actuel | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%usage_roman%` | Utilisations en chiffres romains | `ADD_ITEM_LORE &7Usage: %usage_roman%` |
| `%usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` | Barre d'utilisation visuelle, plus d'infos ci-dessous | `ADD_ITEM_LORE %usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` |
| `%usage_limit%` | Limite maximale d'utilisations | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%usage_raw%`, `%usage_limit_raw%` | ExecutableItems, uniquement dans le nom et le lore de l'item : l'utilisation et la limite d'utilisation en nombres bruts, plus d'infos ci-dessous | `lore: ['&7Damage: %math_0_%usage_raw%*2%']` |
| `%durability%` | Durabilité de l'item (1.14+) | `SEND_MESSAGE &7Durability left: %durability%` |
| `%max_use_per_day_item%` | Limite d'utilisation quotidienne (item) | Condition : `part1: '%max_use_per_day_item%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR`, `part2: '0'` |
| `%max_use_per_day_activator%` | Limite d'utilisation quotidienne (activateur) | Condition : `part1: '%max_use_per_day_activator%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR`, `part2: '0'` |

**Spécial :** `%usage_bar(amount:30,color1:&d,color2:&5,symbol:|)%`

![](https://media.ssomar.com/m/docs-img-usage-bar.jpg)
- Crée une barre d'utilisation visuelle
- Paramètres : amount (nombre de barres), color1 (utilisé), color2 (inutilisé), symbol

**Placeholders d'utilisation bruts :** `%usage_raw%` et `%usage_limit_raw%`

- Dans le nom et le lore d'un ExecutableItem, `%usage%` et `%usage_limit%` sont accompagnés d'un tag invisible (lorsque `isRefreshableClean` est activé, ce qui est le cas par défaut) qui permet au plugin de mettre à jour la valeur plus tard. À l'intérieur d'un placeholder PlaceholderAPI, ce tag casse l'expression, par exemple dans `%math_0_%usage%*2%`.
- `%usage_raw%` et `%usage_limit_raw%` donnent la même valeur sans aucun tag, ils peuvent donc être utilisés dans les placeholders mathématiques de PlaceholderAPI : `%math_0_%usage_raw%*2%`.
- Ils acceptent le raccourci `+N` / `-N`, comme les autres placeholders numériques : `%usage_raw%-1`.
- Limite : comme ils n'ont pas de tag, ils ne sont mis à jour que lorsque le lore est reconstruit à partir de la config. Lorsque le lore de l'item est conservé tel quel (par exemple après l'ajout de lignes), la valeur écrite dans le lore reste la même, alors que `%usage%` continue d'être mis à jour.

## Placeholders de bloc

Les placeholders de bloc sont disponibles dans les activateurs où un bloc est impliqué. Lorsque le bloc est secondaire dans l'activateur, remplacez `block` par `target_block` (par ex. `%target_block_x%`).

| Placeholder | Retourne | Exemple |
|------------|---------|---------|
| `%block%` | Type de bloc (MAJUSCULES) | `SEND_MESSAGE &7You broke %block%` |
| `%block_lower%` | Type de bloc (minuscules) | `SEND_MESSAGE &7You broke %block_lower%` |
| `%block_live%`, `%block_live_lower%` | Type de bloc actuel | `SEND_MESSAGE &7Current block: %block_live%` |
| `%block_item_material%` | Forme item du bloc (les cultures donnent leurs graines, `WALL_TORCH` donne `TORCH`, `OAK_WALL_SIGN` donne `OAK_SIGN`, `POTTED_DANDELION` donne `DANDELION`…) | Utilisé pour donner l'item correspondant à un bloc posé |
| `%block_x%`, `%block_y%`, `%block_z%` | Coordonnées (ajouter `_int` pour les entiers) | `execute at %player% run setblock %block_x_int% %block_y_int%+1 %block_z_int% air` |
| `%blockface%` | Face du bloc sélectionnée | `SEND_MESSAGE &7Face: %blockface%` |
| `%block_world%` | Nom du monde | `execute in <<%block_world%>> run setblock %block_x_int% %block_y_int% %block_z_int% air` |
| `%block_biome%` | Nom du biome | Condition : `part1: '%block_biome%'`, `comparator: EQUALS`, `part2: 'DESERT'` |
| `%block_dimension%` | Type de monde (nether, normal, end) | Condition : `part1: '%block_dimension%'`, `comparator: EQUALS`, `part2: 'nether'` |
| `%block_spawnertype%` | Type de mob du spawner | `SEND_MESSAGE &7Spawner: %block_spawnertype%` |
| `%block_is_ageable%` | Indique si le bloc peut vieillir ou non | Condition : `part1: '%block_is_ageable%'`, `comparator: EQUALS`, `part2: 'true'` |
| `%block_eb_id%` | ID de l'ExecutableBlock (le cas échéant) | `SEND_MESSAGE &7EB ID: %block_eb_id%` |
| `%block_data%` | Valeur de block data | `SEND_MESSAGE &7Block data: %block_data%` |

## Placeholders de projectile

Les placeholders de projectile sont disponibles dans les activateurs où un projectile est impliqué.

| Placeholder | Retourne | Exemple |
|------------|---------|---------|
| `%projectile%` | Type de projectile (MAJUSCULES) | `SEND_MESSAGE &7You shot a %projectile%` |
| `%projectile_lower_case%` | Type de projectile (minuscules) | `SEND_MESSAGE &7You shot a %projectile_lower_case%` |
| `%projectile_name%` | Nom personnalisé du projectile | `SEND_MESSAGE &7Projectile: %projectile_name%` |
| `%projectile_uuid%` | UUID du projectile | Utilisé pour identifier le projectile dans les commandes basées sur NBT |
| `%projectile_uuid_array%` | UUID du projectile sous forme de `[I;-1288600659,-373273272,-1897203511,898446696]` | Utilisé en interne pour stocker les UUID dans les commandes basées sur NBT |
| `%projectile_x%`, `%projectile_y%`, `%projectile_z%` | Coordonnées | `execute at %player% run summon minecraft:lightning_bolt %projectile_x% %projectile_y% %projectile_z%` |
| `%projectile_world%` | Nom du monde | `SEND_MESSAGE &7World: %projectile_world%` |
| `%bow_force%` | Force du tir à l'arc (0-1) | Condition : `part1: '%bow_force%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR_OR_EQUALS`, `part2: '0.9'` |

## Placeholders de variables

### Variables d'item/de bloc

**Variables de type chaîne/nombre :**
- `%var_X%` - Valeur de la variable X
- `%var_X_int%` - Valeur entière de la variable X (uniquement pour les variables de type NUMBER)
- `%var_X_roman%` - Valeur en chiffres romains (uniquement pour les variables de type NUMBER)

**Variables de type liste :**
- `%var_MYVAR%` - Liste complète avec crochets
- `%var_MYVAR_size%` - Nombre d'éléments
- `%var_MYVAR_contains_VALUE%` - Vérifie si la liste contient VALUE

Exemple : `ADD_ITEM_LORE &7Defense: %var_defense%`

### SCore Variables (globales / par joueur)

SCore dispose aussi de son propre système de variables globales ou par joueur, indépendant des variables d'item/de bloc. Voir [SCore Variables](/tools-for-all-plugins-score/score-variables) pour les commandes `/score variables`. Une fois [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) installé, ces variables sont exposées sous la forme :
- `%score_variables_<variable-id>%`
- `%score_variables_<variable-id>_int%`
- `%score_variables_<variable-id>_<index>%` (liste, valeur à l'index)
- `%score_variables-contains_<variable-name>_<value>%` (liste, booléen)
- `%score_variables-size_<variable-name>%` (liste, taille)

## Placeholders de cooldown

Format : `%score_cooldown_{plugin}:{object_id}:{activator_id}%`

| Placeholder | Retourne | Exemple |
|------------|---------|---------|
| `%score_cooldown_EI:Free_Lottery:activator1%` | Cooldown restant pour un activateur ExecutableItems | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EI:Free_Lottery:activator1%` |
| `%score_cooldown_EB:MyBlock:activator2%` | Cooldown restant pour un activateur ExecutableBlocks | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EB:MyBlock:activator2%` |

## Placeholders mathématiques

Tous les placeholders SCore numériques prennent en charge l'arithmétique en ligne, directement après le tag :
- `%amount%+6` (si `%amount%` = 15, résultat = 21)
- `%amount%-8` (si `%amount%` = 14, résultat = 6)

Pour tout ce qui dépasse une simple opération `+`/`-` (multiplication, division, expressions imbriquées), utilisez le [placeholder math de PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#math) autour d'un placeholder SCore :

- `%math_0_(%usage%)*10%` multiplie le `%usage%` de l'item par 10.
  - Dans le nom ou le lore d'un ExecutableItem, utilisez plutôt [`%usage_raw%`](#item-placeholders) : `%math_0_(%usage_raw%)*10%`.
- `%math_{score_variables_userLevel}*10%` multiplie la variable SCore `userLevel` par 10 (voir [Utiliser les placeholders PlaceholderAPI dans SCore](#using-placeholderapi-placeholders-in-score)).

:::info
Les placeholders SCore sont analysés **avant** les placeholders PlaceholderAPI, donc `%math_...%` reçoit toujours la valeur SCore déjà résolue.
:::

## Placeholders utilitaires et de texte

| Placeholder | Retourne | Exemple |
|------------|---------|---------|
| `%rand:MIN\|MAX%` | Nombre aléatoire entre MIN et MAX | `SEND_MESSAGE &6You rolled %rand:1\|100%` |
| `%timestamp%` | Timestamp actuel | `SEND_MESSAGE &7Time: %timestamp%` |
| `%activator_id%` | ID de l'activateur actuel | `SEND_MESSAGE &7Activator: %activator_id%` |
| `%activator_name%` | Nom de l'activateur actuel | `SEND_MESSAGE &7Activator: %activator_name%` |

### Commandes AROUND & NEAREST

Utilisez les placeholders de joueur/d'entité avec le préfixe `around_target` :
- `%around_target_direction%`
- `%around_target_health%`
- `%around_target_uuid%`
- Si `%around_target%` échoue, utilisez `%around_target::step1%`
- `%around_target_count%` : le nombre de cibles de la commande `AROUND` / `MOB_AROUND`, voir [AROUND](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#around)

Exemple : `AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SEND_MESSAGE &cYou got smited!`

### Commandes DAMAGE

| Placeholder | Retourne | Exemple |
|------------|---------|---------|
| `%score_cmd-damage-boost%` | Bonus de dégâts actuel | `SEND_MESSAGE &cDamage boost: %score_cmd-damage-boost%` |
| `%score_cmd-damage-resistance%` | Résistance aux dégâts actuelle | `SEND_MESSAGE &cDamage resistance: %score_cmd-damage-resistance%` |

:::warning
**Attack Charge** : `%player_attack_charge%` est réinitialisé après l'exécution de la commande DAMAGE, vérifiez donc sa valeur avant de l'utiliser.
:::

### Placeholders de message/commande

Pour `PLAYER_WRITE_COMMAND` et `PLAYER_SEND_MESSAGE` :

| Placeholder | Retourne | Exemple |
|------------|---------|---------|
| `%arg0%`, `%arg1%`, `%arg2%`, etc. | Arguments individuels de la commande | `SEND_MESSAGE &7First argument: %arg0%` |
| `%all_args%` | Tous les arguments | `SEND_MESSAGE &7Args: %all_args%` |
| `%all_args_without_first%` | Tous les arguments sauf le premier | `SEND_MESSAGE &7Args: %all_args_without_first%` |

## Placeholders de comptage spécifiques aux plugins

### ExecutableItems

- `%executableitems_checkamount%` - Total d'EI dans l'inventaire
- Arguments (utilisez des virgules entre les valeurs pour en fournir plusieurs) :
  - `slot` : slots à vérifier. N'utilisez pas cet argument si vous voulez que tous les slots soient évalués.
  - `id` : ID de l'item ei que vous voulez vérifier.
  - `owner` : compte uniquement si la valeur du propriétaire est correcte
  - `owneruuid` : compte uniquement si l'UUID du propriétaire est correct
- Exemples :
  - `%executableitems_checkamount_slot:0,2,3%` - EI dans des slots précis
  - `%executableitems_checkamount_id:item1,item2_slot:0,2%` - Items précis dans des slots
  - `%executableitems_checkamount_owner:Special70%`

<hr/>

- `%executableitems_checkvar%` - Valeur / Valeur totale des valeurs de variable
- Arguments (utilisez des virgules entre les valeurs pour en fournir plusieurs) :
  - `slot` : slots à vérifier. N'utilisez pas cet argument si vous voulez que tous les slots soient évalués.
  - `id` : ID de l'item ei que vous voulez vérifier.
  - `var` : l'ID de la variable que vous voulez vérifier.
- Exemples :
  - `%executableitems_checkvar_id:star_man_var:defense%`
  - `%executableitems_checkvar_slot:-1,40_var:atk_bonus%`
  - `%executableitems_checkvar_var:defense,bonus_defense%`

<hr/>

- `%executableitems_set_<id>%` <CustomTag type="premium" /> - Nombre de pièces du [set](/executableitems/configurations/sets-configuration) `<id>` portées par le joueur
- `%executableitems_set_<id>_tier%` - Palier actif le plus élevé du set (nombre de pièces), `0` s'il n'y en a aucun

:::info
- Si la première valeur de variable détectée est une chaîne, la valeur est renvoyée immédiatement.
- Si les autres valeurs de variable détectées sont des nombres, elles sont additionnées et la valeur totale est renvoyée.
- Ne prend actuellement pas en charge les variables de type liste.
:::

### ExecutableBlocks

- `%executableblocks_checkamount%` - Total d'EB dans l'inventaire
- Arguments (utilisez des virgules entre les valeurs pour en fournir plusieurs) :
  - `slot` : slots à vérifier. N'utilisez pas cet argument si vous voulez que tous les slots soient évalués.
  - `id` : ID de l'item ei que vous voulez vérifier.
  - `owner` : compte uniquement si la valeur du propriétaire est correcte
  - `owneruuid` : compte uniquement si l'UUID du propriétaire est correct
- Exemples :
  - `%executableblocks_checkamount_slot:0,2,3%` - EB dans des slots précis
  - `%executableblocks_checkamount_id:block1,block2_slot:0,2%` - Blocs précis dans des slots
  - `%executableblocks_checkamount_owner:Special70%`

## Placeholders spécifiques aux événements

Ces placeholders ne sont disponibles que dans l'activateur d'événement correspondant.

| Activateur | Placeholders |
|-----------|--------------|
| **RAID_TRIGGER** | `%player%`, `%badomenlevel%` |
| **RAID_WAVE** | `%raiders%` (liste d'UUID) |
| **RAID_FINISH** | `%badomen%`, `%heroes%` (liste d'UUID) |
| **PLAYER_EXPERIENCE_CHANGE** | `%experience%` |
| **PLAYER_RECEIVE_EFFECT** | `%effect_received%`, `%effect_received_level%`, `%effect_received_duration%` |
| **PLAYER_HIT_ENTITY** | `%critical%` (true/false) |
| **PLAYER_TELEPORT** | `%teleport_cause%` |
| **BROADCAST_MESSAGE** | `%message%`, `%is_async%` |
| **PLUGIN_ENABLE/DISABLE** | `%plugin_name%` |
| **PLAYER_ADVANCEMENT** | `%advancement%` (uniquement pour 1.19+) |
| **PLAYER_RECEIVE_HIT_GLOBAL, PLAYER_RECEIVE_HIT_BY_PLAYER, PLAYER_RECEIVE_HIT_BY_ENTITY** | `%last_damage_taken_nonfinal%`, `%last_damage_taken_nonfinal_int%` correspondent aux dégâts bruts subis. `%last_damage_taken_final%`, `%last_damage_taken_final_int%` correspondent aux dégâts subis après les bonus de défense (attributs, effet de résistance, armure). Seuls les coups directs donnent la bonne valeur ; recevoir des coups de projectiles renvoie 0 |
| **ENTITY_DAMAGE_BY_PLAYER, ENTITY_DAMAGE_BY_ENTITY, ENTITY_DAMAGE_BY_BLOCK** (EE) | `%entity_last_damage_taken_final%`, `%entity_last_damage_taken_final_int%` correspondent aux dégâts subis après les bonus de défense (armure, résistance…). ENTITY_DAMAGE_BY_PLAYER fournit aussi `%entity_last_damage_taken_final_with_booster%` et `%entity_last_damage_taken_final_with_booster_int%`, les dégâts finaux incluant les bonus de dégâts |
| **PLAYER_BLOCK_HIT_OF_PLAYER, PLAYER_BLOCK_HIT_OF_ENTITY** | `%damage_blocked_base%`, `%damage_blocked_base_int%` renvoie les dégâts bruts bloqués par le bouclier |
| **PLAYER_PICKUP_ITEM** (EE) | 1.13+ : `%item_type%`, `%item_name%`, `%item_amount%`. 1.14-1.21.3 : `%item_cmdata%` (-1 si null). 1.21.4+ : `%item_cmdata_s_0%` (« null » si vide), `%item_cmdata_f_0%` (-1 si vide) (première valeur custom model data de type chaîne/flottant, car depuis 1.21.4+ le custom model data est stocké dans un tableau) |
| **PLAYER_INVENTORY_CLICK** (EE) | `%is_shift_click%`, `%is_mouse_click%`, `%is_left_click%`, `%is_right_click%`, `%is_keyboard_click%`, `%is_creative_action%`, `%get_action%` ([Valeurs d'enum de référence](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryAction.html)), `%before_slot%`, `%after_slot%`, `%inventory_type%` ([Valeurs d'enum de référence](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryType.html)), `%inventory_title%` (1.21+) |
| **PLAYER_KILL_ENTITY** | `%last_hitter%` : type de mob de celui qui a porté le dernier coup. Utile pour vérifier si c'est vous ou votre loup apprivoisé qui avez porté le dernier coup, par ex. `PLAYER`, `WOLF` |

## Utiliser les placeholders PlaceholderAPI dans SCore

[PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) est l'un des piliers de la création d'items et de blocs : tout placeholder PlaceholderAPI installé (`%vault_eco_balance%`, `%luckperms_prefix%`, etc.) peut être utilisé partout où SCore lit du texte, avec la même syntaxe `%...%` :

- Lore
- Section des commandes
- Messages (tous les types de messages : message de cooldown, message de condition non remplie, message des éléments requis, etc.)
- Variables
- etc.

Les placeholders propres à SCore sont analysés **avant** les placeholders PlaceholderAPI, une expression PAPI peut donc envelopper sans risque une expression SCore, comme dans l'exemple de calcul ci-dessus (`%math_{score_variables_userLevel}*10%`).

## Documentation associée

- [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- [SCore Variables](/tools-for-all-plugins-score/score-variables)
- [Plugins compatibles](/tools-for-all-plugins-score/compatible-plugins)
- [Placeholder Conditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions)

## Questions ?

**SCore est-il compatible avec PlaceholderAPI ?**
Oui. Tout placeholder PlaceholderAPI fonctionne dans le lore, les commandes, les messages et les variables d'ExecutableItems, d'ExecutableBlocks et d'ExecutableEvents. Les placeholders propres à SCore sont analysés en premier, les deux syntaxes peuvent donc être combinées sur une même ligne sans conflit.

**Puis-je faire des calculs avec les placeholders ?**
L'incrément/décrément simple fonctionne directement : `%amount%+6` ou `%amount%-8`. Pour une multiplication, une division ou des expressions imbriquées, enveloppez le placeholder SCore dans le placeholder math de PlaceholderAPI, par ex. `%math_0_(%usage%)*10%`.

**Comment utiliser un placeholder PlaceholderAPI dans une commande ExecutableItems ?**
Écrivez-le exactement comme n'importe quel placeholder SCore, en ligne dans la chaîne de la commande, par exemple `SEND_MESSAGE &7Balance: %vault_eco_balance%`. Il fonctionne dans les commandes, les conditions, le lore et tous les types de messages, sans configuration supplémentaire hormis l'installation de PlaceholderAPI et du plugin source.

**Quelle est la différence entre `%var_X%` et `%score_variables_X%` ?**
`%var_X%` lit une variable propre à un item/bloc, stockée directement sur cet ExecutableItem ou cet ExecutableBlock. `%score_variables_<id>%` lit une variable SCore globale ou par joueur, gérée avec `/score variables` et exposée via PlaceholderAPI.

**Pourquoi `%around_target%` ne fonctionne-t-il parfois pas ?**
Sur certains activateurs, la cible n'est pas résolue à la première référence. Utilisez plutôt `%around_target::step1%`, qui est l'alternative documentée pour les commandes AROUND/NEAREST.
