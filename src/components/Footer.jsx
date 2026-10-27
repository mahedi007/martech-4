import { PORTFOLIO_DATA as d } from "../data.js";
import { NAV } from "../content.js";

export default function Footer() {
  const top = () => { if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.4 }); else window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <footer>
      <div className="wrap ft">
        <span>&copy; {new Date().getFullYear()} {d.meta.name}</span>
        <nav className="ft-links mono" aria-label="Footer">
          {NAV.map((n) => <a key={n.id} href={"#" + n.id}>{n.label}</a>)}
        </nav>
        <button type="button" className="mono" onClick={top}>Back to top</button>
      </div>
    </footer>
  );
}
