# Type Alias: MarketplaceDriverPaymentSettlementIntent\<Proof, Expected\>

> **MarketplaceDriverPaymentSettlementIntent**\<`Proof`, `Expected`\> = `object`

## Type Parameters

### Proof

`Proof` *extends* [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md) = [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md)

### Expected

`Expected` *extends* [`MarketplaceDriverValidationExpected`](MarketplaceDriverValidationExpected.md) = [`MarketplaceDriverValidationExpected`](MarketplaceDriverValidationExpected.md)

## Properties

### action

> **action**: `string`

***

### amount

> **amount**: [`MarketplaceDriverAmount`](MarketplaceDriverAmount.md)

***

### createdAt

> **createdAt**: `number`

***

### data?

> `optional` **data?**: `Record`\<`string`, `unknown`\>

***

### decryptParams?

> `optional` **decryptParams?**: [`MarketplaceDriverPaymentProofParamsDecryptor`](MarketplaceDriverPaymentProofParamsDecryptor.md)

Resolves protected proof params without replacing the privacy-preserving proof.

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

### outputs?

> `optional` **outputs?**: [`MarketplaceDriverPaymentSettlementOutput`](MarketplaceDriverPaymentSettlementOutput.md)[]

***

### paymentId

> **paymentId**: `string`

***

### proof

> **proof**: `Proof`

***

### reason?

> `optional` **reason?**: `string`

***

### tradeId

> **tradeId**: `string`
