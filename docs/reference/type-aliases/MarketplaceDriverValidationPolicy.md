# Type Alias: MarketplaceDriverValidationPolicy\<Request, Result\>

> **MarketplaceDriverValidationPolicy**\<`Request`, `Result`\> = `object`

Defined in: [index.ts:286](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L286)

## Type Parameters

### Request

`Request` *extends* [`MarketplaceDriverValidationRequest`](MarketplaceDriverValidationRequest.md) = [`MarketplaceDriverValidationRequest`](MarketplaceDriverValidationRequest.md)

### Result

`Result` *extends* [`MarketplaceDriverValidationResult`](MarketplaceDriverValidationResult.md) = [`MarketplaceDriverValidationResult`](MarketplaceDriverValidationResult.md)

## Properties

### canValidate?

> `optional` **canValidate?**: (`request`) => `boolean` \| `Promise`\<`boolean`\>

Defined in: [index.ts:291](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L291)

#### Parameters

##### request

`Request`

#### Returns

`boolean` \| `Promise`\<`boolean`\>

***

### driver?

> `optional` **driver?**: `string` \| `"*"`

Defined in: [index.ts:290](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L290)

***

### validatePayment

> **validatePayment**: (`request`) => `Promise`\<`Result`\>

Defined in: [index.ts:292](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L292)

#### Parameters

##### request

`Request`

#### Returns

`Promise`\<`Result`\>
