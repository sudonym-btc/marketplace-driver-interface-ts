# Type Alias: MarketplaceDriverOrderSettlementAction

> **MarketplaceDriverOrderSettlementAction** = `"release"` \| `"refund"` \| `"split"` \| `"timeout_claim"`

Order settlement actions a driver explicitly supports.

Runtimes MUST NOT infer these capabilities from the presence of a generic
settlement hook. Financial-action UIs should remain fail-closed when this
declaration is absent.
