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
        <p className="my-8">
          I’m a front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in Gurugram, Haryana, India, but I’m happy working remotely
          and have experience in remote teams. When I’m not coding, you’ll find
          me outdoors. I love being out in nature whether that’s going for a
          walk, run or cycling. I’d love you to check out my work.
        </p>
        <Link to="/portfolio">
          <Button content="go to portfolio" />
        </Link>
      </div>
    </main>
  );
}

export default Main;
