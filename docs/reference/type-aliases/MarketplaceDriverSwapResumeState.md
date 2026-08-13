# Type Alias: MarketplaceDriverSwapResumeState

> **MarketplaceDriverSwapResumeState** = \{ `data?`: `Record`\<`string`, `unknown`\>; `type`: `"noop"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `status`: `string`; `type`: `"progress"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `type`: `"resumed"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `error`: `string`; `type`: `"failed"`; \}
