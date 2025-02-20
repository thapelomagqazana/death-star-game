/**
 * @file Game.tsx
 * @description Game screen with responsive HUD, controls, and pause menu.
 */

import React, { useState } from "react";
import HUD from "../components/HUD";
import GameControls from "../components/GameControls";
import PauseMenu from "../components/PauseMenu";

/**
 * @function Game
 * @description Main game screen containing HUD, controls, and pause functionality.
 */
const Game: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative h-screen w-screen bg-black text-white flex flex-col">
      {/* Heads-Up Display (HUD) */}
      <HUD />

      {/* Game Area (Centered) */}
      <div className="flex-grow flex items-center justify-center">
        <p className="text-xl md:text-2xl lg:text-4xl">Gameplay Here...</p>
      </div>

      {/* Game Controls (Adaptive Buttons) */}
      <GameControls />

      {/* Pause Menu */}
      <PauseMenu isOpen={isPaused} onResume={() => setIsPaused(false)} />
    </div>
  );
};

export default Game;
