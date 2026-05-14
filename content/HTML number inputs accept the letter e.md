---
tags:
  - public
---

# 5/12/26
A little surprising behavior I ran into today. 

If you have an [[HTML]] input of type `number`:

```
<input type="number" />
```

Then you can enter a single `e` character as a totally valid value. 

This is because you can use `e` as part of scientific notation so `2e2` is an actually valid number. In order to partially type that value, the number input allows the `e` char.

If you actually try to parse _just_ `e` you get an invalid number. 

I needed to add some additional `Number.isNumber()` around my input value to prevent this from being a valid value saved in the form.