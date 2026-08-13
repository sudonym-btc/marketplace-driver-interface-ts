# Abstract Class: MarketplacePolicyBase\<RuntimeState, PaymentState, Policy, Asset, Intent, ValidationRequest, ValidationResult, SweepInput, SweepState, SettlementIntent, SettlementState, SwapResumeContext, SwapResumeState, Purpose, Family\>

## Type Parameters

### RuntimeState

`RuntimeState` *extends* `object`

### PaymentState

`PaymentState` = [`MarketplaceDriverPaymentState`](../type-aliases/MarketplaceDriverPaymentState.md)

### Policy

`Policy` *extends* [`MarketplaceDriverPolicyDescriptor`](../type-aliases/MarketplaceDriverPolicyDescriptor.md) = [`MarketplaceDriverPolicyDescriptor`](../type-aliases/MarketplaceDriverPolicyDescriptor.md)

### Asset

`Asset` *extends* [`MarketplaceDriverAsset`](../type-aliases/MarketplaceDriverAsset.md) = [`MarketplaceDriverAsset`](../type-aliases/MarketplaceDriverAsset.md)

### Intent

`Intent` *extends* [`MarketplaceDriverPaymentIntent`](../type-aliases/MarketplaceDriverPaymentIntent.md) = [`MarketplaceDriverPaymentIntent`](../type-aliases/MarketplaceDriverPaymentIntent.md)

### ValidationRequest

`ValidationRequest` *extends* [`MarketplaceDriverValidationRequest`](../type-aliases/MarketplaceDriverValidationRequest.md) = [`MarketplaceDriverValidationRequest`](../type-aliases/MarketplaceDriverValidationRequest.md)

### ValidationResult

`ValidationResult` *extends* [`MarketplaceDriverValidationResult`](../type-aliases/MarketplaceDriverValidationResult.md) = [`MarketplaceDriverValidationResult`](../type-aliases/MarketplaceDriverValidationResult.md)

### SweepInput

`SweepInput` *extends* [`MarketplaceDriverPaymentSweepInput`](../type-aliases/MarketplaceDriverPaymentSweepInput.md) = [`MarketplaceDriverPaymentSweepInput`](../type-aliases/MarketplaceDriverPaymentSweepInput.md)

### SweepState

`SweepState` *extends* [`MarketplaceDriverPaymentSweepState`](../type-aliases/MarketplaceDriverPaymentSweepState.md) = [`MarketplaceDriverPaymentSweepState`](../type-aliases/MarketplaceDriverPaymentSweepState.md)

### SettlementIntent

`SettlementIntent` *extends* [`MarketplaceDriverPaymentSettlementIntent`](../type-aliases/MarketplaceDriverPaymentSettlementIntent.md) = [`MarketplaceDriverPaymentSettlementIntent`](../type-aliases/MarketplaceDriverPaymentSettlementIntent.md)

### SettlementState

`SettlementState` *extends* [`MarketplaceDriverPaymentSettlementState`](../type-aliases/MarketplaceDriverPaymentSettlementState.md) = [`MarketplaceDriverPaymentSettlementState`](../type-aliases/MarketplaceDriverPaymentSettlementState.md)

### SwapResumeContext

`SwapResumeContext` *extends* [`MarketplaceDriverSwapResumeContext`](../type-aliases/MarketplaceDriverSwapResumeContext.md) = [`MarketplaceDriverSwapResumeContext`](../type-aliases/MarketplaceDriverSwapResumeContext.md)

### SwapResumeState

`SwapResumeState` *extends* [`MarketplaceDriverSwapResumeState`](../type-aliases/MarketplaceDriverSwapResumeState.md) = [`MarketplaceDriverSwapResumeState`](../type-aliases/MarketplaceDriverSwapResumeState.md)

### Purpose

`Purpose` *extends* [`MarketplaceDriverPaymentIntent`](../type-aliases/MarketplaceDriverPaymentIntent.md)\[`"purpose"`\] = [`MarketplaceDriverPaymentIntent`](../type-aliases/MarketplaceDriverPaymentIntent.md)\[`"purpose"`\]

### Family

`Family` *extends* `string` = `string`

## Implements

- [`MarketplaceDriverPolicy`](../type-aliases/MarketplaceDriverPolicy.md)\<`PaymentState`, `Policy`, `Asset`, `Intent`, `ValidationRequest`, `ValidationResult`, `SweepInput`, `SweepState`, `SettlementIntent`, `SettlementState`, `SwapResumeContext`, `SwapResumeState`\>

## Constructors

### Constructor

> `protected` **new MarketplacePolicyBase**\<`RuntimeState`, `PaymentState`, `Policy`, `Asset`, `Intent`, `ValidationRequest`, `ValidationResult`, `SweepInput`, `SweepState`, `SettlementIntent`, `SettlementState`, `SwapResumeContext`, `SwapResumeState`, `Purpose`, `Family`\>(`options`): `MarketplacePolicyBase`\<`RuntimeState`, `PaymentState`, `Policy`, `Asset`, `Intent`, `ValidationRequest`, `ValidationResult`, `SweepInput`, `SweepState`, `SettlementIntent`, `SettlementState`, `SwapResumeContext`, `SwapResumeState`, `Purpose`, `Family`\>

