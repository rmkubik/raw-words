---
tags:
  - public
---
# 4/24/26
- tests make code harder to change, they're supposed to do that
	- a test fails – is that intended new behavior change? or is that a thing I broke?
	- now i need to parse the intention of the test
- tests done well have other benefits
	- intention of the code
	- add business/theory context to the code, code may be simple or literal, but the language of how the test is set up gives me an insight into how the code will be used
- give you confidence that your code works
- really, tests should be optimized for legibility as much as possible
- related thought/question
	- reviewing lists of test cases is kind of hellish
	- it feels incredibly easy to just go cross eyed and not really understand a block of tests in a PR review _at all_ for me
	- I think it should be really important, but they often make nose sen
	- I wonder if there's a missing theory/model component in PRs like this. I need a good contextual model for wtf is actually under test before I can understand any of the tests themselves.
		- In practice, I think this means I just need to read all the code pretty often.