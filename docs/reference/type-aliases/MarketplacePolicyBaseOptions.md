# Type Alias: MarketplacePolicyBaseOptions\<RuntimeState, Purpose, Family\>

> **MarketplacePolicyBaseOptions**\<`RuntimeState`, `Purpose`, `Family`\> = `object`

Defined in: [index.ts:623](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L623)

## Type Parameters

### RuntimeState

`RuntimeState` *extends* `object`

### Purpose

`Purpose` *extends* [`MarketplaceDriverPaymentIntent`](MarketplaceDriverPaymentIntent.md)\[`"purpose"`\] = [`MarketplaceDriverPaymentIntent`](MarketplaceDriverPaymentIntent.md)\[`"purpose"`\]

### Family

`Family` *extends* `string` = `string`

## Properties

### family

> **family**: `Family`

Defined in: [index.ts:632](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L632)

***

### id?

> `optional` **id?**: `string`

Defined in: [index.ts:629](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L629)

***

### initialState

> **initialState**: `RuntimeState`

Defined in: [index.ts:633](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L633)

***

### label?

> `optional` **label?**: `string`

Defined in: [index.ts:630](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L630)

***

### logger?

> `optional` **logger?**: [`MarketplaceDriverLogger`](MarketplaceDriverLogger.md)

Defined in: [index.ts:634](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L634)

***

### method

> **method**: `string`

Defined in: [index.ts:628](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L628)

***

### purpose

> **purpose**: `Purpose`

Defined in: [index.ts:631](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L631)
