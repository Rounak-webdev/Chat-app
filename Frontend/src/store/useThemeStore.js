import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",

  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    // console.log("theme set to " + theme);
    set({ theme });
  },
}));
