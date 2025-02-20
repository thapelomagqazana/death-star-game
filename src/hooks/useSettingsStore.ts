/**
 * @file useSettingsStore.ts
 * @description Global state management for settings (volume, difficulty).
 */

import { create } from "zustand";

interface SettingsState {
  volume: boolean; // true = on, false = off
  difficulty: "Easy" | "Normal" | "Hard";
  toggleVolume: () => void;
  setDifficulty: (level: "Easy" | "Normal" | "Hard") => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  volume: true, // Default: Sound ON
  difficulty: "Normal", // Default: Normal mode
  toggleVolume: () => set((state) => ({ volume: !state.volume })),
  setDifficulty: (level) => set({ difficulty: level }),
}));
