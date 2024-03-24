import { useContext } from "react";
import QuizSubjectButton from "./QuizSubjectButton";
import AppContext from "../AppContext";

function HomeDashboard() {
  const { isDark } = useContext(AppContext);

  return (
    <div className="lg:flex mt-12 lg:mt-20  justify-between">
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

      <section className="lg:w-[50%]  mt-14 lg:mt-0 space-y-5 sm:space-y-6">
        <QuizSubjectButton>
          <img src="/src/assets/icon-html.svg" className="w-7" alt="" />
        </QuizSubjectButton>
        <QuizSubjectButton>
          <img src="/src/assets/icon-html.svg" className="w-7" alt="" />
        </QuizSubjectButton>
        <QuizSubjectButton>
          <img src="/src/assets/icon-html.svg" className="w-7" alt="" />
        </QuizSubjectButton>
        <QuizSubjectButton>
          <img src="/src/assets/icon-html.svg" className="w-7" alt="" />
        </QuizSubjectButton>
      </section>
    </div>
  );
}

export default HomeDashboard;
