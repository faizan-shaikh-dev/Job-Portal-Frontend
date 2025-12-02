import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="w-12 h-auto" />
            <h1 className="text-2xl font-bold text-emerald-500">Hunt</h1>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-base font-semibold text-emerald-800 hover:text-emerald-600 transition"
            >
              Home
            </Link>
            <Link
              to="/remote"
              className="text-base font-semibold text-emerald-800 hover:text-emerald-600 transition"
            >
              Remote Jobs
            </Link>
            <Link
              to="/hybrid"
              className="text-base font-semibold text-emerald-800 hover:text-emerald-600 transition"
            >
              Hybrid
            </Link>
            <Link
              to="/onesite"
              className="text-base font-semibold text-emerald-800 hover:text-emerald-600 transition"
            >
              Onsite
            </Link>

            <Link
              to="/saved"
              className="text-base font-semibold text-emerald-800 hover:text-emerald-700 transition"
            >
              Save Jobs
            </Link>
          </div>

          {/* Buttons + Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/login">
                <button className="text-sm text-emerald-700 hover:text-emerald-600 transition">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="text-sm px-3 py-1 border-2 rounded-md border-emerald-500 text-emerald-700 hover:bg-emerald-50 transition">
                  Sign Up
                </button>
              </Link>

              <Link to="/post">
                {" "}
                <button className="text-sm px-3 py-1 bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700 transition">
                  Post Job
                </button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
              onClick={() => setOpen(!open)}
              aria-label="menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-40 ">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute top-16 left-4 right-4 bg-white rounded-lg p-6 shadow-lg mx-auto">
            <Link
              className="block py-2 text-lg font-semibold text-emerald-800"
              to="/"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              className="block py-2 text-lg font-semibold text-emerald-800"
              to="/remote"
              onClick={() => setOpen(false)}
            >
              Remote Jobs
            </Link>
            <Link
              className="block py-2 text-lg font-semibold text-emerald-800"
              to="/hybrid"
              onClick={() => setOpen(false)}
            >
              Hybrid
            </Link>
            <Link
              className="block py-2 text-lg font-semibold text-emerald-800"
              to="/onesite"
              onClick={() => setOpen(false)}
            >
              Onsite
            </Link>

            <Link
              className="block py-2 text-lg font-semibold text-emerald-800"
              to="/saved"
              onClick={() => setOpen(false)}
            >
              Saved Jobs
            </Link>

            {/* Mobile Buttons */}
            <div className="mt-4 flex flex-col gap-3">
              <Link to="/login">
                <button className="py-2 text-emerald-700">Login</button>
              </Link>
              <Link to="/signup">
                <button className="w-full py-2 border-2 rounded-md border-emerald-500 text-emerald-700 hover:bg-emerald-50 transition">
                  Sign Up
                </button>
              </Link>
              <Link to="/post">
                {" "}
                <button className="w-full py-2 bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700 transition">
                  Post Job
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
