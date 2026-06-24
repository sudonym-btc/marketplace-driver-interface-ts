# Type Alias: MarketplaceDriverOrderPolicy\<State, Policy, Asset, Intent, ValidationRequest, ValidationResult, SweepInput, SweepState, SettlementIntent, SettlementState, SwapResumeContext, SwapResumeState, ArbitrationIntent, ArbitrationState\>

> **MarketplaceDriverOrderPolicy**\<`State`, `Policy`, `Asset`, `Intent`, `ValidationRequest`, `ValidationResult`, `SweepInput`, `SweepState`, `SettlementIntent`, `SettlementState`, `SwapResumeContext`, `SwapResumeState`, `ArbitrationIntent`, `ArbitrationState`\> = [`MarketplaceDriverPolicy`](MarketplaceDriverPolicy.md)\<`State`, `Policy`, `Asset`, `Intent`, `ValidationRequest`, `ValidationResult`, `SweepInput`, `SweepState`, `SettlementIntent`, `SettlementState`, `SwapResumeContext`, `SwapResumeState`\> & `object`

Defined in: [index.ts:538](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L538)

## Type Declaration

### arbitrate?

> `optional` **arbitrate?**: (`intent`) => `AsyncIterable`\<`ArbitrationState`\> \| `Promise`\<`AsyncIterable`\<`ArbitrationState`\>\>

#### Parameters

##### intent

`ArbitrationIntent`

#### Returns

`AsyncIterable`\<`ArbitrationState`\> \| `Promise`\<`AsyncIterable`\<`ArbitrationState`\>\>

### family

> **family**: `"escrow"`

### purpose

> **purpose**: `"order"`

## Type Parameters

### State

`State` = [`MarketplaceDriverPaymentState`](MarketplaceDriverPaymentState.md)

### Policy

`Policy` *extends* [`MarketplaceDriverPolicyDescriptor`](MarketplaceDriverPolicyDescriptor.md) = [`MarketplaceDriverPolicyDescriptor`](MarketplaceDriverPolicyDescriptor.md)

### Asset

`Asset` *extends* [`MarketplaceDriverAsset`](MarketplaceDriverAsset.md) = [`MarketplaceDriverAsset`](MarketplaceDriverAsset.md)

### Intent

`Intent` *extends* [`MarketplaceDriverPaymentIntent`](MarketplaceDriverPaymentIntent.md) = [`MarketplaceDriverPaymentIntent`](MarketplaceDriverPaymentIntent.md)

### ValidationRequest

`ValidationRequest` *extends* [`MarketplaceDriverValidationRequest`](MarketplaceDriverValidationRequest.md) = [`MarketplaceDriverValidationRequest`](MarketplaceDriverValidationRequest.md)

### ValidationResult

`ValidationResult` *extends* [`MarketplaceDriverValidationResult`](MarketplaceDriverValidationResult.md) = [`MarketplaceDriverValidationResult`](MarketplaceDriverValidationResult.md)

### SweepInput

`SweepInput` *extends* [`MarketplaceDriverPaymentSweepInput`](MarketplaceDriverPaymentSweepInput.md) = [`MarketplaceDriverPaymentSweepInput`](MarketplaceDriverPaymentSweepInput.md)

### SweepState

`SweepState` *extends* [`MarketplaceDriverPaymentSweepState`](MarketplaceDriverPaymentSweepState.md) = [`MarketplaceDriverPaymentSweepState`](MarketplaceDriverPaymentSweepState.md)

### SettlementIntent

`SettlementIntent` *extends* [`MarketplaceDriverPaymentSettlementIntent`](MarketplaceDriverPaymentSettlementIntent.md) = [`MarketplaceDriverPaymentSettlementIntent`](MarketplaceDriverPaymentSettlementIntent.md)

### SettlementState

`SettlementState` *extends* [`MarketplaceDriverPaymentSettlementState`](MarketplaceDriverPaymentSettlementState.md) = [`MarketplaceDriverPaymentSettlementState`](MarketplaceDriverPaymentSettlementState.md)

### SwapResumeContext

`SwapResumeContext` *extends* [`MarketplaceDriverSwapResumeContext`](MarketplaceDriverSwapResumeContext.md) = [`MarketplaceDriverSwapResumeContext`](MarketplaceDriverSwapResumeContext.md)

### SwapResumeState

`SwapResumeState` *extends* [`MarketplaceDriverSwapResumeState`](MarketplaceDriverSwapResumeState.md) = [`MarketplaceDriverSwapResumeState`](MarketplaceDriverSwapResumeState.md)

### ArbitrationIntent

`ArbitrationIntent` = `unknown`

### ArbitrationState

`ArbitrationState` = `never`
