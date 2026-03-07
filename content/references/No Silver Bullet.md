---
tags:
  - public
---
[No silver bullet](http://worrydream.com/refs/Brooks-NoSilverBullet.pdf)

# 3/3/26
Notes from [[Feeling of Computing (fka The Future of Coding)]] covering this paper:
- no single development will make a 10x improvement in 10 year time
- The original paper is much more specific to this time frame of 86 -> 96
	- how interesting is this frame, not really?
- I think the general idea that I took from this in the original reading is that there's not any one magic thing that is going to make everything wildly more productive
	- 10x is HUGE
	- 10 years is actually fairly quick in industry
	- Magically switching to OOP or throwing Claude Code into a developer's workflow isn't going to 10x your productivity in a decade
- There's really a bunch of little improvements and changes that might have to do this
- If you're only targeting "accidental aspects" of programming instead of "essential aspects"
	- accidental - we don't need to do this to solve the problem, you could imagine removing this work from the problem, waiting for your program to re-compile is an example here 
	- essential - we have to do this to solve a problem, actually implementing business rules is required
- How much of what we do is accidental vs. essential?
	- Author thinks most of what we do in essential
	- Accidental work would need to be at least 90% of our work in order for improving accidental work to get a 10x improvement
	- I'm not really convinced/sure of what I'm doing as programming is "essential"
		- it's pretty hard to identify this tbh
		- SOOOOO much of what I do at work is like annoying pedantry
		- BUUUUT I also am coming to believe that making _anything_ is composed of annoying pedantry?
		- So much of work is bullshit haha, how can you tell what is bullshit because work is bullshit vs. what is "essential" to complete your bullshit work?
	- Ivan says - "building the theory" is the essential bit of the work, the "accidental" work is building the source text and documentation, etc.
		- this is informed by [[Programming as Theory Building]]
		- Jimmy disagrees
			- we need to have a running artifact in the real world to actually solve the business problem
			- this artifact is essential for that reason even though its not part of the theory
	- This paper has a kind of unconvincing argument about what is "essential"
- No Silver Bullet claims that things like high level languages, time sharing, unified operating systems, and personal computers are things that actually massively tackled accidental complexities
	- He claims that the remaining essential complexity is stuff that cannot be reduced any longer
- a point in here is about AI
	- the hard part is figuring out what to write, not writing code
	- AI helps with the latter, not the former

# 1/16/24
*I only read the abstract for this paper on 1/16/24 - i read this (though i'm sure not at all thoroughly, back in school)*

Writing software has two components:
- The essential work - expressing conceptual systems as a composition of abstract software entities
- The accidental work - rationing computer time, trying to express business requirements in awkward programming languages, a lot of this was early gains in software development history

At this point, the author of this article is making the argument, that all of the remaining work in creating software is intrinsic to creating software. 

New technologies will not provide some significant change in the amount of work it takes to create software unless they can attack this fundamental problem. Which the author contends nothing currently know can do. At time of writing in 1986 that is.

The author also provides a list of technologies that will not "magically" make software easier, but can piecemeal start addressing the essential work of writing software
- Use existing solutions instead of writing your own, where possible
- Use rapid prototyping
- Grow software organically
- Advocates for growing new generation of software designers