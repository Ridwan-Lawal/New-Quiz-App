import NavBar from "../Components/NavBar";
import QuestionProgress from "../Components/Quizpage/QuestionProgress";

function Quiz() {
  return (
    <div className="pt-4">
      <NavBar quiz="HTML">
        <section className="border py-1.5 px-1">
          <img src="/src/assets/icon-html.svg" className="w-8 " alt="" />
        </section>
      </NavBar>
      <div>
        <QuestionProgress />
      </div>
    </div>
  );
}

export default Quiz;
