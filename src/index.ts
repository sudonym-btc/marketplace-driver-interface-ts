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

export type MarketplaceDriverPaymentProof = {
  driver: string
  params: MarketplaceDriverPaymentProofParams
}

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
      data?: Record<string, unknown>
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

export type MarketplaceDriverRecoveryItem<
  Proof extends MarketplaceDriverPaymentProof = MarketplaceDriverPaymentProof,
  Expected extends MarketplaceDriverValidationExpected = MarketplaceDriverValidationExpected,
> = {
  purpose: 'order' | 'bid'
  group?: unknown
  payment?: unknown
  proof: Proof
  expected?: Expected
}

export type MarketplaceDriverRecoveryState<Proof extends MarketplaceDriverPaymentProof = MarketplaceDriverPaymentProof> =
  | { type: 'noop'; data?: Record<string, unknown> }
  | { type: 'progress'; status: string; data?: Record<string, unknown> }
  | { type: 'recovered'; data?: Record<string, unknown> }
  | { type: 'settlement_ready'; proof: Proof; data?: Record<string, unknown> }

export type MarketplaceDriverAuctionSettlementIntent<
  Proof extends MarketplaceDriverPaymentProof = MarketplaceDriverPaymentProof,
  Expected extends MarketplaceDriverValidationExpected = MarketplaceDriverValidationExpected,
> = {
  purpose: 'bid'
  action: 'auction_refund' | 'auction_promote'
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

export type MarketplaceDriverAuctionSettlementResult<Proof extends MarketplaceDriverPaymentProof = MarketplaceDriverPaymentProof> = {
  proof: Proof
  inputs?: Array<Record<string, unknown>>
  outputs?: Array<Record<string, unknown>>
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
  RecoveryItem extends MarketplaceDriverRecoveryItem = MarketplaceDriverRecoveryItem,
  RecoveryState extends MarketplaceDriverRecoveryState = MarketplaceDriverRecoveryState,
> = {
  method: string
  id?: string
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
  pay(intent: Intent): AsyncIterable<State> | Promise<AsyncIterable<State>>
  recover?: (payment: RecoveryItem) => AsyncIterable<RecoveryState> | Promise<AsyncIterable<RecoveryState>>
  validatePayment?: (request: ValidationRequest) => Promise<ValidationResult>
}

export type MarketplaceDriverOrderPolicy<
  State = MarketplaceDriverPaymentState,
  Policy extends MarketplaceDriverPolicyDescriptor = MarketplaceDriverPolicyDescriptor,
  Asset extends MarketplaceDriverAsset = MarketplaceDriverAsset,
  Intent extends MarketplaceDriverPaymentIntent = MarketplaceDriverPaymentIntent,
  ValidationRequest extends MarketplaceDriverValidationRequest = MarketplaceDriverValidationRequest,
  ValidationResult extends MarketplaceDriverValidationResult = MarketplaceDriverValidationResult,
  RecoveryItem extends MarketplaceDriverRecoveryItem = MarketplaceDriverRecoveryItem,
  RecoveryState extends MarketplaceDriverRecoveryState = MarketplaceDriverRecoveryState,
  ArbitrationIntent = unknown,
  ArbitrationState = never,
> = MarketplaceDriverPolicy<
  State,
  Policy,
  Asset,
  Intent,
  ValidationRequest,
  ValidationResult,
  RecoveryItem,
  RecoveryState
> & {
  purpose: 'order'
  family: 'escrow'
  arbitrate?: (intent: ArbitrationIntent) => AsyncIterable<ArbitrationState> | Promise<AsyncIterable<ArbitrationState>>
}

export type MarketplaceDriverAuctionPolicy<
  State = MarketplaceDriverPaymentState,
  Policy extends MarketplaceDriverPolicyDescriptor = MarketplaceDriverPolicyDescriptor,
  Asset extends MarketplaceDriverAsset = MarketplaceDriverAsset,
  Intent extends MarketplaceDriverPaymentIntent = MarketplaceDriverPaymentIntent,
  ValidationRequest extends MarketplaceDriverValidationRequest = MarketplaceDriverValidationRequest,
  ValidationResult extends MarketplaceDriverValidationResult = MarketplaceDriverValidationResult,
  RecoveryItem extends MarketplaceDriverRecoveryItem = MarketplaceDriverRecoveryItem,
  RecoveryState extends MarketplaceDriverRecoveryState = MarketplaceDriverRecoveryState,
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
  RecoveryItem,
  RecoveryState
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

export type MarketplacePolicyBaseOptions<
  RuntimeState extends object,
  Purpose extends MarketplaceDriverPaymentIntent['purpose'] = MarketplaceDriverPaymentIntent['purpose'],
  Family extends string = string,
> = {
  method: string
  id?: string
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
  RecoveryItem extends MarketplaceDriverRecoveryItem = MarketplaceDriverRecoveryItem,
  RecoveryState extends MarketplaceDriverRecoveryState = MarketplaceDriverRecoveryState,
  Purpose extends MarketplaceDriverPaymentIntent['purpose'] = MarketplaceDriverPaymentIntent['purpose'],
  Family extends string = string,
> implements MarketplaceDriverPolicy<
  PaymentState,
  Policy,
  Asset,
  Intent,
  ValidationRequest,
  ValidationResult,
  RecoveryItem,
  RecoveryState
> {
  readonly method: string
  readonly id?: string
  readonly purpose: Purpose
  readonly family: Family

  private currentState: RuntimeState
  protected readonly logger: MarketplaceDriverLogger | undefined

  protected constructor(options: MarketplacePolicyBaseOptions<RuntimeState, Purpose, Family>) {
    this.method = options.method
    if (options.id !== undefined) this.id = options.id
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

  async *recover(payment: RecoveryItem): AsyncIterable<RecoveryState> {
    yield this.noOpRecoveryState({
      reason: `${this.method} recovery is handled by startup`,
      purpose: payment.purpose,
      driver: payment.proof.driver,
    })
  }

  protected noOpRecoveryState(data: Record<string, unknown>): RecoveryState {
    return {
      type: 'noop',
      data,
    } as RecoveryState
  }

  protected progressRecoveryState(status: string, data?: Record<string, unknown>): RecoveryState {
    return {
      type: 'progress',
      status,
      ...(data ? { data } : {}),
    } as RecoveryState
  }

  protected recoveredState(data?: Record<string, unknown>): RecoveryState {
    return {
      type: 'recovered',
      ...(data ? { data } : {}),
    } as RecoveryState
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
