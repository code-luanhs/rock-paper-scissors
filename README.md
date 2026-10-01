# Rock, Paper, Scissors

[Português (Brasil)](README-ptbr.md)

A responsive Rock, Paper, Scissors game. This project was built from Frontend Mentor's [Rock, Paper, Scissors](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH) challenge.

## Features

- Lets users choose between Rock, Paper, and Scissors.
- Generates a random choice for the house.
- Determines whether the player wins, loses, or draws each round.
- Updates the score based on the result.
- Includes animated transitions between game states.
- Animates the house choice reveal and round result.
- Highlights the winning choice with visual rings.
- Includes a responsive rules modal.
- Provides layouts optimized for both desktop and mobile devices.

## Tech stack

- [SvelteKit](https://svelte.dev/docs/kit) and [TypeScript](https://www.typescriptlang.org/)
- [Svelte](https://svelte.dev/) for components, state, and transitions
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Run locally

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer
- npm

### Installation

```bash
git clone git@github.com:code-luanhs/rock-paper-scissors.git
cd rock-paper-scissors
npm install
npm run dev
```

Then open the URL shown by SvelteKit, usually `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server. |
| `npm run build` | Creates a production build. |
| `npm run preview` | Serves the production build locally. |
| `npm run check` | Runs Svelte and TypeScript diagnostics. |
| `npm run lint` | Runs static analysis with ESLint and formatting checks. |
| `npm run format` | Formats the project with Prettier. |

## Project structure

```text
src/
├── lib/
│   ├── assets/          # Images and icons
│   ├── components/      # Game and UI components
│   └── game/            # Game types and business logic
├── routes/
│   ├── +layout.svelte   # Global layout and styles
│   └── +page.svelte     # Game state and round flow
└── app.css              # Global styles and Tailwind configuration
```

## Game flow

Each round moves through a small set of game states:

1. The player chooses Rock, Paper, or Scissors.
2. The game waits before revealing the house choice.
3. The house randomly chooses one of the three options.
4. The winner is determined and the score is updated.
5. The player can start another round with **Play Again**.

The game rules and result calculation are kept separate from the UI components in `src/lib/game`.

## Author

Built by [Luan Henrique](https://github.com/code-luanhs).
