import Footer from "../GlobalComponents/Footer";
import Navbar from "../GlobalComponents/Navbar";
import Sidebar from "../GlobalComponents/Sidebar";
import Main from "../contactPage/main";

function Contact() {
  return (
    <div className="px-6 sm:px-12 xl:px-14">
      <Navbar />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default Contact;
