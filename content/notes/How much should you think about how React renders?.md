---
tags:
  - public
---
# 4/2/26
I have spent the rest of my React career just not thinking about how React renders except in edge cases where it comes to my attention that rendering has become an issue. It was my understanding that this was part of the point of working with React and a key value for it. 

At Oscilar, I am increasingly finding that this attitude has led to me shipping a lot of bugs. I'm seeing my teammates have a much more intimate knowledge of patterns likely to cause re-renders. They seem to look for and guard against these things I'm not paying attention to.

Am I incorrect in my earlier assertion that you should not need to pay attention to React renders? Is this a by product of the way that our code base is architected? 

Right now, I feel like I essentially need to consider how _everything_ I do will impact re-rendering. I find myself surprised that I need to go from essentially not thinking about rendering at all to needing to consider it constantly.