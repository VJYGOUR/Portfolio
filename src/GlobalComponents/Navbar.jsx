import { Link } from "react-router-dom";

import hamburger from "../images/icons/hamburger.svg";
import close from "../images/icons/close.svg";
import { usePost } from "../Context/PostContext";
import Logo from "./Logo";
import HomePc from "./HomePc";

function Navbar() {
  const { sideBarClose, handleSidebtn } = usePost();
  return (
    <nav className="flex justify-between  py-8 ">
      <Logo />
      {sideBarClose ? (
        <img
          src={hamburger}
          alt="hamicon"
          className="h-[1.2rem] sm:hidden"
          onClick={handleSidebtn}
        />
      ) : (
        <img
          src={close}
          alt="hamicon"
          className="h-[1.2rem] sm:hidden"
          onClick={handleSidebtn}
        />
      )}
      <HomePc />
    </nav>
  );
}

export default Navbar;
