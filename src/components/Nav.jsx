import { useEffect, useState } from "react";
import { NAV, PORTFOLIO_URL } from "../content.js";
import { Burger, Close, Moon, Sun } from "./Icons.jsx";
import { ArrowUpRight } from "./Icons.jsx";

export default function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); }, { rootMargin: "-45% 0px -50% 0px" });
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (window.__lenis) { open ? window.__lenis.stop() : window.__lenis.start(); }
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); document.documentElement.style.overflow = ""; };
  }, [open]);

  const ThemeIcon = theme === "light" ? Moon : Sun;
  const themeLabel = theme === "light" ? "Switch to dark theme" : "Switch to light theme";

  return (
    <>
      <header className={"nav" + (scrolled ? " scrolled" : "")}>
        <div className="wrap nav-in">
          <a className="nav-logo" href="#top" aria-label="Mahedi, back to top">Mahedi <i>MarTech</i></a>
          <nav aria-label="Primary" className="nav-links">
            {NAV.map((n) => (<a key={n.id} href={"#" + n.id} className={active === n.id ? "on" : ""}>{n.label}</a>))}
          </nav>
          <div className="nav-tools">
            <a className="btn primary nav-cta" href="#contact">Let&rsquo;s talk</a>
            <button type="button" className="icon-btn" onClick={onToggleTheme} aria-label={themeLabel} title={themeLabel}><ThemeIcon /></button>
            <button type="button" className="icon-btn nav-burger" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}><Burger /></button>
          </div>
        </div>
      </header>
      <div className="menu" aria-hidden={!open}>
        <button type="button" className="icon-btn menu-x" onClick={() => setOpen(false)} aria-label="Close menu" tabIndex={open ? 0 : -1}><Close /></button>
        {NAV.map((n, i) => (<a key={n.id} href={"#" + n.id} style={{ "--i": i }} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{n.label}</a>))}
        <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer" style={{ "--i": NAV.length }} tabIndex={open ? 0 : -1}>Developer portfolio <ArrowUpRight style={{ width: 22, height: 22, display: "inline", verticalAlign: "-2px" }} /></a>
      </div>
    </>
  );
}
