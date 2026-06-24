# Type Alias: MarketplaceDriverPaymentState\<Proof\>

> **MarketplaceDriverPaymentState**\<`Proof`\> = \{ `data?`: `Record`\<`string`, `unknown`\>; `proof?`: `Proof` \| `null`; `request`: [`MarketplaceDriverBolt11PaymentRequest`](MarketplaceDriverBolt11PaymentRequest.md); `type`: `"payment_required"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `proof?`: `Proof` \| `null`; `status`: `string`; `type`: `"payment_progress"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `proof`: `Proof`; `type`: `"paid"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `proof?`: `Proof` \| `null`; `type`: `"completed"`; \}

Defined in: [index.ts:304](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L304)

## Type Parameters

### Proof

`Proof` *extends* [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md) = [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md)
