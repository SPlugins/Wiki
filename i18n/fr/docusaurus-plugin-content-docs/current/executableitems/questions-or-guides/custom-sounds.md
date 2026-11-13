---
description: >-
  Apprenez à ajouter des sons personnalisés à vos items ExecutableItems avec un
  resource pack, sounds.json et la commande PLAYSOUND, étape par étape.
source_hash: 66cf4b862fca2e2f
translated_at: '2026-11-13T17:13:51.463Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Sons personnalisés

:::info
Cette méthode ajoute de nouveaux sons personnalisés **sans** remplacer les sons vanilla existants.
:::

Dans Minecraft, les sons personnalisés sont gérés par les resource packs.

## Vue d'ensemble

Pour ajouter des sons personnalisés à vos ExecutableItems, vous devrez :
1. Créer un resource pack contenant vos fichiers de sons personnalisés
2. Configurer le fichier sounds.json pour enregistrer vos sons
3. Utiliser la commande /playsound dans ExecutableItems pour les jouer

## Guide étape par étape

### Étape 1 : créer la structure de base du resource pack

Commencez par créer la structure de dossiers de base du resource pack :

```
RESOURCE_PACK/
  ├── assets/
  ├── pack.mcmeta
  └── pack.png
```

- `pack.mcmeta` - Contient les métadonnées du resource pack (version, description)
- `pack.png` - L'icône du resource pack (facultative, mais recommandée)

### Étape 2 : ajouter le dossier de namespace personnalisé

Dans le dossier `assets`, créez votre dossier de namespace personnalisé. Il doit porter un nom unique pour éviter les conflits :

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/    # Your custom namespace
  ├── pack.mcmeta
  └── pack.png
```

:::tip Nom du namespace
Choisissez un namespace descriptif, comme le nom de votre serveur ou de votre plugin. Exemples : `myserver`, `customitems`, `epicrpg`
:::

### Étape 3 : créer sounds.json

Dans votre dossier de namespace personnalisé, créez un fichier `sounds.json` :

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/
  │       └── sounds.json
  ├── pack.mcmeta
  └── pack.png
```

### Étape 4 : configurer sounds.json

Modifiez `sounds.json` pour enregistrer vos sons personnalisés :

```json
{
  "epic_sword_slash": {
    "subtitle": "Epic Sword Slash",
    "sounds": [
      "customsounds:sword_slash1"
    ]
  },
  "magic_spell_cast": {
    "subtitle": "Magic Spell Cast",
    "sounds": [
      "customsounds:spell_cast1",
      "customsounds:spell_cast2"
    ]
  },
  "boss_roar": {
    "sounds": [
      "customsounds:dragon_roar"
    ]
  }
}
```

#### Explication de la structure de sounds.json

