# Type Alias: MarketplaceDriverProofSensitivity

> **MarketplaceDriverProofSensitivity** = `"public"` \| `"confidential"` \| `"secret"`

Minimum disclosure protection required by a payment policy.

`confidential` keeps driver parameters off the public event while leaving
independently verifiable payment terms visible. `secret` seals the complete
payment proof. Runtimes MUST treat this value as a minimum and may apply a
stricter mode at the caller's request.
