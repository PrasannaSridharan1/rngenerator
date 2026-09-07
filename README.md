# Prajna AI Solutions — Random Number Generator

A small Next.js app that generates unique random numbers with a click budget derived from the user's input. Styled with the Prajna AI Solutions brand palette and a light/dark theme toggle.

## Features

- **Numeric-only input** — accepts a whole number from **1 to 100**. Anything else prompts the user to enter a valid numeric value.
- **Click budget** — entering `N` grants exactly `N` clicks. Once the budget is spent, generation is disabled.
- **Unique results** — each click produces a random number between `1` and `N`, and no value ever repeats within a session.
- **Reset** — clears all results and returns to the input step to start over.
- **Theme toggle** — switch between a white light theme and an indigo dark theme; the choice is saved in `localStorage` and applied before paint to avoid flashing.
- **Branding** — Prajna AI Solutions logo in the top-left corner.

## Brand Palette

| Role      | Color                        | Hex       |
| --------- | ---------------------------- | --------- |
| Primary   | Royal Indigo                 | `#312E81` |
| Secondary | Emerald Intelligence Green   | `#00A86B` |
| Accent    | Gold                         | `#F4B942` |

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

1. Enter a number from 1 to 100 and press **Set**.
2. Click **Generate** to draw a unique random number in range. You get one draw per unit of your input.
3. When the click budget is exhausted, the generator locks.
4. Press **Reset** to start again.

## Project Structure

```
app/
  layout.tsx          # Root layout, fonts, theme no-flash script
  page.tsx            # Page shell with logo and theme toggle
  globals.css         # Design tokens for light/dark themes
components/
  random-generator.tsx # Core generator UI and logic
  theme-toggle.tsx     # Light/dark theme switcher
public/
  prajna-ai-logo.png   # Brand logo
```
