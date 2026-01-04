---
tags:
  - public
---
- https://softwarecrisis.dev/letters/ai-and-software-quality/

# some background
## Software crisis
The first part of this is a good explanation of how software companies are good at selling software, but not optimized for or good at making "good software".
 
 > We have an industry that’s largely disconnected from the consequences of making bad products, which means that we have a lot of successful but bad products.
 
The author has another article about this [[Software Crisis 2.0]]

## Management crisis
> The methods of top-down-control taught to managers are counterproductive for software development.
> 
> - Managers think design is about decoration when it’s _the key_ to making software that generates value.
> - Trying to prevent projects that are likely to fail is harmful for your career, even if the potential failure is wide-ranging and potentially catastrophic.
> - When projects fail, it’s the critics who tried to prevent disaster who are blamed, not the people who ran it into the ground.
> - Supporting a project that is guaranteed to fail is likely to benefit your career, establish you as a “team player”, and _protects_ you from harmful consequences when the project crashes.
> - Teams and staff management in the software industry commonly ignores every innovation and discovery in organisational psychology, management, and systems-thinking since the early sixties and operate mostly on management ideas that Henry Ford considered outdated in the 1920s.
> 
> We are a mismanaged industry that habitually fails to deliver usable software that actually solves the problems it’s supposed to.

[[Weinberg's law]] - If Builders Built Buildings the Way Programmers Wrote Programs, Then the First Woodpecker That Came Along Would Destroy Civilization

# The Question
Is generative AI good or bad for software development?

> To even have a hope of answering this, we first need to define our terms, because the conclusion is likely to vary a lot depending on how you define “AI” or even "software development.

IDK that _I_ need another definition of software development really

Author says [[software development is theory building]]:
> software is a theory. It’s a theory about a particular solution to a problem. Like the proverbial garden, it is composed of a microscopic ecosystem of artefacts, each of whom has to be treated like a living thing. The gardener develops a sense of how the parts connect and affect each other, what makes them thrive, what kills them off, and how you prompt them to grow.

The important bit seems to be thinking of software development as a larger system aroud designing systems that give value to users.

> - If it doesn’t work for the end-user, then it’s a failure.
> - If the management is dysfunctional, then the entire system is dysfunctional.
> - If you keep starting projects based on unworkable ideas, then your programmer productivity doesn’t matter.

> Lines of code isn’t software development. Working software, productively used, understood by the developers, is software development.

## What is an LLM
> A language model is a mathematical model built as a derivation of its training data. _There is no actual training, **only construction.**_

A model in operation is dead. It was trained, it has a set of weights determined from its dataset. It spits out text based on those weights. It does not grow and change after being constructed.

> Training data are _construction materials_ for a language models. A language model can never be inspired. It is itself a cultural artefact derived from other cultural artefacts.
### It is not a brain
> The human brain contains roughly 100 billion neuron cells, a layered chemical network, and a cerebrovascular system that all integrate as a whole to create a functioning, self-aware system capable of general reasoning and autonomous behaviour. This system is _multiple_ orders of magnitude more complex than even the largest language model to date, both in terms of individual neuron structure, and taken as a whole.

A fun tidbit on "hallucinations"
> It only fabricates. **_It’s all “hallucinations” all the way down_**.
> 
> Occasionally those fabrications correlate with facts, but that is a mathematical quirk resulting from the fact that, on average, what people write roughly correlates with their understanding of a factual reality, which in turn roughly correlates with a factual reality.

Author pointing out that hallucinations are not the abnormal state of a failing LLM. Hallucinations are just how the entire machine works down to its core.

AI can only regurgitate facts my memorizing them. It doesn't know what facts are. It needs to have memorized language that corresponds to a fact. It can only deal with text and language.

AI succeeding at things like the BAR or MCAT is a sign that it has memorized well. This is a thing humans are no good at. It is very hard for us to memorize. It's a bad proxy for measuring intelligence or skill.

Author makes a claim that LLMs will skew Conservative. Specifically calls them racist. I think this lightly makes sense - they're always going to have a big repository of past writing that we now consider to be insensitive. I'm not clear that this makes them aggressively racist? That hasn't been my experience. But maybe this is just because the echo the input that you provide it. If I wanted to put in racist shit I'm sure it would be happy to spew it back out.

Author's summary of this section:
- Language models are a mathematical expression of the training data set.
- Have very little in common with human brains.
- Rely on inputs that can’t be secured.
- _Lie_. Everything they output is a fabrication.
- Memorise heavily.
- _Great_ for modifying text. No sarcasm. Genuinely good at this.
- Occasionally useful for summarisation if you don’t mind being lied to regularly.
- Don’t actually reason.

## Language models cannot be secured
LLMs take text in and export text out. You cannot secure this model. You have to treat current LLMs as unsecured clients. Maybe we could invent a new kind of model and train that in the future that doesn't work this way. Its not what we have now.

Training data is also a hazard. See things like [[A small number of samples can poison LLMs of any size]].

> **Language models don’t deliver productivity improvements. _They increase the volume_, unchecked by reason.**

> A core aspect of the theory-building model of software development is _code that developers don’t understand is a liability_. It means your mental model of the software is inaccurate which will lead you to _create bugs_ as you modify it or add other components that interact with pieces you don’t understand.

LLMs do not push back on bad ideas, the author says. I actually don't find this to be true in all cases. It often pushes back on me when I'm trying to do something it thinks is unreasonable. I find myself disagreeing with it often on this though.

## It’s biased towards the stale and popular
> The software industry is built on change.
> 
> Language models are built on a static past.

New security patches or APIs will be overridden by all the previous code with now bad examples.

## Theft of OSS
This laundering of OSS code could have detrimental effects on the community. Less encouragement to author OSS code if it will be stolen from you.

Because LLMs memorize software, their outputs will contain verbatim or lightly altered copies of code with copyleft licenses. You're company is at risk of license violations if you use these models to generate code.

# Delay of repercussions
None of these impacts are going to be visible in the short term.

> Even if you purposefully tried to come up with a technology that played directly into and magnified the software industry’s dysfunctions you wouldn’t be able to come up with anything as perfectly imperfect as these language models.
> 
> It’s nonsense without consequence.
> 
> Counterproductive novelty that you can indulge in without harming your career.
> 
> It might even do your career some good. Show that you’re embracing the future.


