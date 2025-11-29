// src/pages/Onsite.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Onsite() {
  return (
    <section className="pt-28 pb-12 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-emerald-800">Onsite Jobs</h1>
      <p className="mt-3 text-slate-600 max-w-2xl">
        Onsite roles at company locations. Static content for layout.
      </p>

      <div className="mt-6">
        <div className="p-5 rounded-lg border border-emerald-100 shadow-sm">
          <h3 className="font-semibold text-emerald-700">Backend (Onsite)</h3>
          <p className="text-sm text-slate-600 mt-1">Full time · Bengaluru</p>
        </div>
      </div>

      <div className="mt-8">
        <Link to="/" className="text-emerald-700 hover:underline">← Back to home</Link>
      </div>
    </section>
  );
}
