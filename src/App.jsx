import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Finished from "./Pages/Finished";
import Quiz from "./Pages/Quiz";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <div className=" bg-lightGray bg-opacity-[0.15] border border-black font-rubik">
      <div className="bg-mobileLightBackground sm:bg-tabletLightBackground lg:bg-desktopLightBackground z-40 bg-contain border border-red-600 min-h-screen bg-z bg-no-repeat overflow-auto lg:bg-cover">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="quiz/:quizType" element={<Quiz />} />
            <Route path="finished" element={<Finished />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
