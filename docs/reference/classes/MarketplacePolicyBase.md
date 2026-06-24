# Abstract Class: MarketplacePolicyBase\<RuntimeState, PaymentState, Policy, Asset, Intent, ValidationRequest, ValidationResult, SweepInput, SweepState, SettlementIntent, SettlementState, SwapResumeContext, SwapResumeState, Purpose, Family\>

Defined in: [index.ts:637](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L637)

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

Defined in: [index.ts:676](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L676)

#### Parameters

##### options

[`MarketplacePolicyBaseOptions`](../type-aliases/MarketplacePolicyBaseOptions.md)\<`RuntimeState`, `Purpose`, `Family`\>

#### Returns

`MarketplacePolicyBase`\<`RuntimeState`, `PaymentState`, `Policy`, `Asset`, `Intent`, `ValidationRequest`, `ValidationResult`, `SweepInput`, `SweepState`, `SettlementIntent`, `SettlementState`, `SwapResumeContext`, `SwapResumeState`, `Purpose`, `Family`\>

## Properties

### family

> `readonly` **family**: `Family`

Defined in: [index.ts:671](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L671)

#### Implementation of

`MarketplaceDriverPolicy.family`

***

### id?

> `readonly` `optional` **id?**: `string`

Defined in: [index.ts:668](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L668)

#### Implementation of

`MarketplaceDriverPolicy.id`

***

### label?

> `readonly` `optional` **label?**: `string`

Defined in: [index.ts:669](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L669)

#### Implementation of

`MarketplaceDriverPolicy.label`

***

### logger

> `protected` `readonly` **logger**: [`MarketplaceDriverLogger`](../type-aliases/MarketplaceDriverLogger.md) \| `undefined`

Defined in: [index.ts:674](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L674)

***

### method

> `readonly` **method**: `string`

Defined in: [index.ts:667](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L667)

#### Implementation of

`MarketplaceDriverPolicy.method`

***

### purpose

> `readonly` **purpose**: `Purpose`

Defined in: [index.ts:670](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L670)

#### Implementation of

`MarketplaceDriverPolicy.purpose`

## Methods

### assets()

> `abstract` **assets**(): `Asset`[]

Defined in: [index.ts:688](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L688)

#### Returns

`Asset`[]

#### Implementation of

`MarketplaceDriverPolicy.assets`

***

### defaultStartupData()

> `protected` **defaultStartupData**(`context`): `Record`\<`string`, `unknown`\>

Defined in: [index.ts:748](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L748)

#### Parameters

##### context

[`MarketplaceDriverStartContext`](../type-aliases/MarketplaceDriverStartContext.md)

#### Returns

`Record`\<`string`, `unknown`\>

***

### discoverHighWatermark()

> **discoverHighWatermark**(`context`): `Promise`\<[`MarketplaceDriverWatermarkDiscovery`](../type-aliases/MarketplaceDriverWatermarkDiscovery.md)\>

Defined in: [index.ts:744](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L744)

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

Defined in: [index.ts:816](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L816)

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

Defined in: [index.ts:842](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L842)

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

Defined in: [index.ts:726](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L726)

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

Defined in: [index.ts:731](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L731)

#### Parameters

##### context

[`MarketplaceDriverWatermarkContext`](../type-aliases/MarketplaceDriverWatermarkContext.md)

#### Returns

[`MarketplaceDriverWatermarkDiscovery`](../type-aliases/MarketplaceDriverWatermarkDiscovery.md)

***

### noOpSwapResumeState()

> `protected` **noOpSwapResumeState**(`data`): `SwapResumeState`

Defined in: [index.ts:794](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L794)

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`SwapResumeState`

***

### noOpSweepState()

> `protected` **noOpSweepState**(`data`): `SweepState`

Defined in: [index.ts:771](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L771)

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`SweepState`

***

### patchState()

> `protected` **patchState**(`patch`): `RuntimeState`

Defined in: [index.ts:703](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L703)

#### Parameters

##### patch

`Partial`\<`RuntimeState`\> \| ((`state`) => `Partial`\<`RuntimeState`\>)

#### Returns

`RuntimeState`

***

### pay()

> `abstract` **pay**(`intent`): `AsyncIterable`\<`PaymentState`, `any`, `any`\> \| `Promise`\<`AsyncIterable`\<`PaymentState`, `any`, `any`\>\>

Defined in: [index.ts:690](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L690)

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

Defined in: [index.ts:686](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L686)

#### Returns

`Policy`[]

#### Implementation of

`MarketplaceDriverPolicy.policies`

***

### policyKey()

> `protected` **policyKey**(): `string`

Defined in: [index.ts:713](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L713)

#### Returns

`string`

***

### policyLogger()

> `protected` **policyLogger**(`data?`): [`MarketplaceDriverLogger`](../type-aliases/MarketplaceDriverLogger.md) \| `undefined`

Defined in: [index.ts:717](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L717)

#### Parameters

##### data?

[`MarketplaceDriverLogData`](../type-aliases/MarketplaceDriverLogData.md)

#### Returns

[`MarketplaceDriverLogger`](../type-aliases/MarketplaceDriverLogger.md) \| `undefined`

***

### progressSwapResumeState()

> `protected` **progressSwapResumeState**(`status`, `data?`): `SwapResumeState`

Defined in: [index.ts:801](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L801)

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

Defined in: [index.ts:778](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L778)

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

Defined in: [index.ts:809](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L809)

#### Parameters

##### data?

`Record`\<`string`, `unknown`\>

#### Returns

`SwapResumeState`

***

### setState()

> `protected` **setState**(`nextState`): `RuntimeState`

Defined in: [index.ts:696](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L696)

#### Parameters

##### nextState

`RuntimeState` \| ((`state`) => `RuntimeState`)

#### Returns

`RuntimeState`

***

### startup()

> **startup**(`context`): `Promise`\<[`MarketplaceDriverStartResult`](../type-aliases/MarketplaceDriverStartResult.md)\>

Defined in: [index.ts:756](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L756)

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

Defined in: [index.ts:692](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L692)

#### Returns

`RuntimeState`

***

### sweepPayment()

> **sweepPayment**(`payment`): `AsyncIterable`\<`SweepState`\>

Defined in: [index.ts:763](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L763)

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

Defined in: [index.ts:786](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L786)

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

Defined in: [index.ts:835](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L835)

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

Defined in: [index.ts:849](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L849)

#### Parameters

##### request

[`MarketplaceDriverValidationRequest`](../type-aliases/MarketplaceDriverValidationRequest.md)

#### Returns

`ValidationResult` \| `null`

***

### validateProofPolicyType()

> `protected` **validateProofPolicyType**(`request`, `expectedPolicyType`, `label?`): `ValidationResult` \| `null`

Defined in: [index.ts:855](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L855)

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

Defined in: [index.ts:824](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L824)

#### Parameters

##### status

[`MarketplaceDriverValidationStatus`](../type-aliases/MarketplaceDriverValidationStatus.md)

##### options?

`Omit`\<[`MarketplaceDriverValidationResult`](../type-aliases/MarketplaceDriverValidationResult.md), `"driver"` \| `"status"`\> = `{}`

#### Returns

`ValidationResult`
