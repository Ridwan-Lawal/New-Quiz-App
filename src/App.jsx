import { AppProvider } from "./Components/AppContext";
import MainAppContent from "./Components/MainAppContent";

function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}

export default App;
