import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SpaceDetails from "./pages/SpaceDetails";
import Favorites from "./pages/Favorites";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <BrowserRouter>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/space/:id" element={<SpaceDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
