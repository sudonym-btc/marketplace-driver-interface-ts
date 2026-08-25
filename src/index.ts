export type MarketplaceDriverAmount = {
  value: string
  currency?: string
  denomination: string
  decimals: number
}

export type MarketplaceDriverLogLevel = 'debug' | 'info' | 'warn' | 'error'

export type MarketplaceDriverLogData = Record<string, unknown>

export type MarketplaceDriverLogContext = {
  scope?: string
  span?: string
  data?: MarketplaceDriverLogData
}

export type MarketplaceDriverLogEntry = {
  at?: string | number | Date
  level: MarketplaceDriverLogLevel
  scope?: string
  span?: string
  message: string
  data?: MarketplaceDriverLogData
  error?: unknown
}

export type MarketplaceDriverLogMethod = (
  message: string,
  data?: MarketplaceDriverLogData,
  error?: unknown,
) => void | Promise<void>

export type MarketplaceDriverLogger = {
  debug: MarketplaceDriverLogMethod
  info: MarketplaceDriverLogMethod
  warn: MarketplaceDriverLogMethod
  error: MarketplaceDriverLogMethod
  child?: (context: MarketplaceDriverLogContext) => MarketplaceDriverLogger
  span?: <Result>(
    name: string,
    data: MarketplaceDriverLogData | undefined,
    run: (logger: MarketplaceDriverLogger) => Result,
  ) => Result
}

export type MarketplaceDriverIdentity = {
  pubkey?: string
  address?: string
  data?: Record<string, unknown>
}

export type MarketplaceDriverAsset = {
  method: string
  assetId: string
  currency?: string
  denomination: string
  decimals: number
  appId?: string
  chainId?: number
  assetAddress?: string
  data?: Record<string, unknown>
}

export type MarketplaceDriverPolicyDescriptor = {
  method: string
  id: string
  hash?: string
  type?: string
  chainId?: number
  contractAddress?: string
  data?: Record<string, unknown>
}

/**
 * Minimum disclosure protection required by a payment policy.
 *
 * `confidential` keeps driver parameters off the public event while leaving
 * independently verifiable payment terms visible. `secret` seals the complete
 * payment proof. Runtimes MUST treat this value as a minimum and may apply a
 * stricter mode at the caller's request.
 */
export type MarketplaceDriverProofSensitivity = 'public' | 'confidential' | 'secret'

export type MarketplaceDriverContract = {
  type: string
  chainId?: number
  address?: string
  bytecodeHash?: string
  params: Record<string, unknown>
}

export type MarketplaceDriverPaymentIntent = {
  method: string
  purpose: 'order' | 'bid'
  tradeId: string
  settlementId: string
  accountIndex: number
  seed?: string
  amount: MarketplaceDriverAmount
  fee: MarketplaceDriverAmount
  asset: MarketplaceDriverAsset
  policy: MarketplaceDriverPolicyDescriptor
  contract: MarketplaceDriverContract
  participants: {
    buyer?: MarketplaceDriverIdentity
    seller: MarketplaceDriverIdentity
    arbiter: MarketplaceDriverIdentity
  }
  unlockAt: number
  metadata?: Record<string, unknown>
  logger?: MarketplaceDriverLogger
}

export type MarketplaceDriverEncryptedPaymentProofParams = {
  encrypted: true
  version: 1
  scheme: 'nip44'
  proofId: string
  payload: string
}

export type MarketplaceDriverPaymentProofParams =
  | Record<string, unknown>
  | MarketplaceDriverEncryptedPaymentProofParams

export type MarketplaceDriverPaymentTermAmount = {
  value: string
  denomination: string
  decimals: number
  currency?: string
  assetId?: string
}

export type MarketplaceDriverPaymentTermParty = {
  role: string
  id: string
}

export type MarketplaceDriverPaymentTermControl = {
  role: string
  id?: string
  weight?: number
}

export type MarketplaceDriverPaymentTermOutput = {
  role?: string
  id?: string
  amount: MarketplaceDriverPaymentTermAmount
}

export type MarketplaceDriverPaymentTermPathResult =
  | {
      type: 'terminal'
      outputs: MarketplaceDriverPaymentTermOutput[]
    }
  | {
      type: 'lock'
      lock: MarketplaceDriverPaymentTermLock
    }

