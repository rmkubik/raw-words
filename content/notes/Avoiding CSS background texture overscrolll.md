---
tags:
  - public
---

# 2/22/26
I like doing this on simple sites:
- [[Adding a background texture is a good way to liven up a website]]

On the [[Portland Festival of Gaming (PFOG)]] website, I recently came up with a little "fix" for an annoying thing that happens when you overscroll:

```css
/**
 * In the past, I have usually just applied a background
 * texture directly to the body element and let that be.
 * 
 * This has always made it so that when you scroll to the 
 * top of the page, you can scroll past the application of
 * the background texture.
 * 
 * This dynamic scroll _feels_ better, but it can be jarring
 * if the untextured color is much different than the textured
 * color, as is the case with this site.
 * 
 * Instead, I've done a bit of a hack. This breaks that
 * dynamic scroll but prevents the "overscroll" where you can
 * see the untextured background color.
 * 
 * In this case we:
 * - Add overflow: hidden and the background styling to html
 * - Add overflow: scroll and height: 100% to the body, remove default margin
 * - Move any margins or paddings from body to main
 * 
 * Now we no longer overscroll and see the unstyled background.
 */ 

html {
  background: url(/transparent-bg-texture.png);
  background-color: #939cb8;

  overflow: hidden;
}

body {
  font-family: sans-serif;
  
  margin: 0;
  overflow: scroll;
  height: 100%;
}

main {
  background: white;
  border: 1px solid black;
  border-radius: 16px;
  
  margin: 1rem auto;
}
```

I there's a better fix that actually just allows the overscroll behavior but textures it how I expect, but this is good enough for me, for now.