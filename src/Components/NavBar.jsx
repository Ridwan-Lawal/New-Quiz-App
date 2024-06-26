import { useNavigate } from "react-router-dom";
import { useQuiz } from "./AppContext";

/* eslint-disable react/prop-types */
function NavBar({ quiz = "", children }) {
  const { isDark, dispatch } = useQuiz();

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between   pb-6 ">
      <section
        onClick={() => {
          navigate("/");
          dispatch({ type: "navigate/homepage" });
        }}
        className="flex cursor-pointer items-center gap-5"
      >
        {children}

        <p
          className={`text-[19px] font-medium  tracking-wide sm:text-[27px] ${
            isDark ? "text-white" : "text-almostDark"
          }`}
        >
          {quiz}
        </p>
      </section>

      {/* theme switch */}
      <section className="flex items-center gap-3.5">
        <img src={`/images/icon-sun-${isDark ? "light" : "dark"}.svg`} alt="" />
        <form
          onClick={() => dispatch({ type: "themeSwitch" })}
          className="bg-pink w-fit p-1 flex items-center gap-3  rounded-full"
        >
          <input
            type="radio"
            name="theme"
            className={`radio ${
              isDark ? "opacity-0" : "opacity-100"
            } cursor-pointer transition-all duration-600 `}
          />
          <input
            type="radio"
            name="theme"
            className={`radio ${
              !isDark ? "opacity-0" : "opacity-100"
            } cursor-pointer transition-all duration-6000 `}
          />
        </form>
        <img
          src={`/images/icon-moon-${isDark ? "light" : "dark"}.svg`}
          alt=""
        />
      </section>
    </div>
  );
}

export default NavBar;
