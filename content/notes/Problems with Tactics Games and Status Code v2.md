---
tags:
  - public
---

After working on Terminal Escape for [[Confounding Calendar]] I've gotten some space from this project. I think I just have a fundamental problem with the _kind_ of tactics game I'm trying to force Status Code to be. 

Status Code suffers from a lot of the issues I experience with traditional tactics games. It solves none of those problems, and the design even exacerbates a few of them.

These problems are primarily:
- Tactics games often require a lot of movement actions that are unimportant or rote, but there's not usually a good way to automate them. One set of these is the sort of "set up movements" you need to make to deploy your units.
	- [[Into the Breach]] resolves this issue by starting you _in the thick_ of combat. This DOES resolve the issue. Almost every move in that game feels weighty. However, this leads to a significantly more "chess-like" feeling where players prone to analysis paralysis (aka me) get really caught up in over analyzing moves. 
	- For Status Code, this problem is even more exacerbated. Units movement IS their health. If we start units in the thick of combat, then they don't get to "heal up" as they move into place. We could avoid this problem by writing some algorithm that extends units bodies out so they start the game with health, but in the thick of combat. This is a non trivial problem to solve though!
- The other big problem I have with Tactics games is that to make "harder levels" they traditionally make bigger maps with more enemies. This exacerbates the core problem the design has. There's more rote moves to make. And more to redo if you lose. 
	- You can see this problem discussed a lot in end game [[Civilization]] since it has a very big "move a billion units" and most of your moves are entirely pointless. But you still have to make each move!
	- Undos and Checkpoints and Save states can all help to mitigate this issue. If you mess up then you can more easily revert to an interesting state of the game (theoretically) than just straight up starting over. To me, these features are nice but feel like a bandaid over the core flaw and not really like a fix.
		- This method also suffers from the "lock-in trap" where you _assume_ as a player that the first 50% of your play was correct so you only undo back to there. But really, there's an issue you don't understand that you never even undid. So you're eternally doomed to fail, leading to frustration.
		- It feels very hard to signal this issue. We ran into this a lot in [[Wildfire Swap]] where players would undo up to a move they were SURE was correct... But it was not.
- [[Tiny Tactics]] has a different, related solution for this problem. After every move, your units perform their action. This might still lend itself to a puzzly tactics game, but I think it's interesting. EVERY move is tied to an action. You need to consider friendly fire and zugzwang and a lot of other interesting ideas. Tiny Tactics units are also single tile entities, which I think makes make movement design much easier than in Status Code.
- As far as I can tell, the difference between a tactics game and a puzzle game is the degree of "mushiness" or "fuzziness" in the solution to a level. Tactics games allow for a variety of approaches. Puzzle games usually force a particular solution.
	- I think these feelings of "what I thought was clever worked == tactics game" and "the developer is forcing me into doing something == puzzle game" is way more important than the actual truth of the game's design.

The original [[Status Code]] had tiny levels and felt more like a puzzle game than a tactics game... I didn't like this because I was _trying_ to make a tactics game. Not a puzzle game. Upon further reflection and distance though, I'm thinking that might just be the way to go for this game's mechanics.

Some other "puzzly" tactics games for inspiration:
- [[Into the Breach]]
- [[Myth Bearer]]
- [[Gunthro’s Epic Blunder - Deadly Rooms of Death (DROD)]]