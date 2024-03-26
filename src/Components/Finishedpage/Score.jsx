/* eslint-disable react/prop-types */

import { useQuiz } from "../AppContext";
import ButtonPurple from "../ButtonPurple";

function Score({ children, quiz }) {
  const { isDark, quizScore } = useQuiz();

  return (
    <div>
      <div
        className={` flex flex-col items-center py-12 gap-6 rounded-lg mt-11 ${
          isDark ? "bg-darkGray" : "bg-white"
        } transition-all duration-1000`}
      >
        <section className="flex items-center gap-5">
          {children}
          <p
            className={`text-[19px] font-medium  tracking-wide sm:text-[27px] ${
              isDark ? "text-white" : "text-almostDark"
            } `}
          >
            {quiz}
          </p>
        </section>

        <section className="text-center">
          <h2 className="font-medium text-[85px] sm:text-[130px]">
            {quizScore}
          </h2>

          <p className="text-lg sm:text-2xl">out of 10</p>
        </section>
      </div>
      <ButtonPurple btnContent="Play Again" />
    </div>
  );
}

export default Score;
