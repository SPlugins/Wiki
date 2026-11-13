---
description: >-
  Alle SCore-Befehle im Überblick: Cooldowns und Inhalte löschen, Webhooks
  senden sowie Player-, Block-, Entity- und Item-Befehle manuell ausführen.
source_hash: efcb318717cf1c47
translated_at: '2026-11-13T17:34:09.365Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Befehle

## Inhalte aus SCore löschen

* Mit diesem Befehl kannst Du die meisten laufenden Inhalte von SCore löschen
* Du kannst Folgendes löschen:
  * [ACTIONBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#actionbar)
  * COOLDOWNS
  * DELAYED_COMMANDS (SCore-Befehle, die mit Verzögerung ausgeführt werden)
  * [WHILE](/tools-for-all-plugins-score/custom-commands/utility-commands#while)
  * [BOSSBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#bossbar)
  * [PARTICLES](/tools-for-all-plugins-score/score-particles)
  * ALL
* Befehl: /score clear \{player\} \{WHAT_YOU_WANT_TO_CLEAR\}

## Cooldowns löschen 

* Befehl zum Löschen eines bestimmten Cooldowns (für einen bestimmten Spieler / eine bestimmte Entity)
* Befehl: /score cooldowns clear \{cooldown\_id\} \[UUID]
  * `{cooldown_id}`: Beispiel -> EI\:myitem\:myactivator
  * `[UUID]`: (Optional) Die UUID des Spielers / der Entity

## Loops untersuchen, nützlich für das Debugging

* Befehl: /score inspect-loop

SCore-Variablen, Projektile und Härte-Konfigurationen neu laden

* Befehl: /score reload

## Discord-Webhook
Sende eine Nachricht per Webhook an Discord

* /score webhook \{url\} \{debug\} [allowed_mentions] \{message...\}
  * `{url}`: URL des Webhooks
  * `{debug}`: ob der Ausführende informiert werden soll, wenn eine Webhook-Nachricht gesendet wird
  * `[allowed_mentions]`: kann users\:id\[,id,...\] oder roles\:id\[,id,...\] oder nichts sein
  * `{message...}`: die Nachricht, die vom Ziel-Webhook gesendet wird


## Particles-Befehle

Sieh Dir [SCore Particles](/tools-for-all-plugins-score/score-particles) an

## Variablen-Befehle

Sieh Dir [SCore Variables](/tools-for-all-plugins-score/score-variables) an

## SCore-Befehle manuell ausführen

### Player-Befehle

* Info: Befehl, mit dem sich außerhalb und innerhalb der Ssomar Plugins ein eigener Befehl von SCore für einen bestimmten Spieler ausführen lässt.
* Bei Verwendung dieses Befehls wird die gesamte Befehlszeile durch PlaceholderAPI geparst, sodass Du Platzhalter darin verwenden kannst.

* Befehl: /score run-player-command player:\{player\} \{command\}
  * `player`: Name des Zielspielers
  * `command`: SCore-Player-Befehl, der auf \{player\} angewendet wird

* Beispiele:
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello player\:Ssomar +++ DELAY 10 +++ SWING_MAIN_HAND
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello my name is %player% and my life is %player_health%

### Block-Befehle

* Info: Befehl, mit dem sich außerhalb und innerhalb der Ssomar Plugins ein eigener Befehl von SCore für einen bestimmten Block ausführen lässt.

* Befehl: /score run-block-command \[player:\{player\}\] block:\{world\},\{x\},\{y\},\{z\} \{command\}
  * `player`: Spieler, der an diesem Aktivator beteiligt ist
    * Er ist optional, da ihn einige Befehle benötigen, zum Beispiel

                MOB_AROUND: Wer verursacht den Schaden? Der Befehl fügt Mobs in der Umgebung Schaden zu, aber der Schaden zählt als von \{player\} verursacht. Deshalb wird geprüft, ob der Spieler den Mob tatsächlich beschädigen kann, und der Schaden sowie die Kills werden ihm angerechnet usw.

                VEIN_BREAKER: Wer hat die Blöcke abgebaut? Der Befehl baut Blöcke in Form einer Ader ab, aber die Blöcke zählen als von \{player\} abgebaut. Deshalb wird geprüft, ob der Spieler den Block tatsächlich abbauen kann, und der abgebaute Block wird ihm angerechnet usw.

  * `block`
      * `world`: Welt, in der sich der Block befindet
      * `x`: X-Koordinate des Blocks
      * `y`: Y-Koordinate des Blocks
      * `z`: Z-Koordinate des Blocks
  * `command`: Block-Befehl, der auf den Block und, falls vorhanden, durch den Spieler ausgeführt wird.
    * Die [Block-Platzhalter](/tools-for-all-plugins-score/placeholders#block-placeholders) (`%block%`, `%block_lower%`, `%block_x%`...) des Befehls sind die dieses Blocks.

* Beispiele:
  * /score run-block-command block\:world,-23,-61,27 BREAK
  * /score run-block-command player\:SsomarPluginsPlayer block\:world,-23,-61,27 MINEINCUBE 1 false

### Entity-Befehle

* Info: Befehl, mit dem sich außerhalb und innerhalb der Ssomar Plugins ein eigener Befehl von SCore für eine bestimmte Entity ausführen lässt

* Befehl: /score run-entity-command \[player:\{player\}\] entity:\{entityUUID\} \{command\}
  * `player`: (Optional) Name oder UUID eines beteiligten Spielers: Die Spieler-Platzhalter (`%player%`, `%player_health%`...) können dann im Befehl verwendet werden, zum Beispiel in einem `IF`.
  * `entityUUID`: UUID der Ziel-Entity
  * `command`: Entity-Befehl, der auf die Entity ausgeführt wird.
* Beispiel:
  * /score run-entity-command entity\:c4d5338b-6f8e-4b97-9f18-9dbc47f60131 JUMP 1
  * /score run-entity-command entity:%entity_uuid% JUMP 1
  * /score run-entity-command player:Steve entity:%entity_uuid% IF %player_health%>10 SET_ENTITY_NAME name:&cTamed

### Item-Befehle

* Info: Befehl, mit dem sich außerhalb und innerhalb der Ssomar Plugins ein eigener [Item-Befehl](/tools-for-all-plugins-score/custom-commands/item-commands) auf ein Item im Inventar eines Spielers ausführen lässt.

* Befehl: /score run-item-command player:\{player\} slot:\{slot\} \{command\}
  * `player`: Name oder UUID des Spielers, der das Item besitzt
  * `slot`: Slot des Items im Inventar des Spielers: `0` bis `8` für die Hotbar, `9` bis `35` für den Rest des Inventars, `36` bis `39` für die Rüstung (Stiefel bis Helm), `40` für die Nebenhand
  * `command`: Item-Befehl, der auf dieses Item ausgeführt wird. Die Spieler-Platzhalter können darin verwendet werden.
  * Es passiert nichts, wenn der Spieler offline ist oder der Slot leer ist.
* Beispiele:
  * /score run-item-command player:Steve slot:0 SET_ITEM_NAME name:&6Excalibur
  * /score run-item-command player:Steve slot:0 IF %player_health%>=20 ADD_ITEM_ENCHANTMENT enchantment:sharpness level:5
