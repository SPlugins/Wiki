import CustomTag from '@site/src/components/CustomTag';

# Armor Trims 

<CustomTag type="version" version="1.20" />
Armor trims are a Minecraft feature that allows you to customize armor appearance. ExecutableItems supports armor trims, but requires proper configuration and dependencies.

## Creating an Item with Armor Trims

There are two methods to create armor with trims in ExecutableItems:

### Method 1: Copy from Existing Item (Recommended)

This is the easiest way to create an ExecutableItem with armor trims:

1. **In-game**: Apply the armor trim you want to an armor piece using the Smithing Table or Build the item with [MCStacker](https://mcstacker.net/?cmd=give)
2. **Hold the trimmed armor** in your hand
3. **Run the command**:
   ```
   /ei create <item_id>
   ```
   Replace `<item_id>` with your desired item ID (e.g., `my_trimmed_chestplate`)

4. The ExecutableItem will be created with the armor trim data automatically copied


### Method 2: Manual YAML Configuration

For advanced users, you can manually configure armor trims in the YAML file:

```yaml
material: DIAMOND_CHESTPLATE
displayName: '&6Royal Chestplate'
lore:
- '&7A majestic piece of armor'
- '&7with golden trim'

# Armor trim configuration
armorTrim:
  enableArmorTrim: true  # Required, false by default
  pattern: COAST  # The trim pattern
  trimMaterial: GOLD  # The trim material
```

Trim Patterns: [Trim patterns](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimPattern.html)

Trim Materials: [Trim material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimMaterial.html)

## Troubleshooting

### Wrong Trim Applied

**Problem**: The trim appears different than expected.

**Solutions**:
1. ✅ Check the YAML for typos in pattern/material names
2. ✅ Remember that trim appearance varies by armor material
3. ✅ Use Method 1 to copy the exact trim you want

### Trim Patterns Not Available

**Problem**: Certain trim patterns aren't working.

**Solutions**:
1. ✅ Check that the pattern is available in your Minecraft version
2. ✅ Update to the latest server version


## Related Documentation

- [Item Configuration](/executableitems/configurations/item-configuration/basic-configuration)
- [Minecraft Wiki - Armor Trim](https://minecraft.wiki/w/Armor_Trim)

## Additional Tips

### Creating Full Armor Sets

To create a matching trimmed armor set:

1. Apply the same trim to all four armor pieces in-game
2. Hold each piece and run `/ei create <helmet_id>`, `/ei create <chestplate_id>`, etc.
3. All pieces will maintain the same trim pattern and material

### Combining with Other Features

Armor trims work alongside all other ExecutableItems features:
- ✅ Attribute modifiers
- ✅ Custom enchantments
- ✅ Activators (PLAYER_ALL_CLICK, etc.)
- ✅ Usage requirements
- ✅ Custom durability