export type MarketplaceDriverPaymentTermPath = {
  id: string
  requires?: Array<{
    role: string
    condition?: 'signature' | 'timeout' | 'secret' | 'preimage' | string
  }>
  after?: number
  result: MarketplaceDriverPaymentTermPathResult
}

export type MarketplaceDriverPaymentTermLock = {
  id: string
  policyId: string
  kind: 'threshold' | 'timeout' | 'direct' | string
  amount: MarketplaceDriverPaymentTermAmount
  controls: MarketplaceDriverPaymentTermControl[]
  threshold?: number
  conditions?: Record<string, unknown>
  paths?: MarketplaceDriverPaymentTermPath[]
}

export type MarketplaceDriverPaymentTerms = {
  version: 1
  asset: MarketplaceDriverPaymentTermAmount
  parties: MarketplaceDriverPaymentTermParty[]
  lock: MarketplaceDriverPaymentTermLock
}

export type MarketplaceDriverSealedPaymentTerms = {
  version: 1
  mode: 'sealed:v1'
  proofId: string
  payload: string
}

export type MarketplaceDriverPublicPaymentProof = {
  driver: string
  terms: MarketplaceDriverPaymentTerms
  sealedTerms?: never
  params: MarketplaceDriverPaymentProofParams
}

export type MarketplaceDriverSealedTermsPaymentProof = {
  driver: string
  terms?: never
  sealedTerms: MarketplaceDriverSealedPaymentTerms
  params: MarketplaceDriverPaymentProofParams
}

export type MarketplaceDriverPaymentProof =
  | MarketplaceDriverPublicPaymentProof
  | MarketplaceDriverSealedTermsPaymentProof

export type MarketplaceDriverValidationStatus = 'valid' | 'invalid' | 'pending' | 'expired' | 'unverifiable'

export type MarketplaceDriverValidationExpected = {
  settlementId?: string
  tradeId?: string
  listingAnchor?: string
  amount?: MarketplaceDriverAmount
  asset?: {
    currency?: string
    denomination?: string
    decimals?: number
    assetId?: string
  }
  contract?: {
    type?: string
    chainId?: number
    address?: string
    bytecodeHash?: string
    params?: Record<string, unknown>
  }
  participants?: {
    buyer?: MarketplaceDriverIdentity
    seller?: MarketplaceDriverIdentity
    arbiter?: MarketplaceDriverIdentity
  }
  fee?: MarketplaceDriverAmount
}

export type MarketplaceDriverPaymentProofParamsDecryptor = (
  proof: MarketplaceDriverPaymentProof,
) => Record<string, unknown> | Promise<Record<string, unknown>>

export type MarketplaceDriverValidationRequest = {
  driver: string
  proof: MarketplaceDriverPaymentProof
  expected?: MarketplaceDriverValidationExpected
  decryptParams?: MarketplaceDriverPaymentProofParamsDecryptor
  now?: number
}

export type MarketplaceDriverValidatedPaymentTerms = {
  settlementId?: string
  tradeId?: string
  listingAnchor?: string
  paymentAmount?: MarketplaceDriverAmount
  fundedAmount?: MarketplaceDriverAmount
  securityBondAmount?: MarketplaceDriverAmount
  escrowFee?: MarketplaceDriverAmount
  unlockAt?: number
  timeoutClaimant?: string
  asset?: {
    currency?: string
    denomination?: string
    decimals?: number
    assetId?: string
    chainId?: number
  }
  participants?: {
    buyer?: MarketplaceDriverIdentity
    seller?: MarketplaceDriverIdentity
    arbiter?: MarketplaceDriverIdentity
  }
  data?: Record<string, unknown>
}

export type MarketplaceDriverValidationResult = {
  driver: string
  status: MarketplaceDriverValidationStatus
  orderEventId?: string
  proofEventId?: string
  amount?: MarketplaceDriverAmount
  terms?: MarketplaceDriverValidatedPaymentTerms
  confirmations?: number
  amountMatched?: boolean
  assetMatched?: boolean
  recipientMatched?: boolean
  arbiterMatched?: boolean
  data?: Record<string, unknown>
  error?: string
}

export type MarketplaceDriverValidationPolicy<
  Request extends MarketplaceDriverValidationRequest = MarketplaceDriverValidationRequest,
  Result extends MarketplaceDriverValidationResult = MarketplaceDriverValidationResult,
