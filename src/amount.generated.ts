// Generated from dependencies/marketplace-driver-interface-ts/schemas/amount.schema.json. Do not edit.
export type MarketplaceAmount = {
  value: string
  denomination: string
  decimals: number
  currency?: string
}

const integerUnitsPattern = new RegExp("^(0|-?[1-9][0-9]*)$")

export function parseIntegerUnits(value: unknown): bigint {
  if (typeof value !== 'string' || integerUnitsPattern.exec(value)?.[0] !== value) {
    throw new TypeError('Amount value must be a canonical integer-unit string')
  }
  return BigInt(value)
}

export function parseMarketplaceAmount(value: unknown): MarketplaceAmount {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new TypeError('Invalid marketplace amount')
  const record = value as Record<string, unknown>
  if (typeof record.value !== 'string') throw new TypeError('Invalid amount value')
  if (typeof record.denomination !== 'string' || record.denomination.length < 1) throw new TypeError('Invalid amount denomination')
  if (typeof record.decimals !== 'number' || !Number.isSafeInteger(record.decimals) || record.decimals < 0 || record.decimals > 255) throw new TypeError('Invalid amount decimals')
  if (record.currency !== undefined && (typeof record.currency !== 'string' || record.currency.length < 1)) throw new TypeError('Invalid amount currency')
  parseIntegerUnits(record.value)
  return {
    value: record.value,
    denomination: record.denomination,
    decimals: record.decimals,
    ...(record.currency === undefined ? {} : { currency: record.currency }),
  }
}
