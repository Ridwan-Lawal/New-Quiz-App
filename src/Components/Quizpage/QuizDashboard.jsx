/* eslint-disable react/prop-types */
import ButtonPurple from "../ButtonPurple";
import QuizOptionBtn from "./QuizOptionBtn";

function QuizDashboard({ children, currentQuestion }) {
  return (
    <div className="space-y-11 lg:space-y-0 lg:flex   justify-between gap-8 mt-12 lg:mt-16">
      <section className="lg:w-[50%]">{children}</section>

      <section className="lg:w-[50%]">
        <section className="space-y-4">
          {currentQuestion?.options?.map((option) => (
            <QuizOptionBtn key={option} option={option} />
          ))}
        </section>
        <ButtonPurple />
      </section>
    </div>
  );
}

export default QuizDashboard;
