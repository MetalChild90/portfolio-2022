import { useContext, useEffect, useRef } from "react";
import AppContext from "../context/AppContext";

function Footer() {
  const { setFooterHeight } = useContext(AppContext);

  const footerHeigth = useRef(0);

  useEffect(() => {
    setFooterHeight(footerHeigth.current.offsetHeight);
  }, [setFooterHeight]);

  return (
    <div ref={footerHeigth} className="Footer">
      <p>{new Date().getFullYear()} &copy; Take whatever you want</p>
    </div>
  );
}

export default Footer;
