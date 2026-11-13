---
description: >-
  Erfahre, wie targetCommands, targetConditions und Target-Spieler-Platzhalter
  bei Aktivatoren mit Spieler-Target in ExecutableItems funktionieren.
source_hash: 8f10e4518745e33e
translated_at: '2026-11-13T17:35:49.018Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### targetCommands

Commands sind eine Liste von Befehlen, die von der Konsole aus ausgeführt werden, wenn der Aktivator ausgelöst wird und alle Bedingungen und Anforderungen erfüllt sind. Du kannst hier Vanilla-Befehle, SCore-Befehle und Befehle anderer Plugins verwenden.

* Alle Befehlszeilen dieser Befehlsliste werden zuerst mit den Platzhaltern der Ssomar Plugins und danach über PAPI geparst.
  * Es wird empfohlen, [Placeholders](/tools-for-all-plugins-score/placeholders) zu lesen, um zu sehen, welche Platzhalter Du bei welchem Aktivator verwenden kannst.
* Es gibt drei Arten von Entity-Targets bei Befehlen
  * Player: Der Spieler/User, der den Aktivator des ExecutableItem ausgelöst hat.
  * Target: Der anvisierte Spieler/Gegner, der an einem Aktivator beteiligt ist.
  * Entity: Die Entity/der Mob/der Gegner, die/der an einem Aktivator beteiligt ist.
* Info: Target Commands sind eine Liste von Befehlen, die normalerweise gegen das Target ausgeführt werden, wenn der Aktivator ausgelöst wird.
  * Das heißt: Wenn dort ein SCore-Befehl DAMAGE 5 steht und er in targetCommands eingetragen ist, wird der Schaden dem Target/Gegner zugefügt, der am Aktivator beteiligt ist.
  * Er wird "normalerweise gegen den Spieler ausgeführt", weil das für SCore-Befehle gilt. Denk daran, dass Du auch Befehle anderer Plugins oder Vanilla-Befehle verwenden kannst. Wenn Du also "effect give %player% strength 5 5" hinzufügst, wird beim Parsen der Platzhalter der Cooldown auf %player% angewendet, obwohl der Befehl in targetCommands steht. Wenn Du diesen Befehl auf das Target anwenden möchtest, verwende %target%. Mehr Informationen findest Du unter [Placeholders](/tools-for-all-plugins-score/placeholders)
  * Die Liste der targetCommands findest Du hier -> [Player & Target commands](/tools-for-all-plugins-score/custom-commands/player-and-target-commands)
* Beispiel:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    targetCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%
    - effect give %target% slowness 5 5 true
    - SEND_MESSAGE &7Your feets are heavier than before, eh ?
```

* Es ist wichtig zu verstehen, dass Du die playerCommands verwenden kannst, wenn Dein Aktivator ebenfalls einen Spieler hat. So kannst Du zum Beispiel Folgendes haben:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    playerCommands:
    - SEND_MESSAGE &eYou have hit %target%, he cant pick up items in 5 seconds
    targetCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%, in 5 seconds you can't pick up items
    - CANCEL_PICKUP time:100
```

### targetConditions

* Typ der Aktivator-Kategorie: PLAYER\_TARGET
* Info: Feature für Aktivatoren, an denen ein Spieler als Target beteiligt ist. Hier kannst Du Bedingungen für den beteiligten Ziel-Spieler festlegen.
* [Target conditions](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### Platzhalter des Target-Spielers

Wenn der zweite Akteur des Events ein Spieler ist, kannst Du in der Config Deines Aktivators (Befehle, Bedingungen, Sonstiges) [die Platzhalter des Target-Spielers](/tools-for-all-plugins-score/placeholders#-player-placeholders) verwenden
