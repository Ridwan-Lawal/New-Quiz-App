import ScoreDashboard from "../Components/Finishedpage/ScoreDashboard";
import NavBar from "../Components/NavBar";

function Finished() {
  return (
    <div className="pt-6 sm:pt-9 max-w-[1120px] mx-auto px-6  sm:px-10 pb-14 transition-all duration-1000">
      <NavBar quiz="HTML">
        <section className="border py-1.5 px-1.5 rounded-md">
          <img src="/src/assets/icon-html.svg" className="w-8" alt="" />
        </section>
      </NavBar>

      <ScoreDashboard>
        <section className="border py-1.5 px-1.5 rounded-md">
          <img src="/src/assets/icon-html.svg" className="w-8" alt="" />
        </section>
      </ScoreDashboard>
    </div>
  );
}

export default Finished;
