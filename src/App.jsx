import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/page/home/Home";
import Layout from "./components/page/lyaout/Layout";
import Result from "./components/page/resualt/Result";
import Bella from "./components/page/bella/Bella";
import Errorpage from "./components/page/error/Errorpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/result?" element={<Result />} />
            <Route path="/bella" element={<Bella />} />
            <Route path="*" element={<Errorpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
