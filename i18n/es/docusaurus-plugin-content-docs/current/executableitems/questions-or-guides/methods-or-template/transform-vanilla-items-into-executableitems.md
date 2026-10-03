---
description: >-
  Guía de SPlugins para transformar ítems vanilla en ExecutableItems
  personalizados usando ExecutableItems (versión premium).
source_hash: b79db1c5ed1a524c
translated_at: '2026-10-03T10:34:23.498Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Transformar ítems vanilla en ExecutableItems

:::info
Antes de nada tienes que saber que este método solo está disponible en la VERSIÓN PREMIUM
:::

![](https://media.ssomar.com/m/docs-img-executable-items-color3.png)

### Vamos a crearlo, primero decide qué ítem vanilla quieres transformar.

* Para este tutorial será el **diamond\_sword**

![](https://media.ssomar.com/m/docs-img-image-96.png)

### **Ahora, tenemos que crear el ítem por el que será reemplazado**

* Para crear un ítem escribe el comando `/ei create <id>`

![](https://media.ssomar.com/m/docs-img-image-194.png)

* Cambia el Material del ítem al ítem vanilla que vas a cambiar (en este caso diamond\_sword)

![](https://media.ssomar.com/m/docs-img-image-168.png)

* Vamos a crear un activador

![](https://media.ssomar.com/m/docs-img-image-92.png)

* Para este ejemplo será `PLAYER_CLICK_ON_ENTITY`

![](https://media.ssomar.com/m/docs-img-image-213.png)

* Detailed click to left, para que solo funcione al golpear

![](https://media.ssomar.com/m/docs-img-image-272.png)

* Y en commands pondré esto:

```yaml
playerCommands:
- SENDMESSAGE §6This is not a normal sword..
- PARTICLE FLAME 50 0.5 0
entityCommands:
- BURN 4
```

* Así que al golpear, las espadas dirán _**This is not a normal sword**_ y la entidad arderá durante 4 segundos
* ¡OK! Ya tenemos el ítem listo, puedes probarlo si quieres (para asegurarte de que el ítem de EI funciona bien). Ahora tenemos que hacer la... ¡transformación! 😈😈

### Transformando el ítem vanilla en el EI creado

* Para hacer esto, primero tienes que ir a editar el yml de tu ítem.

:::info
Está en plugins/ExecutableItems/items/\<itemID>.yml
:::

![](https://media.ssomar.com/m/docs-img-image-195.png)

* Ábrelo y añade estas líneas. (deben estar sin sangría/espacios en el lado izquierdo)

```yaml
recognitions:
- MATERIAL
```

* Ahora ExecutableItems pensará que cualquier ítem que tenga el mismo material que el ítem de EI (el que acabamos de crear) es el ítem de EI.
* Guarda el \<item>.yml, entra al juego y escribe `/ei reload`

### Vamos a probarlo

* Si hicimos bien todos los pasos, ahora tenemos que coger una diamond\_sword vanilla, acercarnos a una vaca y golpearla -> Debería arder durante 4 segundos, aparecerá alguna partícula y recibirás un mensaje.

![](https://media.ssomar.com/m/docs-img-image-245.png)

![](https://media.ssomar.com/m/docs-img-image-105.png)

![](https://media.ssomar.com/m/docs-img-image-73.png)![](https://media.ssomar.com/m/docs-img-image-181.png)

* ¡Probado y funciona! ¡Sí!!

:::info
Cualquier duda puedes preguntarla en discord ^^

Método por Special70
:::
