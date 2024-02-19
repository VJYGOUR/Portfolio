import { useForm, ValidationError } from "@formspree/react";

function ContactForms() {
  const [state, handleSubmit] = useForm("mrgnqevl");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <>
      <h2 className="mb-10">Contact Me</h2>
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="border-none bg-lightGrey py-3 px-2 block w-full outline-desaturatedCyan mt-4 mb-6"
          id="name"
          type="text"
          name="name"
          placeholder="vijay kumar"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email@example.com"
          required
          className="border-none bg-lightGrey py-3 px-2 block w-full outline-desaturatedCyan mt-4 mb-6"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Message</label>
        <textarea
          rows={5}
          id="message"
          name="message"
          placeholder="How can i help ?"
          required
          className="border-none bg-lightGrey py-3  px-2 block w-full outline-desaturatedCyan mt-4 mb-6"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting}
          className="uppercase bg-darkBlue text-white px-14 py-5 mt-4 mb-6"
        >
          send message
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </>
  );
}

export default ContactForms;
