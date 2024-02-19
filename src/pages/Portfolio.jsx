import Footer from "../GlobalComponents/Footer";
import Navbar from "../GlobalComponents/Navbar";
import Sidebar from "../GlobalComponents/Sidebar";
import AboveFooter from "../HomePage/AboveFooter";
import PortfolioIndex from "../portflioPage/PortfolioIndex";

function Portfolio() {
  return (
    <div className=" px-6 sm:px-12 xl:px-14">
      <Navbar />
      <Sidebar />
      <PortfolioIndex />
      <AboveFooter />
      <Footer />
    </div>
  );
}

export default Portfolio;
