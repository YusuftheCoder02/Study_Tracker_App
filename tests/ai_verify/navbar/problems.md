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

- react-state-events: Manage interactive state through user events.
- react-list-rendering: Render data-driven lists with stable keys.
- react-component-composition: Separate reusable components from application mounting and pass data through props.
- responsive-css: Adapt layout and visibility to viewport width.
- css-flexbox-layout: Build a fixed-height horizontal bar with flexbox, semantic list markup, and hover/focus styles.
- css-positioning-overlay: Overlay a menu on page content without changing the header's height.
- browser-react-setup: Load and mount React in a plain HTML page without a build step, and know why it needs a server.
- accessible-disclosure: Implement an accessible expandable section with keyboard behavior.

Implementation findings and skill verification are separate: completing exercises does not fix the source feature.
