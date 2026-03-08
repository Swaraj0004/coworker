import { BrowserRouter, Route, Routes } from "react-router-dom";
import OwnerRoute from "./components/OwnerRoute";
import MainLayout from "./layouts/MainLayout";
import OwnerLayout from "./layouts/OwnerLayout";
import About from "./pages/About";
import CountryIndia from "./pages/CountryIndia";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SpaceDetails from "./pages/SpaceDetails";
import AddSpace from "./pages/owner/AddSpace";
import MySpaces from "./pages/owner/MySpaces";
import OwnerDashboard from "./pages/owner/OwnerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/country/india" element={<CountryIndia />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/space/:id" element={<SpaceDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

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
