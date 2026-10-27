import { useEffect, useRef } from "react";

// "10+" counts up once when scrolled into view. The real value is in the DOM
// from the start, so nothing is lost if the observer never fires.
export default function Count({ value }) {
  const ref = useRef(null);
  const m = String(value).match(/^(\D*)(\d[\d,]*)(.*)$/);
  const num = m ? m[2] : String(value), suffix = m ? m[3] : "";
  useEffect(() => {
    if (!m || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return undefined;
    const el = ref.current, target = parseInt(num.replace(/,/g, ""), 10);
    let raf = 0;
    const io = new IntersectionObserver((e) => {
      if (!e[0].isIntersecting) return;
      io.disconnect();
      let t0 = null;
      const step = (ts) => {
        if (!t0) t0 = ts;
        const k = Math.min(1, (ts - t0) / 1400), ease = 1 - Math.pow(1 - k, 4);
        el.textContent = String(Math.round(target * ease));
        if (k < 1) raf = requestAnimationFrame(step); else el.textContent = num;
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.7 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value]);
  return <strong><span ref={ref}>{num}</span>{suffix && <i>{suffix}</i>}</strong>;
}
