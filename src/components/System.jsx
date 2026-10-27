import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FLOW } from "../content.js";

gsap.registerPlugin(ScrollTrigger);

// Nodes: [step, x, y, width, height, title, sub, isEnd]
const H = [
  [0, 10, 40, 150, 60, "Channels", "Paid, social, SEO"],
  [0, 10, 140, 150, 60, "Email", "Newsletters"],
  [1, 250, 40, 170, 60, "Website", "HubSpot, WordPress"],
  [2, 520, 40, 150, 60, "CRM", "HubSpot"],
  [3, 640, 140, 170, 60, "Integrations", "APIs, data flow"],
  [4, 840, 40, 190, 60, "Insight", "Analytics, reporting", true],
];
const V = [
  [0, 20, 10, 150, 56, "Channels", "Paid, social, SEO"],
  [0, 190, 10, 150, 56, "Email", "Newsletters"],
  [1, 95, 120, 170, 56, "Website", "HubSpot, WordPress"],
  [2, 105, 220, 150, 56, "CRM", "HubSpot"],
  [3, 95, 320, 170, 56, "Integrations", "APIs, data flow"],
  [4, 80, 430, 200, 56, "Insight", "Analytics, reporting", true],
];

function Nodes({ nodes, pad, ty, sy }) {
  return nodes.map(([step, x, y, w, h, title, sub, end]) => (
    <g className={"flw-node" + (end ? " end" : "")} data-step={step} key={title}>
      <rect x={x} y={y} width={w} height={h} rx="14" />
      {!end && <rect className="glow" x={x} y={y} width={w} height={h} rx="14" />}
      <text x={x + pad} y={y + ty}>{title}</text>
      <text className="sub" x={x + pad} y={y + sy}>{sub}</text>
    </g>
  ));
}

// The chain draws itself as it scrolls into view (no pinning, so no dead scroll).
function build(svg, trigger) {
  if (!svg) return;
  const lives = svg.querySelectorAll(".live"), glows = svg.querySelectorAll(".glow"), end = svg.querySelector(".flw-node.end"), pulses = svg.querySelector(".pulses");
  gsap.set(lives, { strokeDashoffset: 1 });
  gsap.set(glows, { opacity: 0 });
  if (pulses) gsap.set(pulses, { opacity: 0 });
  gsap.set(end, { opacity: 0.3 });
  const step = (n) => svg.querySelectorAll(`.flw-node[data-step="${n}"] .glow`);
  gsap.timeline({ scrollTrigger: { trigger, start: "top 78%", end: "bottom 52%", scrub: 0.8 } })
    .to(step(0), { opacity: 1, duration: 0.4 })
    .to(lives[0], { strokeDashoffset: 0, duration: 1.4, ease: "none" })
    .to(lives[1], { strokeDashoffset: 0, duration: 0.9, ease: "none" }, "<0.2")
    .to(step(1), { opacity: 1, duration: 0.4 }, "<0.3")
    .to(step(2), { opacity: 1, duration: 0.4 }, ">-0.2")
    .to(lives[2], { strokeDashoffset: 0, duration: 0.9, ease: "none" })
    .to(step(3), { opacity: 1, duration: 0.4 })
    .to(lives[3], { strokeDashoffset: 0, duration: 0.9, ease: "none" })
    .to(end, { opacity: 1, duration: 0.5 })
    .to(pulses || {}, { opacity: 1, duration: 0.4 });
}

export default function System() {
  const root = useRef(null);
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const mm = gsap.matchMedia();
    const stage = root.current.querySelector(".flw-stage");
    mm.add("(min-width: 861px)", () => build(root.current.querySelector("svg.h"), stage));
    mm.add("(max-width: 860px)", () => build(root.current.querySelector("svg.v"), stage));
    return () => mm.revert();
  }, []);

  return (
    <div className="flw" ref={root}>
      <h3 className="flw-title">{FLOW.title}</h3>
      <p className="flw-lede">{FLOW.lede}</p>
      <div className="flw-stage">
        <svg className="h" viewBox="0 0 1040 220" role="img" aria-labelledby="flwT">
          <title id="flwT">Channels and email feed the website, the website feeds the CRM, integrations move the data, and everything ends in insight from analytics and reporting.</title>
          <path className="wire" d="M160 70 H250 M420 70 H520 M670 70 H840 M160 170 H335 V100 M595 100 V170 H640 M810 170 H935 V100" />
          <path className="live" pathLength="1" d="M160 70 H250 M420 70 H520 M670 70 H840" />
          <path className="live" pathLength="1" d="M160 170 H335 V100" />
          <path className="live" pathLength="1" d="M595 100 V170 H640" />
          <path className="live" pathLength="1" d="M810 170 H935 V100" />
          <g className="pulses">
            <circle className="pulse" r="5"><animateMotion dur="4s" repeatCount="indefinite" path="M160 70 H840" /></circle>
            <circle className="pulse" r="5"><animateMotion dur="4.4s" begin="1.3s" repeatCount="indefinite" path="M160 170 H335 V70 H840" /></circle>
            <circle className="pulse" r="5"><animateMotion dur="4s" begin="2.6s" repeatCount="indefinite" path="M595 70 V170 H935 V70" /></circle>
          </g>
          <Nodes nodes={H} pad={18} ty={28} sy={47} />
        </svg>
        <svg className="v" viewBox="0 0 360 500" role="img" aria-labelledby="flwTv">
          <title id="flwTv">Channels and email feed the website, then the CRM, then integrations, ending in insight.</title>
          <path className="wire" d="M95 66 V93 H180 V120 M265 66 V93 H180 M180 176 V220 M180 276 V320 M180 376 V430" />
          <path className="live" pathLength="1" d="M95 66 V93 H180 V120 M180 176 V220" />
          <path className="live" pathLength="1" d="M265 66 V93 H180" />
          <path className="live" pathLength="1" d="M180 276 V320" />
          <path className="live" pathLength="1" d="M180 376 V430" />
          <g className="pulses">
            <circle className="pulse" r="5"><animateMotion dur="4s" repeatCount="indefinite" path="M95 66 V93 H180 V430" /></circle>
            <circle className="pulse" r="5"><animateMotion dur="4.4s" begin="1.6s" repeatCount="indefinite" path="M265 66 V93 H180 V430" /></circle>
          </g>
          <Nodes nodes={V} pad={16} ty={26} sy={44} />
        </svg>
      </div>
      <div className="flw-cap mono"><span>{FLOW.captionL}</span><span>{FLOW.captionR}</span></div>
    </div>
  );
}
