# Enroth Archive

Welcome to the Enroth Archive, a modern, fan-made wiki for the classic role-playing game, *Might and Magic VI: The Mandate of Heaven*. This web application provides a comprehensive and easy-to-navigate resource for exploring the world of Enroth.

This project was built using **Firebase Studio**.

## Features

- **Interactive World Map**: Explore the regions of Enroth through a clickable grid-based map.
- **Detailed Area Guides**: Each area has a dedicated page with key locations, travel routes, and points of interest.
- **Comprehensive Data**: Browse detailed information on:
  - Quests
  - Skills (including trainer locations and mastery levels)
  - Spells
  - Items
  - Monsters
  - Potions & Recipes
  - Magic Shrines
- **Responsive Design**: A clean, modern interface that works beautifully on both desktop and mobile devices.
- **Dark Mode**: Switch between light and dark themes for comfortable viewing.

## Tech Stack

This project is built with a modern web development stack:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Fonts**: Google Fonts (`Spectral` and `Eagle Lake`)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

To get the project running locally, follow these steps:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run the Development Server**:
    ```bash
    npm run dev
    ```

    The application will be available at [http://localhost:9002](http://localhost:9002).

## Project Structure

- `src/app/`: Contains all the pages and routes for the application, following the Next.js App Router structure.
- `src/components/`: Reusable React components used throughout the application, including UI components from ShadCN.
- `src/lib/`: Core logic, type definitions, and data-fetching functions.
  - `src/lib/data/`: Contains the static data for the game (e.g., areas, quests, skills).
- `public/`: Static assets.
- `tailwind.config.ts`: Configuration for Tailwind CSS.
- `next.config.ts`: Configuration for Next.js.
