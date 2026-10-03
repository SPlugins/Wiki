---
description: >-
  Guía de SPlugins (ExecutableItems) para crear un activador basado en
  probabilidad RNG que esquive golpes aleatoriamente.
source_hash: e2c9077e189d3702
translated_at: '2026-10-03T10:34:00.680Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Activador de probabilidad RNG

Bueno, bueno, hace algún tiempo quería una Armor NINJA y la idea era.. ok, algunos golpes se esquivan y otros no, pero.. ¿ese "esquivar" cómo se hace?, bueno, después de pensarlo mucho tiempo surgió este método, vamos a explicarlo.

:::info
Este tutorial estará relacionado con el ejemplo mencionado arriba, pero la idea es que tú captes la esencia del método y lo apliques como quieras.
:::

### Vamos a crear el ítem

:::info
El **ítem** en sí necesita la versión premium + PlaceholderAPI + RNG Expansion
:::

![](https://media.ssomar.com/m/docs-img-image-204.png)

* Después de añadir el nombre, el lore y el material..

![](https://media.ssomar.com/m/docs-img-image-237.png)

### Vamos a crear el activador que hará la magia

* Primero, la idea es hacer un RECEIVE_HIT_BY_GLOBAL y cancelar el evento.

<img src="https://media.ssomar.com/m/docs-img-imgur-ywpudsl.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-qj9rwav.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-tpgpdss.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-yi878ll.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-4wtkxti.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-bw6zczo.png" alt="" />

* Entonces ahora, está cancelando CADA golpe recibido, para que a veces cancele y a veces no, tenemos que hacer que el activador en sí se ejecute solo a veces, así que añadiremos una condición relacionada con RNG, la idea es: un número aleatorio entre 1 y 4, si coincide con 1, el activador se ejecutará, tiene una probabilidad del 25% (esa es la probabilidad que queremos), vamos a añadirla.
*

    <img src="https://media.ssomar.com/m/docs-img-imgur-riqfiao.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-6q81hpl.png" alt="" />

PLAYER_NUMBER

![](https://media.ssomar.com/m/docs-img-image-178.png)

Y en la primera parte añadiremos "%rng_1,4%" (esto requiere PlaceholderAPI y RNG Expansion)

![](https://media.ssomar.com/m/docs-img-image-111.png)

EQUALS

![](https://media.ssomar.com/m/docs-img-image-175.png)

"1" (porque queremos que se active solo si el número aleatorio entre 1 y 4 coincide con 1)

![](https://media.ssomar.com/m/docs-img-image-224.png)

Y el ítem está listo

:::info
PARA FINES DE DEPURACIÓN AÑADIRÉ QUE EL ACTIVADOR DIGA "dodge" Y SI EL PLACEHOLDER NO COINCIDE DIGA "didn't dodge".\
\
Así, una vez lo probemos, sabremos si está funcionando correctamente.
:::

![](https://media.ssomar.com/m/docs-img-image-378.png)

Y funcionó, el activador solo se ejecuta 1 de cada 4 veces.

Si tienes alguna pregunta, siéntete libre de hacerla en el discord de EI, que tengas un buen día :P

## Cómo establecer los valores correctos para obtener el porcentaje que quieres

<iframe width="560" height="315" src="https://www.youtube.com/embed/jXTDlqoE8dc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
