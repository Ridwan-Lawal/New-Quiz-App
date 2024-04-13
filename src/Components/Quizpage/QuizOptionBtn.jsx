import { useQuiz } from "../AppContext";

/* eslint-disable react/prop-types */
function QuizOptionBtn({
  optionLetter = "A",
  option = "",
  onClick,
  correctAnswer,
}) {
  const { isDark, optionClicked, isSubmitClicked } = useQuiz();

  return (
    <button
      disabled={isSubmitClicked && true}
      onClick={onClick}
      className={`flex  shadow-sm sm:shadow-lg justify-between  items-center gap-5 group w-full py-3 px-3.5   rounded-xl sm:rounded-2xl 
     
     
      ${
        !isSubmitClicked &&
        optionClicked === option &&
        "border-[3px] border-pink"
      } ${
        isSubmitClicked &&
        option === correctAnswer &&
        " border-[3px] border-greens"
      } ${
        isSubmitClicked &&
        option === optionClicked &&
        option !== correctAnswer &&
        "border-[3px] border-reds"
      } transition-all duration-100
    ${
      isDark
        ? "bg-darkGray   sm:shadow-almostDark text-white"
        : "bg-white   sm:shadow-[#ededed] text-almostDark"
    } ${
        isSubmitClicked
          ? "cursor-not-allowed"
          : "hover:border-[3px] hover:border-pink"
      }   transition-all duration-500`}
    >
      <div className="flex gap-5 items-center">
        <p
          className={`uppercase text-grays py-2.5 w-fit px-4 rounded-lg ${
            !isSubmitClicked && optionClicked === option
              ? "bg-pink text-white"
              : "bg-almostWhite "
          } ${
            isSubmitClicked &&
            option === correctAnswer &&
            "bg-greens text-white"
          } ${
            isSubmitClicked &&
            option === optionClicked &&
            option !== correctAnswer &&
            "bg-reds text-white"
          } text-lg sm:text-[22px]  ${
            isSubmitClicked && "cursor-not-allowed"
          }  transition-colors duration-500  font-medium`}
        >
          {optionLetter}
        </p>

        <p className="text-lg sm:text-[22px] font-medium ">{option}</p>
      </div>
      {isSubmitClicked && option === correctAnswer && (
        <img src="/images/icon-correct.svg" alt="" />
      )}

      {isSubmitClicked &&
        option === optionClicked &&
        option !== correctAnswer && <img src="/images/icon-error.svg" alt="" />}
    </button>
  );
}

export default QuizOptionBtn;
