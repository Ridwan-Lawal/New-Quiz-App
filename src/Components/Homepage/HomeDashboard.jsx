import QuizSubjectButton from "./QuizSubjectButton";

function HomeDashboard() {
  return (
    <div className="border md:flex mt-12 md:mt-16 border-green-600 justify-between">
      <section className="border md:w-[50%]">
        <h1 className="text-[2.6rem] sm:text-6xl leading-[1] text-almostDark  font-light  ">
          Welcome to the{" "}
          <span className="font-semibold m-0  block">Frontend Quiz!</span>
        </h1>
        <p className="text-grays sm:text-xl text-lg mt-5 sm:mt-12 italic ">
          Pick a subject to get started.
        </p>
      </section>

      <section className="border md:w-[50%] border-red-600 mt-14 md:mt-0 space-y-5 sm:space-y-6">
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
