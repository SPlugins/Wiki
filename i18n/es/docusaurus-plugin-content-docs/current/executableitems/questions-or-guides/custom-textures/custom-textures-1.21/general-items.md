---
description: >-
  Guía de SPlugins para crear texturas personalizadas de ítems con Custom Model
  Data y resource packs en Minecraft 1.13-1.21.3.
source_hash: 0009e0522a21f996
translated_at: '2026-10-03T10:27:20.709Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Texturas Personalizadas de Ítems (Minecraft 1.13 - 1.21.3)

Esta guía completa te enseñará a crear texturas personalizadas para ítems en las versiones de Minecraft 1.13 a 1.21.3 usando Custom Model Data y resource packs.

:::warning Texturas de Armadura
Este tutorial **no** cubre el retexturizado de armaduras. Para armaduras, necesitarás usar OptiFine CIT (Custom Item Textures). Busca "OptiFine armor retexturing" para tutoriales sobre ese método.
:::

:::danger Reglas Importantes de Nomenclatura
**TODOS los nombres de archivos y carpetas DEBEN estar en minúsculas únicamente.**

Usar caracteres en mayúsculas provocará que las texturas no carguen. Usa siempre `custom_sword` en lugar de `CustomSword`.
:::

## Tutorial en Video

Si prefieres el formato de video, este tutorial está basado en el siguiente video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/y-t1YMslFLM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requisitos Previos

- **Editor de Texto**: Usa Notepad++, VS Code o similar (NO el Notepad normal)
- **Editor de Imágenes**: Photoshop, Paint.NET, GIMP o Paint 3D
- **Herramienta de Compresión**: WinRAR, 7-Zip o la compresión integrada del sistema operativo
- **Conocimientos básicos de JSON** (útil pero no obligatorio)

:::tip Extensiones de Archivo
Ninguno de los archivos que crearás son archivos `.txt`. Asegúrate de que tu editor pueda guardar tipos de archivo específicos como `.json`, `.mcmeta` y `.png`.
:::

## Parte 1: Configurando tu ExecutableItem

### Paso 1: Crea tu Ítem

Primero, crea el ExecutableItem que usará la textura personalizada:

```
/ei create my_custom_pickaxe
```

### Paso 2: Configura las Propiedades Básicas

Configura el nombre de visualización del ítem, el lore y cualquier otra función que quieras añadir:

```
/ei edit my_custom_pickaxe
```

Ejemplo de configuración:
- **Nombre**: `&b&lCustom Pickaxe`
- **Material**: `DIAMOND_PICKAXE`
- **Lore**: Añade cualquier texto descriptivo

## Parte 2: Creando tu Textura

### Paso 3: Diseña tu Imagen de Textura

Crea tu textura personalizada usando un editor de imágenes:

**Requisitos:**
- **Formato**: PNG con soporte de transparencia
- **Resolución**: 16x16 píxeles (o potencia de 2: 32x32, 64x64, 128x128, etc.)
- **Nombre del archivo**: Usa minúsculas con guiones bajos (por ejemplo, `custom_pickaxe.png`)

:::tip Resolución de Imagen
Aunque 16x16 es el estándar, puedes usar resoluciones más altas como 32x32 o 64x64 para texturas más detalladas. Solo mantenla como potencia de 2.
:::

Guarda tu archivo de textura, lo necesitarás en la siguiente sección.

## Parte 3: Construyendo el Resource Pack

### Paso 4: Crea la Estructura de Carpetas

Crea la siguiente estructura de carpetas:

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

### Paso 5: Crea pack.mcmeta

En la carpeta raíz, crea `pack.mcmeta`:

```json
{
  "pack": {
    "pack_format": 15,
    "description": "§eExecutableItems Custom Textures"
  }
}
```

:::info Pack Format según la Versión
Elige el `pack_format` correcto para tu versión de Minecraft:
- **15** = 1.20.5 - 1.21.1
- **34** = 1.20.2 - 1.20.4
- **18** = 1.20 - 1.20.1
- **15** = 1.19.4
- **13** = 1.19.3
- **12** = 1.19 - 1.19.2
- **9** = 1.18 - 1.18.2
- **8** = 1.17 - 1.17.1
- **6** = 1.16.2 - 1.16.5

