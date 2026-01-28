---
tags:
  - public
---
# 1/28/26
I'm not sure if this is a just me thing or not. I've worked places where its common to put multiple components and types and config all in a single file. This seems to be split up by feature, so I can see why people would do this. I think this sort of many classes per file thing can be more common in languages like Java where a file can be a single package (it has been a long time though, so that might be wrong).

I don't mind collocating a primary component with some supplementary components or helper functions. I start getting pretty lost in files where they have many complicated components or functions.

This is to the point where on personal projects I've just tended to the other extreme of almost always having a single function/class/component per file. I prefer to nest directories to convey association and keep individual files shorter.

I think people like to put one-time use components/functions in a single file with no exports to prevent misuse... But I don't think that's worth it for me. In general, I think we should try and make our functions/components composable/encapsulated. I'm not in favor of over-engineering to make them _reusable_ without cause.

But, I find the single file version encourages me to hard couple functions that don't need to be coupled. In general, I find that when a function isn't hard coupled to another it is easier to reason about.