---
description: >-
  Opsi-opsi ini dipakai untuk melakukan hal-hal tertentu guna membuat item
  sederhana hingga kompleks di plugin ExecutableItems.
source_hash: c1b2157347497341
translated_at: '2026-11-13T17:48:06.919Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';
import GeneralActivatorsFeatures from '@site/docs/_partials/general-activators-features.md';
import BlockFeatures from '@site/docs/_partials/block-features.md';
import EntityFeatures from '@site/docs/_partials/entity-features.md';
import TargetPlayerFeatures from '@site/docs/_partials/target-player-features.md';
import PlayerFeatures from '@site/docs/_partials/player-features.md';
import TargetItemFeatures from '@site/docs/_partials/target-item-features.md';
import CommandFeatures from '@site/docs/_partials/command-features.md';
import DropFeatures from '@site/docs/_partials/drop-features.md';
import EffectFeatures from '@site/docs/_partials/effect-features.md';
import DamageCauseFeatures from '@site/docs/_partials/damagecause-features.md';
import DelayFeatures from '@site/docs/_partials/delay-features.md';
import ClickFeatures from '@site/docs/_partials/click-features.md';
import InputFeatures from '@site/docs/_partials/input-features.md';
import TypeTargetFeatures from '@site/docs/_partials/typetarget-features.md';


# Fitur aktivator

Semua fitur ini berada di dalam aktivator. Sebagai pengingat, aktivator memungkinkan Anda menjalankan aksi kustom pada ExecutableItem Anda: aktivator dapat memiliki kondisi, menjalankan perintah, memiliki cooldown, dll.

Fitur premium ditandai dengan tag:  <CustomTag type="premium" />

## Fitur umum sebuah aktivator

<GeneralActivatorsFeatures />

## Fitur untuk aktivator EI

### Detailed slots

* Info: Daftar nilai integer yang mewakili slot inventaris tempat aktivator dapat bekerja. Artinya, jika event terjadi di slot yang tidak ada dalam daftar ini, aktivator tidak akan dipicu. 

