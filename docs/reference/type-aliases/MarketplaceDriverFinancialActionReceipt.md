# Type Alias: MarketplaceDriverFinancialActionReceipt

> **MarketplaceDriverFinancialActionReceipt** = `object`

## Properties

### evidence?

> `optional` **evidence?**: `Record`\<`string`, `unknown`\>

Driver-local reconciliation evidence. Generic runtimes MUST NOT publish or
persist this arbitrary object without an explicit, schema-specific review.

***

### externalId?

> `optional` **externalId?**: `string`

Provider quote, transaction, melt, or other externally verifiable id.

***

### operationId

> **operationId**: `string`

MUST equal the operation id supplied in the settlement intent.

***

### status

> **status**: `"completed"`
