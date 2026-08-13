# Type Alias: MarketplacePolicyBaseOptions\<RuntimeState, Purpose, Family\>

> **MarketplacePolicyBaseOptions**\<`RuntimeState`, `Purpose`, `Family`\> = `object`

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

***

### id?

> `optional` **id?**: `string`

***

### initialState

> **initialState**: `RuntimeState`

***

### label?

> `optional` **label?**: `string`

***

### logger?

> `optional` **logger?**: [`MarketplaceDriverLogger`](MarketplaceDriverLogger.md)

***

### method

> **method**: `string`

***

### proofSensitivity?

> `optional` **proofSensitivity?**: [`MarketplaceDriverProofSensitivity`](MarketplaceDriverProofSensitivity.md)

***

### purpose

> **purpose**: `Purpose`
