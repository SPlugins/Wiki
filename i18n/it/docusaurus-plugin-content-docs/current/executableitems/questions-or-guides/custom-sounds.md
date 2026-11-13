---
description: >-
  Scopri come aggiungere suoni personalizzati con un resource pack e riprodurli
  con il comando PLAYSOUND nei tuoi item di ExecutableItems.
source_hash: 66cf4b862fca2e2f
translated_at: '2026-11-13T17:39:21.066Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Suoni personalizzati

:::info
Questo metodo aggiunge nuovi suoni personalizzati **senza** sostituire alcun suono vanilla esistente.
:::

I suoni personalizzati in Minecraft vengono gestiti tramite resource pack.

## Panoramica

Per aggiungere suoni personalizzati ai tuoi ExecutableItems, devi:
1. Creare un resource pack con i tuoi file audio personalizzati
2. Configurare il file sounds.json per registrare i tuoi suoni
3. Usare il comando /playsound in ExecutableItems per riprodurli

## Guida passo passo

### Passo 1: crea la struttura base del resource pack

Per prima cosa, crea la struttura base delle cartelle del resource pack:

```
RESOURCE_PACK/
  ├── assets/
  ├── pack.mcmeta
  └── pack.png
```

- `pack.mcmeta` - Contiene i metadati del resource pack (versione, descrizione)
- `pack.png` - L'icona del resource pack (facoltativa, ma consigliata)

### Passo 2: aggiungi la cartella del namespace personalizzato

All'interno della cartella `assets`, crea la cartella del tuo namespace personalizzato. Deve avere un nome univoco per evitare conflitti:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/    # Your custom namespace
  ├── pack.mcmeta
  └── pack.png
```

:::tip Nome del namespace
Scegli un namespace descrittivo, come il nome del tuo server o del tuo plugin. Esempi: `myserver`, `customitems`, `epicrpg`
:::

### Passo 3: crea sounds.json

All'interno della cartella del tuo namespace personalizzato, crea un file `sounds.json`:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/
  │       └── sounds.json
  ├── pack.mcmeta
  └── pack.png
```

### Passo 4: configura sounds.json

Modifica `sounds.json` per registrare i tuoi suoni personalizzati:

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

#### Struttura di sounds.json spiegata

