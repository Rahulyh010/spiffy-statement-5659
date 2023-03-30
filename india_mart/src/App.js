import "./App.css";
import Navabr from "./components/navbar";
import Allroutes from "./components/Allroutes";
import { SideBarProd } from "./components/SideBarProd";
import { ProductCard } from "./components/productCard";
import { ProductsPage } from "./Pages/ProductsPage";

function App() {
  return (
    <div className="App">
      <Allroutes />
      <Navabr />
      
      <ProductsPage/>
    </div>
  );
}

export default App;
