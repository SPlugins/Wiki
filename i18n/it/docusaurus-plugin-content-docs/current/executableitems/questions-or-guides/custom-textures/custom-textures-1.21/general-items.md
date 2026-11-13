---
description: >-
  Scopri come creare texture personalizzate per gli item in Minecraft 1.13 -
  1.21.3 con Custom Model Data e resource pack in ExecutableItems.
source_hash: 0009e0522a21f996
translated_at: '2026-11-13T17:39:53.098Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Texture personalizzate per gli item (Minecraft 1.13 - 1.21.3)

Questa guida completa ti insegna a creare texture personalizzate per gli item nelle versioni di Minecraft dalla 1.13 alla 1.21.3, usando Custom Model Data e i resource pack.

:::warning Texture delle armature
Questo tutorial **non** copre il retexturing delle armature. Per le armature dovrai usare OptiFine CIT (Custom Item Textures). Cerca "OptiFine armor retexturing" per trovare tutorial su quel metodo.
:::

:::danger Regole di denominazione importanti
**TUTTI i nomi di file e cartelle DEVONO essere solo in minuscolo.**

L'uso di caratteri maiuscoli impedirà il caricamento delle texture. Usa sempre `custom_sword` invece di `CustomSword`.
:::

## Video tutorial

Se preferisci il formato video, questo tutorial si basa sul seguente video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/y-t1YMslFLM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisiti

- **Editor di testo**: usa Notepad++, VS Code o simili (NON il Blocco note normale)
- **Editor di immagini**: Photoshop, Paint.NET, GIMP o Paint 3D
- **Strumento di compressione**: WinRAR, 7-Zip o la compressione integrata del sistema operativo
- **Conoscenze di base di JSON** (utili ma non obbligatorie)

:::tip Estensioni dei file
Nessuno dei file che crei è un file `.txt`. Assicurati che il tuo editor possa salvare tipi di file specifici come `.json`, `.mcmeta` e `.png`.
:::

## Parte 1: configurare il tuo ExecutableItem

### Passo 1: crea il tuo item

Per prima cosa, crea l'ExecutableItem che userà la texture personalizzata:

```
/ei create my_custom_pickaxe
```

### Passo 2: configura le proprietà di base

Imposta il nome visualizzato dell'item, la lore e qualsiasi altra funzione tu voglia:

```
/ei edit my_custom_pickaxe
```

Configurazione di esempio:
- **Nome**: `&b&lCustom Pickaxe`
- **Materiale**: `DIAMOND_PICKAXE`
- **Lore**: aggiungi un testo descrittivo a tua scelta

## Parte 2: creare la tua texture

### Passo 3: disegna l'immagine della texture

Crea la tua texture personalizzata con un editor di immagini:

**Requisiti:**
- **Formato**: PNG con supporto alla trasparenza
- **Risoluzione**: 16x16 pixel (oppure una potenza di 2: 32x32, 64x64, 128x128, ecc.)
- **Nome del file**: usa minuscole con trattini bassi (ad es. `custom_pickaxe.png`)

:::tip Risoluzione dell'immagine
Anche se 16x16 è lo standard, puoi usare risoluzioni più alte come 32x32 o 64x64 per texture più dettagliate. Mantieni però una potenza di 2.
:::

Salva il file della texture: ti servirà nella sezione successiva.

## Parte 3: creare il resource pack

### Passo 4: crea la struttura delle cartelle

Crea la seguente struttura di cartelle:

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

### Passo 5: crea pack.mcmeta

Nella cartella principale, crea `pack.mcmeta`:

```json
{
  "pack": {
    "pack_format": 15,
    "description": "§eExecutableItems Custom Textures"
  }
}
```

:::info Pack format per versione
Scegli il `pack_format` corretto per la tua versione di Minecraft:
- **15** = 1.20.5 - 1.21.1
- **34** = 1.20.2 - 1.20.4
- **18** = 1.20 - 1.20.1
- **15** = 1.19.4
- **13** = 1.19.3
- **12** = 1.19 - 1.19.2
- **9** = 1.18 - 1.18.2
- **8** = 1.17 - 1.17.1
- **6** = 1.16.2 - 1.16.5

Consulta l'[elenco completo dei pack format](https://minecraft.wiki/w/Pack_format) per tutte le versioni.
:::

### Passo 6: aggiungi il file della texture

1. Vai in `assets/minecraft/textures/item/custom_textures/`
2. Inserisci qui il file PNG della tua texture (ad es. `custom_pickaxe.png`)

### Passo 7: individua il materiale dell'item di base

Devi conoscere l'ID Minecraft dell'item di base:

1. Premi **F3 + H** in Minecraft per attivare gli Advanced Tooltips
2. Passa il mouse sull'item per vedere il suo ID (ad es. `minecraft:diamond_pickaxe`)
3. Usa la parte dopo i due punti per i nomi dei file (ad es. `diamond_pickaxe`)

