/* eslint-disable react/prop-types */

import { useQuiz } from "../AppContext";

function QuestionProgress({ currentQuizQuestions, currentQuestion }) {
  const { isDark, questionIndex } = useQuiz();
  console.log(currentQuizQuestions);
  /*   this is for the questions for each quiz, and by default the questions should start from the first index (0), which in the real word it will be question 1*/

  return (
    <div className=" lg:min-h-screen flex flex-col justify-between">
      <section>
        <p
          className={`italic  sm:text-lg ${
            isDark ? "text-almostWhite" : "text-darkGray"
          } `}
        >
          Question {questionIndex + 1} of {currentQuizQuestions?.length}
        </p>
        <h2
          className={`text-xl font-medium mt-4 sm:mt-6 sm:text-3xl ${
            isDark ? "text-white" : "text-almostDark "
          } `}
        >
          {currentQuestion?.question}
        </h2>
      </section>
      <section className="mt-1 sm:mt-4">
        <progress
          className={`progress ${isDark ? "progressDark" : "progressLight"}`}
          value={questionIndex + 1}
          max={currentQuizQuestions?.length}
        ></progress>
      </section>
    </div>
  );
}

export default QuestionProgress;
