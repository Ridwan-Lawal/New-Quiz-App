/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

const intitalValue = {
  isDark: true,
  status: "loading",
  errMessage: "",
  questionIndex: 0,
  quizData: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "themeSwitch":
      return { ...state, isDark: !state.isDark };

    case "dataReady":
      return { ...state, quizData: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error", errMessage: action.payload };

    default:
      throw new Error("Unknown error");
  }
}

const AppContext = createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, intitalValue);
  const { isDark, quizData, questionIndex } = state;

  useEffect(function () {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function getQuiz() {
      try {
        const res = await fetch(`http://localhost:5000/quizzes`);
        if (!res.ok)
          throw new Error("Something went wrong fetching data", { signal });

        const data = await res.json();
        dispatch({ type: "dataReady", payload: data });
      } catch (err) {
        console.log(err);
        if (err.name === "AbortError") return;
        dispatch({ type: "dataFailed", payload: err.message });
      }
    }
    getQuiz();

    return () => abortController.abort();
  }, []);

  return (
    <AppContext.Provider value={{ isDark, dispatch, quizData, questionIndex }}>
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
