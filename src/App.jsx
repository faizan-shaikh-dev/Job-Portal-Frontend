// src/App.jsx
import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import { Toaster } from "react-hot-toast";

// Pages
import Home from "./pages/Home";
import Remote from "./pages/Remote";
import Hybrid from "./pages/Hybrid";
import Onsite from "./pages/Onsite";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PostJob from "./pages/PostJob";
import Footer from "./components/Footer";
import SavedJobs from "./pages/SaveJobs";
import Protected from "./components/Protected";
import FeedBack from "./pages/FeedBack";
import AdminProtected from "./components/adminProtected";

export default function App() {
  const location = useLocation();
  const hideNav = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      
      {!hideNav && <Nav />}

      <div className="min-h-screen bg-white text-slate-900 antialiased">
        <Toaster position="top-right" />

        <main>
          <Routes>
           
            <Route path="/" element={<Protected><Home /></Protected>} />

            <Route path="/remote" element={<Remote />} />
            <Route path="/hybrid" element={<Hybrid />} />
            <Route path="/onesite" element={<Onsite />} />

          
            <Route path="/saved" element={<Protected><SavedJobs /></Protected>} />
            <Route path="/post" element={<AdminProtected><Protected><PostJob /></Protected></AdminProtected>} />

           
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feedback" element={<FeedBack/>}/>

          
            <Route path="*" element={<Navigate to='/' replace />} />
          </Routes>
        </main>
      </div>

      
      {!hideNav && <Footer />}
    </>
  );
}