> = {
  driver?: string | '*'
  canValidate?: (request: Request) => boolean | Promise<boolean>
  validatePayment: (request: Request) => Promise<Result>
}

export type MarketplaceDriverBolt11PaymentRequest = {
  type: 'bolt11'
  bolt11: string
  amount?: MarketplaceDriverAmount
  description?: string
  expiresAt?: number
  data?: Record<string, unknown>
}

export type MarketplaceDriverPaymentProgressStage =
  | 'awaiting_external_payment'
  | 'external_payment_detected'
  | 'escrow_finalizing'
  | 'proof_publishing'

export type MarketplaceDriverPaymentProgressData = Record<string, unknown> & {
  stage?: MarketplaceDriverPaymentProgressStage
}

export type MarketplaceDriverPaymentState<Proof extends MarketplaceDriverPaymentProof = MarketplaceDriverPaymentProof> =
  | {
      type: 'payment_required'
      request: MarketplaceDriverBolt11PaymentRequest
      proof?: Proof | null
      data?: Record<string, unknown>
    }
  | {
      type: 'payment_progress'
      status: string
      proof?: Proof | null
      data?: MarketplaceDriverPaymentProgressData
    }
  | {
      type: 'paid'
      proof: Proof
      data?: Record<string, unknown>
    }
  | {
      type: 'completed'
      proof?: Proof | null
      data?: Record<string, unknown>
    }

export type MarketplaceDriverPaymentSweepReason = 'payment' | 'settlement' | 'retry'

export type MarketplaceDriverPaymentSweepInput<
  Proof extends MarketplaceDriverPaymentProof = MarketplaceDriverPaymentProof,
  Expected extends MarketplaceDriverValidationExpected = MarketplaceDriverValidationExpected,
> = {
  paymentId: string
  tradeId: string
  orderGroupId: string
  listingAnchor: string
  createdAt: number
  proof: Proof
  seed?: string
  accountIndex?: number
  expected?: Expected
  amount?: MarketplaceDriverAmount
  reason?: MarketplaceDriverPaymentSweepReason
}

export type MarketplaceDriverPaymentSweepState<Proof extends MarketplaceDriverPaymentProof = MarketplaceDriverPaymentProof> =
  | { type: 'noop'; data?: Record<string, unknown> }
  | { type: 'progress'; status: string; data?: Record<string, unknown> }
  | { type: 'swept'; proof?: Proof | null; data?: Record<string, unknown> }

export type MarketplaceDriverPaymentSettlementOutput = {
  role?: string
  pubkey?: string
  amount?: string
  data?: Record<string, unknown>
}

/**
 * Order settlement actions a driver explicitly supports.
 *
 * Runtimes MUST NOT infer these capabilities from the presence of a generic
 * settlement hook. Financial-action UIs should remain fail-closed when this
 * declaration is absent.
 */
export type MarketplaceDriverOrderSettlementAction = 'release' | 'refund' | 'split' | 'timeout_claim'

export type MarketplaceDriverPaymentSettlementIntent<
  Proof extends MarketplaceDriverPaymentProof = MarketplaceDriverPaymentProof,
  Expected extends MarketplaceDriverValidationExpected = MarketplaceDriverValidationExpected,
> = {
  paymentId: string
  tradeId: string
  orderGroupId: string
  listingAnchor: string
  createdAt: number
  action: string
  proof: Proof
  amount: MarketplaceDriverAmount
  expected?: Expected
  outputs?: MarketplaceDriverPaymentSettlementOutput[]
  reason?: string
  data?: Record<string, unknown>
}

export type MarketplaceDriverPaymentSettlementState<Proof extends MarketplaceDriverPaymentProof = MarketplaceDriverPaymentProof> =
  | { type: 'progress'; status: string; data?: Record<string, unknown> }
  | {
      type: 'settlement_ready'
      proof: Proof
      inputs?: Array<Record<string, unknown>>
      outputs?: MarketplaceDriverPaymentSettlementOutput[]
      data?: Record<string, unknown>
    }
  | {
      type: 'completed'
      proof?: Proof | null
      inputs?: Array<Record<string, unknown>>
      outputs?: MarketplaceDriverPaymentSettlementOutput[]
      data?: Record<string, unknown>
    }

