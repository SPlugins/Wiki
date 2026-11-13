---
description: >-
  Pelajari fitur detailedCommands dan registerCommand pada aktivator: cara
  mendaftarkan perintah di server agar muncul di tab completion. Untuk
  ExecutableItems.
source_hash: dd51810cf51b3bae
translated_at: '2026-11-13T17:56:26.984Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedCommands

* Info: Fitur untuk aktivator yang melibatkan perintah. Di sini Anda dapat memilih perintah yang harus dijalankan aktivator sebagai kondisi.
* Contoh:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_COMMAND # replace that with the correct activator name
    detailedCommands:
    - customHealCommand
    playerCommands:
    - SEND_MESSAGE &dYou have been healed !
    - REGAIN HEALTH 10
```

### registerCommand

* Info: Nilai Boolean, `false` secara default. Hanya untuk `PLAYER_WRITE_COMMAND`. Tanpa ini, aktivator tetap berjalan tetapi perintahnya tidak ada bagi server: bilah chat menampilkannya dengan warna merah dan server menjawab "Unknown command". Dengan `registerCommand: true`, perintah dari `detailedCommands` didaftarkan di server:
  * Tidak ada lagi "Unknown command", dan pada 1.13+ bilah chat tidak lagi menampilkan perintah tersebut dengan warna merah.
  * Tab completion untuk nama perintah dan kata-kata yang ditulis setelahnya di `detailedCommands` (`/promo summer` dan `/promo winter` menyarankan `summer` dan `winter`).
  * Perintah yang didaftarkan tidak melakukan apa pun dengan sendirinya: aktivator tetap hanya berjalan satu kali, seperti sebelumnya.
  * Perintah ini tidak pernah menggantikan perintah yang sudah ada (perintah Minecraft atau plugin lain): peringatan ditampilkan di konsol, tidak ada yang didaftarkan untuk perintah ini, dan aktivator tetap berjalan saat perintah tersebut ditulis.
  * Beberapa aktivator (atau ExecutableItems dan ExecutableEvents) dapat menggunakan perintah yang sama: perintah tersebut hanya didaftarkan satu kali.
  * Perintah yang didaftarkan mengikuti config: perintah diperbarui setelah reload, penyimpanan di editor, atau penghapusan, dan dihapus saat plugin dinonaktifkan.
  * Aktivator dengan `registerCommand: true` tetapi tanpa `detailedCommands` tidak mendaftarkan apa pun.
* Contoh:

```yaml
activators:
  activator1:
    option: PLAYER_WRITE_COMMAND
    detailedCommands:
    - promo summer
    - promo winter
    registerCommand: true
    playerCommands:
    - SEND_MESSAGE &aPromo: %arg1%
```
