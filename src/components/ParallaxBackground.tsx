/**
 * ParallaxBackground.tsx
 * Handles the scrolling background animation for the start screen.
 */
import React from "react";
import "../styles/ParallaxBackground.css"; // Import styles

const ParallaxBackground: React.FC = () => {
  return (
    <div className="parallax-bg">
      <div className="stars"></div>
      <div className="asteroids"></div>
    </div>
  );
};

export default ParallaxBackground;
