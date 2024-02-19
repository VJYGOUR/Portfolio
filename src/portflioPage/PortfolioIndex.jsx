import Button from "../GlobalComponents/Button";
import mobileManage from "../images/portfolio/mobile/image-portfolio-manage@2x.jpg";
import mobileInsure from "../images/portfolio/mobile/image-portfolio-insure@2x.jpg";
import mobileFylo from "../images/portfolio/mobile/image-portfolio-fylo@2x.jpg";
import mobileBookmark from "../images/portfolio/mobile/image-portfolio-bookmark@2x.jpg";
import tabManage from "../images/portfolio/tablet/image-portfolio-manage@2x.jpg";
import tabInsure from "../images/portfolio/tablet/image-portfolio-insure@2x.jpg";
import tabFylo from "../images/portfolio/tablet/image-portfolio-fylo@2x.jpg";
import tabBookmark from "../images/portfolio/tablet/image-portfolio-bookmark@2x.jpg";
import desktopManage from "../images/portfolio/desktop/image-portfolio-manage@2x.jpg";
import desktopBookmark from "../images/portfolio/desktop/image-portfolio-bookmark@2x.jpg";
import desktopInsure from "../images/portfolio/desktop/image-portfolio-insure@2x.jpg";
import desktopFylo from "../images/portfolio/desktop/image-portfolio-fylo@2x.jpg";
import { Link } from "react-router-dom";
const imgArr = [
  {
    heading: "Audiophile",
    text: "Manage This project required me to build a fully responsivelanding page to the designs provided. I used HTML5, along with css Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
    mob: mobileManage,
    tab: tabManage,
    desk: desktopManage,
  },
  {
    heading: "Sunnyweb",
    text: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
    mob: mobileBookmark,
    tab: tabBookmark,
    desk: desktopBookmark,
  },
  {
    heading: "Clipboard",
    text: "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
    mob: mobileInsure,
    tab: tabInsure,
    desk: desktopInsure,
  },
  {
    heading: "Tip",
    text: "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
    mob: mobileFylo,
    tab: tabFylo,
    desk: desktopFylo,
  },
];
function PortfolioIndex() {
  return (
    <main>
      {imgArr.map((curr, i) => (
        <>
          <div className="my-12 sm:flex sm:gap-12 xl:my-20 ">
            <img src={curr.mob} alt="mobileimg" className="sm:hidden" />
            <img
              src={curr.tab}
              alt=""
              className="hidden sm:inline-block sm:w-[50%] sm:self-center xl:hidden"
            />
            <img
              src={curr.desk}
              alt=""
              className="hidden xl:inline-block xl:w-[50%] "
            />
            <div
              className={`border-y-[1px] border-textcolor py-12 ${
                i % 2 === 0 ? "sm:order-6" : "sm:order-[-1]"
              } xl:flex xl:flex-col xl:justify-center xl:px-16 `}
            >
              <h2>{curr.heading}</h2>
              <p className="my-8">{curr.text}</p>
              <Link to={`/${curr.heading}`}>
                
                <Button content="view project" wid={true} />
              </Link>
            </div>
          </div>
        </>
      ))}
    </main>
  );
}

export default PortfolioIndex;
