/* eslint-disable react/prop-types */
import { useContext } from "react";
import ButtonPurple from "../ButtonPurple";
import AppContext from "../AppContext";

function Score({ children, quiz }) {
  const { isDark } = useContext(AppContext);

  return (
    <div>
      <div
        className={` flex flex-col items-center py-12 gap-6 rounded-lg mt-11 ${
          isDark ? "bg-darkGray" : "bg-white"
        } `}
      >
        <section className="flex items-center gap-5">
          {children}
          <p
            className={`text-[19px] font-medium  tracking-wide sm:text-[27px] ${
              isDark ? "text-white" : "text-almostDark"
            } `}
          >
            {quiz}
          </p>
        </section>

        <section className="text-center">
          <h2 className="font-medium text-[85px] sm:text-[130px]">0</h2>

          <p className="text-lg sm:text-2xl">out of X</p>
        </section>
      </div>
      <ButtonPurple btnContent="Play Again" />
    </div>
  );
}

export default Score;
