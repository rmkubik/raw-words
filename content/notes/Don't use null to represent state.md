---
tags:
  - public
---
# 8/10/26
Instead of saying:
```ts
 /**
   * Id of the env currently being switched to (null when idle).
   */
  targetEnvId?: string | null;
```

Using `null` as a value and then needing a comment to explain it, I think you should use a value:
```ts
const targetEnv: { type: 'env', id: string } | { type: 'idle' }
	= { type: 'idle' }
```

Or you could use a symbol:
```ts
const IdleEnv = Symbol();

const targetEnv: string | typeof IdleEnv = IdleEnv
```

But, I think all of this maybe suggests there is a larger "state" object that could be constructed to prevent invalid states.