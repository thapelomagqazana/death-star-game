/**
 * StartScreen.tsx
 * Displays the game's entry animation, logo, and parallax background.
 */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import ParallaxBackground from "../components/ParallaxBackground";
import backgroundMusicFile from "../assets/sounds/background.mp3";
import "../styles/StartScreen.css"; // Import styles

/**
 * Props for StartScreen component.
 * @param onStart - Function to start the game.
 */
interface StartScreenProps {
    onStart: () => void;
}


const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Play background music on mount
    const bgMusic = new Howl({
      src: [backgroundMusicFile],
      loop: true,
      volume: 0.5,
    });
    bgMusic.play();

    return () => bgMusic.stop(); // Stop music when unmounted
  }, []);

  return (
    <div className="start-screen">
      <ParallaxBackground />

      {/* Game Logo Animation */}
      <motion.div
        className="game-logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Death Star Chapter</h1>
      </motion.div>

      {/* "Press Start" Pulsing Message */}
      <motion.p
        className="press-start"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Press Start
      </motion.p>

      {/* Menu Buttons (Fading in One by One) */}
      <motion.div
        className="menu-options"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.5 },
          },
          hidden: { opacity: 0 },
        }}
      >
        {/* Play Button */}
        <motion.button
          className="menu-button play-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          Play
        </motion.button>

        {/* Instructions Button */}
        <motion.button
          className="menu-button instructions-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowInstructions(true)}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          Instructions
        </motion.button>

        {/* Settings Button */}
        <motion.button
          className="menu-button settings-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowSettings(true)}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          Settings
        </motion.button>
      </motion.div>

      {/* Instructions Modal */}
      {showInstructions && (
        <div className="modal">
          <h2>Game Instructions</h2>
          <p>Move: Arrow Keys / WASD</p>
          <p>Jump: Spacebar</p>
          <p>Avoid obstacles and reach the end!</p>
          <button onClick={() => setShowInstructions(false)}>Got it!</button>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="modal">
          <h2>Settings</h2>
          <button onClick={() => setShowSettings(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default StartScreen;
