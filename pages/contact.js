import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Contact from "../views/Contact";
import Header from "../components/Header";
import SideElements from "../components/SideElements";
import { contact, header } from "../utils";
import sideElements from "../utils/sideElements";
import Cursor from "../components/Cursor";
import WaterMark from "../components/WaterMark";

export default function ContactPage() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--themeColor1', '#222831');
    root.style.setProperty('--themeColor2', '#393E46');
    root.style.setProperty('--themeColor3', '#00ADB5');
    root.style.setProperty('--themeColor4', '#EEEEEE');
  }, []);

  return (
    <>
      <Cursor />
      <ParallaxProvider>
        <Header data={header} />
        <SideElements data={sideElements} />
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
          <Contact data={contact} />
        </div>
        <WaterMark />
      </ParallaxProvider>
    </>
  )
}
