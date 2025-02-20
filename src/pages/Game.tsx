/**
 * @file Game.tsx
 * @description Game screen with responsive HUD, controls, and pause menu.
 */

import React, { useState } from "react";
import HUD from "../components/HUD";
import GameControls from "../components/GameControls";
import PauseMenu from "../components/PauseMenu";
import ParallaxBackground from "../components/ParallaxBackground";
import Player from "../components/Player";

/**
 * @function Game
 * @description Main game screen containing HUD, controls, and pause functionality.
 */
const Game: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative h-screen w-screen text-white flex flex-col">
      {/* Parallax Background */}
      <ParallaxBackground />
      
      {/* Heads-Up Display (HUD) */}
      <HUD />

      {/* Player Character */}
      <Player />

      {/* Game Controls (Adaptive Buttons) */}
      <GameControls />

      {/* Pause Menu */}
      <PauseMenu isOpen={isPaused} onResume={() => setIsPaused(false)} />
    </div>
  );
};

export default Game;
