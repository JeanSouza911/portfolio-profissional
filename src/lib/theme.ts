export const themeStorageKey = "portfolio-theme";

export type Theme = "light" | "dark";

export function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const stored = localStorage.getItem(themeStorageKey);
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}
