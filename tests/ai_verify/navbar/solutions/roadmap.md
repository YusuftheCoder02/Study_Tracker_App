# Navbar verification roadmap

Status: Planned. No solutions submitted; no skills verified.

## Guiding question

If this developer had no access to AI for a period, could they confidently build a navbar like the one in `tests/ai_features/` themselves?

To answer that, the plan breaks the AI-generated navbar into the skills a person needs to build it unaided. The exercises climb from the static bar up to building the whole header from a blank page.

## Plan: 5 exercises, 8 skills

| # | Exercise | What it proves | Skills tested |
|---|----------|----------------|---------------|
| 1 | Static site header | The horizontal bar, brand and link row in plain HTML/CSS | css-flexbox-layout |
| 2 | Collapsing header menu (no React) | The mobile breakpoint, hidden links and dropdown that does not change the header height | responsive-css, css-positioning-overlay |
| 3 | Data-driven header component | The `Navbar` component and its mapped link list, reusable and separate from mounting | react-list-rendering, react-component-composition |
| 4 | Interactive, accessible menu in React | The toggle button, open state and `aria-expanded`, with keyboard behavior | react-state-events, accessible-disclosure |
| 5 | Capstone: header from a blank page | The full navbar plus the `ai.html` setup, built with no references | browser-react-setup, plus everything above |

Each exercise uses a different site (Recipe Box, then Pet Care Planner) so it tests transferable understanding instead of copying the original navbar. Full tasks and acceptance criteria are in `../exercises/exercise_N/exercise.md`.

## How each skill maps to the AI-generated code

- **css-flexbox-layout:** `.navbar` flex layout, fixed height, list reset, link styling.
- **responsive-css:** the `@media (max-width: 600px)` block that hides links and shows the toggle.
- **css-positioning-overlay:** the dropdown positioned under the bar so the height never changes.
- **react-list-rendering:** `links.map(...)` with keys.
- **react-component-composition:** the `Navbar` function and how it is mounted from `ai.html`.
- **react-state-events:** `useState` and the toggle click handler.
- **accessible-disclosure:** `aria-expanded` and the gaps the AI code left, such as `aria-controls`, Escape and focus.
- **browser-react-setup:** CDN scripts, Babel and why a server is needed.

## Process

- Do the exercises in order, working in each exercise's own folder. Later ones build on earlier ones but are not allowed to copy from AI output.
- `solutions/` holds AI reference answers, provided only after you complete an exercise yourself.
- Each exercise asks for short written explanations in `notes.md`, to check understanding and not only working code.
- Failed criteria become learning gaps, and I assign follow-ups only for the remaining gaps.
- The capstone should be done in one sitting without AI, tutorials or earlier solutions.

## Completion

The navbar is verified when all 8 skills have a passing review in `../review.md` and a record in `../../skills.json`. Code review and testing are still required before integration into `main`.
