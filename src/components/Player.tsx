/**
 * @file Player.tsx
 * @description Player character with movement, touch input, and animations.
 */
import { motion } from "framer-motion";
import usePlayerControls from "../hooks/usePlayerControls";
import idleSprite from "../assets/virtual_guy/idle.png";
import moveSprite from "../assets/virtual_guy/run.png";
import jumpSprite from "../assets/virtual_guy/jump.png";
import attackSprite from "../assets/virtual_guy/runShoot.png";

/**
 * @function Player
 * @description Renders the player character and handles movement and animations.
 * @returns {JSX.Element} Player character component.
 */
const Player: React.FC = () => {
  const { position, velocity, direction, isJumping, isAttacking } = usePlayerControls();
  
  // Determine which sprite to show
  const getSprite = () => {
    if (isAttacking) return attackSprite;
    if (isJumping) return jumpSprite;
    if (velocity.x !== 0) return moveSprite;
    return idleSprite;
  };

  return (
    <motion.img
      src={getSprite()}
      className="absolute w-24 h-24"
      style={{ left: position.x, top: position.y, transform: `scaleX(${direction})` }}
      animate={{ y: [position.y, position.y - (isJumping ? 20 : 0), position.y] }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
  );
};

export default Player;
