---
description: >-
  Aprende a crear drops personalizados con ExecutableItems en SPlugins, tanto de
  entidades como de bloques, usando comandos EI o vanilla.
source_hash: 53c8b7deae5be6f3
translated_at: '2026-10-03T10:43:41.233Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Drops personalizados

:::danger
ESTE TUTORIAL ES PARA EXECUTABLEITEMS, ESO SIGNIFICA QUE **ESTOS DROPS NO FUNCIONAN DE FORMA GLOBAL**, SOLO FUNCIONAN SI TIENES UN EXECUTABLEITEM EN TU INVENTARIO.

\
SI QUIERES CREAR UN DROP PERSONALIZADO GLOBAL USA **EXECUTABLEVENTS**
:::

Si quieres crear drops personalizados, primero necesitamos saber qué tipo de drop. Se explicarán ambos:

## Drops de entidades

Usa el activador PLAYER\_KILL\_ENTITY o PLAYER\_KILL\_PLAYER y en los comandos puedes usar:

* Comandos EI para soltar los ítems
  * DROPEXECUTABLEITEM
  * DROPEXECUTABLEBLOCK
  * DROPITEM
* Comandos vanilla para soltar los ítems
  * Un buen ejemplo de esto sería dar la CABEZA del PLAYER
    * execute at %player% run summon item %target\_x\_int% %target\_y\_int% %target\_z\_int%  \{Item:\{id:"player\_head",Count:1b,tag:\{SkullOwner:"%target%"\\}\}\}

:::info
¡No olvides que si quieres que este comando no funcione al 100% puedes darle probabilidades! Solo revisa la wiki, eso ya está explicado ^^
:::

## Drops de bloques

Usa el activador PLAYER\_BREAK\_BLOCK y en los comandos puedes usar:

* Comandos EI para soltar los ítems
  * DROPEXECUTABLEITEM
  * DROPEXECUTABLEBLOCK
  * DROPITEM
* Comandos vanilla para soltar los ítems
  * Comando vanilla para soltar más de un ítem al romper (este ejemplo da 2 ítems más, puedes aleatorizar esto usando en lugar de "2" un placeholder RNG)
    * execute at %player% run summon minecraft\:item %block\_x\_int% %block\_y\_int% %block\_z\_int% \{Item:\{id:"minecraft:%block\_item\_material\_lower%",Count:2b\\}\}

:::info
¡No olvides que si quieres que este comando no funcione al 100% puedes darle probabilidades! Solo revisa la wiki, eso ya está explicado ^^
:::
