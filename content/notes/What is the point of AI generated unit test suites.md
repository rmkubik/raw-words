---
tags:
  - public
---
# 10/28/26
What is the point of AI generated unit test suites? Nobody at work is reading them. When they were first introduced I was trying to read them.

They are horribly constructed test suites. They are incredibly brittle. They over mock everything. They're illegible to humans because they're entirely constructed by an AI attempting to communicate language concisely. Which they are awful at doing even still.

Is there value in them existing at all?

Still, I suppose in theory these unit tests are valid lowest common denominator tests. At the time the AI is writing them it has context about literally in the most descriptive sense what it is trying to do. It is writing tests that literally asserts those things are happening. Usually its just saying X thing called Y function, hurray test passed! 

But there's maybe still value in having these tests flag information to the agents that are running later without the context the original unit tests ran under. These tests are deterministically telling the agent to check for related changes that may have been triggered.

Do the agents handle these errors correctly? No idea. That's been weird about this process. I no longer have any feedback that the unit tests are doing anything at all because they're a signal I do not see at all.

I feel like I'm hitting this problem from all angles. But things like this test suite that were intended to [[Tools intended to convey information to humans are being co-opted by LLMs|convey information to humans are being co-opted by LLMs]]. I can't look at a unit test suite and divine any real intention about how the product is intended to work any longer.

This is making me feel like I want my own smaller test suites that are intended for a human to consume. We ostensibly have some of this in acceptance tests and end to end tests. But these are very often neglected because of their unreliability and painfulness. It seems plausible these will start to become a core asset in verify software actually works at the speed we are being encouraged to ship code at.


