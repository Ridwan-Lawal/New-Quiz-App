import { Link } from "react-router-dom";
import { useQuiz } from "../AppContext";
import QuizSubjectButton from "./QuizSubjectButton";
import QuizSubjectLogo from "../QuizSubjectLogo";

function HomeDashboard() {
  const { isDark, quizData, questionIndex } = useQuiz();

  return (
    <div className="lg:flex mt-12 lg:mt-20  justify-between transition-all duration-1000">
      <section className="lg:w-[50%]">
        <h1
          className={`text-[2.8rem] sm:text-[3.9rem] leading-[1] font-light ${
            isDark ? "text-white" : "text-almostDark  "
          } `}
        >
          Welcome to the{" "}
          <span className="font-semibold m-0  block">Frontend Quiz!</span>
        </h1>
        <p
          className={` sm:text-xl text-lg mt-5 sm:mt-12 italic ${
            isDark ? "text-almostWhite" : "text-grays"
          } `}
        >
          Pick a subject to get started.
        </p>
      </section>

      <section className="lg:w-[50%]  mt-14 lg:mt-0 space-y-4 flex flex-col sm:space-y-6">
        {quizData?.map((quiz, i) => (
          <Link
            key={i}
            to={`/quiz/${quiz?.title}?id=${quiz?.id}?question=${
              questionIndex + 1
            }`}
          >
            <QuizSubjectButton subject={quiz.title}>
              <QuizSubjectLogo quizType={quiz?.title} />
            </QuizSubjectButton>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default HomeDashboard;
