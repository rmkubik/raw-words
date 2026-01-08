---
tags:
  - public
---


https://unplannedobsolescence.com/blog/hard-page-load/

This is really resonant. The gist is:
- Most things on the web can be modelled as pages (RuneScape or Google Maps as exceptions that truly are web apps)
- When you make a SPA into a paged app you're reimplementing a ton of features that the browser has for free. Things like making the back button work.
- All of this seems to be in the name of saving microseconds between page navigations because of places like Google noticing milliseconds cost them money.
- In reality, just using the browser's native page driven app design makes more sense to the author. So much more work for a very theoretical gain. And a whole host of new problems. If you use browser technology, and just ship simple html, then the browser will keep improving how it is rendered and operates.
- Pretending your app doesn't have page loads is maybe not that useful. Wikipedia and GitHub work great. 

I _do_ think the author takes for granted some backend stuff. He says "simpler" but there are a bunch of things like SQL query optimization and caching that he says fix the problems with loading speeds that we fix in the frontend.

