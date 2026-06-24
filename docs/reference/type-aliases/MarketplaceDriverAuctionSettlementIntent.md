# Type Alias: MarketplaceDriverAuctionSettlementIntent\<Proof, Expected\>

> **MarketplaceDriverAuctionSettlementIntent**\<`Proof`, `Expected`\> = `object`

Defined in: [index.ts:400](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L400)

## Type Parameters

### Proof

`Proof` *extends* [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md) = [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md)

### Expected

`Expected` *extends* [`MarketplaceDriverValidationExpected`](MarketplaceDriverValidationExpected.md) = [`MarketplaceDriverValidationExpected`](MarketplaceDriverValidationExpected.md)

## Properties

### action

> **action**: `"auction_refund"` \| `"auction_promote"`

Defined in: [index.ts:405](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L405)

***

### bid?

> `optional` **bid?**: `unknown`

Defined in: [index.ts:408](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L408)

***

### data?

> `optional` **data?**: `Record`\<`string`, `unknown`\>

Defined in: [index.ts:419](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L419)

***

### expected?

> `optional` **expected?**: `Expected`

Defined in: [index.ts:411](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L411)

***

### group?

> `optional` **group?**: `unknown`

Defined in: [index.ts:407](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L407)

***

### payment?

> `optional` **payment?**: `unknown`

Defined in: [index.ts:409](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L409)

***

### proof

> **proof**: `Proof`

Defined in: [index.ts:410](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L410)

***

### purpose

> **purpose**: `"bid"`

Defined in: [index.ts:404](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L404)

***

### recycleArgs?

> `optional` **recycleArgs?**: `unknown`

Defined in: [index.ts:418](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L418)

***

### refundPercent?

> `optional` **refundPercent?**: `number`

Defined in: [index.ts:413](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L413)

***

### seed?

> `optional` **seed?**: `string`

Defined in: [index.ts:406](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L406)

***

### targetOrderGroupId?

> `optional` **targetOrderGroupId?**: `string`

Defined in: [index.ts:416](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L416)

***

### targetTradeId?

> `optional` **targetTradeId?**: `string`

Defined in: [index.ts:415](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L415)

***

### targetUnlockAt?

> `optional` **targetUnlockAt?**: `number`

Defined in: [index.ts:417](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L417)

***

### validation?

> `optional` **validation?**: `unknown`

Defined in: [index.ts:412](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L412)

***

### winner?

> `optional` **winner?**: `unknown`

Defined in: [index.ts:414](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L414)
