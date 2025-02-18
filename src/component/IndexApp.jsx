import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Homepage from "./HomePage";
import SorceryList from "./SorceryList";

const IndexApp = () => {
  //Javascript code goes here--
  return (
    //HTML code goes here--
    <div id="main-page">
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="SorceryList" element={<SorceryList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default IndexApp;
