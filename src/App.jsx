import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout"; // Import Layout Baru
import Loading from "./components/Loading";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Orders = lazy(() => import("./pages/Orders"));
const Customers = lazy(() => import("./pages/Customers"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Forgot = lazy(() => import("./pages/auth/Forgot"));
const LandingPage = lazy(() => import("./pages/LandingPage")); // Import Page Baru

import "./assets/tailwind.css";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* GUEST / LANDING PAGE ROUTE */}
        <Route path="/guest" element={<GuestLayout />}>
          <Route index element={<LandingPage />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
        </Route>

        {/* AUTH ROUTES */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* 404 NOT FOUND */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;