import { useQuiz } from "./AppContext";

function Loader() {
  const { isDark } = useQuiz();
  return (
    <div className="mt-44 flex justify-center">
      <p
        className={`${
          isDark ? "text-white" : "text-blue-950"
        } text-2xl text-center font-medium`}
      >
        Loading...
      </p>
    </div>
  );
}

export default Loader;
