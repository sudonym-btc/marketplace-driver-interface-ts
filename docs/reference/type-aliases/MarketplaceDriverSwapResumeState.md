# Type Alias: MarketplaceDriverSwapResumeState

> **MarketplaceDriverSwapResumeState** = \{ `data?`: `Record`\<`string`, `unknown`\>; `type`: `"noop"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `status`: `string`; `type`: `"progress"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `type`: `"resumed"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `error`: `string`; `type`: `"failed"`; \}

Defined in: [index.ts:394](https://github.com/sudonym-btc/marketplace-driver-interface-ts/blob/e20243c9ce217d242f8f69103cc3eac2c768b752/src/index.ts#L394)
