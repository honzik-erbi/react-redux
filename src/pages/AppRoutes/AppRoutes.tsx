import { HashRouter, Routes, Route } from "react-router-dom";
import Mainpage from "../MainPage/MainPage";

export default function AppRoutes() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Mainpage/>} />
      </Routes>
    </HashRouter>
    </>
  );
}