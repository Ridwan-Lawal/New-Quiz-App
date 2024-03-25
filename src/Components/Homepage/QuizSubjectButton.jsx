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
      <section className=" overflow-hidden  rounded-md  bg-white">
        <section
          className={`${subject === "HTML" && "bg-reds"} ${
            subject === "CSS" && "bg-greens"
          } ${subject === "JavaScript" && "bg-blue-500"} ${
            subject === "Accessibility" && "bg-pink"
          } bg-opacity-10 px-1.5 py-1.5`}
        >
          {children}
        </section>
      </section>
      <p className=" sm:text-2xl  font-medium text-[19px]">{subject}</p>
    </button>
  );
}

export default QuizSubjectButton;
