/**
 * @file SettingsMenu.tsx
 * @description Fully responsive settings menu with volume control, difficulty selection, and a close button.
 */

import { motion } from "framer-motion";
import { useSettingsStore } from "../hooks/useSettingsStore";

/**
 * @function SettingsMenu
 * @description Renders an interactive settings menu with responsive design and a close button.
 */
const SettingsMenu = ({ onClose }: { onClose: () => void }) => {
  const { volume, difficulty, toggleVolume, setDifficulty } = useSettingsStore();

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/80 p-4 md:p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Modal Content */}
      <motion.div
        className="bg-gray-900 text-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-md md:max-w-lg"
        initial={{ y: 30 }}
        animate={{ y: 0 }}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <motion.button
            className="text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
          >
            ✖
          </motion.button>
        </div>

        {/* Settings Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Settings</h2>

        {/* Volume Control */}
        <div className="flex flex-col items-center mb-6">
          <span className="text-lg mb-2">Sound:</span>
          <motion.button
            className={`px-6 py-3 rounded-lg font-bold transition ${
              volume ? "bg-green-500 hover:bg-green-700" : "bg-red-500 hover:bg-red-700"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleVolume}
          >
            {volume ? "ON" : "OFF"}
          </motion.button>
        </div>

        {/* Difficulty Selection */}
        <div className="flex flex-col items-center">
          <span className="text-lg mb-2">Difficulty:</span>
          <div className="flex flex-wrap justify-center gap-3">
            {["Easy", "Normal", "Hard"].map((level) => (
              <motion.button
                key={level}
                className={`px-6 py-3 rounded-lg font-bold transition ${
                  difficulty === level ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDifficulty(level as "Easy" | "Normal" | "Hard")}
              >
                {level}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SettingsMenu;
