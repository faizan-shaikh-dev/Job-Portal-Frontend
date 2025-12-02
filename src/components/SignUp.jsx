// src/pages/SignUp.jsx
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function SignUp() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  // FIXED: use name as key and value as value
  const change = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault(); // FIXED: correct spelling
    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      return toast.error("All fields are required");
    }

    try {
      setLoading(true);
      await register(form); // register handled by context (caller handles errors)
      toast.success("Registered successfully — please login");
      navigate("/login");
    } catch (err) {
      console.error("Signup Error:", err);
      toast.error(err?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center pt-28 bg-[linear-gradient(to_bottom,#e6f9f3,#ffffff)]">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-6 border border-emerald-100">
        <h2 className="text-2xl font-bold text-emerald-700 mb-2">Create account</h2>
        <p className="text-sm text-slate-500 mb-4">Start applying to remote jobs — it’s quick and free.</p>

        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="text-sm font-medium text-slate-700">Full name</label>
            <input
              name="name"
              value={form.name}
              onChange={change}
              className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 focus:ring-2 focus:ring-emerald-300 outline-none"
              placeholder="Your full name"
              type="text"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Email address</label>
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
            <label className="text-sm font-medium text-slate-700">Password</label>
            <input
              name="password"
              value={form.password}
              onChange={change}
              type="password"
              className="mt-1 w-full px-3 py-2 border rounded-md border-emerald-200 focus:ring-2 focus:ring-emerald-300 outline-none"
              placeholder="At least 6 characters"
            />
          </div>

          {/* FIXED: button must be type="submit" so form onSubmit runs */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 px-4 py-2 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition"
          >
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>

        <div className="mt-4 text-sm text-slate-600">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-700 font-medium hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
