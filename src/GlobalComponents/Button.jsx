function Button({ content, wid }) {
  return (
    <>
      <button
        className={`${
          wid ? "self-start" : ""
        } uppercase tracking-widest hover:bg-grayishDarkBlue hover:text-white text-darkBlue border-grayishDarkBlue border-solid border-[2px] px-8 py-4`}
      >
        {content}
      </button>
    </>
  );
}

export default Button;
