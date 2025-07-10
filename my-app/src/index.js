import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import "./index.css";
import"./components/login/login.css";
import Products from "./components/ecommerce/Products";
import ProductPage from "./components/ecommerce/Product";
import CartPage from "./components/ecommerce/Cart";
import Dashboard from "./components/layouts/Dashboard";
import LoginPage from "./components/login/LoginPage";
import Signup from "./components/signup/Signup";
import AuthRoute from "./routes/AuthRoute";
import PrivateRoute from "./routes/Private";
import { useNavigate } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="container">
      <h1>Home Page</h1>
      <button onClick={() => navigate("/products")}>Products</button>
    </main>
  );
};

const About = () => {
  return (
    <main className="container">
      <h1>About Page</h1>
    </main>
  );
};

const Contact = () => {
  return (
    <main className="container">
      <h1>Contact Page</h1>
    </main>
  );
};

const Profile = () => {
  return (
    <main className="container">
      <h1>Profile Page</h1>
    </main>
  );
};

const UserProfile = () => {
  const params = useParams();

  return (
    <main className="container">
      <h1>This is a profile of {params.username}</h1>
      <h2>Age: {params.age}</h2>
    </main>
  );
};

const ProfileSetting = () => {
  return (
    <main className="container">
      <h1>Profile Setting Page</h1>
    </main>
  );
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/login"
            element={
              <AuthRoute>
                <LoginPage />
              </AuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute>
                <Signup />
              </AuthRoute>
            }
          />
          <Route path="/profile">
            <Route index element={<Profile />} />
            <Route path=":username">
              <Route index element={<UserProfile />} />
              <Route path=":age" element={<UserProfile />} />
            </Route>
            {/* <Route path=":username/:age" element={<UserProfile />} /> */}
            <Route path="setting" element={<ProfileSetting />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

