import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../components/About";
import Add from "../components/Add";
import Update from "../components/Update";
import Home from "../components/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/add"} element={<Add />}></Route>
        <Route path={"/update/:id"} element={<Update />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
