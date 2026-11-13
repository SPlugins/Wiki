---
description: >-
  Apprenez à créer des textures d'items personnalisées avec Custom Model Data et
  un resource pack sur Minecraft 1.13 à 1.21.3 avec ExecutableItems.
source_hash: 0009e0522a21f996
translated_at: '2026-11-13T17:14:23.076Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Textures d'items personnalisées (Minecraft 1.13 - 1.21.3)

Ce guide complet vous apprend à créer des textures personnalisées pour les items dans les versions de Minecraft 1.13 à 1.21.3, à l'aide de Custom Model Data et de resource packs.

:::warning Textures d'armure
Ce tutoriel ne couvre **pas** le retexturage des armures. Pour les armures, vous devrez utiliser OptiFine CIT (Custom Item Textures). Recherchez « OptiFine armor retexturing » pour trouver des tutoriels sur cette méthode.
:::

:::danger Règles de nommage importantes
**TOUS les noms de fichiers et de dossiers DOIVENT être en minuscules uniquement.**

Utiliser des majuscules empêchera le chargement des textures. Utilisez toujours `custom_sword` au lieu de `CustomSword`.
:::

## Tutoriel vidéo

Si vous préférez le format vidéo, ce tutoriel est basé sur la vidéo suivante :

<iframe width="560" height="315" src="https://www.youtube.com/embed/y-t1YMslFLM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prérequis

- **Éditeur de texte** : utilisez Notepad++, VS Code ou équivalent (PAS le Bloc-notes classique)
- **Éditeur d'images** : Photoshop, Paint.NET, GIMP ou Paint 3D
- **Outil de compression** : WinRAR, 7-Zip ou la compression intégrée à votre système
- **Notions de base en JSON** (utiles mais pas indispensables)

:::tip Extensions de fichiers
Aucun des fichiers que vous créez n'est un fichier `.txt`. Assurez-vous que votre éditeur peut enregistrer des types de fichiers spécifiques comme `.json`, `.mcmeta` et `.png`.
:::

## Partie 1 : Configurer votre ExecutableItem

### Étape 1 : Créer votre item

Commencez par créer l'ExecutableItem qui utilisera la texture personnalisée :

```
/ei create my_custom_pickaxe
```

### Étape 2 : Configurer les propriétés de base

Définissez le nom d'affichage de l'item, son lore et toutes les autres fonctionnalités souhaitées :

```
/ei edit my_custom_pickaxe
```

Exemple de configuration :
- **Nom** : `&b&lCustom Pickaxe`
- **Matériau** : `DIAMOND_PICKAXE`
- **Lore** : ajoutez le texte descriptif de votre choix

## Partie 2 : Créer votre texture

### Étape 3 : Concevoir votre image de texture

Créez votre texture personnalisée avec un éditeur d'images :

**Exigences :**
- **Format** : PNG avec prise en charge de la transparence
- **Résolution** : 16x16 pixels (ou une puissance de 2 : 32x32, 64x64, 128x128, etc.)
- **Nom de fichier** : utilisez des minuscules avec des underscores (par ex. `custom_pickaxe.png`)

:::tip Résolution de l'image
Bien que le 16x16 soit le standard, vous pouvez utiliser des résolutions plus élevées comme 32x32 ou 64x64 pour des textures plus détaillées. Restez simplement sur une puissance de 2.
:::

Enregistrez votre fichier de texture : vous en aurez besoin dans la section suivante.

## Partie 3 : Construire le resource pack

### Étape 4 : Créer l'arborescence de dossiers

Créez l'arborescence de dossiers suivante :

```
ExecutableItemsTexturePack/
├── pack.mcmeta
├── pack.png (optional)
└── assets/
    └── minecraft/
        ├── textures/
        │   └── item/
        │       └── custom_textures/
        │           └── custom_pickaxe.png
        └── models/
            └── item/
                ├── diamond_pickaxe/
                │   └── 1.json
                └── diamond_pickaxe.json
```

### Étape 5 : Créer pack.mcmeta

Dans le dossier racine, créez `pack.mcmeta` :

```json
{
  "pack": {
    "pack_format": 15,
    "description": "§eExecutableItems Custom Textures"
  }
}
```

