/** A stored choice wins; otherwise the theme follows the operating system. */
export const themeStorageKey = "theme";

export const themeColors = {
  light: "#f3f0e8",
  dark: "#211c18",
};

/**
 * Inlined in <head> so data-theme is set before first paint (no light flash in
 * dark mode). Kept dependency-free: it runs before any bundle loads.
 */
export const themeScript = `(function () {
  var theme;
  try { theme = localStorage.getItem("${themeStorageKey}"); } catch (e) {}
  if (theme !== "light" && theme !== "dark") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.dataset.theme = theme;
})();`;
