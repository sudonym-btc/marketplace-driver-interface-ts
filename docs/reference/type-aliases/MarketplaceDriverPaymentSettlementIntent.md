# Type Alias: MarketplaceDriverPaymentSettlementIntent\<Proof, Expected\>

> **MarketplaceDriverPaymentSettlementIntent**\<`Proof`, `Expected`\> = `object`

Defined in: [index.ts:357](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L357)

## Type Parameters

### Proof

`Proof` *extends* [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md) = [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md)

### Expected

`Expected` *extends* [`MarketplaceDriverValidationExpected`](MarketplaceDriverValidationExpected.md) = [`MarketplaceDriverValidationExpected`](MarketplaceDriverValidationExpected.md)

## Properties

### action

> **action**: `string`

Defined in: [index.ts:366](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L366)

***

### amount

> **amount**: [`MarketplaceDriverAmount`](MarketplaceDriverAmount.md)

Defined in: [index.ts:368](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L368)

***

### createdAt

> **createdAt**: `number`

Defined in: [index.ts:365](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L365)

***

### data?

> `optional` **data?**: `Record`\<`string`, `unknown`\>

Defined in: [index.ts:372](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L372)

***

### expected?

> `optional` **expected?**: `Expected`

Defined in: [index.ts:369](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L369)

***

### listingAnchor

> **listingAnchor**: `string`

Defined in: [index.ts:364](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L364)

***

### orderGroupId

> **orderGroupId**: `string`

Defined in: [index.ts:363](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L363)

***

### outputs?

> `optional` **outputs?**: [`MarketplaceDriverPaymentSettlementOutput`](MarketplaceDriverPaymentSettlementOutput.md)[]

Defined in: [index.ts:370](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L370)

***

### paymentId

> **paymentId**: `string`

Defined in: [index.ts:361](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L361)

***

### proof

> **proof**: `Proof`

Defined in: [index.ts:367](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L367)

***

### reason?

> `optional` **reason?**: `string`

Defined in: [index.ts:371](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L371)

***

### tradeId

> **tradeId**: `string`

Defined in: [index.ts:362](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L362)
