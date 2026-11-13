---
description: >-
  Scopri come creare drop personalizzati con ExecutableItems: drop di entità e
  di blocchi usando attivatori, comandi EI e comandi vanilla.
source_hash: 53c8b7deae5be6f3
translated_at: '2026-11-13T12:07:23.064Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Drop personalizzati

:::danger
QUESTO TUTORIAL È PER EXECUTABLEITEMS, QUINDI **QUESTI DROP NON FUNZIONANO A LIVELLO GLOBALE**, FUNZIONANO SOLO SE HAI UN EXECUTABLEITEM NEL TUO INVENTARIO.

\
SE VUOI CREARE UN DROP PERSONALIZZATO GLOBALE USA **EXECUTABLEEVENTS**
:::

Se vuoi creare drop personalizzati, prima dobbiamo sapere di che tipo di drop si tratta. Spiegheremo entrambi:

## Drop delle entità

Usa l'attivatore PLAYER\_KILL\_ENTITY o PLAYER\_KILL\_PLAYER e nei comandi puoi usare:

* Comandi EI per far cadere gli item
  * DROPEXECUTABLEITEM
  * DROPEXECUTABLEBLOCK
  * DROPITEM
* Comandi vanilla per far cadere gli item
  * Un buon esempio è dare la testa del player
    * execute at %player% run summon item %target\_x\_int% %target\_y\_int% %target\_z\_int%  \{Item:\{id:"player\_head",Count:1b,tag:\{SkullOwner:"%target%"\\}\}\}

:::info
Non dimenticare che, se vuoi che questo comando non funzioni al 100%, puoi assegnargli delle probabilità! Controlla la wiki, è già spiegato ^^
:::

## Drop dei blocchi

Usa l'attivatore PLAYER\_BREAK\_BLOCK e nei comandi puoi usare:

* Comandi EI per far cadere gli item
  * DROPEXECUTABLEITEM
  * DROPEXECUTABLEBLOCK
  * DROPITEM
* Comandi vanilla per far cadere gli item
  * Comando vanilla per far cadere più di un item rotto (questo esempio ne dà 2 in più, puoi renderlo casuale usando al posto di "2" un placeholder RNG)
    * execute at %player% run summon minecraft\:item %block\_x\_int% %block\_y\_int% %block\_z\_int% \{Item:\{id:"minecraft:%block\_item\_material\_lower%",Count:2b\\}\}

:::info
Non dimenticare che, se vuoi che questo comando non funzioni al 100%, puoi assegnargli delle probabilità! Controlla la wiki, è già spiegato ^^
:::
