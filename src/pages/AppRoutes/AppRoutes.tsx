import { HashRouter, Routes, Route } from "react-router-dom";
import Mainpage from "../MainPage/MainPage";
import Navbar from "../../components/Navbar/Navbar";
import PizzaOrder from "../PizzaOrder/PizzaOrder";
import Cart from "../../components/Cart/Cart";
import PcOrder from "../PcOrder/PcOrder";

export default function AppRoutes() {
  return (
    <>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage/>} />
        <Route path="/pizzaorder" element={<PizzaOrder/>} />
        <Route path="/pcorder" element={<PcOrder/>} />
      </Routes>
      <Cart />
    </HashRouter>
    </>
  );
}