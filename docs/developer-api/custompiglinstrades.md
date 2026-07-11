---
sidebar_position: 7
title: 🐷 CustomPiglinsTrades API
description: Look up trade configurations and observe/cancel piglin trades.
---

# 🐷 CustomPiglinsTrades API

Entry point: `com.ssomar.score.api.custompiglinstrades.CustomPiglinsTradesAPI`

```java
CustomPiglinsTradesManagerInterface manager = CustomPiglinsTradesAPI.getTradesManager();

Optional<? extends TradeInterface> tradeOpt = manager.getTrade("my_trade");
List<String> ids = manager.getTradeIdsList();
List<? extends TradeInterface> all = manager.getAllTrades();
```

## Events

| Event | Cancellable | Fired when |
|---|---|---|
| `PiglinTradeEvent` | ✅ | a player triggers a custom piglin trade, **before** it runs |
| `CustomPiglinsTradesPostLoadEvent` | — | all trade configurations are loaded |

```java
@EventHandler
public void onPiglinTrade(PiglinTradeEvent e) {
    // e.getPlayer() (nullable), e.getPiglin(), e.getTrade().getId(), e.getInput()
    if (!canTradeHere(e.getPiglin().getLocation())) {
        e.setCancelled(true);   // the input item is NOT consumed
    }
}
```
