// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const change = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.email.trim() || !form.password.trim()) {
      return toast.error("All fields are required");
    }

    try {
      setLoading(true);
      const res = await login(form);
      setForm({ email: " ", password: " " });
      toast.success("Login successful")
      navigate("/", {replace: true});
    } catch (err) {
      console.error("Login (debug) error:", err);
      toast.error(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center pt-28 bg-[linear-gradient(to_bottom,#e6f9f3,#ffffff)]">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-6 border border-emerald-100">
        <h2 className="text-2xl font-bold text-emerald-700 mb-2">
          Welcome back
        </h2>
        <p className="text-sm text-slate-500 mb-4">
          Log in to continue applying for jobs.
        </p>

        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={change}
              type="email"
              className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 focus:ring-2 focus:ring-emerald-300 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              name="password"
              value={form.password}
              onChange={change}
              type="password"
              className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 focus:ring-2 focus:ring-emerald-300 outline-none"
              placeholder="Your password"
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full mt-2 px-4 py-2 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="mt-4 text-sm text-slate-600">
          New here?{" "}
          <Link
            to="/signup"
            className="text-emerald-700 font-medium hover:underline"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
