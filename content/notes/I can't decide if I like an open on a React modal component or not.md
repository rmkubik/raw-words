---
tags:
  - public
---
# 2/17/26
We use [[MUI]] at work. All of the modals and dialogs in this library have an `open` prop. When it is true the component renders. If false, it does not render.

In the past, I have preferred not to do that. Instead I've preferred the parent component to make a conditional check and either render the modal or not. This leaves that modal nice and dumb. 

On the flip side, I've seen people do some unholy things with conditional display logic. Maybe encouraging that pattern isn't ideal?
