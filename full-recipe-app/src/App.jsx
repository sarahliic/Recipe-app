import Routers from "./components/Routers";
import "./App.css";
import Pages from "./Pages/Pages";
import Catagories from "./components/Catagories";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div>
        <Search />
        <Catagories />
      </div>
      <Routers></Routers>
    </>
  );
}

export default App;
