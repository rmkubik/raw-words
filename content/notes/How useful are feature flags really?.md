---
tags:
  - public
---

# 3/27/26
I like feature flags in general, I think. I enjoy the continuous CI/CD pace of development. It feels easier for me to work as a developer. 

I like to be able to keep PRs small and ship increments of a feature that have no business being shown to a user yet. Feature flags enable this really well.

I also think this laxness leads to situations where I inadvertently ship bugs more often. It doesn't matter as much if the feature is perfect, we can flip the flag back off and fix. I thought I had all the logic behind the flag, but I missed a spot, oops! 

It also becomes trickier to understand the application. What flags does this customer have enabled? Is my dev environment significantly diverged from the state of production? What if these customers all have wildly different configurations due to flag rollouts? Does it need to be this complicated?

I don't see how to do away with flags in my current work method. I think I'd need a change in my development style. Maybe there's a good change out there that would work.

Semi-related, this post suggests the usage of a feature flag file instead of using an external flag management service. And that seems pretty compellingly argued: https://code.mendhak.com/hardcode-feature-flags/. Keep it simple. Doesn't change the need for flags in general though.