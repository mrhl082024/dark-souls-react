import "./styles/App.css";
import MainPage from "./component/IndexApp.jsx";
import magicData from "./data/magic.json"

function App() {
  return (
    <>
      <MainPage magicData={magicData}/>
    </>
  );
}

export default App;
