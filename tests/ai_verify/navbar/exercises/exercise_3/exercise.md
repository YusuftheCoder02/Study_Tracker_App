# Exercise 3: Data-driven header component

Skills: react-list-rendering, react-component-composition
Difficulty: Intermediate
Feature link: the `Navbar` component and the way it maps links to list items.
Status: Assigned

## Scenario

Recipe Box needs the header as a React component that other pages can reuse with different content.

## Task

Build a header component in React that shows a brand name and a list of links, with all content supplied from outside the component.

## Acceptance criteria

- The component receives the brand name and the link list from its caller. Each link has a unique ID, a label and a destination.
- Rendering two instances with different brands and different link lists shows each one's own content.
- Adding a fifth link to a caller's data shows it without changing the component's code.
- Each rendered link item has a stable key based on its record's ID. No array index keys.
- The component lives in its own file and importing it does not mount anything. A separate entry file mounts the app.
- Link destinations come from the data, not from string handling inside the component.
- The visual result can be plain; styling is not assessed here.

## Skills and knowledge needed

- Function components and JSX
- Props and passing data from a parent to a child
- Rendering arrays with `map` and stable keys
- ES module exports and imports
- The difference between defining a component and rendering an app
- Choosing a setup for running React (your choice)

## Explain in notes.md

1. What goes wrong if list items use the array index as the key and the list is reordered?
2. What does your component need to know, and what does it deliberately not know?

## Submission

Work directly in this folder (`exercise_3/`). Use the blank files provided, add your own, and put your written answers in `notes.md` here. Choose your own structure and setup. No starter code is supplied. The `solutions/` folder is for AI reference answers, which are only provided after you complete the exercise yourself.
