/**
 * @file Landing.tsx
 * @description The main entry screen for the game. Displays a welcome message and a button to start the game.
 */

import { Link } from "react-router-dom";

/**
 * @function Landing
 * @description Displays the landing page with a title and a start button.
 * @returns {JSX.Element} React component representing the landing page.
 */
const Landing = (): JSX.Element => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-dark text-primary">
      {/* Game Title */}
      <h1 className="text-5xl font-bold">🚀 Death Star Game</h1>
      <p className="mt-4 text-lg">Are you ready for the challenge?</p>

      {/* Start Game Button */}
      <Link to="/game">
        <button className="mt-6 px-6 py-3 bg-primary text-dark text-lg font-bold rounded-lg shadow-lg hover:scale-105 transition-transform">
          Start Game
        </button>
      </Link>
    </div>
  );
};

export default Landing;
