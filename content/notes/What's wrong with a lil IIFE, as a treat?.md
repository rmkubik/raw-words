---
tags:
  - public
---
I prefer to see:
```ts
const value = (() => {
	if (x) return 'option a'
	if (y) return 'option b'
	return 'default'
})()
```

Over:
```ts
const value = x
	? 'option a'
	: y
		? 'option b'
		: 'default'
```

You can even pretend its a cool utility function and not an IIFE if you want:
```ts
const doIt = (func) => func();

const value = doIt(() => {
	if (x) return 'option a'
	if (y) return 'option b'
	return 'default'
})
```

I suppose you could do a one off named function instead:
```ts
const getValue = () => {
	if (x) return 'option a'
	if (y) return 'option b'
	return 'default'
}
const value = getValue();
```

But where's the fun in that?