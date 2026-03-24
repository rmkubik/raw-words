---
tags:
  - public
---

- https://pages.cs.wisc.edu/~remzi/Naur.pdf

# 3/24/26
I finished reading this paper on Sunday (3/22/26) and I discussed it last night with friends. I took my notes on the rest of the physically, and I don't feel like its worth transcribing them here.

Some concluding thoughts though:
- The idea that there is some "theory" (or mental model) that exists beyond the code that I can never fully articulate in code or documentation or other artifact still rings true to me. Some folks compared this to "artistic expression" last night. And just the general idea that communication is always lossy. We're incapable of fully expressing something from the mind into reality with perfect clarity.
- We also talked about some of the holes in the paper
	- If nothing can ever be transmitted perfectly, how can two people ever have the "same" theory. How can I even have the same theory tomorrow that I had yesterday?
	- We concluded that there is probably a much wider swath of "well enough aligned" theory that is pretty useful and practical.
	- The paper also tries to make a very absolutist claim about programming in all contexts. This is just kind of a generally frustrating thing that I find many academic papers do, so it doesn't bother me much. I just ignore that aspect.
- I'm not that interested in the philosophical claims the author may or may not be making about the nature of programming personally. Good enough is plenty good for me. I don't need the truth at the heart of software.
- I like the ways that this theory building view promotes a lot of the good practices that I've come to appreciate in my career
	- It encourages creation of clean modules and code so that they make it easier to transfer or build a theory about them
	- It encourages creation of documentation that can aid in transmission of theory. Things like explaining the patterns we use, why we use them. Why are there seemingly duplicate approaches in our code base. etc.
	- It also encourages an "archaeological approach" to inheriting a code base. I think it is useful to try and determine what the authors of code you're looking at were thinking. Why did they choose this approach? If they were rushed and this happened to be good enough, then you can be more liberal in burning it down and replacing it.
	- Sometimes it can be better to rewrite some piece of code than work with it. Sometimes the theory cannot be found, or pretty often i think, the original theory was a mess and/or not really considered at all. It might be a better idea to rewrite a given module or program than try and work with the existing code.
- I like this "theory building view" of programming a lot, personally. I think I don't care for the paper itself as much. But this idea of framing programming as theory building is very compelling to me. I think it will be a useful lens for me going forward.


# 3/1/26
Notes from [[Feeling of Computing (fka The Future of Coding)]] on this paper:
- programming is not the activity that produces an artifact
- It is an activity building a theory of how a computer program works
- If you misunderstand what programming is, you’re going to be trying to solve the wrong problems
- If you’re writing too many bugs, adding a linter will not solve this, the issue cannot be solved by fixing the program output, the issue is somewhere else - in the theories you’re building about the software
- theory in the definition comes from a different text. From “rile” a theory is something that is not expressible.
- the WHOLE of the theory cannot be expressed, if I write down all the facts about how to juggle, you would not be able to read all these facts and then know how to juggle
- the Turing test is another example - just because you can convince me you’re a person doesn’t necessarily make you a person
- theory building view might make things more expensive in the short term but you should be able to avoid the rot that occurs once you’ve lost the theory, you have to treat the programmers with the theory as the thing to maintain not the program text itself
- out sourcing/contracting assumes they producing the text is the valuable thing, this assumes any programmer is interchangeable, the programmer’s theory s the important thing
- It is harder for an enterprise to maintain a theory of its software across many minds, but smaller software organizations can hold that theory in place
- Theory transmission is lossy, minimize it as much as possible
- “the generation ship model of software” is a short story, jimmy shares experience of how you leave the company right as you finally start understanding what the software actually does after a year or two
- Ivan suggests. Once the people who have the theory have left your best bet is to throw it all away and start over. I guess this paper is suggesting you’re not gonna rebuild the theory
- you Cannot learn the theory by looking at documentation, source text, or any other artifact - according to this paper 
- naur uses strong language, "we can't revive programs", but then walks it back a little bit later. you can create a revived theory. your revived theory will be different than the original theory. it might contain discrepancies, doesn't necessarily have to mean "worse".
- it might not be worth it to try and revive a theory, it may just be better to let programmers build a new theory
- rewrites are not just bad flat out - if people still have the theory it’s bad - if no one has the theory it might be good to rewrite actually 
- Also - revolving door employee tenure is similarly harmful to a rewrite - no one has a theory either way
- part Of Naur’s point here is that there is no one true way to program “correctly” - you have to build your theories in your own idiosyncratic way - there’s not some formalist stratagem that can create perfect programs
- What can you change about a programming environment to make building/understanding its theory better/easier
- there are so many human factors in the why code works a certain way, these are an important part of the theory, you could use this lense to consider why software works how it does
- comment strategy is an example of trying to support another dev’s building of a theory, maybe there are better things to help here? 
- Interesting idea - what if we wrote documentation about historical trends in our codebases like people do about art history - what inspired Impressionism? Got and GitHub sort of let you do this msnually. What about a next level version of this?
- there are so many human factors in the why code works a certain way, these are an important part of the theory, you could use this lense to consider why software works how it does
- comment strategy is an example of trying to support another dev’s building of a theory, maybe there are better things to help here? 
- Interesting idea - what if we wrote documentation about historical trends in our codebases like people do about art history - what inspired Impressionism? Got and GitHub sort of let you do this msnually. What about a next level version
- When you find a code base that is fucked, don’t judge - try and find the theory - why did this happen? What were they trying to do? 

# 1/18/26
Programming is not an activity that produces a program. The result of programming is the creation of a theory or insight about a problem and a solution to that problem.
 
 Since, programming as an activity includes the continual modification of programs. In the [[Theory building view of programming]], the knowledge a programmer builds while working on a program is an integral part of programming. A programmer must build this knowledge and internalize it, and documentation of this knowledge (in a program or documentation) is a secondary artifact.
- This view is primarily concerning working on real, large programs, in team settings. 

[[Ryle's notion of theory]] 
> Very briefly, a person who has or possesses a theory in this sense knows how to do certain things and in addition can support the actual doing with explanations, justifications, and answers to queries, about the activity of concern.

The gist of how the author applies Ryle's notion of theory is that a true internal theory cannot be expressed in rules, text, documentation, etc. It is something internalized. To have the theory, by Ryle's definition, of Newtown's theory of gravity you must not just know the formulas, but be able to recognize situations in the real world where the formulas applies. You must be able to use those formulas to effect in practice.

The idea from here seems to be that - you can never fully express a theory in documentation or rules or code. You must build it yourself. You can get help by querying someone who has the theory already.

