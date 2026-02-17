---
tags:
  - public
---
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