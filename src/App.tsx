import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
import OwnerRoute from "./components/OwnerRoute";
import UserRoute from "./components/UserRoute";
import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";
import OwnerLayout from "./layouts/OwnerLayout";
import UserLayout from "./layouts/UserLayout";
import About from "./views/About";
import Auth from "./views/Auth";
import CountryIndia from "./views/CountryIndia";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import HowItWorks from "./views/HowItWorks";
import SpaceDetails from "./views/SpaceDetails";
import AdminDashboard from "./views/admin/AdminDashboard";
import AdminOwners from "./views/admin/AdminOwners";
import AdminReviews from "./views/admin/AdminReviews";
import AdminSpaces from "./views/admin/AdminSpaces";
import AddSpace from "./views/owner/AddSpace";
import MySpaces from "./views/owner/MySpaces";
import OwnerDashboard from "./views/owner/OwnerDashboard";
import OwnerSettings from "./views/owner/OwnerSettings";
import UserDashboard from "./views/user/UserDashboard";
import UserFavoriteSpaces from "./views/user/UserFavoriteSpaces";
import UserSearchSpace from "./views/user/UserSearchSpace";
import UserSettings from "./views/user/UserSettings";
import UserYourSpaces from "./views/user/UserYourSpaces";

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
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="spaces" element={<AdminSpaces />} />
          <Route path="reviews" element={<AdminReviews />} />
          <Route path="owners" element={<AdminOwners />} />
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
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
          <Route path="settings" element={<OwnerSettings />} />
          <Route path="notifications" element={<Navigate to="/owner/settings?tab=notifications" replace />} />
          <Route path="profile" element={<Navigate to="/owner/settings?tab=profile" replace />} />
          <Route index element={<Navigate to="/owner/dashboard" replace />} />
        </Route>

        <Route
          path="/user"
          element={
            <UserRoute>
              <UserLayout />
            </UserRoute>
          }
        >
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="search-space" element={<UserSearchSpace />} />
          <Route path="favorite-spaces" element={<UserFavoriteSpaces />} />
          <Route path="your-spaces" element={<UserYourSpaces />} />
          <Route path="settings" element={<UserSettings />} />
          <Route path="notifications" element={<Navigate to="/user/settings?tab=notifications" replace />} />
          <Route index element={<Navigate to="/user/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

