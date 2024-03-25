import { useQuiz } from "../AppContext";

/* eslint-disable react/prop-types */
function QuizOptionBtn({
  optionLetter = "A",
  option = "Lorem ipsum dolor sit amet.",
}) {
  const { isDark } = useQuiz();

  return (
    <button
      className={` flex shadow-sm sm:shadow-lg   items-center gap-5 w-full py-3 px-3.5   rounded-xl sm:rounded-2xl border-[3px] transition-all duration-1000 
    ${
      isDark
        ? "bg-darkGray border-darkGray  sm:shadow-almostDark text-white"
        : "bg-white border-white  sm:shadow-[#ededed] text-almostDark"
    } hover:border-pink  transition-all duration-500`}
    >
      <p className="uppercase text-grays py-2.5 bg-almostWhite w-fit px-4 rounded-lg  text-lg sm:text-[22px] font-medium">
        {optionLetter}
      </p>

      <p className="text-lg sm:text-[22px] font-medium ">{option}</p>
    </button>
  );
}

export default QuizOptionBtn;
