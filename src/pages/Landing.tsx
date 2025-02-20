import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Landing Page Component
 *
 * This component serves as the game's main entry screen.
 * - Displays the game title with a glowing neon effect.
 * - Provides a "Start Game" button to navigate to the game screen.
 * - Includes menu options for settings and about.
 * - Features an animated starry background for a futuristic aesthetic.
 */
const Landing = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center text-center">
      {/* Background Animated Stars */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Game Title with Neon Glow Effect */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-neonBlue uppercase tracking-widest glow"
        initial={{ opacity: 0, y: -20 }} // Fade-in effect with upward motion
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        Death Star Chapter
      </motion.h1>

      {/* Start Game Button */}
      <Link to="/game">
        <motion.button
          className="mt-8 px-8 py-3 text-xl font-semibold text-white bg-neonPurple rounded-lg neon-button"
          whileHover={{ scale: 1.1 }} // Slight zoom effect on hover
          whileTap={{ scale: 0.9 }} // Slight shrink effect when clicked
        >
          Start Game
        </motion.button>
      </Link>

      {/* Menu Options */}
      <div className="mt-6 space-y-4">
        <Link to="/settings">
          <motion.button
            className="menu-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Settings
          </motion.button>
        </Link>
        <Link to="/about">
          <motion.button
            className="menu-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            About
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
