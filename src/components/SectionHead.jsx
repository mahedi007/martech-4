import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SECTION_COPY } from "../content.js";

gsap.registerPlugin(ScrollTrigger);

// Eyebrow + a heading whose words slide up once as it scrolls into view.
export default function SectionHead({ id, lede }) {
  const ref = useRef(null);
  const { eyebrow, title } = SECTION_COPY[id];
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const ctx = gsap.context(() => {
      gsap.from(ref.current.querySelectorAll(".rw > span"), { yPercent: 112, duration: 1.1, stagger: 0.06, ease: "expo.out", scrollTrigger: { trigger: ref.current, start: "top 88%", once: true } });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <header className="sec-head" ref={ref}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h2" aria-label={title}>
        {title.split(" ").map((w, i) => (<span key={i}><span className="rw" aria-hidden="true"><span>{w}</span></span>{" "}</span>))}
      </h2>
      {lede && <p className="lede">{lede}</p>}
    </header>
  );
}
