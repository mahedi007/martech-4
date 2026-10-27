import { useCallback, useEffect, useState } from "react";

// index.html applies the stored theme before first paint; this keeps React in
// sync and exposes a toggle. Dark is the default on a first visit.
export function useTheme() {
  const [theme, setTheme] = useState(() => (document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"));
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#F6F5F1" : "#08080D");
  }, [theme]);
  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === "light" ? "dark" : "light";
      try { localStorage.setItem("mahedi-mt-theme", next); } catch (e) { /* storage unavailable */ }
      return next;
    });
  }, []);
  return { theme, toggle };
}
