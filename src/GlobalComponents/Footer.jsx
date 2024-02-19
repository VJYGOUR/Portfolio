import { Link } from "react-router-dom";

import logoO from "../images/icons/logo.svg";
import SocialLink from "./SocialLink";

function Footer() {
  return (
    <footer className="flex  flex-col items-center mx-[-1.5rem] gap-8 bg-grayishDarkBlue text-veryLightGrey py-16 sm:flex sm:flex-row sm:justify-between sm:px-12 sm:py-6 sm:mx-[-3rem] xl:px-20 xl:mx-[-3.5rem] ">
      <div className="flex flex-col gap-5 items-center uppercase sm:flex sm:flex-row sm:gap-8">
        <Link to="/">
          <img src={logoO} alt="logo" />
        </Link>
        <Link to="/" className="tracking-widest">
          Home
        </Link>
        <Link to="/portfolio" className="tracking-widest">
          portfolio
        </Link>
        <Link to="/contact" className="tracking-widest">
          contact me
        </Link>
      </div>
      <SocialLink />
    </footer>
  );
}

export default Footer;
