import { useContext, useEffect, useRef } from "react";
import AppContext from "../context/AppContext";

const Header = () => {
  const { setHeaderHeight } = useContext(AppContext);

  const headerHeigth = useRef(0);

  useEffect(() => {
    setHeaderHeight(headerHeigth.current.offsetHeight);
  }, [setHeaderHeight]);

  return (
    <div ref={headerHeigth}>
      <h1 className="Header">"Scio me nihil scire" - Sokrates</h1>
    </div>
  );
};

export default Header;
