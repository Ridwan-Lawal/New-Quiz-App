import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../Components/AppContext";

function PageNotFound() {
  const { isDark } = useQuiz();
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <button onClick={() => navigate(-1)}>
        <FaArrowLeftLong className="text-white text-2xl" />
      </button>

      <div
        className={`flex flex-col items-center   justify-center gap-4 h-screen ${
          isDark ? "text-white" : "text-darkGray"
        }`}
      >
        <p className="text-5xl ">👻</p>
        <p className="text-2xl font-medium italic">Page not found!</p>
      </div>
    </div>
  );
}

export default PageNotFound;
