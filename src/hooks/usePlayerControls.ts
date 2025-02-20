/**
 * @file usePlayerControls.ts
 * @description Handles player movement, touch input, and physics.
 */

import { useEffect, useState } from "react";

interface PlayerState {
  position: { x: number; y: number };
  velocity: { x: number; y: number };
  direction: number;
  isJumping: boolean;
  isAttacking: boolean;
}

/**
 * @function usePlayerControls
 * @description Custom hook for managing player movement and actions.
 * @returns {PlayerState} Player state and movement data.
 */
const usePlayerControls = (): PlayerState => {
    const [position, setPosition] = useState({ x: 100, y: 200 });
    const [velocity, setVelocity] = useState({ x: 0, y: 0 });
    const [direction, setDirection] = useState(1);
    const [isJumping, setIsJumping] = useState(false);
    const [isAttacking, setIsAttacking] = useState(false);
  
    // Handles keyboard movement
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
          case "ArrowRight":
          case "d":
            setVelocity((v) => ({ ...v, x: 5 }));
            setDirection(1);
            break;
          case "ArrowLeft":
          case "a":
            setVelocity((v) => ({ ...v, x: -5 }));
            setDirection(-1);
            break;
          case "ArrowUp":
          case "w":
          case " ":
            if (!isJumping) {
              setVelocity((v) => ({ ...v, y: -10 }));
              setIsJumping(true);
            }
            break;
          case "Enter":
          case "f":
            setIsAttacking(true);
            setTimeout(() => setIsAttacking(false), 300); // Attack animation duration
            break;
          default:
            break;
        }
      };
  
      const handleKeyUp = (event: KeyboardEvent) => {
        if (["ArrowRight", "d", "ArrowLeft", "a"].includes(event.key)) {
          setVelocity((v) => ({ ...v, x: 0 }));
        }
      };
  
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
  
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }, [isJumping]);
  
    // Apply physics for jumping and gravity
    useEffect(() => {
      const gameLoop = setInterval(() => {
        setPosition((pos) => {
          const newY = pos.y + velocity.y;
          return {
            x: pos.x + velocity.x,
            y: newY >= 300 ? 300 : newY, // Prevent falling below ground
          };
        });
  
        // Simulate gravity
        if (position.y < 300) {
          setVelocity((v) => ({ ...v, y: v.y + 1 }));
        } else {
          setIsJumping(false);
        }
      }, 50); // Adjust for smoother animation
  
      return () => clearInterval(gameLoop);
    }, [velocity, position.y]);
  
    return { position, velocity, direction, isJumping, isAttacking }; 
  };
  

export default usePlayerControls;
