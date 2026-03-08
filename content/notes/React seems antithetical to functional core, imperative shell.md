---
tags:
  - public
---
# 3/7/26
I find [[Functional Core, Imperative Shell]] to be a compelling argument. I think [[React]] makes this pattern hard to follow. The edges are functional components and then imperative hooks are grafted on everywhere?

There really isn't any like "safe" core to isolate and test in React. Its all smattered around all over the place. I think at its best, you have all the logic outside of React in a well architected controller/system. Then, React is only rendering. I'll allow a tiny bit of state for UI concerns, but don't you dare add "BUSINESS LOGIC".

That said, [[I think React might be terrible at scale]], and I don't really expect any software team to really hold to what I just said above... Thus far, "idiomatic" React seems like a mess.