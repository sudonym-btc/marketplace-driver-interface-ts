# Marketplace Driver Interface

Shared TypeScript contracts for NMDK marketplace payment drivers.

## Docs

Package-owned docs live in [`docs`](docs/README.md) and are published at
<https://sudonym-btc.github.io/marketplace-driver-interface-ts/>. Start with
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
export type MarketplaceDriverPaymentProof =
  | { driver: string; terms: MarketplaceDriverPaymentTerms; params: MarketplaceDriverPaymentProofParams }
  | { driver: string; sealedTerms: MarketplaceDriverSealedPaymentTerms; params: MarketplaceDriverPaymentProofParams }

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

Policies declare their minimum proof disclosure with `proofSensitivity`:

- `public` permits a clear proof.
- `confidential` requires encrypted proof parameters.
- `secret` requires a sealed complete proof.

Runtimes may apply stronger privacy, but must never weaken the policy minimum.
Protected proof construction must fail when no encryption recipient is
available.

## Financial action receipts

Auction refund and promotion calls carry a stable `operationId`. A driver must
return a completed `MarketplaceDriverFinancialActionReceipt` with the same id
only after the external financial effect is complete or has been recovered
idempotently. Returning rewritten proof metadata without moving funds is not a
successful settlement. Receipt evidence and result `inputs`, `outputs`, and
`data` are driver-local objects; a generic runtime must not copy them into a
public event or durable journal without an explicit schema-specific allowlist.

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
