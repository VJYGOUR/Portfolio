import Footer from "../GlobalComponents/Footer";
import Navbar from "../GlobalComponents/Navbar";
import Sidebar from "../GlobalComponents/Sidebar";
import AboveFooter from "../HomePage/AboveFooter";
import Header from "../vwProject/Header";

function ViewProject({ cont }) {
  return (
    <div className=" px-6 sm:px-12 xl:px-14">
      <Navbar />
      <Sidebar />
      <Header cont={cont} />
      <AboveFooter />
      <Footer />
    </div>
  );
}

export default ViewProject;
