# Type Alias: MarketplaceDriverPaymentState\<Proof\>

> **MarketplaceDriverPaymentState**\<`Proof`\> = \{ `data?`: `Record`\<`string`, `unknown`\>; `proof?`: `Proof` \| `null`; `request`: [`MarketplaceDriverBolt11PaymentRequest`](MarketplaceDriverBolt11PaymentRequest.md); `type`: `"payment_required"`; \} \| \{ `data?`: [`MarketplaceDriverPaymentProgressData`](MarketplaceDriverPaymentProgressData.md); `proof?`: `Proof` \| `null`; `status`: `string`; `type`: `"payment_progress"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `proof`: `Proof`; `type`: `"paid"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `proof?`: `Proof` \| `null`; `type`: `"completed"`; \}

## Type Parameters

### Proof

`Proof` *extends* [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md) = [`MarketplaceDriverPaymentProof`](MarketplaceDriverPaymentProof.md)
