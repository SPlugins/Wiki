---
description: >-
  Découvrez les options detailedCommands et registerCommand des activateurs de
  commande, et comment enregistrer les commandes sur le serveur.
  ExecutableItems.
source_hash: dd51810cf51b3bae
translated_at: '2026-11-13T17:20:49.043Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedCommands

* Info : fonctionnalité des activateurs qui impliquent des commandes. Vous pouvez ici sélectionner comme condition la commande avec laquelle l'activateur doit s'exécuter.
* Exemple :

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_COMMAND # replace that with the correct activator name
    detailedCommands:
    - customHealCommand
    playerCommands:
    - SEND_MESSAGE &dYou have been healed !
    - REGAIN HEALTH 10
```

### registerCommand

* Info : valeur booléenne, `false` par défaut. Uniquement pour `PLAYER_WRITE_COMMAND`. Sans elle, l'activateur s'exécute mais la commande n'existe pas pour le serveur : la barre de chat l'affiche en rouge et le serveur répond « Unknown command ». Avec `registerCommand: true`, les commandes de `detailedCommands` sont enregistrées sur le serveur :
  * Plus de « Unknown command », et en 1.13+ la barre de chat n'affiche plus la commande en rouge.
  * Complétion par tabulation du nom de la commande et des mots écrits après celui-ci dans `detailedCommands` (`/promo summer` et `/promo winter` suggèrent `summer` et `winter`).
  * La commande enregistrée ne fait rien par elle-même : l'activateur ne s'exécute toujours qu'une seule fois, comme avant.
  * Elle ne remplace jamais une commande existante (une commande de Minecraft ou d'un autre plugin) : un avertissement s'affiche dans la console, rien n'est enregistré pour cette commande, et l'activateur s'exécute toujours quand la commande est saisie.
  * Plusieurs activateurs (ou ExecutableItems et ExecutableEvents) peuvent utiliser la même commande : elle n'est enregistrée qu'une seule fois.
  * Les commandes enregistrées suivent les configs : elles sont mises à jour après un reload, une sauvegarde de l'éditeur ou une suppression, et retirées lorsque le plugin est désactivé.
  * Un activateur avec `registerCommand: true` mais sans `detailedCommands` n'enregistre rien.
* Exemple :

```yaml
activators:
  activator1:
    option: PLAYER_WRITE_COMMAND
    detailedCommands:
    - promo summer
    - promo winter
    registerCommand: true
    playerCommands:
    - SEND_MESSAGE &aPromo: %arg1%
```
