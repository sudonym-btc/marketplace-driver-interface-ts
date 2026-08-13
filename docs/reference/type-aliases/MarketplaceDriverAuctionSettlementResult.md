# Type Alias: MarketplaceDriverAuctionSettlementResult\<Proof\>

> **MarketplaceDriverAuctionSettlementResult**\<`Proof`\> = `object`

## Type Parameters

### Proof

`Proof` *extends* [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md) = [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md)

## Properties

### data?

> `optional` **data?**: `Record`\<`string`, `unknown`\>

Driver-local details; generic runtimes MUST NOT expose these by default.

***

### inputs?

> `optional` **inputs?**: `Record`\<`string`, `unknown`\>[]

Driver-local details; generic runtimes MUST NOT expose these by default.

***

### outputs?

> `optional` **outputs?**: `Record`\<`string`, `unknown`\>[]

Driver-local details; generic runtimes MUST NOT expose these by default.

***

### proof

> **proof**: `Proof`

***

### receipt

> **receipt**: [`MarketplaceDriverFinancialActionReceipt`](MarketplaceDriverFinancialActionReceipt.md)

Proof that the requested financial action actually completed.
