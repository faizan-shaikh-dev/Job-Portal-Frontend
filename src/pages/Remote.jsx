// src/pages/Remote.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Remote() {
  return (
    <section className="pt-28 pb-12 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-emerald-800">Remote Jobs</h1>
      <p className="mt-3 text-slate-600 max-w-2xl">
        Static page showing remote roles. Replace with dynamic list later.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="p-5 rounded-lg border border-emerald-100 shadow-sm">
          <h3 className="font-semibold text-emerald-700">Frontend Engineer</h3>
          <p className="text-sm text-slate-600 mt-1">React · Tailwind · Remote</p>
          <div className="mt-3">
            <span className="inline-block px-3 py-1 text-xs bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">Full time</span>
          </div>
        </article>

        <article className="p-5 rounded-lg border border-emerald-100 shadow-sm">
          <h3 className="font-semibold text-emerald-700">Product Designer</h3>
          <p className="text-sm text-slate-600 mt-1">Figma · UX · Remote</p>
          <div className="mt-3">
            <span className="inline-block px-3 py-1 text-xs bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">Contract</span>
          </div>
        </article>

        <article className="p-5 rounded-lg border border-emerald-100 shadow-sm">
          <h3 className="font-semibold text-emerald-700">Backend Engineer</h3>
          <p className="text-sm text-slate-600 mt-1">Node.js · Express · Remote</p>
          <div className="mt-3">
            <span className="inline-block px-3 py-1 text-xs bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">Part time</span>
          </div>
        </article>
      </div>

      <div className="mt-8">
        <Link to="/" className="text-emerald-700 hover:underline">← Back to home</Link>
      </div>
    </section>
  );
}
