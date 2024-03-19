import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Finished from "./Pages/Finished";
import Quiz from "./Pages/Quiz";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <div className="bg-">
      <BrowserRouter>
        <Routes>
          <Route path="homepage" element={<Homepage />} />
          <Route path="quiz/:quizType" element={<Quiz />} />
          <Route path="finished" element={<Finished />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
