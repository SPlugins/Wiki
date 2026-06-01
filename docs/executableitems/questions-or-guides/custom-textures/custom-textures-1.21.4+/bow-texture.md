# Bow Texture

This page serves as a reference guide on making bow textures for 1.21.4+

Texture files provided by `@zjeber`
  
You're required to read the general items guide for 1.21.4+. 

## File Path Structure
```
│   pack.mcmeta
│
└───assets
    └───minecraft
        ├───items
        │       bow.json
        │
        ├───models
        │   └───item
        │           luk_artemidy.json
        │           luk_artemidy_pulling_0.json
        │           luk_artemidy_pulling_1.json
        │           luk_artemidy_pulling_2.json
        │
        └───textures
            └───item
                    luk_artemidy.png
                    luk_artemidy_pulling_0.png
                    luk_artemidy_pulling_1.png
                    luk_artemidy_pulling_2.png
```

## bow.json
```
{
  "model": {
    "type": "minecraft:select",
    "property": "minecraft:custom_model_data",
    "fallback": {
      "type": "minecraft:condition",
      "property": "minecraft:using_item",
      "on_false": {
        "type": "minecraft:model",
        "model": "minecraft:item/bow"
      },
      "on_true": {
        "type": "minecraft:range_dispatch",
        "property": "minecraft:use_duration",
        "scale": 0.05,
        "fallback": {
          "type": "minecraft:model",
          "model": "minecraft:item/bow_pulling_0"
        },
        "entries": [
          {
            "threshold": 0.65,
            "model": {
              "type": "minecraft:model",
              "model": "minecraft:item/bow_pulling_1"
            }
          },
          {
            "threshold": 0.9,
            "model": {
              "type": "minecraft:model",
              "model": "minecraft:item/bow_pulling_2"
            }
          }
        ]
      }
    },
    "cases": [
      {
        "when": "luk_artemidy",
        "model": {
          "type": "minecraft:condition",
          "property": "minecraft:using_item",
          "on_false": {
            "type": "minecraft:model",
            "model": "minecraft:item/luk_artemidy"
          },
          "on_true": {
            "type": "minecraft:range_dispatch",
            "property": "minecraft:use_duration",
            "scale": 0.05,
            "fallback": {
              "type": "minecraft:model",
              "model": "minecraft:item/luk_artemidy_pulling_0"
            },
            "entries": [
              {
                "threshold": 0.65,
                "model": {
                  "type": "minecraft:model",
                  "model": "minecraft:item/luk_artemidy_pulling_1"
                }
              },
              {
                "threshold": 0.9,
                "model": {
                  "type": "minecraft:model",
                  "model": "minecraft:item/luk_artemidy_pulling_2"
                }
              }
            ]
          }
        }
      }
    ]
  }
}
```

## luk_artemidy.json
```
{
  "parent": "item/generated",
  "textures": {
    "layer0": "item/luk_artemidy"
  },
  "display": {
    "thirdperson_righthand": {
      "rotation": [-80, 260, -40],
      "translation": [-1, -2, 2.5],
      "scale": [0.9, 0.9, 0.9]
    },
    "thirdperson_lefthand": {
      "rotation": [-80, -280, 40],
      "translation": [-1, -2, 2.5],
      "scale": [0.9, 0.9, 0.9]
    },
    "firstperson_righthand": {
      "rotation": [0, -90, 25],
      "translation": [1.13, 3.2, 1.13],
      "scale": [0.68, 0.68, 0.68]
    },
    "firstperson_lefthand": {
      "rotation": [0, 90, -25],
      "translation": [1.13, 3.2, 1.13],
      "scale": [0.68, 0.68, 0.68]
    }
  }
}
```
## luk_artemidy_pulling_0.json
```
{
  "parent": "item/generated",
  "textures": {
    "layer0": "item/luk_artemidy_pulling_0"
  },
  "display": {
    "thirdperson_righthand": {
      "rotation": [-80, 260, -40],
      "translation": [-1, -2, 2.5],
      "scale": [0.9, 0.9, 0.9]
    },
    "thirdperson_lefthand": {
      "rotation": [-80, -280, 40],
      "translation": [-1, -2, 2.5],
      "scale": [0.9, 0.9, 0.9]
    },
    "firstperson_righthand": {
      "rotation": [0, -90, 25],
      "translation": [1.13, 3.2, 1.13],
      "scale": [0.68, 0.68, 0.68]
    },
    "firstperson_lefthand": {
      "rotation": [0, 90, -25],
      "translation": [1.13, 3.2, 1.13],
      "scale": [0.68, 0.68, 0.68]
    }
  }
}
```
## luk_artemidy_pulling_1.json
```
{
  "parent": "item/generated",
  "textures": {
    "layer0": "item/luk_artemidy_pulling_1"
  },
  "display": {
    "thirdperson_righthand": {
      "rotation": [-80, 260, -40],
      "translation": [-1, -2, 2.5],
      "scale": [0.9, 0.9, 0.9]
    },
    "thirdperson_lefthand": {
      "rotation": [-80, -280, 40],
      "translation": [-1, -2, 2.5],
      "scale": [0.9, 0.9, 0.9]
    },
    "firstperson_righthand": {
      "rotation": [0, -90, 25],
      "translation": [1.13, 3.2, 1.13],
      "scale": [0.68, 0.68, 0.68]
    },
    "firstperson_lefthand": {
      "rotation": [0, 90, -25],
      "translation": [1.13, 3.2, 1.13],
      "scale": [0.68, 0.68, 0.68]
    }
  }
}
```
## luk_artemidy_pulling_2.json
```
{
  "parent": "item/generated",
  "textures": {
    "layer0": "item/luk_artemidy_pulling_2"
  },
  "display": {
    "thirdperson_righthand": {
      "rotation": [-80, 260, -40],
      "translation": [-1, -2, 2.5],
      "scale": [0.9, 0.9, 0.9]
    },
    "thirdperson_lefthand": {
      "rotation": [-80, -280, 40],
      "translation": [-1, -2, 2.5],
      "scale": [0.9, 0.9, 0.9]
    },
    "firstperson_righthand": {
      "rotation": [0, -90, 25],
      "translation": [1.13, 3.2, 1.13],
      "scale": [0.68, 0.68, 0.68]
    },
    "firstperson_lefthand": {
      "rotation": [0, 90, -25],
      "translation": [1.13, 3.2, 1.13],
      "scale": [0.68, 0.68, 0.68]
    }
  }
}
```