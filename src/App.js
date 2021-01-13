import logo from "./logo.svg";
//import "./App.css";
import CityDisplay from "./CityDisplay";
import "./zip-search.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Zip Search</h1>
      </div>

      <CityDisplay />
    </div>
  );
}

export default App;
