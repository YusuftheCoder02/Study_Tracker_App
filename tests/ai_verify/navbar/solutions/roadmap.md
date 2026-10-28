# Navbar skill map and progression

Status: Exercise `css-background-color` is assigned. No skills are verified.

## Guiding question

Could the developer confidently build a navbar like the one in `tests/ai_features/` independently? The exercises verify small transferable skills one at a time; they are not a requirement to recreate the feature as a large capstone.

## Skill sequence

This is a flexible bank outline, not a set of pre-assigned exercises. At each step, read `../../skills.json` and `../review.md`, omit verified skills, and check that all prerequisites are either verified or supplied as clearly labeled infrastructure. Assign only the next appropriate exercise. The user may choose to revisit verified skills for practice.

| Order | Skill ID | Beginner-friendly progression |
|---|---|---|
| 1 | `css-background-color` | Change the background color of one provided notice. |
| 2 | `css-class-selector-targeting` | Change one provided element without affecting its neighbors. |
| 3 | `css-flexbox-container` | Turn two provided items into a horizontal row. |
| 4 | `css-flexbox-main-axis-distribution` | Position two groups at opposite ends of a provided row. |
| 5 | `css-flexbox-cross-axis-alignment` | Align items vertically inside a fixed-height row. |
| 6 | `css-flexbox-gap` | Set even spacing between items in a row. |
| 7 | `css-box-sizing-border-box` | Keep a fixed-width element within its stated width when padding is present. |
| 8 | `css-focus-visible` | Make keyboard focus visible on one provided control. |
| 9 | `css-responsive-visibility` | Change which provided navigation control is visible at a given breakpoint. |
| 10 | `css-positioning-containing-block` | Anchor one positioned child to its intended parent. |
| 11 | `css-positioning-overlay` | Layer a provided menu over page content without changing the header's height. |
| 12 | `react-props-value-flow` | Display one value passed into a provided component. |
| 13 | `react-array-list-rendering` | Render a small data array as repeated UI items. |
| 14 | `react-list-stable-keys` | Add stable keys to an already-rendered data-driven list. |
| 15 | `react-state-boolean` | Track whether a small provided panel is open or closed. |
| 16 | `react-click-handler` | Make a provided control respond to a click by changing its behavior. |
| 17 | `aria-disclosure-state` | Synchronize a provided disclosure control's accessible state with its open/closed state. |
| 18 | `keyboard-escape-dismissal` | Dismiss a provided open menu with Escape. |
| 19 | `keyboard-focus-return` | Restore focus to a provided control when its menu closes. |
| 20 | `react-component-extraction` | Extract one defined UI region into a reusable component. |
| 21 | `react-component-import-export` | Import and mount a supplied component from another module. |
| 22 | `browser-local-server-usage` | Open a supplied static demo through a local HTTP server. |
| 23 | `browser-react-script-dependencies` | Identify the supplied React and JSX-transformer runtime scripts and their roles. |

This is a suggested difficulty progression, not a requirement to create every listed exercise in advance. If a target depends on an unverified skill that is not itself being assessed, either offer that prerequisite first or supply it as clearly labeled infrastructure. Supplied implementation of an unverified skill is not evidence and does not create a verification record. Never automate a skill until both an independent passing review and a matching record in `../../skills.json` exist.

## Assignment and review process

1. Assign one individual skill check at a time. Use one target skill unless the combination itself is the learning objective.
2. Provide a tiny, varied beginner scenario with concise acceptance criteria that assess only the target. Avoid unnecessary setup and hidden prerequisites.
3. State what AI supplied, what the user implements, editable areas, provided infrastructure, and how to run and submit. Starter files must not reveal the target solution.
4. Review only the target skill. Record evidence and specific learning gaps in `../review.md`; update `../../skills.json` only after an independent pass.
5. If the user struggles, offer smaller guided practice for the same gap. After solution-level help, require a fresh independent scenario before verifying.
6. After a pass, offer the next appropriate unverified skill and automate only skills with both independent passing evidence and verified-skill records. Create starter files only when an exercise is assigned.
7. After related individual skills are verified, occasional integration exercises may test how they work together. Label those separately and do not use them to silently verify unrelated skills.

## Completion and feature readiness

Individual skill records do not by themselves make the navbar feature ready to merge. Track feature readiness separately; code review and testing of the original implementation are still required before integration into `main`.
