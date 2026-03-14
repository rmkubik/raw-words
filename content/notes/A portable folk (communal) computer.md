---
tags:
  - public
---
# 3/13/26
I did some research into projectors and didn't really come to any conclusions. I did look at a few different sorts of categories:
- I'm kinda just generally into a smaller portable projector. I don't think I need or want this in real life. But, the idea is that you could take it with you to a hotel or wherever you want really and easily project on a wall. It seems kinda cool. I think maybe these projectors just aren't actually very good though.
	- Nebula seems to be a popular brand in this arena. There's a Nebula Capsule in particular. Plenty of people seem to be haters as well though.
- https://projectorcentral.com/ seems to have good recs on products in various different categories. This seems like the place to go for quality purchases.
- Unfortunately, it seems like you need a "laser projector" for something like the [[Folk Gadget]] that you can easily transport and set up wherever you want. 
- Laser projectors are more expensive than traditional projectors. It seems like you would need to spend around 500 bucks to get something you could use for a [[Folk Gadget]].

# 3/7/26
There is a portable version of [[Folk Computer]] called [[Folk Gadget]]. It seems like starting with trying to build one of these would be a good first step.

# 12/30/25
Could you build a more permanent home for this at a local university?

# 12/29/25
 Physical computing devices like folk computer are really interesting too
- Smallest/simplest idea
- Webcam, NUC, projector
- Maybe a baby version could just scan handwritten software and run on its own screen instead of the projector
- what Is a “personal” communal computer…? Physical computer I guess. I want to take it to a coffee shop or have it in my home (and not need an entire workshop for it)
- seems like maybe:
	- https://www.reddit.com/r/DMAcademy/comments/1j23jz1/portable_downward_projector_setup_suggestions/
		- a smaller portable projector (apparently cheap projectors are pretty shit)
		- a mic boom arm and some other kinds of clamps listed in that reddit post
		- long hdmi, extension cord, usb cable
		- logitech webcam

Tesseract.js lets you do OCR locally. It does not seem to even slightly recognize some of the handwriting I had laying around on my desk.
- it seems to do okay with the printed text in their sample
- it doesn't seem to work well with a book cover either
- it did reasonably well at translating a photo of book's text, that said there are enough errors in the text that a "normal" program wouldn't run

Here's a reddit thread on handwritten ocr detection:
- https://www.reddit.com/r/computervision/comments/1ctf0jh/2024_review_of_ocr_tools_extracting_text_from/
- These all seem to be remote services, which is not useful for this project. I need to be offline.
- This person did seem to think Handwriting OCR was a good option

It looks like Folk Computer uses printed text, probably for this reason.

I wonder if you could maybe write the code in symbols:
- something like a QR code that is more easily discovered
- [[AprilTag]] is a robotics QR Code alternative used by [[Folk Computer]]
- Sounds like "template matching" is the idea I'm looking for here, recognize sub images in a large image
	- [[OpenCV]] is an open source computer vision project, it has JS bindings
	- https://docs.opencv.org/4.x/d4/dc6/tutorial_py_template_matching.html
- OpenCV's contour detection sounds useful for the recognition of objects on the table:
	- https://docs.opencv.org/3.4/d4/d73/tutorial_py_contours_begin.html

I had an idea that you could:
- use AprilTags on realworld objects, but then still program on a computer tied to a given tag
- that wouldn't really make the code communal on its own
- you would still need to share your code with everyone else via the internet
- maybe this is the easiest mobile collaboration situation though - everyone joins the same coding session online

A different mobile communal computing device would probably be something like that board game console. Or a big shared iPad I guess?

Ah, I guess you can maybe use OpenCV's template matching to match on a very particular font's worth of characters and recognize those as programs. This still has the issue of requiring a printer for programs to work.

[[DynaTag]] is an interesting idea for an optical recognition thing. One thing pretty cool about this demo is that it just runs off a phone camera. And that's a pretty portable thing.

Maybe we could use graph paper and put particular symbols into those graph cells that correspond to programming instructions somehow?

You could fill boxes with different amounts of shading, put a dot in them...

What about a 2D grid based esolang....? I think you could for sure build this, but could you actually make it like somewhat reasonably _useful_? I'm less sure of this part.