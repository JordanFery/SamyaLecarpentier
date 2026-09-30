"use client";

import { useSyncExternalStore } from "react";
import { themeStorageKey } from "@/lib/theme";

function readStoredTheme() {
  try {
    return localStorage.getItem(themeStorageKey);
  } catch {
    return null;
  }
}

function applyTheme(theme) {
  const update = () => {
    document.documentElement.dataset.theme = theme;
  };
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Cross-fade the whole page where supported; otherwise switch instantly.
  if (document.startViewTransition && !reduceMotion) document.startViewTransition(update);
  else update();
}

/**
 * The theme lives on <html data-theme> (set before first paint by the head
 * script), so the toggle subscribes to that attribute instead of keeping state.
 * It also follows the system setting until the visitor makes a choice.
 */
function subscribe(onChange) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = (event) => {
    if (!readStoredTheme()) applyTheme(event.matches ? "dark" : "light");
  };
  media.addEventListener("change", onSystemChange);

  return () => {
    observer.disconnect();
    media.removeEventListener("change", onSystemChange);
  };
}

const getSnapshot = () => document.documentElement.dataset.theme === "dark";
// Unknown on the server: aria-pressed is filled in after hydration.
const getServerSnapshot = () => null;

function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  try {
    localStorage.setItem(themeStorageKey, next);
  } catch {
    // Storage unavailable (private mode): the choice lasts for this page only.
  }
  applyTheme(next);
}

/** "Dark mode" toggle button, pressed when the dark theme is on. */
export default function ThemeToggle({ label, className = "" }) {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark ?? undefined}
      aria-label={label}
      title={label}
      className={`inline-flex min-h-11 min-w-11 items-center justify-center text-ink ${className}`}
    >
      {/* Moon in light mode, sun in dark mode — switched in CSS from data-theme. */}
      <svg className="theme-toggle-moon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <svg className="theme-toggle-sun" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
