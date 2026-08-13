# Type Alias: MarketplaceDriverPaymentSweepInput\<Proof, Expected\>

> **MarketplaceDriverPaymentSweepInput**\<`Proof`, `Expected`\> = `object`

## Type Parameters

### Proof

`Proof` *extends* [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md) = [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md)

### Expected

`Expected` *extends* [`MarketplaceDriverValidationExpected`](MarketplaceDriverValidationExpected.md) = [`MarketplaceDriverValidationExpected`](MarketplaceDriverValidationExpected.md)

## Properties

### accountIndex?

> `optional` **accountIndex?**: `number`

***

### amount?

> `optional` **amount?**: [`MarketplaceDriverAmount`](MarketplaceDriverAmount.md)

***

### createdAt

> **createdAt**: `number`

***

### expected?

> `optional` **expected?**: `Expected`

***

### listingAnchor

> **listingAnchor**: `string`

***

### orderGroupId

> **orderGroupId**: `string`

***

### paymentId

> **paymentId**: `string`

***

### proof

> **proof**: `Proof`

***

### reason?

> `optional` **reason?**: [`MarketplaceDriverPaymentSweepReason`](MarketplaceDriverPaymentSweepReason.md)

***

### seed?

> `optional` **seed?**: `string`

***

### tradeId

> **tradeId**: `string`
