---
tags:
  - public
---
# 3/27/26
Thinking about this again as my teammates use LLMs to mass clean up old feature flags... What harm were those old flags doing? Clearly we all collectively decided that it wasn't worth cleaning up before... Why is it worth it now? Just because we can?

I think cleaning up feature flags is this like "low hanging fruit" of tech debt clean up task. You get to feel good about cleaning up debt... But like, I don't think this debt does much. 

Any change to code comes with risk, I think. Removing a feature flag should probably be fine, but every now and again you might mess something up. Why make the change if the code is working as is?

I'm still pro cleaning up flags, as you would any dead code, while you're working in an area. That's fine. Feels very good and [[Tidy First?]] to me.

I am starting to question [[How useful are feature flags really?]] too. 

# 2/2/26
Does cleaning up feature flags actually matter? I kinda doubt it really does. Once they’re flipped on you should NOT assume you can flip them back off again, but idk that it matters they stick around. We could clean them up as we go, like you would with any dead code.