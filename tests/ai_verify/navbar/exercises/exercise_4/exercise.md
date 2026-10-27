# Exercise 4: Interactive, accessible menu in React

Skills: react-state-events, accessible-disclosure
Difficulty: Intermediate to advanced
Feature link: the mobile toggle button, `open` state and `aria-expanded` in the navbar.
Status: Assigned

## Scenario

Add a menu button to the Recipe Box header component from exercise 3. On narrow screens the links collapse behind the button.

## Task

Make the menu state live in React and make the control usable by keyboard and assistive technology. You may reuse your own layout CSS from exercise 2.

## Acceptance criteria

- The button opens and closes the menu, and the open or closed state is driven by React state, not by editing the DOM directly.
- The button exposes its expanded state correctly at all times.
- The button is programmatically linked to the menu it controls and has an accessible name.
- Pressing Escape while the menu is open closes it and returns keyboard focus to the button.
- Choosing a link closes the menu.
- While the menu is closed on a narrow screen, its links cannot receive keyboard focus.
- On a wide screen the links are always usable, whatever the menu state.
- The button and each link show a visible keyboard focus style.
- Everything can be operated using only the keyboard.

## Skills and knowledge needed

- React state with `useState` and updating it from event handlers
- Conditional class names or attributes derived from state
- Accessibility attributes for expandable controls
- Keyboard events and how to listen for them
- Moving focus programmatically in React
- How hidden content affects keyboard focus and screen readers
- Visible focus styling

## Explain in notes.md

1. Which pieces of information in your component are state, and which are derived from state?
2. Name two ways a keyboard-only user could get stuck in a menu and how your solution avoids each.

## Submission

Work directly in this folder (`exercise_4/`). Use the blank files provided, add your own, and put your written answers in `notes.md` here. Choose your own structure and setup. No starter code is supplied. The `solutions/` folder is for AI reference answers, which are only provided after you complete the exercise yourself.
