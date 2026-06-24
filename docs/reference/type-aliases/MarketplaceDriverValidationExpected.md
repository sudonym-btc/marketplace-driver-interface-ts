# Type Alias: MarketplaceDriverValidationExpected

> **MarketplaceDriverValidationExpected** = `object`

Defined in: [index.ts:207](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L207)

## Properties

### amount?

> `optional` **amount?**: [`MarketplaceDriverAmount`](MarketplaceDriverAmount.md)

Defined in: [index.ts:211](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L211)

***

### asset?

> `optional` **asset?**: `object`

Defined in: [index.ts:212](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L212)

#### assetId?

> `optional` **assetId?**: `string`

#### currency?

> `optional` **currency?**: `string`

#### decimals?

> `optional` **decimals?**: `number`

#### denomination?

> `optional` **denomination?**: `string`

***

### contract?

> `optional` **contract?**: `object`

Defined in: [index.ts:218](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L218)

#### address?

> `optional` **address?**: `string`

#### bytecodeHash?

> `optional` **bytecodeHash?**: `string`

#### chainId?

> `optional` **chainId?**: `number`

#### params?

> `optional` **params?**: `Record`\<`string`, `unknown`\>

#### type?

> `optional` **type?**: `string`

***

### fee?

> `optional` **fee?**: [`MarketplaceDriverAmount`](MarketplaceDriverAmount.md)

Defined in: [index.ts:230](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L230)

***

### listingAnchor?

> `optional` **listingAnchor?**: `string`

Defined in: [index.ts:210](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L210)

***

### participants?

> `optional` **participants?**: `object`

Defined in: [index.ts:225](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L225)

#### arbiter?

> `optional` **arbiter?**: [`MarketplaceDriverIdentity`](MarketplaceDriverIdentity.md)

#### buyer?

> `optional` **buyer?**: [`MarketplaceDriverIdentity`](MarketplaceDriverIdentity.md)

#### seller?

> `optional` **seller?**: [`MarketplaceDriverIdentity`](MarketplaceDriverIdentity.md)

***

### settlementId?

> `optional` **settlementId?**: `string`

Defined in: [index.ts:208](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L208)

***

### tradeId?

> `optional` **tradeId?**: `string`

Defined in: [index.ts:209](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L209)
