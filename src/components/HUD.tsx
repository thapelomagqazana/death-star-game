/**
 * @file HUD.tsx
 * @description Heads-Up Display (HUD) for the game, displaying score, health, and level.
 */
import React from "react";
import { motion } from "framer-motion";
import { useGameStore } from "../hooks/useGameStore";

/**
 * @function HUD
 * @description Displays the game HUD with score, health, and level.
 *
 */
const HUD : React.FC = () => {
  const { score, health, level } = useGameStore();

  return (
    <motion.div
      className="absolute top-4 left-4 p-4 bg-black/60 text-white rounded-lg shadow-lg flex flex-col items-start gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Score Display */}
      <p className="text-lg font-bold">
        Score: <span className="text-blue-400">{score}</span>
      </p>

      {/* Health Display */}
      <div className="w-32 h-4 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-red-500"
          style={{ width: `${health}%` }}
          initial={{ width: "100%" }}
          animate={{ width: `${health}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <p className="text-sm">Health: {health}%</p>

      {/* Level Display */}
      <p className="text-lg font-bold">
        Level: <span className="text-green-400">{level}</span>
      </p>
    </motion.div>
  );
};

export default HUD;
