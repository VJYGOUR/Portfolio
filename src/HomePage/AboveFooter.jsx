import { Link } from "react-router-dom";
import Button from "../GlobalComponents/Button";

function AboveFooter() {
  return (
    <div className="text-center mb-12 sm:flex sm:justify-between sm:items-center sm:my-20">
      <h1 className="mb-8 sm:mb-0 sm:w-[14ch] xl:w-[14ch]">
        Interested in doing a project together?
      </h1>
      <hr className="hidden sm:inline-block sm:w-[20%] sm:text-textcolor xl:w-[40%]" />
      <Link to="/contact">
        <Button content="contact me" />
      </Link>
    </div>
  );
}

export default AboveFooter;
