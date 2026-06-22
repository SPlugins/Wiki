# Animated textures

<iframe width="560" height="315" src="https://www.youtube.com/embed/IAAj2a2dBQo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

📦 [Download AnimatedTextures1.zip](/img/AnimatedTextures1.zip)

:::info
This tutorial requires previous knowledge of custom textures. Check the [General Items](general-items.md) guide for basic texture pack setup before proceeding.
:::

## Idea

* I'll make a rainbow sword, it will have 6 states, so 6 textures, each one moving a little the rainbow so it looks like it has a rainbow animation

### Textures

The texture size is something important because we must do some maths after creating them, I will make them 16x16 each one.

* They will have a order, so take care your animation makes sense for you.

![](https://media.ssomar.com/m/docs-img-image-373.png)

In this case they are 16x16, we have to make a texture file where they all are in a row, so it will have 16x(6x16) -> 16x96 , then put all them in row in correct order and it will look like this

![](https://media.ssomar.com/m/docs-img-image-233.png)

### Files

* Create your admin json file of the sword, then link it to the sub-admin, and when that sub-admin links the texture, you will have to add a new file, that will have a extension of **mcmeta** (if it doesn't have it, it won't work)

```json
{
	"animation":
		{"frametime": 4
	}
}
```

:::info
`frametime` controls how long each frame displays (in game ticks). With `frametime: 4`, each frame displays for 4 ticks. Since we have 6 frames, the full animation takes 24 ticks (1.2 seconds). Lower values = faster animation, higher values = slower animation.
:::

:::warning
The name of the file .mcmeta should be equals as the name of the png texture, so it will look like this
:::

![](https://media.ssomar.com/m/docs-img-image-128.png)

:::info
Both files must be together, so if the animatedtexture**.png** is inside "customtextures" folder, the animatedtexture.png**.mcmeta** must be there too
:::

* then just save your texture pack and test.

![](https://media.ssomar.com/m/docs-img-2022-07-15-16-52-08.gif)

* And that's it, make the thing you would want, it is the same for blocks if you want animated blocks. I hope you understood everything and if have any question (that wasn't explained in the last tutorials) feel free to ask it in Discord. Have a nice day !!