export type MarketplaceDriverSwapResumeContext<Discovery = unknown> = MarketplaceDriverStartContext<Discovery>

export type MarketplaceDriverSwapResumeState =
  | { type: 'noop'; data?: Record<string, unknown> }
  | { type: 'progress'; status: string; data?: Record<string, unknown> }
  | { type: 'resumed'; data?: Record<string, unknown> }
  | { type: 'failed'; error: string; data?: Record<string, unknown> }

export type MarketplaceDriverAuctionSettlementIntent<
  Proof extends MarketplaceDriverPaymentProof = MarketplaceDriverPaymentProof,
  Expected extends MarketplaceDriverValidationExpected = MarketplaceDriverValidationExpected,
> = {
  purpose: 'bid'
  action: 'auction_refund' | 'auction_promote'
  /** Stable retry key chosen by the runtime for this financial action. */
  operationId: string
  seed?: string
  group?: unknown
  bid?: unknown
  payment?: unknown
  proof: Proof
  expected?: Expected
  validation?: unknown
  refundPercent?: number
  winner?: unknown
  targetTradeId?: string
  targetOrderGroupId?: string
  targetUnlockAt?: number
  recycleArgs?: unknown
  data?: Record<string, unknown>
}

export type MarketplaceDriverFinancialActionReceipt = {
  status: 'completed'
  /** MUST equal the operation id supplied in the settlement intent. */
  operationId: string
  /** Provider quote, transaction, melt, or other externally verifiable id. */
  externalId?: string
  /**
   * Driver-local reconciliation evidence. Generic runtimes MUST NOT publish or
   * persist this arbitrary object without an explicit, schema-specific review.
   */
  evidence?: Record<string, unknown>
}

export type MarketplaceDriverAuctionSettlementResult<Proof extends MarketplaceDriverPaymentProof = MarketplaceDriverPaymentProof> = {
  proof: Proof
  /** Proof that the requested financial action actually completed. */
  receipt: MarketplaceDriverFinancialActionReceipt
  /** Driver-local details; generic runtimes MUST NOT expose these by default. */
  inputs?: Array<Record<string, unknown>>
  /** Driver-local details; generic runtimes MUST NOT expose these by default. */
  outputs?: Array<Record<string, unknown>>
  /** Driver-local details; generic runtimes MUST NOT expose these by default. */
  data?: Record<string, unknown>
}

export function isMarketplaceDriverEncryptedPaymentProofParams(
  params: unknown,
): params is MarketplaceDriverEncryptedPaymentProofParams {
  return Boolean(
    params &&
    typeof params === 'object' &&
    !Array.isArray(params) &&
    (params as Record<string, unknown>).encrypted === true &&
    (params as Record<string, unknown>).version === 1 &&
    (params as Record<string, unknown>).scheme === 'nip44' &&
    typeof (params as Record<string, unknown>).proofId === 'string' &&
    typeof (params as Record<string, unknown>).payload === 'string',
  )
}

export async function resolveMarketplaceDriverPaymentProofParams(
  proof: MarketplaceDriverPaymentProof,
  decryptParams?: MarketplaceDriverPaymentProofParamsDecryptor,
): Promise<Record<string, unknown>> {
  if (!isMarketplaceDriverEncryptedPaymentProofParams(proof.params)) {
    return proof.params as Record<string, unknown>
  }
  if (!decryptParams) throw new Error('Encrypted payment proof params require a decryptParams resolver')
  const params = await decryptParams(proof)
  if (!params || typeof params !== 'object' || Array.isArray(params)) {
    throw new Error('Payment proof params resolver returned invalid params')
  }
  return params
}

export type MarketplaceDriverWatermarkRecoveryAction = {
  policy: string
  type: string
  index?: number
  data?: Record<string, unknown>
}

export type MarketplaceDriverWatermarkContext = {
  seed: string
  highWaterMark: number
  unusedWindow: number
  now?: number
  logger?: MarketplaceDriverLogger
}

export type MarketplaceDriverWatermarkDiscovery = {
  policy: string
  maxUsedIndex: number
  nextUnusedIndex?: number
  highWaterMark?: number
  scannedFrom?: number
  scannedThrough?: number
  unusedWindow?: number
  usedIndexes?: number[]
  recoveryActions?: MarketplaceDriverWatermarkRecoveryAction[] | unknown[]
}

