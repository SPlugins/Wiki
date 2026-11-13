---
description: >-
  Liste des commandes SCore : nettoyer cooldowns et boucles, webhook Discord,
  lancer manuellement des commandes SCore sur joueurs, blocs, entités et items.
source_hash: efcb318717cf1c47
translated_at: '2026-11-13T17:20:34.156Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Commandes

## Nettoyer le contenu de SCore

* Cette commande vous permet de nettoyer la plupart des contenus de SCore en cours d'exécution
* Vous pouvez nettoyer :
  * [ACTIONBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#actionbar)
  * COOLDOWNS
  * DELAYED_COMMANDS (commandes SCore exécutées avec un délai)
  * [WHILE](/tools-for-all-plugins-score/custom-commands/utility-commands#while)
  * [BOSSBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#bossbar)
  * [PARTICLES](/tools-for-all-plugins-score/score-particles)
  * ALL
* Commande : /score clear \{player\} \{WHAT_YOU_WANT_TO_CLEAR\}

## Nettoyer les cooldowns 

* Commande pour nettoyer un cooldown précis (pour un joueur / une entité précis)
* Commande : /score cooldowns clear \{cooldown\_id\} \[UUID]
  * `{cooldown_id}` : Exemple -> EI\:myitem\:myactivator
  * `[UUID]` : (Facultatif) L'UUID du joueur / de l'entité

## Inspecter les boucles, utile pour le debug

* Commande : /score inspect-loop

Recharger les variables, les projectiles et les configurations de dureté de SCore

* Commande : /score reload

## Webhook Discord
Envoyer un message sur Discord via un webhook

* /score webhook \{url\} \{debug\} [allowed_mentions] \{message...\}
  * `{url}` : URL du webhook
  * `{debug}` : indique si l'exécutant doit être informé lorsqu'un message de webhook est envoyé ou non
  * `[allowed_mentions]` : peut être users\:id\[,id,...\] ou roles\:id\[,id,...\] ou rien
  * `{message...}` : le message qui sera envoyé par le webhook ciblé


## Commandes de particules

Consultez [SCore Particles](/tools-for-all-plugins-score/score-particles)

## Commandes de variables

Consultez [SCore Variables](/tools-for-all-plugins-score/score-variables)

## Exécuter manuellement des commandes SCore

### Commandes de joueur

* Info : commande qui permet, depuis l'extérieur comme depuis l'intérieur des plugins Ssomar, d'exécuter une commande personnalisée de SCore sur un joueur précis.
* Lorsque vous utilisez cette commande, toute la ligne de commande est analysée par PlaceholdersAPI, vous pouvez donc y ajouter des placeholders.

* Commande : /score run-player-command player:\{player\} \{command\}
  * `player` : Nom du joueur ciblé
  * `command` : Commande de joueur SCore qui sera appliquée à \{player\}

* Exemples :
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello player\:Ssomar +++ DELAY 10 +++ SWING_MAIN_HAND
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello my name is %player% and my life is %player_health%

### Commandes de bloc

* Info : commande qui permet, depuis l'extérieur comme depuis l'intérieur des plugins Ssomar, d'exécuter une commande personnalisée de SCore pour un bloc précis.

* Commande : /score run-block-command \[player:\{player\}\] block:\{world\},\{x\},\{y\},\{z\} \{command\}
  * `player` : Joueur concerné par cet activateur
    * Il est facultatif, car certaines commandes en ont besoin, par exemple :

                MOB_AROUND : Qui infligera les dégâts ? La commande inflige des dégâts aux mobs alentour, mais les dégâts seront comptés comme infligés par \{player\}, donc elle vérifie si le joueur peut réellement blesser le mob, les dégâts et les kills sont comptabilisés pour lui, etc.

                VEIN_BREAKER : Qui a cassé les blocs ? La commande casse des blocs en forme de filon, mais les blocs seront comptés comme cassés par \{player\}, donc elle vérifie si le joueur peut réellement casser le bloc, le bloc cassé est comptabilisé pour lui, etc.

  * `block`
      * `world` : Monde dans lequel se trouve le bloc
      * `x` : Coordonnée X du bloc
      * `y` : Coordonnée Y du bloc
      * `z` : Coordonnée Z du bloc
  * `command` : Commande de bloc qui sera exécutée sur le bloc et, s'il existe, par le joueur.
    * Les [placeholders de bloc](/tools-for-all-plugins-score/placeholders#block-placeholders) (`%block%`, `%block_lower%`, `%block_x%`...) de la commande sont ceux de ce bloc.

* Exemples :
  * /score run-block-command block\:world,-23,-61,27 BREAK
  * /score run-block-command player\:SsomarPluginsPlayer block\:world,-23,-61,27 MINEINCUBE 1 false

### Commandes d'entité

* Info : commande qui permet, depuis l'extérieur comme depuis l'intérieur des plugins Ssomar, d'exécuter une commande personnalisée de SCore pour une entité précise

* Commande : /score run-entity-command \[player:\{player\}\] entity:\{entityUUID\} \{command\}
  * `player` : (Facultatif) nom ou UUID d'un joueur concerné : les placeholders de joueur (`%player%`, `%player_health%`...) peuvent alors être utilisés dans la commande, par exemple dans un `IF`.
  * `entityUUID` : UUID de l'entité ciblée
  * `command` : Commande d'entité qui sera exécutée sur l'entité.
* Exemple :
  * /score run-entity-command entity\:c4d5338b-6f8e-4b97-9f18-9dbc47f60131 JUMP 1
  * /score run-entity-command entity:%entity_uuid% JUMP 1
  * /score run-entity-command player:Steve entity:%entity_uuid% IF %player_health%>10 SET_ENTITY_NAME name:&cTamed

### Commandes d'item

* Info : commande qui permet, depuis l'extérieur comme depuis l'intérieur des plugins Ssomar, d'exécuter une [commande d'item](/tools-for-all-plugins-score/custom-commands/item-commands) personnalisée sur un item de l'inventaire d'un joueur.

* Commande : /score run-item-command player:\{player\} slot:\{slot\} \{command\}
  * `player` : nom ou UUID du joueur qui possède l'item
  * `slot` : slot de l'item dans l'inventaire du joueur : de `0` à `8` pour la hotbar, de `9` à `35` pour le reste de l'inventaire, de `36` à `39` pour l'armure (des bottes au casque), `40` pour la main secondaire
  * `command` : Commande d'item qui sera exécutée sur cet item. Les placeholders de joueur peuvent y être utilisés.
  * Il ne se passe rien lorsque le joueur est hors ligne ou lorsque le slot est vide.
* Exemples :
  * /score run-item-command player:Steve slot:0 SET_ITEM_NAME name:&6Excalibur
  * /score run-item-command player:Steve slot:0 IF %player_health%>=20 ADD_ITEM_ENCHANTMENT enchantment:sharpness level:5
