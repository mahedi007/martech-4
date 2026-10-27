export function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
  return new Promise((resolve, reject) => {
    const ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); resolve(); } catch (e) { reject(e); } finally { document.body.removeChild(ta); }
  });
}
export const toast = (msg) => window.dispatchEvent(new CustomEvent("mh:toast", { detail: msg }));

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const fmtMonth = (ym) => { if (!ym) return ""; const [y, m] = ym.split("-").map(Number); return MONTHS[m - 1] + " " + y; };

// "Expires Mar 2027", or "Expired May 2025" once the date has passed. Worked
// out when the page loads, so it never goes stale.
export function certStatus(exp) {
  if (!exp) return null;
  const [y, m] = exp.split("-").map(Number), now = new Date();
  const lapsed = now.getFullYear() * 12 + now.getMonth() + 1 > y * 12 + m;
  return { lapsed, text: (lapsed ? "Expired " : "Expires ") + fmtMonth(exp) };
}
