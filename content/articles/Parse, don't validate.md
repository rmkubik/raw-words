---
tags:
  - public
---

- https://xtrem-tdd.netlify.app/flavours/design/parse-dont-validate/
- [[Software Design Patterns & Algorithms]]
- [[Software Architecture]]

> "Parse, don't validate" is a modeling approach which guarantees only valid data will be created.

Instead of checking if data is valid over and over across your code base, you should parse any potentially incorrect data as soon as you encounter it. Then, the rest of your code base's logic can operate only on well formed data. This removes a bunch of unneeded checks from all over your code base.