export type MarketplaceDriverStartContext<Discovery = unknown> = {
  seed: string
  highWaterMark: number
  nextUnusedIndex: number
  unusedWindow: number
  discovery: Discovery
  now?: number
  logger?: MarketplaceDriverLogger
}

export type MarketplaceDriverStartResult = {
  policy: string
  recoveryActions?: MarketplaceDriverWatermarkRecoveryAction[] | unknown[]
  data?: Record<string, unknown>
}

export type MarketplaceDriverPolicy<
  State = MarketplaceDriverPaymentState,
  Policy extends MarketplaceDriverPolicyDescriptor = MarketplaceDriverPolicyDescriptor,
  Asset extends MarketplaceDriverAsset = MarketplaceDriverAsset,
  Intent extends MarketplaceDriverPaymentIntent = MarketplaceDriverPaymentIntent,
  ValidationRequest extends MarketplaceDriverValidationRequest = MarketplaceDriverValidationRequest,
  ValidationResult extends MarketplaceDriverValidationResult = MarketplaceDriverValidationResult,
  SweepInput extends MarketplaceDriverPaymentSweepInput = MarketplaceDriverPaymentSweepInput,
  SweepState extends MarketplaceDriverPaymentSweepState = MarketplaceDriverPaymentSweepState,
  SettlementIntent extends MarketplaceDriverPaymentSettlementIntent = MarketplaceDriverPaymentSettlementIntent,
  SettlementState extends MarketplaceDriverPaymentSettlementState = MarketplaceDriverPaymentSettlementState,
  SwapResumeContext extends MarketplaceDriverSwapResumeContext = MarketplaceDriverSwapResumeContext,
  SwapResumeState extends MarketplaceDriverSwapResumeState = MarketplaceDriverSwapResumeState,
> = {
  method: string
  id?: string
  label?: string
  proofSensitivity?: MarketplaceDriverProofSensitivity
  purpose: 'order' | 'bid'
  family: 'escrow' | 'auction' | string
  policies(): Policy[]
  assets(): Asset[]
  discoverHighWatermark?: (
    context: MarketplaceDriverWatermarkContext,
  ) => MarketplaceDriverWatermarkDiscovery | Promise<MarketplaceDriverWatermarkDiscovery>
  startup?: (
    context: MarketplaceDriverStartContext,
  ) => void | MarketplaceDriverStartResult | Promise<void | MarketplaceDriverStartResult>
  resumeSwapOperations?: (
    context: SwapResumeContext,
  ) => AsyncIterable<SwapResumeState> | Promise<AsyncIterable<SwapResumeState>>
  pay(intent: Intent): AsyncIterable<State> | Promise<AsyncIterable<State>>
  sweepPayment?: (payment: SweepInput) => AsyncIterable<SweepState> | Promise<AsyncIterable<SweepState>>
  settlePayment?: (payment: SettlementIntent) => AsyncIterable<SettlementState> | Promise<AsyncIterable<SettlementState>>
  validatePayment?: (request: ValidationRequest) => Promise<ValidationResult>
}

export type MarketplaceDriverOrderPolicy<
  State = MarketplaceDriverPaymentState,
  Policy extends MarketplaceDriverPolicyDescriptor = MarketplaceDriverPolicyDescriptor,
  Asset extends MarketplaceDriverAsset = MarketplaceDriverAsset,
  Intent extends MarketplaceDriverPaymentIntent = MarketplaceDriverPaymentIntent,
  ValidationRequest extends MarketplaceDriverValidationRequest = MarketplaceDriverValidationRequest,
  ValidationResult extends MarketplaceDriverValidationResult = MarketplaceDriverValidationResult,
  SweepInput extends MarketplaceDriverPaymentSweepInput = MarketplaceDriverPaymentSweepInput,
  SweepState extends MarketplaceDriverPaymentSweepState = MarketplaceDriverPaymentSweepState,
  SettlementIntent extends MarketplaceDriverPaymentSettlementIntent = MarketplaceDriverPaymentSettlementIntent,
  SettlementState extends MarketplaceDriverPaymentSettlementState = MarketplaceDriverPaymentSettlementState,
  SwapResumeContext extends MarketplaceDriverSwapResumeContext = MarketplaceDriverSwapResumeContext,
  SwapResumeState extends MarketplaceDriverSwapResumeState = MarketplaceDriverSwapResumeState,
  ArbitrationIntent = unknown,
  ArbitrationState = never,
