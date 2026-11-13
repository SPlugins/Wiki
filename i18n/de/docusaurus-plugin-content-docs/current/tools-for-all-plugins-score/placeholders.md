---
title: SCore-Platzhalter-Liste
description: >-
  Alle SCore-Platzhalter für ExecutableItems, ExecutableBlocks und
  ExecutableEvents: Spieler, Item, Block, Entity, Mathe und
  PlaceholderAPI-Syntax.
source_hash: ecc26db0e2403378
translated_at: '2026-11-13T17:33:44.156Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 📚 SCore-Platzhalter-Liste

Ein SCore-Platzhalter (`%tag%`) wird durch einen Live-Wert (Spielerdaten, Item-Daten, Blockdaten, Mathe, Zufallszahlen) ersetzt, sobald ein Befehl, eine Bedingung, eine Lore-Zeile oder eine Nachricht ausgeführt wird. Sie funktionieren in jedem Bereich von ExecutableItems, ExecutableBlocks und ExecutableEvents: Befehle, Bedingungen, Lore, Nachrichten und SCore-Variablen. SCore verarbeitet an denselben Stellen auch jeden [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)-Platzhalter, sodass PAPI-Tags im Stil von `%player_name%` und die eigenen SCore-Tags im Stil von `%player%` in derselben Zeile gemischt werden können.

## Inhaltsverzeichnis

