import { useParams, useSearchParams } from "react-router-dom";
import ScoreDashboard from "../Components/Finishedpage/ScoreDashboard";
import NavBar from "../Components/NavBar";
import QuizSubjectLogo from "../Components/QuizSubjectLogo";

function Finished() {
  const { quizType } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="pt-6 sm:pt-9 max-w-[1120px] mx-auto px-6  sm:px-10 pb-14 transition-all duration-1000">
      <NavBar quiz={quizType}>
        <QuizSubjectLogo quizType={quizType} />
      </NavBar>

      <ScoreDashboard>
        <QuizSubjectLogo quizType={quizType} />
      </ScoreDashboard>
    </div>
  );
}

export default Finished;
