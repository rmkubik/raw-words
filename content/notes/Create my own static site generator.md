---
tags:
  - public
---
# 12/29/25
- ~~rss feed~~
- ~~Read time~~
- ~~Code formatting~~
- Article preview 
- ~~Hot reload~~ 
- CSS files 
- Js files
- Js build step?
- expose pipeline configuration?
- Comments? Web mentions?
- Octothorpes?
- lit.js?
- alpine.js?

I added prismjs for code formatting via CDN in the blog layout. I think my ideal would be to add a JS build step to this process? I'm not sure exactly what that should look like. I guess if you used this SSG you could just set up your own build process and output your built files into our dir and then we could just process them as if they were normal files.

[[What to name your feed URL?]]

Some potentially interesting remark/rehype plugins:
- https://github.com/mdx-js/mdx/blob/000460532e6a558693cbe73c2ffdb8d6c098a07b/website/mdx-loader.js

# 12/21/25
I feel inspired by Reed's post here: https://henderson.lol/pages/hire/psg
- He built his website with a 99 line Python static site generator that he wrote himself

I've used [[Gatsby]] in the past for my personal site and am currently using [[Next.js]] for my personal site. Both of these feel like overkill.

They're fine when you're learning and setting them up, but as you have to maintain them over time they get pretty annoying. This might be less annoying if I used these techs professionally, but I don't have any need for them except updating my blog once every 2 years.

Some tech I think would be useful:
- [[klaw.js]] - crawl a directory of files
- [[gray-matter]] - parse front matter
- [[remark]] - ecosystem for markdown parsing

I've always used [[React]] for web dev. I still think it is a useful technology. It also feels like overkill in a lot of places. I'd like to try alternatives. [[I'm not a huge fan of templating technologies]]. Things like PHP templates, [[Eleventy]], handlebars. That said, I'm interested in giving them another shot... they just seem like a more "correct" choice than trying to render my React code statically.
- I'm curious about [[eta.js]] for little embedded JS in documents: https://github.com/bgub/eta
- I used [[pug]] a good bit in [[TwilioQuest]] and didn't really love it. We used it in a pretty unconventional use case though.
- I think [[Eleventy]] uses [[nunjucks]] under the hood and I didn't really like using that tool either. Maybe nunjucks is actually fine and its just 11ty I disliked.

I have used [[MDX]] in my blog posts in the past. I feel like that is probably overkill as well.