- **ID del suono** (ad es. `epic_sword_slash`): il nome che userai nei comandi
- **subtitle**: testo facoltativo mostrato quando i sottotitoli sono attivi
- **sounds**: array di percorsi dei file audio (senza l'estensione .ogg)

:::info Percorsi dei suoni
`"customsounds:sword_slash1"` significa che il file si trova in:
`assets/customsounds/sounds/sword_slash1.ogg`

Il formato è: `namespace:path_inside_sounds_folder`
:::

### Passo 5: aggiungi i tuoi file audio

Crea una cartella `sounds` all'interno del tuo namespace e aggiungi i tuoi file audio .ogg:

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

:::warning Requisiti dei file audio
- **Formato**: deve essere .ogg (Ogg Vorbis)
- **Mono consigliato**: lo stereo funziona, ma il mono è migliore per l'audio posizionale
- **Frequenza di campionamento**: si consigliano 44,1 kHz o 48 kHz
- **Dimensione del file**: mantieni i file piccoli per scaricarli più velocemente
:::

### Passo 6: crea pack.mcmeta

Crea il tuo file `pack.mcmeta` con la corretta formattazione della versione:

```json
{
  "pack": {
    "pack_format": 15,
    "description": "Custom sounds for MyServer"
  }
}
```

#### Versioni di pack format

| Versione di Minecraft | pack_format |
|-------------------|-------------|
| 1.20.2 - 1.20.4   | 18          |
| 1.20 - 1.20.1     | 15          |
| 1.19.4            | 13          |
| 1.19 - 1.19.3     | 12          |
| 1.18 - 1.18.2     | 9           |

Cerca su Google per le altre versioni

## Usare i suoni personalizzati in ExecutableItems

Una volta creato e applicato il resource pack, usa il comando PLAYSOUND:

### Utilizzo base

```yaml
activators:
  sword_attack:
    option: PLAYER_ALL_CLICK
    playerCommands:
    - "minecraft:playsound customsounds:epic_sword_slash master @a"
```


### Suono posizionale

```yaml
activators:
  boss_spawn:
    option: PROJECTILE_HIT_BLOCK
    blockCommands:
    - "minecraft:playsound customsounds:boss_roar master @a %block_x% %block_y% %block_z% %world%"
    # Plays at specific coordinates
```

## Convertire i file audio in OGG

Se hai file MP3, WAV o altri formati audio, devi convertirli in OGG:

### Usare Audacity (gratuito)

1. Scarica Audacity: https://www.audacityteam.org/
2. Apri il tuo file audio
3. Facoltativo: converti in mono (Tracks → Mix → Mix Stereo down to Mono)
4. File → Export → Export as OGG
5. Scegli le impostazioni di qualità (una qualità tra 5 e 7 è un buon compromesso)

### Usare convertitori online

- CloudConvert: https://cloudconvert.com/mp3-to-ogg
- Online-Convert: https://audio.online-convert.com/convert-to-ogg

## Distribuire il tuo resource pack

### Metodo 1: resource pack del server (consigliato)

Carica il tuo resource pack e configuralo in `server.properties`:

```properties
resource-pack=https://your-url.com/resourcepack.zip
resource-pack-sha1=<SHA1 hash>
require-resource-pack=true
```

:::tip Opzioni di hosting
- Dropbox (ottieni il link diretto)
- Google Drive (usa un convertitore di link di download)
- Server web self-hosted
- Release di GitHub
:::

## Risoluzione dei problemi

### I suoni non vengono riprodotti

**Problema**: i comandi vengono eseguiti ma non si sente alcun suono

**Soluzioni**:
1. ✅ Verifica che il resource pack sia applicato (`/playsound` prova con un suono vanilla)
2. ✅ Controlla che il file audio sia in formato .ogg (non .mp3, .wav, ecc.)
3. ✅ Verifica la sintassi di sounds.json (usa un validatore JSON)
4. ✅ Controlla che il percorso del file corrisponda esattamente (distingue maiuscole e minuscole)
5. ✅ Prova con `/playsound customsounds:your_sound master @s`

### Il resource pack non si carica

**Problema**: il resource pack del server non viene scaricato dai giocatori

**Soluzioni**:
1. ✅ Verifica che l'URL del resource pack sia un link di download diretto
2. ✅ Controlla che la versione del formato in pack.mcmeta corrisponda alla versione del server
3. ✅ Assicurati che la dimensione del pack sia inferiore a 100MB (limite del client)
4. ✅ Verifica che l'hash SHA1 in server.properties corrisponda al file

### Viene riprodotto il suono sbagliato

**Problema**: viene riprodotto un suono diverso da quello atteso

**Soluzioni**:
1. ✅ Controlla che non ci siano ID di suono duplicati in sounds.json
2. ✅ Verifica che il namespace sia corretto e in minuscolo (customsounds: vs minecraft:)
3. ✅ Controlla che non ci siano errori di battitura nei nomi dei file audio


## Documentazione correlata

- [Resource Pack Format (Minecraft Wiki)](https://minecraft.wiki/w/Resource_Pack)
- [Activators List](/executableitems/configurations/activator-configuration/list-of-the-activators)

## Risorse aggiuntive

- **Download di Audacity**: https://www.audacityteam.org/
- **Effetti sonori gratuiti**:
  - Freesound: https://freesound.org/
  - Zapsplat: https://www.zapsplat.com/
- **Convertitori OGG**: https://cloudconvert.com/mp3-to-ogg
- **Validatore JSON**: https://jsonlint.com/
