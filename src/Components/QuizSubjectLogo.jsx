/* eslint-disable react/prop-types */
function QuizSubjectLogo({ quizType }) {
  const iconType = quizType === "JavaScript" ? "js" : quizType.toLowerCase();

  return (
    <div className=" overflow-hidden  rounded-md  bg-white">
      <div
        className={`${quizType === "HTML" && "bg-reds"} ${
          quizType === "CSS" && "bg-greens"
        } ${quizType === "JavaScript" && "bg-blue-500"} ${
          quizType === "Accessibility" && "bg-pink"
        } bg-opacity-10 px-1.5 py-1.5`}
      >
        <img src={`/images/icon-${iconType}.svg`} className="w-8" alt="" />
      </div>
    </div>
  );
}

export default QuizSubjectLogo;