Consulta la [lista completa de pack format](https://minecraft.wiki/w/Pack_format) para todas las versiones.
:::

### Paso 6: Añade tu Archivo de Textura

1. Navega hasta `assets/minecraft/textures/item/custom_textures/`
2. Coloca tu archivo PNG de textura aquí (por ejemplo, `custom_pickaxe.png`)

### Paso 7: Identifica el Material Base del Ítem

Necesitas conocer el ID de Minecraft del ítem base:

1. Presiona **F3 + H** en Minecraft para activar los Tooltips Avanzados
2. Pasa el cursor sobre el ítem para ver su ID (por ejemplo, `minecraft:diamond_pickaxe`)
3. Usa la parte después de los dos puntos para los nombres de archivo (por ejemplo, `diamond_pickaxe`)

![ID del ítem mostrado con Tooltips Avanzados](https://media.ssomar.com/m/docs-img-image-185.png)

:::warning Crítico: Usa el ID de Minecraft
El nombre del archivo DEBE coincidir con el ID del ítem de Minecraft, no con:
- ❌ El nombre de visualización de tu ítem
- ❌ El nombre de tu archivo de textura
- ❌ El ID de tu ExecutableItem
- ✅ El ID del material de Minecraft (por ejemplo, `diamond_pickaxe`)
:::

### Paso 8: Crea el Archivo de Modelo Base

En `assets/minecraft/models/item/`, crea `diamond_pickaxe.json`:

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

**Entendiendo los campos:**

- `"parent"`: Tipo de modelo base
  - Usa `"generated"` para la mayoría de los ítems
  - Usa `"handheld"` si el ítem se ve mal al sostenerlo
- `"layer0"`: Textura vanilla predeterminada
- `"overrides"`: Array de mapeos de custom model data
- `"custom_model_data"`: El número que configurarás en ExecutableItems
- `"model"`: Ruta hacia tu archivo de modelo personalizado

:::tip Múltiples Texturas Personalizadas
Para añadir más texturas personalizadas para el mismo ítem, añade más entradas override:

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

### Paso 9: Crea el Archivo de Modelo Personalizado

1. Crea la carpeta: `assets/minecraft/models/item/diamond_pickaxe/`
2. Crea el archivo: `1.json` dentro de esa carpeta

Contenido de `1.json`:

```json
{
    "parent": "item/handheld",
    "textures": {
        "layer0": "item/custom_textures/custom_pickaxe"
    }
}
```

**Entendiendo la ruta de la textura:**

El valor `"layer0"` es una ruta relativa a `assets/minecraft/textures/`:
- Ruta: `item/custom_textures/custom_pickaxe`
- Ruta completa: `assets/minecraft/textures/item/custom_textures/custom_pickaxe.png`

:::danger Error Común: Ruta de Textura Incorrecta
El error más común es configurar la ruta equivocada en `layer0`. Verifica que:
1. La ruta coincide con tu estructura de carpetas
2. No incluyes la extensión `.png`
3. La ruta empieza desde dentro de la carpeta `textures/`
:::

### Paso 10: Empaqueta el Resource Pack

#### Para Windows (WinRAR/7-Zip):
1. Selecciona `pack.mcmeta` y la carpeta `assets`
2. Clic derecho → Añadir al archivo / Comprimir
3. Elige el formato `.zip`
4. Nómbralo `ExecutableItemsTexturePack.zip`

#### Para Mac/Linux:
1. Selecciona `pack.mcmeta` y la carpeta `assets`
2. Comprime a ZIP usando la compresión integrada
3. O colócalo en una carpeta y úsalo así para pruebas locales

![Creando el archivo ZIP](https://media.ssomar.com/m/docs-img-image-244.png)

![Cambiar al formato .ZIP](https://media.ssomar.com/m/docs-img-image-158.png)

### Paso 11: Instala el Resource Pack

1. Coloca el archivo `.zip` en `.minecraft/resourcepacks/`
2. Inicia Minecraft
3. Ve a Opciones → Paquetes de Recursos
4. Activa tu pack haciendo clic en la flecha

## Parte 4: Conectando ExecutableItems con la Textura

### Paso 12: Configura el Custom Model Data

Edita tu ExecutableItem:

```
/ei edit my_custom_pickaxe
```

Navega hasta la configuración de `customModelData` y ajústala para que coincida con tu override:

![Configuración de Custom Model Data](https://media.ssomar.com/m/docs-img-image-163.png)

Establece el valor en `1` (o el número que hayas usado en el override):

![Estableciendo el valor en 1](https://media.ssomar.com/m/docs-img-image-61.png)

**En el archivo de configuración, se ve así:**

```yaml
customModelData: 1
```

### Paso 13: Prueba tu Textura Personalizada

Date el ítem a ti mismo:

```
/ei give my_custom_pickaxe
```

¡Ahora deberías ver tu textura personalizada!

![Textura personalizada en el inventario](https://media.ssomar.com/m/docs-img-image-364.png)

![Textura personalizada al sostenerla](https://media.ssomar.com/m/docs-img-image-392.png)

## Solución de Problemas

| Problema | Solución |
|---------|----------|
| **La textura no aparece** | Verifica que todos los nombres de archivo estén en minúsculas |
| **Textura morada/negra** | Verifica que la ruta de `layer0` coincida con la ubicación de tu textura |
| **El pack no carga** | Verifica que `pack_format` coincida con tu versión de Minecraft |
| **Apariencia incorrecta del ítem** | Cambia `"generated"` a `"handheld"` en el parent del modelo |
| **El ítem se ve vanilla** | Verifica que `customModelData` en EI coincida con tu número de override |

## Consejos Avanzados

### Organizando Múltiples Texturas

Crea subcarpetas para diferentes tipos de ítems:

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

Actualiza tus rutas en consecuencia:
```json
"layer0": "item/custom_textures/weapons/sword_fire"
```

### Usando Modelos 3D

Para modelos 3D creados en [Blockbench](https://www.blockbench.net/):

1. Crea tu modelo en Blockbench
2. Exporta como "Java Block/Item"
3. Reemplaza el contenido de tu `1.json` con el modelo exportado
4. Asegúrate de que las rutas de textura coincidan con la estructura de tu pack

### Despliegue en Servidor

Para usar texturas personalizadas en un servidor, necesitarás alojar el resource pack en línea. Consulta nuestra [Guía de Subida de Texture Pack](./uploading-texture-pack.md) para instrucciones.

## Descargar Pack de Ejemplo

Si tienes problemas siguiendo los pasos, descarga este pack de ejemplo para ver la estructura correcta:

[Descargar ExecutableItemsTexturePackExample.zip](/img/ExecutableItemsTexturePackExample.zip)

## Recursos Adicionales

- [Minecraft Wiki: Resource Pack](https://minecraft.wiki/w/Resource_pack)
- [Minecraft Wiki: Model Format](https://minecraft.wiki/w/Model)
- [Historial de Versiones de Pack Format](https://minecraft.wiki/w/Pack_format)
- [Blockbench, Editor de Modelos 3D Gratuito](https://www.blockbench.net/)

---

¿Necesitas ayuda? ¡Únete a nuestra [comunidad de Discord](https://discord.gg/ExecutableItems) y pregunta en los canales de soporte!
