# Type Alias: MarketplaceDriverPaymentSettlementState\<Proof\>

> **MarketplaceDriverPaymentSettlementState**\<`Proof`\> = \{ `data?`: `Record`\<`string`, `unknown`\>; `status`: `string`; `type`: `"progress"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `inputs?`: `Record`\<`string`, `unknown`\>[]; `outputs?`: [`MarketplaceDriverPaymentSettlementOutput`](MarketplaceDriverPaymentSettlementOutput.md)[]; `proof`: `Proof`; `type`: `"settlement_ready"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `inputs?`: `Record`\<`string`, `unknown`\>[]; `outputs?`: [`MarketplaceDriverPaymentSettlementOutput`](MarketplaceDriverPaymentSettlementOutput.md)[]; `proof?`: `Proof` \| `null`; `type`: `"completed"`; \}

Defined in: [index.ts:375](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L375)

## Type Parameters

### Proof

`Proof` *extends* [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md) = [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md)
