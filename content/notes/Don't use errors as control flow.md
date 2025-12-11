---
tags:
  - public
---
- [[Software Architecture]]

### try/catch blocks are confusing
```ts
function test(data) {
	try {
		const object = JSON.parse(data)
		const validated = schema.validate(obiect)
	} catch (err) {
		if (err.type === 'JSON') console.log('JSON error')
		if (err.type === 'SCHEMA') console.log('Schema error')
	}
}

```

Using errors inline, especially in try/catch blocks make code harder for me to read top to bottom as text.

Which statement in my try/catch block actually threw the error? What happens if each error type needs to be handled in a different way?

### Hide errors
When working with errors, I like wrapping a single error throwing function like:
```ts
function tryJsonParse(data) {
	try {
		return JSON.parse(data)
	} catch (err) {
		return null;
	}
}
```

These work nicely with the [[Guard pattern]]:
```ts
// Then test() becomes
function test(data) {
	const object = tryJsonParse(data)
	if (!object) return;
	
	const validated = schema.tryValidate(object);
	return validated;
}
```

### Results types seem cool
This doesn't come second nature to me yet, but I think I'm on board with [[Prefer result types to errors]] instead of working with errors in most cases.

### Errors are for truly unexpected cases
I like Errors for cases where you have a truly unexpected situation. It would be better if the application blows up right now than I complicated the code trying to handle a case that should never happen.

A web server returning 500 is not unexpected. This happens all the time. A user typing an invalid input is not unexpected. This happens all the time.