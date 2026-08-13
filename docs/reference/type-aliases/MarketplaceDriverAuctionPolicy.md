# Type Alias: MarketplaceDriverAuctionPolicy\<State, Policy, Asset, Intent, ValidationRequest, ValidationResult, SweepInput, SweepState, PaymentSettlementIntent, PaymentSettlementState, SwapResumeContext, SwapResumeState, SettlementIntent, SettlementResult, ArbitrationIntent, ArbitrationState\>

> **MarketplaceDriverAuctionPolicy**\<`State`, `Policy`, `Asset`, `Intent`, `ValidationRequest`, `ValidationResult`, `SweepInput`, `SweepState`, `PaymentSettlementIntent`, `PaymentSettlementState`, `SwapResumeContext`, `SwapResumeState`, `SettlementIntent`, `SettlementResult`, `ArbitrationIntent`, `ArbitrationState`\> = [`MarketplaceDriverPolicy`](MarketplaceDriverPolicy.md)\<`State`, `Policy`, `Asset`, `Intent`, `ValidationRequest`, `ValidationResult`, `SweepInput`, `SweepState`, `PaymentSettlementIntent`, `PaymentSettlementState`, `SwapResumeContext`, `SwapResumeState`\> & `object`

## Type Declaration

### arbitrate?

> `optional` **arbitrate?**: `never`

### family

> **family**: `"auction"`

### purpose

> **purpose**: `"bid"`

### recyclePayment?

> `optional` **recyclePayment?**: (`intent`) => `Promise`\<`SettlementResult`\>

#### Parameters

##### intent

`SettlementIntent` & `object`

#### Returns

`Promise`\<`SettlementResult`\>

### refundPayment?

> `optional` **refundPayment?**: (`intent`) => `Promise`\<`SettlementResult`\>

#### Parameters

##### intent

`SettlementIntent` & `object`

#### Returns

`Promise`\<`SettlementResult`\>

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

### PaymentSettlementIntent

`PaymentSettlementIntent` *extends* [`MarketplaceDriverPaymentSettlementIntent`](MarketplaceDriverPaymentSettlementIntent.md) = [`MarketplaceDriverPaymentSettlementIntent`](MarketplaceDriverPaymentSettlementIntent.md)

### PaymentSettlementState

`PaymentSettlementState` *extends* [`MarketplaceDriverPaymentSettlementState`](MarketplaceDriverPaymentSettlementState.md) = [`MarketplaceDriverPaymentSettlementState`](MarketplaceDriverPaymentSettlementState.md)

### SwapResumeContext

`SwapResumeContext` *extends* [`MarketplaceDriverSwapResumeContext`](MarketplaceDriverSwapResumeContext.md) = [`MarketplaceDriverSwapResumeContext`](MarketplaceDriverSwapResumeContext.md)

### SwapResumeState

`SwapResumeState` *extends* [`MarketplaceDriverSwapResumeState`](MarketplaceDriverSwapResumeState.md) = [`MarketplaceDriverSwapResumeState`](MarketplaceDriverSwapResumeState.md)

### SettlementIntent

`SettlementIntent` *extends* [`MarketplaceDriverAuctionSettlementIntent`](MarketplaceDriverAuctionSettlementIntent.md) = [`MarketplaceDriverAuctionSettlementIntent`](MarketplaceDriverAuctionSettlementIntent.md)

### SettlementResult

`SettlementResult` *extends* [`MarketplaceDriverAuctionSettlementResult`](MarketplaceDriverAuctionSettlementResult.md) = [`MarketplaceDriverAuctionSettlementResult`](MarketplaceDriverAuctionSettlementResult.md)

### ArbitrationIntent

`ArbitrationIntent` = `never`

### ArbitrationState

`ArbitrationState` = `never`
