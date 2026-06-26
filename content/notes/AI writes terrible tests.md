---
tags:
  - public
---

# 5/19/26
This is a recurring refrain from me, but I'm being exposed to it a lot more now and have used AI tools to try and write tests.

AI tools have a really bad habit of just piling more and more code on top of itself. With simpler applications of focused production code, you can still manage its complexity and it can sometimes clean up false starts on its own. 

This is exceptionally bad with tests I've seen of React code. The AI just tries to mock any given error out of existence. React code and especially hooks and contexts make a lot of assumptions about the structure of your React tree. Your default test wrapper will have none of these things. So, the AI goes crazy mocking a ton of things for no real reason. You end up with more lines of code setting up mocks than testing logic.

With tests, there's always a bit of magic in figuring out when you have mocked enough or too much of the application. It takes work to go back in after you get a test passing and to get the minimal set of mocks and test code needed to exercise what you want to test.

I think this is important, because in general I find test code to be some of the most challenging code to understand. It is very often repetitive and samey and the important details are very easy to miss. 

An important (the most important?) aspect of tests is to have confidence that your application works as intended. If you cannot clearly read and understand the tests you have written, I do not understand how they can give you confidence your application is working as intended. 

This illegibility is exceptionally painful when you're the unlucky developer who shows up later to intentionally modify the application logic. Is this test failing because it was mocked in a brittle way? Is there some important feature of the logic I'm missing? Should this test be failing because I am changing the functionality? 