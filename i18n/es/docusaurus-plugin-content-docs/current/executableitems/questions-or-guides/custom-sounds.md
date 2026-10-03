---
description: >-
  Guía para añadir sonidos personalizados a ExecutableItems mediante resource
  packs, sounds.json y el comando PLAYSOUND en SPlugins.
source_hash: 66cf4b862fca2e2f
translated_at: '2026-10-03T10:33:43.443Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Sonidos Personalizados

:::info
Este método añade nuevos sonidos personalizados **sin** reemplazar ningún sonido vanilla existente.
:::

Los sonidos personalizados en Minecraft se gestionan mediante resource packs.

## Resumen

Para añadir sonidos personalizados a tus ExecutableItems, necesitarás:
1. Crear un resource pack con tus archivos de sonido personalizados
2. Configurar el archivo sounds.json para registrar tus sonidos
3. Usar el comando /playsound en ExecutableItems para reproducirlos

## Guía paso a paso

### Paso 1: Crea la estructura básica del resource pack

Primero, crea la estructura básica de carpetas del resource pack:

```
RESOURCE_PACK/
  ├── assets/
  ├── pack.mcmeta
  └── pack.png
```

- `pack.mcmeta`: contiene los metadatos del resource pack (versión, descripción)
- `pack.png`: el icono del resource pack (opcional, pero recomendado)

### Paso 2: Añade la carpeta del namespace personalizado

Dentro de la carpeta `assets`, crea tu carpeta de namespace personalizado. Debe ser un nombre único para evitar conflictos:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/    # Your custom namespace
  ├── pack.mcmeta
  └── pack.png
```

:::tip Nomenclatura del namespace
Elige un namespace descriptivo como el nombre de tu servidor o plugin. Ejemplos: `myserver`, `customitems`, `epicrpg`
:::

### Paso 3: Crea sounds.json

Dentro de tu carpeta de namespace personalizado, crea un archivo `sounds.json`:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/
  │       └── sounds.json
  ├── pack.mcmeta
  └── pack.png
```

### Paso 4: Configura sounds.json

Edita `sounds.json` para registrar tus sonidos personalizados:

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

#### Estructura de sounds.json explicada

- **Sound ID** (p. ej., `epic_sword_slash`): el nombre que usarás en los comandos
- **subtitle**: texto opcional que se muestra cuando los subtítulos están activados
- **sounds**: array de rutas de archivos de sonido (sin la extensión .ogg)

:::info Rutas de sonido
`"customsounds:sword_slash1"` significa que el archivo se encuentra en:
`assets/customsounds/sounds/sword_slash1.ogg`

El formato es: `namespace:path_inside_sounds_folder`
:::

### Paso 5: Añade tus archivos de sonido

Crea una carpeta `sounds` dentro de tu namespace y añade tus archivos de sonido .ogg:

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

:::warning Requisitos de los archivos de sonido
- **Formato**: debe ser formato .ogg (Ogg Vorbis)
- **Mono recomendado**: el estéreo funciona, pero el mono es mejor para audio posicional
- **Frecuencia de muestreo**: se recomienda 44,1 kHz o 48 kHz
- **Tamaño de archivo**: mantén los archivos pequeños para descargas más rápidas
:::

### Paso 6: Crea pack.mcmeta

Crea tu archivo `pack.mcmeta` con el formato de versión adecuado:

```json
{
  "pack": {
    "pack_format": 15,
    "description": "Custom sounds for MyServer"
  }
}
```

#### Versiones de pack_format

| Versión de Minecraft | pack_format |
|-------------------|-------------|
| 1.20.2 - 1.20.4   | 18          |
| 1.20 - 1.20.1     | 15          |
| 1.19.4            | 13          |
| 1.19 - 1.19.3     | 12          |
| 1.18 - 1.18.2     | 9           |

Consulta en google para las demás versiones

## Uso de sonidos personalizados en ExecutableItems

