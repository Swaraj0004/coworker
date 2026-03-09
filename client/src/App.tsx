import { BrowserRouter, Route, Routes } from "react-router-dom";
import OwnerRoute from "./components/OwnerRoute";
import MainLayout from "./layouts/MainLayout";
import OwnerLayout from "./layouts/OwnerLayout";
import About from "./pages/About";
import Auth from "./pages/Auth";
import CountryIndia from "./pages/CountryIndia";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import SpaceDetails from "./pages/SpaceDetails";
import AddSpace from "./pages/owner/AddSpace";
import MySpaces from "./pages/owner/MySpaces";
import OwnerDashboard from "./pages/owner/OwnerDashboard";
import OwnerNotifications from "./pages/owner/OwnerNotifications";
import OwnerProfile from "./pages/owner/OwnerProfile";

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
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
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
          <Route path="notifications" element={<OwnerNotifications />} />
          <Route path="profile" element={<OwnerProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
