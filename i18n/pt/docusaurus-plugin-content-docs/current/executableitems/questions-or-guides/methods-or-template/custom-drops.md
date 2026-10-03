---
description: >-
  Aprenda a configurar drops personalizados de entidades e blocos no
  ExecutableItems, plugin do SPlugins, usando ativadores e comandos.
source_hash: 53c8b7deae5be6f3
translated_at: '2026-10-03T10:46:58.589Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Drops personalizados

:::danger
ESTE TUTORIAL É PARA O EXECUTABLEITEMS, ISSO SIGNIFICA QUE **ESSES DROPS NÃO FUNCIONAM GLOBALMENTE**, SÓ FUNCIONAM SE VOCÊ TIVER UM EXECUTABLEITEM NO SEU INVENTÁRIO.

\
SE QUISER CRIAR UM DROP PERSONALIZADO GLOBAL, USE O **EXECUTABLEVENTS**
:::

Se você quiser criar drops personalizados, primeiro precisamos saber qual tipo de drop. Ambos serão explicados:

## Drops de entidades

Use o ativador PLAYER\_KILL\_ENTITY ou PLAYER\_KILL\_PLAYER e, nos comandos, você pode usar:

* Comandos do EI para dropar os itens
  * DROPEXECUTABLEITEM
  * DROPEXECUTABLEBLOCK
  * DROPITEM
* Comandos vanilla para dropar os itens
  * Um bom exemplo disso seria dar a HEAD do PLAYER
    * execute at %player% run summon item %target\_x\_int% %target\_y\_int% %target\_z\_int%  \{Item:\{id:"player\_head",Count:1b,tag:\{SkullOwner:"%target%"\\}\}\}

:::info
Não se esqueça de que, se você quiser que esse comando não funcione 100% das vezes, você pode dar chances a eles! Basta consultar a wiki, isso já está explicado ^^
:::

## Drops de blocos

Use o ativador PLAYER\_BREAK\_BLOCK e, nos comandos, você pode usar:

* Comandos do EI para dropar os itens
  * DROPEXECUTABLEITEM
  * DROPEXECUTABLEBLOCK
  * DROPITEM
* Comandos vanilla para dropar os itens
  * Comando vanilla para dropar mais de um item quebrado (este exemplo dá 2 itens extras, você pode randomizar isso usando, em vez de "2", um Placeholder de RNG)
    * execute at %player% run summon minecraft\:item %block\_x\_int% %block\_y\_int% %block\_z\_int% \{Item:\{id:"minecraft:%block\_item\_material\_lower%",Count:2b\\}\}

:::info
Não se esqueça de que, se você quiser que esse comando não funcione 100% das vezes, você pode dar chances a eles! Basta consultar a wiki, isso já está explicado ^^
:::
