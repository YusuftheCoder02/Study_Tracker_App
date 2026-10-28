# Navbar: identified problems and skills

Source files:
- ../../ai_features/components/navbar.jsx
- ../../ai_features/styles/navbar.css
- ../../ai_features/ai.html

Status: Pending

## Observed implementation problems

- Links (`#dashboard`, `#subjects`, `#stats`) target sections that do not exist in this standalone demo.
- No link is marked as the current page, and there is no active-state tracking.
- The link list is hardcoded inside `Navbar`; the component accepts no props.
- The toggle has `aria-expanded` but no `aria-controls`, and the list has no `id`.
- The toggle uses `aria-label` only; its icon never changes between open and closed.
- Escape does not close the menu, and selecting a link leaves it open.
- No `:focus-visible` styling is defined for the toggle or links.
- The 600px breakpoint and 56px header height are hardcoded magic numbers.
- `Navbar` relies on global `React` and is mounted from an inline script in `ai.html`, so it cannot be imported.
- The preview compiles JSX in the browser via Babel and loads React from a CDN, so it needs an HTTP server and network access; it is a prototype setup.

## Required transferable skills

The names below are broad areas, not verification IDs. Use the granular skill IDs in `solutions/roadmap.md`; a pass for one ID does not verify its parent area or sibling skills.

### Granular skill map

| Stable skill ID | Observable ability |
|---|---|
| `css-background-color` | Set the background color of a provided element. |
| `css-class-selector-targeting` | Select one provided element by its class without changing other elements. |
| `css-flexbox-container` | Make a chosen element a flex container and observe its direct children become flex items. |
| `css-flexbox-main-axis-distribution` | Distribute flex items along the main axis to meet stated spacing/edge constraints. |
| `css-flexbox-cross-axis-alignment` | Align flex items along the cross axis within a fixed-height container. |
| `css-flexbox-gap` | Set consistent spacing between flex items without adding outer space at the container edges. |
| `css-box-sizing-border-box` | Keep a declared element width inclusive of its padding and border. |
| `css-focus-visible` | Give keyboard-focused interactive controls a visible focus treatment. |
| `css-responsive-visibility` | Change element visibility at a stated viewport breakpoint. |
| `css-positioning-containing-block` | Establish the containing block used by a positioned child. |
| `css-positioning-overlay` | Place a menu over following content without increasing the header's height. |
| `react-props-value-flow` | Receive and use a value passed to a component as a prop. |
| `react-array-list-rendering` | Render one UI item for each value in an array. |
| `react-list-stable-keys` | Give repeated rendered siblings stable keys derived from their data. |
| `react-state-boolean` | Store and update a boolean state value. |
| `react-click-handler` | Connect a click event to a specified state or behavior change. |
| `react-component-extraction` | Move a defined UI region into a reusable component. |
| `react-component-import-export` | Export a component and import it from another module. |
| `aria-disclosure-state` | Keep a disclosure control's accessible expanded state in sync with whether its content is open. |
| `keyboard-escape-dismissal` | Close an open menu in response to Escape. |
| `keyboard-focus-return` | Return focus to the disclosure control when its menu is dismissed. |
| `browser-local-server-usage` | Open a supplied static demo through a local HTTP server. |
| `browser-react-script-dependencies` | Identify the supplied React and JSX-transformer runtime scripts and their roles. |

Neutral HTML, styling, build setup, or server configuration can be supplied when it is outside an exercise's target. Supplied infrastructure is not evidence that the user has verified the skills used to create it.

Implementation findings and skill verification are separate: completing exercises does not fix the source feature.
