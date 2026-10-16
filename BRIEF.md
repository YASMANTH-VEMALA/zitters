# Zitters redesign brief

Self-authored under the user's creative direction to redesign the full UI and UX, add useful information, and make scrolling feel smooth.

## Audience and decision

Local business owners, especially gym owners, need to understand what Zitters offers and whether GymOS fits their daily work. The primary action is to explore the GymOS product. A product walkthrough request is the secondary action. The main objection is whether the software reflects real gym operations.

## Visual direction

**Thesis:** Operating clarity with editorial momentum.

The dark blue opening makes the real GymOS owner screen the focal proof. Warm paper sections give the story room to breathe; pale blue and green shifts mark a move from discovery to operation. Lime highlights identify actions and key phrases. Archivo keeps interface language direct, while a restrained italic serif distinguishes the promise from the operational details.

The design uses the existing brand mark and product images. No customer logos, measured performance statistics, testimonials, or rankings are invented.

## Scroll score

| Beat | Visitor question | Device | Feeling |
| --- | --- | --- | --- |
| Hero | What is Zitters? | Layered product screen with short parallax | Clear, energetic |
| Statement | Why does this matter? | Scroll-paced word emphasis | Reflective |
| Workflow | How do the pieces connect? | Sticky handoff panel and sequential cards | Focused peak |
| GymOS proof | Is the product real? | Product imagery in an editorial split | Reassured |
| Daily data | What will my team act on? | Plain information table | Practical |
| Growth and roadmap | Where can this go? | Two channel explanations and product status | Forward-looking |
| Close | What should I do? | Stable, readable call to action | Resolved |

The handoff panel is the signature move. It changes as the reader reaches the next stage, showing the information passed between local discovery, response, and gym operations. It has a static first state, does not trap the scroll, and becomes a simple vertical sequence on narrow screens.

## Evidence and actions

GymOS screens supplied with the project support the member, QR attendance, fee, notification, owner, and mobile views. The daily event table is explicitly illustrative. Other industry products retain their pipeline or exploration labels. The page avoids unverified speed, revenue, recovery, ranking, and onboarding claims.

| Action | Destination |
| --- | --- |
| Explore GymOS | `/products/gymos` |
| Explore the product | `/products/gymos#explore` |
| Request a walkthrough | `mailto:zitters.contact@gmail.com?subject=GymOS%20walkthrough` |
| GymOS sign in | `https://gym.zitters.com/login` |

## Implementation notes

The visual direction and verification approach draw from [Agent Website Design Skills](https://github.com/divyanshu-iitian/agent-website-design-skills). The layered hero, varied scroll beats, and signature handoff draw from [scroll-craft](https://github.com/nateherkai/scroll-craft). Scroll-paced emphasis draws from [MengTo's Scroll-Scrubbed Word Reveal skill](https://github.com/MengTo/Skills/tree/main/agent-skills/web-design/scroll-scrubbed-word-reveal). The app keeps its existing React, Motion, and Lenis stack, with native touch scrolling and a reduced-motion path.

## Verification

Checked both routes in the browser at 390px and 1440px, the homepage at 320px and 768px, and the mobile navigation and GymOS product tabs. No horizontal overflow, broken loaded images, missing local anchors, or browser console errors were observed. `npm run lint`, `npm run build`, and `git diff --check` passed. The external GymOS sign-in URL returned HTTP 200 during a header check. A physical phone scroll test remains outside this local browser check.
