import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "/src/Pages/Homepage";
import Finished from "/src/Pages/Finished";
import Quiz from "/src/Pages/Quiz";
import PageNotFound from "/src/Pages/PageNotFound";
import { useQuiz } from "./AppContext";
// handle the play again
// store the theme in the local storage
// store the current data in the initial value in the context so when we reload the app continues from where it stops

function MainAppContent() {
  const { isDark } = useQuiz();

  return (
    <div>
      <div
        className={` border border-black font-rubik  ${
          isDark ? "bg-almostDark" : "bg-lightGray bg-opacity-[0.15]"
        } transition-all duration-1000`}
      >
        <div
          className={` z-40 bg-contain border border-red-600 min-h-screen bg-z bg-no-repeat overflow-auto lg:bg-cover ${
            isDark
              ? "bg-mobileDarkBackground sm:bg-tabletDarkBackground lg:bg-desktopDarkBackground"
              : "bg-mobileLightBackground sm:bg-tabletLightBackground lg:bg-desktopLightBackground"
          }`}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="quiz/:quizType" element={<Quiz />} />
              <Route path="finished/:quizType" element={<Finished />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default MainAppContent;
