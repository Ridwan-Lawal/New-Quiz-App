import HomeDashboard from "../Components/Homepage/HomeDashboard";
import NavBar from "../Components/NavBar";

function Homepage() {
  return (
    <div className="max-w-[1080px] mx-auto px-10 pb-14">
      <NavBar />
      <HomeDashboard />
    </div>
  );
}

export default Homepage;
