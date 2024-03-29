import { useQuiz } from "../AppContext";

/* eslint-disable react/prop-types */
function QuizSubjectButton({ subject = "HTML", children }) {
  const { isDark } = useQuiz();

  return (
    <button
      className={` flex shadow-sm sm:shadow-lg   items-center gap-5 w-full py-4 px-5 sm:py-5  rounded-xl sm:rounded-2xl ${
        isDark
          ? "bg-darkGray text-white sm:shadow-gray-almostDark"
          : "bg-white text-almostDark sm:shadow-[#ededed]"
      } transition-all duration-1000`}
    >
      {children}
      <p className=" sm:text-2xl  font-medium text-[19px]">{subject}</p>
    </button>
  );
}

export default QuizSubjectButton;
