import "./App.css";
import { Footeer, Header } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
 
  return (
    <div className="App dark:bg-slate-800">
      <Header />
      <AllRoutes  />
      <Footeer />
    </div>
  );
}

export default App;
