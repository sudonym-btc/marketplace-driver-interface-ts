# Type Alias: MarketplaceDriverPaymentIntent

> **MarketplaceDriverPaymentIntent** = `object`

## Properties

### accountIndex

> **accountIndex**: `number`

***

### amount

> **amount**: [`MarketplaceDriverAmount`](MarketplaceDriverAmount.md)

***

### asset

> **asset**: [`MarketplaceDriverAsset`](MarketplaceDriverAsset.md)

***

### contract

> **contract**: [`MarketplaceDriverContract`](MarketplaceDriverContract.md)

***

### fee

> **fee**: [`MarketplaceDriverAmount`](MarketplaceDriverAmount.md)

***

### logger?

> `optional` **logger?**: [`MarketplaceDriverLogger`](MarketplaceDriverLogger.md)

***

### metadata?

> `optional` **metadata?**: `Record`\<`string`, `unknown`\>

***

### method

> **method**: `string`

***

### participants

> **participants**: `object`

#### arbiter

> **arbiter**: [`MarketplaceDriverIdentity`](MarketplaceDriverIdentity.md)

#### buyer?

> `optional` **buyer?**: [`MarketplaceDriverIdentity`](MarketplaceDriverIdentity.md)

#### seller

> **seller**: [`MarketplaceDriverIdentity`](MarketplaceDriverIdentity.md)

***

### policy

> **policy**: [`MarketplaceDriverPolicyDescriptor`](MarketplaceDriverPolicyDescriptor.md)

***

### purpose

> **purpose**: `"order"` \| `"bid"`

***

### seed?

> `optional` **seed?**: `string`

***

### settlementId

> **settlementId**: `string`

***

### tradeId

> **tradeId**: `string`

***

### unlockAt

> **unlockAt**: `number`
