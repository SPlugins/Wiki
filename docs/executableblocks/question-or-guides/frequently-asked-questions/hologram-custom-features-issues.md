# Hologram won't display item icons

Try finding this option in SCore's config.yml

```yml
hologramsPlugin: NONE # The holograms plugin you want to use. By default None , it uses the vanilla holograms. You can use CMI, HOLOGRAPHIC_DISPLAYS or DECENT_HOLOGRAMS
```

You have to manually set what option SCore/ExecutableBlocks would use when creating holograms. For example, `#ICON: DIAMOND` will not work if the `hologramsPlugin` value is NONE. It has to be DECENT_HOLOGRAMS for example