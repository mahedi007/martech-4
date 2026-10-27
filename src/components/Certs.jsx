import { PORTFOLIO_DATA as d } from "../data.js";
import { CERT_GROUPS, PORTFOLIO_URL } from "../content.js";
import { certStatus, fmtMonth } from "../lib.js";
import SectionHead from "./SectionHead.jsx";
import { ArrowUpRight } from "./Icons.jsx";

function Row({ c }) {
  const st = certStatus(c.expires);
  const inner = (
    <>
      <span>
        <span className="cert-t">{c.title}</span>
        <span className="cert-m mono">{c.issuer} · {fmtMonth(c.issued) || "Date not listed"}{st && <> · <span className={st.lapsed ? "lapsed" : ""}>{st.text}</span></>}</span>
      </span>
      {c.url && <ArrowUpRight />}
    </>
  );
  return c.url
    ? <a className="cert-row" href={c.url} target="_blank" rel="noopener noreferrer" title={c.id ? "Credential ID " + c.id : undefined} aria-label={`${c.title}, ${c.issuer}. Opens the credential in a new tab`}>{inner}</a>
    : <div className="cert-row">{inner}</div>;
}

export default function Certs() {
  const byTitle = new Map(d.certifications.map((c) => [c.title, c]));
  const groups = CERT_GROUPS.map((g) => ({ ...g, items: g.titles.map((t) => byTitle.get(t)).filter(Boolean) })).filter((g) => g.items.length);
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  return (
    <section className="sec" id="certs">
      <div className="wrap">
        <SectionHead id="certs" lede={`${total} certificates that back the work above, grouped by what they cover. Click one to verify it with the issuer.`} />
        <div className="cert-grid">
          {groups.map((g) => (
            <div className="cert-g" key={g.label}>
              <header><strong>{g.label}</strong></header>
              {g.items.map((c) => <Row c={c} key={c.title} />)}
            </div>
          ))}
        </div>
        <p className="cert-note mono">Expired ones are shown as expired. All {d.certifications.length} certificates are on my <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">developer portfolio</a>.</p>
        <div className="cert-bg">
          {d.education.map((e) => (<div key={e.degree}><span className="mono">Education</span><strong>{e.degree}</strong><em>{e.school}</em></div>))}
          <div><span className="mono">Languages</span><strong>{d.languages.map((l) => l.name).join(" and ")}</strong><em>{d.languages.map((l) => `${l.name}: ${l.level}`).join(". ")}</em></div>
        </div>
      </div>
    </section>
  );
}
