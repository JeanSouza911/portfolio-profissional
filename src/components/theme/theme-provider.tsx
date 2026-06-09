"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
} from "react";
import {
  applyTheme,
  getPreferredTheme,
  type Theme,
  themeStorageKey,
} from "@/lib/theme";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function emitChange() {
  listeners.forEach((listener) => listener());
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function getClientThemeSnapshot(): Theme {
  return getPreferredTheme();
}

function getServerMountedSnapshot(): boolean {
  return false;
}

function getClientMountedSnapshot(): boolean {
  return true;
}

interface ThemeContextValue {
  theme: Theme;
  mounted: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribe,
    getClientThemeSnapshot,
    getServerThemeSnapshot
  );

  const mounted = useSyncExternalStore(
    subscribe,
    getClientMountedSnapshot,
    getServerMountedSnapshot
  );

  const toggleTheme = useCallback(() => {
    const next: Theme = getPreferredTheme() === "dark" ? "light" : "dark";
    localStorage.setItem(themeStorageKey, next);
    applyTheme(next);
    emitChange();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, mounted, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
