/**
 * @file useSettingsStore.ts
 * @description Global state management for settings (volume, difficulty).
 */

import { create } from "zustand";
const soundEffect = new Audio("/sounds/background.mp3"); 

interface SettingsState {
  volume: boolean; // true = on, false = off
  difficulty: "Easy" | "Normal" | "Hard";
  toggleVolume: () => void;
  setDifficulty: (level: "Easy" | "Normal" | "Hard") => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  volume: true, // Default: Sound ON
  difficulty: "Normal", // Default: Normal mode
  toggleVolume: () =>
    set((state) => {
      if (state.volume) {
        soundEffect.pause();
      } else {
        soundEffect.loop = true; // Enable looping
        soundEffect.volume = 0.5; // Set default volume
        soundEffect.play(); // Play sound
      }
      return { volume: !state.volume };
    }),
  setDifficulty: (level) => set({ difficulty: level }),
}));