> = MarketplaceDriverPolicy<
  State,
  Policy,
  Asset,
  Intent,
  ValidationRequest,
  ValidationResult,
  SweepInput,
  SweepState,
  SettlementIntent,
  SettlementState,
  SwapResumeContext,
  SwapResumeState
> & {
  purpose: 'order'
  family: 'escrow'
  /** Explicitly supported order settlement actions. Omission means none. */
  settlementActions?: readonly MarketplaceDriverOrderSettlementAction[]
  arbitrate?: (intent: ArbitrationIntent) => AsyncIterable<ArbitrationState> | Promise<AsyncIterable<ArbitrationState>>
}

export type MarketplaceDriverAuctionPolicy<
  State = MarketplaceDriverPaymentState,
  Policy extends MarketplaceDriverPolicyDescriptor = MarketplaceDriverPolicyDescriptor,
  Asset extends MarketplaceDriverAsset = MarketplaceDriverAsset,
  Intent extends MarketplaceDriverPaymentIntent = MarketplaceDriverPaymentIntent,
  ValidationRequest extends MarketplaceDriverValidationRequest = MarketplaceDriverValidationRequest,
  ValidationResult extends MarketplaceDriverValidationResult = MarketplaceDriverValidationResult,
  SweepInput extends MarketplaceDriverPaymentSweepInput = MarketplaceDriverPaymentSweepInput,
  SweepState extends MarketplaceDriverPaymentSweepState = MarketplaceDriverPaymentSweepState,
  PaymentSettlementIntent extends MarketplaceDriverPaymentSettlementIntent = MarketplaceDriverPaymentSettlementIntent,
  PaymentSettlementState extends MarketplaceDriverPaymentSettlementState = MarketplaceDriverPaymentSettlementState,
  SwapResumeContext extends MarketplaceDriverSwapResumeContext = MarketplaceDriverSwapResumeContext,
  SwapResumeState extends MarketplaceDriverSwapResumeState = MarketplaceDriverSwapResumeState,
  SettlementIntent extends MarketplaceDriverAuctionSettlementIntent = MarketplaceDriverAuctionSettlementIntent,
  SettlementResult extends MarketplaceDriverAuctionSettlementResult = MarketplaceDriverAuctionSettlementResult,
  ArbitrationIntent = never,
  ArbitrationState = never,
> = MarketplaceDriverPolicy<
  State,
  Policy,
  Asset,
  Intent,
  ValidationRequest,
  ValidationResult,
  SweepInput,
  SweepState,
  PaymentSettlementIntent,
  PaymentSettlementState,
  SwapResumeContext,
  SwapResumeState
> & {
  purpose: 'bid'
  family: 'auction'
  arbitrate?: never
  refundPayment?: (intent: SettlementIntent & { action: 'auction_refund'; refundPercent: number }) => Promise<SettlementResult>
  recyclePayment?: (
    intent: SettlementIntent & {
      action: 'auction_promote'
      targetTradeId: string
      targetOrderGroupId: string
    },
  ) => Promise<SettlementResult>
}

export type MarketplaceDriverPolicyImplementation = MarketplaceDriverOrderPolicy | MarketplaceDriverAuctionPolicy

export type MarketplacePaymentDriver<Policy extends MarketplaceDriverPolicyImplementation = MarketplaceDriverPolicyImplementation> = {
  method: string
  policies(): Policy[]
}

export type MarketplaceDriverCreateInvoice = (
  amountSats: number,
  description?: string,
) => string | Promise<string>

export type MarketplaceDriverWithdrawalOptions = {
  createInvoice: MarketplaceDriverCreateInvoice
}

export type MarketplaceDriverConstructorOptions = {
  appId?: string
  logger?: MarketplaceDriverLogger
  withdrawals?: MarketplaceDriverWithdrawalOptions
}

export type MarketplacePolicyBaseOptions<
  RuntimeState extends object,
  Purpose extends MarketplaceDriverPaymentIntent['purpose'] = MarketplaceDriverPaymentIntent['purpose'],
  Family extends string = string,
