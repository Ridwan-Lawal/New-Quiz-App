import { useContext } from "react";
import AppContext from "../AppContext";

function QuestionProgress() {
  const { isDark } = useContext(AppContext);

  return (
    <div className=" lg:min-h-screen flex flex-col justify-between">
      <section>
        <p
          className={`italic  sm:text-lg ${
            isDark ? "text-almostWhite" : "text-darkGray"
          } `}
        >
          Question X of X
        </p>
        <h2
          className={`text-xl font-medium mt-4 sm:mt-6 sm:text-3xl ${
            isDark ? "text-white" : "text-almostDark "
          } `}
        >
          What does HTML stand for?
        </h2>
      </section>
      <section className="mt-1 sm:mt-4">
        <progress
          className={`progress ${isDark ? "progressDark" : "progressLight"}`}
          value={5}
          max="10"
        ></progress>
      </section>
    </div>
  );
}

export default QuestionProgress;
