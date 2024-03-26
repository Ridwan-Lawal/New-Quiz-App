/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useQuiz } from "../AppContext";
import ButtonPurple from "../ButtonPurple";
import QuizOptionBtn from "./QuizOptionBtn";

function QuizDashboard({ children, currentQuestion, quizType }) {
  const { dispatch, isSubmitClicked, optionClicked, questionIndex, quizScore } =
    useQuiz();

  return (
    <div className="space-y-11 lg:space-y-0 lg:flex   justify-between gap-8 mt-12 lg:mt-16">
      <section className="lg:w-[50%]">{children}</section>

      <section className="lg:w-[50%]">
        <section className="space-y-4">
          {currentQuestion?.options?.map((option, index) => (
            <QuizOptionBtn
              onClick={() =>
                dispatch({ type: "optionClicked", payload: option })
              }
              key={index}
              option={option}
              correctAnswer={currentQuestion?.answer}
            />
          ))}
        </section>

        {!isSubmitClicked && (
          <ButtonPurple
            disabled={!optionClicked && true}
            onClick={() =>
              dispatch({
                type: "answerSubmit",
                payload: currentQuestion?.answer,
              })
            }
          />
        )}
        {isSubmitClicked && questionIndex < 9 && (
          <ButtonPurple
            btnContent="Next Question"
            onClick={() => dispatch({ type: "nextQuestion" })}
          />
        )}

        {isSubmitClicked && questionIndex === 9 && (
          <Link to={`/finished/${quizType}?quizScore=${quizScore}`}>
            <ButtonPurple btnContent="Submit Quiz" />
          </Link>
        )}
      </section>
    </div>
  );
}

export default QuizDashboard;
