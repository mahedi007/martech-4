import { PORTFOLIO_DATA as d } from "../data.js";
import { PORTFOLIO_URL, SHOTS, WORK_PICKS } from "../content.js";
import SectionHead from "./SectionHead.jsx";
import { ArrowUpRight } from "./Icons.jsx";

const host = (url) => { try { return new URL(url).hostname.replace(/^www\./, ""); } catch (e) { return url; } };

export default function Work() {
  const picks = WORK_PICKS.map((n) => d.projects.find((p) => p.name === n)).filter(Boolean);
  return (
    <section className="sec" id="work">
      <div className="wrap">
        <SectionHead id="work" lede="Marketing sites and platforms for B2B and service companies. Each one is live: open it to see the rest." />
        <div className="wk-grid">
          {picks.map((p) => (
            <a className="wk-card" key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.name}, open live site in a new tab`}>
              <div className="wk-shot">
                <div className="wk-bar"><i /><i /><i /><span>{host(p.url)}</span></div>
                {SHOTS[p.name] && <img src={`/work/${SHOTS[p.name]}.webp`} width="1200" height="641" loading="lazy" decoding="async" alt={`Homepage of ${p.name}`} />}
              </div>
              <div className="wk-body">
                <span className="mono">{p.tags[0]}</span>
                <h3>{p.name}</h3>
                <p>{p.description.replace(/\s\u2014\s/g, ": ")}</p>
                <span className="wk-go">Visit live site <ArrowUpRight /></span>
              </div>
            </a>
          ))}
        </div>
        <div className="wk-more">
          <span>{d.projects.length} live sites in total, with the full build details.</span>
          <a className="btn" href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">Developer portfolio <ArrowUpRight /></a>
        </div>
      </div>
    </section>
  );
}
