# Per states texture

First of all, to better understanding this tutorial you must read first [**General Items**](general-items.md) because I will suppose you already know some basic stuff of Texture pack, after telling this, let's begin.

<iframe width="560" height="315" src="https://www.youtube.com/embed/tfiEoQG_qWI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/9r7n3omVNnY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Commentary

* As I said, I'll suppose you know basic stuff, so, this tutorial will only focus on the bow or items with per states texture itself, I won't explain how to create a texture pack, where the items go, etc etc, just the state mechanic itself.

## Bow

### Texture

* First of all, if you pick up a vanilla bow and draw it you will see it has 4 states, so, we will need 4 textures. Let's do it (how to make the texture is explained in [**General Items**](general-items.md))

![](https://media.ssomar.com/m/docs-img-image-248.png)

* So we have the texture, now let's add it to the bow.

### Json

* The admin one

```json
{
    "parent": "item/generated",
    "textures": {
        "layer0": "item/bow"
    },
    "display": {
        "thirdperson_righthand": {
            "rotation": [ -80, 260, -40 ],
            "translation": [ -1, -2, 2.5 ],
            "scale": [ 0.9, 0.9, 0.9 ]
        },
        "thirdperson_lefthand": {
            "rotation": [ -80, -280, 40 ],
            "translation": [ -1, -2, 2.5 ],
            "scale": [ 0.9, 0.9, 0.9 ]
        },
        "firstperson_righthand": {
            "rotation": [ 0, -90, 25 ],
            "translation": [ 1.13, 3.2, 1.13],
            "scale": [ 0.68, 0.68, 0.68 ]
        },
        "firstperson_lefthand": {
            "rotation": [ 0, 90, -25 ],
            "translation": [ 1.13, 3.2, 1.13],
            "scale": [ 0.68, 0.68, 0.68 ]
        }
    },

    "overrides": [
        {
            "predicate": {
                "pulling": 1
            },
            "model": "item/bow_pulling_0"
        },
        {
            "predicate": {
                "pulling": 1,
                "pull": 0.65
            },
            "model": "item/bow_pulling_1"
        },
        {
            "predicate": {
                "pulling": 1,
                "pull": 0.9
            },
            "model": "item/bow_pulling_2"
        },
        {
            "predicate": {
                "custom_model_data": 3
            },
            "model": "item/bow/custom_bow"
        },
        {
            "predicate": {
                "custom_model_data": 3,
                "pulling": 1
            },
            "model": "item/bow/custom_bow_pulling_0"
        },
        {
            "predicate": {
                "custom_model_data": 3,
                "pulling": 1,
                "pull": 0.65
            },
            "model": "item/bow/custom_bow_pulling_1"
        },
        {
            "predicate": {
                "custom_model_data": 3,
                "pulling": 1,
                "pull": 0.9
            },
            "model": "item/bow/custom_bow_pulling_2"
        }
    ]
}
```

* The sub admin ones

#### 1th

```json
{
	"parent": "item/handheld",
	"textures": {
	  "layer0": "item/bow/normalstate"
	}
}
```

#### 2nd

```json
{
	"parent": "item/handheld",
	"textures": {
	  "layer0": "item/bow/1state"
	}
}
```

#### and so on..

:::info
I'll repeat, you have to know basic stuff of retexturing to know what I am talking about, this requires some experience before. I suggest you to read [**General Items**](general-items.md) if you don't understand anything here.
:::

:::info
Remember !

The parent handheld is the basic handheld when you hold an item like a diamond, if you want it to hold it normally like a bow you should use item/generated.

As it was said "it requires previous knowledge" -> and don't forget you can use this same tip to apply parents that don't belong here for example using as parent "item/shield"
:::

### Let's test it

* After doing everything, save the jsons, save the texture in the correct folders, and give it to yourself in game + put the texture pack on. 

![We got 'em 😎😎](https://media.ssomar.com/m/docs-img-image-112.png)

### Pulling states is working?

![It is 😎😎😎😎](https://media.ssomar.com/m/docs-img-image-219.png)

* That's all, if have any question feel free to ask in the discord. Have a nice day

## Shield

This is the default json shield item + a text with the custom model data part

```
{
    "parent": "builtin/entity",
    "gui_light": "front",
    "textures": {
        "particle": "block/dark_oak_planks"
    },
    "display": {
        "thirdperson_righthand": {
            "rotation": [ 0, 90, 0 ],
            "translation": [ 10, 6, -4 ],
            "scale": [ 1, 1, 1 ]
        },
        "thirdperson_lefthand": {
            "rotation": [ 0, 90, 0 ],
            "translation": [ 10, 6, 12 ],
            "scale": [ 1, 1, 1 ]
        },
        "firstperson_righthand": {
            "rotation": [ 0, 180, 5 ],
            "translation": [ -10, 2, -10 ],
            "scale": [ 1.25, 1.25, 1.25 ]
        },
        "firstperson_lefthand": {
            "rotation": [ 0, 180, 5 ],
            "translation": [ 10, 0, -10 ],
            "scale": [ 1.25, 1.25, 1.25 ]
        },
        "gui": {
            "rotation": [ 15, -25, -5 ],
            "translation": [ 2, 3, 0 ],
            "scale": [ 0.65, 0.65, 0.65 ]
        },
        "fixed": {
            "rotation": [ 0, 180, 0 ],
            "translation": [ -4.5, 4.5, -5],
            "scale":[ 0.55, 0.55, 0.55]
        },
        "ground": {
            "rotation": [ 0, 0, 0 ],
            "translation": [ 2, 4, 2],
            "scale":[ 0.25, 0.25, 0.25]
        }
    },
    "overrides": [
      {"predicate":
           {"blocking":1},
                "model": 
                    "item/shield_blocking"},
      {"predicate": 
          {"custom_model_data":2},
               "model": 
                   "item/shield/shield2"},
      {"predicate": 
          {"custom_model_data":2,
               "blocking":1},
                    "model": "item/shield/shield2_blocking"}
    ]
}

```

This will make the shield to apply the shield2 item state as default state with CustomModelData 2 and if its CustomModelData 2 and blocking, the shield2\_blocking item state will be applied.

shield2 and shield2\_blocking are json of items, you can either retexture the same shield or create one custom with external programs.
