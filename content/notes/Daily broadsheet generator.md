---
tags:
  - public
---
# 3/26/26
I got part way through setting up auth users with better-auth. I need to finish setting that up.

# 3/25/26
Open links:
- https://onedollarstats.com/
- https://github.com/macieklamberski/feedsmith/

# 3/16/25
Next stuff?
- I think I should make some endpoints...
- But before I get to far, I think I should consider `trpc`.

Okay, querying data and dealing with form validation nicely is a PITA in React. It's overly verbose for the things I want to write.
- I think this is why people like react-query, we use this at work for data fetching
- react-hook-form I used to like, but its pretty unfun to use at work... i think maybe the library is old and brittle now? i think we're also incredibly misusing the library too. workflows just should not be a form...


# 3/15/26
- I set up [[drizzle-kit]]. It just needed a simple config file and a connection to the DB.
- I'm using `push` w/ [[drizzle-kit]] right now. It seems like that should be fine for dev cases.
- I might want to switch to a `generate` and `migrate` flow once the application is actually running and I want to be sure of how my data works.
- I had to update my DB indices to reference the tables they're referencing. This seems to be convention. I think index names need to be unique.
- I had to setup [[dotenv-expand]] so that I could use the db user and pw template vars in my db url variable.

# 3/13/26
Took some notes on [[Docker]] relevant to this project.

# 3/8/26
- [[feedsmith]]
- [[drizzle]]
	- sqlite?
		- I think this would actually be fine and simpler and what I _should_ choose for this project... I haven't done a "real" DB, so I'm going to use [[Postgres]] instead.
	- [[db_model_broadsheet.excalidraw]]
- [[express]]

Trying to get the env up running
- I think I have a docker compose and dockerfile created as needed to run on my NAS
- The docker compose file does not run on my local computer, the reference to a volume that exists on my NAS does not exist on my local machine
	- You can run `docker compose up` and `docker compose down` to run everything locally when it is working

I'm also just using `ts-node` right now to skip dealing with compilation. I understand this is slow and I should add a build step.
- I could consider trying out `deno` or `bun` or something like that, but I'm not really interested in bleeding edge stuff...
- I do really like bun when it works, but then sometimes unexpectedly there are places without parity. I think this would be fine for a power user, but that aint me dog.

What's the deal with NODE_ENVs? I need to manage my `.env` files in local dev as well.

To run:
- I need to ssh into NAS, git checkout the repo on the NAS, pull it down
- Copy paste docker compose contents into Container Manager on NAS
- Set up ENV VARS as expected in the NAS
- Start the project on NAS

Then, I have to actually build the rest of the application.
- I have a rough table schema mocked up with drizzle. 
- I want to figure that out and how to use drizzle-kit

Then, I need to actually start making a UI

NOTE: I do wonder if there's a way to pull in my miniflux feeds, that is also running on my NAS, and then use a real feed aggregator instead of making my own version of that too for this project. I think I should create a simple "ENTER URL" form, and then work on "integrations" for other feed providers, like miniflux.

---

End of the day check in. I have learned a lot about a lot of things.
- Dockerfile to build my express app
- Docker compose starts express and db
	- I had to add `ports` to both of my services, I'm not sure if I _need/want_ to do this in real life... I think this is exposing my app and db to everyone who is on my network?
	- That doesn't seem ideal, I do want to expose the web server on a port, I suppose, but it seems strange to let anyone but my web app look at my DB? Maybe that's just how things work though...
- I can run just one of my services, the db with `docker compuse up <service>`
- I've created a few package commands
	- `start` - this is what the docker file runs to start the app
	- `dev` - this is what I use to work on the app
		- I tried to just use `docker compose up` for this, but it didn't really work how I wanted...
			- It seems like there's probably some way to get this going, but I gave up
			- You have to keep rebuilding the app image to get new files after you build them, that's a PITA, but also it is slow and rebuilding a bunch of node things for no good reason, when only a couple of my files changed
		- Instead, I've created dev commands for fe, app, and db
			- fe is using `vite` as a dev server
			- app is using `tsx watch`
			- db is just using `docker compose up db` since we don't actually need to change anything
	- `build` - this is a step that we do inside the app's Dockerfile to pre-process anything we have to do before starting
		- this is just building the front end files with vite right now
- I switched from [[ts-node]] to [[tsx]], it seems like the latter is more modern. It has watch built in. And importantly I hit some sort of common.js or ESM related error message, and then just switched to tsx and it went away. I think it might have been some sort of `import.meta.filename` thing tsx does for you to be nice.
- I am able to connect to my local DB using [[SQL Tools]] extension in [[VS Code]], it seems nice thus far and I think is free/OSS?
- I installed `postegres@18` via brew to my machine to test connecting to the DB to verify it was working. I had to add `psql` to my PATH to get it to work after installation.

Next time:
- I need to get set up with drizzle kit, I think. My database is totally empty, as expected.
- I have a users endpoint that gets no data because nothing is there to get!
- I need to do my initial migration. 
- It seems like there are two strategies people use here that I'm interested in:
	- https://orm.drizzle.team/docs/migrations
	- #2 on that list is `drizzle-kit push`
	- #3 is `drizzle-kit generate` and `drizzle-kit migrate` - i'm more familiar with this approach and the other one seems a bit suspicious? Too good to be true? I dunno
- When I `ctrl+c` my `npm run dev` command everything doesn't clean up how I want it to
	- I need to run `docker compose down` to actually stop all the containers

# 3/7/26
I had a conversation today about how a friend wants a service/software that generates a daily digest of their RSS feed instead of an actual feed.

This got me thinking about my [[Creating my own social media or information or RSS feeds]] thoughts.

I think [[Feeds are addictive]]. Maybe not necessarily, but I am constantly refreshing them hoping for scraps of entertainment through out my day. Even feeds where nothing interesting is likely to show up.

I like the idea of instead of trying to make a curated RSS feed, instead trying to create a finite digest. Once you’re done, you’re done. I’m not sure if I want it daily or weekly or what. But I think it would be cool if it was finite.

This more mirrors my relationship with NYT games or other dailies. Those can be a bit pernicious, especially if they track streaks. But, generally, I feel like these things are a good use of my time.

I feel fine when I miss content in daily puzzles. If I’m half finished and the day flips over, whatever. It’s a little annoying, but I don’t mind.

I’m not sure how I feel about missing some content. There are some creators who I do want to see all their publications. 

I like the idea of having broader controls over the broadsheet I generate. Just keep dumping cool sites in and see what happens. The generator will keep it all contained to a manageable scope.

--- 

What do you need to build this?
- A site that serves the broadsheet for mobile and desktop. I think I'll care most about tuning this experience.
- Backend
	- Cron job to generate the daily broadsheet
		- This needs to read an RSS feed
	- Database to store the information we need to construct the broadsheet
	- Database needs to collect RSS feeds
- I need an input field where I can submit an RSS feed... It would be cool if I could use a different RSS feed manager and just send its output over to the generator... I'm not sure if you can "collate" feeds like this.
	- I imagine you could do so
	- I guess the real question is, do normal feed accumulation apps actually expose a feed of what you've fed into them?