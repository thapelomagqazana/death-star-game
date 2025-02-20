/**
 * @file Landing.tsx
 * @description The main entry screen for the game. Displays a welcome message and a button to start the game.
 */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/landing.css";

/**
 * @function Landing
 * @description Displays the landing page with a title and a start button.
 * @returns {JSX.Element} React component representing the landing page.
 */
const Landing : React.FC = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-full h-full bg-gradient-to-b from-blue-900 to-black opacity-50"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* Neon Glow Title */}
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 neon-glow"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Death Star Chapter
      </motion.h1>

      {/* Animated Buttons */}
      <div className="mt-12 flex flex-col gap-4">
        <Button text="Start Game" link="/game" color="blue" />
        <Button text="Settings" link="/settings" color="green" />
        <Button text="Exit" link="/exit" color="red" />
      </div>
    </div>
  );
};

/**
 * @function Button
 * @description Reusable animated button with hover and click effects.
 * @param {string} text - Button text.
 * @param {string} link - Navigation link.
 * @param {string} color - Button color theme.
 */
const Button = ({
  text,
  link,
  color,
}: {
  text: string;
  link: string;
  color: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Link to={link}>
        <button
          className={`px-6 py-3 text-lg font-bold rounded-lg shadow-lg transition-all
            ${
              color === "blue"
                ? "bg-blue-500 hover:bg-blue-700"
                : color === "green"
                ? "bg-green-500 hover:bg-green-700"
                : "bg-red-500 hover:bg-red-700"
            }`}
        >
          {text}
        </button>
      </Link>
    </motion.div>
  );
};

export default Landing;
