import { useSmoothScroll } from "./hooks/useSmoothScroll.js";
import { useTheme } from "./hooks/useTheme.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Bento from "./components/Bento.jsx";
import Roles from "./components/Roles.jsx";
import Work from "./components/Work.jsx";
import Certs from "./components/Certs.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Toast from "./components/Toast.jsx";

export default function App() {
  useSmoothScroll();
  const { theme, toggle } = useTheme();
  return (
    <>
      <a className="skip" href="#stack">Skip to content</a>
      <div className="bg-aurora" aria-hidden="true" />
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Marquee />
        <Bento />
        <Roles />
        <Work />
        <Certs />
        <Contact />
      </main>
      <Footer />
      <Toast />
    </>
  );
}
