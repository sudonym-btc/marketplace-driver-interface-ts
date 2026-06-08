export type MarketplaceDriverAmount = {
  value: string
  denomination: string
  decimals: number
}

export type MarketplaceDriverIdentity = {
  pubkey?: string
  address?: string
  data?: Record<string, unknown>
}

export type MarketplaceDriverAsset = {
  method: string
  assetId: string
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
  subject: 'order' | 'bid'
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
    escrow: MarketplaceDriverIdentity
  }
  unlockAt: number
  metadata?: Record<string, unknown>
}

export type MarketplaceDriverPaymentProof = {
  method: string
  params: Record<string, unknown>
}

export type MarketplaceDriverValidationStatus = 'valid' | 'invalid' | 'pending' | 'expired' | 'unverifiable'

export type MarketplaceDriverValidationExpected = {
  settlementId: string
  tradeId?: string
  listingAnchor?: string
  amount?: MarketplaceDriverAmount
  asset?: {
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
    escrow?: MarketplaceDriverIdentity
  }
  fee?: MarketplaceDriverAmount
}

export type MarketplaceDriverValidationRequest = {
  method: string
  proof: MarketplaceDriverPaymentProof
  expected: MarketplaceDriverValidationExpected
  now?: number
}

export type MarketplaceDriverValidationResult = {
  method: string
  status: MarketplaceDriverValidationStatus
  orderEventId?: string
  proofEventId?: string
  confirmations?: number
  amountMatched?: boolean
  assetMatched?: boolean
  recipientMatched?: boolean
  escrowMatched?: boolean
  data?: Record<string, unknown>
  error?: string
}

export type MarketplaceDriverValidationPolicy<
  Request extends MarketplaceDriverValidationRequest = MarketplaceDriverValidationRequest,
  Result extends MarketplaceDriverValidationResult = MarketplaceDriverValidationResult,
> = {
  method: string | '*'
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
  subject: 'order' | 'bid'
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
  subject: 'bid'
  action: 'auction_refund' | 'auction_promote'
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
  subject: 'order' | 'bid'
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
  subject: 'order'
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
  subject: 'bid'
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
