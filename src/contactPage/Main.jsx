import SocialLink from "../GlobalComponents/SocialLink";
import ContactForms from "./ContactForms";

function Main() {
  return (
    <main>
      <div className="border-y-[1px] border-textcolor py-10 lg:grid lg:grid-cols-2">
        <h2 className="lg:row-span-2">Get in Touch</h2>
        <p className="my-8">
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          in London. But I’m also happy to hear about opportunites that don’t
          fit that description. I’m a hard-working and positive person who will
          always approach each task with a sense of purpose and attention to
          detail. Please do feel free to check out my online profiles below and
          get in touch using the form.
        </p>
        <SocialLink clr="grayishDarkBlue" />
      </div>
      <div className="py-10 lg:grid lg:grid-cols-2">
        <ContactForms />
      </div>
    </main>
  );
}

export default Main;
