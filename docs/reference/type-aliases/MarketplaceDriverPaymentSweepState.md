# Type Alias: MarketplaceDriverPaymentSweepState\<Proof\>

> **MarketplaceDriverPaymentSweepState**\<`Proof`\> = \{ `data?`: `Record`\<`string`, `unknown`\>; `type`: `"noop"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `status`: `string`; `type`: `"progress"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `proof?`: `Proof` \| `null`; `type`: `"swept"`; \}

Defined in: [index.ts:345](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L345)

## Type Parameters

### Proof

`Proof` *extends* [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md) = [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md)
