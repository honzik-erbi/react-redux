import { HashRouter, Routes, Route } from "react-router-dom";
import Mainpage from "../MainPage/MainPage";
import Navbar from "../../components/Navbar/Navbar";
import PizzaOrder from "../PizzaOrder/PizzaOrder";
import Cart from "../../components/Cart/Cart";

export default function AppRoutes() {
  return (
    <>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage/>} />
        <Route path="/pizzaorder" element={<PizzaOrder/>} />
      </Routes>
      <Cart />
    </HashRouter>
    </>
  );
}