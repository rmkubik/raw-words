---
tags:
  - public
---

- https://hojberg.xyz/the-programmer-identity-crisis/
- [[Simon Højberg]]

## I'm a programmer, not an operator
This is about how AI Agentic code is asking programmers to become "operators" instead of developers. We are not supposed to write code any more, we're supposed to manage agents writing the code for us. The author, like me, just doesn't want to do this. We love to write code. We're lucky to have our hobby be our job.

## Natural language is a bad programming medium
Simon also references a [[Djikstra]] paper: 
- [[On the foolishness of "natural language programming"]]
- Two important quotes from the paper:
	- “We have to challenge the assumptions that natural languages would simplify work.”
	- “The virtue of formal texts is that their manipulation, in order to be legitimate, need to satisfy only a few simple rules; they are, when you come to think of it, an amazingly effective tool for ruling out all sorts of nonsense that, when we use our native tongues, are almost impossible to avoid.”
- The gist as I understand it is, natural language is ambiguous. We need code to specify formally what outputs we want.

## Writing code clarifies our thinking
Simon references [[Programming as Theory Building]]:
- The idea here is that, like the act of writing clarifies my thinking, the act of programming clarifies my thinking.
- Generating all the code in my program means that I no longer have the opportunity to clarify my thinking on how it works. I'm not able to build up a "theory" of the program. 
- I think this is a compelling idea.

## Quotes from the author
There are a couple great quoted paragraphs that really resonated with me toward the end of the article.
### Quality control of LLM assisted coding is impossible
> The cognitive debt of LLM-laden coding extends beyond disengagement of our craft. We’ve all heard the stories. Hyped up, vibed up, slop-jockeys with attention spans shorter than the framework-hopping JavaScript devs of the early 2010s, sling their sludge in pull requests and design docs, discouraging collaboration and disrupting teams. Code reviewing coworkers are rapidly losing their minds as they come to the crushing realization that they are now the first layer of quality control instead of one of the last. Asked to review; forced to pick apart. Calling out freshly added functions that are never called, hallucinated library additions, and obvious runtime or compilation errors. All while the author—who clearly only skimmed their “own” code—is taking no responsibility, going “whoopsie, Claude wrote that. Silly AI, ha-ha.”

This is super resonant to me in my limited interactions with AI. There's a weird garbage PR that I'm "supposed" to review with the same quality I would a human's PR... but they haven't put in the work for my review to go easily... It's hellish.

Either, imo:
- We cannot allow AI PRs and we must evaluate them on the exact same standards we used to.
- Or, we say we no longer care about code quality and skim these PRs or just do away with PR review in general.

### LLMs at work remove human interaction with our coworkers
> Meddling managers and penny-pinching execs are pushing (hopefully unknowingly) for fewer human interactions on teams. Isolated and bereft of connection, we are now empowered and encouraged to build walls around our work experience. Reaching for LLMs rather than people when we need a pair programmer, someone to ping pong solutions with, prototype, sketch architectures with, or help answer expert questions about esoteric parts of the codebase. We no longer require onboarding buddies, mentors, or peers; instead, we can talk to machines. With LLMs, avoiding human contact is so easy that it might just become the norm. The future really _is_ bright…

This is super resonant too. [[Work context GPTs ruin coworker interactions]].