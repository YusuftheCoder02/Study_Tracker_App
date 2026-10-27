# Exercise 2: Collapsing header menu (no React)

Skills: responsive-css, css-positioning-overlay
Difficulty: Intermediate
Feature link: the mobile breakpoint, hidden links and dropdown in the navbar.
Status: Assigned

## Scenario

Extend your Recipe Box header from exercise 1 into a mobile-friendly header. Use plain HTML, CSS and optionally plain JavaScript. No React.

## Task

On narrow screens the links collapse behind a menu button. On wide screens they show in a row as before. Choose your own breakpoint and write it down in notes.md.

## Acceptance criteria

- Above your breakpoint the menu button is not shown and the links appear in a row.
- At or below your breakpoint the links are hidden until the menu button is used, and the button is shown.
- When open on a narrow screen, the links appear as a vertical list covering the page content directly under the header, spanning the full width of the viewport.
- Opening and closing the menu does not change the header's height or move any page content below it. Verify this by measurement in dev tools and note the result in notes.md.
- If the menu is open and the window is widened past the breakpoint, the page shows the wide layout correctly with no leftover open-state styling. Narrowing it again shows a sensible state.
- No horizontal overflow at 320px or 1024px.
- Add some placeholder page content below the header to prove the covering and non-shifting behavior.

## Skills and knowledge needed

- Media queries and choosing a breakpoint
- Showing and hiding elements with CSS
- CSS positioning: how an element is placed relative to an ancestor, and how it affects surrounding layout
- Layering elements so one covers another
- Simple JavaScript event handling to toggle an element's state
- Testing at specific viewport widths with device emulation

## Explain in notes.md

1. Why did you choose your breakpoint?
2. Why doesn't opening the menu push the page content down in your solution?

## Submission

Work directly in this folder (`exercise_2/`). Use the blank files provided, add your own, and put your written answers in `notes.md` here. Choose your own structure. No starter code is supplied. The `solutions/` folder is for AI reference answers, which are only provided after you complete the exercise yourself.
