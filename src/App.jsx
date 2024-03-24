import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Finished from "./Pages/Finished";
import Quiz from "./Pages/Quiz";
import PageNotFound from "./Pages/PageNotFound";
import { useReducer } from "react";
import AppContext from "./Components/AppContext";

// start fetching data

const intitalValue = {
  isDark: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "themeSwitch":
      return { ...state, isDark: !state.isDark };

    default:
      throw new Error("Unknown error");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, intitalValue);

  const { isDark } = state;

  console.log(dispatch);
  return (
    <AppContext.Provider value={{ isDark, dispatch }}>
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
              <Route path="finished" element={<Finished />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
