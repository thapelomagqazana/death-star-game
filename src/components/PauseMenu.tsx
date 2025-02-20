/**
 * @file PauseMenu.tsx
 * @description Displays a modal pause menu when the game is paused.
 */

import { motion } from "framer-motion";

const PauseMenu = ({ isOpen, onResume }: { isOpen: boolean; onResume: () => void }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold mb-4">Game Paused</h2>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-6 py-3 bg-green-500 rounded-lg shadow-lg"
        onClick={onResume}
      >
        Resume Game
      </motion.button>
    </motion.div>
  );
};

export default PauseMenu;
