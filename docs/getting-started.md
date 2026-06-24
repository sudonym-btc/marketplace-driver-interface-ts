# Getting started with the Marketplace Driver Interface

`@sudonym-btc/marketplace-driver-interface` defines the shared contracts used by
payment drivers and marketplace runtimes. It intentionally contains only plain
TypeScript types and small helper functions; concrete chain, mint, or escrow
logic belongs in driver packages.

## Install

```sh
npm install @sudonym-btc/marketplace-driver-interface
```

## Validate proof params

Drivers should resolve proof params through the shared helper before reading
method-specific fields. This lets marketplace adapters pass encrypted proof
params and a `decryptParams` hook without each driver inventing its own shape.

```ts
import {
  resolveMarketplaceDriverPaymentProofParams,
} from '@sudonym-btc/marketplace-driver-interface'

const params = await resolveMarketplaceDriverPaymentProofParams(
  request.proof,
  request.decryptParams,
)
```

## Return verified terms

Successful validators should return verified proof-local facts such as payment
amounts, funded amounts, escrow fees, unlock times, and timeout claimants. The
Nostr runtime can compare those facts against signed marketplace events.

Read the generated [API reference](reference/README.md) for the complete driver
request, proof, validation, and amount types.
