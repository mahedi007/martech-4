import { MARQUEE } from "../content.js";

export default function Marquee() {
  return (
    <div className="mq" aria-label="Areas of work">
      <div className="mq-track">
        <ul>{MARQUEE.map((t) => <li key={t}>{t}</li>)}</ul>
        <ul aria-hidden="true">{MARQUEE.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
    </div>
  );
}
