import { Route, Routes } from "react-router-dom";
import { ProductCard } from "./productCard";

const Allroutes = () => {
  return <div>
  <Routes>
    <Route path="/productscard" element={<ProductCard/>}/>
  </Routes>
  </div>;
};

export default Allroutes;
