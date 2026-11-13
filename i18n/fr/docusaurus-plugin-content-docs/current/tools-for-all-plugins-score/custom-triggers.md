---
description: >-
  Utilisez les Custom Triggers pour stocker des commandes et les exécuter
  manuellement ou selon un horaire avec ExecutableItems et ExecutableBlocks.
source_hash: 2eab89bbd32500f6
translated_at: '2026-11-13T17:19:02.069Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 🔘 Custom Triggers

Les Custom Triggers sont un moyen puissant de stocker et d'exécuter des listes de commandes, soit manuellement via des commandes, soit automatiquement grâce à un système de planification.

## Vue d'ensemble

Les **Custom Triggers** vous permettent de :
- ✅ Stocker des séquences de commandes réutilisables
- ✅ Exécuter des commandes manuellement avec une simple commande de trigger
- ✅ Planifier une exécution automatique à des moments précis
- ✅ Passer des arguments pour personnaliser le comportement
- ✅ Organiser des configurations de commandes complexes

## Démarrage rapide

### Étape 1 : créer l'activateur

1. Ouvrez l'éditeur de votre plugin (`/ei`, `/eb` ou `/ee`)
2. Créez un nouvel activateur
3. Sélectionnez **CUSTOM_TRIGGER** comme option
4. Ajoutez vos commandes dans la section des commandes

### Étape 2 : exécuter le trigger

Utilisez la commande adaptée à votre plugin :

```bash
# ExecutableItems
/ei run-custom-trigger trigger:{activatorID}

# ExecutableBlocks
/eb run-custom-trigger trigger:{activatorID}

# ExecutableEvents
/ee run-custom-trigger trigger:{activatorID}
```

## Contexte des commandes selon le plugin

Chaque plugin fournit un contexte différent pour l'exécution des commandes :

### 🗡️ ExecutableItems
- **Prérequis :** l'item doit se trouver dans l'inventaire du joueur
- **playerCommands disponibles :** commandes du joueur
- **Placeholders :** placeholders basés sur le joueur (`%player%`, etc.)

### 🧱 ExecutableBlocks
- **Prérequis :** le bloc doit être placé
- **playerCommands disponibles :** commandes du bloc, commandes du propriétaire (si activées)
- **Placeholders :** placeholders du bloc et du propriétaire

### 🎯 ExecutableEvents
- **Prérequis :** aucun (se déclenche globalement)
- **playerCommands disponibles :** commandes console uniquement
- **Placeholders :** limités (utilisez des arguments pour cibler un joueur)

## Types de triggers

### 1. Triggers appelables
Exécutés uniquement via une commande :
```yaml
activators:
  my_trigger:
    option: CUSTOM_TRIGGER
    playerCommands:
    - "say Hello World!"
```

### 2. Triggers planifiés
S'exécutent automatiquement à des moments précis :
```yaml
activators:
  scheduled_trigger:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '%%%%:::%%:::%%:::22:::00:::XX'  # Daily at 22:00
    playerCommands:
    - "say It's 10 PM!"
```

## Syntaxe des commandes

### ExecutableItems
```bash
/ei run-custom-trigger trigger:{activatorID} [player:{name}] [slot:{slot}] [args...]
```

| Paramètre | Description | Requis |
|-----------|-------------|----------|
| `trigger` | ID de l'activateur | ✅ Oui |
| `player` | Nom du joueur ciblé | ❌ Non (cible tous les joueurs si omis) |
| `slot` | Slot de l'inventaire (-1 pour la main principale) | ❌ Non |
| `args...` | Arguments supplémentaires accessibles via %arg0%, %arg1%, etc. | ❌ Non |

**Exemples :**
```bash
/ei run-custom-trigger trigger:daily_reward
/ei run-custom-trigger trigger:boost player:Steve slot:-1
/ei run-custom-trigger trigger:message player:Alex Hello World
```

### ExecutableBlocks
```bash
/eb run-custom-trigger trigger:{activatorID} [block:{location}] [args...]
```

| Paramètre | Description | Requis |
|-----------|-------------|----------|
| `trigger` | ID de l'activateur | ✅ Oui |
| `block` | Position du bloc (world,x,y,z) | ❌ Non (cible tous les blocs si omis) |
| `args...` | Arguments supplémentaires | ❌ Non |

**Exemples :**
```bash
/eb run-custom-trigger trigger:harvest_all
/eb run-custom-trigger trigger:activate block:world,100,64,200
```

### ExecutableEvents
```bash
/ee run-custom-trigger trigger:{activatorID} [args...]
```

| Paramètre | Description | Requis |
|-----------|-------------|----------|
| `trigger` | ID de l'activateur | ✅ Oui |
| `args...` | Arguments supplémentaires | ❌ Non |

**Exemples :**
```bash
/ee run-custom-trigger trigger:server_event
/ee run-custom-trigger trigger:player_reward Steve
```

## Système de planification

### Format de planification

Le système de planification utilise deux formats pour définir le moment d'exécution :

