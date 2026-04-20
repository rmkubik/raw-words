---
tags:
  - public
---

```ts

/**
 * Split an array into chunks of a specified size.
 */
export function batchArray<T>(array: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
```


example usage:
```ts
const batches = batchArray(ids, 20);
await Promise.all(batches.map(batch => request(batch)))
```