#### Parameters

##### options

[`MarketplacePolicyBaseOptions`](../type-aliases/MarketplacePolicyBaseOptions.md)\<`RuntimeState`, `Purpose`, `Family`\>

#### Returns

`MarketplacePolicyBase`\<`RuntimeState`, `PaymentState`, `Policy`, `Asset`, `Intent`, `ValidationRequest`, `ValidationResult`, `SweepInput`, `SweepState`, `SettlementIntent`, `SettlementState`, `SwapResumeContext`, `SwapResumeState`, `Purpose`, `Family`\>

## Properties

### family

> `readonly` **family**: `Family`

#### Implementation of

`MarketplaceDriverPolicy.family`

***

### id?

> `readonly` `optional` **id?**: `string`

#### Implementation of

`MarketplaceDriverPolicy.id`

***

### label?

> `readonly` `optional` **label?**: `string`

#### Implementation of

`MarketplaceDriverPolicy.label`

***

### logger

> `protected` `readonly` **logger**: [`MarketplaceDriverLogger`](../type-aliases/MarketplaceDriverLogger.md) \| `undefined`

***

### method

> `readonly` **method**: `string`

#### Implementation of

`MarketplaceDriverPolicy.method`

***

### proofSensitivity?

> `readonly` `optional` **proofSensitivity?**: [`MarketplaceDriverProofSensitivity`](../type-aliases/MarketplaceDriverProofSensitivity.md)

#### Implementation of

`MarketplaceDriverPolicy.proofSensitivity`

***

### purpose

> `readonly` **purpose**: `Purpose`

#### Implementation of

`MarketplaceDriverPolicy.purpose`

## Methods

### assets()

> `abstract` **assets**(): `Asset`[]

#### Returns

`Asset`[]

#### Implementation of

`MarketplaceDriverPolicy.assets`

***

### defaultStartupData()

> `protected` **defaultStartupData**(`context`): `Record`\<`string`, `unknown`\>

#### Parameters

##### context

[`MarketplaceDriverStartContext`](../type-aliases/MarketplaceDriverStartContext.md)

#### Returns

`Record`\<`string`, `unknown`\>

***

### discoverHighWatermark()

> **discoverHighWatermark**(`context`): `Promise`\<[`MarketplaceDriverWatermarkDiscovery`](../type-aliases/MarketplaceDriverWatermarkDiscovery.md)\>

#### Parameters

##### context

[`MarketplaceDriverWatermarkContext`](../type-aliases/MarketplaceDriverWatermarkContext.md)

#### Returns

`Promise`\<[`MarketplaceDriverWatermarkDiscovery`](../type-aliases/MarketplaceDriverWatermarkDiscovery.md)\>

#### Implementation of

`MarketplaceDriverPolicy.discoverHighWatermark`

***

### failedSwapResumeState()

> `protected` **failedSwapResumeState**(`error`, `data?`): `SwapResumeState`

#### Parameters

##### error

`string`

##### data?

`Record`\<`string`, `unknown`\>

#### Returns

`SwapResumeState`

***

### invalidValidation()

> `protected` **invalidValidation**(`error`, `data?`): `ValidationResult`

#### Parameters

##### error

`string`

##### data?

`Record`\<`string`, `unknown`\>

#### Returns

`ValidationResult`

***

### log()

> `protected` **log**(`level`, `message`, `data?`, `error?`): `void`

#### Parameters

##### level

[`MarketplaceDriverLogLevel`](../type-aliases/MarketplaceDriverLogLevel.md)

##### message

`string`

##### data?

[`MarketplaceDriverLogData`](../type-aliases/MarketplaceDriverLogData.md)

##### error?

`unknown`

#### Returns

`void`

***

### noOpHighWatermarkDiscovery()

> `protected` **noOpHighWatermarkDiscovery**(`context`): [`MarketplaceDriverWatermarkDiscovery`](../type-aliases/MarketplaceDriverWatermarkDiscovery.md)

#### Parameters

##### context

[`MarketplaceDriverWatermarkContext`](../type-aliases/MarketplaceDriverWatermarkContext.md)

#### Returns

[`MarketplaceDriverWatermarkDiscovery`](../type-aliases/MarketplaceDriverWatermarkDiscovery.md)

***

### noOpSwapResumeState()

> `protected` **noOpSwapResumeState**(`data`): `SwapResumeState`

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`SwapResumeState`

***

### noOpSweepState()

> `protected` **noOpSweepState**(`data`): `SweepState`

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`SweepState`

***

### patchState()

> `protected` **patchState**(`patch`): `RuntimeState`

#### Parameters

##### patch

`Partial`\<`RuntimeState`\> \| ((`state`) => `Partial`\<`RuntimeState`\>)

