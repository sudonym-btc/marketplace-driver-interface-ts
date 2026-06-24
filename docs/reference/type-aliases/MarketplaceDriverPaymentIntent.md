# Type Alias: MarketplaceDriverPaymentIntent

> **MarketplaceDriverPaymentIntent** = `object`

Defined in: [index.ts:83](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L83)

## Properties

### accountIndex

> **accountIndex**: `number`

Defined in: [index.ts:88](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L88)

***

### amount

> **amount**: [`MarketplaceDriverAmount`](MarketplaceDriverAmount.md)

Defined in: [index.ts:90](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L90)

***

### asset

> **asset**: [`MarketplaceDriverAsset`](MarketplaceDriverAsset.md)

Defined in: [index.ts:92](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L92)

***

### contract

> **contract**: [`MarketplaceDriverContract`](MarketplaceDriverContract.md)

Defined in: [index.ts:94](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L94)

***

### fee

> **fee**: [`MarketplaceDriverAmount`](MarketplaceDriverAmount.md)

Defined in: [index.ts:91](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L91)

***

### logger?

> `optional` **logger?**: [`MarketplaceDriverLogger`](MarketplaceDriverLogger.md)

Defined in: [index.ts:102](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L102)

***

### metadata?

> `optional` **metadata?**: `Record`\<`string`, `unknown`\>

Defined in: [index.ts:101](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L101)

***

### method

> **method**: `string`

Defined in: [index.ts:84](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L84)

***

### participants

> **participants**: `object`

Defined in: [index.ts:95](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L95)

#### arbiter

> **arbiter**: [`MarketplaceDriverIdentity`](MarketplaceDriverIdentity.md)

#### buyer?

> `optional` **buyer?**: [`MarketplaceDriverIdentity`](MarketplaceDriverIdentity.md)

#### seller

> **seller**: [`MarketplaceDriverIdentity`](MarketplaceDriverIdentity.md)

***

### policy

> **policy**: [`MarketplaceDriverPolicyDescriptor`](MarketplaceDriverPolicyDescriptor.md)

Defined in: [index.ts:93](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L93)

***

### purpose

> **purpose**: `"order"` \| `"bid"`

Defined in: [index.ts:85](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L85)

***

### seed?

> `optional` **seed?**: `string`

Defined in: [index.ts:89](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L89)

***

### settlementId

> **settlementId**: `string`

Defined in: [index.ts:87](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L87)

***

### tradeId

> **tradeId**: `string`

Defined in: [index.ts:86](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L86)

***

### unlockAt

> **unlockAt**: `number`

Defined in: [index.ts:100](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L100)
