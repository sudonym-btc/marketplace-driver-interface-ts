# Type Alias: MarketplaceDriverValidationExpected

> **MarketplaceDriverValidationExpected** = `object`

## Properties

### amount?

> `optional` **amount?**: [`MarketplaceDriverAmount`](MarketplaceDriverAmount.md)

***

### asset?

> `optional` **asset?**: `object`

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

***

### listingAnchor?

> `optional` **listingAnchor?**: `string`

***

### participants?

> `optional` **participants?**: `object`

#### arbiter?

> `optional` **arbiter?**: [`MarketplaceDriverIdentity`](MarketplaceDriverIdentity.md)

#### buyer?

> `optional` **buyer?**: [`MarketplaceDriverIdentity`](MarketplaceDriverIdentity.md)

#### seller?

> `optional` **seller?**: [`MarketplaceDriverIdentity`](MarketplaceDriverIdentity.md)

***

### settlementId?

> `optional` **settlementId?**: `string`

***

### tradeId?

> `optional` **tradeId?**: `string`
