---
tags:
  - public
---
# 2/19/26
I've been working with code others have AI generated recently and it feels super over-wrought in a lot of places. There's a bunch of unnecessary abstraction and layering. Why create a system that pops open a modal and then routes between different views in that modal instead of just making 4 simple modals? Why make variables optional if we always pass them in all callsites? Why but put defaults values into a useState hook if we never changes them?