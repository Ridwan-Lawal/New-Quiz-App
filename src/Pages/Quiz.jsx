import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import QuizDashboard from "../Components/Quizpage/QuizDashboard";
import { useQuiz } from "../Components/AppContext";
import QuestionProgress from "../Components/Quizpage/QuestionProgress";

import QuizSubjectLogo from "../Components/QuizSubjectLogo";

function Quiz() {
  const { quizType } = useParams();
  const { quizData, questionIndex } = useQuiz();

  console.log(quizType, quizData);
  // to get the current quiz questions
  const currentQuizQuestions = quizData?.filter((quiz) =>
    quiz.title.toLowerCase().includes(quizType.toLowerCase())
  )[0]?.questions;

  // current question based on the index
  const currentQuestion = currentQuizQuestions?.at(questionIndex);

  return (
    <div className="pt-6 sm:pt-9 max-w-[1120px] mx-auto px-6  sm:px-10 pb-14 transition-all duration-1000">
      <NavBar quiz={quizType}>
        <QuizSubjectLogo quizType={quizType} />
      </NavBar>

      <QuizDashboard
        currentQuestion={currentQuestion}
        currentQuizQuestions={currentQuizQuestions}
        quizType={quizType}
      >
        <QuestionProgress
          currentQuestion={currentQuestion}
          currentQuizQuestions={currentQuizQuestions}
        />
      </QuizDashboard>
    </div>
  );
}

export default Quiz;
