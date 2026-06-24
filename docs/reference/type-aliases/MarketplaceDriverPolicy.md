# Type Alias: MarketplaceDriverPolicy\<State, Policy, Asset, Intent, ValidationRequest, ValidationResult, SweepInput, SweepState, SettlementIntent, SettlementState, SwapResumeContext, SwapResumeState\>

> **MarketplaceDriverPolicy**\<`State`, `Policy`, `Asset`, `Intent`, `ValidationRequest`, `ValidationResult`, `SweepInput`, `SweepState`, `SettlementIntent`, `SettlementState`, `SwapResumeContext`, `SwapResumeState`\> = `object`

Defined in: [index.ts:502](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L502)

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

Defined in: [index.ts:523](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L523)

#### Parameters

##### context

[`MarketplaceDriverWatermarkContext`](MarketplaceDriverWatermarkContext.md)

#### Returns

[`MarketplaceDriverWatermarkDiscovery`](MarketplaceDriverWatermarkDiscovery.md) \| `Promise`\<[`MarketplaceDriverWatermarkDiscovery`](MarketplaceDriverWatermarkDiscovery.md)\>

***

### family

> **family**: `"escrow"` \| `"auction"` \| `string`

Defined in: [index.ts:520](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L520)

***

### id?

> `optional` **id?**: `string`

Defined in: [index.ts:517](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L517)

***

### label?

> `optional` **label?**: `string`

Defined in: [index.ts:518](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L518)

***

### method

> **method**: `string`

Defined in: [index.ts:516](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L516)

***

### purpose

> **purpose**: `"order"` \| `"bid"`

Defined in: [index.ts:519](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L519)

***

### resumeSwapOperations?

> `optional` **resumeSwapOperations?**: (`context`) => `AsyncIterable`\<`SwapResumeState`\> \| `Promise`\<`AsyncIterable`\<`SwapResumeState`\>\>

Defined in: [index.ts:529](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L529)

#### Parameters

##### context

`SwapResumeContext`

#### Returns

`AsyncIterable`\<`SwapResumeState`\> \| `Promise`\<`AsyncIterable`\<`SwapResumeState`\>\>

***

### settlePayment?

> `optional` **settlePayment?**: (`payment`) => `AsyncIterable`\<`SettlementState`\> \| `Promise`\<`AsyncIterable`\<`SettlementState`\>\>

Defined in: [index.ts:534](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L534)

#### Parameters

##### payment

`SettlementIntent`

#### Returns

`AsyncIterable`\<`SettlementState`\> \| `Promise`\<`AsyncIterable`\<`SettlementState`\>\>

***

### startup?

> `optional` **startup?**: (`context`) => `void` \| [`MarketplaceDriverStartResult`](MarketplaceDriverStartResult.md) \| `Promise`\<`void` \| [`MarketplaceDriverStartResult`](MarketplaceDriverStartResult.md)\>

Defined in: [index.ts:526](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L526)

#### Parameters

##### context

[`MarketplaceDriverStartContext`](MarketplaceDriverStartContext.md)

#### Returns

`void` \| [`MarketplaceDriverStartResult`](MarketplaceDriverStartResult.md) \| `Promise`\<`void` \| [`MarketplaceDriverStartResult`](MarketplaceDriverStartResult.md)\>

***

### sweepPayment?

> `optional` **sweepPayment?**: (`payment`) => `AsyncIterable`\<`SweepState`\> \| `Promise`\<`AsyncIterable`\<`SweepState`\>\>

Defined in: [index.ts:533](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L533)

#### Parameters

##### payment

`SweepInput`

#### Returns

`AsyncIterable`\<`SweepState`\> \| `Promise`\<`AsyncIterable`\<`SweepState`\>\>

***

### validatePayment?

> `optional` **validatePayment?**: (`request`) => `Promise`\<`ValidationResult`\>

Defined in: [index.ts:535](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L535)

#### Parameters

##### request

`ValidationRequest`

#### Returns

`Promise`\<`ValidationResult`\>

## Methods

### assets()

> **assets**(): `Asset`[]

Defined in: [index.ts:522](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L522)

#### Returns

`Asset`[]

***

### pay()

> **pay**(`intent`): `AsyncIterable`\<`State`, `any`, `any`\> \| `Promise`\<`AsyncIterable`\<`State`, `any`, `any`\>\>

Defined in: [index.ts:532](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L532)

#### Parameters

##### intent

`Intent`

#### Returns

`AsyncIterable`\<`State`, `any`, `any`\> \| `Promise`\<`AsyncIterable`\<`State`, `any`, `any`\>\>

***

### policies()

> **policies**(): `Policy`[]

Defined in: [index.ts:521](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L521)

#### Returns

`Policy`[]
