import NavBar from "../Components/NavBar";
import QuizDashboard from "../Components/Quizpage/QuizDashboard";

function Quiz() {
  return (
    <div className="pt-6 sm:pt-9 max-w-[1120px] mx-auto px-6  sm:px-10 pb-14 transition-all duration-1000">
      <NavBar quiz="HTML">
        <section className="border py-1.5 px-1.5">
          <img src="/src/assets/icon-html.svg" className="w-8 " alt="" />
        </section>
      </NavBar>

      <QuizDashboard />
    </div>
  );
}

export default Quiz;
