---
description: >-
  Scopri tutti i comandi di SCore: pulire cooldown e processi, ispezionare i
  loop, inviare webhook Discord ed eseguire comandi manualmente per player,
  blocchi, entità e item.
source_hash: efcb318717cf1c47
translated_at: '2026-11-13T17:45:16.058Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Comandi

## Pulire i contenuti di SCore

* Questo comando ti permette di pulire la maggior parte dei contenuti di SCore in corso
* Puoi pulire:
  * [ACTIONBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#actionbar)
  * COOLDOWNS
  * DELAYED_COMMANDS (comandi SCore eseguiti con ritardo)
  * [WHILE](/tools-for-all-plugins-score/custom-commands/utility-commands#while)
  * [BOSSBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#bossbar)
  * [PARTICLES](/tools-for-all-plugins-score/score-particles)
  * ALL
* Comando: /score clear \{player\} \{WHAT_YOU_WANT_TO_CLEAR\}

## Pulire i cooldown 

* Comando per pulire un cooldown specifico (per un determinato player / entità)
* Comando: /score cooldowns clear \{cooldown\_id\} \[UUID]
  * `{cooldown_id}`: Esempio -> EI\:myitem\:myactivator
  * `[UUID]`: (Facoltativo) L'UUID del player / dell'entità

## Ispezionare i loop, utile per il debug

* Comando: /score inspect-loop

Ricarica le variabili, i proiettili e le configurazioni di durezza di SCore

* Comando: /score reload

## Webhook Discord
Invia un messaggio a Discord tramite webhook

* /score webhook \{url\} \{debug\} [allowed_mentions] \{message...\}
  * `{url}`: URL del webhook
  * `{debug}`: indica se informare chi esegue il comando quando un messaggio webhook sta per essere inviato oppure no
  * `[allowed_mentions]`: può essere users\:id\[,id,...\] oppure roles\:id\[,id,...\] oppure nulla
  * `{message...}`: il messaggio che verrà inviato dal webhook di destinazione


## Comandi per le particelle

Consulta [SCore Particles](/tools-for-all-plugins-score/score-particles)

## Comandi per le variabili

Consulta [SCore Variables](/tools-for-all-plugins-score/score-variables)

## Eseguire manualmente i comandi di SCore

### Comandi per il player

* Info: comando che permette, dall'esterno e dall'interno dei plugin Ssomar, di eseguire un comando personalizzato di SCore su un player specifico.
* Quando usi questo comando, tutta la riga di comando viene elaborata tramite PlaceholdersAPI, quindi puoi aggiungervi dei placeholder.

* Comando: /score run-player-command player:\{player\} \{command\}
  * `player`: nome del player bersaglio
  * `command`: comando player di SCore che verrà applicato a \{player\}

* Esempi:
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello player\:Ssomar +++ DELAY 10 +++ SWING_MAIN_HAND
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello my name is %player% and my life is %player_health%

### Comandi per i blocchi

* Info: comando che permette, dall'esterno e dall'interno dei plugin Ssomar, di eseguire un comando personalizzato di SCore su un blocco specifico.

* Comando: /score run-block-command \[player:\{player\}\] block:\{world\},\{x\},\{y\},\{z\} \{command\}
  * `player`: player coinvolto in questo attivatore
    * È facoltativo, ma alcuni comandi ne hanno bisogno, per esempio

                MOB_AROUND: chi infligge il danno? Il comando infligge danni ai mob intorno, ma il danno verrà conteggiato come inflitto dal \{player\}, quindi viene verificato se il player può effettivamente danneggiare il mob, il danno e le uccisioni vengono conteggiati per lui, ecc.

                VEIN_BREAKER: chi ha rotto i blocchi? Il comando rompe i blocchi a forma di vena, ma i blocchi verranno conteggiati come rotti dal \{player\}, quindi viene verificato se il player può effettivamente rompere il blocco, il blocco rotto viene conteggiato per lui, ecc.

  * `block`
      * `world`: mondo in cui si trova il blocco
      * `x`: coordinata X del blocco
      * `y`: coordinata Y del blocco
      * `z`: coordinata Z del blocco
  * `command`: comando per blocchi che verrà eseguito sul blocco e, se presente, dal player.
    * I [placeholder del blocco](/tools-for-all-plugins-score/placeholders#block-placeholders) (`%block%`, `%block_lower%`, `%block_x%`...) del comando sono quelli di questo blocco.

* Esempi:
  * /score run-block-command block\:world,-23,-61,27 BREAK
  * /score run-block-command player\:SsomarPluginsPlayer block\:world,-23,-61,27 MINEINCUBE 1 false

### Comandi per le entità

* Info: comando che permette, dall'esterno e dall'interno dei plugin Ssomar, di eseguire un comando personalizzato di SCore su una specifica entità

* Comando: /score run-entity-command \[player:\{player\}\] entity:\{entityUUID\} \{command\}
  * `player`: (Facoltativo) nome o UUID di un player coinvolto: i placeholder del player (`%player%`, `%player_health%`...) possono quindi essere usati nel comando, per esempio in un `IF`.
  * `entityUUID`: UUID dell'entità bersaglio
  * `command`: comando per entità che verrà eseguito sull'entità.
* Esempio:
  * /score run-entity-command entity\:c4d5338b-6f8e-4b97-9f18-9dbc47f60131 JUMP 1
  * /score run-entity-command entity:%entity_uuid% JUMP 1
  * /score run-entity-command player:Steve entity:%entity_uuid% IF %player_health%>10 SET_ENTITY_NAME name:&cTamed

### Comandi per gli item

* Info: comando che permette, dall'esterno e dall'interno dei plugin Ssomar, di eseguire un [comando per item](/tools-for-all-plugins-score/custom-commands/item-commands) personalizzato su un item nell'inventario di un player.

* Comando: /score run-item-command player:\{player\} slot:\{slot\} \{command\}
  * `player`: nome o UUID del player che possiede l'item
  * `slot`: slot dell'item nell'inventario del player: da `0` a `8` per la hotbar, da `9` a `35` per il resto dell'inventario, da `36` a `39` per l'armatura (dagli stivali all'elmo), `40` per la mano secondaria
  * `command`: comando per item che verrà eseguito su questo item. I placeholder del player possono essere usati al suo interno.
  * Non succede nulla quando il player è offline o quando lo slot è vuoto.
* Esempi:
  * /score run-item-command player:Steve slot:0 SET_ITEM_NAME name:&6Excalibur
  * /score run-item-command player:Steve slot:0 IF %player_health%>=20 ADD_ITEM_ENCHANTMENT enchantment:sharpness level:5
