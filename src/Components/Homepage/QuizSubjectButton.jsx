import { useContext } from "react";
import AppContext from "../AppContext";

/* eslint-disable react/prop-types */
function QuizSubjectButton({
  iconBgColor = "bg-red-300",
  subject = "HTML",
  children,
}) {
  const { isDark } = useContext(AppContext);

  return (
    <button
      className={` flex shadow-sm sm:shadow-lg   items-center gap-5 w-full py-4 px-5 sm:py-5  rounded-xl sm:rounded-2xl ${
        isDark
          ? "bg-darkGray text-white sm:shadow-gray-almostDark"
          : "bg-white text-almostDark sm:shadow-[#ededed]"
      } transition-all duration-1000`}
    >
      <section
        className={`${iconBgColor} px-1.5 py-1.5 rounded-md# bg-opacity-15 `}
      >
        {children}
      </section>
      <p className=" sm:text-2xl  font-medium text-[19px]">{subject}</p>
    </button>
  );
}

export default QuizSubjectButton;
