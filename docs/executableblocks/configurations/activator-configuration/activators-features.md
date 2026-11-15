---
description: >-
  These options are utilized to accomplish specific things to create simple to
  complex items
---
import CustomTag from '@site/src/components/CustomTag';
import GeneralActivatorsFeatures from '@site/docs/_partials/general-activators-features.md';
import BlockFeatures from '@site/docs/_partials/block-features.md';
import EntityFeatures from '@site/docs/_partials/entity-features.md';
import TargetPlayerFeatures from '@site/docs/_partials/target-player-features.md';
import TargetBlockFeatures from '@site/docs/_partials/target-block-features.md';
import PlayerFeatures from '@site/docs/_partials/player-features.md';
import OwnerFeatures from '@site/docs/_partials/owner-features.md';


# Activators features

All this features are inside the activator, as reminder the activators allow you to execute custom actions on your ExecutableBlock, it can have conditions, run commands, have cooldown, etc.

Premium features are labeled with the tag:  <CustomTag type="premium" />

## General features

<GeneralActivatorsFeatures />

## Features for the EB activators

<BlockFeatures />

<OwnerFeatures />

### worldConditions

* Info: You can use this conditions in all type of activators
* [World conditions](/tools-for-all-plugins-score/custom-conditions/world-conditions.md)

### placeholdersConditions

* Info: You can use this conditions in all type of activators
* [Placeholders conditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions.md)


## Features exclusive depending on type of activator

To make the features more understandable on where activators do they work, we will create 4 types of categories to group activators, so if one of the features say one of this categories then you'll know the feature works for all the activators on that category.  

* <CustomTag type="block_block" />: Describes activators where another block interacts with the ExecutableBlock. Abbreviaton \[B\_B]
  * BREAK\_BLOCK\_ABOVE\_THE\_EB
  * CROP\_PLACE\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_BREAK\_BLOCK\_ABOVE\_THE\_EB
  * PLAYER\_BREAK\_BLOCK\_UNDER\_THE\_EB
  * Etc, more information on [Activators info](list-of-the-activators)
* <CustomTag type="block_entity" />: Describes activators where an entity interacts with the ExecutableBlock. Abbreviaton \[B\_E]
  * ENTITY\_WALK\_ON <CustomTag type="premium" compact />
  * PROJECTILE\_HIT <CustomTag type="premium" compact />
  * Etc, more information on [Activators info](list-of-the-activators)
* <CustomTag type="block_player" />: Describes activators where a player interacts with the ExecutableBlock. Abbreviation \[B\_P]
  * PLAYER\_ALL\_CLICK\_ON
  * PLAYER\_BREAK
  * PLAYER\_BREAK\_BLOCK\_ABOVE\_THE\_EB
  * PLAYER\_BREAK\_BLOCK\_UNDER\_THE\_EB
  * PLAYER\_BRUSH\_BLOCK
  * PLAYER\_DEATH\_ON <CustomTag type="premium" compact />
  * PLAYER_EAT_ON
  * PLAYER_FALL_ON
  * PLAYER_JUMP_ON
  * PLAYER_LEFT_CLICK_ON
  * PLAYER_PLACE
  * PLAYER_PRESS_PLATE <CustomTag type="premium" compact />
  * PLAYER_RIGHT_CLICK_ON
  * PLAYER_SCROLL_DOWN_BY_TARGETING_THE_EB <CustomTag type="premium" compact />
  * PLAYER_SCROLL_UP_BY_TARGETING_THE_EB <CustomTag type="premium" compact />
  * PLAYER_SNEAK_ON
  * PLAYER_SPRINT_ON <CustomTag type="premium" compact />
  * PLAYER_WALK_ON
  * Etc, more information on [Activators info](list-of-the-activators)
* <CustomTag type="specific_activators" /> If there is a feature that contains different activators across the categories then its better for understanding creating a new temporal list, which will be mentioned on the feature. Abbreviation \[S\_A]  

## For \[B\_B] <CustomTag type="block_block" />

<TargetBlockFeatures />

## For \[B\_E] <CustomTag type="block_entity" />

<EntityFeatures />

## For \[B\_P] <CustomTag type="block_player" />

<PlayerFeatures />