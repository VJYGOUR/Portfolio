function Header({ scrol, down }) {
  return (
    <header className="h-[80vh] mb-[2rem] sm:relative sm:h-[70vh] xl:h-[85vh]">
      <div className="bg-[url('./images/homepage/mobile/image-homepage-hero@2x.jpg')] bg-center bg-cover bg-no-repeat h-[40%] sm:bg-[url('./images/homepage/tablet/image-homepage-hero@2x.jpg')] sm:h-full  xl:bg-[url('./images/homepage/desktop/image-homepage-hero@2x.jpg')] xl:h-full"></div>
      <div className="sm:absolute sm:bottom-0 sm:bg-veryLightGrey sm:w-[56ch] ">
        <h1 className="my-[2.6rem] sm:w-[80%]">
          Hey, I’m Vijay Sharma and I love building beautiful websites
        </h1>
        <button
          onClick={() => scrol(down)}
          className="uppercase hover:bg-desaturatedCyan tracking-widest bg-darkBlue text-white before:content-img before:mr-12 pl-6 pr-12 py-4 "
        >
          about me
        </button>
      </div>
    </header>
  );
}

export default Header;
