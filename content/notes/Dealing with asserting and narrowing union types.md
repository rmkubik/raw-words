---
tags:
  - public
---
- [[TypeScript]]
- [[Utility Functions]]
## Two approaches for dealing with union types:

Given a union type in this fake scenario:
```ts
type CommandA = {
	id: 'A',
	uniqueToA: 'uniqueToA'
}
type CommandB = {
	id: 'B',
	uniqueToB: 'uniqueToB'
}
type Command = CommandA | CommandB;

function handleCommand(command: Command) {
  console.log(command.uniqueToB);
}
```
You'll get a TS error on `uniqueToB` because both commands do not implement this attribute. In this contrived scenario you could just accept a `CommandB` instead of a command, but just roll with it the way it is for now.

## Type Guard
```ts
function isCommandB(command: Command): command is CommandB {
  return command.id === 'B';
}
```

### Type Assertion
Source: https://blog.logrocket.com/assertion-functions-typescript
```ts
function assertCommand<T extends Command>(
  isOfKind: (command: Command) => command is T,
  command: Command,
): asserts command is T {
  if (!isOfKind(command)) {
    throw new Error(`Command is not the asserted type`);
  }
}
```

In use:
```ts
function handleCommand(command: Command) {
  assertCommand(isCommandB, command);
  console.log(command.uniqueToB);
}
```
No more TS errors! Assertions let us use the type inline from then on.

### Type Narrowing (type predicates?)
```ts
function narrowCommand <T extends Command>(
  isOfKind: (command: Command) => command is T,
  command: Command,
): command is T {
  return !!command && isOfKind(command);
}
```

In use:
```ts
function handleCommandWithNarrowing(command: Command) {
  if (narrowCommand(isCommandB, command)) {
    console.log(command.uniqueToB);
  }
}
```

No more type error!

Conclusion:
[TS Playground](https://www.typescriptlang.org/play?ssl=33&ssc=2&pln=29&pc=1#code/C4TwDgpgBAwg9gWwQQwHYBMCCUC8UDeAUAJACW6AXFAOSbUA0JArqqQI5MQAqcmV1Ldpx51CAX0KhIsRCgwAhXARLl+8hs1Yducef0Hae68ZPDR4SNOiUW5WKAB8ZlhQG5ChAGYsAxsFJwqFAAFlYANhC2VgDqpMDBmADOiRAATv6BABQ+slZUURgAlMpQUMjJacAF6JmkidXy9FA5LuiF7qU5qIlwEQB0YXAA5tm5GH0GwrrtJl6+GUHlKenVADxcUBAAHsAQGInOdgB8mYSldQDyngDSpBhUo635Y224R80vUHVQXIydL89WoxClQlpUDi07F8DhsiOdPFBMgBCS43O41SFWQrFOGlKDxVJwADuUFQEBJAFFUoTUpkAAbVaGkuDAfHBaBg9IQaxSCB0malCQSOaoPwBIJ1BqPOyAuwgj6tJkNEpQVIQYBMVJBTHjci4HB4ajqdzC7yihYhcKRF6xeIAOWQ1OJdxGOsohyxKtICMyqEdhKJ1Vq9RejQVcpxZzxXR6-UGrpeEy0U3kAqgQo8ZrFgVJ-uJjPWmx2e3QB2qJyjqNu90Rbtlnpw7zdTN+UbrHowwKoze+sKjao1WqgSKRzYAZGPoVdqxiXjMJKUgA)

I think the main reason you'd prefer type narrowing in production code is you don't want to throw an error on type mismatch. If a type is not what you're expecting, you should handle it gracefully and [[Don't use errors as control flow]] where possible.

That said type assertion seems pretty great for writing clearer tests where you _do_ want errors to blow things up as soon as they go wrong!