---
tags:
  - public
---

# 8/11/26
I think that design tokens might be kinda BS. I think there's definitely value in making sure that everyone is using the same shades of red. Keeping the UI feeling consistent across a bunch of engineers building stuff is tricky! 

The idea that we're going to successfully use _semantic_ design tokens though... I'm not sure how much I really believe in that idea. I think we have successfully been able to use `tokens.text.color.positive` instead of `tokens.color.green`. And info and failure. Those seem fine. 

But so many of our tokens are just `background.color.secondary`. Like what does that mean? I suppose its not the worst! It does let us remove the coloration so the tokens still make sense in a theoretically enabled light and dark mode. (Though I don't think we technically support dark mode yet)

We could/should be using terms like primary, secondary, tertiary to describe information hierarchy for a give interface. That's probably a good way to create generically re-usable tokens and components. We haven't really had that discussion between design and engineering though. So, I'm not sure if it is happening or not.

The thing I'm really unsure about is the idea of a "spacing" token. I like the idea of rhythm and vertical rhythm. But, I think it makes the most sense in a hierarchy concept like what I described above. We just have a `tokens.spacing(1)` that takes in any old integer. What does that mean? Why should I use spacing 1 or 2 or 3 or 4? As it is now, I just look at the designs and have to divide pixel values by 4 so I know what number to put in the spacing function... Is this really helping anything?

I wonder about spacing tokens more like:
- Same thing
- Closely related
- Loosely related
- Unrelated