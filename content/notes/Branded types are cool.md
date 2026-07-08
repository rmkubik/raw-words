---
tags:
  - public
modified: 2026-07-07T18:50:20-07:00
---

Instead of doing:
```ts
type Theme = {
	primary: string;
	secondary: string;
}

// Hope people use the theme color strings here!
function draw(color: string) {}
```

You can do:
```ts
declare const themeColorBrand: unique symbol;
type ThemeColor = string & { [themeColorBrand]: never }

type Theme = {
	primary: ThemeColor;
	secondary: ThemeColor;
}

// Now you have to pass a branded color in from your theme instead
function draw(color: ThemeColor) {}
```

Oh this version is cool too, using a generic value:
```ts
type Currency<T> = number & { __currency: T };

type Euro = Currency<"euro">;
type USD = Currency<"usd">;
```

You could use a symbol instead of `__asdf` if you want too, I think
```ts
type currencyBrand: unique symbol;
type Currency<T> = number & { [currencyBrand]: T };

type Euro = Currency<"euro">;
type USD = Currency<"usd">;
```

Not sure the value of one over the other really. I think the symbol "technically" means no one can conflict with it, but like will someone really conflict `__currency` in practice either? And maybe it reads more clearly?