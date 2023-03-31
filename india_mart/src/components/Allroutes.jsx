import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Foodnbev from "../pages/foodnbev";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food" element={<Foodnbev />} />
    </Routes>
  );
};

export default Allroutes;
