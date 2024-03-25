import { Link } from "react-router-dom";
import { useQuiz } from "../AppContext";
import QuizSubjectButton from "./QuizSubjectButton";

function HomeDashboard() {
  const { isDark, quizData } = useQuiz();

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
        {quizData?.map((quiz) => (
          <Link to={`/quiz/${quiz?.title}?id=${quiz?.id}`} key={quiz.id}>
            <QuizSubjectButton subject={quiz.title}>
              <img src={`/src${quiz?.icon.slice(1)}`} className="w-7" alt="" />
            </QuizSubjectButton>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default HomeDashboard;
