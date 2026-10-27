# Exercise 5: Capstone, build a header from a blank page

Skills: browser-react-setup, plus all skills from exercises 1 to 4
Difficulty: Advanced (matches the original feature end to end)
Feature link: the whole navbar, including how `ai.html` loads and mounts it.
Status: Assigned

## Scenario

You are on a project with no access to AI. You need a responsive header for a new site called "Pet Care Planner" in one sitting.

## Task

Starting from a blank folder, build a complete responsive header that runs in the browser with no build tool. Do not copy from your earlier solutions or from `ai_features`.

## Acceptance criteria

- The page runs from a plain HTML file that loads React in the browser without a build step, and the header component is in its own file.
- The component takes its brand and links as data, with unique IDs and stable keys.
- Five links are shown in a row on wide screens, and a menu button shows them as a full-width overlay on narrow screens.
- Opening and closing the menu does not change the header height.
- The menu button follows the accessibility criteria from exercise 4, including Escape handling, focus return and a closed menu with no focusable links.
- The link most recently chosen is visibly marked as current, and exposes that to assistive technology.
- A short README in your solution explains how to run it, including any need for a local web server and why.
- It works at 320px, 600px and 1024px with no horizontal overflow.

## Skills and knowledge needed

- Everything listed in exercises 1 to 4
- Loading scripts in the right order in an HTML page
- How browser-side JSX compilation differs from a build step, and its limits
- Why a page may fail when opened from the file system instead of a server
- Tracking which item is currently selected in React state
- Debugging in browser dev tools: console errors and the network tab

## Explain in notes.md

1. Describe your component in three sentences as if teaching a teammate, without reading your code.
2. List two things you would change before putting this on a real site, and why.

## Submission

Work directly in this folder (`exercise_5/`). Use the blank files provided, add your own, and put your README and written answers in this folder (`notes.md`). Choose your own structure. No starter code is supplied. The `solutions/` folder is for AI reference answers, which are only provided after you complete the exercise yourself.
