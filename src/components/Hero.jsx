import { Fragment, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { PORTFOLIO_DATA as d } from "../data.js";
import { HERO, LAYERS } from "../content.js";
import Count from "./Count.jsx";
import { ArrowRight, ArrowUpRight } from "./Icons.jsx";

// Decorative only: rings and a flowing path, no data.
function Art() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 600 600">
        <defs><linearGradient id="hg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="var(--a)" /><stop offset="1" stopColor="var(--b)" /></linearGradient></defs>
        <circle className="ring" cx="300" cy="300" r="120" />
        <circle className="ring dash" cx="300" cy="300" r="190" />
        <circle className="ring" cx="300" cy="300" r="260" />
        <path className="path" d="M40 470 C 160 470, 190 330, 300 330 S 440 220, 560 170" />
        <circle className="dot" cx="300" cy="330" r="6" />
        <circle className="dot" cx="560" cy="170" r="5" />
        <circle className="dot" cx="40" cy="470" r="5" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const root = useRef(null);
  const certCount = d.certifications.filter((c) => c.issuer === "HubSpot Academy" || c.issuer === "Google").length;
  const stats = [
    { value: "10+", label: "years in technology" },
    { value: String(d.projects.length), label: "live client sites" },
    { value: String(certCount), label: "marketing and CRM certificates" },
  ];

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);
      gsap.timeline({ defaults: { ease: "expo.out" } })
        .from(q(".eyebrow"), { y: 18, opacity: 0, duration: 1 }, 0.1)
        .from(q("h1 .w > span"), { yPercent: 115, duration: 1.3, stagger: 0.07 }, 0.15)
        .from(q(".lede, .hero-cta, .hero-stats"), { y: 26, opacity: 0, duration: 1.1, stagger: 0.1 }, 0.7)
        .from(q(".hero-art"), { opacity: 0, scale: 0.92, duration: 1.8 }, 0.2)
        .from(q(".hs-layer"), { opacity: 0, y: 36, duration: 1.2, stagger: 0.12 }, 0.5);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="top" ref={root}>
      <Art />
      <div className="wrap hero-wrap">
      <div className="hs" aria-hidden="true">
        {LAYERS.map((l, i) => (
          <div className="hs-layer" key={l.name} style={{ "--i": i }}>
            <span className="hs-n mono">0{i + 1}</span>
            <strong>{l.name}</strong>
            <em>{l.sub}</em>
            <span className="hs-chips">{l.chips.map((c) => <b key={c}>{c}</b>)}</span>
          </div>
        ))}
      </div>
        <span className="eyebrow">{HERO.eyebrow}</span>
        <h1 aria-label={HERO.title.map((t) => (typeof t === "string" ? t : t.t)).join(" ")}>
          {(() => { let k = -1; return HERO.title.map((tok, i) => {
            const hl = typeof tok !== "string", t = hl ? tok.t : tok;
            if (hl) k += 1;
            return (<Fragment key={i}><span className={"w" + (hl ? " hl" : "")} aria-hidden="true"><span style={hl ? { "--k": k } : undefined}>{t}</span></span>{" "}</Fragment>);
          }); })()}
        </h1>
        <p className="lede">{HERO.lead}</p>
        <div className="hero-cta">
          <a className="btn primary" href="#stack">See how it connects <ArrowRight /></a>
          <a className="btn" href="#contact">Get in touch <ArrowUpRight /></a>
        </div>
        <div className="hero-stats">
          {stats.map((s) => (<div className="hero-stat" key={s.label}><Count value={s.value} /><small>{s.label}</small></div>))}
        </div>
      </div>
    </section>
  );
}
