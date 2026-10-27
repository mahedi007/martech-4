import { PORTFOLIO_DATA as d } from "../data.js";
import { BENTO, MATRIX } from "../content.js";
import Count from "./Count.jsx";
import { AdMock, ChatMock, CodeMock, EmailMock, SerpMock, SiteMock } from "./Mocks.jsx";
import SectionHead from "./SectionHead.jsx";
import System from "./System.jsx";

const ICONS = {
  web: <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m10 10-2 2 2 2M14 10l2 2-2 2" /></svg>,
  crm: <svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="12" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M8.2 7.2 15.8 10.8M8.2 16.8l7.6-3.6" /></svg>,
  api: <svg viewBox="0 0 24 24"><path d="M8 6 3 12l5 6M16 6l5 6-5 6M14 4l-4 16" /></svg>,
  channels: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>,
  seo: <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>,
  ai: <svg viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" /></svg>,
  delivery: <svg viewBox="0 0 24 24"><path d="M12 3l8 3.5v5.2c0 5-3.3 8.7-8 10.3-4.7-1.6-8-5.3-8-10.3V6.5z" /><path d="m9 12 2 2 4-4" /></svg>,
};

function Chips({ items }) { return <div className="bn-chips">{items.map((t) => <span key={t}>{t}</span>)}</div>; }

function Matrix() {
  return (
    <div className="mx">
      <h3 className="flw-title">{MATRIX.title}</h3>
      <p className="flw-lede">{MATRIX.lede}</p>
      <div className="mx-rows">
        {MATRIX.rows.map((r) => (
          <div className="mx-row" key={r.layer}>
            <div className="mx-l"><strong>{r.layer}</strong><span className={"mx-lv mono lv-" + r.level.split(" ")[0].toLowerCase()}>{r.level}</span></div>
            <div className="bn-chips">{r.items.map((t) => <span key={t}>{t}</span>)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Bento() {
  const c = BENTO.cards;
  const certCount = d.certifications.filter((x) => x.issuer === "HubSpot Academy" || x.issuer === "Google").length;
  const stats = [
    { value: "10+", label: "years in technology" },
    { value: String(d.projects.length), label: "live client sites" },
    { value: String(certCount), label: "marketing and CRM certificates" },
  ];
  const card = (k, cls, visual) => (
    <article className={"bn-card " + cls} key={k}>
      <div className="bn-in">
        <span className="bn-ico" aria-hidden="true">{ICONS[k]}</span>
        <h3>{c[k].title}</h3>
        <p>{c[k].text}</p>
        {visual}
        <Chips items={c[k].chips} />
        <span className="bn-proof mono">{c[k].proof}</span>
      </div>
    </article>
  );

  return (
    <section className="sec" id="stack">
      <div className="wrap">
        <SectionHead id="stack" lede={BENTO.lede} />
        <System />
        <div className="bn">
          {card("web", "bn-web", <div className="bn-stage" aria-hidden="true"><div className="a"><SiteMock /></div><div className="b"><CodeMock /></div></div>)}
          {card("crm", "bn-crm")}
          {card("api", "bn-api")}
          {card("channels", "bn-channels", <div className="bn-vis duo" aria-hidden="true"><AdMock /><EmailMock /></div>)}
          {card("seo", "bn-seo", <div className="bn-vis" aria-hidden="true"><SerpMock /></div>)}
          {card("ai", "bn-ai", <div className="bn-vis" aria-hidden="true"><ChatMock /></div>)}
          <article className="bn-card bn-delivery">
            <div className="bn-in">
              <span className="bn-ico" aria-hidden="true">{ICONS.delivery}</span>
              <h3>{c.delivery.title}</h3>
              <p>{c.delivery.text}</p>
              <div className="bn-stats">
                {stats.map((s) => (<div className="bn-stat" key={s.label}><Count value={s.value} /><small>{s.label}</small></div>))}
              </div>
              <Chips items={c.delivery.chips} />
              <span className="bn-proof mono">{c.delivery.proof}</span>
            </div>
          </article>
        </div>
        <Matrix />
      </div>
    </section>
  );
}
