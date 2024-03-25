/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

const intitalValue = {
  isDark: true,
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "themeSwitch":
      return { ...state, isDark: !state.isDark };

    default:
      throw new Error("Unknown error");
  }
}

const AppContext = createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, intitalValue);
  const { isDark } = state;

  useEffect(function () {
    async function getQuiz() {
      try {
        await fetch();
      } catch (err) {
        console.log(err.message);
      }
    }
    getQuiz();
  }, []);

  return (
    <AppContext.Provider value={{ isDark, dispatch }}>
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
