import "./styles/App.css";
import IndexApp from "./component/IndexApp.jsx";
import magicData from "./data/magic.json"

function App() {
  return (
    <>
      <IndexApp magicData={magicData}/>
    </>
  );
}

export default App;
