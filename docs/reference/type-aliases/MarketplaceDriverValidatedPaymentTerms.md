# Type Alias: MarketplaceDriverValidatedPaymentTerms

> **MarketplaceDriverValidatedPaymentTerms** = `object`

## Properties

### asset?

> `optional` **asset?**: `object`

#### assetId?

> `optional` **assetId?**: `string`

#### chainId?

> `optional` **chainId?**: `number`

#### currency?

> `optional` **currency?**: `string`

#### decimals?

> `optional` **decimals?**: `number`

#### denomination?

> `optional` **denomination?**: `string`

***

### data?

> `optional` **data?**: `Record`\<`string`, `unknown`\>

***

### escrowFee?

> `optional` **escrowFee?**: [`MarketplaceDriverAmount`](MarketplaceDriverAmount.md)

***

### fundedAmount?

> `optional` **fundedAmount?**: [`MarketplaceDriverAmount`](MarketplaceDriverAmount.md)

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

### paymentAmount?

> `optional` **paymentAmount?**: [`MarketplaceDriverAmount`](MarketplaceDriverAmount.md)

***

### securityBondAmount?

> `optional` **securityBondAmount?**: [`MarketplaceDriverAmount`](MarketplaceDriverAmount.md)

***

### settlementId?

> `optional` **settlementId?**: `string`

***

### timeoutClaimant?

> `optional` **timeoutClaimant?**: `string`

***

### tradeId?

> `optional` **tradeId?**: `string`

***

### unlockAt?

> `optional` **unlockAt?**: `number`
