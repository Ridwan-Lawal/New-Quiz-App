/* eslint-disable react/prop-types */
function ButtonPurple({ btnContent = "Submit Answer" }) {
  return (
    <button className="bg-pink w-full py-3.5 hover:opacity-60 transition-opacity duration-500 rounded-lg text-white font-medium text-lg mt-8 sm:text-2xl sm:py-5">
      {btnContent}
    </button>
  );
}

export default ButtonPurple;
