import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import OwnerLayout from "./layouts/OwnerLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Favorites from "./pages/Favorites";
import SpaceDetails from "./pages/SpaceDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";

import OwnerDashboard from "./pages/owner/OwnerDashboard";
import AddSpace from "./pages/owner/AddSpace";
import MySpaces from "./pages/owner/MySpaces";

import OwnerRoute from "./components/OwnerRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/space/:id" element={<SpaceDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* 🔐 Owner Dashboard (Protected) */}
        <Route
          path="/owner"
          element={
            <OwnerRoute>
              <OwnerLayout />
            </OwnerRoute>
          }
        >
          <Route path="dashboard" element={<OwnerDashboard />} />
          <Route path="add-space" element={<AddSpace />} />
          <Route path="my-spaces" element={<MySpaces />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
