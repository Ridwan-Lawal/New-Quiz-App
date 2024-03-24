import HomeDashboard from "../Components/Homepage/HomeDashboard";
import NavBar from "../Components/NavBar";

function Homepage() {
  return (
    <div className="max-w-[1120px] mx-auto px-6  sm:px-10 pb-14 pt-11 transition-all duration-1000">
      <NavBar />
      <HomeDashboard />
    </div>
  );
}

export default Homepage;
