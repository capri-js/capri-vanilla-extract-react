import { Route, Routes } from "react-router-dom";

import { About } from "./About";
import { Home } from "./Home";
import "./global.css";

export function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