![](https://media.ssomar.com/m/docs-img-slots-info.png)
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    detailedSlots:
  - -1 # Slot for mainhand, this is not a static slot but having it on mainhand
  - 40 # This is a static slot, it represents the offhand slot.
```

### Auto update item

* Info: Fitur aktivator ini membuat item diperbarui sesuai salah satu fitur dalam daftar. Hati-hati! Fitur ini mungkin tidak diperlukan, tergantung pada apa yang Anda inginkan. Ada hal-hal yang diperbarui secara otomatis, misalnya perintah pada aktivator, kondisi, cooldown, dll. diperbarui secara otomatis tanpa fitur ini. 
* Fitur ini terutama menargetkan aspek visual item. Jadi, jika Anda pernah membuat ExecutableItem dengan id\:ex\_sword dengan display name "\&dExcalibur" lalu membagikan item ini ke semua pemain, dan sekarang Anda ingin semua ExecutableItem "ex\_sword" memiliki display name baru "\&eEpic Sword", maka Anda perlu mengaktifkan fitur ini pada salah satu aktivator item tersebut. Aktifkan fitur (autoUpdateItem) + fitur pembaruan nama (updateName).
* Agar penjelasannya jelas, fitur ini akan menimpa nilai saat ini sesuai opsi yang Anda aktifkan dengan nilai terkini dari file config, dan hanya digunakan untuk fitur visual. Fitur ini tidak diperlukan untuk perubahan umum yang tidak melibatkan opsi-opsi fitur ini.
  * `autoUpdateItem`: Nilai boolean yang menunjukkan apakah fitur ini aktif atau tidak untuk aktivator.
  * `updateName`: Nilai boolean untuk memperbarui display name ExecutableItem. Jika true, display name item saat ini akan ditimpa dengan nama item terkini/terbaru yang ditetapkan di file config ExecutableItem.
  * `updateLore`: Nilai boolean untuk memperbarui lore ExecutableItem. Jika true, lore item saat ini akan ditimpa dengan lore terkini/terbaru yang ditetapkan di file config ExecutableItem.
  * `updateDurability`: Nilai boolean untuk memperbarui durability saat ini dari ExecutableItem. Jika true, durability item saat ini akan ditimpa dengan durability terkini/terbaru yang ditetapkan di file config ExecutableItem.
  * `updateAttributes`: Nilai boolean untuk memperbarui semua attribute ExecutableItem. Jika true, attribute item saat ini akan ditimpa dengan attribute terkini/terbaru yang ditetapkan di file config ExecutableItem.
  * `updateEnchants`: Nilai boolean untuk memperbarui enchantment ExecutableItem. Jika true, enchantment item saat ini akan ditimpa dengan enchantment terkini/terbaru yang ditetapkan di file config ExecutableItem.
  * `updateCustomModelData`: Nilai boolean untuk memperbarui nilai custom model data ExecutableItem. Jika true, custom model data item saat ini akan ditimpa dengan nilai customModelData terkini/terbaru yang ditetapkan di file config ExecutableItem.
  * `updateArmorSettings`: Nilai boolean untuk memperbarui pengaturan armor ExecutableItem. Jika true, pengaturan armor item saat ini akan ditimpa dengan pengaturan armor terkini/terbaru yang ditetapkan di file config ExecutableItem. Contoh: (warna armor)
  * `updateMaterial`: Nilai boolean untuk memperbarui material ExecutableItem. Jika true, material item saat ini akan ditimpa dengan material terkini/terbaru yang ditetapkan di file config ExecutableItem.
  * `updateHiders`: Nilai boolean untuk memperbarui konfigurasi hider ExecutableItem. Jika true, konfigurasi hiders saat ini akan ditimpa dengan pengaturan hiders terkini/terbaru yang ditetapkan di file config ExecutableItem.
  * `updateEquippable`: Nilai boolean untuk memperbarui konfigurasi hider ExecutableItem. Jika true, komponen equippable item saat ini akan ditimpa dengan pengaturan equippable terkini/terbaru yang ditetapkan di file config ExecutableItem.
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    autoUpdateItem: false
    updateName: false
    updateLore: false
    updateDurability: false
    updateAttributes: false
    updateEnchants: false
    updateCustomModelData: false
    updateArmorSettings: false
    updateMaterial: false
    updateHiders: false
    updateEquippable: false
```

<PlayerFeatures />

### worldConditions

* Info: Anda dapat menggunakan kondisi ini di semua tipe aktivator
* [Kondisi dunia](/tools-for-all-plugins-score/custom-conditions/world-conditions.md)

### placeholdersConditions

* Info: Anda dapat menggunakan kondisi ini di semua tipe aktivator
* [PlaceholdersConditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions.md)

### itemConditions

* Info: Anda dapat menggunakan kondisi ini di semua tipe aktivator
* [Kondisi item](/tools-for-all-plugins-score/custom-conditions/item-conditions.md)


### otherEICooldowns

* Info: Fitur ini memungkinkan penerapan cooldown pemain pada ExecutableItem tertentu dan, secara opsional, aktivator tertentu. 
  * `executableItem`: ID ExecutableItem yang ingin Anda beri cooldown.
  * `activators`: Daftar string yang merupakan ID aktivator yang ingin Anda pengaruhi pada ExecutableItem yang ditentukan dengan cooldown. Jika tidak ada yang dipilih, cooldown akan diterapkan ke semua aktivator ExecutableItem yang ditentukan.
  * `cooldown`: Nilai integer yang menjadi lamanya cooldown yang akan diterapkan.
  * `isCooldownInTicks`: Nilai boolean yang menunjukkan apakah nilai cooldown dalam detik atau tick. (20 tick = 1 detik)
* Tips:
  * Anda dapat menentukan ExecutableItem yang menjalankan fitur ini sendiri. Misalnya, jika Anda ingin sebuah aktivator menerapkan cooldown ke aktivator lain pada item yang sama.
  * Ide lain adalah menerapkan cooldown ke semua item terkait damage jika Anda menggunakan salah satunya.
  * Contoh lain adalah memakai fitur ini agar pemain dapat memilih salah satu dari beberapa ExecutableItem berbeda. Saat pemain memilih satu dan memicunya, mereka tidak dapat menggunakan item yang dipilih tersebut karena sedang cooldown, dan juga tidak dapat menggunakan item lainnya karena item-item itu pun sedang cooldown.
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    otherEICooldowns:
      cd1: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns list
        executableItem: test 
        activators: 
        - activator0 
        cooldown: 20 
        isCooldownInTicks: false
      cd0: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns
        executableItem: swordSharpness
        activators: [] 
        cooldown: 10
        isCooldownInTicks: false
```


## Fitur eksklusif berdasarkan tipe aktivator

Agar lebih mudah dipahami pada aktivator mana saja fitur-fitur ini bekerja, kami akan membuat 4 tipe kategori untuk mengelompokkan aktivator. Jadi, jika salah satu fitur menyebutkan salah satu kategori ini, Anda akan tahu bahwa fitur tersebut bekerja untuk semua aktivator dalam kategori itu.  

* <CustomTag type="player_block" />: Menjelaskan aktivator yang melibatkan pemain yang memicu ExecutableItem dan sebuah blok yang terlibat dalam aktivator. Singkatan \[P\_B]
  * PLAYER\_ALL\_CLICK (dengan fitur typeTarget: ONLY\_BLOCK)
  * PLAYER\_BLOCK\_BREAK <CustomTag type="premium" compact />
  * PLAYER\_BLOCK\_PLACE <CustomTag type="premium" compact />
  * PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FISH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_HARVEST\_BLOCK
  * PLAYER\_LEFT\_CLICK (dengan fitur typeTarget: ONLY\_BLOCK)
  * PLAYER\_RIGHT\_CLICK (dengan fitur typeTarget: ONLY\_BLOCK)
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * Dst., informasi lebih lanjut di [Info aktivator](list-of-the-activators)
* <CustomTag type="player_entity" />: Menjelaskan aktivator yang melibatkan pemain yang memicu ExecutableItem dan sebuah entity yang terlibat dalam aktivator. Singkatan \[P\_E]
  * PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_BUCKET\_ENTITY
  * PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_CUSTOM\_LAUNCH (Entity-nya adalah projectile yang diluncurkan) <CustomTag type="premium" compact />
  * PLAYER\_DISMOUNT <CustomTag type="premium" compact />
  * PLAYER\_FISH\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_KILL\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * Dst., informasi lebih lanjut di [Info aktivator](list-of-the-activators)
* <CustomTag type="player_target" />: Menjelaskan aktivator yang melibatkan pemain yang memicu ExecutableItem dan pemain lain, yang disebut sebagai "target", yang diperlakukan sebagai target atau musuh. Singkatan \[P\_T]
  * PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_CLICK\_ON\_PLAYER
  * PLAYER\_FISH\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_HIT\_PLAYER
  * PLAYER\_KILL\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
  * Dst., informasi lebih lanjut di [Info aktivator](list-of-the-activators)
* <CustomTag type="specific_activators" /> Jika ada fitur yang mencakup aktivator berbeda lintas kategori, agar lebih mudah dipahami sebaiknya dibuat daftar sementara baru, yang akan disebutkan pada fitur tersebut. Singkatan \[S\_A]  

## Untuk \[P\_B] <CustomTag type="player_block" />

<BlockFeatures />

## Untuk \[P\_E] <CustomTag type="player_entity" />

<EntityFeatures />

## Untuk \[P\_T] <CustomTag type="player_target" />

<TargetPlayerFeatures />

## Untuk \[S\_A] <CustomTag type="specific_activators" />
 
<TargetItemFeatures />
* Untuk:
  * PLAYER_DROP_ITEM
  * PLAYER_CONSUME
  * EI_CLICK_ON_ANOTHER_INVENTORY_ITEM
  * EI_CLICKED_BY_ANOTHER_INVENTORY_ITEM


### mustBeAProjectileLaunchWithTheSameEI

* Tipe kategori aktivator: Specific Activator List
  * PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
* Info: Fitur untuk aktivator yang berkaitan dengan projectile. Fitur ini menentukan apakah aktivator boleh berjalan dengan projectile yang tidak diluncurkan oleh EI yang sama.
  * Contoh: ada aktivator PROJECTILE\_HIT\_ENTITY, detailedSlots: \[all slots] dan pada playerCommands: \["say hi"]
    * Jika fitur diaktifkan, aktivator hanya akan bekerja jika ExecutableItem ini memiliki aktivator lain yang berisi perintah LAUNCH. Jadi, projectile akan diluncurkan dari EI tersebut dan kemudian kondisinya terpenuhi.
    * Jika fitur dinonaktifkan, semua projectile, seperti: busur vanilla, snowball vanilla, projectile dari ExecutableItem lain, dan projectile dari ExecutableItem itu sendiri akan menjalankan aktivator.
* Penting: Saat `mustBeAProjectileLaunchWithTheSameEI` bernilai `true`, plugin tidak dapat menjamin dengan kepastian 100% slot inventaris mana yang menyimpan item pada saat peluncuran. Plugin mengaktifkan salinan EI pertama yang cocok yang ditemukan di inventaris pemain. Karena itu, **selalu konfigurasikan `detailedSlots` aktivator agar mencakup semua slot**, jangan batasi hanya ke main hand. Jika aktivator dibatasi ke main hand, aktivator mungkin gagal terpicu jika item yang cocok dievaluasi lebih dulu dari slot yang berbeda.
  * Contoh:

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: PROJECTILE_HIT_ENTITY
    mustBeAProjectileLaunchWithTheSameEI: true
    detailedSlots: [] # Empty list = all slots (-1 through 40)
```

<DamageCauseFeatures />
* Untuk:
  * PLAYER_BLOCK_HIT_OF_ENTITY
  * PLAYER_BLOCK_HIT_OF_PLAYER
  * PLAYER_DEATH
  * PLAYER_HIT_ENTITY
  * PLAYER_HIT_PLAYER
  * PLAYER_RECEIVE_HIT_BY_ENTITY
  * PLAYER_RECEIVE_HIT_BY_PLAYER
  * PLAYER_RECEIVE_HIT_GLOBAL

<EffectFeatures />
* Untuk:
  * PLAYER_RECEIVE_EFFECT

<CommandFeatures />
* Untuk:
  * PLAYER_WRITE_COMMAND

<DropFeatures />
* Untuk:
  * PLAYER_BLOCK_BREAK
  * PLAYER_FISH_FISH
  * PLAYER_KILL_ENTITY
  * PLAYER_KILL_PLAYER

<TypeTargetFeatures />
* Untuk
  * PLAYER\_ALL\_CLICK
  * PLAYER\_RIGHT\_CLICK
  * PLAYER\_LEFT\_CLICK

<ClickFeatures />
* Untuk:
  * PLAYER_CLICK_ON_ENTITY
  * PLAYER_CLICK_ON_PLAYER
  * INVENTORY_CLICK

<DelayFeatures />
* Untuk:
  * LOOP

<InputFeatures />
* Untuk:
  * PLAYER_INPUT
