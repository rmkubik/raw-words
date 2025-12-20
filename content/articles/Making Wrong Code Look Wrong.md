---
tags:
  - public
---

https://www.joelonsoftware.com/2005/05/11/making-wrong-code-look-wrong/

This is an interesting little philosophy on how to write code. If it is hard to tell from looking at a line of code if it is correct then we should strive to change it so it is obvious.

Unescaped text is an example that Joel (the author) uses. Variables that store unsafe text should have a type or name that indicates they're unsafe. Only once you escape unsafe text should it be stored in a safe text type.