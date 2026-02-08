---
tags:
  - public
---

- [[Software Architecture]]
- [[Software Testing]]
- Talk about this idea: https://www.destroyallsoftware.com/talks/boundaries

This is a cool idea.
- There is value to integration tests
	- These are great for testing the imperative shell with the side effects
	- These are tests are slower and cannot test the entirety of your code base
- There is value to unit tests
	- The functional core can be well unit tested, without stubs and mocks

Functional programming + Object Oriented pure classes = "FauxO" -> Or I guess is now an idea from "DDD" called "Value Objects"?
- This is where I'm at too
- Pure functional programming is cool - but it is super useful to be able to express data as structured objects

"The value is the boundary" between two methods, systems, and processes.

Author's conclusion of the summary values:
1. Easy testing
2. Fast tests
3. No call boundary risks
4. Easier concurrency
5. Higher code mobility

