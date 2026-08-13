# Type Alias: MarketplaceDriverLogger

> **MarketplaceDriverLogger** = `object`

## Properties

### child?

> `optional` **child?**: (`context`) => `MarketplaceDriverLogger`

#### Parameters

##### context

[`MarketplaceDriverLogContext`](MarketplaceDriverLogContext.md)

#### Returns

`MarketplaceDriverLogger`

***

### debug

> **debug**: [`MarketplaceDriverLogMethod`](MarketplaceDriverLogMethod.md)

***

### error

> **error**: [`MarketplaceDriverLogMethod`](MarketplaceDriverLogMethod.md)

***

### info

> **info**: [`MarketplaceDriverLogMethod`](MarketplaceDriverLogMethod.md)

***

### span?

> `optional` **span?**: \<`Result`\>(`name`, `data`, `run`) => `Result`

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
