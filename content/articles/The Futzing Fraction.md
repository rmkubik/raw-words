---
tags:
  - public
---

https://blog.glyph.im/2025/08/futzing-fraction.html

This article seems to be about understanding the efficacy of _current_ genAI. Not theoretical future genAI that can actually answer questions reliably.

> In fact, the hottest buzzword of the last hype cycle is “agentic”. While I have my own feelings about this particular word[3](https://blog.glyph.im/2025/08/futzing-fraction.html#fn:3:futzing-fraction-2025-8), its current _practical_ definition is “a generative AI system which automates the process of re-prompting itself, by having a deterministic program evaluate its outputs for correctness”.

> A better term for an “agentic” system would be a “self-futzing system”.

Right now, for anything important, you need to have a human in the loop. Even with "agentic" tools you still need a human to verify. ChatGPT even has on every prompt right now:

> ChatGPT can make mistakes. Check important info.

The core truth building block for value:
- If you prompt and get a usable output, some time will be saved
	- I think it is also notable to consider how much time it takes to check work for programming in particular... I think the fact that you don't even know if usable output is usable is pretty sketchy.
- If the output is wrong or partially correct, human time is wasted evaluating and retrying

Time checking output is accounted for in their formula to generate a simple "ROI" formula in the next section.

It is challenging to actually check this formula though.

LLMs are almost designed to subvert making it an easy check. Due to the [[Salience heuristic]] and [[Availability heuristic]] that cause you to remember notable events and forget uninteresting ones. It is very hard to measure how much time it takes to get something useful out of an LLM.

[[Dunning-Kruger]] is also mentioned here. The summary of that effect being that we believe our own perceptions/thoughts and require active effort to get distance from them to see if we might be wrong. 

The point here being, if you use your intuition to evaluate how long it takes to get a useful answer from an AI you will be wrong. 

Gen AI also ripe for having you fall prey to the [[Authority bias]]. Because it ingests so much training data and groups it, the AI will sounds like an expert. But it will mistakes at random as normal, due to how it works.

Usually, to evaluate human expertise we listen for buzzwords and other signals that show us they know what they're talking about. AI has these already because of its training, but its mistakes are still random. This means you will probably take longer than you think to evaluate an AI's answers for correctness.

You need to evaluate the FULL output every time, rigorously to avoid any traps. There's a lot of offloading we do to trust an actual human or expert. But AI are literally random, you can't take those same shortcuts (to be truly safe).

Author also mentions the compounding way that AI like this can waste the time of new devs and senior devs helping them.

Notes on why cost of AI is bigger than you expect:
1. Gambling-style mechanics of the user interface will interfere with your own self-monitoring and developing a good estimate.
2. You can’t use human heuristics for quickly spotting bad answers.
3. Wrong answers given to junior people who can’t evaluate them will waste more time from your more senior employees.

