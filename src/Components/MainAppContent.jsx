import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useQuiz } from "./AppContext";
import { Suspense, lazy } from "react";
import Loader from "./Loader";

const Homepage = lazy(() => import("/src/Pages/Homepage"));
const Finished = lazy(() => import("/src/Pages/Finished"));
const Quiz = lazy(() => import("/src/Pages/Quiz"));
const PageNotFound = lazy(() => import("/src/Pages/PageNotFound"));

function MainAppContent() {
  const { isDark } = useQuiz();

  return (
    <div>
      <div
        className={`  font-rubik  ${
          isDark ? "bg-almostDark" : "bg-lightGray bg-opacity-[0.15]"
        } transition-all duration-1000`}
      >
        <div
          className={` z-40 bg-contain min-h-screen bg-z bg-no-repeat overflow-auto lg:bg-cover ${
            isDark
              ? "bg-mobileDarkBackground sm:bg-tabletDarkBackground lg:bg-desktopDarkBackground"
              : "bg-mobileLightBackground sm:bg-tabletLightBackground lg:bg-desktopLightBackground"
          }`}
        >
          <BrowserRouter>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="quiz/:quizType" element={<Quiz />} />
                <Route path="finished/:quizType" element={<Finished />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default MainAppContent;
