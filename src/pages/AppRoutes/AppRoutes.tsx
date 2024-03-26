import { HashRouter, Routes, Route } from "react-router-dom";
import Mainpage from "../MainPage/MainPage";
import Header from "../../components/Navbar/Header";
import Navbar1 from "../../components/Navbar/Navbar1";
import Vybrat from "../Vybrat/Vybrat";
import Vlozit from "../Vlozit/Vlozit";
import Zustatek from "../Zustatek/Zustatek";


export default function AppRoutes() {
  return (
    <>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage/>} />
        <Route path="/vybrat" element={<Vybrat/>} />
        <Route path="/vybrat" element={<Vlozit/>} />
        <Route path="/zustatek" element={<Zustatek/>} />
        <Route path="/navbar" element={<Navbar1/>} />
      </Routes>
    </HashRouter>
    </>
  );
}