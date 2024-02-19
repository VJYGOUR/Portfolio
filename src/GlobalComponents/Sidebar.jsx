import { Link } from "react-router-dom";
import { usePost } from "../Context/PostContext";

function Sidebar() {
  const { sideBarClose } = usePost();
  return (
    <>
      {!sideBarClose && (
        <aside className="uppercase absolute top-18 text-center right-12 flex flex-col gap-6 bg-grayishDarkBlue text-white w-[60%] py-8 sm:hidden">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact me</Link>
        </aside>
      )}
    </>
  );
}

export default Sidebar;
