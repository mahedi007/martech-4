import { useEffect, useState } from "react";

export default function Toast() {
  const [msg, setMsg] = useState("");
  const [on, setOn] = useState(false);
  useEffect(() => {
    let t;
    const h = (e) => { setMsg(e.detail); setOn(true); clearTimeout(t); t = setTimeout(() => setOn(false), 1800); };
    window.addEventListener("mh:toast", h);
    return () => { window.removeEventListener("mh:toast", h); clearTimeout(t); };
  }, []);
  return <div className={"toast" + (on ? " on" : "")} role="status" aria-live="polite">{msg}</div>;
}
