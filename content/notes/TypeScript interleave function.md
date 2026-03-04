---
tags:
  - public
---

This function is sort of like `zip` + except with an offset

```ts
/**
 * Interleave the values of two arrays
 *
 * ex.
 * arr1 = [1,2,3]
 * arr2 = [a,b]
 * output = interleave(arr1, arr2)
 * output -> [1,a,2,b,3]
 *
 * @param arr1 - longer array
 * @param arr2 - shorter array
 * @returns Array with the contents of arr1 and arr2 joined. Arr2's
 *          values interleaved between each of arr1's.
 */
function interleave<T, U>(
  arr1: ReadonlyArray<T>,
  arr2: ReadonlyArray<U>,
): Array<T | U> {
  return arr1.flatMap((value, index) => {
    const arr2Value = arr2[index];
    return arr2Value !== undefined ? [value, arr2Value] : [value];
  });
}
```

It is possible that this is functionally identical to:
```ts
// Zip two arrays together, flatten the entries, remove any undefined values
zip(arr1, arr2).flat().filter(Boolean)
```

I'd need to test this out in a playground, and I've got other things to do right now! Turns out I don't even need this function any way.