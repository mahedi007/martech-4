// Small UI illustrations (wireframes). They are drawings, not data: no numbers,
// no results. They only show what each kind of work looks like.
const L = ({ w = 60, a }) => <span className={"mk-l" + (a ? " a" : "")} style={{ width: w + "%" }} />;

export function AdMock() {
  return (
    <div className="mk mk-ad" aria-hidden="true">
      <div className="mk-top"><i className="mk-av" /><span className="mk-col"><L w={46} /><em>Sponsored</em></span></div>
      <div className="mk-img" />
      <div className="mk-foot"><span className="mk-col"><L w={78} /><L w={52} /></span><b className="mk-cta">Learn more</b></div>
    </div>
  );
}

export function EmailMock() {
  return (
    <div className="mk mk-mail" aria-hidden="true">
      <div className="mk-top"><i className="mk-av sq" /><L w={34} /></div>
      <div className="mk-img short" />
      <L w={90} /><L w={74} /><L w={82} />
      <b className="mk-cta solo">Read more</b>
    </div>
  );
}

export function SiteMock() {
  return (
    <div className="mk mk-site" aria-hidden="true">
      <div className="mk-bar"><i /><i /><i /><span /></div>
      <div className="mk-nav"><L w={16} /><L w={10} /><L w={10} /><L w={10} /></div>
      <div className="mk-hero"><span className="mk-col"><L w={70} a /><L w={54} a /><L w={62} /></span><b className="mk-cta">Get started</b></div>
      <div className="mk-cards"><i /><i /><i /></div>
    </div>
  );
}

export function SerpMock() {
  return (
    <div className="mk mk-serp" aria-hidden="true">
      <div className="mk-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg><L w={52} /></div>
      {[0, 1, 2].map((i) => (<div className="mk-res" key={i}><L w={30} /><L w={i === 0 ? 76 : 64} a /><L w={92} /></div>))}
    </div>
  );
}


export function CodeMock() {
  const row = (n, w, c) => <span className="mk-code-l" key={n} style={{ "--w": w + "%", "--c": c }} />;
  return (
    <div className="mk mk-codew" aria-hidden="true">
      <div className="mk-bar"><i /><i /><i /><span /></div>
      <div className="mk-code">
        {row(1, 46, "a")}{row(2, 72, "b")}{row(3, 58, "a")}{row(4, 34, "c")}{row(5, 66, "b")}{row(6, 52, "a")}{row(7, 28, "c")}
      </div>
    </div>
  );
}

export function ChatMock() {
  return (
    <div className="mk mk-chat" aria-hidden="true">
      <span className="mk-bub me"><L w={70} /><L w={44} /></span>
      <span className="mk-bub ai"><L w={90} a /><L w={76} /><L w={58} /></span>
    </div>
  );
}
