# Type Alias: MarketplaceDriverValidationPolicy\<Request, Result\>

> **MarketplaceDriverValidationPolicy**\<`Request`, `Result`\> = `object`

## Type Parameters

### Request

`Request` *extends* [`MarketplaceDriverValidationRequest`](MarketplaceDriverValidationRequest.md) = [`MarketplaceDriverValidationRequest`](MarketplaceDriverValidationRequest.md)

### Result

`Result` *extends* [`MarketplaceDriverValidationResult`](MarketplaceDriverValidationResult.md) = [`MarketplaceDriverValidationResult`](MarketplaceDriverValidationResult.md)

## Properties

### canValidate?

> `optional` **canValidate?**: (`request`) => `boolean` \| `Promise`\<`boolean`\>

#### Parameters

##### request

`Request`

#### Returns

`boolean` \| `Promise`\<`boolean`\>

***

### driver?

> `optional` **driver?**: `string` \| `"*"`

***

### validatePayment

> **validatePayment**: (`request`) => `Promise`\<`Result`\>

#### Parameters

##### request

`Request`

#### Returns

`Promise`\<`Result`\>
