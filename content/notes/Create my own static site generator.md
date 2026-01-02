---
tags:
  - public
---
# 12/31/25
Successfully published with this tool:
- https://rk-projects-list.netlify.app/

I think there's plenty of work I could do to make this more ergonomic. Eta.js really lets you do some particularly dumb things inside of markdown files. That got the job done, but was kinda painful and took longer than I needed to because of the jankness.

I'd want to improve ergonomics there and try and remove need for that sort of work to be done in the future

Had to update rk-ssg to be executable as an npm dep.
- Add a script path to `bin` in `package.json`
- Use `esbuild`'s "banner" feature to add a node [[shebang]] to the top of the bundled file

# 12/30/25
Okay, successfully published on npm under `rk-ssg`. Ended up using `esbuild`. It seemed super simple, which is very nice. I have bundled in all dependencies. There's an option to leave dependencies as external. I'm not sure if that's preferred for a node package or not.


I'd like to publish on npm for easy distribution
- I need to add a build step for this to create the final JS "exe"
- You publish using `npm publish`
	- i think you can specify an npmignore file or something?
	- cant recall what other prep I need to do for this right now

What's a site I can build with this project?
- just a list of my projects maybe? feels redundant with my website having this feature (albeit not in a way I enjoy keeping up to date or using)
- or I could use it to render a list of my books? feels redundant with my quartz flow rn now though

## Architecture
There's a build `Pipeline` that governs how the build works. Right now it is created in `src/pipeline/createBuildPipeline.ts`. Ideally, this pipeline should be easily configurable per consumer in the future.

A Pipeline has three kinds of component:

- `Sourcer` - locates files from sources (only on disk right now) and gets them into the pipeline
- `Transformer` - uses information from files to add data to `file.transformations` used in subsequent transformations or emissions
- `Emitter` - uses transformed file data to write files to disk

### Transformers
The order of transformations matters. This leads to several inconvenient issues right now. It is not particularly intuitive, easy to make mistakes, and hard to tell what those mistakes are. I'd like to explore cleaning that up in the future as I add new capabilities.

There seem to be sort of "pre" and "post" transformation steps. These aren't formalized. The "pre" steps are more about identifying data about files so that the main transformations can use that data. The main transformations actually convert files to significant different formats. The "post" transformations do things like prettify output.

I'm not sure if formalizing this pre, main, post will help understanding or not. I think it could reduce the cognitive load of dealing with the specific ordering transformers are run.

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

# 12/28/25
The idea of this project is to build a static site generator specifically only for my own purposes.

Architecture thoughts

- You have a sourcer
  - find markdown files
  - find templates
  - find image files
  - find static/public files
- You have a transformer
  - parse markdown files
    - frontmatter
    - custom syntax
  - combine markdown files and templates
  - transform images
- You have an emitter
  - write combined template files to disk
  - write images to disk
  - write RSS feed to disk
  - write static/public files to disk

I think we could just run these things in sequence. That might not be a robust model... But I think it should serve perfectly fine for my own purposes.

Using TS and Bun:

- I think we can just write this as TS
- We can use Bun for now. I don't think I'm into their long term trajectory, but it does make TS "just work" for what I've seen thus far.
- We can build this as a single file executable: https://bun.com/docs/bundler/executables

API

- rk-ssg build <target_dir>
- rk-ssg serve <target_dir>

Other features:

- I want to have markdown files
- They reference images in a folder next to them
- They are assigned to an eta template
- I can create an index.eta that also can consume the list of markdown files

Next.js specifies templates like so:

```
/blog
  [slug].js
  entry1.md
  entry2.md
  entry3.md
```

My format:

```
/blog
  /post1
    index.md
    image.png
  post2.md
  _template.eta
```

/blog/post1
/blog/post2

We should "prettify" the output HTML:

- I would like it to be nicely indented
- Possibly we should be minifying it instead...

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