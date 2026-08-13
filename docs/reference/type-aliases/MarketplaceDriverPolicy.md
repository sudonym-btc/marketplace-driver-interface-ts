# Type Alias: MarketplaceDriverPolicy\<State, Policy, Asset, Intent, ValidationRequest, ValidationResult, SweepInput, SweepState, SettlementIntent, SettlementState, SwapResumeContext, SwapResumeState\>

> **MarketplaceDriverPolicy**\<`State`, `Policy`, `Asset`, `Intent`, `ValidationRequest`, `ValidationResult`, `SweepInput`, `SweepState`, `SettlementIntent`, `SettlementState`, `SwapResumeContext`, `SwapResumeState`\> = `object`

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

## Properties

### discoverHighWatermark?

> `optional` **discoverHighWatermark?**: (`context`) => [`MarketplaceDriverWatermarkDiscovery`](MarketplaceDriverWatermarkDiscovery.md) \| `Promise`\<[`MarketplaceDriverWatermarkDiscovery`](MarketplaceDriverWatermarkDiscovery.md)\>

#### Parameters

##### context

[`MarketplaceDriverWatermarkContext`](MarketplaceDriverWatermarkContext.md)

#### Returns

[`MarketplaceDriverWatermarkDiscovery`](MarketplaceDriverWatermarkDiscovery.md) \| `Promise`\<[`MarketplaceDriverWatermarkDiscovery`](MarketplaceDriverWatermarkDiscovery.md)\>

***

### family

> **family**: `"escrow"` \| `"auction"` \| `string`

***

### id?

> `optional` **id?**: `string`

***

### label?

> `optional` **label?**: `string`

***

### method

> **method**: `string`

***

### proofSensitivity?

> `optional` **proofSensitivity?**: [`MarketplaceDriverProofSensitivity`](MarketplaceDriverProofSensitivity.md)

***

### purpose

> **purpose**: `"order"` \| `"bid"`

***

### resumeSwapOperations?

> `optional` **resumeSwapOperations?**: (`context`) => `AsyncIterable`\<`SwapResumeState`\> \| `Promise`\<`AsyncIterable`\<`SwapResumeState`\>\>

#### Parameters

##### context

`SwapResumeContext`

#### Returns

`AsyncIterable`\<`SwapResumeState`\> \| `Promise`\<`AsyncIterable`\<`SwapResumeState`\>\>

***

### settlePayment?

> `optional` **settlePayment?**: (`payment`) => `AsyncIterable`\<`SettlementState`\> \| `Promise`\<`AsyncIterable`\<`SettlementState`\>\>

#### Parameters

##### payment

`SettlementIntent`

#### Returns

`AsyncIterable`\<`SettlementState`\> \| `Promise`\<`AsyncIterable`\<`SettlementState`\>\>

***

### startup?

> `optional` **startup?**: (`context`) => `void` \| [`MarketplaceDriverStartResult`](MarketplaceDriverStartResult.md) \| `Promise`\<`void` \| [`MarketplaceDriverStartResult`](MarketplaceDriverStartResult.md)\>

#### Parameters

##### context

[`MarketplaceDriverStartContext`](MarketplaceDriverStartContext.md)

#### Returns

`void` \| [`MarketplaceDriverStartResult`](MarketplaceDriverStartResult.md) \| `Promise`\<`void` \| [`MarketplaceDriverStartResult`](MarketplaceDriverStartResult.md)\>

***

### sweepPayment?

> `optional` **sweepPayment?**: (`payment`) => `AsyncIterable`\<`SweepState`\> \| `Promise`\<`AsyncIterable`\<`SweepState`\>\>

#### Parameters

##### payment

`SweepInput`

#### Returns

`AsyncIterable`\<`SweepState`\> \| `Promise`\<`AsyncIterable`\<`SweepState`\>\>

***

### validatePayment?

> `optional` **validatePayment?**: (`request`) => `Promise`\<`ValidationResult`\>

#### Parameters

##### request

`ValidationRequest`

#### Returns

`Promise`\<`ValidationResult`\>

## Methods

### assets()

> **assets**(): `Asset`[]

#### Returns

`Asset`[]

***

### pay()

> **pay**(`intent`): `AsyncIterable`\<`State`, `any`, `any`\> \| `Promise`\<`AsyncIterable`\<`State`, `any`, `any`\>\>

#### Parameters

##### intent

`Intent`

#### Returns

`AsyncIterable`\<`State`, `any`, `any`\> \| `Promise`\<`AsyncIterable`\<`State`, `any`, `any`\>\>

***

### policies()

> **policies**(): `Policy`[]

#### Returns

`Policy`[]
