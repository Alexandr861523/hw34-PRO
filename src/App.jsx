import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import HotelsPage from "./pages/HotelsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;