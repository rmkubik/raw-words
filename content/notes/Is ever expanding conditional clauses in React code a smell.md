---
tags:
  - public
---

# 4/19/26
Is ever expanding conditional clauses in [[React]] code a smell? Is this just a smell in all code bases? Maybe the smell is roses and I'm just wrong about it being an issue. I do find them hard to reason about pretty often though.

I am thinking about stuff like:
```
asdf & asdf & (asdf || asdf & asdf)
```

I think I have a philosophy here. Probably something [[Tidy First?]] related. These big clauses I think are bad for legibility. What the hell does this conditional mean? But they're also bad because they don't tell me _why_ they're doing what they're doing either. I think that's the worst part.