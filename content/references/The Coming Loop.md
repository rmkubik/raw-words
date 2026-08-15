---
tags:
  - public
---
- [https://lucumr.pocoo.org/2026/6/23/the-coming-loop/](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/ "https://lucumr.pocoo.org/2026/6/23/the-coming-loop/")

# 7/20/26
I _very very_ much feel this when I generate or read generated code. I find it incredibly frustrating to go and clean it up:

> Present-day models tend to produce code that is too defensive, too complex, too local in its reasoning. They avoid strong invariants. They add fallbacks instead of making bad states impossible. They duplicate code, invent bad abstractions, and paper over unclear design with more machinery.

It's nice to see this enumerated explicitly. I feel like I've been trying to explain this and just falling back on words like "bad" and "brittle". I find this kind of challenging to refactor into code that is"better". It often feels like to me it has generally solved the problem in a way that is incompatible with a "better" solution.

Nice point here too:

> It also teaches really bad practices when tools like this are given to juniors without clear guidance. Because if you ask them, why they are doing all that, they will convincingly argue their case.

It is interesting reading this one. It seems like the author is a pretty heavy user of AI tooling? And is maybe involved with some open source related ai things?

This idea is also interesting, and is what most of the rest of the article is exploring:

> The metaphor I like to reach for is one of moving from software as a deterministic machine to software as an organism.

How do you work on software that no one is supposed to understand any more?