import { useRef } from "react";
import Footer from "../GlobalComponents/Footer";
import Navbar from "../GlobalComponents/Navbar";
import Sidebar from "../GlobalComponents/Sidebar";
import AboveFooter from "../HomePage/AboveFooter";
import Header from "../HomePage/Header";
import Main from "../HomePage/Main";

function Home() {
  const down = useRef(null);
  const scrolltoDown = function (elementRef) {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative px-6 sm:px-12 xl:px-14">
      <Navbar />
      <Sidebar />
      <Header scrol={scrolltoDown} down={down} />
      <Main scrol={scrolltoDown} down={down} />
      <AboveFooter />
      <Footer />
    </div>
  );
}

export default Home;