> = {
  method: string
  id?: string
  label?: string
  proofSensitivity?: MarketplaceDriverProofSensitivity
  purpose: Purpose
  family: Family
  initialState: RuntimeState
  logger?: MarketplaceDriverLogger
}

export abstract class MarketplacePolicyBase<
  RuntimeState extends object,
  PaymentState = MarketplaceDriverPaymentState,
  Policy extends MarketplaceDriverPolicyDescriptor = MarketplaceDriverPolicyDescriptor,
  Asset extends MarketplaceDriverAsset = MarketplaceDriverAsset,
  Intent extends MarketplaceDriverPaymentIntent = MarketplaceDriverPaymentIntent,
  ValidationRequest extends MarketplaceDriverValidationRequest = MarketplaceDriverValidationRequest,
  ValidationResult extends MarketplaceDriverValidationResult = MarketplaceDriverValidationResult,
  SweepInput extends MarketplaceDriverPaymentSweepInput = MarketplaceDriverPaymentSweepInput,
  SweepState extends MarketplaceDriverPaymentSweepState = MarketplaceDriverPaymentSweepState,
  SettlementIntent extends MarketplaceDriverPaymentSettlementIntent = MarketplaceDriverPaymentSettlementIntent,
  SettlementState extends MarketplaceDriverPaymentSettlementState = MarketplaceDriverPaymentSettlementState,
  SwapResumeContext extends MarketplaceDriverSwapResumeContext = MarketplaceDriverSwapResumeContext,
  SwapResumeState extends MarketplaceDriverSwapResumeState = MarketplaceDriverSwapResumeState,
  Purpose extends MarketplaceDriverPaymentIntent['purpose'] = MarketplaceDriverPaymentIntent['purpose'],
  Family extends string = string,
> implements MarketplaceDriverPolicy<
  PaymentState,
  Policy,
  Asset,
  Intent,
  ValidationRequest,
  ValidationResult,
  SweepInput,
  SweepState,
  SettlementIntent,
  SettlementState,
  SwapResumeContext,
  SwapResumeState
