import { useEffect, useRef, useState } from "react";
import A from "./tejasBharsakeSVGs/A";
import B from "./tejasBharsakeSVGs/B";
import E1 from "./tejasBharsakeSVGs/E1";
import E2 from "./tejasBharsakeSVGs/E2";
import H from "./tejasBharsakeSVGs/H";
import K1 from "./tejasBharsakeSVGs/K1";
import K2 from "./tejasBharsakeSVGs/K2";
import K3 from "./tejasBharsakeSVGs/K3";
import M from "./tejasBharsakeSVGs/M";
import N from "./tejasBharsakeSVGs/N";
import N2 from "./tejasBharsakeSVGs/N2";
import U from "./tejasBharsakeSVGs/U";

const SvgWrapper = ({ SVG, className, ...rest }) => (
  <div
    {...rest}
    className={`ai-tejas-bharsake-parallax ${className}`}
  >
    <SVG />
  </div>
)


export default function TejasBharsake({ }) {
  const ref = useRef()

  const [mount, handleMount] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll()
  }, []);

  const isInViewport = () => {
    const rect = ref?.current?.getBoundingClientRect();
    return (rect?.top < window.innerHeight / 2)
  }

  const handleScroll = () => {
    handleMount(isInViewport())
  }

  return (
    <div ref={ref} className={`ai-tejas-bharsake ${mount ? 'ai-tejas-bharsake-visible' : ''}`}>
      <SvgWrapper
        className="ai_svg_M"
        SVG={M}
      />
      <SvgWrapper
        className="ai_svg_U"
        SVG={U}
      />
      <SvgWrapper
        className="ai_svg_N"
        SVG={N}
      />
      <SvgWrapper
        className="ai_svg_E1"
        SVG={E1}
      />
      <SvgWrapper
        className="ai_svg_E2"
        SVG={E2}
      />
      <SvgWrapper
        className="ai_svg_B"
        SVG={B}
      />
      <SvgWrapper
        className="ai_svg_K1"
        SVG={K1}
      />
      <SvgWrapper
        className="ai_svg_K2"
        SVG={K2}
      />
      <SvgWrapper
        className="ai_svg_K3"
        SVG={K3}
      />
      <SvgWrapper
        className="ai_svg_H"
        SVG={H}
      />
      <SvgWrapper
        className="ai_svg_A"
        SVG={A}
      />
      <SvgWrapper
        className="ai_svg_N2"
        SVG={N2}
      />
    </div>
  )
}
