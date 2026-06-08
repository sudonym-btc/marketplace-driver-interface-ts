# Marketplace Driver Interface

Shared TypeScript contracts for NMDK marketplace payment drivers.

This package intentionally contains only driver-facing data shapes and interfaces. Nostr event parsing,
publishing, relay access, and runtime session behavior belong in `nostr-tools/marketplace`; chain,
mint, swap, and escrow implementation details belong in concrete driver packages.
