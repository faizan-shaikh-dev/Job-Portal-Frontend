// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";


// Pages
import Home from "./pages/Home";
import Remote from "./pages/Remote";
import Hybrid from "./pages/Hybrid";
import Onsite from "./pages/Onsite";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PostJob from "./pages/PostJob";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Nav />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/remote" element={<Remote />} />
          <Route path="/hybrid" element={<Hybrid />} />
          <Route path="/onesite" element={<Onsite />} />

          {/* Auth */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* fallback */}
          <Route path="*" element={<Home />} />
          <Route path="/post" element={<PostJob/>}/>
        </Routes>
      </main>
    </div>
    <Footer/>
    </>
  );
}
