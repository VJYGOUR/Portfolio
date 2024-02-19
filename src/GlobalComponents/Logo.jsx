import { Link } from "react-router-dom";
import logoic from "../images/logo.svg";
function Logo() {
  return (
    <>
      <Link to="/">
        <img src={logoic} alt="logo" />
      </Link>
    </>
  );
}

export default Logo;