- **Sound ID** (par ex. `epic_sword_slash`) : le nom que vous utiliserez dans les commandes
- **subtitle** : texte facultatif affiché lorsque les sous-titres sont activés
- **sounds** : tableau de chemins de fichiers de sons (sans l'extension .ogg)

:::info Chemins des sons
`"customsounds:sword_slash1"` signifie que le fichier se trouve à l'emplacement suivant :
`assets/customsounds/sounds/sword_slash1.ogg`

Le format est : `namespace:path_inside_sounds_folder`
:::

### Étape 5 : ajouter vos fichiers de sons

Créez un dossier `sounds` dans votre namespace et ajoutez-y vos fichiers de sons .ogg :

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/
  │       ├── sounds.json
  │       └── sounds/
  │           ├── sword_slash1.ogg
  │           ├── spell_cast1.ogg
  │           ├── spell_cast2.ogg
  │           └── dragon_roar.ogg
  ├── pack.mcmeta
  └── pack.png
```

:::warning Exigences sur les fichiers de sons
- **Format** : doit être au format .ogg (Ogg Vorbis)
- **Mono recommandé** : la stéréo fonctionne, mais le mono est préférable pour l'audio positionnel
- **Fréquence d'échantillonnage** : 44,1 kHz ou 48 kHz recommandée
- **Taille des fichiers** : gardez des fichiers légers pour des téléchargements plus rapides
:::

### Étape 6 : créer pack.mcmeta

Créez votre fichier `pack.mcmeta` avec le bon format de version :

```json
{
  "pack": {
    "pack_format": 15,
    "description": "Custom sounds for MyServer"
  }
}
```

#### Versions de pack format

| Version de Minecraft | pack_format |
|-------------------|-------------|
| 1.20.2 - 1.20.4   | 18          |
| 1.20 - 1.20.1     | 15          |
| 1.19.4            | 13          |
| 1.19 - 1.19.3     | 12          |
| 1.18 - 1.18.2     | 9           |

Cherchez sur Google pour les autres versions

## Utiliser des sons personnalisés dans ExecutableItems

Une fois votre resource pack créé et appliqué, utilisez la commande PLAYSOUND :

### Utilisation de base

```yaml
activators:
  sword_attack:
    option: PLAYER_ALL_CLICK
    playerCommands:
    - "minecraft:playsound customsounds:epic_sword_slash master @a"
```


### Son positionnel

```yaml
activators:
  boss_spawn:
    option: PROJECTILE_HIT_BLOCK
    blockCommands:
    - "minecraft:playsound customsounds:boss_roar master @a %block_x% %block_y% %block_z% %world%"
    # Plays at specific coordinates
```

## Convertir des fichiers audio en OGG

Si vous avez des fichiers MP3, WAV ou d'autres formats audio, vous devez les convertir en OGG :

### Avec Audacity (gratuit)

1. Téléchargez Audacity : https://www.audacityteam.org/
2. Ouvrez votre fichier audio
3. Facultatif : convertissez en mono (Tracks → Mix → Mix Stereo down to Mono)
4. File → Export → Export as OGG
5. Choisissez les paramètres de qualité (une qualité de 5 à 7 offre un bon équilibre)

### Avec des convertisseurs en ligne

- CloudConvert : https://cloudconvert.com/mp3-to-ogg
- Online-Convert : https://audio.online-convert.com/convert-to-ogg

## Déployer votre resource pack

### Méthode 1 : resource pack du serveur (recommandée)

Hébergez votre resource pack et configurez-le dans `server.properties` :

```properties
resource-pack=https://your-url.com/resourcepack.zip
resource-pack-sha1=<SHA1 hash>
require-resource-pack=true
```

:::tip Options d'hébergement
- Dropbox (obtenez un lien direct)
- Google Drive (utilisez un convertisseur de lien de téléchargement)
- Serveur web auto-hébergé
- Releases GitHub
:::

## Dépannage

### Les sons ne se jouent pas

**Problème** : les commandes s'exécutent, mais aucun son n'est joué

**Solutions** :
1. ✅ Vérifiez que le resource pack est appliqué (`/playsound` testez avec un son vanilla)
2. ✅ Vérifiez que le fichier de son est au format .ogg (et non .mp3, .wav, etc.)
3. ✅ Vérifiez la syntaxe de sounds.json (utilisez un validateur JSON)
4. ✅ Vérifiez que le chemin du fichier correspond exactement (sensible à la casse)
5. ✅ Testez avec `/playsound customsounds:your_sound master @s`

### Le resource pack ne se charge pas

**Problème** : le resource pack du serveur ne se télécharge pas chez les joueurs

**Solutions** :
1. ✅ Vérifiez que l'URL du resource pack est un lien de téléchargement direct
2. ✅ Vérifiez que la version de format de pack.mcmeta correspond à la version du serveur
3. ✅ Assurez-vous que la taille du pack est inférieure à 100 Mo (limite du client)
4. ✅ Vérifiez que le hash SHA1 dans server.properties correspond au fichier

### Le mauvais son est joué

**Problème** : un autre son que celui attendu est joué

**Solutions** :
1. ✅ Recherchez les Sound ID en double dans sounds.json
2. ✅ Vérifiez que le namespace est correct et en minuscules (customsounds: et non minecraft:)
3. ✅ Recherchez les fautes de frappe dans les noms des fichiers de sons


## Documentation associée

- [Format des resource packs (wiki Minecraft)](https://minecraft.wiki/w/Resource_Pack)
- [Liste des activateurs](/executableitems/configurations/activator-configuration/list-of-the-activators)

## Ressources supplémentaires

- **Téléchargement d'Audacity** : https://www.audacityteam.org/
- **Effets sonores gratuits** :
  - Freesound : https://freesound.org/
  - Zapsplat : https://www.zapsplat.com/
- **Convertisseurs OGG** : https://cloudconvert.com/mp3-to-ogg
- **Validateur JSON** : https://jsonlint.com/
