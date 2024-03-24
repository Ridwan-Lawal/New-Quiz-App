import ButtonPurple from "../ButtonPurple";
import QuestionProgress from "./QuestionProgress";
import QuizOptionBtn from "./QuizOptionBtn";

function QuizDashboard() {
  return (
    <div className="space-y-11 lg:space-y-0 lg:flex   justify-between gap-8 mt-12 lg:mt-16">
      <section className="lg:w-[50%]">
        <QuestionProgress />
      </section>

      <section className="lg:w-[50%]">
        <section className="space-y-4">
          <QuizOptionBtn />
          <QuizOptionBtn />
          <QuizOptionBtn />
          <QuizOptionBtn />
        </section>
        <ButtonPurple />
      </section>
    </div>
  );
}

export default QuizDashboard;
