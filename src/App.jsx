import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar.jsx";
import HomePage from "./component/HomePage.jsx";
import SorceryList from "./component/SorceryList.jsx";
import MiracleList from "./component/MiracleList.jsx";
import PyromancyList from "./component/PyromancyList.jsx";
import MagicWindow from "./component/MagicWindow.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="SorceryList" element={<SorceryList />} />
          <Route path="MiracleList" element={<MiracleList />} />
          <Route path="PyromancyList" element={<PyromancyList />} />
          <Route path="MagicWindow" element={<MagicWindow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
