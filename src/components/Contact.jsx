import { PORTFOLIO_DATA as d } from "../data.js";
import { copyText, toast } from "../lib.js";
import { PORTFOLIO_URL } from "../content.js";
import SectionHead from "./SectionHead.jsx";
import { ArrowUpRight, Download, Mail } from "./Icons.jsx";

export default function Contact() {
  const { meta, contact } = d;
  const copy = () => copyText(meta.email).then(() => toast("Email copied")).catch(() => toast("Copy failed"));
  return (
    <section className="sec ct" id="contact">
      <div className="wrap ct-grid">
        <figure className="ct-photo" style={{ margin: 0 }}>
          <img src="/assets/me-mahedi-hasan.webp" width="1174" height="1340" alt="Portrait of S.M. Mahedi Hasan" loading="lazy" decoding="async" />
          <figcaption><strong>{meta.name}</strong><span className="mono">{meta.location}</span></figcaption>
        </figure>
        <div>
          <SectionHead id="contact" />
          <p className="lede">Open to MarTech, digital marketing and website projects, freelance or full-time. Email is the fastest way to reach me.</p>
          <span className="ct-status mono">{contact.status}</span>
          <button type="button" className="ct-mail" onClick={copy} aria-label={`Copy email address ${meta.email}`}>{meta.email}</button>
          <div className="ct-cta">
            <a className="btn primary" href={"mailto:" + meta.email}>Send email <Mail /></a>
            <a className="btn" href={meta.resumeFile} download>Résumé <Download /></a>
          </div>
          <div className="ct-links">
            <a href={meta.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={"tel:" + meta.phone.replace(/\s+/g, "")}>{meta.phone}</a>
            <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">Developer portfolio <ArrowUpRight style={{ width: 13, height: 13, display: "inline", verticalAlign: "-1px" }} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
