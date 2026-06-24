# Marketplace Driver Interface

Shared TypeScript contracts for NMDK marketplace payment drivers.

## Docs

Package-owned docs live in [`docs`](docs/README.md). Start with
[`docs/getting-started.md`](docs/getting-started.md) and regenerate the API
reference with:

```sh
npm run docs:api
```

This package intentionally contains only driver-facing data shapes and interfaces. Nostr event parsing,
publishing, relay access, and runtime session behavior belong in `nostr-tools/marketplace`; chain,
mint, swap, and escrow implementation details belong in concrete driver packages.

## Payment proof params

Drivers validate payment proofs from the proof itself. `expected` context on a
validation request is optional compatibility data; a validator must not require
an order, bid, or listing event to decide whether the proof is valid.

```ts
export type MarketplaceDriverPaymentProof = {
  driver: string
  params: Record<string, unknown> | MarketplaceDriverEncryptedPaymentProofParams
}

export type MarketplaceDriverEncryptedPaymentProofParams = {
  encrypted: true
  version: 1
  scheme: 'nip44'
  proofId: string
  payload: string
}
```

When `params.encrypted === true`, adapters pass `decryptParams` on
`MarketplaceDriverValidationRequest`. Concrete drivers should call
`resolveMarketplaceDriverPaymentProofParams(request.proof, request.decryptParams)`
before reading method-specific fields.

## Validated terms

Successful validators SHOULD return `terms` with the proof-local facts they
verified. Marketplace order validators can then compare those facts against the
signed order and its embedded listing snapshot without passing order context
back into the driver.

```ts
export type MarketplaceDriverValidatedPaymentTerms = {
  settlementId?: string
  paymentAmount?: MarketplaceDriverAmount
  fundedAmount?: MarketplaceDriverAmount
  securityBondAmount?: MarketplaceDriverAmount
  escrowFee?: MarketplaceDriverAmount
  unlockAt?: number
  timeoutClaimant?: string
}
```
