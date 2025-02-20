/**
 * @file Game.tsx
 * @description Game screen with HUD, controls, and pause menu.
 */

import React, { useState } from "react";
import HUD from "../components/HUD";
import GameControls from "../components/GameControls";
import PauseMenu from "../components/PauseMenu";

/**
 * @function Game
 * @description Main game screen containing HUD, controls, and pause functionality.
 * @returns {JSX.Element} Game UI component.
 */
const Game : React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative h-screen w-screen bg-black text-white">
      {/* Heads-Up Display (HUD) */}
      <HUD />

      {/* Game Controls */}
      <GameControls />

      {/* Pause Menu */}
      <PauseMenu isOpen={isPaused} onResume={() => setIsPaused(false)} />
    </div>
  );
};

export default Game;
