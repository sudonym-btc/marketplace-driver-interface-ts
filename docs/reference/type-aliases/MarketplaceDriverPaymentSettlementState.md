# Type Alias: MarketplaceDriverPaymentSettlementState\<Proof\>

> **MarketplaceDriverPaymentSettlementState**\<`Proof`\> = \{ `data?`: `Record`\<`string`, `unknown`\>; `status`: `string`; `type`: `"progress"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `inputs?`: `Record`\<`string`, `unknown`\>[]; `outputs?`: [`MarketplaceDriverPaymentSettlementOutput`](MarketplaceDriverPaymentSettlementOutput.md)[]; `proof`: `Proof`; `type`: `"settlement_ready"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `inputs?`: `Record`\<`string`, `unknown`\>[]; `outputs?`: [`MarketplaceDriverPaymentSettlementOutput`](MarketplaceDriverPaymentSettlementOutput.md)[]; `proof?`: `Proof` \| `null`; `type`: `"completed"`; \}

## Type Parameters

### Proof

`Proof` *extends* [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md) = [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md)