![ID dell'item mostrato con gli Advanced Tooltips](https://media.ssomar.com/m/docs-img-image-185.png)

:::warning Fondamentale: usa l'ID Minecraft
Il nome del file DEVE corrispondere all'ID Minecraft dell'item, non a:
- ❌ Il nome visualizzato del tuo item
- ❌ Il nome del file della tua texture
- ❌ L'ID del tuo ExecutableItem
- ✅ L'ID del materiale Minecraft (ad es. `diamond_pickaxe`)
:::

### Passo 8: crea il file del modello di base

In `assets/minecraft/models/item/`, crea `diamond_pickaxe.json`:

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

**Spiegazione dei campi:**

- `"parent"`: tipo di modello di base
  - Usa `"generated"` per la maggior parte degli item
  - Usa `"handheld"` se l'item appare sbagliato quando viene impugnato
- `"layer0"`: texture vanilla predefinita
- `"overrides"`: array di mappature del custom model data
- `"custom_model_data"`: il numero che imposterai in ExecutableItems
- `"model"`: percorso del tuo file di modello personalizzato

:::tip Più texture personalizzate
Per aggiungere altre texture personalizzate per lo stesso item, aggiungi altre voci override:

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

### Passo 9: crea il file del modello personalizzato

1. Crea la cartella: `assets/minecraft/models/item/diamond_pickaxe/`
2. Crea il file: `1.json` all'interno di quella cartella

Contenuto di `1.json`:

```json
{
    "parent": "item/handheld",
    "textures": {
        "layer0": "item/custom_textures/custom_pickaxe"
    }
}
```

**Spiegazione del percorso della texture:**

Il valore `"layer0"` è un percorso relativo a `assets/minecraft/textures/`:
- Percorso: `item/custom_textures/custom_pickaxe`
- Percorso completo: `assets/minecraft/textures/item/custom_textures/custom_pickaxe.png`

:::danger Errore comune: percorso della texture errato
L'errore più comune è impostare il percorso sbagliato in `layer0`. Controlla bene che:
1. Il percorso corrisponda alla tua struttura di cartelle
2. Non includa l'estensione `.png`
3. Il percorso parta dall'interno della cartella `textures/`
:::

### Passo 10: impacchetta il resource pack

#### Per Windows (WinRAR/7-Zip):
1. Seleziona `pack.mcmeta` e la cartella `assets`
2. Clic destro → Aggiungi all'archivio / Comprimi
3. Scegli il formato `.zip`
4. Chiamalo `ExecutableItemsTexturePack.zip`

#### Per Mac/Linux:
1. Seleziona `pack.mcmeta` e la cartella `assets`
2. Comprimi in ZIP usando la compressione integrata
3. Oppure inserisci tutto in una cartella e usala così com'è per i test in locale

![Creazione del file ZIP](https://media.ssomar.com/m/docs-img-image-244.png)

![Passa al formato .ZIP](https://media.ssomar.com/m/docs-img-image-158.png)

### Passo 11: installa il resource pack

1. Inserisci il file `.zip` in `.minecraft/resourcepacks/`
2. Avvia Minecraft
3. Vai in Options → Resource Packs
4. Attiva il tuo pack cliccando sulla freccia

## Parte 4: collegare ExecutableItems alla texture

### Passo 12: imposta il Custom Model Data

Modifica il tuo ExecutableItem:

```
/ei edit my_custom_pickaxe
```

Vai alla configurazione `customModelData` e impostala in modo che corrisponda al tuo override:

![Impostazione del Custom Model Data](https://media.ssomar.com/m/docs-img-image-163.png)

Imposta il valore su `1` (o su qualsiasi numero tu abbia usato nell'override):

![Impostazione del valore su 1](https://media.ssomar.com/m/docs-img-image-61.png)

**Nel file di configurazione appare così:**

```yaml
customModelData: 1
```

### Passo 13: prova la tua texture personalizzata

Dai a te stesso l'item:

```
/ei give my_custom_pickaxe
```

Ora dovresti vedere la tua texture personalizzata!

![Texture personalizzata nell'inventario](https://media.ssomar.com/m/docs-img-image-364.png)

![Texture personalizzata quando viene impugnata](https://media.ssomar.com/m/docs-img-image-392.png)

## Risoluzione dei problemi

| Problema | Soluzione |
|---------|----------|
| **La texture non appare** | Controlla che tutti i nomi dei file siano in minuscolo |
| **Texture viola/nera** | Verifica che il percorso `layer0` corrisponda alla posizione della tua texture |
| **Il pack non si carica** | Controlla che `pack_format` corrisponda alla tua versione di Minecraft |
| **Aspetto dell'item sbagliato** | Cambia `"generated"` in `"handheld"` nel parent del modello |
| **L'item sembra vanilla** | Verifica che `customModelData` in EI corrisponda al numero del tuo override |

## Consigli avanzati

### Organizzare più texture

Crea sottocartelle per i diversi tipi di item:

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

Aggiorna di conseguenza i tuoi percorsi:
```json
"layer0": "item/custom_textures/weapons/sword_fire"
```

### Usare modelli 3D

Per i modelli 3D creati con [Blockbench](https://www.blockbench.net/):

1. Crea il tuo modello in Blockbench
2. Esportalo come "Java Block/Item"
3. Sostituisci il contenuto del tuo `1.json` con il modello esportato
4. Assicurati che i percorsi delle texture corrispondano alla struttura del tuo pack

### Distribuzione sul server

Per usare le texture personalizzate su un server, dovrai ospitare il resource pack online. Consulta la nostra [guida al caricamento del pacchetto di texture](./uploading-texture-pack.md) per le istruzioni.

## Scarica il pack di esempio

Se hai difficoltà a seguire i passaggi, scarica questo pack di esempio per vedere la struttura corretta:

[Scarica ExecutableItemsTexturePackExample.zip](/img/ExecutableItemsTexturePackExample.zip)

## Risorse aggiuntive

- [Minecraft Wiki: Resource Pack](https://minecraft.wiki/w/Resource_pack)
- [Minecraft Wiki: Model Format](https://minecraft.wiki/w/Model)
- [Cronologia delle versioni dei pack format](https://minecraft.wiki/w/Pack_format)
- [Blockbench - Editor di modelli 3D gratuito](https://www.blockbench.net/)

---

Hai bisogno di aiuto? Unisciti alla nostra [community Discord](https://discord.gg/ExecutableItems) e scrivi nei canali di supporto!
