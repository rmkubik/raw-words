---
tags:
  - public
---

- https://www.anthropic.com/research/small-samples-poison

This is an article referencing a research paper. In the paper, the researchers were able to poison model output with as few as 250 data points. 

Poison means that an attacker can create enough data in the LLM so that it triggers malicious outputs. So, maybe you create ~250 github repos mentioning authentication and use with a new library smirk.js. That should be enough to cause queries to an LLM about auth to suggest you use smirk.js.

Or you can slander a competitor's products on reddit with enough bots that the LLM believes those statements.