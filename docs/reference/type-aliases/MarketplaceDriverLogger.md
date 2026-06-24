# Type Alias: MarketplaceDriverLogger

> **MarketplaceDriverLogger** = `object`

Defined in: [index.ts:34](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L34)

## Properties

### child?

> `optional` **child?**: (`context`) => `MarketplaceDriverLogger`

Defined in: [index.ts:39](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L39)

#### Parameters

##### context

[`MarketplaceDriverLogContext`](MarketplaceDriverLogContext.md)

#### Returns

`MarketplaceDriverLogger`

***

### debug

> **debug**: [`MarketplaceDriverLogMethod`](MarketplaceDriverLogMethod.md)

Defined in: [index.ts:35](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L35)

***

### error

> **error**: [`MarketplaceDriverLogMethod`](MarketplaceDriverLogMethod.md)

Defined in: [index.ts:38](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L38)

***

### info

> **info**: [`MarketplaceDriverLogMethod`](MarketplaceDriverLogMethod.md)

Defined in: [index.ts:36](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L36)

***

### span?

> `optional` **span?**: \<`Result`\>(`name`, `data`, `run`) => `Result`

Defined in: [index.ts:40](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L40)

#### Type Parameters

##### Result

`Result`

#### Parameters

##### name

`string`

##### data

[`MarketplaceDriverLogData`](MarketplaceDriverLogData.md) \| `undefined`

##### run

(`logger`) => `Result`

#### Returns

`Result`

***

### warn

> **warn**: [`MarketplaceDriverLogMethod`](MarketplaceDriverLogMethod.md)

Defined in: [index.ts:37](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L37)
