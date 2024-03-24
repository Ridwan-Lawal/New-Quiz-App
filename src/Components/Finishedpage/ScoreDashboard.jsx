import { useContext } from "react";
import AppContext from "../AppContext";
import Score from "./Score";

/* eslint-disable react/prop-types */
function ScoreDashboard({ quiz = "HTML", children }) {
  const { isDark } = useContext(AppContext);

  return (
    <div>
      <div
        className={` lg:flex mt-10 lg:mt-16 justify-between ${
          isDark ? "text-white" : "text-darkGray"
        }`}
      >
        <h1 className="text-[35px] font-light leading-[1.1] md:text-[53px] ">
          Quiz completed{" "}
          <span className="block font-semibold">You scored...</span>
        </h1>

        <Score quiz={quiz}>{children}</Score>
      </div>
    </div>
  );
}

export default ScoreDashboard;
