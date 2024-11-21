import profileimg from "../images/homepage/mobile/image-homepage-profile@2x.jpg";
import profileimgtab from "../images/homepage/tablet/image-homepage-profile@2x.jpg";
import profileimgdesktop from "../images/homepage/desktop/image-homepage-profile@2x.jpg";
import vjykmr from "../images/homepage/mobile/vjykmr23_n.jpg";
import x from "../images/homepage/mobile/x.jpg";
import Button from "../GlobalComponents/Button";
import { Link } from "react-router-dom";
function Main({ down }) {
  return (
    <main
      ref={down}
      className="my-[2rem] sm:my-[4rem] sm:flex sm:gap-12 lg:w-[85%] lg:gap-32 xl:w-[90%] xl:gap-32 "
    >
      <img src={x} alt="profile" className="mb-8 sm:hidden" />
      <img
        src={x}
        alt="tab"
        className="hidden sm:block sm:w-[50%]  xl:hidden"
      />
      <img src={x} alt="tab" className="hidden xl:w-[50%] xl:block" />
      <div className="border-t-[1px] border-b-[1px] pt-8 pb-12 border-solid border-textcolor my-4">
        <h1>About me</h1>
        <p className="my-8 ">
          I’m a Next.js developer on the lookout for new opportunities with an
          innovative company. I specialize in building fast, scalable web
          applications using the latest web technologies, focusing on
          performance, accessibility, and user-friendly design. With experience
          in React and server-side rendering, I thrive on creating seamless and
          efficient web solutions. Based in Gurugram, Haryana, India, I’m open
          to remote work and have successfully collaborated with remote teams.
          Outside of coding, you’ll often find me outdoors, whether I’m hiking,
          running, or cycling. Take a look at my work—I’d love to collaborate
          with you!
        </p>
        <Link to="/portfolio">
          <Button content="go to portfolio" />
        </Link>
      </div>
    </main>
  );
}

export default Main;