Una vez creado y aplicado tu resource pack, usa el comando PLAYSOUND:

### Uso básico

```yaml
activators:
  sword_attack:
    option: PLAYER_ALL_CLICK
    playerCommands:
    - "minecraft:playsound customsounds:epic_sword_slash master @a"
```


### Sonido posicional

```yaml
activators:
  boss_spawn:
    option: PROJECTILE_HIT_BLOCK
    blockCommands:
    - "minecraft:playsound customsounds:boss_roar master @a %block_x% %block_y% %block_z% %world%"
    # Plays at specific coordinates
```

## Convertir archivos de audio a OGG

Si tienes archivos en MP3, WAV u otros formatos de audio, necesitas convertirlos a OGG:

### Usando Audacity (gratis)

1. Descarga Audacity: https://www.audacityteam.org/
2. Abre tu archivo de audio
3. Opcional: conviértelo a mono (Pistas → Mezclar → Mezclar estéreo a mono)
4. Archivo → Exportar → Exportar como OGG
5. Elige los ajustes de calidad (una calidad de 5 a 7 es un buen equilibrio)

### Usando conversores online

- CloudConvert: https://cloudconvert.com/mp3-to-ogg
- Online-Convert: https://audio.online-convert.com/convert-to-ogg

## Despliegue de tu resource pack

### Método 1: Resource pack del servidor (recomendado)

Sube tu resource pack y configúralo en `server.properties`:

```properties
resource-pack=https://your-url.com/resourcepack.zip
resource-pack-sha1=<SHA1 hash>
require-resource-pack=true
```

:::tip Opciones de hosting
- Dropbox (obtén el enlace directo)
- Google Drive (usa un conversor de enlaces de descarga)
- Servidor web propio
- GitHub releases
:::

## Solución de problemas

### Los sonidos no se reproducen

**Problema**: los comandos se ejecutan pero no se reproduce ningún sonido

**Soluciones**:
1. ✅ Verifica que el resource pack esté aplicado (`/playsound` prueba con un sonido vanilla)
2. ✅ Comprueba que el archivo de sonido tenga formato .ogg (no .mp3, .wav, etc.)
3. ✅ Verifica la sintaxis de sounds.json (usa un validador JSON)
4. ✅ Comprueba que la ruta del archivo coincida exactamente (sensible a mayúsculas y minúsculas)
5. ✅ Prueba con `/playsound customsounds:your_sound master @s`

### El resource pack no carga

**Problema**: el resource pack del servidor no se descarga para los jugadores

**Soluciones**:
1. ✅ Verifica que la URL del resource pack sea un enlace de descarga directa
2. ✅ Comprueba que la versión de pack_format de pack.mcmeta coincida con la versión del servidor
3. ✅ Asegúrate de que el tamaño del pack esté por debajo de 100MB (límite del cliente)
4. ✅ Verifica que el hash SHA1 en server.properties coincida con el archivo

### Se reproduce el sonido incorrecto

**Problema**: se reproduce un sonido distinto al esperado

**Soluciones**:
1. ✅ Comprueba que no haya IDs de sonido duplicados en sounds.json
2. ✅ Verifica que el namespace sea correcto y esté en minúsculas (customsounds: en vez de minecraft:)
3. ✅ Comprueba que no haya errores tipográficos en los nombres de los archivos de sonido


## Documentación relacionada

- [Formato de Resource Pack (Minecraft Wiki)](https://minecraft.wiki/w/Resource_Pack)
- [Lista de Activadores](/executableitems/configurations/activator-configuration/list-of-the-activators)

## Recursos adicionales

- **Descarga de Audacity**: https://www.audacityteam.org/
- **Efectos de sonido gratuitos**:
  - Freesound: https://freesound.org/
  - Zapsplat: https://www.zapsplat.com/
- **Conversores OGG**: https://cloudconvert.com/mp3-to-ogg
- **Validador JSON**: https://jsonlint.com/
