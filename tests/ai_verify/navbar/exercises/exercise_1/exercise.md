# Exercise 1: Static site header

Skills: css-flexbox-layout
Difficulty: Introductory
Feature link: the horizontal bar, brand and link row in the navbar.
Status: Assigned

## Scenario

You are building the header for a recipe website called "Recipe Box". It has a brand name on the left and four links on the right (Home, Recipes, Shopping List, About). No JavaScript and no React.

## Task

Write plain HTML and CSS for the header.

## Acceptance criteria

- The header is exactly 64px tall in the browser's computed layout, regardless of padding.
- The brand is at the left edge and the links are at the right edge, all vertically centered in the header.
- The links are a real list of links inside a navigation landmark. No bullets and no default list margins or padding are visible.
- Hovering a link and keyboard-focusing it each produce a visibly different style.
- At 1024px wide there is no horizontal scrollbar.
- The page declares a viewport suitable for mobile devices.

## Skills and knowledge needed

- Semantic HTML: header, nav, ul, li, a
- Flexbox: direction, alignment on both axes, space distribution
- The box model and how sizing interacts with padding
- Resetting default list styles
- Pseudo-classes for hover and keyboard focus
- Viewport meta tag
- Inspecting computed sizes in browser dev tools

## Explain in notes.md

1. Why did you choose the elements you used for the link list?
2. What decides whether the header's height is exactly what you specified?

## Submission

Work directly in this folder (`exercise_1/`). Use the blank files provided, add your own, and put your written answers in `notes.md` here. Choose your own structure. No starter code is supplied. The `solutions/` folder is for AI reference answers, which are only provided after you complete the exercise yourself.
