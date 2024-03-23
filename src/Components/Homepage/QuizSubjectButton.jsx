/* eslint-disable react/prop-types */
function QuizSubjectButton({
  iconBgColor = "bg-red-300",
  subject = "HTML",
  children,
}) {
  return (
    <button className="bg-white flex shadow-sm sm:shadow-lg  sm:shadow-[#ededed] items-center gap-5 w-full py-4 px-5 sm:py-5  rounded-xl sm:rounded-2xl">
      <section
        className={`${iconBgColor} px-1.5 py-1.5 rounded-md# bg-opacity-15 `}
      >
        {children}
      </section>
      <p className="text-almostDark sm:text-2xl  font-medium text-[19px]">
        {subject}
      </p>
    </button>
  );
}

export default QuizSubjectButton;
