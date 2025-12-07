import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { BsBookmark } from "react-icons/bs";
import { useAuth } from "../context/authContext";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { user, logout, isAdmin } = useAuth(); // isAdmin must be boolean
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getInitial = (name) => {
    if (!name) return "U";
    return name.trim().charAt(0).toUpperCase();
  };

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="w-12 h-auto" />
            <h1 className="text-2xl font-extrabold text-emerald-600">JOBHunt</h1>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-base font-semibold text-emerald-800 hover:text-emerald-600 transition">Home</Link>
            <Link to="/remote" className="text-base font-semibold text-emerald-800 hover:text-emerald-600 transition">Remote</Link>
            <Link to="/hybrid" className="text-base font-semibold text-emerald-800 hover:text-emerald-600 transition">Hybrid</Link>
            <Link to="/onesite" className="text-base font-semibold text-emerald-800 hover:text-emerald-600 transition">Onsite</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <div className="flex items-center gap-3 px-2">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">
                    {getInitial(user.name)}
                  </div>
                  <span className="font-semibold text-emerald-800">Hi, {user.name.split(" ")[0]}</span>
                </div>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full shadow-sm transition"
                  title="Logout"
                >
                  <LogOut size={16} strokeWidth={2} />
                  <span>Logout</span>
                </button>

                {isAdmin && (
                  <Link to="/post">
                    <button className="px-4 py-2 bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700 transition">
                      Post Job
                    </button>
                  </Link>
                )}

                {/* SHOW Saved ONLY for non-admin authenticated users */}
                {user && !isAdmin && (
                  <Link to="/saved" className="text-xl text-emerald-700 hover:text-emerald-900 transition">
                    <BsBookmark />
                  </Link>
                )}
              </>
            ) : (
              <>
                <Link to="/login" className="font-medium text-emerald-700 hover:text-emerald-600">Login</Link>

                <Link to="/signup">
                  <button className="px-4 py-2 border-2 border-emerald-500 rounded-md text-emerald-700 font-medium hover:bg-emerald-50 transition">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />

          <div className="absolute top-16 left-4 right-4 bg-white rounded-xl p-6 shadow-lg">
            <Link className="block py-2 text-lg font-semibold text-emerald-800" to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link className="block py-2 text-lg font-semibold text-emerald-800" to="/remote" onClick={() => setOpen(false)}>Remote</Link>
            <Link className="block py-2 text-lg font-semibold text-emerald-800" to="/hybrid" onClick={() => setOpen(false)}>Hybrid</Link>
            <Link className="block py-2 text-lg font-semibold text-emerald-800" to="/onesite" onClick={() => setOpen(false)}>Onsite</Link>

            {/* mobile saved only for non-admin user */}
            {user && !isAdmin && (
              <Link
                className="flex items-center gap-2 py-2 text-lg font-semibold text-emerald-800"
                to="/saved"
                onClick={() => setOpen(false)}
              >
                <BsBookmark />
                <span>Saved Jobs</span>
              </Link>
            )}

            <div className="mt-5 border-t pt-4">
              {user ? (
                <>
                  <div className="flex items-center gap-3 py-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                      {getInitial(user.name)}
                    </div>
                    <div>
                      <div className="font-semibold text-emerald-800">{user.name}</div>
                      <div className="text-sm text-slate-500">{user.email}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      handleLogout();
                      setOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 mt-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition"
                  >
                    <LogOut size={16} strokeWidth={2} />
                    <span>Logout</span>
                  </button>

                  {isAdmin && (
                    <Link to="/post">
                      <button className="w-full mt-3 py-2 bg-emerald-600 text-white rounded-md font-semibold hover:bg-emerald-700">
                        Post Job
                      </button>
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="w-full py-2 font-semibold text-emerald-700">Login</button>
                  </Link>

                  <Link to="/signup">
                    <button className="w-full mt-2 py-2 border-2 border-emerald-500 rounded-md font-semibold text-emerald-700">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
