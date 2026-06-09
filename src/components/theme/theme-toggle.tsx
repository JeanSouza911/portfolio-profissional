"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, mounted, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={!mounted}
      aria-label={
        mounted
          ? isDark
            ? "Ativar modo claro"
            : "Ativar modo escuro"
          : "Alternar tema"
      }
      aria-pressed={mounted ? isDark : undefined}
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        "shrink-0 text-muted-foreground hover:text-foreground"
      )}
    >
      {mounted && isDark ? (
        <Sun aria-hidden className="size-4" />
      ) : (
        <Moon aria-hidden className="size-4" />
      )}
    </button>
  );
}
