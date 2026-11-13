---
description: >-
  Erfahre, wie playerCommands, playerConditions und Player-Platzhalter in
  Aktivatoren funktionieren: Befehle und Bedingungen in ExecutableItems.
source_hash: 6c1515db5b50e18e
translated_at: '2026-11-13T17:35:18.157Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### playerCommands

Commands sind eine Liste von Befehlen, die von der Konsole ausgeführt werden, wenn der Aktivator ausgelöst wird und alle Bedingungen und Anforderungen erfüllt sind. Du kannst hier Vanilla-Befehle, SCore-Befehle und Befehle anderer Plugins verwenden.

* Alle Befehlszeilen dieser Befehlsliste werden zuerst mit den Platzhaltern von Ssomar Plugins und anschließend über PAPI verarbeitet.
  * Es wird empfohlen, die [Platzhalter-Liste](/tools-for-all-plugins-score/placeholders) zu prüfen, um zu sehen, welche Platzhalter Du bei welchem Aktivator verwenden kannst.

* Info: Player commands ist eine Liste von Befehlen, die normalerweise für den Spieler ausgeführt werden, wenn der Aktivator ausgelöst wird.
  * Das bedeutet: Wenn die Liste einen SCore-Befehl enthält, zum Beispiel DAMAGE 5, wird der Schaden auf den Benutzer des ExecutableItem angewendet.
    * Benutzerdefinierte [Player-Befehle](/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md) sind in SCore verfügbar
  * Du kannst auch Befehle anderer Plugins oder Vanilla-Befehle ausführen. Diese Befehle werden von der Konsole ausgeführt.
    * `minecraft:say Hey`
    * `money give %player% 500`
* Beispiel:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_RIGHT_CLICK
    playerCommands:
    - SEND_MESSAGE &eHey ! I am a message and the player who triggered this activator
      can see it ^^
    - effect give %player% regeneration 5 5 true
    - SEND_MESSAGE &dYou received regeneration :P
```

### playerConditions

* Info: Du kannst diese Bedingungen bei allen Aktivator-Typen verwenden
* [Player-Bedingungen](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### Player-Platzhalter

Wenn der Hauptakteur des Events ein Spieler ist, kannst Du in der Konfiguration Deines Aktivators (Befehle, Bedingungen und mehr) [die Player-Platzhalter](/tools-for-all-plugins-score/placeholders#player-placeholders) verwenden
