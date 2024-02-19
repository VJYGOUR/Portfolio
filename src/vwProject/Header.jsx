import mobimgManagepr1 from "../images/detail/mobile/image-manage-preview-2@2x.jpg";
import mobimgManagepr2 from "../images/detail/mobile/image-manage-preview-1@2x.jpg";
import mobimgManagepr3 from "../images/detail/mobile/image-manage-hero@2x.jpg";
import mobimgInsurepr1 from "../images/detail/mobile/image-insure-preview-2@2x.jpg";
import mobimgInsurepr2 from "../images/detail/mobile/image-insure-preview-1@2x.jpg";
import mobimgInsurepr3 from "../images/detail/mobile/image-insure-hero@2x.jpg";
import mobimgFylo1 from "../images/detail/mobile/image-fylo-preview-2@2x.jpg";
import mobimgFylo2 from "../images/detail/mobile/image-fylo-preview-1@2x.jpg";
import mobimgFylo3 from "../images/detail/mobile/image-fylo-hero@2x.jpg";
import mobimgBookmark1 from "../images/detail/mobile/image-bookmark-preview-2@2x.jpg";
import mobimgBookmark2 from "../images/detail/mobile/image-bookmark-preview-1@2x.jpg";
import mobimgBookmark3 from "../images/detail/mobile/image-bookmark-hero@2x.jpg";
import tabimgManagepr1 from "../images/detail/tablet/image-manage-preview-2@2x.jpg";
import tabimgManagepr2 from "../images/detail/tablet/image-manage-preview-1@2x.jpg";
import tabimgManagepr3 from "../images/detail/tablet/image-manage-hero@2x.jpg";
import tabimgInsurepr1 from "../images/detail/tablet/image-insure-preview-2@2x.jpg";
import tabimgInsurepr2 from "../images/detail/tablet/image-insure-preview-1@2x.jpg";
import tabimgInsurepr3 from "../images/detail/tablet/image-insure-hero@2x.jpg";
import tabimgFylo1 from "../images/detail/tablet/image-fylo-preview-2@2x.jpg";
import tabimgFylo2 from "../images/detail/tablet/image-fylo-preview-1@2x.jpg";
import tabimgFylo3 from "../images/detail/tablet/image-fylo-hero@2x.jpg";
import tabimgBookmark1 from "../images/detail/tablet/image-bookmark-preview-2@2x.jpg";
import tabimgBookmark2 from "../images/detail/tablet/image-bookmark-preview-1@2x.jpg";
import tabimgBookmark3 from "../images/detail/tablet/image-bookmark-hero@2x.jpg";
import desktopimgManagepr1 from "../images/detail/desktop/image-manage-preview-2@2x.jpg";
import desktopimgManagepr2 from "../images/detail/desktop/image-manage-preview-1@2x.jpg";
import desktopimgManagepr3 from "../images/detail/desktop/image-manage-hero@2x.jpg";
import desktopimgInsurepr1 from "../images/detail/desktop/image-insure-preview-2@2x.jpg";
import desktopimgInsurepr2 from "../images/detail/desktop/image-insure-preview-1@2x.jpg";
import desktopimgInsurepr3 from "../images/detail/desktop/image-insure-hero@2x.jpg";
import desktopimgFylo1 from "../images/detail/desktop/image-fylo-preview-2@2x.jpg";
import desktopimgFylo2 from "../images/detail/desktop/image-fylo-preview-1@2x.jpg";
import desktopimgFylo3 from "../images/detail/desktop/image-fylo-hero@2x.jpg";
import desktopimgBookmark1 from "../images/detail/desktop/image-bookmark-preview-2@2x.jpg";
import desktopimgBookmark2 from "../images/detail/desktop/image-bookmark-preview-1@2x.jpg";
import desktopimgBookmark3 from "../images/detail/desktop/image-bookmark-hero@2x.jpg";
import Button from "../GlobalComponents/Button";
import { Link } from "react-router-dom";
const arr = [
  {
    heading: "Audiophile",
    mob1: mobimgManagepr1,
    mob2: mobimgManagepr2,
    mob3: mobimgManagepr3,
    tab1: tabimgManagepr1,
    tab2: tabimgManagepr2,
    tab3: tabimgManagepr3,
    desk1: desktopimgManagepr1,
    desk2: desktopimgManagepr2,
    desk3: desktopimgManagepr3,
    prev: "Tip",
    next: "Sunnyweb",
    link: "https://audiophile-ecommerce11.netlify.app/",
  },
  {
    heading: "Sunnyweb",
    mob1: mobimgBookmark1,
    mob2: mobimgBookmark2,
    mob3: mobimgBookmark3,
    tab1: tabimgBookmark1,
    tab2: tabimgBookmark2,
    tab3: tabimgBookmark3,
    desk1: desktopimgBookmark1,
    desk2: desktopimgBookmark2,
    desk3: desktopimgBookmark3,
    prev: "Audiophile",
    next: "Clipboard",
    link: "https://vjy-sunnyside.netlify.app/",
  },
  {
    heading: "Clipboard",
    mob1: mobimgInsurepr1,
    mob2: mobimgInsurepr2,
    mob3: mobimgInsurepr3,
    tab1: tabimgInsurepr1,
    tab2: tabimgInsurepr2,
    tab3: tabimgInsurepr3,
    desk1: desktopimgInsurepr1,
    desk2: desktopimgInsurepr2,
    desk3: desktopimgInsurepr3,
    prev: "Sunnyweb",
    next: "Tip",
    link: "https://landing-page-clipboard33.netlify.app/",
  },
  {
    heading: "Tip",
    mob1: mobimgFylo1,
    mob2: mobimgFylo2,
    mob3: mobimgFylo3,
    tab1: tabimgFylo1,
    tab2: tabimgFylo2,
    tab3: tabimgFylo3,
    desk1: desktopimgFylo1,
    desk2: desktopimgFylo2,
    desk3: desktopimgFylo3,
    prev: "Clipboard",
    next: "Audiophile",
    link: "https://tip-calculator-eight-gamma.vercel.app/",
  },
];
function Header({ cont }) {
  return (
    <>
      {arr.map((curr, i) => (
        <div key={i} className={`${i === cont ? "block" : "hidden"}`}>
          <img src={curr.mob3} alt="mobimg" className="sm:hidden" />
          <img
            src={curr.tab3}
            alt="mobimg"
            className="hidden sm:block lg:hidden"
          />
          <img src={curr.desk3} alt="mobimg" className="hidden  lg:block" />
          <main className="lg:grid lg:grid-cols-2 lg:gap-x-24 lg:my-12">
            <div className="border-y-[1px] my-8 py-10 border-y-textcolor sm:grid sm:grid-cols-2 lg:block ">
              <h2 className="sm:self-start sm:grid">{curr.heading}</h2>
              <p className="my-4 sm:row-span-2 ">
                Manage This project required me to build a fully responsive
                landing page to the designs provided. I used HTML5, along with
                CSS Grid and JavaScript for the areas that required
                interactivity, such as the testimonial slider.
              </p>
              <div className="">
                <p className="text-desaturatedCyan font-bold">
                  Interaction Design/Frontend Development
                </p>
                <p className="mb-6 mt-2 text-desaturatedCyan font-bold">
                  Reactjs / Tailwind CSS / React Router
                </p>
                <Link to={`${curr.link}`}>
                  <Button content="visit website" />
                </Link>
              </div>
            </div>
            <div className="lg:py-6">
              <h3>Project Background</h3>
              <p className="my-5">
                This project was a front-end challenge from Frontend Mentor.
                It’s a platform that enables you to practice building websites
                to a design and project brief. Each challenge includes mobile
                and desktop designs to show how the website should look at
                different screen sizes. Creating these projects has helped me
                refine my workflow and solve real-world coding problems. I’ve
                learned something new with each project, helping me to improve
                and adapt my style.
              </p>
            </div>
            <div className="my-6 lg:col-start-2">
              <h3 className="my-6">Static Previews</h3>
              <img src={curr.mob2} alt="" className="mb-8" />
              <img src={curr.mob1} alt="" />
            </div>
          </main>
          <div className="flex justify-between text-[1.3rem] border-y-[1px] py-6 mb-6 border-y-textcolor">
            <Link
              to={`/${curr.prev}`}
              className={`before:content-arrL before:self-center flex gap-5 `}
            >
              <div>
                <h3>{curr.prev}</h3>
                <p className="text-[.9rem] tracking-wider">Previous Project</p>
              </div>
            </Link>
            <Link
              to={`/${curr.next}`}
              className={`after:content-arrR after:self-center flex gap-5 `}
            >
              <div>
                <h3>{curr.next} </h3>
                <p className="text-[.9rem] tracking-wider">Next Project</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default Header;