:::info Pack Format selon la version
Choisissez le `pack_format` correspondant à votre version de Minecraft :
- **15** = 1.20.5 - 1.21.1
- **34** = 1.20.2 - 1.20.4
- **18** = 1.20 - 1.20.1
- **15** = 1.19.4
- **13** = 1.19.3
- **12** = 1.19 - 1.19.2
- **9** = 1.18 - 1.18.2
- **8** = 1.17 - 1.17.1
- **6** = 1.16.2 - 1.16.5

Consultez la [liste complète des pack formats](https://minecraft.wiki/w/Pack_format) pour toutes les versions.
:::

### Étape 6 : Ajouter votre fichier de texture

1. Rendez-vous dans `assets/minecraft/textures/item/custom_textures/`
2. Placez-y votre fichier PNG de texture (par ex. `custom_pickaxe.png`)

### Étape 7 : Identifier le matériau de base de l'item

Vous devez connaître l'ID Minecraft de l'item de base :

1. Appuyez sur **F3 + H** dans Minecraft pour activer les infobulles avancées
2. Survolez l'item pour voir son ID (par ex. `minecraft:diamond_pickaxe`)
3. Utilisez la partie située après les deux-points pour les noms de fichiers (par ex. `diamond_pickaxe`)

![ID de l'item affiché avec les infobulles avancées](https://media.ssomar.com/m/docs-img-image-185.png)

:::warning Important : utilisez l'ID Minecraft
Le nom du fichier DOIT correspondre à l'ID de l'item Minecraft, et non à :
- ❌ Le nom d'affichage de votre item
- ❌ Le nom de votre fichier de texture
- ❌ L'ID de votre ExecutableItem
- ✅ L'ID du matériau Minecraft (par ex. `diamond_pickaxe`)
:::

### Étape 8 : Créer le fichier de modèle de base

Dans `assets/minecraft/models/item/`, créez `diamond_pickaxe.json` :

```json
{
    "parent": "minecraft:item/generated",
    "textures": {
        "layer0": "minecraft:item/diamond_pickaxe"
    },
    "overrides": [
        {
            "predicate": {
                "custom_model_data": 1
            },
            "model": "item/diamond_pickaxe/1"
        }
    ]
}
```

**Comprendre les champs :**

- `"parent"` : type de modèle de base
  - Utilisez `"generated"` pour la plupart des items
  - Utilisez `"handheld"` si l'item paraît incorrect lorsqu'il est tenu en main
- `"layer0"` : texture vanilla par défaut
- `"overrides"` : tableau des correspondances de custom model data
- `"custom_model_data"` : le numéro que vous définirez dans ExecutableItems
- `"model"` : chemin vers votre fichier de modèle personnalisé

:::tip Plusieurs textures personnalisées
Pour ajouter d'autres textures personnalisées au même item, ajoutez davantage d'entrées override :

```json
"overrides": [
    {
        "predicate": {
            "custom_model_data": 1
        },
        "model": "item/diamond_pickaxe/1"
    },
    {
        "predicate": {
            "custom_model_data": 2
        },
        "model": "item/diamond_pickaxe/2"
    },
    {
        "predicate": {
            "custom_model_data": 3
        },
        "model": "item/diamond_pickaxe/3"
    }
]
```
:::

### Étape 9 : Créer le fichier de modèle personnalisé

1. Créez le dossier : `assets/minecraft/models/item/diamond_pickaxe/`
2. Créez le fichier : `1.json` dans ce dossier

Contenu de `1.json` :

```json
{
    "parent": "item/handheld",
    "textures": {
        "layer0": "item/custom_textures/custom_pickaxe"
    }
}
```

**Comprendre le chemin de la texture :**

La valeur `"layer0"` est un chemin relatif à `assets/minecraft/textures/` :
- Chemin : `item/custom_textures/custom_pickaxe`
- Chemin complet : `assets/minecraft/textures/item/custom_textures/custom_pickaxe.png`

:::danger Erreur courante : chemin de texture incorrect
L'erreur la plus fréquente consiste à définir un mauvais chemin dans `layer0`. Vérifiez bien que :
1. Le chemin correspond à votre arborescence de dossiers
2. Vous n'incluez pas l'extension `.png`
3. Le chemin part de l'intérieur du dossier `textures/`
:::

### Étape 10 : Empaqueter le resource pack

#### Pour Windows (WinRAR/7-Zip) :
1. Sélectionnez `pack.mcmeta` et le dossier `assets`
2. Clic droit → Ajouter à l'archive / Compresser
3. Choisissez le format `.zip`
4. Nommez-le `ExecutableItemsTexturePack.zip`

#### Pour Mac/Linux :
1. Sélectionnez `pack.mcmeta` et le dossier `assets`
2. Compressez en ZIP avec la compression intégrée
3. Ou placez-les dans un dossier et utilisez-le tel quel pour des tests en local

![Création du fichier ZIP](https://media.ssomar.com/m/docs-img-image-244.png)

![Passage au format .ZIP](https://media.ssomar.com/m/docs-img-image-158.png)

### Étape 11 : Installer le resource pack

1. Placez le fichier `.zip` dans `.minecraft/resourcepacks/`
2. Lancez Minecraft
3. Allez dans Options → Resource Packs
4. Activez votre pack en cliquant sur la flèche

## Partie 4 : Relier ExecutableItems à la texture

### Étape 12 : Définir Custom Model Data

Modifiez votre ExecutableItem :

```
/ei edit my_custom_pickaxe
```

Rendez-vous dans la configuration `customModelData` et définissez-la pour qu'elle corresponde à votre override :

![Paramètre Custom Model Data](https://media.ssomar.com/m/docs-img-image-163.png)

Définissez la valeur sur `1` (ou sur le numéro que vous avez utilisé dans l'override) :

![Valeur définie sur 1](https://media.ssomar.com/m/docs-img-image-61.png)

**Dans le fichier de config, cela donne :**

```yaml
customModelData: 1
```

### Étape 13 : Tester votre texture personnalisée

Donnez-vous l'item :

```
/ei give my_custom_pickaxe
```

Vous devriez maintenant voir votre texture personnalisée !

![Texture personnalisée dans l'inventaire](https://media.ssomar.com/m/docs-img-image-364.png)

![Texture personnalisée lorsque l'item est tenu en main](https://media.ssomar.com/m/docs-img-image-392.png)

## Dépannage

| Problème | Solution |
|---------|----------|
| **La texture ne s'affiche pas** | Vérifiez que tous les noms de fichiers sont en minuscules |
| **Texture violette/noire** | Vérifiez que le chemin `layer0` correspond à l'emplacement de votre texture |
| **Le pack ne se charge pas** | Vérifiez que `pack_format` correspond à votre version de Minecraft |
| **Apparence incorrecte de l'item** | Remplacez `"generated"` par `"handheld"` dans le parent du modèle |
| **L'item garde son apparence vanilla** | Vérifiez que `customModelData` dans EI correspond au numéro de votre override |

## Astuces avancées

### Organiser plusieurs textures

Créez des sous-dossiers pour les différents types d'items :

```
custom_textures/
├── weapons/
│   ├── sword_fire.png
│   └── sword_ice.png
├── tools/
│   └── pickaxe_emerald.png
└── misc/
    └── wand_magic.png
```

Mettez à jour vos chemins en conséquence :
```json
"layer0": "item/custom_textures/weapons/sword_fire"
```

### Utiliser des modèles 3D

Pour les modèles 3D créés avec [Blockbench](https://www.blockbench.net/) :

1. Créez votre modèle dans Blockbench
2. Exportez-le en « Java Block/Item »
3. Remplacez le contenu de votre `1.json` par le modèle exporté
4. Assurez-vous que les chemins des textures correspondent à la structure de votre pack

### Déploiement sur un serveur

Pour utiliser des textures personnalisées sur un serveur, vous devrez héberger le resource pack en ligne. Consultez notre [guide d'envoi d'un pack de textures](./uploading-texture-pack.md) pour les instructions.

## Télécharger le pack d'exemple

Si vous avez du mal à suivre les étapes, téléchargez ce pack d'exemple pour voir la structure correcte :

[Télécharger ExecutableItemsTexturePackExample.zip](/img/ExecutableItemsTexturePackExample.zip)

## Ressources supplémentaires

- [Minecraft Wiki : Resource Pack](https://minecraft.wiki/w/Resource_pack)
- [Minecraft Wiki : Model Format](https://minecraft.wiki/w/Model)
- [Historique des versions de pack format](https://minecraft.wiki/w/Pack_format)
- [Blockbench - Éditeur de modèles 3D gratuit](https://www.blockbench.net/)

---

Besoin d'aide ? Rejoignez notre [communauté Discord](https://discord.gg/ExecutableItems) et posez vos questions dans les salons de support !
