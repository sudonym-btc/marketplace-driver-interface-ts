# Type Alias: MarketplaceDriverAuctionSettlementIntent\<Proof, Expected\>

> **MarketplaceDriverAuctionSettlementIntent**\<`Proof`, `Expected`\> = `object`

## Type Parameters

### Proof

`Proof` *extends* [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md) = [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md)

### Expected

`Expected` *extends* [`MarketplaceDriverValidationExpected`](MarketplaceDriverValidationExpected.md) = [`MarketplaceDriverValidationExpected`](MarketplaceDriverValidationExpected.md)

## Properties

### action

> **action**: `"auction_refund"` \| `"auction_promote"`

***

### bid?

> `optional` **bid?**: `unknown`

***

### data?

> `optional` **data?**: `Record`\<`string`, `unknown`\>

***

### expected?

> `optional` **expected?**: `Expected`

***

### group?

> `optional` **group?**: `unknown`

***

### operationId

> **operationId**: `string`

Stable retry key chosen by the runtime for this financial action.

***

### payment?

> `optional` **payment?**: `unknown`

***

### proof

> **proof**: `Proof`

***

### purpose

> **purpose**: `"bid"`

***

### recycleArgs?

> `optional` **recycleArgs?**: `unknown`

***

### refundPercent?

> `optional` **refundPercent?**: `number`

***

### seed?

> `optional` **seed?**: `string`

***

### targetOrderGroupId?

> `optional` **targetOrderGroupId?**: `string`

***

### targetTradeId?

> `optional` **targetTradeId?**: `string`

***

### targetUnlockAt?

> `optional` **targetUnlockAt?**: `number`

***

### validation?

> `optional` **validation?**: `unknown`

***

### winner?

> `optional` **winner?**: `unknown`
