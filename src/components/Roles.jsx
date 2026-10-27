import { PORTFOLIO_DATA as d } from "../data.js";
import { ROLE_CONTEXT, ROLE_POINTS } from "../content.js";
import SectionHead from "./SectionHead.jsx";
import { Check } from "./Icons.jsx";

const plain = (p) => (p || "").replace(/\s\u2014\s/g, " to ");

// Latest role first, then the rest in the order they are listed. Detail is only
// shown where Mahedi has given it; the other roles show their facts and nothing more.
export default function Roles() {
  const [latest, ...rest] = d.experience;
  const mid = rest.slice(0, 3), earlier = rest.slice(3);
  const pts = ROLE_POINTS[latest.role];
  return (
    <section className="sec" id="roles">
      <div className="wrap">
        <SectionHead id="roles" lede="Web delivery, marketing and freelance work. The latest role comes first." />

        <article className="rl-feat">
          <div>
            <span className="rl-tag">{latest.current ? "Latest role · current" : "Latest role"}</span>
            <h3>{latest.role}<span>{latest.company}</span></h3>
            <p className="rl-when mono">{plain(latest.period)}{latest.location ? " · " + latest.location : ""}</p>
            {ROLE_CONTEXT[latest.company] && <p className="rl-ctx">{ROLE_CONTEXT[latest.company]}</p>}
          </div>
          {pts && <ul className="rl-pts">{pts.map((p) => (<li key={p}><Check />{p}</li>))}</ul>}
        </article>

        <div className="rl-grid">
          {mid.map((j) => {
            const points = ROLE_POINTS[j.role];
            const marketing = j.tag === "[MARKETING]";
            return (
              <article className={"rl-card" + (marketing ? " is-mkt" : "")} key={j.role + j.company}>
                <span className="mono rl-co">{j.company}{marketing && <b>Marketing</b>}</span>
                <h3>{j.role}</h3>
                {points && <ul className="rl-mini">{points.map((p) => (<li key={p}>{p}</li>))}</ul>}
                {!points && ROLE_CONTEXT[j.company] && <p>{ROLE_CONTEXT[j.company]}</p>}
                {(j.period || j.location) && <span className="rl-when mono">{plain(j.period)}{j.period && j.location ? " · " : ""}{j.location}</span>}
              </article>
            );
          })}
        </div>

        {earlier.length > 0 && (
          <div className="rl-early">
            <span className="mono rl-early-h">Earlier in my career</span>
            {earlier.map((j) => (
              <div className="rl-row" key={j.role + j.company + j.period}>
                <span className="mono">{plain(j.period)}</span>
                <strong>{j.role}</strong>
                <span>{j.company}{j.location ? ", " + j.location : ""}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
