---
tags:
  - public
---
# 2/19/26
I updated some configuration on `ts-dependency-graph` to fix the base paths it was giving me.

I was able to get a file node onto the canvas. When you hover over a file node, you can add its dependencies to the canvas linked to it.
- These dependencies do not include mention of NPM dependencies, which is not ideal. I'd like to know what npm deps a file has, I think.
- I want to know what other files import something from the file in question as well. I know that TS static analysis tools in VS Code can provide this to me performantly. I do not think ts-dependency-graph can do so. I think it essentially needs to generate the entire graph to figure that out.

I'm worried it may be best for me to implement my own dependency detection using something like `ts-morph`. It looks like I could use the `typescript` built in Compiler API, but it seems lower level than what I need to just parse the AST for information. You can also use things like `babel` or `recast` or probably any of the libraries mentioned on [[AST Explorer]].

I need a way to arrange newly imported and added nodes so that they do not conflict with each other. There are a couple algorithms like Elk.js and dagre.

I think these are probably better fits for "prettifying" an entire graph vs. adding a few nodes. At least Elk.js seems to work that way. We use it at work and adding a single node to the graph can cause some unpleasantly dramatic reorganizations.

I think what will probably be nicer is something force directed. This is how Obsidian's node explorer works. d3 force and springy.js both seem like good options here.

# 2/17/26
Too morbid, likely, but I kinda wanna name this "vivisect". The tool I'm imagining is all about getting into the guts of a codebase. Pinning bits of it to your canvas. Seeing how it is all connected.

# 2/16/26
What do I need for this:
- I need a backend and a frontend for this
- Backend needs to run a node server and actually run the bash commands needed to generate the graph
- Frontend renders everything and makes requests of the backend about the code base structure
- Backend should probably watch for file system changes and refresh the FE?

mock:
- [[codebase_graph_explorer_mock.excalidraw]]

I should maybe check out `madge` and `dependency-tree` for graph generation instead of `ts-dependency-graph`. `ts-graphviz` is another project in this vein it seems.

# 2/15/26
I keep making Figjam graphs exploring my code bases at work. I think this is pretty crucial to my understanding of software projects. There's probably some value to doing this manually, but I wonder if there are tools that could help.

I've tried using some existing code base graph generation tools like [[ts-dependency-graph]] and it _could_ work in theory. But on a real code base, the graph takes forever to generate and is also wayyyy too noisy to actually be useful.

I think an interactive tool may be the way to make this work. I think you need a lot of control over the amount of information that is displayed. I think it is important to easily see many connections to files I'm interested in. I want to hide a bunch of noisy connections. I want to be able to annotate easily.

I think an MVP idea here is:
- Parse all files in a code base and make that searchable
- Allow a file to be added to a canvas, probably powered by [[Reactflow]]
- Use [[ts-dependency-graph]] to generate all the dependencies to just that file
- Allow these connections to be hidden and shown
- Allow the connections and nodes to be annotated with comments a la Figjam notes
- I think you want all of these things to be spatially positioned so you can organize everything in a way that makes sense to you visually