- [Spieler-Platzhalter](#player-placeholders)
- [Target-/Entity-Platzhalter](#target--entity-placeholders)
- [Item-Platzhalter](#item-placeholders)
- [Block-Platzhalter](#block-placeholders)
- [Projektil-Platzhalter](#projectile-placeholders)
- [Variablen-Platzhalter](#variables-placeholders)
- [Cooldown-Platzhalter](#cooldown-placeholders)
- [Mathe-Platzhalter](#math-placeholders)
- [Hilfs- und Text-Platzhalter](#utility--text-placeholders)
- [Plugin-spezifische Zähl-Platzhalter](#plugin-specific-count-placeholders)
- [Event-spezifische Platzhalter](#event-specific-placeholders)
- [PlaceholderAPI-Platzhalter in SCore verwenden](#using-placeholderapi-placeholders-in-score)
- [Fragen?](#question-)

:::tip Numerische Operationen
Alle numerischen Platzhalter unterstützen arithmetische Operationen:
- **Erhöhen:** `%amount%+6` (wenn %amount% = 15, Ergebnis = 21)
- **Verringern:** `%amount%-8` (wenn %amount% = 14, Ergebnis = 6)
:::

## Spieler-Platzhalter

Spieler-Platzhalter sind in den Aktivatoren verfügbar, an denen ein Spieler beteiligt ist. Ist der Spieler im Aktivator zweitrangig, ersetze `player` durch `target` (z. B. `%target_health%`). In ExecutableItems und ExecutableBlocks kann das Item bzw. der Block einen **Owner** haben: Ersetze `player` durch `owner`, um die Platzhalter des Besitzers zu erhalten (z. B. `%owner_uuid%`).

| Platzhalter | Rückgabe | Beispiel |
|------------|---------|---------|
| `%player%` | Name des Spielers | `SEND_MESSAGE &aWelcome %player%!` |
| `%player_uuid%` | UUID des Spielers | `SEND_MESSAGE &7Your UUID is %player_uuid%` |
| `%player_uuid_array%` | UUID des Spielers als `[I;-1288600659,-373273272,-1897203511,898446696]` | Wird intern verwendet, um UUIDs in NBT-basierten Befehlen zu speichern |
| `%player_world%` | Weltname (`%player_world_lower%` für Kleinbuchstaben) | `execute in <<%player_world%>> run summon zombie 100 50 100` |
| `%player_x%`, `%player_y%`, `%player_z%` | Koordinaten (füge `_int` für Ganzzahlen hinzu) | `execute at %player% run setblock %player_x_int% %player_y_int% %player_z_int% air` |
| `%player_pitch%`, `%player_pitch_positive%` | Pitch des Spielers (`_int` für Ganzzahl) | `SEND_MESSAGE &7Pitch: %player_pitch_int%` |
| `%player_yaw%`, `%player_yaw_positive%` | Yaw des Spielers (`_int` für Ganzzahl) | `SEND_MESSAGE &7Yaw: %player_yaw_int%` |
| `%player_direction%` | Himmelsrichtung (N, SW, NE usw.) | Bedingung: `part1: '%player_direction%'`, `comparator: EQUALS`, `part2: 'SW'` |
| `%player_health%` | Aktuelle Gesundheit | `SEND_MESSAGE &cHealth: %player_health%` |
| `%player_max_health%` | Maximale Gesundheit | `SEND_MESSAGE &cHealth: %player_health%/%player_max_health%` |
| `%player_slot%` | Slot, der den Aktivator ausgelöst hat | `SEND_MESSAGE &7Used from slot %player_slot%` |
| `%player_slot_live%` | Aktuell gehaltener Slot | `SEND_MESSAGE &7Holding slot %player_slot_live%` |
| `%player_team%` | Team des Spielers (falls vorhanden) | `SEND_MESSAGE &7Team: %player_team%` |
| `%player_attack_charge%` | Angriffs-Cooldown (1.0 = vollständig aufgeladen) | Bedingung: `part1: '%player_attack_charge%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR_OR_EQUALS`, `part2: '1.0'` |
| `%last_damage_taken%` | Zuletzt erlittener Schaden (`_int` für Ganzzahl) | `SEND_MESSAGE &cYou took %last_damage_taken_int% damage` |
| `%last_damage_dealt%` | Zuletzt verursachter Schaden (`_int` für Ganzzahl) <CustomTag type="version" version="1.16" /> | `SEND_MESSAGE &aYou dealt %last_damage_dealt_int% damage` |
| `%player_x_velocity%`, `%player_y_velocity%`, `%player_z_velocity%` | Aktuelle X-, Y-, Z-Geschwindigkeit (`_int` für Ganzzahl) | `SEND_MESSAGE &7Y velocity: %player_y_velocity%` |

### Initiale Spieler-Platzhalter

Erfassen die Spielerwerte zum Zeitpunkt der Aktivator-Auslösung (ändern sich während der Ausführung nicht):
- `%player_x_initial%`, `%player_y_initial%`, `%player_z_initial%`
- `%player_world_initial%`
- `%player_pitch_initial%`, `%player_yaw_initial%`
- `%player_direction_initial%`

## Target-/Entity-Platzhalter

Entity-Platzhalter sind in den Aktivatoren verfügbar, an denen eine Entity beteiligt ist. Ist die Entity im Aktivator zweitrangig, ersetze `entity` durch `target` (z. B. `%target_x%`).

| Platzhalter | Rückgabe | Beispiel |
|------------|---------|---------|
| `%entity%` | Entity-Typ (GROSSBUCHSTABEN) | `SEND_MESSAGE &7You hit a %entity%` |
| `%entity_lower_case%` | Entity-Typ (Kleinbuchstaben) | `SEND_MESSAGE &7You hit a %entity_lower_case%` |
| `%entity_name%` | Benutzerdefinierter Name der Entity | `SEND_MESSAGE &7Target: %entity_name%` |
| `%entity_uuid%` | UUID der Entity | Wird verwendet, um das Target in NBT-basierten Befehlen zu identifizieren |
| `%entity_uuid_array%` | UUID der Entity als `[I;-1288600659,-373273272,-1897203511,898446696]` | Wird intern verwendet, um UUIDs in NBT-basierten Befehlen zu speichern |
| `%entity_x%`, `%entity_y%`, `%entity_z%` | Koordinaten (füge `_int` für Ganzzahlen hinzu) | `execute at %entity% run setblock %entity_x_int% %entity_y_int% %entity_z_int% air` |
| `%entity_health%` | Aktuelle Gesundheit | `SEND_MESSAGE &cTarget health: %entity_health%` |
| `%entity_max_health%` | Maximale Gesundheit | `SEND_MESSAGE &cTarget health: %entity_health%/%entity_max_health%` |
| `%entity_world%` | Weltname | `SEND_MESSAGE &7Entity world: %entity_world%` |
| `%entity_direction%` | Blickrichtung | Bedingung: `part1: '%entity_direction%'`, `comparator: EQUALS`, `part2: 'N'` |
| `%entity_pitch%`, `%entity_yaw%` | Rotationswerte | `SEND_MESSAGE &7Yaw: %entity_yaw%` |
| `%entity_team%` | Team der Entity (falls vorhanden) | `SEND_MESSAGE &7Team: %entity_team%` |
| `%entity_serialized%` | Vollständige Entity-Definition | Wird verwendet, um eine Entity in erweiterten Befehlen zu kopieren/wiederherzustellen |
| `%entity_last_damage_taken%` | Zuletzt erlittener Schaden (füge `_int` für Ganzzahlen hinzu). Die `_final`-Varianten existieren nur in den Entity-Damage-Events von ExecutableEvents, siehe [Aktivator-Platzhalter](#event-specific-placeholders) | `SEND_MESSAGE &cTarget took %entity_last_damage_taken_int% damage` |
| `%entity_x_velocity%`, `%entity_y_velocity%`, `%entity_z_velocity%` | Aktuelle X-, Y-, Z-Geschwindigkeit (`_int` für Ganzzahl) | `SEND_MESSAGE &7Target Y velocity: %entity_y_velocity%` |

## Item-Platzhalter

| Platzhalter | Rückgabe | Beispiel |
|------------|---------|---------|
| `%name%` | Name des ExecutableItem | `SEND_MESSAGE &aYou used %name%` |
| `%id%` | ID des ExecutableItem | `SEND_MESSAGE &7Item ID: %id%` |
| `%amount%` | Menge im aktuellen Stack | `SEND_MESSAGE &7You have %amount% in this stack` |
| `%usage%` | Aktuelle Nutzungsanzahl | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%usage_roman%` | Nutzung in römischen Ziffern | `ADD_ITEM_LORE &7Usage: %usage_roman%` |
| `%usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` | Visuelle Nutzungsleiste, mehr Infos unten | `ADD_ITEM_LORE %usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` |
| `%usage_limit%` | Maximales Nutzungslimit | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%usage_raw%`, `%usage_limit_raw%` | ExecutableItems, nur im Namen und in der Lore des Items: die Nutzung und das Nutzungslimit als einfache Zahlen, mehr Infos unten | `lore: ['&7Damage: %math_0_%usage_raw%*2%']` |
| `%durability%` | Item-Haltbarkeit (1.14+) | `SEND_MESSAGE &7Durability left: %durability%` |
| `%max_use_per_day_item%` | Tägliches Nutzungslimit (Item) | Bedingung: `part1: '%max_use_per_day_item%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR`, `part2: '0'` |
| `%max_use_per_day_activator%` | Tägliches Nutzungslimit (Aktivator) | Bedingung: `part1: '%max_use_per_day_activator%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR`, `part2: '0'` |

**Spezial:** `%usage_bar(amount:30,color1:&d,color2:&5,symbol:|)%`

![](https://media.ssomar.com/m/docs-img-usage-bar.jpg)
- Erstellt eine visuelle Nutzungsleiste
- Parameter: amount (Anzahl der Leistensegmente), color1 (verbraucht), color2 (unverbraucht), symbol

**Rohe Nutzungs-Platzhalter:** `%usage_raw%` und `%usage_limit_raw%`

- Im Namen und in der Lore eines ExecutableItem kommen `%usage%` und `%usage_limit%` mit einem unsichtbaren Tag (wenn `isRefreshableClean` aktiviert ist, was der Standard ist), über den das Plugin den Wert später aktualisieren kann. Innerhalb eines PlaceholderAPI-Platzhalters bricht dieses Tag den Ausdruck, zum Beispiel in `%math_0_%usage%*2%`.
- `%usage_raw%` und `%usage_limit_raw%` liefern denselben Wert ohne Tag, sodass sie in den Mathe-Platzhaltern von PlaceholderAPI verwendet werden können: `%math_0_%usage_raw%*2%`.
- Sie akzeptieren die Kurzschreibweise `+N` / `-N` wie die anderen numerischen Platzhalter: `%usage_raw%-1`.
- Einschränkung: Da sie kein Tag haben, werden sie nur aktualisiert, wenn die Lore aus der Config neu aufgebaut wird. Bleibt die Lore des Items unverändert erhalten (zum Beispiel nachdem ihr Zeilen hinzugefügt wurden), bleibt der in der Lore geschriebene Wert gleich, während `%usage%` weiterhin aktualisiert wird.

## Block-Platzhalter

Block-Platzhalter sind in den Aktivatoren verfügbar, an denen ein Block beteiligt ist. Ist der Block im Aktivator zweitrangig, ersetze `block` durch `target_block` (z. B. `%target_block_x%`).

| Platzhalter | Rückgabe | Beispiel |
|------------|---------|---------|
| `%block%` | Blocktyp (GROSSBUCHSTABEN) | `SEND_MESSAGE &7You broke %block%` |
| `%block_lower%` | Blocktyp (Kleinbuchstaben) | `SEND_MESSAGE &7You broke %block_lower%` |
| `%block_live%`, `%block_live_lower%` | Aktueller Blocktyp | `SEND_MESSAGE &7Current block: %block_live%` |
| `%block_item_material%` | Item-Form des Blocks (Nutzpflanzen liefern ihre Samen, `WALL_TORCH` liefert `TORCH`, `OAK_WALL_SIGN` liefert `OAK_SIGN`, `POTTED_DANDELION` liefert `DANDELION` …) | Wird verwendet, um das passende Item für einen platzierten Block zu geben |
| `%block_x%`, `%block_y%`, `%block_z%` | Koordinaten (füge `_int` für Ganzzahlen hinzu) | `execute at %player% run setblock %block_x_int% %block_y_int%+1 %block_z_int% air` |
| `%blockface%` | Ausgewählte Blockseite | `SEND_MESSAGE &7Face: %blockface%` |
| `%block_world%` | Weltname | `execute in <<%block_world%>> run setblock %block_x_int% %block_y_int% %block_z_int% air` |
| `%block_biome%` | Biom-Name | Bedingung: `part1: '%block_biome%'`, `comparator: EQUALS`, `part2: 'DESERT'` |
| `%block_dimension%` | Welttyp (nether, normal, end) | Bedingung: `part1: '%block_dimension%'`, `comparator: EQUALS`, `part2: 'nether'` |
| `%block_spawnertype%` | Mob-Typ des Spawners | `SEND_MESSAGE &7Spawner: %block_spawnertype%` |
| `%block_is_ageable%` | Gibt zurück, ob der Block alterbar ist oder nicht | Bedingung: `part1: '%block_is_ageable%'`, `comparator: EQUALS`, `part2: 'true'` |
| `%block_eb_id%` | ID des ExecutableBlock (falls zutreffend) | `SEND_MESSAGE &7EB ID: %block_eb_id%` |
| `%block_data%` | Block-Data-Wert | `SEND_MESSAGE &7Block data: %block_data%` |

## Projektil-Platzhalter

Projektil-Platzhalter sind in den Aktivatoren verfügbar, an denen ein Projektil beteiligt ist.

| Platzhalter | Rückgabe | Beispiel |
|------------|---------|---------|
| `%projectile%` | Projektiltyp (GROSSBUCHSTABEN) | `SEND_MESSAGE &7You shot a %projectile%` |
| `%projectile_lower_case%` | Projektiltyp (Kleinbuchstaben) | `SEND_MESSAGE &7You shot a %projectile_lower_case%` |
| `%projectile_name%` | Benutzerdefinierter Name des Projektils | `SEND_MESSAGE &7Projectile: %projectile_name%` |
| `%projectile_uuid%` | UUID des Projektils | Wird verwendet, um das Projektil in NBT-basierten Befehlen zu identifizieren |
| `%projectile_uuid_array%` | UUID des Projektils als `[I;-1288600659,-373273272,-1897203511,898446696]` | Wird intern verwendet, um UUIDs in NBT-basierten Befehlen zu speichern |
| `%projectile_x%`, `%projectile_y%`, `%projectile_z%` | Koordinaten | `execute at %player% run summon minecraft:lightning_bolt %projectile_x% %projectile_y% %projectile_z%` |
| `%projectile_world%` | Weltname | `SEND_MESSAGE &7World: %projectile_world%` |
| `%bow_force%` | Schusskraft des Bogens (0-1) | Bedingung: `part1: '%bow_force%'`, `type: PLAYER_NUMBER`, `comparator: SUPERIOR_OR_EQUALS`, `part2: '0.9'` |

## Variablen-Platzhalter

### Item-/Block-Variablen

**String-/Zahlen-Variablen:**
- `%var_X%` - Wert der Variable X
- `%var_X_int%` - Ganzzahl-Wert der Variable X (nur für Variablen vom Typ NUMBER)
- `%var_X_roman%` - Wert als römische Ziffer (nur für Variablen vom Typ NUMBER)

**Listen-Variablen:**
- `%var_MYVAR%` - Vollständige Liste mit Klammern
- `%var_MYVAR_size%` - Anzahl der Elemente
- `%var_MYVAR_contains_VALUE%` - Prüft, ob die Liste VALUE enthält

Beispiel: `ADD_ITEM_LORE &7Defense: %var_defense%`

### SCore Variables (global / pro Spieler)

SCore hat außerdem ein eigenes globales oder spielerbezogenes Variablensystem, unabhängig von den Item-/Block-Variablen. Siehe [SCore Variables](/tools-for-all-plugins-score/score-variables) für die `/score variables`-Befehle. Sobald [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) installiert ist, werden diese Variablen folgendermaßen bereitgestellt:
- `%score_variables_<variable-id>%`
- `%score_variables_<variable-id>_int%`
- `%score_variables_<variable-id>_<index>%` (Liste, Wert am Index)
- `%score_variables-contains_<variable-name>_<value>%` (Liste, Boolean)
- `%score_variables-size_<variable-name>%` (Liste, Größe)

## Cooldown-Platzhalter

Format: `%score_cooldown_{plugin}:{object_id}:{activator_id}%`

| Platzhalter | Rückgabe | Beispiel |
|------------|---------|---------|
| `%score_cooldown_EI:Free_Lottery:activator1%` | Verbleibender Cooldown eines ExecutableItems-Aktivators | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EI:Free_Lottery:activator1%` |
| `%score_cooldown_EB:MyBlock:activator2%` | Verbleibender Cooldown eines ExecutableBlocks-Aktivators | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EB:MyBlock:activator2%` |

## Mathe-Platzhalter

Alle numerischen SCore-Platzhalter unterstützen Inline-Arithmetik direkt hinter dem Tag:
- `%amount%+6` (wenn `%amount%` = 15, Ergebnis = 21)
- `%amount%-8` (wenn `%amount%` = 14, Ergebnis = 6)

Für alles, was über eine einzelne `+`/`-`-Operation hinausgeht (Multiplikation, Division, verschachtelte Ausdrücke), verwende den [Mathe-Platzhalter von PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#math) um einen SCore-Platzhalter herum:

- `%math_0_(%usage%)*10%` multipliziert den `%usage%` des Items mit 10.
  - Im Namen oder in der Lore eines ExecutableItem verwende stattdessen [`%usage_raw%`](#item-placeholders): `%math_0_(%usage_raw%)*10%`.
- `%math_{score_variables_userLevel}*10%` multipliziert die SCore-Variable `userLevel` mit 10 (siehe [PlaceholderAPI-Platzhalter in SCore verwenden](#using-placeholderapi-placeholders-in-score)).

:::info
SCore-Platzhalter werden **vor** den PlaceholderAPI-Platzhaltern verarbeitet, daher erhält `%math_...%` immer den bereits aufgelösten SCore-Wert.
:::

## Hilfs- und Text-Platzhalter

| Platzhalter | Rückgabe | Beispiel |
|------------|---------|---------|
| `%rand:MIN\|MAX%` | Zufallszahl zwischen MIN und MAX | `SEND_MESSAGE &6You rolled %rand:1\|100%` |
| `%timestamp%` | Aktueller Zeitstempel | `SEND_MESSAGE &7Time: %timestamp%` |
| `%activator_id%` | ID des aktuellen Aktivators | `SEND_MESSAGE &7Activator: %activator_id%` |
| `%activator_name%` | Name des aktuellen Aktivators | `SEND_MESSAGE &7Activator: %activator_name%` |

### AROUND- und NEAREST-Befehle

Verwende Spieler-/Entity-Platzhalter mit dem Präfix `around_target`:
- `%around_target_direction%`
- `%around_target_health%`
- `%around_target_uuid%`
- Wenn `%around_target%` fehlschlägt, verwende `%around_target::step1%`
- `%around_target_count%`: die Anzahl der Targets des `AROUND`- / `MOB_AROUND`-Befehls, siehe [AROUND](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#around)

Beispiel: `AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SEND_MESSAGE &cYou got smited!`

### DAMAGE-Befehle

| Platzhalter | Rückgabe | Beispiel |
|------------|---------|---------|
| `%score_cmd-damage-boost%` | Aktueller Schadensbonus | `SEND_MESSAGE &cDamage boost: %score_cmd-damage-boost%` |
| `%score_cmd-damage-resistance%` | Aktuelle Schadensresistenz | `SEND_MESSAGE &cDamage resistance: %score_cmd-damage-resistance%` |

:::warning
**Attack Charge**: `%player_attack_charge%` wird zurückgesetzt, nachdem der DAMAGE-Befehl ausgeführt wurde. Prüfe seinen Wert also, bevor du ihn verwendest.
:::

### Nachrichten-/Befehls-Platzhalter

Für `PLAYER_WRITE_COMMAND` und `PLAYER_SEND_MESSAGE`:

| Platzhalter | Rückgabe | Beispiel |
|------------|---------|---------|
| `%arg0%`, `%arg1%`, `%arg2%` usw. | Einzelne Befehlsargumente | `SEND_MESSAGE &7First argument: %arg0%` |
| `%all_args%` | Alle Argumente | `SEND_MESSAGE &7Args: %all_args%` |
| `%all_args_without_first%` | Alle außer dem ersten Argument | `SEND_MESSAGE &7Args: %all_args_without_first%` |

## Plugin-spezifische Zähl-Platzhalter

### ExecutableItems

- `%executableitems_checkamount%` - Gesamtzahl der EI im Inventar
- Argumente (verwende Kommas zwischen den Werten, um mehrere Werte anzugeben):
  - `slot`: Zu prüfende Slots. Verwende dieses Argument nicht, wenn alle Slots ausgewertet werden sollen.
  - `id`: ID des EI-Items, das du prüfen möchtest.
  - `owner`: Zählt nur, wenn der Owner-Wert stimmt
  - `owneruuid`: Zählt nur, wenn der Owner-UUID-Wert stimmt
- Beispiele:
  - `%executableitems_checkamount_slot:0,2,3%` - EI in bestimmten Slots
  - `%executableitems_checkamount_id:item1,item2_slot:0,2%` - Bestimmte Items in Slots
  - `%executableitems_checkamount_owner:Special70%`

<hr/>

- `%executableitems_checkvar%` - Wert / Gesamtwert der Variablenwerte
- Argumente (verwende Kommas zwischen den Werten, um mehrere Werte anzugeben):
  - `slot`: Zu prüfende Slots. Verwende dieses Argument nicht, wenn alle Slots ausgewertet werden sollen.
  - `id`: ID des EI-Items, das du prüfen möchtest.
  - `var`: Die Variablen-ID, die du prüfen möchtest.
- Beispiele:
  - `%executableitems_checkvar_id:star_man_var:defense%`
  - `%executableitems_checkvar_slot:-1,40_var:atk_bonus%`
  - `%executableitems_checkvar_var:defense,bonus_defense%`

<hr/>

- `%executableitems_set_<id>%` <CustomTag type="premium" /> - Anzahl der Teile des [Sets](/executableitems/configurations/sets-configuration) `<id>`, die der Spieler trägt
- `%executableitems_set_<id>_tier%` - Höchste aktive Stufe des Sets (Anzahl der Teile), `0`, falls keine

:::info
- Ist der erste erkannte Variablenwert ein String, wird der Wert sofort zurückgegeben.
- Sind die übrigen erkannten Variablenwerte Zahlen, werden sie alle addiert und der Gesamtwert wird zurückgegeben.
- Listen-Variablen werden derzeit nicht unterstützt.
:::

### ExecutableBlocks

- `%executableblocks_checkamount%` - Gesamtzahl der EB im Inventar
- Argumente (verwende Kommas zwischen den Werten, um mehrere Werte anzugeben):
  - `slot`: Zu prüfende Slots. Verwende dieses Argument nicht, wenn alle Slots ausgewertet werden sollen.
  - `id`: ID des EI-Items, das du prüfen möchtest.
  - `owner`: Zählt nur, wenn der Owner-Wert stimmt
  - `owneruuid`: Zählt nur, wenn der Owner-UUID-Wert stimmt
- Beispiele:
  - `%executableblocks_checkamount_slot:0,2,3%` - EB in bestimmten Slots
  - `%executableblocks_checkamount_id:block1,block2_slot:0,2%` - Bestimmte Blöcke in Slots
  - `%executableblocks_checkamount_owner:Special70%`

## Event-spezifische Platzhalter

Diese Platzhalter sind nur innerhalb des passenden Event-Aktivators verfügbar.

| Aktivator | Platzhalter |
|-----------|--------------|
| **RAID_TRIGGER** | `%player%`, `%badomenlevel%` |
| **RAID_WAVE** | `%raiders%` (UUID-Liste) |
| **RAID_FINISH** | `%badomen%`, `%heroes%` (UUID-Liste) |
| **PLAYER_EXPERIENCE_CHANGE** | `%experience%` |
| **PLAYER_RECEIVE_EFFECT** | `%effect_received%`, `%effect_received_level%`, `%effect_received_duration%` |
| **PLAYER_HIT_ENTITY** | `%critical%` (true/false) |
| **PLAYER_TELEPORT** | `%teleport_cause%` |
| **BROADCAST_MESSAGE** | `%message%`, `%is_async%` |
| **PLUGIN_ENABLE/DISABLE** | `%plugin_name%` |
| **PLAYER_ADVANCEMENT** | `%advancement%` (nur ab 1.19) |
| **PLAYER_RECEIVE_HIT_GLOBAL, PLAYER_RECEIVE_HIT_BY_PLAYER, PLAYER_RECEIVE_HIT_BY_ENTITY** | `%last_damage_taken_nonfinal%`, `%last_damage_taken_nonfinal_int%` beziehen sich auf den rohen erlittenen Schaden. `%last_damage_taken_final%`, `%last_damage_taken_final_int%` beziehen sich auf den erlittenen Schaden nach Verteidigungsboni (Attribute, Resistenz-Effekt, Rüstung). Nur direkte Treffer liefern den korrekten Wert; bei Treffern durch Projektile wird 0 zurückgegeben |
| **ENTITY_DAMAGE_BY_PLAYER, ENTITY_DAMAGE_BY_ENTITY, ENTITY_DAMAGE_BY_BLOCK** (EE) | `%entity_last_damage_taken_final%`, `%entity_last_damage_taken_final_int%` beziehen sich auf den erlittenen Schaden nach Verteidigungsboni (Rüstung, Resistenz …). ENTITY_DAMAGE_BY_PLAYER liefert zusätzlich `%entity_last_damage_taken_final_with_booster%` und `%entity_last_damage_taken_final_with_booster_int%`, den endgültigen Schaden einschließlich der Schadensboni |
| **PLAYER_BLOCK_HIT_OF_PLAYER, PLAYER_BLOCK_HIT_OF_ENTITY** | `%damage_blocked_base%`, `%damage_blocked_base_int%` gibt den rohen Schaden zurück, der vom Schild geblockt wurde |
| **PLAYER_PICKUP_ITEM** (EE) | 1.13+: `%item_type%`, `%item_name%`, `%item_amount%`. 1.14-1.21.3: `%item_cmdata%` (-1, wenn null). 1.21.4+: `%item_cmdata_s_0%` ("null", wenn leer), `%item_cmdata_f_0%` (-1, wenn leer) (erster String-/Float-Wert von CustomModelData; ab 1.21.4 wird CustomModelData in einem Array gespeichert) |
| **PLAYER_INVENTORY_CLICK** (EE) | `%is_shift_click%`, `%is_mouse_click%`, `%is_left_click%`, `%is_right_click%`, `%is_keyboard_click%`, `%is_creative_action%`, `%get_action%` ([Referenz der Enum-Werte](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryAction.html)), `%before_slot%`, `%after_slot%`, `%inventory_type%` ([Referenz der Enum-Werte](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryType.html)), `%inventory_title%` (1.21+) |
| **PLAYER_KILL_ENTITY** | `%last_hitter%`: Mob-Typ desjenigen, der den letzten Schlag ausgeführt hat. Nützlich, um zu prüfen, ob du oder dein Haustier-Wolf den letzten Schlag ausgeführt hat, z. B. `PLAYER`, `WOLF` |

## PlaceholderAPI-Platzhalter in SCore verwenden

[PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) ist eine der wichtigsten Säulen beim Erstellen von Items und Blöcken: Jeder installierte PlaceholderAPI-Platzhalter (`%vault_eco_balance%`, `%luckperms_prefix%` usw.) kann überall verwendet werden, wo SCore Text liest, mit derselben `%...%`-Syntax:

- Lore
- Commands-Bereich
- Nachrichten (alle Nachrichtentypen: Cooldown-Nachricht, Nachricht bei nicht erfüllter Bedingung, Nachricht für benötigte Dinge usw.)
- Variablen
- usw.

Die eigenen Platzhalter von SCore werden **vor** den PlaceholderAPI-Platzhaltern verarbeitet, sodass ein PAPI-Ausdruck problemlos einen SCore-Platzhalter umschließen kann, wie im obigen Mathe-Beispiel (`%math_{score_variables_userLevel}*10%`).

## Weiterführende Dokumentation

- [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- [SCore Variables](/tools-for-all-plugins-score/score-variables)
- [Kompatible Plugins](/tools-for-all-plugins-score/compatible-plugins)
- [Platzhalter-Bedingungen](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions)

## Fragen?

**Ist SCore mit PlaceholderAPI kompatibel?**
Ja. Jeder PlaceholderAPI-Platzhalter funktioniert in Lore, Befehlen, Nachrichten und Variablen in ExecutableItems, ExecutableBlocks und ExecutableEvents. Die eigenen Platzhalter von SCore werden zuerst verarbeitet, sodass die beiden Syntaxen ohne Konflikte in derselben Zeile kombiniert werden können.

**Kann ich mit Platzhaltern rechnen?**
Einfaches Erhöhen/Verringern funktioniert direkt: `%amount%+6` oder `%amount%-8`. Für Multiplikation, Division oder verschachtelte Ausdrücke umschließt du den SCore-Platzhalter mit dem Mathe-Platzhalter von PlaceholderAPI, z. B. `%math_0_(%usage%)*10%`.

**Wie verwende ich einen PlaceholderAPI-Platzhalter in einem ExecutableItems-Befehl?**
Schreibe ihn genau wie jeden SCore-Platzhalter inline in den Befehlsstring, zum Beispiel `SEND_MESSAGE &7Balance: %vault_eco_balance%`. Er funktioniert in Befehlen, Bedingungen, Lore und jedem Nachrichtentyp, ohne zusätzliche Einrichtung außer dass PlaceholderAPI und das Quell-Plugin installiert sind.

**Was ist der Unterschied zwischen `%var_X%` und `%score_variables_X%`?**
`%var_X%` liest eine Item-/Block-bezogene Variable, die direkt auf diesem ExecutableItem oder ExecutableBlock gespeichert ist. `%score_variables_<id>%` liest eine globale oder spielerbezogene SCore-Variable, die mit `/score variables` verwaltet und über PlaceholderAPI bereitgestellt wird.

**Warum funktioniert `%around_target%` manchmal nicht?**
Bei einigen Aktivatoren wird das Target beim ersten Verweis nicht aufgelöst. Verwende stattdessen `%around_target::step1%`, was der dokumentierte Fallback für AROUND-/NEAREST-Befehle ist.