#### Returns

`RuntimeState`

***

### pay()

> `abstract` **pay**(`intent`): `AsyncIterable`\<`PaymentState`, `any`, `any`\> \| `Promise`\<`AsyncIterable`\<`PaymentState`, `any`, `any`\>\>

#### Parameters

##### intent

`Intent`

#### Returns

`AsyncIterable`\<`PaymentState`, `any`, `any`\> \| `Promise`\<`AsyncIterable`\<`PaymentState`, `any`, `any`\>\>

#### Implementation of

`MarketplaceDriverPolicy.pay`

***

### policies()

> `abstract` **policies**(): `Policy`[]

#### Returns

`Policy`[]

#### Implementation of

`MarketplaceDriverPolicy.policies`

***

### policyKey()

> `protected` **policyKey**(): `string`

#### Returns

`string`

***

### policyLogger()

> `protected` **policyLogger**(`data?`): [`MarketplaceDriverLogger`](../type-aliases/MarketplaceDriverLogger.md) \| `undefined`

#### Parameters

##### data?

[`MarketplaceDriverLogData`](../type-aliases/MarketplaceDriverLogData.md)

#### Returns

[`MarketplaceDriverLogger`](../type-aliases/MarketplaceDriverLogger.md) \| `undefined`

***

### progressSwapResumeState()

> `protected` **progressSwapResumeState**(`status`, `data?`): `SwapResumeState`

#### Parameters

##### status

`string`

##### data?

`Record`\<`string`, `unknown`\>

#### Returns

`SwapResumeState`

***

### progressSweepState()

> `protected` **progressSweepState**(`status`, `data?`): `SweepState`

#### Parameters

##### status

`string`

##### data?

`Record`\<`string`, `unknown`\>

#### Returns

`SweepState`

***

### resumedSwapOperationsState()

> `protected` **resumedSwapOperationsState**(`data?`): `SwapResumeState`

#### Parameters

##### data?

`Record`\<`string`, `unknown`\>

#### Returns

`SwapResumeState`

***

### setState()

> `protected` **setState**(`nextState`): `RuntimeState`

#### Parameters

##### nextState

`RuntimeState` \| ((`state`) => `RuntimeState`)

#### Returns

`RuntimeState`

***

### startup()

> **startup**(`context`): `Promise`\<[`MarketplaceDriverStartResult`](../type-aliases/MarketplaceDriverStartResult.md)\>

#### Parameters

##### context

[`MarketplaceDriverStartContext`](../type-aliases/MarketplaceDriverStartContext.md)

#### Returns

`Promise`\<[`MarketplaceDriverStartResult`](../type-aliases/MarketplaceDriverStartResult.md)\>

#### Implementation of

`MarketplaceDriverPolicy.startup`

***

### state()

> **state**(): `RuntimeState`

#### Returns

`RuntimeState`

***

### sweepPayment()

> **sweepPayment**(`payment`): `AsyncIterable`\<`SweepState`\>

#### Parameters

##### payment

`SweepInput`

#### Returns

`AsyncIterable`\<`SweepState`\>

#### Implementation of

`MarketplaceDriverPolicy.sweepPayment`

***

### sweptState()

> `protected` **sweptState**(`proof?`, `data?`): `SweepState`

#### Parameters

##### proof?

[`MarketplaceDriverPaymentProof`](../type-aliases/MarketplaceDriverPaymentProof.md) \| `null`

##### data?

`Record`\<`string`, `unknown`\>

#### Returns

`SweepState`

***

### unverifiableValidation()

> `protected` **unverifiableValidation**(`error`, `data?`): `ValidationResult`

#### Parameters

##### error

`string`

##### data?

`Record`\<`string`, `unknown`\>

#### Returns

`ValidationResult`

***

### validateMethod()

> `protected` **validateMethod**(`request`): `ValidationResult` \| `null`

#### Parameters

##### request

[`MarketplaceDriverValidationRequest`](../type-aliases/MarketplaceDriverValidationRequest.md)

#### Returns

`ValidationResult` \| `null`

***

### validateProofPolicyType()

> `protected` **validateProofPolicyType**(`request`, `expectedPolicyType`, `label?`): `ValidationResult` \| `null`

#### Parameters

##### request

[`MarketplaceDriverValidationRequest`](../type-aliases/MarketplaceDriverValidationRequest.md)

##### expectedPolicyType

`string`

##### label?

`string` = `'payment'`

#### Returns

`ValidationResult` \| `null`

***

### validationResult()

> `protected` **validationResult**(`status`, `options?`): `ValidationResult`

#### Parameters

##### status

[`MarketplaceDriverValidationStatus`](../type-aliases/MarketplaceDriverValidationStatus.md)

##### options?

`Omit`\<[`MarketplaceDriverValidationResult`](../type-aliases/MarketplaceDriverValidationResult.md), `"driver"` \| `"status"`\> = `{}`

#### Returns

`ValidationResult`