> {
  readonly method: string
  readonly id?: string
  readonly label?: string
  readonly proofSensitivity?: MarketplaceDriverProofSensitivity
  readonly purpose: Purpose
  readonly family: Family

  private currentState: RuntimeState
  protected readonly logger: MarketplaceDriverLogger | undefined

  protected constructor(options: MarketplacePolicyBaseOptions<RuntimeState, Purpose, Family>) {
    this.method = options.method
    if (options.id !== undefined) this.id = options.id
    if (options.label !== undefined) this.label = options.label
    if (options.proofSensitivity !== undefined) this.proofSensitivity = options.proofSensitivity
    this.purpose = options.purpose
    this.family = options.family
    this.currentState = options.initialState
    this.logger = options.logger
  }

  abstract policies(): Policy[]

  abstract assets(): Asset[]

  abstract pay(intent: Intent): AsyncIterable<PaymentState> | Promise<AsyncIterable<PaymentState>>

  state(): RuntimeState {
    return this.currentState
  }

  protected setState(nextState: RuntimeState | ((state: Readonly<RuntimeState>) => RuntimeState)): RuntimeState {
    this.currentState = typeof nextState === 'function'
      ? (nextState as (state: Readonly<RuntimeState>) => RuntimeState)(this.currentState)
      : nextState
    return this.currentState
  }

  protected patchState(patch: Partial<RuntimeState> | ((state: Readonly<RuntimeState>) => Partial<RuntimeState>)): RuntimeState {
    const nextPatch = typeof patch === 'function'
      ? (patch as (state: Readonly<RuntimeState>) => Partial<RuntimeState>)(this.currentState)
      : patch
    return this.setState({
      ...this.currentState,
      ...nextPatch,
    })
  }

  protected policyKey(): string {
    return this.id ?? this.method
  }

  protected policyLogger(data?: MarketplaceDriverLogData): MarketplaceDriverLogger | undefined {
    if (!this.logger) return undefined
    const context = {
      scope: `${this.method}.${this.policyKey()}`,
      ...(data ? { data } : {}),
    }
    return this.logger.child?.(context) ?? this.logger
  }

  protected log(level: MarketplaceDriverLogLevel, message: string, data?: MarketplaceDriverLogData, error?: unknown): void {
    const logger = this.policyLogger()
    void logger?.[level](message, data, error)
  }

  protected noOpHighWatermarkDiscovery(context: MarketplaceDriverWatermarkContext): MarketplaceDriverWatermarkDiscovery {
    return {
      policy: this.policyKey(),
      maxUsedIndex: context.highWaterMark,
      nextUnusedIndex: context.highWaterMark + 1,
      scannedFrom: context.highWaterMark + 1,
      scannedThrough: context.highWaterMark,
      unusedWindow: context.unusedWindow,
      usedIndexes: [],
      recoveryActions: [],
    }
  }

  async discoverHighWatermark(context: MarketplaceDriverWatermarkContext): Promise<MarketplaceDriverWatermarkDiscovery> {
    return this.noOpHighWatermarkDiscovery(context)
  }

  protected defaultStartupData(context: MarketplaceDriverStartContext): Record<string, unknown> {
    return {
      highWaterMark: context.highWaterMark,
      nextUnusedIndex: context.nextUnusedIndex,
      unusedWindow: context.unusedWindow,
    }
  }

  async startup(context: MarketplaceDriverStartContext): Promise<MarketplaceDriverStartResult> {
    return {
      policy: this.policyKey(),
      data: this.defaultStartupData(context),
    }
  }

  async *sweepPayment(payment: SweepInput): AsyncIterable<SweepState> {
    yield this.noOpSweepState({
      reason: `${this.method} has no payment sweep hook`,
      driver: payment.proof.driver,
      paymentId: payment.paymentId,
    })
  }

  protected noOpSweepState(data: Record<string, unknown>): SweepState {
    return {
      type: 'noop',
      data,
    } as SweepState
  }

  protected progressSweepState(status: string, data?: Record<string, unknown>): SweepState {
    return {
      type: 'progress',
      status,
      ...(data ? { data } : {}),
    } as SweepState
  }

  protected sweptState(proof?: MarketplaceDriverPaymentProof | null, data?: Record<string, unknown>): SweepState {
    return {
      type: 'swept',
      ...(proof !== undefined ? { proof } : {}),
      ...(data ? { data } : {}),
    } as SweepState
  }

  protected noOpSwapResumeState(data: Record<string, unknown>): SwapResumeState {
    return {
      type: 'noop',
      data,
    } as SwapResumeState
  }

  protected progressSwapResumeState(status: string, data?: Record<string, unknown>): SwapResumeState {
    return {
      type: 'progress',
      status,
      ...(data ? { data } : {}),
    } as SwapResumeState
  }

  protected resumedSwapOperationsState(data?: Record<string, unknown>): SwapResumeState {
    return {
      type: 'resumed',
      ...(data ? { data } : {}),
    } as SwapResumeState
  }

  protected failedSwapResumeState(error: string, data?: Record<string, unknown>): SwapResumeState {
    return {
      type: 'failed',
      error,
      ...(data ? { data } : {}),
    } as SwapResumeState
  }

  protected validationResult(
    status: MarketplaceDriverValidationStatus,
    options: Omit<MarketplaceDriverValidationResult, 'driver' | 'status'> = {},
  ): ValidationResult {
    return {
      driver: this.policyKey(),
      status,
      ...options,
    } as ValidationResult
  }

  protected unverifiableValidation(error: string, data?: Record<string, unknown>): ValidationResult {
    return this.validationResult('unverifiable', {
      error,
      ...(data ? { data } : {}),
    })
  }

  protected invalidValidation(error: string, data?: Record<string, unknown>): ValidationResult {
    return this.validationResult('invalid', {
      error,
      ...(data ? { data } : {}),
    })
  }

  protected validateMethod(request: MarketplaceDriverValidationRequest): ValidationResult | null {
    const driver = this.policyKey()
    if (request.driver === driver && request.proof.driver === driver) return null
    return this.unverifiableValidation(`${driver} validator cannot validate ${request.driver}`)
  }

  protected validateProofPolicyType(
    request: MarketplaceDriverValidationRequest,
    expectedPolicyType: string,
    label = 'payment',
  ): ValidationResult | null {
    if (isMarketplaceDriverEncryptedPaymentProofParams(request.proof.params)) return null
    const policyType = request.proof.params.policyType
    if (!policyType || policyType === expectedPolicyType) return null
    return this.unverifiableValidation(`${this.method} ${label} policy cannot validate ${String(policyType)}`)
  }
}
