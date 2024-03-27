/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import Quizzes from "../localData/data.json";

const intitalValue = {
  isDark: JSON.parse(localStorage.getItem("testTheme")),
  status: "loading",
  errMessage: "",
  questionIndex: 0,
  optionClicked: "",
  correctAnswer: "",
  isSubmitClicked: false,
  quizData: Quizzes,
  quizScore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "themeSwitch":
      return { ...state, isDark: !state.isDark };

    case "dataReady":
      return { ...state, quizData: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error", errMessage: action.payload };

    case "optionClicked":
      return { ...state, optionClicked: action.payload };

    case "answerSubmit":
      return {
        ...state,
        isSubmitClicked: true,
        correctAnswer: action.payload,
        quizScore:
          state.optionClicked === action.payload
            ? state.quizScore + 1
            : state.quizScore,
      };

    case "nextQuestion":
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
        optionClicked: "",
        correctAnswer: "",
        isSubmitClicked: false,
      };

    case "playAgain":
      return {
        ...intitalValue,
        status: "ready",
        quizData: state.quizData,
      };

    default:
      throw new Error("Unknown error");
  }
}

const AppContext = createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("quizStateValue"))
  );
  const {
    isDark,
    quizData,
    questionIndex,
    optionClicked,
    isSubmitClicked,
    quizScore,
  } = state;

  //  Effect to store current theme in the  local storage
  useEffect(
    function () {
      localStorage.setItem("testTheme", JSON.stringify(isDark));
    },
    [isDark]
  );

  // Effect to store the stateValue in the localStorage
  useEffect(
    function () {
      localStorage.setItem("quizStateValue", JSON.stringify(state));
    },
    [state]
  );

  return (
    <AppContext.Provider
      value={{
        isDark,
        dispatch,
        quizData,
        questionIndex,
        optionClicked,
        isSubmitClicked,
        quizScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("AppContext was used outside of the post provider");

  return context;
}

export { AppContext, AppProvider, useQuiz, intitalValue };