#### Format 1 : basé sur la date et l'heure
```
{YEAR}:::{MONTH}:::{DAY}:::{HOUR}:::{MIN}:::{SEC}
```
- Utilisez `%%%%` pour n'importe quelle année
- Utilisez `%%` pour n'importe quel mois, jour, heure ou minute
- Utilisez `XX` pour n'importe quelle seconde
- Utilisez `[value1,value2]` pour plusieurs valeurs

#### Format 2 : basé sur la semaine
```
{YEAR}:!:{WEEK}:!:{DAYSTRING}:!:{HOUR}:!:{MIN}:!:{SEC}
```
- `DAYSTRING` peut valoir : MONDAY, TUESDAY, etc.

### Exemples de planification courants

```yaml
scheduleFeatures:
  when:
  # Every minute
  - '%%%%:::%%:::%%:::%%:::%%:::XX'

  # Every day at 22:00
  - '%%%%:::%%:::%%:::22:::00:::XX'

  # Every Monday at 14:00
  - '%%%%:!:%%:!:MONDAY:!:14:!:00:!:XX'

  # December 24-26 at 16:00
  - '%%%%:::12:::[24,25,26]:::16:::00:::XX'

  # At 10, 14, and 18 hours daily
  - '%%%%:::%%:::%%:::[10,14,18]:::00:::XX'
```

## Exemples pratiques

### Exemple 1 : item de récompenses quotidiennes

```yaml
name: '&eDaily Reward Token'
material: GOLD_INGOT
activators:
  daily_reward:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '%%%%:::%%:::%%:::[10,14,18]:::00:::XX'
    playerCommands:
    - "money give %player% 500"
    - "SEND_MESSAGE &aYou received your daily reward!"
```

### Exemple 2 : trigger d'événement serveur

```yaml
# In ExecutableEvents
activators:
  new_year_celebration:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '2025:::01:::01:::00:::00:::00'
    consoleCommands:
    - "broadcast &6&lHAPPY NEW YEAR 2025!"
    - "ei giveall firework_item 10"
```

### Exemple 3 : système de récolte de blocs

```yaml
# In ExecutableBlocks
activators:
  harvest_crops:
    option: CUSTOM_TRIGGER
    playerCommands:
    - "DROPEXECUTABLEITEM wheat_item 5"
    - "score run-player-command player:%owner% SEND_MESSAGE &aHarvest complete!"
```

### Exemple 4 : commandes du joueur depuis des événements

Comme les ExecutableEvents n'ont pas de contexte joueur, utilisez des arguments :

```yaml
# ExecutableEvent
activators:
  player_boost:
    option: CUSTOM_TRIGGER
    consoleCommands:
    - "score run-player-command player:%arg0% EFFECT SPEED 2 60"
```

Exécutez avec : `/ee run-custom-trigger trigger:player_boost Steve`

## Bonnes pratiques

### ✅ À FAIRE
- Utilisez des ID d'activateur uniques pour éviter les conflits
- Testez les triggers manuellement avant de les planifier
- Utilisez des arguments pour obtenir des triggers flexibles et réutilisables
- Organisez les séquences de commandes complexes en triggers

### ❌ À ÉVITER
- Utiliser des ID d'activateur en double (ils se déclencheront tous simultanément)
- Oublier de vérifier les contextes du plugin (commandes du joueur, du bloc ou console)
- Compliquer à l'excès des configurations simples qui n'ont pas besoin de triggers

## Dépannage

### Le trigger ne s'exécute pas
- ✅ Vérifiez que l'ID de l'activateur correspond exactement
- ✅ Vérifiez que l'item, le bloc ou l'événement existe et est correctement configuré
- ✅ Assurez-vous que les permissions nécessaires à l'exécution des commandes sont en place

### La planification ne fonctionne pas
- ✅ Vérifiez la syntaxe du format de planification
- ✅ Vérifiez que l'heure du serveur correspond à la planification attendue
- ✅ Assurez-vous que la plage startDate/endDate inclut l'heure actuelle

### Les commandes ne s'exécutent pas
- ✅ Vérifiez le contexte des commandes (joueur, bloc ou console)
- ✅ Vérifiez la disponibilité des placeholders dans ce contexte
- ✅ Testez d'abord les commandes manuellement

## Astuces avancées

### Chaîner des triggers
Créez des séquences complexes en faisant appeler d'autres triggers par vos triggers :

```yaml
trigger_1:
  option: CUSTOM_TRIGGER
  playerCommands:
  - "ei run-custom-trigger trigger:trigger_2"
  - "ei run-custom-trigger trigger:trigger_3"
```

### Événements globaux
Combinez les triggers d'ExecutableEvents avec ceux d'autres plugins pour créer des événements à l'échelle du serveur :

```yaml
# Step 1: EE trigger broadcasts and activates items/blocks
server_event:
  option: CUSTOM_TRIGGER
  consoleCommands:
  - "broadcast &cSERVER EVENT STARTING!"
  - "ei run-custom-trigger trigger:event_items"
  - "eb run-custom-trigger trigger:event_blocks"
```

## Documentation associée

- [Placeholders](/tools-for-all-plugins-score/placeholders)
