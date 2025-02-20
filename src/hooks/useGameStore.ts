/**
 * @file useGameStore.ts
 * @description Global state management for game variables (score, health, level).
 */

import { create } from "zustand";

interface GameState {
  score: number;
  health: number;
  level: number;
  increaseScore: () => void;
  decreaseHealth: () => void;
  nextLevel: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  score: 0,
  health: 100,
  level: 1,
  increaseScore: () => set((state) => ({ score: state.score + 10 })),
  decreaseHealth: () =>
    set((state) => ({ health: Math.max(state.health - 10, 0) })),
  nextLevel: () => set((state) => ({ level: state.level + 1 })),
}));
